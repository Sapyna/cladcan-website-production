import ProjectShowcase from "../../../components/ProjectShowcase";

export const metadata={
  title:"Pharmacy Avenue Exterior Transformation | CladCan Projects",
  description:"Commercial exterior work in Scarborough documented through existing-condition and completed-project photography."
};

export default function Page(){
  return <ProjectShowcase
    title="Pharmacy Avenue Exterior Transformation"
    eyebrow="COMPLETED PROJECT · COMMERCIAL"
    summary="Commercial exterior work in Scarborough documented through existing-condition and completed-project photography."
    facts={[
      {label:"Location",value:"Scarborough, ON"},
      {label:"Project type",value:"Commercial"},
      {label:"Systems",value:"Exterior Cladding"},
      {label:"Delivery",value:"CladCan project"},
    ]}
    images={[
      {src:"/images/before-after/pharmacy-scarborough-before.jpg",alt:"Pharmacy Avenue exterior before transformation",caption:"Before · Pharmacy Avenue"},
      {src:"/images/before-after/pharmacy-scarborough-after.jpg",alt:"Pharmacy Avenue exterior after transformation",caption:"After · Pharmacy Avenue"},
    ]}
    related={[
      {label:"Exterior Systems",href:"/exterior-systems"},
      {label:"Installation",href:"/services/installation"},
    ]}
    previous={{title:"Gray Lane Exterior Transformation",href:"/projects/gray-lane-barrie"}}
  />;
}
