import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import ViewToggleCollection from "@/components/ViewToggleCollection";
import SystemVisualGallery from "@/components/SystemVisualGallery";
import { getVisuals } from "@/data/visualCatalog";

export default function ApplicationPage({breadcrumb=[],eyebrow,title,intro,overview,products=[],benefits=[],applications=[],images=[],ctaTitle="Need help selecting the right product?",ctaText="Send us your drawings, elevations or project requirements and our team can help review system options."}) {
  const pageVisuals = images.length ? images : getVisuals(`${eyebrow} ${title}`);
  return <main className="applicationPage">
    <section className="applicationHero" style={{backgroundImage:`url("${pageVisuals[0]}")`}}><div className="applicationHeroOverlay"/><div className="wrap applicationHeroContent">
      <span className="applicationEyebrow">{eyebrow}</span><h1>{title}</h1><p>{intro}</p>
      <div className="applicationHeroActions"><a href="#products" className="btn applicationPrimaryBtn">Explore Products <ArrowUpRight size={15}/></a><Link href="/contact" className="btn applicationSecondaryBtn">Request a Sample</Link></div>
    </div></section>
    <section className="applicationIntro"><div className="wrap applicationIntroGrid"><div><span className="applicationEyebrow dark">SYSTEM OVERVIEW</span><h2>Designed around<br/>the application.</h2></div><div><p>{overview || intro}</p><p>Individual products may support more than one application where technically appropriate. CladCan can help coordinate product selection, finishes, quantities and installation requirements.</p></div></div></section>
    <section className="applicationProducts" id="products"><div className="wrap"><div className="applicationSectionHeader"><div><span className="applicationEyebrow dark">AVAILABLE PRODUCTS</span><h2>Explore product options.</h2></div><p>Select a product to review profiles, dimensions, finishes, technical information and project resources.</p></div><ViewToggleCollection items={products.map((product,index)=>({number:String(index+1).padStart(2,"0"),title:product.title,subtitle:product.type,description:product.description,href:product.href,linkLabel:"View Product"}))} /></div></section>
    <SystemVisualGallery title={title} images={pageVisuals} />
    {benefits.length>0&&<section className="applicationBenefits"><div className="wrap"><div className="applicationBenefitsHeader"><span className="applicationEyebrow">KEY BENEFITS</span><h2>Why specify this<br/>system?</h2></div><div className="applicationBenefitsGrid">{benefits.map((benefit,index)=><article key={benefit.title}><span>{String(index+1).padStart(2,"0")}</span><h3>{benefit.title}</h3><p>{benefit.text}</p></article>)}</div></div></section>}
    {applications.length>0&&<section className="applicationUseCases"><div className="wrap applicationUseCasesGrid"><div><span className="applicationEyebrow dark">TYPICAL APPLICATIONS</span><h2>Where this system<br/>works best.</h2></div><div className="applicationUseCasesList">{applications.map(item=><div key={item}><CheckCircle2 size={16}/><span>{item}</span></div>)}</div></div></section>}
    <section className="applicationCTA"><div className="wrap applicationCTAInner"><div><span className="applicationEyebrow dark">PROJECT SUPPORT</span><h2>{ctaTitle}</h2><p>{ctaText}</p></div><Link href="/contact" className="btn applicationPrimaryBtn">Talk to CladCan <ArrowUpRight size={15}/></Link></div></section>
  </main>;
}
