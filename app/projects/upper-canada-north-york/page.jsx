import ProjectShowcase from "../../../components/ProjectShowcase";

export const metadata={
  title:"Upper Canada Exterior | CladCan Projects",
  description:"A North York exterior project documented through verified project photography."
};

export default function Page(){
  return <ProjectShowcase
    title="Upper Canada Exterior"
    eyebrow="RESIDENTIAL · NORTH YORK, ON"
    summary="A North York exterior project documented through verified project photography."
    facts={[
      {label:"Location",value:"North York, ON"},
      {label:"Project type",value:"Residential"},
      {label:"Systems",value:"Exterior Cladding"},
      {label:"Photography",value:"Verified project photo"},
    ]}
    images={[
      {
        src:"/images/projects/upper-canada-north-york/upper-canada-north-york.jpg",
        alt:"Upper Canada Exterior project exterior in North York, ON",
        caption:"Project exterior",
        phase:"Completed",
        hero:true
      }
    ]}
  />;
}
