import ProductPage from "@/components/ProductPage";

export const metadata = {
  title: "Engineered Wood Siding | Maibec CanExel | CladCan",
  description:
    "Explore Maibec CanExel engineered wood siding in VStyle, Ridgewood D-5, Ced'R-Vue 9 and UltraPlank profiles, colours and installation directions.",
};

const root = "/images/exterior-systems/natural-wood/engineered-wood";

export default function Page() {
  return (
    <ProductPage
      eyebrow="NATURAL WOOD SIDING & SOFFIT"
      title="Engineered Wood Siding"
      subtitle="Authentic woodgrain character with factory-controlled performance."
      intro="Maibec CanExel engineered wood siding uses a high-density fibre substrate, embossed woodgrain and a multi-layer factory-applied thermoset finish. The collection includes contemporary vertical and horizontal profiles, traditional lap siding and reverse board-and-batten expressions for Canadian residential and light-commercial exteriors."
      images={["/images/source-library/natural-wood/engineered-wood/hero.webp","/images/source-library/natural-wood/engineered-wood/detail-01.webp","/images/source-library/natural-wood/engineered-wood/detail-02.webp"]}
      specs={[
        { label: "Manufacturer", value: "Maibec CanExel" },
        { label: "Core material", value: "High-density fibre engineered wood" },
        { label: "Profiles", value: "VStyle, Ridgewood D-5, Ced'R-Vue 9 and UltraPlank" },
        { label: "Board length", value: "12 ft (3.66 m) for the profiles shown" },
        { label: "Nominal thickness", value: "3/8 in (0.95 cm) for the profiles shown" },
        { label: "Finish", value: "Multi-layer factory-applied thermoset coating" },
      ]}
      benefits={[
        { title: "Woodgrain appearance", text: "Embossed texture and layered colour provide a natural wood look with controlled visual consistency." },
        { title: "Factory protection", text: "The thermoset coating system is designed to resist fading, cracking, peeling and splitting." },
        { title: "Profile choice", text: "Lap, vertical, horizontal, diagonal and reverse board-and-batten expressions support varied architecture." },
        { title: "Efficient coverage", text: "Twelve-foot boards and profile-specific coverage can simplify estimating and installation planning." },
      ]}
      applications={[
        "Residential exterior siding",
        "Feature walls and entrance volumes",
        "Gables and reverse board-and-batten accents",
        "Horizontal lap siding elevations",
        "Vertical or diagonal contemporary layouts on compatible profiles",
        "New construction and exterior renovation projects",
      ]}
      components={[
        { title: "VStyle", detail: "Twelve-inch nominal profile for horizontal or vertical installation; approximately 11 sq. ft. coverage per 12-ft board." },
        { title: "Ridgewood D-5", detail: "Traditional double five-inch Dutch-lap expression for horizontal installation; approximately 11 sq. ft. per board." },
        { title: "Ced'R-Vue 9", detail: "Bold nine-inch lap siding for horizontal installation; approximately 7.75 sq. ft. per 12-ft board." },
        { title: "UltraPlank", detail: "Reverse board-and-batten profile for vertical or diagonal layouts; approximately 11 sq. ft. per board." },
      ]}
      technicalSections={[
        {
          eyebrow: "PROFILE OPTIONS",
          title: "VStyle: clean lines in two directions.",
          text: "VStyle is a 12-inch nominal profile designed for either horizontal or vertical installation. Its broad face and fine joint create a contemporary expression, while the documented 12-foot board covers approximately 11 square feet. Confirm current accessory, fastening and colour availability before specification.",
          facts: [
            { title: "Orientation", text: "Horizontal or vertical." },
            { title: "Nominal size", text: "12 in wide × 3/8 in thick × 12 ft long." },
            { title: "Colour range", text: "The supplied information identifies 18 colour options; verify the current palette." },
          ],
          images: [
            { src: `${root}/canexel-vstyle-white-engineered-siding.webp`, alt: "White home clad in CanExel VStyle engineered wood siding", caption: "VStyle supports clean contemporary vertical and horizontal layouts." },
            { src: `${root}/canexel-vstyle-profile.webp`, alt: "CanExel VStyle engineered wood siding profile sample", caption: "VStyle authentic woodgrain profile." },
            { src: `${root}/canexel-vstyle-dimensions.webp`, alt: "CanExel VStyle siding profile dimensions and installation directions", caption: "VStyle profile drawing; verify current dimensions and coverage with manufacturer literature." },
          ],
        },
        {
          eyebrow: "PROFILE OPTIONS",
          title: "Ridgewood D-5: a traditional Dutch-lap rhythm.",
          text: "Ridgewood D-5 creates the appearance of two five-inch boards in one panel. It is intended for horizontal installation and uses crisp shadow lines to produce a familiar traditional façade with the consistency of an engineered product.",
          facts: [
            { title: "Orientation", text: "Horizontal only." },
            { title: "Nominal size", text: "12 in wide × 3/8 in thick × 12 ft long." },
            { title: "Colour range", text: "The supplied information identifies 20 colours; verify current availability." },
          ],
          images: [
            { src: `${root}/canexel-ridgewood-d5-profile.webp`, alt: "CanExel Ridgewood D-5 engineered wood siding profile", caption: "Double-profile Dutch-lap appearance with authentic woodgrain texture." },
            { src: `${root}/canexel-ridgewood-d5-dimensions.webp`, alt: "CanExel Ridgewood D-5 siding profile dimensions", caption: "Ridgewood D-5 technical profile and coverage information." },
          ],
        },
        {
          eyebrow: "PROFILE OPTIONS",
          title: "Ced'R-Vue 9: a wider horizontal lap.",
          text: "Ced'R-Vue 9 uses a nine-inch lap to create broad horizontal lines for traditional or contemporary exteriors. Each supplied 12-foot board is documented to cover approximately 7.75 square feet.",
          facts: [
            { title: "Orientation", text: "Horizontal only." },
            { title: "Nominal size", text: "9 in wide × 3/8 in thick × 12 ft long." },
            { title: "Colour range", text: "The supplied information identifies 20 colours; verify current availability." },
          ],
          images: [
            { src: `${root}/canexel-cedr-vue-9-profile.webp`, alt: "CanExel Ced'R-Vue 9 engineered wood lap siding profile", caption: "Nine-inch lap profile with a pronounced horizontal reveal." },
            { src: `${root}/canexel-cedr-vue-9-dimensions.webp`, alt: "CanExel Ced'R-Vue 9 siding profile dimensions", caption: "Ced'R-Vue 9 technical profile and coverage information." },
          ],
        },
        {
          eyebrow: "PROFILE OPTIONS",
          title: "UltraPlank: reverse board-and-batten impact.",
          text: "UltraPlank reinterprets board-and-batten with a recessed linear joint and genuine woodgrain texture. The profile can be installed vertically or diagonally, making it suitable for gables, accent walls and full elevations where stronger directional movement is desired.",
          facts: [
            { title: "Orientation", text: "Vertical or diagonal." },
            { title: "Nominal size", text: "12 in wide × 3/8 in thick × 12 ft long." },
            { title: "Coverage", text: "Approximately 11 sq. ft. per board in the supplied information." },
          ],
          images: [
            { src: `${root}/canexel-ultraplank-profile.webp`, alt: "CanExel UltraPlank reverse board-and-batten siding profile", caption: "UltraPlank creates a bold reverse board-and-batten expression." },
            { src: `${root}/canexel-ultraplank-dimensions.webp`, alt: "CanExel UltraPlank siding profile dimensions", caption: "UltraPlank technical profile and compatible installation directions." },
          ],
        },
        {
          eyebrow: "COLOUR SYSTEM",
          title: "Woodgrain, two-tone and solid colour options.",
          text: "The supplied collection includes dimensional two-tone colours, solid colours and a TrueMatch custom solid-stain service. Palette availability can differ by profile, and the colour sheets specifically note that some selections apply to the Ced'R-Vue 6-inch Snap Lap profile. Confirm the chosen colour and profile combination before ordering.",
          facts: [
            { title: "Two-tone", text: "Complementary tones emphasize the embossed grain and create greater visual depth." },
            { title: "Solid colours", text: "Nature-inspired opaque colours support consistent contemporary and traditional schemes." },
            { title: "TrueMatch", text: "A custom solid-stain matching option is available subject to current manufacturer requirements." },
          ],
          images: [
            { src: `${root}/canexel-engineered-wood-siding-colour-example.webp`, alt: "Home and close-up showing CanExel engineered wood siding colour", caption: "Review colour at both sample scale and full-elevation scale." },
            { src: `${root}/canexel-engineered-wood-siding-two-tone-colours.webp`, alt: "CanExel engineered wood siding two-tone colour palette", caption: "Two-tone colour examples supplied with the product information." },
            { src: `${root}/canexel-engineered-wood-siding-solid-colours.webp`, alt: "CanExel engineered wood siding solid colour palette", caption: "Solid colour examples; profile availability may vary." },
            { src: `${root}/canexel-truematch-custom-colour.webp`, alt: "TrueMatch custom colour tools for engineered wood siding", caption: "TrueMatch supports project-specific solid colour coordination." },
            { src: `${root}/natural-wood-soffit-modern-home.webp`, alt: "Natural wood soffit on a contemporary home", caption: "Engineered wood-look products can be coordinated with natural wood, metal, masonry and glazing." },
          ],
        },
      ]}
      finishes={[
        "Factory-applied two-tone woodgrain colours",
        "Factory-applied solid colours",
        "Profile-specific standard palettes",
        "TrueMatch custom solid-stain matching",
        "Physical sample approval before ordering",
      ]}
      relatedProducts={[
        { type: "NATURAL WOOD", title: "Board & Batten", description: "Vertical natural or engineered siding with dimensional battens and factory-finished colour options.", href: "/exterior-systems/natural-wood/board-and-batten" },
        { type: "NATURAL WOOD", title: "Genuine Wood Siding", description: "Factory-finished real wood profiles with solid colours and natural stains.", href: "/exterior-systems/natural-wood/genuine-wood-siding" },
        { type: "NATURAL WOOD", title: "Charred Wood", description: "Real wood with a controlled carbonized finish inspired by Yakisugi.", href: "/exterior-systems/natural-wood/charred-wood" },
      ]}
      manufacturer="Maibec CanExel"
      manufacturerUrl="https://maibec.com/en/canexel/"
      ctaTitle="Comparing engineered wood profiles?"
      ctaText="Send CladCan your elevations, preferred orientation and colour direction. We can help coordinate samples, quantities, trims and current installation requirements."
    />
  );
}
