import ApplicationPage from "@/components/ApplicationPage";
export const metadata={title:"Longboard Siding Systems | CladCan",description:"Explore Longboard aluminum siding systems including Lap Siding and Board & Batten available through CladCan."};
const products=[
  {title:"Lap Siding",type:"Horizontal Aluminum Siding",description:"A clean horizontal siding profile combining traditional exterior character with durable aluminum performance.",href:"/exterior-systems/aluminum/longboard/products/lap-siding"},
  {title:"Board & Batten",type:"Vertical Aluminum Siding",description:"A modern aluminum interpretation of traditional board-and-batten siding for vertical architectural applications.",href:"/exterior-systems/aluminum/longboard/products/board-and-batten"},
];
const benefits=[
  {title:"Low Maintenance",text:"Factory-finished aluminum eliminates many maintenance requirements associated with natural wood siding."},
  {title:"Architectural Finish",text:"Available in contemporary solid colours and wood-inspired finishes for varied design styles."},
  {title:"Durable Exterior Performance",text:"Engineered for long-term exterior exposure and demanding Canadian weather conditions."},
  {title:"Design Flexibility",text:"Horizontal and vertical siding options support traditional and contemporary concepts."},
];
const applications=["Custom residential homes", "Multi-residential developments", "Commercial fa\u00e7ades", "Feature elevations", "Mixed-material exteriors", "Renovation and recladding projects"];
export default function Page(){return <ApplicationPage breadcrumb={[{label:"Exterior Systems",href:"/exterior-systems"},{label:"Aluminum",href:"/exterior-systems/aluminum"},{label:"Longboard",href:"/exterior-systems/aluminum/longboard"},{label:"Siding"}]} eyebrow="LONGBOARD SIDING" title="Architectural aluminum siding." intro="Explore Longboard exterior siding systems combining durable aluminum construction with contemporary profiles and architectural finish options." overview="Longboard siding provides horizontal and vertical architectural aluminum options for projects seeking familiar residential siding forms with low-maintenance metal performance." products={products} benefits={benefits} applications={applications} ctaTitle="Considering Longboard siding for your project?" ctaText="Send us your drawings, elevations or design requirements and CladCan can help review suitable Longboard profiles, finishes, quantities and installation options."/>;}
