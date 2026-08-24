export const runtime = "nodejs";

const allowedTimes=new Map([["09:00","9:00 AM"],["10:30","10:30 AM"],["12:00","12:00 PM"],["13:30","1:30 PM"],["15:00","3:00 PM"]]);
function clean(value,max=500){return String(value||"").trim().slice(0,max)}
function validEmail(value){return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)}
function formatDate(dateString){return new Intl.DateTimeFormat("en-CA",{weekday:"long",year:"numeric",month:"long",day:"numeric",timeZone:"America/Toronto"}).format(new Date(dateString+"T12:00:00"))}

async function sendToWeb3Forms(payload){
 const response=await fetch("https://api.web3forms.com/submit",{
  method:"POST",
  headers:{"Content-Type":"application/json",Accept:"application/json"},
  body:JSON.stringify(payload),
 });
 const data=await response.json().catch(()=>({}));
 if(!response.ok||data?.success===false){
  console.error("Web3Forms showroom error:",data);
  throw new Error(data?.message||"Web3Forms could not send the showroom request.");
 }
 return data;
}

export async function POST(request){
 try{
  const contentType=request.headers.get("content-type")||"";
  if(!contentType.includes("multipart/form-data")&&!contentType.includes("application/x-www-form-urlencoded")) return Response.json({message:"Unsupported request format."},{status:415});
  const form=await request.formData();
  if(clean(form.get("website"),200)) return Response.json({message:"Your showroom visit request has been sent."});

  const firstName=clean(form.get("firstName"),80);
  const lastName=clean(form.get("lastName"),80);
  const email=clean(form.get("email"),160);
  const phone=clean(form.get("phone"),40);
  const date=clean(form.get("date"),10);
  const time=clean(form.get("time"),5);
  const notes=clean(form.get("notes"),2000);

  if(!firstName||!lastName||!email||!date||!time) return Response.json({message:"Please complete all required fields."},{status:400});
  if(!validEmail(email)||!allowedTimes.has(time)||!/^\d{4}-\d{2}-\d{2}$/.test(date)) return Response.json({message:"Please enter a valid email, date and time."},{status:400});

  const visitDate=new Date(date+"T12:00:00"),today=new Date(); today.setHours(0,0,0,0);
  if(Number.isNaN(visitDate.getTime())||visitDate<=today||visitDate.getDay()===0||visitDate.getDay()===6) return Response.json({message:"Please choose a future weekday."},{status:400});

  const accessKey=process.env.WEB3FORMS_ACCESS_KEY;
  if(!accessKey) return Response.json({message:"Showroom booking is not configured. WEB3FORMS_ACCESS_KEY is missing from the server environment."},{status:503});

  const dateLabel=formatDate(date);
  const timeLabel=allowedTimes.get(time);

  await sendToWeb3Forms({
    access_key:accessKey,
    subject:`CladCan showroom visit — ${dateLabel} at ${timeLabel}`,
    from_name:"CladCan Website",
    name:`${firstName} ${lastName}`,
    email,
    phone,
    "Preferred Date":dateLabel,
    "Preferred Time":timeLabel,
    message:notes||"No additional notes provided.",
    botcheck:"",
  });

  return Response.json({message:`Your showroom visit request has been sent for ${dateLabel} at ${timeLabel}. A member of the CladCan team will confirm the appointment.`});
 }catch(error){
  console.error("Showroom booking error:",error);
  return Response.json({message:error?.message||"We could not send your showroom request. Please try again or call +1 (844) 924-3030."},{status:500});
 }
}
