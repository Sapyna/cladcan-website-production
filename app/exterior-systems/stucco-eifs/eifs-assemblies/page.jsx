import ProductPage from "@/components/ProductPage";
import "../eifs.css";

export const metadata = {
  title: "EIFS Wall Assemblies Toronto | CladCan",
  description: "Understand drainage EIFS wall assemblies, including air and water barriers, continuous insulation, drainage, reinforcing mesh, base coat, finish and critical detailing.",
};

const intro = "A complete EIFS wall assembly coordinates air and moisture control, drainage, continuous exterior insulation, reinforcement and finish as one tested system. Its performance depends on using compatible components and resolving openings, penetrations, flashings and movement joints before installation.";

export default function Page() {
  return <ProductPage
    eyebrow="EIFS ASSEMBLIES"
    title="EIFS Wall Assemblies"
    subtitle="Every layer works as one building-envelope system."
    intro={intro}
    images={[
      "/images/content/eifs-progress.webp",
      "/images/stucco-eifs/eifs-reinforcing-mesh-base-coat-installation.webp",
      "/images/content/eifs-project.webp",
    ]}
    applicationLinks={[
      {label:"Sto & DuROCK",href:"/exterior-systems/stucco-eifs/durock-sto"},
      {label:"EIFS Assemblies",href:"/exterior-systems/stucco-eifs/eifs-assemblies"},
      {label:"Architectural Finishes",href:"/exterior-systems/stucco-eifs/architectural-finishes"},
    ]}
    specs={[
      {label:"Assembly type",value:"Drainage EIFS with continuous insulation"},
      {label:"Control layer",value:"Manufacturer-approved air and water-resistive barrier"},
      {label:"Insulation",value:"EPS or mineral wool, depending on the tested system"},
      {label:"Drainage path",value:"Grooved insulation or a defined drainage plane"},
      {label:"Reinforcement",value:"Alkali-resistant fiberglass mesh embedded in base coat"},
      {label:"Exterior surface",value:"Compatible primer and acrylic or specialty finish"},
    ]}
    benefits={[
      {title:"Thermal continuity",text:"Exterior insulation limits thermal bridging at framing and helps improve whole-wall energy performance."},
      {title:"Managed drainage",text:"A defined drainage path directs incidental moisture toward flashing and exterior exits instead of trapping it in the wall."},
      {title:"Coordinated control layers",text:"The air and water barrier, openings and penetrations can be tied together before insulation conceals the substrate."},
      {title:"Impact options",text:"Standard, intermediate and high-impact mesh configurations allow reinforcement to be matched to exposure and use."},
    ]}
    applications={[
      "New commercial and institutional construction",
      "Multi-unit residential and mixed-use buildings",
      "Low-rise residential walls and additions",
      "Exterior energy retrofits",
      "EPS-based drainage EIFS",
      "Mineral-wool EIFS where the specified tested assembly requires it",
    ]}
    components={[
      {title:"Approved substrate",detail:"Exterior sheathing, concrete or masonry prepared to the tolerances and fastening requirements of the selected manufacturer."},
      {title:"Air and water barrier",detail:"A compatible fluid-applied or sheet control layer, including reinforced transitions at joints, openings and penetrations."},
      {title:"Drainage plane",detail:"Vertical channels, grooved insulation or another tested drainage method that leads water to properly detailed exits."},
      {title:"Continuous insulation",detail:"EPS or mineral wool of the density, thickness and attachment method defined by the complete tested assembly."},
      {title:"Adhesive or fasteners",detail:"Manufacturer-approved adhesive, mechanical attachment or a specified combination suited to the substrate and wind design."},
      {title:"Base coat and mesh",detail:"Reinforcing mesh fully embedded in base coat, with added diagonal reinforcement at opening corners and heavier mesh where required."},
      {title:"Primer and finish",detail:"A compatible primer and finish coat that establish final colour, texture and exterior weathering characteristics."},
      {title:"Accessories and sealants",detail:"Starter tracks, casing beads, expansion joints, flashings and compatible sealant joints complete the water-management strategy."},
    ]}
    technicalSections={[
      {
        eyebrow:"WATER MANAGEMENT",
        title:"Drainage EIFS, not a face-sealed shortcut.",
        text:"Current Canadian EIFS work should be detailed as a drained assembly. The water-resistive barrier remains continuous behind the insulation, while drainage channels and flashings provide a route for incidental moisture to leave the wall.",
        facts:[
          {title:"Openings",text:"Windows, doors and louvers require membrane transitions, end dams, sill drainage and compatible sealant joints."},
          {title:"Terminations",text:"Base-of-wall, roof, balcony and dissimilar-material transitions need clear drainage exits and durable flashing."},
          {title:"Penetrations",text:"Pipes, fixtures and attachments must be planned so the control layer is sealed before insulation and finish are installed."},
        ],
        images:[{src:"/images/stucco-eifs/eifs-reinforcing-mesh-base-coat-installation.webp",alt:"EIFS reinforcing mesh being embedded into base coat",caption:"Mesh must be completely embedded in the compatible base coat, with laps and added reinforcement installed to the system instructions."}],
      },
      {
        eyebrow:"SYSTEM SELECTION",
        title:"EPS and mineral-wool assemblies solve different requirements.",
        text:"Sto and DuROCK publish multiple systems rather than one universal EIFS build-up. Selection must account for substrate, insulation type, drainage method, fire-performance requirements, wind loading, impact exposure and the manufacturer’s current Canadian evaluation documents.",
        facts:[
          {title:"EPS drainage systems",text:"Lightweight EPS can incorporate vertical drainage channels and is available in several thicknesses for continuous insulation."},
          {title:"Mineral-wool systems",text:"Stone-wool systems address specifications that call for a compatible mineral insulation assembly; every component must remain within the tested system."},
          {title:"Direct-applied finishes",text:"Soffits and selected non-insulated locations may use a manufacturer’s direct-applied exterior finish system, which is distinct from a full EIFS wall assembly."},
        ],
        images:[{src:"/images/content/eifs-project.webp",alt:"Completed mixed-material commercial facade with EIFS areas",caption:"Material interfaces, joints and flashings should be coordinated before work begins."}],
      },
    ]}
    finishes={["Fine, medium and coarse acrylic textures","Smooth and stippled specialty effects","Custom colour-matched finishes","Stone, brick, concrete and wood-inspired surfaces","Dirt-resistant and water-repellent finish options","Recoat systems for future façade renewal"]}
    resources={[
      {type:"MANUFACTURER",title:"Sto Canada EIFS Systems",href:"https://www.stocanada.com/eifs-cae/",icon:"download"},
      {type:"MANUFACTURER",title:"DuROCK EIFS Systems",href:"https://www.durock.com/",icon:"download"},
    ]}
    relatedProducts={[
      {type:"MANUFACTURER SYSTEMS",title:"Sto & DuROCK EIFS",href:"/exterior-systems/stucco-eifs/durock-sto",description:"Compare the coordinated StoTherm ci, InsulROCK and PUCCS system families."},
      {type:"DESIGN OPTIONS",title:"Architectural Finishes",href:"/exterior-systems/stucco-eifs/architectural-finishes",description:"Review texture, colour and specialty surface options for the completed assembly."},
    ]}
    ctaTitle="Need an EIFS assembly reviewed?"
    ctaText="Send us the wall sections, elevations, substrate, project location and specification. CladCan can help coordinate the appropriate manufacturer system, interfaces, samples, supply and installation scope. Components from different systems should not be mixed unless the controlling manufacturer documentation expressly permits it."
  />;
}