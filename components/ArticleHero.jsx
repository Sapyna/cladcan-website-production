import Link from "next/link";
import { getPrimaryVisual } from "@/data/visualCatalog";

export default function ArticleHero({ eyebrow, title, intro }) {
  return <section className="articleHero">
    <div className="articleHeroImage" aria-hidden="true" style={{backgroundImage:`url("${getPrimaryVisual(`${eyebrow} ${title}`)}")`}} />
    <div className="wrap articleHeroCopy">
      <Link href="/blog" className="articleHeroBack">CladCan Insights</Link>
      <span>{eyebrow}</span>
      <h1>{title}</h1>
      <p>{intro}</p>
    </div>
  </section>;
}
