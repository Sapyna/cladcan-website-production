import CurrentSitePage from "@/components/CurrentSitePage";
export const metadata={title:'uPVC Vinyl Cladding'+" | CladCan",description:'Explore uPVC Vinyl Cladding options, applications, finishes and project requirements. CladCan can coordinate material selection, supply and professional installation based on project-specific requirements.'};
export default function Page(){
	return (
		<CurrentSitePage
			eyebrow='PVC'
			title='uPVC Vinyl Cladding'
			intro='A cost-effective, low-maintenance profile-based cladding commonly used on residential and light commercial projects.'
			overview='uPVC vinyl cladding is chosen for projects that prioritise cost-efficiency and minimal ongoing maintenance. Profiles replicate traditional lap siding and are available in a range of widths and textures. Successful installations account for panel expansion, fastening schedules and compatible trim details to ensure long-term appearance and weathertightness.'
			items={[
				{title:"Typical Uses",text:"Residential façades, small commercial buildings and low-maintenance remodels where visual economy and durability are priorities."},
				{title:"Installation Notes",text:"Use manufacturer-approved clips or screw fastening and allow for thermal expansion; excessive rigid fastening can lead to deformation."},
				{title:"Appearance Considerations",text:"Colour and texture samples should be reviewed on-site under expected lighting to confirm the intended visual effect."},
				{title:"CladCan Services",text:"We help verify manufacturer details, coordinate trim and accessory selection, and provide installation oversight where required."},
			]}
			ctaTitle="Considering vinyl cladding?"
			ctaText="Send drawings and CladCan will review profile options and installation details to reduce risk and ensure a coordinated result."
		/>
	);
}
