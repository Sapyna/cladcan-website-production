import Link from "next/link";
import ArticleHero from "@/components/ArticleHero";

export const metadata={title:"ACM Panel Maintenance Playbook | CladCan",description:"Practical ACM facade inspection, cleaning and repair guidance from CladCan."};

export default function Page(){return <main className="articlePage">
  <ArticleHero eyebrow="MAINTENANCE · MARCH 18, 2026" title="ACM Panel Maintenance Playbook: Keep Facades Looking New" intro="Actionable cleaning, inspection and repair guidance for ACM-clad buildings."/>
  <section className="section"><div className="wrap articleWrap">
    <h2>Set a recurring inspection cadence</h2><p>Inspect the façade on a regular schedule and after severe weather. Look for movement, sealant gaps, damage and unusual discoloration patterns.</p>
    <h2>Use manufacturer-approved cleaning methods</h2><p>Avoid abrasive tools and harsh chemicals that can damage architectural finishes. Follow the applicable panel and finish manufacturer’s maintenance guidance.</p>
    <h2>Repair small issues quickly</h2><p>Minor joint, trim and sealant issues can become more consequential if deferred. Early review can reduce the risk of moisture-related deterioration and larger repairs.</p>
    <Link href="/blog">← Back to CladCan Insights</Link>
  </div></section>
</main>}
