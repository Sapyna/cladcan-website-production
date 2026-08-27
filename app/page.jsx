import HeroSlider from "../components/HeroSlider";
import ManufacturerTicker from "../components/ManufacturerTicker";
import Link from "next/link";
import { ArrowUpRight, PenTool, HardHat, PackageCheck, Factory, CheckCircle2, MapPin, Layers3, Building2 } from "lucide-react";
import { Visual, SectionTitle } from "@/components/SiteBlocks";
import GoogleReviews from "@/components/GoogleReviews";
import BeforeAfter from "@/components/BeforeAfter";

const capabilities=[
  {n:"01",icon:PackageCheck,title:"Material Supply",copy:"Exterior materials, systems and components sourced and coordinated around project requirements, quantities and schedule.",href:"/services/material-supply"},
  {n:"02",icon:Factory,title:"Custom Fabrication",copy:"ACM panels, flashing, Z-bar, hat channel, trim and specialty components fabricated to project-specific requirements.",href:"/services/custom-fabrication"},
  {n:"03",icon:HardHat,title:"Installation",copy:"Field installation across wall and soffit systems, glazing, roofing and aluminum exterior scopes.",href:"/services/installation"},
  {n:"04",icon:PenTool,title:"Design & Permit Support",copy:"Façade design support, constructability coordination, material selection and permit-assistance workflows.",href:"/services/design-permit-support"},
];

const systems=[
  {name:"Aluminum Siding & Soffit",label:"ALUMINUM SIDING & SOFFIT",copy:"Solid and woodgrain aluminum systems for durable façades, soffits and architectural accents.",href:"/exterior-systems/aluminum",variant:"graphite"},
  {name:"ACM / ACP",label:"ACM / ACP",copy:"Custom-fabricated aluminum composite panel systems for precise, modern residential and commercial façades.",href:"/exterior-systems/acm-acp",variant:"metal"},
  {name:"Steel Siding & Soffit",label:"STEEL SIDING & SOFFIT",copy:"Exposed- and hidden-fastener steel systems for durable residential, commercial and industrial applications.",href:"/exterior-systems/steel",variant:"silver"},
  {name:"Fibre Cement",label:"FIBRE CEMENT",copy:"Durable, low-maintenance cladding with versatile profiles and finishes for residential and commercial exteriors.",href:"/exterior-systems/fibre-cement",variant:"stone"},
  {name:"IMP",label:"INSULATED METAL PANELS",copy:"High-performance insulated wall systems combining thermal efficiency, durability and fast enclosure for commercial and industrial projects.",href:"/exterior-systems/imp",variant:"graphite"},
  {name:"WPC & Composite",label:"WPC & COMPOSITE",copy:"Low-maintenance wood-look systems for façades, soffits, fluted features and architectural accents.",href:"/exterior-systems/wpc",variant:"wood"},
];

const featuredProjects=[
  {type:"In Progress",title:"North York",location:"North York, ON",copy:"Residential exterior work in progress with coordinated façade, window and envelope detailing.",image:"/images/projects/in-progress-eglinton.jpg",href:"/projects"},
  {type:"In Progress",title:"Toronto",location:"Toronto, ON",copy:"Active exterior envelope and aluminum composite panel installation documented during construction.",image:"/images/projects/in-progress-adelaide-rd.jpg",href:"/projects"},
  {type:"In Progress",title:"North York",location:"North York, ON",copy:"Current cladding installation showing the building envelope and panel work before final completion.",image:"/images/projects/in-progress-toronto.jpg",href:"/projects"},
  {type:"In Progress",title:"Project 4",location:"Ontario",copy:"Additional active project photography and details will be added here.",image:null,href:"/projects",placeholder:true},
  {type:"In Progress",title:"Project 5",location:"Ontario",copy:"Additional active project photography and details will be added here.",image:null,href:"/projects",placeholder:true},
  {type:"In Progress",title:"Project 6",location:"Ontario",copy:"Additional active project photography and details will be added here.",image:null,href:"/projects",placeholder:true},
];

