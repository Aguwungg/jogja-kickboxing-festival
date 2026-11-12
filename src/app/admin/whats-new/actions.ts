"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";
import { verifyAdminAction } from "@/lib/auth-guard";
import {
  isVerifiedInstagramPostUrl,
  normalizeCategory,
  normalizeContentType,
  normalizeStatus,
} from "@/lib/whats-new";

export interface WhatsNewMutationInput {
  id?: string;
  title: string;
  summary: string;
  category: string;
  contentType: string;
  instagramUrl: string;
  coverImage: string;
  previewVideo: string;
  publishedAt: string;
  priority: number;
  featured: boolean;
  approved: boolean;
  status: string;
}

export interface ActionResult {
  ok: boolean;
  error?: string;
}

export async function upsertWhatsNewPostAction(
  input: WhatsNewMutationInput
): Promise<ActionResult> {
  await verifyAdminAction();

  const title = input.title.trim();
  const summary = input.summary.trim();
  const instagramUrl = input.instagramUrl.trim();
  const coverImage = input.coverImage.trim();
  const previewVideo = input.previewVideo.trim();
  const publishedAt = input.publishedAt.trim();
  const category = normalizeCategory(input.category);
  const contentType = normalizeContentType(input.contentType);
  const status = normalizeStatus(input.status);
  const priority = Number.isFinite(Number(input.priority))
    ? Math.max(1, Math.min(999, Number(input.priority)))
    : 10;

  if (!title || !summary || !coverImage) {
    return {
      ok: false,
      error: "Judul, ringkasan, dan path cover image wajib diisi.",
    };
  }

  if (input.approved && status === "published" && !isVerifiedInstagramPostUrl(instagramUrl)) {
    return {
      ok: false,
      error:
        "Untuk mempublikasikan item ke What's New, wajib mengisi URL postingan/reel Instagram yang valid (https://www.instagram.com/p/... atau /reel/...).",
    };
  }

  try {
    const payload = {
      title,
      summary,
      category,
      contentType,
      instagramUrl,
      coverImage,
      previewVideo,
      publishedAt,
      priority,
      featured: Boolean(input.featured),
      approved: Boolean(input.approved),
      status,
    };

    if (input.id) {
      await prisma.whatsNewPost.upsert({
        where: { id: input.id },
        update: payload,
        create: { id: input.id, ...payload },
      });
    } else {
      await prisma.whatsNewPost.create({ data: payload });
    }

    revalidatePath("/");
    revalidatePath("/whats-new");
    revalidatePath("/admin/whats-new");
    return { ok: true };
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    if (msg.toLowerCase().includes("readonly")) {
      return {
        ok: false,
        error:
          "Database deployment berjalan dalam mode read-only. Perbarui `src/lib/whats-new.ts` atau hubungkan database persisten.",
      };
    }
    return { ok: false, error: `Gagal menyimpan item: ${msg}` };
  }
}

export async function updateWhatsNewPublishStateAction(
  id: string,
  approved: boolean,
  status: string
): Promise<ActionResult> {
  await verifyAdminAction();

  const normalizedStatus = normalizeStatus(status);

  try {
    const existing = await prisma.whatsNewPost.findUnique({ where: { id } });
    if (!existing) {
      return { ok: false, error: "Item tidak ditemukan di database." };
    }

    if (
      approved &&
      normalizedStatus === "published" &&
      !isVerifiedInstagramPostUrl(existing.instagramUrl)
    ) {
      return {
        ok: false,
        error:
          "Tidak bisa publish: lengkapi URL asli Instagram (/p/... atau /reel/...) terlebih dahulu.",
      };
    }

    await prisma.whatsNewPost.update({
      where: { id },
      data: { approved, status: normalizedStatus },
    });

    revalidatePath("/");
    revalidatePath("/whats-new");
    revalidatePath("/admin/whats-new");
    return { ok: true };
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return { ok: false, error: `Gagal memperbarui status: ${msg}` };
  }
}

export async function deleteWhatsNewPostAction(
  id: string
): Promise<ActionResult> {
  await verifyAdminAction();

  try {
    await prisma.whatsNewPost.delete({ where: { id } });
    revalidatePath("/");
    revalidatePath("/whats-new");
    revalidatePath("/admin/whats-new");
    return { ok: true };
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return { ok: false, error: `Gagal menghapus item: ${msg}` };
  }
}

