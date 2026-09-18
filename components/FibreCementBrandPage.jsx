import ProductTabbedPage from "@/components/ProductTabbedPage";

export default function FibreCementBrandPage({
  brand,
  tagline,
  intro,
  hero,
  featureImage,
  benefits=[],
  products=[],
  visuals=[],
  profiles=[],
  accessories=[],
  technology,
  finishes=[],
  applications=[],
  manufacturerResources=[],
  categoryEyebrow="FIBRE CEMENT SIDING & PANELS"
}){
  const introText=Array.isArray(intro?.paragraphs)?intro.paragraphs.join(" "):(intro?.paragraphs||tagline);
  const allVisuals=[
    ...(featureImage?[{image:featureImage,alt:`${brand} product application`,title:intro?.title||brand}]:[]),
    ...visuals,
  ];
  const productItems=products.map(item=>({title:item.title,text:item.text}));

  return <ProductTabbedPage
    eyebrow={categoryEyebrow}
    title={brand}
    subtitle={intro?.title||tagline}
    intro={introText}
    heroImage={hero}
    images={[hero,...allVisuals.map(x=>x.image).filter(Boolean)]}
    applications={applications}
    benefits={benefits}
    products={productItems}
    profiles={profiles}
    components={[]}
    accessories={accessories}
    technology={technology}
    finishes={finishes}
    manufacturerResources={manufacturerResources}
    visuals={allVisuals}
    ctaTitle={`Find the right ${brand} system for your project.`}
    ctaText="Share your elevations, project type and preferred appearance. CladCan can help coordinate products, samples, accessories and installation requirements."
  />;
}