const insights=[
 {kicker:"MAINTENANCE · 2026",title:"ACM Panel Maintenance Playbook",copy:"Cleaning, inspection and repair considerations for preserving ACM façade appearance and performance.",href:"/blog/acm-panel-maintenance-playbook"},
 {kicker:"PLANNING · 2026",title:"Façade Budget Planning Checklist",copy:"A practical checklist for scope boundaries, envelope-critical allowances and procurement assumptions.",href:"/blog/facade-budget-planning-checklist"},
 {kicker:"MATERIALS · 2024",title:"Choosing Exterior Cladding Materials",copy:"A framework for comparing cladding by performance, aesthetics, lifecycle cost and maintenance.",href:"/blog/guide-to-cladding-materials"},
];

function ProjectCard({p,i}){
 return <Link href={p.href} className={(i===0||i===3)?"homeProjectCard homeProjectLead":"homeProjectCard"}>
   <div className="homeProjectImage" style={{background:"#f3f5f6"}}>
    {p.placeholder
      ? <div style={{width:"100%",height:"100%",display:"grid",placeItems:"center",background:"linear-gradient(135deg,#eef2f4,#dfe5e8)",color:"#76858e",fontSize:"12px",fontWeight:800,letterSpacing:".08em",textTransform:"uppercase"}}>Project photo coming soon</div>
      : <img src={p.image} alt={`${p.title}, ${p.location} — project in progress`} style={{width:"100%",height:"100%",objectFit:i===1?"cover":"contain",objectPosition:"center",display:"block"}}/>
    }
    <span>{p.type}</span>
   </div>
   <div className="homeProjectCopy"><small>{p.location}</small><h3>{p.title}</h3><p>{p.copy}</p><strong>View projects <ArrowUpRight size={13}/></strong></div>
  </Link>;
}

