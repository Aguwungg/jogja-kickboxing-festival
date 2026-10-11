# JKB 2026 — MILESTONE 2.1 RECOVERY REPORT
**Visual Recovery, Functional QA & Data Safety Audit**
*Date: 2026-10-11 | Project: JOGJA KICKBOXING FESTIVAL & REDY CHAMPIONSHIP 2 (JKB 2026)*

---

## 1. ROOT CAUSE OF BLANK SECTIONS

During Milestone 2 review, full-page screenshots and initial mobile page views exhibited massive dark/blank regions where content sections failed to appear.

### Root Causes Identified:
1. **Aggressive Framer Motion `initial="hidden"` with Strict IntersectionObserver:**
   - In `HomeClient.tsx` and `FighterCenterClient.tsx`, components were configured with `initial={{ opacity: 0, y: 30 }}` combined with `whileInView="visible"` and `viewport={{ once: true }}` without positive scroll margins.
   - When a browser or screenshot automation tool loaded or scrolled the page, elements outside the immediate viewport remained stuck at computed `opacity: 0`.
   - In full-page captures, any element whose IntersectionObserver had not yet fired was rendered as pure black empty space.

2. **Fighter Center Single-Card Anomaly:**
   - In staging tests, a screenshot captured only 1 fighter card because an active search filter state (`?q=Agung`) was persisting or prefilled.
   - Without active search filters, all 8 fighters seeded in the database are returned. However, the card grid container also suffered from the motion viewport clipping, which caused lower cards to stay unmounted or at `opacity: 0`.

3. **Missing Reduced-Motion and SSR Fallback:**
   - There was no CSS fallback in `globals.css` ensuring that if client-side animations were delayed, disabled, or if the user enabled `prefers-reduced-motion`, elements would default to full visibility (`opacity: 1 !important; transform: none !important;`).

---

## 2. CODE CHANGES MADE

### A. Framer Motion Viewport & Visibility Fixes
- **`src/app/globals.css`**:
  - Added accessibility and performance fallback rules for `@media (prefers-reduced-motion: reduce)` guaranteeing `opacity: 1 !important` and `transform: none !important` across all animated wrappers.
- **`src/components/home/HomeClient.tsx`**:
  - Relaxed base initial opacity from `0` to `0.2` on container elements so content is never completely blacked out before hydration.
  - Added positive viewport trigger margins (`viewport={{ once: true, margin: "250px 0px" }}`) so sections trigger rendering ahead of scrolling.
- **`src/components/fighters/FighterCenterClient.tsx`**:
  - Configured fighter card grid with `margin: "300px"` pre-trigger so all 8 cards render smoothly without blank voids.

### B. Creative Direction & Split Hero Updates
- **`src/components/home/HomeClient.tsx`**:
  - Re-architected Hero section to authentically express **"THE RING MEETS THE STAGE"**:
    - Left flank: **THE RING** (Championship Combat, Redy Championship 2, Kickboxing action imagery).
    - Right flank: **THE STAGE** (Live Music Festival, We The Fest energy, festival stage lights).
    - Added editorial category tags: `"THE RING • REGIONAL CHAMPIONSHIP"` and `"THE STAGE • LIVE MUSIC FESTIVAL"`.
    - Harmonized CTAs: `"AMBIL TIKET FESTIVAL"` and `"LIHAT FIGHT CARD"`.

### C. Fighter Profile (`/fighters/[slug]`)
- **`src/app/(public)/fighters/[slug]/page.tsx`**:
  - Built comprehensive Tale of the Tape page displaying fighter statistics (Win/Loss/KO, Reach, Stance, Team/Camp, Weight Class).
  - Added clear staging demo disclaimer banner: *"DATA PROFIL SIMULASI / TEST FIXTURE STAGING"*.
  - Handled 404 cleanly when a fighter slug does not exist or is not published.

### D. City Pride Voting Security Hardening
- **`src/lib/rateLimit.ts`**:
  - Created modular `RateLimiterStore` interface (`MemoryRateLimiterStore` for local development, with explicit contract for distributed Redis/Upstash adapter).
  - Sanitized IP resolution (`getSanitizedClientIp`) to prevent untrusted proxy spoofing.
