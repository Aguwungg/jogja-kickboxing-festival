"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, MapPin, Shield } from "lucide-react";
import { EVENT_CONFIG } from "@/lib/event-config";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function HomeClient() {
  // Live ticking combat countdown towards Dec 12, 2026 09:00 WIB
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const targetDate = new Date(EVENT_CONFIG.dates.startIso).getTime();
    
    const calculateTime = (): TimeLeft => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTime());
    const interval = setInterval(() => {
      setTimeLeft(calculateTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-[#F4F0E8] overflow-hidden">
      
      {/* =========================================================================
          SECTION 01: HERO (BYON IMPACT x GLORY HEADLINE)
          Clean, confident, zero card clutter, focused event poster aesthetic.
         ========================================================================= */}
      <section className="relative min-h-[88vh] flex flex-col justify-between pt-24 sm:pt-28 pb-10 sm:pb-12 px-4 sm:px-8 lg:px-12 border-b border-white/10">
        
        {/* Authentic Atmospheric Photographic Background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <Image
            src="/images/v9/04_FOTO_FIGHT_DESKTOP_TANPA_TEKST.png"
            alt="JKBF 2026 Combat Arena"
            fill
            priority
            quality={90}
            className="object-cover object-center scale-105 opacity-40 brightness-75 contrast-125 transition-transform duration-1000 ease-out"
          />
          {/* Subtle directional dark gradients for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/70 to-[#0B0B0B]/80" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0B0B0B]/50 to-[#0B0B0B]" />
        </div>

        {/* Top Kicker Bar */}
        <div className="relative z-10 max-w-[1400px] mx-auto w-full flex items-center justify-between text-xs font-technical">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D91F2C] animate-pulse" />
            <span className="text-[#8F8E8B] uppercase tracking-[0.2em]">
              PENGPROV KBI DIY & NOISE COMM
            </span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 text-[#8F8E8B] tracking-wider uppercase text-[11px]">
            <span>GOR UNY YOGYAKARTA</span>
            <span className="text-white/20">•</span>
            <span className="text-[#D91F2C] font-bold">12–14 DESEMBER 2026</span>
          </div>
        </div>

        {/* Center Hero Monument — GLORY x BYON Typography (Full Center Symmetry) */}
        <div className="relative z-10 max-w-[1400px] mx-auto w-full my-auto py-6 sm:py-10 text-center flex flex-col items-center justify-center">
          
          {/* Tagline Badge */}
          <p className="font-technical text-xs sm:text-sm uppercase tracking-[0.3em] text-[#D91F2C] font-bold mb-2 sm:mb-3 text-center">
            #JOGJAPUNYANYALI • DI BALIK KALEM, ADA NYALI
          </p>

          {/* Monumental Headline */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] xl:text-[6.4rem] uppercase tracking-tight text-[#F4F0E8] leading-[0.92] max-w-5xl mx-auto text-center">
            JOGJAKARTA KICKBOXING FESTIVAL 2026
          </h1>

          {/* Date & Location Pill */}
          <div className="mt-3 sm:mt-4 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-xs sm:text-sm md:text-base font-technical text-[#8F8E8B]">
            <div className="inline-flex items-center gap-1.5 text-[#F4F0E8]">
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D91F2C]" />
              <span className="font-bold">12–14 DESEMBER 2026</span>
            </div>
            <span className="text-white/20">•</span>
            <div className="inline-flex items-center gap-1.5 text-[#F4F0E8]">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D91F2C]" />
              <span>GOR UNY, YOGYAKARTA</span>
            </div>
            <span className="hidden md:inline text-white/20">•</span>
            <div className="hidden md:inline-flex items-center gap-1.5 text-[#8F8E8B]">
              <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D91F2C]" />
              <span>WAKO RULES (TATAMI & RINGSPORT)</span>
            </div>
          </div>

          {/* ═════════════════════════════════════════════════════════════════════
              BYON COMBAT SIGNATURE COUNTDOWN (4 STARK WHITE CARDS - CENTERED)
              Live ticking towards Dec 12, 2026 with high contrast combat cards.
          ═════════════════════════════════════════════════════════════════════ */}
          <div className="mt-5 sm:mt-6 w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto">
            <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-3.5">
              {/* Days */}
              <div className="bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.7)] flex flex-col items-center justify-center transition-transform hover:scale-105">
                <span className="font-sans text-[10px] sm:text-xs font-bold text-[#D91F2C] tracking-wide mb-0.5">
                  Days
                </span>
                <span className="font-display text-2xl sm:text-4xl md:text-5xl font-black text-[#D91F2C] leading-none tabular-nums">
                  {timeLeft ? timeLeft.days : 49}
                </span>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.7)] flex flex-col items-center justify-center transition-transform hover:scale-105">
                <span className="font-sans text-[10px] sm:text-xs font-bold text-[#D91F2C] tracking-wide mb-0.5">
                  Hours
                </span>
                <span className="font-display text-2xl sm:text-4xl md:text-5xl font-black text-[#D91F2C] leading-none tabular-nums">
                  {timeLeft ? String(timeLeft.hours).padStart(2, "0") : "10"}
                </span>
              </div>

              {/* Minutes */}
              <div className="bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.7)] flex flex-col items-center justify-center transition-transform hover:scale-105">
                <span className="font-sans text-[10px] sm:text-xs font-bold text-[#D91F2C] tracking-wide mb-0.5">
                  Minutes
                </span>
                <span className="font-display text-2xl sm:text-4xl md:text-5xl font-black text-[#D91F2C] leading-none tabular-nums">
                  {timeLeft ? String(timeLeft.minutes).padStart(2, "0") : "37"}
                </span>
              </div>

              {/* Seconds */}
              <div className="bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.7)] flex flex-col items-center justify-center transition-transform hover:scale-105">
                <span className="font-sans text-[10px] sm:text-xs font-bold text-[#D91F2C] tracking-wide mb-0.5">
                  Seconds
                </span>
                <span className="font-display text-2xl sm:text-4xl md:text-5xl font-black text-[#D91F2C] leading-none tabular-nums">
                  {timeLeft ? String(timeLeft.seconds).padStart(2, "0") : "38"}
                </span>
              </div>
            </div>
          </div>

          {/* Clean Dual Action Pairing — BYON Simplicity (Centered) */}
          <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto mx-auto">
            <Link
              href="/jadwal"
              className="w-full sm:w-auto text-center px-8 sm:px-10 py-3.5 sm:py-3.5 bg-[#D91F2C] hover:bg-[#B81521] active:scale-95 text-white font-display text-base sm:text-lg tracking-wider uppercase transition-all shadow-xl shadow-red-950/40 inline-flex items-center justify-center gap-2 rounded-md"
            >
              <span>JADWAL 3 HARI</span>
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </Link>

            <Link
              href="/championship"
              className="w-full sm:w-auto text-center px-8 sm:px-10 py-3.5 sm:py-3.5 bg-[#141416]/90 hover:bg-white/10 border border-white/15 text-[#F4F0E8] hover:text-white font-display text-base sm:text-lg tracking-wider uppercase transition-all backdrop-blur-sm rounded-md"
            >
              <span>KEJUARAAN & PETARUNG</span>
            </Link>
          </div>
        </div>

        {/* Bottom Hairline Fact Bar — Document Provenance */}
        <div className="relative z-10 max-w-[1400px] mx-auto w-full pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-technical text-[#77716D]">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1">
            <span className="text-[#8F8E8B]">10 DES: TIMBANG BADAN & SCREENING</span>
            <span className="text-white/20">•</span>
            <span className="text-[#8F8E8B]">12–14 DES: ARENA GOR UNY</span>
            <span className="text-white/20">•</span>
            <span className="text-[#D91F2C] font-semibold">SK PENGPROV KBI DIY</span>
          </div>

          <Link
            href="/tentang#thb"
            className="hover:text-white transition-colors inline-flex items-center gap-1.5 uppercase tracking-wider text-[11px]"
          >
            <span>DOKUMEN TECHNICAL HANDBOOK (PDF)</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#D91F2C]" />
          </Link>
        </div>
      </section>


      {/* =========================================================================
          GLORY CONTINUOUS TICKER (Clean Marquee)
          Combat atmosphere without cluttering the page.
         ========================================================================= */}
      <div className="w-full bg-[#141416] border-b border-white/10 py-3 overflow-hidden select-none">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-4 text-xs font-technical tracking-[0.22em] text-[#8F8E8B] uppercase">
              <span className="text-[#D91F2C] font-bold">#JOGJAPUNYANYALI</span>
              <span>•</span>
              <span className="text-white font-semibold">DI BALIK KALEM, ADA NYALI</span>
              <span>•</span>
              <span>RISE. FIGHT. CONQUER.</span>
              <span>•</span>
              <span className="text-[#F4F0E8]">12–14 DESEMBER 2026</span>
              <span>•</span>
              <span>GOR UNY YOGYAKARTA</span>
              <span>•</span>
              <span className="text-[#D91F2C]">WAKO RULES</span>
              <span>•</span>
            </div>
          ))}
        </div>
      </div>


      {/* =========================================================================
          SECTION 02: EXPLORE JKBF — THE TWO MAIN GATEWAYS
          Editorial Gymshark composition: The Fights vs The Festival.
          Bold imagery, zero generic cards, direct exploration pathways.
         ========================================================================= */}
      <section className="py-20 sm:py-28 lg:py-32 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <p className="font-technical text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold mb-2">
              DUA JALUR EKSPLORASI UTAMA
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#F4F0E8]">
              JELAJAHI FESTIVAL
            </h2>
          </div>
          <p className="font-sans text-sm text-[#8F8E8B] max-w-md">
            Pilih pengalaman yang Anda cari: atmosfer laga kejuaraan kickboxing resmi atau energi konser musik dan kultur streetwear Yogyakarta.
          </p>
        </div>

        {/* The Two Gateways Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* GATEWAY 01: THE FIGHTS */}
          <Link
            href="/championship"
            className="group relative h-[480px] sm:h-[560px] lg:h-[620px] overflow-hidden border border-white/10 bg-[#141416] flex flex-col justify-between p-8 sm:p-10 transition-all duration-300 hover:border-[#D91F2C]"
          >
            {/* Photographic Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image
                src="/images/v9/04_FOTO_FIGHT_DESKTOP_TANPA_TEKST.png"
                alt="Pertandingan Kickboxing JKBF 2026"
                fill
                quality={85}
                className="object-cover object-center filter grayscale contrast-125 brightness-75 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/60 to-transparent" />
            </div>

            {/* Top Index Badge */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="font-technical text-xs uppercase tracking-[0.2em] text-[#D91F2C] font-bold bg-[#0B0B0B]/80 px-3 py-1 border border-white/10 backdrop-blur-sm">
                01 / KEJUARAAN & LAGA
              </span>
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:bg-[#D91F2C]">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>

            {/* Bottom Content Area */}
            <div className="relative z-10 space-y-4">
              <div>
                <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#F4F0E8] group-hover:text-white transition-colors">
                  THE FIGHTS
                </h3>
                <p className="font-technical text-xs sm:text-sm text-[#D91F2C] uppercase tracking-wider font-semibold mt-1">
                  KEJURDA DIY 2026 • REDY OPEN II • PARTAI BINTANG
                </p>
              </div>

              {/* Factual Bullet Points — Single line scan */}
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#8F8E8B] font-sans pt-2 border-t border-white/10">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#D91F2C]" />
                  <span>Kejurda Kickboxing DIY 2026 (Seleksi Pengkab/Pengkot)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#D91F2C]" />
                  <span>Redy Open Championship II (Camp Open, SMA, Mahasiswa)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#D91F2C]" />
                  <span>Partai Bintang & Mega Bintang (Invitation Only)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#D91F2C]" />
                  <span>Direktori Roster 200+ Atlet & Aturan Resmi WAKO</span>
                </li>
              </ul>

              <div className="pt-2">
                <span className="font-display text-base tracking-wider text-[#F4F0E8] group-hover:text-[#D91F2C] inline-flex items-center gap-2 transition-colors">
                  <span>MASUK KE ARENA PERTANDINGAN</span>
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>


          {/* GATEWAY 02: THE FESTIVAL */}
          <Link
            href="/lineup"
            className="group relative h-[480px] sm:h-[560px] lg:h-[620px] overflow-hidden border border-white/10 bg-[#141416] flex flex-col justify-between p-8 sm:p-10 transition-all duration-300 hover:border-[#D91F2C]"
          >
            {/* Photographic Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image
                src="/images/v9/06_FOTO_KONSER_PLACEHOLDER_INTERNAL.png"
                alt="Panggung Musik dan Festival JKBF 2026"
                fill
                quality={85}
                className="object-cover object-center filter grayscale contrast-125 brightness-75 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/60 to-transparent" />
            </div>

            {/* Top Index Badge */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="font-technical text-xs uppercase tracking-[0.2em] text-[#D91F2C] font-bold bg-[#0B0B0B]/80 px-3 py-1 border border-white/10 backdrop-blur-sm">
                02 / MUSIK & KULTUR
              </span>
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:bg-[#D91F2C]">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>

            {/* Bottom Content Area */}
            <div className="relative z-10 space-y-4">
              <div>
                <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#F4F0E8] group-hover:text-white transition-colors">
                  THE FESTIVAL
                </h3>
                <p className="font-technical text-xs sm:text-sm text-[#D91F2C] uppercase tracking-wider font-semibold mt-1">
                  PANGGUNG MUSIK 3 HARI • EKSHIBISI • YOUTH CULTURE
                </p>
              </div>

              {/* Factual Bullet Points — Single line scan */}
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#8F8E8B] font-sans pt-2 border-t border-white/10">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#D91F2C]" />
                  <span>Panggung Musik 3 Hari (Sabtu 12 Des & Senin 14 Des)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#D91F2C]" />
                  <span>Showcase Genre: Rock, Hip-Hop, & Electronic Beats</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#D91F2C]" />
                  <span>Pameran Ekshibisi & Kultur Kreatif Jogja</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#D91F2C]" />
                  <span>Food Market, Youth Gathering & Panduan Akses GOR UNY</span>
                </li>
              </ul>

              <div className="pt-2">
                <span className="font-display text-base tracking-wider text-[#F4F0E8] group-hover:text-[#D91F2C] inline-flex items-center gap-2 transition-colors">
                  <span>JELAJAHI FESTIVAL & PANGGUNG MUSIK</span>
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>

        </div>
      </section>

    </main>
  );
}
