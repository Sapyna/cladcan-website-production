import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Layers3, ShieldCheck, Wind } from "lucide-react";

export default function FibreCementBrandPage({brand,tagline,intro,hero,featureImage,benefits,products,technology,finishes,applications}){
  return <main className="fibreBrandPage">
    <section className="internalHero exteriorSystemDetailHero fibreBrandHero">
      <div className="internalHeroImage exteriorSystemHeroMedia" style={{backgroundImage:`url("${hero}")`}}/>
      <div className="wrap internalHeroCopy"><span>FIBRE CEMENT SIDING & PANELS</span><h1>{brand}</h1><p>{tagline}</p><div className="heroActions"><Link href="/contact" className="btn internalRedBtn">Get a Quote →</Link><Link href="/contact" className="btn lineBtn">Request Sample</Link></div></div>
    </section>

    <section className="fibreIntro"><div className="wrap fibreSplit">
      <div><span className="fibreEyebrow">PRODUCT OVERVIEW</span><h2>{intro.title}</h2>{intro.paragraphs.map(p=><p key={p}>{p}</p>)}</div>
      <figure><Image src={featureImage} alt={`${brand} fibre cement cladding application`} fill sizes="(max-width: 900px) 100vw, 44vw"/></figure>
    </div></section>

    <section className="fibreBenefits"><div className="wrap"><div className="fibreHead"><span className="fibreEyebrow">WHY {brand.toUpperCase()}</span><h2>Designed for lasting exterior performance.</h2></div><div className="fibreBenefitGrid">{benefits.map((item,index)=><article key={item.title}><span>{String(index+1).padStart(2,"0")}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>

    <section className="fibreProducts"><div className="wrap"><div className="fibreHead"><span className="fibreEyebrow">PRODUCT FAMILIES</span><h2>Profiles and panels for distinct architectural directions.</h2></div><div className="fibreProductGrid">{products.map((item,index)=><article key={item.title}><div><span>{String(index+1).padStart(2,"0")}</span><h3>{item.title}</h3></div><p>{item.text}</p></article>)}</div></div></section>

    <section className="fibreTechnology"><div className="wrap fibreTechGrid"><div><span className="fibreEyebrow">SYSTEM & TECHNOLOGY</span><h2>{technology.title}</h2><p>{technology.text}</p><ul>{technology.points.map(point=><li key={point}><Check size={18}/>{point}</li>)}</ul></div><div className="fibreTechCards"><div><ShieldCheck/><strong>Durable cladding</strong><span>Specified for project conditions</span></div><div><Wind/><strong>Moisture strategy</strong><span>Coordinated wall interfaces</span></div><div><Layers3/><strong>Complete assembly</strong><span>Panels, trims and accessories</span></div></div></div></section>

    <section className="fibreFinishes"><div className="wrap fibreFinishGrid"><div><span className="fibreEyebrow">COLOURS & TEXTURES</span><h2>A finish range that supports the architecture.</h2><p>Final availability varies by collection, region and project quantity. CladCan can coordinate current samples, matching accessories and manufacturer documentation.</p></div><div className="fibreFinishList">{finishes.map(item=><div key={item}><span></span>{item}</div>)}</div></div></section>

    <section className="fibreApplications"><div className="wrap"><div className="fibreHead"><span className="fibreEyebrow">APPLICATIONS</span><h2>Built for residential and commercial design.</h2></div><div className="fibreApplicationGrid">{applications.map((item,index)=><article key={item}><span>{String(index+1).padStart(2,"0")}</span><strong>{item}</strong></article>)}</div></div></section>

    <section className="fibreInstall"><div className="wrap fibreInstallGrid"><figure><Image src="/images/exterior-systems/fibre-cement/fibre-cement-panel-installation-ontario.webp" alt="Professional installation of fibre cement panels in Ontario" fill sizes="(max-width: 900px) 100vw, 48vw"/></figure><div><span className="fibreEyebrow">SUPPLY & INSTALLATION</span><h2>Details coordinated from substrate to finished edge.</h2><p>CladCan supports material selection, takeoffs, shop-drawing coordination, trims, flashings and professional installation. The selected manufacturer’s current requirements govern fastening, clearances, cutting, sealing and warranty compliance.</p><Link href="/contact" className="fibreTextLink">Discuss your project <ArrowUpRight size={17}/></Link></div></div></section>

    <section className="fibreCta"><div className="wrap"><span className="fibreEyebrow">SPEAK WITH AN EXPERT</span><h2>Find the right {brand} system for your project.</h2><p>Share your elevations, project type and preferred appearance. We can help coordinate products, samples and installation requirements.</p><Link href="/contact" className="btn internalRedBtn">Start a Conversation <ArrowUpRight size={17}/></Link></div></section>
  </main>
}
