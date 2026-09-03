import ProductPage from "@/components/ProductPage";
import "../eifs.css";

export const metadata = {
  title: "Sto & DuROCK EIFS Systems Toronto | CladCan",
  description: "Compare StoTherm ci, DuROCK InsulROCK and PUCCS EIFS systems for continuous insulation, drainage, noncombustible assemblies and architectural finishes.",
};

const intro = "Sto and DuROCK are established EIFS manufacturers rather than two different cladding types. Both offer complete exterior wall systems that coordinate air and moisture control, drainage, continuous insulation, reinforcing mesh, base coat and a durable architectural finish. The correct brand and assembly depend on the specification, substrate, occupancy, fire requirements and detailing.";

export default function Page() {
  return <ProductPage
    eyebrow="EIFS SYSTEMS"
    title="Sto & DuROCK EIFS Systems"
    subtitle="One cladding category. Two complete system families."
    intro={intro}
    images={[
      "/images/stucco-eifs/eifs-stucco-modern-building-hero.webp",
      "/images/stucco-eifs/eifs-reinforcing-mesh-base-coat-installation.webp",
    ]}
    applicationLinks={[
      {label:"Sto & DuROCK",href:"/exterior-systems/stucco-eifs/durock-sto"},
      {label:"EIFS Assemblies",href:"/exterior-systems/stucco-eifs/eifs-assemblies"},
      {label:"Architectural Finishes",href:"/exterior-systems/stucco-eifs/architectural-finishes"},
    ]}
    specs={[
      {label:"System type",value:"Drainage EIFS with continuous insulation"},
      {label:"Typical insulation",value:"EPS or mineral wool, system dependent"},
      {label:"Drainage",value:"Integrated drainage plane or grooved insulation"},
      {label:"Reinforcement",value:"Alkali resistant fiberglass mesh in base coat"},
      {label:"Finish",value:"Acrylic or specialty textured finish"},
      {label:"Selection basis",value:"Tested manufacturer assembly and project code requirements"},
    ]}
    benefits={[
      {title:"Continuous insulation",text:"Exterior insulation reduces thermal bridging and helps improve the energy performance and comfort of the wall assembly."},
      {title:"Moisture management",text:"Modern drainage EIFS combines a water resistive barrier, drainage path and coordinated flashings to direct incidental moisture outward."},
      {title:"Lightweight construction",text:"EIFS provides insulation and finish in a comparatively light cladding assembly that can support new construction and retrofit work."},
      {title:"Design flexibility",text:"Finish colours, textures, reveals, curves and prefabricated details allow a broad range of architectural expressions."},
    ]}
    applications={["Commercial and institutional buildings","Multi family and high rise projects","Residential new construction and additions","Energy retrofits and façade renewals","Noncombustible assemblies where an approved system is required","Soffits, canopies and unheated spaces with a suitable direct applied system"]}
    featureImages={[
      {src:"/images/stucco-eifs/eifs-reinforcing-mesh-base-coat-installation.webp",alt:"Installer embedding reinforcing mesh in EIFS base coat over exterior insulation",caption:"Reinforcing mesh is embedded in the base coat as part of the complete EIFS assembly"},
    ]}
    systemFamilies={[
      {brand:"STO CANADA",title:"StoTherm ci Systems",description:"StoTherm ci integrates StoGuard air and moisture barriers, drainage, continuous insulation and Sto architectural finishes in coordinated wall assemblies.",options:["StoTherm ci with EPS ProD or flat sheet insulation","StoTherm ci Mineral with noncombustible stone wool insulation","StoTherm ci MVES for adhered masonry veneer finishes","Sto IMPACT fortification for enhanced impact resistance","CCMC 12416 R and referenced Canadian fire testing apply to defined assemblies"]},
      {brand:"DUROCK",title:"InsulROCK & PUCCS Systems",description:"DuROCK offers drainage EIFS assemblies with multiple barrier, insulation and reinforcement choices for low rise, commercial, ICF and code sensitive applications.",options:["InsulROCK with primary and secondary moisture control","InsulROCK NC for specified noncombustible applications","PUCCS for commercial, high rise, residential, low rise and ICF applications","PUCCS circular drainage grooves form a defined 10 mm cavity","CCMC 12969 R applies to the evaluated PUCCS system"]},
    ]}
    detailGroups={[
      {brand:"STO",title:"StoGuard air and moisture barriers",text:"The StoGuard family provides substrate appropriate air and water control behind the continuous insulation.",items:["Sto Gold Coat as a vapour permeable coating option","Sto AirSeal for air and water control","StoGuard VaporSeal where a vapour retarding layer is specified"]},
      {brand:"STO",title:"Adhesives, base coats and reinforcement",text:"Compatible adhesives and base coats establish attachment, reinforcement and a consistent substrate for the finish.",items:["Sto BTS Plus","StoPrimer Adhesive B","Sto BTS Xtra","Standard through ultra high impact reinforcing mesh","Sto Mesh Corner Bead for reinforced, straight corners"]},
      {brand:"STO",title:"Insulation and drainage",text:"The selected StoTherm ci assembly can use EPS or mineral insulation according to the system and code requirements.",items:["Sto ProD EPS with integrated V groove drainage channels","Flat sheet EPS in approved assemblies","Stone wool slab or lamella insulation in StoTherm ci Mineral"]},
      {brand:"STO",title:"Finish and specialty options",text:"Sto offers standard and specialty surfaces that can reproduce a wide range of architectural effects.",items:["Stolit textured finishes","Stolit Milano smooth or stippled effects","Lotusan dirt shedding finish technology","Stolit X, Stolit MAX and Sto Element options","StoSignature custom colour, texture and effect combinations","StoCast and lightweight masonry inspired surfaces"]},
      {brand:"DUROCK",title:"Water resistive barrier options",text:"DuROCK offers several barrier coatings selected according to substrate, vapour control and assembly requirements.",items:["Cement Bear fibre reinforced acrylic cement coating","Polar Bear factory mixed acrylic coating","Vapour Block elastomeric polymer coating","Selected barrier products can also function as adhesives or base coats in approved configurations"]},
      {brand:"DUROCK",title:"Base coats, boards and drainage",text:"DuROCK systems coordinate cementitious or polymer modified coats with flat or drainage insulation boards.",items:["Prep Coat and Prep Coat D","Jewel Stone","Flat EPS insulation board meeting CAN ULC S701","PUCCS EPS board with circular 10 mm drainage grooves","Insulation thickness starts at 25 mm, with system specific limits"]},
      {brand:"DUROCK",title:"Mesh and attachment",text:"Reinforcement and attachment are selected for substrate, exposure and impact requirements.",items:["Alkali resistant fiberglass mesh in five weight categories","Impact Mesh up to 15 oz for enhanced impact resistance","Corrosion resistant screws","Low profile polypropylene washers for mechanical attachment"]},
      {brand:"DUROCK",title:"Complementary systems",text:"DuROCK also provides related finish systems for traditional appearance and specialized locations.",items:["Stucco Plus with fibre reinforced base coat and polymer finish","Stucco Plus RS with an added rainscreen gap","DEFS for suitable ventilated soffits, canopies and unheated spaces","FibreCoat for enhanced resistance to concentrated woodpecker impact"]},
    ]}
    components={[
      {title:"Substrate",detail:"Approved exterior sheathing, concrete, masonry or another substrate defined by the selected system."},
      {title:"Air and water barrier",detail:"A compatible liquid applied or sheet membrane creates the primary control layer behind the insulation."},
      {title:"Drainage and insulation",detail:"Flat or grooved insulation supports thermal continuity while the drainage path manages incidental moisture."},
      {title:"Adhesive or fasteners",detail:"Manufacturer approved attachment methods secure the insulation to the prepared substrate."},
      {title:"Mesh and base coat",detail:"Fiberglass reinforcing mesh is fully embedded in the base coat, with heavier mesh where greater impact resistance is required."},
      {title:"Primer and finish",detail:"The compatible primer and textured finish complete the colour, weather protection and architectural appearance."},
    ]}
    finishes={["Fine and medium acrylic textures","Smooth and stippled effects","Stone, brick and wood inspired finishes","StoSignature custom textures","Custom colour matching","Water repellent and dirt resistant coating options"]}
    resources={[
      {type:"MANUFACTURER",title:"Sto Canada EIFS Systems",href:"https://www.stocanada.com/eifs-cae/",icon:"download"},
      {type:"MANUFACTURER",title:"DuROCK EIFS Systems",href:"https://www.durock.com/",icon:"download"},
    ]}
    relatedProducts={[
      {type:"SYSTEM GUIDE",title:"EIFS Assemblies",href:"/exterior-systems/stucco-eifs/eifs-assemblies",description:"Review the functional layers and coordination points in a complete EIFS wall assembly."},
      {type:"DESIGN OPTIONS",title:"Architectural Finishes",href:"/exterior-systems/stucco-eifs/architectural-finishes",description:"Explore colours, textures, reveals and specialty surface effects."},
    ]}
    ctaTitle="Need help selecting an EIFS system?"
    ctaText="Send us the wall type, elevations, project location and specification. CladCan can help coordinate the manufacturer system, insulation, drainage, finish samples and installation scope. Components from different manufacturers should not be mixed unless the controlling documentation expressly permits it."
  />;
}