import ProjectShowcase from "../../../components/ProjectShowcase";

export const metadata={
  title:"ACM + Cedar Soffit & Fascia | CladCan Projects",
  description:"ACM panel installation complemented by cedar soffit and fascia detailing. The multi-material composition combines crisp metal surfaces with warmer cedar accents."
};

export default function Page(){
  return <ProjectShowcase
    title="ACM + Cedar Soffit & Fascia"
    eyebrow="COMPLETED PROJECT · MULTI-MATERIAL"
    summary="ACM panel installation complemented by cedar soffit and fascia detailing. The multi-material composition combines crisp metal surfaces with warmer cedar accents."
    facts={[
      {label:"Location",value:"Toronto, ON"},
      {label:"Project type",value:"Multi-material"},
      {label:"Systems",value:"ACM Panel · Cedar Siding · Fascia · Soffit"},
      {label:"Delivery",value:"CladCan project"},
    ]}
    images={[
      {src:"/images/exterior-systems/natural-wood/cedar/cedar-soffit-acm-fascia-residential-project.webp",alt:"ACM façade with cedar soffit and fascia detailing",caption:"ACM + cedar soffit & fascia · Toronto"},
    ]}
    related={[
      {label:"ACM / ACP",href:"/exterior-systems/acm-acp"},
      {label:"Natural Wood",href:"/exterior-systems/natural-wood"},
      {label:"Fabrication",href:"/services/custom-fabrication"},
      {label:"Installation",href:"/services/installation"},
    ]}
    previous={{title:"ACM Façade",href:"/projects/acm-stucco-toronto"}}
    next={{title:"Sideroad 17 Exterior Transformation",href:"/projects/sideroad-17-schomberg"}}
  />;
}
