"use client";
import {useState} from "react";

const brands=[
 {name:"Agway Metals",src:"https://logo.clearbit.com/agwaymetals.com?size=320"},
 {name:"Vicwest",src:"https://static.wixstatic.com/media/14ee74_ccc9a0e812a24a4bbc6c14bd382d3a69~mv2.jpg/v1/fill/w_1080,h_1080,al_c,q_90/14ee74_ccc9a0e812a24a4bbc6c14bd382d3a69~mv2.jpg"},
 {name:"Longboard",src:"https://s3.amazonaws.com/feathr-api-pictures/WDmDc8hRMSVX06y1nDIG_New%20Stacked%20Logo%20Black%20%284%29.jpg"},
 {name:"FastPlank",src:"https://logo.clearbit.com/engagebp.com?size=320"},
 {name:"STO",src:"https://www.hempsteadstuccosupply.com/images/brands/stoproduct3.png"},
 {name:"DuROCK",src:"https://www.greenfriendlypaint.com/images/durock.jpg"},
 {name:"Alubond Canada",src:"https://alubond.com/wp-content/uploads/2022/06/alubond-canada-white.png"},
 {name:"ALPOLIC",src:"https://metalconstruction.org/sysimg/alpolic-suppliers-alpolic-image.jpg"},
 {name:"Alcotex",src:"https://logo.clearbit.com/alcotex.com?size=320"},
 {name:"James Hardie",src:"https://cdn.freebiesupply.com/logos/large/2x/james-hardie-1-logo-png-transparent.png"},
 {name:"Norbec",src:"https://logo.clearbit.com/norbec.com?size=320"}
];

function BrandLogo({brand}){
 const [failed,setFailed]=useState(false);
 if(failed) return <span className="brandTextFallback">{brand.name}</span>;
 return <img
   src={brand.src}
   alt={`${brand.name} logo`}
   loading="lazy"
   onError={()=>setFailed(true)}
 />;
}

export default function HomeMediaStrip(){
 const directVideo=process.env.NEXT_PUBLIC_HOME_VIDEO_URL || "/media/cladcan-home.mp4";
 const youtubeId=process.env.NEXT_PUBLIC_HOME_YOUTUBE_ID || "";

 return <>
  <section className="homeVideoSection">
   <div className="wrap">
    <div className="homeVideoFrame exactVideoFrame">
     {youtubeId ? (
       <iframe
         src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&modestbranding=1&playsinline=1`}
         title="CladCan homepage video"
         allow="autoplay; encrypted-media; picture-in-picture"
         allowFullScreen
       />
     ) : directVideo ? (
       <video autoPlay muted loop playsInline preload="metadata">
        <source src={directVideo}/>
       </video>
     ) : (
       <div className="videoUnavailable">
        <span>CLADCAN PROJECT VIDEO</span>
        <b>Exact current homepage video slot is ready</b>
        <p>The current public page confirms a video player is used, but its media URL is not exposed by the public crawl. Add the exact video URL in <code>.env.local</code> and this area will use it immediately.</p>
       </div>
     )}
    </div>
   </div>
  </section>

  <section className="brandTicker brandTickerLogos" aria-label="CladCan manufacturers and product partners">
   <div className="brandTickerTrack">
    {[...brands,...brands].map((brand,i)=>
      <div className="brandTickerItem logoTickerItem" key={`${brand.name}-${i}`}>
       <BrandLogo brand={brand}/>
      </div>
    )}
   </div>
  </section>
 </>;
}
