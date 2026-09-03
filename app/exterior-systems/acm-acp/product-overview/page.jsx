import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Building2, Check, Factory, Feather, Landmark, Layers3, Palette, PanelsTopLeft, Route, ShieldCheck, Sparkles, Store, Wrench } from "lucide-react";
import styles from "./product-overview.module.css";

export const metadata = {
  title: "ACM Product Overview | Profiles, Trims & Finishes",
  description: "A complete overview of aluminum composite material, including applications, benefits, panel profiles, trims and architectural finishes.",
};

const sectionLinks = [
  ["01", "Description", "description"], ["02", "Applications", "applications"], ["03", "Features & Benefits", "features"],
  ["04", "Profiles", "profiles"], ["05", "Trims", "trims"], ["06", "Finishes", "finishes"],
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

const profiles = [
  ["01", "Route & Return Cassette", "The panel perimeter is routed and folded to create a cassette with concealed attachment and defined open or sealed joints."],
  ["02", "Face-Fastened Panel", "Flat or formed panels are secured with compatible exposed fasteners for an efficient and visually disciplined assembly."],
  ["03", "Flat Sheet & Direct Fix", "Unformed sheet can serve selected soffit, lining, signage and feature applications when the substrate and detailing allow."],
  ["04", "Custom Formed Elements", "Corners, column covers, fascia, canopies, reveals and dimensional features can be fabricated to project geometry."],
];

const trims = ["Outside corners", "Inside corners", "Joint and reveal trims", "J channels and terminations", "Starter and base trims", "Head, sill and drip flashings"];

const finishes = [
  ["Solid Colours", "Clean, consistent colours for broad façade areas and coordinated architectural elements."],
  ["Metallic & Mica", "Light-responsive surfaces that add depth and a premium architectural character."],
  ["Brushed & Anodized Looks", "Metal-inspired finishes with directional texture and a contemporary technical expression."],
  ["Woodgrain", "Warm natural appearances paired with the dimensional stability and workability of ACM."],
  ["Stone & Textured", "Patterned and tactile options for feature zones, entrances and material transitions."],
  ["Custom Matching", "Project-specific colour development may be available subject to manufacturer quantities and approvals."],
];

export default function AcmProductOverviewPage() {
  return (
    <article className={styles.page}>
      <section className={styles.hero}>
        <Image className={styles.heroImage} src="/images/exterior-systems/acm-acp/public-infrastructure-acm-panel-application.webp" alt="Contemporary building façade finished with aluminum composite panels" fill priority sizes="100vw" />
        <div className={styles.heroShade} />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>ACM / ACP · PRODUCT OVERVIEW</p>
          <h1>One panel.<br />A complete architectural system.</h1>
          <p className={styles.heroLead}>Understand the material, its applications, profiles, trims and finishes—all in one concise product page.</p>
          <a className={styles.explore} href="#description">Explore the system <ArrowDown size={18} /></a>
        </div>
      </section>

      <nav className={styles.sectionNav} aria-label="ACM product overview sections">
        {sectionLinks.map(([number, label, id]) => <a href={`#${id}`} key={id}><span>{number}</span>{label}</a>)}
      </nav>

      <section className={`${styles.section} ${styles.description}`} id="description">
        <div className={styles.sectionNumber}>01</div>
        <div className={styles.descriptionCopy}>
          <p className={styles.eyebrowDark}>PRODUCT DESCRIPTION</p>
          <h2>A flat, rigid panel built for precise architectural expression.</h2>
          <p>Aluminum Composite Material, also known as Aluminum Composite Panel, is made from two aluminum skins bonded to a core. This layered construction produces a lightweight, dimensionally stable sheet that can be accurately cut, routed, folded and formed.</p>
          <p>ACM is used as part of a coordinated exterior assembly. Panel type, core, coating, subframing, attachment and joint design are selected around the building, applicable code requirements and the intended appearance.</p>
          <div className={styles.brandLine}>ALPOLIC · ALUBOND · ALUCOIL · LARSON · REYNOBOND · ALUCOBOND · ALCOTEX · ALFREX</div>
        </div>
        <div className={styles.descriptionVisual}>
          <Image src="/images/exterior-systems/acm-acp/aluminum-composite-panel-layer-construction.webp" alt="Construction layers of an aluminum composite material panel" fill sizes="(max-width: 900px) 100vw, 42vw" />
          <span><Layers3 size={18} /> Aluminum skin · Bonded core · Aluminum skin</span>
        </div>
      </section>

      <section className={`${styles.section} ${styles.applicationSection}`} id="applications">
        <header className={styles.sectionHeader}><div className={styles.sectionNumber}>02</div><div><p className={styles.eyebrowDark}>APPLICATIONS</p><h2>Designed to move across building types.</h2></div><p>From a small architectural accent to a complete building envelope, ACM can support varied scales and design languages.</p></header>
        <div className={styles.applicationGrid}>
          {applications.map(({ title, text, image, icon: Icon }) => <article key={title} className={styles.applicationCard}><div className={styles.applicationImage}><Image src={image} alt={`${title} application of ACM panels`} fill sizes="(max-width: 700px) 100vw, 50vw" /></div><div><Icon size={22} /><h3>{title}</h3><p>{text}</p></div></article>)}
        </div>
      </section>

      <section className={`${styles.section} ${styles.benefitsSection}`} id="features">
        <header className={styles.sectionHeader}><div className={styles.sectionNumber}>03</div><div><p className={styles.eyebrowLight}>KEY FEATURES &amp; BENEFITS</p><h2>Performance with room to create.</h2></div><p>ACM balances practical project delivery with a broad visual vocabulary for contemporary façades.</p></header>
        <div className={styles.benefitGrid}>{benefits.map(({ title, text, icon: Icon }, index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><Icon size={27} /><h3>{title}</h3><p>{text}</p></article>)}</div>
        <p className={styles.note}>Core composition, fire performance, dimensions, coatings and warranties are manufacturer and assembly specific and must be confirmed for each project.</p>
      </section>

      <section className={`${styles.section} ${styles.profilesSection}`} id="profiles">
        <header className={styles.sectionHeader}><div className={styles.sectionNumber}>04</div><div><p className={styles.eyebrowDark}>PROFILES</p><h2>Four common ways to shape the panel language.</h2></div><p>The appropriate profile depends on panel layout, joint expression, attachment strategy, exposure and the supporting wall assembly.</p></header>
        <div className={styles.profileLayout}><div className={styles.profileImage}><Image src="/images/exterior-systems/acm-acp/cnc-fabrication-aluminum-composite-panels.webp" alt="ACM panels being precisely routed for formed profiles" fill sizes="(max-width: 900px) 100vw, 44vw" /></div><div className={styles.profileList}>{profiles.map(([number, title, text]) => <article key={title}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div>
      </section>

      <section className={`${styles.section} ${styles.trimsSection}`} id="trims">
        <div className={styles.trimIntro}><div className={styles.sectionNumber}>05</div><p className={styles.eyebrowLight}>TRIMS</p><h2>The details that complete every edge and transition.</h2><p>Trims close, protect and visually organize the panel assembly. They may be extruded or custom fabricated to match the selected system, panel depth and project conditions.</p></div>
        <div className={styles.trimBoard}>{trims.map((trim, index) => <div key={trim}><span>{String(index + 1).padStart(2, "0")}</span><PanelsTopLeft size={22} /><strong>{trim}</strong></div>)}</div>
      </section>

      <section className={`${styles.section} ${styles.finishesSection}`} id="finishes">
        <header className={styles.sectionHeader}><div className={styles.sectionNumber}>06</div><div><p className={styles.eyebrowDark}>FINISHES</p><h2>Colour, texture and reflectivity define the final surface.</h2></div><p>Finish availability, sheet direction, batch consistency, minimum quantities and warranty should be confirmed before fabrication.</p></header>
        <div className={styles.finishLayout}><div className={styles.finishImage}><Image src="/images/exterior-systems/acm-acp/acm-panel-colours-finishes-samples.webp" alt="Architectural ACM colour and finish samples" fill sizes="(max-width: 900px) 100vw, 46vw" /></div><div className={styles.finishList}>{finishes.map(([title, text]) => <article key={title}><Check size={18} /><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div>
        <div className={styles.finishCta}><div><p className={styles.eyebrowLight}>PROJECT SPECIFIC</p><h2>Need a panel, trim or finish recommendation?</h2></div><Link href="/contact">Discuss your project <ArrowUpRight size={18} /></Link></div>
      </section>
    </article>
  );
}
