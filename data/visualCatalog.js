const ROOT = "/images/content";

const families = {
  aluminum: ["aluminum-battens-project.webp", "aluminum-battens-profile.webp", "fastplank-finishes.webp"],
  longboard: ["aluminum-battens-project.webp", "longboard-profiles.webp", "cedar-rendition-finishes.webp"],
  steel: ["steel-project.webp", "corrugated-commercial.webp", "exposed-fastener-project.webp"],
  corrugated: ["corrugated-canopy.webp", "corrugated-commercial.webp", "exposed-fastener-project.webp"],
  boardBatten: ["board-batten-project.webp", "agway-siding-project.webp", "steel-project.webp"],
  charred: ["charred-wood-project.webp", "charred-wood-texture.webp", "natural-wood-project.webp"],
  wood: ["natural-wood-project.webp", "engineered-wood-project.webp", "engineered-wood-detail.webp"],
  pvc: ["pvc-project.webp", "pvc-detail.webp", "agway-siding-project.webp"],
  soffit: ["premium-soffit-project.webp", "premium-soffit-ceiling.webp", "shadowline-detail.webp"],
  shadowline: ["shadowline-project.webp", "shadowline-detail.webp", "dual-profile-detail.webp"],
  dualProfile: ["dual-profile-project.webp", "dual-profile-detail.webp", "shadowline-project.webp"],
  eifs: ["eifs-project.webp", "eifs-progress.webp", "corrugated-commercial.webp"],
  acm: ["dual-profile-project.webp", "eifs-project.webp", "corrugated-commercial.webp"],
  wrap: ["post-wrap-detail.webp", "premium-soffit-project.webp", "aluminum-battens-profile.webp"],
  cladding: ["agway-siding-project.webp", "dual-profile-project.webp", "corrugated-commercial.webp"]
};

const withRoot = (files) => files.map((file) => `${ROOT}/${file}`);

export function getVisualFamily(value = "") {
  const text = String(value).toLowerCase();
  if (/charred|shou|burnt/.test(text)) return "charred";
  if (/eifs|stucco|durock|sto\b/.test(text)) return "eifs";
  if (/pvc|vinyl/.test(text)) return "pvc";
  if (/soffit|ceiling/.test(text)) return "soffit";
  if (/shadowline|fluted/.test(text)) return "shadowline";
  if (/dual.profile/.test(text)) return "dualProfile";
  if (/board.{0,3}batten/.test(text)) return "boardBatten";
  if (/corrugat|exposed.fastener|ribbed/.test(text)) return "corrugated";
  if (/steel|hidden.fastener/.test(text)) return "steel";
  if (/longboard|cedar rendition|fastplank|aluminium|aluminum|batten/.test(text)) return /longboard|cedar rendition/.test(text) ? "longboard" : "aluminum";
  if (/natural wood|engineered wood|wood siding|wpc|composite/.test(text)) return "wood";
  if (/acm|acp|mcm|metal composite/.test(text)) return "acm";
  if (/column|beam|post|wrap|flashing|trim/.test(text)) return "wrap";
  return "cladding";
}

export function getVisuals(value) {
  return withRoot(families[getVisualFamily(value)] || families.cladding);
}

export function getPrimaryVisual(value) {
  return getVisuals(value)[0];
}
