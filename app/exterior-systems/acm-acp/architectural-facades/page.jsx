import CurrentSitePage from "@/components/CurrentSitePage";
export const metadata={title:'Architectural Façades'+" | CladCan",description:'Explore Architectural Façades options, applications, finishes and project requirements. CladCan can coordinate material selection, supply and professional installation based on project-specific requirements.'};
export default function Page(){
	return (
		<CurrentSitePage
  image="/images/source-library/acm-acp/architectural-facades/hero.webp"
  images={["/images/source-library/acm-acp/architectural-facades/hero.webp","/images/source-library/acm-acp/architectural-facades/detail-01.webp","/images/source-library/acm-acp/architectural-facades/detail-02.webp"]}
			eyebrow='ACM ACP'
			title='Architectural Façades'
			intro='ACM and ACP cladding systems enable crisp, contemporary façades with thin, stable panel faces and a wide range of finishes.'
			overview='Aluminium composite panels are used where designers seek a lightweight, flat exterior plane with precise panel joints and reveal patterns. They are commonly used for high-precision façades, canopies and feature signage. Panel support, attachment, and joint tolerances are critical to achieve the visual intent and long-term performance.'
			items={[
				{title:"Design & Joint Strategy",text:"Decide early on joint widths, shadow lines and module sizes to control visual rhythm and minimise on-site cutting."},
				{title:"Attachment Options",text:"Face-fixed, concealed-fix, or cassette systems each have distinct structural and aesthetic implications; select based on performance and maintenance goals."},
				{title:"Substrate Coordination",text:"Flatness tolerances of the supporting substrate directly affect panel appearance; specify allowable tolerances and confirm with the installer."},
				{title:"CladCan Services",text:"We assist with panel layout, mock-ups, submittal review and coordination of tolerances to meet the architect’s visual and performance expectations."},
			]}
		/>
	);
}
