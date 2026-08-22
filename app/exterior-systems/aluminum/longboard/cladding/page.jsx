import ApplicationPage from "@/components/ApplicationPage";
export const metadata={title:"Longboard Aluminum Cladding Systems | CladCan",description:"Explore Longboard architectural aluminum cladding including Tongue & Groove, Link & Lock, Panelboard and Privacy Beam systems."};
const products=[
  {title:"Tongue & Groove",type:"Architectural Aluminum Planks",description:"Closed-joint aluminum plank systems available in multiple V-Groove and Channel profiles.",href:"/exterior-systems/aluminum/longboard/products/tongue-and-groove"},
  {title:"Textured Tongue & Groove",type:"Textured Aluminum Planks",description:"Architectural textured profiles including castellation and bevel options.",href:"/exterior-systems/aluminum/longboard/products/textured-tongue-and-groove"},
  {title:"Link & Lock\u2122",type:"Hidden-Fastener Battens",description:"Two-piece architectural aluminum battens for modern cladding, fins and linear fa\u00e7ade applications.",href:"/exterior-systems/aluminum/longboard/products/link-lock"},
  {title:"Panelboard\u2122",type:"Panelized Aluminum Look",description:"Smooth aluminum plank system designed to create a clean panelized architectural appearance.",href:"/exterior-systems/aluminum/longboard/products/panelboard"},
  {title:"Privacy Beam",type:"Open-Joint Aluminum Battens",description:"Architectural aluminum beams for cladding, screening and linear fa\u00e7ade features.",href:"/exterior-systems/aluminum/longboard/products/privacy-beam"},
];
const benefits=[
  {title:"Architectural Flexibility",text:"Multiple profiles, orientations and finishes support a wide range of fa\u00e7ade concepts."},
  {title:"Non-Combustible Aluminum",text:"Longboard exterior aluminum systems are designed for demanding architectural applications."},
  {title:"Durable Finish",text:"Exterior systems use high-performance architectural finishes engineered for exterior exposure."},
  {title:"System Integration",text:"Cladding profiles can coordinate with soffit, siding and architectural feature systems."},
];
const applications=["Residential fa\u00e7ades", "Commercial fa\u00e7ades", "Feature walls", "Multi-residential buildings", "Mixed-material elevations", "Architectural accents"];
export default function Page(){return <ApplicationPage breadcrumb={[{label:"Exterior Systems",href:"/exterior-systems"},{label:"Aluminum",href:"/exterior-systems/aluminum"},{label:"Longboard",href:"/exterior-systems/aluminum/longboard"},{label:"Cladding"}]} eyebrow="LONGBOARD CLADDING" title="Architectural aluminum cladding." intro="Explore Longboard exterior cladding systems including aluminum planks, battens and panelized solutions for residential and commercial fa\u00e7ades." overview="Longboard cladding spans closed-joint planks, textured profiles, smooth panelized systems and open-joint battens, allowing designers to choose the degree of texture, joint expression and depth appropriate to the fa\u00e7ade." products={products} benefits={benefits} applications={applications} ctaTitle="Need help selecting a Longboard cladding system?" ctaText="Send us your drawings, elevations or design requirements and CladCan can help review suitable Longboard profiles, finishes, quantities and installation options."/>;}
