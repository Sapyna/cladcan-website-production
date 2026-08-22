import CurrentSitePage from "@/components/CurrentSitePage";
export const metadata={title:'Corrugated Siding & Soffit (7/8")'+" | CladCan",description:'Explore Corrugated Siding & Soffit (7/8") options, applications, finishes and project requirements. CladCan can coordinate material selection, supply and professional installation based on project-specific requirements.'};
export default function Page(){
	return (
		<CurrentSitePage
			eyebrow='STEEL'
			title='Corrugated Siding & Soffit (7/8")'
			intro='Corrugated steel profiles provide a rhythmic, textured exterior with a long-standing industrial and architectural pedigree.'
			overview='Corrugated 7/8" steel combines a classic corrugated silhouette with modern finishes suitable for walls, soffits and feature panels. The profile’s undulating geometry creates strong shadow lines and structural depth, making it a durable option for industrial, agricultural and design-forward residential projects. Corrugated panels are typically face-fixed and are valued for straightforward installation and robust performance in exposed conditions.'
			items={[
				{title:"Typical Applications",text:"Agricultural and industrial buildings, commercial façades, contemporary residential projects seeking an industrial expression, soffits and accent walls."},
				{title:"Appearance & Finishes",text:"Available in coil-coated solid colours and speciality coatings; finishes influence long-term colour stability and should be selected based on exposure and matching to adjacent materials."},
				{title:"Attachment & Installation",text:"Most corrugated profiles are face-fastened to purlins or a sub-frame; fastener selection and sealing at penetrations are critical to avoid leaks and galvanic corrosion."},
				{title:"Drainage & Flashing",text:"Detail transitions carefully at eaves, heads and intersections with windows and doors; provide clear drainage paths behind horizontal laps and at terminations."},
				{title:"Durability Considerations",text:"Corrugated steel is resilient but can be susceptible to denting in high-impact zones; consider panel orientation and support spacing for large, exposed façades."},
				{title:"CladCan Services",text:"We offer system selection advice, sample provision, supply coordination, shop drawing preparation and installation oversight to ensure durable terminations and weatherproof interfaces."},
			]}
			ctaTitle="Considering corrugated steel for your project?"
			ctaText="Send drawings or elevations and CladCan will help confirm profile, finish and installation details suitable for your site and performance needs."
		/>
	);
}
