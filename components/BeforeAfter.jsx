"use client";
import {useState} from "react";

const pairs=[
 {
  title:"William Rose",
  before:"/images/before-after/william-rose-before.jpg",
  after:"/images/before-after/william-rose-after.jpg",
  note:"Exterior canopy / façade transformation"
 },
 {
  title:"17th Sideroad · Schomberg",
  before:"/images/before-after/sideroad-17-schomberg-before.jpg",
  after:"/images/before-after/sideroad-17-schomberg-after.jpg",
  note:"Building-envelope preparation to finished ACM cladding"
 },
 {
  title:"Pharmacy Ave · Scarborough",
  before:"/images/before-after/pharmacy-scarborough-before.jpg",
  after:"/images/before-after/pharmacy-scarborough-after.jpg",
  note:"Commercial exterior renovation"
 },
 {
  title:"Gray Lane · Barrie",
  before:"/images/before-after/gray-lane-barrie-before.jpg",
  after:"/images/before-after/gray-lane-barrie-after.jpg",
  note:"Residential exterior transformation"
 }
];

const progress=[
 {title:"Bellamy",image:"/images/before-after/bellamy-before.jpg"},
 {title:"Port Union",image:"/images/before-after/port-union-before.jpg"},
 {title:"County",image:"/images/before-after/county-before.jpg"}
];

function Compare({item}){
 const [value,setValue]=useState(50);
 return <article className="baCard">
  <div className="baCompare">
   <img src={item.after} alt={`${item.title} after`} className="baBase"/>
   <div className="baBeforeLayer" style={{width:`${value}%`}}>
    <img src={item.before} alt={`${item.title} before`}/>
   </div>
   <div className="baDivider" style={{left:`${value}%`}}><span>↔</span></div>
   <span className="baTag baBeforeTag">BEFORE</span>
   <span className="baTag baAfterTag">AFTER</span>
   <input
     aria-label={`Compare before and after for ${item.title}`}
     type="range"
     min="0"
     max="100"
     value={value}
     onChange={e=>setValue(e.target.value)}
   />
  </div>
  <div className="baMeta">
   <b>{item.title}</b>
   <span>{item.note}</span>
  </div>
 </article>;
}

export default function BeforeAfter(){
 return <section className="section beforeAfterSection" id="before-after">
  <div className="wrap">
   <div className="sectionHead">
    <div>
     <span className="eyebrow">Project transformations</span>
     <h2>Before & After</h2>
    </div>
    <p>Drag the divider to compare real CladCan project transformations.</p>
   </div>

   <div className="baGrid">
    {pairs.map(item=><Compare key={item.title} item={item}/>)}
   </div>

   <div className="progressHead">
    <h3>More projects in progress</h3>
    <p>These projects currently have only a verified Before / in-progress photo. They will move into the comparison gallery once the matching completed photo is available.</p>
   </div>

   <div className="progressGrid">
    {progress.map(item=><figure key={item.title}>
      <img src={item.image} alt={`${item.title} project before or in progress`}/>
      <figcaption>
       <b>{item.title}</b>
       <span>Before / in progress</span>
      </figcaption>
    </figure>)}
   </div>
  </div>
 </section>;
}
