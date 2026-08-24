import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const MAX_FILE_SIZE = 8 * 1024 * 1024;
const MAX_TOTAL_SIZE = 15 * 1024 * 1024;
const ALLOWED_TYPES = new Set([
  "application/pdf","image/jpeg","image/png","image/webp","image/heic","image/heif",
]);

function clean(value,max=2000){return String(value??"").replace(/\0/g,"").trim().slice(0,max)}
function escapeHtml(value){return clean(value,10000).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}

function mailConfig(){
  const user=process.env.SMTP_USER||process.env.GOOGLE_WORKSPACE_EMAIL||process.env.GMAIL_USER;
  const pass=process.env.SMTP_PASS||process.env.GOOGLE_APP_PASSWORD||process.env.GMAIL_APP_PASSWORD;
  const host=process.env.SMTP_HOST||(user&&pass?"smtp.gmail.com":"");
  const port=Number(process.env.SMTP_PORT||587);
  const from=process.env.CONTACT_FROM_EMAIL||user;
  const to=process.env.CONTACT_TO_EMAIL||"info@cladca.ca";
  return {user,pass,host,port,from,to};
}

export async function POST(request){
 try{
  const contentType=request.headers.get("content-type")||"";
  if(!contentType.includes("multipart/form-data")&&!contentType.includes("application/x-www-form-urlencoded")) return NextResponse.json({ok:false,message:"Unsupported request format."},{status:415});
  const form=await request.formData();
  if(clean(form.get("website"))) return NextResponse.json({ok:true,message:"Thank you. Your information has been sent. A member of the CladCan team will contact you soon."});

  const firstName=clean(form.get("firstName"),100),lastName=clean(form.get("lastName"),100),email=clean(form.get("email"),200),phone=clean(form.get("phone"),100),inquiryType=clean(form.get("inquiryType"),100),location=clean(form.get("location"),300),projectType=clean(form.get("projectType"),150),stage=clean(form.get("stage"),200),details=clean(form.get("details"),6000);
  if(!firstName||!lastName||!email) return NextResponse.json({ok:false,message:"Please complete the required name and email fields."},{status:400});
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ok:false,message:"Please enter a valid email address."},{status:400});

  const files=form.getAll("attachments").filter(item=>item&&typeof item==="object"&&"arrayBuffer" in item&&item.size>0);
  let totalSize=0; const attachments=[];
  for(const file of files){
   if(file.size>MAX_FILE_SIZE) return NextResponse.json({ok:false,message:`${file.name} is larger than the 8 MB file limit.`},{status:400});
   totalSize+=file.size;
   if(totalSize>MAX_TOTAL_SIZE) return NextResponse.json({ok:false,message:"The combined attachment size must be 15 MB or less."},{status:400});
   if(file.type&&!ALLOWED_TYPES.has(file.type)) return NextResponse.json({ok:false,message:`${file.name} is not an accepted PDF or image format.`},{status:400});
   attachments.push({filename:file.name||"attachment",content:Buffer.from(await file.arrayBuffer()),contentType:file.type||undefined});
  }

  const {host,port,user,pass,from,to}=mailConfig();
  if(!user||!pass||!from){
   console.error("Contact form mail credentials are incomplete.");
   return NextResponse.json({ok:false,message:"Email delivery needs the Google Workspace email and app password configured on the server."},{status:503});
  }
  const transporter=nodemailer.createTransport({host,port,secure:port===465,auth:{user,pass}});

  const rows=[["Inquiry type",inquiryType],["Name",`${firstName} ${lastName}`],["Email",email],["Phone",phone],["Project location",location],["Project type",projectType],["Project stage",stage]];
  const htmlRows=rows.filter(([,v])=>v).map(([label,value])=>`<tr><td style="padding:8px 12px;border-bottom:1px solid #e8ebed;color:#66747d;font-size:13px;">${escapeHtml(label)}</td><td style="padding:8px 12px;border-bottom:1px solid #e8ebed;font-weight:600;font-size:13px;">${escapeHtml(value)}</td></tr>`).join("");
  const html=`<div style="font-family:Arial,sans-serif;color:#14242d;max-width:720px;margin:0 auto;"><div style="background:#071c29;color:white;padding:24px 28px;"><div style="font-size:12px;letter-spacing:2px;color:#d7a25c;font-weight:700;">CLADCAN WEBSITE INQUIRY</div><h1 style="font-size:26px;margin:8px 0 0;">${escapeHtml(firstName)} ${escapeHtml(lastName)}</h1></div><table style="width:100%;border-collapse:collapse;margin-top:18px;">${htmlRows}</table><div style="padding:20px 12px;"><div style="font-size:12px;letter-spacing:1.5px;color:#8b6b41;font-weight:700;margin-bottom:8px;">PROJECT DETAILS</div><div style="white-space:pre-wrap;line-height:1.6;font-size:14px;">${details?escapeHtml(details):"No additional project details provided."}</div></div></div>`;

  await transporter.sendMail({from:`CladCan Website <${from}>`,to,replyTo:email,subject:`Website inquiry — ${inquiryType||"Project"} — ${firstName} ${lastName}`,html,text:["CLADCAN WEBSITE INQUIRY",`Inquiry type: ${inquiryType}`,`Name: ${firstName} ${lastName}`,`Email: ${email}`,`Phone: ${phone}`,`Project location: ${location}`,`Project type: ${projectType}`,`Project stage: ${stage}`,"","Project details:",details||"No additional project details provided."].join("\n"),attachments});
  return NextResponse.json({ok:true,message:"Thank you. Your information has been sent. A member of the CladCan team will contact you soon."});
 }catch(error){console.error("Contact form error:",error);return NextResponse.json({ok:false,message:"We could not send your inquiry. Please try again or contact CladCan directly."},{status:500})}
}
