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
      {src:"/images/projects/richmond-hill-medical-mall/richmond-hill-medical-mall-before-renovation-front.webp",alt:"Richmond Hill Medical Mall building before ACM façade renovation",caption:"Before · existing front elevation",phase:"Before"},
      {src:"/images/projects/richmond-hill-medical-mall/richmond-hill-medical-mall-before-renovation-side.webp",alt:"Existing Richmond Hill Medical Mall exterior before ACM cladding renovation",caption:"Before · existing side elevation",phase:"Before"},
      {src:"/images/projects/richmond-hill-medical-mall/richmond-hill-medical-mall-acm-facade-design-render.webp",alt:"Architectural rendering of the Richmond Hill Medical Mall ACM façade design",caption:"Design · ACM façade rendering",phase:"Design"},
      {type:"video",src:"/images/projects/richmond-hill-medical-mall/richmond-hill-medical-mall-acm-installation-progress.mp4",poster:"/images/projects/richmond-hill-medical-mall/richmond-hill-medical-mall-acm-installation-progress-poster.webp",alt:"ACM panel installation progress at Richmond Hill Medical Mall",caption:"Installation · ACM panel progress video",phase:"Installation"},
      {src:"/images/projects/richmond-hill-medical-mall/richmond-hill-medical-mall-acm-facade-completed-corner.webp",alt:"Completed Richmond Hill Medical Mall ACM façade viewed from the corner",caption:"Completed · corner view",phase:"Completed"},
      {src:"/images/projects/richmond-hill-medical-mall/richmond-hill-medical-mall-acm-facade-completed-side-elevation.webp",alt:"Completed grey and blue ACM panel side elevation at Richmond Hill Medical Mall",caption:"Completed · side elevation",phase:"Completed"},
      {src:"/images/projects/richmond-hill-medical-mall/richmond-hill-medical-mall-acm-facade-completed-side-closeup.webp",alt:"Close view of grey and blue ACM panel detailing at Richmond Hill Medical Mall",caption:"Completed · side façade detail",phase:"Completed"},
      {src:"/images/projects/richmond-hill-medical-mall/richmond-hill-medical-mall-acm-facade-winter-corner.webp",alt:"Richmond Hill Medical Mall ACM façade photographed during winter weather",caption:"Completed · winter corner view",phase:"Completed"},
      {src:"/images/projects/richmond-hill-medical-mall/richmond-hill-medical-mall-acm-facade-completed-front-side.webp",alt:"Completed Richmond Hill Medical Mall ACM façade front and side view",caption:"Completed · front and side",phase:"Completed"},
      {src:"/images/projects/richmond-hill-medical-mall/richmond-hill-medical-mall-acm-facade-completed-side-entry.webp",alt:"Completed ACM façade around the Richmond Hill Medical Mall side entrance",caption:"Completed · side entrance",phase:"Completed"},
      {src:"/images/projects/richmond-hill-medical-mall/richmond-hill-medical-mall-walk-in-clinic-acm-facade.webp",alt:"Richmond Hill Medical Mall walk-in clinic finished with white blue and grey ACM panels",caption:"Completed · walk-in clinic façade",phase:"Completed"},
      {src:"/images/projects/richmond-hill-medical-mall/richmond-hill-medical-mall-acm-facade-completed-front-perspective.webp",alt:"Completed Richmond Hill Medical Mall ACM façade from a front perspective",caption:"Completed · front perspective",phase:"Completed"},
      {src:"/images/projects/richmond-hill-medical-mall/richmond-hill-medical-mall-acm-facade-completed-wide-view.webp",alt:"Wide completed view of the Richmond Hill Medical Mall ACM façade",caption:"Completed · wide view",phase:"Completed",hero:true},
      {src:"/images/projects/richmond-hill-medical-mall/richmond-hill-medical-mall-acm-facade-completed-front-elevation.webp",alt:"Completed front elevation of Richmond Hill Medical Mall with ACM panel cladding",caption:"Completed · front elevation",phase:"Completed"},
      {src:"/images/projects/richmond-hill-medical-mall/richmond-hill-medical-mall-acm-facade-winter-perspective.webp",alt:"Completed Richmond Hill Medical Mall ACM façade in winter from an angled perspective",caption:"Completed · winter perspective",phase:"Completed"},
      {src:"/images/projects/richmond-hill-medical-mall-acm-cladding-projects-hero.webp",alt:"Richmond Hill commercial ACM façade project completed by CladCan",caption:"Completed · project overview",phase:"Completed"},
    ]}
    related={[
      {label:"ACM / ACP",href:"/exterior-systems/acm-acp"},
      {label:"Fabrication",href:"/services/custom-fabrication"},
      {label:"Installation",href:"/services/installation"},
    ]}
    next={{title:"ACM Façade",href:"/projects/acm-stucco-toronto"}}
  />;
}
