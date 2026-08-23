"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, ArrowUpRight, Phone } from "lucide-react";

const exteriorSystems = [
  ["Aluminum (Solid & Woodgrain)", "/exterior-systems/aluminum"],
  ["Steel (Solid & Woodgrain)", "/exterior-systems/steel"],
  ["Natural Wood", "/exterior-systems/natural-wood"],
  ["ACM / ACP", "/exterior-systems/acm-acp"],
  ["APP (Aluminum Plate)", "/exterior-systems/app"],
  ["Stucco / EIFS", "/exterior-systems/stucco-eifs"],
  ["Fibre Cement", "/exterior-systems/fibre-cement"],
  ["IMP", "/exterior-systems/imp"],
  ["PVC", "/exterior-systems/pvc"],
  ["WPC", "/exterior-systems/wpc"],
  ["Trims & Flashings", "/exterior-systems/trims-flashings"],
  ["Thin Veneer Siding & Soffit", "/exterior-systems/thin-veneer"],
  ["Eavestroughs & Downpipes", "/exterior-systems/eavestroughs-downpipes"],
];

const services = [
  ["Material Supply", "/services/material-supply"],
  ["Custom Fabrication", "/services/custom-fabrication"],
  ["Installation", "/services/installation"],
  ["Design & Permit Support", "/services/design-permit-support"],
  ["Repair & Maintenance", "/services/repair-maintenance"],
];

export default function Header() {
  const [mobile, setMobile] = useState(false);
  const [mega, setMega] = useState(null);
  const clear = () => setMega(null);

  return (
    <header className="siteHeader referenceHeader" onMouseLeave={clear}>
      <div className="wrap headerInner">
        <Link className="referenceLogo realSiteLogo" href="/" onMouseEnter={clear}>
          <img src="/images/cladcan-logo-transparent.svg" alt="CladCan Modern Exterior Cladding Solutions" />
        </Link>

        <nav className="desktopNav referenceDesktopNav">
          <Link href="/" onMouseEnter={clear}>Home</Link>

          <Link
            href="/exterior-systems"
            className={mega === "systems" ? "activeNav" : ""}
            onMouseEnter={() => setMega("systems")}
          >
            Exterior Systems <ChevronDown size={13} />
          </Link>

          <Link
            href="/services"
            className={mega === "services" ? "activeNav" : ""}
            onMouseEnter={() => setMega("services")}
          >
            Services <ChevronDown size={13} />
          </Link>

          <Link href="/projects" onMouseEnter={clear}>Projects</Link>
          <Link href="/blog" onMouseEnter={clear}>Blog</Link>
          <Link href="/about" onMouseEnter={clear}>About</Link>
          <Link href="/contact" onMouseEnter={clear}>Contact</Link>
        </nav>

        <div className="headerActions referenceHeaderActions" onMouseEnter={clear}>
          <a href="tel:+18449243030" className="headerPhone">
            <Phone size={15} /> +1 (844) 924-3030
          </a>
          <Link className="btn headerQuoteBtn" href="/contact">Get a Quote</Link>
          <button className="menuButton" onClick={() => setMobile(!mobile)} aria-label="Toggle menu">
            {mobile ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mega && (
        <div className="mega referenceMega" onMouseEnter={() => setMega(mega)} onMouseLeave={clear}>
          <div className="wrap referenceMegaGrid">
            <div className="referenceMegaIntro">
              <span className="eyebrow">{mega === "systems" ? "EXTERIOR SYSTEMS" : "SERVICES"}</span>
              <h3>{mega === "systems" ? "Wall & Soffit Systems" : "Coordinate more of the exterior scope through one team."}</h3>
              <p>{mega === "systems" ? "Cladding and soffit options for residential, commercial and institutional applications." : "Supply, fabrication, installation, design support and repair services."}</p>
              <Link
                href={mega === "systems" ? "/exterior-systems" : "/services"}
                className="headerMegaViewAll"
                onClick={clear}
              >
                View All {mega === "systems" ? "Exterior Systems" : "Services"} <ArrowUpRight size={13} />
              </Link>
            </div>

            <div className="referenceMegaLinks">
              {(mega === "systems" ? exteriorSystems : services).map(([label, href]) => (
                <Link key={label} href={href} onClick={clear}>
                  <span>{label}</span><ArrowUpRight size={13} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {mobile && (
        <div className="mobileNav">
          <Link href="/" onClick={() => setMobile(false)}>Home</Link>
          <Link href="/exterior-systems" onClick={() => setMobile(false)}>Exterior Systems</Link>
          <Link href="/services" onClick={() => setMobile(false)}>Services</Link>
          <Link href="/projects" onClick={() => setMobile(false)}>Projects</Link>
          <Link href="/blog" onClick={() => setMobile(false)}>Blog</Link>
          <Link href="/about" onClick={() => setMobile(false)}>About</Link>
          <Link href="/contact" onClick={() => setMobile(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}
