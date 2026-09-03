const trimRoot = "/images/exterior-systems/steel";

export const steelTechnicalSections = [
  {
    eyebrow: "THERMALLY IMPROVED SUB-FRAMING",
    title: "Agway Thermal Clip System",
    text: "Agway Thermal Clips support exterior cladding while creating a thermal break in insulated wall assemblies. The 16-gauge galvanized steel clips are lined with cork tape and paired with 16-gauge L-bar sub-girts positioned to suit the insulation depth and panel orientation. The assembly can support vertical or horizontal steel cladding while helping limit direct conductive paths through the wall.",
    facts: [
      {title: "Thermal break", text: "A 1/8-inch cork thermal isolator separates the galvanized clip from the supporting assembly to reduce thermal bridging."},
      {title: "Flexible orientation", text: "Clip and sub-girt arrangements can be coordinated for vertical or horizontal steel siding and soffit layouts."},
      {title: "Project engineering", text: "Spacing varies with wind load, substrate and wall build-up. Final bracket, girt and fastener design must be verified for each project."}
    ],
    images: [
      {src: `${trimRoot}/agway-thermal-clip-wall-assembly.jpg`, alt: "Agway thermal clip exterior insulated steel cladding wall assembly", caption: "Example wall assembly and horizontal-girt arrangement from the Agway Thermal Clip technical data sheet."},
      {src: `${trimRoot}/agway-thermal-clip-span-table.jpg`, alt: "Agway four inch thermal clip span table and technical specifications", caption: "Reference span table and evaluated assembly information. Not for construction; project-specific engineering is required."}
    ],
    resource: {href: "/downloads/agway-thermal-clip-technical-data.pdf", label: "Download Agway Thermal Clip Technical Data"}
  },
  {
    eyebrow: "SYSTEM COMPLETION",
    title: "Steel Trims & Flashings",
    text: "A complete steel siding or soffit installation depends on correctly formed trims at every edge, opening and transition. Standard and custom flashing profiles manage water, protect cut panel edges and create a deliberate finish at corners, windows, doors, eaves, gables, roof-to-wall conditions and changes in material or panel direction.",
    facts: [
      {title: "Openings and drainage", text: "Drip, head, jamb, sill and door flashings direct water away from openings and protect vulnerable transitions."},
      {title: "Corners and terminations", text: "Inside corners, outside corners, J-trims, dividers and starters produce controlled edges and consistent panel alignment."},
      {title: "Custom fabrication", text: "Profile dimensions, slopes, hems, returns, metal thickness and finish are coordinated to the selected panel and field condition."}
    ],
    images: [
      {src: `${trimRoot}/steel-siding-and-soffit-standard-custom-flashing-trims-legend.webp`, alt: "Steel siding building diagram identifying standard flashing and trim locations", caption: "Typical locations for cap, endwall, divider, head, jamb, drip, door, sill and corner flashings."},
      {src: `${trimRoot}/steel-siding-and-soffit-standard-custom-flashing-trims-drip-flashing.webp`, alt: "Steel siding drip flashing drip base jamb and gable divider profiles", caption: "Drip flashing, drip base, jamb and gable-divider reference profiles."},
      {src: `${trimRoot}/steel-siding-and-soffit-standard-custom-flashing-trims-soffit-gable-eaves-starter.webp`, alt: "Steel soffit fascia gable fascia and eave starter trim profiles", caption: "Soffit, fascia, gable and eave starter profiles for steel siding and soffit assemblies."},
      {src: `${trimRoot}/steel-siding-and-soffit-standard-custom-flashing-trims-outside-inside-corner.webp`, alt: "Steel siding standard inside and outside corner trim profiles", caption: "Inside and outside corner options for different panel returns and joint conditions."},
      {src: `${trimRoot}/steel-siding-and-soffit-standard-custom-flashing-trims-hip-endwall-jtrim-track-cover-sliding-door.webp`, alt: "Steel siding hip endwall J trim ceiling trim and sliding door flashing profiles", caption: "Hip, endwall, J-trim, ceiling and sliding-door trim reference profiles."}
    ]
  }
];
