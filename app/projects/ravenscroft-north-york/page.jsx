import ProjectShowcase from "../../../components/ProjectShowcase";

export const metadata={
  title:"8 Ravenscroft ACM Residence | CladCan Projects",
  description:"Residential ACM cladding at 8 Ravenscroft in North York, featuring contemporary panel detailing and clean architectural lines."
};

export default function Page(){
  return <ProjectShowcase
    title="8 Ravenscroft ACM Residence"
    eyebrow="RESIDENTIAL · NORTH YORK, ON"
    summary="A residential ACM cladding project at 8 Ravenscroft in North York, featuring contemporary panel detailing and clean architectural lines."
    facts={[
      {label:"Location",value:"North York, ON"},
      {label:"Project type",value:"Residential"},
      {label:"Systems",value:"ACM Panel"},
      {label:"Photography",value:"Project photography"},
    ]}
    images={[
      {
        src:"/images/projects/ravenscroft-north-york/ravenscroft-north-york-acm.jpg",
        alt:"8 Ravenscroft ACM residence exterior in North York, Ontario",
        caption:"Completed exterior",
        phase:"Completed",
        hero:true
      }
    ]}
  />;
}
