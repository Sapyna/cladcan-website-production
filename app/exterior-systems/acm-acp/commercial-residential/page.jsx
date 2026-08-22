import CurrentSitePage from "@/components/CurrentSitePage";
export const metadata={title:'Commercial & Residential'+" | CladCan",description:'Explore Commercial & Residential options, applications, finishes and project requirements. CladCan can coordinate material selection, supply and professional installation based on project-specific requirements.'};
export default function Page(){
	return (
		<CurrentSitePage
			eyebrow='ACM ACP'
			title='Commercial & Residential'
			intro='ACM and ACP panels are specified across commercial and high-end residential projects when a lightweight, high-quality façade is desired.'
			overview='In commercial projects, ACM offers rapid installation and large-format panels that read well at scale; in residential contexts, carefully detailed junctions and mock-ups ensure the finish reads as intended. Consider access for maintenance and the potential for localised colour variation when mixing manufacturing batches.'
			items={[
				{title:"Commercial Use",text:"Large façades, curtain-wall surrounds and feature cladding benefit from ACM’s slim panels and precise joint control."},
				{title:"Residential Use",text:"Use in residential settings where careful detailing and mock-ups can confirm the scale and finish are suitable for smaller building proportions."},
				{title:"Coordination",text:"Coordinate panel modules with openings and structural bays to reduce site cutting and ensure consistent reveals."},
				{title:"CladCan Services",text:"We help plan module layouts, schedule mock-ups and coordinate supply to reduce visual variation and installation risk."},
			]}
		/>
	);
}
