import Link from "next/link";
import { ArrowUpRight, Columns3, PanelLeft, PanelRight } from "lucide-react";
import styles from "./design-options.module.css";

const options = [
  { label:"Option A", title:"Horizontal Section Navigation", text:"The current ACM concept. A section menu sits directly below the hero and the page continues as a conventional long-form product page.", href:"/exterior-systems/acm-acp/product-overview", icon:Columns3, note:"Current concept" },
  { label:"Option B", title:"Left Vertical Tabs", text:"A persistent navigation column on the left. Clicking a tab replaces the content panel, so users can jump directly to the information they need.", href:"/exterior-systems/acm-acp/design-left-tabs", icon:PanelLeft, note:"Click-to-switch content" },
  { label:"Option C", title:"Right Sticky Navigation", text:"The full product story remains scrollable while a technical navigation rail stays visible on the right and follows the user through the page.", href:"/exterior-systems/acm-acp/design-right-rail", icon:PanelRight, note:"Scroll + sticky menu" },
];

export const metadata = { title:"ACM Product Page Design Options | CladCan" };

export default function DesignOptionsPage(){
  return <main className={styles.page}>
    <header className={styles.intro}><p>CLADCAN PRODUCT PAGE SYSTEM</p><h1>Three ACM page directions.</h1><div className={styles.introRow}><p>All three concepts use the same product, visual language and core content. The main difference is how users navigate detailed product information.</p><span>Compare at desktop width first, then test tablet and mobile.</span></div></header>
    <section className={styles.grid}>{options.map(({label,title,text,href,icon:Icon,note},i)=><article key={title} className={styles.card}><div className={styles.visual}><div className={styles.browser}><span></span><span></span><span></span></div><div className={`${styles.diagram} ${styles[`diagram${i+1}`]}`}><div className={styles.hero}></div><div className={styles.nav}></div><div className={styles.body}></div><div className={styles.side}></div></div></div><div className={styles.copy}><div className={styles.cardTop}><span>{label}</span><Icon size={21}/></div><h2>{title}</h2><p>{text}</p><div className={styles.note}>{note}</div><Link href={href}>Open full concept <ArrowUpRight size={17}/></Link></div></article>)}</section>
  </main>;
}
