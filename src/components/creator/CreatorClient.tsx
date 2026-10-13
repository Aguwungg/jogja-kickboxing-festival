"use client";

import React, { useState, useTransition } from "react";
import {
  Video,
  Ticket,
  Camera,
  Newspaper,
  ShieldCheck,
  Send,
  UserCheck,
} from "lucide-react";
import Link from "next/link";

interface CreatorItem {
  id: string;
  name: string | null;
  category: string | null;
  instagram: string | null;
  tiktok: string | null;
  youtube: string | null;
  bio: string | null;
  status: string;
  totalPoints: number;
  submissions: { id: string; status: string; points: number }[];
  barcodeClaims: { id: string; status: string }[];
}

interface CreatorClientProps {
  creators: CreatorItem[];
  allCreatorsForSelect: { id: string; name: string | null; instagram: string | null; tiktok: string | null }[];
  registerCreatorAction: (formData: FormData) => Promise<{ success: boolean; message: string }>;
  submitContentAction: (formData: FormData) => Promise<{ success: boolean; message: string }>;
  claimBarcodeAction: (formData: FormData) => Promise<{ success: boolean; message: string }>;
  applyAccreditationAction: (formData: FormData) => Promise<{ success: boolean; message: string }>;
}

export default function CreatorClient({
  creators,
  allCreatorsForSelect,
  registerCreatorAction,
  submitContentAction,
  claimBarcodeAction,
  applyAccreditationAction,
}: CreatorClientProps) {
  const [activeFormTab, setActiveFormTab] = useState<"creator" | "media">("creator");
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFeedback(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    startTransition(async () => {
      const res = await registerCreatorAction(formData);
      if (res.success) {
        setFeedback({ type: "success", text: res.message });
        form.reset();
      } else {
        setFeedback({ type: "error", text: res.message });
      }
    });
  };

  const handleMediaApply = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFeedback(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    startTransition(async () => {
      const res = await applyAccreditationAction(formData);
      if (res.success) {
        setFeedback({ type: "success", text: res.message });
        form.reset();
      } else {
        setFeedback({ type: "error", text: res.message });
      }
    });
  };

  return (
    <div className="w-full space-y-16 font-sans">
      
      {/* 3 Step Guidance */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-[#141416] border border-white/10 space-y-3">
          <span className="text-[10px] text-[#D91F2C] font-mono tracking-widest uppercase block">LANGKAH 01</span>
          <h3 className="font-display font-black text-xl text-[#F4F0E8] uppercase" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
            DAFTAR KREATOR / MEDIA
          </h3>
          <p className="text-xs text-[#8F8E8B] leading-relaxed">
            Isi formulir pendaftaran resmi dengan menyertakan tautan profil media sosial aktif atau portofolio peliputan olahraga/musik.
          </p>
        </div>

        <div className="p-6 bg-[#141416] border border-white/10 space-y-3">
          <span className="text-[10px] text-[#D91F2C] font-mono tracking-widest uppercase block">LANGKAH 02</span>
          <h3 className="font-display font-black text-xl text-[#F4F0E8] uppercase" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
            KURASI & MEDIA PASS
          </h3>
          <p className="text-xs text-[#8F8E8B] leading-relaxed">
            Tim media festival akan memvalidasi data pendaftaran. Kreator terpilih mendapatkan Media Pass dan area liputan khusus di GOR UNY.
          </p>
        </div>

        <div className="p-6 bg-[#141416] border border-white/10 space-y-3">
          <span className="text-[10px] text-[#D91F2C] font-mono tracking-widest uppercase block">LANGKAH 03</span>
          <h3 className="font-display font-black text-xl text-[#F4F0E8] uppercase" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
            SUBMISI KONTEN & POIN
          </h3>
          <p className="text-xs text-[#8F8E8B] leading-relaxed">
            Unggah tautan video reels/TikTok/YouTube setelah festival berlangsung untuk akumulasi poin di leaderboard kreator resmi.
          </p>
        </div>
      </div>

      {/* Registration & Accreditation Form Box */}
      <div className="bg-[#141416] border border-white/10 p-8 sm:p-10 max-w-3xl mx-auto space-y-8">
        
        {/* Tab Switcher */}
        <div className="flex border-b border-white/10 pb-4 gap-4">
          <button
            type="button"
            onClick={() => { setActiveFormTab("creator"); setFeedback(null); }}
            className={`text-xs font-display font-extrabold uppercase tracking-wider pb-2 border-b-2 transition-colors ${
              activeFormTab === "creator"
                ? "border-[#D91F2C] text-[#F4F0E8]"
                : "border-transparent text-[#8F8E8B] hover:text-[#F4F0E8]"
            }`}
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            REGISTRASI KREATOR KONTEN
          </button>
          <button
            type="button"
            onClick={() => { setActiveFormTab("media"); setFeedback(null); }}
            className={`text-xs font-display font-extrabold uppercase tracking-wider pb-2 border-b-2 transition-colors ${
              activeFormTab === "media"
                ? "border-[#D91F2C] text-[#F4F0E8]"
                : "border-transparent text-[#8F8E8B] hover:text-[#F4F0E8]"
            }`}
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            AKREDITASI MEDIA PERS
          </button>
        </div>

        {/* Feedback Alert */}
        {feedback && (
          <div
            className={`p-4 text-xs font-mono border ${
              feedback.type === "success"
                ? "bg-green-950/40 border-green-500/30 text-green-300"
                : "bg-red-950/40 border-red-500/30 text-red-300"
            }`}
          >
            {feedback.text}
          </div>
        )}

        {/* Creator Form */}
        {activeFormTab === "creator" ? (
          <form onSubmit={handleRegister} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-mono uppercase tracking-widest text-[#8F8E8B] block">NAMA LENGKAP</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Nama Lengkap / Alias"
                  className="w-full bg-[#0B0B0B] border border-white/10 px-3.5 py-2.5 text-xs text-[#F4F0E8] placeholder-[#5A5957] focus:outline-none focus:border-[#D91F2C]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-mono uppercase tracking-widest text-[#8F8E8B] block">KATEGORI KONTEN</label>
                <select
                  name="category"
                  className="w-full bg-[#0B0B0B] border border-white/10 px-3.5 py-2.5 text-xs text-[#F4F0E8] focus:outline-none focus:border-[#D91F2C]"
                >
                  <option value="SPORTS">Olahraga & Combat</option>
                  <option value="LIFESTYLE">Lifestyle & Pemuda</option>
                  <option value="MUSIC">Musik & Entertainment</option>
                  <option value="PHOTO">Fotografi / Sinematografi</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-mono uppercase tracking-widest text-[#8F8E8B] block">INSTAGRAM (HANDLE)</label>
                <input
                  type="text"
                  name="instagram"
                  placeholder="@username"
                  className="w-full bg-[#0B0B0B] border border-white/10 px-3.5 py-2.5 text-xs text-[#F4F0E8] placeholder-[#5A5957] focus:outline-none focus:border-[#D91F2C]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-mono uppercase tracking-widest text-[#8F8E8B] block">TIKTOK (HANDLE)</label>
                <input
                  type="text"
                  name="tiktok"
                  placeholder="@username"
                  className="w-full bg-[#0B0B0B] border border-white/10 px-3.5 py-2.5 text-xs text-[#F4F0E8] placeholder-[#5A5957] focus:outline-none focus:border-[#D91F2C]"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-mono uppercase tracking-widest text-[#8F8E8B] block">RENCANA LIPUTAN / BIO SINGKAT</label>
              <textarea
                name="bio"
                rows={3}
                placeholder="Ceritakan rencana liputan dan konten yang akan Anda buat di JKBF 2026..."
                className="w-full bg-[#0B0B0B] border border-white/10 p-3 text-xs text-[#F4F0E8] placeholder-[#5A5957] focus:outline-none focus:border-[#D91F2C]"
              />
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="v9-btn-red text-xs font-display font-black tracking-wider w-full py-3"
            >
              <span>{isPending ? "MEMPROSES PENDAFTARAN..." : "KIRIM PENDAFTARAN KREATOR"}</span>
              <span>↗</span>
            </button>
          </form>
        ) : (
          <form onSubmit={handleMediaApply} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-mono uppercase tracking-widest text-[#8F8E8B] block">NAMA JURNALIS / FOTOGRAFER</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Nama Lengkap"
                  className="w-full bg-[#0B0B0B] border border-white/10 px-3.5 py-2.5 text-xs text-[#F4F0E8] placeholder-[#5A5957] focus:outline-none focus:border-[#D91F2C]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-mono uppercase tracking-widest text-[#8F8E8B] block">NAMA MEDIA / KANAL BERITA</label>
                <input
                  type="text"
                  name="mediaOutlet"
                  required
                  placeholder="Nama Kantor Berita / Media"
                  className="w-full bg-[#0B0B0B] border border-white/10 px-3.5 py-2.5 text-xs text-[#F4F0E8] placeholder-[#5A5957] focus:outline-none focus:border-[#D91F2C]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-mono uppercase tracking-widest text-[#8F8E8B] block">EMAIL REDAKSI</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="redaksi@media.com"
                  className="w-full bg-[#0B0B0B] border border-white/10 px-3.5 py-2.5 text-xs text-[#F4F0E8] placeholder-[#5A5957] focus:outline-none focus:border-[#D91F2C]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-mono uppercase tracking-widest text-[#8F8E8B] block">NOMOR WHATSAPP</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="0812xxxxxxxx"
                  className="w-full bg-[#0B0B0B] border border-white/10 px-3.5 py-2.5 text-xs text-[#F4F0E8] placeholder-[#5A5957] focus:outline-none focus:border-[#D91F2C]"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="v9-btn-red text-xs font-display font-black tracking-wider w-full py-3"
            >
              <span>{isPending ? "MEMPROSES PENGAJUAN..." : "AJUKAN AKREDITASI PERS"}</span>
              <span>↗</span>
            </button>
          </form>
        )}

      </div>

      {/* Leaderboard Table Preview */}
      <div className="space-y-6">
        <div className="border-b border-white/10 pb-3 flex justify-between items-baseline">
          <div>
            <span className="v9-overline text-[#D91F2C]">PERINGKAT KREATOR</span>
            <h2 className="v9-display-title text-3xl text-[#F4F0E8] mt-1" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
              LEADERBOARD KONTEN RESMI
            </h2>
          </div>
          <Link
            href="/creator/dashboard"
            className="text-xs font-mono text-[#D91F2C] hover:underline uppercase"
          >
            LIHAT SEMUA DETAIL ↗
          </Link>
        </div>

        {creators.length === 0 ? (
          <div className="p-12 text-center bg-[#141416] border border-white/10 text-xs font-mono text-[#8F8E8B]">
            BELUM ADA KREATOR TERAKREDITASI
          </div>
        ) : (
          <div className="border border-white/10 divide-y divide-white/10 bg-[#141416]">
            {creators.map((c, idx) => (
              <div key={c.id} className="p-4 sm:p-5 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-4">
                  <span className="font-bold text-[#D91F2C] w-6">#{idx + 1}</span>
                  <div>
                    <span className="font-bold text-[#F4F0E8] block text-sm">{c.name}</span>
                    <span className="text-[10px] text-[#8F8E8B]">
                      {c.instagram ? `@${c.instagram}` : c.category || "CREATOR"}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-bold text-[#F4F0E8] text-sm">{c.totalPoints} PTS</span>
                  <span className="text-[10px] text-[#8F8E8B] block">{c.submissions.length} SUBMISI</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
