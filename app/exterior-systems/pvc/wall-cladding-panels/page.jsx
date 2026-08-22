import CurrentSitePage from "@/components/CurrentSitePage";
export const metadata={title:'Wall Cladding Panels'+" | CladCan",description:'Explore Wall Cladding Panels options, applications, finishes and project requirements. CladCan can coordinate material selection, supply and professional installation based on project-specific requirements.'};
export default function Page(){
	return (
		<CurrentSitePage
			eyebrow='PVC'
			title='Wall Cladding Panels'
			intro='Panelised PVC wall cladding options for contemporary façades and feature areas.'
			overview='Panelised PVC cladding offers larger-format visual geometry and can simplify installation in certain applications. Panels require careful junction detailing, especially at horizontal joints and penetrations, to prevent water ingress and allow for thermal movement. Use compatible backing, fasteners and sealing methods recommended by the panel supplier.'
			items={[
				{title:"Design Considerations",text:"Panel sizing, joint spacing and edge conditions shape both aesthetics and long-term performance; coordinate with installer and manufacturer."},
				{title:"Weatherproofing",text:"Detail perimeter flashings and sealant joints to manage movement and maintain weathertightness over the expected service life."},
				{title:"Limitations",text:"Large-format panels may require additional substrate support and careful transport/handling to avoid damage prior to installation."},
				{title:"CladCan Services",text:"We support engineering reviews for panelized systems, prepare interface details and help coordinate on-site panel handling and installation practices."},
			]}
			ctaTitle="Evaluating panelised PVC?"
			ctaText="Share your elevations and we’ll advise on panel sizing, joint treatment and supplier coordination to reduce on-site risk." 
		/>
	);
}
