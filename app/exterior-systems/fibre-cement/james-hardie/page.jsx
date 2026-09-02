import FibreCementBrandPage from "@/components/FibreCementBrandPage";

export const metadata={title:"James Hardie Fibre Cement Siding & Soffit",description:"Explore James Hardie fibre cement lap siding, panels, architectural profiles, trim, soffit and ColorPlus finishes supplied and installed by CladCan in Ontario."};

const data={
  brand:"James Hardie",
  tagline:"Climate-engineered fibre cement siding, panels, trim and soffit with durable factory-finished colour options.",
  hero:"/images/exterior-systems/fibre-cement/james-hardie-fibre-cement-modern-home-hero.webp",
  featureImage:"/images/exterior-systems/fibre-cement/architectural-fibre-cement-rainscreen-cladding.webp",
  intro:{title:"Built to last. Designed to feel at home.",paragraphs:["James Hardie combines fibre cement durability with familiar residential profiles and contemporary panel options. Its collections support traditional lap siding, modern vertical layouts, textured architectural panels and coordinated exterior details.","Products are engineered around regional climate demands and are available in primed or factory-finished configurations. CladCan helps align the chosen profile, finish and installation details with the project’s envelope requirements."]},
  benefits:[
    {title:"Climate-Specific Engineering",text:"Product formulations and guidance are developed around regional weather exposure and exterior performance."},
    {title:"Noncombustible Cladding",text:"Hardie fibre cement siding is tested as noncombustible cladding; complete wall assembly requirements remain project-specific."},
    {title:"Low Maintenance",text:"Fibre cement resists rot and pest damage while retaining the substantial appearance of traditional siding."},
    {title:"ColorPlus® Technology",text:"Factory-applied finishes are cured for consistent colour, adhesion and resistance to fading, chipping and cracking."},
    {title:"Long-Term Warranty",text:"Eligible siding products carry a transferable 30-year non-prorated limited substrate warranty; finish terms vary."},
    {title:"Complete Exterior Family",text:"Coordinated siding, panels, shingle, trim and soffit support cohesive detailing across the façade."}
  ],
  products:[
    {title:"Hardie® Plank Lap Siding",text:"Classic horizontal siding in smooth, wood-textured and selected beaded or traditional profiles."},
    {title:"Hardie® Artisan Siding",text:"Thicker premium profiles including lap, V-groove, shiplap and square-channel looks for deeper shadow lines."},
    {title:"Hardie® Panel Vertical Siding",text:"Large-format vertical panels in smooth, stucco, Cedarmill and Sierra 8 appearances."},
    {title:"Hardie® Architectural Panel",text:"Contemporary large-format surfaces with subtle textures designed for modern compositions."},
    {title:"Hardie® Shingle Siding",text:"Straight-edge and staggered-edge shingle expressions for gables, accents and character-rich elevations."},
    {title:"Hardie® Trim & Soffit",text:"Coordinated boards and soffit products complete openings, corners, rooflines and transitions."}
  ],
  technology:{title:"Colour and performance integrated at the factory.",text:"ColorPlus® Technology applies and cures multiple finish coats under controlled conditions. Product selection, fasteners, clearances, flashing and field touch-up must follow current James Hardie documentation.",points:["Factory-applied ColorPlus® finish options","Region-appropriate product selection","Manufacturer-defined installation clearances","Coordinated trim and soffit components"]},
  finishes:["Statement Collection™ colours","Dream Collection™ options","Smooth finish","Select Cedarmill® texture","Stucco and Sierra 8 textures","Fine Sand and other architectural textures"],
  applications:["Custom homes","Residential renovations","Multi-family developments","Commercial façades","Modern farmhouse elevations","Soffits, gables and accent areas"]
};

export default function JamesHardiePage(){return <FibreCementBrandPage {...data}/>}
