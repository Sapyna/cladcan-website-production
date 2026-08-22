"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  MessageCircle, X, Send, AlertTriangle, ArrowLeft,
  Upload, BriefcaseBusiness, MapPin, Phone, Mail, Clock3
} from "lucide-react";

const MAIN_MENU = [
  {label:"Urgent Issue / Leak", flow:"urgent", priority:true},
  {label:"Request a Quote", flow:"quote", primary:true},
  {label:"Discuss a Project", flow:"project"},
  {label:"Products & Materials", flow:"products"},
  {label:"Services We Offer", flow:"services"},
  {label:"Technical / General Questions", flow:"technical"},
  {label:"Careers", flow:"careers"},
  {label:"Contact Information", flow:"contact"},
  {label:"Book a Showroom Visit", flow:"showroom"},
];

const SERVICES = [
  "Installation","Material Supply","Fabrication","Design Assistance",
  "Full Design-Build","Repairs","Not sure"
];

const MATERIALS = [
  "ACM Panels","Aluminum Cladding","Fiber Cement","WPC / Composite Siding",
  "Natural Wood","Stucco / EIFS","Roofing","Windows / Doors","Railings","Other / Not sure"
];

const PRODUCT_CATEGORIES = [
  "ACM Panels","Aluminum Panels","Fiber Cement","WPC / Composite Siding",
  "Natural Wood","Stucco / EIFS","Roofing Materials","Windows / Doors","Railings","Other"
];

const TECH_QA = [
  {
    q:"Areas served",
    a:"CladCan serves projects across Ontario and other regions depending on project scope and requirements. Please contact us with your project location for confirmation."
  },
  {
    q:"Do you work with general contractors and developers?",
    a:"Yes. CladCan works with general contractors, developers, consultants, and property owners on a range of exterior cladding projects."
  },
  {
    q:"Do you provide repair work?",
    a:"Yes. CladCan provides repair-related services for exterior systems, depending on project scope and site conditions."
  },
  {
    q:"Do you offer material supply only?",
    a:"Yes. CladCan can assist with material supply inquiries depending on the product category and project requirements."
  },
  {
    q:"Can I send drawings or tender documents?",
    a:"Yes. You can submit drawings, specifications, and project documents through the quote request process or by contacting the team directly."
  },
  {
    q:"Are you hiring?",
    a:"Please use the Careers section for employment-related inquiries."
  }
];

