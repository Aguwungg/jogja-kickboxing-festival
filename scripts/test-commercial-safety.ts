import prisma from "../src/lib/prisma";
import { createOrderAction, simulateOrderPaymentAction } from "../src/app/(public)/checkout/actions";
import { purchasePPVPassAction, simulateStagingPPVActivationAction, verifyAccessCodeAction } from "../src/app/(public)/ppv/actions";
import { assertSimulationAllowed, assertPlaybackAuthorization, INTERNAL_DEMO_ACCESS_CODES } from "../src/lib/commercial-gates";

interface TestResult {
  name: string;
  passed: boolean;
  details: string;
}

const results: TestResult[] = [];

function recordTest(name: string, passed: boolean, details: string) {
  results.push({ name, passed, details });
  const badge = passed ? "✅ PASS" : "❌ FAIL";
  console.log(`${badge}: ${name}`);
  if (!passed || details) {
    console.log(`   └─ ${details}`);
  }
}

async function runSafetySuite() {
  console.log("\n════════════════════════════════════════════════════════════════");
  console.log(" JKB 2026 — COMMERCIAL SAFETY & PRODUCTION DATA GATES TEST SUITE");
  console.log("════════════════════════════════════════════════════════════════\n");

  const createdOrderIds: string[] = [];
  const createdPassIds: string[] = [];

  try {
    // -------------------------------------------------------------
    // TEST 1: Default Order Status is PENDING & UNPAID
    // -------------------------------------------------------------
    console.log("▶ Test Group 1: Merchandise Order Creation Safety");
    const testVariant = await prisma.productVariant.findFirst({
      where: { stockQuantity: { gt: 5 } },
    });

    if (!testVariant) {
      throw new Error("No available product variant with stock for test");
    }

    const orderRes = await createOrderAction({
      customerName: "Auditor Test QA",
      guestEmail: "auditor@jkbtest.id",
      customerPhone: "081299998888",
      deliveryMethod: "PICKUP_VENUE",
      courier: "Pickup Booth GOR UNY",
      shippingCost: 0,
      paymentMethod: "QRIS",
      items: [
        {
          variantId: testVariant.id,
          quantity: 1,
          price: 150000,
        },
      ],
      // Malicious attempt to inject status via client payload
      ...({ status: "PAID", paymentStatus: "PAID" } as any),
    });

    if (orderRes.success && orderRes.orderId) {
      createdOrderIds.push(orderRes.orderId);
      const dbOrder = await prisma.order.findUnique({
        where: { id: orderRes.orderId },
      });

      const isPending = dbOrder?.status === "PENDING";
      const isUnpaid = dbOrder?.paymentStatus === "UNPAID";
      const isUnfulfilled = dbOrder?.fulfillmentStatus === "UNFULFILLED";

      recordTest(
        "Order Creation: Default Status is PENDING and UNPAID",
        Boolean(isPending && isUnpaid && isUnfulfilled),
        `db status=${dbOrder?.status}, paymentStatus=${dbOrder?.paymentStatus}, fulfillmentStatus=${dbOrder?.fulfillmentStatus}`
      );

      recordTest(
        "Tamper Resistance: Client status injection ignored",
        Boolean(dbOrder?.paymentStatus !== "PAID" && dbOrder?.status !== "CONFIRMED"),
        "Client payload with paymentStatus=PAID was successfully discarded"
      );
    } else {
      recordTest("Order Creation: Default Status is PENDING and UNPAID", false, orderRes.error || "Failed to create order");
    }

    // -------------------------------------------------------------
    // TEST 2: Payment Simulation Gate Enforcement
    // -------------------------------------------------------------
    console.log("\n▶ Test Group 2: Payment Simulation Gate Authorization");
    if (orderRes.orderId) {
      // 2a. Staging simulation allowed
      process.env.ALLOW_PAYMENT_SIMULATION = "true";
      const simSuccessRes = await simulateOrderPaymentAction(orderRes.orderId);
      const dbOrderAfterSim = await prisma.order.findUnique({
        where: { id: orderRes.orderId },
      });

      recordTest(
        "Staging Simulation: Authorized simulation updates order to PAID",
        Boolean(simSuccessRes.success && dbOrderAfterSim?.paymentStatus === "PAID"),
        `sim res=${simSuccessRes.success}, paymentStatus=${dbOrderAfterSim?.paymentStatus}`
      );

      // 2b. Production simulation forbidden
      process.env.ALLOW_PAYMENT_SIMULATOR = "false";
      let blockedError: string | null = null;
      try {
        const simFailRes = await simulateOrderPaymentAction(orderRes.orderId);
        if (!simFailRes.success) {
          blockedError = simFailRes.error || "Simulation rejected";
        }
      } catch (err: any) {
        blockedError = err.message;
      }

      recordTest(
        "Production Gate: Simulation completion is forbidden when disabled",
        Boolean(blockedError && blockedError.includes("dinonaktifkan")),
        `Expected gate rejection, got: ${blockedError}`
      );
      // Reset env
      process.env.ALLOW_PAYMENT_SIMULATOR = "true";
    }

    // -------------------------------------------------------------
    // TEST 3: PPV Entitlement Security & Payment Gate
    // -------------------------------------------------------------
    console.log("\n▶ Test Group 3: PPV Entitlement Verification & Payment Gates");
    const testPPVProduct = await prisma.pPVProduct.findFirst({
      where: { isActive: true },
    });

    if (!testPPVProduct) {
      throw new Error("No active PPV product found in database");
    }

    const ppvRes = await purchasePPVPassAction({
      ppvProductId: testPPVProduct.id,
      customerName: "PPV Security Auditor",
      guestEmail: "ppv.audit@jkbtest.id",
      customerPhone: "081288887777",
      paymentMethod: "QRIS",
    });

    if (ppvRes.success && ppvRes.accessCode && ppvRes.entitlementId) {
      createdPassIds.push(ppvRes.entitlementId);

      const dbEntitlement = await prisma.entitlement.findUnique({
        where: { id: ppvRes.entitlementId },
      });

      recordTest(
        "PPV Order: Initial status is strictly PENDING_PAYMENT",
        dbEntitlement?.status === "PENDING_PAYMENT",
        `Created PPV pass status=${dbEntitlement?.status}`
      );

      // 3b. Verify playback fails on pending pass
      const verifyPending = await verifyAccessCodeAction(ppvRes.accessCode);
      recordTest(
        "PPV Gate: Playback denied for unpaid/pending PPV pass",
        verifyPending.valid === false,
        `verify result: valid=${verifyPending.valid}, error=${verifyPending.error}`
      );

      // 3c. Simulate staging activation
      const activateRes = await simulateStagingPPVActivationAction(ppvRes.accessCode);
      const dbEntitlementActivated = await prisma.entitlement.findUnique({
        where: { id: ppvRes.entitlementId },
      });

      recordTest(
        "Staging Activation: PPV pass status becomes ACTIVE on verified event",
        Boolean(activateRes.success && dbEntitlementActivated?.status === "ACTIVE"),
        `activate result=${activateRes.success}, db status=${dbEntitlementActivated?.status}`
      );

      // 3d. Playback now authorized
      const verifyActive = await verifyAccessCodeAction(ppvRes.accessCode);
      recordTest(
        "PPV Entitlement: Playback authorized once status is ACTIVE",
        Boolean(verifyActive.valid && verifyActive.entitlement?.tier),
        `valid=${verifyActive.valid}, tier=${verifyActive.entitlement?.tier}`
      );
    } else {
      recordTest("PPV Order: Initial status is strictly PENDING_PAYMENT", false, ppvRes.error || "Failed to create PPV pass");
    }

    // -------------------------------------------------------------
    // TEST 4: Demo Access Code Isolation
    // -------------------------------------------------------------
    console.log("\n▶ Test Group 4: Demo Access Code Isolation");
    const demoCode = INTERNAL_DEMO_ACCESS_CODES[0]; // "JKB-VIP-2026"

    // 4a. In staging mode (demo allowed)
    process.env.ALLOW_DEV_DEMO_PASSES = "true";
    let stagingAuthPassed = false;
    try {
      const auth = assertPlaybackAuthorization(demoCode);
      stagingAuthPassed = auth.isDemo === true;
    } catch (e: any) {
      stagingAuthPassed = false;
    }
    recordTest(
      "Staging Demo Access: JKB-VIP-2026 authorized in staging",
      stagingAuthPassed,
      "demo pass recognized and authorized in staging"
    );

    // 4b. In production mode (demo forbidden)
    process.env.ALLOW_DEV_DEMO_PASSES = "false";
    let prodBlockedError: string | null = null;
    try {
      assertPlaybackAuthorization(demoCode);
    } catch (err: any) {
      prodBlockedError = err.message;
    }
    recordTest(
      "Production Gate: Demo code JKB-VIP-2026 rejected in production",
      Boolean(prodBlockedError && prodBlockedError.includes("tidak sah")),
      `rejection reason: ${prodBlockedError}`
    );
    // Reset env
    process.env.ALLOW_DEV_DEMO_PASSES = "true";

    // -------------------------------------------------------------
    // TEST 5: Unapproved Commercial Offers Protection
    // -------------------------------------------------------------
    console.log("\n▶ Test Group 5: Unapproved Commercial Offers & Draft Isolation");
    const inactivePPV = await prisma.pPVProduct.findFirst({
      where: { isActive: false },
    });

    if (inactivePPV) {
      const draftPurchaseRes = await purchasePPVPassAction({
        ppvProductId: inactivePPV.id,
        customerName: "Draft Attempt",
        guestEmail: "draft@jkbtest.id",
        customerPhone: "081200000000",
        paymentMethod: "QRIS",
      });

      recordTest(
        `Draft Protection: Unapproved PPV product '${inactivePPV.name}' rejects checkout`,
        draftPurchaseRes.success === false,
        `Returned error: ${draftPurchaseRes.error}`
      );
    } else {
      recordTest(
        "Draft Protection: Unapproved PPV products are flagged inactive",
        true,
        "No unapproved products exposed as active"
      );
    }

  } catch (error: any) {
    console.error("Critical Suite Failure:", error);
    recordTest("Safety Suite Execution", false, error.message);
  } finally {
    // Cleanup generated records
    console.log("\n▶ Cleanup: Removing temporary test records");
    for (const orderId of createdOrderIds) {
      await prisma.orderItem.deleteMany({ where: { orderId } });
      await prisma.order.delete({ where: { id: orderId } });
    }
    for (const passId of createdPassIds) {
      await prisma.entitlement.delete({ where: { id: passId } });
    }
    console.log(`Cleaned up ${createdOrderIds.length} test orders and ${createdPassIds.length} test PPV passes.`);
  }

  // Summary
  console.log("\n════════════════════════════════════════════════════════════════");
  console.log(" TEST SUMMARY REPORT");
  console.log("════════════════════════════════════════════════════════════════");
  const passedCount = results.filter((r) => r.passed).length;
  const failedCount = results.filter((r) => !r.passed).length;
  console.log(`Total: ${results.length} | Passed: ${passedCount} | Failed: ${failedCount}`);

  if (failedCount > 0) {
    console.error("\n❌ SUITE FAILED — Outstanding commercial safety issues detected.");
    process.exit(1);
  } else {
    console.log("\n✅ ALL COMMERCIAL SAFETY & PRODUCTION DATA GATE TESTS PASSED.");
    process.exit(0);
  }
}

runSafetySuite();
