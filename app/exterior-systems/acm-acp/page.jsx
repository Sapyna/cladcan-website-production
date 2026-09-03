import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Layers3, Ruler, ShieldCheck, Sparkles } from "lucide-react";

export const metadata = {
  title: "ACM / ACP Aluminum Composite Panels",
  description: "Explore ACM and ACP aluminum composite panels, finishes, fabrication, fastening systems and applications supplied and installed by CladCan across Ontario."
};

const benefits = [
  ["Cost-Effective", "Durable, low-maintenance panel systems can provide strong long-term value across many exterior applications."],
  ["Lightweight", "Composite construction simplifies handling, fabrication and installation compared with many heavier façade materials."],
  ["Durable", "Specified coatings and panel assemblies can resist weather, ultraviolet exposure and corrosion."],
  ["Design Versatility", "A broad palette of colours, textures and forming possibilities supports simple or expressive façades."],
  ["Fire-Rated Options", "Mineral-filled and other code-compliant core options are available where enhanced fire performance is required."],
  ["Low Maintenance", "Smooth finished surfaces are straightforward to clean and designed for lasting colour retention."]
];

const applications = [
  { title: "Commercial Buildings", text: "Offices, retail centres and hospitality façades with crisp contemporary geometry.", image: "/images/exterior-systems/acm-acp/commercial-building-acm-panel-cladding.webp" },
  { title: "Residential Projects", text: "Custom homes and multi-residential façades requiring clean lines and durable finishes.", image: "/images/exterior-systems/acm-acp/residential-aluminum-composite-panel-facade.webp" },
  { title: "Public Infrastructure", text: "Hospitals, airports, schools and institutional buildings balancing performance and identity.", image: "/images/exterior-systems/acm-acp/public-infrastructure-acm-panel-application.webp" },
  { title: "Architectural Signage", text: "Durable branded façades and dimensional signs fabricated for exterior exposure.", image: "/images/exterior-systems/acm-acp/acm-panel-commercial-signage.webp" }
];

const process = ["Design Consultation", "Field Measurement", "Shop Drawings & Panel Layout", "Precision Fabrication", "Coordinated Delivery", "Envelope & Subframing Preparation", "Panel Installation", "Project Management", "Final Review & Support"];

const faqs = [
  ["What is the typical lifespan of ACM?", "Service life depends on the panel, coating, exposure, assembly design and maintenance. Quality architectural systems are commonly selected for long-term exterior use."],
  ["Are fire-resistant ACM panels available?", "Yes. Core composition and fire performance vary significantly, so the specified panel must be verified against the project’s applicable code and assembly requirements."],
  ["Can ACM be recoated?", "Compatible coating systems may be available, but preparation and coating must follow the panel and finish manufacturer’s requirements."],
  ["How does ACM compare with other cladding?", "ACM combines low weight, precise fabrication and broad finish flexibility, while brick and stone provide different mass, texture and assembly characteristics."],
  ["What warranty is available?", "Warranty coverage varies by manufacturer, finish, product series, exposure and installation. CladCan can help confirm current project-specific terms."]
];

