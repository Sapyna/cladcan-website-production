import ProjectShowcase from "../../../components/ProjectShowcase";

export const metadata={
  title:"Green Valley ACM Residence | CladCan Projects",
  description:"A residential ACM exterior project in North York documented through verified site photography."
};

export default function Page(){
  return <ProjectShowcase
    title="Green Valley ACM Residence"
    eyebrow="RESIDENTIAL · NORTH YORK, ON"
    summary="A residential ACM exterior project in North York documented through verified site photography."
    facts={[
      {label:"Location",value:"North York, ON"},
      {label:"Project type",value:"Residential"},
      {label:"Systems",value:"ACM Panel"},
      {label:"Photography",value:"Verified project photo"},
    ]}
    images={[
      {
        src:"/images/projects/green-valley-north-york/green-valley-north-york-acm.jpg",
        alt:"Green Valley ACM Residence project exterior in North York, ON",
        caption:"Project exterior",
        phase:"Completed",
        hero:true
      }
    ]}
  />;
}
