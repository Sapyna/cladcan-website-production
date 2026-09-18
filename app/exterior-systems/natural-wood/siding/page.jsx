import CurrentSitePage from "@/components/CurrentSitePage";
export const metadata={title:'Natural Wood Siding'+" | CladCan",description:'Explore Natural Wood Siding options, applications, finishes and project requirements. CladCan can coordinate material selection, supply and professional installation based on project-specific requirements.'};
export default function Page(){
	return (
		<CurrentSitePage
  image="/images/source-library/natural-wood/siding/hero.webp"
  images={["/images/source-library/natural-wood/siding/hero.webp","/images/source-library/natural-wood/siding/detail-01.webp","/images/source-library/natural-wood/siding/detail-02.webp"]}
			eyebrow='NATURAL WOOD'
			title='Natural Wood Siding'
			intro='Premium natural wood siding selected for warmth, texture and an authentic material expression.'
			overview='Natural wood siding offers unparalleled tactile character and an organic look that continues to attract designers and homeowners. Success with wood cladding depends on appropriate species selection, detailing for moisture control, and a clear plan for finish and maintenance. Wood performs best on elevations with deliberate protection from splash exposure or where detailing supports drying and drainage.'
			items={[
				{title:"Typical Uses",text:"Primary façades, accent walls, feature entries, and mixed-material elevations where natural texture and warmth are design priorities."},
				{title:"Species & Appearance",text:"Species selection determines grain, texture and long-term weathering behaviour; specify species and review sample boards under expected site lighting before final selection."},
				{title:"Finish & Maintenance",text:"Finishes range from clear oil to pigmented stains; finishes alter appearance and ageing behaviour. Work with CladCan to select an approach consistent with your desired maintenance strategy and risk tolerance."},
				{title:"Detailing & Moisture Control",text:"Install over ventilated cavities or rainscreens and provide flashing at all transitions, penetrations and terminations to prevent trapped moisture and support drying."},
				{title:"Limitations",text:"Natural wood is sensitive to exposure, UV and moisture; avoid specifying species unsuited to local exposure without protective detailing or accept differential weathering over time."},
				{title:"CladCan Services",text:"We assist with species selection, sample provision, shop drawings for penetrations and terminations, and on-site installation guidance to help ensure long-term performance."},
			]}
			ctaTitle="Planning with natural wood?"
			ctaText="Share elevations or details and CladCan will help confirm species, finish and detailing options for your building’s exposure and design intent."
		/>
	);
}
