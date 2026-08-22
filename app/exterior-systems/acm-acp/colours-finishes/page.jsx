import CurrentSitePage from "@/components/CurrentSitePage";
export const metadata={title:'Colours & Finishes'+" | CladCan",description:'Explore Colours & Finishes options, applications, finishes and project requirements. CladCan can coordinate material selection, supply and professional installation based on project-specific requirements.'};
export default function Page(){
	return (
		<CurrentSitePage
			eyebrow='ACM ACP'
			title='Colours & Finishes'
			intro='ACM finishes range from solid coil coatings to metallic, anodized and woodgrain effects — choose finishes compatible with long-term exposure and maintenance expectations.'
			overview='Finish selection affects both durability and appearance. PVDF or high-performance coil coatings offer superior colour and chalk resistance for exposed façades; specialty finishes such as metallics or woodgrain require careful mock-ups to confirm appearance and repairability. Always verify finish warranties and supplier maintenance guidance.'
			items={[
				{title:"Finish Types",text:"Solid coil-coated, PVDF, anodized, metallic and woodgrain finishes each offer different appearance and performance trade-offs."},
				{title:"Colour & Mock-ups",text:"Confirm colours on full-size mock-ups under expected site lighting; small samples may not represent final appearance at scale."},
				{title:"Repairability",text:"Understand how minor damage is repaired for your chosen finish — some speciality finishes can be more complex to touch up."},
				{title:"CladCan Services",text:"We coordinate sample boards, finish mock-ups and supplier submittals to ensure chosen finishes meet design intent and performance needs."},
			]}
		/>
	);
}
