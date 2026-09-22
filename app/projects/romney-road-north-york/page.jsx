import ProjectShowcase from "../../../components/ProjectShowcase";

export const metadata={
  title:"Romney Road ACM Residence | CladCan Projects",
  description:"An ACM residential exterior on Romney Road in North York with clean architectural panel lines."
};

export default function Page(){
  return <ProjectShowcase
    title="Romney Road ACM Residence"
    eyebrow="RESIDENTIAL · NORTH YORK, ON"
    summary="An ACM residential exterior on Romney Road with clean architectural panel lines."
    facts={[
      {label:"Location",value:"North York, ON"},
      {label:"Project type",value:"Residential"},
      {label:"Systems",value:"ACM Panel"},
      {label:"Delivery",value:"CladCan project"}
    ]}
    images={[
      {src:"/images/projects/romney-road-north-york/romney-road-north-york-exterior-cladding-01.webp",alt:"Romney Road ACM residence in North York project view 1",caption:"Romney Road · project view 1",phase:"Completed",hero:true},
      {src:"/images/projects/romney-road-north-york/romney-road-north-york-exterior-cladding-02.webp",alt:"Romney Road ACM residence in North York project view 2",caption:"Romney Road · project view 2",phase:"Completed"},
      {src:"/images/projects/romney-road-north-york/romney-road-north-york-exterior-cladding-03.webp",alt:"Romney Road ACM residence in North York project view 3",caption:"Romney Road · project view 3",phase:"Completed"},
      {src:"/images/projects/romney-road-north-york/romney-road-north-york-exterior-cladding-04.webp",alt:"Romney Road ACM residence in North York project view 4",caption:"Romney Road · project view 4",phase:"Completed"},
      {src:"/images/projects/romney-road-north-york/romney-road-north-york-exterior-cladding-05.webp",alt:"Romney Road ACM residence in North York project view 5",caption:"Romney Road · project view 5",phase:"Completed"},
      {src:"/images/projects/romney-road-north-york/romney-road-north-york-exterior-cladding-06.webp",alt:"Romney Road ACM residence in North York project view 6",caption:"Romney Road · project view 6",phase:"Completed"},
      {src:"/images/projects/romney-road-north-york/romney-road-north-york-exterior-cladding-07.webp",alt:"Romney Road ACM residence in North York project view 7",caption:"Romney Road · project view 7",phase:"Completed"},
      {src:"/images/projects/romney-road-north-york/romney-road-north-york-exterior-cladding-08.webp",alt:"Romney Road ACM residence in North York project view 8",caption:"Romney Road · project view 8",phase:"Completed"},
      {src:"/images/projects/romney-road-north-york/romney-road-north-york-exterior-cladding-09.webp",alt:"Romney Road ACM residence in North York project view 9",caption:"Romney Road · project view 9",phase:"Completed"},
      {src:"/images/projects/romney-road-north-york/romney-road-north-york-exterior-cladding-10.webp",alt:"Romney Road ACM residence in North York project view 10",caption:"Romney Road · project view 10",phase:"Completed"}
    ]}
  />;
}
