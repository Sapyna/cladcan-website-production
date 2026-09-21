import ProjectShowcase from "../../../components/ProjectShowcase";

export const metadata={
  title:"George Henry ACM Residence | CladCan Projects",
  description:"A North York residential ACM project documented with verified CladCan photography."
};

export default function Page(){
  return <ProjectShowcase
    title="George Henry ACM Residence"
    eyebrow="RESIDENTIAL · NORTH YORK, ON"
    summary="A North York residential ACM project documented with verified CladCan photography."
    facts={[
      {label:"Location",value:"North York, ON"},
      {label:"Project type",value:"Residential"},
      {label:"Systems",value:"ACM Panel"},
      {label:"Photography",value:"Verified project photo"},
    ]}
    images={[
      {
        src:"/images/projects/george-henry-north-york/george-henry-north-york-acm.jpg",
        alt:"George Henry ACM Residence project exterior in North York, ON",
        caption:"Project exterior",
        phase:"Completed",
        hero:true
      }
    ]}
  />;
}
