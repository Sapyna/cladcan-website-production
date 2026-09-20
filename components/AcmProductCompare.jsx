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
  ["Institutional & Public","Schools, healthcare, airports, civic facilities and other public buildings requiring durable architectural cladding.","/images/exterior-systems/acm-acp/residential-aluminum-composite-panel-facade.webp"],
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

// CROSS-BRAND ACM FINISH LIBRARY.
// Categories reflect finish families that recur across major ACM/MCM manufacturers.
// Each circle below is an exact supplier example taken from a current official manufacturer chart/sample.
// We do not claim the same exact finish name exists at every manufacturer.
const finishGroups = [
  ["Core Architectural Colours",[
    {brand:"ALUCOBOND",name:"Pure White · RVW",image:"/images/exterior-systems/acm-acp/finishes/market/alucobond-pure-white.webp"},
    {brand:"ALUCOBOND",name:"Silver Metallic",image:"/images/exterior-systems/acm-acp/finishes/market/alucobond-silver-metallic.webp"},
    {brand:"ALUCOIL / LARSON",name:"Textured Fine Jet Black 9005",image:"/images/exterior-systems/acm-acp/finishes/market/alucoil-jet-black-9005.webp"},
    {brand:"ALUCOIL / LARSON",name:"Textured Fine Grey Black 7021",image:"/images/exterior-systems/acm-acp/finishes/market/alucoil-grey-black-7021.webp"},
    {brand:"ALFREX",name:"Charcoal",image:"/images/exterior-systems/acm-acp/finishes/market/alfrex-charcoal.webp"},
    {brand:"ALPOLIC",name:"Slate Black · BSM · Matte",image:"/images/exterior-systems/acm-acp/finishes/official-alpolic/bsm-slate-black.webp"},
  ]],
  ["Metallic & Mica",[
    {brand:"ALFREX",name:"Bright Silver Metallic",image:"/images/exterior-systems/acm-acp/finishes/market/alfrex-bright-silver-metallic.webp"},
    {brand:"ALUCOIL / LARSON",name:"Silver Metallic",image:"/images/exterior-systems/acm-acp/finishes/market/alucoil-silver-metallic.webp"},
    {brand:"ALUCOBOND",name:"Silver Metallic",image:"/images/exterior-systems/acm-acp/finishes/market/alucobond-silver-metallic.webp"},
    {brand:"ALUCOIL / LARSON",name:"Champagne Metallic",image:"/images/exterior-systems/acm-acp/finishes/market/alucoil-champagne-metallic.webp"},
    {brand:"ALFREX",name:"PEX Pewter Metallic",image:"/images/exterior-systems/acm-acp/finishes/market/alfrex-pex-pewter-metallic.webp"},
    {brand:"ALPOLIC",name:"Mica Grey · MFS",image:"/images/exterior-systems/acm-acp/finishes/official-alpolic/mfs-mica-grey.webp"},
  ]],
  ["Anodized & Natural Metal",[
    {brand:"ALUCOBOND",name:"Clear Anodized",image:"/images/exterior-systems/acm-acp/finishes/market/alucobond-clear-anodized.webp"},
    {brand:"ALUCOIL / LARSON",name:"Anodic Brushed Matt",image:"/images/exterior-systems/acm-acp/finishes/market/alucoil-anodic-brushed-matt.webp"},
    {brand:"ALUCOIL / LARSON",name:"Real Anodized Natural",image:"/images/exterior-systems/acm-acp/finishes/market/alucoil-real-anodized-natural.webp"},
    {brand:"ALFREX",name:"Anodic Clear Mica",image:"/images/exterior-systems/acm-acp/finishes/market/alfrex-anodic-clear-mica.webp"},
    {brand:"ALFREX",name:"Faux Zinc",image:"/images/exterior-systems/acm-acp/finishes/market/alfrex-faux-zinc.webp"},
    {brand:"ALUCOBOND",name:"Zinc",image:"/images/exterior-systems/acm-acp/finishes/market/alucobond-zinc.webp"},
  ]],
  ["Woodgrain",[
    {brand:"ALPOLIC",name:"Maple · MPL",image:"/images/exterior-systems/acm-acp/finishes/official-alpolic/mpl-maple.webp"},
    {brand:"ALPOLIC",name:"Teak · QBB",image:"/images/exterior-systems/acm-acp/finishes/official-alpolic/qbb-teak.webp"},
    {brand:"ALFREX",name:"Golden Oak",image:"/images/exterior-systems/acm-acp/finishes/market/alfrex-golden-oak.webp"},
    {brand:"ALFREX",name:"Dark Walnut",image:"/images/exterior-systems/acm-acp/finishes/market/alfrex-dark-walnut.webp"},
    {brand:"ALUCOBOND",name:"Rustic Walnut",image:"/images/exterior-systems/acm-acp/finishes/market/alucobond-rustic-walnut.webp"},
    {brand:"ALUCOBOND",name:"Chestnut",image:"/images/exterior-systems/acm-acp/finishes/market/alucobond-chestnut.webp"},
  ]],
  ["Stone, Corten & Natural Pattern",[
    {brand:"ALUBOND Canada",name:"Travertine · ALG-206",image:"/images/exterior-systems/acm-acp/finishes/market/alubond-travertine.webp"},
    {brand:"ALUBOND Canada",name:"Granito Nero · ALG-202",image:"/images/exterior-systems/acm-acp/finishes/market/alubond-granito-nero.webp"},
    {brand:"ALUBOND Canada",name:"Bianco Carrara · ALG-205",image:"/images/exterior-systems/acm-acp/finishes/market/alubond-bianco-carrara.webp"},
    {brand:"ALFREX",name:"Tile Corten",image:"/images/exterior-systems/acm-acp/finishes/market/alfrex-tile-corten.webp"},
    {brand:"ALUCOBOND",name:"Rusted Metal",image:"/images/exterior-systems/acm-acp/finishes/market/alucobond-rusted-metal.webp"},
    {brand:"ALPOLIC",name:"Rusted Steel · QCO",image:"/images/exterior-systems/acm-acp/finishes/official-alpolic/qco-rusted-steel.webp"},
  ]],
  ["Matte, Textured & Specialty",[
    {brand:"ALUCOBOND",name:"Ecru",image:"/images/exterior-systems/acm-acp/finishes/market/alucobond-ecru.webp"},
    {brand:"ALUCOBOND",name:"Flint",image:"/images/exterior-systems/acm-acp/finishes/market/alucobond-flint.webp"},
    {brand:"ALUCOIL / LARSON",name:"Textured Fine Pure White 9010",image:"/images/exterior-systems/acm-acp/finishes/market/alucoil-textured-pure-white.webp"},
    {brand:"ALUCOIL / LARSON",name:"Textured Fine Anthracite Grey 7016",image:"/images/exterior-systems/acm-acp/finishes/market/alucoil-textured-anthracite.webp"},
    {brand:"ALUBOND Canada",name:"Grey Sparkle · ALP-505",image:"/images/exterior-systems/acm-acp/finishes/market/alubond-grey-sparkle.webp"},
    {brand:"ALUBOND Canada",name:"Silver Sparkle · ALP-503",image:"/images/exterior-systems/acm-acp/finishes/market/alubond-silver-sparkle.webp"},
  ]],
];

