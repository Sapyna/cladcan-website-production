import CurrentSitePage from "@/components/CurrentSitePage";
export const metadata={title:"Cedar Renditions\u00ae Siding & Soffit | CladCan",description:"Aluminium siding with woodgrain finishes that capture timber aesthetics while reducing maintenance and moisture risk."};

export default function Page(){
	return (
		<CurrentSitePage
			title={"Cedar Renditions\u00ae Siding & Soffit"}
			intro={"A wood-look aluminium siding and soffit system that reproduces timber texture and warmth while offering the weather resistance of metal."}
			overview={"Cedar Renditions offers a woodgrain aesthetic on an aluminium substrate for projects seeking the look of stained timber without the maintenance concerns associated with natural wood. The system is frequently used where designers want consistent colour and grain across large elevations, or where contrasting metal trims and accents are required. Because the finish is applied to a metal panel, it is non-absorbent and can be used where moisture exposure and freeze-thaw cycles might challenge painted or stained timber finishes."}
			items={[
				{title:"When to Choose This System",text:"Select Cedar Renditions when you want wood-like appearance with the durability of aluminium—ideal for accents, full façades or soffits where ongoing maintenance needs must be minimized."},
				{title:"Appearance & Finish",text:"Available in multiple woodgrain patterns and solid colours; specify samples and confirm final selection under expected site lighting to avoid unexpected contrast with adjacent materials."},
				{title:"Installation Notes",text:"Install over a ventilated cavity where possible; details at terminations, corners and perimeters require factory-formed trims or compatible flashings to maintain a clean aesthetic and weather-tight joints."},
				{title:"Performance Considerations",text:"While the finish replicates timber grain, the aluminium substrate responds differently to thermal movement and requires compatible clips and joints for long runs and exposed façades."},
				{title:"Limitations",text:"Avoid specifying heavily textured finishes in areas where heavy abrasion is expected. For coastal projects, verify supplier guidance on corrosion resistance and finish suitability."},
				{title:"CladCan Support",text:"We provide sample boards, help confirm colour and grain selections, coordinate shop drawings for trims and penetrations, and support installation oversight for successful handover."},
			]}
		/>
	);
}
