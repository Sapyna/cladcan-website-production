import CurrentSitePage from "@/components/CurrentSitePage";
export const metadata={title:"Architectural Aluminum Battens | CladCan",description:"Aluminium battens for architectural accents, screening and soffit ceilings. Guidance for layout, attachment and finish selection."};

export default function Page(){
	return (
		<CurrentSitePage
			title={"Architectural Aluminum Battens"}
			intro={"Slim aluminium battens used to create shadow lines, screening, soffit ceilings and customised façade rhythms."}
			overview={"Architectural battens are narrow aluminium profiles fastened to a supporting sub-frame to create linear shadow lines, perforated screens or soffit ceilings. They are a cost-effective way to add texture and rhythm to façades, screen services, or provide privacy while allowing airflow. Battens may be through-fastened or clipped depending on the aesthetic and maintenance goals, and should be detailed to avoid trapping moisture behind the finish."}
			items={[
				{title:"Common Uses",text:"Feature façades, soffit ceilings, privacy screening, mechanical screening, and decorative accent bands where narrow, repeating elements define the architecture."},
				{title:"Attachment Options",text:"Battens can be face-fastened where permitted, or mechanically clipped to a sub-frame for a cleaner finish and easier replacement; choice depends on wind loads and the desired sightline."},
				{title:"Material & Finish",text:"Available in custom colours and mill finishes; coordinate finish choice with adjacent materials to avoid visual mismatch and to simplify future maintenance."},
				{title:"Design & Drainage",text:"Ensure details allow drying of incidental moisture; avoid continuous sealed cavities and incorporate drainage/weep points at soffit terminations and below horizontal changes in plane."},
				{title:"Limitations",text:"Very narrow battens can be visually delicate; consider access for cleaning and replacement in exposed or coastal environments."},
				{title:"How CladCan Helps",text:"We provide layout studies, shop drawing coordination, and on-site support to confirm alignment, fixation and interface details with windows, doors and flashings."},
			]}
		/>
	);
}
