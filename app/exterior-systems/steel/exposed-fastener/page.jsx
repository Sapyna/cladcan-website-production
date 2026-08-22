import CurrentSitePage from "@/components/CurrentSitePage";
export const metadata={title:"Exposed Fastener Steel Systems | CladCan",description:"Explore exposed-fastener corrugated and ribbed steel siding and soffit profiles."};
const items=[
 {title:'7/8" Corrugated',href:"/exterior-systems/steel/corrugated",text:"Architectural corrugated steel with exposed fastening for walls, soffits and robust exterior applications."},
 {title:"Century Rib",text:"Exposed-fastener rib profile available for project-specific wall and roof applications."},
 {title:"Ultima",text:"Ribbed exposed-fastener steel profile for economical commercial, agricultural and industrial envelope applications."},
 {title:"Trius",text:"Exposed-fastener steel profile suited to practical wall and roof applications."},
 {title:"Diamond Rib",text:"Ribbed steel profile offering pronounced linear expression and efficient installation."},
 {title:"Nordet 36",text:"Wide-module exposed-fastener profile for large-area cladding and roofing applications."},
 {title:"Optimum Rib",text:"Economical ribbed steel panel option for durable exterior envelope applications."}
];
export default function Page(){return <CurrentSitePage eyebrow="STEEL / EXPOSED FASTENER" title="Exposed Fastener Steel" intro="Strong, straightforward and cost-efficient steel systems with visible fastening and a broad selection of corrugated and ribbed profiles." overview="Exposed-fastener systems are commonly selected where durability, installation efficiency and an industrial architectural expression are priorities." items={items}/>;}
