import ProjectsIndex from "@/components/ProjectsIndex";

export const metadata={
  title:"Exterior Cladding Projects | CladCan",
  description:"Explore selected CladCan exterior cladding and façade projects across Ontario, including ACM, aluminum, cedar, soffit and before-and-after exterior transformations."
};

const projects=[
  {
    order:1,
    title:"Luxclad ACM Façade",
    location:"Richmond Hill, ON",
    type:"Commercial",
    tags:["Commercial"],
    systems:["ACM Panel","Luxclad"],
    image:"/images/projects/richmond-hill-medical-mall-acm-cladding-projects-hero.webp",
    href:"/projects/luxclad-richmond-hill",
    summary:"ACM panel installation using the Luxclad system with concealed-fastener detailing for a refined contemporary façade.",
    photoCount:1,
  },
  {
    order:2,
    title:"ACM Façade",
    location:"Toronto, ON",
    type:"Commercial",
    tags:["Commercial"],
    systems:["ACM Panel"],
    image:"/images/projects/toronto-acm-facade-project.webp",
    href:"/projects/acm-stucco-toronto",
    summary:"A Toronto ACM façade project featuring clean panel geometry and a contemporary exterior expression.",
    photoCount:1,
  },
  {
    order:3,
    title:"ACM + Cedar Soffit & Fascia",
    location:"Toronto, ON",
    type:"Multi-material",
    tags:["Multi-material"],
    systems:["ACM Panel","Cedar Siding","Fascia","Soffit"],
    image:"/images/exterior-systems/natural-wood/cedar/cedar-soffit-acm-fascia-residential-project.webp",
    href:"/projects/acm-cedar-soffit-fascia",
    summary:"ACM panel installation complemented by cedar soffit and fascia detailing for a refined multi-material exterior.",
    photoCount:1,
  },
  {
    order:4,
    title:"Sideroad 17 Exterior Transformation",
    location:"Schomberg, ON",
    type:"Residential",
    tags:["Residential","Before & After"],
    systems:["Exterior Cladding"],
    image:"/images/before-after/sideroad-17-schomberg-after.jpg",
    href:"/projects/sideroad-17-schomberg",
    summary:"A residential exterior transformation documented with verified before-and-after photography.",
    photoCount:2,
  },
  {
    order:5,
    title:"Gray Lane Exterior Transformation",
    location:"Barrie, ON",
    type:"Residential",
    tags:["Residential","Before & After"],
    systems:["Exterior Cladding"],
    image:"/images/before-after/gray-lane-barrie-after.jpg",
    href:"/projects/gray-lane-barrie",
    summary:"A before-and-after façade transformation in Barrie showing the visual impact of a coordinated exterior renewal.",
    photoCount:2,
  },
  {
    order:6,
    title:"Pharmacy Avenue Exterior Transformation",
    location:"Scarborough, ON",
    type:"Commercial",
    tags:["Commercial","Before & After"],
    systems:["Exterior Cladding"],
    image:"/images/before-after/pharmacy-scarborough-after.jpg",
    href:"/projects/pharmacy-scarborough",
    summary:"Commercial exterior work in Scarborough documented through existing-condition and completed-project photography.",
    photoCount:2,
  },
];

export default function Projects(){
  return <ProjectsIndex projects={projects}/>;
}
