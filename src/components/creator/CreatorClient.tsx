"use client";

import React, { useState, useTransition } from "react";
import {
  Trophy,
  Video,
  Award,
  Ticket,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Share2,
  Globe,
  Send,
  Sparkles,
  Camera,
  Newspaper,
  ChevronRight,
  HelpCircle,
  Flame,
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
  const [activeTab, setActiveTab] = useState<"register" | "submit" | "barcode" | "media">("register");
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

  const handleSubmitContent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFeedback(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    startTransition(async () => {
      const res = await submitContentAction(formData);
      if (res.success) {
        setFeedback({ type: "success", text: res.message });
        form.reset();
      } else {
        setFeedback({ type: "error", text: res.message });
      }
    });
  };

  const handleClaimBarcode = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFeedback(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    startTransition(async () => {
      const res = await claimBarcodeAction(formData);
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
      {/* 4 Pilar Keuntungan Creator & Media */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[#171719]/80 border border-white/10 p-6 rounded-sm relative overflow-hidden group hover:border-[#EF3340]/40 transition-all">
          <div className="w-10 h-10 rounded-sm bg-[#EF3340]/10 border border-[#EF3340]/20 flex items-center justify-center text-[#EF3340] mb-4">
            <Camera className="w-5 h-5" />
          </div>
          <h3
            className="text-xl font-bold uppercase tracking-tight text-white mb-2"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            Akses Ringside Pass
          </h3>
          <p className="text-sm font-sans text-[#99999F] leading-relaxed">
            Spot peliputan eksklusif di tepi apron kanvas ring dan zona mixed zone untuk wawancara petarung dan musisi.
          </p>
        </div>

        <div className="bg-[#171719]/80 border border-white/10 p-6 rounded-sm relative overflow-hidden group hover:border-amber-400/40 transition-all">
          <div className="w-10 h-10 rounded-sm bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-4">
            <Ticket className="w-5 h-5" />
          </div>
          <h3
            className="text-xl font-bold uppercase tracking-tight text-white mb-2"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            Reward Tiket Barcode
          </h3>
          <p className="text-sm font-sans text-[#99999F] leading-relaxed">
            Klaim tiket masuk harian festival gratis cukup dengan membagikan konten promo dan menginput kode barcode tiket resmi.
          </p>
        </div>

        <div className="bg-[#171719]/80 border border-white/10 p-6 rounded-sm relative overflow-hidden group hover:border-emerald-400/40 transition-all">
          <div className="w-10 h-10 rounded-sm bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400 mb-4">
            <Trophy className="w-5 h-5" />
          </div>
          <h3
            className="text-xl font-bold uppercase tracking-tight text-white mb-2"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            Leaderboard Cash Prize
          </h3>
          <p className="text-sm font-sans text-[#99999F] leading-relaxed">
            Akumulasi poin dari setiap video yang diverifikasi. Top 3 kreator terbaik memenangkan total hadiah jutaan rupiah.
          </p>
        </div>

        <div className="bg-[#171719]/80 border border-white/10 p-6 rounded-sm relative overflow-hidden group hover:border-sky-400/40 transition-all">
          <div className="w-10 h-10 rounded-sm bg-sky-400/10 border border-sky-400/20 flex items-center justify-center text-sky-400 mb-4">
            <Newspaper className="w-5 h-5" />
          </div>
          <h3
            className="text-xl font-bold uppercase tracking-tight text-white mb-2"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            Kredensial Media Resmi
          </h3>
          <p className="text-sm font-sans text-[#99999F] leading-relaxed">
            Akreditasi kartu pers bertanda tangan panitia resmi untuk jurnalis, kru siaran TV, dan fotografer terakreditasi.
          </p>
        </div>
      </section>

      {/* Creator Leaderboard Section */}
      <section className="bg-[#121215] border border-white/10 rounded-sm p-6 sm:p-8 relative">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-400 text-[10px] font-bold tracking-widest uppercase mb-2">
              <Flame className="w-3 h-3" />
              TOP AMPLIFIER JKB 2026
            </div>
            <h2
              className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              KLASEMEN KREATOR TERBAIK <span className="text-[#EF3340]">(LIVE LEADERBOARD)</span>
            </h2>
            <p className="text-xs sm:text-sm font-sans text-[#99999F] mt-1">
              Skor poin dihitung murni dari konten video publik yang telah dimoderasi dan disetujui kurator festival.
            </p>
          </div>

          <Link
            href="/creator/dashboard"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-white/5 hover:bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-white transition-all shrink-0 w-fit"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Buka Portal Dashboard Saya &rarr;
          </Link>
        </div>

        {/* Podium / Leaderboard List */}
        <div className="space-y-3">
          {creators.length === 0 ? (
            <div className="text-center py-12 text-[#99999F] text-sm">
              Belum ada kreator yang terverifikasi dalam leaderboard.
            </div>
          ) : (
            creators.map((c, index) => {
              const rank = index + 1;
              const isTop1 = rank === 1;
              const isTop2 = rank === 2;
              const isTop3 = rank === 3;

              return (
                <div
                  key={c.id}
                  className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 rounded-sm border transition-all ${
                    isTop1
                      ? "bg-amber-500/10 border-amber-500/30 hover:border-amber-400"
                      : isTop2
                      ? "bg-slate-400/10 border-slate-400/30 hover:border-slate-300"
                      : isTop3
                      ? "bg-amber-700/10 border-amber-700/30 hover:border-amber-600"
                      : "bg-[#171719]/60 border-white/5 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {/* Rank Number */}
                    <div
                      className={`w-10 h-10 rounded-sm flex items-center justify-center font-black text-lg shrink-0 ${
                        isTop1
                          ? "bg-amber-400 text-black shadow-lg shadow-amber-400/20"
                          : isTop2
                          ? "bg-slate-300 text-black"
                          : isTop3
                          ? "bg-amber-600 text-white"
                          : "bg-white/5 text-white/60 border border-white/10"
                      }`}
                      style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                    >
                      {isTop1 ? <Trophy className="w-5 h-5 text-black" /> : `#${rank}`}
                    </div>

                    {/* Creator Identity */}
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                          {c.name || "Kreator JKB"}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm bg-white/5 border border-white/10 text-white/70">
                          {c.category?.replace("_", " ") || "COMBAT SPORT"}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 text-xs text-[#99999F] mt-1 flex-wrap">
                        {c.tiktok && (
                          <span className="inline-flex items-center gap-1 text-[#EF3340]">
                            <Video className="w-3 h-3" />
                            {c.tiktok}
                          </span>
                        )}
                        {c.instagram && (
                          <span className="inline-flex items-center gap-1 text-pink-400">
                            <Share2 className="w-3 h-3" />
                            {c.instagram}
                          </span>
                        )}
                        <span className="text-white/40">•</span>
                        <span>{c.submissions.filter((s) => s.status === "APPROVED").length} Konten Lolos</span>
                      </div>
                    </div>
                  </div>

                  {/* Points Badge */}
                  <div className="mt-4 sm:mt-0 flex items-center justify-between sm:justify-end gap-4 border-t sm:border-t-0 pt-3 sm:pt-0 border-white/5">
                    <div className="text-right">
                      <span className="text-xs uppercase tracking-widest text-[#99999F] block">Akumulasi Poin</span>
                      <span
                        className="text-2xl font-black text-amber-400 tracking-tight"
                        style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                      >
                        {c.totalPoints.toLocaleString()} <span className="text-xs font-bold text-white/70">PTS</span>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* Action Hub (Tabs: Register, Submit Content, Barcode, Media) */}
      <section id="action-hub" className="bg-[#171719] border border-white/10 rounded-sm overflow-hidden">
        {/* Tab Headers */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-b border-white/10 bg-[#121215]">
          <button
            onClick={() => {
              setActiveTab("register");
              setFeedback(null);
            }}
            className={`px-4 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 border-b-2 ${
              activeTab === "register"
                ? "bg-[#171719] text-[#EF3340] border-[#EF3340]"
                : "text-[#99999F] hover:text-white border-transparent"
            }`}
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            <Sparkles className="w-4 h-4" />
            1. Daftar Creator
          </button>

          <button
            onClick={() => {
              setActiveTab("submit");
              setFeedback(null);
            }}
            className={`px-4 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 border-b-2 ${
              activeTab === "submit"
                ? "bg-[#171719] text-[#EF3340] border-[#EF3340]"
                : "text-[#99999F] hover:text-white border-transparent"
            }`}
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            <Video className="w-4 h-4" />
            2. Submit Konten
          </button>

          <button
            onClick={() => {
              setActiveTab("barcode");
              setFeedback(null);
            }}
            className={`px-4 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 border-b-2 ${
              activeTab === "barcode"
                ? "bg-[#171719] text-[#EF3340] border-[#EF3340]"
                : "text-[#99999F] hover:text-white border-transparent"
            }`}
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            <Ticket className="w-4 h-4" />
            3. Klaim Barcode
          </button>

          <button
            onClick={() => {
              setActiveTab("media");
              setFeedback(null);
            }}
            className={`px-4 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 border-b-2 ${
              activeTab === "media"
                ? "bg-[#171719] text-[#EF3340] border-[#EF3340]"
                : "text-[#99999F] hover:text-white border-transparent"
            }`}
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            <ShieldCheck className="w-4 h-4" />
            4. Akreditasi Media
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-6 sm:p-10">
          {feedback && (
            <div
              className={`p-4 rounded-sm mb-8 flex items-center gap-3 text-sm font-sans border ${
                feedback.type === "success"
                  ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                  : "bg-red-500/10 border-red-500/30 text-red-400"
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

          {/* TAB 1: REGISTRASI CREATOR */}
          {activeTab === "register" && (
            <div className="max-w-2xl mx-auto space-y-6">
              <div>
                <h3
                  className="text-2xl font-black uppercase text-white tracking-tight"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  FORMULIR REGISTRASI KREATOR RESMI JKB 2026
                </h3>
                <p className="text-xs sm:text-sm text-[#99999F] mt-1">
                  Daftarkan akun kreator Anda untuk mendapatkan kode afiliasi, akses materi visual resmi, dan klaim tiket festival.
                </p>
              </div>

              <form onSubmit={handleRegister} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#99999F] mb-1.5">Nama Lengkap</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Contoh: Raditya Pratama"
                      className="w-full bg-[#121215] border border-white/10 rounded-sm px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#EF3340]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#99999F] mb-1.5">Email Aktif</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="email@anda.com"
                      className="w-full bg-[#121215] border border-white/10 rounded-sm px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#EF3340]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#99999F] mb-1.5">Handle TikTok</label>
                    <input
                      type="text"
                      name="tiktok"
                      placeholder="@username.tiktok"
                      className="w-full bg-[#121215] border border-white/10 rounded-sm px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#EF3340]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#99999F] mb-1.5">Handle Instagram</label>
                    <input
                      type="text"
                      name="instagram"
                      placeholder="@username_ig"
                      className="w-full bg-[#121215] border border-white/10 rounded-sm px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#EF3340]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#99999F] mb-1.5">Kategori Konten</label>
                    <select
                      name="category"
                      className="w-full bg-[#121215] border border-white/10 rounded-sm px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#EF3340]"
                    >
                      <option value="COMBAT_SPORT">Olahraga Tarung & Beladiri</option>
                      <option value="MUSIC_LIFESTYLE">Musik & Festival Lifestyle</option>
                      <option value="GENERAL_HYPE">Vlog & Kuliner Jogja</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-[#99999F] mb-1.5">Bio Singkat / Profil Audiens</label>
                  <textarea
                    name="bio"
                    rows={3}
                    placeholder="Ceritakan sedikit tentang fokus konten dan perkiraan audiens Anda..."
                    className="w-full bg-[#121215] border border-white/10 rounded-sm px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#EF3340]"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-[#EF3340] hover:bg-[#D91F2C] text-white font-bold uppercase tracking-wider py-3.5 rounded-sm text-sm transition-all shadow-lg shadow-[#EF3340]/20 flex items-center justify-center gap-2"
                    style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                  >
                    <Send className="w-4 h-4" />
                    {isPending ? "MEMPROSES REGISTRASI..." : "KIRIM REGISTRASI KREATOR"}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* TAB 2: SUBMIT KONTEN */}
          {activeTab === "submit" && (
            <div className="max-w-2xl mx-auto space-y-6">
              <div>
                <h3
                  className="text-2xl font-black uppercase text-white tracking-tight"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  SUBMIT TAUTAN KONTEN KAMPANYE JKB 2026
                </h3>
                <p className="text-xs sm:text-sm text-[#99999F] mt-1">
                  Masukkan link video TikTok, Instagram Reels, atau YouTube Shorts Anda. Admin akan memverifikasi dan menambahkan skor poin Anda.
                </p>
              </div>

              <form onSubmit={handleSubmitContent} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-[#99999F] mb-1.5">Pilih Profil Kreator Anda</label>
                  <select
                    name="creatorId"
                    required
                    className="w-full bg-[#121215] border border-white/10 rounded-sm px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#EF3340]"
                  >
                    <option value="">-- Pilih Akun Terdaftar --</option>
                    {allCreatorsForSelect.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name || "Kreator"} ({c.tiktok || c.instagram || "No Handle"})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#99999F] mb-1.5">Platform Video</label>
                    <select
                      name="platform"
                      className="w-full bg-[#121215] border border-white/10 rounded-sm px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#EF3340]"
                    >
                      <option value="TIKTOK">TikTok Video</option>
                      <option value="INSTAGRAM">Instagram Reels</option>
                      <option value="YOUTUBE">YouTube Shorts</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#99999F] mb-1.5">Judul / Tema Konten</label>
                    <input
                      type="text"
                      name="title"
                      required
                      placeholder="Contoh: Preview Laga Panas Sleman vs Bantul"
                      className="w-full bg-[#121215] border border-white/10 rounded-sm px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#EF3340]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-[#99999F] mb-1.5">Tautan URL Video Publik</label>
                  <input
                    type="url"
                    name="url"
                    required
                    placeholder="https://www.tiktok.com/@username/video/..."
                    className="w-full bg-[#121215] border border-white/10 rounded-sm px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#EF3340]"
                  />
                  <p className="text-[11px] text-[#99999F] mt-1">
                    Pastikan video disetel publik dan menyertakan hashtag resmi <span className="text-white font-mono">#JOGJAPUNYANYALI</span>.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-[#EF3340] hover:bg-[#D91F2C] text-white font-bold uppercase tracking-wider py-3.5 rounded-sm text-sm transition-all shadow-lg shadow-[#EF3340]/20 flex items-center justify-center gap-2"
                    style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                  >
                    <Send className="w-4 h-4" />
                    {isPending ? "MENGIRIM KONTEN..." : "SUBMIT KONTEN UNTUK REVIEW"}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* TAB 3: KLAIM TIKET BARCODE */}
          {activeTab === "barcode" && (
            <div className="max-w-2xl mx-auto space-y-6">
              <div>
                <h3
                  className="text-2xl font-black uppercase text-white tracking-tight"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  KLAIM TIKET HARIAN DENGAN KODE BARCODE
                </h3>
                <p className="text-xs sm:text-sm text-[#99999F] mt-1">
                  Setiap konten video yang mencapai target impresi berhak mendapatkan kode barcode tiket harian festival. Masukkan kode untuk verifikasi.
                </p>
              </div>

              <form onSubmit={handleClaimBarcode} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-[#99999F] mb-1.5">Pilih Akun Kreator</label>
                  <select
                    name="creatorId"
                    required
                    className="w-full bg-[#121215] border border-white/10 rounded-sm px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#EF3340]"
                  >
                    <option value="">-- Pilih Akun Terdaftar --</option>
                    {allCreatorsForSelect.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name || "Kreator"} ({c.tiktok || c.instagram || "No Handle"})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-[#99999F] mb-1.5">Kode Barcode Tiket</label>
                  <input
                    type="text"
                    name="barcode"
                    required
                    placeholder="Contoh: JKB2026-FEST-88120"
                    className="w-full bg-[#121215] border border-white/10 rounded-sm px-3.5 py-2.5 text-sm text-white font-mono placeholder-white/30 focus:outline-none focus:border-amber-400"
                  />
                  <p className="text-[11px] text-[#99999F] mt-1">
                    Format: Huruf kapital dan angka kombinasi tiket resmi. Kode unik hanya dapat diklaim 1 kali.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold uppercase tracking-wider py-3.5 rounded-sm text-sm transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
                    style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                  >
                    <Ticket className="w-4 h-4" />
                    {isPending ? "MEMVERIFIKASI KODE..." : "KLAIM BARCODE TIKET"}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* TAB 4: AKREDITASI MEDIA & PERS */}
          {activeTab === "media" && (
            <div className="max-w-2xl mx-auto space-y-6">
              <div>
                <h3
                  className="text-2xl font-black uppercase text-white tracking-tight"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  FORMULIR AKREDITASI MEDIA & KARTU PERS RESMI
                </h3>
                <p className="text-xs sm:text-sm text-[#99999F] mt-1">
                  Ditujukan bagi jurnalis, juru kamera TV, fotografer pers, dan portal berita nasional/lokal untuk peliputan turnamen Redy Championship 2 & panggung festival.
                </p>
              </div>

              <form onSubmit={handleMediaApply} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#99999F] mb-1.5">Nama Lembaga Media</label>
                    <input
                      type="text"
                      name="mediaName"
                      required
                      placeholder="Contoh: Kedaulatan Rakyat / Tribun Jogja"
                      className="w-full bg-[#121215] border border-white/10 rounded-sm px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#EF3340]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#99999F] mb-1.5">Jenis Media</label>
                    <select
                      name="mediaType"
                      className="w-full bg-[#121215] border border-white/10 rounded-sm px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#EF3340]"
                    >
                      <option value="ONLINE_MEDIA">Portal Berita Online</option>
                      <option value="PRINT_MEDIA">Koran / Media Cetak</option>
                      <option value="TELEVISION">Stasiun Televisi / Broadcast</option>
                      <option value="PHOTOGRAPHER_RINGSIDE">Fotografer Laga (Ringside Pass)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#99999F] mb-1.5">Nama Jurnalis / Fotografer</label>
                    <input
                      type="text"
                      name="journalistName"
                      required
                      placeholder="Nama lengkap peliput"
                      className="w-full bg-[#121215] border border-white/10 rounded-sm px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#EF3340]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#99999F] mb-1.5">No. Kartu Pers (PWI/AJI/PFI)</label>
                    <input
                      type="text"
                      name="pressCardNumber"
                      placeholder="Nomor kartu pers resmi"
                      className="w-full bg-[#121215] border border-white/10 rounded-sm px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#EF3340]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#99999F] mb-1.5">Email Redaksi / Koresponden</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="redaksi@media.co.id"
                      className="w-full bg-[#121215] border border-white/10 rounded-sm px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#EF3340]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#99999F] mb-1.5">No. WhatsApp / HP</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="0812xxxxxxxx"
                      className="w-full bg-[#121215] border border-white/10 rounded-sm px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#EF3340]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-[#99999F] mb-1.5">Rencana Sudut Liputan</label>
                  <textarea
                    name="coveragePlan"
                    rows={2}
                    placeholder="Contoh: Liputan partai final perebutan sabuk juara & liputan festival kuliner UMKM."
                    className="w-full bg-[#121215] border border-white/10 rounded-sm px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#EF3340]"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-[#EF3340] hover:bg-[#D91F2C] text-white font-bold uppercase tracking-wider py-3.5 rounded-sm text-sm transition-all shadow-lg shadow-[#EF3340]/20 flex items-center justify-center gap-2"
                    style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                  >
                    <ShieldCheck className="w-4 h-4" />
                    {isPending ? "MENGAJUKAN AKREDITASI..." : "KIRIM PERMOHONAN AKREDITASI MEDIA"}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* FAQ & Regulasi Etika Peliputan */}
      <section className="bg-[#121215] border border-white/10 rounded-sm p-6 sm:p-8">
        <div className="flex items-center gap-2 text-white/80 font-bold uppercase tracking-wider text-xs mb-3">
          <HelpCircle className="w-4 h-4 text-[#EF3340]" />
          PANDUAN & ETIKA PELIPUTAN RESMI
        </div>

        <h3
          className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-6"
          style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
        >
          REGULASI KHUSUS AREA RINGSIDE & PANGGUNG FESTIVAL
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm font-sans">
          <div className="bg-[#171719]/60 border border-white/5 p-5 rounded-sm space-y-2">
            <span className="font-bold text-white block">1. Rompi Fotografer & Zona Apron Ring</span>
            <p className="text-[#99999F] text-xs leading-relaxed">
              Fotografer pemegang Ringside Pass wajib mengenakan rompi resmi bernomor seri saat berada di bibir apron kanvas ring. Dilarang berdiri menghalangi sudut pandang ketiga juri penilaian.
            </p>
          </div>

          <div className="bg-[#171719]/60 border border-white/5 p-5 rounded-sm space-y-2">
            <span className="font-bold text-white block">2. Hak Siar Video Eksklusif (PPV)</span>
            <p className="text-[#99999F] text-xs leading-relaxed">
              Dilarang menyiarkan siaran langsung penuh (full live stream) partai kejuaraan di platform media sosial pribadi. Klip highlight dan reels diperbolehkan dengan durasi maksimal 60 detik per laga.
            </p>
          </div>

          <div className="bg-[#171719]/60 border border-white/5 p-5 rounded-sm space-y-2">
            <span className="font-bold text-white block">3. Mekanisme Verifikasi Poin Konten</span>
            <p className="text-[#99999F] text-xs leading-relaxed">
              Poin leaderboard dihitung secara deterministik oleh kurator. Setiap 1 konten yang lolos kurasi berhak memperoleh 100-200 poin sesuai kualitas produksi dan engagement orisinal.
            </p>
          </div>

          <div className="bg-[#171719]/60 border border-white/5 p-5 rounded-sm space-y-2">
            <span className="font-bold text-white block">4. Pengambilan ID Badge Akreditasi</span>
            <p className="text-[#99999F] text-xs leading-relaxed">
              Jurnalis dan kreator yang telah disetujui dapat mengambil kartu akreditasi fisik di Media Center Pintu Timur GOR Among Rogo mulai H-1 acara dengan membawa KTP/Surat Tugas asli.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
