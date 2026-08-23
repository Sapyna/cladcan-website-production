import Link from "next/link";
import {
  ArrowRight, PackageCheck, Factory, HardHat, PenTool, Wrench,
  CheckCircle2, Ruler, Truck, Layers3, ClipboardCheck, Building2
} from "lucide-react";

const services=[
  {
    n:"01", icon:PackageCheck, title:"Supply",
    copy:"Exterior materials and system components sourced around your drawings, specification, schedule and budget.",
    points:["Cladding & siding materials","Roofing & façade components","Bulk / project ordering","Delivery coordination"],
    href:"/services/material-supply", image:"/images/services/service-material-supply.webp"
  },
  {
    n:"02", icon:Factory, title:"Fabrication",
    copy:"Project-specific fabrication for architectural metal and the secondary components required for clean field execution.",
    points:["ACM panel fabrication","Custom flashing & trim","Z-bar & hat channel","Project-specific components"],
    href:"/services/custom-fabrication", image:"/images/services/service-custom-fabrication.webp"
  },
  {
    n:"03", icon:HardHat, title:"Installation",
    copy:"Coordinated installation for wall, soffit, glazing, roofing and architectural exterior systems across Ontario.",
    points:["Wall & soffit systems","Windows & glazing","Roofing systems","Roofline & aluminum work"],
    href:"/services/installation", image:"/images/services/service-installation.webp"
  },
  {
    n:"04", icon:PenTool, title:"Design & Permits",
    copy:"Design-assist and permit support that connects architectural intent with material selection, detailing and constructability.",
    points:["Façade design support","Material selection","Detail coordination","Permit assistance"],
    href:"/services/design-permit-support", image:"/images/services/service-design-support.webp"
  },
  {
    n:"05", icon:Wrench, title:"Repairs & Maintenance",
    copy:"Targeted exterior repairs and maintenance to restore appearance, weather protection and envelope performance.",
    points:["Cladding repairs","Flashing & trim corrections","Leak-response coordination","Exterior maintenance"],
    href:"/services/repair-maintenance", image:"/images/services/service-repair-maintenance.webp"
  }
];

const process=[
  [ClipboardCheck,"Review","Drawings, elevations, site conditions and the required scope are reviewed first."],
  [Layers3,"System Strategy","Materials, interfaces, finish, budget and procurement priorities are aligned."],
  [Ruler,"Detail & Coordinate","Dimensions, trims, transitions and constructability are resolved before execution."],
  [Factory,"Fabricate & Supply","Components and materials are prepared and sequenced around the project schedule."],
  [HardHat,"Install & Close Out","Field work is coordinated through installation, corrections and project closeout."]
];

export const metadata={
  title:"Exterior Cladding & Facade Services | CladCan",
  description:"CladCan provides exterior material supply, custom fabrication, installation, design and permit support, repairs and building-envelope services across Toronto, the GTA and Ontario."
};

