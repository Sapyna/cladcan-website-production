import {NextResponse} from "next/server";
import nodemailer from "nodemailer";

export const runtime="nodejs";

function clean(value,max=2000){return String(value??"").replace(/\0/g,"").trim().slice(0,max)}

export async function POST(request){
  try{
    const form=await request.formData();
    if(clean(form.get("website"))) return NextResponse.json({ok:true,message:"Thanks — your showroom appointment request has been sent."});

    const firstName=clean(form.get("firstName"),100);
    const lastName=clean(form.get("lastName"),100);
    const email=clean(form.get("email"),200);
    const phone=clean(form.get("phone"),100);
    const date=clean(form.get("date"),20);
    const time=clean(form.get("time"),40);
    const details=clean(form.get("details"),4000);

    if(!firstName||!lastName||!email||!date||!time){
      return NextResponse.json({ok:false,message:"Please complete your name, email, preferred date and preferred time."},{status:400});
    }
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      return NextResponse.json({ok:false,message:"Please enter a valid email address."},{status:400});
    }
    const selected=new Date(`${date}T12:00:00`);
    if(Number.isNaN(selected.getTime())||selected.getDay()===0||selected.getDay()===6){
      return NextResponse.json({ok:false,message:"Please choose a Monday–Friday showroom date."},{status:400});
    }
    const today=new Date();today.setHours(0,0,0,0);
    if(selected<=today){
      return NextResponse.json({ok:false,message:"Please choose a future date."},{status:400});
    }

    const host=process.env.SMTP_HOST;
    const port=Number(process.env.SMTP_PORT||587);
    const user=process.env.SMTP_USER;
    const pass=process.env.SMTP_PASS;
    const to=process.env.CONTACT_TO_EMAIL||"info@cladcan.ca";
    const from=process.env.CONTACT_FROM_EMAIL||user;
    if(!host||!user||!pass||!from){
      return NextResponse.json({ok:false,message:"Appointment email delivery is not configured yet. Please call or email CladCan directly."},{status:503});
    }

    const transporter=nodemailer.createTransport({host,port,secure:port===465,auth:{user,pass}});
    await transporter.sendMail({
      from:`CladCan Website <${from}>`,to,replyTo:email,
      subject:`Showroom appointment request — ${date} ${time} — ${firstName} ${lastName}`,
      text:["CLADCAN SHOWROOM APPOINTMENT REQUEST",`Name: ${firstName} ${lastName}`,`Email: ${email}`,`Phone: ${phone}`,`Preferred date: ${date}`,`Preferred time: ${time}`,"","What they would like to review:",details||"Not provided."].join("\n"),
      html:`<div style="font-family:Arial,sans-serif;color:#14242d;max-width:680px"><h2>Showroom appointment request</h2><p><b>${firstName} ${lastName}</b></p><p>Email: ${email}<br/>Phone: ${phone||"—"}<br/>Preferred date: <b>${date}</b><br/>Preferred time: <b>${time}</b></p><p><b>What they would like to review</b><br/>${details||"Not provided."}</p></div>`
    });

    return NextResponse.json({ok:true,message:"Thanks — your showroom appointment request has been sent. The CladCan team will confirm availability with you."});
  }catch(error){
    console.error("Showroom appointment error:",error);
    return NextResponse.json({ok:false,message:"We could not send your appointment request. Please try again or contact CladCan directly."},{status:500});
  }
}
