import ProjectShowcase from "../../../components/ProjectShowcase";

export const metadata={
  title:"Ravenscroft ACM Residence | CladCan Projects",
  description:"A residential ACM cladding project on Ravenscroft with contemporary panel detailing."
};

export default function Page(){
  return <ProjectShowcase
    title="Ravenscroft ACM Residence"
    eyebrow="RESIDENTIAL · NORTH YORK, ON"
    summary="A residential ACM cladding project on Ravenscroft with contemporary panel detailing."
    facts={[
      {label:"Location",value:"North York, ON"},
      {label:"Project type",value:"Residential"},
      {label:"Systems",value:"ACM Panel"},
      {label:"Photography",value:"Verified project photo"},
    ]}
    images={[
      {
        src:"/images/projects/ravenscroft-north-york/ravenscroft-north-york-acm.jpg",
        alt:"Ravenscroft ACM Residence project exterior in North York, ON",
        caption:"Project exterior",
        phase:"Completed",
        hero:true
      }
    ]}
  />;
}
