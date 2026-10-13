"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { verifyAdminAction } from "@/lib/auth-guard";

export async function updateVariantStockAction(variantId: string, stockQuantity: number) {
  try {
    await verifyAdminAction();
    await prisma.productVariant.update({
      where: { id: variantId },
      data: { stockQuantity: Math.max(0, stockQuantity) },
    });
    revalidatePath("/admin/merch");
    revalidatePath("/merch");
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function toggleProductActiveAction(productId: string, isActive: boolean) {
  try {
    await verifyAdminAction();
    await prisma.product.update({
      where: { id: productId },
      data: { isActive },
    });
    revalidatePath("/admin/merch");
    revalidatePath("/merch");
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function updateOrderStatusAction(
  orderId: string,
  paymentStatus: string,
  fulfillmentStatus: string,
  trackingNumber?: string
) {
  try {
    await verifyAdminAction();
    await prisma.order.update({
      where: { id: orderId },
      data: {
        paymentStatus,
        fulfillmentStatus,
        trackingNumber: trackingNumber || null,
      },
    });
    revalidatePath("/admin/merch");
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

