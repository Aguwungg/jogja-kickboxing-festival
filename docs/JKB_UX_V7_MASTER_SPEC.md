# JKB 2026 — MASTER IMPLEMENTATION SPECIFICATION V7
## COMPLETE UX SIMPLIFICATION & PREMIUM WEBSITE TRANSFORMATION
### USER-FIRST EXPERIENCE × FUNCTIONAL PRESERVATION × REAL DESIGN QUALITY

> **Document Type:** Canonical Master Specification V7  
> **Target Project:** Jogja Kickboxing Festival & Redy Championship 2 (JKB 2026)  
> **Preserved Event Identity:** 12–14 Desember 2026 • GOR UNY, Yogyakarta • #JOGJAPUNYANYALI • DI BALIK KALEM  
> **Core Principle:** **THE EVENT FIRST. EVERYTHING ELSE, WHEN NEEDED.**  
> **Last Updated:** 2026-10-12  

---

## 0. MANDATORY PROJECT CONTEXT

### 0.1 Official Event Identity
- **Event Name:** JOGJA KICKBOXING FESTIVAL & REDY CHAMPIONSHIP 2
- **Brand:** JKB 2026
- **Approved Dates:** 12–14 Desember 2026 (No invented August dates)
- **Approved Venue:** GOR UNY, Yogyakarta, Indonesia (No GOR Among Rogo)
- **Timezone:** Asia/Jakarta (WIB, UTC+7)
- **Campaign:** #JOGJAPUNYANYALI
- **Creative Narrative:** DI BALIK KALEM
- **Creative Direction:** THE RING MEETS THE STAGE (Professional kickboxing × contemporary music festival × Yogyakarta youth culture)
- **Opening Time:** Not yet officially confirmed; never hardcode an invented opening time.
- **SSOT File:** `src/lib/event-config.ts`

### 0.2 Target Audiences
1. **First-time general visitors & prospective ticket buyers** (Require the simplest, most intuitive experience).
2. **Kickboxing fans & fighter followers** (Need fast access to athlete profiles and brackets).
3. **Music festival visitors** (Seek performer schedules and lineup).
4. **Community voting participants** (City Pride 1-account-1-vote).
5. **Content creators & accredited media** (Program guidelines and application).
6. **Merchandise buyers** (Product catalog and venue pickup details).
7. **Event administrators** (Command Center dashboard and management tools).

### 0.3 Commercial Model & Safety Rules
- **Ticketing & Merchandise Provider:** RAWOOH (Official embed/integration details pending).
- **Frontend Stance:** Prepare clean architectural boundaries; do NOT invent fake APIs, SDKs, iframe widgets, or fake checkouts.
- **Milestone 9A Gates:** Orders strictly default to `PENDING` & `UNPAID`. Payment simulator strictly blocked in production. Client status injection strictly rejected.
- **PPV Status:** Undecided. Existing code and models preserved, but excluded from primary public navigation and commercial promotion.
- **Local Environment:** Staging/local development only; no production deployment or external expenses authorized.

---

## 1. THE PROBLEM TO SOLVE IN V7
The V6 redesign attempted visual refinement, but resulted in repetitive, AI-looking template structures:
`Large heading → paragraph → badges → dark cards → multiple buttons → more cards → another oversized section`.

This caused:
1. High cognitive load for first-time visitors.
2. Too many competing calls to action on every screen.
3. Repetitive layout fatigue across different pages.
4. Internal technical jargon exposed to the public (e.g. "Wadah Integrasi Rawooh", "Sandbox Mode").
5. Mobile menus and tables with horizontal crowding.

**V7 Solution: Progressive Disclosure.**
- Show essential event information first.
- Provide details on demand.
- One primary user task per page.
- Less clutter, stronger visuals, simpler journeys.

---

## 2. INFORMATION ARCHITECTURE & NAVIGATION

### 2.1 Desktop Navigation
- **Logo:** `JKB 2026` → Homepage (`/`)
- **Primary Links:**
  - `Jadwal` (`/jadwal`)
  - `Pertandingan` (`/championship`)
  - `Musik` (`/lineup`)
  - `Merchandise` (`/merch`)
  - `Lainnya` (Dropdown containing: City Pride, Program Kreator, Lokasi GOR UNY, Tentang JKB, FAQ, Kontak)
- **Primary CTA:** `INFO TIKET` (`/tiket`)
- No cart icon in public navbar. No admin links in public navbar. No PPV link in public navbar.

### 2.2 Mobile Navigation
- **Header:** JKB Logo, compact `INFO TIKET` button, Hamburger Menu toggle.
- **Menu Drawer:** Clean list prioritizing high-value visitor destinations (`Jadwal`, `Pertandingan`, `Musik`, `Merchandise`, `Lokasi & Venue`, `Info Tiket`, `City Pride`, `Kreator`, `Tentang`, `FAQ`, `Kontak`).
- No massive animated card overload. No 30+ routes exposed.

---

## 3. GLOBAL DESIGN SYSTEM — JKB ARENA × STAGE

