# Design References: Cinematic Combat Editorial × Urban Jogja Culture

## 1. GLORY Kickboxing (glorykickboxing.com)
**Observed Elements:**
- Massive, full-bleed hero images featuring high-contrast athlete photography.
- Aggressive, uppercase condensed typography for fighter names and event titles.
- Strict monochromatic palettes (Black, White) cut with aggressive brand red.
- Strong visual hierarchy for "Next Event" countdowns and ticketing.

**Influence on JKB 2026:**
- We will adopt the bold, condensed typography (Barlow Condensed) and the strict Black/Red/White hierarchy to establish professional combat sports credibility.

## 2. ONE Championship (onefc.com)
**Observed Elements:**
- Extremely structured database of athletes with "Tale of the Tape" style statistics.
- Dynamic event schedules separating upcoming and past events.
- Fluid mobile navigation for complex hierarchies (Events, Athletes, Rankings, Shop).

**Influence on JKB 2026:**
- Our `/fighters` directory and `/fighters/[slug]` profiles will mirror ONE's structured approach to give local athletes premium, world-class presentation.

## 3. UFC (ufc.com)
**Observed Elements:**
- High-density information architecture.
- Diagonal graphical slashes and sharp edges in UI components.
- Persistent utility nav (Watch, Tickets, Shop).

**Influence on JKB 2026:**
- We will use subtle sharp-edged or asymmetric geometry in our UI components (e.g., button hover states, card borders) to echo the octagon/ring aesthetic without being overly literal.

## 4. We The Fest (wethefest.com)
**Observed Elements:**
- Youth-oriented, editorial layout emphasizing community and lifestyle.
- Dynamic marquee scrolling text.
- Heavy use of atmospheric crowd and stage lighting photography.

**Influence on JKB 2026:**
- JKB is "Sportainment". The `/lineup`, `/city-pride`, and `/creator` pages will lean slightly more towards this festival energy—using atmospheric lighting, marquees, and community-focused copy to balance the aggression of the kickboxing elements.

## 5. Synthesis: JKB 2026 Original Aesthetic
- **Colors:** Deep Charcoal/Black backgrounds. Accents of "Combat Red" (#D21F2B). Text in Warm White (#F6F3EC) for readability over pure white.
- **Typography:** Barlow Condensed (Headings) + Inter (Body).
- **Layout:** Editorial grids. No floating generic SaaS cards. Glassmorphism used sparingly for overlays.
- **Motion:** Framer Motion for smooth, deliberate route transitions and fade-ups. No bouncy or distracting effects.
