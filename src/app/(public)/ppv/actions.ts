"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import {
  getGatePolicy,
  assertSimulationAllowed,
  assertPlaybackAuthorization,
  resolveProtectedStreamUrl,
} from "@/lib/commercial-gates";

export interface PurchasePPVInput {
  ppvProductId: string;
  customerName: string;
  guestEmail: string;
  customerPhone: string;
  paymentMethod: string;
}

/**
 * Initiates a PPV ticket purchase.
 * Strict Security: Default entitlement status is PENDING_PAYMENT.
 * Entitlements are NEVER granted immediately without verified payment.
 */
export async function purchasePPVPassAction(input: PurchasePPVInput) {
  try {
    const policy = getGatePolicy();

    // In production without live gateway or simulation, reject purchase attempt
    if (!policy.isLivePaymentActive && !policy.allowPaymentSimulator) {
      return {
        success: false,
        error: "Pembelian siaran digital publik belum dibuka hingga integrasi gateway pembayaran resmi terverifikasi.",
      };
    }

    if (!input.customerName || !input.guestEmail || !input.customerPhone) {
      return { success: false, error: "Harap lengkapi nama, email, dan nomor WhatsApp." };
    }

    const ppvProduct = await prisma.pPVProduct.findUnique({
      where: { id: input.ppvProductId },
    });

    if (!ppvProduct || !ppvProduct.isActive) {
      return {
        success: false,
        error: "Paket PPV tidak tersedia, berstatus draft, atau ditangguhkan penjualannya.",
      };
    }

    // Generate unique access code e.g. JKB-PPV-892110
    const randomSuffix = Math.floor(100000 + Math.random() * 900000);
    const accessCode = `JKB-PPV-${randomSuffix}`;

    // Create entitlement with default PENDING_PAYMENT status
    const entitlement = await prisma.entitlement.create({
      data: {
        accessCode,
        ppvId: ppvProduct.id,
        customerName: input.customerName,
        guestEmail: input.guestEmail,
        customerPhone: input.customerPhone,
        paymentMethod: input.paymentMethod || "QRIS",
        amountPaid: ppvProduct.price,
        status: "PENDING_PAYMENT", // Strict gate: UNPAID until authorized payment event
        deviceLimit: ppvProduct.tier === "VIP" ? 3 : 2,
      },
    });

    try {
      revalidatePath("/admin/ppv");
      revalidatePath("/ppv");
    } catch {}

    return {
      success: true,
      entitlementId: entitlement.id,
      accessCode: entitlement.accessCode,
      productName: ppvProduct.name,
      amountPaid: ppvProduct.price,
      status: "PENDING_PAYMENT",
      isSimulatorAllowed: policy.allowPaymentSimulator,
    };
  } catch (error: any) {
    console.error("Error creating PPV pass:", error);
    return { success: false, error: error.message || "Gagal memproses inisiasi transaksi PPV." };
  }
}

/**
 * Staging/Dev-only test action to simulate PPV payment confirmation.
 * Protected by assertSimulationAllowed to prevent unauthorized activation.
 */
export async function simulateStagingPPVActivationAction(identifier: string) {
  try {
    assertSimulationAllowed("simulateStagingPPVActivationAction");

    const entitlement = await prisma.entitlement.findFirst({
      where: {
        OR: [{ id: identifier }, { accessCode: identifier }],
      },
      include: { ppvProduct: true },
    });

    if (!entitlement) {
      return { success: false, error: "Entitlement tiket digital tidak ditemukan." };
    }

    const updated = await prisma.entitlement.update({
      where: { id: entitlement.id },
      data: {
        status: "ACTIVE",
      },
    });

    try {
      revalidatePath("/admin/ppv");
      revalidatePath("/ppv");
    } catch {}

    return {
      success: true,
      accessCode: updated.accessCode,
      status: updated.status,
      productName: entitlement.ppvProduct.name,
      watchUrl: `/ppv/watch?code=${updated.accessCode}`,
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.message || "Gagal memproses simulasi aktivasi PPV.",
    };
  }
}

/**
 * Verifies access code server-side and authorizes playback.
 * Enforces production demo code lockout and protected stream URL delivery.
 */
export async function verifyAccessCodeAction(code: string) {
  try {
    if (!code || !code.trim()) {
      return { valid: false, error: "Kode akses belum diisi." };
    }

    const cleanedCode = code.trim().toUpperCase();

    // 1. Enforce environment authorization gates (blocks demo pass in production)
    assertPlaybackAuthorization(cleanedCode);

    const entitlement = await prisma.entitlement.findUnique({
      where: { accessCode: cleanedCode },
      include: {
        ppvProduct: true,
      },
    });

    if (!entitlement) {
      return { valid: false, error: "Kode tiket digital tidak ditemukan di database." };
    }

    // 2. Enforce payment-linked entitlement verification
    if (entitlement.status === "PENDING_PAYMENT") {
      return {
        valid: false,
        error: "Tiket digital ini belum dibayar atau masih menunggu konfirmasi penyelesaian pembayaran.",
      };
    }

    if (entitlement.status !== "ACTIVE") {
      return { valid: false, error: "Tiket streaming ini sudah tidak aktif atau dicabut." };
    }

    // 3. Resolve protected streaming source through gate policy
    const streamResolution = resolveProtectedStreamUrl(entitlement.ppvProduct.streamUrl);

    // 4. Update last watched timestamp
    await prisma.entitlement.update({
      where: { id: entitlement.id },
      data: { lastWatchedAt: new Date() },
    });

    return {
      valid: true,
      entitlement: {
        accessCode: entitlement.accessCode,
        customerName: entitlement.customerName,
        productName: entitlement.ppvProduct.name,
        tier: entitlement.ppvProduct.tier,
        resolution: entitlement.ppvProduct.resolution,
        streamUrl: streamResolution.streamUrl,
        isStagingMock: streamResolution.isStagingMock,
        streamNotice: streamResolution.notice,
      },
    };
  } catch (error: any) {
    return { valid: false, error: error.message || "Gagal memverifikasi kode akses." };
  }
}
