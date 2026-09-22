import ProjectShowcase from "../../../components/ProjectShowcase";

export const metadata={
  title:"Broadway Avenue Exterior | CladCan Projects",
  description:"Residential exterior cladding project on Broadway Avenue in North York, documented with CladCan project photography."
};

export default function Page(){
  return <ProjectShowcase
    title="Broadway Avenue Exterior"
    eyebrow="RESIDENTIAL · NORTH YORK, ON"
    summary="Residential exterior cladding project on Broadway Avenue in North York, documented with CladCan project photography."
    facts={[
      {label:"Location",value:"North York, ON"},
      {label:"Project type",value:"Residential"},
      {label:"Systems",value:"Exterior Cladding"},
      {label:"Delivery",value:"CladCan project"},
    ]}
    images={[
      {src:"/images/projects/broadway-avenue-north-york/optimized-broadway-avenue-north-york.webp",alt:"Broadway Avenue residential exterior cladding project in North York",caption:"Broadway Avenue exterior",phase:"Completed",hero:true},
      {src:"/images/projects/broadway-avenue-north-york/optimized-367A0433-6523.webp",alt:"Broadway Avenue North York exterior cladding project view",caption:"Exterior cladding · project view",phase:"Completed"},
      {src:"/images/projects/broadway-avenue-north-york/optimized-367A0470.webp",alt:"Broadway Avenue North York residential facade detail",caption:"Exterior cladding · facade view",phase:"Completed"},
      {src:"/images/projects/broadway-avenue-north-york/optimized-367A0490-2.webp",alt:"Broadway Avenue North York completed exterior facade",caption:"Exterior cladding · completed facade",phase:"Completed"},
      {src:"/images/projects/broadway-avenue-north-york/optimized-367A0563.webp",alt:"Broadway Avenue North York residential exterior detail",caption:"Exterior cladding · detail view",phase:"Completed"}
    ]}
  />;
}
