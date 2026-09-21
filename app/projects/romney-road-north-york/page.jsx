import ProjectShowcase from "../../../components/ProjectShowcase";

export const metadata={
  title:"Romney Road ACM Residence | CladCan Projects",
  description:"An ACM residential exterior on Romney Road with clean architectural panel lines."
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
      {label:"Photography",value:"Verified project photo"},
    ]}
    images={[
      {
        src:"/images/projects/romney-road-north-york/romney-road-north-york-acm.jpg",
        alt:"Romney Road ACM Residence project exterior in North York, ON",
        caption:"Project exterior",
        phase:"Completed",
        hero:true
      }
    ]}
  />;
}
