# JKB 2026 — MILESTONE 9A: COMMERCIAL SAFETY & PRODUCTION DATA GATES REPORT

> **Status**: COMPLETED  
> **Milestone**: 9A (Commercial Safety & Production Data Gates)  
> **Event Identity**: JOGJA KICKBOXING FESTIVAL & REDY CHAMPIONSHIP 2  
> **Canonical Dates & Venue**: 12–14 Desember 2026 • GOR UNY, Yogyakarta  
> **Environment Context**: Staging / Pre-Production Sandbox  
> **Truth Audit Resolution**: 100% of critical commercial vulnerabilities resolved with strict gates.

---

## 1. Executive Summary

Following the comprehensive pre-production truth audit ([`docs/JKB_PREPRODUCTION_TRUTH_AUDIT.md`](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/docs/JKB_PREPRODUCTION_TRUTH_AUDIT.md)), Milestone 9A enforces strict architectural separation between **development/staging simulation** and **live production systems**. 

Prior to this milestone, client actions directly set orders to `PAID` and instantly activated PPV streaming passes without payment verification. Milestone 9A neutralizes all client manipulation vectors, locks production checkouts to pending states until a real payment gateway (Midtrans) is integrated, guards demo access codes from production authorization, and establishes automated regression testing.

> [!CAUTION]
> **Production Readiness Statement**: This milestone resolves internal logic and authorization safety gates. The application is **NOT 100% production ready** until external contracts (Midtrans Payment Gateway, Live CDN Streaming, and Official Logistics) are formally provisioned and integrated.

---

## 2. Confirmed Issues & Exact Fixes

| Issue Category | Audit Finding | Exact Fix Implemented |
| :--- | :--- | :--- |
| **Payment Auto-Approval** | Merchandise checkout previously marked new orders as `status: "CONFIRMED"` and `paymentStatus: "PAID"`. | Refactored `createOrderAction` in [`src/app/(public)/checkout/actions.ts`](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/app/(public)/checkout/actions.ts). Orders now strictly default to `status: "PENDING"`, `paymentStatus: "UNPAID"`, and `fulfillmentStatus: "UNFULFILLED"`. Client-supplied status payloads are rejected. |
| **PPV Entitlement Bypassing** | PPV purchases in `purchasePPVPassAction` immediately created entitlements with `status: "ACTIVE"`, granting live stream access prior to payment. | Refactored `purchasePPVPassAction` in [`src/app/(public)/ppv/actions.ts`](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/app/(public)/ppv/actions.ts) to create records with `status: "PENDING_PAYMENT"`. Playback is denied until server-side activation occurs. |
| **Payment Simulator Infiltration** | Simulation methods were callable indiscriminately without environment checks. | Created [`src/lib/commercial-gates.ts`](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/lib/commercial-gates.ts) with `assertSimulationAllowed()`. In production (`NODE_ENV === "production"`), calling simulation completion throws an immediate fatal rejection (`[SECURITY_GATE_REJECTED]`). |
| **Demo Code Leakage in Production** | Hardcoded codes (`JKB-VIP-2026`, `JKB-PPV-DEMO88`) could authorize playback in any environment. | Guarded demo codes with `assertPlaybackAuthorization()`. In production, demo codes are strictly rejected (`allowDevDemoPasses = false`). |
| **Unprotected Stream URLs** | Stream URLs could be exposed without server verification. | Implemented `resolveProtectedStreamUrl()`. If production live streaming is inactive, the player receives a protected standby notice instead of raw stream URLs. |
| **Tentative Operational Promises** | Venue merchandise booth pickup times and locations were stated as definitive facts without official committee sign-off. | Added explicit `(Tentatif)` warnings to [`CheckoutClient.tsx`](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/components/merch/CheckoutClient.tsx) and the order receipt, clarifying that booth locations at GOR UNY and hours are subject to official committee confirmation. |
| **Unapproved Commercial Offers** | Unapproved draft tiers (`all-access-championship-pass`, `vip-ringside-stream`) were vulnerable to purchase attempts. | Hardened `purchasePPVPassAction` to reject inactive products. Added regression test ensuring draft products cannot be purchased. |
| **Repository File Tracking** | Local SQLite database file (`prisma/dev.db`) was committed to Git tracking. | Added `*.db`, `*.db-journal`, `*.sqlite`, `*.sqlite3`, `prisma/*.db` to [`.gitignore`](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/.gitignore). Provided remediation instructions for purging index tracking. |

