import CurrentSitePage from "@/components/CurrentSitePage";
export const metadata={title:"Steel Siding & Soffit | CladCan",description:"Explore exposed-fastener and hidden-fastener steel siding and soffit systems for residential, commercial, agricultural and industrial applications."};
const items=[
 {title:"Exposed Fastener (EF)",subtitle:"Steel System",href:"/exterior-systems/steel/exposed-fastener",text:"Cost-efficient, robust steel profiles with intentionally visible fasteners, including corrugated and ribbed panel options."},
 {title:"Hidden Fastener (HF)",subtitle:"Steel System",href:"/exterior-systems/steel/hidden-fastener",text:"Concealed-fastener steel siding and soffit systems for cleaner architectural lines and protected fastening."}
];
const supportingNotes = [
  {label:"What it is", text:"Steel cladding typically refers to prefinished metal profiles designed for durable wall, soffit and accent applications, with options that range from exposed-fastener systems to cleaner concealed-fastener expressions."},
  {label:"Where it fits", text:"Steel is often considered for agricultural, commercial, modern residential and mixed-use projects where a stronger profile language or a more industrial appearance is part of the design intent."},
  {label:"Selection factors", text:"Fastening strategy, panel profile, substrate attachment, expansion and contraction, and how the system transitions into trims, windows and rooflines all affect the final approach."},
  {label:"How CladCan helps", text:"CladCan can help review profile selection, fabrication requirements, accessory packages and installation sequencing before the exterior system is locked in."}
];
const overview = "Steel exterior profiles support residential, commercial, agricultural and industrial applications. Exposed-fastener and concealed-fastener systems produce different visual and detailing outcomes; selection depends on profile, orientation, substrate, fastening strategy, transitions and project requirements. CladCan assists with product selection, trims, fabrication coordination and installation.";

export default function Page(){
  return <CurrentSitePage title="Steel (Solid & Woodgrain Finish)" intro="Steel exterior systems are selected when a project needs profile variety, durability and a more architectural or industrial expression." overview={overview} items={items} decisionSupport={supportingNotes} />;
}
