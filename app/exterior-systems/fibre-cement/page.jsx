import Link from "next/link";
import { ArrowUpRight, Check, ShieldCheck, Flame, Droplets, Palette } from "lucide-react";
import ViewToggleCollection from "@/components/ViewToggleCollection";

export const metadata={title:"Fibre Cement Siding & Architectural Panels",description:"Compare James Hardie fibre cement siding and Nichiha architectural wall panels supplied and installed by CladCan for Ontario projects."};

const subcategories=[
  {number:"01",title:"James Hardie",subtitle:"Siding, Panels, Trim & Soffit",description:"Climate-engineered lap siding, architectural panels, shingle, trim and soffit with durable ColorPlus® finish options.",href:"/exterior-systems/fibre-cement/james-hardie",image:"/images/exterior-systems/fibre-cement/james-hardie-fibre-cement-modern-home-hero.webp"},
  {number:"02",title:"Nichiha",subtitle:"Architectural Wall Panels",description:"Panelized fibre cement rainscreen systems with concealed attachment and expressive wood, concrete, stone, brick and dimensional textures.",href:"/exterior-systems/fibre-cement/nichiha",image:"/images/exterior-systems/fibre-cement/nichiha-architectural-wall-panel-hero.webp"}
];

const benefits=[
  {icon:ShieldCheck,title:"Durable",text:"Fibre cement is commonly selected for resistance to rot, warping and pest damage in long-term exterior applications."},
  {icon:Flame,title:"Fire Performance",text:"Noncombustible fibre cement products can support project-specific fire-performance goals when used in an appropriate wall assembly."},
  {icon:Droplets,title:"Weather Resistant",text:"Suitable for Ontario exterior conditions when clearances, drainage, flashings and manufacturer requirements are coordinated."},
  {icon:Palette,title:"Design Flexibility",text:"Lap siding, panels, shingles, trims and architectural textures support traditional and contemporary façade expressions."}
];

const applications=["Custom homes","Residential renovations","Multi-family developments","Commercial buildings","Hospitality projects","Institutional façades","Feature walls","Soffits and accents"];

export default function FibreCementPage(){return <main className="aluminumPage">
  <section className="aluminumPageHero exteriorSystemDetailHero"><div className="exteriorSystemHeroMedia" style={{backgroundImage:"url('/images/source-library/fibre-cement/hero.webp')"}}/><div className="aluminumPageHeroOverlay"/><div className="wrap aluminumPageHeroContent"><span className="aluminumEyebrow">FIBRE CEMENT SIDING & PANELS</span><h1>Durable cladding<br/><em>with design freedom.</em></h1><p>Fibre cement siding and architectural panel systems for resilient residential, multi-family and commercial exteriors.</p><div className="aluminumHeroActions"><a href="#systems" className="btn aluminumPrimaryBtn">Explore Systems <ArrowUpRight size={15}/></a><Link href="/contact" className="btn aluminumSecondaryBtn">Request a Sample</Link></div></div></section>

  <section className="aluminumOverview"><div className="wrap aluminumOverviewGrid"><div><span className="aluminumEyebrow dark">FIBRE CEMENT SYSTEMS</span><h2>Two brands.<br/>Distinct design directions.</h2></div><div className="aluminumOverviewCopy"><p>Fibre cement combines cementitious strength with profiles and surface treatments designed for exterior cladding. It is commonly selected where durability, low maintenance and a substantial material appearance are important.</p><p>James Hardie focuses on familiar siding, panel, trim and soffit families, while Nichiha specializes in panelized rainscreen systems with expressive architectural textures. CladCan helps compare the right approach for the façade, substrate and project requirements.</p><div className="aluminumMiniBenefits"><span><Check size={14}/> Siding</span><span><Check size={14}/> Architectural Panels</span><span><Check size={14}/> Trim & Soffit</span><span><Check size={14}/> Rainscreen Systems</span></div></div></div></section>

  <section className="aluminumSystemsSection" id="systems"><div className="wrap"><div className="aluminumSectionHeader"><div><span className="aluminumEyebrow dark">AVAILABLE SYSTEMS</span><h2>Explore fibre cement brands.</h2></div><p>Select a system to explore products, textures, finishes, installation technology and project-specific considerations.</p></div><ViewToggleCollection items={subcategories.map(item=>({...item,linkLabel:"Explore System"}))}/></div></section>

  <section className="aluminumBenefits"><div className="wrap"><div className="aluminumBenefitsHeader"><span className="aluminumEyebrow">WHY FIBRE CEMENT</span><h2>Resilient exterior material<br/>for varied architecture.</h2></div><div className="aluminumBenefitsGrid">{benefits.map(({icon:Icon,title,text},index)=><article key={title}><span className="aluminumBenefitNumber">{String(index+1).padStart(2,"0")}</span><Icon size={24}/><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

  <section className="aluminumApplications"><div className="wrap aluminumApplicationsGrid"><div><span className="aluminumEyebrow dark">APPLICATIONS</span><h2>From familiar siding<br/>to expressive panels.</h2><p>Fibre cement can define an entire exterior or work as part of a mixed-material façade. Brand, profile, layout and detailing should be selected around the architectural intent and exposure conditions.</p></div><div className="aluminumApplicationsList">{applications.map((item,index)=><div key={item}><span>{String(index+1).padStart(2,"0")}</span><strong>{item}</strong></div>)}</div></div></section>

  <section className="aluminumFinishes"><div className="wrap aluminumFinishesInner"><div><span className="aluminumEyebrow dark">COLOURS & TEXTURES</span><h2>Traditional character<br/>or modern material depth.</h2></div><div><p>Available appearances range from smooth and wood-textured siding to concrete, stone, brick, block and dimensional architectural panels. Current finish availability varies by brand and collection.</p><Link href="/contact" className="aluminumTextLink">Request Product Samples <ArrowUpRight size={14}/></Link></div></div></section>

  <section className="aluminumCTA"><div className="wrap aluminumCTAInner"><div><span className="aluminumEyebrow dark">START A PROJECT</span><h2>Comparing James Hardie and Nichiha?</h2><p>Send us your drawings, elevations or inspiration images. Our team can help compare product type, finish, detailing and installation strategy before specification.</p></div><Link href="/contact" className="btn aluminumPrimaryBtn">Talk to Our Team <ArrowUpRight size={15}/></Link></div></section>
</main>}
