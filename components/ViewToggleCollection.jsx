"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Grid2X2, List } from "lucide-react";

const STORAGE_KEY="cladcan-catalogue-view";

export default function ViewToggleCollection({items=[], variant="standard", className=""}){
  const [view,setView]=useState("grid");
  useEffect(()=>{try{const saved=window.localStorage.getItem(STORAGE_KEY);if(saved==="grid"||saved==="list")setView(saved);}catch{}},[]);
  const choose=(next)=>{setView(next);try{window.localStorage.setItem(STORAGE_KEY,next);}catch{}};
  return <div className={`viewCollection ${className}`} data-view={view} data-variant={variant}>
    <div className="viewCollectionToolbar" aria-label="Display options">
      <button type="button" className={view==="grid"?"active":""} onClick={()=>choose("grid")} aria-pressed={view==="grid"}><Grid2X2 size={16}/> Grid</button>
      <button type="button" className={view==="list"?"active":""} onClick={()=>choose("list")} aria-pressed={view==="list"}><List size={17}/> List</button>
    </div>
    <div className="viewCollectionItems">
      {items.map((item,index)=>{
        const content=<>
          <div className="viewCollectionVisual"><span className="viewCollectionNumber">{item.number || String(index+1).padStart(2,"0")}</span><span className="viewCollectionPlaceholder">{item.visualLabel || item.title}</span>{item.href&&<span className="viewCollectionArrow"><ArrowUpRight size={18}/></span>}</div>
          <div className="viewCollectionBody">{item.subtitle&&<span className="viewCollectionSubtitle">{item.subtitle}</span>}<h3>{item.title}</h3>{item.description&&<p>{item.description}</p>}{item.tags?.length>0&&<div className="viewCollectionTags">{item.tags.map(tag=><span key={tag}>{tag}</span>)}</div>}{item.href&&<strong>{item.linkLabel||"Explore"} <ArrowUpRight size={13}/></strong>}</div>
        </>;
        return item.href?<Link href={item.href} key={item.href} className="viewCollectionCard">{content}</Link>:<article key={`${item.title}-${index}`} className="viewCollectionCard">{content}</article>;
      })}
    </div>
  </div>;
}
