"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Calendar,
  Flame,
  Trophy,
  Music,
  Ticket,
  Play,
  X,
  Check,
  ShieldCheck,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Volume2,
  Sparkles
} from "lucide-react";
import CountdownTimer from "@/components/home/CountdownTimer";

const TICKET_TIERS = [
  {
    id: "tribun",
    name: "TRIBUN REGULER",
    tag: "AKSES 1 HARI",
    price: "Rp 150.000",
    desc: "Pandangan sudut terbaik dari tribun melingkar arena GOR UNY dan akses konser panggung festival musik harian.",
    popular: false,
    benefits: [
      "Kursi tribun bernomor",
      "Akses penuh panggung festival musik",
      "Akses food bazaar & culture hub",
      "E-ticket langsung ke WhatsApp & Email",
    ],
  },
  {
    id: "ringside",
    name: "RINGSIDE FLOOR VIP",
    tag: "SISI RING RESMI",
    price: "Rp 500.000",
    desc: "Duduk tepat di lantai tepi ring laga kickboxing dengan jarak pandang sangat dekat, merchandise eksklusif, & fast-track entry.",
    popular: true,
    benefits: [
      "Kursi VIP tepat di sisi Ring Laga",
      "Official Tournament Merch Pack",
      "Pintu masuk jalur khusus VIP (Fast-track)",
      "Akses eksklusif Press Conference & Timbang Badan",
    ],
  },
  {
    id: "festival-pass",
    name: "3-DAY ALL ACCESS PASS",
    tag: "TERUSAN 3 HARI",
    price: "Rp 275.000",
    desc: "Akses lengkap 3 hari penuh dari sesi timbang badan pembuka, babak penyisihan, semifinal, hingga Grand Final & konser puncak.",
    popular: false,
    benefits: [
      "Akses terusan selama 3 hari penuh",
      "Bebas keluar-masuk (Re-entry wristband)",
      "Diskon 15% Official Merch Booth",
      "Priority voting untuk City Pride Award",
    ],
  },
];

