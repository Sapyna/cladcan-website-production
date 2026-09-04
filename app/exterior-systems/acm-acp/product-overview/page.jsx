import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Building2, Check, Factory, Feather, Landmark, Layers3, Palette, PanelsTopLeft, Route, ShieldCheck, Sparkles, Store, Wrench } from "lucide-react";
import styles from "./product-overview.module.css";
import enhanced from "./visual-enhancements.module.css";

export const metadata = {
  title: "ACM Product Overview | Profiles, Trims & Finishes",
  description: "A complete overview of aluminum composite material, including applications, benefits, panel profiles, trims and architectural finishes.",
};

const sectionLinks = [
  { number: "01", label: "Description", id: "description", icon: Layers3 },
  { number: "02", label: "Applications", id: "applications", icon: Building2 },
  { number: "03", label: "Benefits", id: "features", icon: ShieldCheck },
  { number: "04", label: "Systems", id: "profiles", icon: PanelsTopLeft },
  { number: "05", label: "Components", id: "trims", icon: Wrench },
  { number: "06", label: "Finishes", id: "finishes", icon: Palette },
];

const applications = [
  { title: "Commercial", text: "Retail, office, hospitality and mixed-use façades that call for crisp geometry and a consistent architectural finish.", image: "/images/exterior-systems/acm-acp/commercial-building-acm-panel-cladding.webp", icon: Store },
  { title: "Residential", text: "Custom homes and multi-residential projects using panels for feature walls, entrances, soffits and complete elevations.", image: "/images/exterior-systems/acm-acp/residential-aluminum-composite-panel-facade.webp", icon: Building2 },
  { title: "Institutional", text: "Schools, healthcare, civic and public infrastructure where durable materials and coordinated envelope details matter.", image: "/images/exterior-systems/acm-acp/public-infrastructure-acm-panel-application.webp", icon: Landmark },
  { title: "Signage & Identity", text: "Canopies, branded façades, pylons and dimensional signage fabricated for strong visual identity and exterior exposure.", image: "/images/exterior-systems/acm-acp/acm-panel-commercial-signage.webp", icon: Factory },
];

const benefits = [
  { title: "Lightweight", text: "Low panel weight supports efficient handling, fabrication and installation.", icon: Feather },
  { title: "Design flexibility", text: "Panels can be cut, routed, folded and formed to suit precise façade geometry.", icon: Route },
  { title: "Durable finishes", text: "Architectural coating options are designed for long-term exterior colour and weather resistance.", icon: ShieldCheck },
  { title: "Clean appearance", text: "Large, flat surfaces and controlled joints create a refined contemporary envelope.", icon: Sparkles },
  { title: "Efficient fabrication", text: "Digital layouts and CNC workflows support repeatable, project-specific panel production.", icon: Wrench },
  { title: "Broad selection", text: "Multiple core, size, coating and finish options allow the system to be specified around the project.", icon: Palette },
];

const attachmentSystems = [
  { title: "Dry Reveal", text: "A four-sided route-and-return panel with a reveal-joint spline and no exposed sealant or fasteners.", image: "/images/exterior-systems/acm-acp/attachment-systems/dry-reveal-route-return-acm-project.jpg" },
  { title: "EasyFix", text: "A two-sided route-and-return assembly using 135° and 90° folds with an open joint.", image: "/images/exterior-systems/acm-acp/attachment-systems/easyfix-acm-project.jpg" },
  { title: "FaceFastened", text: "Flat ACM panels attached to extruded aluminum rails with purpose-designed, colour-coated screws.", image: "/images/exterior-systems/acm-acp/attachment-systems/face-fastened-acm-project.jpg" },
  { title: "Wet Seal", text: "A four-sided route-and-return panel with continuous backer rod and silicone-sealed joints.", image: "/images/exterior-systems/acm-acp/attachment-systems/wet-seal-route-return-acm-project.jpg" },
];

const systemComponents = [
  ["Attachment rails", "Extruded aluminum rails support and align panels in systems such as FaceFastened."],
  ["Reveal-joint spline", "A spline creates the defined open joint used in a Dry Reveal assembly."],
  ["Colour-coated fasteners", "Purpose-designed screws secure FaceFastened panels and may match or contrast with the panel face."],
  ["Backer rod & sealant", "Continuous foam backer rod and compatible silicone form the sealed joint in a Wet Seal system."],
  ["Folded panel returns", "Routed panel edges are folded to create two-sided or four-sided returns, depending on the system."],
  ["Edge treatments", "Hemmed edges, exposed edges and system-specific end extrusions complete selected terminations."],
];

