"use client";

import React, { useState, useTransition } from "react";
import {
  Video,
  Ticket,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Camera,
  Newspaper,
  ChevronRight,
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
    <div className="w-full space-y-16">
      
      {/* ═════════════════════════════════════════════════════════════════════
          3-STEP PARTICIPATION STRUCTURE (GoPro / Canva Creators Pattern)
      ═════════════════════════════════════════════════════════════════════ */}
      <section className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
            CARA BERGABUNG
          </span>
          <h2
            className="font-display text-3xl sm:text-5xl font-black uppercase text-white"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            TIGA LANGKAH MUDAH
          </h2>
          <p className="text-xs sm:text-sm text-[#9A9AA2]">
            Ikuti alur partisipasi resmi untuk menjadi kreator terverifikasi festival JKB 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="bg-[#171719] border border-white/10 rounded-sm p-6 space-y-3 relative">
            <span className="font-display text-4xl font-black text-[#D91F2C]/30 block leading-none">
              01
            </span>
            <h3
              className="font-display text-2xl font-bold uppercase text-white"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              DAFTAR AKUN KREATOR
            </h3>
            <p className="text-xs text-[#9A9AA2] leading-relaxed">
              Lengkapi formulir pendaftaran di bawah dengan menyertakan tautan akun Instagram atau TikTok aktif kamu.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-[#171719] border border-white/10 rounded-sm p-6 space-y-3 relative">
            <span className="font-display text-4xl font-black text-white/20 block leading-none">
              02
            </span>
            <h3
              className="font-display text-2xl font-bold uppercase text-white"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              PUBLIKASIKAN KONTEN
            </h3>
            <p className="text-xs text-[#9A9AA2] leading-relaxed">
              Buat konten kreatif seputar JKB 2026 dengan menyertakan tagar resmi <strong>#JOGJAPUNYANYALI</strong> dan tag akun <strong>@jkb.championship</strong>.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-[#171719] border border-white/10 rounded-sm p-6 space-y-3 relative">
            <span className="font-display text-4xl font-black text-[#E2BA75]/30 block leading-none">
              03
            </span>
            <h3
              className="font-display text-2xl font-bold uppercase text-white"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              AKSES LIPUTAN ARENA
            </h3>
            <p className="text-xs text-[#9A9AA2] leading-relaxed">
              Kreator dengan konten terverifikasi komite akan mendapatkan ID pass peliputan resmi ringside GOR UNY.
            </p>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          TWO CLEAR CHANNELS: CREATOR PROGRAM vs MEDIA ACCREDITATION
      ═════════════════════════════════════════════════════════════════════ */}
      <section id="action-hub" className="max-w-3xl mx-auto space-y-6">
        
        {/* Channel Selector Tabs */}
        <div className="flex border-b border-white/10 pb-4 justify-center gap-3">
          <button
            type="button"
            onClick={() => {
              setActiveFormTab("creator");
              setFeedback(null);
            }}
            className={`px-5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all ${
              activeFormTab === "creator"
                ? "bg-[#D91F2C] text-white shadow-md shadow-[#D91F2C]/20"
                : "bg-[#171719] border border-white/10 text-[#9A9AA2] hover:text-white"
            }`}
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            Form Registrasi Kreator
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveFormTab("media");
              setFeedback(null);
            }}
            className={`px-5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all ${
              activeFormTab === "media"
                ? "bg-[#D91F2C] text-white shadow-md shadow-[#D91F2C]/20"
                : "bg-[#171719] border border-white/10 text-[#9A9AA2] hover:text-white"
            }`}
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            Akreditasi Media Massa
          </button>
        </div>

        {/* Feedback Alert */}
        {feedback && (
          <div
            className={`p-4 rounded-sm flex items-center gap-3 text-xs ${
              feedback.type === "success"
                ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
                : "bg-red-500/10 border border-red-500/30 text-red-400"
            }`}
          >
            {feedback.type === "success" ? (
              <CheckCircle2 className="w-4 h-4 shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 shrink-0" />
            )}
            <span>{feedback.text}</span>
          </div>
        )}

        {/* FORM 1: Registrasi Kreator */}
        {activeFormTab === "creator" && (
          <form
            onSubmit={handleRegister}
            className="bg-[#171719] border border-white/10 p-6 sm:p-8 rounded-sm space-y-4"
          >
            <div className="border-b border-white/10 pb-3">
              <h3
                className="font-display text-xl font-bold uppercase text-white"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                Pendaftaran Kreator Konten
              </h3>
              <p className="text-xs text-[#9A9AA2]">
                Terbuka untuk kreator independen, videografer, dan penggiat media sosial.
              </p>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-[#C4C4CC] font-bold uppercase mb-1">
                  Nama Lengkap / Nama Panggung *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Contoh: Budi Kickboxer"
                  className="w-full bg-[#09090B] border border-white/10 px-3.5 py-2.5 rounded-sm text-white focus:outline-none focus:border-[#D91F2C]"
                />
              </div>

              <div>
                <label className="block text-[#C4C4CC] font-bold uppercase mb-1">
                  Email Aktif *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="budi@example.com"
                  className="w-full bg-[#09090B] border border-white/10 px-3.5 py-2.5 rounded-sm text-white focus:outline-none focus:border-[#D91F2C]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#C4C4CC] font-bold uppercase mb-1">
                    Username Instagram (Opsional)
                  </label>
                  <input
                    type="text"
                    name="instagram"
                    placeholder="@username"
                    className="w-full bg-[#09090B] border border-white/10 px-3.5 py-2.5 rounded-sm text-white focus:outline-none focus:border-[#D91F2C]"
                  />
                </div>
                <div>
                  <label className="block text-[#C4C4CC] font-bold uppercase mb-1">
                    Username TikTok (Opsional)
                  </label>
                  <input
                    type="text"
                    name="tiktok"
                    placeholder="@username"
                    className="w-full bg-[#09090B] border border-white/10 px-3.5 py-2.5 rounded-sm text-white focus:outline-none focus:border-[#D91F2C]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#C4C4CC] font-bold uppercase mb-1">
                  Kategori Konten Utama
                </label>
                <select
                  name="category"
                  defaultValue="SPORT"
                  className="w-full bg-[#09090B] border border-white/10 px-3.5 py-2.5 rounded-sm text-white focus:outline-none focus:border-[#D91F2C]"
                >
                  <option value="SPORT">Olahraga / Bela Diri / Martial Arts</option>
                  <option value="MUSIC">Musik / Festival / Entertainment</option>
                  <option value="LIFESTYLE">Lifestyle / Vlog / Urban Culture</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full font-display font-black text-xs uppercase tracking-widest py-3.5 bg-[#D91F2C] hover:bg-[#EF3340] text-white rounded-sm transition-all shadow-md shadow-[#D91F2C]/20 cursor-pointer"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              {isPending ? "Mengirim Pendaftaran..." : "KIRIM PENDAFTARAN KREATOR"}
            </button>
          </form>
        )}

        {/* FORM 2: Akreditasi Media Massa */}
        {activeFormTab === "media" && (
          <form
            onSubmit={handleMediaApply}
            className="bg-[#171719] border border-white/10 p-6 sm:p-8 rounded-sm space-y-4"
          >
            <div className="border-b border-white/10 pb-3">
              <h3
                className="font-display text-xl font-bold uppercase text-white"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                Permohonan Akreditasi Media & Pers
              </h3>
              <p className="text-xs text-[#9A9AA2]">
                Khusus jurnalis, fotografer pers, dan awak redaksi media massa terverifikasi.
              </p>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-[#C4C4CC] font-bold uppercase mb-1">
                  Nama Media / Kantor Redaksi *
                </label>
                <input
                  type="text"
                  name="mediaName"
                  required
                  placeholder="Contoh: Harian Jogja / Kompas TV"
                  className="w-full bg-[#09090B] border border-white/10 px-3.5 py-2.5 rounded-sm text-white focus:outline-none focus:border-[#D91F2C]"
                />
              </div>

              <div>
                <label className="block text-[#C4C4CC] font-bold uppercase mb-1">
                  Nama Lengkap Jurnalis / Peliput *
                </label>
                <input
                  type="text"
                  name="applicantName"
                  required
                  placeholder="Nama sesuai kartu pers"
                  className="w-full bg-[#09090B] border border-white/10 px-3.5 py-2.5 rounded-sm text-white focus:outline-none focus:border-[#D91F2C]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#C4C4CC] font-bold uppercase mb-1">
                    Email Redaksi Resmi *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="redaksi@media.co.id"
                    className="w-full bg-[#09090B] border border-white/10 px-3.5 py-2.5 rounded-sm text-white focus:outline-none focus:border-[#D91F2C]"
                  />
                </div>
                <div>
                  <label className="block text-[#C4C4CC] font-bold uppercase mb-1">
                    No. WhatsApp Redaksi *
                  </label>
                  <input
                    type="text"
                    name="phone"
                    required
                    placeholder="0812xxxxxxxx"
                    className="w-full bg-[#09090B] border border-white/10 px-3.5 py-2.5 rounded-sm text-white focus:outline-none focus:border-[#D91F2C]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#C4C4CC] font-bold uppercase mb-1">
                  Tipe Media
                </label>
                <select
                  name="mediaType"
                  defaultValue="ONLINE"
                  className="w-full bg-[#09090B] border border-white/10 px-3.5 py-2.5 rounded-sm text-white focus:outline-none focus:border-[#D91F2C]"
                >
                  <option value="ONLINE">Media Online / Portal Berita</option>
                  <option value="CETAK">Media Cetak (Koran / Majalah)</option>
                  <option value="TELEVISI">Televisi / Radio Penyiaran</option>
                  <option value="PHOTO">Fotografi Jurnalistik Independen</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full font-display font-black text-xs uppercase tracking-widest py-3.5 bg-[#D91F2C] hover:bg-[#EF3340] text-white rounded-sm transition-all shadow-md shadow-[#D91F2C]/20 cursor-pointer"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              {isPending ? "Mengajukan Akreditasi..." : "KIRIM PENGAJUAN AKREDITASI PERS"}
            </button>
          </form>
        )}

        {/* Link to Authenticated Creator Dashboard */}
        <div className="p-4 bg-[#171719] border border-white/5 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#9A9AA2]">
          <span>Sudah terdaftar sebagai kreator resmi JKB 2026?</span>
          <Link
            href="/creator/dashboard"
            className="text-white hover:text-[#D91F2C] font-bold uppercase tracking-wider flex items-center gap-1 transition-colors"
          >
            <span>Buka Dashboard Pribadi</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </section>

    </div>
  );
}
