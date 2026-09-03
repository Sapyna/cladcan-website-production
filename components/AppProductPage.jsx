import ProductPage from "@/components/ProductPage";
import { appProducts, appRelated } from "@/data/appProducts";

export default function AppProductPage({productKey}){
  const product=appProducts[productKey];
  return <ProductPage
    eyebrow="ALUMINUM PLATE PANELS & PLANKS"
    title={product.title} subtitle={product.subtitle} intro={product.description}
    images={product.images} specs={product.specs} benefits={product.benefits}
    applications={product.applications} components={product.components}
    finishes={product.finishes} resources={product.resources}
    relatedProducts={appRelated(productKey)}
    manufacturer="Maibec Architectural Aluminum"
    manufacturerUrl="https://maibec.com/en/architectural-aluminum/"
    ctaTitle={`Considering ${product.title} for your project?`}
    ctaText="Send us your elevations, panel schedule, dimensions or design intent. CladCan can assist with system selection, estimating, material coordination, fabrication details and installation planning."
  />;
}
