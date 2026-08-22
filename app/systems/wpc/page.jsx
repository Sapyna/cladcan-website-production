import { Hero, Visual, SectionTitle, QuoteBand } from "@/components/SiteBlocks";

export const metadata={title:"WPC & Composite Cladding"};

export default function WPC(){
 return <>
   <Hero kicker="EXTERIOR SYSTEMS · COMPOSITE" title="WPC cladding with architectural warmth and reduced upkeep." copy="Composite exterior systems offer a wood-inspired design language while reducing the refinishing and maintenance associated with many natural timber applications." primary="Request WPC Pricing" secondary={{label:"Request Sample",href:"/contact"}} visualLabel="WPC / COMPOSITE SYSTEM" variant="wood"/>
   <section className="section"><div className="wrap">
     <SectionTitle kicker="APPLICATION" title="A practical material for warm, contemporary exteriors." copy="Use product-specific manufacturer literature for final performance, warranty, colour and installation claims."/>
     <div className="benefitGrid">
       {[
         ["01","Wood-look expression","Warm architectural character for siding, soffit and feature-zone applications."],
         ["02","Reduced finish maintenance","Suitable where owners want a timber appearance without routine staining or painting."],
         ["03","Concealed-fix aesthetics","Many WPC systems are designed around clean, uninterrupted exterior surfaces."],
         ["04","Mixed-material design","Pairs effectively with metal, masonry, glass and other contemporary exterior systems."],
         ["05","Residential + commercial","Applicable to homes, retail, mixed-use and feature architectural conditions."],
         ["06","System-specific detailing","Profiles, ventilation, fastening and movement requirements vary by manufacturer."]
       ].map(([n,t,c])=><div key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></div>)}
     </div>
   </div></section>
   <section className="section paper"><div className="wrap"><SectionTitle kicker="VISUAL DIRECTION" title="Finish and texture should do the selling."/><div className="imageTriptych"><Visual label="WOODGRAIN PROFILE" variant="wood"/><Visual label="SOFFIT APPLICATION" variant="bronze"/><Visual label="MIXED-MATERIAL FAÇADE" variant="graphite"/></div></div></section>
   <QuoteBand title="Need WPC samples or project pricing?" copy="Share approximate quantities, drawings or finish direction and we can review the next step."/>
 </>;
}
