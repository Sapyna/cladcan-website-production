import ProductPage from "@/components/ProductPage";

export const metadata = {
  title: "Natural Wood Board & Batten Siding | CladCan",
  description:
    "Maibec natural and engineered board and batten siding with vertical profiles, factory-applied finishes, technical dimensions and installation resources.",
};

const root = "/images/exterior-systems/natural-wood/board-and-batten";
const downloads = "/downloads/natural-wood/board-and-batten";

export default function Page() {
  return (
    <ProductPage
      eyebrow="NATURAL WOOD SIDING & SOFFIT"
      title="Board & Batten"
      subtitle="A timeless vertical profile, reimagined for modern exteriors."
      intro="Board and batten siding pairs wide vertical boards with narrower battens that cover or express the joints. The result is a strong architectural rhythm with the warmth and grain of wood—equally suited to farmhouse-inspired homes, contemporary façades and carefully detailed accent areas."
      images={["/images/source-library/natural-wood/board-and-batten/hero.webp","/images/source-library/natural-wood/board-and-batten/detail-01.webp","/images/source-library/natural-wood/board-and-batten/detail-02.webp"]}
      specs={[
        { label: "Natural-wood species", value: "Spruce–Pine–Fir (SPF), sound tight knot" },
        { label: "Natural-wood board", value: "10 in nominal; 5/8 × 9 in actual" },
        { label: "Natural-wood batten", value: "2 in nominal; 11/16 × 1 5/8 in actual" },
        { label: "Installation direction", value: "Vertical" },
        { label: "Natural-wood lengths", value: "4–16 ft random lengths or straight 10 ft lengths" },
        { label: "Finish", value: "Textured; solid colours, Natural Tones and TrueMatch custom colours" },
      ]}
      benefits={[
        { title: "Architectural depth", text: "Raised battens cast changing shadow lines and give large wall areas a distinctive vertical scale." },
        { title: "Authentic character", text: "Visible grain and natural variation bring warmth that works with masonry, metal and other exterior materials." },
        { title: "Factory-finished protection", text: "Natural-wood boards are coated on all six sides in a controlled environment using low-VOC water-based stains." },
        { title: "Design flexibility", text: "Solid colours, natural stains and custom colour matching support rustic, transitional and contemporary palettes." },
      ]}
      applications={[
        "Full-height residential façades",
        "Gables, entries and feature walls",
        "Modern farmhouse and cottage architecture",
        "Commercial and institutional accent elevations",
        "Mixed-material façades with stone, brick or metal",
        "Exterior vertical cladding applications",
      ]}
      components={[
        { title: "Natural Wood Board", detail: "Textured SPF board with a 9-inch actual width and 5/8-inch thickness." },
        { title: "Natural Wood Batten", detail: "Textured SPF batten sized to create the characteristic raised vertical joint." },
        { title: "Engineered HDF Board", detail: "CanExel alternative with a high-density hardwood-fibre substrate and hidden-fastener board format." },
        { title: "Engineered HDF Batten", detail: "Matching regular-installation batten completes the dimensional CanExel expression." },
        { title: "Ventilation & Drainage", detail: "Furring and ventilated accessories maintain a continuous air space behind the siding." },
        { title: "Corners & Touch-Up", detail: "Compatible corners, fasteners and touch-up products complete exposed edges and installation details." },
      ]}
      technicalSections={[
        {
          eyebrow: "NATURAL WOOD PROFILE",
          title: "Genuine SPF board and batten.",
          text: "The documented natural-wood system uses kiln-dried Spruce–Pine–Fir with sound tight knots. The 10-inch nominal board measures 5/8 × 9 inches, while the 2-inch nominal batten measures 11/16 × 1 5/8 inches. Both install vertically over a correctly prepared, drained and ventilated wall assembly.",
          facts: [
            { title: "Kiln-dried", text: "Wood is documented at 12%–16% moisture content to support dimensional stability." },
            { title: "Factory coated", text: "All six sides receive a controlled factory finish for stain absorption, UV protection and weather resistance." },
            { title: "Exterior use", text: "The product is intended for exterior vertical siding and must follow current Maibec installation requirements." },
          ],
          images: [
            { src: `${root}/board-and-batten-siding-profile-dimensions.webp`, alt: "Maibec natural wood board and batten siding profile dimensions", caption: "Natural-wood board, batten and vertical assembly dimensions." },
            { src: `${root}/natural-wood-board-and-batten-texture.webp`, alt: "Close-up of natural wood board and batten siding texture", caption: "Textured woodgrain creates visual depth across the vertical profile." },
          ],
          resource: { label: "Download Maibec Natural Wood Board & Batten Technical Sheet", href: `${downloads}/maibec-natural-wood-board-and-batten-technical-sheet.pdf` },
        },
        {
          eyebrow: "ENGINEERED ALTERNATIVE",
          title: "Maibec CanExel board and batten.",
          text: "A separately documented engineered option uses a 960 kg/m³ high-density fibreboard substrate made from hardwood species. Its 12-inch nominal board has 11 7/8-inch actual coverage and a 3/8-inch nominal thickness, paired with a 2 1/4-inch batten. This is a distinct engineered system and should not be specified using the natural-wood dimensions above.",
          facts: [
            { title: "12-foot lengths", text: "Boards and battens are supplied in consistent 12-foot lengths for repeatable elevation planning." },
            { title: "Six documented colours", text: "White, Granite, Sand, Black, Mist Grey and Midnight Blue are listed in the supplied technical sheet." },
            { title: "Prepared wall", text: "Install over structural sheathing, an approved water-resistive barrier and required furring at maximum 16 inches on centre." },
          ],
          images: [
            { src: `${root}/board-and-batten-solid-colour-options.webp`, alt: "Board and batten siding samples in solid colour options", caption: "Factory-finished solid-colour board and batten options." },
            { src: `${root}/board-and-batten-siding-colour-samples.webp`, alt: "Natural wood board and batten siding colour samples", caption: "Samples should be reviewed under project lighting before final colour approval." },
          ],
          resource: { label: "Download Maibec CanExel Board & Batten Technical Sheet", href: `${downloads}/maibec-canexel-board-and-batten-technical-sheet.pdf` },
        },
        {
          eyebrow: "INSTALLATION COORDINATION",
          title: "Detail the wall for drainage and drying.",
          text: "Board and batten performance depends on the complete wall—not only the finish boards. Substrate, water-resistive barrier, furring, ventilation openings, corrosion-resistant fasteners, corners, clearances and flashing must be coordinated before material release. Current manufacturer instructions and local code requirements remain the controlling references.",
          facts: [
            { title: "Ventilated cavity", text: "Use specified furring and ventilation accessories to maintain drainage and airflow behind the siding." },
            { title: "Compatible fastening", text: "Use manufacturer-approved corrosion-resistant fasteners with the required penetration and placement." },
            { title: "Finish care", text: "Protect factory finishes during handling, cutting and fastening; use approved touch-up products where required." },
          ],
          images: [
            { src: `${root}/modern-white-board-and-batten-siding.webp`, alt: "Modern home with white vertical board and batten siding", caption: "Clean vertical alignment depends on coordinated openings, corners, rooflines and transitions." },
            { src: `${root}/grey-board-and-batten-wood-siding-building.webp`, alt: "Grey board and batten wood siding on a small building", caption: "The profile can support both contemporary and traditional exterior design directions." },
          ],
        },
      ]}
      finishes={[
        "Textured natural-wood finish",
        "Maibec Solid Stain colours",
        "Maibec Natural Tones",
        "TrueMatch custom solid colours",
        "CanExel White, Granite, Sand, Black, Mist Grey and Midnight Blue",
      ]}
      resources={[
        { type: "PDF • TECHNICAL SHEET", title: "Natural Wood Board & Batten", href: `${downloads}/maibec-natural-wood-board-and-batten-technical-sheet.pdf`, icon: "drawing" },
        { type: "PDF • TECHNICAL SHEET", title: "CanExel Engineered Board & Batten", href: `${downloads}/maibec-canexel-board-and-batten-technical-sheet.pdf`, icon: "document" },
      ]}
      relatedProducts={[
        { type: "NATURAL WOOD", title: "Genuine Wood Siding", description: "Explore horizontal and vertical genuine wood profiles in solid colours and Natural Tones.", href: "/exterior-systems/natural-wood/genuine-wood-siding" },
        { type: "NATURAL WOOD", title: "Cedar", description: "Western red cedar tongue-and-groove, channel, nickel-gap and dressed board options." },
        { type: "NATURAL WOOD", title: "Engineered Wood", description: "Factory-finished engineered siding options designed for stability and reduced maintenance." },
      ]}
      manufacturer="Maibec"
      manufacturerUrl="https://maibec.com/en/siding/"
      ctaTitle="Considering board and batten for your project?"
      ctaText="Send CladCan your elevations, wall dimensions, preferred material system and colour direction. We can help compare natural and engineered options, estimate quantities and coordinate the installation details."
    />
  );
}
