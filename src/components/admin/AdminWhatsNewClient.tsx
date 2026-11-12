"use client";

import React, { useState, useTransition } from "react";
import {
  CheckCircle2,
  ExternalLink,
  Film,
  Layers,
  Image as ImageIcon,
  Pencil,
  Plus,
  Sparkles,
  Trash2,
  AlertCircle,
} from "lucide-react";
import {
  WHATS_NEW_CATEGORIES,
  isVerifiedInstagramPostUrl,
  type WhatsNewItem,
} from "@/lib/whats-new";
import {
  deleteWhatsNewPostAction,
  updateWhatsNewPublishStateAction,
  upsertWhatsNewPostAction,
} from "@/app/admin/whats-new/actions";

const APPROVED_COVER_PRESETS = [
  {
    label: "Ring Fight Action (Desktop Clean)",
    path: "/images/v9/04_FOTO_FIGHT_DESKTOP_TANPA_TEKST.png",
  },
  {
    label: "Ring Action (Portrait Clean)",
    path: "/images/v9/05_FOTO_FIGHT_MOBILE_TANPA_TEKST.png",
  },
  {
    label: "Sparring / Mitt Work",
    path: "/images/jkb/hero-concert.jpg",
  },
  {
    label: "Walkout Menuju Ring",
    path: "/images/jkb/boxing-ring.jpg",
  },
  {
    label: "Sarung Tinju Kanvas",
    path: "/images/event/boxing-gloves.jpg",
  },
  {
    label: "Sabuk Juara",
    path: "/images/championship/belt-hero.jpg",
  },
  {
    label: "Poster Resmi JKBF 2026",
    path: "/images/jkbf-brand-poster.png",
  },
];

interface AdminWhatsNewClientProps {
  initialItems: WhatsNewItem[];
}

const EMPTY_FORM = {
  id: "",
  title: "",
  summary: "",
  category: "SMA OPEN",
  contentType: "image",
  instagramUrl: "",
  coverImage: "/images/v9/04_FOTO_FIGHT_DESKTOP_TANPA_TEKST.png",
  previewVideo: "",
  publishedAt: "",
  priority: 10,
  featured: false,
  approved: false,
  status: "pending",
};

