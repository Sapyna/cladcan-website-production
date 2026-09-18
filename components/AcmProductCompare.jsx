"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Building2, Check, FolderKanban, Layers3, Palette, PanelsTopLeft, ShieldCheck, Wrench } from "lucide-react";
import styles from "./AcmProductCompare.module.css";
import dock from "./AcmStickyMenu.module.css";

const tabs = [
  { id:"overview", number:"01", label:"Overview", icon:Layers3 },
  { id:"applications", number:"02", label:"Applications", icon:Building2 },
  { id:"benefits", number:"03", label:"Benefits", icon:ShieldCheck },
  { id:"systems", number:"04", label:"Systems", icon:PanelsTopLeft },
  { id:"components", number:"05", label:"Components", icon:Wrench },
  { id:"finishes", number:"06", label:"Finishes", icon:Palette },
  { id:"projects", number:"07", label:"Completed Projects", icon:FolderKanban },
];

const applications = [
  ["Commercial & Retail","Office, retail, hospitality, automotive and mixed-use façades where clean geometry and brand identity matter.","/images/exterior-systems/acm-acp/commercial-building-acm-panel-cladding.webp"],
  ["Residential & Multi-Residential","Custom homes, multi-residential buildings, entrances, feature walls, soffits and contemporary exterior accents.","/images/exterior-systems/acm-acp/residential-aluminum-composite-panel-facade.webp"],
  ["Institutional & Public","Schools, healthcare, airports, civic facilities and other public buildings requiring durable architectural cladding.","/images/exterior-systems/acm-acp/public-infrastructure-acm-panel-application.webp"],
  ["Canopies, Fascia & Signage","Canopies, fascia, column covers, feature bands and dimensional signage with coordinated colours and finishes.","/images/exterior-systems/acm-acp/acm-panel-commercial-signage.webp"],
];

const systems = [
  ["Dry Reveal","Route-and-return ACM cassettes with open joints, concealed attachment and a drained / ventilated rainscreen approach.","/images/exterior-systems/acm-acp/attachment-systems/dry-reveal-route-return-acm-project.jpg"],
  ["Wet Seal","Route-and-return panels with continuous backer rod and sealant at the panel joints for a sealed-joint appearance.","/images/exterior-systems/acm-acp/attachment-systems/wet-seal-route-return-acm-project.jpg"],
  ["Face-Fastened","Flat ACM panels fixed to aluminum rails with exposed colour-matched or contrasting fasteners and open-joint detailing.","/images/exterior-systems/acm-acp/attachment-systems/face-fastened-acm-project.jpg"],
  ["ALUCOBOND EasyFix®","A manufacturer-specific two-sided route-and-return attachment system used with ALUCOBOND PLUS where the project specification calls for it.","/images/exterior-systems/acm-acp/attachment-systems/easyfix-acm-project.jpg"],
];

const benefits = [
  ["Flatness & rigidity","Composite construction provides a smooth, stable face suited to crisp panel layouts and precise façade geometry."],
  ["Lightweight strength","ACM offers useful stiffness at relatively low weight, simplifying handling and reducing façade dead load compared with many heavier materials."],
  ["Fabrication flexibility","Panels can be cut, routed, drilled, folded and formed to create cassettes, returns, soffits, fascias and custom details."],
  ["Broad finish selection","Manufacturer ranges include solids, matte, metallic, mica, anodized, timber, stone, textured and specialty finishes."],
  ["Durable exterior surfaces","Architectural coating systems are designed for exterior exposure; exact performance and warranty depend on the selected manufacturer and finish."],
  ["Fire-performance options","FR and non-combustible product families are available. Final product and wall assembly must be selected to suit applicable code and tested-system requirements."],
];

