import CurrentSitePage from "@/components/CurrentSitePage";
export const metadata={title:'Clean Architectural Finish'+" | CladCan",description:'Explore Clean Architectural Finish options, applications, finishes and project requirements. CladCan can coordinate material selection, supply and professional installation based on project-specific requirements.'};
export default function Page(){
	return (
		<CurrentSitePage
			eyebrow='IMP'
			title='Clean Architectural Finish'
			intro='IMP faces provide a crisp, modern exterior plane suitable for contemporary architecture and large-format façades.'
			overview='Insulated metal panels deliver a smooth, clean finish that works well for contemporary architecture. Finishes include coil-coated solids and specialty treatments; consistency of colour and protection during handling and installation are key to achieve the intended aesthetic on large façades.'
			items={[
				{title:"Finish Options",text:"Coil-coated solids, textured coatings and speciality finishes are available—confirm supplier guidance for cleaning and repair techniques."},
				{title:"Handling & Protection",text:"Protect factory-applied finishes during transport and installation; on-site damage to coated panels can be visually prominent on large façades."},
				{title:"Joints & Appearances",text:"Panel joint widths and alignment tolerances influence the perceived quality of the installation; use mock-ups to confirm appearance for critical elevations."},
				{title:"CladCan Services",text:"We coordinate mock-ups, advise on finish protection and help confirm joint layout and tolerances during design and installation phases."},
			]}
		/>
	);
}
