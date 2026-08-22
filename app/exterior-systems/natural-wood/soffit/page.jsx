import CurrentSitePage from "@/components/CurrentSitePage";
export const metadata={title:'Natural Wood Soffit'+" | CladCan",description:'Explore Natural Wood Soffit options, applications, finishes and project requirements. CladCan can coordinate material selection, supply and professional installation based on project-specific requirements.'};
export default function Page(){
	return (
		<CurrentSitePage
			eyebrow='NATURAL WOOD'
			title='Natural Wood Soffit'
			intro='Wood soffits deliver warmth and refined detail to eaves and covered ceilings where they are protected from direct weather.'
			overview='Soffits made from natural wood are typically installed in sheltered conditions — under deep eaves, porches or covered canopies — where the material benefits from reduced direct precipitation and solar exposure. Proper ventilation and access to drying air behind the soffit are important to avoid moisture accumulation and to extend the life of the finish.'
			items={[
				{title:"Where to Use",text:"Protected soffits, porch ceilings and covered entries where the wood is sheltered from direct rainfall and prolonged sun exposure."},
				{title:"Ventilation",text:"Provide airflow in the cavity behind soffits to allow drying; coordinate vents and perforations with insulation and attic ventilation strategies."},
				{title:"Finish Options",text:"Clear oils, pigmented stains or painted finishes are common; each choice affects appearance and maintenance needs — test samples on-site where possible."},
				{title:"Integration",text:"Ensure soffit details integrate with eavestroughs, fascia and flashing to prevent water migration into the assembly."},
				{title:"CladCan Support",text:"We advise on species, venting strategies, perforation limits and finish choices, and produce shop drawings to coordinate installation with roofline details."},
			]}
			ctaTitle="Soffit design questions?"
			ctaText="Send drawings and we’ll advise on species, venting and installation details that protect the soffit and match the overall envelope strategy."
		/>
	);
}
