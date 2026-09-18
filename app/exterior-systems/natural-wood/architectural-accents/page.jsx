import ProductPage from "@/components/ProductPage";
export const metadata={title:"Natural Wood Architectural Accents | CladCan",description:"Natural wood accents for entries, columns, screens and feature areas with coordinated fabrication and installation."};
export default function Page(){return <ProductPage
  eyebrow="NATURAL WOOD"
  title="Architectural Accents"
  subtitle="Warm natural-wood features for façades, entries and screening."
  intro="Architectural accents crafted from natural wood add tactility and human scale to larger façades. Accents may include column wraps, entrance canopies, feature panels, screens and custom joinery, with attachment, moisture management and maintenance access coordinated around the project."
  images={["/images/source-library/natural-wood/architectural-accents/hero.webp","/images/source-library/natural-wood/architectural-accents/detail-01.webp","/images/source-library/natural-wood/architectural-accents/detail-02.webp"]}
  benefits={[
    {title:"Material warmth",text:"Natural grain and variation create a tactile contrast against metal, masonry and panel façades."},
    {title:"Custom fabrication",text:"Accents can be developed around project-specific dimensions, screens, wraps and feature elements."},
    {title:"Flexible composition",text:"Wood can be used selectively at entries, columns, soffits and feature zones without covering the full façade."},
    {title:"Sample-led design",text:"Physical samples help coordinate species, colour and finish relationships with adjacent materials."}
  ]}
  applications={["Entry surrounds","Column and beam wraps","Feature panels","Fencing and screening","Canopies and sheltered ceilings","Custom exterior joinery"]}
  components={[
    {title:"Support & Brackets",detail:"Project-specific concealed or exposed attachment coordinated for serviceability and drainage."},
    {title:"Wood Profiles",detail:"Species, board dimensions and profile geometry selected for the intended expression and exposure."},
    {title:"Finish System",detail:"Clear, stained or pigmented finishes selected around appearance and maintenance expectations."}
  ]}
  finishes={["Clear or natural oil finishes","Pigmented stains","Factory-finished wood options","Species-specific natural tones","Custom sample-approved finishes"]}
  ctaTitle="Need custom wood accents?"
  ctaText="Share your concept and CladCan can help with material selection, fabrication coordination, shop drawings and installation planning."
/>}