# JKB 2026 — ROUTE QA MATRIX
**Phase 1: Technical & UI Interaction Revalidation**  
**Total Routes Evaluated:** 35 UI Routes (23 Public + 12 Admin) + 3 API Endpoints  
**Execution Environment:** Headless Chrome via CDP & Next.js 15+ Local Server (`http://localhost:3000`)  
**Viewport Profiles:** Desktop (1440 × 900 px) & Mobile (390 × 844 px, DPR 3.0)  

---

## 1. COMPREHENSIVE ROUTE MATRIX TABLE

| ID | Route | Type | Component Source Path | HTTP Status | Title & `<h1>` Status | Desktop Layout | Mobile Layout | Console / Network Errors | Stage Visibility Recommendation |
|:---|:---|:---|:---|:---:|:---:|:---:|:---:|:---:|:---|
| R-01 | `/` | PUBLIC | `src/app/(public)/page.tsx` | 200 | OK (`JOGJA PUNYA NYALI.`) | Stable, Hero + 4 Hubs | Stable, Hamburger Nav | None | **PUBLIC LIVE** |
| R-02 | `/jadwal` | PUBLIC | `src/app/(public)/jadwal/page.tsx` | 200 | OK (`JADWAL PERTANDINGAN & FESTIVAL`) | Stable, 3-Day Tabs | Horizontal Scroll Tabs | None | **PUBLIC LIVE (Fix Date Bug)** |
| R-03 | `/fighters` | PUBLIC | `src/app/(public)/fighters/page.tsx` | 200 | OK (`KENALI PARA PETARUNG`) | Grid 3-col + Search/Filter | 1-col Stack + Filters Modal | None | **PUBLIC LIVE (Seed Data)** |
| R-04 | `/fighters/fighter-demo-01` | PUBLIC | `src/app/(public)/fighters/[slug]/page.tsx` | 200 | OK (`FIGHTER DEMO 01`) | Tale of the Tape split | Stacked stats & bio | None | **PUBLIC LIVE (Demo Slug)** |
| R-05 | `/championship` | PUBLIC | `src/app/(public)/championship/page.tsx` | 200 | OK (`REDY CHAMPIONSHIP 2: 4 SABUK EMAS`) | 4 Divisions + K-1 Rules | 1-col Card Stack | None | **PUBLIC LIVE (Missing Bout Cards)** |
| R-06 | `/bracket` | PUBLIC | `src/app/(public)/bracket/page.tsx` | 200 | OK (`POHON TURNAMEN & HASIL LAGA`) | Interactive Bracket Tree | Round Progression Switch | 4 Lazy Imgs Offscreen | **PUBLIC LIVE (Simulation)** |
| R-07 | `/lineup` | PUBLIC | `src/app/(public)/lineup/page.tsx` | 200 | OK (`LINEUP MUSIK FESTIVAL`) | 3 Day Stages + Artists | 1-col Timeline Stack | None | **PENDING EO CONFIRMATION** |
| R-08 | `/city-pride` | PUBLIC | `src/app/(public)/city-pride/page.tsx` | 200 | OK (`VOTE KOTA KEBANGGAANMU`) | 5 Region Cards + Leaderboard | Stacked Cards + Rate Counter | None | **PUBLIC LIVE (Anti-Abuse On)** |
| R-09 | `/creator` | PUBLIC | `src/app/(public)/creator/page.tsx` | 200 | OK (`CREATOR HUB & MEDIA ACCREDITATION`) | Benefit Cards + Dual Form | Full-width Form Stack | None | **NEEDS EO BENEFIT APPROVAL** |
| R-10 | `/creator/dashboard` | PUBLIC | `src/app/(public)/creator/dashboard/page.tsx` | 200 | OK (`DASHBOARD PERSONAL KREATOR`) | Stats + Referral Hub | Stacked Stat Cards | None | **STAGING / AUTH DEMO** |
| R-11 | `/merch` | PUBLIC | `src/app/(public)/merch/page.tsx` | 200 | OK (`WEAR THE GLORY. REP THE CITY.`) | Product Catalog Grid | 2-col Product Grid | None | **PUBLIC LIVE (Catalog Only)** |
| R-12 | `/merch/jkb-tee-black` | PUBLIC | `src/app/(public)/merch/[slug]/page.tsx` | 200 | OK (`JKB 2026 OFFICIAL FIGHTER TEE...`) | Gallery + Size Selector | Stacked Gallery + Buy CTA | None | **PUBLIC LIVE (Sandbox Gate)** |
| R-13 | `/tiket` | PUBLIC | `src/app/(public)/tiket/page.tsx` | 200 | OK (`TIKET JKB 2026`) | Tier Cards (VIP/Festival) | Vertical Tier Stack | None | **PUBLIC LIVE (Presale Info)** |
| R-14 | `/venue` | PUBLIC | `src/app/(public)/venue/page.tsx` | 200 | OK (`GOR UNY, YOGYAKARTA`) | Map + Facility Grid | Stacked Transport Info | None | **PUBLIC LIVE** |
| R-15 | `/tentang` | PUBLIC | `src/app/(public)/tentang/page.tsx` | 200 | OK (`DI BALIK KALEM, ADA PERTARUNGAN.`) | Narrative split + Pillars | Stacked Narrative | None | **PUBLIC LIVE** |
| R-16 | `/faq` | PUBLIC | `src/app/(public)/faq/page.tsx` | 200 | OK (`PERTANYAAN SERING DIAJUKAN`) | Accordion + Category Nav | Single Accordion Column | None | **PUBLIC LIVE** |
| R-17 | `/kontak` | PUBLIC | `src/app/(public)/kontak/page.tsx` | 200 | OK (`HUBUNGI PANITIA PELAKSANA`) | Contact Info + Inquiry Form | Full-width Form | None | **PUBLIC LIVE** |
| R-18 | `/syarat-ketentuan` | PUBLIC | `src/app/(public)/syarat-ketentuan/page.tsx` | 200 | OK (`SYARAT & KETENTUAN`) | Legal Prose + Sticky Nav | Linear Prose Reading | None | **PUBLIC LIVE** |
| R-19 | `/kebijakan-privasi` | PUBLIC | `src/app/(public)/kebijakan-privasi/page.tsx` | 200 | OK (`KEBIJAKAN PRIVASI`) | Legal Prose + Sticky Nav | Linear Prose Reading | None | **PUBLIC LIVE** |
| R-20 | `/checkout` | PUBLIC | `src/app/(public)/checkout/page.tsx` | 200 | OK (`CHECKOUT & PEMBAYARAN MERCHANDISE`)| 2-col Order + Payment Method | Linear Step Form | None | **STAGING / SIMULATION ONLY** |
| R-21 | `/checkout/success/[id]` | PUBLIC | `src/app/(public)/checkout/success/[orderId]/page.tsx` | 200 | OK (`TERIMA KASIH ATAS DUKUNGANMU!`) | Receipt Card + WA Support | Full Receipt Stack | None | **PUBLIC (Dynamic Route)** |
| R-22 | `/ppv` | PUBLIC | `src/app/(public)/ppv/page.tsx` | 200 | OK (`RINGSIDE SEAT. FROM ANYWHERE.`) | Package Cards + Schedule | Stacked Package Cards | None | **COMMERCIAL GATED (Inactive)**|
| R-23 | `/ppv/watch` | PUBLIC | `src/app/(public)/ppv/watch/page.tsx` | 200 | OK (`REDY CHAMPIONSHIP 2 × BIGMO...`) | 16:9 Player + Live Chat Hub | Responsive Video + Stacked Chat| None | **RESTRICTED / DEMO PREVIEW** |
| R-24 | `/admin/login` | ADMIN | `src/app/admin/login/page.tsx` | 200 | OK (`JKB 2026 COMMAND`) | Centered Auth Card | Centered Auth Card | None | **ADMIN SECURE ENTRY** |
| R-25 | `/admin` | ADMIN | `src/app/admin/page.tsx` | 200 | OK (`COMMAND CENTER OVERVIEW`) | KPI Metrics + Quick Actions | Responsive Stat Cards | None | **ADMIN ONLY (RBAC)** |
| R-26 | `/admin/fighters` | ADMIN | `src/app/admin/fighters/page.tsx` | 200 | OK (`FIGHTER MANAGEMENT`) | Filterable Table + Actions | Horizontal Scroll Table | None | **ADMIN ONLY (RBAC)** |
| R-27 | `/admin/fighters/new` | ADMIN | `src/app/admin/fighters/new/page.tsx` | 200 | OK (`ADD NEW FIGHTER`) | Multi-field Athlete Form | Linear Form Stack | None | **ADMIN ONLY (RBAC)** |
| R-28 | `/admin/schedule` | ADMIN | `src/app/admin/schedule/page.tsx` | 200 | OK (`MANAJEMEN JADWAL & RUNDOWN`) | Rundown Timeline Editor | Linear Schedule Cards | None | **ADMIN ONLY (RBAC)** |
| R-29 | `/admin/matches` | ADMIN | `src/app/admin/matches/page.tsx` | 200 | OK (`OPERATOR PERTANDINGAN & KONTROL`)| Match Scorecard & Status | Match Controls Stack | None | **ADMIN ONLY (RBAC)** |
| R-30 | `/admin/lineup` | ADMIN | `src/app/admin/lineup/page.tsx` | 200 | OK (`MANAJEMEN LINEUP MUSIK`) | Stage Grid & Artist Cards | Stacked Artist Cards | None | **ADMIN ONLY (RBAC)** |
| R-31 | `/admin/voting` | ADMIN | `src/app/admin/voting/page.tsx` | 200 | OK (`AUDIT & KONTROL VOTING CITY PRIDE`)| Regional Bars + Log Auditor | Stacked Region Progress | None | **ADMIN ONLY (RBAC)** |
| R-32 | `/admin/creators` | ADMIN | `src/app/admin/creators/page.tsx` | 200 | OK (`MANAJEMEN KREATOR & AKREDITASI`)| Tabbed Applications & Badges | Responsive Data Cards | None | **ADMIN ONLY (RBAC)** |
| R-33 | `/admin/merch` | ADMIN | `src/app/admin/merch/page.tsx` | 200 | OK (`OFFICIAL MERCH STORE & ORDERS`) | Inventory + Orders Ledger | Stacked Order Ledger | None | **ADMIN ONLY (RBAC)** |
| R-34 | `/admin/messages` | ADMIN | `src/app/admin/messages/page.tsx` | 200 | OK (`INBOX PESAN & INQUIRY MASUK`) | Message Drawer + Status Flags| Message List Stack | None | **ADMIN ONLY (RBAC)** |
| R-35 | `/admin/ppv` | ADMIN | `src/app/admin/ppv/page.tsx` | 200 | OK (`PAY-PER-VIEW PLATFORM & STREAMING`)| Stream Controls + Access Keys | Controls Stack | None | **ADMIN ONLY (RBAC)** |

