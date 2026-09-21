import ProjectShowcase from "../../../components/ProjectShowcase";

export const metadata={
  title:"Churchill Street ALPOLIC ACM | CladCan Projects",
  description:"Churchill Street ACM cladding project featuring ALPOLIC panels, documented with verified project photography."
};

export default function Page(){
  return <ProjectShowcase
    title="Churchill Street ALPOLIC ACM"
    eyebrow="RESIDENTIAL · ONTARIO"
    summary="A residential ACM cladding project featuring ALPOLIC panels and clean contemporary exterior detailing."
    facts={[
      {label:"Project",value:"Churchill Street"},
      {label:"Project type",value:"Residential"},
      {label:"Systems",value:"ACM Panel · ALPOLIC"},
      {label:"Gallery",value:"12 project photos"},
    ]}
    images={[
      {src:"/images/projects/churchill-street-north-york/churchill-street-alpolic-acm-01.jpg",alt:"Churchill Street ALPOLIC ACM project view 1",caption:"Project view 01",phase:"Project",hero:true},
      {src:"/images/projects/churchill-street-north-york/churchill-street-alpolic-acm-02.jpg",alt:"Churchill Street ALPOLIC ACM project view 2",caption:"Project view 02",phase:"Project"},
      {src:"/images/projects/churchill-street-north-york/churchill-street-alpolic-acm-03.jpg",alt:"Churchill Street ALPOLIC ACM project view 3",caption:"Project view 03",phase:"Project"},
      {src:"/images/projects/churchill-street-north-york/churchill-street-alpolic-acm-04.jpg",alt:"Churchill Street ALPOLIC ACM project view 4",caption:"Project view 04",phase:"Project"},
      {src:"/images/projects/churchill-street-north-york/churchill-street-alpolic-acm-05.jpg",alt:"Churchill Street ALPOLIC ACM project view 5",caption:"Project view 05",phase:"Project"},
      {src:"/images/projects/churchill-street-north-york/churchill-street-alpolic-acm-06.jpg",alt:"Churchill Street ALPOLIC ACM project view 6",caption:"Project view 06",phase:"Project"},
      {src:"/images/projects/churchill-street-north-york/churchill-street-alpolic-acm-07.jpg",alt:"Churchill Street ALPOLIC ACM project view 7",caption:"Project view 07",phase:"Project"},
      {src:"/images/projects/churchill-street-north-york/churchill-street-alpolic-acm-08.jpg",alt:"Churchill Street ALPOLIC ACM project view 8",caption:"Project view 08",phase:"Project"},
      {src:"/images/projects/churchill-street-north-york/churchill-street-alpolic-acm-09.jpg",alt:"Churchill Street ALPOLIC ACM project view 9",caption:"Project view 09",phase:"Project"},
      {src:"/images/projects/churchill-street-north-york/churchill-street-alpolic-acm-10.jpg",alt:"Churchill Street ALPOLIC ACM project view 10",caption:"Project view 10",phase:"Project"},
      {src:"/images/projects/churchill-street-north-york/churchill-street-alpolic-acm-11.jpg",alt:"Churchill Street ALPOLIC ACM project view 11",caption:"Project view 11",phase:"Project"},
      {src:"/images/projects/churchill-street-north-york/churchill-street-alpolic-acm-12.jpg",alt:"Churchill Street ALPOLIC ACM project view 12",caption:"Project view 12",phase:"Project"},
    ]}
    related={[
      {label:"ACM / ACP",href:"/exterior-systems/acm-acp"},
      {label:"Installation",href:"/services/installation"},
    ]}
  />;
}
