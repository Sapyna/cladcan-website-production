import CurrentSitePage from "@/components/CurrentSitePage";
export const metadata={title:'Architectural Accents'+" | CladCan",description:'Explore Architectural Accents options, applications, finishes and project requirements. CladCan can coordinate material selection, supply and professional installation based on project-specific requirements.'};
export default function Page(){
	return (
		<CurrentSitePage
			eyebrow='NATURAL WOOD'
			title='Architectural Accents'
			intro='Natural wood accents add tactility and human scale to façades — from entries and columns to screening and feature panels.'
			overview='Architectural accents crafted from natural wood provide focal points that soften larger façades and introduce an immediate material richness. Accents may include column wraps, entrance canopies, feature panels, screens and custom joinery. These elements require careful coordination for attachment, thermal movement and maintenance access.'
			items={[
				{title:"Common Accent Uses",text:"Entry surrounds, column and beam wraps, feature panels, fencing and screening — used to enrich façade composition and human scale."},
				{title:"Attachment & Support",text:"Accents often require bespoke brackets or concealed clips; detail the attachment for serviceability and to prevent moisture traps at connections."},
				{title:"Finish Coordination",text:"Match or intentionally contrast accent finishes with primary cladding; provide physical samples to confirm colour relationships under site lighting."},
				{title:"CladCan Services",text:"We help develop shop drawings, coordinate fabrication for custom accents and supervise installation to ensure durable, maintainable outcomes."},
			]}
			ctaTitle="Need custom wood accents?"
			ctaText="Share your concept and we’ll provide fabrication guidance, shop drawings and installation support tailored to your project."
		/>
	);
}
