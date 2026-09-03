import ProductPage from "@/components/ProductPage";

export const metadata = {
  title: "Thin Stone & Brick Veneer | CladCan",
  description: "Explore natural stone, manufactured stone and thin brick veneer systems for exterior façades, renovations, fireplaces and feature walls in Ontario."
};

export default function ThinVeneerPage() {
  return <ProductPage
    eyebrow="MASONRY VENEER SYSTEMS"
    title="Thin Stone & Brick Veneer"
    subtitle="Authentic masonry character with a lighter wall profile"
    intro="Thin veneer brings the depth, texture and permanence of stone or brick to exterior and interior walls without the thickness of traditional full-bed masonry. CladCan helps coordinate the veneer type, layout, corners, substrate, drainage, flashing and installation method around the actual project conditions."
    images={[
      "/images/exterior-systems/thin-stone-veneer-exterior-project-hero.webp",
      "/images/exterior-systems/thin-stone-veneer-fireplace-project.webp",
      "/images/exterior-systems/thin-stone-veneer-interior-feature-wall.webp"
    ]}
    specs={[
      {label:"Material families",value:"Natural stone, manufactured stone and genuine thin brick"},
      {label:"Applications",value:"Exterior façades, renovations, fireplaces and feature walls"},
      {label:"Formats",value:"Individual flats and corners, modular panels and system-supported thin brick"},
      {label:"Installation",value:"Project-specific adhered or mechanically supported assemblies"},
      {label:"Design options",value:"Ledgestone, dimensional, random-height, ashlar, brick and contemporary profiles"},
      {label:"Project review",value:"Substrate, moisture management, movement joints and local code requirements"}
    ]}
    benefits={[
      {title:"Lighter Wall Profile",text:"Thin-format masonry creates substantial visual depth with less material thickness and weight than full-bed stone or brick."},
      {title:"Authentic Material Options",text:"Choose real natural stone, genuine fired-clay thin brick or manufactured stone shaped and coloured to reproduce quarried material."},
      {title:"Renovation Friendly",text:"The reduced profile can simplify transitions at windows, doors and adjacent cladding on suitable retrofit conditions."},
      {title:"Flexible Design Language",text:"Stone and brick collections range from rustic ledgestone to refined ashlar, linear panels and contemporary smooth brick."},
      {title:"Interior to Exterior Continuity",text:"Selected products can carry the same material expression across façades, entrances, fireplaces and interior feature walls."},
      {title:"Coordinated Details",text:"Purpose-made corners, sills, caps and trim elements help create convincing returns and finished terminations."}
    ]}
    applications={[
      "Custom-home façades and entrance features",
      "Residential recladding and additions",
      "Commercial and hospitality elevations",
      "Columns, piers, foundations and wainscot areas",
      "Fireplaces and interior feature walls",
      "Mixed-material façades with wood, metal or fibre cement"
    ]}
    featureImages={[
      {src:"/images/exterior-systems/travertine-thin-stone-veneer-installation.webp",alt:"Thin natural stone veneer installation showing prepared substrate and adhered stone",caption:"Substrate preparation, water management and full mortar coverage are coordinated for the selected exterior assembly."},
      {src:"/images/exterior-systems/thin-stone-veneer-interior-feature-wall.webp",alt:"Natural thin stone veneer used on an interior architectural feature wall",caption:"Thin veneer can extend the same masonry palette to fireplaces and interior focal points."}
    ]}
    detailGroups={[
      {brand:"NATURAL STONE",title:"Quarried Thin Stone Veneer",text:"Real stone is cut to a thinner profile while retaining its natural colour, mineral variation and surface character.",items:["Dimensional and tumbled profiles","Ledgestone and random-height layouts","Matching corners and architectural accessories"]},
      {brand:"MANUFACTURED STONE",title:"Architectural Stone Veneer",text:"Cement-based veneer is moulded and coloured to reproduce natural stone in coordinated profiles and repeatable colour palettes.",items:["Ledge, ashlar and irregular profiles","Stone and brick-inspired collections","Corners, caps, sills and trim accessories"]},
      {brand:"THIN BRICK",title:"Genuine Brick Veneer",text:"Thin brick provides fired-clay colour, texture and coursing in a reduced-depth format for interior or exterior wall systems.",items:["Flats and matching corner units","Traditional and contemporary textures","Adhered or proprietary support-panel systems"]}
    ]}
    technicalSections={[
      {eyebrow:"ASSEMBLY PLANNING",title:"The veneer is the finish, not the whole wall.",text:"Exterior performance depends on the complete assembly behind the veneer. The substrate, water-resistive barrier, drainage strategy, flashings, mortar or support system, movement joints and penetrations must be detailed together.",facts:[
        {title:"Substrate",text:"Confirm that sheathing, masonry or approved backer construction is suitable for the selected system and loads."},
        {title:"Moisture management",text:"Coordinate drainage, weeps, flashings and terminations so water can exit without being trapped behind the veneer."},
        {title:"Bond and support",text:"Use manufacturer-approved mortars, lath, anchors, clips or support panels for the chosen product and exposure."},
        {title:"Transitions",text:"Resolve interfaces with windows, doors, roofs, grade, caps and adjacent cladding before installation begins."}
      ]},
      {eyebrow:"LAYOUT & CRAFT",title:"Material selection and installation shape the final result.",text:"Blend material from multiple boxes or crates, establish coursing and joint strategy, and review representative field samples before completing large elevations. Corners and terminations should be planned first so the veneer reads as a coherent masonry surface.",facts:[
        {title:"Colour blending",text:"Natural and manufactured products vary; mixing material during installation prevents concentrated colour bands."},
        {title:"Corner strategy",text:"Matching corner units create depth at outside returns and reduce the appearance of a thin applied finish."},
        {title:"Joint expression",text:"Dry-stack, tight-joint and mortar-joint appearances require different products and installation methods."},
        {title:"Field verification",text:"Final product, colour, quantity and installation requirements should be confirmed from current manufacturer documents."}
      ]}
    ]}
    finishes={[
      "Dimensional tumbled natural stone",
      "Ledgestone and stacked-stone profiles",
      "Random-height and ashlar layouts",
      "Manufactured stone in natural colour blends",
      "Smooth, wirecut and textured thin brick",
      "Mortared, overgrouted and tight-joint expressions"
    ]}
    resources={[
      {type:"MANUFACTURER",title:"ThinCut Natural Stone Veneer",href:"https://www.allthingsstone.com/ca-en/brands/thincut-natural-stone/"},
      {type:"PRODUCT & INSTALLATION",title:"Realstone Systems Resources",href:"https://www.realstonesystems.com/resources/"},
      {type:"THIN BRICK SYSTEMS",title:"Glen-Gery Thin Brick",href:"https://www.glengery.com/products/brick/thin-brick"},
      {type:"INSTALLATION GUIDANCE",title:"CMHA Manufactured Stone Veneer Resources",href:"https://www.cmha.org/resource/msv-tec-001/"}
    ]}
    relatedProducts={[
      {type:"EXTERIOR SYSTEM",title:"Stucco & EIFS",description:"Continuous-insulation and stucco finish systems for coordinated exterior wall assemblies.",href:"/exterior-systems/stucco-eifs"},
      {type:"EXTERIOR SYSTEM",title:"Fibre Cement",description:"Panel and siding systems with durable factory-finished architectural surfaces.",href:"/exterior-systems/fibre-cement"},
      {type:"DETAILING",title:"Trims & Flashings",description:"Custom metal components for openings, transitions, terminations and moisture management.",href:"/exterior-systems/trims-flashings"}
    ]}
    ctaTitle="Planning a thin stone or brick veneer project?"
    ctaText="Send us your elevations, inspiration images and substrate information. CladCan can help compare product families and coordinate samples, quantities, details and installation requirements."
  />;
}
