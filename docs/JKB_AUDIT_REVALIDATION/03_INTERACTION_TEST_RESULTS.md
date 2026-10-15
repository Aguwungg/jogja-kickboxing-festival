# JKB 2026 — INTERACTION TEST RESULTS & SCREENSHOT EVIDENCE
**Phase 1: Technical & UI Interaction Revalidation**  
**Audit Protocol:** Empirical State Verification (Before & After Captures via Headless Chrome CDP)  
**Evidence Subfolder:** `docs/JKB_AUDIT_REVALIDATION/screenshots/`  

---

## 1. PREVIOUS AUDIT EVIDENCE VERIFICATION SUMMARY

A critical requirement of this revalidation was to verify whether screenshots in the previous audit (`docs/JKB_COMPLETE_UI_AUDIT/`) constituted genuine interactive proof. Our cryptographic analysis identified three primary classes of anomalies in the prior audit:

1. **Duplicate Hash Anomaly (Identical Screen Recorded):**  
   - `11_mobile_nav_drawer_open.png` had MD5 `c229abcf24fd01b2e70e8bb9d6387c95`, which was bit-for-bit identical to `01_home_mobile_first.png`. The drawer was never open.
   - `09_creator_media_tab.png` had MD5 `212e792d57dba204142888850a76730b`, which was bit-for-bit identical to `09_creator_hub_desktop_first.png`. The camera never moved to the tab content.
2. **Missing Form Submission Anomaly:**  
   - `03_fighters_search_query.png` and `03_fighters_empty_results.png` displayed an unmodified 8-fighter list because text was injected into `<input>` without triggering React synthetic events or submitting the form.
3. **Passive Hover / Focus Confusion:**  
   - Component state was not verified through DOM attribute or class mutation checking before capturing the "after" frame.

---

## 2. REVALIDATION INTERACTION TESTS (INT-01 TO INT-08)

Below is the verified test log for the 8 critical interactions. Every test includes reproducible steps, before/after screenshot filenames, and empirical state change confirmations.

---

### INT-01: Mobile Navigation Drawer (Open & Scroll)
- **Target Route:** `/` (Homepage)
- **Viewport:** Mobile (390 × 844 px, DPR 3.0)
- **Screenshot Evidence:**
  - Before: `screenshots/reval_01_mobile_nav_drawer_before.png` (218 KB)
  - After (Open): `screenshots/reval_01_mobile_nav_drawer_open_after.png` (57 KB)
  - After (Scrolled): `screenshots/reval_01_mobile_nav_drawer_scrolled_after.png` (98 KB)
- **Reproducible Steps:**
  1. Load `http://localhost:3000/` at 390px viewport width.
  2. Locate hamburger menu button: `button[aria-label="Buka Menu"]`.
  3. Click the button to toggle `isOpen` state in `Navbar.tsx`.
  4. Wait 300ms for slide-in animation to complete.
  5. Verify drawer container mounts (`fixed inset-0 z-50`).
  6. Scroll drawer downward by 400px to expose bottom utility links.
- **Expected Behavior:** Drawer opens over the page, displaying primary navigation links (Jadwal, Petarung, Kejuaraan, Lineup, City Pride, Creator Hub, Merch, Tiket, Venue) and secondary links.
- **Actual Behavior:** Drawer renders cleanly. File sizes and hashes clearly differ from the base homepage (`218 KB` vs `57 KB`).
- **Verdict:** **PASS (Genuine State Change)**
- **Audit Comparison:** Previous audit failed due to invalid selector `button[aria-label="Buka menu navigasi"]`. Revalidation fixed the selector to `aria-label="Buka Menu"` and captured genuine drawer states.

---

### INT-02: Schedule Date Switching & Item Expansion
- **Target Route:** `/jadwal`
- **Viewport:** Desktop (1440 × 900 px)
- **Screenshot Evidence:**
  - Before: `screenshots/reval_02_schedule_day1_before.png` (94 KB)
  - After (Day 2): `screenshots/reval_02_schedule_day2_after.png` (97 KB)
  - After (Day 3): `screenshots/reval_02_schedule_day3_after.png` (96 KB)
  - After (Item Expanded): `screenshots/reval_02_schedule_item_expanded_after.png` (93 KB)
