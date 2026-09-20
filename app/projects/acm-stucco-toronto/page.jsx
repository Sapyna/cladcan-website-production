import ProjectShowcase from "../../../components/ProjectShowcase";

export const metadata={
  title:"ACM Façade | CladCan Projects",
  description:"A Toronto ACM façade featuring clean panel geometry and a contemporary exterior expression."
};

export default function Page(){
  return <ProjectShowcase
    title="ACM Façade"
    eyebrow="COMPLETED PROJECT · COMMERCIAL"
    summary="A Toronto ACM façade project featuring clean panel geometry and a contemporary exterior expression."
    facts={[
      {label:"Location",value:"Toronto, ON"},
      {label:"Project type",value:"Commercial"},
      {label:"Systems",value:"ACM Panel"},
      {label:"Delivery",value:"CladCan project"},
    ]}
    images={[
      {src:"/images/projects/toronto-acm-facade-project.webp",alt:"Toronto ACM façade project",caption:"ACM façade · Toronto"},
    ]}
    related={[
      {label:"ACM / ACP",href:"/exterior-systems/acm-acp"},
      {label:"Installation",href:"/services/installation"},
    ]}
    previous={{title:"Luxclad ACM Façade",href:"/projects/luxclad-richmond-hill"}}
    next={{title:"ACM + Cedar Soffit & Fascia",href:"/projects/acm-cedar-soffit-fascia"}}
  />;
}
