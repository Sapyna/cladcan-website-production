import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import FastPlankTabbed from "@/components/FastPlankTabbed";

export const metadata={title:"FastPlank® Premium Aluminum Siding & Soffit | CladCan",description:"FastPlank aluminum siding and soffit: installation, performance, profiles, trims and colour options."};

export default function Page(){return <main className="fastPlankPage">
  <section className="internalHero exteriorSystemDetailHero fastPlankHero"><div className="internalHeroImage exteriorSystemHeroMedia" style={{backgroundImage:"url('/images/source-library/aluminum/fastplank/hero.webp')"}}/><div className="wrap internalHeroCopy"><span>ALUMINUM SIDING & SOFFIT</span><h1>FastPlank® Premium Siding & Soffit</h1><p>A sophisticated aluminum plank system designed for streamlined installation, refined curb appeal and long-term exterior durability.</p><div className="heroActions"><Link href="/contact" className="btn internalRedBtn">Get a Quote →</Link><Link href="/contact" className="btn lineBtn">Request Sample</Link></div></div></section>

  <FastPlankTabbed />

  <section className="fastPlankExpert"><div className="wrap fastPlankExpertInner"><div><span className="fastPlankEyebrow">SPEAK WITH AN EXPERT</span><h2>Get personalized advice and expert guidance.</h2><p>Achieve your project goals with confidence.</p></div><Link href="/contact" className="btn internalRedBtn">Speak with an Expert <ArrowUpRight size={15}/></Link></div></section>
  <style>{`
    .fastPlankTabbed{display:grid;grid-template-columns:250px minmax(0,1fr);gap:52px;align-items:start;padding-top:64px;padding-bottom:88px}
    .fastPlankTabMenu{position:sticky;top:92px;display:flex;flex-direction:column;border-left:1px solid #d9e0e4;padding:6px 0 6px 16px}
    .fastPlankTabMenu button{display:grid;grid-template-columns:30px 24px 1fr;align-items:center;gap:8px;min-height:58px;padding:10px 12px;border:0;border-radius:8px;background:transparent;color:#6b7c86;text-align:left;cursor:pointer}
    .fastPlankTabMenu button:hover{background:#f4f1eb;color:#0a2133}
    .fastPlankTabMenu button.active{background:#f4f1eb;color:#0a2133}
    .fastPlankTabMenu button.active:before{content:"";position:absolute;left:-1px;width:2px;height:34px;background:#d61f24}
    .fastPlankTabMenu button{position:relative}
    .fastPlankTabMenu button>span{font-size:11px;font-weight:800;letter-spacing:.08em;color:#a9783e}
    .fastPlankTabMenu button svg{color:#a9783e}
    .fastPlankTabMenu button strong{font-size:15px;line-height:1.2;font-weight:750}
    .fastPlankTabPanel{min-width:0}
    .fastPlankTabPanel>section{padding:0!important;background:transparent!important}
    .fastPlankTabPanel>section>.wrap{width:100%!important;max-width:none!important;padding:0!important}
    .fastPlankTabPanel .fastPlankSplit,.fastPlankTabPanel .fastPlankTrimGrid{width:100%}
    @media(max-width:900px){
      .fastPlankTabbed{display:block;padding-top:0}
      .fastPlankTabMenu{position:sticky;top:72px;z-index:20;flex-direction:row;overflow-x:auto;border-left:0;border-bottom:1px solid #d9e0e4;padding:10px 16px;background:#fff}
      .fastPlankTabMenu button{flex:0 0 auto;grid-template-columns:22px 1fr;min-height:44px;white-space:nowrap}
      .fastPlankTabMenu button>span{display:none}
      .fastPlankTabMenu button.active:before{left:10px;right:10px;bottom:0;width:auto;height:2px}
      .fastPlankTabPanel{padding:38px 0 0}
    }
  `}</style>
</main>}
