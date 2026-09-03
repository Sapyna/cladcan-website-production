import ProductPage from "@/components/ProductPage";

export const metadata = {
  title: "Cedar Siding, Soffit & Tongue-and-Groove Boards | CladCan",
  description:
    "Western red cedar siding and soffit profiles including tongue-and-groove, channel siding, nickel gap and clear dressed boards for Ontario exterior projects.",
};

const root = "/images/exterior-systems/natural-wood/cedar";

export default function Page() {
  return (
    <ProductPage
      eyebrow="NATURAL WOOD SIDING & SOFFIT"
      title="Cedar"
      subtitle="Natural warmth for siding, soffit and architectural woodwork."
      intro="Cedar brings unmistakable grain, warmth and natural variation to exterior walls, soffits, ceilings and architectural details. CladCan coordinates tongue-and-groove, channel, nickel-gap and dressed-board options in clear and tight-knot appearances, with profile and finish selection matched to the project’s exposure and design intent."
      images={[
        `${root}/western-red-cedar-soffit-modern-home-hero.webp`,
        `${root}/cedar-soffit-acm-fascia-residential-project.webp`,
        `${root}/western-red-cedar-soffit-grain-detail.webp`,
      ]}
      specs={[
        { label: "Material family", value: "Western red cedar and project-specified cedar boards" },
        { label: "Available appearances", value: "Clear and tight-knot grades, subject to supplier availability" },
        { label: "Profile options", value: "Tongue-and-groove, channel siding, nickel gap and S4S" },
        { label: "Nominal sizes shown", value: "1×4, 1×6, 1×8, 1×12, 2×6 and 2×8" },
        { label: "Typical applications", value: "Siding, soffit, ceilings, entries and feature areas" },
        { label: "Finish strategy", value: "Natural, stained or project-selected protective finish" },
      ]}
      benefits={[
        { title: "Authentic grain", text: "Natural colour and board-to-board variation create depth that manufactured wood-look finishes cannot duplicate exactly." },
        { title: "Profile versatility", text: "Tongue-and-groove, channel and nickel-gap profiles support different joint expressions and architectural scales." },
        { title: "Soffit impact", text: "Warm cedar ceilings provide a strong visual counterpoint to dark fascia, ACM, masonry and glazing." },
        { title: "Design flexibility", text: "Clear and tight-knot appearances can support refined contemporary work or a more expressive natural character." },
      ]}
      applications={[
        "Exterior siding and feature walls",
        "Protected soffits and entrance ceilings",
        "Canopies, porches and covered outdoor areas",
        "Gables and mixed-material residential façades",
        "Commercial and institutional architectural accents",
        "Interior or exterior feature applications where permitted by the selected product",
      ]}
      components={[
        { title: "1×4 T&G Tight Knot", detail: "Compact tongue-and-groove cedar board with visible natural knot character." },
        { title: "1×6 T&G Tight Knot", detail: "A versatile nominal six-inch tongue-and-groove format for siding and soffit layouts." },
        { title: "2×6 T&G Tight Knot", detail: "Thicker tongue-and-groove cedar board for a more substantial profile and deeper edge geometry." },
        { title: "2×6 Clear T&G", detail: "Clear-grade tongue-and-groove cedar for a cleaner, more uniform architectural appearance." },
        { title: "2×8 Cedar T&G", detail: "Wide, heavy tongue-and-groove boards for broad linear soffit and ceiling expressions." },
        { title: "1×6 Nickel Gap", detail: "Western red cedar siding with a controlled recessed joint and crisp shadow line." },
        { title: "1×6 & 1×8 Channel", detail: "Channel siding profiles with a pronounced reveal for horizontal or project-coordinated layouts." },
        { title: "1×12 Clear S4S", detail: "Clear cedar dressed on four sides for trims, details and custom architectural applications." },
      ]}
      technicalSections={[
        {
          eyebrow: "PROJECT APPLICATION",
          title: "Cedar soffit paired with contemporary metalwork.",
          text: "The supplied project photography shows cedar soffit used beneath a deep residential canopy and coordinated with dark metal fascia, masonry and glazing. The warm linear ceiling softens the harder façade materials while maintaining a clean contemporary composition.",
          facts: [
            { title: "Continuous layout", text: "Board direction, end joints and lighting penetrations should be planned across the full ceiling before installation begins." },
            { title: "Perimeter detailing", text: "Coordinate cedar with fascia returns, wall junctions, columns, glazing and recessed fixtures." },
            { title: "Protected exposure", text: "Even sheltered soffits require a finish and maintenance strategy appropriate to exterior temperature and humidity cycles." },
          ],
          images: [
            { src: `${root}/tongue-groove-cedar-soffit-entrance.webp`, alt: "Tongue-and-groove cedar soffit above a modern residential entrance", caption: "Cedar soffit coordinated with masonry columns, dark metal fascia and glazing." },
            { src: `${root}/western-red-cedar-soffit-modern-home.webp`, alt: "Western red cedar soffit on a modern residential canopy", caption: "A broad canopy emphasizes the continuous grain and warm colour of the cedar ceiling." },
            { src: `${root}/natural-cedar-soffit-installation-detail.webp`, alt: "Natural cedar soffit installation and board alignment detail", caption: "Close-range view of board direction, joints and recessed-light coordination." },
          ],
        },
        {
          eyebrow: "CEDAR PROFILE RANGE",
          title: "Select by joint, scale, grade and application.",
          text: "Nominal size alone does not define the finished appearance. The selected joint profile, exposed face, grade, moisture condition and installation direction all affect coverage and visual rhythm. Actual dimensions, lengths and allowable applications should be confirmed with the current supplier documentation before ordering.",
          facts: [
            { title: "Tongue & groove", text: "Interlocking edges create a continuous linear surface suited to soffits, ceilings and selected siding applications." },
            { title: "Channel & nickel gap", text: "Recessed joints create deliberate shadow lines and a more articulated siding expression." },
            { title: "Clear vs tight knot", text: "Clear boards read cleaner and more uniform; tight-knot boards retain stronger natural variation and character." },
          ],
          images: [
            { src: `${root}/cedar-2x8-tongue-groove-boards.webp`, alt: "Stack of nominal 2x8 tongue-and-groove cedar boards", caption: "Nominal 2×8 tongue-and-groove cedar boards showing the interlocking edge profile." },
            { src: `${root}/western-red-cedar-1x6-nickel-gap-siding.webp`, alt: "Western red cedar 1x6 nickel-gap siding board", caption: "Nominal 1×6 nickel-gap western red cedar siding." },
            { src: `${root}/western-red-cedar-1x6-channel-siding.webp`, alt: "Western red cedar 1x6 channel siding profile", caption: "Nominal 1×6 channel siding profile." },
            { src: `${root}/western-red-cedar-1x8-channel-siding.webp`, alt: "Western red cedar 1x8 channel siding profile", caption: "Nominal 1×8 channel siding for a wider board scale." },
            { src: `${root}/western-red-cedar-1x4-tongue-groove-tight-knot.webp`, alt: "Western red cedar 1x4 tongue-and-groove tight-knot boards", caption: "Nominal 1×4 tongue-and-groove cedar in a tight-knot appearance." },
            { src: `${root}/western-red-cedar-1x6-tongue-groove-tight-knot.webp`, alt: "Western red cedar 1x6 tongue-and-groove tight-knot boards", caption: "Nominal 1×6 tongue-and-groove cedar in a tight-knot appearance." },
            { src: `${root}/western-red-cedar-2x6-tongue-groove-tight-knot.webp`, alt: "Western red cedar 2x6 tongue-and-groove tight-knot boards", caption: "Nominal 2×6 tongue-and-groove cedar in a tight-knot appearance." },
            { src: `${root}/clear-western-red-cedar-2x6-tongue-groove.webp`, alt: "Clear western red cedar 2x6 tongue-and-groove boards", caption: "Nominal 2×6 clear tongue-and-groove western red cedar." },
            { src: `${root}/clear-western-red-cedar-1x12-s4s-board.webp`, alt: "Clear western red cedar 1x12 dressed four sides board", caption: "Nominal 1×12 clear cedar dressed on four sides for custom details." },
          ],
        },
        {
          eyebrow: "INSTALLATION & CARE",
          title: "Design for drainage, ventilation and natural movement.",
          text: "Cedar is a natural material that responds to moisture, temperature and UV exposure. The wall or soffit assembly should support drainage and drying, use compatible corrosion-resistant fasteners, protect cut ends as required and maintain clearances from moisture-prone surfaces. Confirm the coating schedule and ongoing maintenance expectations before installation.",
          facts: [
            { title: "Acclimation", text: "Store and condition material in accordance with the supplier’s requirements before installation." },
            { title: "Compatible fasteners", text: "Use corrosion-resistant fasteners suitable for cedar to reduce staining and premature deterioration." },
            { title: "Finish maintenance", text: "Transparent and semi-transparent finishes typically reveal more natural variation and may require periodic renewal." },
          ],
          images: [
            { src: `${root}/western-red-cedar-soffit-grain-detail.webp`, alt: "Close-up of western red cedar soffit grain and colour variation", caption: "Natural grain and tone variation are defining characteristics of genuine cedar." },
            { src: `${root}/cedar-soffit-acm-fascia-residential-project.webp`, alt: "Residential cedar soffit installed with black ACM fascia", caption: "Material transitions and perimeter trims should be coordinated before the cedar is installed." },
          ],
        },
      ]}
      finishes={[
        "Natural unfinished appearance where appropriate",
        "Clear or translucent protective finishes",
        "Semi-transparent stains that retain visible grain",
        "Solid stains for stronger colour uniformity",
        "Custom project finish subject to sample approval",
      ]}
      relatedProducts={[
        { type: "NATURAL WOOD", title: "Board & Batten", description: "Vertical natural or engineered siding with dimensional battens and factory-finished colour options.", href: "/exterior-systems/natural-wood/board-and-batten" },
        { type: "NATURAL WOOD", title: "Genuine Wood Siding", description: "Multiple wood siding profiles for horizontal and vertical exterior applications.", href: "/exterior-systems/natural-wood/genuine-wood-siding" },
        { type: "NATURAL WOOD", title: "Charred Wood", description: "Deeply textured charred wood for dramatic siding and architectural accents." },
      ]}
      ctaTitle="Considering cedar for siding or soffit?"
      ctaText="Send CladCan your elevations, reflected ceiling plans, preferred profile, grade and finish direction. We can help confirm product options, quantities, accessories and installation coordination for the project."
    />
  );
}
