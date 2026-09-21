import ProjectShowcase from "../../../components/ProjectShowcase";

export const metadata={
  title:"8 Ravenscroft ACM Residence | CladCan Projects",
  description:"Residential ACM cladding at 8 Ravenscroft in North York, featuring contemporary panel detailing and clean architectural lines."
};

export default function Page(){
  return <ProjectShowcase
    title="8 Ravenscroft ACM Residence"
    eyebrow="RESIDENTIAL · NORTH YORK, ON"
    summary="A residential ACM cladding project at 8 Ravenscroft in North York, featuring contemporary panel detailing and clean architectural lines."
    facts={[
      {label:"Location",value:"North York, ON"},
      {label:"Project type",value:"Residential"},
      {label:"Systems",value:"ACM Panel"},
      {label:"Photography",value:"Project photography"},
    ]}
    images={[
      {src:"/images/projects/ravenscroft-north-york/ravenscroft-north-york-acm-residence-01.jpg",alt:"8 Ravenscroft ACM residence exterior in North York, Ontario",caption:"Completed exterior",phase:"Completed",hero:true},
      {src:"/images/projects/ravenscroft-north-york/ravenscroft-north-york-acm-residence-02.jpg",alt:"8 Ravenscroft residential ACM cladding exterior view",caption:"Exterior view",phase:"Completed"},
      {src:"/images/projects/ravenscroft-north-york/ravenscroft-north-york-acm-residence-03.jpg",alt:"Architectural ACM panel details at 8 Ravenscroft North York",caption:"ACM panel detailing",phase:"Completed"},
      {src:"/images/projects/ravenscroft-north-york/ravenscroft-north-york-acm-residence-04.jpg",alt:"8 Ravenscroft modern residential facade with ACM panels",caption:"Facade detail",phase:"Completed"},
      {src:"/images/projects/ravenscroft-north-york/ravenscroft-north-york-acm-residence-05.jpg",alt:"Completed ACM cladding project at 8 Ravenscroft North York",caption:"Completed project",phase:"Completed"}
    ]}
  />;
}
