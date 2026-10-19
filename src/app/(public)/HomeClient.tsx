"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar, Flame, Trophy, Music, Ticket, ChevronDown, ShieldAlert } from "lucide-react";
import CountdownTimer from "@/components/home/CountdownTimer";

export default function HomeClient() {
  return (
    <main className="flex-1 flex flex-col w-full text-[#F4F0E8] bg-[#0B0B0B] overflow-x-hidden">
      
      {/* ═════════════════════════════════════════════════════════════════════
          1. CINEMATIC FIGHT POSTER HERO (FOCUS: THUMBNAIL EVENT UTAMA)
          Fokus 100% pada visual monumental, countdown, dan aksi tiket utama
      ═════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[100svh] pt-24 sm:pt-28 pb-14 sm:pb-16 flex flex-col justify-center border-b border-white/10 bg-[#0B0B0B] overflow-hidden">
        
        {/* Dominant Documentary Background Photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/v9/04_FOTO_FIGHT_DESKTOP_TANPA_TEKST.png"
            alt="Dokumentasi Laga Kickboxing JKBF"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center lg:object-[center_25%] grayscale contrast-125 opacity-60 lg:opacity-50"
          />
          {/* Film Grain & Dramatic Red/Dark Vignettes */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/75 to-black/60" />
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/90 via-[#0B0B0B]/40 to-transparent" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#D91F2C]/15 rounded-full blur-[120px] pointer-events-none" />
        </div>

        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 w-full relative z-10 py-6 sm:py-10">
          <div className="max-w-4xl space-y-6 sm:space-y-7">
            
            {/* Festival Identity Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-black/70 backdrop-blur-md border border-[#D91F2C]/40 rounded-full">
              <Flame className="w-3.5 h-3.5 text-[#D91F2C] animate-pulse" />
              <p className="font-technical text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold">
                #JOGJAPUNYANYALI &nbsp;•&nbsp; DI BALIK KALEM
              </p>
            </div>

            {/* Monumental Headline (Fight Poster Typographic Style) */}
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] uppercase tracking-tight text-white leading-[0.88] drop-shadow-2xl">
              JOGJA KICKBOXING<br />
              <span className="text-[#D91F2C]">FESTIVAL 2026</span>
            </h1>

            {/* Venue & Date Badges */}
            <div className="inline-flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm font-technical text-white/90 bg-white/5 border border-white/10 px-4 py-2.5 rounded-lg backdrop-blur-md">
              <span className="inline-flex items-center gap-1.5 font-bold">
                <MapPin className="w-4 h-4 text-[#D91F2C]" /> GOR UNY, YOGYAKARTA
              </span>
              <span className="text-white/30 hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-1.5 font-bold">
                <Calendar className="w-4 h-4 text-[#D91F2C]" /> 12 – 14 DESEMBER 2026
              </span>
            </div>

            {/* Live Countdown Timer */}
            <div className="pt-1 pb-2">
              <p className="font-technical text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-white/50 mb-2.5 font-semibold">
                HITUNG MUNDUR MENUJU LAGA:
              </p>
              <CountdownTimer />
            </div>

            {/* High-Impact Direct Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/tiket"
                className="font-display text-base sm:text-lg tracking-wider uppercase text-white bg-[#D91F2C] hover:bg-[#B81521] active:scale-95 px-8 sm:px-10 py-4 transition-all inline-flex items-center gap-2.5 rounded shadow-[0_4px_30px_rgba(217,31,44,0.45)] ring-1 ring-[#D91F2C]/50 group"
              >
                <Ticket className="w-5 h-5 text-white/90" />
                <span>AMANKAN TIKET SEKARANG</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
              
              <a
                href="#highlights"
                className="font-display text-base sm:text-lg tracking-wider uppercase text-white/80 hover:text-white border border-white/20 hover:border-white px-7 py-4 transition-all inline-flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded"
              >
                <span>HIGHLIGHT FESTIVAL</span>
                <ChevronDown className="w-4 h-4 animate-bounce" />
              </a>
            </div>

          </div>
        </div>

        {/* Bottom subtle scroll cue */}
        <div className="relative z-10 w-full text-center pb-2 pt-4">
          <a
            href="#highlights"
            className="inline-flex items-center gap-2 text-[11px] font-technical uppercase tracking-[0.2em] text-white/40 hover:text-white/80 transition-colors"
          >
            <span>Eksplorasi 3 Pilar Utama</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>


      {/* ═════════════════════════════════════════════════════════════════════
          2. THE 3 CORE PILLARS (RINGKAS, PADAT, TIDAK OVERLOAD)
          Cukup 3 kartu utama: Sabuk Emas, Musik, dan Arena UNY
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
              Kombinasi kompetisi sabuk emas K-1, panggung festival musik 3 hari, dan pengalaman atmosfer 10.000 penonton di GOR UNY.
            </p>
          </div>

          {/* 3 Pillar Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Card 1: The Ring */}
            <div className="group relative bg-[#161618] border border-white/10 rounded-xl overflow-hidden flex flex-col hover:border-[#D91F2C]/60 transition-all duration-300">
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
            <div className="group relative bg-[#161618] border border-white/10 rounded-xl overflow-hidden flex flex-col hover:border-[#D91F2C]/60 transition-all duration-300">
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
            <div className="group relative bg-[#161618] border border-white/10 rounded-xl overflow-hidden flex flex-col hover:border-[#D91F2C]/60 transition-all duration-300">
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
                <Link
                  href="/tiket"
                  className="inline-flex items-center justify-between text-xs font-technical uppercase tracking-[0.15em] text-[#D91F2C] hover:text-white font-bold pt-4 border-t border-white/5 transition-colors group-hover:border-[#D91F2C]/30"
                >
                  <span>Pilih Kategori Tiket</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ═════════════════════════════════════════════════════════════════════
          3. COMPACT ACTION BANNER (CALL TO ACTION TERAKHIR)
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
              <Link
                href="/tiket"
                className="font-display text-base sm:text-lg tracking-wider uppercase text-white bg-[#D91F2C] hover:bg-[#B81521] px-8 sm:px-10 py-4 transition-all inline-flex items-center gap-2 rounded shadow-[0_4px_25px_rgba(217,31,44,0.4)] active:scale-95"
              >
                <span>PESAN TIKET SEKARANG</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