export default function Home(){
 return <>
   <HeroSlider/>
   <ManufacturerTicker/>

   <section className="section homeIntroSection">
    <div className="wrap homeIntroGrid">
      <div><span className="eyebrow">CLADCAN / BUILDING ENVELOPE & FAÇADE</span><h2>One exterior team.<br/>More connected decisions.</h2></div>
      <div><p>CladCan coordinates exterior material supply, custom fabrication, installation and design support across residential, commercial and institutional work. The goal is straightforward: make the material, detail and field decisions work together.</p><div className="homeIntroLinks"><Link href="/about">About CladCan <ArrowUpRight size={13}/></Link><Link href="/projects">See project work <ArrowUpRight size={13}/></Link></div></div>
    </div>
   </section>

   <section className="section paper">
    <div className="wrap">
      <SectionTitle kicker="OUR SERVICES" title="Support across the exterior scope." copy="Engage CladCan for one part of the work—or coordinate material, fabrication and field execution through a more connected delivery path." link={{label:"View all services",href:"/services"}}/>
      <div className="capabilityGrid">
        {capabilities.map(({n,icon:Icon,title,copy,href})=><Link className="capabilityCard" href={href} key={title}>
          <div className="capTop"><span>{n}</span><Icon size={19}/></div><div><h3>{title}</h3><p>{copy}</p></div><span className="cardLink">Explore service <ArrowUpRight size={13}/></span>
        </Link>)}
      </div>
    </div>
   </section>

   <section className="section">
    <div className="wrap">
      <SectionTitle kicker="EXTERIOR SYSTEMS" title="Exterior systems for every project." copy="Compare the core cladding and wall systems CladCan can supply, fabricate and install across residential, commercial and industrial projects." link={{label:"Browse all exterior systems",href:"/exterior-systems"}}/>
      <div className="systemEditorialGrid">
        {systems.map((s,i)=><Link href={s.href} className={`systemEditorialCard systemCard${i+1}`} key={s.name}><Visual label={s.label} variant={s.variant} ratio="system"/><div className="systemEditorialText"><span className="eyebrow">SYSTEM {String(i+1).padStart(2,"0")}</span><h3>{s.name}</h3><p>{s.copy}</p><span>Explore system <ArrowUpRight size={12}/></span></div></Link>)}
      </div>
    </div>
   </section>

   <section className="homeTrustBand">
    <div className="wrap homeTrustGrid">
      <div><Layers3 size={20}/><strong>Connected scope</strong><span>Supply · Fabrication · Installation · Design support</span></div>
      <div><Building2 size={20}/><strong>Multiple project types</strong><span>Residential · Commercial · Institutional</span></div>
      <div><MapPin size={20}/><strong>Ontario project reach</strong><span>North York base · GTA and broader Ontario service area</span></div>
    </div>
   </section>

   <section className="section darkSection">
    <div className="wrap">
      <div className="sectionTitle" style={{gridTemplateColumns:"1.1fr .78fr auto",alignItems:"end",gap:"36px",marginBottom:"44px"}}>
        <div><span className="eyebrow">HOW WE WORK</span><h2>From project question to field execution.</h2></div>
        <p style={{fontSize:"15px",lineHeight:1.72,color:"#b8c7d0",maxWidth:"560px"}}>The exact scope changes by project, but the coordination logic stays consistent: define what is needed, select the right system, resolve interfaces, then execute the work.</p>
      </div>
      <div className="processLine">{[["01","Review & Scope","Drawings, elevations, existing conditions and project requirements."],["02","Material Strategy","System, finish, procurement, budget and schedule priorities."],["03","Detail & Coordinate","Dimensions, trims, transitions, interfaces and constructability."],["04","Fabricate & Supply","Project-specific components and coordinated material packages."],["05","Install & Close Out","Field execution, deficiencies, repair support and closeout coordination."]].map(([n,t,c])=><div key={n} style={{padding:"28px 25px",minHeight:"235px"}}><span style={{fontSize:"10px"}}>{n}</span><h3 style={{fontSize:"17px",margin:"38px 0 11px",lineHeight:1.25}}>{t}</h3><p style={{fontSize:"12px",lineHeight:1.72}}>{c}</p></div>)}</div>
    </div>
   </section>

   <section className="section homeFeaturedProjects">
    <div className="wrap">
      <SectionTitle kicker="OUR WORK IN PROGRESS" title="More projects in progress." copy="A look at some of the projects currently underway, with real construction-stage photography from active CladCan work." link={{label:"View all projects",href:"/projects"}}/>
      <div className="homeProjectGrid">{featuredProjects.slice(0,3).map((p,i)=><ProjectCard p={p} i={i} key={`row1-${i}`}/>)}</div>
      <div className="homeProjectGrid" style={{marginTop:"14px"}}>{featuredProjects.slice(3,6).map((p,i)=><ProjectCard p={p} i={i+3} key={`row2-${i}`}/>)}</div>
    </div>
   </section>

   <BeforeAfter/>

   <section className="section paper">
    <div className="wrap">
      <SectionTitle kicker="CLIENT FEEDBACK" title="What our clients say on Google." copy="See a selection of five-star feedback from customers who have worked with CladCan."/>
      <GoogleReviews/>
    </div>
   </section>

   <section className="section">
    <div className="wrap">
      <SectionTitle kicker="WHY CLADCAN" title="Built around coordination, not handoffs."/>
      <div className="proofGrid">
        <div><CheckCircle2/><h3>One connected exterior scope</h3><p>Material, fabrication and field decisions can be coordinated instead of treated as isolated packages.</p></div>
        <div><CheckCircle2/><h3>Project-specific review</h3><p>Recommendations are framed around the actual application, drawings, interfaces and constraints.</p></div>
        <div><CheckCircle2/><h3>Broad material library</h3><p>Multiple cladding, soffit and envelope-system families make comparison easier before specification.</p></div>
        <div><CheckCircle2/><h3>Useful before construction starts</h3><p>CladCan can support material selection, constructability and procurement conversations before installation.</p></div>
      </div>
    </div>
   </section>

   <section className="section paper">
    <div className="wrap">
      <SectionTitle kicker="CLADCAN INSIGHTS" title="Useful information before the next decision." copy="Material guidance, maintenance notes and planning content connected directly to systems, services and project work." link={{label:"View all insights",href:"/blog"}}/>
      <div className="insightGrid">{insights.map(x=><article key={x.title}><span className="eyebrow">{x.kicker}</span><h3>{x.title}</h3><p>{x.copy}</p><Link href={x.href}>Read article <ArrowUpRight size={12}/></Link></article>)}</div>
    </div>
   </section>

   <section className="section homeProjectStart">
    <div className="wrap homeProjectStartInner"><div><span className="eyebrow">START A PROJECT</span><h2>Have drawings, photos or simply a project question?</h2><p>Tell us what you are working on and what kind of support you need. The Project Start page is designed to route quote, supply, installation, design-support, sample and repair inquiries.</p></div><div className="homeProjectStartActions"><Link className="btn heroPrimaryCTA" href="/contact">Start your project <ArrowUpRight size={15}/></Link><a href="tel:+18449243030">Or call +1 (844) 924-3030</a></div></div>
   </section>
 </>;
}
