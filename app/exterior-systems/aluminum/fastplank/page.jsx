import CurrentSitePage from "@/components/CurrentSitePage";
export const metadata={title:"FastPlank\u00ae Superior Siding & Soffit | CladCan",description:"FastPlank aluminium plank system: efficient installation, resilient finish and adaptable profiles for walls and soffits."};

export default function Page(){
	return (
		<CurrentSitePage
			title={"FastPlank\u00ae Superior Siding & Soffit"}
			image="/images/exterior-systems/fastplank-aluminum-siding-soffit-hero.webp"
			intro={"An aluminium plank cladding and soffit system engineered for straightforward installation, strong visual presence and low ongoing maintenance."}
			overview={"FastPlank is an interlocking aluminium plank system used for both wall cladding and soffit applications where contractors and designers want a clean, linear appearance with rapid on-site assembly. The system is supplied in long planks that interlock or snap together to reduce visible seams and speed installation. FastPlank is well suited to new construction and re-cladding projects where a lightweight, non-combustible finish is desirable. Designers commonly choose FastPlank where consistent panel runs, narrow reveal patterns or woodgrain-effect finishes are required while retaining an engineered metal substrate."}
			items={[
				{title:"System Description",text:"Interlocking aluminium planks that clip or snap to a discreet sub-frame, providing continuous runs with controlled joints and an engineered rainscreen backspace."},
				{title:"Typical Applications",text:"Primary façades, secondary accent walls, soffits and covered entries where a linear plank expression or woodgrain aesthetic is desired."},
				{title:"Finish & Appearance",text:"Available in solid colours and woodgrain-look finishes; final selection should account for solar exposure and adjacent materials to avoid visual mismatch over time."},
				{title:"Design Considerations",text:"Requires a compatible sub-frame and attention to expansion joints, transitions at corners and interfaces with windows, doors and flashings to maintain weather-tightness and appearance."},
				{title:"Drainage & Ventilation",text:"Typically installed over a ventilated cavity or rainscreen to allow drainage and drying of incidental moisture; ensure cavity access at terminations and weep paths at horizontal transitions."},
				{title:"Selection Limits",text:"Plank profile, finish and clip spacing should be coordinated with project wind exposure, building geometry and local code requirements; confirm product compatibility for high-sun or coastal exposures."},
				{title:"CladCan Services",text:"We assist with system selection, sample provision, coordination of fabrication and shop drawings, and on-site installation to ensure transitions and penetrations are detailed for longevity."},
			]}
		/>
	);
}