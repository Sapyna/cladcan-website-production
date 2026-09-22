import ProjectShowcase from "../../../components/ProjectShowcase";

export const metadata={
  title:"George Henry ACM Residence | CladCan Projects",
  description:"A North York residential exterior cladding project documented through completed project photography."
};

export default function Page(){
  return <ProjectShowcase
    title="George Henry ACM Residence"
    eyebrow="RESIDENTIAL · NORTH YORK, ON"
    summary="A North York residential exterior cladding project documented through completed project photography."
    facts={[
      {label:"Location",value:"North York, ON"},
      {label:"Project type",value:"Residential"},
      {label:"Systems",value:"ACM Panel"},
      {label:"Delivery",value:"CladCan project"}
    ]}
    images={[
      {src:"/images/projects/george-henry-north-york/george-henry-north-york-exterior-cladding-01.webp",alt:"George Henry North York exterior cladding project view 1",caption:"Project view 1",phase:"Completed",hero:true},
      {src:"/images/projects/george-henry-north-york/george-henry-north-york-exterior-cladding-02.webp",alt:"George Henry North York exterior cladding project view 2",caption:"Project view 2",phase:"Completed"},
      {src:"/images/projects/george-henry-north-york/george-henry-north-york-exterior-cladding-03.webp",alt:"George Henry North York exterior cladding project view 3",caption:"Project view 3",phase:"Completed"},
      {src:"/images/projects/george-henry-north-york/george-henry-north-york-exterior-cladding-04.webp",alt:"George Henry North York exterior cladding project view 4",caption:"Project view 4",phase:"Completed"},
      {src:"/images/projects/george-henry-north-york/george-henry-north-york-exterior-cladding-05.webp",alt:"George Henry North York exterior cladding project view 5",caption:"Project view 5",phase:"Completed"},
      {src:"/images/projects/george-henry-north-york/george-henry-north-york-exterior-cladding-06.webp",alt:"George Henry North York exterior cladding project view 6",caption:"Project view 6",phase:"Completed"},
      {src:"/images/projects/george-henry-north-york/george-henry-north-york-exterior-cladding-07.webp",alt:"George Henry North York exterior cladding project view 7",caption:"Project view 7",phase:"Completed"},
      {src:"/images/projects/george-henry-north-york/george-henry-north-york-exterior-cladding-08.webp",alt:"George Henry North York exterior cladding project view 8",caption:"Project view 8",phase:"Completed"},
      {src:"/images/projects/george-henry-north-york/george-henry-north-york-exterior-cladding-09.webp",alt:"George Henry North York exterior cladding project view 9",caption:"Project view 9",phase:"Completed"},
      {src:"/images/projects/george-henry-north-york/george-henry-north-york-exterior-cladding-10.webp",alt:"George Henry North York exterior cladding project view 10",caption:"Project view 10",phase:"Completed"},
      {src:"/images/projects/george-henry-north-york/george-henry-north-york-exterior-cladding-11.webp",alt:"George Henry North York exterior cladding project view 11",caption:"Project view 11",phase:"Completed"},
      {src:"/images/projects/george-henry-north-york/george-henry-north-york-exterior-cladding-12.webp",alt:"George Henry North York exterior cladding project view 12",caption:"Project view 12",phase:"Completed"},
      {src:"/images/projects/george-henry-north-york/george-henry-north-york-exterior-cladding-13.webp",alt:"George Henry North York exterior cladding project view 13",caption:"Project view 13",phase:"Completed"},
      {src:"/images/projects/george-henry-north-york/george-henry-north-york-exterior-cladding-14.webp",alt:"George Henry North York exterior cladding project view 14",caption:"Project view 14",phase:"Completed"},
      {src:"/images/projects/george-henry-north-york/george-henry-north-york-exterior-cladding-15.webp",alt:"George Henry North York exterior cladding project view 15",caption:"Project view 15",phase:"Completed"}
    ]}
  />;
}
