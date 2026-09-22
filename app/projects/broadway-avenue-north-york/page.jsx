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
      {src:"/images/projects/broadway-avenue-north-york/broadway-avenue-north-york-exterior-cladding-01.webp",alt:"Broadway Avenue residential exterior cladding project in North York",caption:"Broadway Avenue exterior",phase:"Completed",hero:true},
      {src:"/images/projects/broadway-avenue-north-york/broadway-avenue-north-york-exterior-cladding-02.webp",alt:"Broadway Avenue North York exterior cladding project view",caption:"Exterior cladding · project view",phase:"Completed"},
      {src:"/images/projects/broadway-avenue-north-york/broadway-avenue-north-york-exterior-cladding-03.webp",alt:"Broadway Avenue North York residential facade detail",caption:"Exterior cladding · facade view",phase:"Completed"},
      {src:"/images/projects/broadway-avenue-north-york/broadway-avenue-north-york-exterior-cladding-04.webp",alt:"Broadway Avenue North York completed exterior facade",caption:"Exterior cladding · completed facade",phase:"Completed"},
      {src:"/images/projects/broadway-avenue-north-york/broadway-avenue-north-york-exterior-cladding-05.webp",alt:"Broadway Avenue North York residential exterior cladding view",caption:"Exterior cladding · project view",phase:"Completed"},
      {src:"/images/projects/broadway-avenue-north-york/broadway-avenue-north-york-exterior-cladding-06.webp",alt:"Broadway Avenue North York residential exterior detail",caption:"Exterior cladding · detail view",phase:"Completed"},
      {src:"/images/projects/broadway-avenue-north-york/broadway-avenue-north-york-exterior-cladding-07.webp",alt:"Broadway Avenue North York completed residential exterior",caption:"Exterior cladding · completed view",phase:"Completed"}
    ]}
  />;
}
