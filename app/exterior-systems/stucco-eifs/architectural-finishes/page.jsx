import ProductPage from "@/components/ProductPage";
import "../eifs.css";

export const metadata = {
  title: "EIFS Architectural Finishes & Colours Toronto | CladCan",
  description: "Explore EIFS finish textures, custom colours, smooth and modeled effects, masonry-inspired surfaces, sample panels and finish-selection considerations.",
};

const intro = "EIFS architectural finishes establish the final colour, texture and visual depth of the façade. Beyond traditional stucco textures, coordinated finish systems can create smooth, modeled, concrete-inspired, stone-like and custom effects while remaining part of a lightweight exterior assembly.";

export default function Page() {
  return <ProductPage
    eyebrow="EIFS FINISHES"
    title="Architectural Finishes"
    subtitle="Colour, texture and crafted surface effects."
    intro={intro}
    images={[
      "/images/exterior-systems/stucco-eifs-exterior-cladding-ontario.jpeg",
      "/images/stucco-eifs/eifs-stucco-modern-building-hero.webp",
      "/images/content/eifs-project.webp",
    ]}
    applicationLinks={[
      {label:"Sto & DuROCK",href:"/exterior-systems/stucco-eifs/durock-sto"},
      {label:"EIFS Assemblies",href:"/exterior-systems/stucco-eifs/eifs-assemblies"},
      {label:"Architectural Finishes",href:"/exterior-systems/stucco-eifs/architectural-finishes"},
    ]}
    specs={[
      {label:"Primary finish",value:"Ready-mixed acrylic textured coating"},
      {label:"Texture range",value:"Fine, sand, swirl, freeform, smooth and modeled effects"},
      {label:"Colour",value:"Manufacturer standard and custom colour matching"},
      {label:"Specialty looks",value:"Concrete, stone, brick, wood and cast profiles"},
      {label:"Design verification",value:"Physical sample and project mock-up recommended"},
      {label:"Maintenance",value:"Cleaning, recoating and localized repair as required"},
    ]}
    benefits={[
      {title:"Broad design range",text:"Aggregate size, application technique and specialty materials create finishes ranging from restrained and uniform to highly expressive."},
      {title:"Integrated colour",text:"Factory tinting and manufacturer colour systems support coordinated façades without relying on a separate field-painted appearance."},
      {title:"Lightweight expression",text:"Reveals, bands, profiles and specialty finishes can suggest masonry or cast elements without the weight of traditional assemblies."},
      {title:"Renewable surface",text:"Compatible cleaning, recoating and repair programs can refresh colour and extend the appearance of an existing EIFS façade."},
    ]}
    applications={[
      "Commercial and institutional feature façades",
      "Residential and multi-family exterior walls",
      "Curved walls, bands, cornices and reveals",
      "Concrete-inspired modern architecture",
      "Masonry- and stone-inspired accent areas",
      "EIFS restoration and colour renewal",
    ]}
    components={[
      {title:"Prepared reinforced base coat",detail:"The finish substrate must be fully cured, uniform and prepared according to the selected system requirements."},
      {title:"Primer",detail:"A compatible tinted or untinted primer helps equalize absorption, improve application and support uniform colour."},
      {title:"Textured finish",detail:"Ready-mixed acrylic finish is selected by aggregate size, pattern, colour and the approved application method."},
      {title:"Specialty effect layer",detail:"Smooth, modeled, metallic, concrete-inspired or other specialty effects may require additional products and trained application."},
      {title:"Profiles and reveals",detail:"Prefabricated shapes and accurately planned reveals create shadow lines, bands, cornices and dimensional façade features."},
      {title:"Protective coating",detail:"A compatible coating may be specified to adjust colour, improve dirt resistance or renew an existing finish."},
    ]}
    technicalSections={[
      {
        eyebrow:"TEXTURE FAMILIES",
        title:"From consistent acrylic texture to hand-crafted effects.",
        text:"Standard textured finishes use controlled aggregate and application technique to create repeatable sand, swirl or freeform patterns. Sto Stolit products include premium acrylic textured options, while StoSignature combines colour, texture and application technique for custom effects. DuROCK offers compatible finish coats and specialty surfaces within its systems.",
        facts:[
          {title:"Fine and sand textures",text:"Subtle aggregate creates a clean, contemporary surface but requires careful substrate preparation and consistent workmanship."},
          {title:"Swirl and freeform",text:"More visible texture introduces movement and can be useful on larger elevations where light and shadow matter."},
          {title:"Smooth and modeled effects",text:"Products such as Stolit Milano and layered specialty techniques can produce smooth, mottled or concrete-like appearances."},
        ],
        images:[{src:"/images/stucco-eifs/eifs-stucco-modern-building-hero.webp",alt:"Modern building with smooth white and dark architectural wall finishes",caption:"Smooth surfaces, crisp reveals and curved forms depend on accurate substrate preparation and skilled finish application."}],
      },
      {
        eyebrow:"SPECIALTY SURFACES",
        title:"Design beyond conventional stucco.",
        text:"Manufacturer finish programs can create masonry-inspired, wood-inspired and cast architectural effects. StoCast and StoSignature expand the visual language of the façade, while dirt-resistant technologies such as Stolit Lotusan can be considered where the compatible system and exposure suit the project.",
        facts:[
          {title:"Masonry-inspired",text:"Brick, stone and concrete effects should be reviewed at full scale so joint pattern, depth and colour variation read naturally."},
          {title:"Dirt resistance",text:"Stolit Lotusan uses Lotus-Effect technology to reduce dirt pick-up and help rain carry loose surface contamination away."},
          {title:"Dimensional features",text:"Lightweight profiles, bands and shapes must be detailed for drainage, movement and impact exposure rather than treated as decoration alone."},
        ],
        images:[{src:"/images/content/eifs-project.webp",alt:"Commercial facade combining textured wall finishes and other cladding materials",caption:"A project mock-up helps coordinate finish colour, texture, joint alignment and transitions to adjacent cladding."}],
      },
      {
        eyebrow:"COLOUR & MOCK-UPS",
        title:"Approve the finish in real light and at useful scale.",
        text:"Screen colours are only a starting point. Texture, sheen, wall orientation and changing daylight alter the perceived colour. A physical sample and sufficiently large project mock-up allow the design team to evaluate workmanship, transitions and repair expectations before full installation.",
        facts:[
          {title:"Colour selection",text:"Confirm current manufacturer colour availability and any limitations for dark or highly saturated colours in the selected assembly."},
          {title:"Batch consistency",text:"Order and stage material to reduce visible variation, and maintain consistent mixing, water addition and application across natural breaks."},
          {title:"Future repairs",text:"Retain approved colour, texture and product records; localized repairs are less noticeable when they align with joints, reveals or complete wall areas."},
        ],
        images:[{src:"/images/exterior-systems/stucco-eifs-exterior-cladding-ontario.jpeg",alt:"Contemporary Toronto residence with contrasting smooth exterior finishes",caption:"Finish colour should be evaluated alongside metal, glazing, soffit and adjacent cladding under exterior daylight."}],
      },
    ]}
    finishes={[
      "Stolit fine, sand, swirl and freeform acrylic textures",
      "Stolit Milano smooth, stippled and concrete-inspired effects",
      "Stolit Lotusan dirt-resistant textured finish",
      "StoSignature custom colour, texture and effect combinations",
      "StoCast lightweight masonry-inspired surfaces",
      "DuROCK acrylic and specialty finish options",
      "Custom reveals, bands, cornices and prefabricated shapes",
      "Compatible recoating and façade-renewal finishes",
    ]}
    resources={[
      {type:"PRODUCT",title:"Sto Stolit Architectural Finish",href:"https://www.stocanada.com/sto_products/stolit-1-0/",icon:"download"},
      {type:"PRODUCT",title:"Sto Stolit Lotusan Finish",href:"https://www.stocorp.com/sto_products/stolit-lotusan-finish/",icon:"download"},
      {type:"MANUFACTURER",title:"DuROCK Finish Systems",href:"https://www.durock.com/",icon:"download"},
    ]}
    relatedProducts={[
      {type:"WALL ASSEMBLY",title:"EIFS Assemblies",href:"/exterior-systems/stucco-eifs/eifs-assemblies",description:"Review the control layers, insulation, drainage, reinforcement and accessories behind the finish."},
      {type:"MANUFACTURER SYSTEMS",title:"Sto & DuROCK EIFS",href:"/exterior-systems/stucco-eifs/durock-sto",description:"Compare the complete manufacturer system families available for project coordination."},
    ]}
    ctaTitle="Need finish samples or a project mock-up?"
    ctaText="Share the elevations, desired colour, texture references and adjacent materials. CladCan can help narrow the compatible finish options, arrange samples and coordinate a mock-up before full façade installation."
  />;
}