const components = [
  ["Fabricated ACM panels / cassettes","Flat sheets or route-and-return panels fabricated to the approved panel layout and project geometry."],
  ["Aluminum rails & subframing","Project-specific framing and rail systems used to align, support and attach the panel assembly."],
  ["Clips, angles & extrusions","System-specific attachment pieces for corners, returns, panel edges, transitions and concealed support."],
  ["Joint spline / reveal backing","Used in selected dry-joint systems to create clean open reveals without exposed sealant."],
  ["Backer rod & sealant","Used in wet-seal joint designs to form the sealed panel-to-panel joint."],
  ["Fasteners, flashings & closures","Colour-matched screws or rivets plus perimeter flashings, closures and transition details as required by the assembly."],
];

// VERIFIED ALPOLIC FINISHES ONLY.
// Names/codes are taken from the official manufacturer charts linked with each group.
// The digital swatch previews are derived from those charts; physical samples remain the final authority.
const finishGroups = [
  ["Stock Neutrals & Metallics",[
    {name:"SMX Metallic Silver",sample:"#a9aeaa"},
    {name:"OPT Mica Platinum",sample:"#a7a8a4"},
    {name:"MFS Mica Grey",sample:"#76716d"},
    {name:"PEX Metallic Pewter",sample:"#948b86"},
    {name:"RRM River Rock Grey",sample:"#81837e"},
    {name:"BSM Slate Black",sample:"#373736"},
  ],"ALPOLIC Stock Color Chart · May 2026","https://alpolic-americas.com/wp-content/uploads/2026/05/ALPOLIC-Stock-Color-Chart-05.13.26.pdf"],
  ["Anodized",[
    {name:"CLR Clear",sample:"linear-gradient(135deg,#d9d8d5 0%,#bfc0bf 44%,#efefef 100%)"},
    {name:"FSR Frost",sample:"linear-gradient(135deg,#e8e3da 0%,#d8d3ca 52%,#f0ece4 100%)"},
    {name:"CMR Champagne",sample:"linear-gradient(135deg,#c7b9a8 0%,#a99784 52%,#d2c6b7 100%)"},
    {name:"LBR Light Bronze",sample:"linear-gradient(135deg,#bd8c4f 0%,#9d6f39 55%,#cb9d5c 100%)"},
    {name:"MBR Medium Bronze",sample:"linear-gradient(135deg,#81512b 0%,#5e3419 56%,#93613a 100%)"},
    {name:"DBR Dark Bronze",sample:"linear-gradient(135deg,#60453b 0%,#3f2d27 55%,#706058 100%)"},
  ],"ALPOLIC Anodized Color Chart","https://alpolic-americas.com/wp-content/uploads/2021/08/Alpolic-Anodized-Color-Chart.pdf"],
  ["Timber & Pattern",[
    {name:"QBB Teak",sample:"repeating-linear-gradient(90deg,#60401f 0 8px,#563617 8px 13px,#73502a 13px 21px,#432912 21px 26px,#694720 26px 34px)"},
    {name:"MPL Maple",sample:"repeating-linear-gradient(92deg,#c88269 0 10px,#cb8770 10px 15px,#bf745d 15px 23px,#d08e77 23px 31px)"},
    {name:"WLN Walnut",sample:"repeating-linear-gradient(92deg,#9a6045 0 9px,#844932 9px 15px,#a6674d 15px 24px,#75402d 24px 30px)"},
    {name:"QAE Mahogany",sample:"repeating-linear-gradient(90deg,#7f2117 0 8px,#68140f 8px 14px,#91291d 14px 22px,#59110d 22px 29px)"},
    {name:"QCP HT Bamboo",sample:"repeating-linear-gradient(90deg,#bc853f 0 6px,#a76b2d 6px 10px,#c7924a 10px 17px,#956028 17px 22px)"},
    {name:"FZZ Brushed Metal",sample:"repeating-linear-gradient(90deg,#d0d1cf 0 1px,#afb1af 1px 3px,#e1e2e0 3px 5px,#b9bbb9 5px 7px)"},
    {name:"QCO Rusted Steel",sample:"radial-gradient(circle at 28% 30%,rgba(110,54,28,.55) 0 12%,transparent 13%),radial-gradient(circle at 70% 66%,rgba(210,116,57,.42) 0 16%,transparent 17%),linear-gradient(135deg,#b56633,#8d4727)"},
  ],"ALPOLIC Pattern Series Color Chart","https://alpolic-americas.com/wp-content/uploads/2021/08/ALPOLIC-Pattern-Series-Color-Chart.pdf"],
];
const projects = [
  {title:"Luxclad ACM Façade", meta:"Richmond Hill, ON · Commercial", text:"CladCan project record featuring ACM façade work with clean contemporary panel geometry.", href:"/projects/luxclad-richmond-hill"},
  {title:"ACM + Stucco Façade", meta:"Toronto, ON · Commercial", text:"A mixed-material exterior combining ACM panels and stucco to create contrast, depth and a contemporary façade expression.", href:"/projects/acm-stucco-toronto"},
  {title:"ACM + Cedar Soffit & Fascia", meta:"Toronto, ON · Multi-material", text:"A CladCan project combining ACM with cedar soffit and fascia detailing for a layered exterior material palette.", href:"/projects/acm-cedar-soffit-fascia"},
];

