import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const serviceLinks = [
  ["Material Supply", "/services/material-supply"],
  ["Custom Fabrication", "/services/custom-fabrication"],
  ["Installation", "/services/installation"],
  ["Design & Permit Support", "/services/design-permit-support"],
  ["Repair & Maintenance", "/services/repair-maintenance"],
];

const exploreLinks = [
  ["Exterior Systems", "/exterior-systems"],
  ["Projects", "/projects"],
  ["About CladCan", "/about"],
  ["Blog", "/blog"],
  ["Contact", "/contact"],
];

const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=CladCan%20Building%20Envelope%20%26%20Facade%20Contractors%205000%20Dufferin%20St%20Unit%20K%20North%20York%20ON%20M3H%205T5";

export default function Footer(){
  return <footer className="siteFooterPro">
    <div className="wrap footerCtaBand">
      <div>
        <span className="footerKicker">START A CONVERSATION</span>
        <h2>Planning an exterior project?</h2>
        <p>Material supply, fabrication, installation and design support — coordinated through one team.</p>
      </div>
      <Link href="/contact" className="footerPrimaryCta">Discuss Your Project <ArrowRight size={16}/></Link>
    </div>

    <div className="wrap footerMainGrid">
      <div className="footerBrandPro">
        <Link href="/" className="footerBrandMarkPro" aria-label="CladCan home">
          <img src="/images/cladcan-logo-transparent.svg" alt="CladCan Modern Exterior Cladding Solutions" />
        </Link>
        <p>Building envelope and façade coordination for residential, commercial and institutional projects across Ontario.</p>
        <strong>Building Envelope &amp; Façade Contractors</strong>
        <span>Toronto · GTA · Ontario</span>
        <em>Clear project direction. Coordinated exterior delivery.</em>
      </div>

      <nav className="footerNavCol" aria-label="Footer services navigation">
        <span className="footerColLabel">SERVICES</span>
        {serviceLinks.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}
      </nav>

      <nav className="footerNavCol" aria-label="Footer explore navigation">
        <span className="footerColLabel">EXPLORE</span>
        {exploreLinks.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}
      </nav>

      <div className="footerContactPro">
        <span className="footerColLabel">CONTACT</span>
        <a href="tel:+18449243030"><Phone size={17}/><span>+1 (844) 924-3030</span></a>
        <a href="mailto:info@cladcan.ca"><Mail size={17}/><span>info@cladcan.ca</span></a>
        <a className="footerAddressPro" href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
          <MapPin size={18}/>
          <span>5000 Dufferin St, Unit K<br/>North York, ON M3H 5T5</span>
        </a>
        <Link className="footerShowroomLink" href="/contact/showroom-visit">Book a Showroom Visit <ArrowRight size={14}/></Link>
      </div>
    </div>

    <div className="wrap footerBottomBar">
      <div className="footerLegal">
        <span>© 2026 CladCan</span>
        <Link href="/privacy">Privacy Policy</Link>
      </div>
      <div className="footerSocialsPro" aria-label="CladCan social channels">
        <span aria-label="Facebook"><Facebook size={18}/></span>
        <span aria-label="Twitter"><Twitter size={18}/></span>
        <span aria-label="Instagram"><Instagram size={18}/></span>
        <span aria-label="LinkedIn"><Linkedin size={18}/></span>
      </div>
    </div>
  </footer>;
}
