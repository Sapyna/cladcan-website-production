import CurrentSitePage from "@/components/CurrentSitePage";
export const metadata={title:'Eavestroughs & Downpipes'+" | CladCan",description:'Roof-drainage systems are designed to manage rainwater and help protect walls and foundations from moisture exposure.'};
export default function Page(){
	return (
		<CurrentSitePage
			title={'Eavestroughs & Downpipes'}
			intro={'Roof-drainage systems are designed to manage rainwater and help protect walls and foundations from moisture exposure.'}
			overview={'Select eavestrough and downpipe systems that match expected rainfall, roof geometry and maintenance access. Proper slope, discharge locations and overflow strategies are essential to prevent water damage to the cladding and foundations.'}
			items={[
				{title:'Sizing & Capacity',text:'Size troughs and downpipes based on roof area and local rainfall intensity; undersized systems can overload and cause overflows.'},
				{title:'Discharge & Routing',text:'Locate downpipe discharge away from the foundation and plan for splash pads or sub-surface drainage where required.'},
				{title:'Integration with Soffit & Fascia',text:'Coordinate eavestroughs with soffit and fascia profiles to maintain clean lines and ensure secure attachment.'},
				{title:'Material & Finish',text:'Choose materials and coatings that resist corrosion and match the façade aesthetic; consider accessibility for cleaning and maintenance.'},
			]}
			decisionSupport={[
				{label:'Maintenance Access',text:'Design for easy access to clean or maintain troughs and downpipes, including leaf-guards where appropriate.'},
				{label:'Overflow Planning',text:'Provide overflow paths and scuppers for extreme events to protect glazing and openings.'},
				{label:'Coordination',text:'Coordinate eavestrough anchors with roof membrane installers to avoid punctures and leaks.'},
			]}
		/>
	);
}