export default function AdminWhatsNewClient({
  initialItems,
}: AdminWhatsNewClientProps) {
  const [items, setItems] = useState<WhatsNewItem[]>(initialItems);
  const [form, setForm] = useState(EMPTY_FORM);
  const [isEditing, setIsEditing] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleEdit = (item: WhatsNewItem) => {
    setForm({
      id: item.id,
      title: item.title,
      summary: item.summary,
      category: item.category,
      contentType: item.contentType,
      instagramUrl: item.instagramUrl,
      coverImage: item.coverImage,
      previewVideo: item.previewVideo,
      publishedAt: item.publishedAt,
      priority: item.priority,
      featured: item.featured,
      approved: item.approved,
      status: item.status,
    });
    setIsEditing(true);
    setFeedback(null);
  };

  const handleReset = () => {
    setForm(EMPTY_FORM);
    setIsEditing(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback(null);

    startTransition(async () => {
      const res = await upsertWhatsNewPostAction({
        ...form,
        id: form.id || undefined,
      });

      if (!res.ok) {
        setFeedback({ type: "error", text: res.error || "Terjadi kesalahan." });
        return;
      }

      setFeedback({
        type: "success",
        text: isEditing
          ? "Item What's New berhasil diperbarui."
          : "Item What's New baru berhasil ditambahkan.",
      });
      handleReset();
      window.location.reload();
    });
  };

  const handlePublishToggle = (
    item: WhatsNewItem,
    nextApproved: boolean,
    nextStatus: string
  ) => {
    setFeedback(null);
    startTransition(async () => {
      const res = await updateWhatsNewPublishStateAction(
        item.id,
        nextApproved,
        nextStatus
      );
      if (!res.ok) {
        setFeedback({ type: "error", text: res.error || "Gagal mengubah status." });
        return;
      }
      setItems((prev) =>
        prev.map((p) =>
          p.id === item.id
            ? {
                ...p,
                approved: nextApproved,
                status: nextStatus as WhatsNewItem["status"],
              }
            : p
        )
      );
      setFeedback({
        type: "success",
        text: `Status "${item.title}" diperbarui menjadi ${nextStatus.toUpperCase()}.`,
      });
    });
  };

  const handleDelete = (item: WhatsNewItem) => {
    if (!window.confirm(`Hapus item "${item.title}" dari database?`)) return;
    setFeedback(null);
    startTransition(async () => {
      const res = await deleteWhatsNewPostAction(item.id);
      if (!res.ok) {
        setFeedback({ type: "error", text: res.error || "Gagal menghapus." });
        return;
      }
      setItems((prev) => prev.filter((p) => p.id !== item.id));
      setFeedback({ type: "success", text: `"${item.title}" berhasil dihapus.` });
    });
  };

  const urlValid = isVerifiedInstagramPostUrl(form.instagramUrl);

  return (
    <div className="space-y-8">
      {feedback && (
        <div
          role={feedback.type === "error" ? "alert" : "status"}
          className={`p-4 rounded-sm border text-xs flex items-center gap-2.5 ${
            feedback.type === "error"
              ? "bg-red-500/10 border-red-500/40 text-red-300"
              : "bg-emerald-500/10 border-emerald-500/40 text-emerald-300"
          }`}
        >
          {feedback.type === "error" ? (
            <AlertCircle className="w-4 h-4 shrink-0" />
          ) : (
            <CheckCircle2 className="w-4 h-4 shrink-0" />
          )}
          <span>{feedback.text}</span>
        </div>
      )}

      {/* Semi-Automatic Curation Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-[#171719] border border-white/10 rounded-sm p-6 space-y-5"
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            {isEditing ? (
              <Pencil className="w-4 h-4 text-[#EF3340]" />
            ) : (
              <Plus className="w-4 h-4 text-[#EF3340]" />
            )}
            <h2 className="font-bold text-sm uppercase tracking-wider text-white">
              {isEditing
                ? "Edit Item What's New"
                : "Tambah Konten Instagram Terkurasi"}
            </h2>
          </div>
          {isEditing && (
            <button
              type="button"
              onClick={handleReset}
              className="text-xs text-[#9A9AA2] hover:text-white underline"
            >
              Batal Edit
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label
              htmlFor="wn-title"
              className="text-xs font-bold uppercase tracking-wider text-white/80 block"
            >
              Judul Konten *
            </label>
            <input
              id="wn-title"
              type="text"
              required
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="Contoh: ANAK SMA JOGJA, BERANI NAIK RING?"
              className="w-full bg-[#09090B] border border-white/15 rounded-sm px-3.5 py-2.5 text-sm text-white"
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="wn-url"
              className="text-xs font-bold uppercase tracking-wider text-white/80 block"
            >
              URL Asli Postingan / Reel Instagram
            </label>
            <input
              id="wn-url"
              type="url"
              value={form.instagramUrl}
              onChange={(e) =>
                setForm({ ...form, instagramUrl: e.target.value })
              }
              placeholder="https://www.instagram.com/reel/... atau /p/..."
              className="w-full bg-[#09090B] border border-white/15 rounded-sm px-3.5 py-2.5 text-sm text-white font-mono"
            />
            <span className="text-[11px] text-[#9A9AA2] block">
              {form.instagramUrl
                ? urlValid
                  ? "Format permalink Instagram valid (/p/... atau /reel/...)."
                  : "Harus berupa permalink spesifik /p/... atau /reel/..."
                : "Kosongkan hanya untuk item status PENDING / DRAFT."}
            </span>
          </div>
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="wn-summary"
            className="text-xs font-bold uppercase tracking-wider text-white/80 block"
          >
            Ringkasan Faktual *
          </label>
          <textarea
            id="wn-summary"
            rows={2}
            required
            value={form.summary}
            onChange={(e) => setForm({ ...form, summary: e.target.value })}
            placeholder="Ringkasan singkat sesuai caption asli Instagram tanpa mengarang detail baru."
            className="w-full bg-[#09090B] border border-white/15 rounded-sm px-3.5 py-2.5 text-sm text-white"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-1.5">
            <label
              htmlFor="wn-type"
              className="text-xs font-bold uppercase tracking-wider text-white/80 block"
            >
              Tipe Konten
            </label>
            <select
              id="wn-type"
              value={form.contentType}
              onChange={(e) =>
                setForm({ ...form, contentType: e.target.value })
              }
              className="w-full bg-[#09090B] border border-white/15 rounded-sm px-3 py-2.5 text-sm text-white"
            >
              <option value="reel">Reel (Video 3–5s)</option>
              <option value="carousel">Carousel (Multi-Slide)</option>
              <option value="image">Image Post</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="wn-cat"
              className="text-xs font-bold uppercase tracking-wider text-white/80 block"
            >
              Kategori
            </label>
            <select
              id="wn-cat"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="w-full bg-[#09090B] border border-white/15 rounded-sm px-3 py-2.5 text-sm text-white"
            >
              {WHATS_NEW_CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="wn-date"
              className="text-xs font-bold uppercase tracking-wider text-white/80 block"
            >
              Tanggal Post IG (YYYY-MM-DD)
            </label>
            <input
              id="wn-date"
              type="text"
              value={form.publishedAt}
              onChange={(e) =>
                setForm({ ...form, publishedAt: e.target.value })
              }
              placeholder="2026-11-10"
              className="w-full bg-[#09090B] border border-white/15 rounded-sm px-3.5 py-2.5 text-sm text-white font-mono"
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="wn-priority"
              className="text-xs font-bold uppercase tracking-wider text-white/80 block"
            >
              Prioritas Urutan (1 = Atas)
            </label>
            <input
              id="wn-priority"
              type="number"
              min={1}
              max={999}
              value={form.priority}
              onChange={(e) =>
                setForm({ ...form, priority: Number(e.target.value) || 10 })
              }
              className="w-full bg-[#09090B] border border-white/15 rounded-sm px-3.5 py-2.5 text-sm text-white font-mono"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label
              htmlFor="wn-cover"
              className="text-xs font-bold uppercase tracking-wider text-white/80 block"
            >
              Path Cover Image (/images/...) *
            </label>
            <input
              id="wn-cover"
              type="text"
              required
              value={form.coverImage}
              onChange={(e) => setForm({ ...form, coverImage: e.target.value })}
              className="w-full bg-[#09090B] border border-white/15 rounded-sm px-3.5 py-2.5 text-sm text-white font-mono"
            />
            <div className="flex flex-wrap gap-1.5 pt-1">
              {APPROVED_COVER_PRESETS.map((p) => (
                <button
                  key={p.path}
                  type="button"
                  onClick={() => setForm({ ...form, coverImage: p.path })}
                  className="text-[10px] px-2 py-0.5 rounded-sm bg-white/5 hover:bg-white/15 text-[#C4C4CC] border border-white/10"
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="wn-video"
              className="text-xs font-bold uppercase tracking-wider text-white/80 block"
            >
              Path Video Preview 3–5s MP4 (Khusus Reel)
            </label>
            <input
              id="wn-video"
              type="text"
              value={form.previewVideo}
              onChange={(e) =>
                setForm({ ...form, previewVideo: e.target.value })
              }
              placeholder="/media/reels/sma-open-preview.mp4 (kosong = poster fallback)"
              className="w-full bg-[#09090B] border border-white/15 rounded-sm px-3.5 py-2.5 text-sm text-white font-mono"
            />
            <span className="text-[11px] text-[#9A9AA2] block">
              Gunakan <code>scripts/prepare-reel-preview.sh</code> untuk memotong 4 detik pertama dari file video resmi.
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-white/10">
          <div className="flex flex-wrap items-center gap-5 text-xs">
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={form.featured}
                onChange={(e) =>
                  setForm({ ...form, featured: e.target.checked })
                }
                className="accent-[#D91F2C]"
              />
              <span>Featured Spotlight</span>
            </label>

            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={form.approved}
                onChange={(e) =>
                  setForm({ ...form, approved: e.target.checked })
                }
                className="accent-[#D91F2C]"
              />
              <span>Disetujui Panitia (Approved)</span>
            </label>

            <div className="inline-flex items-center gap-2">
              <span className="text-[#9A9AA2]">Status:</span>
              <select
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value })}
                className="bg-[#09090B] border border-white/15 rounded-sm px-2.5 py-1 text-xs text-white"
              >
                <option value="draft">draft</option>
                <option value="pending">pending</option>
                <option value="published">published</option>
                <option value="archived">archived</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="px-6 py-2.5 bg-[#D91F2C] hover:bg-[#B81521] disabled:opacity-50 text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors"
          >
            {isPending
              ? "MENYIMPAN..."
              : isEditing
                ? "SIMPAN PERUBAHAN"
                : "TAMBAH ITEM WHAT'S NEW"}
          </button>
        </div>
      </form>

      {/* Existing Items Table / Cards */}
      <div className="space-y-3">
        <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#9A9AA2]">
          Daftar Item What&apos;s New ({items.length})
        </h2>

        <div className="space-y-3">
          {items.map((item) => {
            const TypeBadgeIcon =
              item.contentType === "reel"
                ? Film
                : item.contentType === "carousel"
                  ? Layers
                  : ImageIcon;
            const hasUrl = isVerifiedInstagramPostUrl(item.instagramUrl);
            const isLive =
              item.approved && item.status === "published" && hasUrl;

            return (
              <div
                key={item.id}
                className="bg-[#171719] border border-white/10 p-5 rounded-sm flex flex-col lg:flex-row lg:items-center justify-between gap-4"
              >
                <div className="space-y-1.5 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono uppercase">
                    <span
                      className={`px-2 py-0.5 rounded-sm font-bold ${
                        isLive
                          ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                          : "bg-amber-500/15 text-amber-300 border border-amber-500/30"
                      }`}
                    >
                      {isLive ? "LIVE DI WEBSITE" : `${item.status.toUpperCase()} • BELUM TAYANG`}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-white/5 border border-white/10 text-white rounded-sm">
                      <TypeBadgeIcon className="w-3 h-3" />
                      {item.contentType}
                    </span>
                    <span className="px-2 py-0.5 bg-[#D91F2C]/15 text-[#EF3340] border border-[#D91F2C]/30 rounded-sm font-bold">
                      {item.category}
                    </span>
                    {item.featured && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-400/10 text-amber-300 border border-amber-400/20 rounded-sm">
                        <Sparkles className="w-3 h-3" />
                        FEATURED
                      </span>
                    )}
                    <span className="text-[#9A9AA2]">
                      Prioritas #{item.priority}
                      {item.publishedAt ? ` • Tgl IG: ${item.publishedAt}` : ""}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#9A9AA2] leading-relaxed">
                    {item.summary}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono pt-1">
                    {hasUrl ? (
                      <a
                        href={item.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sky-400 hover:underline"
                      >
                        <ExternalLink className="w-3 h-3" />
                        {item.instagramUrl}
                      </a>
                    ) : (
                      <span className="text-amber-400">
                        URL Instagram asli belum diisi
                      </span>
                    )}
                    {item.contentType === "reel" && (
                      <span className="text-[#9A9AA2]">
                        Video Preview:{" "}
                        {item.previewVideo ? item.previewVideo : "Poster fallback"}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => handleEdit(item)}
                    className="px-3 py-1.5 bg-white/5 hover:bg-white/15 border border-white/10 text-white text-xs font-bold rounded-sm inline-flex items-center gap-1.5"
                  >
                    <Pencil className="w-3.5 h-3.5" />
                    Edit
                  </button>

                  {isLive ? (
                    <button
                      type="button"
                      disabled={isPending}
                      onClick={() =>
                        handlePublishToggle(item, false, "archived")
                      }
                      className="px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-bold rounded-sm"
                    >
                      Arsipkan
                    </button>
                  ) : (
                    <button
                      type="button"
                      disabled={isPending || !hasUrl}
                      title={
                        hasUrl
                          ? "Setujui & tampilkan di What's New"
                          : "Edit dan isi URL Instagram dulu"
                      }
                      onClick={() =>
                        handlePublishToggle(item, true, "published")
                      }
                      className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-white text-xs font-bold rounded-sm"
                    >
                      Approve &amp; Publish
                    </button>
                  )}

                  <button
                    type="button"
                    disabled={isPending}
                    onClick={() => handleDelete(item)}
                    className="p-1.5 bg-red-500/10 hover:bg-red-500/25 border border-red-500/30 text-red-400 rounded-sm"
                    aria-label={`Hapus ${item.title}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

