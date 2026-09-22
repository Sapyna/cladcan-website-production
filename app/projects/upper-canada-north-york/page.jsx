import ProjectShowcase from "../../../components/ProjectShowcase";

export const metadata={
  title:"Upper Canada Exterior | CladCan Projects",
  description:"A residential exterior cladding project in North York documented through completed project photography."
};

export default function Page(){
  return <ProjectShowcase
    title="Upper Canada Exterior"
    eyebrow="RESIDENTIAL · NORTH YORK, ON"
    summary="A North York residential exterior cladding project documented through completed project photography."
    facts={[
      {label:"Location",value:"North York, ON"},
      {label:"Project type",value:"Residential"},
      {label:"Systems",value:"Exterior Cladding"},
      {label:"Delivery",value:"CladCan project"}
    ]}
    images={[
      {src:"/images/projects/upper-canada-north-york/upper-canada-north-york-exterior-cladding-01.webp",alt:"Upper Canada North York exterior cladding project view 1",caption:"Project view 1",phase:"Completed",hero:true},
      {src:"/images/projects/upper-canada-north-york/upper-canada-north-york-exterior-cladding-02.webp",alt:"Upper Canada North York exterior cladding project view 2",caption:"Project view 2",phase:"Completed"},
      {src:"/images/projects/upper-canada-north-york/upper-canada-north-york-exterior-cladding-03.webp",alt:"Upper Canada North York exterior cladding project view 3",caption:"Project view 3",phase:"Completed"},
      {src:"/images/projects/upper-canada-north-york/upper-canada-north-york-exterior-cladding-04.webp",alt:"Upper Canada North York exterior cladding project view 4",caption:"Project view 4",phase:"Completed"},
      {src:"/images/projects/upper-canada-north-york/upper-canada-north-york-exterior-cladding-05.webp",alt:"Upper Canada North York exterior cladding project view 5",caption:"Project view 5",phase:"Completed"},
      {src:"/images/projects/upper-canada-north-york/upper-canada-north-york-exterior-cladding-06.webp",alt:"Upper Canada North York exterior cladding project view 6",caption:"Project view 6",phase:"Completed"},
      {src:"/images/projects/upper-canada-north-york/upper-canada-north-york-exterior-cladding-07.webp",alt:"Upper Canada North York exterior cladding project view 7",caption:"Project view 7",phase:"Completed"}
    ]}
  />;
}
