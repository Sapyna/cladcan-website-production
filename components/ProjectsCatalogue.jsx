"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Grid2X2, Images, List } from "lucide-react";

export default function ProjectsCatalogue({projects}){
  const [view,setView]=useState("grid");
  const [filter,setFilter]=useState("All");
  const filters=["All","Residential","Commercial","Multi-material","Before & After"];
  const shown=useMemo(()=>filter==="All"?projects:projects.filter(p=>p.tags.includes(filter)),[filter,projects]);

  return <section className="projectsV11Section"><div className="wrap">
    <div className="projectsV11Toolbar">
      <div className="projectsV11Filters">
        {filters.map(f=><button key={f} className={filter===f?"active":""} onClick={()=>setFilter(f)}>{f}</button>)}
      </div>
      <div className="viewSwitcher">
        <button className={view==="grid"?"active":""} onClick={()=>setView("grid")}><Grid2X2 size={16}/>Grid</button>
        <button className={view==="list"?"active":""} onClick={()=>setView("list")}><List size={17}/>List</button>
      </div>
    </div>

    {view==="grid"?
      <div className="projectsV11Grid">
        {shown.map(p=><Link href={p.href} className="projectV11Card" key={p.href}>
          <div className={`projectV11Image ${p.imageFit==="containFill"?"projectV11ImageContainFill":""}`}>
            {p.imageFit==="containFill"&&<Image src={p.image} alt="" aria-hidden="true" fill sizes="(max-width:900px) 100vw, 50vw" className="projectV11FillBackdrop"/>}
            <Image src={p.image} alt={p.title} fill sizes="(max-width:900px) 100vw, 50vw" className={p.imageFit==="containFill"?"projectV11ContainFull":p.imageFit==="contain"?"projectV11Contain":""}/>
            <span className="projectV11PhotoCount"><Images size={13}/>{p.photoCount} {p.photoCount===1?"photo":"photos"}{p.videoCount?` · ${p.videoCount} ${p.videoCount===1?"video":"videos"}`:""}</span>
            <span className="projectV11Arrow"><ArrowUpRight size={19}/></span>
          </div>
          <div className="projectV11Meta"><span>{p.location}</span><span>{p.type}</span></div>
          <h3>{p.title}</h3>
          <p>{p.summary}</p>
          <div className="projectV11Tags">{p.systems.map(x=><span key={x}>{x}</span>)}</div>
          <div className="projectV11Open">View project gallery <ArrowUpRight size={14}/></div>
        </Link>)}
      </div>
      :
      <div className="projectsV11List">
        {shown.map(p=><Link href={p.href} className="projectV11Row" key={p.href}>
          <div className="projectV11Mini"><Image src={p.image} alt={`${p.title} project preview`} fill sizes="120px" className={p.imageFit==="contain"?"projectV11Contain":""}/></div>
          <div><span>{p.location} · {p.type}</span><h3>{p.title}</h3></div>
          <p>{p.systems.join(" · ")}</p>
          <ArrowUpRight size={20}/>
        </Link>)}
      </div>
    }
  </div></section>;
}
