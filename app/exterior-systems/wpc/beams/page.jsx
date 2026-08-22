import CurrentSitePage from "@/components/CurrentSitePage";
export const metadata={title:'WPC Beams'+" | CladCan",description:'Explore WPC Beams options, applications, finishes and project requirements. CladCan can coordinate material selection, supply and professional installation based on project-specific requirements.'};
export default function Page(){
	return (
		<CurrentSitePage
			eyebrow='WPC'
			title='WPC Beams'
			intro='Composite beams and sections for screens, pergolas and architectural features where a wood-like aesthetic is desired with reduced maintenance.'
			overview='WPC beams combine structural composite sections with wood-like finishes for use in screens, pergolas, beam wraps and other architectural features. While they offer improved resistance to moisture and decay versus natural timber, confirm structural use limits and manufacturer guidance for load-bearing conditions.'
			items={[
				{title:"Common Uses",text:"Privacy screens, pergola members, decorative beam wraps and modular architectural elements."},
				{title:"Structural Notes",text:"Verify the product’s structural rating before using as load-bearing framing; many WPC beams are intended for non-structural or limited-load uses."},
				{title:"Finish & Integration",text:"Coordinate colour, fixing details and end-cap treatments to maintain the intended appearance and to allow for thermal movement."},
				{title:"CladCan Services",text:"We assist with product selection, confirm suitability for planned uses and prepare coordination drawings for fabrication and installation."},
			]}
		/>
	);
}
