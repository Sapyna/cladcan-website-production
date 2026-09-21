import ProjectShowcase from "../../../components/ProjectShowcase";

export const metadata={
  title:"Broadway Avenue Exterior | CladCan Projects",
  description:"Exterior cladding work on Broadway Avenue documented with verified CladCan project photography."
};

export default function Page(){
  return <ProjectShowcase
    title="Broadway Avenue Exterior"
    eyebrow="RESIDENTIAL · NORTH YORK, ON"
    summary="Exterior cladding work on Broadway Avenue documented with verified CladCan project photography."
    facts={[
      {label:"Location",value:"North York, ON"},
      {label:"Project type",value:"Residential"},
      {label:"Systems",value:"Exterior Cladding"},
      {label:"Photography",value:"Verified project photo"},
    ]}
    images={[
      {
        src:"/images/projects/broadway-avenue-north-york/broadway-avenue-north-york.jpg",
        alt:"Broadway Avenue Exterior project exterior in North York, ON",
        caption:"Project exterior",
        phase:"Completed",
        hero:true
      }
    ]}
  />;
}
