"use client";
import {useState} from "react";

const brands=[
  {name:"Agway",src:"https://cladcan.ca/assets/agway-jARvj5i5.png"},
  {name:"Vicwest",src:"https://cladcan.ca/assets/vicwest-CspsHFbN.png"},
  {name:"Longboard",src:"https://cladcan.ca/assets/longboard-CvOL7Wix.png"},
  {name:"FastPlank",src:"https://cladcan.ca/assets/fastplank-Df-wzxHz.png"},
  {name:"Sto",src:"https://cladcan.ca/assets/sto-6VQzAvEV.png"},
  {name:"DuROCK",src:"https://cladcan.ca/assets/durock-BNHEjvHk.png"},
  {name:"Alubond",src:"https://cladcan.ca/assets/alubond-C9gYLeya.png"},
  {name:"ALPOLIC",src:"https://cladcan.ca/assets/alpolic-D9jKHm5e.png"},
  {name:"Alcotex",src:"https://cladcan.ca/assets/alcotex-CtxDQ0-0.png"},
  {name:"WPC",src:"https://cladcan.ca/assets/wpc-DtlpDGgC.png"},
  {name:"James Hardie",src:"https://cladcan.ca/assets/jameshardie-cZd73Qfv.png"},
  {name:"Maibec",src:"https://cladcan.ca/assets/maibec-h9_uIOxm.png"},
  {name:"Nichiha",src:"https://cladcan.ca/assets/nichiha-C__G6K9O.png"},
  {name:"Galanta",src:"https://cladcan.ca/assets/galanta-u-9GvORR.png"},
  {name:"IKO",src:"https://cladcan.ca/assets/iko-C7Ro_7C5.png"},
  {name:"Norbec",src:"https://cladcan.ca/assets/norbec-B0bTxxP1.png"}
];

function Logo({brand}){
  const [failed,setFailed]=useState(false);
  if(failed){
    return <span className="brandTextFallback">{brand.name}</span>;
  }
  return <img
    src={brand.src}
    alt={`${brand.name} logo`}
    loading="eager"
    draggable="false"
    onError={()=>setFailed(true)}
  />;
}

function LogoGroup({hidden=false}){
  return <div className="tickerGroup" aria-hidden={hidden || undefined}>
    {brands.map((brand,i)=>
      <div className="logoItem" key={`${brand.name}-${i}`}>
        <Logo brand={brand}/>
      </div>
    )}
  </div>;
}

export default function ManufacturerTicker(){
  return <section className="logoTicker referenceLogoBar fixedLogoRail seamlessLogoRail" aria-label="CladCan manufacturers and suppliers">
    <div className="tickerTrack seamlessTickerTrack">
      <LogoGroup/>
      <LogoGroup hidden/>
    </div>
    <style jsx>{`
      .seamlessLogoRail{
        width:100%;
        overflow:hidden;
      }
      .seamlessTickerTrack{
        display:flex;
        width:max-content;
        max-width:none;
        animation:cladcan-logo-scroll 42s linear infinite;
        will-change:transform;
      }
      .tickerGroup{
        display:flex;
        flex:none;
        align-items:center;
      }
      .tickerGroup :global(.logoItem){
        flex:0 0 auto;
      }
      .seamlessLogoRail:hover .seamlessTickerTrack{
        animation-play-state:paused;
      }
      @keyframes cladcan-logo-scroll{
        from{transform:translate3d(0,0,0)}
        to{transform:translate3d(-50%,0,0)}
      }
      @media (max-width:700px){
        .seamlessTickerTrack{animation-duration:30s}
      }
      @media (prefers-reduced-motion:reduce){
        .seamlessTickerTrack{
          animation:none;
          transform:none;
        }
      }
    `}</style>
  </section>;
}
