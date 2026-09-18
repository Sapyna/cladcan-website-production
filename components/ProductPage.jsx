import ProductTabbedPage from "@/components/ProductTabbedPage";
import { getVisuals } from "@/data/visualCatalog";

export default function ProductPage({
  breadcrumb=[],
  applicationLinks=[],
  eyebrow,
  title,
  subtitle,
  intro,
  images=[],
  specs=[],
  benefits=[],
  applications=[],
  featureImages=[],
  systemFamilies=[],
  detailGroups=[],
  components=[],
  technicalSections=[],
  finishes=[],
  resources=[],
  relatedProducts=[],
  manufacturer,
  manufacturerUrl,
  ctaTitle="Considering this product for your project?",
  ctaText="Send us your drawings, elevations or project requirements and our team can help review product selection, quantities and installation requirements."
}) {
  const pageVisuals=images.length?images:getVisuals(`${eyebrow} ${title} ${subtitle||""}`);
  const visuals=[
    ...featureImages,
    ...pageVisuals.slice(1).map((src,index)=>({image:src,alt:`${title} reference ${index+1}`,title:`Project / Product Reference ${index+1}`})),
  ];

  return <ProductTabbedPage
    eyebrow={eyebrow}
    title={title}
    subtitle={subtitle}
    intro={intro}
    heroImage={pageVisuals[0]}
    images={pageVisuals}
    specs={specs}
    manufacturer={manufacturer}
    manufacturerUrl={manufacturerUrl}
    applications={applications}
    benefits={benefits}
    systemFamilies={systemFamilies}
    detailGroups={detailGroups}
    technicalSections={technicalSections}
    components={components}
    finishes={finishes}
    resources={resources}
    relatedProducts={relatedProducts}
    visuals={visuals}
    ctaTitle={ctaTitle}
    ctaText={ctaText}
  />;
}
