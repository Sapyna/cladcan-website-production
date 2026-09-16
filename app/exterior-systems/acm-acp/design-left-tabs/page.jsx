"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Building2, Check, Layers3, Palette, PanelsTopLeft, ShieldCheck, Wrench } from "lucide-react";
import styles from "./left-tabs.module.css";

const tabs = [
  { id:"overview", number:"01", label:"Overview", icon:Layers3 },
  { id:"applications", number:"02", label:"Applications", icon:Building2 },
  { id:"benefits", number:"03", label:"Benefits", icon:ShieldCheck },
  { id:"systems", number:"04", label:"Systems", icon:PanelsTopLeft },
  { id:"components", number:"05", label:"Components", icon:Wrench },
  { id:"finishes", number:"06", label:"Finishes", icon:Palette },
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

function Panel({ active }){
  if(active === "overview") return <div className={styles.overviewGrid}><div><p className={styles.kicker}>PRODUCT OVERVIEW</p><h2>A flat, rigid panel built for precise architectural expression.</h2><p>Aluminum Composite Material combines two aluminum skins with a bonded core to create a lightweight, dimensionally stable panel that can be cut, routed, folded and formed for contemporary façades.</p><p>Panel type, core, coating, subframing, attachment and joint design are coordinated around the project, applicable code requirements and the intended appearance.</p><div className={styles.brandLine}>ALPOLIC · ALUBOND · ALUCOIL · LARSON · REYNOBOND · ALUCOBOND · ALCOTEX · ALFREX</div></div><div className={styles.figure}><Image src="/images/exterior-systems/acm-acp/aluminum-composite-panel-layer-construction.webp" alt="ACM panel layer construction" fill sizes="45vw" /></div></div>;
  if(active === "applications") return <div><p className={styles.kicker}>WHERE ACM WORKS</p><h2>One material, multiple building types.</h2><div className={styles.imageGrid}>{applications.map(([title,text,image])=><article key={title}><div className={styles.cardImage}><Image src={image} alt={title} fill sizes="35vw" /></div><div className={styles.cardCopy}><h3>{title}</h3><p>{text}</p></div></article>)}</div></div>;
  if(active === "benefits") return <div><p className={styles.kicker}>WHY CHOOSE ACM</p><h2>Performance with room to create.</h2><div className={styles.featureGrid}>{benefits.map((item,i)=><article key={item}><span>{String(i+1).padStart(2,"0")}</span><Check size={20}/><h3>{item}</h3></article>)}</div></div>;
  if(active === "systems") return <div><p className={styles.kicker}>ATTACHMENT SYSTEMS</p><h2>Different joint strategies for different project needs.</h2><div className={styles.systemGrid}>{systems.map(([title,text,image])=><article key={title}><div className={styles.systemImage}><Image src={image} alt={title} fill sizes="35vw" /></div><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div>;
  if(active === "components") return <div><p className={styles.kicker}>SYSTEM COMPONENTS</p><h2>The assembly determines the details.</h2><div className={styles.componentGrid}><div className={styles.figure}><Image src="/images/exterior-systems/acm-acp/cnc-fabrication-aluminum-composite-panels.webp" alt="ACM fabrication" fill sizes="40vw" /></div><div>{components.map((item,i)=><div className={styles.componentItem} key={item}><span>{String(i+1).padStart(2,"0")}</span><strong>{item}</strong></div>)}</div></div></div>;
  return <div><p className={styles.kicker}>COLOURS & FINISHES</p><h2>A finish for every architectural direction.</h2><div className={styles.finishGrid}>{finishGroups.map(([title,colors])=><article key={title}><h3>{title}</h3><div className={styles.swatches}>{colors.map((color,i)=><span key={i} style={{background:color}} />)}</div></article>)}</div></div>;
}

export default function AcmLeftTabsConcept(){
  const [active,setActive]=useState("overview");
  return <article className={styles.page}>
    <section className={styles.hero}><div className={styles.heroCopy}><p className={styles.kicker}>CONCEPT B · LEFT TABS</p><h1>ACM Panels</h1><h2>Architectural freedom.<br/>Engineered performance.</h2><p>A product-page concept built around a persistent left-hand tab system. Users choose the information they need without scrolling through every section.</p><Link href="/contact">Request a Quote <ArrowUpRight size={17}/></Link></div><div className={styles.heroMedia}><Image src="/images/exterior-systems/acm-acp/public-infrastructure-acm-panel-application.webp" alt="ACM façade" fill priority sizes="58vw" /></div></section>
    <section className={styles.workspace}><aside className={styles.tabs} aria-label="ACM product sections">{tabs.map(({id,number,label,icon:Icon})=><button key={id} className={active===id?styles.active:""} onClick={()=>setActive(id)}><span>{number}</span><Icon size={18}/><strong>{label}</strong></button>)}</aside><main className={styles.panel}><Panel active={active}/></main></section>
  </article>;
}
