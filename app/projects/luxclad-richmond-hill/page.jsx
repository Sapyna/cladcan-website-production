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
      {src:"/images/projects/richmond-hill-medical-mall/richmond-hill-medical-mall-before-renovation-corner.webp",alt:"Richmond Hill Medical Mall corner before ACM façade renovation",caption:"Before · existing corner view",phase:"Before"},
      {src:"/images/projects/richmond-hill-medical-mall/richmond-hill-medical-mall-before-renovation-wide-view.webp",alt:"Wide view of Richmond Hill Medical Mall before ACM façade renovation",caption:"Before · wide existing view",phase:"Before"},
      {src:"/images/projects/richmond-hill-medical-mall/richmond-hill-medical-mall-acm-facade-design-render-walk-in-clinic.webp",alt:"Architectural rendering of the Richmond Hill Medical Mall walk-in clinic ACM façade",caption:"Design · walk-in clinic façade rendering",phase:"Design"},
      {type:"video",src:"/images/projects/richmond-hill-medical-mall/richmond-hill-medical-mall-acm-installation-progress-corner.mp4",poster:"/images/projects/richmond-hill-medical-mall/richmond-hill-medical-mall-acm-installation-progress-corner-poster.webp",alt:"ACM façade panel installation in progress at the Richmond Hill Medical Mall corner",caption:"Installation · corner façade progress video",phase:"Installation"},
      {src:"/images/projects/richmond-hill-medical-mall/richmond-hill-medical-mall-acm-facade-completed-side-perspective.webp",alt:"Completed blue grey and white ACM façade at Richmond Hill Medical Mall from the side",caption:"Completed · side perspective",phase:"Completed",hero:true},
      {src:"/images/projects/richmond-hill-medical-mall/richmond-hill-medical-mall-acm-facade-completed-rear-side.webp",alt:"Completed Richmond Hill Medical Mall ACM façade from the rear side",caption:"Completed · rear side view",phase:"Completed"},
      {src:"/images/projects/richmond-hill-medical-mall/richmond-hill-medical-mall-acm-facade-completed-side-signage.webp",alt:"Completed ACM façade and medical clinic signage at Richmond Hill Medical Mall",caption:"Completed · side façade and signage",phase:"Completed"},
      {src:"/images/projects/richmond-hill-medical-mall/richmond-hill-medical-mall-walk-in-clinic-completed-front-corner.webp",alt:"Completed Richmond Hill walk-in clinic ACM façade from the front corner",caption:"Completed · walk-in clinic front corner",phase:"Completed"},
      {src:"/images/projects/richmond-hill-medical-mall/richmond-hill-medical-mall-walk-in-clinic-completed-side-perspective.webp",alt:"Completed Richmond Hill walk-in clinic ACM façade side perspective",caption:"Completed · walk-in clinic side perspective",phase:"Completed"},
      {src:"/images/projects/richmond-hill-medical-mall/richmond-hill-medical-mall-walk-in-clinic-completed-front-side-wide.webp",alt:"Wide front and side view of the completed Richmond Hill walk-in clinic ACM façade",caption:"Completed · walk-in clinic front and side",phase:"Completed"},
      {src:"/images/projects/richmond-hill-medical-mall/richmond-hill-medical-mall-walk-in-clinic-completed-front-elevation-wide.webp",alt:"Wide completed front elevation of the Richmond Hill walk-in clinic ACM façade",caption:"Completed · walk-in clinic wide front elevation",phase:"Completed"},
      {src:"/images/projects/richmond-hill-medical-mall/richmond-hill-medical-mall-walk-in-clinic-completed-corner-snowfall.webp",alt:"Completed Richmond Hill walk-in clinic ACM façade photographed during snowfall",caption:"Completed · walk-in clinic snowy corner",phase:"Completed"},
    ]}
    related={[
      {label:"ACM / ACP",href:"/exterior-systems/acm-acp"},
      {label:"Fabrication",href:"/services/custom-fabrication"},
      {label:"Installation",href:"/services/installation"},
    ]}
    next={{title:"ACM Façade",href:"/projects/acm-stucco-toronto"}}
  />;
}
