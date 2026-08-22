import CurrentSitePage from "@/components/CurrentSitePage";
export const metadata={title:'James Hardie'+" | CladCan",description:'Explore James Hardie options, applications, finishes and project requirements. CladCan can coordinate material selection, supply and professional installation based on project-specific requirements.'};
export default function Page(){
	return (
		<CurrentSitePage
			eyebrow='FIBRE CEMENT'
			title='James Hardie'
			intro='James Hardie fibre-cement products cover a broad range of lap siding, panels and trim for durable exterior finishes.'
			overview='James Hardie is a widely used fibre-cement brand offering lap siding and panel systems with factory-applied priming or finish options. When specifying James Hardie products, follow manufacturer installation guidelines for substrate, flashing and fastener patterns to maintain warranty eligibility and long-term performance.'
			items={[
				{title:"Product Family",text:"Lap siding, panels and trim products that suit both traditional and contemporary façades—confirm the exact product and finish with the supplier."},
				{title:"Installation Notes",text:"Strict adherence to manufacturer fastening, substrate and flashing instructions is required to avoid concentrated water ingress and to support warranty claims."},
				{title:"Colour & Finish",text:"Most installations are painted; plan for primer and paint systems compatible with fibre cement and local climate performance."},
				{title:"CladCan Services",text:"We help with product selection, coordinate manufacturer submittals and review trim and flashing details to align with installation best practices."},
			]}
		/>
	);
}
