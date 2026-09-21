import ProjectShowcase from "../../../components/ProjectShowcase";

export const metadata={
  title:"Cameron Street ACM & Siding | CladCan Projects",
  description:"A Cameron Street exterior project combining ACM and siding for a contemporary residential finish."
};

export default function Page(){
  return <ProjectShowcase
    title="Cameron Street ACM & Siding"
    eyebrow="RESIDENTIAL · THORNBURY, ON"
    summary="A Cameron Street exterior project combining ACM and siding for a contemporary residential finish."
    facts={[
      {label:"Location",value:"Thornbury, ON"},
      {label:"Project type",value:"Residential"},
      {label:"Systems",value:"ACM Panel · Siding"},
      {label:"Photography",value:"Verified project photo"},
    ]}
    images={[
      {
        src:"/images/projects/cameron-street-thornbury/cameron-street-acm-siding.jpg",
        alt:"Cameron Street ACM & Siding project exterior in Thornbury, ON",
        caption:"Project exterior",
        phase:"Completed",
        hero:true
      }
    ]}
  />;
}
