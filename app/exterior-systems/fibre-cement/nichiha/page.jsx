import CurrentSitePage from "@/components/CurrentSitePage";
export const metadata={title:'Nichiha'+" | CladCan",description:'Explore Nichiha options, applications, finishes and project requirements. CladCan can coordinate material selection, supply and professional installation based on project-specific requirements.'};
export default function Page(){
	return (
		<CurrentSitePage
			eyebrow='FIBRE CEMENT'
			title='Nichiha'
			intro='Nichiha offers textured and panelised fibre-cement systems used for contemporary architectural façades.'
			overview='Nichiha’s product families include textured panels and cladding systems intended for architectural expression. When using textured fibre-cement, coordinate transitions and flashings carefully to maintain the intended finish and to facilitate repairability. Confirm installation methods and substrate compatibility with the supplier’s technical documentation.'
			items={[
				{title:"Product Uses",text:"Textured panels and architectural cladding for façades where surface character and texture are part of the design intent."},
				{title:"Transition Detailing",text:"Coordinate panel edges, control joints and substrate support to prevent visible cracking and to control water movement."},
				{title:"Finish & Repair",text:"Textured finishes require consistent repair techniques to match texture and colour — confirm repair strategies during procurement."},
				{title:"CladCan Services",text:"We coordinate supplier submittals, generate interface details and assist with mock-ups to ensure the chosen texture reads correctly on-site."},
			]}
		/>
	);
}
