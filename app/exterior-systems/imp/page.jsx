import ProductPage from "@/components/ProductPage";

export const metadata={
  title:"Insulated Metal Panels (IMP) | CladCan",
  description:"Explore high-performance insulated metal wall and roof panels from Norbec and Vicwest for commercial, industrial, cold-storage, agricultural and architectural projects."
};

const imageRoot="/images/exterior-systems/imp";

export default function Page(){return <ProductPage
  eyebrow="HIGH-PERFORMANCE BUILDING ENVELOPE"
  title="Insulated Metal Panels"
  subtitle="Insulation, weather control and exterior finish in one coordinated panel."
  intro="Insulated Metal Panels (IMPs) are factory-made envelope components with metal facings bonded to a rigid insulation core. A single panel can provide exterior finish, continuous insulation and coordinated air, water and vapour control, helping teams enclose commercial, industrial, agricultural and temperature-controlled buildings quickly and consistently."
  images={[`${imageRoot}/insulated-metal-panel-commercial-facade-detail.webp`,`${imageRoot}/norbec-insulated-metal-panel-commercial-building.webp`,`${imageRoot}/insulated-metal-panel-wall-system-render.webp`,`${imageRoot}/norbec-insulated-metal-panel-joint-render.webp`]}
  specs={[
    {label:"System type",value:"Factory-insulated metal wall and roof panels"},
    {label:"Core options",value:"PIR / PUR foam or mineral wool, product dependent"},
    {label:"Installation",value:"Horizontal or vertical, system dependent"},
    {label:"Envelope functions",value:"Insulation, air, vapour and water control with exterior finish"},
    {label:"Primary suppliers",value:"Norbec and Vicwest / All Weather Insulated Panels"},
    {label:"Project selection",value:"Core, thickness, joint, span, fire performance and finish"}
  ]}
  benefits={[
    {title:"High thermal efficiency",text:"Continuous rigid insulation delivers strong thermal performance in a relatively slim, repeatable wall or roof assembly."},
    {title:"Rapid enclosure",text:"Factory-integrated layers reduce the number of separate materials and installation steps required on site."},
    {title:"Weather continuity",text:"Engineered interlocking joints help coordinate air, vapour and water control across the panel field."},
    {title:"Architectural flexibility",text:"Smooth, striated, micro-ribbed, fluted and embossed faces support both utilitarian and design-focused buildings."}
  ]}
  applications={["Cold storage, refrigerated warehouses and food-processing facilities","Commercial, industrial and distribution buildings","Agricultural and controlled-environment structures","Schools, healthcare and institutional buildings","Architectural façades and mixed-material feature elevations","Insulated roof assemblies where the selected product is approved"]}
  components={[
    {title:"Exterior metal facing",detail:"Factory-coated steel or aluminum protects the insulation core and creates the architectural exterior surface."},
    {title:"Insulated core",detail:"PIR, PUR or mineral-wool cores are selected according to thermal, fire, acoustic and occupancy requirements."},
    {title:"Interior liner",detail:"The interior metal face completes the composite panel and can provide a durable, washable finished surface."},
    {title:"Interlocking joint",detail:"Product-specific tongue-and-groove or pressure-equalized joints coordinate panel alignment and envelope continuity."},
    {title:"Concealed attachment",detail:"Many wall systems conceal structural fasteners within the joint for a clean finished appearance."},
    {title:"Trims and flashings",detail:"Base, head, corner, opening, roof and transition flashings complete drainage and air-barrier continuity."}
  ]}
  technicalSections={[
    {
      eyebrow:"SUPPLIER SYSTEMS",
      title:"Norbec IMP Solutions",
      text:"Norbec offers several IMP families for building envelopes, controlled environments and interior partitions. NOREX uses a closed-cell polyisocyanurate core for high-efficiency exterior assemblies; NOREX-M supports vertical, horizontal or diagonal layouts; NOREX-S targets controlled and refrigerated environments; NOREX-IN is designed for interior applications; and NOROC uses a rock-wool core where enhanced fire and acoustic performance are priorities.",
      facts:[
        {title:"NOREX family",text:"PIR-core architectural panels combine thermal insulation, pressure-equalized rainscreen joints and concealed anchoring for exterior envelopes."},
        {title:"NOROC fire-rated panel",text:"The mineral-fibre core supports non-combustible assemblies and published fire-resistance options from 45 minutes to three hours, depending on system thickness and configuration."},
        {title:"Profiles and design",text:"Silkline, micro-ribbed, grooved and smooth face options can be combined with architectural fins and a broad range of colours and finishes."}
      ],
      images:[
        {src:`${imageRoot}/norbec-insulated-metal-panel-commercial-building.webp`,alt:"Commercial building clad with Norbec insulated metal panels",caption:"Norbec insulated metal panels can combine clean architectural elevations with continuous thermal performance."},
        {src:`${imageRoot}/norbec-insulated-metal-panel-joint-render.webp`,alt:"Norbec insulated metal panel concealed joint system",caption:"Typical concealed-joint insulated metal panel configuration."}
      ],
      resource:{href:"https://norbec.com/products/insulated-metal-panels-2/",label:"Explore Norbec IMP Systems"}
    },
    {
      eyebrow:"SUPPLIER SYSTEMS",
      title:"Vicwest IMP Solutions",
      text:"Vicwest supplies insulated metal wall and roof systems through All Weather Insulated Panels. The wall-panel range includes Flat, Mesa, Striated and AdobeTexture expressions, plus mineral-wool fire-rated options. Roof selections include insulated standing-seam and through-fastened systems. Product selection should be based on the required insulation value, fire rating, span, joint geometry, substrate and exterior profile.",
      facts:[
        {title:"Architectural wall faces",text:"Flat and Striated panels create refined façades, Mesa provides an economical industrial profile, and AdobeTexture offers a multi-textured stucco-like appearance."},
        {title:"Fire-rated options",text:"Selected mineral-wool wall systems are available in published one-, two- and three-hour fire-rated configurations; the complete tested assembly must be specified."},
        {title:"Roof and wall coordination",text:"Insulated wall and roof families allow thermal, weather and finish requirements to be coordinated across the complete building enclosure."}
      ],
      images:[
        {src:`${imageRoot}/insulated-metal-panel-commercial-facade-detail.webp`,alt:"Vicwest-style insulated metal panel commercial façade detail",caption:"Insulated wall panels provide a durable exterior skin and continuous insulated enclosure."},
        {src:`${imageRoot}/insulated-metal-panel-wall-system-render.webp`,alt:"Dark insulated metal wall panel system with concealed joints",caption:"Panel faces, insulated cores and interlocking joints form one factory-manufactured component."}
      ],
      resource:{href:"https://www.vicwest.com/ca/en/products/all-vicwest-product/awip-insulated-metal-wall-panels/",label:"Explore Vicwest IMP Systems"}
    }
  ]}
  finishes={["Smooth and no-profile architectural faces","Silkline and striated profiles","Micro-ribbed and fluted profiles","Mesa and embossed industrial finishes","PVDF and SMP coating families, product dependent","Standard, custom, metallic and high-reflectance colours"]}
  relatedProducts={[
    {type:"EXTERIOR SYSTEM",title:"Steel Siding & Soffit",description:"Profiled steel cladding for efficient commercial and industrial envelopes.",href:"/exterior-systems/steel"},
    {type:"EXTERIOR SYSTEM",title:"Aluminum Plate Panels",description:"Large-format architectural aluminum panels for modular rainscreen façades.",href:"/exterior-systems/app"}
  ]}
  ctaTitle="Considering insulated metal panels for your project?"
  ctaText="Send us your elevations, specifications, temperature requirements, fire-resistance criteria and project schedule. CladCan can help compare Norbec and Vicwest systems, coordinate panel layouts and plan material supply and installation."
/>}
