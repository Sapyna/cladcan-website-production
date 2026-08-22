import CurrentSitePage from "@/components/CurrentSitePage";
export const metadata={title:'Siding & Panels'+" | CladCan",description:'Explore Siding & Panels options, applications, finishes and project requirements. CladCan can coordinate material selection, supply and professional installation based on project-specific requirements.'};
export default function Page(){
	return (
		<CurrentSitePage
			eyebrow='FIBRE CEMENT'
			title='Siding & Panels'
			intro='Fibre-cement siding and panels provide durable, low-maintenance cladding with a range of textures and profiles.'
			overview='Fibre-cement panels and siding are selected for their durability, fire resistance and ability to mimic traditional materials such as wood or masonry. Choices include lap siding, panel systems and textured finishes. Detailing for flashing, control joints and substrate attachment is essential to long-term performance.'
			items={[
				{title:"Profile Options",text:"Lap, shiplap, panelised and textured boards allow designers to choose between traditional and contemporary expressions."},
				{title:"Installation Considerations",text:"Follow manufacturer requirements for fastener spacing, backing substrate and flashing—deviations can lead to premature failures."},
				{title:"Finish & Repair",text:"Painted finishes are typical; plan for touch-up and repair strategies, especially at interfaces with other materials."},
				{title:"CladCan Services",text:"We coordinate manufacturer guidance, verify trim and substrate compatibility, and assist with installation sequencing and quality checks."},
			]}
		/>
	);
}
