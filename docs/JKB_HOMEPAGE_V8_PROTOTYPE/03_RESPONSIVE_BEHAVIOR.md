# JKB 2026 — STAGE B: RESPONSIVE BEHAVIOR
## ADAPTIVE EDITORIAL ARCHITECTURE ACROSS 5 VIEWPORTS

**Document Version:** 1.0.0  
**Milestone:** Stage B — Homepage Prototype V8  
**Date:** 14 Oktober 2026  

---

### 1. Multi-Viewport Strategy

In accordance with Blueprint V8, the prototype does not merely shrink desktop elements. It applies **intentional editorial reflows** tailored for five benchmark device categories:

```
┌───────────┬───────────────┬─────────────────┬────────────────────────────────────────┐
│ Viewport  │ Classification│ Layout Model    │ Key Adaptive Behaviors                 │
├───────────┼───────────────┼─────────────────┼────────────────────────────────────────┤
│ 320px     │ Small Mobile  │ 1-Col Fluid     │ Headline clamped at 44px; zero scrollX │
│ 390px     │ Std Mobile    │ 1-Col Stacked   │ Full-width thumb-friendly CTAs         │
│ 768px     │ Tablet        │ 2-Col Reflow    │ Side-by-side metrics & compact headers │
│ 1024px    │ Small Desktop │ 12-Col Dynamic  │ Full navigation links revealed         │
│ 1440px    │ Large Desktop │ 12-Col Editorial│ Asymmetric 7-to-5 pillar layout        │
└───────────┴───────────────┴─────────────────┴────────────────────────────────────────┘
```

---

### 2. Viewport-by-Viewport Breakdown

#### A. 320px — Small Mobile (iPhone SE / Older Android Devices)
- **Problem Avoided:** In earlier iterations, giant headlines like "JOGJA PUNYA NYALI." frequently suffered from horizontal overflow, causing unintentional rightward page drift.
- **Implementation:**
  - Font size clamped: `text-[44px] xs:text-5xl font-black`.
  - Leading tightened to `0.88` with break opportunity `<br />` ensuring balanced two-line impact without hyphenation.
  - Navbar: Brand logo is streamlined, quick "INFO TIKET" badge stays compact, and the hamburger button retains a standard 44×44px touch target.
  - Verification Evidence: [05_small_mobile_320px.png](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/docs/JKB_HOMEPAGE_V8_PROTOTYPE/screenshots/05_small_mobile_320px.png) demonstrates zero horizontal overflow.

#### B. 390px — Standard Mobile (iPhone 13/14/15/16, Modern Flagships)
- **First Viewport Target:** The entire primary value proposition (Event Kicker, Headline, Tagline, Dates, Venue, and both Action CTAs) is fully contained within the initial 844px height.
- **Interactions:**
  - Mobile Drawer: Opens via accessible hamburger toggle. Displays high-contrast oversized section links (`text-2xl`) and 2-column secondary community blocks.
  - Bottom padding in the drawer (`pb-20`) ensures the event date banner is completely clear of browser navigation bars or home indicators.
  - Verification Evidence: [03_homepage_mobile_first_viewport_390px.png](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/docs/JKB_HOMEPAGE_V8_PROTOTYPE/screenshots/03_homepage_mobile_first_viewport_390px.png) and [07_mobile_navigation_open_390px.png](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/docs/JKB_HOMEPAGE_V8_PROTOTYPE/screenshots/07_mobile_navigation_open_390px.png).

#### C. 768px — Tablet (iPad Portrait & Large Foldables)
- **Section 01 (Hero):** Subtext and date anchors expand horizontally.
- **Section 02 (The Ring / The Stage):** Switches to comfortable vertical blocks with side-by-side metric badges.
- **Section 03 (Plan Your Visit):** Practical destination cards reflow into a clean responsive layout; Day Selector buttons sit horizontally above the selected schedule highlights.
- **Verification Evidence:** [06_tablet_768px.png](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/docs/JKB_HOMEPAGE_V8_PROTOTYPE/screenshots/06_tablet_768px.png).

#### D. 1024px & 1440px — Desktop (Laptops & Wide Monitors)
- **Desktop Navigation:** Revealing full horizontal links: `JADWAL`, `PERTANDINGAN`, `MUSIK`, `MERCH`, and accessible `Lainnya` dropdown.
- **Section 01 (Hero):** Asymmetric split background activates, showing the greyscale combat intensity on the left and festival concert atmosphere on the right.
- **Section 02 (The Ring / The Stage):** Asymmetrical 7-to-5 column balance gives prime prominence to the championship while celebrating the live music stage.
- **Section 03 (Plan Your Visit):** Three prominent cards (Jadwal, GOR UNY, Info Tiket) span 3 horizontal columns with Warm Ivory (`#F5F3EE`) background.
- **Section 04 (Beyond The Festival):** 3-column community grid featuring City Pride, Creator Hub, and Official Merch with live product imagery.
- **Verification Evidence:** [01_homepage_desktop_first_viewport_1440px.png](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/docs/JKB_HOMEPAGE_V8_PROTOTYPE/screenshots/01_homepage_desktop_first_viewport_1440px.png) and [02_homepage_desktop_fullpage_1440px.png](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/docs/JKB_HOMEPAGE_V8_PROTOTYPE/screenshots/02_homepage_desktop_fullpage_1440px.png).
