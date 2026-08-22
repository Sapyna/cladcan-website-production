import Link from "next/link";
import ViewToggleCollection from "@/components/ViewToggleCollection";

export default function CurrentSitePage({eyebrow="EXTERIOR SYSTEMS",title,intro,image="/images/before-after/william-rose-after.jpg",overview,items=[],note}){
  return <>
    <section className="internalHero">
      <div className="internalHeroImage" style={{backgroundImage:`linear-gradient(90deg,rgba(13,18,23,.90),rgba(13,18,23,.40)),url("${image}")`}} />
      <div className="wrap internalHeroCopy"><span>{eyebrow}</span><h1>{title}</h1><p>{intro}</p><div className="heroActions"><Link href="/contact" className="btn internalRedBtn">Get a Quote →</Link><Link href="/contact" className="btn lineBtn">Request Sample</Link></div></div>
    </section>
    <section className="internalItems"><div className="wrap">
      {overview && <div className="sectionTitle" style={{marginBottom:32}}><div><span className="eyebrow">OVERVIEW</span><h2>{title}</h2></div><p>{overview}</p></div>}
      {items.length>0 && <ViewToggleCollection items={items.map((x,i)=>({number:String(i+1).padStart(2,"0"),title:x.title,subtitle:x.subtitle,description:x.text,href:x.href,linkLabel:x.linkLabel||"View Product"}))} />}
      {note&&<p style={{marginTop:28,maxWidth:900}}>{note}</p>}
    </div></section>
    <section className="internalCta"><div className="wrap"><div><span>START A PROJECT</span><h2>Need help selecting the right exterior system?</h2><p>Share your drawings, photos, material requirements or project scope and our team can review supply, fabrication and installation requirements.</p></div><Link href="/contact" className="btn internalRedBtn">Get a Free Consultation →</Link></div></section>
  </>;
}
