import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import FastPlankTabbed from "@/components/FastPlankTabbed";

export const metadata={title:"FastPlank® Premium Aluminum Siding & Soffit | CladCan",description:"FastPlank aluminum siding and soffit: installation, performance, profiles, trims and colour options."};

export default function Page(){return <main className="fastPlankPage">
  <section className="internalHero exteriorSystemDetailHero fastPlankHero"><div className="internalHeroImage exteriorSystemHeroMedia" style={{backgroundImage:"url('/images/source-library/aluminum/fastplank/hero.webp')"}}/><div className="wrap internalHeroCopy"><span>ALUMINUM SIDING & SOFFIT</span><h1>FastPlank® Premium Siding & Soffit</h1><p>A sophisticated aluminum plank system designed for streamlined installation, refined curb appeal and long-term exterior durability.</p><div className="heroActions"><Link href="/contact" className="btn internalRedBtn">Get a Quote →</Link><Link href="/contact" className="btn lineBtn">Request Sample</Link></div></div></section>

  <FastPlankTabbed />

  <section className="fastPlankExpert"><div className="wrap fastPlankExpertInner"><div><span className="fastPlankEyebrow">SPEAK WITH AN EXPERT</span><h2>Get personalized advice and expert guidance.</h2><p>Achieve your project goals with confidence.</p></div><Link href="/contact" className="btn internalRedBtn">Speak with an Expert <ArrowUpRight size={15}/></Link></div></section>
  <style>{`
    /* Match the approved ACM tab workspace proportions and typography. */
    .fastPlankTabbed{display:flex;align-items:flex-start;max-width:1500px;width:100%;margin:0 auto;min-height:760px;padding:0;border-left:1px solid #d7dedf;border-right:1px solid #d7dedf;background:#fff}
    .fastPlankTabMenu{position:sticky;top:92px;z-index:30;align-self:flex-start;display:flex;flex:0 0 270px;flex-direction:column;width:270px;padding:38px 0;border:0;border-right:1px solid #d7dedf;background:#f0f1ee}
    .fastPlankTabMenu button{position:relative;width:100%;display:grid;grid-template-columns:34px 28px 1fr;align-items:center;gap:8px;padding:17px 22px;border:0;border-bottom:1px solid #d7dedf;border-radius:0;background:transparent;color:#526570;text-align:left;cursor:pointer;transition:.2s}
    .fastPlankTabMenu button:first-child{border-top:1px solid #d7dedf}
    .fastPlankTabMenu button:hover{background:#f9faf8;color:#071a29}
    .fastPlankTabMenu button.active{background:#fff;color:#071a29;box-shadow:inset 4px 0 0 #d61f24}
    .fastPlankTabMenu button.active:before{content:none}
    .fastPlankTabMenu button>span{font-size:.68rem;font-weight:400;letter-spacing:.1em;color:#8f5f2f}
    .fastPlankTabMenu button svg{width:18px;height:18px;color:#7c8b92}
    .fastPlankTabMenu button.active svg{color:#8f5f2f}
    .fastPlankTabMenu button strong{font-size:.86rem;line-height:1.2;font-weight:700}
    .fastPlankTabPanel{flex:1 1 auto;min-width:0;min-height:760px;padding:72px clamp(34px,6vw,90px) 100px;background:#fff}
    .fastPlankTabPanel>section{padding:0!important;background:transparent!important}
    .fastPlankTabPanel>section>.wrap{width:100%!important;max-width:none!important;padding:0!important;margin:0!important}
    .fastPlankTabPanel .fastPlankSplit,.fastPlankTabPanel .fastPlankTrimGrid{width:100%;gap:70px}
    .fastPlankTabPanel h2{max-width:620px!important;margin:0 0 24px!important;font-family:var(--type-display)!important;font-size:clamp(1.7rem,2.15vw,2.45rem)!important;line-height:1.16!important;letter-spacing:-.025em!important;font-weight:600!important;text-wrap:balance!important}
    .fastPlankTabPanel .fastPlankEyebrow{font-size:.72rem!important;font-weight:850!important;letter-spacing:.17em!important;color:#8f5f2f!important;margin:0 0 14px!important}
    .fastPlankTabPanel p{font-size:1rem;line-height:1.7;color:#596c77}
    .fastPlankTabPanel .fastPlankIntroImage,.fastPlankTabPanel .fastPlankInstallImage{min-height:480px}
    .fastPlankTabPanel .fastPlankBenefitGrid,.fastPlankTabPanel .fastPlankProfileGrid{margin-top:40px}
    @media(max-width:1120px){
      .fastPlankTabMenu{flex-basis:220px;width:220px}
      .fastPlankTabMenu button{grid-template-columns:26px 22px 1fr;padding:15px 13px}
      .fastPlankTabPanel .fastPlankSplit,.fastPlankTabPanel .fastPlankTrimGrid{grid-template-columns:1fr;gap:40px}
    }
    @media(max-width:760px){
      .fastPlankTabbed{display:flex;flex-direction:column;border:0;min-height:0}
      .fastPlankTabMenu{order:0;position:sticky;top:64px;z-index:30;display:flex;flex-direction:row;flex:0 0 auto;width:100%;overflow-x:auto;overflow-y:hidden;padding:0;border:0;border-bottom:1px solid #d7dedf;background:#fff}
      .fastPlankTabMenu button{min-width:150px;grid-template-columns:25px 1fr;border-right:1px solid #d7dedf;border-bottom:0;padding:14px}
      .fastPlankTabMenu button:first-child{border-top:0}
      .fastPlankTabMenu button svg{display:none}
      .fastPlankTabMenu button.active{box-shadow:inset 0 -3px 0 #d61f24}
      .fastPlankTabPanel{order:1;width:100%;min-height:0;padding:48px 20px 78px}
      .fastPlankTabPanel h2{max-width:540px!important;font-size:clamp(1.65rem,7vw,2.15rem)!important;line-height:1.16!important;margin-bottom:20px!important}
      .fastPlankTabPanel .fastPlankIntroImage,.fastPlankTabPanel .fastPlankInstallImage{min-height:330px}
    }
  `}</style></main>}
