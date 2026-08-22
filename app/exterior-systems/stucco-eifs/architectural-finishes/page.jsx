import CurrentSitePage from "@/components/CurrentSitePage";
export const metadata={title:'Architectural Finishes'+" | CladCan",description:'Explore Architectural Finishes options, applications, finishes and project requirements. CladCan can coordinate material selection, supply and professional installation based on project-specific requirements.'};
export default function Page(){
	return (
		<CurrentSitePage
			eyebrow='STUCCO EIFS'
			title='Architectural Finishes'
			intro='A wide range of EIFS finishes allow façades to mimic masonry, stone, stucco textures or bespoke textures while remaining lightweight and adaptable.'
			overview='EIFS finishes vary from smooth acrylic coatings to textured cast finishes and bespoke patterns. The selected texture influences light and shadow, maintenance expectations and repair strategies. When matching adjacent materials, review sample panels and consider how repairs will appear over time.'
			items={[
				{title:"Finish Types",text:"Acrylic textures, cast finishes and specialty coatings offer different looks and maintenance characteristics; choose a finish consistent with the building’s aesthetic and exposure."},
				{title:"Colour & Weathering",text:"Colours should be reviewed as full-size samples; darker colours can increase surface temperatures and may affect finish behaviour on some systems."},
				{title:"Repairs & Maintenance",text:"Textured finishes may require specialised patching techniques; confirm repairability with the selected manufacturer."},
				{title:"CladCan Support",text:"We coordinate finish mock-ups, review manufacturer finish systems and advise on colour selection and repair strategies appropriate to the project."},
			]}
		/>
	);
}
