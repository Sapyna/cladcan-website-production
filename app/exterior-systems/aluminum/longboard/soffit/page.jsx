import ApplicationPage from "@/components/ApplicationPage";
export const metadata={title:"Longboard Aluminum Soffit Systems | CladCan",description:"Explore Longboard aluminum soffit systems including Tongue & Groove, Panelboard, Link & Lock and Privacy Beam."};
const products=[
  {title:"Tongue & Groove",type:"Aluminum Soffit Planks",description:"Architectural closed-joint aluminum plank systems for soffits and exterior ceilings.",href:"/exterior-systems/aluminum/longboard/products/tongue-and-groove"},
  {title:"Panelboard\u2122",type:"Panelized Soffit",description:"Smooth aluminum plank system for clean, modern soffit and ceiling applications.",href:"/exterior-systems/aluminum/longboard/products/panelboard"},
  {title:"Link & Lock\u2122",type:"Open-Joint Battens",description:"Hidden-fastener aluminum battens for dimensional soffit and ceiling applications.",href:"/exterior-systems/aluminum/longboard/products/link-lock"},
  {title:"Privacy Beam",type:"Architectural Aluminum Beams",description:"Linear aluminum beam system for open-joint soffits and architectural features.",href:"/exterior-systems/aluminum/longboard/products/privacy-beam"},
];
const benefits=[
  {title:"Exterior Durability",text:"Designed for protected and exposed exterior soffit applications."},
  {title:"Wood-Look Options",text:"Architectural woodgrain finishes provide warmth without natural wood maintenance."},
  {title:"Profile Variety",text:"Closed-joint, panelized and open-joint systems allow different architectural expressions."},
  {title:"Material Continuity",text:"Longboard soffit products can coordinate visually with adjacent wall and fa\u00e7ade systems."},
];
const applications=["Residential soffits", "Commercial canopies", "Entry ceilings", "Exterior ceilings", "Balconies", "Covered walkways"];
export default function Page(){return <ApplicationPage breadcrumb={[{label:"Exterior Systems",href:"/exterior-systems"},{label:"Aluminum",href:"/exterior-systems/aluminum"},{label:"Longboard",href:"/exterior-systems/aluminum/longboard"},{label:"Soffit"}]} eyebrow="LONGBOARD SOFFIT" title="Architectural aluminum soffit." intro="Explore Longboard aluminum soffit systems for canopies, ceilings, overhangs and exterior architectural applications." overview="Longboard soffit options range from closed-joint planks and smooth panelized products to open-joint battens and beams, allowing walls and overhead surfaces to share coordinated finishes." products={products} benefits={benefits} applications={applications} ctaTitle="Planning an aluminum soffit application?" ctaText="Send us your drawings, elevations or design requirements and CladCan can help review suitable Longboard profiles, finishes, quantities and installation options."/>;}
