import ProductTabbedPage from "@/components/ProductTabbedPage";

export const metadata={title:"Architectural Aluminum Battens & Privacy Screens | CladCan",description:"Explore architectural aluminum battens for privacy screens, walls, ceilings and louvers, with flexible brackets, woodgrain finishes and easy installation."};

const benefits=[
  {title:"Fast Installation",text:"A straightforward batten and bracket system designed for quick, efficient installation."},
  {title:"Lightweight Construction",text:"Easy to handle, position and cut on site without specialized installation tools."},
  {title:"Flexible Lengths",text:"Supplied in a standard 16-foot length, with 12-foot and 8-foot options available."},
  {title:"Zero Maintenance",text:"Durable aluminum performance without the recurring staining or sealing required by natural wood."},
  {title:"Fire & Corrosion Resistant",text:"A resilient aluminum solution suited to demanding exterior and architectural applications."},
  {title:"Lifetime Warranty",text:"Backed by a lifetime warranty for long-term confidence in the finished installation."}
];

export default function Page(){
  return <ProductTabbedPage
    eyebrow="ALUMINUM BATTENS"
    title="Architectural Aluminum Battens"
    subtitle="Linear aluminum profiles for screens, walls, ceilings and louvers."
    intro="CladCan’s architectural aluminum battens give designers freedom to create horizontal or vertical linear forms while combining low-maintenance performance with straightforward installation. The system can be used for privacy screens, louvers, feature walls, soffits and ceilings with woodgrain or solid finishes."
    heroImage="/images/exterior-systems/architectural-battens/architectural-aluminum-battens-residential-project-hero.webp"
    images={[
      "/images/exterior-systems/architectural-battens/architectural-aluminum-battens-residential-project-hero.webp",
      "/images/exterior-systems/architectural-battens/woodgrain-aluminum-batten-louver-feature-wall.webp",
      "/images/exterior-systems/architectural-battens/aluminum-batten-multi-residential-facade-project.webp",
      "/images/exterior-systems/architectural-battens/woodgrain-aluminum-battens-residential-exterior.webp",
      "/images/exterior-systems/architectural-battens/architectural-aluminum-batten-available-sizes-certifications.webp",
      "/images/exterior-systems/architectural-battens/aluminum-batten-sm-cc-bc-bracket-options.webp",
      "/images/exterior-systems/architectural-battens/architectural-aluminum-batten-woodgrain-solid-colours.webp"
    ]}
    specs={[
      {label:"Standard length",value:"16 ft"},
      {label:"Other lengths",value:"12 ft and 8 ft options"},
      {label:"Orientation",value:"Horizontal or vertical"},
      {label:"Applications",value:"Walls, ceilings, screens and louvers"},
      {label:"Attachment",value:"SM, CC and BC bracket options"},
      {label:"Finish families",value:"Woodgrain and solid colours"}
    ]}
    applications={["Privacy screens","Exterior feature walls","Soffits and ceilings","Architectural louvers","Horizontal wall layouts","Vertical façade layouts"]}
    benefits={benefits}
    profiles={[
      {title:"16 ft Standard Length",items:[{label:"Use",value:"Long clean runs with fewer joints"}]},
      {title:"12 ft Available Option",items:[{label:"Use",value:"Intermediate layouts and material handling"}]},
      {title:"8 ft Available Option",items:[{label:"Use",value:"Shorter features and tighter access conditions"}]}
    ]}
    components={[
      {title:"SM · Surface-Mount Bracket",detail:"Streamlined mounting option for controlled batten placement on prepared walls and ceilings."},
      {title:"CC · Concealed-Connection Bracket",detail:"Supports a clean appearance where the connection should remain visually discreet."},
      {title:"BC · Base-Connection Bracket",detail:"Stable attachment solution for floor, ground and other base-mounted configurations."}
    ]}
    technicalSections={[
      {eyebrow:"AVAILABLE SIZES",title:"Lengths and profiles planned around the project.",text:"Standard and optional lengths support long runs, shorter architectural features and project-specific layouts.",images:[{src:"/images/exterior-systems/architectural-battens/architectural-aluminum-batten-available-sizes-certifications.webp",alt:"Architectural aluminum batten sizes and certifications",caption:"Available profile sizes, lengths and certifications."}]},
      {eyebrow:"BRACKET OPTIONS",title:"Reliable attachment wherever the battens run.",text:"SM, CC and BC bracket configurations support wall, ceiling, horizontal, vertical and base-mounted layouts.",images:[{src:"/images/exterior-systems/architectural-battens/aluminum-batten-sm-cc-bc-bracket-options.webp",alt:"SM CC and BC aluminum batten bracket options",caption:"Bracket options for different mounting conditions."}]}
    ]}
    finishes={["Woodgrain finish family","Solid colour finish family","Project-coordinated colour selection"]}
    visuals={[
      {image:"/images/exterior-systems/architectural-battens/woodgrain-aluminum-batten-louver-feature-wall.webp",title:"Louver Feature Wall",caption:"Woodgrain battens used as a residential louver feature.",alt:"Woodgrain aluminum batten louver feature wall"},
      {image:"/images/exterior-systems/architectural-battens/aluminum-batten-multi-residential-facade-project.webp",title:"Multi-Residential Façade",caption:"Vertical battens create depth and screening.",alt:"Architectural aluminum battens on multi-residential facade"},
      {image:"/images/exterior-systems/architectural-battens/architectural-aluminum-batten-woodgrain-solid-colours.webp",title:"Finish Range",caption:"Woodgrain, textured and solid colour examples.",alt:"Architectural aluminum batten finishes"}
    ]}
    ctaTitle="Plan the right batten layout for your project."
    ctaText="Share drawings, dimensions or inspiration images and CladCan can coordinate direction, lengths, brackets, finishes and installation requirements."
  />;
}
