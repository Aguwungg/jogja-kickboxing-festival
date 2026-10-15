# JKB 2026 — CONTENT APPROVAL & COMMERCIAL SAFETY AUDIT
**Phase 1: Technical & UI Interaction Revalidation**  
**Classification Standard:** APPROVED | PENDING APPROVAL | DEMO / STAGING | INCORRECT | NEEDS VERIFICATION  
**Scope:** Public-Facing Event Facts, Commercial Gates, Staging Artifacts  

---

## 1. OFFICIAL DATA CLASSIFICATION MATRIX

| Item Category | Public Representation | Status Classification | Verified Source of Truth | Risk / Action Required |
|:---|:---|:---:|:---|:---|
| **Event Name** | JOGJA KICKBOXING FESTIVAL & REDY CHAMPIONSHIP 2 | **APPROVED** | `src/lib/event-config.ts` | Aligned with approved creative brief. |
| **Campaign Tagline** | #JOGJAPUNYANYALI / DI BALIK KALEM | **APPROVED** | `src/lib/event-config.ts` | Aligned with approved creative narrative. |
| **Event Dates** | 12–14 Desember 2026 | **APPROVED** | `src/lib/event-config.ts` | Master date range is officially locked. |
| **Schedule Weekdays** | Day 1 (Sabtu), Day 2 (Minggu), Day 3 (Senin) | **APPROVED** (in config)<br>**INCORRECT** (in UI) | `event-config.ts` vs `JadwalClient.tsx:22` | UI displays Jumat, Sabtu, Minggu. **Must be corrected to Sabtu, Minggu, Senin**. |
| **Venue Details** | GOR UNY, Karang Malang, Caturtunggal, Depok, Sleman, D.I. Yogyakarta | **APPROVED** | `src/lib/event-config.ts` | Confirmed official venue location. |
| **Weight Divisions** | Bantamweight (57kg), Featherweight (60kg), Lightweight (63.5kg), Welterweight (70kg) | **APPROVED** | `src/lib/event-config.ts` | Standard K-1 kickboxing rules & belts. |
| **Fighter Roster** | Fighter Demo 01 s/d Fighter Demo 08 | **DEMO / STAGING** | `prisma/seed.ts` | Staging placeholder records. Not official athlete registry. |
| **Bout Outcomes & Records** | Semifinal wins, KO/TKO results in bracket | **DEMO / STAGING** | `prisma/seed.ts` | Test simulation. Real bouts occur Dec 2026. |
| **Artist Lineup** | Guyon Waton, Morfem, Bravesboy, Rebellion Rose | **PENDING APPROVAL** | `prisma/seed.ts` & `src/app/(public)/lineup` | Artist names are prospective curation; pending signed rider contracts. |
| **Ticket Categories** | VIP Ringside (Rp 250k), Festival Day 1/2/3 (Rp 75k), 3-Day Pass (Rp 180k) | **PENDING APPROVAL** | `src/app/(public)/tiket/page.tsx` | Pricing structure awaiting RAWOOH ticketing platform confirmation. |
| **Merchandise Items** | Fighter Tee Black (Rp 185k), Hoodie (Rp 320k), Handwraps (Rp 65k) | **DEMO / STAGING** | `src/app/(public)/merch` | Staging inventory. Production pricing & size runs subject to vendor quotes. |
| **Creator Benefits** | "Hadiah leaderboard jutaan rupiah", "Akses ringside eksklusif GOR UNY" | **NEEDS VERIFICATION** | `CreatorClient.tsx:182` | Unverified marketing copy; not approved in EO budget. |
| **PPV Packages** | Early Bird Pass (Rp 29k), Full Weekend Pass (Rp 79k) | **DEMO / STAGING** | `src/lib/event-config.ts:86` | Disabled in staging (`isActive: false`). No live sales. |

---

## 2. DETAIL AUDIT: THE 14 DECEMBER 2026 CALENDAR MISMATCH

### The Astronomical & Calendar Truth
- **2026 Calendar:**
  - December 12, 2026 = **Sabtu (Saturday)**
  - December 13, 2026 = **Minggu (Sunday)**
  - December 14, 2026 = **Senin (Monday)**

### Source of Confusion
1. `src/lib/event-config.ts` correctly registers:
   ```ts
   { day: 1, label: "HARI 1", date: "Sabtu, 12 Desember 2026" },
   { day: 2, label: "HARI 2", date: "Minggu, 13 Desember 2026" },
   { day: 3, label: "HARI 3", date: "Senin, 14 Desember 2026" },
   ```
2. However, [JadwalClient.tsx](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/components/schedule/JadwalClient.tsx#L22-L26) created its own hardcoded copy:
   ```ts
   { day: 1, label: "12 DES", fullDate: "Jumat, 12 Desember 2026" },
   { day: 2, label: "13 DES", fullDate: "Sabtu, 13 Desember 2026" },
   { day: 3, label: "14 DES", fullDate: "Minggu, 14 Desember 2026" },
   ```
3. **Public Exposure Result:** A visitor reading the Schedule page sees that Day 3 is "Minggu, 14 Desember 2026", which is chronologically impossible.
4. **Resolution Directive:** `JadwalClient.tsx` must be connected directly to `EVENT_CONFIG.dates.days`.

---

## 3. COMMERCIAL SAFETY STATUS (MILESTONE 9A GUARANTEE)

To protect the project from unintended commercial obligations or customer liabilities, all transactions were validated against Milestone 9A safety gates:

```
[PASS] Gate 1: PPV isActive flag is hardcoded to false
[PASS] Gate 2: PPV package cards display "SEGERA DIBUKA" badge
[PASS] Gate 3: PPV checkout CTA is disabled / non-functional for payments
[PASS] Gate 4: Ticket purchases defer to external ticketing platform
[PASS] Gate 5: No real payment gateway credentials in environment
[PASS] Gate 6: Merch checkout creates orders in MOCK mode (MOCK-ORD-*)
[PASS] Gate 7: Merch checkout displays prominent STAGING warning
[PASS] Gate 8: Merch success page clarifies payment is simulated
[PASS] Gate 9: City Pride voting rate limit active (anti-abuse)
[PASS] Gate 10: No real credit card or bank credentials accepted
[PASS] Gate 11: Event config SSOT enforces commercial safety rules
```

**Verdict:** 11 / 11 Commercial Safety Invariants Verified. **NO REAL FUNDS AT RISK.**

---

## 4. SEED DATA VS OFFICIAL PUBLIC DATA SEPARATION

### Current State
The SQLite database (`prisma/dev.db`) contains developer test records seeded via `prisma/seed.ts`:
- 8 athletes named `Fighter Demo 01` through `Fighter Demo 08`
- 2 mock tournaments (`Bantamweight Pro Tournament`, `Lightweight Pro Tournament`)
- 6 simulated bouts with mock scores (e.g. `KO R2 1:45`, `Unanimous Decision`)
- 4 mock merchandise items
- 4 mock lineup acts (`THE SOUND OF NYALI`, `JOGJA HIP-HOP CYPHERS`, `STRIKE & SOUNDS ELECTRONIC`, `SPECIAL GUEST HEADLINER`)

### Public Safety Rule
Until official signed athlete entry forms and artist agreements are received from the Organizing Committee (EO):
1. Public pages must clearly display a discrete "SIMULASI / PRATINJAU" badge where test data is shown.
2. Demo athletes must not be represented as confirmed real competitors.
3. Artist lineup must state "FASE KURASI RESMI" to prevent misrepresentation before artist riders are executed.
