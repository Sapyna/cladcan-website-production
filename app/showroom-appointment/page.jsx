"use client";

import {useMemo,useState} from "react";
import Link from "next/link";
import {ArrowUpRight,Clock3,MapPin} from "lucide-react";

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
    <section className="contactFinalHero">
      <div className="wrap contactFinalHeroGrid">
        <div className="contactFinalHeroInner">
          <span className="contactFinalKicker">VISIT CLADCAN</span>
          <h1>Book a showroom visit.</h1>
          <p>Choose a preferred date and time to review exterior systems, profiles and finishes with the CladCan team in North York. Your selection is a request; the team will confirm availability by email or phone.</p>
        </div>
        <div className="contactFinalVisitCopy">
          <div className="contactFinalAddress"><MapPin/><div><small>SHOWROOM / OFFICE</small><strong>5000 Dufferin St, Unit K<br/>North York, ON M3H 5T5</strong></div></div>
          <div className="contactFinalAddress"><Clock3/><div><small>HOURS</small><strong>Monday–Friday · 9:00am–5:00pm</strong></div></div>
        </div>
      </div>
    </section>

    <section className="contactFinalFormSection"><div className="wrap">
      <div className="contactFinalSectionHead"><div><span>SHOWROOM APPOINTMENT</span><h2>Choose a preferred date and time.</h2></div><p>We will use these details to coordinate your visit and confirm the appointment with you.</p></div>
      <div className="contactFinalFormGrid">
        <aside><span>VISIT DETAILS</span><h3>Review materials in person.</h3><p>Bring drawings, photos, samples or simply a list of systems and finishes you would like to compare.</p><div className="contactFinalAsideLine"/><small>Need help sooner?</small><a href="tel:+18449243030">Call the CladCan team <ArrowUpRight size={13}/></a></aside>
        <form className="contactFinalForm" onSubmit={submit}>
          <label className="contactHoneypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off"/></label>
          <div className="projectFormTwo"><label>First name *<input name="firstName" required autoComplete="given-name"/></label><label>Last name *<input name="lastName" required autoComplete="family-name"/></label></div>
          <div className="projectFormTwo"><label>Email *<input type="email" name="email" required autoComplete="email"/></label><label>Phone<input type="tel" name="phone" autoComplete="tel"/></label></div>
          <div className="projectFormTwo"><label>Preferred date *<input type="date" name="date" min={minDate} required/></label><label>Preferred time *<select name="time" defaultValue="" required><option value="" disabled>Select a time</option>{TIMES.map(t=><option key={t}>{t}</option>)}</select></label></div>
          <label>What would you like to review?<textarea name="details" rows="5" placeholder="Materials, finishes, samples, project type or other context."/></label>
          <button className="btn contactFinalSubmit" type="submit" disabled={status==="sending"}>{status==="sending"?"Sending…":"Request Appointment"} {status!=="sending"&&<ArrowUpRight size={14}/>}</button>
          {message?<p className={`contactFinalStatus ${status}`} role={status==="error"?"alert":"status"}>{message}</p>:<small className="contactFinalPrivacy">By submitting this form, you agree that CladCan may contact you about this appointment request. See our <Link href="/privacy">Privacy Policy</Link>.</small>}
        </form>
      </div>
    </div></section>
  </>;
}
