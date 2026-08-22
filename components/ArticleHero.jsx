import Link from "next/link";

export default function ArticleHero({ eyebrow, title, intro }) {
  return <section className="articleHero">
    <div className="articleHeroImage" aria-hidden="true" />
    <div className="wrap articleHeroCopy">
      <Link href="/blog" className="articleHeroBack">CladCan Insights</Link>
      <span>{eyebrow}</span>
      <h1>{title}</h1>
      <p>{intro}</p>
    </div>
  </section>;
}