- **Reproducible Steps:**
  1. Load `http://localhost:3000/jadwal`.
  2. Click tab button for Day 2 (`13 DES`) and Day 3 (`14 DES`).
  3. Locate the first expandable schedule card button containing text "Lihat Detail".
  4. Click the button to toggle item expansion in `JadwalClient.tsx`.
- **Expected Behavior:** Clicking tabs switches timeline items. Clicking "Lihat Detail" changes button label to "Tutup Detail" and displays description text.
- **Actual Behavior:** Both day switching and card accordion expand smoothly (`hasCloseBtn: true`, `hasDesc: true`).
- **Verdict:** **PASS (Functional Interaction Verified)**
- **Defect Note:** Discovered Day 3 mislabeled as "Minggu, 14 Desember 2026" (calendar defect logged in Bug Report).

---

### INT-03: Fighter Search & Empty State Filtering
- **Target Route:** `/fighters`
- **Viewport:** Desktop (1440 × 900 px)
- **Screenshot Evidence:**
  - Before: `screenshots/reval_03_fighters_search_before.png` (354 KB)
  - After (Query "Sleman"): `screenshots/reval_03_fighters_search_query_after.png` (116 KB)
  - After (Filters Modal): `screenshots/reval_03_fighters_filters_opened_after.png` (120 KB)
  - After (Empty State): `screenshots/reval_03_fighters_empty_results_after.png` (67 KB)
- **Reproducible Steps:**
  1. Navigate to `http://localhost:3000/fighters`.
  2. In search input `input[placeholder*="Cari nama"]`, set query `Sleman` using prototype value setter and submit the form.
  3. Count visible fighter cards: drops from 8 to 1 (`Fighter Demo 02`).
  4. Submit invalid query `PetarungNihil999`.
  5. Confirm empty state container appears with header `TIDAK ADA PETARUNG DITEMUKAN`.
- **Expected Behavior:** Roster filters dynamically; non-existent queries display empty state with "Reset Pencarian" CTA.
- **Actual Behavior:** Verified genuine DOM filtering and empty banner display.
- **Verdict:** **PASS (Genuine State Change)**
- **Audit Comparison:** Previous audit did not submit the form, leaving 8 cards rendered. Revalidation proves the filter and empty state work correctly.

---

### INT-04: Bracket Round Progression Switch (Mobile)
- **Target Route:** `/bracket`
- **Viewport:** Mobile (390 × 844 px)
- **Screenshot Evidence:**
  - Before: `screenshots/reval_04_bracket_mobile_round_before.png` (55 KB)
  - After: `screenshots/reval_04_bracket_mobile_round_final_after.png` (53 KB)
- **Reproducible Steps:**
  1. Load `http://localhost:3000/bracket` on mobile viewport.
  2. Locate mobile round filter pills (default: `SEMIFINAL`).
  3. Click button containing text `FINAL`.
  4. Verify DOM updates to show the championship final bout with golden crown champion badge.
- **Expected Behavior:** Bracket switches from 2 Semifinal bouts to 1 Final bout with winner highlight.
- **Actual Behavior:** Switched smoothly. Crown icon and winner badge render accurately.
- **Verdict:** **PASS**

---

### INT-05: City Pride Region Selection
- **Target Route:** `/city-pride`
- **Viewport:** Desktop (1440 × 900 px)
- **Screenshot Evidence:**
  - Before: `screenshots/reval_05_city_pride_initial_before.png` (76 KB)
  - After: `screenshots/reval_05_city_pride_region_selected_after.png` (77 KB)
- **Reproducible Steps:**
  1. Navigate to `http://localhost:3000/city-pride`.
  2. Scroll to region selection grid.
  3. Click card for `KABUPATEN SLEMAN`.
  4. Confirm card border activates to red/gold, checkmark badge appears (`Terpilih ✓`), and summary counter updates.
- **Expected Behavior:** Region card enters selected state; submit button enables.
- **Actual Behavior:** State updates instantaneously. Submit action was safely left unclicked to prevent mutating the database.
- **Verdict:** **PASS (Safe Read-Only Interaction)**

---

