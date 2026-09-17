"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Phone, MapPin } from "lucide-react";

function WhatsAppIcon(){
  return <svg width="29" height="29" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path d="M26.9 5.2A14.8 14.8 0 0 0 3.6 22.9L1.7 30l7.3-1.9A14.8 14.8 0 0 0 26.9 5.2Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M11.1 9.2c.3-.6.7-.6 1-.6h.7c.3 0 .6.1.8.6l1.1 2.6c.2.5.1.8-.2 1.1l-.8 1c-.2.2-.4.5-.1.9.9 1.7 2.2 3.1 3.8 4 .5.3.8.2 1.1-.1l1.1-1.3c.3-.4.7-.4 1.1-.2l2.5 1.2c.5.2.8.4.9.7.1.3.1 1.8-.7 2.8-.8 1-2 1.5-3.3 1.7-1.1.1-2.7-.2-5.4-1.6-3.2-1.7-5.5-4.3-7-7.4-.5-1.1-.7-2.4-.3-3.5.4-1.2 1-1.7 1.7-1.9Z" fill="currentColor"/>
  </svg>
}

export default function QuickContactRail(){
  const [collapsed,setCollapsed] = useState(false);

  return <>
    <style>{`
      @media (min-width: 901px){
        .quickRail.quickRailCompact{
          width:60px !important;
          min-width:60px !important;
          max-width:60px !important;
          gap:9px !important;
          padding:11px 8px 12px !important;
          border-radius:0 18px 18px 0 !important;
        }
        .quickRail.quickRailCompact .quickRailToggle,
        .quickRail.quickRailCompact .quickRailAction{
          width:44px !important;
          height:44px !important;
          min-width:44px !important;
          min-height:44px !important;
        }
        .quickRail.quickRailCompact .quickRailToggle svg,
        .quickRail.quickRailCompact .quickRailAction svg{
          width:21px !important;
          height:21px !important;
        }
        .quickRail.quickRailCompact .quickRailAction span{
          left:52px !important;
        }
        .quickRail.quickRailCompact.quickRailCollapsed{
          width:44px !important;
          min-width:44px !important;
          max-width:44px !important;
          padding:8px 4px !important;
        }
        .quickRail.quickRailCompact.quickRailCollapsed .quickRailToggle{
          width:36px !important;
          height:36px !important;
          min-width:36px !important;
          min-height:36px !important;
        }
      }
    `}</style>

    <div className={`quickRail quickRailCompact ${collapsed ? "quickRailCollapsed" : ""}`} aria-label="Quick contact tools">
      <button className="quickRailToggle" onClick={()=>setCollapsed(!collapsed)} aria-label={collapsed ? "Open quick contact tools" : "Collapse quick contact tools"}>
        {collapsed ? <ChevronRight size={27}/> : <ChevronLeft size={27}/>}
      </button>

      {!collapsed && <>
        <a className="quickRailAction quickPhone" href="tel:+18449243030" aria-label="Call CladCan">
          <Phone size={29}/>
          <span>Call</span>
        </a>

        <a
          className="quickRailAction quickWhatsapp"
          href="https://wa.me/18449243030"
          target="_blank"
          rel="noreferrer"
          aria-label="Message CladCan on WhatsApp"
        >
          <WhatsAppIcon/>
          <span>WhatsApp</span>
        </a>

        <a
          className="quickRailAction quickLocation"
          href="https://www.google.com/maps/search/?api=1&query=5000+Dufferin+St+Unit+K+North+York+ON+M3H+5T5"
          target="_blank"
          rel="noreferrer"
          aria-label="Open CladCan location"
        >
          <MapPin size={29}/>
          <span>Location</span>
        </a>
      </>}
    </div>
  </>;
}
