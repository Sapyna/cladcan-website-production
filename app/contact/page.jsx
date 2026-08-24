"use client";
import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, Check, FileUp, Mail, MapPin, Phone, Clock3, Building2 } from "lucide-react";
import mapStyles from "./contactMap.module.css";

const intents=[
  ["quote","Get a Quote","Pricing or budgeting for a defined project."],
  ["supply","Material Supply","Products, samples, quantities or delivery."],
  ["install","Installation","Field installation for an exterior scope."],
  ["design","Design Support","System selection, details or permit support."],
  ["samples","Request Samples","Colours, profiles and finish selection."],
  ["repair","Repair / Maintenance","Existing exterior issue or replacement."],
];
const work=[
  {src:"/images/contact/cladcan-residential-exterior-project.jpg",alt:"Modern residential exterior project by CladCan",label:"Residential exterior"},
  {src:"/images/contact/cladcan-architectural-cladding-detail.jpg",alt:"Architectural exterior cladding detail on a CladCan residential project",label:"Architectural detailing"},
  {src:"/images/contact/cladcan-residential-facade-integration.jpg",alt:"Completed residential façade with coordinated exterior detailing by CladCan",label:"Façade integration"},
];
const coverage=[
  ["01","Core GTA","North York · Toronto · Etobicoke · Scarborough · Vaughan · Markham · Richmond Hill · Mississauga"],
  ["02","North & York Region","Aurora · Bradford · Barrie · Innisfil · King City · Kleinburg · Newmarket · Stouffville · Unionville · Uxbridge · Woodbridge"],
  ["03","West GTA","Bolton · Brampton · Brantford · Burlington · Caledon · Georgetown · Hamilton · Milton · Oakville · Orangeville"],
  ["04","East GTA","Ajax · Bowmanville · Brooklin · Courtice · Oshawa · Pickering · Whitby"],
];

function ServiceAreaMap(){
 return <section className={mapStyles.areaSection}><div className="wrap">
   <div className={mapStyles.sectionHead}><div><span>ONTARIO SERVICE AREA</span><h2>North York based.<br/>Ontario focused.</h2></div><p>CladCan supports residential, commercial and institutional exterior projects across the GTA and surrounding Ontario communities. For work beyond the area shown, contact the team to confirm coverage.</p></div>
   <div className={mapStyles.mapGrid}>
    <div className={mapStyles.mapCard}><span className={mapStyles.mapEyebrow}>OUR SERVICE AREA</span><h3>Built around<br/>the GTA.<br/><em>Ready to travel.</em></h3><p>Our North York location keeps material review, project coordination and field access close to the region’s major construction markets.</p><a href="#project-inquiry">Check coverage for your project <ArrowUpRight size={13}/></a></div>
    <div className={mapStyles.mapCanvas}>
     <span className={mapStyles.mapIndex}>014 / SOUTHERN ONTARIO</span>
     <svg className={mapStyles.mapSvg} viewBox="0 0 900 430" preserveAspectRatio="xMidYMid meet" role="img" aria-label="CladCan GTA service area centered on North York">
      <path d="M70 303 C155 274 235 244 330 207 C430 169 545 146 842 151" className={`${mapStyles.road} ${mapStyles.roadMain}`}/>
      <path d="M132 137 C211 181 258 218 337 251 C430 289 532 302 714 294" className={mapStyles.road}/>
      <path d="M285 58 C300 126 329 174 390 220 C442 259 457 320 445 405" className={mapStyles.road}/>
      <path d="M530 57 C494 126 457 168 409 207 C365 242 317 274 270 327" className={mapStyles.road}/>
      <path d="M111 344 C227 314 310 283 386 252 C477 215 583 185 818 184" className={`${mapStyles.road} ${mapStyles.roadLight}`}/>
      <path d="M645 93 C604 146 558 190 507 226 C468 255 451 317 456 403" className={`${mapStyles.road} ${mapStyles.roadLight}`}/>
      <path d="M54 230 C180 228 265 224 354 219 C474 212 612 216 854 244" className={`${mapStyles.road} ${mapStyles.roadLight}`}/>
      <path d="M190 73 C230 141 252 198 253 273 C254 322 238 360 220 402" className={`${mapStyles.road} ${mapStyles.roadLight}`}/>
      <g className={mapStyles.city}><circle cx="205" cy="215" r="5"/><text x="139" y="202">Vaughan</text></g>
      <g className={mapStyles.city}><circle cx="390" cy="155" r="5"/><text x="408" y="145">Richmond Hill</text></g>
      <g className={mapStyles.city}><circle cx="555" cy="195" r="5"/><text x="573" y="184">Markham</text></g>
      <g className={mapStyles.city}><circle cx="325" cy="295" r="5"/><text x="306" y="325">Toronto</text></g>
      <g className={mapStyles.city}><circle cx="100" cy="335" r="5"/><text x="67" y="365">Mississauga</text></g>
      <g><ellipse cx="405" cy="275" rx="18" ry="5" className={mapStyles.pinShadow}/><path d="M405 184 C382 184 364 202 364 224 C364 253 405 288 405 288 C405 288 446 253 446 224 C446 202 428 184 405 184 Z" className={mapStyles.pin}/><circle cx="405" cy="222" r="10" className={mapStyles.pinCenter}/><text x="458" y="216" className={mapStyles.northTitle}>North York</text><text x="458" y="239" className={mapStyles.northSub}>CLADCAN · 5000 DUFFERIN ST</text></g>
     </svg>
     <span className={mapStyles.mapNote}>Service coverage map · Contact us to confirm project location</span>
    </div>
   </div>
   <div className={mapStyles.coverageGrid}>{coverage.map(([n,title,text])=><div className={mapStyles.coverageItem} key={n}><span>{n}</span><h4>{title}</h4><p>{text}</p></div>)}</div>
  </div></section>;
}

