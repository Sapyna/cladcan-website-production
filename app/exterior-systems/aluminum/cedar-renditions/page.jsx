import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download, FileText } from "lucide-react";

export const metadata={
  title:"Cedar Renditions® Aluminum Siding & Soffit | CladCan",
  description:"Explore Cedar Renditions woodgrain aluminum siding and soffit profiles, colours, accessories and performance benefits available through CladCan."
};

const benefits=[
  {title:"Cost-Effective Aluminum",text:"A more affordable aluminum siding option that delivers a premium architectural appearance."},
  {title:"Realistic Woodgrain",text:"Multi-toned finishes recreate the warmth, depth and natural variation of stained wood."},
  {title:"Recycled Content",text:"Made from 99% recycled content and fully recyclable at the end of its service life."},
  {title:"Virtually Maintenance-Free",text:"The aluminum construction preserves its appearance without the regular staining required by natural wood."},
  {title:"Moisture Resistant",text:"A non-absorbent exterior finish designed to resist moisture-related deterioration."},
  {title:"Non-Combustible",text:"Aluminum construction provides a non-combustible alternative to conventional wood siding."},
  {title:"Easy Installation",text:"An overlapping horizontal panel design supports efficient installation and clean extended runs."},
  {title:"LEED Compliant",text:"High recycled content and full recyclability can support sustainability-focused project goals."},
  {title:"25-Year Warranty",text:"Protected by a 25-year prorated limited warranty for long-term project confidence."},
  {title:"High-Wind Performance",text:"Engineered to withstand winds up to 200 mph when installed as specified."},
  {title:"Durable PVDF Finish",text:"A high-performance PVDF topcoat provides superior paint durability and lasting colour."}
];

const profiles=[
  {code:"01",title:"4-inch & 6-inch Siding",text:"Choose a refined 4-inch exposure, a contemporary 6-inch profile, or combine both widths for a custom rhythm."},
  {code:"02",title:"6-inch Soffit",text:"A coordinated low-maintenance soffit profile for a continuous wood-look exterior palette."},
  {code:"03",title:"V-Groove Soffit",text:"A ventilated soffit option that maintains the collection’s clean architectural appearance."},
  {code:"04",title:"Board & Batten",text:"A vertical profile that brings depth, shadow lines and a modern interpretation of traditional siding."},
  {code:"05",title:"D4 & D4D Siding",text:"Traditional double-four profiles for familiar residential proportions with durable aluminum performance."},
  {code:"06",title:"Trims & Accessories",text:"Coordinated components complete corners, transitions, openings and terminations across the system."}
];

