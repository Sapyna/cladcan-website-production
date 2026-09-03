import CurrentSitePage from "@/components/CurrentSitePage";

export const metadata = {
  title: "EIFS Stucco Systems Toronto | Sto & DuROCK | CladCan",
  description: "Explore EIFS stucco systems from Sto and DuROCK for continuous insulation, drainage, air and moisture control, architectural finishes and retrofit projects.",
};

export default function Page() {
  return <CurrentSitePage
    title="EIFS Stucco Systems"
    intro="Continuous exterior insulation, drainage and reinforced architectural finishes for efficient, durable building envelopes."
    overview="EIFS is a non-load-bearing exterior cladding assembly that combines insulation, air and moisture control, reinforcing mesh, base coat and a textured finish. Sto and DuROCK are two separate manufacturers offering comparable EIFS system families, so CladCan presents them together while coordinating the exact tested assembly for each project."
    image="/images/stucco-eifs/eifs-stucco-modern-building-hero.webp"
    items={[
      {title:"Sto & DuROCK EIFS Systems",href:"/exterior-systems/stucco-eifs/durock-sto",image:"/images/stucco-eifs/eifs-stucco-modern-building-hero.webp",text:"Compare leading StoTherm ci, InsulROCK and PUCCS system options in one complete product page."},
      {title:"EIFS Assemblies",href:"/exterior-systems/stucco-eifs/eifs-assemblies",image:"/images/stucco-eifs/eifs-reinforcing-mesh-base-coat-installation.webp",text:"Understand the coordinated layers that provide drainage, insulation, reinforcement and exterior protection."},
      {title:"Architectural Finishes",href:"/exterior-systems/stucco-eifs/architectural-finishes",image:"/images/exterior-systems/stucco-eifs-exterior-cladding-ontario.jpeg",text:"Explore textures, colours, reveals, curves and specialty finish possibilities for residential and commercial design."},
    ]}
  />;
}