import Link from "next/link";
import {ArrowUpRight,PackageCheck,Factory,HardHat,PenTool} from "lucide-react";

const services=[
  {
    number:"01",
    title:"Material Supply",
    eyebrow:"SOURCE & COORDINATE",
    copy:"Exterior materials, systems and components coordinated around project requirements, quantities and schedule.",
    href:"/services/material-supply",
    image:"/images/services/service-material-supply.webp",
    alt:"Exterior cladding materials supplied by CladCan",
    icon:PackageCheck
  },
  {
    number:"02",
    title:"Custom Fabrication",
    eyebrow:"FORM & FABRICATE",
    copy:"ACM panels, flashing, Z-bar, hat channel, trim and specialty components made for the project.",
    href:"/services/custom-fabrication",
    image:"/images/services/service-custom-fabrication.webp",
    alt:"Custom metal fabrication for exterior building systems",
    icon:Factory
  },
  {
    number:"03",
    title:"Installation",
    eyebrow:"BUILD & DELIVER",
    copy:"Field installation across wall and soffit systems, glazing, roofing and aluminum exterior scopes.",
    href:"/services/installation",
    image:"/images/services/service-installation.webp",
    alt:"CladCan exterior system installation team at work",
    icon:HardHat
  },
  {
    number:"04",
    title:"Design & Permit Support",
    eyebrow:"PLAN & RESOLVE",
    copy:"Façade design, constructability coordination, material selection and permit-assistance workflows.",
    href:"/services/design-permit-support",
    image:"/images/services/service-design-support.webp",
    alt:"CladCan design and permit support workflow",
    icon:PenTool
  }
];

export default function HomeServicesShowcase(){
  return <section className="homeServicesEditorial">
    <div className="wrap homeServicesEditorialHead">
      <div>
        <span className="eyebrow">OUR CORE SERVICES</span>
        <h2>One exterior scope.<br/><em>Four connected capabilities.</em></h2>
      </div>
      <div className="homeServicesEditorialIntro">
        <p>From first material decision to field execution, CladCan connects the people, products and details that shape the exterior.</p>
        <Link href="/services">View all services <ArrowUpRight size={15}/></Link>
      </div>
    </div>

    <div className="homeServicesPanels" aria-label="CladCan core services">
      {services.map(({number,title,eyebrow,copy,href,image,alt,icon:Icon})=>
        <Link className="homeServicesPanel" href={href} key={title}>
          <img src={image} alt={alt}/>
          <span className="homeServicesPanelShade"></span>
          <span className="homeServicesPanelTop">
            <b>{number}</b>
            <Icon size={22}/>
          </span>
          <span className="homeServicesPanelContent">
            <small>{eyebrow}</small>
            <strong>{title}</strong>
            <span className="homeServicesPanelReveal">
              <span>{copy}</span>
              <b>Explore service <ArrowUpRight size={15}/></b>
            </span>
          </span>
        </Link>
      )}
    </div>
  </section>;
}
