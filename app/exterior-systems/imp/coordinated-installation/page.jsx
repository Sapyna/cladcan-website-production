import CurrentSitePage from "@/components/CurrentSitePage";
export const metadata={title:'Coordinated Installation'+" | CladCan",description:'Explore Coordinated Installation options, applications, finishes and project requirements. CladCan can coordinate material selection, supply and professional installation based on project-specific requirements.'};
export default function Page(){
	return (
		<CurrentSitePage
			eyebrow='IMP'
			title='Coordinated Installation'
			intro='Successful IMP installations rely on sequencing, panel layout and careful coordination with trades to protect factory finishes and ensure watertightness.'
			overview='Panel layout, sequencing of mechanical and fenestration trades, and protection during installation are critical to achieving durable IMP installations. Panels require accurate substrate tolerance and precise fastening schedules; late changes to openings or trades can be costly.'
			items={[
				{title:"Sequencing",text:"Plan panel deliveries, trades access and finishing operations so that panels are installed in a protected, logical sequence to reduce risk of damage."},
				{title:"Panel Layout",text:"Early coordination on bay sizes and panel module layout reduces on-site cutting and ensures consistent joint appearance across elevations."},
				{title:"Protection & QA",text:"Protect panels from impact during installation and perform quality checks on joint alignment, fastener torque and finish condition before handover."},
				{title:"CladCan Services",text:"We provide installation sequencing recommendations, panel layout review, on-site QA support and coordination with other trades to minimise finish damage and rework."},
			]}
		/>
	);
}
