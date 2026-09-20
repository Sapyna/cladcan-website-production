"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Images,
  Maximize2,
  X,
} from "lucide-react";
import styles from "./ProjectShowcase.module.css";

export default function ProjectShowcase({
  title,
  eyebrow="COMPLETED PROJECT",
  summary,
  facts=[],
  images=[],
  related=[],
}) {
  const [activeImage,setActiveImage]=useState(null);

  useEffect(()=>{
    if(activeImage===null) return;
    const onKey=(event)=>{
      if(event.key==="Escape") setActiveImage(null);
      if(event.key==="ArrowLeft" && images.length>1){
        setActiveImage((current)=>(current-1+images.length)%images.length);
      }
      if(event.key==="ArrowRight" && images.length>1){
        setActiveImage((current)=>(current+1)%images.length);
      }
    };
    document.addEventListener("keydown",onKey);
    document.body.style.overflow="hidden";
    return ()=>{
      document.removeEventListener("keydown",onKey);
      document.body.style.overflow="";
    };
  },[activeImage,images.length]);

  const previousImage=()=>setActiveImage((current)=>(current-1+images.length)%images.length);
  const nextImage=()=>setActiveImage((current)=>(current+1)%images.length);

  return <article className={styles.page}>
    <section className="caseV11Hero">
      {images[0] && <div className={styles.heroMedia} aria-hidden="true">
        <img src={images[0].src} alt=""/>
      </div>}
      <div className="wrap">
        <div className="caseV11HeroGrid">
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h1>{title}</h1>
          </div>
          <div className={styles.heroDetails}>
            <p>{summary}</p>
            <div className={styles.heroActions}>
              <a href="#project-gallery">View photography <Images size={16}/></a>
              <Link href="/projects">All projects <ArrowUpRight size={16}/></Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className={styles.facts}>
      <div className="wrap">
        <div className={styles.factsGrid}>
          {facts.map((fact,index)=><div className={styles.fact} key={fact.label}>
            <span>{String(index+1).padStart(2,"0")} · {fact.label}</span>
            <strong>{fact.value}</strong>
          </div>)}
        </div>
      </div>
    </section>

    <section className={styles.overview} id="project-overview">
      <div className="wrap">
        <div className={styles.sectionHeading}>
          <div className={styles.sectionMarker}><span>01</span><i/></div>
          <div>
            <p>PROJECT OVERVIEW</p>
            <h2>{title}</h2>
          </div>
          <p className={styles.sectionIntro}>{summary}</p>
        </div>
      </div>
    </section>

    <section className={styles.gallery} id="project-gallery">
      <div className="wrap">
        <div className={styles.galleryHeading}>
          <div className={styles.sectionMarker}><span>02</span><i/></div>
          <div>
            <p>PROJECT PHOTOGRAPHY</p>
            <h2>View the work in detail.</h2>
          </div>
          <div className={styles.galleryMeta}>
            <Images size={16}/>
            <span>{images.length} verified {images.length===1?"photo":"photos"}</span>
          </div>
        </div>

        <div className={[
          styles.galleryGrid,
          images.length===1?styles.gallerySingle:"",
          images.length===2?styles.galleryPair:"",
        ].filter(Boolean).join(" ")}>
          {images.map((image,index)=><button
            type="button"
            className={[
              styles.galleryItem,
              images.length>=3 && index===0?styles.galleryFeature:"",
            ].filter(Boolean).join(" ")}
            key={`${image.src}-${index}`}
            onClick={()=>setActiveImage(index)}
            aria-label={`Open project image ${index+1} of ${images.length}`}
          >
            <div className={styles.galleryMedia}>
              <img src={image.src} alt={image.alt || `${title} project photo ${index+1}`}/>
              <span className={styles.imageNumber}>{String(index+1).padStart(2,"0")}</span>
              <span className={styles.expand}><Maximize2 size={15}/> View full screen</span>
            </div>
            <div className={styles.caption}>
              <span>{image.caption || title}</span>
              <ArrowUpRight size={15}/>
            </div>
          </button>)}
        </div>
      </div>
    </section>

    {related.length>0 && <section className={styles.related}>
      <div className="wrap">
        <div className={styles.sectionHeading}>
          <div className={styles.sectionMarker}><span>03</span><i/></div>
          <div>
            <p>RELATED TO THIS PROJECT</p>
            <h2>Systems & services.</h2>
          </div>
          <div className={styles.relatedLinks}>
            {related.map((item)=><Link href={item.href} key={item.href}>
              <span>{item.label}</span><ArrowUpRight size={16}/>
            </Link>)}
          </div>
        </div>
      </div>
    </section>}

    <section className={styles.returnStrip}>
      <div className="wrap">
        <Link href="/projects"><ArrowLeft size={16}/> Back to all projects</Link>
        <span>CladCan · Selected Work</span>
      </div>
    </section>

    <section className="projectsV11CTA">
      <div className="wrap">
        <span className="eyebrow">START A PROJECT</span>
        <h2>Planning something similar?</h2>
        <p>Send drawings, photos or the tender package and tell us where the project stands.</p>
        <Link href="/contact">Start a project <span>↗</span></Link>
      </div>
    </section>

    {activeImage!==null && images[activeImage] && <div
      className={styles.lightbox}
      role="dialog"
      aria-modal="true"
      aria-label="Project image viewer"
      onClick={()=>setActiveImage(null)}
    >
      <button className={styles.close} type="button" onClick={()=>setActiveImage(null)} aria-label="Close image viewer">
        <X size={22}/>
      </button>

      {images.length>1 && <button
        className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
        type="button"
        onClick={(event)=>{event.stopPropagation();previousImage();}}
        aria-label="Previous image"
      >
        <ChevronLeft size={28}/>
      </button>}

      <div className={styles.lightboxStage} onClick={(event)=>event.stopPropagation()}>
        <img src={images[activeImage].src} alt={images[activeImage].alt || title}/>
        <div className={styles.lightboxCaption}>
          <span>{String(activeImage+1).padStart(2,"0")} / {String(images.length).padStart(2,"0")}</span>
          <strong>{images[activeImage].caption || title}</strong>
        </div>
      </div>

      {images.length>1 && <button
        className={`${styles.lightboxNav} ${styles.lightboxNext}`}
        type="button"
        onClick={(event)=>{event.stopPropagation();nextImage();}}
        aria-label="Next image"
      >
        <ChevronRight size={28}/>
      </button>}
    </div>}
  </article>;
}
