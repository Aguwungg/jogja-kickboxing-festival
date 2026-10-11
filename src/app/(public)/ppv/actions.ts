"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export interface PurchasePPVInput {
  ppvProductId: string;
  customerName: string;
  guestEmail: string;
  customerPhone: string;
  paymentMethod: string;
}

export async function purchasePPVPassAction(input: PurchasePPVInput) {
  try {
    if (!input.customerName || !input.guestEmail || !input.customerPhone) {
      return { success: false, error: "Harap lengkapi nama, email, dan nomor WhatsApp." };
    }

    const ppvProduct = await prisma.pPVProduct.findUnique({
      where: { id: input.ppvProductId },
    });

    if (!ppvProduct || !ppvProduct.isActive) {
      return { success: false, error: "Paket PPV tidak tersedia atau sudah ditutup." };
    }

    // Generate unique access code e.g. JKB-PPV-892110
    const randomSuffix = Math.floor(100000 + Math.random() * 900000);
    const accessCode = `JKB-PPV-${randomSuffix}`;

    const entitlement = await prisma.entitlement.create({
      data: {
        accessCode,
        ppvId: ppvProduct.id,
        customerName: input.customerName,
        guestEmail: input.guestEmail,
        customerPhone: input.customerPhone,
        paymentMethod: input.paymentMethod || "QRIS",
        amountPaid: ppvProduct.price,
        status: "ACTIVE",
        deviceLimit: ppvProduct.tier === "VIP" ? 3 : 2,
      },
    });

    revalidatePath("/admin/ppv");
    revalidatePath("/ppv");

    return {
      success: true,
      accessCode: entitlement.accessCode,
      productName: ppvProduct.name,
      amountPaid: ppvProduct.price,
      watchUrl: `/ppv/watch?code=${entitlement.accessCode}`,
    };
  } catch (error: any) {
    console.error("Error purchasing PPV pass:", error);
    return { success: false, error: error.message || "Gagal memproses transaksi PPV." };
  }
}

export async function verifyAccessCodeAction(code: string) {
  try {
    if (!code || !code.trim()) {
      return { valid: false, error: "Kode akses belum diisi." };
    }

    const cleanedCode = code.trim().toUpperCase();

    const entitlement = await prisma.entitlement.findUnique({
      where: { accessCode: cleanedCode },
      include: {
        ppvProduct: true,
      },
    });

    if (!entitlement) {
      return { valid: false, error: "Kode tiket digital tidak ditemukan di database." };
    }

    if (entitlement.status !== "ACTIVE") {
      return { valid: false, error: "Tiket streaming ini sudah tidak aktif atau dicabut." };
    }

    // Update last watched timestamp
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
        streamUrl: entitlement.ppvProduct.streamUrl,
      },
    };
  } catch (error: any) {
    return { valid: false, error: error.message || "Gagal memverifikasi kode akses." };
  }
}
