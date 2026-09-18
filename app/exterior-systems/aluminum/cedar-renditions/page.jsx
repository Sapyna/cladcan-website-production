import ProductTabbedPage from "@/components/ProductTabbedPage";

export const metadata={
  title:"Cedar Renditions® Aluminum Siding & Soffit | CladCan",
  description:"Explore Cedar Renditions woodgrain aluminum siding and soffit profiles, colours, accessories and performance benefits available through CladCan."
};

const benefits=[
  {title:"Cost-Effective Aluminum",text:"A more affordable aluminum siding option that delivers a premium architectural appearance."},
  {title:"Realistic Woodgrain",text:"Multi-toned finishes recreate the warmth, depth and natural variation of stained wood."},
  {title:"Recycled Content",text:"Made from 99% recycled content and fully recyclable at the end of its service life."},
  {title:"Virtually Maintenance-Free",text:"The aluminum construction preserves its appearance without the regular staining required by natural wood."},
  {title:"Moisture Resistant",text:"A non-absorbent exterior finish designed to resist moisture-related deterioration."},
  {title:"Non-Combustible",text:"Aluminum construction provides a non-combustible alternative to conventional wood siding."},
  {title:"Easy Installation",text:"An overlapping horizontal panel design supports efficient installation and clean extended runs."},
  {title:"LEED Compliant",text:"High recycled content and full recyclability can support sustainability-focused project goals."},
  {title:"25-Year Warranty",text:"Protected by a 25-year prorated limited warranty for long-term project confidence."},
  {title:"High-Wind Performance",text:"Engineered to withstand winds up to 200 mph when installed as specified."},
  {title:"Durable PVDF Finish",text:"A high-performance PVDF topcoat provides superior paint durability and lasting colour."}
];

const profiles=[
  {title:"4-inch & 6-inch Siding",items:[{label:"Profile",value:"Horizontal siding"},{label:"Exposure",value:"4-inch and 6-inch options"},{label:"Design",value:"Use individually or combine widths for a custom rhythm"}]},
  {title:"6-inch Soffit",items:[{label:"Application",value:"Soffit and protected ceiling areas"},{label:"Appearance",value:"Coordinated low-maintenance wood-look aluminum"}]},
  {title:"V-Groove Soffit",items:[{label:"Application",value:"Ventilated soffit"},{label:"Appearance",value:"Linear V-groove expression"}]},
  {title:"Board & Batten",items:[{label:"Orientation",value:"Vertical"},{label:"Appearance",value:"Depth and shadow lines inspired by traditional siding"}]},
  {title:"D4 & D4D Siding",items:[{label:"Profile",value:"Traditional double-four proportions"},{label:"Application",value:"Residential exterior siding"}]},
  {title:"Trims & Accessories",items:[{label:"Use",value:"Corners, transitions, openings and terminations"}]}
];

export default function Page(){
  return <ProductTabbedPage
    eyebrow="ALUMINUM SIDING & SOFFIT"
    title="Cedar Renditions® Siding & Soffit"
    subtitle="Authentic woodgrain character with durable aluminum performance."
    intro="Cedar Renditions® combines high-end wood-inspired aesthetics with low-maintenance aluminum durability. The collection can be used for focal areas, full elevations, soffits and coordinated architectural details where a warm material expression is desired without the maintenance demands of natural wood."
    heroImage="/images/source-library/aluminum/cedar-renditions/hero.webp"
    images={[
      "/images/source-library/aluminum/cedar-renditions/hero.webp",
      "/images/exterior-systems/cedar-renditions/modern-ontario-home-woodgrain-aluminum-siding.webp",
      "/images/exterior-systems/cedar-renditions/cedar-renditions-complete-siding-soffit-profile-guide.webp",
      "/images/exterior-systems/cedar-renditions/cedar-renditions-premium-solid-woodgrain-colours.png",
      "/images/exterior-systems/cedar-renditions/cedar-renditions-multitone-woodgrain-finishes.png"
    ]}
    manufacturer="Cedar Renditions"
    specs={[
      {label:"Material",value:"Aluminum siding and soffit"},
      {label:"Recycled content",value:"99% recycled content"},
      {label:"Finish",value:"Durable PVDF topcoat"},
      {label:"Wind performance",value:"Up to 200 mph when installed as specified"},
      {label:"Warranty",value:"25-year prorated limited warranty"},
      {label:"Profiles",value:"Siding, soffit, V-groove, board & batten, D4 / D4D"}
    ]}
    applications={["Residential siding","Architectural accent areas","Soffits and covered ceilings","Board-and-batten elevations","Mixed-material façades","Renovation and recladding projects"]}
    benefits={benefits}
    profiles={profiles}
    components={[
      {title:"Siding Profiles",detail:"4-inch, 6-inch and D4 / D4D siding formats support different façade proportions."},
      {title:"Soffit Profiles",detail:"6-inch and V-groove soffit options coordinate protected horizontal surfaces."},
      {title:"Board & Batten",detail:"Vertical profile for contemporary and traditional exterior compositions."},
      {title:"Trims & Accessories",detail:"Coordinated components complete corners, openings, transitions and terminations."}
    ]}
    finishes={["Riverwood","Timberline","Smokewood","Grey Oak","Ironstone","Charcoal","Gray","Amberwood","Cedar Bark","Charwood","Spanish Moss"]}
    resources={[{type:"PRODUCT BROCHURE",title:"Cedar Renditions® Product Brochure",href:"/downloads/cedar-renditions-aluminum-siding-soffit-product-brochure-canada-2024.pdf"}]}
    visuals={[
      {image:"/images/exterior-systems/cedar-renditions/modern-ontario-home-woodgrain-aluminum-siding.webp",title:"Installed Application",caption:"Wood-look aluminum siding paired with stone and contemporary details.",alt:"Modern Ontario home with wood-look aluminum siding"},
      {image:"/images/exterior-systems/cedar-renditions/cedar-renditions-complete-siding-soffit-profile-guide.webp",title:"Profile Guide",caption:"Siding, soffit, board-and-batten, trim and accessory profiles.",alt:"Cedar Renditions profile guide"},
      {image:"/images/exterior-systems/cedar-renditions/cedar-renditions-premium-solid-woodgrain-colours.png",title:"Colour Collection",caption:"Premium, solid and traditional finish options.",alt:"Cedar Renditions colour options"},
      {image:"/images/exterior-systems/cedar-renditions/cedar-renditions-multitone-woodgrain-finishes.png",title:"Multi-Tone Woodgrain",caption:"Riverwood, Timberline, Smokewood and Grey Oak finish examples.",alt:"Cedar Renditions multi-toned woodgrain finishes"}
    ]}
    ctaTitle="Considering Cedar Renditions® for your project?"
    ctaText="Share your elevations, preferred profile and colour direction. CladCan can coordinate samples, accessories, quantities and installation requirements."
  />;
}
