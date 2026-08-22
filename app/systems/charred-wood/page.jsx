import { Hero, Visual, SectionTitle, QuoteBand } from "@/components/SiteBlocks";

export const metadata={title:"Charred Wood / Yakisugi"};

export default function CharredWood(){
 return <>
   <Hero kicker="EXTERIOR SYSTEMS · NATURAL MATERIALS" title="Charred wood for façades that need texture, depth and material presence." copy="Yakisugi-inspired charred timber creates a highly distinctive architectural surface for feature elevations, soffits and premium exterior applications." primary="Request Charred Wood Pricing" secondary={{label:"Request Finish Samples",href:"/contact"}} visualLabel="CHARRED WOOD · TEXTURE" variant="charred"/>
   <section className="section"><div className="wrap"><SectionTitle kicker="DESIGN LANGUAGE" title="A material that changes with light and viewing distance." copy="Species, charring process, brushing, stain, coating, maintenance and warranty vary by supplier. Final published claims must be tied to the selected product."/>
     <div className="finishGrid">
       {["Scale Char","Brushed Grain","Brushed + Finished","Re-burned / Deep Texture"].map((x,i)=><div key={x}><Visual label={x.toUpperCase()} variant={i%2?"wood":"charred"} ratio="finish"/><h3>{x}</h3></div>)}
     </div>
   </div></section>
   <section className="section darkSection"><div className="wrap splitFeature reverse"><div><span className="eyebrow">WHERE IT WORKS</span><h2>Use it where the material should be noticed.</h2><p>Charred wood is best presented as an architectural finish rather than a commodity siding product. The page should lead with texture, finish variation, detailing and completed CladCan applications.</p></div><Visual label="PREMIUM EXTERIOR ACCENT" variant="charred" ratio="feature"/></div></section>
   <QuoteBand/>
 </>;
}
