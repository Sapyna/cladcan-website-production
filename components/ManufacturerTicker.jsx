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
    onError={()=>setFailed(true)}
  />;
}

export default function ManufacturerTicker(){
  return <section className="logoTicker referenceLogoBar fixedLogoRail" aria-label="CladCan manufacturers and suppliers">
    <div className="tickerTrack">
      {[...brands,...brands].map((brand,i)=>
        <div className="logoItem" key={`${brand.name}-${i}`}>
          <Logo brand={brand}/>
        </div>
      )}
    </div>
  </section>;
}
