import Link from "next/link";
import {ArrowUpRight,PackageCheck,Factory,HardHat,PenTool} from "lucide-react";

const services=[
 {number:"01",title:"Material Supply",copy:"Exterior materials and components coordinated around project requirements, quantities and schedule.",href:"/services/material-supply",icon:PackageCheck},
 {number:"02",title:"Custom Fabrication",copy:"Project-specific ACM panels, flashing, trims and specialty components.",href:"/services/custom-fabrication",icon:Factory},
 {number:"03",title:"Installation",copy:"Coordinated field installation across exterior wall, soffit and façade systems.",href:"/services/installation",icon:HardHat},
 {number:"04",title:"Design & Permit Support",copy:"Façade design, constructability, material selection and permit-assistance workflows.",href:"/services/design-permit-support",icon:PenTool}
];

export default function HomeServicesShowcase(){
 return <section className="homeServicesV51">
  <div className="wrap">
   <div className="homeServicesV51Head">
    <div><span className="eyebrow">OUR CORE SERVICES</span><h2>One exterior scope.<br/><span>Four connected capabilities.</span></h2></div>
    <div><p>From first material decision to field execution, CladCan connects the people, products and details that shape the exterior.</p><Link href="/services">View all services <ArrowUpRight size={15}/></Link></div>
   </div>
   <div className="homeServicesV51Grid">
    {services.map(({number,title,copy,href,icon:Icon})=><Link href={href} className="homeServiceV51" key={title}>
      <div className="homeServiceV51Top"><span>{number}</span><Icon size={22}/></div>
      <h3>{title}</h3><p>{copy}</p>
      <strong>Explore service <ArrowUpRight size={14}/></strong>
    </Link>)}
   </div>
  </div>
 </section>;
}