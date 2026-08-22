export const ROUTE_LABELS = {
  "exterior-systems":"Exterior Systems",
  "acm-acp":"ACM / ACP",
  "app":"APP",
  "stucco-eifs":"Stucco / EIFS",
  "fibre-cement":"Fibre Cement",
  "imp":"IMP",
  "pvc":"PVC",
  "wpc":"WPC",
  "trims-flashings":"Trims & Flashings",
  "thin-veneer":"Thin Veneer",
  "eavestroughs-downpipes":"Eavestroughs & Downpipes",
  "natural-wood":"Natural Wood",
  "architectural-battens":"Architectural Battens",
  "cedar-renditions":"Cedar Renditions®",
  "fastplank":"FastPlank®",
  "longboard":"Longboard",
  "screens-enclosures":"Screens & Enclosures",
  "board-and-batten":"Board & Batten",
  "lap-siding":"Lap Siding",
  "tongue-and-groove":"Tongue & Groove",
  "textured-tongue-and-groove":"Textured Tongue & Groove",
  "link-lock":"Link & Lock™",
  "panelboard":"Panelboard™",
  "privacy-beam":"Privacy Beam",
  "exposed-fastener":"Exposed Fastener",
  "hidden-fastener":"Hidden Fastener",
  "distinction-galanta":"Distinction & Galanta",
  "architectural-accents":"Architectural Accents",
  "architectural-facades":"Architectural Façades",
  "colours-finishes":"Colours & Finishes",
  "commercial-residential":"Commercial & Residential",
  "fabrication-installation":"Fabrication & Installation",
  "app-01":"APP-01",
  "app-02":"APP-02",
  "app-03":"APP-03",
  "app-12-16":"APP-12 / APP-16",
  "james-hardie":"James Hardie",
  "nichiha":"Nichiha",
  "siding-panels":"Siding & Panels",
  "architectural-finish":"Architectural Finish",
  "commercial-industrial-walls":"Commercial & Industrial Walls",
  "coordinated-installation":"Coordinated Installation",
  "thermal-performance":"Thermal Performance",
  "profiles-finishes":"Profiles & Finishes",
  "soffit-panels":"Soffit Panels",
  "vinyl-cladding":"Vinyl Cladding",
  "wall-cladding-panels":"Wall Cladding Panels",
  "architectural-finishes":"Architectural Finishes",
  "durock-sto":"DuROCK & Sto",
  "eifs-assemblies":"EIFS Assemblies",
  "fluted-siding-soffit":"Fluted Siding & Soffit",
  "shiplap-siding":"Shiplap Siding",
  "material-supply":"Material Supply",
  "custom-fabrication":"Custom Fabrication",
  "design-permit-support":"Design & Permit Support",
  "repair-maintenance":"Repair & Maintenance",
  "commercial-facade":"Commercial Façade",
  "charred-wood":"Charred Wood",
};

export const HIDDEN_BREADCRUMB_SEGMENTS = new Set(["products"]);

// Preferred application trail for Longboard products that live under a shared /products route.
export const PRODUCT_PARENT_OVERRIDES = {
  "/exterior-systems/aluminum/longboard/products/board-and-batten": "/exterior-systems/aluminum/longboard/siding",
  "/exterior-systems/aluminum/longboard/products/lap-siding": "/exterior-systems/aluminum/longboard/siding",
  "/exterior-systems/aluminum/longboard/products/tongue-and-groove": "/exterior-systems/aluminum/longboard/cladding",
  "/exterior-systems/aluminum/longboard/products/textured-tongue-and-groove": "/exterior-systems/aluminum/longboard/cladding",
  "/exterior-systems/aluminum/longboard/products/link-lock": "/exterior-systems/aluminum/longboard/cladding",
  "/exterior-systems/aluminum/longboard/products/panelboard": "/exterior-systems/aluminum/longboard/cladding",
  "/exterior-systems/aluminum/longboard/products/privacy-beam": "/exterior-systems/aluminum/longboard/screens-enclosures",
};


// Navigation context overrides keep deep pages inside the application/system users came to understand them through.
// This is especially important for products reused across multiple Longboard applications.
export const NAV_CHILDREN_ORDER = {
  "/exterior-systems/aluminum/longboard/siding": [
    "/exterior-systems/aluminum/longboard/products/lap-siding",
    "/exterior-systems/aluminum/longboard/products/board-and-batten",
  ],
  "/exterior-systems/aluminum/longboard/cladding": [
    "/exterior-systems/aluminum/longboard/products/tongue-and-groove",
    "/exterior-systems/aluminum/longboard/products/textured-tongue-and-groove",
    "/exterior-systems/aluminum/longboard/products/link-lock",
    "/exterior-systems/aluminum/longboard/products/panelboard",
  ],
  "/exterior-systems/aluminum/longboard/soffit": [
    "/exterior-systems/aluminum/longboard/products/tongue-and-groove",
    "/exterior-systems/aluminum/longboard/products/panelboard",
    "/exterior-systems/aluminum/longboard/products/link-lock",
    "/exterior-systems/aluminum/longboard/products/privacy-beam",
  ],
  "/exterior-systems/aluminum/longboard/screens-enclosures": [
    "/exterior-systems/aluminum/longboard/products/link-lock",
    "/exterior-systems/aluminum/longboard/products/privacy-beam",
  ],
  "/exterior-systems/aluminum": [
    "/exterior-systems/aluminum/fastplank",
    "/exterior-systems/aluminum/longboard",
    "/exterior-systems/aluminum/cedar-renditions",
    "/exterior-systems/aluminum/architectural-battens",
  ],
  "/exterior-systems/steel": [
    "/exterior-systems/steel/exposed-fastener",
    "/exterior-systems/steel/hidden-fastener",
    "/exterior-systems/steel/corrugated",
    "/exterior-systems/steel/board-and-batten",
    "/exterior-systems/steel/distinction-galanta",
  ],
};

export const ROUTE_TYPE_LABELS = {
  "/exterior-systems": "SYSTEMS",
  "/services": "SERVICES",
};

export function routeTypeLabel(path){
  if(!path || path==="/") return "";
  if(ROUTE_TYPE_LABELS[path]) return ROUTE_TYPE_LABELS[path];
  if(path.includes("/products/")) return "PRODUCT";
  if(path.startsWith("/exterior-systems/aluminum/longboard/") && !path.endsWith("/longboard")) return "APPLICATION";
  const depth=path.split("/").filter(Boolean).length;
  if(path.startsWith("/exterior-systems/") && depth===2) return "SYSTEM";
  if(path.startsWith("/exterior-systems/") && depth>=3) return "CATEGORY";
  if(path.startsWith("/services/")) return "SERVICE";
  if(path.startsWith("/projects/")) return "PROJECT";
  return "PAGE";
}

export function routeLabel(segment){
  if(!segment) return "Home";
  if(ROUTE_LABELS[segment]) return ROUTE_LABELS[segment];
  return segment.split("-").map(word=>word ? word[0].toUpperCase()+word.slice(1) : word).join(" ");
}