export default function ServicesPage(){
 return <>
  <section className="servicesHero" style={{backgroundImage:'url("/images/services/services-overview.webp")'}}>
    <div className="servicesHeroShade"></div>
    <div className="wrap servicesHeroInner">
      <span className="servicesKicker">CLADCAN SERVICES</span>
      <h1>One exterior partner.<br/><em>Every stage of the project.</em></h1>
      <p>From material supply and custom fabrication to installation, design support and repairs, CladCan connects the exterior scope under one coordinated team.</p>
      <div className="servicesHeroActions">
        <Link className="btn servicesRedBtn" href="/contact">Get a Free Consultation <ArrowRight size={17}/></Link>
        <a className="btn servicesGhostBtn" href="tel:+18449243030">Call +1 (844) 924-3030</a>
      </div>
    </div>
  </section>

  <section className="servicesIntro">
    <div className="wrap servicesIntroGrid">
      <div>
        <span className="servicesKicker dark">WHAT WE DO</span>
        <h2>Exterior services built around the way projects are actually delivered.</h2>
      </div>
      <div>
        <p>Exterior projects rarely stay within one scope of work. Material selection influences detailing, detailing influences fabrication, and fabrication influences installation quality. CladCan’s service model is built around keeping those decisions connected from the first review through final execution.</p>
        <div className="servicesMiniProof">
          <span><CheckCircle2 size={18}/> Residential</span>
          <span><CheckCircle2 size={18}/> Commercial</span>
          <span><CheckCircle2 size={18}/> Institutional</span>
        </div>
      </div>
    </div>
  </section>

  <section className="servicesCardsSection">
    <div className="wrap servicesCards">
      {services.map(({n,icon:Icon,title,copy,points,href,image},i)=>
        <article className={`servicesFeature ${i%2 ? "reverse":""}`} key={title}>
          <div className="servicesFeatureImage">
            <img src={image} alt={`${title} service by CladCan`}/>
            <span>{n}</span>
          </div>
          <div className="servicesFeatureCopy">
            <div className="servicesFeatureTitle"><Icon size={25}/><h2>{title}</h2></div>
            <p>{copy}</p>
            <ul>{points.map(p=><li key={p}><CheckCircle2 size={16}/>{p}</li>)}</ul>
            <Link href={href}>Explore {title} <ArrowRight size={15}/></Link>
          </div>
        </article>
      )}
    </div>
  </section>

  <section className="servicesProcess">
    <div className="wrap">
      <div className="servicesSectionHead">
        <span className="servicesKicker">OUR PROCESS</span>
        <h2>From first review to final installation.</h2>
        <p>A coordinated workflow reduces handoffs, keeps details aligned and gives the project team a clearer path from concept to execution.</p>
      </div>
      <div className="servicesProcessGrid">
        {process.map(([Icon,title,copy],i)=><div key={title}>
          <span className="servicesProcessNum">{String(i+1).padStart(2,"0")}</span>
          <Icon size={24}/>
          <h3>{title}</h3>
          <p>{copy}</p>
        </div>)}
      </div>
    </div>
  </section>

  <section className="servicesAudience">
    <div className="wrap servicesAudienceGrid">
      <div className="servicesAudienceImage">
        <img src="/images/services/service-team.webp" alt="CladCan project team on an active Ontario construction site"/>
      </div>
      <div className="servicesAudienceCopy">
        <span className="servicesKicker dark">WHO WE WORK WITH</span>
        <h2>Support for the full project team.</h2>
        <p>We work with the people responsible for design, procurement, construction and ownership—helping translate project requirements into an executable exterior package.</p>
        <div className="audienceList">
          <span><Building2/> Builders & Developers</span>
          <span><PenTool/> Architects & Designers</span>
          <span><HardHat/> General Contractors & Trades</span>
          <span><PackageCheck/> Owners & Property Managers</span>
        </div>
      </div>
    </div>
  </section>

  <section className="servicesWhy">
    <div className="wrap">
      <div className="servicesSectionHead light">
        <span className="servicesKicker">WHY CLADCAN</span>
        <h2>Fewer handoffs. Better coordination.</h2>
      </div>
      <div className="servicesWhyGrid">
        <div><strong>01</strong><h3>End-to-end capability</h3><p>Supply, fabrication, installation and design support can be coordinated around one exterior scope.</p></div>
        <div><strong>02</strong><h3>Project-specific detailing</h3><p>Materials and components are considered in the context of actual dimensions, interfaces and site conditions.</p></div>
        <div><strong>03</strong><h3>Ontario project coverage</h3><p>Toronto and GTA-based coordination with service reach across communities throughout Ontario.</p></div>
        <div><strong>04</strong><h3>Material flexibility</h3><p>A broad system palette allows recommendations to follow performance, design and budget—not one product line.</p></div>
      </div>
    </div>
  </section>

  <section className="servicesFinalCta">
    <div className="wrap servicesFinalCtaInner">
      <div><span className="servicesKicker dark">START A PROJECT</span><h2>Not sure which service you need?</h2><p>Send us your drawings, photos or project requirements. We’ll review the scope and help identify the right next step.</p></div>
      <div className="servicesFinalActions">
        <Link className="btn servicesRedBtn" href="/contact">Get a Free Consultation <ArrowRight size={17}/></Link>
        <a href="tel:+18449243030">+1 (844) 924-3030</a>
      </div>
    </div>
  </section>
 </>;
}