---

## 2. API ENDPOINTS AUDIT

| Endpoint | Method | Source File | Purpose | Security / Rate Limit | Status |
|:---|:---:|:---|:---|:---|:---:|
| `/api/voting/vote` | POST | `src/app/api/voting/vote/route.ts` | City Pride community voting | IP Hash + UA rate limiting (1 vote / 24h per IP) | **OPERATIONAL & SECURE** |
| `/api/merch/orders` | POST | `src/app/api/merch/orders/route.ts` | Merchandise order creation | Staging mock mode (`MOCK-ORD-*`); stock validation | **OPERATIONAL (SANDBOX)** |
| `/api/creators/register` | POST | `src/app/api/creators/register/route.ts` | Creator & Media application submission | Server validation, unique handle / email check | **OPERATIONAL** |

---

## 3. ROUTE LEVEL ANOMALIES & DEFECT DETAILS

### 3.1 Route `/jadwal` (R-02)
- **Defect:** Hardcoded weekday calculation mismatch.
- **Evidence:** Component displays "Minggu, 14 Desember 2026", whereas December 14, 2026 is officially Monday ("Senin").
- **Impact:** Misleads traveling attendees regarding match days.
- **Classification:** **CONFIRMED CODE DEFECT**.

### 3.2 Route `/championship` (R-05)
- **Defect:** Dead database query and missing bout cards.
- **Evidence:** `prisma.athlete.findMany({ take: 4 })` is executed at server render, but the athletes are not rendered into the DOM.
- **Classification:** **CONFIRMED ARCHITECTURAL DEFECT**.

### 3.3 Route `/bracket` (R-06)
- **Observation:** CDP detected 4 broken image elements on initial desktop load (`imagesBroken: 4`).
- **Investigation:** Images are valid files (`/images/jkb/fighter-*.jpg`), but Next.js `next/image` lazy-loading marks `naturalWidth: 0` for nodes located in deeper bracket tiers before they scroll into the viewport.
- **Recommendation:** Add placeholder blur or priority flag to tournament final nodes.

### 3.4 Route `/ppv` & `/ppv/watch` (R-22, R-23)
- **Observation:** Stream player renders test player state. Purchase button displays simulation badge.
- **Commercial Safety Verdict:** **INTENDED BEHAVIOR (PASS)**. Live billing must remain deactivated until contracts and video CDN infrastructure are officially provisioned.