### 3.1 Color Palette
- **Deep Black:** `#101114` (Base backdrop)
- **Charcoal:** `#171719` (Elevated cards & navigation)
- **Combat Red:** `#D12634` (Primary brand accent & action color)
- **Warm White:** `#F5F3EE` (High-contrast editorial sections & text)
- **Neutral Gray:** `#77747A` (Muted labels & secondary text)
- **Accent Gold:** `#E2BA75` (Music stage accent used sparingly)

### 3.2 Typography
- **Display:** Barlow Condensed (Uppercase, bold, used selectively for heroic headlines and titles).
- **Body & Controls:** Inter (Clean, relaxed line height, high readability).
- Restrained visual heading levels to avoid mobile overflow.

### 3.3 Motion
- Subtle, purposeful micro-transitions only.
- No scroll hijacking, no excessive parallax, no hidden content behind slow reveal triggers.
- Strictly respect `prefers-reduced-motion`.

---

## 4. PAGE-BY-PAGE V7 SPECIFICATIONS

### 4.1 Homepage (4 Content Blocks + Compact Footer)
- **Block 1 — Hero:**
  - Headline: `JOGJA PUNYA NYALI.`
  - Facts: `12–14 DESEMBER 2026` • `GOR UNY, YOGYAKARTA`
  - Concise description: Professional kickboxing championship meets contemporary music festival.
  - Primary CTA: `INFO TIKET` (`/tiket`)
  - Secondary CTA: `LIHAT JADWAL` (`/jadwal`)
  - Authentic dual photography composition. No unconfirmed countdown.
- **Block 2 — Two Discovery Paths (`PILIH PENGALAMANMU`):**
  - Card 1: `PERTANDINGAN` (Redy Championship 2) → links to `/championship`.
  - Card 2: `MUSIK & FESTIVAL` (Live Music Stage) → links to `/lineup`.
- **Block 3 — Plan Your Visit:**
  - 3 clean, practical destinations: `Jadwal Acara` (`/jadwal`), `Lokasi GOR UNY` (`/venue`), `Informasi Tiket` (`/tiket`).
- **Block 4 — Explore More:**
  - Discreet links for `City Pride Voting` (`/city-pride`), `Program Kreator` (`/creator`), and `Official Merchandise` (`/merch`).
- **Compact Footer:**
  - Brand identity, essential links, contact info, social links, and legal links. No bloated sitemap.

### 4.2 Ticket Experience (`/tiket`)
- Natural visitor language: `TIKET JKB 2026` • `12–14 DESEMBER 2026` • `GOR UNY, YOGYAKARTA`.
- Notice: *"Informasi pembelian tiket resmi akan segera diumumkan."*
- Zero developer/vendor technical jargon (remove all mentions of "vendor API", "integration container", "sandbox mode", "internal simulator").
- Prepare clean architectural component boundary for future Rawooh integration.

### 4.3 Schedule (`/jadwal`)
- Single date selector: `12 DES`, `13 DES`, `14 DES`.
- Single chronological timeline without overwhelming filter chips on mobile.
- Expandable details for session descriptions.

### 4.4 Music Lineup (`/lineup`)
- Performer-first visual presentation.
- Confirmed artists, stages, and dates only. Tasteful publication state if announcements pending.

### 4.5 Fighter Center (`/fighters` & `/fighters/[slug]`)
- Headline: `KENALI PARA PETARUNG`.
- Prominent search input as primary action; advanced filters collapsed.
- Cards show real portrait, name, club, weight class, profile link.
- Advanced statistics moved into `/fighters/[slug]`.

### 4.6 Championship & Bracket (`/championship` & `/bracket`)
- Championship: Clear explanation of Redy Championship 2 divisions and K-1 rules.
- Desktop Bracket: Visual tournament tree.
- Mobile Bracket: Responsive step navigation (`Division selector → Round selector → Match list`) instead of forcing an unreadable wide tree.

### 4.7 Community & Merchandise
- **City Pride (`/city-pride`):** 5-step intuitive flow: Explanation → Region selection (Bantul, Sleman, Kota Jogja) → Required verification → Confirm vote → Live standings.
- **Creator Hub (`/creator` & `/creator/dashboard`):** Public page explains the program in 3 steps with 1 CTA. Authenticated user tools isolated to `/creator/dashboard`.
- **Merchandise (`/merch` & `/merch/[slug]`):** Clean product-first catalog. Official photo, name, verified price, availability. No spam tags.

### 4.8 Admin UX
- Mobile drawer sidebar with hamburger toggle.
- Responsive table containers (`overflow-x-auto`) preventing horizontal page blowout.
- RBAC, database CRUD operations, and session management preserved.

---

## 5. SEVEN-PHASE WORKFLOW ROADMAP
- **Phase 1:** Baseline Audit, Content Architecture & V7 Documentation Checkpoint.
- **Phase 2:** Global Visual System & Streamlined Navigation (Desktop + Mobile + Footer).
- **Phase 3:** Homepage Restructuring (4 Blocks) & Ticket Page Simplification.
- **Phase 4:** Schedule (Day-first), Music Lineup (Performer-first), and Information Pages.
- **Phase 5:** Fighter Center (Search-first), Championship & Mobile-Friendly Bracket.
- **Phase 6:** Community (City Pride), Creator Hub Separation, Merch & Admin Usability.
- **Phase 7:** Functional QA, Cross-Viewport Testing (320px–1440px), and Final Evidence Report.
