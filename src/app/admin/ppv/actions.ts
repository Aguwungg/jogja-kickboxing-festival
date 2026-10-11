"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function togglePpvProductAction(productId: string, isActive: boolean) {
  try {
    await prisma.pPVProduct.update({
      where: { id: productId },
      data: { isActive },
    });
    revalidatePath("/admin/ppv");
    revalidatePath("/ppv");
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function updateStreamUrlAction(productId: string, streamUrl: string) {
  try {
    await prisma.pPVProduct.update({
      where: { id: productId },
      data: { streamUrl: streamUrl.trim() },
    });
    revalidatePath("/admin/ppv");
    revalidatePath("/ppv/watch");
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function updateEntitlementStatusAction(entitlementId: string, status: string) {
  try {
    await prisma.entitlement.update({
      where: { id: entitlementId },
      data: { status },
    });
    revalidatePath("/admin/ppv");
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
