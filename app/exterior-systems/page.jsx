import Link from "next/link";
import { ArrowUpRight, Check, Layers3, Ruler, Wrench, Hammer } from "lucide-react";
import SystemsCatalogue from "@/components/SystemsCatalogue";

export const metadata = {
  title: "Exterior Systems Toronto & GTA | CladCan",
  description: "Explore exterior cladding, siding, soffit and building-envelope systems supplied, fabricated and installed by CladCan across Ontario.",
};

const systems = [
  { number:"01", title:"Aluminum", subtitle:"Solid & Woodgrain Finish", text:"Durable, non-combustible aluminum siding and soffit available in architectural profiles, colours and woodgrain finishes.", href:"/exterior-systems/aluminum" },
  { number:"02", title:"Steel", subtitle:"Solid & Woodgrain Finish", text:"Exposed- and hidden-fastener steel systems for residential, commercial, architectural and industrial applications.", href:"/exterior-systems/steel" },
  { number:"03", title:"Natural Wood", subtitle:"Siding & Soffit", text:"Authentic warmth, texture and character for premium exterior siding, soffit and architectural accents.", href:"/exterior-systems/natural-wood" },
  { number:"04", title:"ACM / ACP", subtitle:"Aluminum Composite Panel", text:"Lightweight architectural panel systems engineered for clean lines and contemporary façade design.", href:"/exterior-systems/acm-acp" },
  { number:"05", title:"APP", subtitle:"Aluminum Plate Panel", text:"Solid aluminum plate systems for high-performance drained and back-ventilated rainscreen applications.", href:"/exterior-systems/app" },
  { number:"06", title:"Stucco", subtitle:"EIFS", text:"Continuous-insulation exterior systems combining energy performance with extensive finish flexibility.", href:"/exterior-systems/stucco-eifs" },
  { number:"07", title:"Fibre Cement", subtitle:"Architectural Cladding", text:"Durable and low-maintenance exterior cladding engineered for demanding Canadian weather conditions.", href:"/exterior-systems/fibre-cement" },
  { number:"08", title:"IMP", subtitle:"Insulated Metal Panel", text:"Integrated metal and insulation systems for efficient commercial and industrial building envelopes.", href:"/exterior-systems/imp" },
  { number:"09", title:"PVC", subtitle:"Siding & Soffit", text:"Cost-effective, durable and low-maintenance uPVC exterior systems in a range of profiles and finishes.", href:"/exterior-systems/pvc" },
  { number:"10", title:"WPC", subtitle:"Wood Plastic Composite", text:"Composite architectural profiles combining the appearance of wood with reduced maintenance.", href:"/exterior-systems/wpc" },
  { number:"11", title:"Trims & Flashings", subtitle:"Custom Fabrication", text:"Custom metal components for openings, corners, transitions, terminations and water management.", href:"/exterior-systems/trims-flashings" },
  { number:"12", title:"Thin Veneer", subtitle:"Siding & Soffit", text:"Lightweight veneer systems delivering the architectural appearance of natural stone and masonry.", href:"/exterior-systems/thin-veneer" },
  { number:"13", title:"Eavestroughs", subtitle:"& Downpipes", text:"Integrated roof-drainage solutions designed to manage rainwater and protect walls and foundations.", href:"/exterior-systems/eavestroughs-downpipes" },
];

export default function Page() {
  return (
    <main className="systemsPage">
      <section className="systemsPageHero">
        <div className="systemsPageHeroShade" />
        <div className="wrap systemsPageHeroInner">
          <span className="systemsPageEyebrow">EXTERIOR SYSTEMS</span>
          <h1>Exterior systems built for<br/><em>performance &amp; design.</em></h1>
          <p>Exterior systems should be selected around a project’s design intent, weather exposure, substrate, detailing and installation conditions—not around one material category alone.</p>
          <div className="systemsPageHeroActions">
            <Link href="/contact" className="btn systemsPagePrimary">Get a Quote <ArrowUpRight size={15}/></Link>
            <Link href="/contact" className="btn systemsPageSecondary">Request a Sample</Link>
          </div>
        </div>
      </section>

      <section className="systemsPageIntro">
        <div className="wrap systemsPageIntroGrid">
          <div>
            <span className="systemsPageEyebrow systemsPageEyebrowDark">BUILDING ENVELOPE</span>
            <h2>One exterior.<br/>Multiple systems.</h2>
          </div>
          <div className="systemsPageIntroCopy">
            <p>Different cladding, soffit and rainscreen systems suit different architectural objectives, building assemblies and site constraints. The right answer often depends on finish expectations, drainage strategy, thermal performance, substrate conditions and the way the exterior is built.</p>
            <p>CladCan supports Ontario projects across material selection, custom fabrication and installation, helping project teams align the system with the actual conditions of the job rather than a generic product list.</p>
            <div className="systemsPageChecks">
              <span><Check size={15}/> Material Supply</span>
              <span><Check size={15}/> Custom Fabrication</span>
              <span><Check size={15}/> Installation</span>
            </div>
          </div>
        </div>
      </section>

      <SystemsCatalogue systems={systems} />

      <section className="systemsPageCapabilities">
        <div className="wrap">
          <div className="systemsPageCapabilitiesHead">
            <span className="systemsPageEyebrow">COMPLETE EXTERIOR SCOPE</span>
            <h2>More than a material supplier.</h2>
          </div>
          <div className="systemsPageCapabilityGrid">
            <article><span>01</span><Layers3 size={25}/><h3>Material Supply</h3><p>Architectural exterior products sourced for residential, commercial and industrial applications.</p><Link href="/services/material-supply">Learn More <ArrowUpRight size={13}/></Link></article>
            <article><span>02</span><Ruler size={25}/><h3>Design Support</h3><p>System selection and detailing support based on project requirements, drawings and architectural intent.</p><Link href="/services/design-permit-support">Learn More <ArrowUpRight size={13}/></Link></article>
            <article><span>03</span><Wrench size={25}/><h3>Custom Fabrication</h3><p>Project-specific trims, flashings and fabricated components coordinated with exterior systems.</p><Link href="/services/custom-fabrication">Learn More <ArrowUpRight size={13}/></Link></article>
            <article><span>04</span><Hammer size={25}/><h3>Installation</h3><p>Professional installation with attention to transitions, interfaces and complete building-envelope performance.</p><Link href="/services/installation">Learn More <ArrowUpRight size={13}/></Link></article>
          </div>
        </div>
      </section>

      <section className="systemsPageCTA">
        <div className="wrap systemsPageCTABox">
          <div>
            <span className="systemsPageEyebrow systemsPageEyebrowDark">START A PROJECT</span>
            <h2>Need help selecting the right exterior system?</h2>
            <p>Send us your drawings, photos, material requirements or project scope. Our team can review supply, fabrication and installation requirements.</p>
          </div>
          <Link href="/contact" className="btn systemsPagePrimary">Get a Free Consultation <ArrowUpRight size={15}/></Link>
        </div>
      </section>
    </main>
  );
}
