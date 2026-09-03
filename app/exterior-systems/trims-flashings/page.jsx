import ProductPage from "@/components/ProductPage";

export const metadata = {
  title: "Custom Metal Trims & Flashings | CladCan",
  description:
    "Standard and custom steel and aluminum trims and flashings for corners, openings, parapets, rooflines, siding, soffit and building-envelope transitions.",
};

const imageRoot = "/images/exterior-systems/trims-flashings";

export default function Page() {
  return (
    <ProductPage
      eyebrow="STANDARD & CUSTOM FORMED METAL"
      title="Trims & Flashings"
      subtitle="The details that complete and protect the building envelope."
      intro="CladCan supplies and fabricates standard and project-specific metal trims and flashings for commercial, industrial, institutional, agricultural and residential construction. Profiles are coordinated around the cladding system, openings, transitions, drainage paths and the architectural intent—down to the last detail."
      images={[
        `${imageRoot}/custom-metal-trims-flashings-fabrication.webp`,
        `${imageRoot}/architectural-steel-trims-flashings.webp`,
        `${imageRoot}/steel-trims-flashings-press-brake-fabrication.webp`,
      ]}
      specs={[
        { label: "Product scope", value: "Standard profiles and custom brake-formed shapes" },
        { label: "Typical materials", value: "Pre-painted steel, aluminum and compatible specialty sheet metals" },
        { label: "Typical locations", value: "Corners, openings, rooflines, parapets, transitions and terminations" },
        { label: "Standard guide length", value: "10 ft; selected profiles may be available up to 20 ft" },
        { label: "Profile development", value: "From approved drawings, field dimensions or coordinated concepts" },
        { label: "Finish options", value: "Project-selected gauges, colours and finish systems" },
      ]}
      benefits={[
        { title: "Project-specific fit", text: "Custom dimensions, returns, hems, slopes and interfaces can be formed around the actual wall, roof and opening conditions." },
        { title: "Weather management", text: "Properly coordinated flashing directs water outward and supports continuity at vulnerable transitions and terminations." },
        { title: "Clean visual finish", text: "Consistent corners, reveals, edges and closures complete the façade while concealing and protecting assembly interfaces." },
        { title: "Fabrication support", text: "Repeatable shop-formed components reduce field modification and help installation teams maintain alignment and consistency." },
      ]}
      applications={[
        "Commercial, industrial and institutional building envelopes",
        "Residential and agricultural steel siding and roofing",
        "Window, door and overhead-door perimeter details",
        "Parapets, copings, roof-to-wall transitions and terminations",
        "Soffit, fascia, gable, eave and starter conditions",
        "Panel joints, dividers, inside corners and outside corners",
      ]}
      components={[
        { title: "Inside & Outside Corners", detail: "Formed profiles that protect and finish internal and external wall intersections." },
        { title: "Drip & Base Trims", detail: "Lower-edge and drainage profiles that direct water away from the assembly." },
        { title: "Jamb, Head & Sill Flashings", detail: "Coordinated perimeter pieces for windows, doors and other wall openings." },
        { title: "Parapet Caps & Copings", detail: "Top-of-wall protection with project-specific widths, slopes, joints and returns." },
        { title: "Soffit, Fascia & Gable Trims", detail: "Profiles for eaves, rake edges, soffit returns and roofline transitions." },
        { title: "Eave & Gable Starters", detail: "Starter conditions for controlled panel alignment, closure and water shedding." },
        { title: "Hip, Ridge & Endwall Flashings", detail: "Roof transition profiles coordinated with slope, coverage and panel geometry." },
        { title: "J-Trims, Dividers & Closures", detail: "Edge receivers, panel breaks and termination pieces for clean interfaces." },
        { title: "Sliding-Door & Specialty Trims", detail: "Tracks, covers, jambs, ceiling trims and other project-specific formed pieces." },
      ]}
      technicalSections={[
        {
          eyebrow: "DETAIL COORDINATION",
          title: "One building. Many critical interfaces.",
          text: "Flashing is a system of connected details—not a single accessory. Endwalls, caps, dividers, heads, sills, jambs, drips and corners must work together with membranes, sealants, fasteners and the cladding layout. Final geometry should be reviewed against the project drawings and field conditions.",
          facts: [
            { title: "Openings", text: "Coordinate head, jamb and sill profiles so water is directed to the exterior without interrupting drainage continuity." },
            { title: "Transitions", text: "Resolve changes in material, plane, slope and assembly before fabrication to avoid improvised field details." },
            { title: "Movement & compatibility", text: "Allow for thermal movement and confirm material, coating, fastener and sealant compatibility." },
          ],
          images: [
            { src: `${imageRoot}/steel-trims-flashings-building-envelope-diagram.webp`, alt: "Diagram showing common trims and flashing locations on a metal-clad building", caption: "Typical building-envelope locations: endwall, cap, divider, head, jamb, sill, drip and corner flashings." },
            { src: `${imageRoot}/steel-trims-flashings-building-location-legend.webp`, alt: "Legend identifying standard flashing and trim locations", caption: "Common flashing terminology used to coordinate profiles around a building." },
          ],
        },
        {
          eyebrow: "STANDARD PROFILE LIBRARY",
          title: "Proven shapes for common siding and soffit conditions.",
          text: "The standard range covers the most frequent corners, bases, dividers, eaves, gables, openings and roofline conditions. Dimensions shown in the reference illustrations are starting points only; confirm the selected panel profile, gauge, slope, exposed surface and project-specific interfaces before release.",
          facts: [
            { title: "Corners", text: "Inside and outside corner families support different panel depths, returns and attachment strategies." },
            { title: "Edges & starters", text: "Drip, base, soffit, fascia, gable and eave profiles establish clean, weather-conscious terminations." },
            { title: "Special conditions", text: "Hip, endwall, J-trim, ceiling, jamb and sliding-door pieces complete more complex interfaces." },
          ],
          images: [
            { src: `${imageRoot}/steel-trim-inside-outside-corner-profiles.webp`, alt: "Dimensioned standard steel inside and outside corner trim profiles", caption: "Inside and outside corner profile options with nominal imperial and metric dimensions." },
            { src: `${imageRoot}/steel-trim-drip-base-gable-divider-profiles.webp`, alt: "Dimensioned drip flashing, drip base, jamb and gable divider profiles", caption: "Drip, base, jamb and divider profiles for lower edges, openings and panel transitions." },
            { src: `${imageRoot}/steel-trim-soffit-gable-eaves-starter-profiles.webp`, alt: "Dimensioned steel soffit fascia gable and eave starter trim profiles", caption: "Soffit, fascia, gable and eave starter profiles; slope-dependent pieces require project confirmation." },
            { src: `${imageRoot}/steel-trim-hip-endwall-j-trim-sliding-door-profiles.webp`, alt: "Dimensioned hip endwall J-trim ceiling and sliding door flashing profiles", caption: "Hip, endwall, J-trim, ceiling and sliding-door profile families." },
            { src: `${imageRoot}/steel-trim-jamb-flashing-profiles.webp`, alt: "Dimensioned steel jamb flashing and related opening trim profiles", caption: "Jamb and opening profiles for coordinated door and wall-panel perimeter details." },
            { src: `${imageRoot}/steel-trims-flashings-standard-profile-legend.webp`, alt: "Standard and custom steel trim and flashing profile reference chart", caption: "Overview of common standard profile families available for project coordination." },
          ],
          resource: { label: "Download the Standard Residential Flashing Profile Guide", href: "/downloads/trims-flashings/standard-residential-steel-flashing-profile-guide.pdf" },
        },
        {
          eyebrow: "CUSTOM FABRICATION",
          title: "When the standard profile is not the right profile.",
          text: "CladCan can form project-specific flashings from detailed drawings, approved sketches or coordinated field information. Outside corners, jambs, parapet caps, copings, sills, starters and specialty closures can be adapted to the selected material, gauge, colour, finish and adjacent construction.",
          facts: [
            { title: "Release information", text: "Provide dimensioned profiles, material and finish, exposed faces, hem requirements, quantities and required lengths." },
            { title: "Field verification", text: "Confirm critical openings, parapets, slopes and transition dimensions before fabrication is released." },
            { title: "Controlled repetition", text: "Shop fabrication creates consistent bends and repeatable pieces for cleaner, faster field assembly." },
          ],
          images: [
            { src: `${imageRoot}/steel-trims-flashings-press-brake-fabrication.webp`, alt: "Press brake forming custom steel trims and flashings", caption: "Press-brake fabrication supports repeatable custom profiles and controlled bend geometry." },
            { src: `${imageRoot}/custom-flashing-hydraulic-press-brake.webp`, alt: "Hydraulic press brake used for custom metal flashing fabrication", caption: "Project-specific forming is coordinated from approved dimensions and material requirements." },
          ],
        },
      ]}
      finishes={[
        "Pre-painted steel in coordinated cladding colours",
        "Aluminum in compatible architectural finishes",
        "Exposed-face and paint-direction coordination",
        "Project-specific gauges and specialty sheet metals",
        "Custom colour and finish review, subject to availability",
      ]}
      resources={[
        { type: "PDF • PROFILE GUIDE", title: "Standard Residential Steel Flashings", href: "/downloads/trims-flashings/standard-residential-steel-flashing-profile-guide.pdf", icon: "drawing" },
      ]}
      relatedProducts={[
        { type: "STEEL SIDING & SOFFIT", title: "Exposed Fastener", description: "Economical ribbed and corrugated panel systems completed with coordinated trims and closures.", href: "/exterior-systems/steel/exposed-fastener" },
        { type: "STEEL SIDING & SOFFIT", title: "Hidden Fastener", description: "Concealed-fastener architectural profiles requiring precise edge, opening and transition details.", href: "/exterior-systems/steel/hidden-fastener" },
        { type: "CLADCAN SERVICE", title: "Custom Fabrication", description: "Coordinate custom flashing, Z-bar, hat channel and specialty trim fabrication for the project.", href: "/services/custom-fabrication" },
      ]}
      ctaTitle="Need a standard profile or a custom flashing package?"
      ctaText="Send CladCan your elevations, details, profile sketches, dimensions, material and finish requirements. We can help coordinate standard profiles or review a custom fabrication scope before release."
    />
  );
}
