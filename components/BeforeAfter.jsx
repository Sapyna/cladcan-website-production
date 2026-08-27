"use client";
import {useState} from "react";

const pairs=[
 {
  title:"Gray Lane · Barrie",
  before:"/images/before-after/gray-lane-barrie-before.jpg",
  after:"/images/before-after/gray-lane-barrie-after.jpg",
  note:"Residential exterior transformation"
 },
 {
  title:"Pharmacy Ave · Scarborough",
  before:"/images/before-after/pharmacy-scarborough-before.jpg",
  after:"/images/before-after/pharmacy-scarborough-after.jpg",
  note:"Commercial exterior renovation"
 },
 {
  title:"17th Sideroad · Schomberg",
  before:"/images/before-after/sideroad-17-schomberg-before.jpg",
  after:"/images/before-after/sideroad-17-schomberg-after.jpg",
  note:"Building-envelope preparation to finished ACM cladding"
 },
 {
  title:"Richmond Hill Medical Mall · Richmond Hill",
  before:"/images/before-after/IMG_4511.JPG",
  after:"/images/before-after/IMG_4688.jpg",
  note:"Commercial façade transformation"
 }
];

const progress=[
 {title:"North York",image:"/images/projects/in-progress-eglinton.jpg"},
 {title:"North York",image:"/images/projects/in-progress-adelaide-rd.jpg"},
 {title:"North York",image:"/images/projects/in-progress-toronto.jpg"}
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

   <div className="progressHead">
    <h3>More projects in progress</h3>
    <p>A look at three active CladCan projects currently underway. Completed photography can be added as each exterior scope is finished.</p>
   </div>

   <div className="progressGrid">
    {progress.map(item=><figure key={item.image}>
      <div style={{width:"100%",aspectRatio:"4 / 3",display:"flex",alignItems:"center",justifyContent:"center",background:"#f2f4f5",overflow:"hidden"}}>
       <img src={item.image} alt={`${item.title} project in progress`} style={{width:"100%",height:"100%",objectFit:"contain",display:"block"}}/>
      </div>
      <figcaption>
       <b>{item.title}</b>
       <span>In progress</span>
      </figcaption>
    </figure>)}
   </div>
  </div>
 </section>;
}
