import Link from "next/link";
import ArticleHero from "@/components/ArticleHero";

export const metadata={title:"Facade Budget Planning Checklist | CladCan",description:"A practical facade budgeting checklist for project owners, builders and project managers."};

export default function Page(){return <main className="articlePage">
  <ArticleHero eyebrow="PROJECT PLANNING · MARCH 2, 2026" title="Facade Budget Planning Checklist for 2026 Projects" intro="A planning framework for reducing scope gaps and making exterior-envelope budgets more realistic."/>
  <section className="section"><div className="wrap articleWrap">
    <h2>Define scope boundaries early</h2><p>Document what is included and what is excluded before bid alignment, particularly around material supply, custom fabrication, flashing, trims, interfaces and installation. Scope gaps are often the source of budget surprises later in the project.</p>
    <h2>Price the envelope, not just the visible finish</h2><p>Budget conversations should include substrate coordination, accessory packages, trim and closure conditions, weatherproofing interfaces, access requirements and the practical installation sequence. Those items can materially influence both cost and field performance.</p>
    <h2>Include system-selection assumptions</h2><p>Different exterior systems carry different fabrication and detailing requirements. A finish or profile may look comparable on a board but may require a very different shop package, acceptable substrate, or installation approach.</p>
    <h2>Track decisions by phase</h2><p>As the project moves from concept to procurement, revisit assumptions around finish, profile, quantities, lead time and installation conditions. Early answers reduce the risk of versioning issues, rework or a late material change.</p>
    <h2>Plan for decision-making support</h2><p>A strong project team often benefits from early system review, sample comparison and constructability input. That can narrow the field before purchase and installation decisions become expensive to change.</p>
    <div className="articleLinks">
      <Link href="/services/material-supply">Material supply</Link>
      <Link href="/services/custom-fabrication">Custom fabrication</Link>
      <Link href="/services/design-permit-support">Design support</Link>
    </div>
    <Link href="/blog">← Back to CladCan Insights</Link>
  </div></section>
</main>}
