import CurrentSitePage from "@/components/CurrentSitePage";
export const metadata={title:'Board & Batten Steel Siding'+" | CladCan",description:'Explore Board & Batten Steel Siding options, applications, finishes and project requirements. CladCan can coordinate material selection, supply and professional installation based on project-specific requirements.'};
export default function Page(){
	return (
		<CurrentSitePage
			eyebrow='STEEL'
			title='Board & Batten Steel Siding'
			intro='A steel interpretation of the classic board-and-batten aesthetic, tailored for durable exterior performance.'
			overview='Board & batten steel siding recreates the vertical rhythm of traditional timber cladding using steel panels and battens. The system is selected where the desired visual language benefits from vertical expression but the project requires the durability and low-maintenance of metal. Panels and battens are detailed to accommodate thermal movement, fastener spacing and secure transitions to openings and terminations.'
			items={[
				{title:"Applications",text:"Residential façades, agricultural and light-industrial buildings, feature walls and recladding projects where a vertical, textured exterior is desired."},
				{title:"Finish & Material",text:"Available in coated steel finishes chosen for colour stability and corrosion resistance. Confirm finish suitability for coastal or high-abrasion sites with the supplier."},
				{title:"Detailing & Movement",text:"Ensure battens and panels allow for thermal expansion; use compatible trims at corners, windows and penetrations to reduce water ingress and stress at fasteners."},
				{title:"Substrate & Support",text:"Typically fixed to a continuous sheathing and support furring or a purlin/sub-frame designed for the panel loads and spacing requirements."},
				{title:"Limitations",text:"Steel can dent under impact and may require sacrificial design elements in high-contact areas; assess access for maintenance and the potential for galvanic interactions with adjacent metals."},
				{title:"CladCan Services",text:"We provide detailing review, sample coordination, supply and installer matching to ensure the completed assembly meets aesthetic and performance expectations."},
			]}
		/>
	);
}
