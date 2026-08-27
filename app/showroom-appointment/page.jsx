"use client";

import {useMemo,useState} from "react";
import Link from "next/link";
import {ArrowUpRight,CalendarDays,Clock3,MapPin} from "lucide-react";

const TIMES=["9:00 AM","10:00 AM","11:00 AM","1:00 PM","2:00 PM","3:00 PM","4:00 PM"];

export default function ShowroomAppointment(){
  const[status,setStatus]=useState("idle");
  const[message,setMessage]=useState("");
  const minDate=useMemo(()=>new Date(Date.now()+86400000).toISOString().slice(0,10),[]);

  async function submit(e){
    e.preventDefault();
    if(status==="sending")return;
    setStatus("sending");setMessage("");
    const form=new FormData(e.currentTarget);
    try{
      const response=await fetch("/api/showroom-appointment",{method:"POST",body:form});
      const data=await response.json().catch(()=>({}));
      if(!response.ok)throw new Error(data.message||"Unable to request the appointment.");
      setStatus("success");
      setMessage(data.message||"Thanks — your showroom appointment request has been sent.");
      e.currentTarget.reset();
    }catch(error){setStatus("error");setMessage(error.message||"We could not send your appointment request.");}
  }

  return <>
    <section className="section paper">
      <div className="wrap" style={{maxWidth:980}}>
        <span className="eyebrow">VISIT CLADCAN</span>
        <h1>Book a showroom visit.</h1>
        <p>Choose a preferred date and time to review exterior systems, profiles and finishes with the CladCan team in North York. Your selection is a request; the team will confirm availability by email or phone.</p>
      </div>
    </section>
    <section className="section">
      <div className="wrap" style={{maxWidth:980}}>
        <div className="grid2">
          <div className="card">
            <div style={{display:"grid",gap:22}}>
              <div><MapPin size={20}/><h3>CladCan Showroom / Office</h3><p>5000 Dufferin St, Unit K<br/>North York, ON M3H 5T5</p></div>
              <div><Clock3 size={20}/><h3>Showroom hours</h3><p>Monday–Friday · 9:00am–5:00pm</p></div>
              <p className="muted">For urgent project questions, call <a href="tel:+18449243030">+1 (844) 924-3030</a>.</p>
            </div>
          </div>
          <form className="card" onSubmit={submit}>
            <input name="website" tabIndex={-1} autoComplete="off" style={{position:"absolute",left:"-10000px"}} aria-hidden="true"/>
            <div className="formGrid">
              <div className="field"><label>First name *<input name="firstName" required autoComplete="given-name"/></label></div>
              <div className="field"><label>Last name *<input name="lastName" required autoComplete="family-name"/></label></div>
              <div className="field"><label>Email *<input type="email" name="email" required autoComplete="email"/></label></div>
              <div className="field"><label>Phone<input type="tel" name="phone" autoComplete="tel"/></label></div>
              <div className="field"><label>Preferred date *<input type="date" name="date" min={minDate} required/></label></div>
              <div className="field"><label>Preferred time *<select name="time" defaultValue="" required><option value="" disabled>Select a time</option>{TIMES.map(t=><option key={t}>{t}</option>)}</select></label></div>
              <div className="field span2"><label>What would you like to review?<textarea name="details" rows="5" placeholder="Materials, finishes, samples, project type or other context."/></label></div>
            </div>
            <button className="btn" type="submit" disabled={status==="sending"} style={{marginTop:16}}>{status==="sending"?"Sending…":"Request Appointment"} {status!=="sending"&&<ArrowUpRight size={14}/>}</button>
            {message&&<p role={status==="error"?"alert":"status"} style={{marginTop:14}}>{message}</p>}
            <p className="muted" style={{marginTop:14,fontSize:13}}>By submitting this form, you agree that CladCan may contact you about this appointment request. See our <Link href="/privacy">Privacy Policy</Link>.</p>
          </form>
        </div>
      </div>
    </section>
  </>;
}
