import FibreCementBrandPage from "@/components/FibreCementBrandPage";

export const metadata={title:"Nichiha Architectural Fibre Cement Panels",description:"Explore Nichiha architectural wall panels, rainscreen technology, textures, finishes and installation systems supplied and installed by CladCan in Ontario."};

const data={
  brand:"Nichiha",
  tagline:"Architectural wall panels that combine expressive textures, concealed attachment and integrated rainscreen performance.",
  hero:"/images/exterior-systems/fibre-cement/nichiha-architectural-wall-panel-hero.webp",
  featureImage:"/images/exterior-systems/fibre-cement/architectural-fibre-cement-rainscreen-cladding.webp",
  intro:{title:"Where building technology meets architectural expression.",paragraphs:["Nichiha Architectural Wall Panels give designers a broad material vocabulary—from wood and concrete to stone, brick, block, ribbed and high-gloss surfaces. The panelized system creates refined commercial and residential façades with fewer visible fasteners.","Integrated rainscreen geometry and purpose-designed clips help manage drainage, ventilation and panel alignment. CladCan coordinates the selected collection, layout, corners, trims and substrate interfaces for the project."]},
  benefits:[
    {title:"Integrated Rainscreen",text:"Panel and clip geometry creates a ventilated drainage cavity behind the finished cladding."},
    {title:"Concealed Attachment",text:"Ultimate Clip and Starter Track components support secure alignment with clean finished elevations."},
    {title:"Expressive Textures",text:"Wood, concrete, stone, brick, block, ribbed and smooth looks expand the architectural palette."},
    {title:"Panelized Installation",text:"Factory-finished modules and coordinated accessories support repeatable layout and efficient progress."},
    {title:"Commercial Versatility",text:"Collections suit retail, hospitality, institutional, mixed-use, multi-family and custom residential work."},
    {title:"Coordinated Accessories",text:"Corners, metal trims, sealants and touch-up materials help complete transitions and interfaces."}
  ],
  products:[
    {title:"VintageWood™",text:"Wood-inspired architectural panels with varied grain character and multiple natural colour directions."},
    {title:"ArchitecturalBlock™",text:"A modern block-like surface for restrained commercial and contemporary residential elevations."},
    {title:"Miraia™",text:"High-gloss reflective panels for polished, modern statements and feature applications."},
    {title:"Dimension Series",text:"Ribbed and recessed patterns that introduce linear depth, shadow and directional rhythm."},
    {title:"TuffBlock™ & Concrete Looks",text:"Textured cementitious appearances offering a modern alternative to site-applied stucco aesthetics."},
    {title:"Stone & Brick Collections",text:"Panelized masonry-inspired surfaces designed to coordinate with the AWP installation system."}
  ],
  technology:{title:"A concealed clip system with built-in drainage space.",text:"Nichiha AWP systems use starter tracks, clips and ship-lapped or tongue-and-groove panel edges to align panels and establish the rainscreen cavity. Exact fastening, sealing and substrate requirements vary by series and assembly.",points:["Ultimate Clip concealed attachment","Starter Track base alignment","Ventilated rainscreen cavity","Coordinated corners, trims and sealants"]},
  finishes:["Woodgrain collections","Concrete and stucco looks","Stone and brick textures","Ribbed and dimensional surfaces","High-gloss Miraia™ finishes","Smooth and custom-colour options"],
  applications:["Commercial buildings","Multi-family developments","Custom homes","Hospitality venues","Institutional projects","Interior feature walls"]
};

export default function NichihaPage(){return <FibreCementBrandPage {...data}/>}
