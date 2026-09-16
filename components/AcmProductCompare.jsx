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
  ["Commercial","Retail, office, hospitality and mixed-use façades.","/images/exterior-systems/acm-acp/commercial-building-acm-panel-cladding.webp"],
  ["Residential","Custom homes, feature walls, entrances and soffits.","/images/exterior-systems/acm-acp/residential-aluminum-composite-panel-facade.webp"],
  ["Institutional","Schools, healthcare and public infrastructure.","/images/exterior-systems/acm-acp/public-infrastructure-acm-panel-application.webp"],
  ["Signage & Identity","Canopies, branded façades and dimensional signage.","/images/exterior-systems/acm-acp/acm-panel-commercial-signage.webp"],
];

const systems = [
  ["Dry Reveal","Open-joint route-and-return panel system.","/images/exterior-systems/acm-acp/attachment-systems/dry-reveal-route-return-acm-project.jpg"],
  ["EasyFix","Two-sided return assembly with an open joint.","/images/exterior-systems/acm-acp/attachment-systems/easyfix-acm-project.jpg"],
  ["FaceFastened","Flat ACM panels fixed to aluminum rails.","/images/exterior-systems/acm-acp/attachment-systems/face-fastened-acm-project.jpg"],
  ["Wet Seal","Route-and-return panels with sealed joints.","/images/exterior-systems/acm-acp/attachment-systems/wet-seal-route-return-acm-project.jpg"],
];

const benefits = ["Lightweight handling","Design flexibility","Durable architectural finishes","Clean panel geometry","Efficient CNC fabrication","Broad finish selection"];
const components = ["Attachment rails","Reveal-joint spline","Colour-coated fasteners","Backer rod & sealant","Folded panel returns","Edge treatments"];
const finishGroups = [
  ["Solid Colours",["#f6f4ee","#242526","#54595c","#b9bdbe","#b9aa90","#b62e2c"]],
  ["Metallic & Mica",["#c7ccce","#4f5c62","#79604f","#c5b395","#a9653f","#1d5e7a"]],
  ["Brushed & Anodized",["#d7d7d2","#c5b89e","#766052","#293238","#bfc3c3","#53595c"]],
  ["Woodgrain",["#b8794c","#c18742","#6f4933","#a96731","#9c958a","#352b25"]],
  ["Stone & Textured",["#cac8c1","#d9c9aa","#4a4b4c","#eceae5","#4b5152","#c7af86"]],
  ["Custom Matching",["#d44d36","#314654","#376451","#a44c2d","#92999a","#f8f5ef"]],
];

const projects = [
  {title:"Luxclad ACM Façade", meta:"Richmond Hill, ON · Commercial", text:"ACM panel installation using the Luxclad system with concealed-fastener detailing.", href:"/projects/luxclad-richmond-hill"},
  {title:"ACM + Stucco Façade", meta:"Toronto, ON · Commercial", text:"A mixed-material façade combining ACM panels and stucco for contrast and depth.", href:"/projects/acm-stucco-toronto"},
  {title:"ACM + Cedar Soffit & Fascia", meta:"Toronto, ON · Multi-material", text:"ACM panels complemented by cedar soffit and fascia detailing.", href:"/projects/acm-cedar-soffit-fascia"},
];

