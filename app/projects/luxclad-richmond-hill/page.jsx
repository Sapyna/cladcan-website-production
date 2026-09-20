import ProjectShowcase from "../../../components/ProjectShowcase";

export const metadata={
  title:"Luxclad ACM Façade | CladCan Projects",
  description:"ACM panel installation using the Luxclad system with concealed-fastener detailing for a refined contemporary façade."
};

export default function Page(){
  return <ProjectShowcase
    title="Luxclad ACM Façade"
    eyebrow="COMPLETED PROJECT · COMMERCIAL"
    summary="ACM panel installation using the Luxclad system with concealed-fastener detailing for a refined contemporary façade."
    facts={[
      {label:"Location",value:"Richmond Hill, ON"},
      {label:"Project type",value:"Commercial"},
      {label:"Systems",value:"ACM Panel · Luxclad"},
      {label:"Delivery",value:"CladCan project"},
    ]}
    images={[
      {src:"/images/projects/richmond-hill-medical-mall-acm-cladding-projects-hero.webp",alt:"Richmond Hill commercial ACM façade project",caption:"Luxclad ACM façade · Richmond Hill"},
    ]}
    related={[
      {label:"ACM / ACP",href:"/exterior-systems/acm-acp"},
      {label:"Fabrication",href:"/services/custom-fabrication"},
      {label:"Installation",href:"/services/installation"},
    ]}
    next={{title:"ACM Façade",href:"/projects/acm-stucco-toronto"}}
  />;
}
