import { Visual, SectionTitle, QuoteBand } from "@/components/SiteBlocks";

export const metadata={title:"Commercial Façade Case Study"};

export default function CaseStudy(){
 return <>
  <section className="caseHero">
   <div className="wrap">
     <span className="eyebrow">CASE STUDY · COMMERCIAL · GTA</span>
     <h1>Façade modernization</h1>
     <p>Prototype case-study structure for a future verified CladCan project.</p>
     <Visual label="PRIMARY AFTER IMAGE" variant="graphite" ratio="caseHero"/>
   </div>
  </section>

  <section className="caseFacts"><div className="wrap">
    <div><span>Project Type</span><b>Commercial</b></div>
    <div><span>Location</span><b>Greater Toronto Area</b></div>
    <div><span>Scope</span><b>Cladding · Fabrication · Installation</b></div>
    <div><span>Systems</span><b>To be verified from project records</b></div>
  </div></section>

  <section className="section"><div className="wrap caseNarrative">
    <div><span className="eyebrow">PROJECT OVERVIEW</span><h2>Turn a gallery into evidence of execution.</h2></div>
    <div><p>This page intentionally does not invent project facts. Once a real CladCan project is selected, this section should document the existing condition, project scope, design requirements, fabrication responsibilities, site constraints and completed result.</p><p>The goal is to help an architect, builder or owner understand not only what the finished façade looks like, but what CladCan was responsible for delivering.</p></div>
  </div></section>

  <section className="section paper"><div className="wrap">
    <SectionTitle kicker="BEFORE / AFTER" title="Make transformation measurable visually."/>
    <div className="beforeAfter">
      <Visual label="BEFORE" variant="stone" ratio="beforeAfter"/>
      <Visual label="AFTER" variant="graphite" ratio="beforeAfter"/>
    </div>
  </div></section>

  <section className="section"><div className="wrap">
    <SectionTitle kicker="PROJECT STORY" title="Challenge → coordination → outcome."/>
    <div className="storySteps">
      <div><span>01</span><h3>Existing condition</h3><p>Document the actual façade condition and why the project was initiated.</p></div>
      <div><span>02</span><h3>Scope & coordination</h3><p>Identify CladCan’s exact responsibilities, interfaces, materials and project constraints.</p></div>
      <div><span>03</span><h3>Fabrication & field work</h3><p>Show how project-specific components and site conditions were resolved.</p></div>
      <div><span>04</span><h3>Completed result</h3><p>Use final photography, close-up details and verified client feedback where available.</p></div>
    </div>
  </div></section>

  <section className="section darkSection"><div className="wrap">
    <SectionTitle kicker="PROJECT GALLERY" title="Large photography. Minimal interruption."/>
    <div className="caseGallery"><Visual label="DETAIL 01" variant="metal"/><Visual label="DETAIL 02" variant="silver"/><Visual label="WIDE ELEVATION" variant="graphite"/></div>
  </div></section>

  <QuoteBand title="Planning a similar exterior project?" copy="Send drawings, existing-condition photos or a tender package for review."/>
 </>;
}