function Panel({active}){
  if(active==="overview") return <div className={styles.overviewGrid}><div><p className={styles.kicker}>PRODUCT OVERVIEW</p><h2>Architectural aluminum composite material, fabricated around the project.</h2><p>ACM (Aluminum Composite Material), often referred to as ACP (Aluminum Composite Panel), is made from two aluminum skins bonded to a composite core. The construction creates a lightweight, flat and rigid sheet that can be cut, routed, folded and formed into precise exterior panels and architectural details.</p><p>Core type, aluminum skin, coating, sheet format, attachment system and tested wall assembly vary by manufacturer and product series. CladCan coordinates material selection, field dimensions, shop drawings, CNC fabrication, delivery and installation around the project requirements.</p><p className={styles.scopeNote}><strong>CladCan supply range:</strong> exterior ACM cladding, soffits, fascia, canopies, feature elements and signage for residential, commercial and institutional work across Ontario.</p><div className={styles.brandLine}>ALPOLIC · ALUBOND · ALUCOIL · LARSON · REYNOBOND · ALUCOBOND · ALCOTEX · ALFREX</div></div><div className={styles.figure}><Image src="/images/exterior-systems/acm-acp/aluminum-composite-panel-layer-construction.webp" alt="Diagram showing the layered construction of aluminum composite material" fill sizes="45vw" /></div></div>;
  if(active==="applications") return <div><p className={styles.kicker}>APPLICATIONS</p><h2>One façade material, many architectural roles.</h2><p className={styles.sectionNote}>ACM is used where project teams need a lightweight metal appearance, precise panel geometry and a broad finish palette. Final product and assembly selection depends on building type, exposure and code requirements.</p><div className={styles.imageGrid}>{applications.map(([title,text,image])=><article key={title}><div className={styles.cardImage}><Image src={image} alt={`${title} aluminum composite panel application`} fill sizes="35vw" /></div><div className={styles.cardCopy}><h3>{title}</h3><p>{text}</p></div></article>)}</div></div>;
  if(active==="benefits") return <div className={styles.benefitsPanel}><p className={styles.kicker}>WHY CHOOSE ACM</p><h2>Performance, fabrication freedom and a controlled architectural finish.</h2><div className={styles.featureGrid}>{benefits.map(([title,text],i)=><article key={title}><span>{String(i+1).padStart(2,"0")}</span><Check size={20}/><h3>{title}</h3><p>{text}</p></article>)}</div></div>;
  if(active==="systems") return <div><p className={styles.kicker}>ATTACHMENT SYSTEMS</p><h2>Joint and attachment strategy are part of the façade design.</h2><p className={styles.sectionNote}>The system must be coordinated with the selected ACM manufacturer, substrate, wall assembly, drainage strategy, thermal movement, wind loads and applicable project requirements.</p><div className={styles.systemGrid}>{systems.map(([title,text,image])=><article key={title}><div className={styles.systemImage}><Image src={image} alt={`${title} ACM attachment system`} fill sizes="35vw" unoptimized /></div><div><h3>{title}</h3><p>{text}</p></div></article>)}</div><p className={styles.referenceNote}>System names such as ALUCOBOND EasyFix® are manufacturer-specific. They are shown only where they correspond to an actual published ACM system.</p></div>;
  if(active==="components") return <div><p className={styles.kicker}>SYSTEM COMPONENTS</p><h2>The panel is only one part of the complete façade assembly.</h2><p className={styles.sectionNote}>Not every ACM system uses every component below. Components are selected to suit the approved panel system, joint type, wall build-up and manufacturer details.</p><div className={styles.componentGrid}><div className={styles.figure}><Image src="/images/exterior-systems/acm-acp/cnc-fabrication-aluminum-composite-panels.webp" alt="CNC fabrication of aluminum composite panels" fill sizes="40vw" /></div><div>{components.map(([title,text],i)=><div className={styles.componentItem} key={title}><span>{String(i+1).padStart(2,"0")}</span><div><strong>{title}</strong><p>{text}</p></div></div>)}</div></div></div>;
  if(active==="finishes") return <div className={styles.finishesPanel}><p className={styles.kicker}>COLOURS & FINISHES</p><h2>Finish families grounded in current manufacturer colour charts.</h2><p className={styles.sectionNote}>The swatches below use finish names and visual references from ALPOLIC's current published stock colour chart and finish collections. They are shown as digital references only; final colour, gloss, directionality and texture must be approved from the selected manufacturer's current physical sample.</p><div className={styles.finishGrid}>{finishGroups.map(([title,colors,source,href])=><article key={title}><h3>{title}</h3><div className={styles.swatches}>{colors.map(({name,sample})=><span key={name} title={name} aria-label={name} style={{"--swatch":sample}} />)}</div><a className="acmFinishSource" href={href} target="_blank" rel="noreferrer">Source: {source}</a></article>)}</div><p className={styles.referenceNote}>Only finishes that can be traced to the official ALPOLIC charts above are shown. Screen previews are for navigation; final colour, gloss, directionality and texture must be confirmed from the current manufacturer chart and physical sample.</p></div>;
  return <div><p className={styles.kicker}>COMPLETED PROJECTS</p><h2>ACM in completed CladCan work.</h2><p className={styles.projectsIntro}>These links point to existing CladCan project records identified as ACM or ACM-combination work. Project-specific products, quantities and performance claims are only added when supported by verified project information.</p><div className={styles.projectGrid}>{projects.map((project,i)=><Link className={styles.projectCard} href={project.href} key={project.title}><div className={`${styles.projectVisual} ${styles[`projectVisual${i+1}`]}`}><span>ACM PROJECT</span><strong>{String(i+1).padStart(2,"0")}</strong></div><div className={styles.projectCopy}><small>{project.meta}</small><h3>{project.title}</h3><p>{project.text}</p><span>View project <ArrowUpRight size={15}/></span></div></Link>)}</div></div>;
}

