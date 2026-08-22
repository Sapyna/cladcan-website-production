import CurrentSitePage from "@/components/CurrentSitePage";
export const metadata={title:'Profiles & Finishes'+" | CladCan",description:'Explore Profiles & Finishes options, applications, finishes and project requirements. CladCan can coordinate material selection, supply and professional installation based on project-specific requirements.'};
export default function Page(){
	return (
		<CurrentSitePage
			eyebrow='PVC'
			title='Profiles & Finishes'
			intro='PVC systems offer a broad range of profiles and finish options for economical, low-maintenance exteriors.'
			overview='Profile geometry and finish selection determine the visual scale and maintenance expectations of PVC cladding. Options range from traditional lap profiles to panelized products and soffit boards. Consider thermal movement, clip or fastening strategies, and how colours will appear in situ when choosing between manufacturers.'
			items={[
				{title:"Profiles Overview",text:"Lap, shiplap, panel and custom profiles each create different shadow, reveal and wash patterns; select a profile that complements the building scale."},
				{title:"Finish Choices",text:"PVC finishes include solid colours and low-gloss options; confirm long-term colour stability and supplier recommendations for high-sun exposures."},
				{title:"Movement & Attachment",text:"PVC expands and contracts with temperature; fastening and clip systems must allow for movement to prevent buckling and oil-canning."},
				{title:"Integration",text:"Coordinate trim, window flashings and eavestrough interfaces to avoid water traps and visible gaps over time."},
				{title:"CladCan Services",text:"We provide sample boards, review manufacturer installation guides and prepare coordinated details to reduce on-site surprises."},
			]}
			ctaTitle="Need help selecting PVC profiles?"
			ctaText="Send drawings or elevations and CladCan will help match profile and finish choices to your aesthetic and performance goals."
		/>
	);
}
