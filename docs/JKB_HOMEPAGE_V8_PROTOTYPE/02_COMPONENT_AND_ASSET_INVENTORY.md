# JKB 2026 — STAGE B: COMPONENT & ASSET INVENTORY
## CODE MODULES, MEDIA ASSETS & REPLACEMENT MANIFEST

**Document Version:** 1.0.0  
**Milestone:** Stage B — Homepage Prototype V8  
**Date:** 14 Oktober 2026  

---

### 1. Prototype Component Architecture

All prototype components are strictly isolated inside `src/components/prototype/` and `src/app/preview/homepage-v8/` to prevent interference with existing production code:

| Component | Path | Responsibility |
| :--- | :--- | :--- |
| **Prototype Page** | `src/app/preview/homepage-v8/page.tsx` | Main page coordinator, metadata configuration (`noindex, nofollow`), structural layout wrapper. |
| **Prototype Navbar** | `src/components/prototype/PrototypeNavbar.tsx` | Isolated responsive header, scroll detector, dropdown navigation, accessible mobile slide-down drawer. |
| **Prototype Hero** | `src/components/prototype/PrototypeHero.tsx` | Section 01: Dual combat-music duotone background, headline ("JOGJA PUNYA NYALI."), creative tagline, event dates, primary CTA. |
| **The Ring / The Stage** | `src/components/prototype/PrototypeRingStage.tsx` | Section 02: Asymmetrical editorial layout (7-col vs 5-col) balancing Redy Championship 2 and Panggung Musik Festival. |
| **Plan Your Visit** | `src/components/prototype/PrototypePlanVisit.tsx` | Section 03: Warm Ivory (`#F5F3EE`) transition block, 3 practical destinations, interactive 3-Day Agenda preview selector. |
| **Beyond The Festival** | `src/components/prototype/PrototypeBeyondFestival.tsx` | Section 04: Community and apparel highlights (City Pride, Creator Hub, Official Merch). |
| **Prototype Footer** | `src/components/prototype/PrototypeFooter.tsx` | Structured editorial sitemap, event facts, copyright, and prototype validation preview badge. |

---

### 2. Media Assets Inventory

The prototype utilizes verified local project assets already residing in `public/images/jkb/`:

| Asset File | Resolution | Format | Role in Prototype | Status |
| :--- | :---: | :---: | :--- | :---: |
| `public/images/jkb/hero-boxing.jpg` | 1920×2880 | JPG | Hero Section Left: Combat intensity backdrop (greyscale duotone) | Local Asset |
| `public/images/jkb/hero-concert.jpg` | 1920×1280 | JPG | Hero Section Right: Festival stage lighting backdrop (greyscale duotone) | Local Asset |
| `public/images/jkb/boxing-ring.jpg` | 1200×800 | JPG | Section 02: The Ring background texture | Local Asset |
| `public/images/jkb/concert-crowd.jpg` | 1200×800 | JPG | Section 02: The Stage crowd euphoria background texture | Local Asset |
| `public/images/jkb/merch-tee-black.jpg` | 800×1200 | JPG | Section 04: Official Heavyweight Tee product card preview | Local Asset |
| `public/images/jkb/merch-hoodie-charcoal.jpg`| 800×533 | JPG | Section 04: Official Pullover Hoodie Charcoal product card preview | Local Asset |
| `public/images/logo.svg` | Vector | SVG | Brand vector logotype | Local Asset |

---

### 3. Official Asset Replacement Manifest (Pre-Launch Requirements)

Before the approved prototype is promoted to replace the live production homepage at `/`, the Event Organizer (EO) and Media Team should supply the following final official assets:

| Asset Required | Target Placement | Specifications Needed | Priority |
| :--- | :--- | :--- | :---: |
| **Official Key Visual (KV) Hero Poster** | Hero Section Background | 3840×2160 or layered PSD/PNG with transparent fighter cutout & concert lights | High |
| **Official Championship Belt Photography** | Section 02 (The Ring) | High-res studio shot of the 4 Redy Championship 2 title belts | Medium |
| **Official Confirmed Artist Lineup Stills** | Section 02 (The Stage) | Press photos of confirmed headliners (with signed rider approvals) | High |
| **GOR UNY Gate & Parking Map** | Section 03 (Venue Card) | Schematic / illustrated spectator access map | Medium |
| **Final Merch Product Photography** | Section 04 (Apparel) | Flat-lay / model photography of finalized production apparel samples | Medium |
| **Sponsor & Partner Logo Lockup Strip** | Footer / Above Footer | Official vector EPS/SVG files of validated festival sponsors & media partners | High |
