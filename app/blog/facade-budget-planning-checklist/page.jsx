import Link from "next/link";
import ArticleHero from "@/components/ArticleHero";

export const metadata={title:"Facade Budget Planning Checklist | CladCan",description:"A practical facade budgeting checklist for project owners, builders and project managers."};

export default function Page(){return <main className="articlePage">
  <ArticleHero eyebrow="PROJECT PLANNING · MARCH 2, 2026" title="Facade Budget Planning Checklist for 2026 Projects" intro="A planning framework for reducing scope gaps and making exterior-envelope budgets more realistic."/>
  <section className="section"><div className="wrap articleWrap">
    <h2>Define scope boundaries early</h2><p>Document inclusions and exclusions before bid alignment so material, fabrication, installation and interface responsibilities are visible.</p>
    <h2>Include envelope-critical allowances</h2><p>Account for sub-framing, flashing complexity, access requirements, mockups or testing where applicable, and reasonable procurement contingency.</p>
    <h2>Track decisions by phase</h2><p>Revisit budget assumptions as the design develops so scope, product selections and procurement expectations remain aligned.</p>
    <Link href="/blog">← Back to CladCan Insights</Link>
  </div></section>
</main>}
