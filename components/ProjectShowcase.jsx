"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import styles from "./ProjectShowcase.module.css";

export default function ProjectShowcase({
  title,
  eyebrow="COMPLETED PROJECT",
  summary,
  facts=[],
  images=[],
  related=[],
  previous=null,
  next=null,
}) {
  const [activeImage,setActiveImage]=useState(null);

  useEffect(()=>{
    if(activeImage===null) return;
    const onKey=(event)=>{
      if(event.key==="Escape") setActiveImage(null);
      if(event.key==="ArrowLeft" && images.length>1) setActiveImage((activeImage-1+images.length)%images.length);
      if(event.key==="ArrowRight" && images.length>1) setActiveImage((activeImage+1)%images.length);
    };
    document.addEventListener("keydown",onKey);
    document.body.style.overflow="hidden";
    return ()=>{
      document.removeEventListener("keydown",onKey);
      document.body.style.overflow="";
    };
  },[activeImage,images.length]);

  const openImage=(index)=>setActiveImage(index);
  const previousImage=()=>setActiveImage((activeImage-1+images.length)%images.length);
  const nextImage=()=>setActiveImage((activeImage+1)%images.length);

  return <main className={styles.page}>
    <section className={styles.hero}>
      <div className={styles.shell}>
        <nav className={styles.crumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link><span>/</span><Link href="/projects">Projects</Link><span>/</span><span>{title}</span>
        </nav>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>{eyebrow}</p>
            <h1>{title}</h1>
            <p className={styles.summary}>{summary}</p>
            <Link className={styles.backLink} href="/projects"><ArrowLeft size={16}/> All projects</Link>
          </div>
          {images[0] && <button type="button" className={styles.heroMedia} onClick={()=>openImage(0)} aria-label={`Open ${title} project photo`}>
            <img src={images[0].src} alt={images[0].alt || title}/>
            <span className={styles.mediaAction}>View project photos <Maximize2 size={16}/></span>
          </button>}
        </div>
      </div>
    </section>

    <section className={styles.facts}>
      <div className={styles.shell}>
        {facts.map((fact)=><div key={fact.label}><span>{fact.label}</span><strong>{fact.value}</strong></div>)}
      </div>
    </section>

    <section className={styles.overview}>
      <div className={styles.shell}>
        <div className={styles.sectionLabel}><span>01</span><p>PROJECT OVERVIEW</p></div>
        <div className={styles.overviewGrid}>
          <h2>The project, documented visually.</h2>
          <p>{summary}</p>
        </div>
      </div>
    </section>

    <section className={styles.gallery}>
      <div className={styles.shell}>
        <div className={styles.galleryHead}>
          <div>
            <div className={styles.sectionLabel}><span>02</span><p>PROJECT GALLERY</p></div>
            <h2>Explore the project.</h2>
          </div>
          <p>{images.length} verified {images.length===1?"photo":"photos"} · Select any image to view full screen.</p>
        </div>
        <div className={`${styles.galleryGrid} ${images.length===1?styles.galleryGridSingle:""}`}>
          {images.map((image,index)=><button type="button" className={styles.galleryItem} key={`${image.src}-${index}`} onClick={()=>openImage(index)} aria-label={`Open project image ${index+1} of ${images.length}`}>
            <img src={image.src} alt={image.alt || `${title} project photo ${index+1}`}/>
            <span className={styles.imageIndex}>{String(index+1).padStart(2,"0")}</span>
            <span className={styles.imageHover}>Open image <Maximize2 size={15}/></span>
          </button>)}
        </div>
      </div>
    </section>

    {related.length>0 && <section className={styles.related}>
      <div className={styles.shell}>
        <div className={styles.sectionLabel}><span>03</span><p>CONNECTED TO THE WORK</p></div>
        <div className={styles.relatedGrid}>
          <h2>Related systems & services.</h2>
          <div className={styles.relatedLinks}>{related.map((item)=><Link href={item.href} key={item.href}>{item.label}<ArrowUpRight size={15}/></Link>)}</div>
        </div>
      </div>
    </section>}

    {(previous || next) && <nav className={styles.projectNav} aria-label="Project navigation">
      <div className={styles.shell}>
        {previous ? <Link href={previous.href} className={styles.projectNavLink}><ChevronLeft size={19}/><span><small>PREVIOUS PROJECT</small><strong>{previous.title}</strong></span></Link> : <span/>}
        {next ? <Link href={next.href} className={`${styles.projectNavLink} ${styles.projectNavNext}`}><span><small>NEXT PROJECT</small><strong>{next.title}</strong></span><ChevronRight size={19}/></Link> : <span/>}
      </div>
    </nav>}

    <section className={styles.cta}>
      <div className={styles.shell}>
        <p>START A PROJECT</p>
        <h2>Planning something similar?</h2>
        <span>Send drawings, photos or the tender package and tell us where the project stands.</span>
        <Link href="/contact">Start a project <ArrowUpRight size={17}/></Link>
      </div>
    </section>

    {activeImage!==null && images[activeImage] && <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label="Project image viewer" onClick={()=>setActiveImage(null)}>
      <button className={styles.close} type="button" onClick={()=>setActiveImage(null)} aria-label="Close image viewer"><X size={22}/></button>
      {images.length>1 && <button className={`${styles.lightboxNav} ${styles.lightboxPrev}`} type="button" onClick={(e)=>{e.stopPropagation();previousImage();}} aria-label="Previous image"><ChevronLeft size={27}/></button>}
      <div className={styles.lightboxStage} onClick={(e)=>e.stopPropagation()}>
        <img src={images[activeImage].src} alt={images[activeImage].alt || title}/>
        <div className={styles.lightboxCaption}><span>{String(activeImage+1).padStart(2,"0")} / {String(images.length).padStart(2,"0")}</span><strong>{images[activeImage].caption || title}</strong></div>
      </div>
      {images.length>1 && <button className={`${styles.lightboxNav} ${styles.lightboxNext}`} type="button" onClick={(e)=>{e.stopPropagation();nextImage();}} aria-label="Next image"><ChevronRight size={27}/></button>}
    </div>}
  </main>;
}
