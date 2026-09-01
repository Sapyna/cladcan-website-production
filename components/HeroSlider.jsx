"use client";
import {useState} from "react";
import {ChevronLeft,ChevronRight,Phone} from "lucide-react";

const slides=[
  {
    type:"video",
    src:"/media/cladcan-home.mp4",
    eyebrow:"CLADDING · ROOFING · GLAZING · FABRICATION",
    titleTop:"Cladding & Building Envelope",
    titleBottom:"Systems across Ontario",
    copy:"Supply, fabrication, and installation of cladding, roofing, and glazing systems engineered for your project."
  },
  {
    type:"image",
    src:"/images/hero/home-banner-2.webp",
    fit:"contain",
    eyebrow:"RESIDENTIAL EXTERIOR SYSTEMS",
    titleTop:"Modern Exterior",
    titleBottom:"Built Around the Detail",
    copy:"Project-specific cladding, soffit, trim and architectural finishing for high-performance residential exteriors."
  },
  {
    type:"image",
    src:"/images/hero/home-banner-3.webp",
    fit:"contain",
    eyebrow:"SUPPLY · FABRICATION · INSTALLATION",
    titleTop:"From Material Selection",
    titleBottom:"to Field Execution",
    copy:"One coordinated exterior team for material supply, custom fabrication, installation and project support."
  }
];

export default function HeroSlider(){
  const [index,setIndex]=useState(0);
  const slide=slides[index];
  const prev=()=>setIndex((index-1+slides.length)%slides.length);
  const next=()=>setIndex((index+1)%slides.length);

  return <section className="homeHero sliderHero">
    <div className="sliderMedia">
      {slide.type==="video"
        ? <video key={slide.src} autoPlay muted loop playsInline preload="metadata"><source src={slide.src} type="video/mp4"/></video>
        : slide.fit==="contain"
          ? <div key={slide.src} role="img" aria-label="CladCan project" style={{width:"100%",height:"100%",backgroundImage:`url(${slide.src})`,backgroundSize:"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}/>
          : <img key={slide.src} src={slide.src} alt="CladCan project"/>
      }
    </div>
    <div className="sliderOverlay"></div>

    <div className="wrap sliderHeroInner">
      <div className="sliderHeroCopy">
        <span className="eyebrow sliderEyebrow">{slide.eyebrow}</span>
        <h1><span>{slide.titleTop}</span><br/>{slide.titleBottom}</h1>
        <p>{slide.copy}</p>
        <div className="heroActions heroReferenceActions">
          <a className="btn heroUnifiedCTA" href="/contact">Get a Free Quote <span>→</span></a>
          <a className="btn heroUnifiedCTA" href="tel:+18449243030"><Phone size={18}/> Call +1 (844) 924-3030</a>
          <a className="btn heroUnifiedCTA" href="/contact">Visit Showroom</a>
        </div>
      </div>
    </div>

    <div className="heroSliderControls" aria-label="Hero banner controls">
      <button onClick={prev} aria-label="Previous banner"><ChevronLeft size={28}/></button>
      <div className="heroDots">
        {slides.map((_,i)=><button key={i} onClick={()=>setIndex(i)} aria-label={`Show banner ${i+1}`} className={i===index?"active":""}></button>)}
      </div>
      <button onClick={next} aria-label="Next banner"><ChevronRight size={28}/></button>
    </div>

    <style jsx>{`
      .heroUnifiedCTA{
        color:#102431;
        background:rgba(255,255,255,.94);
        border:1px solid rgba(255,255,255,.94);
        box-shadow:0 8px 24px rgba(3,18,29,.12);
        transition:background-color .22s ease,border-color .22s ease,color .22s ease,transform .22s ease,box-shadow .22s ease;
      }
      .heroUnifiedCTA:hover,
      .heroUnifiedCTA:focus-visible{
        color:#fff;
        background:#f52225;
        border-color:#f52225;
        transform:translateY(-3px);
        box-shadow:0 14px 30px rgba(245,34,37,.28);
      }
      .heroUnifiedCTA :global(svg){
        stroke:currentColor;
      }
      @media (prefers-reduced-motion:reduce){
        .heroUnifiedCTA{transition:none}
        .heroUnifiedCTA:hover,
        .heroUnifiedCTA:focus-visible{transform:none}
      }
    `}</style>
  </section>;
}