---

## 3. Files Created & Modified

### Created Files
1. [`src/lib/commercial-gates.ts`](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/lib/commercial-gates.ts)
   - Centralized commercial safety policies: `getGatePolicy()`, `assertSimulationAllowed()`, `assertPlaybackAuthorization()`, `isInternalDemoCode()`, `resolveProtectedStreamUrl()`.
2. [`src/app/(public)/checkout/success/[orderId]/SimulatePaymentButton.tsx`](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/app/(public)/checkout/success/[orderId]/SimulatePaymentButton.tsx)
   - Staging-only client button to trigger server-guarded payment simulation during QA.
3. [`scripts/test-commercial-safety.ts`](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/scripts/test-commercial-safety.ts)
   - Automated test suite validating payment safety, entitlement gates, demo isolation, and tamper resistance.
4. [`docs/MILESTONE_9A_COMMERCIAL_SAFETY_REPORT.md`](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/docs/MILESTONE_9A_COMMERCIAL_SAFETY_REPORT.md)
   - Milestone deliverable report.

### Modified Files
1. [`.gitignore`](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/.gitignore)
   - Added database exclusions (`*.db`, `*.sqlite`, `prisma/*.db`).
2. [`src/app/(public)/checkout/actions.ts`](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/app/(public)/checkout/actions.ts)
   - Orders default to `PENDING` & `UNPAID`. Isolated `simulateOrderPaymentAction` with simulation gate.
3. [`src/app/(public)/checkout/success/[orderId]/page.tsx`](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/app/(public)/checkout/success/[orderId]/page.tsx)
   - Added unpaid warning banner, claim barcode watermark `(UNPAID)` when unconfirmed, and staging simulator component.
4. [`src/components/merch/CheckoutClient.tsx`](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/components/merch/CheckoutClient.tsx)
   - Updated operational booth notices to tentative; updated payment copy to reflect `PENDING` order creation.
5. [`src/app/(public)/ppv/actions.ts`](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/app/(public)/ppv/actions.ts)
   - Default passes to `PENDING_PAYMENT`. Isolated `simulateStagingPPVActivationAction`. Playback strictly checks `status === "ACTIVE"`.
6. [`src/components/ppv/PpvLandingClient.tsx`](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/src/components/ppv/PpvLandingClient.tsx)
   - Added `Pending Payment Modal` with staging simulation activation button and production live lock notice.

---

## 4. Test Execution & Verified Results

### 4.1 Automated Commercial Safety Suite (`scripts/test-commercial-safety.ts`)
Run command: `npx tsx scripts/test-commercial-safety.ts`

```
════════════════════════════════════════════════════════════════
 JKB 2026 — COMMERCIAL SAFETY & PRODUCTION DATA GATES TEST SUITE
════════════════════════════════════════════════════════════════

▶ Test Group 1: Merchandise Order Creation Safety
✅ PASS: Order Creation: Default Status is PENDING and UNPAID
   └─ db status=PENDING, paymentStatus=UNPAID, fulfillmentStatus=UNFULFILLED
✅ PASS: Tamper Resistance: Client status injection ignored
   └─ Client payload with paymentStatus=PAID was successfully discarded

▶ Test Group 2: Payment Simulation Gate Authorization
✅ PASS: Staging Simulation: Authorized simulation updates order to PAID
   └─ sim res=true, paymentStatus=PAID
✅ PASS: Production Gate: Simulation completion is forbidden when disabled
   └─ Expected gate rejection, got: [SECURITY_GATE_REJECTED] Aksi simulasi 'simulateOrderPaymentAction' ditolak.

▶ Test Group 3: PPV Entitlement Verification & Payment Gates
✅ PASS: PPV Order: Initial status is strictly PENDING_PAYMENT
   └─ Created PPV pass status=PENDING_PAYMENT
✅ PASS: PPV Gate: Playback denied for unpaid/pending PPV pass
   └─ verify result: valid=false, error=Tiket digital ini belum dibayar...
✅ PASS: Staging Activation: PPV pass status becomes ACTIVE on verified event
   └─ activate result=true, db status=ACTIVE
✅ PASS: PPV Entitlement: Playback authorized once status is ACTIVE
   └─ valid=true, tier=STANDARD

▶ Test Group 4: Demo Access Code Isolation
✅ PASS: Staging Demo Access: JKB-VIP-2026 authorized in staging
   └─ demo pass recognized and authorized in staging
✅ PASS: Production Gate: Demo code JKB-VIP-2026 rejected in production
   └─ rejection reason: [SECURITY_GATE_REJECTED] Kode demo 'JKB-VIP-2026' tidak sah untuk otorisasi siaran...

▶ Test Group 5: Unapproved Commercial Offers & Draft Isolation
✅ PASS: Draft Protection: Unapproved PPV product '3-Day All-Access: Championship & Music Stage [DRAFT]' rejects checkout
   └─ Returned error: Paket PPV tidak tersedia, berstatus draft, atau ditangguhkan penjualannya.

▶ Cleanup: Removing temporary test records
Cleaned up 1 test orders and 1 test PPV passes.

════════════════════════════════════════════════════════════════
 TEST SUMMARY REPORT: Total: 11 | Passed: 11 | Failed: 0
════════════════════════════════════════════════════════════════
```

