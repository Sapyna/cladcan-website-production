import ProductPage from "@/components/ProductPage";
export const metadata={title:"Natural Wood Soffit | CladCan",description:"Natural wood soffits for protected eaves, porch ceilings and covered architectural applications."};
export default function Page(){return <ProductPage
  eyebrow="NATURAL WOOD"
  title="Natural Wood Soffit"
  subtitle="Warm wood detailing for eaves and protected ceilings."
  intro="Natural wood soffits bring warmth and refined detail to eaves, porches and covered ceilings. They perform best where direct rain and prolonged solar exposure are reduced and where the cavity behind the boards is detailed for ventilation and drying."
  images={["/images/source-library/natural-wood/soffit/hero.webp","/images/source-library/natural-wood/soffit/detail-01.webp","/images/source-library/natural-wood/soffit/detail-02.webp"]}
  benefits={[
    {title:"Warm ceiling finish",text:"Natural wood creates a refined transition between exterior walls, glazing and rooflines."},
    {title:"Protected application",text:"Sheltered soffit locations can reduce direct precipitation exposure compared with open wall cladding."},
    {title:"Ventilation options",text:"Soffit layouts can coordinate required airflow, vents and roof-space ventilation strategies."},
    {title:"Finish flexibility",text:"Clear, stained or painted finishes allow the soffit to match or contrast adjacent exterior materials."}
  ]}
  applications={["Protected soffits","Porch ceilings","Covered entries","Canopies","Deep eaves","Sheltered exterior ceilings"]}
  components={[
    {title:"Soffit Boards",detail:"Species and profile selected for the desired grain, joint and linear direction."},
    {title:"Ventilation Components",detail:"Vents or perforated areas coordinated with attic and roof ventilation requirements."},
    {title:"Fascia & Flashing Interfaces",detail:"Roof-edge details prevent water migration and coordinate transitions around the soffit."}
  ]}
  finishes={["Clear oil finishes","Pigmented stains","Painted wood finishes","Factory-finished options","Natural-tone sample selections"]}
  ctaTitle="Soffit design questions?"
  ctaText="Send drawings and CladCan can help coordinate species, venting, finish and installation details around the roofline."
/>}