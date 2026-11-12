import React from "react";
import Link from "next/link";
import { ArrowUpRight, Shield } from "lucide-react";
import prisma from "@/lib/prisma";
import { requireAdminSession } from "@/lib/auth-guard";
import {
  CURATED_WHATS_NEW_ITEMS,
  normalizeCategory,
  normalizeContentType,
  normalizeStatus,
  type WhatsNewItem,
} from "@/lib/whats-new";
import AdminWhatsNewClient from "@/components/admin/AdminWhatsNewClient";

export const dynamic = "force-dynamic";

export default async function AdminWhatsNewPage() {
  await requireAdminSession();

  let items: WhatsNewItem[] = CURATED_WHATS_NEW_ITEMS;
  try {
    const rows = await prisma.whatsNewPost.findMany({
      orderBy: [{ priority: "asc" }, { updatedAt: "desc" }],
    });
    if (rows.length > 0) {
      items = rows.map((row) => ({
        id: row.id,
        title: row.title,
        summary: row.summary,
        category: normalizeCategory(row.category),
        contentType: normalizeContentType(row.contentType),
        instagramUrl: row.instagramUrl,
        coverImage: row.coverImage,
        previewVideo: row.previewVideo,
        publishedAt: row.publishedAt,
        priority: row.priority,
        featured: row.featured,
        approved: row.approved,
        status: normalizeStatus(row.status),
        createdAt: row.createdAt.toISOString(),
        updatedAt: row.updatedAt.toISOString(),
      }));
    }
  } catch {
    // Fallback to curated registry
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#EF3340] uppercase tracking-wider mb-1">
            <Shield className="w-4 h-4" />
            <span>SEMI-AUTOMATIC INSTAGRAM WORKFLOW</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white"
            style={{ fontFamily: "var(--font-bebas-neue), sans-serif" }}
          >
            KELOLA WHAT&apos;S NEW (INSTAGRAM)
          </h1>
          <p className="text-xs sm:text-sm text-[#9A9AA2] mt-1">
            Kurasi postingan Carousel, Image Post, dan Reel Instagram @jogjakickboxingfestival. Hanya item berstatus <strong>approved + published + URL valid</strong> yang tampil di website publik.
          </p>
        </div>

        <Link
          href="/whats-new"
          target="_blank"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/15 rounded-sm text-xs font-bold uppercase tracking-wider text-white self-start sm:self-auto"
        >
          <span>Lihat Halaman Publik</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      <AdminWhatsNewClient initialItems={items} />
    </div>
  );
}

