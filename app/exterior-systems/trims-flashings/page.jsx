import CurrentSitePage from "@/components/CurrentSitePage";
export const metadata={title:'Trims & Flashings'+" | CladCan",description:'Metal trims and flashings resolve corners, openings, transitions, terminations and water-management details across cladding assemblies.'};
export default function Page(){
	return (
		<CurrentSitePage
			title={'Trims & Flashings'}
			intro={'Metal trims and flashings resolve corners, openings, transitions, terminations and water-management details across cladding assemblies.'}
			overview={'Well-detailed trims and flashings protect the enclosure, resolve material transitions, and complete the visual edges of a façade. Early coordination of profiles, tolerances and attachment avoids on-site rework and water-management failures.'}
			items={[
				{title:'Custom Profiles',text:'Project-specific formed metal profiles for façade and roofline conditions — specify profiles early to allow shop fabrication and pre-weathering where required.'},
				{title:'Corners & Closures',text:'Use backed closures and continuous flashing at corners and terminations to maintain weather resistance and a clean aesthetic.'},
				{title:'Window & Opening Details',text:'Design flashings and sill details to shed water away from openings and to interface correctly with membranes and substrates.'},
				{title:'Control & Expansion Joints',text:'Provide control joints and slip details where dissimilar materials meet or where thermal movement may affect finishes.'},
				{title:'Material & Finish Selection',text:'Choose corrosion-resistant metals and compatible finish systems; consider dissimilar-metal isolation and finish longevity in the local climate.'},
				{title:'Fabrication Support',text:'CladCan fabricates project-specific flashing, Z-bar, hat channel and specialty trim components and helps coordinate shop drawings.'},
			]}
			decisionSupport={[
				{label:'Specify early',text:'Freeze trim profiles and attachment strategies in contract documents to allow off-site fabrication and reduce field modifications.'},
				{label:'Mock-ups',text:'Install mock-ups of critical terminations and interface details to verify appearance and performance before full installation.'},
				{label:'Compatibility',text:'Confirm compatibility between cladding, substrate, fasteners and sealants to avoid accelerated corrosion or finish failure.'},
			]}
		/>
	);
}
