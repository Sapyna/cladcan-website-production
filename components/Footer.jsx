import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const posts = [
  {date:"MARCH 18, 2026", title:"ACM Panel Maintenance Playbook: Keep Facades Looking New", href:"/resources"},
  {date:"MARCH 2, 2026", title:"Facade Budget Planning Checklist for 2026 Projects", href:"/resources"},
  {date:"JANUARY 15, 2024", title:"The Complete Guide to Choosing Exterior Cladding Materials", href:"/resources"},
];

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
          Our team takes over everything, from an idea and concept development to realization.
          We believe in traditions and incorporate them within our innovations.
        </p>

        <em>Client is the soul of the project.</em>
      </div>

      <div className="footerContactCol">
        <h3>Contact CladCan</h3>
        <div className="footerRule"></div>

        <a href="tel:+18449243030"><Phone size={20}/> <span>+1 (844) 924-3030</span></a>
        <a href="mailto:info@cladcan.ca"><Mail size={20}/> <span>info@cladcan.ca</span></a>

        <div className="footerAddress">
          <MapPin size={21}/>
          <div>
            <b>Showroom/Office Address:</b>
            <span>CladCan Building Envelope &amp; Façade Contractors</span>
            <span>5000 Dufferin St, Unit K,</span>
            <span>North York, ON M3H 5T5</span>
          </div>
        </div>

        <div className="footerSocials">
          <a href="#" aria-label="Facebook"><Facebook size={21}/></a>
          <a href="#" aria-label="Twitter"><Twitter size={21}/></a>
          <a href="#" aria-label="Instagram"><Instagram size={21}/></a>
          <a href="#" aria-label="LinkedIn"><Linkedin size={21}/></a>
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
