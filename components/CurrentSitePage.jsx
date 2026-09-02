import Link from "next/link";
import ViewToggleCollection from "@/components/ViewToggleCollection";
import SystemVisualGallery from "@/components/SystemVisualGallery";
import { getVisuals } from "@/data/visualCatalog";

export default function CurrentSitePage({eyebrow="EXTERIOR SYSTEMS",title,intro,image,images=[],overview,items=[],note,decisionSupport=[]}){
  const pageVisuals = images.length ? images : getVisuals(title);
  const heroImage = image || pageVisuals[0];
  // Note: automated source-pack population removed to avoid injection of raw source content.

  const supportCards = decisionSupport.length ? decisionSupport : [
    {label:"What it is", text:`${title} is a material family or product direction commonly considered when the project needs a specific exterior expression, weather-resistance strategy and coordination with the rest of the envelope.`},
    {label:"Where it fits", text:"These systems are often used for wall cladding, soffit, feature areas, accents, screens and sheathings where the project team is balancing finish intent with installation requirements."},
    {label:"Why teams compare it", text:"Selection often comes down to profile, finish flexibility, drainage strategy, substrate compatibility and how the system interfaces with trims, openings and adjacent materials."},
    {label:"What CladCan helps with", text:"CladCan can help review product direction, supply coordination, fabrication needs, material sequencing and installation planning around the actual project conditions."}
  ];

  return <>
    <section className="internalHero exteriorSystemDetailHero">
      <div className="internalHeroImage" style={{backgroundImage:`linear-gradient(90deg,rgba(13,18,23,.90),rgba(13,18,23,.40)),url("${heroImage}")`}} />
      <div className="wrap internalHeroCopy"><span>{eyebrow}</span><h1>{title}</h1><p>{intro}</p><div className="heroActions"><Link href="/contact" className="btn internalRedBtn">Get a Quote →</Link><Link href="/contact" className="btn lineBtn">Request Sample</Link></div></div>
    </section>
    <section className="internalItems"><div className="wrap">
      {overview && <div className="sectionTitle" style={{marginBottom:32}}><div><span className="eyebrow">OVERVIEW</span><h2>{title}</h2></div><p>{overview}</p></div>}
      <div style={{marginTop:6,marginBottom:24,display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(190px,1fr))',gap:16}}>
        {supportCards.map((card)=>(
          <div key={card.label} style={{background:'#f5f5f1',border:'1px solid #e7e0d6',padding:'18px 18px 16px',borderRadius:12}}>
            <div style={{fontSize:11,letterSpacing:'0.12em',textTransform:'uppercase',color:'#7c6c5f',fontWeight:700,marginBottom:8}}>{card.label}</div>
            <p style={{margin:0,fontSize:15,lineHeight:1.6,color:'#30363b'}}>{card.text}</p>
          </div>
        ))}
      </div>
      {items.length>0 && <ViewToggleCollection items={items.map((x,i)=>({number:String(i+1).padStart(2,"0"),title:x.title,subtitle:x.subtitle,description:x.text,href:x.href,linkLabel:x.linkLabel||"View Product"}))} />}
      {note&&<p style={{marginTop:28,maxWidth:900}}>{note}</p>}
    </div></section>
    <SystemVisualGallery title={title} images={pageVisuals} />
    <section className="internalCta"><div className="wrap"><div><span>START A PROJECT</span><h2>Need help selecting the right exterior system?</h2><p>Share your drawings, photos, material requirements or project scope and our team can review supply, fabrication and installation requirements.</p></div><Link href="/contact" className="btn internalRedBtn">Get a Free Consultation →</Link></div></section>
  </>;
}
