import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata={
  title:"Longboard Tongue & Groove Aluminum Siding & Soffit | CladCan",
  description:"Explore Longboard Tongue & Groove aluminum siding and soffit profiles, trims, finishes and system specifications available through CladCan."
};

export default function LongboardPage(){return <main className="fastPlankPage longboardProductPage">
  <section className="longboardHero exteriorSystemDetailHero">
    <div className="exteriorSystemHeroMedia" style={{backgroundImage:"url('/images/source-library/aluminum/longboard/hero.webp')"}}/>
    <div className="wrap longboardHeroContent">
      <span className="longboardEyebrow">ALUMINUM SIDING & SOFFIT</span>
      <h1>Longboard® Tongue & Groove</h1>
      <p>An elegant and adaptable aluminum plank system for architectural cladding, siding and soffit applications.</p>
      <div className="longboardHeroActions"><Link href="/contact" className="btn longboardPrimaryBtn">Get a Quote <ArrowUpRight size={15}/></Link><Link href="/contact" className="btn longboardSecondaryBtn">Request a Sample</Link></div>
    </div>
  </section>

  <section className="fastPlankIntro"><div className="wrap fastPlankSplit">
    <div className="fastPlankCopy">
      <span className="fastPlankEyebrow">LONGBOARD® TONGUE & GROOVE</span>
      <h2>Architectural aluminum for adaptable applications.</h2>
      <p>The Longboard® Tongue & Groove aluminum plank system offers an elegant and adaptable cladding and soffit solution. Crafted from 100% extruded architectural aluminum, it is lightweight, non-combustible and highly resistant to weather conditions for long-lasting performance.</p>
      <p>Designed for both interior and exterior applications, the system complements projects of different scales. Planks are available in 24-foot lengths and can be customized in a pre-fabrication facility or directly on site to suit project requirements.</p>
      <p>For additional design flexibility, the planks can be installed in either a horizontal or vertical orientation.</p>
    </div>
    <div className="fastPlankIntroImage"><Image src="/images/exterior-systems/longboard/longboard-woodgrain-aluminum-soffit-installation.webp" alt="Longboard woodgrain aluminum soffit installation with recessed lighting" fill sizes="(max-width: 900px) 100vw, 44vw"/></div>
  </div></section>

  <section className="fastPlankInstall"><div className="wrap fastPlankSplit fastPlankSplitReverse">
    <div className="longboardTechnicalImage"><Image src="/images/exterior-systems/longboard/longboard-tongue-groove-system-specifications.webp" alt="Longboard Tongue and Groove aluminum cladding system specifications and installation details" fill sizes="(max-width: 900px) 100vw, 48vw"/></div>
    <div className="fastPlankCopy">
      <span className="fastPlankEyebrow">SYSTEM DETAILS</span>
      <h2>Tongue & Groove cladding system.</h2>
      <p>The system combines extruded aluminum planks with coordinated attachment and finishing components for siding and soffit applications.</p>
      <p>Its range of plank configurations supports different joint expressions, ventilation requirements and architectural design intents.</p>
    </div>
  </div></section>

  <section className="fastPlankProfiles"><div className="wrap">
    <div className="fastPlankSectionHead"><span className="fastPlankEyebrow">PROFILE COLLECTION</span><h2>Plank profiles for design flexibility.</h2></div>
    <div className="longboardFullDiagram"><Image src="/images/exterior-systems/longboard/longboard-aluminum-profile-collection.png" alt="Longboard aluminum V-Groove, Smooth, Channel, Perforated, Bevel, Castellation and Quick Screen profiles" fill sizes="(max-width: 760px) 100vw, 90vw"/></div>
  </div></section>

  <section className="fastPlankTrims"><div className="wrap fastPlankTrimGrid">
    <div className="fastPlankCopy"><span className="fastPlankEyebrow">TRIM COMPONENTS</span><h2>Coordinated trims that complete the system.</h2><p>Longboard trim components provide coordinated solutions for corners, transitions, terminations and other installation conditions.</p></div>
    <div className="fastPlankTrimImage"><Image src="/images/exterior-systems/longboard/longboard-aluminum-trim-components.png" alt="Longboard aluminum trim components, dimensions and profile options" fill sizes="(max-width: 900px) 100vw, 56vw"/></div>
  </div></section>

  <section className="fastPlankColours"><div className="wrap">
    <div className="fastPlankColourIntro">
      <span className="fastPlankEyebrow">SUPERIOR FINISHES</span>
      <h2>Premium finishes for lasting performance.</h2>
      <p>Longboard cladding products and systems are coated with premium AAMA 2604/2605-certified powder finishes for durability and longevity. The finish range can replicate the appearance of wood, stone, brick, terracotta and aged metals.</p>
      <p>High-performance coatings provide protection against wear and environmental factors. Advanced pre-treatment processes meet stringent industry standards and are free from chromates, cyanides, phosphates and other EPA/OSHA-regulated metals.</p>
    </div>
    <div className="longboardFinishDiagram"><Image src="/images/exterior-systems/longboard/longboard-aluminum-colour-finishes.png" alt="Longboard architectural aluminum woodgrain, solid and specialty colour finishes" fill sizes="(max-width: 760px) 100vw, 90vw"/></div>
  </div></section>

  <section className="fastPlankExpert"><div className="wrap fastPlankExpertInner">
    <div><span className="fastPlankEyebrow">SPEAK WITH AN EXPERT</span><h2>Get personalized advice and expert guidance.</h2><p>Talk with CladCan about Longboard profiles, finishes, samples and project requirements.</p></div>
    <Link href="/contact" className="btn internalRedBtn">Speak with an Expert <ArrowUpRight size={15}/></Link>
  </div></section>
</main>}
