"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Grid2X2, List } from "lucide-react";

export default function ProjectsCatalogue({projects}){
 const [view,setView]=useState("grid"); const [filter,setFilter]=useState("All");
 const filters=["All","Residential","Commercial","Multi-material","Before & After"];
 const shown=useMemo(()=>filter==="All"?projects:projects.filter(p=>p.tags.includes(filter)),[filter,projects]);
 return <section className="projectsV11Section"><div className="wrap">
  <div className="projectsV11Toolbar"><div className="projectsV11Filters">{filters.map(f=><button key={f} className={filter===f?"active":""} onClick={()=>setFilter(f)}>{f}</button>)}</div><div className="viewSwitcher"><button className={view==="grid"?"active":""} onClick={()=>setView("grid")}><Grid2X2 size={16}/>Grid</button><button className={view==="list"?"active":""} onClick={()=>setView("list")}><List size={17}/>List</button></div></div>
  {view==="grid"?<div className="projectsV11Grid">{shown.map(p=><Link href={p.href} className="projectV11Card" key={p.href}><div className="projectV11Image">{p.image?<Image src={p.image} alt={p.title} fill sizes="(max-width:900px) 100vw, 50vw"/>:<div className="projectV11Placeholder">PROJECT IMAGE</div>}<span className="projectV11Arrow"><ArrowUpRight size={19}/></span></div><div className="projectV11Meta"><span>{p.location}</span><span>{p.type}</span></div><h3>{p.title}</h3><p>{p.summary}</p><div className="projectV11Tags">{p.systems.map(x=><span key={x}>{x}</span>)}</div></Link>)}</div>:
  <div className="projectsV11List">{shown.map(p=><Link href={p.href} className="projectV11Row" key={p.href}><div className="projectV11Mini">{p.image?<Image src={p.image} alt={`${p.title} project preview`} fill sizes="120px"/>:null}</div><div><span>{p.location} · {p.type}</span><h3>{p.title}</h3></div><p>{p.systems.join(" · ")}</p><ArrowUpRight size={20}/></Link>)}</div>}
 </div></section>
}
