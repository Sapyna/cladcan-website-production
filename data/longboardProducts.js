const commonFinishes = [
  "Woodgrain finishes",
  "Solid architectural colours",
  "Naturally aged metal finishes",
  "Specialty and custom-colour options",
];

const commonResources = (manufacturerUrl) => [
  {type:"MANUFACTURER",title:"Official Product Information",href:manufacturerUrl,icon:"document"},
  {type:"TECHNICAL",title:"BIM, CAD & PDF Drawings",href:"https://longboardproducts.com/resources/bim-cad-pdf-drawings/exterior-drawings",icon:"drawing"},
  {type:"TECHNICAL",title:"Exterior Product Specifications",href:"https://longboardproducts.com/resources/technical-documentation/specifications/exterior-products",icon:"document"},
  {type:"SUBMITTAL",title:"Exterior Product Submittal Packages",href:"https://longboardproducts.com/resources/technical-documentation/submittal-packages/exterior-products",icon:"package"},
];

export const longboardProducts = {
  "board-and-batten": {
    metadataTitle:'Longboard 7" Board & Batten Aluminum Siding | CladCan',
    metadataDescription:'Explore Longboard 7-inch Board & Batten aluminum siding including product dimensions, components, finishes and technical resources available through CladCan.',
    eyebrow:"LONGBOARD ALUMINUM SIDING", title:'7" Board & Batten', subtitle:"Classic look. Modern aluminum performance.",
    intro:"Longboard Board & Batten delivers the familiar vertical rhythm of traditional board-and-batten siding using a factory-finished architectural aluminum system.",
    specs:[
      {label:"Product",value:"Board & Batten"},{label:"Nominal Width",value:'7"'},{label:"Length",value:"12 ft"},{label:"SKU",value:"7BB.145"},{label:"Orientation",value:"Vertical installation only"},{label:"Material",value:"Architectural aluminum"},
    ],
    benefits:[
      {title:"Classic Vertical Aesthetic",text:"Creates the familiar rhythm of wide boards and narrow battens using a factory-finished aluminum system."},
      {title:"Low Maintenance",text:"Provides the visual character of traditional siding without the maintenance cycle associated with natural wood."},
      {title:"Factory-Finished Aluminum",text:"Longboard exterior aluminum systems are designed for durable architectural exterior applications."},
      {title:"Coordinated Trim System",text:"Compatible trims and accessories allow corners, joints and terminations to be resolved as part of the complete system."},
    ],
    applications:["Custom residential façades","Vertical feature elevations","Multi-residential projects","Mixed-material façades","Residential recladding","Contemporary and traditional exterior designs"],
    components:[
      {title:'7" Board & Batten',detail:'7" wide × 12 ft long',sku:"7BB.145"},
      {title:"Compression Joint",detail:'Traditional — 1-3/8" × 12 ft',sku:"2CJ.289"},
      {title:"Corner Set",detail:'Traditional — 1-2" × 12 ft',sku:"2CORS.145"},
      {title:"J Track",detail:'Traditional — 1-3/8" × 12 ft',sku:"JT35.145"},
      {title:"Two Piece J Track",detail:'Traditional — 1-3/8" × 12 ft',sku:"JT23S.145"},
      {title:"Offset Flat Reveal",detail:'Traditional — 2" × 12 ft',sku:"2URS.145"},
    ],
    finishes:commonFinishes,
    manufacturerUrl:"https://longboardproducts.com/exterior-products/siding/board-and-batten",
    related:[
      {title:"Lap Siding",type:"LONGBOARD SIDING",description:"Horizontal architectural aluminum siding for a traditional linear exterior expression.",href:"/exterior-systems/aluminum/longboard/products/lap-siding"},
      {title:"Tongue & Groove",type:"LONGBOARD CLADDING",description:"Architectural aluminum plank systems for cladding and soffit applications.",href:"/exterior-systems/aluminum/longboard/products/tongue-and-groove"},
      {title:"Link & Lock™",type:"LONGBOARD BATTENS",description:"Hidden-fastener aluminum battens for cladding, soffit, screens and architectural features.",href:"/exterior-systems/aluminum/longboard/products/link-lock"},
    ],
  },
  "lap-siding": {
    metadataTitle:'Longboard 6" Lap Siding | CladCan',
    metadataDescription:'Explore Longboard 6-inch Lap Siding, a 6063-T5 architectural aluminum profile for durable, low-maintenance horizontal siding applications.',
    eyebrow:"LONGBOARD ALUMINUM SIDING", title:'6" Lap Siding', subtitle:"Traditional character. Architectural aluminum.",
    intro:"Longboard Lap Siding reinterprets traditional horizontal lap siding in 6063-T5 architectural aluminum with a 1.5 mm profile thickness.",
    specs:[
      {label:"Product",value:"Lap Siding"},{label:"Width",value:'6"'},{label:"Length",value:"12 ft"},{label:"SKU",value:"6L.145"},{label:"Alloy",value:"6063-T5 aluminum"},{label:"Profile Thickness",value:"1.5 mm"},
    ],
    benefits:[
      {title:"Timeless Horizontal Profile",text:"Provides the familiar horizontal expression of traditional lap siding."},
      {title:"Durable Aluminum",text:"Precision-engineered aluminum resists denting, warping and fading under normal exterior service conditions."},
      {title:"Low Maintenance",text:"Factory-finished metal avoids the routine refinishing associated with natural wood siding."},
      {title:"Coordinated Accessories",text:"Compatible joints, corners, tracks, reveals and starter components support complete detailing."},
    ],
    applications:["Custom homes","Residential recladding","Multi-residential façades","Horizontal feature elevations","Mixed-material façades","Low-maintenance exterior upgrades"],
    components:[
      {title:'6" Lap Siding',detail:'6" wide × 12 ft long',sku:"6L.145"},
      {title:"Quick Screen Clips",detail:"Available by box or bag",sku:"CLIP.N1750 / CLIP.N100"},
      {title:'Butt-Joint Fastening Kit (6")',detail:"20 kits per bag",sku:"TGBJKIT"},
      {title:"Compression Joint",detail:'Traditional — 1-3/8" × 12 ft',sku:"2CJ.289"},
      {title:"Corner Set",detail:'Traditional — 1-2" × 12 ft',sku:"2CORS.145"},
      {title:"Starter Strip",detail:'Traditional — 1-7/8" × 12 ft',sku:"2SS.145"},
    ],
    finishes:commonFinishes,
    manufacturerUrl:"https://longboardproducts.com/exterior-products/siding/lap-siding",
    related:[
      {title:"Board & Batten",type:"LONGBOARD SIDING",description:"Vertical architectural aluminum siding with classic board-and-batten rhythm.",href:"/exterior-systems/aluminum/longboard/products/board-and-batten"},
      {title:"Tongue & Groove",type:"LONGBOARD CLADDING",description:"Closed-joint aluminum planks for wall and soffit applications.",href:"/exterior-systems/aluminum/longboard/products/tongue-and-groove"},
      {title:"Panelboard™",type:"LONGBOARD PANELS",description:"Smooth plank system for a clean panelized appearance.",href:"/exterior-systems/aluminum/longboard/products/panelboard"},
    ],
  },
  "tongue-and-groove": {
    metadataTitle:"Longboard Tongue & Groove Aluminum Planks | CladCan",
    metadataDescription:"Explore Longboard Tongue & Groove aluminum cladding and soffit profiles including V-Groove and Channel options.",
    eyebrow:"LONGBOARD CLADDING & SOFFIT", title:"Tongue & Groove", subtitle:"Closed-joint architectural aluminum planks.",
    intro:"Longboard Tongue & Groove is a family of closed-joint architectural aluminum planks for cladding and soffit applications, available in multiple V-Groove and Channel profiles.",
    specs:[
      {label:"System",value:"Tongue & Groove planks"},{label:"Applications",value:"Cladding & soffit"},{label:"Profiles",value:'2½" V-Groove, 4" V-Groove, 6" V-Groove, 6" Channel'},{label:"Material",value:"Architectural aluminum"},{label:"Joint",value:"Closed-joint"},{label:"Finish Options",value:"Woodgrain, solid and specialty finishes"},
    ],
    benefits:[
      {title:"Multiple Profile Widths",text:"Choose from several V-Groove and Channel profiles to tune scale and rhythm."},
      {title:"Wall-to-Soffit Continuity",text:"The same family can coordinate vertical, horizontal and soffit applications."},
      {title:"Low Maintenance",text:"Factory-finished aluminum provides a wood-inspired option without natural wood upkeep."},
      {title:"Architectural Detailing",text:"A coordinated profile and trim family supports clean transitions and terminations."},
    ],
    applications:["Exterior cladding","Residential soffits","Commercial canopies","Feature walls","Entry ceilings","Mixed-material façades"],
    components:[
      {title:'2½" V-Groove',detail:"Tongue & Groove profile"},{title:'4" V-Groove',detail:"Tongue & Groove profile"},{title:'6" V-Groove',detail:"Tongue & Groove profile"},{title:'6" Channel',detail:"Tongue & Groove profile"},
    ],
    finishes:commonFinishes,
    manufacturerUrl:"https://longboardproducts.com/resources/technical-documentation/specifications/exterior-products",
    related:[
      {title:"Textured Tongue & Groove",type:"LONGBOARD CLADDING",description:"Castellation and bevel profiles for deeper texture and shadow.",href:"/exterior-systems/aluminum/longboard/products/textured-tongue-and-groove"},
      {title:"Panelboard™",type:"LONGBOARD PANELS",description:"Smooth plank product for a nearly seamless panelized effect.",href:"/exterior-systems/aluminum/longboard/products/panelboard"},
      {title:"Link & Lock™",type:"LONGBOARD OPEN JOINT",description:"Hidden-fastener batten system for dimensional open-joint applications.",href:"/exterior-systems/aluminum/longboard/products/link-lock"},
    ],
  },
  "textured-tongue-and-groove": {
    metadataTitle:"Longboard Textured Tongue & Groove | CladCan",
    metadataDescription:"Explore Longboard textured Tongue & Groove cladding profiles including Castellation and Bevel options.",
    eyebrow:"LONGBOARD TEXTURED CLADDING", title:"Textured Tongue & Groove", subtitle:"Depth, shadow and texture in architectural aluminum.",
    intro:"Longboard Textured Tongue & Groove expands the plank family with castellation and bevel profiles that create deeper relief and stronger shadow lines.",
    specs:[
      {label:"System",value:"Textured Tongue & Groove"},{label:"Applications",value:"Exterior cladding"},{label:"Profiles",value:'4" Castellation, 8" Castellation, 6" Single Bevel, 6" Triple Bevel'},{label:"Material",value:"Architectural aluminum"},{label:"Joint",value:"Closed-joint"},{label:"Finish Options",value:"Woodgrain, solid and specialty finishes"},
    ],
    benefits:[
      {title:"Textured Architectural Expression",text:"Creates dimensional façades using castellation and bevel profile geometry."},
      {title:"Profile Variety",text:"Four profile families support different rhythms, depth and shadow."},
      {title:"Aluminum Durability",text:"Factory-finished aluminum provides exterior durability with reduced maintenance."},
      {title:"Design Coordination",text:"Pairs with other Longboard exterior products and finish families."},
    ],
    applications:["Feature façades","Residential elevations","Commercial cladding","Architectural accents","Mixed-material façades"],
    components:[
      {title:'4" Castellation',detail:"Textured T&G profile"},{title:'8" Castellation',detail:"Textured T&G profile"},{title:'6" Single Bevel',detail:"Textured T&G profile"},{title:'6" Triple Bevel',detail:"Textured T&G profile"},
    ],
    finishes:commonFinishes,
    manufacturerUrl:"https://longboardproducts.com/resources/technical-documentation/specifications/exterior-products",
    related:[
      {title:"Tongue & Groove",type:"LONGBOARD PLANKS",description:"Classic V-Groove and Channel aluminum plank profiles.",href:"/exterior-systems/aluminum/longboard/products/tongue-and-groove"},
      {title:"Panelboard™",type:"LONGBOARD PANELS",description:"Smooth plank system for panelized architecture.",href:"/exterior-systems/aluminum/longboard/products/panelboard"},
      {title:"Link & Lock™",type:"LONGBOARD BATTENS",description:"Open-joint hidden-fastener battens for dimensional façades.",href:"/exterior-systems/aluminum/longboard/products/link-lock"},
    ],
  },
  "link-lock": {
    metadataTitle:"Longboard Link & Lock Aluminum Battens | CladCan",
    metadataDescription:"Explore Longboard Link & Lock hidden-fastener aluminum battens for cladding, soffit, screens and enclosure applications.",
    eyebrow:"LONGBOARD ARCHITECTURAL BATTENS", title:"Link & Lock™", subtitle:"Hidden fasteners. Flexible architectural expression.",
    intro:"Link & Lock™ is a hidden-fastener aluminum batten system designed for cladding, soffit, screens and architectural features in multiple orientations.",
    specs:[
      {label:"System",value:"Two-piece hidden-fastener battens"},{label:"Lengths",value:"12 ft and 24 ft"},{label:"Standard Sizes",value:'2", 4", 6", 8"'},{label:"Box Battens",value:'4×4" and 4×6"'},{label:"HD Profiles",value:'4", 6", 8"'},{label:"Material",value:"Non-combustible, weather-resistant aluminum"},
    ],
    benefits:[
      {title:"Hidden Fastener Design",text:"The two-piece system creates clean beam, fin and louvre-style effects."},
      {title:"Multiple Sizes",text:"Standard, box and HD batten families support a broad range of scales."},
      {title:"Multi-Application",text:"Use across cladding, soffit, screen and enclosure applications."},
      {title:"Finish Flexibility",text:"Available in woodgrains, solid colours, naturally aged metals and specialty finishes."},
    ],
    applications:["Open-joint cladding","Architectural soffits","Privacy screens","Mechanical enclosures","Fins and louvres","Exterior feature walls"],
    components:[
      {title:'2" Batten',detail:"12 ft / 24 ft",sku:"2X2LL.145 / 2X2LL.289"},{title:'4" Batten',detail:"12 ft / 24 ft",sku:"2X4LL.145 / 2X4LL.289"},{title:'6" Batten',detail:"12 ft / 24 ft",sku:"2X6LL.145 / 2X6LL.289"},{title:'8" Batten',detail:"12 ft / 24 ft",sku:"2X8LL.145 / 2X8LL.289"},{title:'4×4" Box Batten',detail:"12 ft / 24 ft",sku:"4X4LL.145 / 4X4LL.289"},{title:'4×6" Box Batten',detail:"12 ft / 24 ft",sku:"4X6LL.145 / 4X6LL.289"},
    ],
    finishes:commonFinishes,
    manufacturerUrl:"https://longboardproducts.com/exterior-products/cladding/open-joint/link-lock",
    related:[
      {title:"Privacy Beam",type:"LONGBOARD OPEN JOINT",description:"One-piece aluminum beam system for screens and open-joint architecture.",href:"/exterior-systems/aluminum/longboard/products/privacy-beam"},
      {title:"Tongue & Groove",type:"LONGBOARD CLOSED JOINT",description:"Closed-joint aluminum planks for walls and soffits.",href:"/exterior-systems/aluminum/longboard/products/tongue-and-groove"},
      {title:"Panelboard™",type:"LONGBOARD PANELS",description:"Smooth planks for a clean panelized aesthetic.",href:"/exterior-systems/aluminum/longboard/products/panelboard"},
    ],
  },
  "panelboard": {
    metadataTitle:"Longboard Panelboard Aluminum System | CladCan",
    metadataDescription:"Explore Longboard Panelboard, a smooth aluminum plank system for panelized cladding and soffit applications.",
    eyebrow:"LONGBOARD PANELIZED SYSTEM", title:"Panelboard™", subtitle:"A clean panelized look with simplified plank installation.",
    intro:"Panelboard™ uses Longboard's 6-inch Smooth Plank to create a nearly seamless panelized appearance for exterior cladding and soffit applications.",
    specs:[
      {label:"System",value:"Panelboard™"},{label:"Primary Profile",value:'6" Smooth Plank'},{label:"Family",value:"Tongue & Groove aluminum planks"},{label:"Applications",value:"Cladding & soffit"},{label:"Material",value:"Architectural aluminum"},{label:"Appearance",value:"Smooth / nearly seamless panelized look"},
    ],
    benefits:[
      {title:"Panelized Appearance",text:"Creates a clean, smooth visual with minimal expressed joints."},
      {title:"Plank-Based Installation",text:"Achieves a panel look using a modular plank system."},
      {title:"Cladding & Soffit Use",text:"Supports both wall and overhead applications for visual continuity."},
      {title:"Durable Finishes",text:"Uses Longboard's exterior architectural finish platform."},
    ],
    applications:["Modern residential façades","Commercial cladding","Soffits and canopies","Feature elevations","Entry ceilings","Mixed-material exteriors"],
    components:[{title:'6" Smooth Plank',detail:"Primary Panelboard™ profile"}],
    finishes:commonFinishes,
    manufacturerUrl:"https://longboardproducts.com/exterior-products/cladding/panels/panelboard-system",
    related:[
      {title:"Tongue & Groove",type:"LONGBOARD PLANKS",description:"V-Groove and Channel closed-joint plank profiles.",href:"/exterior-systems/aluminum/longboard/products/tongue-and-groove"},
      {title:"Textured Tongue & Groove",type:"LONGBOARD TEXTURED",description:"Castellation and bevel profiles for dimensional cladding.",href:"/exterior-systems/aluminum/longboard/products/textured-tongue-and-groove"},
      {title:"Lap Siding",type:"LONGBOARD SIDING",description:"Horizontal architectural aluminum siding.",href:"/exterior-systems/aluminum/longboard/products/lap-siding"},
    ],
  },
  "privacy-beam": {
    metadataTitle:"Longboard Privacy Beam Aluminum System | CladCan",
    metadataDescription:"Explore Longboard Privacy Beam aluminum profiles for screens, enclosures, open-joint cladding and soffit applications.",
    eyebrow:"LONGBOARD OPEN-JOINT SYSTEM", title:"Privacy Beam", subtitle:"Linear aluminum beams for screening and open-joint architecture.",
    intro:"Longboard Privacy Beam is a one-piece architectural aluminum beam family for privacy screens, enclosures, open-joint cladding, soffits and feature applications.",
    specs:[
      {label:"System",value:"Privacy Beam"},{label:"Beam Sizes",value:'1×3" and 1×5"'},{label:"Length",value:"24 ft"},{label:"Related Posts",value:'2×2" single post / 2×3" double post'},{label:"Applications",value:"Screens, cladding & soffit"},{label:"Material",value:"Architectural aluminum"},
    ],
    benefits:[
      {title:"One-Piece Beam Profiles",text:"Creates strong linear expression with straightforward beam geometry."},
      {title:"Open-Joint Flexibility",text:"Spacing can be coordinated for screen, cladding and soffit applications."},
      {title:"Exterior Durability",text:"Factory-finished aluminum supports long-term exterior use."},
      {title:"Coordinated Accessories",text:"Posts, end caps, spacer blocks, spacer bars and brackets support complete systems."},
    ],
    applications:["Privacy screens","Open-joint cladding","Architectural soffits","Exterior partitions","Mechanical screening","Linear feature elements"],
    components:[
      {title:'1×3" Privacy Beam',detail:"24 ft",sku:"1X3B.289"},{title:'1×5" Privacy Beam',detail:"24 ft",sku:"1X5B.289"},{title:'2×2" Single Post',detail:"24 ft",sku:"2X2SP.289"},{title:'2×3" Double Post',detail:"24 ft",sku:"2X3DP.289"},{title:"Spacer Block",detail:'For 1×3" & 1×5" beams',sku:"2X2SB.N100"},{title:'3" Mounting Bracket',detail:"100 per box",sku:"3PSMB.1"},
    ],
    finishes:commonFinishes,
    manufacturerUrl:"https://longboardproducts.com/exterior-products/screens-enclosures/privacy-beams",
    related:[
      {title:"Link & Lock™",type:"LONGBOARD BATTENS",description:"Two-piece hidden-fastener batten system in multiple sizes.",href:"/exterior-systems/aluminum/longboard/products/link-lock"},
      {title:"Tongue & Groove",type:"LONGBOARD CLADDING",description:"Closed-joint plank system for walls and soffits.",href:"/exterior-systems/aluminum/longboard/products/tongue-and-groove"},
      {title:"Panelboard™",type:"LONGBOARD PANELS",description:"Smooth aluminum plank system for panelized architecture.",href:"/exterior-systems/aluminum/longboard/products/panelboard"},
    ],
  },
};

export function productResources(product){ return commonResources(product.manufacturerUrl); }
