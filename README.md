# CladCan Website Final

## Run locally

```bash
npm install
npm run dev
```

Open: `http://localhost:3005`

## Current exterior-product architecture

- Exterior Systems landing with Grid/List switcher
- Aluminum category landing
- Longboard system landing
- Longboard application pages: Cladding, Siding, Soffit, Screens & Enclosures
- Longboard product pages: Board & Batten, Lap Siding, Tongue & Groove, Textured Tongue & Groove, Link & Lock, Panelboard, Privacy Beam
- FastPlank, Cedar Renditions and Architectural Aluminum Battens landing routes are present for continued development

Product imagery remains intentionally placeholder-based until approved CladCan/manufacturer assets are added.

## Aluminum hierarchy update
Aluminum is the master content architecture for Exterior Systems:
Exterior Systems -> Aluminum -> System/Brand -> optional Application/Subcategory -> Product.
Some systems intentionally skip the subcategory level and link directly to their system page.
Longboard product pages include an application switcher when the same product belongs to more than one application.