const finishSources = [
  ["ALPOLIC","https://alpolic-americas.com/products/finishes/"],
  ["ALUCOBOND","https://www.alucobondusa.com/samples-and-finishes.html"],
  ["ALFREX","https://alfrexusa.com/finishes/"],
  ["ALUCOIL / LARSON","https://alucoil.com/wp-content/uploads/2024/04/CARTA_COLOR_ALUCOIL.pdf"],
  ["ALUBOND Canada","https://alubond.com/canada-colours-and-finishes/"],
];
const projects = [
  {title:"Luxclad ACM Façade", meta:"Richmond Hill, ON · Commercial", text:"CladCan project record featuring ACM façade work with clean contemporary panel geometry.", href:"/projects/luxclad-richmond-hill", image:"/images/projects/richmond-hill-medical-mall/richmond-hill-medical-mall-acm-facade-completed-side-perspective.webp", natural:true},
  {title:"ACM Façade", meta:"Toronto, ON · Commercial", text:"A Toronto ACM façade project featuring clean panel geometry and a contemporary exterior expression.", href:"/projects/acm-stucco-toronto", image:"/images/projects/acm-facade-toronto/toronto-acm-facade-completed-wide-view.webp"},
  {title:"ACM + Cedar Soffit & Fascia", meta:"Toronto, ON · Multi-material", text:"A CladCan project combining ACM with cedar soffit and fascia detailing for a layered exterior material palette.", href:"/projects/acm-cedar-soffit-fascia", image:"/images/exterior-systems/natural-wood/cedar/cedar-soffit-acm-fascia-residential-project.webp", natural:true},
];

