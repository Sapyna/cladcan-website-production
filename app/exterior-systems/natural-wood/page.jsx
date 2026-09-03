import CurrentSitePage from "@/components/CurrentSitePage";

export const metadata = {
  title: "Natural Wood Siding & Soffit | CladCan",
  description:
    "Explore board and batten, cedar, charred wood, engineered wood and genuine wood siding and soffit systems for Ontario exterior projects.",
};

const boardRoot = "/images/exterior-systems/natural-wood/board-and-batten";

export default function Page() {
  return (
    <CurrentSitePage
      eyebrow="NATURAL WOOD SIDING & SOFFIT"
      title="Natural Wood"
      image="/images/exterior-systems/natural-wood-siding-soffit-ontario.webp"
      images={[
        "/images/exterior-systems/natural-wood-siding-soffit-ontario.webp",
        `${boardRoot}/white-board-and-batten-wood-siding-home.webp`,
        "/images/content/charred-wood-project.webp",
      ]}
      intro="Real and engineered wood exterior systems with authentic grain, dimensional depth and profiles for siding, soffit and architectural features."
      overview="CladCan’s wood collection ranges from genuine cedar and factory-finished wood siding to engineered products and charred finishes. Select the material family and profile together, then coordinate exposure, moisture management, ventilation, finish, fastening and long-term maintenance as one complete exterior assembly."
      decisionSupport={[
        { label: "Choose the material", text: "Natural cedar and genuine wood provide authentic variation; engineered wood emphasizes consistency and reduced maintenance." },
        { label: "Choose the expression", text: "Board and batten creates bold vertical rhythm, tongue-and-groove provides linear continuity, and charred wood adds deep texture and contrast." },
        { label: "Plan for exposure", text: "Species, coating, UV exposure, splash-back, ventilation and drainage influence appearance and service life." },
        { label: "Coordinate the finish", text: "Raw, solid-colour, natural-tone and custom factory finishes should be sampled and confirmed before ordering." },
      ]}
      items={[
        {
          title: "Board & Batten",
          subtitle: "VERTICAL WOOD SIDING",
          href: "/exterior-systems/natural-wood/board-and-batten",
          image: `${boardRoot}/white-board-and-batten-wood-siding-home.webp`,
          tags: ["Vertical profile", "Natural or engineered", "Factory finished"],
          text: "Wide boards and narrow battens create a dimensional vertical façade with farmhouse roots and a clean contemporary edge.",
        },
        {
          title: "Cedar",
          subtitle: "SIDING, SOFFIT & BOARDS",
          image: "/images/exterior-systems/natural-wood/cedar/western-red-cedar-1x8-channel-siding.webp",
          tags: ["Western red cedar", "T&G", "Channel & nickel gap"],
          text: "Naturally expressive cedar profiles for siding, soffit, ceilings and exterior architectural details.",
        },
        {
          title: "Charred Wood",
          subtitle: "SHOU SUGI BAN",
          image: "/images/content/charred-wood-project.webp",
          tags: ["Charred finish", "Textured surface", "Architectural accent"],
          text: "Deeply textured charred wood creates a dramatic exterior finish rooted in traditional preservation techniques.",
        },
        {
          title: "Engineered Wood",
          subtitle: "LOW-MAINTENANCE WOOD LOOK",
          image: "/images/content/engineered-wood-project.webp",
          tags: ["Stable substrate", "Factory finish", "Canadian climate"],
          text: "Engineered siding combines a genuine wood appearance with controlled dimensions, durable coatings and practical maintenance.",
        },
        {
          title: "Genuine Wood Siding",
          subtitle: "MAIBEC WOOD PROFILES",
          href: "/exterior-systems/natural-wood/genuine-wood-siding",
          image: "/images/exterior-systems/natural-wood/genuine-wood-siding/genuine-wood-siding-textured-profile.webp",
          tags: ["Seven profiles", "Solid colours", "Natural tones"],
          text: "Authentic factory-finished wood siding in multiple profiles, widths and horizontal or vertical installation directions.",
        },
      ]}
    />
  );
}
