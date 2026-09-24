import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Flame, Droplets, Palette, Layers3 } from "lucide-react";
import { aluminumSystems as systems } from "@/data/aluminumHierarchy";
import styles from "./page.module.css";

export const metadata={title:"Aluminum Siding & Soffit Systems | CladCan",description:"Explore architectural aluminum siding, soffit, battens and woodgrain exterior systems supplied, fabricated and installed by CladCan across Ontario."};

const benefits=[
  {icon:ShieldCheck,title:"Durable exterior performance",text:"A stable architectural material suited to demanding exterior conditions and long-term façade applications."},
  {icon:Flame,title:"Non-combustible material option",text:"A practical material category to evaluate where project assemblies call for metal exterior components."},
  {icon:Droplets,title:"Weather resistance",text:"Well suited to wall, soffit and rainscreen applications exposed to Ontario's changing seasonal conditions."},
  {icon:Palette,title:"Architectural finish flexibility",text:"Solid colours, woodgrain looks and profile options make aluminum adaptable to a wide range of design languages."},
];
const applications=["Residential façades","Custom homes","Multi-residential","Commercial buildings","Soffits & ceilings","Feature walls","Architectural accents","Privacy screens"];

export default function AluminumPage(){return <main className={styles.page}>
<section className={styles.hero}>
  <div className={styles.heroCopy}><div className={styles.heroInner}>
    <span className={styles.eyebrow}>Aluminum exterior systems</span>
    <h1>Clean lines.<em>Built in aluminum.</em></h1>
    <p>Architectural siding, soffit and batten systems that combine precise detailing, durable finishes and a modern exterior expression.</p>
    <div className={styles.actions}><a href="#systems" className={styles.primary}>Explore Systems <ArrowUpRight size={16}/></a><Link href="/contact" className={styles.secondary}>Request a Sample</Link></div>
  </div></div>
  <div className={styles.heroMedia}><div className={styles.heroTag}><Layers3 size={17}/> Siding · Soffit · Battens</div></div>
</section>

<section className={styles.intro}><div className={`${styles.wrap} ${styles.introGrid}`}>
  <div><span className={styles.kicker}>Material + system</span><h2>One material.<br/>Multiple architectural expressions.</h2></div>
  <div className={styles.introText}><p>Aluminum can move from quiet soffit lines to full façade coverage, linear battens and wood-look accents. The right system depends on the profile, application, finish and detailing the project needs.</p><p>CladCan brings those decisions together across supply, fabrication and installation so the selected product works as part of the complete exterior assembly.</p><div className={styles.chips}><span>Siding</span><span>Soffit</span><span>Battens</span><span>Woodgrain</span><span>Custom detailing</span></div></div>
</div></section>

<section className={styles.systems} id="systems"><div className={styles.wrap}>
  <div className={styles.sectionHead}><div><span className={styles.kicker}>Available systems</span><h2>Choose the right aluminum system.</h2></div><p>Compare the main aluminum families, then open a system to review its profiles, finishes, applications and product-specific options.</p></div>
  <div className={styles.systemGrid}>{systems.map(item=><Link href={item.href} className={styles.systemCard} key={item.slug}>
    <div className={styles.systemImage} style={{backgroundImage:"url('"+item.image+"')"}}/><div className={styles.systemShade}/>
    <div className={styles.systemContent}><div className={styles.systemTop}><span>{item.number} · Aluminum system</span><ArrowUpRight size={18}/></div><h3>{item.title}</h3><h4>{item.subtitle}</h4><p>{item.description}</p></div>
  </Link>)}</div>
</div></section>

<section className={styles.why}><div className={`${styles.wrap} ${styles.whyGrid}`}>
  <div className={styles.whyTitle}><span className={styles.kicker}>Why aluminum</span><h2>Made for precise, modern exterior design.</h2><p>Aluminum offers a useful balance of architectural control, finish choice and exterior durability across both primary cladding and accent applications.</p></div>
  <div className={styles.benefits}>{benefits.map(({icon:Icon,title,text})=><article className={styles.benefit} key={title}><span className={styles.icon}><Icon size={20}/></span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
</div></section>

<section className={styles.applications}><div className={`${styles.wrap} ${styles.appGrid}`}>
  <div><span className={styles.eyebrow}>Applications</span><h2>From full façades to the details that finish them.</h2><p>Use aluminum as the primary exterior material or combine it with ACM, masonry, fibre cement and other systems to create contrast, rhythm and depth.</p></div>
  <div className={styles.appList}>{applications.map((item,i)=><div className={styles.appItem} key={item}><span>{String(i+1).padStart(2,"0")}</span>{item}</div>)}</div>
</div></section>

<section className={styles.cta}><div className={`${styles.wrap} ${styles.ctaInner}`}>
  <div><span className={styles.kicker}>Start a project</span><h2>Need help selecting an aluminum system?</h2><p>Send us your drawings, elevations or inspiration images. We can review the profile, finish, fabrication and installation approach with your project in mind.</p></div>
  <Link href="/contact" className={styles.primary}>Talk to Our Team <ArrowUpRight size={16}/></Link>
</div></section>
</main>}