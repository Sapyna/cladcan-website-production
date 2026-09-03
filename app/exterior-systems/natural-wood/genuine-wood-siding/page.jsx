import ProductPage from "@/components/ProductPage";

export const metadata = {
  title: "Genuine Wood Siding Profiles | CladCan",
  description:
    "Maibec genuine wood siding in rabbeted bevel, modern, contemporary, channel, cove and V-joint profiles with solid colours and Natural Tones.",
};

const root = "/images/exterior-systems/natural-wood/genuine-wood-siding";

export default function Page() {
  return (
    <ProductPage
      eyebrow="NATURAL WOOD SIDING & SOFFIT"
      title="Genuine Wood Siding"
      subtitle="Authentic grain, flexible profiles and factory-applied colour."
      intro="Genuine wood siding brings warm tone, tactile grain and natural variation to the building envelope. Maibec’s profile range can be installed horizontally or vertically, combined with shingles or contrasting materials, and finished in solid colours or Natural Tones to suit traditional and contemporary architecture."
      images={[
        "/images/exterior-systems/natural-wood-siding-soffit-ontario.webp",
        `${root}/genuine-wood-siding-textured-profile.webp`,
        "/images/content/natural-wood-project.webp",
      ]}
      specs={[
        { label: "Profile family", value: "Rabbeted bevel, Modern, Contemporary, Channel, Cove and V-Joint" },
        { label: "Nominal widths", value: "4, 6 and 8 in, depending on profile" },
        { label: "Surface finishes", value: "Textured and selected brushed-face options" },
        { label: "Colours", value: "Solid colours and Natural Tones" },
        { label: "Installation direction", value: "Horizontal or vertical, depending on profile" },
        { label: "Fastening", value: "Regular or selected Maibec em+ concealed-fastening options" },
      ]}
      benefits={[
        { title: "Authentic material", text: "Every board carries genuine grain and tonal variation that cannot be duplicated exactly by manufactured wood-look products." },
        { title: "Profile flexibility", text: "Multiple widths and joint expressions support horizontal, vertical and mixed-material façade compositions." },
        { title: "Factory finishing", text: "Controlled factory-applied finishes provide consistent colour coverage and simplify the project finishing workflow." },
        { title: "Architectural range", text: "Traditional bevel profiles and cleaner modern joints allow the same material family to work across diverse designs." },
      ]}
      applications={[
        "Residential siding and feature elevations",
        "Gables, entries and sheltered architectural accents",
        "Horizontal or vertical façade layouts",
        "Mixed-material exteriors with stone, brick or metal",
        "Contemporary, transitional and traditional buildings",
        "Projects prioritizing authentic natural material character",
      ]}
      components={[
        { title: "Rabbeted Bevel", detail: "Textured or selected brushed-face finish in 4, 6 and 8-inch widths; horizontal installation." },
        { title: "Modern", detail: "Six and eight-inch widths with horizontal or vertical installation flexibility." },
        { title: "Contemporary", detail: "Six-inch profile in textured or brushed-face finish for horizontal or vertical layouts." },
        { title: "Channel", detail: "Textured six and eight-inch profile with a pronounced recessed joint; horizontal or vertical installation." },
        { title: "Cove", detail: "Textured six and eight-inch horizontal profile with a softer shadow transition." },
        { title: "V-Joint", detail: "Textured four, six and eight-inch profile suitable for horizontal or vertical installation." },
      ]}
      technicalSections={[
        {
          eyebrow: "PROFILE SELECTION",
          title: "Choose the joint, width and direction together.",
          text: "The apparent scale of wood siding changes with board width, joint depth and orientation. Narrower profiles create more frequent shadow lines, while wider boards read as calmer surfaces. Confirm which finish, width and fastening system is available for the selected profile before finalizing the elevation.",
          facts: [
            { title: "Horizontal", text: "Rabbeted bevel and cove are documented as horizontal profiles; several other profiles support either direction." },
            { title: "Vertical", text: "Modern, Contemporary, Channel and V-Joint can support vertical layouts when detailed to current requirements." },
            { title: "Mixed façades", text: "Profiles may be combined with shingles or other exterior materials when transitions and drainage are coordinated." },
          ],
          images: [
            { src: `${root}/genuine-wood-siding-textured-profile.webp`, alt: "Close-up of textured genuine wood siding boards", caption: "Factory-finished genuine wood preserves visible grain and natural variation." },
            { src: "/images/content/natural-wood-project.webp", alt: "Natural wood siding used on a contemporary exterior", caption: "Profile direction and finish should be reviewed as part of the complete elevation composition." },
          ],
        },
      ]}
      finishes={[
        "Textured face",
        "Brushed-face on selected profiles and widths",
        "Factory-applied solid colours",
        "Natural Tones with board-to-board variation",
        "Project-specific sample and colour coordination",
      ]}
      relatedProducts={[
        { type: "NATURAL WOOD", title: "Board & Batten", description: "Dimensional vertical siding in genuine SPF wood or an engineered HDF alternative.", href: "/exterior-systems/natural-wood/board-and-batten" },
        { type: "NATURAL WOOD", title: "Cedar", description: "Tongue-and-groove, channel, nickel-gap and dressed western red cedar boards." },
        { type: "NATURAL WOOD", title: "Charred Wood", description: "Architectural wood with a deeply textured charred surface and dramatic tonal range." },
      ]}
      manufacturer="Maibec"
      manufacturerUrl="https://maibec.com/en/siding/"
      ctaTitle="Planning an exterior with genuine wood?"
      ctaText="Share your elevations, preferred profile, orientation and finish direction. CladCan can help coordinate samples, quantities, accessories and installation requirements for the project."
    />
  );
}