function Panel({active}){
  if(active==="overview") return <div className={styles.overviewGrid}><div><p className={styles.kicker}>PRODUCT OVERVIEW</p><h2>Architectural aluminum composite material, fabricated around the project.</h2><p>ACM (Aluminum Composite Material), often referred to as ACP (Aluminum Composite Panel), is made from two aluminum skins bonded to a composite core. The construction creates a lightweight, flat and rigid sheet that can be cut, routed, folded and formed into precise exterior panels and architectural details.</p><p>Core type, aluminum skin, coating, sheet format, attachment system and tested wall assembly vary by manufacturer and product series. CladCan coordinates material selection, field dimensions, shop drawings, CNC fabrication, delivery and installation around the project requirements.</p><p className={styles.scopeNote}><strong>CladCan supply range:</strong> exterior ACM cladding, soffits, fascia, canopies, feature elements and signage for residential, commercial and institutional work across Ontario.</p><div className={styles.brandLine}>ALPOLIC · ALUBOND · ALUCOIL · LARSON · REYNOBOND · ALUCOBOND · ALCOTEX · ALFREX</div></div><div className={styles.figure}><Image src="/images/exterior-systems/acm-acp/aluminum-composite-panel-layer-construction.webp" alt="Diagram showing the layered construction of aluminum composite material" fill sizes="45vw" /></div></div>;
  if(active==="applications") return <div><p className={styles.kicker}>APPLICATIONS</p><h2>One façade material, many architectural roles.</h2><p className={styles.sectionNote}>ACM is used where project teams need a lightweight metal appearance, precise panel geometry and a broad finish palette. Final product and assembly selection depends on building type, exposure and code requirements.</p><div className={styles.imageGrid}>{applications.map(([title,text,image])=><article key={title}><div className={styles.cardImage}><Image src={image} alt={`${title} aluminum composite panel application`} fill sizes="35vw" /></div><div className={styles.cardCopy}><h3>{title}</h3><p>{text}</p></div></article>)}</div></div>;
  if(active==="benefits") return <div><p className={styles.kicker}>WHY CHOOSE ACM</p><h2>Performance, fabrication freedom and a controlled architectural finish.</h2><figure className={styles.benefitsVisual}><Image src="/images/exterior-systems/acm-acp/public-infrastructure-acm-panel-application.webp" alt="Residential façade finished with architectural ACM panels" fill sizes="(max-width: 900px) 100vw, 70vw" /></figure><div className={styles.benefitRows}>{benefits.map(([title,text],i)=><article className={styles.benefitRow} key={title}><span>{String(i+1).padStart(2,"0")}</span><div><h3>{title}</h3><p>{text}</p></div><Check size={18}/></article>)}</div></div>;
  if(active==="systems") return <div><p className={styles.kicker}>ATTACHMENT SYSTEMS</p><h2>Joint and attachment strategy are part of the façade design.</h2><p className={styles.sectionNote}>The system must be coordinated with the selected ACM manufacturer, substrate, wall assembly, drainage strategy, thermal movement, wind loads and applicable project requirements.</p><div className={styles.systemGrid}>{systems.map(([title,text,image])=><article key={title}><div className={styles.systemImage}><Image src={image} alt={`${title} ACM attachment system`} fill sizes="35vw" unoptimized /></div><div><h3>{title}</h3><p>{text}</p></div></article>)}</div><p className={styles.referenceNote}>System names such as ALUCOBOND EasyFix® are manufacturer-specific. They are shown only where they correspond to an actual published ACM system.</p></div>;
  if(active==="components") return <div><p className={styles.kicker}>SYSTEM COMPONENTS</p><h2>The panel is only one part of the complete façade assembly.</h2><p className={styles.sectionNote}>Not every ACM system uses every component below. Components are selected to suit the approved panel system, joint type, wall build-up and manufacturer details.</p><div className={styles.componentGrid}><div className={styles.figure}><Image src="/images/exterior-systems/acm-acp/commercial-building-acm-panel-cladding.webp" alt="Wide commercial building façade finished with ACM panel cladding" fill sizes="40vw" /></div><div>{components.map(([title,text],i)=><div className={styles.componentItem} key={title}><span>{String(i+1).padStart(2,"0")}</span><div><strong>{title}</strong><p>{text}</p></div></div>)}</div></div></div>;
  if(active==="finishes") return <div className={styles.finishesPanel}><p className={styles.kicker}>COLOURS & FINISHES</p><h2>Shared finish families across leading ACM manufacturers.</h2><p className={styles.sectionNote}>Across major ACM manufacturers, the most consistently recurring architectural colour families include white, silver, black, charcoal and dark grey, followed by metallic and mica, anodized and natural metal, woodgrain, stone and natural patterns, and matte or textured specialties. The circles below are exact supplier examples selected from current standard, stock or featured ranges and grouped by shared visual family rather than by brand.</p><div className={styles.finishGrid}>{finishGroups.map(([title,colors])=><article key={title}><h3>{title}</h3><div className={styles.swatches}>{colors.map(({brand,name,image})=><span key={`${brand}-${name}`} title={`${brand} · ${name}`} aria-label={`${brand} · ${name}`}><i aria-hidden="true"><img src={image} alt="" /></i></span>)}</div></article>)}</div><div className="acmFinishSources"><span>Manufacturer sources:</span>{finishSources.map(([brand,href])=><a key={brand} href={href} target="_blank" rel="noreferrer">{brand}<ArrowUpRight size={12}/></a>)}</div><p className={styles.referenceNote}>Each circle is labeled with its manufacturer and exact finish name. These examples represent recurring market finish families; they do not imply that one identical finish name is stocked by every manufacturer. Final colour, gloss and texture should be confirmed from the selected manufacturer's current chart and physical sample.</p></div>;
  return <div><p className={styles.kicker}>COMPLETED PROJECTS</p><h2>ACM in completed CladCan work.</h2><p className={styles.projectsIntro}>These links point to existing CladCan project records identified as ACM or ACM-combination work. Project-specific products, quantities and performance claims are only added when supported by verified project information.</p><div className={styles.projectGrid}>{projects.map((project,i)=><Link className={styles.projectCard} href={project.href} key={project.title}><div className={`${styles.projectVisual} ${project.natural?styles.projectVisualNatural:""}`}>{project.natural?<img className={styles.projectNaturalImage} src={project.image} alt={project.title}/>:<Image src={project.image} alt={project.title} fill sizes="(max-width: 900px) 100vw, 30vw" />}<span>ACM PROJECT</span><strong>{String(i+1).padStart(2,"0")}</strong></div><div className={styles.projectCopy}><small>{project.meta}</small><h3>{project.title}</h3><p>{project.text}</p><span>View project <ArrowUpRight size={15}/></span></div></Link>)}</div></div>;
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

  return <article className={`${styles.page} ${themeClass}`}><Hero reversed={reversed} label={label}/><section ref={workspaceRef} className={`${styles.workspace} ${side==="right"?styles.workspaceRight:""}`}>{side==="left"&&<div ref={slotRef} className={dock.slot}>{menu}</div>}<main className={`${styles.panel} ${active==="finishes"?styles.panelFinishes:""}`}><Panel active={active}/></main>{side==="right"&&<div ref={slotRef} className={dock.slot}>{menu}</div>}</section></article>;
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
