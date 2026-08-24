export const runtime = "nodejs";

const allowedTimes=new Map([["09:00","9:00 AM"],["10:30","10:30 AM"],["12:00","12:00 PM"],["13:30","1:30 PM"],["15:00","3:00 PM"]]);
function clean(value,max=500){return String(value||"").trim().slice(0,max)}
function escapeHtml(value){return clean(value,3000).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}
function validEmail(value){return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)}
function formatDate(dateString){return new Intl.DateTimeFormat("en-CA",{weekday:"long",year:"numeric",month:"long",day:"numeric",timeZone:"America/Toronto"}).format(new Date(dateString+"T12:00:00"))}
function resendConfig(){
 const apiKey=process.env.RESEND_API_KEY;
 const from=process.env.RESEND_FROM_EMAIL||process.env.CONTACT_FROM_EMAIL||"CladCan <onboarding@resend.dev>";
 const to=process.env.CONTACT_TO_EMAIL||"info@cladca.ca";
 return {apiKey,from,to};
}
async function sendWithResend(payload,apiKey){
 const response=await fetch("https://api.resend.com/emails",{
  method:"POST",
  headers:{Authorization:`Bearer ${apiKey}`,"Content-Type":"application/json"},
  body:JSON.stringify(payload),
 });
 const data=await response.json().catch(()=>({}));
 if(!response.ok){console.error("Resend email error:",data);throw new Error(data?.message||"Resend could not send the email.")}
 return data;
}

export async function POST(request){
 try{
  const contentType=request.headers.get("content-type")||"";
  if(!contentType.includes("multipart/form-data")&&!contentType.includes("application/x-www-form-urlencoded")) return Response.json({message:"Unsupported request format."},{status:415});
  const form=await request.formData();
  if(clean(form.get("website"),200)) return Response.json({message:"Your showroom visit has been confirmed."});

  const firstName=clean(form.get("firstName"),80),lastName=clean(form.get("lastName"),80),email=clean(form.get("email"),160),phone=clean(form.get("phone"),40),date=clean(form.get("date"),10),time=clean(form.get("time"),5),notes=clean(form.get("notes"),2000);
  if(!firstName||!lastName||!email||!date||!time) return Response.json({message:"Please complete all required fields."},{status:400});
  if(!validEmail(email)||!allowedTimes.has(time)||!/^\d{4}-\d{2}-\d{2}$/.test(date)) return Response.json({message:"Please enter a valid email, date and time."},{status:400});

  const visitDate=new Date(date+"T12:00:00"),today=new Date(); today.setHours(0,0,0,0);
  if(Number.isNaN(visitDate.getTime())||visitDate<=today||visitDate.getDay()===0||visitDate.getDay()===6) return Response.json({message:"Please choose a future weekday."},{status:400});

  const {apiKey,from,to}=resendConfig();
  if(!apiKey) return Response.json({message:"Showroom booking is not configured. RESEND_API_KEY is missing from the server environment."},{status:503});

  const dateLabel=formatDate(date),timeLabel=allowedTimes.get(time);
  await sendWithResend({
    from,
    to:[to],
    reply_to:email,
    subject:`Showroom visit: ${dateLabel} at ${timeLabel}`,
    text:`Showroom visit request\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone||"Not provided"}\nDate: ${dateLabel}\nTime: ${timeLabel}\nNotes: ${notes||"None"}`,
    html:`<h2>Showroom visit request</h2><p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Phone:</strong> ${escapeHtml(phone||"Not provided")}</p><p><strong>Date:</strong> ${escapeHtml(dateLabel)}</p><p><strong>Time:</strong> ${escapeHtml(timeLabel)}</p><p><strong>Notes:</strong><br>${escapeHtml(notes||"None").replace(/\n/g,"<br>")}</p>`,
  },apiKey);

  try{
    await sendWithResend({
      from,
      to:[email],
      reply_to:to,
      subject:"Your CladCan showroom visit is confirmed",
      text:`Hello ${firstName},\n\nYour showroom visit is confirmed for ${dateLabel} at ${timeLabel}.\n\nCladCan Building Envelope & Façade Contractors\n5000 Dufferin St, Unit K\nNorth York, ON M3H 5T5\n\nIf you need to make a change, call +1 (844) 924-3030.\n\nCladCan`,
      html:`<p>Hello ${escapeHtml(firstName)},</p><p>Your showroom visit is confirmed for <strong>${escapeHtml(dateLabel)} at ${escapeHtml(timeLabel)}</strong>.</p><p>CladCan Building Envelope &amp; Façade Contractors<br>5000 Dufferin St, Unit K<br>North York, ON M3H 5T5</p><p>If you need to make a change, call <a href="tel:+18449243030">+1 (844) 924-3030</a>.</p><p>CladCan</p>`,
    },apiKey);
  }catch(confirmError){
    console.warn("Showroom confirmation email could not be sent:",confirmError);
  }

  return Response.json({message:`Your showroom visit request has been sent for ${dateLabel} at ${timeLabel}.`});
 }catch(error){console.error("Showroom booking error:",error);return Response.json({message:error?.message||"We could not confirm your visit. Please try again or call +1 (844) 924-3030."},{status:500})}
}
