import ProjectShowcase from "../../../components/ProjectShowcase";

export const metadata={
  title:"Gray Lane ACM, Stucco & Dekko Residence | CladCan Projects",
  description:"A contemporary Barrie residence combining ACM panels, stucco and Dekko cladding with crisp panel geometry and contrasting exterior finishes."
};

export default function Page(){
  return <ProjectShowcase
    title="Gray Lane ACM, Stucco & Dekko Residence"
    eyebrow="COMPLETED PROJECT · RESIDENTIAL"
    summary="A contemporary Barrie residence combining ACM panels, stucco and Dekko cladding with crisp panel geometry and contrasting exterior finishes."
    facts={[
      {label:"Location",value:"Barrie, ON"},
      {label:"Project type",value:"Residential"},
      {label:"Systems",value:"ACM · Stucco · Dekko"},
      {label:"Delivery",value:"CladCan project"},
    ]}
    images={[
      {src:"/images/projects/gray-lane-barrie/gray-lane-barrie-existing-home-before-renovation.jpg",alt:"Gray Lane Barrie residence before exterior transformation",caption:"Before · existing exterior",phase:"Before"},
      {src:"/images/projects/gray-lane-barrie/gray-lane-barrie-front-exterior-installation-progress.webp",alt:"Gray Lane Barrie residence during ACM stucco and Dekko exterior installation",caption:"Installation progress · front elevation",phase:"Installation"},
      {src:"/images/projects/gray-lane-barrie/gray-lane-barrie-acm-stucco-dekko-residence-front-wide.webp",alt:"Completed Gray Lane Barrie residence with ACM stucco and Dekko cladding front wide view",caption:"Completed · front wide view",phase:"Completed",hero:true},
      {src:"/images/projects/gray-lane-barrie/gray-lane-barrie-acm-stucco-dekko-residence-front-perspective.webp",alt:"Completed Gray Lane Barrie ACM stucco and Dekko residence front perspective",caption:"Completed · front perspective",phase:"Completed"},
      {src:"/images/projects/gray-lane-barrie/gray-lane-barrie-rear-exterior-completed.webp",alt:"Completed Gray Lane Barrie residence rear wide view with ACM stucco and Dekko cladding",caption:"Completed · rear wide view",phase:"Completed"},
      {src:"/images/projects/gray-lane-barrie/gray-lane-barrie-acm-stucco-dekko-residence-side-wide.webp",alt:"Completed Gray Lane Barrie residence side elevation with ACM stucco and Dekko cladding",caption:"Completed · side elevation",phase:"Completed"},
      {src:"/images/projects/gray-lane-barrie/gray-lane-barrie-rear-elevation-verified.webp",alt:"Completed Gray Lane Barrie residence rear elevation with ACM stucco and Dekko cladding",caption:"Completed · rear elevation",phase:"Completed"},
      {src:"/images/projects/gray-lane-barrie/gray-lane-barrie-acm-stucco-dekko-garage-side.webp",alt:"Gray Lane Barrie residence garage side showing ACM stucco and dark Dekko cladding",caption:"Completed · garage side",phase:"Completed"},
      {src:"/images/projects/gray-lane-barrie/gray-lane-barrie-dekko-panel-front-entry-closeup.webp",alt:"Dekko panel detail at the front entry of the Gray Lane Barrie residence",caption:"Completed · Dekko front entry detail",phase:"Completed"},
      {src:"/images/projects/gray-lane-barrie/gray-lane-barrie-acm-soffit-entry-detail.webp",alt:"ACM fascia and soffit detail at the Gray Lane Barrie residence entry",caption:"Completed · ACM and soffit detail",phase:"Completed"},
      {src:"/images/projects/gray-lane-barrie/gray-lane-barrie-acm-dekko-facade-side-detail.webp",alt:"ACM and Dekko façade side detail at the Gray Lane Barrie residence",caption:"Completed · ACM and Dekko detail",phase:"Completed"},
      {src:"/images/projects/gray-lane-barrie/gray-lane-barrie-dekko-panel-corner-detail.webp",alt:"Dekko panel corner detail on the Gray Lane Barrie residence",caption:"Completed · Dekko corner detail",phase:"Completed"},
      {src:"/images/projects/gray-lane-barrie/gray-lane-barrie-black-dekko-cladding-window-detail.webp",alt:"Black Dekko cladding surrounding large windows at the Gray Lane Barrie residence",caption:"Completed · black Dekko window detail",phase:"Completed"},
      {src:"/images/projects/gray-lane-barrie/gray-lane-barrie-black-dekko-cladding-upper-level-detail.webp",alt:"Black Dekko upper level cladding detail at the Gray Lane Barrie residence",caption:"Completed · upper-level Dekko detail",phase:"Completed"},
      {type:"video",src:"/images/projects/gray-lane-barrie/gray-lane-barrie-acm-stucco-dekko-project-walkthrough.mp4",poster:"/images/projects/gray-lane-barrie/gray-lane-barrie-acm-stucco-dekko-project-video-poster.jpg",alt:"Completed Gray Lane Barrie ACM stucco and Dekko residence project walkthrough",caption:"Completed · project walkthrough",phase:"Completed"},
    ]}
  />;
}
