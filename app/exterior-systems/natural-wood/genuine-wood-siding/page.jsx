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
      images={["/images/source-library/natural-wood/genuine-wood-siding/hero.webp","/images/source-library/natural-wood/genuine-wood-siding/detail-01.webp","/images/source-library/natural-wood/genuine-wood-siding/detail-02.webp"]}
      specs={[
        { label: "Profile family", value: "Rabbeted bevel, Modern, Contemporary, Channel, Cove and V-Joint" },
        { label: "Nominal widths", value: "4, 6 and 8 in, depending on profile" },
        { label: "Surface finishes", value: "Textured and selected brushed-face options" },
        { label: "Colours", value: "Solid colours and Natural Tones" },
        { label: "Installation direction", value: "Horizontal or vertical, depending on profile" },
        { label: "Wood species", value: "Spruce–Pine–Fir (SPF) with sound tight knots" },
        { label: "Board supply", value: "Kiln-dried to 12–16% moisture content; random 4–16 ft lengths" },
        { label: "Factory coating", value: "Low-VOC water-based stain applied on all six sides" },
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
            { src: `${root}/maibec-rabbeted-bevel-profile.webp`, alt: "Maibec rabbeted bevel genuine wood siding profile", caption: "Rabbeted bevel creates a familiar horizontal siding expression." },
            { src: `${root}/maibec-rabbeted-bevel-dimensions.webp`, alt: "Maibec rabbeted bevel siding profile dimensions", caption: "Rabbeted bevel profile options; confirm current dimensions before specification." },
            { src: `${root}/maibec-modern-siding-profile.webp`, alt: "Maibec Modern genuine wood siding profile", caption: "Modern profile with a clean recessed joint." },
            { src: `${root}/maibec-modern-siding-dimensions.webp`, alt: "Maibec Modern wood siding profile dimensions", caption: "Modern profile options and compatible installation directions." },
          ],
        },
        {
          eyebrow: "PROFILE OPTIONS",
          title: "Contemporary, Channel, Cove and V-Joint profiles.",
          text: "Four additional profiles extend the range from narrow clean joints to deeper channels and traditional V-grooves. Contemporary, Channel and V-Joint support horizontal or vertical layouts in the supplied information, while Cove is shown as a horizontal profile. Available widths, face finishes and fastening options vary by profile.",
          facts: [
            { title: "Contemporary", text: "Six-inch profile in textured or selected brushed-face finish for horizontal or vertical layouts." },
            { title: "Channel & Cove", text: "Channel provides a deeper recessed joint; Cove creates a softer horizontal shadow transition." },
            { title: "V-Joint", text: "Four, six and eight-inch nominal options create a defined V-groove in horizontal or vertical layouts." },
          ],
          images: [
            { src: `${root}/maibec-contemporary-siding-profile.webp`, alt: "Maibec Contemporary genuine wood siding profile", caption: "Contemporary profile with authentic visible grain." },
            { src: `${root}/maibec-contemporary-siding-dimensions.webp`, alt: "Maibec Contemporary siding dimensions", caption: "Contemporary profile information." },
            { src: `${root}/maibec-channel-siding-profile.webp`, alt: "Maibec Channel genuine wood siding profile", caption: "Channel profile produces a pronounced recessed joint." },
            { src: `${root}/maibec-channel-siding-dimensions.webp`, alt: "Maibec Channel siding profile dimensions", caption: "Channel profile options and installation directions." },
            { src: `${root}/maibec-cove-siding-profile.webp`, alt: "Maibec Cove genuine wood siding profile", caption: "Cove profile creates a softer horizontal reveal." },
            { src: `${root}/maibec-cove-siding-dimensions.webp`, alt: "Maibec Cove siding profile dimensions", caption: "Cove profile information for horizontal installation." },
            { src: `${root}/maibec-v-joint-siding-profile.webp`, alt: "Maibec V-Joint genuine wood siding profile", caption: "V-Joint provides a crisp linear groove." },
            { src: `${root}/maibec-v-joint-siding-dimensions.webp`, alt: "Maibec V-Joint siding profile dimensions", caption: "V-Joint profile options in multiple widths." },
          ],
        },
        {
          eyebrow: "SURFACE & FACTORY FINISH",
          title: "Textured or brushed-face wood, finished on all six sides.",
          text: "The supplied information describes kiln-dried SPF siding finished in a climate-controlled factory environment. Low-VOC water-based stain is applied on all six sides to support colour consistency, stain penetration and weather protection. Textured boards emphasize traditional grain, while the URBAHN brushed-face finish creates a smoother contemporary matte expression.",
          facts: [
            { title: "Textured finish", text: "A pronounced natural grain suited to classic and contemporary solid or natural-tone colours." },
            { title: "Brushed face", text: "A smoother matte face developed for cleaner modern architecture." },
            { title: "Warranty", text: "The supplied document lists profile-specific finish, decay and labour warranties; current terms, exclusions and registration requirements must be confirmed with Maibec." },
          ],
          images: [
            { src: `${root}/maibec-textured-wood-finish.webp`, alt: "Close-up of Maibec textured genuine wood siding finish", caption: "Textured finish emphasizes grain depth and natural character." },
            { src: `${root}/maibec-brushed-face-wood-finish.webp`, alt: "Close-up of Maibec brushed-face genuine wood siding finish", caption: "Brushed-face finish offers a smoother contemporary appearance." },
            { src: `${root}/natural-wood-soffit-modern-home.webp`, alt: "Natural wood soffit paired with contemporary metalwork", caption: "Real wood can coordinate with metal, masonry and glazing across contemporary exteriors." },
          ],
        },
        {
          eyebrow: "COLOUR COLLECTION",
          title: "Natural stains, solid colours and custom matching.",
          text: "Natural stains preserve visible grain and board-to-board variation, while solid colours provide greater visual uniformity. The supplied palette groups solid colours into greens, greys and blues, browns and reds, and beiges and yellows. Maibec TrueMatch is also presented as a custom solid-stain matching option. Always approve physical samples and confirm availability for the selected profile and face finish.",
          facts: [
            { title: "Natural stains", text: "Semi-transparent tones highlight grain, texture and authentic variation between boards." },
            { title: "Solid colours", text: "Opaque nature-inspired palettes support coordinated traditional and contemporary schemes." },
            { title: "TrueMatch", text: "Custom solid-stain matching can coordinate siding with a project-specific colour direction." },
          ],
          images: [
            { src: `${root}/maibec-natural-stain-siding-detail.webp`, alt: "Maibec genuine wood siding finished in a natural stain", caption: "Natural stains retain visible grain and tonal movement." },
            { src: `${root}/maibec-natural-stain-colours.webp`, alt: "Maibec Natural Tones genuine wood siding colour palette", caption: "Natural stain examples supplied with the product information." },
            { src: `${root}/maibec-solid-colours-greens.webp`, alt: "Maibec green solid colour palette for genuine wood siding", caption: "Greens and neutral solid colours." },
            { src: `${root}/maibec-solid-colours-greys-blues.webp`, alt: "Maibec grey and blue solid colour palette for wood siding", caption: "Greys and blues." },
            { src: `${root}/maibec-solid-colours-browns-reds.webp`, alt: "Maibec brown and red solid colour palette for wood siding", caption: "Browns and reds." },
            { src: `${root}/maibec-solid-colours-beiges-yellows.webp`, alt: "Maibec beige and yellow solid colour palette for wood siding", caption: "Beiges, yellows and foundational neutrals." },
            { src: `${root}/maibec-truematch-custom-colour.webp`, alt: "Maibec TrueMatch custom colour tools for genuine wood siding", caption: "TrueMatch supports custom solid-stain colour coordination." },
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
        { type: "NATURAL WOOD", title: "Cedar", description: "Tongue-and-groove, channel, nickel-gap and dressed western red cedar boards.", href: "/exterior-systems/natural-wood/cedar" },
        { type: "NATURAL WOOD", title: "Charred Wood", description: "Architectural wood with a deeply textured charred surface and dramatic tonal range.", href: "/exterior-systems/natural-wood/charred-wood" },
        { type: "NATURAL WOOD", title: "Engineered Wood", description: "Maibec CanExel HDF siding in lap, contemporary and reverse board-and-batten profiles.", href: "/exterior-systems/natural-wood/engineered-wood" },
      ]}
      manufacturer="Maibec"
      manufacturerUrl="https://maibec.com/en/siding/"
      ctaTitle="Planning an exterior with genuine wood?"
      ctaText="Share your elevations, preferred profile, orientation and finish direction. CladCan can help coordinate samples, quantities, accessories and installation requirements for the project."
    />
  );
}
