"use client";
import {useState} from "react";

const pairs=[
 {
  title:"Barrie, ON",
  before:"/images/before-after/gray-lane-barrie-before.jpg",
  after:"/images/before-after/gray-lane-barrie-after.jpg",
  note:"Residential exterior transformation"
 },
 {
  title:"Scarborough, ON",
  before:"/images/before-after/pharmacy-scarborough-before.jpg",
  after:"/images/before-after/pharmacy-scarborough-after.jpg",
  note:"Commercial exterior renovation"
 },
 {
  title:"Schomberg, ON",
  before:"/images/before-after/sideroad-17-schomberg-before.jpg",
  after:"/images/before-after/sideroad-17-schomberg-after.jpg?v=2",
  note:"Building-envelope preparation to finished ACM cladding"
 },
 {
  title:"Stoufville, ON",
  before:"/images/before-after/Stoufville%20-%20before.jpeg",
  after:"/images/before-after/Stoufville%20-%20after.jpeg",
  note:"Exterior cladding transformation"
 }
];

function Compare({item}){
 const [value,setValue]=useState(50);
 const imageStyle={
  position:"absolute",
  inset:0,
  width:"100%",
  height:"100%",
  objectFit:"cover",
  objectPosition:"center",
  display:"block"
 };
 return <article className="baCard">
  <div className="baCompare" style={{position:"relative",aspectRatio:"16 / 9",overflow:"hidden",background:"#f2f4f5"}}>
   <img src={item.after} alt={`${item.title} after`} className="baBase" style={imageStyle}/>
   <img
    src={item.before}
    alt={`${item.title} before`}
    style={{...imageStyle,clipPath:`inset(0 ${100-value}% 0 0)`}}
   />
   <div className="baDivider" style={{left:`${value}%`}}><span>↔</span></div>
   <span className="baTag baBeforeTag">BEFORE</span>
   <span className="baTag baAfterTag">AFTER</span>
   <input
     aria-label={`Compare before and after for ${item.title}`}
     type="range"
     min="0"
     max="100"
     value={value}
     onChange={e=>setValue(Number(e.target.value))}
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
  </div>
 </section>;
}