function Hero({reversed=false,label}){
  return <section className={`${styles.hero} ${reversed?styles.heroReversed:""}`}>
    <div className={styles.heroCopy}><p className={styles.kicker}>{label}</p><h1>ACM / ACP Panels</h1><h2>Precision-built façades.<br/>Broad design freedom.</h2><p>Architectural aluminum composite material for exterior cladding, soffits, canopies, feature elements and signage — supported from material selection and shop drawings through fabrication and installation.</p><Link href="/contact">Request a Quote <ArrowUpRight size={17}/></Link></div>
    <div className={styles.heroMedia}><Image src="/images/exterior-systems/acm-acp/acm-aluminum-composite-panel-residential-hero.webp" alt="Architectural aluminum composite panel façade" fill priority sizes="58vw" /></div>
  </section>;
}

function TabMenu({active,setActive,side,menuRef,dockMode,dockStyle}){
  const dockClass=dockMode==="fixed"?dock.fixed:dockMode==="bottom"?dock.bottom:"";
  return <aside ref={menuRef} style={dockStyle} className={`${styles.tabs} ${dock.menu} ${side==="right"?styles.tabsRight:""} ${dockClass}`} aria-label="ACM product sections">{tabs.map(({id,number,label,icon:Icon})=><button key={id} className={active===id?styles.active:""} onClick={()=>setActive(id)}><span>{number}</span><Icon size={18}/><strong>{label}</strong></button>)}</aside>;
}

