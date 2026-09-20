"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Images, MapPin } from "lucide-react";
import styles from "./ProjectsIndex.module.css";

const filters=["All","Residential","Commercial","Multi-material","Before & After"];

export default function ProjectsIndex({projects}){
  const [filter,setFilter]=useState("All");
  const shown=useMemo(
    ()=>filter==="All"?projects:projects.filter((project)=>project.tags.includes(filter)),
    [filter,projects]
  );

  return <main className={styles.page}>
    <section className={styles.hero}>
      <div className={styles.shell}>
        <div className={styles.heroTop}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>SELECTED WORK · ONTARIO</p>
            <h1>Projects shaped by <em>material, detail & execution.</em></h1>
            <p>Explore completed CladCan work across residential, commercial and multi-material exterior systems. Open any project to see its verified photography and project gallery.</p>
            <a href="#project-library" className={styles.heroCta}>Explore the work <ArrowDownRight size={17}/></a>
          </div>
          <div className={styles.heroMosaic}>
            {projects.slice(0,3).map((project,index)=><Link href={project.href} className={styles["heroTile"+(index+1)]} key={project.href} aria-label={`View ${project.title}`}>
              <Image src={project.image} alt={project.title} fill priority={index===0} sizes={index===0?"(max-width:900px) 100vw, 45vw":"(max-width:900px) 50vw, 22vw"}/>
              <span><small>{String(index+1).padStart(2,"0")}</small>{project.title}</span>
            </Link>)}
          </div>
        </div>
        <div className={styles.heroFoot}>
          <span>{String(projects.length).padStart(2,"0")} PROJECTS</span>
          <span>RESIDENTIAL · COMMERCIAL · MULTI-MATERIAL</span>
          <span>CLICK ANY PROJECT TO OPEN ITS GALLERY</span>
        </div>
      </div>
    </section>

    <section className={styles.intro}>
      <div className={styles.shell}>
        <div className={styles.sectionNumber}>01</div>
        <div>
          <p className={styles.eyebrow}>PROJECT LIBRARY</p>
          <h2>Built work, organized as a visual archive.</h2>
        </div>
        <p className={styles.introCopy}>Each project opens into the same unified case-study experience, with project facts, full-frame photography, an image gallery and related systems.</p>
      </div>
    </section>

    <section className={styles.library} id="project-library">
      <div className={styles.shell}>
        <div className={styles.toolbar}>
          <div className={styles.filters} role="group" aria-label="Filter projects">
            {filters.map((item)=><button type="button" key={item} className={filter===item?styles.active:""} onClick={()=>setFilter(item)}>{item}</button>)}
          </div>
          <span className={styles.resultCount}>{String(shown.length).padStart(2,"0")} / {String(projects.length).padStart(2,"0")}</span>
        </div>

        <div className={styles.grid}>
          {shown.map((project,index)=><Link href={project.href} className={styles.card} key={project.href}>
            <div className={styles.visual}>
              <Image src={project.image} alt={project.title} fill sizes="(max-width:760px) 100vw, (max-width:1100px) 50vw, 33vw"/>
              <span className={styles.cardNumber}>{String(project.order || index+1).padStart(2,"0")}</span>
              <span className={styles.openIcon}><ArrowUpRight size={18}/></span>
              <span className={styles.photoCount}><Images size={14}/>{project.photoCount} {project.photoCount===1?"photo":"photos"}</span>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.meta}><span><MapPin size={13}/>{project.location}</span><span>{project.type}</span></div>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className={styles.systems}>{project.systems.map((system)=><span key={system}>{system}</span>)}</div>
              <div className={styles.cardAction}>View project gallery <ArrowUpRight size={15}/></div>
            </div>
          </Link>)}
        </div>
      </div>
    </section>

    <section className={styles.statement}>
      <div className={styles.shell}>
        <span className={styles.sectionNumber}>02</span>
        <p className={styles.eyebrow}>ONE SYSTEM · EVERY PROJECT</p>
        <h2>From project index to photography, the experience stays consistent.</h2>
        <p>As more verified project photos are added, the same structure expands automatically without redesigning each case study.</p>
      </div>
    </section>

    <section className={styles.cta}>
      <div className={styles.shell}>
        <p className={styles.eyebrow}>START A PROJECT</p>
        <h2>Have drawings, photos or a tender package?</h2>
        <p>Send the project information you already have. We can review the scope and identify the right next step.</p>
        <Link href="/contact">Start a project <ArrowUpRight size={17}/></Link>
      </div>
    </section>
  </main>;
}
