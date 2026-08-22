import CurrentSitePage from "@/components/CurrentSitePage";
export const metadata={title:'DuROCK & Sto Systems'+" | CladCan",description:'Explore DuROCK & Sto Systems options, applications, finishes and project requirements. CladCan can coordinate material selection, supply and professional installation based on project-specific requirements.'};
export default function Page(){
	return (
		<CurrentSitePage
			eyebrow='STUCCO EIFS'
			title='DuROCK & Sto Systems'
			intro='DuROCK and Sto represent established EIFS and substrate/product families used in many architectural façades; selection should be coordinated with project substrate and performance goals.'
			overview='Both DuROCK and Sto provide EIFS assemblies and substrate systems that support a range of finishes and performance options. Product selection depends on the required substrate, desired finish, drainage approach and any project-specific code requirements. When using these suppliers, confirm the exact product family, installation details and warranty conditions with the manufacturer.'
			items={[
				{title:"When to Use These Systems",text:"Consider DuROCK or Sto when you need a coordinated substrate and EIFS finish system backed by manufacturer technical support and documented installation practices."},
				{title:"Coordination",text:"Confirm compatibility between substrate, insulation, reinforcing mesh and finish. Manufacturer submittals help ensure the chosen assembly is documented and installed as intended."},
				{title:"Performance Considerations",text:"Drainage strategy, impact resistance and finish selection should be confirmed early to avoid rework and to ensure warranty eligibility."},
				{title:"CladCan Services",text:"We coordinate manufacturer submittals, prepare compatible interface details and assist with on-site inspection and quality assurance for EIFS work."},
			]}
		/>
	);
}
