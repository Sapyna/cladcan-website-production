import ProductPage from "@/components/ProductPage";

export const metadata = {
  title: "Charred Wood Siding & Soffit | Shou Sugi Ban | CladCan",
  description:
    "Explore charred wood siding and soffit inspired by the Japanese Yakisugi or Shou Sugi Ban technique, with textured finishes for Ontario projects.",
};

const root = "/images/exterior-systems/natural-wood/charred-wood";

export default function Page() {
  return (
    <ProductPage
      eyebrow="NATURAL WOOD SIDING & SOFFIT"
      title="Charred Wood"
      subtitle="Burned to endure. Built to inspire."
      intro="Charred wood siding and soffit combine the expressive grain of real wood with a controlled surface-burning process inspired by the Japanese tradition of Yakisugi, often called Shou Sugi Ban. The result ranges from softly smoked and brushed boards to deeply carbonized black textures for façades, soffits and architectural features."
      images={[
        `${root}/black-charred-wood-siding-modern-home.webp`,
        `${root}/charred-wood-siding-texture.webp`,
        `${root}/brushed-charred-wood-siding-detail.webp`,
      ]}
      specs={[
        { label: "Material", value: "Project-selected natural wood species" },
        { label: "Process", value: "Controlled burn, brushing or rinsing, then protective oil as specified" },
        { label: "Surface options", value: "Deep char, brushed char and lighter char expressions" },
        { label: "Profile examples", value: "No. 30 and No. 30A profiles shown in supplied documentation" },
        { label: "Typical uses", value: "Siding, soffit, feature walls, fencing and selected millwork" },
        { label: "Finish selection", value: "Species, char depth, brushing and oil system confirmed by sample" },
      ]}
      benefits={[
        { title: "Distinctive character", text: "Every board responds differently to flame, producing natural variation in grain, sheen and texture." },
        { title: "Architectural depth", text: "Carbonized and brushed surfaces interact strongly with light and shadow across a façade." },
        { title: "Flexible expression", text: "The finish can range from warm brown and lightly smoked tones to dramatic textured black." },
        { title: "Protective surface", text: "When correctly produced, detailed and maintained, the charred layer and specified finish help protect the underlying wood." },
      ]}
      applications={[
        "Residential and commercial exterior siding",
        "Protected soffits, canopies and entrance ceilings",
        "Feature walls and mixed-material façades",
        "Fencing and selected exterior screens",
        "Interior feature walls and ceiling details where permitted",
        "Custom millwork and architectural accents",
      ]}
      components={[
        { title: "Deep Char", detail: "A pronounced carbonized surface with bold texture and a near-black appearance." },
        { title: "Brushed Char", detail: "Loose surface char is removed to reveal more grain while retaining the darkened character." },
        { title: "Light Char", detail: "A lighter burn preserves warmer brown tones and stronger visible wood colour." },
        { title: "Oiled Finish", detail: "A project-selected oil system can enrich colour and support the specified maintenance strategy." },
        { title: "No. 30 Profile", detail: "A tongue-and-groove profile illustrated in the supplied product information." },
        { title: "No. 30A Profile", detail: "An alternate tongue-and-groove edge configuration shown in the supplied profile drawing." },
      ]}
      technicalSections={[
        {
          eyebrow: "THE YAKISUGI PROCESS",
          title: "Burn, brush and finish under controlled conditions.",
          text: "The supplied process follows three broad stages. The board surface is charred to the desired depth, loose soot and ash are removed where a brushed expression is required, and the prepared wood receives the selected oil or protective finish. Final performance depends on the wood species, manufacturing system, coating and project details.",
          facts: [
            { title: "01 — Burn", text: "Controlled flame creates the carbonized surface and establishes the colour and texture." },
            { title: "02 — Brush & rinse", text: "Loose material may be removed to expose grain and prepare the board for finishing." },
            { title: "03 — Oil finish", text: "The specified finish enriches the appearance and forms part of the ongoing care strategy." },
          ],
          images: [
            { src: `${root}/shou-sugi-ban-wood-charring-process.webp`, alt: "Controlled flame charring a wood board during the Shou Sugi Ban process", caption: "The burn level determines the initial depth, colour and surface character." },
            { src: `${root}/brushed-charred-wood-siding-detail.webp`, alt: "Close view of brushed charred wood siding boards", caption: "Brushing reveals the grain beneath the carbonized surface." },
          ],
        },
        {
          eyebrow: "PROFILES & FINISHES",
          title: "Specify the complete visual system by sample.",
          text: "Species, milling profile, char depth, brushing and oil colour should be reviewed together. The supplied finish examples include cedar, Douglas fir and hickory expressions with dark char, light char, brushed and satin variations. Physical samples remain essential because natural variation and lighting affect the finished result.",
          facts: [
            { title: "Species", text: "Confirm the available wood species and its suitability for the intended exterior or interior exposure." },
            { title: "Profile", text: "Coordinate exposed face, joint geometry, installation direction and support spacing before ordering." },
            { title: "Sample approval", text: "Approve a representative range rather than a single board so expected variation is understood." },
          ],
          images: [
            { src: `${root}/charred-wood-siding-profile-planks.webp`, alt: "Charred wood tongue-and-groove siding profile boards", caption: "Interlocking charred boards create a continuous linear surface." },
            { src: `${root}/charred-wood-siding-profile-dimensions.webp`, alt: "Technical drawing of No. 30 and No. 30A charred wood siding profiles", caption: "Profile drawings supplied for design coordination; confirm current dimensions before specification." },
            { src: `${root}/shou-sugi-ban-selected-finishes.webp`, alt: "Selected charred wood finishes in cedar Douglas fir and hickory", caption: "Selected finish examples show the range from warm light char to deep black texture." },
          ],
        },
        {
          eyebrow: "DESIGN & CARE",
          title: "Detail real wood for exposure and natural movement.",
          text: "Charred wood remains a natural wood product. Provide a drained and ventilated assembly, compatible corrosion-resistant fasteners, protected cut ends and suitable clearances from moisture-prone surfaces. Maintenance intervals vary with exposure, species, char type and finish system, so follow the current supplier instructions rather than a universal schedule.",
          facts: [
            { title: "Moisture management", text: "Coordinate rainscreen drainage, ventilation, flashing and end conditions as one assembly." },
            { title: "Handling", text: "Protect finished faces during transport and installation, especially heavily carbonized textures." },
            { title: "Maintenance", text: "Inspect periodically and renew the specified finish when appearance or exposure conditions require it." },
          ],
          images: [
            { src: `${root}/black-charred-wood-siding-modern-home.webp`, alt: "Modern home clad in vertical black charred wood siding", caption: "Charred wood can provide a restrained monolithic finish across contemporary volumes." },
            { src: `${root}/natural-wood-soffit-modern-home.webp`, alt: "Natural wood soffit paired with dark metal on a modern home", caption: "Charred siding can also be paired with warmer natural wood soffits and metal details." },
          ],
        },
      ]}
      finishes={[
        "Deep black textured char",
        "Brushed black char with visible grain",
        "Light char in warmer brown tones",
        "Satin or oiled charred finish",
        "Species-specific custom sample range",
      ]}
      relatedProducts={[
        { type: "NATURAL WOOD", title: "Cedar", description: "Tongue-and-groove, channel, nickel-gap and dressed western red cedar boards.", href: "/exterior-systems/natural-wood/cedar" },
        { type: "NATURAL WOOD", title: "Engineered Wood", description: "Factory-finished HDF siding in modern, lap and reverse board-and-batten profiles.", href: "/exterior-systems/natural-wood/engineered-wood" },
        { type: "NATURAL WOOD", title: "Genuine Wood Siding", description: "Factory-finished real wood profiles in solid colours and natural stains.", href: "/exterior-systems/natural-wood/genuine-wood-siding" },
      ]}
      ctaTitle="Considering charred wood for your project?"
      ctaText="Send CladCan your elevations, preferred species, profile and finish direction. We can help coordinate samples, quantities, accessories and installation requirements."
    />
  );
}
