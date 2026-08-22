import CurrentSitePage from "@/components/CurrentSitePage";
export const metadata={title:"Hidden Fastener Steel Systems | CladCan",description:"Explore concealed-fastener steel siding and soffit systems including Agway, Stratus, Board & Batten, Distinction and Galanta."};
const items=[
 {title:"Agway Siding & Soffit",text:"Concealed-fastener steel siding for clean, uninterrupted exterior surfaces."},
 {title:"Agway Soffit",text:"Hidden-fastener soffit solutions with project-specific flat-panel and colour options."},
 {title:"Agway Stratus Siding & Soffit",text:"Streamlined concealed-fastener wall and soffit cladding for contemporary architectural applications."},
 {title:"Board & Batten Steel Siding",href:"/exterior-systems/steel/board-and-batten",text:"Architectural batten-style steel profiles with strong vertical rhythm and customizable dimensions."},
 {title:"Distinction Siding & Soffit",href:"/exterior-systems/steel/distinction-galanta",text:"Wood-inspired hidden-fastener steel siding combining texture with durable metal performance."},
 {title:"Galanta Siding & Soffit",href:"/exterior-systems/steel/distinction-galanta",text:"Concealed-fastener 26-gauge steel siding and soffit available in solid and woodgrain finishes."}
];
export default function Page(){return <CurrentSitePage eyebrow="STEEL / HIDDEN FASTENER" title="Hidden Fastener Steel" intro="Concealed-fastener steel systems create clean architectural surfaces while shielding fasteners from direct weather exposure." overview="Compare hidden-fastener siding and soffit families by profile, finish, orientation and project application." items={items}/>;}
