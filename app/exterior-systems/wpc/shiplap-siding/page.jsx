import CurrentSitePage from "@/components/CurrentSitePage";
export const metadata={title:'Shiplap Siding'+" | CladCan",description:'Explore Shiplap Siding options, applications, finishes and project requirements. CladCan can coordinate material selection, supply and professional installation based on project-specific requirements.'};
export default function Page(){
	return (
		<CurrentSitePage
			eyebrow='WPC'
			title='Shiplap Siding'
			intro='Overlapping WPC shiplap profiles that create a linear, weatherproof exterior with reduced maintenance compared with natural wood.'
			overview='WPC shiplap combines wood-fibre aesthetics with thermoplastic binders, resulting in a profile that resembles traditional wood clapboard while improving resistance to rot and moisture-related decay. The system suits projects where a wood-like appearance is desired but traditional wood maintenance is a concern.'
			items={[
				{title:"Applications",text:"Residential façades, decks and feature walls where robust performance and wood-like appearance are both priorities."},
				{title:"Handling & Installation",text:"Follow manufacturer guidance for clip spacing and fastening to accommodate material movement and avoid stress concentrations."},
				{title:"Finish & Longevity",text:"WPC finishes generally require less frequent maintenance than natural wood; confirm colour stability guidance for chosen products."},
				{title:"CladCan Services",text:"We help select compatible WPC profiles, coordinate trims and provide installation oversight to ensure durable transitions and terminations."},
			]}
		/>
	);
}
