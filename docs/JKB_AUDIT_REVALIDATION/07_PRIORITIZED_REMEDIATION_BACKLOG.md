# JKB 2026 — PRIORITIZED REMEDIATION BACKLOG
**Phase 1: Technical & UI Interaction Revalidation**  
**Action Plan for Phase 2 Implementation (Pending Project Owner Approval)**  
**Priority Tiers:** P0 (Must Fix Immediately) | P1 (High Priority / Launch Readiness) | P2 (Medium Priority / Polish)  

---

## 1. BACKLOG SUMMARY OVERVIEW

```
+---------------------------------------------------------------------------------------+
| TOTAL BACKLOG ITEMS: 10                                                               |
| P0 (Blockers):  3 items (Security Route Guard, Credential Removal, Weekday Date Fix)  |
| P1 (Critical):  4 items (Fight Card Component, Creator Benefits, Staging Badge, DB)   |
| P2 (Polish):    3 items (Image Avatars Blur, FAQ schema markup, RAWOOH CTA Redirect)  |
+---------------------------------------------------------------------------------------+
```

---

## 2. P0: IMMEDIATE BLOCKERS (MUST FIX FIRST)

### REM-01: Implement Centralized Admin Route Protection Middleware
- **Priority:** **P0**
- **User Impact:** Prevents anonymous public visitors from viewing and tampering with internal administrative dashboards and match controls.
- **Proposed Fix:**
  1. Create `src/middleware.ts` utilizing `next-auth/middleware`.
  2. Define matcher: `["/admin/:path*"]` with exception for `/admin/login`.
  3. In `src/app/admin/layout.tsx`, remove dummy fallbacks (`userRole = "ADMIN"`) and enforce server-side session validation.
- **Estimated Complexity:** Medium (1–2 hours).
- **Dependencies:** `next-auth` configuration in `src/lib/auth.ts`.
- **Acceptance Criteria:**
  - Unauthenticated GET requests to `/admin` immediately redirect to `/admin/login?callbackUrl=%2Fadmin`.
  - Only authenticated sessions with `role: "ADMIN"` or `"SUPER_ADMIN"` can access administrative subroutes.

---

### REM-02: Purge Plaintext Staging Credentials from Admin Login UI
- **Priority:** **P0**
- **User Impact:** Eliminates credential leakage in public client JavaScript bundles.
- **Proposed Fix:**
  1. In `src/app/admin/login/page.tsx`, completely remove lines 135–167 ("Quick-Fill Staging Accounts Box").
  2. Remove `fillCredentials` helper function from lines 42–46.
- **Estimated Complexity:** Low (15 minutes).
- **Dependencies:** None.
- **Acceptance Criteria:**
  - `AdminLoginPage` contains no hardcoded passwords or one-click staging login buttons.
  - Staging accounts remain documented only in private environment documentation.

---

### REM-03: Correct Hardcoded Weekdays on Public Schedule Page
- **Priority:** **P0**
- **User Impact:** Eliminates public misinformation regarding festival and championship match days.
- **Proposed Fix:**
  1. In `src/components/schedule/JadwalClient.tsx`, replace lines 22–26 hardcoded `DAY_TABS` array with mapped values from `EVENT_CONFIG.dates.days`:
     - Day 1: "Sabtu, 12 Desember 2026"
     - Day 2: "Minggu, 13 Desember 2026"
     - Day 3: "Senin, 14 Desember 2026"
- **Estimated Complexity:** Low (30 minutes).
- **Dependencies:** `src/lib/event-config.ts`.
- **Acceptance Criteria:**
  - Navigating to `/jadwal` displays "Sabtu, 12 Desember 2026", "Minggu, 13 Desember 2026", and "Senin, 14 Desember 2026".
  - Calendar weekdays match Gregorian calendar 2026 facts.

---

## 3. P1: CRITICAL LAUNCH READINESS ITEMS

### REM-04: Implement Fight Card Matchup Showcase on Championship Page
- **Priority:** **P1**
- **User Impact:** Enables visitors on `/championship` to see bout matchups and resolves dead database queries.
- **Proposed Fix:**
  1. In `src/app/(public)/championship/page.tsx`, utilize the existing query `publishedAthletes` or query active championship bouts from `prisma.match`.
  2. Render a 4-bout fight card preview grid with athlete photos, weight divisions, and bout status.
