import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const posts = [
  {date:"MARCH 18, 2026", title:"ACM Panel Maintenance Playbook: Keep Facades Looking New", href:"/blog/acm-panel-maintenance-playbook"},
  {date:"MARCH 2, 2026", title:"Façade Budget Planning Checklist for 2026 Projects", href:"/blog/facade-budget-planning-checklist"},
  {date:"JANUARY 15, 2024", title:"The Complete Guide to Choosing Exterior Cladding Materials", href:"/blog/guide-to-cladding-materials"},
];

const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=CladCan%20Building%20Envelope%20%26%20Facade%20Contractors%205000%20Dufferin%20St%20Unit%20K%20North%20York%20ON%20M3H%205T5";

export default function Footer(){
  return <footer className="referenceFooter">
    <div className="wrap referenceFooterGrid">

      <div className="footerBrandCol">
        <Link href="/" className="footerBrandMark" aria-label="CladCan home">
          <span className="footerMarkBox">DC</span>
          <span className="footerWordmark">
            <b>CLADCAN</b>
            <small>Modern Exterior Cladding Solutions</small>
          </span>
        </Link>

        <p>
          CladCan coordinates exterior material supply, fabrication, installation and design support for residential, commercial and institutional projects across Ontario.
        </p>

        <em>Clear project direction. Coordinated exterior delivery.</em>
      </div>

      <div className="footerContactCol">
        <h3>Contact CladCan</h3>
        <div className="footerRule"></div>

        <a href="tel:+18449243030"><Phone size={20}/> <span>+1 (844) 924-3030</span></a>
        <a href="mailto:info@cladcan.ca"><Mail size={20}/> <span>info@cladcan.ca</span></a>

        <a
          className="footerAddress"
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open CladCan showroom and office address in Google Maps"
        >
          <MapPin size={21}/>
          <div>
            <b>Showroom/Office Address:</b>
            <span>CladCan Building Envelope &amp; Façade Contractors</span>
            <span>5000 Dufferin St, Unit K,</span>
            <span>North York, ON M3H 5T5</span>
          </div>
        </a>

        <div className="footerSocials" aria-label="CladCan social links">
          <span aria-label="Facebook" style={{opacity:.7}}><Facebook size={21}/></span>
          <span aria-label="Twitter" style={{opacity:.7}}><Twitter size={21}/></span>
          <span aria-label="Instagram" style={{opacity:.7}}><Instagram size={21}/></span>
          <span aria-label="LinkedIn" style={{opacity:.7}}><Linkedin size={21}/></span>
        </div>
      </div>

      <div className="footerPostsCol">
        <h3>Recent Blog Posts</h3>
        <div className="footerRule"></div>

        <div className="footerPosts">
          {posts.map((post, i)=><Link href={post.href} className="footerPost" key={post.title}>
            <div className={`footerPostThumb thumb${i+1}`}></div>
            <div>
              <small>{post.date}</small>
              <span>{post.title}</span>
            </div>
          </Link>)}
        </div>
      </div>

    </div>
  </footer>;
}
