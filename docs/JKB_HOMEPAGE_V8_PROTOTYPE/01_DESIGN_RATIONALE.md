# JKB 2026 — STAGE B: DESIGN RATIONALE
## HIGH-FIDELITY HOMEPAGE PROTOTYPE V8 (RAW ENERGY × FESTIVAL CULTURE)

**Document Version:** 1.0.0  
**Milestone:** Stage B — Design Validation Prototype  
**Route Target:** `/preview/homepage-v8` (Isolated Preview)  
**Status:** PROTOTYPE READY FOR OWNER REVIEW  
**Author:** Creative Director, Senior UI/UX Architect & Frontend Lead  

---

### 1. Creative Concept & Philosophy

The JKB 2026 homepage was redesigned from the ground up to solve the core defect identified in previous versions: **it previously felt like a generic dark sports SaaS application or tournament dashboard rather than an exciting, culturally authentic sportainment festival.**

The new design concept embodies:
> **RAW ENERGY × FESTIVAL CULTURE**
> *"Di Balik Kalem, Jogja Punya Nyali."*

#### Core Creative Pillars:
1. **Combat Energy:** Raw, authentic athletic intensity, national championship pride (Redy Championship 2), discipline, and high-stakes ring competition.
2. **Festival Culture:** Expressive, youth-oriented, communal celebration of music, sunset sessions, and city identity in Yogyakarta.
3. **Editorial Art Direction:** Avoiding repetitive rectangular cards, neon glow clichés, and generic AI mockups in favor of asymmetrical magazine-style editorial layouts, purposeful typography, high-contrast imagery, and distinct visual rhythm.

---

### 2. Architecture of the 4 Major Homepage Sections

In strict compliance with Blueprint V8, the prototype structures the entire visitor journey into exactly **four purposeful sections**:

```
┌────────────────────────────────────────────────────────────────────────┐
│  PROTOTYPE HEADER: JKB 2026 Logo • Concise Nav • Primary CTA [INFO TIKET]
├────────────────────────────────────────────────────────────────────────┤
│  SECTION 01: IMMERSIVE HERO                                            │
│  - Asymmetrical dual background (Combat duotone left, Festival right)  │
│  - Headline: JOGJA PUNYA NYALI.                                       │
│  - Creative narrative: DI BALIK KALEM                                  │
│  - 12–14 Desember 2026 • GOR UNY, Yogyakarta                           │
│  - Action CTA pair: [INFO TIKET & AKSES] + [LIHAT JADWAL 3 HARI]       │
├────────────────────────────────────────────────────────────────────────┤
│  SECTION 02: THE RING / THE STAGE                                      │
│  - Editorial Asymmetry (7 columns vs 5 columns)                        │
│  - Pillar 1: Redy Championship 2 (80 atlet, 4 sabuk, 3 hari eliminasi) │
│  - Pillar 2: Panggung Musik (Sunset sessions, indie bands, afterparty) │
├────────────────────────────────────────────────────────────────────────┤
│  SECTION 03: PLAN YOUR VISIT (Visual Rhythm Shift to Warm Ivory)       │
│  - Warm Ivory (#F5F3EE) background for visual respite and clarity      │
│  - 3 Practical Destinations: 01 Jadwal • 02 GOR UNY • 03 Info Tiket    │
│  - Interactive 3-Day Agenda Selector (Sabtu 12, Minggu 13, Senin 14)   │
├────────────────────────────────────────────────────────────────────────┤
│  SECTION 04: BEYOND THE FESTIVAL (Return to Deep Dark (#09090B))       │
│  - 01 City Pride Voting (Dukungan wilayah Kota Jogja, Sleman, Bantul)  │
│  - 02 Creator Hub & Media (Akreditasi & pedoman konten resmi)          │
│  - 03 Official Apparel & Merch (Heavyweight Tee, Hoodie Charcoal)      │
├────────────────────────────────────────────────────────────────────────┤
│  PROTOTYPE FOOTER: Identity Mark • Sitemap • Legal • Top Anchor        │
└────────────────────────────────────────────────────────────────────────┘
```

---

### 3. Visual Rhythm & The Warm Ivory Section

A common flaw in modern dark websites is visual monotony: when an entire page is uniformly dark, elements blur together and visitor attention wanes.

To solve this, **Section 03 (Plan Your Visit)** intentionally transitions to **Warm Ivory (`#F5F3EE`)**:
- **Why?** It acts as an editorial palate cleanser between the high-octane dark imagery of Section 02 (The Ring / The Stage) and the community features of Section 04.
- **Tone:** Uses deep black typography (`#09090B`) with subtle paper-grain microtextures, evocative of a physical festival program brochure or print pass.
- **Contrast:** Provides pristine readability for schedules, venue directions, and ticketing notices without sacrificing festival grit.

---

### 4. Brand Palette & Strategic Color Usage

- **Deep Black (`#09090B`):** Dominant dark canvas providing theatrical focus and cinematic depth.
- **Surface Black (`#17171B`):** Elevation layer for editorial modules and secondary containers.
- **Brand Red (`#D91F2C` / `#EF3340`):** Used with strict discipline—only for primary conversion actions, active calendar selections, and essential championship accents. Never sprayed randomly as background gradients.
- **Warm Ivory (`#F5F3EE`):** Primary text color on dark surfaces and complete background for Section 03.
- **Muted Grey (`#A7A7AD`):** Informative secondary copy, timecodes, and metadata.

---

### 5. Typography Hierarchy

1. **Display Headings (Barlow Condensed ExtraBold / Black):**
   - Hero Title: `text-5xl sm:text-7xl md:text-8xl lg:text-[104px]` (Tight leading `0.88`, zero letter-spacing overflow, maximum impact).
   - Section Titles: `text-3xl sm:text-5xl md:text-6xl`.
   - Card Titles: `text-2xl sm:text-3xl md:text-4xl`.
2. **Body & Interface (Inter):**
   - High legibility, neutral tone, calibrated line height for reading comfort.
   - Monospaced utility accents (`font-mono`) for dates, kickers, and categorical tags.

---

### 6. Mobile-First Art Direction

Unlike standard responsive workflows where desktop cards are merely shrunken down, the mobile experience was art-directed specifically:
- Hero headline wraps cleanly at `clamp(2.5rem, 10vw, 4.5rem)` with zero clipping on 320px screens.
- Event date and venue anchor are directly visible in the first 844px mobile viewport.
- Mobile Navigation features an accessible full-screen slide-down drawer with clear grouping (Menu Utama vs Komunitas vs Akses Tiket).
- Primary CTAs span the full width of mobile screens for effortless thumb tapability (minimum 48px height).
