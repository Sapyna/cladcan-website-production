import ProjectShowcase from "../../../components/ProjectShowcase";

export const metadata={
  title:"Churchill Street ALPOLIC ACM | CladCan Projects",
  description:"An ACM cladding project on Churchill Street featuring ALPOLIC panels and clean contemporary exterior detailing."
};

export default function Page(){
  return <ProjectShowcase
    title="Churchill Street ALPOLIC ACM"
    eyebrow="RESIDENTIAL · NORTH YORK, ON"
    summary="An ACM cladding project on Churchill Street featuring ALPOLIC panels and clean contemporary exterior detailing."
    facts={[
      {label:"Location",value:"North York, ON"},
      {label:"Project type",value:"Residential"},
      {label:"Systems",value:"ACM Panel · ALPOLIC"},
      {label:"Photography",value:"Verified project photo"},
    ]}
    images={[
      {
        src:"/images/projects/churchill-street-north-york/churchill-street-alpolic-acm.jpg",
        alt:"Churchill Street ALPOLIC ACM project exterior in North York, ON",
        caption:"Project exterior",
        phase:"Completed",
        hero:true
      }
    ]}
  />;
}
