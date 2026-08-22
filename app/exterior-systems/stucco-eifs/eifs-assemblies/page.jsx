import CurrentSitePage from "@/components/CurrentSitePage";
export const metadata={title:'EIFS Assemblies'+" | CladCan",description:'Explore EIFS Assemblies options, applications, finishes and project requirements. CladCan can coordinate material selection, supply and professional installation based on project-specific requirements.'};
export default function Page(){
	return (
		<CurrentSitePage
			eyebrow='STUCCO EIFS'
			title='EIFS Assemblies'
			intro='EIFS assemblies combine continuous insulation, basecoat and reinforced finish to deliver a wide range of textured and smooth façades.'
			overview='EIFS assemblies are selected when continuous insulation and a seamless finish are priorities. Assemblies vary between barrier and drainage configurations; specifying the correct approach for the building’s climate, substrate and openings is essential. Successful EIFS installations rely on compatible substrate preparation, control joints, and correct mesh/embedment within the base coat.'
			items={[
				{title:"Barrier vs Drainage EIFS",text:"Barrier systems rely on the finish to shed water; drained EIFS include a drainage layer to safely evacuate incidental moisture — choose based on exposure and detailing."},
				{title:"Substrate Preparation",text:"Rigid substrates, proper fastener patterns and through-wall flashings form the foundation for durable EIFS work; poorly prepared substrates increase risk of moisture-related issues."},
				{title:"Finish Options",text:"Finishes range from fine acrylic textures to robust cast or specialty finishes that simulate masonry or stone; coordinate intended finish with architectural intent and maintenance planning."},
				{title:"CladCan Services",text:"We coordinate manufacturer selection, review shop drawings, confirm flashing and control joint layouts and help ensure installation teams follow specified substrate and embedment requirements."},
			]}
			ctaTitle="Using EIFS on your building?"
			ctaText="Share your wall sections and we’ll recommend a suitable EIFS approach and coordinate manufacturer submittals and details."
		/>
	);
}