export default function HomeClient() {
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const [isTeaserModalOpen, setIsTeaserModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState(TICKET_TIERS[1]); // Default VIP

  return (
    <main className="flex-1 flex flex-col w-full text-[#F4F0E8] bg-[#0B0B0B] overflow-x-hidden">
      
      {/* ═════════════════════════════════════════════════════════════════════
          1. CINEMATIC FIGHT POSTER HERO (SYMMETRICAL CENTER AXIS)
          Fokus 100% pada visual poster monumental, countdown center, dan aksi cepat
      ═════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[100svh] pt-24 sm:pt-28 pb-12 sm:pb-16 flex flex-col justify-center items-center text-center border-b border-white/10 bg-[#0B0B0B] overflow-hidden">
        
        {/* Dominant Documentary Background Photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/v9/04_FOTO_FIGHT_DESKTOP_TANPA_TEKST.png"
            alt="Dokumentasi Laga Kickboxing JKBF"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center lg:object-[center_35%] grayscale contrast-125 saturate-50 opacity-50"
          />
          {/* Radial & Vignette Overlays for Maximum Center Contrast */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(11,11,11,0.3)_0%,#0B0B0B_85%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-[#0B0B0B]/85" />
          
          {/* Dramatic Stadium Center Backlight */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[950px] h-[350px] sm:h-[480px] bg-[#D91F2C]/18 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 w-full relative z-10 py-6 sm:py-10 flex flex-col items-center">
          <div className="flex flex-col items-center max-w-4xl space-y-6 sm:space-y-7">
            
            {/* Festival Identity Kicker */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-black/70 backdrop-blur-md border border-[#D91F2C]/40 rounded-full shadow-[0_0_20px_rgba(217,31,44,0.18)]">
              <Flame className="w-3.5 h-3.5 text-[#D91F2C] animate-pulse" />
              <p className="font-technical text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold">
                #JOGJAPUNYANYALI &nbsp;•&nbsp; DI BALIK KALEM
              </p>
            </div>

            {/* Monumental Headline */}
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7.2rem] uppercase tracking-tight text-white leading-[0.88] drop-shadow-[0_10px_35px_rgba(0,0,0,0.95)]">
              JOGJA KICKBOXING<br />
              <span className="text-[#D91F2C] drop-shadow-[0_0_35px_rgba(217,31,44,0.45)]">FESTIVAL 2026</span>
            </h1>

            {/* Venue & Date Centered Pill */}
            <div className="inline-flex flex-wrap items-center justify-center gap-2.5 sm:gap-6 text-xs sm:text-sm font-technical text-white/90 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full backdrop-blur-md shadow-lg">
              <span className="inline-flex items-center gap-1.5 font-bold">
                <MapPin className="w-4 h-4 text-[#D91F2C]" /> GOR UNY, YOGYAKARTA
              </span>
              <span className="text-white/30 hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-1.5 font-bold">
                <Calendar className="w-4 h-4 text-[#D91F2C]" /> 12 – 14 DESEMBER 2026
              </span>
            </div>

            {/* Live Centered Countdown Timer */}
            <div className="pt-2 pb-2 w-full flex flex-col items-center">
              <p className="font-technical text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-white/50 mb-3 font-semibold">
                HITUNG MUNDUR MENUJU HARI PERTANDINGAN:
              </p>
              <CountdownTimer />
            </div>

            {/* Action Buttons: Quick Ticket & Teaser Video */}
            <div className="pt-3 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 w-full">
              <button
                type="button"
                onClick={() => setIsTicketModalOpen(true)}
                className="font-display text-base sm:text-lg tracking-wider uppercase text-white bg-[#D91F2C] hover:bg-[#B81521] active:scale-95 px-8 sm:px-12 py-4 sm:py-4.5 transition-all inline-flex items-center gap-3 rounded-md shadow-[0_0_35px_rgba(217,31,44,0.5)] ring-1 ring-[#D91F2C]/60 group cursor-pointer"
              >
                <Ticket className="w-5 h-5 text-white/90" />
                <span>AMANKAN TIKET SEKARANG</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
              
              <button
                type="button"
                onClick={() => setIsTeaserModalOpen(true)}
                className="font-display text-base sm:text-lg tracking-wider uppercase text-white/90 hover:text-white border border-white/20 hover:border-white px-6 sm:px-8 py-4 sm:py-4.5 transition-all inline-flex items-center gap-2.5 bg-black/50 backdrop-blur-sm rounded-md cursor-pointer hover:bg-white/5 shadow-md"
              >
                <Play className="w-4 h-4 text-[#D91F2C] fill-[#D91F2C]" />
                <span>TONTON TEASER (30s)</span>
              </button>
            </div>

            {/* Sub-CTA Trust Strip */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-2 text-[10px] sm:text-[11px] font-technical tracking-[0.15em] text-white/45 uppercase font-medium">
              <span>⚡ 32 Atlet Elit K-1</span>
              <span className="hidden sm:inline text-white/20">•</span>
              <span>🎸 3 Hari Stage Musik</span>
              <span className="hidden sm:inline text-white/20">•</span>
              <span>📍 GOR UNY 10K Seats</span>
              <span className="hidden sm:inline text-white/20">•</span>
              <span>🔒 Pembayaran Resmi QRIS & VA</span>
            </div>

          </div>
        </div>

        {/* Bottom subtle scroll cue */}
        <div className="relative z-10 w-full text-center pb-2 pt-6">
          <a
            href="#highlights"
            className="inline-flex items-center gap-2 text-[11px] font-technical uppercase tracking-[0.2em] text-white/40 hover:text-white/80 transition-colors"
          >
            <span>Scroll untuk Eksplorasi 3 Pilar Utama</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>


      {/* ═════════════════════════════════════════════════════════════════════
          2. RUNNING MARQUEE TICKER (TRANSISI ELEGAN)
      ═════════════════════════════════════════════ */}
      <div className="w-full bg-[#121214] border-y border-white/10 py-3.5 overflow-hidden select-none relative z-20">
        <div className="flex w-max animate-marquee font-technical text-xs sm:text-sm uppercase tracking-[0.25em] text-white/75 font-bold items-center gap-8">
          <span>#JOGJAPUNYANYALI</span>
          <span className="text-[#D91F2C]">✦</span>
          <span>12–14 DESEMBER 2026</span>
          <span className="text-[#D91F2C]">✦</span>
          <span>GOR UNY YOGYAKARTA</span>
          <span className="text-[#D91F2C]">✦</span>
          <span>4 DIVISI SABUK EMAS K-1</span>
          <span className="text-[#D91F2C]">✦</span>
          <span>FESTIVAL MUSIK 3 HARI</span>
          <span className="text-[#D91F2C]">✦</span>
          <span>KUOTA RINGSIDE TERBATAS</span>
          <span className="text-[#D91F2C]">✦</span>
          <span>STANDAR INTERNASIONAL</span>
          <span className="text-[#D91F2C]">✦</span>
          {/* Seamless duplicate for continuous looping */}
          <span>#JOGJAPUNYANYALI</span>
          <span className="text-[#D91F2C]">✦</span>
          <span>12–14 DESEMBER 2026</span>
          <span className="text-[#D91F2C]">✦</span>
          <span>GOR UNY YOGYAKARTA</span>
          <span className="text-[#D91F2C]">✦</span>
          <span>4 DIVISI SABUK EMAS K-1</span>
          <span className="text-[#D91F2C]">✦</span>
          <span>FESTIVAL MUSIK 3 HARI</span>
          <span className="text-[#D91F2C]">✦</span>
          <span>KUOTA RINGSIDE TERBATAS</span>
          <span className="text-[#D91F2C]">✦</span>
          <span>STANDAR INTERNASIONAL</span>
          <span className="text-[#D91F2C]">✦</span>
        </div>
      </div>


      {/* ═════════════════════════════════════════════════════════════════════
          3. THE 3 CORE PILLARS (RINGKAS, PADAT, ART-DIRECTED)
          3 Kartu utama: Sabuk Emas, Musik, dan Arena UNY
      ═════════════════════════════════════════════ */}
      <section id="highlights" className="w-full bg-[#101012] text-[#F4F0E8] py-16 sm:py-24 border-b border-white/10 relative">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 font-technical text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold mb-2">
                <span>01</span>
                <span>•</span>
                <span>3 PILAR UTAMA FESTIVAL</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-white leading-none">
                BUKAN SEKADAR LAGA, INI PERAYAAN.
              </h2>
            </div>
            <p className="font-technical text-xs sm:text-sm text-white/60 max-w-md">
              Kombinasi turnamen sabuk emas K-1, panggung festival musik 3 hari, dan atmosfer 10.000 penonton di GOR UNY Yogyakarta.
            </p>
          </div>

          {/* 3 Pillar Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Card 1: The Ring */}
            <div className="group relative bg-[#161618] border border-white/10 rounded-xl overflow-hidden flex flex-col hover:border-[#D91F2C]/60 transition-all duration-300 shadow-xl">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/60">
                <Image
                  src="/images/championship/belt-hero.jpg"
                  alt="4 Sabuk Emas K-1 JKBF"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161618] via-transparent to-transparent" />
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 bg-black/80 border border-[#D91F2C]/50 rounded-full text-[10px] font-technical uppercase tracking-wider text-[#D91F2C] font-bold backdrop-blur-md">
                  <Trophy className="w-3 h-3" /> 4 DIVISI SABUK EMAS
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl uppercase tracking-wider text-white mb-2">
                    THE CHAMPIONSHIP RING
                  </h3>
                  <p className="text-xs sm:text-sm text-white/65 leading-relaxed font-sans mb-6">
                    Turnamen resmi sistem gugur 32 petarung elit nasional memperebutkan gelar raja K-1 di 4 kelas berat berbeda.
                  </p>
                </div>
                <Link
                  href="/bracket"
                  className="inline-flex items-center justify-between text-xs font-technical uppercase tracking-[0.15em] text-[#D91F2C] hover:text-white font-bold pt-4 border-t border-white/5 transition-colors group-hover:border-[#D91F2C]/30"
                >
                  <span>Bagan Laga & Petarung</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Card 2: The Stage */}
            <div className="group relative bg-[#161618] border border-white/10 rounded-xl overflow-hidden flex flex-col hover:border-[#D91F2C]/60 transition-all duration-300 shadow-xl">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/60">
                <Image
                  src="/images/lineup/ring-stage.jpg"
                  alt="Festival Musik JKBF"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161618] via-transparent to-transparent" />
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 bg-black/80 border border-white/20 rounded-full text-[10px] font-technical uppercase tracking-wider text-white font-bold backdrop-blur-md">
                  <Music className="w-3 h-3 text-[#D91F2C]" /> PANGGUNG 3 HARI
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl uppercase tracking-wider text-white mb-2">
                    FESTIVAL OF SOUND & FOOD
                  </h3>
                  <p className="text-xs sm:text-sm text-white/65 leading-relaxed font-sans mb-6">
                    Panggung kolaborasi musisi lintas genre, visual art show, dan festival kuliner UMKM khas Yogyakarta dari siang hingga malam.
                  </p>
                </div>
                <Link
                  href="/lineup"
                  className="inline-flex items-center justify-between text-xs font-technical uppercase tracking-[0.15em] text-[#D91F2C] hover:text-white font-bold pt-4 border-t border-white/5 transition-colors group-hover:border-[#D91F2C]/30"
                >
                  <span>Lineup Panggung Musik</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Card 3: The Venue & Ticket */}
            <div className="group relative bg-[#161618] border border-white/10 rounded-xl overflow-hidden flex flex-col hover:border-[#D91F2C]/60 transition-all duration-300 shadow-xl">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/60">
                <Image
                  src="/images/venue/gor-uny-arena.jpg"
                  alt="Arena GOR UNY Yogyakarta"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161618] via-transparent to-transparent" />
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 bg-black/80 border border-white/20 rounded-full text-[10px] font-technical uppercase tracking-wider text-white font-bold backdrop-blur-md">
                  <MapPin className="w-3 h-3 text-[#D91F2C]" /> GOR UNY ARENA
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl uppercase tracking-wider text-white mb-2">
                    10.000 KAPASITAS PENONTON
                  </h3>
                  <p className="text-xs sm:text-sm text-white/65 leading-relaxed font-sans mb-6">
                    Pilihan kategori tiket mulai dari Festival Pass, Tribune, hingga Ringside VIP Eksklusif tepat di tepi ring pertarungan.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsTicketModalOpen(true)}
                  className="inline-flex items-center justify-between text-xs font-technical uppercase tracking-[0.15em] text-[#D91F2C] hover:text-white font-bold pt-4 border-t border-white/5 transition-colors group-hover:border-[#D91F2C]/30 cursor-pointer w-full text-left"
                >
                  <span>Pilih Kategori Tiket</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ═════════════════════════════════════════════════════════════════════
          4. COMPACT ACTION BANNER (CALL TO ACTION TERAKHIR)
      ═════════════════════════════════════════════ */}
      <section className="w-full bg-[#0B0B0B] py-14 sm:py-16 border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="p-8 sm:p-12 bg-gradient-to-r from-[#141416] via-[#1A1A1E] to-[#141416] border border-white/10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-2 text-center md:text-left">
              <span className="font-technical text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold">
                JADILAH SAKSI SEJARAH LAGA DI YOGYAKARTA
              </span>
              <h3 className="font-display text-3xl sm:text-4xl uppercase text-white leading-tight">
                KUOTA TIKET RINGSIDE & FESTIVAL TERBATAS
              </h3>
              <p className="font-technical text-xs sm:text-sm text-white/60">
                12 – 14 Desember 2026 • GOR UNY, D.I. Yogyakarta
              </p>
            </div>
            
            <div className="flex-shrink-0">
              <button
                type="button"
                onClick={() => setIsTicketModalOpen(true)}
                className="font-display text-base sm:text-lg tracking-wider uppercase text-white bg-[#D91F2C] hover:bg-[#B81521] px-8 sm:px-10 py-4 transition-all inline-flex items-center gap-2 rounded shadow-[0_4px_25px_rgba(217,31,44,0.4)] active:scale-95 cursor-pointer"
              >
                <span>PESAN TIKET SEKARANG</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* ═════════════════════════════════════════════════════════════════════
          MODAL 1: QUICK TICKET SELECTOR (INSTANT CHECKOUT MODAL)
      ═════════════════════════════════════════════ */}
      {isTicketModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsTicketModalOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl bg-[#141416] border border-white/15 rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between border-b border-white/10 pb-5">
              <div>
                <span className="font-technical text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold">
                  OFFICIAL TICKETING • JKBF 2026
                </span>
                <h3 className="font-display text-3xl sm:text-4xl uppercase text-white tracking-wide mt-1">
                  PILIH KATEGORI TIKET
                </h3>
                <p className="text-xs sm:text-sm text-white/60 mt-1">
                  12 – 14 Desember 2026 • GOR UNY, Yogyakarta
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsTicketModalOpen(false)}
                className="p-2 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Ticket Options Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {TICKET_TIERS.map((tier) => {
                const isSelected = selectedTier.id === tier.id;
                return (
                  <div
                    key={tier.id}
                    onClick={() => setSelectedTier(tier)}
                    className={`relative p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? "bg-[#D91F2C]/10 border-[#D91F2C] ring-1 ring-[#D91F2C]/50 shadow-[0_0_25px_rgba(217,31,44,0.2)]"
                        : "bg-[#18181C] border-white/10 hover:border-white/30"
                    }`}
                  >
                    {tier.popular && (
                      <span className="absolute -top-2.5 right-3 bg-[#D91F2C] text-white text-[9px] font-technical uppercase tracking-widest font-bold px-2 py-0.5 rounded-full shadow">
                        FAVORIT
                      </span>
                    )}
                    <div>
                      <span className="text-[10px] font-technical uppercase tracking-wider text-white/50 font-bold block mb-1">
                        {tier.tag}
                      </span>
                      <h4 className="font-display text-xl uppercase tracking-wider text-white">
                        {tier.name}
                      </h4>
                      <p className="font-display text-2xl text-[#D91F2C] font-black my-2">
                        {tier.price}
                      </p>
                      <p className="text-[11px] text-white/65 leading-relaxed mb-4">
                        {tier.desc}
                      </p>
                    </div>

                    <ul className="space-y-1.5 pt-3 border-t border-white/10 text-[10px] sm:text-[11px] text-white/80 font-sans">
                      {tier.benefits.map((b, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#D91F2C] flex-shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* Modal Footer / Checkout Action */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <p className="text-xs text-white/50 font-technical">PILIHAN ANDA:</p>
                <p className="font-display text-xl text-white">
                  {selectedTier.name} — <span className="text-[#D91F2C]">{selectedTier.price}</span>
                </p>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Link
                  href="/tiket"
                  onClick={() => setIsTicketModalOpen(false)}
                  className="flex-1 sm:flex-none text-center font-display text-sm uppercase px-5 py-3.5 border border-white/20 hover:border-white text-white/80 hover:text-white rounded transition-colors"
                >
                  INFO DETAIL DENAH KURSI
                </Link>
                <Link
                  href={`/checkout?tier=${selectedTier.id}`}
                  onClick={() => setIsTicketModalOpen(false)}
                  className="flex-1 sm:flex-none text-center font-display text-base uppercase px-8 py-3.5 bg-[#D91F2C] hover:bg-[#B81521] text-white rounded shadow-[0_0_20px_rgba(217,31,44,0.4)] transition-all font-bold"
                >
                  LANJUT PEMESANAN ↗
                </Link>
              </div>
            </div>

          </div>
        </div>
      )}


      {/* ═════════════════════════════════════════════════════════════════════
          MODAL 2: CINEMATIC TEASER TRAILER POPUP
      ═════════════════════════════════════════════ */}
      {isTeaserModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setIsTeaserModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#141416] border border-white/20 rounded-2xl shadow-[0_0_60px_rgba(217,31,44,0.25)] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/60">
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-[#D91F2C]" />
                <span className="font-technical text-xs uppercase tracking-widest text-white/90 font-bold">
                  OFFICIAL EVENT TEASER • JOGJA KICKBOXING FESTIVAL 2026
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsTeaserModalOpen(false)}
                className="p-1.5 text-white/60 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Display */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
              <Image
                src="/images/v9/04_FOTO_FIGHT_DESKTOP_TANPA_TEKST.png"
                alt="Teaser Preview"
                fill
                className="object-cover opacity-45 filter contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              
              {/* Center Play Icon & Pulse Atmosphere */}
              <div className="relative z-10 flex flex-col items-center text-center p-6 space-y-4 max-w-lg">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#D91F2C] flex items-center justify-center text-white shadow-[0_0_40px_rgba(217,31,44,0.8)] ring-4 ring-white/20 animate-pulse">
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white ml-1" />
                </div>
                <div>
                  <h4 className="font-display text-3xl sm:text-4xl uppercase text-white tracking-wider">
                    DI BALIK KALEM, ADA NYALI BESAR
                  </h4>
                  <p className="text-xs sm:text-sm text-white/70 font-sans mt-1">
                    Dokumentasi eksklusif persiapan 32 atlet elit tanah air menuju laga akbar di GOR UNY Yogyakarta.
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-[10px] font-technical uppercase tracking-widest text-[#D91F2C] font-bold">
                  <span>RESMI DIRILIS KANAL YOUTUBE @JOGJAKICKBOXING</span>
                </div>
              </div>
            </div>

            {/* Modal Bottom Action Bar */}
            <div className="px-6 py-4 bg-[#101012] border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-white/50 font-technical">
                DURASI: 00:45 • RESOLUSI 4K MASTER CINEMATIC AUDIO
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsTeaserModalOpen(false);
                  setIsTicketModalOpen(true);
                }}
                className="font-display text-sm tracking-wider uppercase text-white bg-[#D91F2C] hover:bg-[#B81521] px-6 py-2.5 rounded transition-all inline-flex items-center gap-2 cursor-pointer shadow-md"
              >
                <span>AMANKAN TIKET FESTIVAL</span>
                <Ticket className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

    </main>
  );
}
