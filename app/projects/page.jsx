import Link from "next/link";
import Image from "next/image";
import ProjectsCatalogue from "@/components/ProjectsCatalogue";
import { ArrowDownRight } from "lucide-react";

export const metadata={
  title:"Exterior Cladding Projects | CladCan",
  description:"Explore selected CladCan exterior cladding and façade projects across Ontario, including ACM, cedar, soffit and exterior transformation projects."
};

const projects=[
  {
    title:"George Henry ACM Residence",
    location:"North York, ON",
    type:"Residential",
    tags:["Residential"],
    systems:["ACM Panel"],
    image:"/images/projects/george-henry-north-york/george-henry-north-york-exterior-cladding-01.webp",
    href:"/projects/george-henry-north-york",
    summary:"A North York residential ACM cladding project documented through completed project photography.",
    photoCount:15
  },
  {
    title:"Upper Canada Exterior",
    location:"North York, ON",
    type:"Residential",
    tags:["Residential"],
    systems:["Exterior Cladding"],
    image:"/images/projects/upper-canada-north-york/upper-canada-north-york-exterior-cladding-01.webp",
    href:"/projects/upper-canada-north-york",
    summary:"A North York residential exterior cladding project documented through completed project photography.",
    photoCount:7
  },
  {
    title:"Glenpark Exterior Cladding",
    location:"North York, ON",
    type:"Residential",
    tags:["Residential"],
    systems:["Exterior Cladding"],
    image:"/images/projects/glenpark-north-york/glenpark-north-york-exterior-cladding-01.webp",
    href:"/projects/glenpark-north-york",
    summary:"A North York residential exterior cladding project with clean contemporary detailing.",
    photoCount:8
  },
  {
    title:"Brunett Exterior Cladding",
    location:"North York, ON",
    type:"Residential",
    tags:["Residential"],
    systems:["Exterior Cladding"],
    image:"/images/projects/brunett-north-york/brunett-north-york-exterior-cladding-01.webp",
    href:"/projects/brunett-north-york",
    summary:"A North York residential exterior cladding project with clean contemporary detailing.",
    photoCount:7
  },
  {
    title:"Romney Road ACM Residence",
    location:"North York, ON",
    type:"Residential",
    tags:["Residential"],
    systems:["ACM Panel"],
    image:"/images/projects/romney-road-north-york/romney-road-north-york-exterior-cladding-01.webp",
    href:"/projects/romney-road-north-york",
    summary:"A North York residential ACM cladding project featuring clean contemporary panel detailing.",
    photoCount:10
  },
  {
    title:"Tavora Exterior Cladding",
    location:"Ontario",
    type:"Exterior Cladding",
    tags:["Exterior Cladding"],
    systems:["Exterior Cladding"],
    image:"/images/projects/tavora/tavora-exterior-cladding-project-01.webp",
    href:"/projects/tavora",
    summary:"A Tavora exterior cladding project documented through a complete gallery of project photography.",
    photoCount:30
  },
  {
    title:"Broadway Avenue Exterior",
    location:"North York, ON",
    type:"Residential",
    tags:["Residential"],
    systems:["Exterior Cladding"],
    image:"/images/projects/broadway-avenue-north-york/broadway-avenue-north-york-exterior-cladding-01.webp",
    href:"/projects/broadway-avenue-north-york",
    summary:"A residential exterior cladding project on Broadway Avenue in North York, featuring clean contemporary façade detailing.",
    photoCount:7
  },
  {
    title:"Green Valley ACM Residence",
    location:"North York, ON",
    type:"Residential",
    tags:["Residential"],
    systems:["ACM Panel"],
    image:"/images/projects/green-valley-north-york/green-valley-north-york-acm-residence-01.webp",
    href:"/projects/green-valley-north-york",
    summary:"A residential ACM cladding project in North York featuring contemporary panel installation and clean architectural detailing.",
    photoCount:10
  },
  {
    title:"8 Ravenscroft ACM Residence",
    location:"North York, ON",
    type:"Residential",
    tags:["Residential"],
    systems:["ACM Panel"],
    image:"/images/projects/ravenscroft-north-york/ravenscroft-north-york-acm-residence-01.jpg",
    href:"/projects/ravenscroft-north-york",
    summary:"A residential ACM cladding project at 8 Ravenscroft in North York, featuring contemporary panel detailing and clean architectural lines.",
    photoCount:5
  },
  {
    title:"Sideroad 17 Exterior Transformation",
    location:"Schomberg, ON",
    type:"Residential",
    tags:["Residential","Before & After"],
    systems:["ACM Panel","Exterior Cladding"],
    image:"/images/before-after/sideroad-17-schomberg-before.jpg",
    href:"/projects/sideroad-17-schomberg",
    summary:"A residential exterior transformation featuring black ACM cladding across fascia, columns, canopies and glazed outdoor living areas.",
    photoCount:12
  },
  {
    title:"Gray Lane ACM, Stucco & Dekko Residence",
    location:"Barrie, ON",
    type:"Residential",
    tags:["Residential","Before & After","Multi-material"],
    systems:["ACM Panel","Stucco","Dekko"],
    image:"/images/projects/gray-lane-barrie/gray-lane-barrie-acm-stucco-dekko-residence-front-wide.webp",
    href:"/projects/gray-lane-barrie",
    summary:"A contemporary Barrie residence combining ACM panels, stucco and Dekko cladding with crisp panel geometry and contrasting exterior finishes.",
    photoCount:14,
    videoCount:1
  },
  {
    title:"Churchill Street ALPOLIC ACM",
    location:"North York, ON",
    type:"Residential",
    tags:["Residential"],
    systems:["ACM Panel","ALPOLIC"],
    image:"/images/projects/churchill-street-north-york/churchill-street-alpolic-acm-01.jpg",
    href:"/projects/churchill-street-north-york",
    summary:"An ACM cladding project on Churchill Street featuring ALPOLIC panels and clean contemporary exterior detailing.",
    photoCount:12
  },
  {
    title:"Pharmacy Avenue Exterior Transformation",
    location:"Scarborough, ON",
    type:"Commercial",
    tags:["Commercial","Before & After"],
    systems:["Exterior Cladding"],
    image:"/images/before-after/pharmacy-scarborough-after.jpg",
    href:"/projects/pharmacy-scarborough",
    summary:"Commercial exterior work in Scarborough documented through existing-condition and completed-project photography.",
    photoCount:2
  },
  {
    title:"ACM + Cedar Soffit & Fascia",
    location:"Toronto, ON",
    type:"Multi-material",
    tags:["Multi-material"],
    systems:["ACM Panel","Cedar Siding","Fascia","Soffit"],
    image:"/images/exterior-systems/natural-wood/cedar/cedar-soffit-acm-fascia-residential-project.webp",
    href:"/projects/acm-cedar-soffit-fascia",
    summary:"ACM panel installation complemented by cedar soffit and fascia detailing for a refined multi-material exterior.",
    photoCount:1
  },
  {
    title:"ACM Façade",
    location:"Toronto, ON",
    type:"Commercial",
    tags:["Commercial"],
    systems:["ACM Panel"],
    image:"/images/projects/acm-facade-toronto/toronto-acm-facade-completed-wide-view.webp",
    href:"/projects/acm-stucco-toronto",
    summary:"A Toronto ACM façade project featuring clean panel geometry and a contemporary exterior expression.",
    photoCount:16
  },
  {
    title:"ACM Façade",
    location:"Richmond Hill, ON",
    type:"Commercial",
    tags:["Commercial"],
    systems:["ACM Panel"],
    image:"/images/projects/richmond-hill-medical-mall/richmond-hill-medical-mall-acm-facade-completed-side-perspective.webp",
    href:"/projects/luxclad-richmond-hill",
    summary:"ACM installation with concealed-fastener detailing for a contemporary commercial façade.",
    photoCount:15,
    videoCount:1
  }
];

