import CurrentSitePage from "@/components/CurrentSitePage";
export const metadata={title:'Fabrication & Installation'+" | CladCan",description:'Explore Fabrication & Installation options, applications, finishes and project requirements. CladCan can coordinate material selection, supply and professional installation based on project-specific requirements.'};
export default function Page(){
	return (
		<CurrentSitePage
  image="/images/source-library/acm-acp/fabrication-installation/hero.webp"
  images={["/images/source-library/acm-acp/fabrication-installation/hero.webp","/images/source-library/acm-acp/fabrication-installation/detail-01.webp","/images/source-library/acm-acp/fabrication-installation/detail-02.webp"]}
			eyebrow='ACM ACP'
			title='Fabrication & Installation'
			intro='Panel fabrication and precise installation are essential to realise the planned visual effect and to protect finishes.'
			overview='Fabrication for ACM panels includes accurate cutting, return formation, and attachment point preparation. On-site installation must protect finished faces, manage thermal movement, and align joints within tight tolerances. Shop drawings and pre-installation mock-ups are recommended for visually critical façades.'
			items={[
				{title:"Shop Drawings",text:"Produce detailed shop drawings to confirm panel sizes, reveal widths, fixing locations and interface details prior to fabrication."},
				{title:"Tolerance Control",text:"Specify substrate flatness and attachment tolerances to achieve the desired joint alignment and minimize visible distortion."},
				{title:"Handling & Protection",text:"Protect finished panels during transport and on-site installation to avoid scratches and finish damage that are visible at building scale."},
				{title:"CladCan Services",text:"We coordinate fabrication partners, review shop drawings and support on-site inspection to ensure installation meets aesthetic and performance expectations."},
			]}
		/>
	);
}
