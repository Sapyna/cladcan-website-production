import ProjectShowcase from "../../../components/ProjectShowcase";

export const metadata={
  title:"Sideroad 17 Exterior Transformation | CladCan Projects",
  description:"Residential exterior transformation in Schomberg featuring black ACM cladding across fascia, columns, canopies and glazed outdoor living areas."
};

export default function Page(){
  return <ProjectShowcase
    title="Sideroad 17 Exterior Transformation"
    eyebrow="RESIDENTIAL · SCHOMBERG, ON"
    summary="A residential exterior transformation featuring black ACM cladding across fascia, columns, canopies and glazed outdoor living areas, documented from existing conditions through installation and completion."
    facts={[
      {label:"Location",value:"Schomberg, ON"},
      {label:"Project type",value:"Residential"},
      {label:"Systems",value:"ACM Panel · Exterior Cladding"},
      {label:"Delivery",value:"CladCan project"},
    ]}
    images={[
      {src:"/images/before-after/sideroad-17-schomberg-before.jpg",alt:"Sideroad 17 residential exterior before the cladding transformation",caption:"Before · existing exterior",phase:"Before"},
      {src:"/images/projects/sideroad-17-schomberg/sideroad-17-black-acm-entry-canopy-installation.jpg",alt:"Black ACM cladding installation around the Sideroad 17 entry canopy",caption:"Installation · entry canopy",phase:"Installation"},
      {src:"/images/projects/sideroad-17-schomberg/sideroad-17-black-acm-rear-terrace-installation.jpg",alt:"Black ACM fascia and column cladding at the Sideroad 17 rear terrace",caption:"Installation · rear terrace",phase:"Installation"},
      {src:"/images/projects/sideroad-17-schomberg/sideroad-17-black-acm-stair-detail.jpg",alt:"Black ACM cladding detail beside the exterior concrete stair at Sideroad 17",caption:"Installation · stair detail",phase:"Installation"},
      {src:"/images/projects/sideroad-17-schomberg/sideroad-17-black-acm-rear-elevation-wide.jpg",alt:"Wide view of black ACM cladding across the Sideroad 17 rear elevation",caption:"Installation · rear elevation",phase:"Installation",hero:true},
      {src:"/images/projects/sideroad-17-schomberg/sideroad-17-black-acm-glazed-extension.jpg",alt:"Black ACM cladding around the glazed rear extension at Sideroad 17",caption:"Installation · glazed extension",phase:"Installation"},
      {src:"/images/projects/sideroad-17-schomberg/sideroad-17-black-acm-rear-perspective.jpg",alt:"Black ACM cladding on the Sideroad 17 rear exterior perspective",caption:"Installation · rear perspective",phase:"Installation"},
      {src:"/images/projects/sideroad-17-schomberg/sideroad-17-black-acm-column-detail.jpg",alt:"Close detail of black ACM column cladding at Sideroad 17",caption:"Installation · column detail",phase:"Installation"},
      {src:"/images/projects/sideroad-17-schomberg/sideroad-17-black-acm-covered-terrace-columns.jpg",alt:"Black ACM clad columns supporting the covered terrace at Sideroad 17",caption:"Installation · covered terrace columns",phase:"Installation"},
      {src:"/images/projects/sideroad-17-schomberg/sideroad-17-black-acm-under-canopy-columns.jpg",alt:"Black ACM clad columns below the canopy at Sideroad 17",caption:"Installation · under-canopy columns",phase:"Installation"},
      {src:"/images/projects/sideroad-17-schomberg/sideroad-17-black-acm-terrace-wide.jpg",alt:"Wide view of the Sideroad 17 terrace with black ACM fascia and columns",caption:"Installation · terrace wide view",phase:"Installation"},
    ]}
    related={[
      {label:"ACM / ACP",href:"/exterior-systems/acm-acp"},
      {label:"Exterior Systems",href:"/exterior-systems"},
      {label:"Installation",href:"/services/installation"},
    ]}
    previous={{title:"ACM + Cedar Soffit & Fascia",href:"/projects/acm-cedar-soffit-fascia"}}
    next={{title:"Gray Lane Exterior Transformation",href:"/projects/gray-lane-barrie"}}
  />;
}
