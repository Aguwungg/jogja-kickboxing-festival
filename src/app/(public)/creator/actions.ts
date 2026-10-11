"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function registerCreatorAction(formData: FormData) {
  try {
    const name = (formData.get("name") as string)?.trim();
    const email = (formData.get("email") as string)?.trim().toLowerCase();
    const tiktok = (formData.get("tiktok") as string)?.trim() || null;
    const instagram = (formData.get("instagram") as string)?.trim() || null;
    const category = (formData.get("category") as string)?.trim() || "COMBAT_SPORT";
    const bio = (formData.get("bio") as string)?.trim() || null;

    if (!name || !email) {
      return { success: false, message: "Nama lengkap dan email wajib diisi." };
    }

    // Upsert User
    const user = await prisma.user.upsert({
      where: { email },
      update: { name, role: "CREATOR" },
      create: { email, name, role: "CREATOR" },
    });

    // Upsert CreatorProfile
    await prisma.creatorProfile.upsert({
      where: { userId: user.id },
      update: {
        name,
        tiktok,
        instagram,
        category,
        bio,
      },
      create: {
        userId: user.id,
        name,
        tiktok,
        instagram,
        category,
        bio,
        status: "PENDING",
        totalPoints: 0,
      },
    });

    revalidatePath("/creator");
    revalidatePath("/admin/creators");
    return {
      success: true,
      message: "Pendaftaran kreator berhasil terkirim! Tim kurator JKB 2026 akan mereview profil Anda.",
    };
  } catch (error) {
    console.error("registerCreatorAction error:", error);
    return { success: false, message: "Terjadi kesalahan saat memproses pendaftaran. Silakan coba lagi." };
  }
}

export async function submitContentAction(formData: FormData) {
  try {
    const creatorId = formData.get("creatorId") as string;
    const platform = (formData.get("platform") as string) || "TIKTOK";
    const title = (formData.get("title") as string)?.trim();
    const url = (formData.get("url") as string)?.trim();

    if (!creatorId || !url || !title) {
      return { success: false, message: "Akun kreator, judul, dan link video wajib diisi." };
    }

    // Basic URL validation
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      return { success: false, message: "Format URL tidak valid. Gunakan awalan https://" };
    }

    await prisma.submission.create({
      data: {
        creatorId,
        platform,
        title,
        url,
        status: "PENDING",
        points: 0,
      },
    });

    revalidatePath("/creator");
    revalidatePath("/creator/dashboard");
    revalidatePath("/admin/creators");
    return {
      success: true,
      message: "Konten berhasil diajukan! Kurator akan memverifikasi keabsahan konten untuk penambahan poin.",
    };
  } catch (error) {
    console.error("submitContentAction error:", error);
    return { success: false, message: "Gagal mengirimkan konten. Silakan periksa kembali data Anda." };
  }
}

export async function claimBarcodeAction(formData: FormData) {
  try {
    const creatorId = formData.get("creatorId") as string;
    const barcode = (formData.get("barcode") as string)?.trim().toUpperCase();

    if (!creatorId || !barcode) {
      return { success: false, message: "Akun kreator dan kode barcode wajib diisi." };
    }

    const existing = await prisma.barcodeClaim.findUnique({
      where: { barcode },
    });

    if (existing) {
      return {
        success: false,
        message: "Kode barcode ini sudah pernah diklaim atau terdaftar di sistem.",
      };
    }

    await prisma.barcodeClaim.create({
      data: {
        creatorId,
        barcode,
        status: "PENDING",
        pointsAwarded: 0,
      },
    });

    revalidatePath("/creator");
    revalidatePath("/creator/dashboard");
    revalidatePath("/admin/creators");
    return {
      success: true,
      message: "Klaim barcode berhasil didaftarkan! Menunggu verifikasi tim ticketing festival.",
    };
  } catch (error) {
    console.error("claimBarcodeAction error:", error);
    return { success: false, message: "Gagal memproses klaim barcode." };
  }
}

export async function applyAccreditationAction(formData: FormData) {
  try {
    const mediaName = (formData.get("mediaName") as string)?.trim();
    const mediaType = (formData.get("mediaType") as string) || "ONLINE_MEDIA";
    const journalistName = (formData.get("journalistName") as string)?.trim();
    const email = (formData.get("email") as string)?.trim().toLowerCase();
    const phone = (formData.get("phone") as string)?.trim();
    const pressCardNumber = (formData.get("pressCardNumber") as string)?.trim() || null;
    const coveragePlan = (formData.get("coveragePlan") as string)?.trim() || null;

    if (!mediaName || !journalistName || !email || !phone) {
      return { success: false, message: "Nama media, nama jurnalis, email, dan no HP wajib diisi." };
    }

    await prisma.mediaAccreditation.create({
      data: {
        mediaName,
        mediaType,
        journalistName,
        email,
        phone,
        pressCardNumber,
        coveragePlan,
        status: "PENDING",
      },
    });

    revalidatePath("/creator");
    revalidatePath("/admin/creators");
    return {
      success: true,
      message: "Permohonan akreditasi media berhasil terkirim! Tim Media Relations JKB 2026 akan mengonfirmasi via email/WA.",
    };
  } catch (error) {
    console.error("applyAccreditationAction error:", error);
    return { success: false, message: "Gagal mengirimkan permohonan akreditasi. Coba lagi beberapa saat." };
  }
}
