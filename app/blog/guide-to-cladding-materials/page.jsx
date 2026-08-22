import Link from "next/link";
import ArticleHero from "@/components/ArticleHero";

export const metadata={title:"The Complete Guide to Choosing Exterior Cladding Materials | CladCan",description:"A practical framework for comparing exterior cladding by performance, aesthetics, budget and long-term maintenance."};

export default function Page(){return <main className="articlePage">
  <ArticleHero eyebrow="MATERIALS · JANUARY 15, 2024" title="The Complete Guide to Choosing Exterior Cladding Materials" intro="A practical framework for selecting cladding based on performance, aesthetics, budget and long-term maintenance."/>
  <section className="section"><div className="wrap articleWrap">
    <h2>Start with performance requirements</h2><p>Before comparing finishes, define what the façade must do. Water management, thermal performance, fire and code requirements, impact resistance and weather exposure should inform the material conversation.</p>
    <h2>Compare system families</h2><p>ACM and metal panels can support crisp architectural geometry; fibre cement offers a durable and versatile option; natural wood and wood-look systems introduce warmth with different maintenance profiles.</p>
    <h2>Budget for lifecycle cost</h2><p>Compare more than installed cost. Maintenance cycles, access, sealant replacement, repairs and expected service conditions all affect long-term value.</p>
    <Link href="/blog">← Back to CladCan Insights</Link>
  </div></section>
</main>}
