import ProjectShowcase from "../../../components/ProjectShowcase";

export const metadata={
  title:"Sideroad 17 Exterior Transformation | CladCan Projects",
  description:"A residential exterior transformation documented with verified before-and-after photography."
};

export default function Page(){
  return <ProjectShowcase
    title="Sideroad 17 Exterior Transformation"
    eyebrow="COMPLETED PROJECT · RESIDENTIAL"
    summary="A residential exterior transformation documented with verified before-and-after photography."
    facts={[
      {label:"Location",value:"Schomberg, ON"},
      {label:"Project type",value:"Residential"},
      {label:"Systems",value:"Exterior Cladding"},
      {label:"Delivery",value:"CladCan project"},
    ]}
    images={[
      {src:"/images/before-after/sideroad-17-schomberg-before.jpg",alt:"Sideroad 17 exterior before transformation",caption:"Before · Sideroad 17"},
      {src:"/images/before-after/sideroad-17-schomberg-after.jpg",alt:"Sideroad 17 exterior after transformation",caption:"After · Sideroad 17"},
    ]}
    related={[
      {label:"Exterior Systems",href:"/exterior-systems"},
      {label:"Installation",href:"/services/installation"},
    ]}
    previous={{title:"ACM + Cedar Soffit & Fascia",href:"/projects/acm-cedar-soffit-fascia"}}
    next={{title:"Gray Lane Exterior Transformation",href:"/projects/gray-lane-barrie"}}
  />;
}