const FLOW_CONFIG = {
  urgent: {
    intro:"We understand this may be time-sensitive. Please provide a few details so we can direct your request as quickly as possible.",
    final:"Thank you. Your request has been submitted. A member of the CladCan team will review the issue and contact you as soon as possible.",
    priority:true,
    steps:[
      {key:"active_now", type:"choice", prompt:"Is the issue active right now?", options:["Yes, active leak","No, inspection needed","Not sure"]},
      {key:"issue_location", type:"choice", prompt:"Where is the issue located?", options:["Roof","Wall / Cladding","Window / Door","Balcony / Railing","Interior ceiling / wall","Not sure"]},
      {key:"property_type", type:"choice", prompt:"What type of property is this?", options:["Commercial","Residential","Condo / Multi-unit","Institutional","Other"]},
      {key:"property_location", type:"text", prompt:"Where is the property located?", placeholder:"City / address"},
      {key:"issue_description", type:"textarea", prompt:"Please briefly describe the issue.", placeholder:"Describe the leak, damage, or inspection concern"},
      {key:"photos", type:"fileChoice", prompt:"Would you like to upload photos?", options:["Yes","No"], accept:"image/*"},
      {key:"contact", type:"contact", prompt:"Please provide your contact information.", companyOptional:true},
    ]
  },

  quote: {
    intro:"Let’s get the project basics first. We’ll keep this short, then you can add more detail if useful.",
    final:"Thank you. Your project inquiry has been submitted. A member of the CladCan team will review the information and contact you within 24 to 48 hours.",
    steps:[
      {key:"project_type", type:"choice", prompt:"What type of project is this?", options:["Commercial","Residential","Institutional","Mixed-Use","Other"]},
      {key:"project_location", type:"text", prompt:"Where is the project located?", placeholder:"City / address"},
      {key:"service", type:"choice", prompt:"What service are you looking for?", options:SERVICES},
      {key:"contact", type:"contact", prompt:"Please provide your contact details."},
      {key:"more_detail", type:"choice", prompt:"Would you like to provide additional project details to help us review your request faster?", options:["Yes","Skip for now"], skipIf:"Skip for now"},
      {key:"material", type:"choice", prompt:"Which system or material are you interested in?", options:MATERIALS, optionalAfter:"more_detail"},
      {key:"stage", type:"choice", prompt:"What stage is the project currently in?", options:["Planning","Tender","Construction","Repair / Existing Building","Other"], optionalAfter:"more_detail"},
      {key:"size", type:"choice", prompt:"What is the estimated project size?", options:["Under 1,000 sqft","1,000 to 2,000 sqft","2,000 to 10,000 sqft","Over 10,000 sqft","Not sure"], optionalAfter:"more_detail"},
      {key:"scope", type:"textarea", prompt:"Please provide a brief description of the scope of work.", placeholder:"Brief project scope", optionalAfter:"more_detail"},
      {key:"files", type:"fileChoice", prompt:"Would you like to upload drawings, specifications, or photos?", options:["Yes","No"], accept:".pdf,.dwg,.dxf,.doc,.docx,.jpg,.jpeg,.png,.webp", optionalAfter:"more_detail"},
    ]
  },

  project: {
    intro:"We can help with early-stage project discussion before a formal quote.",
    final:"Thank you. Your request has been sent to our team. We will contact you to discuss the project further.",
    steps:[
      {key:"help_type", type:"choice", prompt:"What would you like help with?", options:["Choosing materials","Reviewing project feasibility","Discussing drawings or plans","Understanding scope options","General project consultation"]},
      {key:"project_type", type:"choice", prompt:"What type of project is it?", options:["Commercial","Residential","Institutional","Mixed-Use","Other"]},
      {key:"project_location", type:"text", prompt:"Where is the project located?", placeholder:"City / address"},
      {key:"request_description", type:"textarea", prompt:"Please briefly describe what you are looking for.", placeholder:"What would you like to discuss?"},
      {key:"files", type:"fileChoice", prompt:"Would you like to upload drawings, photos, or specifications?", options:["Yes","No"], accept:".pdf,.dwg,.dxf,.doc,.docx,.jpg,.jpeg,.png,.webp"},
      {key:"contact", type:"contact", prompt:"Please provide your contact details."},
    ]
  },

  products: {
    intro:"Select a product or material category and we’ll route the inquiry toward pricing, availability, or project discussion.",
    final:"Thank you. Your inquiry has been sent to our team. We will contact you shortly with more information.",
    steps:[
      {key:"product", type:"choice", prompt:"Please select the product or material category you are interested in.", options:PRODUCT_CATEGORIES},
      {key:"product_help", type:"choice", prompt:"How can we assist you with this product?", options:["Request pricing","Check availability","Discuss a project","Material supply inquiry","Back to main menu"]},
      {key:"project_location", type:"text", prompt:"Where is the project located?", placeholder:"City / address"},
      {key:"quantity", type:"text", prompt:"What is the approximate quantity or project size?", placeholder:"Approximate quantity / sqft"},
      {key:"files", type:"fileChoice", prompt:"Do you have drawings, specifications, or product requirements to share?", options:["Yes","No"], accept:".pdf,.dwg,.dxf,.doc,.docx,.jpg,.jpeg,.png,.webp"},
      {key:"contact", type:"contact", prompt:"Please provide your contact details."},
    ]
  },

  careers: {
    intro:"Please provide the details below and attach your resume.",
    final:"Thank you. Your application has been submitted.",
    steps:[
      {key:"applicant", type:"applicant", prompt:"Applicant details"},
      {key:"position", type:"text", prompt:"Position applying for", placeholder:"Position / role"},
      {key:"resume", type:"file", prompt:"Upload your resume", accept:".pdf,.doc,.docx"},
      {key:"message", type:"textarea", prompt:"Message", placeholder:"Optional message to our hiring team"},
    ]
  },

  contact: {
    intro:"Here are CladCan’s direct contact details. You can also send a message now.",
    final:"Thank you. Your message has been sent to our team.",
    steps:[
      {key:"contact_info", type:"info", prompt:"Contact Information"},
      {key:"send_message", type:"choice", prompt:"Would you like to send us a message now?", options:["Yes","Main Menu"]},
      {key:"message_form", type:"messageContact", prompt:"Message form"},
    ]
  },

  showroom: {
    intro:"Please provide your preferred visit details. A member of our team will contact you to confirm availability.",
    final:"Thank you. Your showroom visit request has been submitted. A member of our team will contact you to confirm availability.",
    steps:[
      {key:"visitor", type:"contact", prompt:"Visitor details"},
      {key:"preferred_date", type:"date", prompt:"Preferred date"},
      {key:"preferred_time", type:"time", prompt:"Preferred time"},
      {key:"interest", type:"text", prompt:"Area of interest / products to review", placeholder:"Products or systems you want to see"},
      {key:"message", type:"textarea", prompt:"Additional message", placeholder:"Optional message"},
    ]
  }
};

