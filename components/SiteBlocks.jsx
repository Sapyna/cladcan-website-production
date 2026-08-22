import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Visual({label="CLADCAN PROJECT IMAGE",variant="metal",ratio="landscape",caption}){
  return <div className={`visual visual-${variant} visual-${ratio}`}>
    <div className="visualGrid"></div><span className="visualLabel">{label}</span>{caption&&<span className="visualCaption">{caption}</span>}
  </div>
}
export function ArchitecturalVisual({label="CLADCAN PROJECT",tone="metal",ratio="landscape"}){ return <Visual label={label} variant={tone} ratio={ratio}/>; }
export function Hero({kicker,eyebrow,title,copy,primary="Request Project Review",primaryHref="/contact",secondary,visualLabel="CLADCAN PROJECT",variant="metal",children}){
 return <section className="hero"><div className="wrap heroGrid"><div className="heroCopy"><span className="eyebrow">{kicker||eyebrow}</span><h1>{title}</h1><p>{copy}</p><div className="heroActions"><Link className="btn bronzeBtn" href={primaryHref}>{primary}</Link>{secondary&&<Link className="btn lineBtn" href={secondary.href}>{secondary.label}</Link>}</div></div>{children||<Visual label={visualLabel} variant={variant}/>}</div></section>
}
export function SectionTitle({kicker,eyebrow,title,copy,link}){ return <div className="sectionTitle"><div><span className="eyebrow">{kicker||eyebrow}</span><h2>{title}</h2></div>{copy&&<p>{copy}</p>}{link&&<Link className="textLink" href={link.href}>{link.label}<ArrowUpRight size={13}/></Link>}</div> }
export const SectionHeading=SectionTitle;
export function QuoteBand({title="Bring us the drawings. We’ll help resolve the exterior scope.",copy="Share project information, elevations, photos or material requirements for review."}){ return <section className="section"><div className="wrap"><div className="quoteBand"><div><span className="eyebrow goldText">PROJECT INQUIRY</span><h2>{title}</h2><p>{copy}</p></div><Link className="btn bronzeBtn" href="/contact">Request Project Review</Link></div></div></section> }
export function CTA(props){ return <QuoteBand {...props}/>; }
