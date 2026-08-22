import ApplicationPage from "@/components/ApplicationPage";
export const metadata={title:"Longboard Screens & Enclosures | CladCan",description:"Explore Longboard aluminum Link & Lock and Privacy Beam systems for screens, enclosures, fins and architectural features."};
const products=[
  {title:"Link & Lock\u2122",type:"Hidden-Fastener Battens",description:"Two-piece architectural aluminum battens for screens, fins, louvers and exterior feature applications.",href:"/exterior-systems/aluminum/longboard/products/link-lock"},
  {title:"Privacy Beam",type:"Architectural Aluminum Beams",description:"One-piece aluminum beam profiles for privacy screens, enclosures and linear exterior features.",href:"/exterior-systems/aluminum/longboard/products/privacy-beam"},
];
const benefits=[
  {title:"Multiple Orientations",text:"Systems can support vertical, horizontal and project-specific linear arrangements."},
  {title:"Clean Fastening",text:"Hidden-fastener options support clean architectural detailing."},
  {title:"Exterior Performance",text:"Aluminum construction is suited to demanding exterior architectural conditions."},
  {title:"Design Versatility",text:"Multiple dimensions and finishes allow customized screening and feature applications."},
];
const applications=["Privacy screens", "Mechanical enclosures", "Architectural fins", "Exterior partitions", "Decorative screens", "Linear fa\u00e7ade accents"];
export default function Page(){return <ApplicationPage breadcrumb={[{label:"Exterior Systems",href:"/exterior-systems"},{label:"Aluminum",href:"/exterior-systems/aluminum"},{label:"Longboard",href:"/exterior-systems/aluminum/longboard"},{label:"Screens & Enclosures"}]} eyebrow="LONGBOARD SCREENS & ENCLOSURES" title="Architectural aluminum screens." intro="Explore Longboard aluminum batten and beam systems for privacy, screening, enclosures and architectural feature applications." overview="Longboard open-joint battens and beams create linear screens, fins, enclosures and feature elements with multiple sizes, orientations and matching architectural finishes." products={products} benefits={benefits} applications={applications} ctaTitle="Designing a screen or enclosure system?" ctaText="Send us your drawings, elevations or design requirements and CladCan can help review suitable Longboard profiles, finishes, quantities and installation options."/>;}