function saveLeadLocally(payload){
  try{
    const existing = JSON.parse(localStorage.getItem("cladcan_chat_leads") || "[]");
    existing.push({...payload, createdAt:new Date().toISOString()});
    localStorage.setItem("cladcan_chat_leads", JSON.stringify(existing));
  }catch(e){}
}

export default function ChatWidget(){
  const [open,setOpen]=useState(false);
  const [screen,setScreen]=useState("menu");
  const [flowName,setFlowName]=useState(null);
  const [stepIndex,setStepIndex]=useState(0);
  const [values,setValues]=useState({});
  const [draft,setDraft]=useState("");
  const [files,setFiles]=useState({});
  const [notice,setNotice]=useState("");
  const [inactivePrompt,setInactivePrompt]=useState(false);
  const timerRef=useRef(null);

  const flow = flowName ? FLOW_CONFIG[flowName] : null;
  const step = flow?.steps?.[stepIndex];

  function resetIdle(){
    clearTimeout(timerRef.current);
    if(open){
      timerRef.current=setTimeout(()=>setInactivePrompt(true), 90000);
    }
  }

  useEffect(()=>{
    resetIdle();
    return ()=>clearTimeout(timerRef.current);
  },[open,screen,stepIndex]);

  function mainMenu(){
    setScreen("menu");setFlowName(null);setStepIndex(0);setValues({});setDraft("");setNotice("");setInactivePrompt(false);
  }

  function startFlow(name){
    if(name==="services"){setScreen("services");return;}
    if(name==="technical"){setScreen("technical");return;}
    setFlowName(name);setStepIndex(0);setValues({});setDraft("");setNotice("");setScreen("flow");
  }

  function currentShouldSkip(s){
    if(!s?.optionalAfter)return false;
    return values[s.optionalAfter]==="Skip for now";
  }

  function advance(extra={}){
    const updated={...values,...extra};
    setValues(updated);
    setDraft("");

    let next=stepIndex+1;
    while(flow?.steps?.[next] && flow.steps[next].optionalAfter && updated[flow.steps[next].optionalAfter]==="Skip for now"){
      next++;
    }

    if(next >= (flow?.steps?.length || 0)){
      const payload={flow:flowName, priority:!!flow?.priority, values:updated, files:Object.keys(files)};
      saveLeadLocally(payload);
      setScreen("done");
      return;
    }
    setStepIndex(next);
  }

  function back(){
    if(screen!=="flow"){mainMenu();return;}
    if(stepIndex===0){mainMenu();return;}
    let prev=stepIndex-1;
    while(prev>0 && flow.steps[prev].optionalAfter && values[flow.steps[prev].optionalAfter]==="Skip for now"){prev--;}
    setStepIndex(prev);
  }

  function selectChoice(choice){
    if(step?.key==="product_help" && choice==="Back to main menu"){mainMenu();return;}
    if(step?.key==="send_message" && choice==="Main Menu"){mainMenu();return;}
    setValues(v=>({...v,[step.key]:choice}));
    if(step.type==="fileChoice" && choice==="Yes"){
      setNotice("Choose files below, then continue.");
      return;
    }
    advance({[step.key]:choice});
  }

  function submitDraft(){
    if(!draft.trim())return;
    advance({[step.key]:draft.trim()});
  }

  function collectContact(form){
    const data=new FormData(form);
    const result=Object.fromEntries(data.entries());
    advance({[step.key]:result});
  }

  function handleFiles(e){
    const selected=Array.from(e.target.files||[]);
    setFiles(f=>({...f,[step.key]:selected.map(x=>({name:x.name,size:x.size,type:x.type}))}));
    setNotice(selected.length ? `${selected.length} file(s) selected.` : "");
  }

  function servicesScreen(){
    return <div className="chatScreen">
      <button className="chatBack" onClick={mainMenu}><ArrowLeft size={14}/> Main menu</button>
      <div className="chatPrompt">Services We Offer</div>
      <div className="chatInfoText">
        Material Supply · Fabrication · Installation · Design & Permit Assistance · Repairs · Exterior Systems Consultation
      </div>
      <div className="chatOptions">
        <button className="primaryOption" onClick={()=>startFlow("quote")}>Request a Quote</button>
        <button onClick={()=>startFlow("project")}>Discuss a Project</button>
        <button onClick={mainMenu}>Back to Main Menu</button>
      </div>
    </div>
  }

  function technicalScreen(){
    return <div className="chatScreen">
      <button className="chatBack" onClick={mainMenu}><ArrowLeft size={14}/> Main menu</button>
      <div className="chatPrompt">Technical / General Questions</div>
      <div className="faqList">
        {TECH_QA.map((item,i)=><details key={i}><summary>{item.q}</summary><p>{item.a}</p></details>)}
      </div>
      <div className="chatFallback">
        Can’t find your answer? Please provide your contact information and a member of the CladCan team will follow up directly.
      </div>
      <button className="chatActionBtn" onClick={()=>startFlow("project")}>Discuss a Project</button>
    </div>
  }

  function renderStep(){
    if(!step)return null;

    if(step.type==="choice" || step.type==="fileChoice"){
      return <>
        <div className="chatPrompt">{step.prompt}</div>
        <div className="chatOptions">
          {step.options.map(opt=><button key={opt} className={opt==="Request a Quote"?"primaryOption":""} onClick={()=>selectChoice(opt)}>{opt}</button>)}
        </div>
        {step.type==="fileChoice" && values[step.key]==="Yes" && <>
          <label className="chatFileUpload">
            <Upload size={17}/>
            <span>{notice || "Choose files"}</span>
            <input type="file" multiple accept={step.accept} onChange={handleFiles}/>
          </label>
          <button className="chatActionBtn" onClick={()=>advance({[step.key]:"Yes"})}>Continue</button>
        </>}
      </>;
    }

    if(step.type==="text" || step.type==="textarea"){
      return <>
        <div className="chatPrompt">{step.prompt}</div>
        {step.type==="textarea"
          ? <textarea className="chatField" rows="4" placeholder={step.placeholder||""} value={draft} onChange={e=>setDraft(e.target.value)}/>
          : <input className="chatField" placeholder={step.placeholder||""} value={draft} onChange={e=>setDraft(e.target.value)} onKeyDown={e=>{if(e.key==="Enter")submitDraft()}}/>
        }
        <button className="chatActionBtn" onClick={submitDraft}>Continue</button>
      </>;
    }

    if(step.type==="date" || step.type==="time"){
      return <>
        <div className="chatPrompt">{step.prompt}</div>
        <input className="chatField" type={step.type} value={draft} onChange={e=>setDraft(e.target.value)}/>
        <button className="chatActionBtn" onClick={submitDraft}>Continue</button>
      </>;
    }

    if(step.type==="file"){
      return <>
        <div className="chatPrompt">{step.prompt}</div>
        <label className="chatFileUpload">
          <Upload size={17}/>
          <span>{notice || "Choose file"}</span>
          <input type="file" accept={step.accept} onChange={handleFiles}/>
        </label>
        <button className="chatActionBtn" onClick={()=>advance({[step.key]:"uploaded"})}>Continue</button>
      </>;
    }

    if(step.type==="contact"){
      return <form className="chatMiniForm" onSubmit={e=>{e.preventDefault();collectContact(e.currentTarget)}}>
        <div className="chatPrompt">{step.prompt}</div>
        <input required name="full_name" placeholder="Full name"/>
        <input name="company_name" placeholder={step.companyOptional ? "Company name (optional)" : "Company name"}/>
        <input required type="email" name="email" placeholder="Email"/>
        <input required name="phone" placeholder="Phone number"/>
        <button className="chatActionBtn" type="submit">Continue</button>
      </form>;
    }

    if(step.type==="applicant"){
      return <form className="chatMiniForm" onSubmit={e=>{e.preventDefault();collectContact(e.currentTarget)}}>
        <div className="chatPrompt">{step.prompt}</div>
        <input required name="full_name" placeholder="Full name"/>
        <input required type="email" name="email" placeholder="Email"/>
        <input required name="phone" placeholder="Phone number"/>
        <button className="chatActionBtn" type="submit">Continue</button>
      </form>;
    }

    if(step.type==="messageContact"){
      return <form className="chatMiniForm" onSubmit={e=>{e.preventDefault();collectContact(e.currentTarget)}}>
        <div className="chatPrompt">{step.prompt}</div>
        <input required name="full_name" placeholder="Full name"/>
        <input required type="email" name="email" placeholder="Email"/>
        <input required name="phone" placeholder="Phone number"/>
        <textarea required name="message" rows="4" placeholder="Message"></textarea>
        <button className="chatActionBtn" type="submit">Send message</button>
      </form>;
    }

    if(step.type==="info"){
      return <>
        <div className="chatPrompt">{step.prompt}</div>
        <div className="contactQuickList">
          <div><Phone size={14}/><span>+1 (844) 924-3030</span></div>
          <div><Mail size={14}/><span>info@cladcan.ca</span></div>
          <div><MapPin size={14}/><span>5000 Dufferin St, Unit K, North York, ON M3H 5T5</span></div>
          <div><Clock3 size={14}/><span>Business hours: confirm with office</span></div>
        </div>
        <button className="chatActionBtn" onClick={()=>advance({[step.key]:"viewed"})}>Continue</button>
      </>;
    }

    return null;
  }

  return <>
    {open && <div className="chatPanel chatPanelLarge" onMouseMove={resetIdle} onTouchStart={resetIdle}>
      <div className="chatHead">
        <div>
          <b>CladCan Project Assistant</b>
          <span>Intake · Qualification · Routing</span>
        </div>
        <button onClick={()=>setOpen(false)}><X size={18}/></button>
      </div>

      <div className="chatBody chatBodyStructured">
        {screen==="menu" && <div className="chatScreen">
          <div className="chatWelcome">
            <span>Welcome to CladCan.</span>
            <b>How can we assist you today?</b>
          </div>
          <div className="mainMenuOptions">
            {MAIN_MENU.map(item=><button key={item.flow}
              className={`${item.primary?"primaryMenuItem":""} ${item.priority?"urgentMenuItem":""}`}
              onClick={()=>startFlow(item.flow)}>
              {item.priority && <AlertTriangle size={15}/>}
              <span>{item.label}</span>
            </button>)}
          </div>
        </div>}

        {screen==="services" && servicesScreen()}
        {screen==="technical" && technicalScreen()}

        {screen==="flow" && flow && <div className="chatScreen">
          <div className="flowToolbar">
            <button className="chatBack" onClick={back}><ArrowLeft size={14}/> Back</button>
            <span>{stepIndex+1} / {flow.steps.length}</span>
          </div>
          {stepIndex===0 && <div className={`flowIntro ${flow.priority?"urgentIntro":""}`}>
            {flow.priority&&<AlertTriangle size={16}/>}
            <span>{flow.intro}</span>
          </div>}
          <div className="flowProgress"><span style={{width:`${((stepIndex+1)/flow.steps.length)*100}%`}}></span></div>
          {renderStep()}
        </div>}

        {screen==="done" && <div className="chatScreen chatDone">
          <div className="doneIcon">✓</div>
          <h3>Submitted</h3>
          <p>{flow?.final}</p>
          {flow?.priority && <div className="urgentConfirmation">Priority: Urgent repair / leak</div>}
          <button className="chatActionBtn" onClick={mainMenu}>Back to Main Menu</button>
        </div>}

        {inactivePrompt && <div className="dropoffPrompt">
          <b>Before you go, would you like a member of our team to follow up with you?</b>
          <div>
            <button onClick={()=>{setInactivePrompt(false);setFlowName("project");setScreen("dropoff")}}>Yes</button>
            <button onClick={()=>setInactivePrompt(false)}>No</button>
          </div>
        </div>}

        {screen==="dropoff" && <form className="chatMiniForm dropoffForm" onSubmit={e=>{
          e.preventDefault();
          const data=Object.fromEntries(new FormData(e.currentTarget).entries());
          saveLeadLocally({flow:"dropoff_recovery",values:data});
          setScreen("dropoff_done");
        }}>
          <div className="chatPrompt">Please provide your contact information.</div>
          <input required name="full_name" placeholder="Full name"/>
          <input required type="email" name="email" placeholder="Email"/>
          <input required name="phone" placeholder="Phone number"/>
          <button className="chatActionBtn" type="submit">Submit</button>
        </form>}

        {screen==="dropoff_done" && <div className="chatScreen chatDone">
          <div className="doneIcon">✓</div>
          <p>Thank you. Your contact information has been submitted.</p>
          <button className="chatActionBtn" onClick={mainMenu}>Main Menu</button>
        </div>}
      </div>
    </div>}

    <button className="chatLauncher" onClick={()=>{setOpen(!open);setInactivePrompt(false)}} aria-label="Open CladCan chatbot">
      {open?<X size={22}/>:<MessageCircle size={22}/>}
    </button>
  </>;
}
