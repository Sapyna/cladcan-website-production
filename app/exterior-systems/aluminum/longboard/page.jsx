import ProductTabbedPage from "@/components/ProductTabbedPage";

export const metadata={
  title:"Longboard Tongue & Groove Aluminum Siding & Soffit | CladCan",
  description:"Explore Longboard Tongue & Groove aluminum siding and soffit profiles, trims, finishes and system specifications available through CladCan."
};

export default function Page(){
  return <ProductTabbedPage
    eyebrow="ALUMINUM SIDING & SOFFIT"
    title="Longboard® Tongue & Groove"
    subtitle="Architectural aluminum for adaptable cladding and soffit applications."
    intro="Longboard® Tongue & Groove is an extruded architectural aluminum plank system for interior and exterior cladding, siding and soffit applications. The lightweight, non-combustible system supports horizontal or vertical layouts, long plank runs and coordinated trims with durable architectural finishes."
    heroImage="/images/exterior-systems/longboard/longboard-tongue-groove-aluminum-cladding-project.webp"
    images={[
      "/images/exterior-systems/longboard/longboard-tongue-groove-aluminum-cladding-project.webp",
      "/images/exterior-systems/longboard/longboard-woodgrain-aluminum-soffit-installation.webp",
      "/images/exterior-systems/longboard/longboard-tongue-groove-system-specifications.webp",
      "/images/exterior-systems/longboard/longboard-aluminum-profile-collection.png",
      "/images/exterior-systems/longboard/longboard-aluminum-trim-components.png",
      "/images/exterior-systems/longboard/longboard-aluminum-colour-finishes.png"
    ]}
    manufacturer="Longboard Architectural Products"
    specs={[
      {label:"Material",value:"100% extruded architectural aluminum"},
      {label:"Standard length",value:"Up to 24 ft"},
      {label:"Orientation",value:"Horizontal or vertical"},
      {label:"Applications",value:"Cladding, siding, soffit and selected interior applications"},
      {label:"Combustibility",value:"Non-combustible aluminum"},
      {label:"Finish system",value:"AAMA 2604 / 2605-certified powder finishes"}
    ]}
    applications={["Exterior cladding","Residential siding","Commercial façades","Soffits and exterior ceilings","Interior architectural features","Horizontal or vertical plank layouts"]}
    benefits={[
      {title:"Extruded Aluminum",text:"Lightweight architectural aluminum provides durable exterior performance with precise plank geometry."},
      {title:"Non-Combustible",text:"Aluminum construction provides a non-combustible material option for suitable wall and soffit applications."},
      {title:"Long Plank Lengths",text:"Up to 24-foot lengths support clean uninterrupted architectural runs."},
      {title:"Two Orientations",text:"Profiles can be installed horizontally or vertically to suit the design intent."},
      {title:"Weather Resistant",text:"Architectural coating systems support long-term resistance to exterior weather exposure."},
      {title:"Broad Finish Range",text:"Wood-inspired, solid and specialty finish families support varied architectural palettes."}
    ]}
    profiles={[
      {title:"V-Groove Profiles",items:[{label:"Expression",value:"Linear closed-joint plank with defined V-shaped reveal"}]},
      {title:"Smooth Profiles",items:[{label:"Expression",value:"Clean continuous plank surface"}]},
      {title:"Channel Profiles",items:[{label:"Expression",value:"Deeper reveal and shadow-line option"}]},
      {title:"Perforated Profiles",items:[{label:"Application",value:"Ventilated soffit and ceiling conditions, product dependent"}]},
      {title:"Bevel / Castellation / Quick Screen",items:[{label:"Application",value:"Specialty architectural expressions within the Longboard profile family"}]}
    ]}
    components={[
      {title:"Tongue & Groove Planks",detail:"Extruded profiles form the primary siding, cladding or soffit surface."},
      {title:"Attachment Components",detail:"System-specific attachment pieces coordinate the plank installation and substrate."},
      {title:"Trim Components",detail:"Matching corners, transitions and termination profiles complete the installation."}
    ]}
    technicalSections={[
      {eyebrow:"SYSTEM DETAILS",title:"Tongue & Groove cladding system.",text:"The system combines extruded aluminum planks with coordinated attachment and finishing components. Profile configurations support different joint expressions, ventilation requirements and architectural intents.",images:[{src:"/images/exterior-systems/longboard/longboard-tongue-groove-system-specifications.webp",alt:"Longboard Tongue and Groove system specifications",caption:"System specifications and installation details."}]},
      {eyebrow:"PROFILE COLLECTION",title:"Plank profiles for design flexibility.",text:"The Longboard profile family includes V-Groove, Smooth, Channel, Perforated, Bevel, Castellation and Quick Screen expressions.",images:[{src:"/images/exterior-systems/longboard/longboard-aluminum-profile-collection.png",alt:"Longboard aluminum profile collection",caption:"Longboard profile collection."}]}
    ]}
    finishes={["Woodgrain finish families","Solid architectural colours","Stone-inspired appearances","Brick-inspired appearances","Terracotta-inspired appearances","Aged-metal specialty finishes","AAMA 2604 / 2605 powder-coated finishes"]}
    visuals={[
      {image:"/images/exterior-systems/longboard/longboard-woodgrain-aluminum-soffit-installation.webp",title:"Woodgrain Soffit",caption:"Longboard woodgrain aluminum soffit installation.",alt:"Longboard woodgrain aluminum soffit installation"},
      {image:"/images/exterior-systems/longboard/longboard-aluminum-trim-components.png",title:"Trim Components",caption:"Coordinated trim profiles and dimensions.",alt:"Longboard aluminum trim components"},
      {image:"/images/exterior-systems/longboard/longboard-aluminum-colour-finishes.png",title:"Superior Finishes",caption:"Woodgrain, solid and specialty finish examples.",alt:"Longboard architectural aluminum finishes"}
    ]}
    ctaTitle="Considering Longboard® for your project?"
    ctaText="Talk with CladCan about profiles, finishes, samples, quantities, trims and project-specific installation requirements."
  />;
}
