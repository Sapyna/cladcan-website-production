import CurrentSitePage from "@/components/CurrentSitePage";
export const metadata={title:'Fluted Siding & Soffit'+" | CladCan",description:'Explore Fluted Siding & Soffit options, applications, finishes and project requirements. CladCan can coordinate material selection, supply and professional installation based on project-specific requirements.'};
export default function Page(){
	return (
		<CurrentSitePage
			eyebrow='WPC'
			title='Fluted Siding & Soffit'
			intro='Fluted composite profiles create strong vertical rhythm and refined shadow lines for contemporary façades and sheltered soffits.'
			overview='Fluted or reeded WPC profiles introduce texture and scale to façades and soffits. These profiles are often used to add tactile depth and to break up large elevations with vertical rhythm. Detailing must account for fastening, junctions with other materials and drainage behind horizontal changes of plane.'
			items={[
				{title:"Design Use",text:"Use fluted profiles to add vertical scale or to emphasize transitions and entries on façades."},
				{title:"Installation Notes",text:"Coordinate clip spacing and fastening patterns with the manufacturer to avoid visible distortion and to preserve the fluted expression."},
				{title:"Maintenance",text:"WPC profiles reduce the frequency of refinishing compared to natural wood, but periodic cleaning and inspection are recommended."},
				{title:"CladCan Services",text:"We provide layout advice, sample boards and installation coordination so the fluted expression is delivered on-site as intended."},
			]}
		/>
	);
}
