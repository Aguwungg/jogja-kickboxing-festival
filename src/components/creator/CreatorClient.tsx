"use client";

import React, { useState, useTransition } from "react";
import { ArrowUpRight, CheckCircle2, AlertCircle } from "lucide-react";

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
  const [activeTab, setActiveTab] = useState<"creator" | "media">("creator");
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
      
      {/* 3 Step Editorial Progression */}
      <div className="border-t border-b border-white/10 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-2">
          <span className="text-[#D91F2C] font-mono text-sm font-bold">01 PILIHAN</span>
          <h3
            className="text-2xl font-black uppercase text-white"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            PILIH JALUR ANDA
          </h3>
          <p className="text-xs sm:text-sm text-[#8F8E8B] leading-relaxed">
            Daftar sebagai Kreator Konten Digital atau ajukan Akreditasi Media Pers resmi liputan arena.
          </p>
        </div>

        <div className="space-y-2 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
          <span className="text-[#D91F2C] font-mono text-sm font-bold">02 DAFTAR</span>
          <h3
            className="text-2xl font-black uppercase text-white"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            LENGKAPI DATA RESMI
          </h3>
          <p className="text-xs sm:text-sm text-[#8F8E8B] leading-relaxed">
            Masukkan portofolio dan akun media sosial aktif untuk verifikasi komite festival.
          </p>
        </div>

        <div className="space-y-2 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
          <span className="text-[#D91F2C] font-mono text-sm font-bold">03 DUKUNGAN</span>
          <h3
            className="text-2xl font-black uppercase text-white"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            AKSES DAN BENEFIT
          </h3>
          <p className="text-xs sm:text-sm text-[#8F8E8B] leading-relaxed">
            Kreator dan jurnalis terverifikasi memperoleh ID pass arena, akses media center, dan hak peliputan.
          </p>
        </div>
      </div>

      {/* Mode Switcher */}
      <div className="space-y-8">
        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
          <button
            type="button"
            onClick={() => {
              setActiveTab("creator");
              setFeedback(null);
            }}
            className={`px-5 py-2.5 text-xs sm:text-sm font-display font-black uppercase tracking-wider transition-colors ${
              activeTab === "creator"
                ? "bg-[#D91F2C] text-white"
                : "text-[#8F8E8B] hover:text-white"
            }`}
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            REGISTRASI KREATOR KONTEN
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab("media");
              setFeedback(null);
            }}
            className={`px-5 py-2.5 text-xs sm:text-sm font-display font-black uppercase tracking-wider transition-colors ${
              activeTab === "media"
                ? "bg-[#D91F2C] text-white"
                : "text-[#8F8E8B] hover:text-white"
            }`}
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            AKREDITASI MEDIA PERS
          </button>
        </div>

        {/* Feedback Alert */}
        {feedback && (
          <div
            className={`p-4 text-xs font-mono flex items-center gap-2 ${
              feedback.type === "success"
                ? "bg-emerald-950/40 border border-emerald-500/30 text-emerald-300"
                : "bg-red-950/40 border border-red-500/30 text-red-300"
            }`}
          >
            {feedback.type === "success" ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
            <span>{feedback.text}</span>
          </div>
        )}

        {/* Creator Registration Form */}
        {activeTab === "creator" && (
          <form onSubmit={handleRegister} className="max-w-2xl space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-[11px] font-mono uppercase text-[#8F8E8B] block">Nama Lengkap</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Nama sesuai identitas"
                  className="w-full bg-[#141416] border border-white/10 px-4 py-3 text-sm text-white placeholder-[#5A5957] focus:outline-none focus:border-[#D91F2C]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono uppercase text-[#8F8E8B] block">Email Aktif</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="email@domain.com"
                  className="w-full bg-[#141416] border border-white/10 px-4 py-3 text-sm text-white placeholder-[#5A5957] focus:outline-none focus:border-[#D91F2C]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="space-y-1">
                <label className="text-[11px] font-mono uppercase text-[#8F8E8B] block">Instagram</label>
                <input
                  type="text"
                  name="instagram"
                  placeholder="@username"
                  className="w-full bg-[#141416] border border-white/10 px-4 py-3 text-sm text-white placeholder-[#5A5957] focus:outline-none focus:border-[#D91F2C]"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[11px] font-mono uppercase text-[#8F8E8B] block">TikTok</label>
                <input
                  type="text"
                  name="tiktok"
                  placeholder="@username"
                  className="w-full bg-[#141416] border border-white/10 px-4 py-3 text-sm text-white placeholder-[#5A5957] focus:outline-none focus:border-[#D91F2C]"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[11px] font-mono uppercase text-[#8F8E8B] block">Kategori Konten</label>
                <select
                  name="category"
                  className="w-full bg-[#141416] border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D91F2C]"
                >
                  <option value="COMBAT">Combat Sports / Olahraga</option>
                  <option value="MUSIC">Music & Festival Lifestyle</option>
                  <option value="COMMUNITY">Youth Community & Culture</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-mono uppercase text-[#8F8E8B] block">Deskripsi Portofolio / Bio</label>
              <textarea
                name="bio"
                rows={3}
                placeholder="Jelaskan secara singkat rencana peliputan atau karya yang akan Anda buat..."
                className="w-full bg-[#141416] border border-white/10 px-4 py-3 text-sm text-white placeholder-[#5A5957] focus:outline-none focus:border-[#D91F2C]"
              />
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="font-display font-extrabold text-sm uppercase tracking-wider text-white bg-[#D91F2C] hover:bg-[#B81521] px-8 py-3.5 transition-colors disabled:opacity-50"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              {isPending ? "MEMPROSES PENDAFTARAN..." : "KIRIM PENDAFTARAN KREATOR ↗"}
            </button>
          </form>
        )}

        {/* Media Accreditation Form */}
        {activeTab === "media" && (
          <form onSubmit={handleMediaApply} className="max-w-2xl space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-[11px] font-mono uppercase text-[#8F8E8B] block">Nama Jurnalis / Fotografer</label>
                <input
                  type="text"
                  name="applicantName"
                  required
                  placeholder="Nama sesuai kartu pers"
                  className="w-full bg-[#141416] border border-white/10 px-4 py-3 text-sm text-white placeholder-[#5A5957] focus:outline-none focus:border-[#D91F2C]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono uppercase text-[#8F8E8B] block">Nama Media / Redaksi</label>
                <input
                  type="text"
                  name="mediaOutlet"
                  required
                  placeholder="Kantor redaksi / media pers"
                  className="w-full bg-[#141416] border border-white/10 px-4 py-3 text-sm text-white placeholder-[#5A5957] focus:outline-none focus:border-[#D91F2C]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-[11px] font-mono uppercase text-[#8F8E8B] block">Email Resmi Redaksi</label>
                <input
                  type="email"
                  name="applicantEmail"
                  required
                  placeholder="jurnalis@media.co.id"
                  className="w-full bg-[#141416] border border-white/10 px-4 py-3 text-sm text-white placeholder-[#5A5957] focus:outline-none focus:border-[#D91F2C]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono uppercase text-[#8F8E8B] block">Nomor WhatsApp / Kontak</label>
                <input
                  type="text"
                  name="applicantPhone"
                  required
                  placeholder="08xxxxxxxxxx"
                  className="w-full bg-[#141416] border border-white/10 px-4 py-3 text-sm text-white placeholder-[#5A5957] focus:outline-none focus:border-[#D91F2C]"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-mono uppercase text-[#8F8E8B] block">Tautan Penugasan Liputan / Portofolio</label>
              <input
                type="url"
                name="coveragePlanUrl"
                placeholder="https://drive.google.com/... atau tautan artikel liputan"
                className="w-full bg-[#141416] border border-white/10 px-4 py-3 text-sm text-white placeholder-[#5A5957] focus:outline-none focus:border-[#D91F2C]"
              />
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="font-display font-extrabold text-sm uppercase tracking-wider text-white bg-[#D91F2C] hover:bg-[#B81521] px-8 py-3.5 transition-colors disabled:opacity-50"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              {isPending ? "MEMPROSES PENGAJUAN..." : "AJUKAN AKREDITASI PERS ↗"}
            </button>
          </form>
        )}
      </div>

    </div>
  );
}
