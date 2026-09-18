"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  Check,
  FileText,
  FolderKanban,
  Layers3,
  Palette,
  PanelsTopLeft,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import styles from "./ProductTabbedPage.module.css";

function number(i){ return String(i + 1).padStart(2,"0"); }

export default function ProductTabbedPage({
  eyebrow="EXTERIOR SYSTEM",
  title,
  subtitle,
  intro,
  heroImage,
  images=[],
  specs=[],
  manufacturer,
  manufacturerUrl,
  applications=[],
  benefits=[],
  products=[],
  profiles=[],
  systemFamilies=[],
  detailGroups=[],
  technicalSections=[],
  technology,
  components=[],
  accessories=[],
  finishes=[],
  resources=[],
  manufacturerResources=[],
  relatedProducts=[],
  visuals=[],
  ctaTitle="Considering this product for your project?",
  ctaText="Send us your drawings, elevations or project requirements and our team can help review product selection, quantities and installation requirements.",
}) {
  const [active,setActive]=useState("overview");

  const tabs=useMemo(()=>{
    const list=[
      {id:"overview",label:"Overview",icon:Layers3,show:true},
      {id:"applications",label:"Applications",icon:Building2,show:applications.length>0},
      {id:"benefits",label:"Benefits",icon:ShieldCheck,show:benefits.length>0},
      {id:"systems",label:"Products & Profiles",icon:PanelsTopLeft,show:products.length>0||profiles.length>0||systemFamilies.length>0||detailGroups.length>0||technicalSections.length>0||!!technology},
      {id:"components",label:"Components",icon:Wrench,show:components.length>0||accessories.length>0},
      {id:"finishes",label:"Finishes",icon:Palette,show:finishes.length>0},
      {id:"resources",label:"Resources",icon:FolderKanban,show:resources.length>0||manufacturerResources.length>0||relatedProducts.length>0||visuals.length>0||images.length>1},
    ];
    return list.filter(x=>x.show).map((x,i)=>({...x,number:number(i)}));
  },[applications,benefits,products,profiles,systemFamilies,detailGroups,technicalSections,technology,components,accessories,finishes,resources,manufacturerResources,relatedProducts,visuals,images]);

  const hero=heroImage || images[0];

  const renderOverview=()=>(
    <div className={styles.overviewGrid}>
      <div>
        <p className={styles.kicker}>PRODUCT OVERVIEW</p>
        <h2>{subtitle || `${title} product overview.`}</h2>
        <p className={styles.lead}>{intro}</p>
        {manufacturer&&<div className={styles.manufacturer}>
          <span>MANUFACTURER</span>
          {manufacturerUrl?<a href={manufacturerUrl} target="_blank" rel="noreferrer">{manufacturer}<ArrowUpRight size={13}/></a>:<strong>{manufacturer}</strong>}
        </div>}
      </div>
      <div className={styles.specGrid}>
        {specs.length>0?specs.map((spec,i)=><div key={`${spec.label}-${i}`}><span>{spec.label}</span><strong>{spec.value}</strong></div>):(
          <div><span>Project support</span><strong>Selection, supply coordination and installation planning through CladCan.</strong></div>
        )}
      </div>
    </div>
  );

  const renderApplications=()=>(
    <div>
      <p className={styles.kicker}>APPLICATIONS</p>
      <h2>Where this product fits the project.</h2>
      <div className={styles.applicationGrid}>
        {applications.map((item,i)=>{
          const label=typeof item==="string"?item:item.title||item.label||"Application";
          const text=typeof item==="string"?null:item.text||item.description||null;
          return <article key={`${label}-${i}`}><span>{number(i)}</span><Building2 size={22}/><h3>{label}</h3>{text&&<p>{text}</p>}</article>
        })}
      </div>
    </div>
  );

  const renderBenefits=()=>(
    <div>
      <p className={styles.kicker}>KEY BENEFITS</p>
      <h2>Performance and design advantages.</h2>
      <div className={styles.benefitGrid}>
        {benefits.map((item,i)=><article key={`${item.title}-${i}`}><span>{number(i)}</span><Check size={18}/><h3>{item.title}</h3><p>{item.text}</p></article>)}
      </div>
    </div>
  );

  const renderSystems=()=>(
    <div>
      <p className={styles.kicker}>PRODUCTS & PROFILES</p>
      <h2>System options, profiles and technical details.</h2>

      {products.length>0&&<div className={styles.cardGrid}>
        {products.map((item,i)=><article key={`${item.title}-${i}`}><span>{number(i)}</span><h3>{item.title}</h3>{item.text&&<p>{item.text}</p>}</article>)}
      </div>}

      {profiles.length>0&&<div className={styles.profileStack}>
        {profiles.map((group,i)=><article key={`${group.title}-${i}`}><div className={styles.profileTitle}><span>{number(i)}</span><h3>{group.title}</h3></div>
          {group.text&&<p>{group.text}</p>}
          {group.items?.length>0&&<ul>{group.items.map((item,j)=><li key={`${item.label}-${j}`}><strong>{item.label}</strong><span>{item.value}</span></li>)}</ul>}
        </article>)}
      </div>}

      {systemFamilies.length>0&&<div className={styles.cardGrid}>
        {systemFamilies.map((item,i)=><article key={`${item.title}-${i}`}><small>{item.brand}</small><h3>{item.title}</h3><p>{item.description}</p>{item.options?.length>0&&<ul>{item.options.map(x=><li key={x}>{x}</li>)}</ul>}</article>)}
      </div>}

      {detailGroups.length>0&&<div className={styles.cardGrid}>
        {detailGroups.map((item,i)=><article key={`${item.title}-${i}`}><small>{item.brand}</small><h3>{item.title}</h3><p>{item.text}</p>{item.items?.length>0&&<ul>{item.items.map(x=><li key={x}>{x}</li>)}</ul>}</article>)}
      </div>}

      {technology&&<section className={styles.technology}>
        <div><p className={styles.kicker}>SYSTEM & TECHNOLOGY</p><h3>{technology.title}</h3><p>{technology.text}</p></div>
        {technology.points?.length>0&&<ul>{technology.points.map(x=><li key={x}><Check size={16}/>{x}</li>)}</ul>}
      </section>}

      {technicalSections.map((section,i)=><section className={styles.technical} key={`${section.title}-${i}`}>
        <div className={styles.technicalHead}><div><p className={styles.kicker}>{section.eyebrow || "TECHNICAL DETAIL"}</p><h3>{section.title}</h3></div><p>{section.text}</p></div>
        {section.facts?.length>0&&<div className={styles.factGrid}>{section.facts.map((fact,j)=><article key={`${fact.title}-${j}`}><h4>{fact.title}</h4><p>{fact.text}</p></article>)}</div>}
        {section.images?.length>0&&<div className={styles.gallery}>{section.images.map((item,j)=><figure key={`${item.src}-${j}`}><img src={item.src} alt={item.alt||section.title}/>{item.caption&&<figcaption>{item.caption}</figcaption>}</figure>)}</div>}
        {section.resource&&<a className={styles.resourceLink} href={section.resource.href} target="_blank" rel="noreferrer"><FileText size={16}/>{section.resource.label}<ArrowUpRight size={13}/></a>}
      </section>)}
    </div>
  );

  const renderComponents=()=>(
    <div>
      <p className={styles.kicker}>SYSTEM COMPONENTS</p>
      <h2>Profiles, trims and accessories that complete the assembly.</h2>
      <div className={styles.componentGrid}>
        {[...components,...accessories].map((item,i)=><article key={`${item.title}-${i}`}><span>{number(i)}</span><div><h3>{item.title}</h3><p>{item.detail||item.text}</p>{item.sku&&<small>SKU: {item.sku}</small>}</div></article>)}
      </div>
    </div>
  );

  const renderFinishes=()=>(
    <div>
      <p className={styles.kicker}>COLOURS & FINISHES</p>
      <h2>Finish options for different architectural directions.</h2>
      <p className={styles.sectionNote}>Availability can change by collection, manufacturer and project quantity. Confirm current samples before final specification.</p>
      <div className={styles.finishGrid}>
        {finishes.map((item,i)=>{
          const label=typeof item==="string"?item:item.name||item.title;
          const detail=typeof item==="string"?null:item.text||item.detail;
          return <article key={`${label}-${i}`}><span>{number(i)}</span><Palette size={20}/><h3>{label}</h3>{detail&&<p>{detail}</p>}</article>
        })}
      </div>
      <Link href="/contact" className={styles.textLink}>Request current colour samples <ArrowUpRight size={14}/></Link>
    </div>
  );

  const renderResources=()=>(
    <div>
      <p className={styles.kicker}>RESOURCES & RELATED</p>
      <h2>Visual references, manufacturer documents and related systems.</h2>

      {(visuals.length>0||images.length>1)&&<div className={styles.gallery}>
        {(visuals.length?visuals:images.slice(1).map((src,i)=>({image:src,alt:`${title} reference ${i+1}`,title:`Reference ${i+1}`}))).map((item,i)=>{
          const src=item.image||item.src;
          return <figure key={`${src}-${i}`}><img src={src} alt={item.alt||item.title||title}/>{(item.title||item.caption)&&<figcaption><strong>{item.title}</strong>{item.caption&&<span>{item.caption}</span>}</figcaption>}</figure>
        })}
      </div>}

      {(resources.length>0||manufacturerResources.length>0)&&<div className={styles.resourceGrid}>
        {resources.map((item,i)=><a href={item.href} target="_blank" rel="noreferrer" key={`${item.title}-${i}`}><FileText size={20}/><div><small>{item.type}</small><strong>{item.title}</strong></div><ArrowUpRight size={14}/></a>)}
        {manufacturerResources.map((item,i)=><a href={item.href} target="_blank" rel="noreferrer" key={`${item.label}-${i}`}><FileText size={20}/><div><small>MANUFACTURER</small><strong>{item.label}</strong></div><ArrowUpRight size={14}/></a>)}
      </div>}

      {relatedProducts.length>0&&<div className={styles.relatedGrid}>
        {relatedProducts.map((item,i)=>item.href?<Link href={item.href} key={`${item.title}-${i}`}><small>{item.type}</small><h3>{item.title}</h3><p>{item.description}</p><strong>View product <ArrowUpRight size={13}/></strong></Link>:<article key={`${item.title}-${i}`}><small>{item.type}</small><h3>{item.title}</h3><p>{item.description}</p></article>)}
      </div>}

      <div className={styles.cta}><div><p className={styles.kicker}>PRODUCT SUPPORT</p><h3>{ctaTitle}</h3><p>{ctaText}</p></div><Link href="/contact">Talk to CladCan <ArrowUpRight size={15}/></Link></div>
    </div>
  );

  let body=renderOverview();
  if(active==="applications") body=renderApplications();
  if(active==="benefits") body=renderBenefits();
  if(active==="systems") body=renderSystems();
  if(active==="components") body=renderComponents();
  if(active==="finishes") body=renderFinishes();
  if(active==="resources") body=renderResources();

  return <main className={styles.page}>
    <section className={styles.hero}>
      <div className={styles.heroCopy}>
        <p className={styles.kicker}>{eyebrow}</p>
        <h1>{title}</h1>
        {subtitle&&<h2>{subtitle}</h2>}
        <p>{intro}</p>
        <div className={styles.heroActions}><Link href="/contact">Request a Quote <ArrowUpRight size={16}/></Link><Link href="/contact">Request a Sample</Link></div>
      </div>
      <div className={styles.heroMedia} style={{backgroundImage:`url("${hero}")`}} aria-label={`${title} product image`}/>
    </section>

    <section className={styles.workspace}>
      <aside className={styles.tabs} aria-label={`${title} product sections`}>
        {tabs.map(tab=>{const Icon=tab.icon;return <button key={tab.id} className={active===tab.id?styles.active:""} onClick={()=>setActive(tab.id)}><span>{tab.number}</span><Icon size={20}/><strong>{tab.label}</strong></button>})}
      </aside>
      <section className={styles.panel}>{body}</section>
    </section>
  </main>;
}
