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
          <span className="text-[#D91F2C] font-technical text-sm font-bold">01 PILIHAN</span>
          <h3 className="font-display text-3xl uppercase tracking-wider text-white">
            PILIH JALUR ANDA
          </h3>
          <p className="text-xs sm:text-sm text-[#8F8E8B] font-sans leading-relaxed">
            Daftar sebagai Kreator Konten Digital atau ajukan Akreditasi Media Pers resmi liputan arena.
          </p>
        </div>

        <div className="space-y-2 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
          <span className="text-[#D91F2C] font-technical text-sm font-bold">02 DAFTAR</span>
          <h3 className="font-display text-3xl uppercase tracking-wider text-white">
            LENGKAPI DATA RESMI
          </h3>
          <p className="text-xs sm:text-sm text-[#8F8E8B] font-sans leading-relaxed">
            Masukkan portofolio dan akun media sosial aktif untuk verifikasi komite festival.
          </p>
        </div>

        <div className="space-y-2 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
          <span className="text-[#D91F2C] font-technical text-sm font-bold">03 DUKUNGAN</span>
          <h3 className="font-display text-3xl uppercase tracking-wider text-white">
            AKSES & PUBLIKASI
          </h3>
          <p className="text-xs sm:text-sm text-[#8F8E8B] font-sans leading-relaxed">
            Dapatkan tanda pengenal ID Card resmi peliput, aset media kit resmi, dan akses arena turnamen.
          </p>
        </div>
      </div>

      {/* Form Tabs */}
      <div className="space-y-8">
        <div className="flex border-b border-white/10">
          <button
            type="button"
            onClick={() => { setActiveTab("creator"); setFeedback(null); }}
            className={`pb-4 px-6 font-display text-lg tracking-wider uppercase transition-colors relative ${
              activeTab === "creator"
                ? "text-white"
                : "text-[#8F8E8B] hover:text-white"
            }`}
          >
            01. REGISTRASI KREATOR KONTEN
            {activeTab === "creator" && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D91F2C]" />
            )}
          </button>
          <button
            type="button"
            onClick={() => { setActiveTab("media"); setFeedback(null); }}
            className={`pb-4 px-6 font-display text-lg tracking-wider uppercase transition-colors relative ${
              activeTab === "media"
                ? "text-white"
                : "text-[#8F8E8B] hover:text-white"
            }`}
          >
            02. AKREDITASI MEDIA PERS
            {activeTab === "media" && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D91F2C]" />
            )}
          </button>
        </div>

        {/* Feedback Alert */}
        {feedback && (
          <div
            className={`p-4 border text-xs font-technical flex items-center gap-3 ${
              feedback.type === "success"
                ? "bg-emerald-950/40 border-emerald-500/50 text-emerald-400"
                : "bg-red-950/40 border-red-500/50 text-red-400"
            }`}
          >
            {feedback.type === "success" ? (
              <CheckCircle2 className="w-5 h-5 shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 shrink-0" />
            )}
            <span>{feedback.text}</span>
          </div>
        )}

        {/* Tab 1: Creator Form */}
        {activeTab === "creator" && (
          <form onSubmit={handleRegister} className="max-w-2xl space-y-6 bg-[#141416] p-8 border border-white/10 ring-corner-frame">
            <div className="space-y-2">
              <h4 className="font-display text-2xl uppercase tracking-wider text-white">
                FORMULIR KREATOR DIGITAL
              </h4>
              <p className="text-xs text-[#8F8E8B]">
                Khusus videografer, fotografer, podcaster, dan content creator independen.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="font-technical text-[10px] uppercase text-[#8F8E8B] tracking-wider block">
                  Nama Lengkap / Alias *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Satria Wicaksana"
                  className="w-full bg-[#18181B] border border-white/10 px-4 py-2.5 text-xs text-white placeholder:text-[#5A5957] focus:outline-none focus:border-[#D91F2C]"
                />
              </div>

              <div className="space-y-1">
                <label className="font-technical text-[10px] uppercase text-[#8F8E8B] tracking-wider block">
                  Email Aktif *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="kreator@domain.com"
                  className="w-full bg-[#18181B] border border-white/10 px-4 py-2.5 text-xs text-white placeholder:text-[#5A5957] focus:outline-none focus:border-[#D91F2C]"
                />
              </div>

              <div className="space-y-1">
                <label className="font-technical text-[10px] uppercase text-[#8F8E8B] tracking-wider block">
                  Instagram Handle
                </label>
                <input
                  type="text"
                  name="instagram"
                  placeholder="@username"
                  className="w-full bg-[#18181B] border border-white/10 px-4 py-2.5 text-xs text-white placeholder:text-[#5A5957] focus:outline-none focus:border-[#D91F2C]"
                />
              </div>

              <div className="space-y-1">
                <label className="font-technical text-[10px] uppercase text-[#8F8E8B] tracking-wider block">
                  TikTok Handle
                </label>
                <input
                  type="text"
                  name="tiktok"
                  placeholder="@username"
                  className="w-full bg-[#18181B] border border-white/10 px-4 py-2.5 text-xs text-white placeholder:text-[#5A5957] focus:outline-none focus:border-[#D91F2C]"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="font-technical text-[10px] uppercase text-[#8F8E8B] tracking-wider block">
                Link Portofolio / Saluran Utama
              </label>
              <input
                type="url"
                name="portfolioUrl"
                placeholder="https://youtube.com/@channel atau drive link"
                className="w-full bg-[#18181B] border border-white/10 px-4 py-2.5 text-xs text-white placeholder:text-[#5A5957] focus:outline-none focus:border-[#D91F2C]"
              />
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full py-3.5 bg-[#D91F2C] text-white font-display text-base uppercase tracking-wider hover:bg-[#B81521] transition-colors disabled:opacity-50"
            >
              {isPending ? "MEMPROSES REGISTRASI..." : "KIRIM PENDAFTARAN KREATOR ↗"}
            </button>
          </form>
        )}

        {/* Tab 2: Media Form */}
        {activeTab === "media" && (
          <form onSubmit={handleMediaApply} className="max-w-2xl space-y-6 bg-[#141416] p-8 border border-white/10 ring-corner-frame">
            <div className="space-y-2">
              <h4 className="font-display text-2xl uppercase tracking-wider text-white">
                AKREDITASI MEDIA PERS RESMI
              </h4>
              <p className="text-xs text-[#8F8E8B]">
                Khusus jurnalis, wartawan foto, dan kantor media resmi yang meliput kejuaraan kickboxing.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="font-technical text-[10px] uppercase text-[#8F8E8B] tracking-wider block">
                  Nama Jurnalis / Fotografer *
                </label>
                <input
                  type="text"
                  name="applicantName"
                  required
                  placeholder="Nama Lengkap"
                  className="w-full bg-[#18181B] border border-white/10 px-4 py-2.5 text-xs text-white placeholder:text-[#5A5957] focus:outline-none focus:border-[#D91F2C]"
                />
              </div>

              <div className="space-y-1">
                <label className="font-technical text-[10px] uppercase text-[#8F8E8B] tracking-wider block">
                  Nama Institusi Media *
                </label>
                <input
                  type="text"
                  name="mediaOutlet"
                  required
                  placeholder="Contoh: Harian Jogja, Detik, Antara"
                  className="w-full bg-[#18181B] border border-white/10 px-4 py-2.5 text-xs text-white placeholder:text-[#5A5957] focus:outline-none focus:border-[#D91F2C]"
                />
              </div>

              <div className="space-y-1">
                <label className="font-technical text-[10px] uppercase text-[#8F8E8B] tracking-wider block">
                  Email Redaksi / Koresponden *
                </label>
                <input
                  type="email"
                  name="applicantEmail"
                  required
                  placeholder="redaksi@media.co.id"
                  className="w-full bg-[#18181B] border border-white/10 px-4 py-2.5 text-xs text-white placeholder:text-[#5A5957] focus:outline-none focus:border-[#D91F2C]"
                />
              </div>

              <div className="space-y-1">
                <label className="font-technical text-[10px] uppercase text-[#8F8E8B] tracking-wider block">
                  Nomor Kontak / WhatsApp *
                </label>
                <input
                  type="tel"
                  name="contactPhone"
                  required
                  placeholder="+62 8..."
                  className="w-full bg-[#18181B] border border-white/10 px-4 py-2.5 text-xs text-white placeholder:text-[#5A5957] focus:outline-none focus:border-[#D91F2C]"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="font-technical text-[10px] uppercase text-[#8F8E8B] tracking-wider block">
                Link Surat Tugas / Kartu Pers (URL)
              </label>
              <input
                type="url"
                name="pressCardUrl"
                placeholder="https://drive.google.com/..."
                className="w-full bg-[#18181B] border border-white/10 px-4 py-2.5 text-xs text-white placeholder:text-[#5A5957] focus:outline-none focus:border-[#D91F2C]"
              />
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full py-3.5 bg-white text-[#0B0B0B] font-display text-base uppercase tracking-wider hover:bg-neutral-200 transition-colors disabled:opacity-50"
            >
              {isPending ? "MEMPROSES AKREDITASI..." : "AJUKAN AKREDITASI PERS ↗"}
            </button>
          </form>
        )}
      </div>

    </div>
  );
}
