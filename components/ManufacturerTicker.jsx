
"use client";
import {useState} from "react";

const brands=[
  {name:"Agway Metals",src:"https://logo.clearbit.com/agwaymetals.com?size=320"},
  {name:"Vicwest",src:"https://logo.clearbit.com/vicwest.com?size=320"},
  {name:"Longboard",src:"https://logo.clearbit.com/longboardproducts.com?size=320"},
  {name:"FastPlank",src:"https://logo.clearbit.com/engagebp.com?size=320"},
  {name:"Sto",src:"https://logo.clearbit.com/sto.ca?size=320"},
  {name:"DuROCK",src:"https://logo.clearbit.com/durock.com?size=320"},
  {name:"Alubond Canada",src:"https://logo.clearbit.com/alubond.com?size=320"},
  {name:"ALPOLIC",src:"https://logo.clearbit.com/alpolic-americas.com?size=320"},
  {name:"Alcotex",src:"https://logo.clearbit.com/alcotex.com?size=320"},
  {name:"James Hardie",src:"https://logo.clearbit.com/jameshardie.ca?size=320"},
  {name:"Maibec",src:"https://logo.clearbit.com/maibec.com?size=320"},
  {name:"Nichiha",src:"https://logo.clearbit.com/nichiha.com?size=320"},
  {name:"IKO",src:"https://logo.clearbit.com/iko.com?size=320"},
  {name:"Norbec",src:"https://logo.clearbit.com/norbec.com?size=320"}
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