export default function Contact(){
 const[intent,setIntent]=useState("quote");
 const[status,setStatus]=useState("idle");
 const[message,setMessage]=useState("");
 async function submit(e){e.preventDefault();if(status==="sending")return;setStatus("sending");setMessage("");try{const formData=new FormData(e.currentTarget);formData.set("inquiryType",intent);const response=await fetch("/api/contact",{method:"POST",body:formData});const data=await response.json().catch(()=>({}));if(!response.ok)throw new Error(data.message||"Unable to send the inquiry.");setStatus("success");setMessage(data.message||"Thanks — your project inquiry has been sent to CladCan.");e.currentTarget.reset();setIntent("quote");}catch(error){setStatus("error");setMessage(error.message||"We could not send your inquiry. Please try again.");}}
 return <>
  <section className="contactFinalHero"><div className="wrap contactFinalHeroGrid"><div className="contactFinalHeroInner"><span className="contactFinalKicker">CONTACT CLADCAN</span><h1>Start with the project.<br/><em>We’ll help with the next step.</em></h1><p>Tell us what you are planning, pricing or trying to solve. Drawings are helpful, but they are not required to start the conversation.</p><div className="contactFinalHeroActions"><a className="btn" href="#project-inquiry">Start a Project <ArrowUpRight size={14}/></a><a href="tel:+18449243030"><Phone size={14}/> +1 (844) 924-3030</a></div></div><div className="contactFinalHeroVisual"><Image src="/images/contact/cladcan-commercial-exterior-cladding-project.jpg" alt="Commercial exterior cladding project completed by CladCan" fill priority sizes="(max-width: 760px) 100vw, 620px"/></div></div></section>
  <section className="contactFinalQuick"><div className="wrap contactFinalQuickGrid"><a href="tel:+18449243030"><Phone/><span>CALL</span><strong>+1 (844) 924-3030</strong></a><a href="mailto:info@cladcan.ca"><Mail/><span>EMAIL</span><strong>info@cladcan.ca</strong></a><a href="#visit"><MapPin/><span>SHOWROOM / OFFICE</span><strong>North York, Ontario</strong></a><div><Clock3/><span>HOURS</span><strong>Mon–Fri · 9am–5pm</strong></div></div></section>
  <section id="project-inquiry" className="contactFinalFormSection"><div className="wrap"><div className="contactFinalSectionHead"><div><span>01 — START A PROJECT</span><h2>Give us the useful context.</h2></div><p>Choose the closest starting point, then share what you know. The goal is to route your inquiry to the right conversation without turning first contact into paperwork.</p></div><div className="contactFinalIntentGrid">{intents.map(([id,title,text])=><button type="button" key={id} onClick={()=>setIntent(id)} className={intent===id?"active":""}><span>{intent===id?<Check size={13}/>:null}</span><b>{title}</b><small>{text}</small></button>)}</div><div className="contactFinalFormGrid"><aside><span>02 — PROJECT DETAILS</span><h3>A few details help us respond with better direction.</h3><p>For pricing and technical questions, include the project location, stage and exterior scope where possible.</p><div className="contactFinalAsideLine"/><small>Prefer to talk through it?</small><a href="tel:+18449243030">Call the CladCan team <ArrowUpRight size={13}/></a></aside><form className="contactFinalForm" onSubmit={submit} encType="multipart/form-data"><input type="hidden" name="inquiryType" value={intent}/><label className="contactHoneypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off"/></label><div className="projectFormTwo"><label>First name *<input name="firstName" autoComplete="given-name" required/></label><label>Last name *<input name="lastName" autoComplete="family-name" required/></label></div><div className="projectFormTwo"><label>Email *<input type="email" name="email" autoComplete="email" required/></label><label>Phone<input type="tel" name="phone" autoComplete="tel"/></label></div><div className="projectFormTwo"><label>Project location<input name="location" placeholder="City / address"/></label><label>Project type<select name="projectType" defaultValue=""><option value="" disabled>Select</option><option>Residential</option><option>Commercial</option><option>Institutional</option><option>Industrial</option><option>Other</option></select></label></div><label>Project stage<select name="stage" defaultValue=""><option value="" disabled>Select project stage</option><option>Early idea / material research</option><option>Design / drawings in progress</option><option>Pricing / tender</option><option>Ready for construction</option><option>Existing building / repair</option></select></label><label>Project details<textarea name="details" rows="6" placeholder="Exterior scope, approximate area, materials being considered, timing, or the problem you are trying to solve."/></label><label className="contactFinalUpload"><FileUp size={20}/><span><b>Add drawings or project photos</b><small>PDF, JPG, PNG, WEBP, HEIC or HEIF. Up to 8 MB per file and 15 MB total.</small></span><input name="attachments" type="file" multiple accept=".pdf,.jpg,.jpeg,.png,.webp,.heic,.heif,image/*"/></label><button className="btn contactFinalSubmit" type="submit" disabled={status==="sending"}>{status==="sending"?"Sending…":"Send Project Inquiry"} {status!=="sending"&&<ArrowUpRight size={14}/>}</button>{message?<p className={`contactFinalStatus ${status}`} role={status==="error"?"alert":"status"}>{message}</p>:<small className="contactFinalPrivacy">Your contact information is used only to respond to your project inquiry.</small>}</form></div></div></section>
  <section className="contactFinalWork"><div className="wrap"><div className="contactFinalSectionHead light"><div><span>REAL CLADCAN WORK</span><h2>Built work, not stock imagery.</h2></div><p>A selection of residential and commercial exterior work by CladCan. Project imagery gives our team a common visual language when discussing systems, details and scope.</p></div><div className="contactFinalWorkGrid">{work.map((x,i)=><figure key={x.src}><div><Image src={x.src} alt={x.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw"/></div><figcaption><span>0{i+1}</span>{x.label}</figcaption></figure>)}</div></div></section>
  <section id="visit" className="contactFinalVisit"><div className="wrap contactFinalVisitGrid"><div className="contactFinalShowroom"><Image src="/images/contact/cladcan-north-york-showroom-material-samples.jpg" alt="CladCan North York showroom with exterior cladding and material samples" fill sizes="(max-width: 900px) 100vw, 52vw"/></div><div className="contactFinalVisitCopy"><span>VISIT CLADCAN</span><h2>See materials in person.</h2><p>Visit the North York showroom to discuss exterior systems, profiles and finishes with the CladCan team.</p><div className="contactFinalAddress"><Building2/><div><small>SHOWROOM / OFFICE</small><strong>5000 Dufferin St, Unit K<br/>North York, ON M3H 5T5</strong></div></div><div className="contactFinalAddress"><Clock3/><div><small>HOURS</small><strong>Monday–Friday · 9:00am–5:00pm</strong></div></div><div className="contactFinalVisitActions"><a className="btn" href="#project-inquiry">Book a Showroom Visit <ArrowUpRight size={14}/></a><a href="https://www.google.com/maps/search/?api=1&query=5000+Dufferin+St+Unit+K+North+York+ON+M3H+5T5" target="_blank" rel="noreferrer">Open in Google Maps <ArrowUpRight size={13}/></a></div></div></div></section>
  <ServiceAreaMap/>
  <section className="contactFinalFaq"><div className="wrap contactFinalFaqGrid"><div><span>BEFORE YOU SEND</span><h2>Common first-contact questions.</h2></div><div><details><summary>Do I need completed drawings before contacting CladCan?</summary><p>No. You can start with the information you have. Drawings and photos become especially useful when the team is reviewing scope, pricing or technical details.</p></details><details><summary>Can I contact CladCan for material supply only?</summary><p>Yes. CladCan offers material supply as well as fabrication, installation, design support and repair services.</p></details><details><summary>Can I visit the showroom to review materials and finishes?</summary><p>Yes. The showroom and office are at 5000 Dufferin St, Unit K in North York. Booking a visit in advance is recommended.</p></details><details><summary>What should I include for a quote request?</summary><p>Project location, building type, current project stage, approximate scope, preferred materials and any available drawings or photos are useful starting information.</p></details></div></div></section>
 </>;
}
