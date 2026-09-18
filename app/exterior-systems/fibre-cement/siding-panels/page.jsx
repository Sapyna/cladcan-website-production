import ProductPage from "@/components/ProductPage";
export const metadata={title:"Siding & Panels | CladCan",description:"Explore fibre-cement siding and panel options, applications, finishes and project requirements."};
export default function Page(){return <ProductPage
  eyebrow="FIBRE CEMENT"
  title="Siding & Panels"
  subtitle="Durable fibre-cement cladding in traditional and contemporary formats."
  intro="Fibre-cement siding and panels provide durable, low-maintenance cladding with a range of textures and profiles. Product selection should coordinate profile, substrate, flashing, control joints, fastening and finish requirements as one exterior assembly."
  images={["/images/source-library/fibre-cement/siding-panels/hero.webp","/images/source-library/fibre-cement/siding-panels/detail-01.webp","/images/source-library/fibre-cement/siding-panels/detail-02.webp"]}
  benefits={[
    {title:"Profile flexibility",text:"Lap, shiplap, panelized and textured boards support traditional and contemporary exterior expressions."},
    {title:"Durable material",text:"Fibre cement is selected for exterior durability, fire resistance and low routine maintenance."},
    {title:"Finish options",text:"Painted and factory-finished surfaces can support different colour and texture directions."},
    {title:"Coordinated detailing",text:"Long-term performance depends on compatible fasteners, substrate preparation, flashing and control-joint detailing."}
  ]}
  applications={["Residential siding","Commercial façades","Panelized feature areas","Gables and accent walls","Renovation and recladding projects","Selected soffit and protected exterior applications"]}
  components={[
    {title:"Siding Profiles",detail:"Lap, shiplap and other board formats selected by manufacturer and collection."},
    {title:"Panel Systems",detail:"Large-format and architectural panels for more contemporary exterior layouts."},
    {title:"Trims & Flashings",detail:"Compatible corner, opening and transition details coordinated with the selected product."}
  ]}
  finishes={["Factory-finished colour collections","Field-painted primed products","Smooth surfaces","Wood-inspired textures","Selected architectural textures"]}
  ctaTitle="Comparing fibre-cement siding and panel options?"
  ctaText="Share elevations, project conditions and preferred appearance. CladCan can help coordinate product direction, trims, samples and installation requirements."
/>}