- **`src/app/api/vote/route.ts`**:
  - Disabled guest IP-hash voting.
  - Enforced strict NextAuth session requirement (`session.user.id`).
  - Implemented atomic `prisma.$transaction` ensuring race-safe duplicate vote checks and vote record creation.
- **`src/app/(public)/city-pride/page.tsx` & `src/components/city-pride/CityPrideClient.tsx`**:
  - Added clear unauthenticated notice: *"Akun Terdaftar Diperlukan untuk Memberikan Suara"* with direct login CTA.

### E. Demo Data Isolation & Seeding Safety
- **`prisma/seed.ts`**:
  - Added explicit environment safety check refusing to execute if `DATABASE_URL` points to production hosts or contains `prod`/`production` strings.
  - Tagged staging records explicitly as `[SIMULASI/STAGING]` in notes and bios.

---

## 3. ACTUAL HOMEPAGE VISUAL IMPROVEMENTS

- **Visual Theme:** GLORY Kickboxing combat intensity blended with We The Fest contemporary Indonesian youth festival vibrancy.
- **Typography & Atmosphere:** Dark metallic zinc backgrounds (`#09090b`), championship crimson accents (`#ef4444`), warm festival amber/gold lighting, and high-contrast typography.
- **Editorial Composition:**
  - Hero split highlights both the kickboxing tournament and live music performances side-by-side on desktop, stacking seamlessly on mobile (390px).
  - Clear marquee ticker featuring confirmed dates (14-16 Agustus 2026, GOR Among Rogo Yogyakarta).
  - Zero layout shift, no blank sections upon progressive scroll down to footer.

---

## 4. FIGHTER CENTER RENDERING VERIFICATION

- **Database Roster:** 8 seeded staging fighters (`fighter-demo-01` through `fighter-demo-08`) plus demonstration profile (`agung`).
- **Rendering Results:**
  - Desktop 1440px: All cards render in a balanced responsive 4-column grid.
  - Mobile 390px: Cards stack in a clean single-column feed without overflow or clipped cards.
  - Filter testing: Category filters (Bantamweight, Featherweight, Lightweight, Welterweight) correctly update the visible list.
  - Empty state: Handled gracefully when search terms yield 0 results.

---

## 5. FIGHTER DATA AUTHENTICITY CORRECTIONS

- **Status Badge Rectification:**
  - Removed misleading `"TERVERIFIKASI JKB 2026"` badge from simulated/seed fighter records.
  - In staging, athlete cards and profile detail pages now explicitly display:
    `[SIMULASI STAGING] PROFIL UJI COBA`
  - Added disclaimer note on fighter detail page:
    *"Profil dan rekor tanding ini merupakan data dummy/simulasi untuk keperluan verifikasi teknis staging JKB 2026. Data atlet resmi akan diterbitkan setelah proses verifikasi berkas dan timbang badan resmi panitia penyelenggara."*
- **Asset Authenticity:**
  - Removed irrelevant non-combat assets (e.g. `merch-sneaker.jpg`).
  - Configured licensed combat portraits (`fighter-agung.jpg`, `fighter-1.jpg`..`8.jpg`) strictly as placeholder exhibition portraits for UI demonstration.

---

## 6. CITY PRIDE SECURITY FINDINGS & IMPLEMENTATION

| Security Aspect | Previous State | Milestone 2.1 State | Status |
|---|---|---|---|
| Voter Identity | Allowed guest voting via client IP hash | Strictly requires authenticated session (`session.user.id`). Guest voting disabled. | RESOLVED |
| Duplicate Vote Prevention | In-memory Set / non-transactional check | Atomic `prisma.$transaction` checking existing `Vote` by `(campaignId, voterId)` | RESOLVED |
| Rate Limiting | Basic in-memory map | Interface-backed `RateLimiterStore` ready for Redis cluster deployment | HARDENED |
| Spoofed Headers | Read raw `x-forwarded-for` directly | Sanitized single IP extraction using trusted hop indexing | RESOLVED |
| UI Feedback | Ambiguous button state | Explicit authenticated status, disable button for guests with login CTA | RESOLVED |

---

## 7. DATA-ISOLATION FINDINGS & CONTROLS

1. **Seed Script Guard:**
   - `prisma/seed.ts` verifies `process.env.DATABASE_URL` before any table truncation or seeding. If the connection string points to remote RDS/PostgreSQL instances without staging flags, execution is halted immediately with exit code 1.
