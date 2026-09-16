"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Building2, Check, Layers3, Palette, PanelsTopLeft, ShieldCheck, Wrench } from "lucide-react";
import styles from "./right-rail.module.css";

const navItems = [
  ["overview","01","Overview",Layers3],
  ["applications","02","Applications",Building2],
  ["benefits","03","Benefits",ShieldCheck],
  ["systems","04","Systems",PanelsTopLeft],
  ["components","05","Components",Wrench],
  ["finishes","06","Finishes",Palette],
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

const finishes = [
  ["Solid Colours",["#f6f4ee","#242526","#54595c","#b9bdbe","#b9aa90","#b62e2c"]],
  ["Metallic & Mica",["#c7ccce","#4f5c62","#79604f","#c5b395","#a9653f","#1d5e7a"]],
  ["Brushed & Anodized",["#d7d7d2","#c5b89e","#766052","#293238","#bfc3c3","#53595c"]],
  ["Woodgrain",["#b8794c","#c18742","#6f4933","#a96731","#9c958a","#352b25"]],
  ["Stone & Textured",["#cac8c1","#d9c9aa","#4a4b4c","#eceae5","#4b5152","#c7af86"]],
  ["Custom Matching",["#d44d36","#314654","#376451","#a44c2d","#92999a","#f8f5ef"]],
];

export default function AcmRightRailConcept(){
  const [active,setActive]=useState("overview");
  useEffect(()=>{
    const sections=[...document.querySelectorAll("[data-acm-section]")];
    const observer=new IntersectionObserver(entries=>{
      const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
      if(visible) setActive(visible.target.id);
    },{rootMargin:"-18% 0px -58% 0px",threshold:[0,.2,.5]});
    sections.forEach(s=>observer.observe(s));
    return ()=>observer.disconnect();
  },[]);
  return <article className={styles.page}>
    <section className={styles.hero}><div className={styles.heroCopy}><p className={styles.kicker}>CONCEPT C · RIGHT STICKY RAIL</p><h1>ACM Panels</h1><h2>Architectural freedom.<br/>Engineered performance.</h2><p>A long-form product page with uninterrupted editorial scrolling and a persistent technical navigation rail on the right.</p><Link href="/contact">Request a Quote <ArrowUpRight size={17}/></Link></div><div className={styles.heroMedia}><Image src="/images/exterior-systems/acm-acp/public-infrastructure-acm-panel-application.webp" alt="ACM façade" fill priority sizes="58vw" /></div></section>

    <div className={styles.layout}>
      <main className={styles.content}>
        <section id="overview" data-acm-section className={styles.section}><div className={styles.sectionHead}><span>01</span><div><p className={styles.kicker}>PRODUCT OVERVIEW</p><h2>A flat, rigid panel built for precise architectural expression.</h2></div></div><div className={styles.overviewGrid}><div><p>Aluminum Composite Material combines two aluminum skins with a bonded core to create a lightweight, dimensionally stable panel that can be cut, routed, folded and formed.</p><p>Panel type, core, coating, subframing, attachment and joint design are coordinated around the building and applicable project requirements.</p><div className={styles.brandLine}>ALPOLIC · ALUBOND · ALUCOIL · LARSON · REYNOBOND · ALUCOBOND · ALCOTEX · ALFREX</div></div><div className={styles.figure}><Image src="/images/exterior-systems/acm-acp/aluminum-composite-panel-layer-construction.webp" alt="ACM panel construction" fill sizes="38vw" /></div></div></section>

        <section id="applications" data-acm-section className={`${styles.section} ${styles.soft}`}><div className={styles.sectionHead}><span>02</span><div><p className={styles.kicker}>WHERE ACM WORKS</p><h2>One material, multiple building types.</h2></div></div><div className={styles.applicationGrid}>{applications.map(([title,text,image])=><article key={title}><div className={styles.cardImage}><Image src={image} alt={title} fill sizes="35vw" /></div><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>

        <section id="benefits" data-acm-section className={`${styles.section} ${styles.dark}`}><div className={styles.sectionHead}><span>03</span><div><p className={styles.kicker}>WHY CHOOSE ACM</p><h2>Performance with room to create.</h2></div></div><div className={styles.benefitGrid}>{["Lightweight handling","Design flexibility","Durable finishes","Clean geometry","Efficient fabrication","Broad selection"].map((item,i)=><article key={item}><span>{String(i+1).padStart(2,"0")}</span><Check size={21}/><h3>{item}</h3></article>)}</div></section>

        <section id="systems" data-acm-section className={styles.section}><div className={styles.sectionHead}><span>04</span><div><p className={styles.kicker}>ATTACHMENT SYSTEMS</p><h2>Different joint strategies for different project needs.</h2></div></div><div className={styles.systemGrid}>{systems.map(([title,text,image])=><article key={title}><div className={styles.systemImage}><Image src={image} alt={title} fill sizes="34vw" /></div><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>

        <section id="components" data-acm-section className={`${styles.section} ${styles.soft}`}><div className={styles.sectionHead}><span>05</span><div><p className={styles.kicker}>SYSTEM COMPONENTS</p><h2>The attachment system determines the details.</h2></div></div><div className={styles.componentGrid}><div className={styles.figure}><Image src="/images/exterior-systems/acm-acp/cnc-fabrication-aluminum-composite-panels.webp" alt="ACM fabrication" fill sizes="38vw" /></div><div>{["Attachment rails","Reveal-joint spline","Colour-coated fasteners","Backer rod & sealant","Folded panel returns","Edge treatments"].map((item,i)=><div className={styles.componentItem} key={item}><span>{String(i+1).padStart(2,"0")}</span><strong>{item}</strong></div>)}</div></div></section>

        <section id="finishes" data-acm-section className={`${styles.section} ${styles.finishes}`}><div className={styles.sectionHead}><span>06</span><div><p className={styles.kicker}>COLOURS & FINISHES</p><h2>A finish for every architectural direction.</h2></div></div><div className={styles.finishGrid}>{finishes.map(([title,colors])=><article key={title}><h3>{title}</h3><div className={styles.swatches}>{colors.map((color,i)=><span key={i} style={{background:color}} />)}</div></article>)}</div></section>
      </main>

      <aside className={styles.rail}><div className={styles.railInner}><p>ON THIS PAGE</p>{navItems.map(([id,number,label,Icon])=><a key={id} href={`#${id}`} className={active===id?styles.active:""}><span>{number}</span><Icon size={17}/><strong>{label}</strong></a>)}<div className={styles.railCta}><span>Need help specifying ACM?</span><Link href="/contact">Talk to CladCan <ArrowUpRight size={15}/></Link></div></div></aside>
    </div>
  </article>;
}
