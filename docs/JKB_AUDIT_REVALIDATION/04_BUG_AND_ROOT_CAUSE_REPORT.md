# JKB 2026 — BUG AND ROOT CAUSE REPORT
**Phase 1: Technical & UI Interaction Revalidation**  
**Investigation Standard:** Empirical Code Inspection with File Paths & Line Numbers  
**Status:** Read-Only Audit (No Code Modified in this Phase)  

---

## 1. BUG SEVERITY CLASSIFICATION

- **P0 (Blocker / Critical Security / Public Misinformation):** Must be resolved before any public preview or launch.
- **P1 (Critical Functional / Missing Feature / Legal Risk):** Significant user experience omission or unverified public promise.
- **P2 (Major UX / Performance / Styling):** Visual inconsistency, layout shifts, or non-fatal data handling issues.
- **P3 (Minor / Cleanup):** Deprecated attributes, dead queries, minor spacing discrepancies.

---

## 2. CONFIRMED BUGS & DETAILED ROOT CAUSES

---

### BUG-01: Missing Route Protection & Authorization on Admin Routes (`/admin/*`)
- **Severity:** **P0 (Critical Security)**
- **Status:** **CONFIRMED DEFECT**
- **Affected File:** [layout.tsx](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/app/admin/layout.tsx#L32-L60), [page.tsx](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/app/admin/page.tsx#L1-L40), all `/admin/*` pages
- **Line Numbers:** `src/app/admin/layout.tsx` (lines 32, 58–60)
- **Description:**  
  Unauthenticated visitors can access `http://localhost:3000/admin` directly without logging in. The server returns HTTP 200 with the full administrative dashboard content ("COMMAND CENTER OVERVIEW", KPI metrics, navigation sidebar).
- **Code Snippet / Root Cause:**
  ```tsx
  // src/app/admin/layout.tsx:58-60
  const userRole = (session?.user as any)?.role || "ADMIN";
  const userName = session?.user?.name || "Administrator";
  const userEmail = session?.user?.email || "admin@jkb2026.id";
  ```
  1. There is no Next.js middleware (`src/middleware.ts`) intercepting `/admin` routes.
  2. The admin layout is a client component (`"use client"`) that defaults unauthenticated sessions to `"Administrator"` and `"ADMIN"` role rather than redirecting to `/admin/login`.
  3. No server components under `/admin/*` invoke `getServerSession(authOptions)` to abort unauthenticated requests.
- **User / Business Impact:**  
  Critical security vulnerability. Anyone discovering the URL `/admin` can inspect internal event data, registration logs, messages, and match operators.
- **Recommended Remediation (Phase 2):**  
  Implement a root `src/middleware.ts` using `next-auth/middleware` with matcher config `["/admin/:path*"]` (excluding `/admin/login`). Enforce server-side session checks in `/admin/layout.tsx`.

---

### BUG-02: Hardcoded Admin Staging Credentials Exposed in Public Login UI
- **Severity:** **P0 (Critical Security & Credential Leak)**
- **Status:** **CONFIRMED DEFECT**
- **Affected File:** [page.tsx](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/app/admin/login/page.tsx#L42-L46)
- **Line Numbers:** `src/app/admin/login/page.tsx` (lines 42–46, 135–167)
- **Description:**  
  The admin login screen renders a "Quick-Fill Staging Accounts Box" containing one-click login buttons that autofill the Super Admin and Content Admin accounts with hardcoded plaintext passwords.
- **Code Snippet / Root Cause:**
  ```tsx
  // src/app/admin/login/page.tsx:42-46
  const fillCredentials = (userEmail: string) => {
    setEmail(userEmail);
    setPassword("AdminJKB2026!");
    setError("");
  };
  ```
  Lines 142–165 render clickable buttons labeled "Super Admin" and "Content Admin" that invoke `fillCredentials("admin@jkbchampionship.id")`. This exposes administrative passwords in client-side bundles.
- **User / Business Impact:**  
  Exposes administrative credentials to any visitor or browser inspection tool.
- **Recommended Remediation (Phase 2):**  
  Remove the entire Quick-Fill box (`lines 135–167`) from `AdminLoginPage`. Gate helper login functions behind `process.env.NODE_ENV !== "production"` or isolate to local Cypress/Playwright test harnesses.

---

### BUG-03: Hardcoded Weekday Mismatch on Public Schedule Page
- **Severity:** **P0 (Public Misinformation / Factual Calendar Error)**
- **Status:** **CONFIRMED DEFECT**
- **Affected File:** [JadwalClient.tsx](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/components/schedule/JadwalClient.tsx#L22-L26)
- **Line Numbers:** `src/components/schedule/JadwalClient.tsx` (lines 22–26)
- **Description:**  
  The public `/jadwal` page displays incorrect calendar weekdays:
  - Day 1: "Jumat, 12 Desember 2026" *(Actual: Sabtu)*
  - Day 2: "Sabtu, 13 Desember 2026" *(Actual: Minggu)*
  - Day 3: "Minggu, 14 Desember 2026" *(Actual: Senin)*
- **Code Snippet / Root Cause:**
  ```tsx
  // src/components/schedule/JadwalClient.tsx:22-26
  const DAY_TABS = [
    { day: 1, label: "12 DES", fullDate: "Jumat, 12 Desember 2026", theme: "Penimbangan & Babak Penyisihan" },
    { day: 2, label: "13 DES", fullDate: "Sabtu, 13 Desember 2026", theme: "Babak Semifinal & Showcase" },
    { day: 3, label: "14 DES", fullDate: "Minggu, 14 Desember 2026", theme: "Grand Final 4 Sabuk & Panggung Musik" },
  ];
  ```
  `JadwalClient.tsx` imports `EVENT_CONFIG` at line 5, but completely ignores `EVENT_CONFIG.dates.days`, hardcoding an inaccurate array with wrong weekdays.
- **User / Business Impact:**  
  Visitors and traveling spectators risk booking travel, hotels, and match attendance on the wrong days.
- **Recommended Remediation (Phase 2):**  
  Refactor `DAY_TABS` in `JadwalClient.tsx` to read directly from `EVENT_CONFIG.dates.days`, mapping `Sabtu, 12 Desember 2026`, `Minggu, 13 Desember 2026`, and `Senin, 14 Desember 2026`.

---

### BUG-04: Missing Fight Card and Dead Query on Championship Route
- **Severity:** **P1 (Functional Omission & Dead Code)**
- **Status:** **CONFIRMED DEFECT**
- **Affected File:** [page.tsx](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/app/(public)/championship/page.tsx#L62-L66)
- **Line Numbers:** `src/app/(public)/championship/page.tsx` (lines 62–66)
- **Description:**  
  Navigating to `/championship` displays 4 weight division cards and K-1 rules, but zero fight cards or bout matchups. Furthermore, the server component queries the database for 4 published athletes, but the variable is completely unused.
- **Code Snippet / Root Cause:**
  ```tsx
  // src/app/(public)/championship/page.tsx:62-66
  export default async function ChampionshipPage() {
    const publishedAthletes = await prisma.athlete.findMany({
      where: { isPublished: true },
      take: 4,
      orderBy: { wins: "desc" },
    });
    // 'publishedAthletes' is never referenced in the returned JSX
  ```
- **User / Business Impact:**  
  Visitors cannot view fight matchups on the Championship page, and unnecessary database overhead occurs on every request.
- **Recommended Remediation (Phase 2):**  
  Either render a featured 4-bout fight card preview component consuming `publishedAthletes` or remove the unused query and provide clear navigation to `/bracket`.

---

### BUG-05: Unverified Commercial Claims on Creator Hub
- **Severity:** **P1 (Content & Compliance Risk)**
- **Status:** **CONFIRMED CONTENT DEFECT**
- **Affected File:** [CreatorClient.tsx](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/components/creator/CreatorClient.tsx#L182-L210)
- **Line Numbers:** `src/components/creator/CreatorClient.tsx` (lines 182–210)
- **Description:**  
  The Creator Hub promises *"rebut hadiah leaderboard jutaan rupiah"* and *"akses ringside eksklusif GOR UNY"*.
- **Root Cause:**  
  Developer mockup copy was committed without validation from the Event Organizer (EO) regarding available prize budgets or ringside seat allocations.
- **User / Business Impact:**  
  Risk of dispute or breach of terms with creators and media representatives if prizes cannot be honored.
- **Recommended Remediation (Phase 2):**  
  Update copy to reflect verified EO benefits: *"Akses ID Card Resmi, Peluang Kolaborasi Konten, & Fasilitas Media Lounge"*. Add asterisk: *"Syarat & ketentuan berlaku sesuai kapasitas venue"*.

---

### BUG-06: Off-Screen Layout Shifts / Lazy Images on Tournament Bracket
- **Severity:** **P2 (Major UX / Performance)**
- **Status:** **CONFIRMED UX OBSERVATION**
- **Affected File:** [BracketClient.tsx](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/components/bracket/BracketClient.tsx#L179-L447)
- **Line Numbers:** `src/components/bracket/BracketClient.tsx` (lines 179, 218, 309, 346, 410, 447)
- **Description:**  
  CDP audits reported `imagesBroken: 4` on initial desktop load.
- **Root Cause:**  
  Athlete avatars in deep or tab-hidden bracket nodes use Next.js `<Image>` with default lazy-loading. Because their containers are initially hidden or off-screen, browsers report `naturalWidth: 0` until rendered or scrolled into view.
- **User / Business Impact:**  
  Slight avatar pop-in or layout shift when switching tabs.
- **Recommended Remediation (Phase 2):**  
  Add lightweight SVG fallback avatars and apply `priority` to the final match avatar nodes.
