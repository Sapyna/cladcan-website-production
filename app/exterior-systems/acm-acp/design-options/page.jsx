import Link from "next/link";
import { ArrowUpRight, Columns3, PanelLeft, PanelRight, PanelsTopLeft } from "lucide-react";
import styles from "./design-options.module.css";

const options = [
  { label:"Option A", title:"Horizontal Section Navigation", text:"Split hero, horizontal section menu below the hero, and a conventional long-form product page. All seven sections, including completed projects, appear in the natural scroll.", href:"/exterior-systems/acm-acp/design-horizontal", icon:Columns3, note:"Scroll page + horizontal menu" },
  { label:"Option B", title:"Left Vertical Tabs", text:"A persistent tab menu on the left. Clicking a tab replaces the content in place, so the visitor stays in the same workspace instead of jumping down the page.", href:"/exterior-systems/acm-acp/design-left-tabs", icon:PanelLeft, note:"Left tabs · in-place content" },
  { label:"Option C", title:"Right Vertical Tabs", text:"The same tab behaviour and content as Option B, but with the navigation on the right. The rail remains sticky while taller tab content is scrolled.", href:"/exterior-systems/acm-acp/design-right-rail", icon:PanelRight, note:"Right tabs · in-place content" },
  { label:"Option D", title:"Left Tabs + Reversed Hero", text:"The same left-tab experience as Option B, with the hero composition reversed: architectural photography on the left and product messaging on the right.", href:"/exterior-systems/acm-acp/design-left-tabs-reversed", icon:PanelsTopLeft, note:"Left tabs · image-left hero" },
];

export const metadata = { title:"ACM Product Page Design Options | CladCan" };

export default function DesignOptionsPage(){
  return <main className={styles.page}>
    <header className={styles.intro}><p>CLADCAN PRODUCT PAGE SYSTEM</p><h1>Four ACM page directions.</h1><div className={styles.introRow}><p>All four concepts now use the same product content, the same visual language, the same finish swatches and the same Completed Projects section. The comparison is focused on navigation behaviour and hero composition.</p><span>Compare at desktop width first. Options B, C and D switch content in place without jumping to another section.</span></div></header>
    <section className={styles.grid}>{options.map(({label,title,text,href,icon:Icon,note},i)=><article key={title} className={styles.card}><div className={styles.visual}><div className={styles.browser}><span></span><span></span><span></span></div><div className={`${styles.diagram} ${styles[`diagram${i+1}`]}`}><div className={styles.hero}></div><div className={styles.nav}></div><div className={styles.body}></div><div className={styles.side}></div></div></div><div className={styles.copy}><div className={styles.cardTop}><span>{label}</span><Icon size={21}/></div><h2>{title}</h2><p>{text}</p><div className={styles.note}>{note}</div><Link href={href}>Open full concept <ArrowUpRight size={17}/></Link></div></article>)}</section>
  </main>;
}
