import Link from "next/link";
import ArticleHero from "@/components/ArticleHero";

export const metadata={title:"ACM Panel Maintenance Playbook | CladCan",description:"Practical ACM facade inspection, cleaning and repair guidance from CladCan."};

export default function Page(){return <main className="articlePage">
  <ArticleHero eyebrow="MAINTENANCE · MARCH 18, 2026" title="ACM Panel Maintenance Playbook: Keep Facades Looking New" intro="Actionable cleaning, inspection and repair guidance for ACM-clad buildings."/>
  <section className="section"><div className="wrap articleWrap">
    <h2>Set a recurring inspection cadence</h2><p>Inspect the façade on a schedule appropriate to the building’s exposure, usage and maintenance history. The goal is not just visual appearance; it is early identification of movement, sealant conditions, panel damage, substrate issues and moisture-related concerns around interfaces.</p>
    <h2>Check the right details</h2><p>Review panel joints, trim conditions, fastener zones, sealant continuity and areas around openings, parapets and rooflines. Conditions that look minor at first can influence water management if they are left unattended.</p>
    <h2>Use manufacturer-approved cleaning methods</h2><p>Follow the panel and finish manufacturer’s guidance for cleaning products, tools and procedures. Abrasive methods, harsh chemicals or aggressive pressure can damage coatings and finish systems, especially on architectural metal surfaces.</p>
    <h2>Repair small issues quickly</h2><p>Joint movement, trim conditions, sealant deterioration and localized damage are more cost-effective to fix early than after they spread. A deliberate repair plan keeps the building envelope performing as intended while preserving the appearance of the façade.</p>
    <h2>Use the right repair and replacement logic</h2><p>Not every defect requires full panel replacement. Sometimes the issue is isolated to sealant, trim, flashing or a localized interface. A qualified review helps distinguish between cosmetic concerns and envelope-related risks.</p>
    <div className="articleLinks">
      <Link href="/exterior-systems/acm-acp">ACM / ACP systems</Link>
      <Link href="/services/repair-maintenance">Repair & maintenance</Link>
      <Link href="/services/custom-fabrication">Custom fabrication</Link>
    </div>
    <Link href="/blog">← Back to CladCan Insights</Link>
  </div></section>
</main>}
