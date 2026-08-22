import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function InternalLanding({
  eyebrow, title, intro, image, items=[], cta="Request a Quote", children
}){
 return <>
  <section className="internalHero">
    <div className="internalHeroImage" style={{backgroundImage:`linear-gradient(90deg,rgba(13,18,23,.90),rgba(13,18,23,.40)),url("${image}")`}}/>
    <div className="wrap internalHeroCopy">
      <span>{eyebrow}</span>
      <h1>{title}</h1>
      <p>{intro}</p>
      <Link href="/contact" className="btn internalRedBtn">{cta}<ArrowRight size={16}/></Link>
    </div>
  </section>
  {items.length>0 && <section className="internalItems"><div className="wrap">
    <div className="internalItemsGrid">
      {items.map((x,i)=><article key={x.title}>
        <span className="internalNum">{String(i+1).padStart(2,"0")}</span>
        <h2>{x.title}</h2>
        <p>{x.text}</p>
        {x.href && <Link href={x.href}>Learn More <ArrowRight size={14}/></Link>}
      </article>)}
    </div>
  </div></section>}
  {children}
  <section className="internalCta"><div className="wrap">
    <div><span>START A PROJECT</span><h2>Have drawings, photos or a project scope?</h2><p>Send them to our team for a practical review of materials, detailing, supply and installation requirements.</p></div>
    <Link href="/contact" className="btn internalRedBtn">Get a Free Consultation <ArrowRight size={16}/></Link>
  </div></section>
 </>;
}
