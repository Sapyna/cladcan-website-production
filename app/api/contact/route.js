import { NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX_FILE_SIZE = 8 * 1024 * 1024;
const MAX_TOTAL_SIZE = 15 * 1024 * 1024;
const ALLOWED_TYPES = new Set([
  "application/pdf","image/jpeg","image/png","image/webp","image/heic","image/heif",
]);

function clean(value,max=2000){return String(value??"").replace(/\0/g,"").trim().slice(0,max)}

async function sendToWeb3Forms(formData){
  const response=await fetch("https://api.web3forms.com/submit",{
    method:"POST",
    body:formData,
  });
  const data=await response.json().catch(()=>({}));
  if(!response.ok||data?.success===false){
    console.error("Web3Forms contact error:",data);
    throw new Error(data?.message||"Web3Forms could not send the inquiry.");
  }
  return data;
}

export async function POST(request){
 try{
  const contentType=request.headers.get("content-type")||"";
  if(!contentType.includes("multipart/form-data")&&!contentType.includes("application/x-www-form-urlencoded")){
    return NextResponse.json({ok:false,message:"Unsupported request format."},{status:415});
  }

  const form=await request.formData();
  if(clean(form.get("website"))){
    return NextResponse.json({ok:true,message:"Thank you. Your information has been sent. A member of the CladCan team will contact you soon."});
  }

  const firstName=clean(form.get("firstName"),100);
  const lastName=clean(form.get("lastName"),100);
  const email=clean(form.get("email"),200);
  const phone=clean(form.get("phone"),100);
  const inquiryType=clean(form.get("inquiryType"),100);
  const location=clean(form.get("location"),300);
  const projectType=clean(form.get("projectType"),150);
  const stage=clean(form.get("stage"),200);
  const details=clean(form.get("details"),6000);

  if(!firstName||!lastName||!email){
    return NextResponse.json({ok:false,message:"Please complete the required name and email fields."},{status:400});
  }
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    return NextResponse.json({ok:false,message:"Please enter a valid email address."},{status:400});
  }

  const files=form.getAll("attachments").filter(item=>item&&typeof item==="object"&&"arrayBuffer" in item&&item.size>0);
  let totalSize=0;
  for(const file of files){
    if(file.size>MAX_FILE_SIZE){
      return NextResponse.json({ok:false,message:`${file.name} is larger than the 8 MB file limit.`},{status:400});
    }
    totalSize+=file.size;
    if(totalSize>MAX_TOTAL_SIZE){
      return NextResponse.json({ok:false,message:"The combined attachment size must be 15 MB or less."},{status:400});
    }
    if(file.type&&!ALLOWED_TYPES.has(file.type)){
      return NextResponse.json({ok:false,message:`${file.name} is not an accepted PDF or image format.`},{status:400});
    }
  }

  const accessKey=process.env.WEB3FORMS_ACCESS_KEY;
  if(!accessKey){
    return NextResponse.json({ok:false,message:"Email delivery is not configured. WEB3FORMS_ACCESS_KEY is missing from the server environment."},{status:503});
  }

  const outgoing=new FormData();
  outgoing.set("access_key",accessKey);
  outgoing.set("subject",`CladCan website inquiry — ${inquiryType||"Project"} — ${firstName} ${lastName}`);
  outgoing.set("from_name","CladCan Website");
  outgoing.set("name",`${firstName} ${lastName}`);
  outgoing.set("email",email);
  outgoing.set("phone",phone);
  outgoing.set("Inquiry Type",inquiryType);
  outgoing.set("Project Location",location);
  outgoing.set("Project Type",projectType);
  outgoing.set("Project Stage",stage);
  outgoing.set("message",details||"No additional project details provided.");
  outgoing.set("botcheck","");

  for(const file of files){
    outgoing.append("attachment",file,file.name||"attachment");
  }

  await sendToWeb3Forms(outgoing);

  return NextResponse.json({ok:true,message:"Thank you. Your information has been sent. A member of the CladCan team will contact you soon."});
 }catch(error){
  console.error("Contact form error:",error);
  return NextResponse.json({ok:false,message:error?.message||"We could not send your inquiry. Please try again or contact CladCan directly."},{status:500});
 }
}
