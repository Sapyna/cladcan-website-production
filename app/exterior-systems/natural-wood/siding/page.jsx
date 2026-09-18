import ProductPage from "@/components/ProductPage";
export const metadata={title:"Natural Wood Siding | CladCan",description:"Premium natural wood siding selected for warmth, texture and authentic exterior material expression."};
export default function Page(){return <ProductPage
  eyebrow="NATURAL WOOD"
  title="Natural Wood Siding"
  subtitle="Authentic wood grain, texture and exterior character."
  intro="Natural wood siding offers tactile character and an organic exterior appearance. Successful wood cladding depends on suitable species selection, moisture-conscious detailing, ventilated drainage and a clear finish and maintenance strategy."
  images={["/images/source-library/natural-wood/siding/hero.webp","/images/source-library/natural-wood/siding/detail-01.webp","/images/source-library/natural-wood/siding/detail-02.webp"]}
  benefits={[
    {title:"Authentic material",text:"Real wood provides natural grain, colour variation and depth that changes with species and finish."},
    {title:"Design versatility",text:"Wood siding can cover full elevations or work as an accent within mixed-material façades."},
    {title:"Finish flexibility",text:"Clear oils, pigmented stains and painted systems can create different visual and maintenance strategies."},
    {title:"Repairable surface",text:"Individual boards and localized areas can often be serviced or refinished when the system is detailed for access."}
  ]}
  applications={["Primary residential façades","Commercial feature walls","Entry areas","Mixed-material elevations","Gables and architectural accents","Renovation and recladding"]}
  components={[
    {title:"Wood Boards",detail:"Species and profile selection establish grain, exposure, joint geometry and overall visual rhythm."},
    {title:"Rainscreen Support",detail:"Ventilated cavities and support framing provide drainage and drying behind the siding."},
    {title:"Flashings & Trims",detail:"Openings, transitions and terminations require coordinated moisture management and durable edge details."}
  ]}
  finishes={["Clear oils","Pigmented stains","Factory-applied coatings","Natural weathering strategies where appropriate","Species-specific sample selections"]}
  ctaTitle="Planning with natural wood siding?"
  ctaText="Share elevations or details and CladCan can help coordinate species, profile, finish and moisture-management requirements."
/>}