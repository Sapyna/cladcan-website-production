import CurrentSitePage from "@/components/CurrentSitePage";
export const metadata={title:'Distinction & Galanta'+" | CladCan",description:'Explore Distinction & Galanta options, applications, finishes and project requirements. CladCan can coordinate material selection, supply and professional installation based on project-specific requirements.'};
export default function Page(){
	return (
		<CurrentSitePage
			eyebrow='STEEL'
			title='Distinction & Galanta'
			intro='Hidden-fastener steel siding families that combine textural detail with clean, uninterrupted exterior surfaces.'
			overview='Distinction and Galanta are concealed-fastener steel siding systems engineered to present a smooth, uninterrupted exterior surface while offering textured or wood-inspired finishes. Concealed fasteners reduce the visual impact of fixings and simplify cleaning and maintenance. These systems are selected when a refined, contemporary façade is required without visible screw lines.'
			items={[
				{title:"Appearance & Finishes",text:"Wood-inspired and solid-colour finishes replicate timber character with the durability of steel. Confirm finish and coating types for specific environments, especially coastal exposures."},
				{title:"Application",text:"Suitable for residential façades, commercial fronts and feature walls where a continuous surface is preferred and fastener concealment improves aesthetics and longevity."},
				{title:"Detailing",text:"Concealed systems require careful edge detailing and interlock designs to manage water shedding and allow for thermal movement; shop drawings are recommended."},
				{title:"Limitations",text:"Hidden-fastener systems can be more sensitive to substrate flatness and tolerances; verify substrate preparation and fastener schedules for long runs."},
				{title:"CladCan Assistance",text:"We provide sample boards, coordinate manufacturer submittals, prepare shop drawings for trim and penetrations and support installer selection and oversight."},
			]}
		/>
	);
}