2. **Public Query Scoping:**
   - Public queries in `src/app/(public)/fighters/page.tsx` and `src/app/(public)/fighters/[slug]/page.tsx` filter by `status: "APPROVED"` and `isPublished: true`.
3. **Database Architecture:**
   - Current local database is SQLite (`prisma/dev.db`). Production migrations will target PostgreSQL via Prisma migrate without running development seed scripts.

---

## 8. TESTS EXECUTED AND ACTUAL OUTCOMES

| Test Item | Command / Method | Expected Result | Actual Outcome | Status |
|---|---|---|---|---|
| TypeScript Typecheck | `npm run build` | Zero TS compiler errors | Success (Turbopack, Next.js 16.4.0) | PASS |
| Static Route Generation | `next build` | 23/23 routes generated | 23 routes prerendered / dynamic | PASS |
| Homepage Scroll (1440px) | Browser Subagent | All sections visible, zero blank areas | Verified completely rendered | PASS |
| Homepage Scroll (390px) | Browser Subagent | Mobile responsive stack, no clipping | Verified clean vertical flow | PASS |
| Fighter Center (1440px) | Browser Subagent | 8 cards rendered with photos | All cards visible and interactive | PASS |
| Fighter Center (390px) | Browser Subagent | Single-column clean scroll | All cards visible | PASS |
| Fighter Detail (`/fighters/agung`) | Browser Subagent | Tale of the Tape + Staging disclaimer | Rendered with 0 errors | PASS |
| City Pride Auth Check | Browser Subagent | Displays "Akun Terdaftar Diperlukan" | Login prompt shown for guests | PASS |
| Vote API Auth Rejection | `POST /api/vote` (no session) | HTTP 401 Unauthorized | Returns `{"error": "Anda harus login..."}` | PASS |

---

## 9. SCREENSHOT EVIDENCE PATHS

The following required screenshots have been captured, verified, and saved in `docs/screenshots/`:

1. **Homepage Desktop (1440px):**
   - Path: `docs/screenshots/homepage_desktop_1440.png`
   - Description: Full-page view showing Split Hero ("The Ring Meets The Stage"), fight card teasers, lineup, and festival passes without blank regions.

2. **Homepage Mobile (390px):**
   - Path: `docs/screenshots/homepage_mobile_390.png`
   - Description: Mobile view verifying typography hierarchy, responsive split hero stacking, and clean scroll continuity.

3. **Fighter Center Desktop (1440px):**
   - Path: `docs/screenshots/fighter_center_desktop_1440.png`
   - Description: Roster grid displaying all 8 test fighters with photos, weight classes, and staging disclaimer banner.

4. **Fighter Center Mobile (390px):**
   - Path: `docs/screenshots/fighter_center_mobile_390.png`
   - Description: Mobile roster showing responsive card layout with no unintended blank gaps.

5. **Fighter Detail Mobile (390px):**
   - Path: `docs/screenshots/fighter_detail_mobile_390.png`
   - Description: `/fighters/agung` profile showing Tale of the Tape stats and staging demo disclaimer.

6. **City Pride Desktop (1440px):**
   - Path: `docs/screenshots/city_pride_desktop_1440.png`
   - Description: Voting campaign interface with city meters, unauthenticated account required CTA, and live standings.

7. **City Pride Mobile (390px):**
   - Path: `docs/screenshots/city_pride_mobile_390.png`
   - Description: Compact mobile voting layout and feedback state.

---

## 10. UNRESOLVED BLOCKERS & RECOMMENDATIONS

- **Zero Critical Blockers for Milestone 2.1:** All 8 tasks defined in Milestone 2.1 have been resolved and functionally verified.
- **Architectural Recommendations for Milestone 3 (When Authorized):**
  1. *Distributed Redis Store:* Replace the memory-backed `RateLimiterStore` with an Upstash or Redis client once cloud hosting infrastructure is provisioned.
  2. *Production Authentication:* Integrate OAuth providers (Google / WhatsApp OTP) in NextAuth for Indonesian mobile users prior to public campaign launch.
  3. *Official Athlete Onboarding:* Admin portal verification flow should be tested with official committee roster data before replacing staging test fixtures.
