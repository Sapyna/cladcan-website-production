import ProjectShowcase from "../../../components/ProjectShowcase";

export const metadata={
  title:"William Rose ACM Residence | CladCan Projects",
  description:"A residential ACM installation in Oakville with precise panel detailing and a clean modern exterior."
};

export default function Page(){
  return <ProjectShowcase
    title="William Rose ACM Residence"
    eyebrow="RESIDENTIAL · OAKVILLE, ON"
    summary="A residential ACM installation in Oakville with precise panel detailing and a clean modern exterior."
    facts={[
      {label:"Location",value:"Oakville, ON"},
      {label:"Project type",value:"Residential"},
      {label:"Systems",value:"ACM Panel"},
      {label:"Photography",value:"Verified project photo"},
    ]}
    images={[
      {
        src:"/images/projects/william-rose-oakville/william-rose-oakville-acm.jpg",
        alt:"William Rose ACM Residence project exterior in Oakville, ON",
        caption:"Project exterior",
        phase:"Completed",
        hero:true
      }
    ]}
  />;
}
