import CurrentSitePage from "@/components/CurrentSitePage";

export const metadata={title:"Steel Siding & Soffit | CladCan",description:"Explore exposed-fastener and hidden-fastener steel siding and soffit systems, complete with thermal clips, trims and flashings for Ontario projects."};

const items=[
  {title:"Exposed Fastener",subtitle:"EF STEEL SIDING & SOFFIT",href:"/exterior-systems/steel/exposed-fastener",image:"/images/content/corrugated-commercial.webp",tags:["Corrugated","Ribbed profiles","Visible fasteners"],text:"Cost-efficient steel wall, roof and soffit panels with intentionally visible fasteners, including corrugated and ribbed profiles."},
  {title:"Hidden Fastener",subtitle:"HF STEEL SIDING & SOFFIT",href:"/exterior-systems/steel/hidden-fastener",image:"/images/content/agway-siding-project.webp",tags:["HF-12","HF-8","Galanta","Stratus"],text:"Concealed-fastener steel profiles create clean architectural lines for siding, fascia, feature walls and soffits."}
];

export default function Page(){return <CurrentSitePage
  eyebrow="STEEL EXTERIOR SYSTEMS"
  title="Steel Siding & Soffit"
  image="/images/exterior-systems/steel-siding-soffit-ontario-v2.jpg"
  images={["/images/exterior-systems/steel-siding-soffit-ontario-v2.jpg","/images/content/agway-siding-project.webp","/images/content/corrugated-commercial.webp"]}
  intro="Durable steel cladding systems for residential, commercial, industrial and institutional walls, soffits and architectural accents."
  overview="Steel siding and soffit combine long service life, low maintenance and broad profile flexibility. Select the fastening strategy first, then coordinate the panel profile, finish, thermal attachment, trims and transitions as one complete exterior system."
  items={items}
  decisionSupport={[
    {label:"Choose the fastening",text:"Exposed-fastener panels prioritize efficiency and a strong profile; hidden-fastener panels produce cleaner uninterrupted surfaces."},
    {label:"Coordinate the assembly",text:"Panel orientation, substrate, ventilation, thermal clips and movement requirements influence the complete wall or soffit build-up."},
    {label:"Resolve every edge",text:"Corners, openings, parapets, soffits and material transitions require compatible trims and flashings established before fabrication."},
    {label:"Select the finish",text:"Solid, greyscale and wood-look finishes allow steel to support industrial, contemporary and residential design directions."}
  ]}
/>}
