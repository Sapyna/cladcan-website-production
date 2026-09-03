import CurrentSitePage from "@/components/CurrentSitePage";

export const metadata={title:"Aluminum Plate Panels & Planks | CladCan",description:"Explore APP-01, APP-02, APP-03 and APP-12/16 architectural aluminum plate panels and planks for rainscreen façades, soffits and feature walls."};
const root="/images/exterior-systems/app";

export default function Page(){return <CurrentSitePage
  eyebrow="ARCHITECTURAL ALUMINUM" title="Aluminum Plate Panels & Planks"
  image={`${root}/aluminum-plate-panel-app-01-photo-1.webp`}
  images={[`${root}/aluminum-plate-panel-app-01-photo-1.webp`,`${root}/aluminum-plate-board-plank-app-12-app-16-photo-1.webp`,`${root}/aluminum-plate-panel-app-01-photo-2.webp`]}
  intro="High-performance aluminum plate panels and linear planks for drained, back-ventilated rainscreen systems and architectural feature applications."
  overview="APP systems combine premium 5000-series aluminum, precise fabrication and durable architectural finishes. Select between concealed or visible panel attachment, then coordinate panel dimensions, joints, sub-framing, thermal movement, colour and project-specific details as one complete façade assembly."
  decisionSupport={[{label:"Choose the format",text:"Large-format APP-01, APP-02 and APP-03 panels create modular façades; APP-12 and APP-16 planks produce a continuous linear expression."},{label:"Choose the fastening",text:"APP-01 and APP-02 conceal attachment, APP-03 expresses visible fasteners, and APP-12/16 use concealed plank fastening."},{label:"Coordinate movement",text:"Panel dimensions, bracket selection, joint width and perimeter supports must respond to thermal movement and design pressure."},{label:"Specify the finish",text:"AAMA 2604 and 2605 powder-coat options support custom colours, specialty effects and long-term exterior performance."}]}
  items={[
    {title:"APP-01",subtitle:"CONCEALED PERIMETER EXTRUSIONS",href:"/exterior-systems/app/app-01",image:`${root}/aluminum-plate-panel-app-01-photo-1.webp`,tags:["3.2 mm plate","Floating appearance","Concealed fastening"],text:"Premium plate panels with concealed perimeter supports and crisp floating shadow lines."},
    {title:"APP-02",subtitle:"CONCEALED THERMAL-MOVEMENT BRACKETS",href:"/exterior-systems/app/app-02",image:`${root}/aluminum-plate-panel-app-01-photo-4.webp`,tags:["3.2 mm plate","Concealed brackets","Thermal movement"],text:"Precision aluminum panels with concealed brackets designed to accommodate expansion and contraction."},
    {title:"APP-03",subtitle:"VISIBLE FASTENING",href:"/exterior-systems/app/app-03",image:"/images/exterior-systems/aluminum-plate-panel-cladding.webp",tags:["3.2 mm plate","Cassette style","Visible fasteners"],text:"Folded cassette-style aluminum panels with a direct, technically expressive fastening strategy."},
    {title:"APP-12 & APP-16",subtitle:"ARCHITECTURAL ALUMINUM PLANKS",href:"/exterior-systems/app/app-12-16",image:`${root}/aluminum-plate-board-plank-app-12-app-16-photo-1.webp`,tags:["2 mm aluminum","12 & 16 inch","Horizontal or vertical"],text:"Concealed-fastener architectural boards for linear façades, soffits and feature walls."}
  ]}
/>}
