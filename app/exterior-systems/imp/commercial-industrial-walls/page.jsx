import CurrentSitePage from "@/components/CurrentSitePage";
export const metadata={title:'Commercial & Industrial Walls'+" | CladCan",description:'Explore Commercial & Industrial Walls options, applications, finishes and project requirements. CladCan can coordinate material selection, supply and professional installation based on project-specific requirements.'};
export default function Page(){
	return (
		<CurrentSitePage
			eyebrow='IMP'
			title='Commercial & Industrial Walls'
			intro='IMP systems provide a panelized exterior solution for buildings that need a controlled envelope, repeatable geometry and efficient installation.'
			overview='Insulated metal panels are commonly selected for warehouses, distribution centres, cold storage and industrial facilities where thermal control, speed of enclosure and clean exterior planes are priorities. Panel joint design, through-wall flashing, and the sequencing of mechanical and fenestration trades must be coordinated early to avoid conflicts during installation.'
			items={[
				{title:"Applications",text:"Industrial warehouses, refrigerated facilities, light-industrial and institutional buildings where panelized assembly brings installation speed and predictable thermal behaviour."},
				{title:"Joint & Transition Detailing",text:"Panel-to-panel joints, roof-to-wall transitions and penetrations need engineered details to maintain envelope integrity and allow panel movement."},
				{title:"Service Integration",text:"Coordinate penetrations for mechanical services early to reduce field cutting and preserve factory-applied finishes and joints."},
				{title:"CladCan Services",text:"We provide coordination of panel layout, review joint details, and help sequence trades to minimise on-site rework and protect finishes."},
			]}
		/>
	);
}