### INT-06: Creator Hub Media Accreditation Tab Switch
- **Target Route:** `/creator`
- **Viewport:** Desktop (1440 × 900 px)
- **Screenshot Evidence:**
  - Before: `screenshots/reval_06_creator_tab_before.png` (77 KB)
  - After: `screenshots/reval_06_creator_media_tab_after.png` (80 KB)
- **Reproducible Steps:**
  1. Navigate to `http://localhost:3000/creator`.
  2. Scroll element `#action-hub` into viewport center.
  3. Observe initial tab: `Registrasi Content Creator` (Fields: Channel Link, Follower Count).
  4. Click tab button: `Akreditasi Media Massa`.
  5. Verify tab content switches to Media Accreditation form (Fields: Media Outlet, Press Card URL).
- **Expected Behavior:** Form fields change to media accreditation schema.
- **Actual Behavior:** Tab switches correctly and media form elements are rendered.
- **Verdict:** **PASS (Genuine State Change)**
- **Audit Comparison:** Previous audit captured fold (0, 0) instead of `#action-hub`, producing a duplicate of the hero image. Revalidation scrolled directly to the tab and captured genuine form switching.

---

### INT-07: Merchandise Variant Selection (Size XL)
- **Target Route:** `/merch/jkb-tee-black`
- **Viewport:** Desktop (1440 × 900 px)
- **Screenshot Evidence:**
  - Before: `screenshots/reval_07_merch_variant_initial_before.png` (270 KB)
  - After: `screenshots/reval_07_merch_variant_xl_after.png` (270 KB)
- **Reproducible Steps:**
  1. Navigate to `http://localhost:3000/merch/jkb-tee-black`.
  2. Observe default size selection (`M`).
  3. Click button for size `XL`.
  4. Confirm `XL` button obtains active styling border (`border-red-500` / `bg-red-500/20`) and active variant indicator text updates to "XL".
- **Expected Behavior:** Active size updates; stock level indicator refreshes.
- **Actual Behavior:** React state updates as expected.
- **Verdict:** **PASS**

---

### INT-08: FAQ Accordion Toggle Interaction
- **Target Route:** `/faq`
- **Viewport:** Desktop (1440 × 900 px)
- **Screenshot Evidence:**
  - Before: `screenshots/reval_08_faq_initial_before.png` (92 KB)
  - After: `screenshots/reval_08_faq_item3_opened_after.png` (96 KB)
- **Reproducible Steps:**
  1. Navigate to `http://localhost:3000/faq`.
  2. Observe FAQ items (Items 1 and 2 are open by default).
  3. Click Item 3: "Bagaimana sistem penilaian dan aturan pertandingan kickboxing?".
  4. Confirm Item 3 chevron rotates and answer prose expands into view.
- **Expected Behavior:** Item 3 toggles from collapsed to expanded.
- **Actual Behavior:** Smooth expansion verified.
- **Verdict:** **PASS**

---

## 3. SUMMARY RESULT TABLE

| Test ID | Interaction Description | Viewport | State Changed | Result | Screenshot Verification |
|:---:|:---|:---:|:---:|:---:|:---|
| **INT-01** | Mobile Nav Drawer Open & Scroll | 390×844 | YES | **PASS** | `reval_01_mobile_nav_drawer_open_after.png` |
| **INT-02** | Schedule Date Switch & Item Expansion | 1440×900 | YES | **PASS** | `reval_02_schedule_item_expanded_after.png` |
| **INT-03** | Fighter Search & Empty State | 1440×900 | YES | **PASS** | `reval_03_fighters_empty_results_after.png` |
| **INT-04** | Bracket Round Switch (Mobile) | 390×844 | YES | **PASS** | `reval_04_bracket_mobile_round_final_after.png` |
| **INT-05** | City Pride Region Selection | 1440×900 | YES | **PASS** | `reval_05_city_pride_region_selected_after.png` |
| **INT-06** | Creator Hub Media Tab Switch | 1440×900 | YES | **PASS** | `reval_06_creator_media_tab_after.png` |
| **INT-07** | Merch Variant Selection (XL) | 1440×900 | YES | **PASS** | `reval_07_merch_variant_xl_after.png` |
| **INT-08** | FAQ Accordion Expand | 1440×900 | YES | **PASS** | `reval_08_faq_item3_opened_after.png` |
