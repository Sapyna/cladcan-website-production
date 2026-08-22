import CurrentSitePage from "@/components/CurrentSitePage";
export const metadata={title:'Soffit Panels'+" | CladCan",description:'Explore Soffit Panels options, applications, finishes and project requirements. CladCan can coordinate material selection, supply and professional installation based on project-specific requirements.'};
export default function Page(){
	return (
		<CurrentSitePage
			eyebrow='PVC'
			title='Soffit Panels'
			intro='Practical PVC soffit panels for protected roofline ceilings and overhangs.'
			overview='PVC soffit panels perform well in sheltered roofline locations where low maintenance and insect resistance are priorities. Panels are offered in vented and solid options to support attic ventilation strategies; specify perforation patterns and spacing with the project’s ventilation requirements in mind.'
			items={[
				{title:"Vented vs Solid",text:"Choose vented panels where attic ventilation is required; solid panels are appropriate for enclosed soffits without attic airflow requirements."},
				{title:"Finish & Durability",text:"PVC maintains colour and resists moisture-related decay, but verify long-term UV fading guidance for selected colours in high-sun locations."},
				{title:"Integration",text:"Coordinate with fascia and eavestrough attachments to avoid conflicts and allow access for future maintenance."},
				{title:"CladCan Services",text:"We confirm venting requirements, provide sample recommendations and support installation coordination to align with roofing and attic ventilation systems."},
			]}
			ctaTitle="Designing a soffit system?"
			ctaText="Share roofline details and CladCan will advise on venting, panel selection and installation coordination."
		/>
	);
}