export default function Projects(){
  return <>
    <section className="projectsV11Hero">
      <Image
        className="projectsV11HeroBackdrop"
        src="/images/projects/richmond-hill-medical-mall-acm-cladding-projects-hero.webp"
        alt="Richmond Hill Medical Mall ACM cladding project completed by CladCan"
        fill
        priority
        sizes="100vw"
      />
      <div className="wrap">
        <div className="projectsV11HeroGrid">
          <div>
            <span className="eyebrow">SELECTED WORK · ONTARIO</span>
            <h1>Built work.<br/><em>Real context.</em></h1>
          </div>
          <div>
            <p>Explore exterior transformations, façade systems and multi-material projects delivered across Ontario. Open any project to view its verified photography and project gallery.</p>
            <a href="#project-index">Explore projects <ArrowDownRight size={18}/></a>
          </div>
        </div>
      </div>
    </section>

    <div id="project-index"><ProjectsCatalogue projects={projects}/></div>

    <section className="projectsV11CTA">
      <div className="wrap">
        <span className="eyebrow">START A PROJECT</span>
        <h2>Have drawings, photos<br/>or a tender package?</h2>
        <p>Send the project information you already have. We can review the scope and identify the right next step.</p>
        <Link href="/contact">Start a project <span>↗</span></Link>
      </div>
    </section>
  </>;
}
