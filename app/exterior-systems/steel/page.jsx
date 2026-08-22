import CurrentSitePage from "@/components/CurrentSitePage";
export const metadata={title:"Steel Siding & Soffit | CladCan",description:"Explore exposed-fastener and hidden-fastener steel siding and soffit systems for residential, commercial, agricultural and industrial applications."};
const items=[
 {title:"Exposed Fastener (EF)",subtitle:"Steel System",href:"/exterior-systems/steel/exposed-fastener",text:"Cost-efficient, robust steel profiles with intentionally visible fasteners, including corrugated and ribbed panel options."},
 {title:"Hidden Fastener (HF)",subtitle:"Steel System",href:"/exterior-systems/steel/hidden-fastener",text:"Concealed-fastener steel siding and soffit systems for cleaner architectural lines and protected fastening."}
];
export default function Page(){return <CurrentSitePage title="Steel (Solid & Woodgrain Finish)" intro="Choose between exposed-fastener and hidden-fastener steel systems for durable exterior wall and soffit applications." overview="CladCan coordinates steel cladding across residential, commercial, agricultural and industrial projects. Start with the fastening system, then compare the available profiles and product families." items={items}/>;}
