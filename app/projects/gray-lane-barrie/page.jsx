import ProjectShowcase from "../../../components/ProjectShowcase";

export const metadata={
  title:"Gray Lane Exterior Transformation | CladCan Projects",
  description:"A before-and-after façade transformation in Barrie showing the visual impact of a coordinated exterior renewal."
};

export default function Page(){
  return <ProjectShowcase
    title="Gray Lane Exterior Transformation"
    eyebrow="COMPLETED PROJECT · RESIDENTIAL"
    summary="A before-and-after façade transformation in Barrie showing the visual impact of a coordinated exterior renewal."
    facts={[
      {label:"Location",value:"Barrie, ON"},
      {label:"Project type",value:"Residential"},
      {label:"Systems",value:"Exterior Cladding"},
      {label:"Delivery",value:"CladCan project"},
    ]}
    images={[
      {src:"/images/before-after/gray-lane-barrie-before.jpg",alt:"Gray Lane exterior before transformation",caption:"Before · Gray Lane"},
      {src:"/images/before-after/gray-lane-barrie-after.jpg",alt:"Gray Lane exterior after transformation",caption:"After · Gray Lane"},
    ]}
    related={[
      {label:"Exterior Systems",href:"/exterior-systems"},
      {label:"Installation",href:"/services/installation"},
    ]}
    previous={{title:"Sideroad 17 Exterior Transformation",href:"/projects/sideroad-17-schomberg"}}
    next={{title:"Pharmacy Avenue Exterior Transformation",href:"/projects/pharmacy-scarborough"}}
  />;
}
