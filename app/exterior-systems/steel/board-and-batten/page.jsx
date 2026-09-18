import ProductPage from "@/components/ProductPage";
export const metadata={title:"Board & Batten Steel Siding | CladCan",description:"Steel board-and-batten siding with vertical rhythm, durable coatings and coordinated trims."};
export default function Page(){return <ProductPage
  eyebrow="STEEL SIDING & SOFFIT"
  title="Board & Batten Steel Siding"
  subtitle="A durable steel interpretation of classic vertical siding."
  intro="Board-and-batten steel siding recreates the vertical rhythm of traditional timber cladding using prefinished steel panels and battens. It is selected where the project needs a pronounced vertical expression with the durability and lower maintenance of metal."
  images={["/images/source-library/steel/board-and-batten/hero.webp","/images/source-library/steel/board-and-batten/detail-01.webp","/images/source-library/steel/board-and-batten/detail-02.webp"]}
  benefits={[
    {title:"Vertical expression",text:"Raised battens and vertical panels create strong shadow lines and familiar board-and-batten proportions."},
    {title:"Durable steel",text:"Prefinished steel provides weather resistance and lower routine maintenance than many natural materials."},
    {title:"Coordinated trims",text:"Corners, openings and terminations can be completed with compatible formed-metal details."},
    {title:"Broad application",text:"The visual language works across residential, agricultural and selected commercial façades."}
  ]}
  applications={["Residential façades","Agricultural buildings","Light-industrial buildings","Feature walls","Recladding projects","Vertical accent elevations"]}
  components={[
    {title:"Steel Panels",detail:"Vertical panels establish the primary exterior surface."},
    {title:"Batten Profiles",detail:"Raised battens create depth and reinforce the vertical rhythm."},
    {title:"Trims & Flashings",detail:"Compatible formed-metal details coordinate corners, openings and transitions."}
  ]}
  finishes={["Coil-coated solid colours","Dark architectural neutrals","Selected textured coatings","Wood-inspired options where available","Project-specific coastal coatings where specified"]}
  ctaTitle="Considering steel board and batten?"
  ctaText="Share drawings and preferred colour direction. CladCan can help coordinate profile, trims, samples, quantities and installation requirements."
/>}