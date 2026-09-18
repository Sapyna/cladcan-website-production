import ProductTabbedPage from "@/components/ProductTabbedPage";

export const metadata={title:"FastPlank® Premium Aluminum Siding & Soffit | CladCan",description:"FastPlank aluminum siding and soffit: installation, performance, profiles, trims and colour options."};

const benefits=[
  {title:"Non-Combustible",text:"FastPlank® offers superior fire resistance and meets key safety standards, including California’s Wildland Urban Interface (WUI), ASTM E136, CAN/ULC S114, ASTM E84, and CAN/ULC S102."},
  {title:"UV & Fade Resistant",text:"Built from premium 6063 T6 extruded aluminum, FastPlank® is powder-coated and treated to resist UV damage and fading—backed by a 20-year finish warranty."},
  {title:"Hail & Impact Resistant",text:"FastPlank® has earned a Very Severe Hail (VSH) rating in third-party tests, showing no cracks or splits after impact from 2-inch ice balls at over 150 feet per second."},
  {title:"Built-In Rainscreen",text:"Engineered as a pressure-equalized rainscreen, FastPlank® is AAMA 508-certified. Its design includes a 3/8-inch air cavity to exceed code requirements and direct water away from the structure."},
  {title:"Corrosion & Salt Spray Resistant",text:"Tested to ASTM B117-73 standards, FastPlank® is rust-resistant and anti-corrosive, certified under AAMA 1402-9—ideal for coastal or harsh environments."},
  {title:"Wind Resistant",text:"Designed to withstand extreme weather, FastPlank® has passed wind load testing on multi-story buildings, ensuring strong performance and stability during high winds and storms."}
];

const profiles=[
  {title:"P 44 V · V-Notch™ 4-inch Plank",items:[{label:"Bundle",value:"10 planks"},{label:"Length",value:"16 ft (192 in) / 4.8768 m"},{label:"Use",value:"Narrow siding or soffit plank with V-Notch contour"}]},
  {title:"P 46 V · V-Notch™ 6-inch Plank",items:[{label:"Bundle",value:"6 planks"},{label:"Length",value:"16 ft (192 in) / 4.8768 m"},{label:"Use",value:"Broader siding or soffit plank with V-Notch contour"}]},
  {title:"P 47 V · 4-inch Perforated Soffit Plank",items:[{label:"Bundle",value:"10 planks"},{label:"Length",value:"16 ft (192 in) / 4.8768 m"},{label:"Net free air",value:"7.7 in²/lin ft or 163.3 cm²/lin m"}]}
];

export default function Page(){
  return <ProductTabbedPage
    eyebrow="ALUMINUM SIDING & SOFFIT"
    title="FastPlank® Premium Siding & Soffit"
    subtitle="Premium aluminum siding and soffit with an integrated rainscreen."
    intro="FastPlank® Systems offers a sophisticated aluminum plank siding solution designed to streamline installation, enhance curb appeal and provide long-term durability. The system combines the visual warmth of wood-inspired finishes with lightweight extruded aluminum and a pressure-equalized rainscreen design."
    heroImage="/images/source-library/aluminum/fastplank/hero.webp"
    images={[
      "/images/source-library/aluminum/fastplank/hero.webp",
      "/images/exterior-systems/fastplank/fastplank-aluminum-soffit-installation.webp",
      "/images/exterior-systems/fastplank/fastplank-clip-slide-installation-system.webp",
      "/images/exterior-systems/fastplank/fastplank-trim-components.webp",
      "/images/exterior-systems/fastplank/fastplank-solid-woodgrain-colours.webp",
      "/images/exterior-systems/fastplank/fastplank-special-order-woodgrain-colours.webp"
    ]}
    manufacturer="FastPlank Systems"
    specs={[
      {label:"Material",value:"6063 T6 extruded aluminum"},
      {label:"Standard length",value:"16 ft / 4.8768 m"},
      {label:"Attachment",value:"Patented Clip & Slide™ system"},
      {label:"Rainscreen",value:"Pressure-equalized system with 3/8-inch air cavity"},
      {label:"Finish warranty",value:"20 years"},
      {label:"Product warranty",value:"50 years"}
    ]}
    applications={["Exterior siding","Soffits and covered ceilings","Residential façades","Commercial façades","Mixed-material feature walls","Replacement for selected wood, vinyl or fibre-cement applications"]}
    benefits={benefits}
    profiles={profiles}
    components={[
      {title:"Clip & Slide™ Backplates",detail:"Backplates are installed first, followed by snap-in planks at coordinated spacing."},
      {title:"Plank Profiles",detail:"P 44 V, P 46 V and perforated P 47 V profiles support siding and soffit layouts."},
      {title:"Trim Components",detail:"Coordinated aluminum trims complete corners, transitions, openings and terminations."}
    ]}
    technicalSections={[
      {eyebrow:"INSTALLATION",title:"Fast and simple installation.",text:"FastPlank® uses a patented two-piece snap-together system intended to improve job-site efficiency. Backplates are installed first and the lightweight planks snap into place. Extruded aluminum cuts cleanly with an appropriate non-ferrous carbide blade.",images:[{src:"/images/exterior-systems/fastplank/fastplank-clip-slide-installation-system.webp",alt:"FastPlank Clip and Slide aluminum plank attachment system",caption:"Clip & Slide™ attachment system."}]},
      {eyebrow:"TRIM COMPONENTS",title:"Profiles that complete the system.",text:"Matching trim components coordinate corners, edges, transitions and termination conditions around the plank system.",images:[{src:"/images/exterior-systems/fastplank/fastplank-trim-components.webp",alt:"FastPlank aluminum trim components and clips",caption:"FastPlank trim and attachment components."}]}
    ]}
    finishes={["Standard solid colours","Stock woodgrain finishes","Special-order woodgrain finishes","ColorMatch® custom solid colours","Powder-coated exterior finish"]}
    visuals={[
      {image:"/images/exterior-systems/fastplank/fastplank-aluminum-soffit-installation.webp",title:"Installed Soffit",caption:"Woodgrain aluminum soffit application.",alt:"FastPlank woodgrain aluminum soffit installation"},
      {image:"/images/exterior-systems/fastplank/fastplank-solid-woodgrain-colours.webp",title:"Stock Colours",caption:"FastPlank solid and woodgrain colour options.",alt:"FastPlank stock solid and woodgrain aluminum colour options"},
      {image:"/images/exterior-systems/fastplank/fastplank-special-order-woodgrain-colours.webp",title:"Special-Order Woodgrain",caption:"Additional woodgrain finish options.",alt:"FastPlank special-order woodgrain aluminum finishes"}
    ]}
    ctaTitle="Considering FastPlank® for your project?"
    ctaText="Share your elevations, siding or soffit scope and preferred finish. CladCan can help coordinate profiles, trims, samples, quantities and installation requirements."
  />;
}
