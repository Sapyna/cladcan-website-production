import ProjectShowcase from "../../../components/ProjectShowcase";

export const metadata={
  title:"ACM Façade | CladCan Projects",
  description:"ACM panel installation with concealed-fastener detailing for a refined contemporary commercial façade."
};

export default function Page(){
  return <ProjectShowcase
    title="ACM Façade"
    eyebrow="COMPLETED PROJECT · COMMERCIAL"
    summary="ACM panel installation with concealed-fastener detailing for a refined contemporary commercial façade."
    facts={[
      {label:"Location",value:"Richmond Hill, ON"},
      {label:"Project type",value:"Commercial"},
      {label:"Systems",value:"ACM Panel"},
      {label:"Delivery",value:"CladCan project"},
    ]}
    images={[
      {src:"/images/projects/richmond-hill-medical-mall/richmond-hill-medical-mall-before-renovation-corner.webp",alt:"Richmond Hill Medical Mall corner before ACM facade renovation",caption:"Before · existing corner view",phase:"Before"},
      {src:"/images/projects/richmond-hill-medical-mall/richmond-hill-medical-mall-before-renovation-wide-view.webp",alt:"Wide view of Richmond Hill Medical Mall before ACM facade renovation",caption:"Before · wide existing view",phase:"Before"},
      {src:"/images/projects/richmond-hill-medical-mall/richmond-hill-medical-mall-acm-facade-design-render-walk-in-clinic.webp",alt:"Architectural rendering of Richmond Hill Medical Mall walk-in clinic ACM facade",caption:"Design · walk-in clinic facade rendering",phase:"Design"},
      {type:"video",src:"/images/projects/richmond-hill-medical-mall/richmond-hill-medical-mall-acm-installation-progress.mp4",poster:"/images/projects/richmond-hill-medical-mall/richmond-hill-medical-mall-acm-installation-progress-poster.webp",alt:"ACM facade installation progress at Richmond Hill Medical Mall",caption:"Installation · facade progress video",phase:"Installation"},
      {type:"video",src:"/images/projects/richmond-hill-medical-mall/richmond-hill-medical-mall-acm-installation-progress-corner.mp4",poster:"/images/projects/richmond-hill-medical-mall/richmond-hill-medical-mall-acm-installation-progress-corner-poster.webp",alt:"ACM facade panel installation in progress at Richmond Hill Medical Mall corner",caption:"Installation · corner facade progress video",phase:"Installation"},
      {src:"/images/projects/richmond-hill-medical-mall/richmond-hill-medical-mall-acm-facade-completed-side-perspective.webp",alt:"Completed Richmond Hill Medical Mall ACM facade side perspective",caption:"Completed · side perspective",phase:"Completed",hero:true},
      {src:"/images/projects/richmond-hill-medical-mall/richmond-hill-medical-mall-acm-facade-completed-side-signage.webp",alt:"Completed ACM facade and medical clinic signage at Richmond Hill Medical Mall",caption:"Completed · facade and signage",phase:"Completed"},
      {src:"/images/projects/richmond-hill-medical-mall/richmond-hill-medical-mall-acm-facade-completed-rear-side.webp",alt:"Completed Richmond Hill Medical Mall ACM facade from rear side",caption:"Completed · rear side",phase:"Completed"},
      {src:"/images/projects/richmond-hill-medical-mall/richmond-hill-medical-mall-walk-in-clinic-completed-front-corner.webp",alt:"Completed Richmond Hill walk-in clinic ACM facade front corner",caption:"Completed · clinic front corner",phase:"Completed"},
      {src:"/images/projects/richmond-hill-medical-mall/richmond-hill-medical-mall-walk-in-clinic-completed-front-elevation-wide.webp",alt:"Wide completed front elevation of Richmond Hill walk-in clinic ACM facade",caption:"Completed · clinic front elevation",phase:"Completed"},
      {src:"/images/projects/richmond-hill-medical-mall/richmond-hill-medical-mall-walk-in-clinic-completed-front-side-wide.webp",alt:"Wide front and side view of completed Richmond Hill walk-in clinic ACM facade",caption:"Completed · clinic front and side",phase:"Completed"},
      {src:"/images/projects/richmond-hill-medical-mall/richmond-hill-medical-mall-walk-in-clinic-completed-side-perspective.webp",alt:"Completed Richmond Hill walk-in clinic ACM facade side perspective",caption:"Completed · clinic side perspective",phase:"Completed"},
      {src:"/images/projects/richmond-hill-medical-mall/richmond-hill-medical-mall-walk-in-clinic-completed-corner-snowfall.webp",alt:"Completed Richmond Hill walk-in clinic ACM facade during snowfall",caption:"Completed · winter corner view",phase:"Completed"}
    ]}
    related={[
      {label:"ACM / ACP",href:"/exterior-systems/acm-acp"},
      {label:"Fabrication",href:"/services/custom-fabrication"},
      {label:"Installation",href:"/services/installation"},
    ]}
    next={{title:"ACM Façade",href:"/projects/acm-stucco-toronto"}}
  />;
}