function Tabbed({side="left",reversed=false,theme="default"}){
  const [active,setActive]=useState("overview");
  const workspaceRef=useRef(null);
  const slotRef=useRef(null);
  const menuRef=useRef(null);
  const [dockState,setDockState]=useState({mode:"normal",left:0,width:0});
  const label=theme==="architectural-stone"?"COLOR STUDY · ARCHITECTURAL STONE":reversed?"CONCEPT D · LEFT TABS · REVERSED HERO":side==="right"?"CONCEPT C · RIGHT TABS":"CONCEPT B · LEFT TABS";

  useEffect(()=>{
    const TOP=92;
    const updateDock=()=>{
      if(!workspaceRef.current || !slotRef.current || !menuRef.current || window.innerWidth<=760){
        setDockState({mode:"normal",left:0,width:0});
        return;
      }
      const workspaceRect=workspaceRef.current.getBoundingClientRect();
      const slotRect=slotRef.current.getBoundingClientRect();
      const menuHeight=menuRef.current.offsetHeight;
      if(workspaceRect.top>=TOP){
        setDockState({mode:"normal",left:0,width:slotRect.width});
      }else if(workspaceRect.bottom<=TOP+menuHeight){
        setDockState({mode:"bottom",left:0,width:slotRect.width});
      }else{
        setDockState({mode:"fixed",left:slotRect.left,width:slotRect.width});
      }
    };
    updateDock();
    window.addEventListener("scroll",updateDock,{passive:true});
    window.addEventListener("resize",updateDock);
    return ()=>{
      window.removeEventListener("scroll",updateDock);
      window.removeEventListener("resize",updateDock);
    };
  },[active,side]);

  const dockStyle=dockState.mode==="fixed"?{left:`${dockState.left}px`,width:`${dockState.width}px`}:dockState.mode==="bottom"?{width:"100%"}:undefined;
  const menu=<TabMenu active={active} setActive={setActive} side={side} menuRef={menuRef} dockMode={dockState.mode} dockStyle={dockStyle}/>;
  const themeClass=theme==="architectural-stone"?styles.architecturalStone:"";

  return <article className={`${styles.page} ${themeClass}`}><Hero reversed={reversed} label={label}/><section ref={workspaceRef} className={`${styles.workspace} ${side==="right"?styles.workspaceRight:""}`}>{side==="left"&&<div ref={slotRef} className={dock.slot}>{menu}</div>}<main className={`${styles.panel} ${active==="benefits"?styles.panelBenefits:""} ${active==="finishes"?styles.panelFinishes:""}`}><Panel active={active}/></main>{side==="right"&&<div ref={slotRef} className={dock.slot}>{menu}</div>}</section></article>;
}

function Horizontal(){
  return <article className={styles.page}><Hero label="CONCEPT A · HORIZONTAL NAVIGATION"/><nav className={styles.horizontalNav}>{tabs.map(({id,number,label,icon:Icon})=><a href={`#compare-${id}`} key={id}><Icon size={17}/><span>{number}</span><strong>{label}</strong></a>)}</nav><main className={styles.longform}>{tabs.map(({id,number,label})=><section id={`compare-${id}`} className={styles.longSection} key={id}><div className={styles.longHead}><span>{number}</span><strong>{label}</strong></div><Panel active={id}/></section>)}</main></article>;
}

export default function AcmProductCompare({variant,theme="default"}){
  if(variant==="horizontal") return <Horizontal/>;
  if(variant==="right") return <Tabbed side="right" theme={theme}/>;
  if(variant==="left-reversed") return <Tabbed side="left" reversed theme={theme}/>;
  return <Tabbed side="left" theme={theme}/>;
}
