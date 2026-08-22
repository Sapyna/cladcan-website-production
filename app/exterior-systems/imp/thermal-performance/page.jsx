import CurrentSitePage from "@/components/CurrentSitePage";
export const metadata={title:'Thermal Performance'+" | CladCan",description:'Explore Thermal Performance options, applications, finishes and project requirements. CladCan can coordinate material selection, supply and professional installation based on project-specific requirements.'};
export default function Page(){
	return (
		<CurrentSitePage
			eyebrow='IMP'
			title='Thermal Performance'
			intro='Insulated metal panels integrate insulation and exterior skin to deliver predictable thermal performance when detailed correctly.'
			overview='Thermal performance in IMP assemblies depends on panel core type, joint detailing and continuous insulation strategy across openings. Panels simplify the assembly of an envelope with controlled insulation placement, but designers must ensure that thermal bridging at supports, fasteners and connections is addressed through details and compatible substrates.'
			items={[
				{title:"Core Types & Performance",text:"Different core materials provide varying thermal and fire properties; verify suitability for the project and code requirements with manufacturer data."},
				{title:"Continuity & Penetrations",text:"Preserve continuous insulation at penetrations and transitions; use thermal breaks and insulated curbs where required."},
				{title:"Verification",text:"Confirm thermal performance using manufacturer data and coordinate with the project’s energy modelling or code compliance documentation."},
				{title:"CladCan Services",text:"We coordinate thermal details, review manufacturer submittals and help ensure panel choices align with project energy and code requirements."},
			]}
		/>
	);
}