const finishes = [
  ["Solid Colours", "Clean, consistent colours for broad façade areas and coordinated architectural elements."],
  ["Metallic & Mica", "Light-responsive surfaces that add depth and a premium architectural character."],
  ["Brushed & Anodized Looks", "Metal-inspired finishes with directional texture and a contemporary technical expression."],
  ["Woodgrain", "Warm natural appearances paired with the dimensional stability and workability of ACM."],
  ["Stone & Textured", "Patterned and tactile options for feature zones, entrances and material transitions."],
  ["Custom Matching", "Project-specific colour development may be available subject to manufacturer quantities and approvals."],
];

function SectionMarker({ number, icon: Icon, dark = false }) {
  return <div className={`${enhanced.sectionMarker} ${dark ? enhanced.sectionMarkerDark : ""}`}><span>{number}</span><Icon size={22} strokeWidth={1.7} /></div>;
}

export default function AcmProductOverviewPage() {
  return (
    <article className={styles.page}>
      <section className={`${styles.hero} ${enhanced.hero}`}>
        <Image className={styles.heroImage} src="/images/exterior-systems/acm-acp/public-infrastructure-acm-panel-application.webp" alt="Contemporary building façade finished with aluminum composite panels" fill priority sizes="100vw" />
        <div className={styles.heroShade} />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>ACM / ACP · PRODUCT OVERVIEW</p>
          <h1>One panel.<br />A complete architectural system.</h1>
          <p className={styles.heroLead}>Understand the material, its applications, attachment systems, components and finishes—all in one concise product page.</p>
          <a className={styles.explore} href="#description">Explore the system <ArrowDown size={18} /></a>
        </div>
      </section>

      <nav className={`${styles.sectionNav} ${enhanced.sectionNav}`} aria-label="ACM product overview sections">
        {sectionLinks.map(({ number, label, id, icon: Icon }) => <a href={`#${id}`} key={id}><Icon size={17} strokeWidth={1.8} /><span>{number}</span><strong>{label}</strong></a>)}
      </nav>

      <section className={`${styles.section} ${styles.description}`} id="description">
        <header className={styles.sectionHeader}>
          <SectionMarker number="01" icon={Layers3} />
          <div><p className={styles.eyebrowDark}>PRODUCT OVERVIEW</p><div className={styles.sectionTitle}>Description</div><h2>A flat, rigid panel built for precise architectural expression.</h2></div>
          <p>ACM combines a lightweight composite construction with the precision and finish control required for contemporary exterior design.</p>
        </header>
        <div className={styles.descriptionBody}>
          <div className={styles.descriptionCopy}>
          <p>Aluminum Composite Material, also known as Aluminum Composite Panel, is made from two aluminum skins bonded to a core. This layered construction produces a lightweight, dimensionally stable sheet that can be accurately cut, routed, folded and formed.</p>
          <p>ACM is used as part of a coordinated exterior assembly. Panel type, core, coating, subframing, attachment and joint design are selected around the building, applicable code requirements and the intended appearance.</p>
          <div className={styles.brandLine}>ALPOLIC · ALUBOND · ALUCOIL · LARSON · REYNOBOND · ALUCOBOND · ALCOTEX · ALFREX</div>
          </div>
          <div className={styles.descriptionVisual}>
            <Image src="/images/exterior-systems/acm-acp/aluminum-composite-panel-layer-construction.webp" alt="Construction layers of an aluminum composite material panel" fill sizes="(max-width: 900px) 100vw, 42vw" />
            <span><Layers3 size={18} /> Aluminum skin · Bonded core · Aluminum skin</span>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.applicationSection}`} id="applications">
        <header className={styles.sectionHeader}><SectionMarker number="02" icon={Building2} /><div><p className={styles.eyebrowDark}>WHERE ACM WORKS</p><div className={styles.sectionTitle}>Applications</div><h2>Designed to move across building types.</h2></div><p>From a small architectural accent to a complete building envelope, ACM can support varied scales and design languages.</p></header>
        <div className={styles.applicationGrid}>
          {applications.map(({ title, text, image, icon: Icon }) => <article key={title} className={styles.applicationCard}><div className={styles.applicationImage}><Image src={image} alt={`${title} application of ACM panels`} fill sizes="(max-width: 700px) 100vw, 50vw" /></div><div><Icon size={22} /><h3>{title}</h3><p>{text}</p></div></article>)}
        </div>
      </section>

      <section className={`${styles.section} ${styles.benefitsSection}`} id="features">
        <header className={styles.sectionHeader}><SectionMarker number="03" icon={ShieldCheck} dark /><div><p className={styles.eyebrowLight}>WHY CHOOSE ACM</p><div className={`${styles.sectionTitle} ${styles.sectionTitleLight}`}>Features &amp; Benefits</div><h2>Performance with room to create.</h2></div><p>ACM balances practical project delivery with a broad visual vocabulary for contemporary façades.</p></header>
        <div className={styles.benefitGrid}>{benefits.map(({ title, text, icon: Icon }, index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><Icon size={27} /><h3>{title}</h3><p>{text}</p></article>)}</div>
        <p className={styles.note}>Core composition, fire performance, dimensions, coatings and warranties are manufacturer and assembly specific and must be confirmed for each project.</p>
      </section>

      <section className={`${styles.section} ${styles.profilesSection}`} id="profiles">
        <header className={styles.sectionHeader}><SectionMarker number="04" icon={PanelsTopLeft} /><div><p className={styles.eyebrowDark}>DOCUMENTED ACM ASSEMBLIES</p><div className={styles.sectionTitle}>Attachment Systems</div><h2>Four real systems, each with a distinct joint and attachment strategy.</h2></div><p>These examples are documented ALUCOBOND systems. Equivalent assemblies and names vary by manufacturer, fabricator and project requirements.</p></header>
        <div className={enhanced.systemGrid}>{attachmentSystems.map((system, index) => <article key={system.title}><div className={enhanced.systemImage}><Image src={system.image} alt={`${system.title} ACM attachment system project example`} fill sizes="(max-width: 760px) 100vw, 50vw" /></div><div className={enhanced.systemCopy}><span>{String(index + 1).padStart(2, "0")}</span><h3>{system.title}</h3><p>{system.text}</p></div></article>)}</div>
        <p className={enhanced.sourceNote}>System names and descriptions are based on current ALUCOBOND technical system information. Final selection and detailing must be verified for the specified manufacturer and project.</p>
      </section>

      <section className={`${styles.section} ${styles.trimsSection}`} id="trims">
        <header className={styles.sectionHeader}><SectionMarker number="05" icon={Wrench} dark /><div><p className={styles.eyebrowLight}>SYSTEM-SPECIFIC DETAILS</p><div className={`${styles.sectionTitle} ${styles.sectionTitleLight}`}>Components &amp; Edges</div><h2>The attachment system determines the components—not a universal trim catalogue.</h2></div><p>ACM manufacturers may supply material while qualified fabricators design and produce the attachment system and accessories. Components must be coordinated with the selected assembly.</p></header>
        <div className={enhanced.componentLayout}><div className={enhanced.componentImage}><Image src="/images/exterior-systems/acm-acp/cnc-fabrication-aluminum-composite-panels.webp" alt="Precision routing and fabrication of ACM panel returns and edges" fill sizes="(max-width: 900px) 100vw, 42vw" /></div><div className={enhanced.componentGrid}>{systemComponents.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div>
      </section>

      <section className={`${styles.section} ${styles.finishesSection}`} id="finishes">
        <header className={styles.sectionHeader}><SectionMarker number="06" icon={Palette} /><div><p className={styles.eyebrowDark}>SURFACE OPTIONS</p><div className={styles.sectionTitle}>Finishes</div><h2>Colour, texture and reflectivity define the final surface.</h2></div><p>Finish availability, sheet direction, batch consistency, minimum quantities and warranty should be confirmed before fabrication.</p></header>
        <div className={styles.finishLayout}><div className={styles.finishImage}><Image src="/images/exterior-systems/acm-acp/acm-panel-colours-finishes-samples.webp" alt="Architectural ACM colour and finish samples" fill sizes="(max-width: 900px) 100vw, 46vw" /></div><div className={styles.finishList}>{finishes.map(([title, text]) => <article key={title}><Check size={18} /><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div>
        <div className={styles.finishCta}><div><p className={styles.eyebrowLight}>PROJECT SPECIFIC</p><h2>Need a panel, trim or finish recommendation?</h2></div><Link href="/contact">Discuss your project <ArrowUpRight size={18} /></Link></div>
      </section>
    </article>
  );
}
