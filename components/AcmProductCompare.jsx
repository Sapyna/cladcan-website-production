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

// Finish names and visual references are grounded in ALPOLIC's current official stock colour chart
// and published finish collections. Digital previews follow the manufacturer chart; physical samples govern final selection.
const finishGroups = [
  ["Solid & Matte",[
    {name:"Bone White · BNT",sample:"#e7e3d9"},
    {name:"Aluminum Grey · AGT",sample:"#a0a6a3"},
    {name:"River Rock Grey · RRM",sample:"#8c918d"},
    {name:"Slate Black · BSM",sample:"#4a4a48"},
    {name:"Bronze · JBR",sample:"#332d24"},
    {name:"Terra Cotta · TRM",sample:"#b66d58"},
  ]],
  ["Metallic & Mica",[
    {name:"Metallic Silver · SMX",sample:"linear-gradient(135deg,#b6bbb8 0%,#a5aaa7 48%,#c6cac7 100%)"},
    {name:"Mica Platinum · OPT",sample:"linear-gradient(135deg,#b7b8b5 0%,#9fa09e 52%,#c3c4c1 100%)"},
    {name:"Metallic Champagne · CMX",sample:"linear-gradient(135deg,#b9b6ad 0%,#a8a59e 50%,#c5c1b6 100%)"},
    {name:"Metallic Pewter · PEX",sample:"linear-gradient(135deg,#a09b95 0%,#8c8883 52%,#aaa59f 100%)"},
    {name:"Mica Champagne · MCU",sample:"linear-gradient(135deg,#a99282 0%,#958071 50%,#b09c8b 100%)"},
    {name:"Mica Grey · MFS",sample:"linear-gradient(135deg,#85817c 0%,#74716d 50%,#908c86 100%)"},
  ]],
  ["Anodized & Natural Metal",[
    {name:"Clear Anodized · CLR",sample:"linear-gradient(135deg,#aeb8b5 0%,#9ca6a3 50%,#bbc3c0 100%)"},
    {name:"Mica Anodic Clear · MNC",sample:"linear-gradient(135deg,#b1b2b0 0%,#a1a2a0 50%,#bebfbc 100%)"},
    {name:"Stainless · 4HL",sample:"repeating-linear-gradient(90deg,#99948e 0 2px,#aaa59f 2px 4px,#8e8984 4px 6px)"},
    {name:"Quartz Zinc · AZZ",sample:"linear-gradient(135deg,#969590 0%,#868580 50%,#a4a39d 100%)"},
    {name:"Copper · C12",sample:"linear-gradient(135deg,#b96a3d 0%,#9f552d 50%,#ca7b4b 100%)"},
    {name:"Metallic Bronze · MBX",sample:"linear-gradient(135deg,#a18c78 0%,#8f7b69 50%,#ad9986 100%)"},
  ]],
  ["Timber / Woodgrain",[
    {name:"Maple · MPL",sample:"repeating-linear-gradient(92deg,#dfa56f 0 7px,#ca8957 7px 10px,#e7b17a 10px 16px,#b87449 16px 18px)"},
    {name:"Teak · QBB",sample:"repeating-linear-gradient(92deg,#a66a2f 0 6px,#7d491f 6px 9px,#b87a38 9px 15px,#633817 15px 18px)"},
    {name:"Walnut · WLN",sample:"repeating-linear-gradient(94deg,#b47743 0 5px,#92562e 5px 8px,#c0834c 8px 13px,#75431f 13px 16px)"},
    {name:"Mahogany · QAE",sample:"repeating-linear-gradient(93deg,#8d3f30 0 6px,#6d2c22 6px 9px,#9d4a37 9px 14px,#5e251f 14px 17px)"},
    {name:"Japanese Birch · QJB",sample:"repeating-linear-gradient(94deg,#e3c8a5 0 7px,#d5b58d 7px 10px,#ecd2b1 10px 16px,#cba67d 16px 18px)"},
    {name:"Harvest Trail Bamboo · QCP",sample:"repeating-linear-gradient(90deg,#d39a45 0 5px,#b87529 5px 8px,#e0aa58 8px 14px,#995e21 14px 17px)"},
  ]],
  ["Pattern & Specialty",[
    {name:"Black Granite · LBG",sample:"radial-gradient(circle at 24% 26%,#8a8b87 0 3%,transparent 4%),radial-gradient(circle at 68% 62%,#bbb9b3 0 2.5%,transparent 3.5%),linear-gradient(135deg,#4b4c4a,#272826)"},
    {name:"Rusted Steel · QCO",sample:"radial-gradient(circle at 25% 30%,rgba(120,61,35,.55) 0 12%,transparent 13%),radial-gradient(circle at 70% 60%,rgba(210,130,75,.5) 0 15%,transparent 16%),linear-gradient(135deg,#b96e42,#8c4d31)"},
    {name:"Brushed Metal · FZZ",sample:"repeating-linear-gradient(90deg,#bebfbc 0 1px,#9fa19f 1px 3px,#d0d1ce 3px 5px)"},
    {name:"Arctic Linen · QEN",sample:"repeating-linear-gradient(135deg,#ddd8ce 0 5px,#cec7ba 5px 8px,#e8e3da 8px 12px)"},
    {name:"Zebrawood · QBT",sample:"repeating-linear-gradient(92deg,#4c2e1c 0 5px,#2f1c12 5px 8px,#6b4227 8px 12px,#20120c 12px 15px)"},
    {name:"Rio Aleon · QAW",sample:"repeating-linear-gradient(94deg,#8a4d27 0 6px,#5f301b 6px 9px,#9e5d32 9px 14px,#3f2115 14px 17px)"},
  ]],
  ["Accent Solids",[
    {name:"Red · TOR",sample:"#bf2026"},
    {name:"Green · BGN",sample:"#0d9448"},
    {name:"Blue · HYB",sample:"#174e82"},
    {name:"Yellow · BYL",sample:"#f4c917"},
    {name:"Charcoal · CNC",sample:"#394043"},
    {name:"Black · TOB",sample:"#15191b"},
  ]],
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
  if(active==="finishes") return <div className={styles.finishesPanel}><p className={styles.kicker}>COLOURS & FINISHES</p><h2>Finish families grounded in current manufacturer colour charts.</h2><p className={styles.sectionNote}>The swatches below use finish names and visual references from ALPOLIC's current published stock colour chart and finish collections. They are shown as digital references only; final colour, gloss, directionality and texture must be approved from the selected manufacturer's current physical sample.</p><div className={styles.finishGrid}>{finishGroups.map(([title,colors])=><article key={title}><h3>{title}</h3><div className={styles.swatches}>{colors.map(({name,sample})=><span key={name} title={name} aria-label={name} style={{"--swatch":sample}} />)}</div></article>)}</div><p className={styles.referenceNote}>Source basis: current ALPOLIC stock colour chart and published finish collections. Screen rendering can never replace a physical sample, especially for metallic, mica, anodized and patterned finishes.</p></div>;
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
