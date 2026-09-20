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
      {src:"/images/projects/acm-facade-toronto/toronto-acm-facade-plywood-substrate-preparation.webp",alt:"Plywood substrate preparation before ACM panel installation",caption:"Before · substrate preparation",phase:"Before"},
      {src:"/images/projects/acm-facade-toronto/toronto-acm-facade-design-render.webp",alt:"Architectural design rendering for the Toronto ACM façade entrance",caption:"Design · ACM façade rendering",phase:"Design"},
      {src:"/images/projects/acm-facade-toronto/toronto-acm-panel-installation-progress-front.webp",alt:"Front view of ACM panels during installation with protective film in place",caption:"Installation · front progress",phase:"Installation"},
      {src:"/images/projects/acm-facade-toronto/toronto-acm-panel-installation-scaffolding.webp",alt:"Toronto ACM panel installation in progress with scaffolding",caption:"Installation · scaffolding",phase:"Installation"},
      {src:"/images/projects/acm-facade-toronto/toronto-acm-cladding-installation-progress-evening.webp",alt:"ACM cladding installation progress photographed during evening work",caption:"Installation · evening progress",phase:"Installation"},
      {src:"/images/projects/acm-facade-toronto/toronto-acm-panel-installation-canopy-detail.webp",alt:"ACM panel installation detail around the entrance canopy",caption:"Installation · canopy detail",phase:"Installation"},
      {src:"/images/projects/toronto-acm-facade-project.webp",alt:"Toronto ACM façade during panel installation",caption:"Installation · façade progress",phase:"Installation"},
      {src:"/images/projects/acm-facade-toronto/toronto-acm-facade-completed-front-elevation.webp",alt:"Front elevation of the completed Toronto ACM panel façade and entrance",caption:"Completed · front elevation",phase:"Completed"},
      {src:"/images/projects/acm-facade-toronto/toronto-acm-facade-completed-wide-view.webp",alt:"Completed Toronto ACM façade with grey aluminum composite panels around the building entrance",caption:"Completed · wide view",phase:"Completed"},
      {src:"/images/projects/acm-facade-toronto/toronto-acm-facade-completed-canopy-front.webp",alt:"Completed ACM panel canopy and entrance façade in Toronto",caption:"Completed · canopy front view",phase:"Completed"},
      {src:"/images/projects/acm-facade-toronto/toronto-acm-canopy-cladding-completed-perspective.webp",alt:"Completed ACM canopy cladding viewed from below at the Toronto project",caption:"Completed · canopy perspective",phase:"Completed"},
      {src:"/images/projects/acm-facade-toronto/toronto-acm-facade-completed-entry-detail.webp",alt:"Completed ACM cladding detail around the entrance door",caption:"Final detail · entrance cladding",phase:"Details"},
      {src:"/images/projects/acm-facade-toronto/toronto-acm-entry-panel-detail.webp",alt:"Detailed view of ACM panels surrounding the Toronto entrance",caption:"Final detail · entrance panels",phase:"Details"},
      {src:"/images/projects/acm-facade-toronto/toronto-acm-facade-panel-corner-detail.webp",alt:"Close-up of completed grey ACM panel corner detailing",caption:"Final detail · panel corner",phase:"Details"},
      {src:"/images/projects/acm-facade-toronto/toronto-acm-facade-side-return-detail.webp",alt:"Side return detail of completed ACM façade panels in Toronto",caption:"Final detail · side return",phase:"Details"},
      {src:"/images/projects/acm-facade-toronto/toronto-acm-soffit-panel-detail.webp",alt:"Close-up of ACM soffit panel detailing above the entrance",caption:"Final detail · soffit panel",phase:"Details"},
    ]}
    related={[
      {label:"ACM / ACP",href:"/exterior-systems/acm-acp"},
      {label:"Installation",href:"/services/installation"},
    ]}
    previous={{title:"Luxclad ACM Façade",href:"/projects/luxclad-richmond-hill"}}
    next={{title:"ACM + Cedar Soffit & Fascia",href:"/projects/acm-cedar-soffit-fascia"}}
  />;
}
