import ProjectShowcase from "../../../components/ProjectShowcase";

export const metadata={
  title:"Green Valley ACM Residence | North York | CladCan Projects",
  description:"Residential ACM cladding project in North York featuring contemporary panel installation and clean architectural detailing."
};

export default function Page(){
  return <ProjectShowcase
    title="Green Valley ACM Residence"
    eyebrow="RESIDENTIAL · NORTH YORK, ON"
    summary="A residential ACM cladding project in North York featuring contemporary panel installation and clean architectural detailing."
    facts={[
      {label:"Location",value:"North York, ON"},
      {label:"Project type",value:"Residential"},
      {label:"Systems",value:"ACM Panel"},
      {label:"Photography",value:"Project photography"},
    ]}
    images={[
      {src:"/images/projects/green-valley-north-york/green-valley-north-york-acm-residence-01.webp",alt:"Green Valley ACM residence exterior in North York Ontario",caption:"Exterior view",phase:"Completed",hero:true},
      {src:"/images/projects/green-valley-north-york/green-valley-north-york-acm-residence-02.webp",alt:"Residential ACM cladding at Green Valley North York",caption:"ACM cladding",phase:"Completed"},
      {src:"/images/projects/green-valley-north-york/green-valley-north-york-acm-residence-03.webp",alt:"Green Valley North York ACM panel installation detail",caption:"Panel detailing",phase:"Completed"},
      {src:"/images/projects/green-valley-north-york/green-valley-north-york-acm-residence-04.webp",alt:"Contemporary ACM exterior at Green Valley North York",caption:"Exterior detail",phase:"Completed"},
      {src:"/images/projects/green-valley-north-york/green-valley-north-york-acm-residence-05.webp",alt:"Green Valley residence ACM facade in North York",caption:"Facade view",phase:"Completed"},
      {src:"/images/projects/green-valley-north-york/green-valley-north-york-acm-residence-06.webp",alt:"ACM panel facade detail Green Valley North York",caption:"Facade detail",phase:"Completed"},
      {src:"/images/projects/green-valley-north-york/green-valley-north-york-acm-residence-07.webp",alt:"Green Valley residential exterior cladding North York",caption:"Residential exterior",phase:"Completed"},
      {src:"/images/projects/green-valley-north-york/green-valley-north-york-acm-residence-08.webp",alt:"Architectural ACM panels Green Valley residence North York",caption:"Architectural detail",phase:"Completed"},
      {src:"/images/projects/green-valley-north-york/green-valley-north-york-acm-residence-09.webp",alt:"Completed Green Valley ACM project in North York",caption:"Completed exterior",phase:"Completed"},
      {src:"/images/projects/green-valley-north-york/green-valley-north-york-acm-residence-10.webp",alt:"Green Valley North York completed residential ACM cladding",caption:"Completed project",phase:"Completed"}
    ]}
  />;
}
