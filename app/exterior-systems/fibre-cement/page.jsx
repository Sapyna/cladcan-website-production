import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Layers3, ShieldCheck, Wind } from "lucide-react";

export const metadata={title:"Fibre Cement Siding & Architectural Panels",description:"Compare James Hardie fibre cement siding and Nichiha architectural wall panels supplied and installed by CladCan for Ontario projects."};

const benefits=[
  [ShieldCheck,"Durable & Low Maintenance","Resists rot, warping and pest damage while providing a substantial exterior finish."],
  [Wind,"Weather Resistant","Product systems are designed for demanding exterior exposure when installed to manufacturer requirements."],
  [Layers3,"Design Versatility","Lap siding, vertical panels, architectural textures, trims and soffits support varied design directions."]
];

export default function FibreCementPage(){return <main className="fibreBrandPage fibreCategoryPage">
  <section className="internalHero exteriorSystemDetailHero fibreBrandHero"><div className="internalHeroImage exteriorSystemHeroMedia" style={{backgroundImage:'url("/images/exterior-systems/fibre-cement/fibre-cement-panel-installation-ontario.webp")'}}/><div className="wrap internalHeroCopy"><span>EXTERIOR SYSTEMS</span><h1>Fibre Cement Siding & Panels</h1><p>Durable cladding systems for residential, multi-family and commercial façades in traditional or contemporary forms.</p><div className="heroActions"><Link href="/contact" className="btn internalRedBtn">Get a Quote →</Link><Link href="/contact" className="btn lineBtn">Request Sample</Link></div></div></section>

  <section className="fibreCategoryIntro"><div className="wrap"><span className="fibreEyebrow">TWO LEADING SYSTEMS</span><h2>Choose the fibre cement approach that fits the architecture.</h2><p>James Hardie focuses on climate-engineered siding, panels, trim and soffit with familiar residential profiles. Nichiha brings panelized rainscreen technology and highly expressive architectural textures to residential and commercial façades.</p></div></section>

  <section className="fibreBrandChoices"><div className="wrap fibreBrandChoiceGrid">
    <article><div className="fibreChoiceImage"><Image src="/images/exterior-systems/fibre-cement/james-hardie-fibre-cement-modern-home-hero.webp" alt="Modern home exterior representing James Hardie fibre cement siding applications" fill sizes="(max-width: 800px) 100vw, 50vw"/></div><div className="fibreChoiceBody"><span className="fibreEyebrow">SIDING · PANELS · TRIM · SOFFIT</span><h2>James Hardie</h2><p>Lap siding, architectural panels, shingle, trim and soffit products with climate-specific engineering and ColorPlus® factory finishes.</p><ul><li><Check size={17}/>Traditional and contemporary profiles</li><li><Check size={17}/>ColorPlus® finish collections</li><li><Check size={17}/>Coordinated exterior product family</li></ul><Link href="/exterior-systems/fibre-cement/james-hardie">Explore James Hardie <ArrowUpRight size={17}/></Link></div></article>
    <article><div className="fibreChoiceImage"><Image src="/images/exterior-systems/fibre-cement/nichiha-architectural-wall-panel-hero.webp" alt="Architectural wall panels representing Nichiha fibre cement façade applications" fill sizes="(max-width: 800px) 100vw, 50vw"/></div><div className="fibreChoiceBody"><span className="fibreEyebrow">ARCHITECTURAL WALL PANELS</span><h2>Nichiha</h2><p>Panelized fibre cement rainscreen systems with concealed attachment and wood, concrete, stone, brick and dimensional textures.</p><ul><li><Check size={17}/>Integrated rainscreen cavity</li><li><Check size={17}/>Concealed clip attachment</li><li><Check size={17}/>Expressive architectural textures</li></ul><Link href="/exterior-systems/fibre-cement/nichiha">Explore Nichiha <ArrowUpRight size={17}/></Link></div></article>
  </div></section>

  <section className="fibreCategoryBenefits"><div className="wrap"><div className="fibreHead"><span className="fibreEyebrow">WHY FIBRE CEMENT?</span><h2>Resilient material with broad design potential.</h2></div><div className="fibreCategoryBenefitGrid">{benefits.map(([Icon,title,text])=><article key={title}><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

  <section className="fibreCta"><div className="wrap"><span className="fibreEyebrow">NEED HELP CHOOSING?</span><h2>Compare the right fibre cement system for your project.</h2><p>Share your elevations and preferred appearance. CladCan can help coordinate products, samples, details and installation requirements.</p><Link href="/contact" className="btn internalRedBtn">Speak With an Expert <ArrowUpRight size={17}/></Link></div></section>
</main>}