export default function CedarRenditionsPage(){return <main className="fastPlankPage cedarRenditionsPage">
  <section className="internalHero exteriorSystemDetailHero fastPlankHero">
    <div className="internalHeroImage exteriorSystemHeroMedia" style={{backgroundImage:'url("/images/exterior-systems/cedar-renditions/cedar-renditions-woodgrain-aluminum-siding-soffit-hero.webp")'}}/>
    <div className="wrap internalHeroCopy">
      <span>ALUMINUM SIDING & SOFFIT</span>
      <h1>Cedar Renditions® Siding & Soffit</h1>
      <p>Authentic woodgrain character with durable, low-maintenance aluminum performance at a more accessible price point.</p>
      <div className="heroActions"><Link href="/contact" className="btn internalRedBtn">Get a Quote →</Link><Link href="/contact" className="btn lineBtn">Request Sample</Link></div>
    </div>
  </section>

  <section className="fastPlankIntro"><div className="wrap fastPlankSplit">
    <div className="fastPlankCopy">
      <span className="fastPlankEyebrow">CEDAR RENDITIONS®</span>
      <h2>Premium style at a more competitive price.</h2>
      <p>Cedar Renditions® combines high-end aesthetics with low-maintenance durability, providing a cost-effective alternative to other aluminum siding products.</p>
      <p>The collection captures the warmth and visual depth of stained wood while delivering the resilience of aluminum. It can create a focal point, define an accent area or extend across larger elevations for a cohesive architectural finish.</p>
      <p>Its realistic woodgrain appearance, coordinated profiles and durable coating system make it a practical choice for cost-conscious projects that do not want to compromise on design.</p>
    </div>
    <div className="fastPlankIntroImage"><Image src="/images/exterior-systems/cedar-renditions/modern-ontario-home-woodgrain-aluminum-siding.webp" alt="Modern Ontario home with warm wood-look siding and stone accents" fill sizes="(max-width: 900px) 100vw, 44vw"/></div>
  </div></section>

  <section className="fastPlankBenefits"><div className="wrap">
    <div className="fastPlankSectionHead"><span className="fastPlankEyebrow">PERFORMANCE & VALUE</span><h2>Wood-inspired design without the upkeep.</h2></div>
    <div className="fastPlankBenefitGrid">{benefits.map((item,index)=><article key={item.title}><span>{String(index+1).padStart(2,"0")}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
  </div></section>

  <section className="fastPlankProfiles"><div className="wrap">
    <div className="fastPlankSectionHead"><span className="fastPlankEyebrow">PROFILE OPTIONS</span><h2>A coordinated family for siding and soffit.</h2></div>
    <div className="fastPlankProfileGrid">{profiles.map(profile=><article key={profile.code}><div className="fastPlankProfileBody"><span>{profile.code}</span><h3>{profile.title}</h3><p>{profile.text}</p></div></article>)}</div>
    <div className="longboardFullDiagram cedarProfileDiagram"><Image src="/images/exterior-systems/cedar-renditions/cedar-renditions-siding-soffit-profiles-accessories.png" alt="Cedar Renditions aluminum siding, soffit, board and batten, trim and accessory profiles" fill sizes="(max-width: 760px) 100vw, 72vw"/></div>
  </div></section>

  <section className="fastPlankColours"><div className="wrap">
    <div className="fastPlankColourIntro">
      <span className="fastPlankEyebrow">PREMIUM COLOURS</span>
      <h2>Natural depth. Authentic wood appeal.</h2>
      <p>Premium woodgrain finishes blend dark, medium and light tones across the panels. Installed together, they create rich natural variation that resembles real stained wood.</p>
      <p>Choose from premium, solid and traditional colour families, including Riverwood, Timberline, Smokewood, Grey Oak, Ironstone, Charcoal, Gray, Amberwood, Cedar Bark, Charwood and Spanish Moss.</p>
    </div>
    <div className="fastPlankColourGrid">
      <div><Image src="/images/exterior-systems/cedar-renditions/cedar-renditions-premium-solid-woodgrain-colours.png" alt="Cedar Renditions premium, solid and traditional aluminum woodgrain colour options" fill sizes="(max-width: 760px) 100vw, 48vw"/></div>
      <div><Image src="/images/exterior-systems/cedar-renditions/cedar-renditions-multitone-woodgrain-finishes.png" alt="Cedar Renditions Riverwood, Timberline, Smokewood and Grey Oak multi-toned finishes" fill sizes="(max-width: 760px) 100vw, 48vw"/></div>
    </div>
  </div></section>

  <section className="cedarBrochure"><div className="wrap cedarBrochureInner">
    <div className="cedarBrochureIcon"><FileText size={30}/></div>
    <div><span className="fastPlankEyebrow">PRODUCT BROCHURE</span><h2>Explore the complete Cedar Renditions® collection.</h2><p>Download the full product brochure for detailed profiles, colour options, accessories, performance information and warranty details.</p></div>
    <a href="/downloads/cedar-renditions-aluminum-siding-soffit-product-brochure-canada-2024.pdf" download className="btn internalRedBtn">Download Product Brochure <Download size={16}/></a>
  </div></section>

  <section className="fastPlankExpert"><div className="wrap fastPlankExpertInner">
    <div><span className="fastPlankEyebrow">SPEAK WITH AN EXPERT</span><h2>Find the right profile and finish for your project.</h2><p>Talk with CladCan about Cedar Renditions profiles, colour samples, accessories and installation requirements.</p></div>
    <Link href="/contact" className="btn internalRedBtn">Speak with an Expert <ArrowUpRight size={15}/></Link>
  </div></section>
</main>}