- **Estimated Complexity:** Medium (2–3 hours).
- **Dependencies:** Prisma schema `Match` and `Athlete` relations.
- **Acceptance Criteria:**
  - `/championship` displays actual fight matchups and athlete head-to-heads.
  - Zero unused database queries in the page component.

---

### REM-05: Reconcile Creator Hub Benefit Copy with Approved EO Scope
- **Priority:** **P1**
- **User Impact:** Protects festival organizers from unbudgeted prize expectations or false advertising claims.
- **Proposed Fix:**
  1. In `src/components/creator/CreatorClient.tsx`, replace *"rebut hadiah leaderboard jutaan rupiah"* with *"Akses ID Card Resmi & Fasilitas Media Lounge GOR UNY"*.
  2. Add terms note: *"Syarat & ketentuan berlaku sesuai alokasi kapasitas panitia"*.
- **Estimated Complexity:** Low (30 minutes).
- **Dependencies:** EO sign-off on creator perks.
- **Acceptance Criteria:**
  - No public claims of cash prizes unless authorized in writing by the EO committee.

---

### REM-06: Add Clear "Staging / Simulasi" Indicator to Roster and Bracket
- **Priority:** **P1**
- **User Impact:** Prevents attendees from mistaking test seed fighters for the final official athlete roster.
- **Proposed Fix:**
  1. Display a subtle banner on `/fighters` and `/bracket`: *"Data Petarung & Bagan Saat Ini Merupakan Simulasi Uji Coba. Roster Resmi Diumumkan Panitia Menjelang Event"*.
- **Estimated Complexity:** Low (30 minutes).
- **Dependencies:** None.
- **Acceptance Criteria:**
  - Roster and bracket clearly inform visitors of simulation status.

---

### REM-07: Provision Production Database Migration Strategy (PostgreSQL)
- **Priority:** **P1**
- **User Impact:** Ensures high concurrency stability during ticketing and voting spikes.
- **Proposed Fix:**
  1. Prepare migration path from SQLite to PostgreSQL (Prisma Postgres / Supabase).
  2. Add connection pooling variables in deployment environment.
- **Estimated Complexity:** Medium (2 hours).
- **Dependencies:** Cloud database provisioning.
- **Acceptance Criteria:**
  - Prisma schema supports PostgreSQL provider without relational errors.

---

## 4. P2: POLISH & PERFORMANCE ENHANCEMENTS

### REM-08: Add Image Priority and Placeholders to Tournament Bracket
- **Priority:** **P2**
- **User Impact:** Eliminates lazy-load avatar layout shifts in tournament tree nodes.
- **Proposed Fix:**
  1. In `src/components/bracket/BracketClient.tsx`, add fallback default SVG avatar for athletes without images.
  2. Apply `priority` to Final round match card images.
- **Estimated Complexity:** Low (45 minutes).
- **Dependencies:** None.
- **Acceptance Criteria:**
  - Zero broken image logs in browser audit on `/bracket`.

---

### REM-09: Add Structured JSON-LD Event Schema to Homepage and Venue
- **Priority:** **P2**
- **User Impact:** Improves Google Search rich snippets for event dates, venue location, and tickets.
- **Proposed Fix:**
  1. Inject `SportsEvent` JSON-LD schema into `src/app/(public)/page.tsx` and `src/app/(public)/venue/page.tsx`.
- **Estimated Complexity:** Low (45 minutes).
- **Dependencies:** Google Search Structured Data guidelines.
- **Acceptance Criteria:**
  - Google Rich Results Test validates `SportsEvent` schema with zero errors.

---

### REM-10: Finalize External RAWOOH Ticket Deep Links
- **Priority:** **P2**
- **User Impact:** Smooth redirection to official ticketing vendor when sales launch.
- **Proposed Fix:**
  1. Update ticket CTA buttons in `src/app/(public)/tiket/page.tsx` to read dynamic ticket URL from `EVENT_CONFIG.ticketing.officialUrl`.
- **Estimated Complexity:** Low (20 minutes).
- **Dependencies:** RAWOOH ticket event URL from EO.
- **Acceptance Criteria:**
  - Ticket purchase buttons direct users accurately to the official RAWOOH ticket portal.