export default function AcmAcpPage() {
  return (
    <article className="acmPage">
      <section className="internalHero exteriorSystemDetailHero acmStandardHero">
        <div className="internalHeroImage exteriorSystemHeroMedia acmStandardHeroMedia" style={{backgroundImage:"url('/images/source-library/acm-acp/hero.webp')"}} />
        <div className="wrap internalHeroCopy">
          <span>ALUMINUM COMPOSITE MATERIAL</span>
          <h1>ACM / ACP Aluminum Composite Panels</h1>
          <p>Precision-fabricated architectural panels for contemporary façades, building envelopes, feature elements and signage.</p>
          <div className="heroActions"><Link href="/contact" className="btn internalRedBtn">Get a Quote →</Link><Link href="/contact" className="btn lineBtn">Request Sample</Link></div>
        </div>
      </section>

      <section className="acmIntro acmSection">
        <div className="acmIntroMedia"><Image src="/images/exterior-systems/acm-acp/introduction-acm-panel-building-envelope.webp" alt="Close view of a dark aluminum composite panel building envelope" fill sizes="(max-width: 900px) 100vw, 42vw" /></div>
        <div className="acmCopy">
          <p className="acmEyebrow">WHAT IS ACM / ACP?</p>
          <h2>A lightweight panel engineered for the modern envelope.</h2>
          <p>Aluminum Composite Material—also known as Aluminum Composite Panel—combines two aluminum skins with a bonded core. The result is a flat, rigid and highly workable panel that can be cut, routed, folded and formed into precise architectural shapes.</p>
          <p>CladCan coordinates products from established manufacturers and helps project teams select the appropriate panel, coating, core and assembly for the design intent and performance requirements.</p>
          <div className="acmBrandLine">ALPOLIC · ALUBOND · ALUCOIL · LARSON · REYNOBOND · ALUCOBOND · ALCOTEX · ALFREX</div>
        </div>
      </section>

      <section className="acmLayers acmSection">
        <div className="acmCopy">
          <p className="acmEyebrow">PANEL CONSTRUCTION</p>
          <h2>Multiple layers. One high-performance panel.</h2>
          <div className="acmLayerList">
            <div><span>01</span><p><strong>Aluminum skins</strong> provide smooth surfaces, dimensional stability and a durable finished face.</p></div>
            <div><span>02</span><p><strong>Bonded core</strong> is selected by product series and project requirements, including mineral-filled options.</p></div>
            <div><span>03</span><p><strong>Architectural coating</strong> creates the final colour, texture and exterior weathering performance.</p></div>
          </div>
        </div>
        <div className="acmDiagram"><Image src="/images/exterior-systems/acm-acp/aluminum-composite-panel-layer-construction.webp" alt="Diagram showing the bonded layers of an aluminum composite panel" width={1069} height={548} sizes="(max-width: 900px) 100vw, 48vw" /></div>
      </section>

      <section className="acmBenefits acmSection">
        <div className="acmHeading"><p className="acmEyebrow">WHY ACM?</p><h2>Performance that gives designers room to create.</h2></div>
        <div className="acmBenefitGrid">
          {benefits.map(([title, text], index) => <div className="acmBenefit" key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></div>)}
        </div>
      </section>

      <section className="acmApplications acmSection" id="applications">
        <div className="acmHeading"><p className="acmEyebrow">APPLICATIONS</p><h2>One material system, many architectural roles.</h2></div>
        <div className="acmApplicationGrid">
          {applications.map((item) => <article className="acmApplication" key={item.title}><div className="acmApplicationMedia"><Image src={item.image} alt={`${item.title} using aluminum composite panels`} fill sizes="(max-width: 700px) 100vw, 50vw" /></div><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}
        </div>
      </section>

      <section className="acmFinishes acmSection">
        <div className="acmFinishMedia"><Image src="/images/exterior-systems/acm-acp/acm-panel-colours-finishes-samples.webp" alt="Fan of aluminum composite panel colour and finish samples" fill sizes="(max-width: 900px) 100vw, 48vw" /></div>
        <div className="acmCopy">
          <p className="acmEyebrow">COLOURS & FINISHES</p>
          <h2>A finish palette made for architectural expression.</h2>
          <p>Choose from manufacturer collections or coordinate a project-specific finish. Availability, minimum quantities and warranty terms vary by product.</p>
          <ul className="acmCheckList">{["Standard solid colours", "Metallic & brushed finishes", "Woodgrain appearances", "Stone & textured finishes", "Custom colour matching"].map(item => <li key={item}><Check size={18} />{item}</li>)}</ul>
        </div>
      </section>

      <section className="acmSpecs acmSection">
        <div className="acmHeading"><p className="acmEyebrow">TYPICAL PARAMETERS</p><h2>Specified around the project—not a one-size-fits-all panel.</h2><p>Final dimensions, core, coating, fastening system and code compliance must be confirmed for the selected manufacturer and assembly.</p></div>
        <div className="acmSpecGrid">
          <div><Layers3 /><strong>Panel thickness</strong><span>Commonly 3–6 mm</span></div>
          <div><Ruler /><strong>Sheet formats</strong><span>Standard and oversized formats available</span></div>
          <div><ShieldCheck /><strong>Core options</strong><span>Product- and code-specific selections</span></div>
          <div><Sparkles /><strong>Finish systems</strong><span>Architectural coatings vary by series</span></div>
        </div>
      </section>

      <section className="acmFabrication acmSection">
        <div className="acmHeading"><p className="acmEyebrow">FABRICATION</p><h2>From digital layout to a precisely formed panel.</h2><p>CladCan translates coordinated shop drawings into fabrication-ready panels using CNC routing, cutting, drilling, folding and finishing workflows.</p></div>
        <div className="acmFabricationGrid">
          <figure className="acmFabMain"><Image src="/images/exterior-systems/acm-acp/cnc-fabrication-aluminum-composite-panels.webp" alt="CNC routing of an aluminum composite panel" fill sizes="(max-width: 800px) 100vw, 64vw" /><figcaption>CNC routing & cutting</figcaption></figure>
          <figure><Image src="/images/exterior-systems/acm-acp/acm-panel-fabrication-cnc-machine.webp" alt="CNC machine configured for ACM panel fabrication" fill sizes="(max-width: 800px) 100vw, 34vw" /><figcaption>Production equipment</figcaption></figure>
          <figure><Image src="/images/exterior-systems/acm-acp/acm-panel-shop-drawing-fabrication-software.webp" alt="Digital panel layout and fabrication software" fill sizes="(max-width: 800px) 100vw, 34vw" /><figcaption>Digital panel layout</figcaption></figure>
        </div>
      </section>

      <section className="acmProcess acmSection">
        <div className="acmHeading"><p className="acmEyebrow">PROJECT DELIVERY</p><h2>A coordinated path from early design to final review.</h2></div>
        <ol>{process.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol>
      </section>

      <section className="acmSystem acmSection">
        <div className="acmHeading"><p className="acmEyebrow">COMPLETE SYSTEM</p><h2>The panel is only one part of a reliable façade.</h2></div>
        <div className="acmSystemGrid"><div><h3>Extrusions & subframing</h3><p>Project-specific aluminum profiles create panel attachment, alignment and drainage geometry.</p></div><div><h3>Fasteners & clips</h3><p>Compatible rivets, clips and concealed attachment components support the selected system.</p></div><div><h3>Envelope interfaces</h3><p>WRB, insulation, flashings, openings and transitions are coordinated as part of the wall assembly.</p></div></div>
      </section>

      <section className="acmFaq acmSection">
        <div className="acmHeading"><p className="acmEyebrow">COMMON QUESTIONS</p><h2>ACM / ACP essentials.</h2></div>
        <div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="acmCta">
        <p className="acmEyebrow">READY TO BUILD?</p>
        <h2>Bring your ACM façade concept into focus.</h2>
        <p>Share your drawings, elevations or early design intent. Our team can help with panel selection, fabrication strategy and coordinated installation.</p>
        <Link href="/contact">Start a conversation <ArrowUpRight size={20} /></Link>
      </section>
    </article>
  );
}