function Panel({active}){
  if(active==="overview") return <div className={styles.overviewGrid}><div><p className={styles.kicker}>PRODUCT OVERVIEW</p><h2>A flat, rigid panel built for precise architectural expression.</h2><p>Aluminum Composite Material combines two aluminum skins with a bonded core to create a lightweight, dimensionally stable panel that can be cut, routed, folded and formed for contemporary façades.</p><p>Panel type, core, coating, subframing, attachment and joint design are coordinated around the project, code requirements and intended appearance.</p><div className={styles.brandLine}>ALPOLIC · ALUBOND · ALUCOIL · LARSON · REYNOBOND · ALUCOBOND · ALCOTEX · ALFREX</div></div><div className={styles.figure}><Image src="/images/exterior-systems/acm-acp/aluminum-composite-panel-layer-construction.webp" alt="ACM panel layer construction" fill sizes="45vw" /></div></div>;
  if(active==="applications") return <div><p className={styles.kicker}>WHERE ACM WORKS</p><h2>One material, multiple building types.</h2><div className={styles.imageGrid}>{applications.map(([title,text,image])=><article key={title}><div className={styles.cardImage}><Image src={image} alt={title} fill sizes="35vw" /></div><div className={styles.cardCopy}><h3>{title}</h3><p>{text}</p></div></article>)}</div></div>;
  if(active==="benefits") return <div><p className={styles.kicker}>WHY CHOOSE ACM</p><h2>Performance with room to create.</h2><div className={styles.featureGrid}>{benefits.map((item,i)=><article key={item}><span>{String(i+1).padStart(2,"0")}</span><Check size={20}/><h3>{item}</h3></article>)}</div></div>;
  if(active==="systems") return <div><p className={styles.kicker}>ATTACHMENT SYSTEMS</p><h2>Different joint strategies for different project needs.</h2><div className={styles.systemGrid}>{systems.map(([title,text,image])=><article key={title}><div className={styles.systemImage}><Image src={image} alt={title} fill sizes="35vw" /></div><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div>;
  if(active==="components") return <div><p className={styles.kicker}>SYSTEM COMPONENTS</p><h2>The assembly determines the details.</h2><div className={styles.componentGrid}><div className={styles.figure}><Image src="/images/exterior-systems/acm-acp/cnc-fabrication-aluminum-composite-panels.webp" alt="ACM fabrication" fill sizes="40vw" /></div><div>{components.map((item,i)=><div className={styles.componentItem} key={item}><span>{String(i+1).padStart(2,"0")}</span><strong>{item}</strong></div>)}</div></div></div>;
  if(active==="finishes") return <div><p className={styles.kicker}>COLOURS & FINISHES</p><h2>A finish for every architectural direction.</h2><div className={styles.finishGrid}>{finishGroups.map(([title,colors])=><article key={title}><h3>{title}</h3><div className={styles.swatches}>{colors.map((color,i)=><span key={i} style={{background:color}} />)}</div></article>)}</div></div>;
  return <div><p className={styles.kicker}>COMPLETED PROJECTS</p><h2>See ACM in completed CladCan work.</h2><p className={styles.projectsIntro}>Project records below are existing CladCan case studies identified as using ACM. Verified project photography can replace the graphic placeholders as the project library is completed.</p><div className={styles.projectGrid}>{projects.map((project,i)=><Link className={styles.projectCard} href={project.href} key={project.title}><div className={`${styles.projectVisual} ${styles[`projectVisual${i+1}`]}`}><span>ACM PROJECT</span><strong>{String(i+1).padStart(2,"0")}</strong></div><div className={styles.projectCopy}><small>{project.meta}</small><h3>{project.title}</h3><p>{project.text}</p><span>View project <ArrowUpRight size={15}/></span></div></Link>)}</div></div>;
}

function Hero({reversed=false,label}){
  return <section className={`${styles.hero} ${reversed?styles.heroReversed:""}`}>
    <div className={styles.heroCopy}><p className={styles.kicker}>{label}</p><h1>ACM Panels</h1><h2>Architectural freedom.<br/>Engineered performance.</h2><p>A lightweight, precise and highly adaptable façade material for contemporary residential, commercial and institutional architecture.</p><Link href="/contact">Request a Quote <ArrowUpRight size={17}/></Link></div>
    <div className={styles.heroMedia}><Image src="/images/exterior-systems/acm-acp/public-infrastructure-acm-panel-application.webp" alt="ACM façade" fill priority sizes="58vw" /></div>
  </section>;
}

function TabMenu({active,setActive,side,menuRef,dockMode,dockStyle}){
  const dockClass=dockMode==="fixed"?dock.fixed:dockMode==="bottom"?dock.bottom:"";
  return <aside ref={menuRef} style={dockStyle} className={`${styles.tabs} ${dock.menu} ${side==="right"?styles.tabsRight:""} ${dockClass}`} aria-label="ACM product sections">{tabs.map(({id,number,label,icon:Icon})=><button key={id} className={active===id?styles.active:""} onClick={()=>setActive(id)}><span>{number}</span><Icon size={18}/><strong>{label}</strong></button>)}</aside>;
}

function Tabbed({side="left",reversed=false}){
  const [active,setActive]=useState("overview");
  const workspaceRef=useRef(null);
  const slotRef=useRef(null);
  const menuRef=useRef(null);
  const [dockState,setDockState]=useState({mode:"normal",left:0,width:0});
  const label=reversed?"CONCEPT D · LEFT TABS · REVERSED HERO":side==="right"?"CONCEPT C · RIGHT TABS":"CONCEPT B · LEFT TABS";

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

  return <article className={styles.page}><Hero reversed={reversed} label={label}/><section ref={workspaceRef} className={`${styles.workspace} ${side==="right"?styles.workspaceRight:""}`}>{side==="left"&&<div ref={slotRef} className={dock.slot}>{menu}</div>}<main className={styles.panel}><Panel active={active}/></main>{side==="right"&&<div ref={slotRef} className={dock.slot}>{menu}</div>}</section></article>;
}

function Horizontal(){
  return <article className={styles.page}><Hero label="CONCEPT A · HORIZONTAL NAVIGATION"/><nav className={styles.horizontalNav}>{tabs.map(({id,number,label,icon:Icon})=><a href={`#compare-${id}`} key={id}><Icon size={17}/><span>{number}</span><strong>{label}</strong></a>)}</nav><main className={styles.longform}>{tabs.map(({id,number,label})=><section id={`compare-${id}`} className={styles.longSection} key={id}><div className={styles.longHead}><span>{number}</span><strong>{label}</strong></div><Panel active={id}/></section>)}</main></article>;
}

export default function AcmProductCompare({variant}){
  if(variant==="horizontal") return <Horizontal/>;
  if(variant==="right") return <Tabbed side="right"/>;
  if(variant==="left-reversed") return <Tabbed side="left" reversed/>;
  return <Tabbed side="left"/>;
}
