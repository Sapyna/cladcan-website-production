import { NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX_FILE_SIZE = 8 * 1024 * 1024;
const MAX_TOTAL_SIZE = 10 * 1024 * 1024;
const ALLOWED_TYPES = new Set([
  "application/pdf","image/jpeg","image/png","image/webp","image/heic","image/heif",
]);
const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/info@cladcan.ca";

function clean(value,max=2000){return String(value??"").replace(/\0/g,"").trim().slice(0,max)}

async function sendToFormSubmit(formData){
  const response=await fetch(FORMSUBMIT_ENDPOINT,{
    method:"POST",
    headers:{Accept:"application/json"},
    body:formData,
  });
  const data=await response.json().catch(()=>({}));
  if(!response.ok||data?.success===false){
    console.error("FormSubmit contact error:",data);
    throw new Error(data?.message||"FormSubmit could not send the inquiry.");
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
      return NextResponse.json({ok:false,message:"The combined attachment size must be 10 MB or less."},{status:400});
    }
    if(file.type&&!ALLOWED_TYPES.has(file.type)){
      return NextResponse.json({ok:false,message:`${file.name} is not an accepted PDF or image format.`},{status:400});
    }
  }

  const outgoing=new FormData();
  outgoing.set("_subject",`CladCan website inquiry — ${inquiryType||"Project"} — ${firstName} ${lastName}`);
  outgoing.set("_template","table");
  outgoing.set("_replyto",email);
  outgoing.set("_honey","");
  outgoing.set("Name",`${firstName} ${lastName}`);
  outgoing.set("Email",email);
  outgoing.set("Phone",phone);
  outgoing.set("Inquiry Type",inquiryType);
  outgoing.set("Project Location",location);
  outgoing.set("Project Type",projectType);
  outgoing.set("Project Stage",stage);
  outgoing.set("Project Details",details||"No additional project details provided.");

  for(const file of files){
    outgoing.append("attachment",file,file.name||"attachment");
  }

  await sendToFormSubmit(outgoing);

  return NextResponse.json({ok:true,message:"Thank you. Your information has been sent. A member of the CladCan team will contact you soon."});
 }catch(error){
  console.error("Contact form error:",error);
  return NextResponse.json({ok:false,message:error?.message||"We could not send your inquiry. Please try again or contact CladCan directly."},{status:500});
 }
}
