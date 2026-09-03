import CurrentSitePage from "@/components/CurrentSitePage";

export const metadata = {
  title: "ChamClad uPVC Cladding, Soffit & Column Wraps | CladCan",
  description: "Explore ChamClad recycled rigid uPVC flat panels, Shadow Series cladding, soffit and decorative post, beam and column wraps for Ontario projects.",
};

const decisionSupport = [
  {label:"Material",text:"Engineered recycled rigid uPVC provides a lightweight, water-resistant and low-maintenance architectural surface for suitable interior and exterior applications."},
  {label:"Product families",text:"Choose among Classic flat panels, deep-reveal Shadow Series panels, solid and vented soffit, and decorative posts, beams and column wraps."},
  {label:"Finish direction",text:"Woodgrain, matte, solid, anodized and metallic appearances can coordinate walls, ceilings and accents within one finish family."},
  {label:"Project coordination",text:"Profile, orientation, thermal movement, fastening, ventilation, trims and terminations should be confirmed before quantities and custom lengths are ordered."},
];

export default function Page() {
  return <CurrentSitePage
    eyebrow="EXTERIOR & INTERIOR SYSTEMS"
    title="uPVC Architectural Products"
    intro="Low-maintenance wall panels, soffit and decorative wraps with realistic architectural finishes."
    overview="ChamClad uPVC products combine engineered recycled rigid PVC profiles with durable decorative films. The system includes four clear product families for walls, ceilings, soffits, posts, beams and columns. Each family has its own profiles, sizes and accessories, while shared finish options make it possible to coordinate multiple surfaces across a project."
    image="/images/exterior-systems/pvc-siding-soffit-ontario.jpg"
    images={[
      "/images/content/pvc-project.webp",
      "/images/content/shadowline-project.webp",
      "/images/content/premium-soffit-project.webp",
    ]}
    items={[
      {title:"Classic Flat Panels",href:"/exterior-systems/pvc/flat-panels",image:"/images/exterior-systems/pvc/flat-panels/upvc-dual-profile-cladding-project.webp",text:"Classic 6-inch dual-profile and seamless panels for exterior walls, interior features and ceilings.",tags:["U-Channel","V-Groove","Seamless"]},
      {title:"Posts & Beams",href:"/exterior-systems/pvc/posts-beams",image:"/images/content/post-wrap-detail.webp",text:"Quick Click, two-piece column wrap and faux-beam systems for decorative non-load-bearing applications.",tags:["8, 10 & 12 in","Column Wrap","Faux Beam"]},
      {title:"Shadow Series",href:"/exterior-systems/pvc/shadow-series",image:"/images/exterior-systems/pvc/shadow-series/upvc-shadow-series-house.webp",text:"Deep black 6-inch, 3-inch and 2-inch reveals create defined modern shadow lines.",tags:["6 in Reveal","3 in Reveal","2 in Reveal"]},
      {title:"Soffit",href:"/exterior-systems/pvc/soffit",image:"/images/exterior-systems/pvc/soffit/upvc-soffit-installation-project.webp",text:"Solid, vented and seamless 4-inch, 6-inch and 12-inch panels for rooflines and ceilings.",tags:["Solid","Vented","Ceiling"]},
    ]}
    decisionSupport={decisionSupport}
    note="Product dimensions, finish availability, lead times and installation requirements should be confirmed against current ChamClad technical documents before ordering."
  />;
}