### 4.2 Static Typing & Build Verification
1. **TypeScript Validation**: `npx tsc --noEmit`  
   - Result: `Exit Code 0` (No errors).
2. **Production Build**: `npm run build`  
   - Result: `Exit Code 0` (38 routes compiled successfully via Turbopack).

### 4.3 Browser End-to-End Visual QA
- **PPV Purchase & Gate Flow**:
  - Modal created pass with `PENDING_PAYMENT`.
  - Simulator button in modal verified entitlement update to `ACTIVE`.
  - Live player unlocked and streaming console loaded.
- **Merchandise Checkout Flow**:
  - Cart item checked out with tentative booth notice displayed.
  - Redirected to `/checkout/success/[orderId]` with `MENUNGGU PEMBAYARAN (UNPAID)` banner.
  - Staging simulator button updated order to `PAID`, releasing the pickup barcode claim ticket.
- **Recordings & Screenshots**:
  - Browser recording saved: `merch_checkout_gate_qa_1791736310018.webp`
  - Success receipt screenshot saved: `merch_checkout_success_paid_1791736415862.png`

---

## 5. Repository Security Audit & Remediation

### Findings
1. **Tracked Database File**: `prisma/dev.db` was committed into git tracking in an earlier commit (`e115a38`).
2. **Secrets Hygiene**: No production API keys, Midtrans secret keys, or live credentials exist in Git-tracked files.
3. **Environment Isolation**: `.env` is ignored by Git. `.env.example` contains only placeholder variables without real keys.

### Required Remediation (Manual Protocol for Repository Administrator)
Because the prompt forbids automatic rewriting of Git history or deletion of existing data, the administrator must execute the following when preparing for public repository deployment:

```bash
# 1. Untrack local SQLite database from git index without deleting file on disk
git rm --cached prisma/dev.db

# 2. Commit untracking change
git commit -m "security: untrack local development database from repository"

# 3. (Optional) Purge dev.db from git history using git-filter-repo before making repo public:
# git filter-repo --path prisma/dev.db --invert-paths
```

---

## 6. Remaining External Integrations & Production Blockers

The following items remain strictly blocked until commercial partner contracts and technical integrations are completed:

| # | Remaining Blocker | Required Technical Action | Commercial Owner |
| :- | :--- | :--- | :--- |
| **1** | **Midtrans Payment Gateway** | Implement live Midtrans Snap / Core API, webhook handler (`/api/webhooks/midtrans`), and SHA512 signature verification. | Event Treasurer & Midtrans Merchant Acct |
| **2** | **Live Streaming CDN** | Provision AWS IVS / Cloudflare Stream endpoint, RTMP ingestion, and signed JWT playback authorization. | Broadcast Production Vendor |
| **3** | **Official Logistics Integration** | Connect official courier API (JNE/J&T) for dynamic shipping calculation and automated airway bill generation. | Merch & Logistics Division |
| **4** | **Venue Operations Approval** | Obtain written confirmation from GOR UNY management regarding the exact booth booth floorplan and operational schedule. | Local Organizing Committee |
| **5** | **PPV Pricing & Tiers Approval** | Finalize tier structures with festival organizers before publishing currently drafted tiers (`all-access-championship-pass`, `vip-ringside-stream`). | Festival Director |

---

## 7. Conclusion

Milestone 9A successfully closes all critical commercial loopholes identified in the pre-production truth audit. The codebase is now protected by server-side gates:
- No client can spoof a payment status.
- No live user can invoke payment simulation in production.
- No demo code can grant production live stream access.
- All staging test workflows remain 100% operational for ongoing team QA.
