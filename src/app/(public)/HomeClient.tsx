"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MessageCircle, Video, Handshake, HelpCircle, Shield } from "lucide-react";
import CountdownTimer from "@/components/home/CountdownTimer";
import {
  EVENT_CONFIG,
  jkbfLinks,
  registrationConfig,
  contentChallengeConfig,
  partnershipConfig,
} from "@/lib/event-config";

export default function HomeClient() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-[#F4F0E8] overflow-hidden font-sans">

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 01: HERO POSTER (BYON IMPACT × GLORY MONUMENTAL SYMMETRY)
          Full-bleed atmospheric fight photo, monumental headline, and
          the BYON signature 4 stark white cards countdown (pure visual pop!).
         ═══════════════════════════════════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 01: HERO POSTER (APPLE KEYNOTE DRAMA × UFC FIGHT NIGHT)
          Luminous arena halo, high-contrast fighter background, titanium glow,
          Apple Watch Ultra squircle countdown, and electric action pills.
         ═══════════════════════════════════════════════════════════════════════ */}
      <section
        className="relative min-h-[94vh] flex flex-col justify-center items-center pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-8 lg:px-12 border-b border-white/[0.08] overflow-hidden"
        aria-label="Hero — Jogja Kickboxing Festival 2026"
      >
        {/* Full-bleed authentic combat photo background with enhanced atmosphere */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <Image
            src="/images/v9/04_FOTO_FIGHT_DESKTOP_TANPA_TEKST.png"
            alt="Pertandingan Kickboxing JKBF 2026"
            fill
            priority
            quality={90}
            className="object-cover object-center scale-105 opacity-50 brightness-90 contrast-125 transition-transform duration-1000 ease-out"
            sizes="100vw"
          />
          {/* Directional gradients for dramatic stadium lighting */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_50%,#000000_100%)]" />
          
          {/* Luminous Arena Spotlight Halo — Opsi A: Pure Crimson Stage Lighting (Merah Nyali) */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[1000px] h-[380px] sm:h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(217,31,44,0.38)_0%,rgba(217,31,44,0.12)_50%,transparent_75%)] pointer-events-none blur-3xl -z-1" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1100px] h-[250px] sm:h-[350px] bg-[radial-gradient(ellipse_at_bottom,rgba(217,31,44,0.18)_0%,rgba(217,31,44,0.05)_50%,transparent_70%)] pointer-events-none blur-3xl" />
        </div>

        {/* Monumental Center Hero — Pure Cinematic Focus */}
        <div className="relative z-10 max-w-[1400px] mx-auto w-full my-auto py-6 sm:py-10 text-center flex flex-col items-center justify-center">

          {/* Slogan Pill — Single Unified Apple Floating Frosted Capsule */}
          <div className="mb-4 sm:mb-6">
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/[0.08] hover:bg-white/[0.12] border border-white/15 backdrop-blur-xl shadow-2xl transition-all select-none">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D91F2C] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D91F2C]"></span>
              </span>
              <span className="font-technical text-xs uppercase tracking-[0.22em] text-[#F5F5F7] font-semibold">
                PENGPROV KBI DIY • STANDAR RESMI WAKO
              </span>
            </div>
          </div>

          {/* Monumental Display Headline — Apple Keynote Titanium Glow */}
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[6.6rem] xl:text-[7.8rem] uppercase tracking-tight leading-[0.88] max-w-5xl mx-auto drop-shadow-[0_15px_35px_rgba(0,0,0,0.95)]">
            <span className="bg-gradient-to-b from-white via-[#F5F5F7] to-[#B0B0B8] bg-clip-text text-transparent">
              JOGJA PUNYA
            </span>
            <br className="sm:hidden" />{" "}
            <span className="bg-gradient-to-r from-[#FF3B30] via-[#EF3340] to-[#D91F2C] bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(217,31,44,0.7)]">
              NYALI.
            </span>
          </h1>

          {/* Punchy 3-Word Official Battle Cry — Clean & Powerful */}
          <p className="mt-2.5 sm:mt-3.5 font-technical text-xs sm:text-sm uppercase tracking-[0.32em] text-[#86868B] font-semibold select-none">
            RISE&nbsp;•&nbsp;FIGHT&nbsp;•&nbsp;CONQUER
          </p>

          {/* ═════════════════════════════════════════════════════════════════════
              BYON ARENA LOCATION & DATE LOCKUP (MONUMENTAL STADIUM TYPOGRAPHY)
             ═════════════════════════════════════════════════════════════════════ */}
          <div className="mt-4 sm:mt-6 text-center select-none">
            <p className="font-display text-2xl sm:text-4xl md:text-5xl uppercase tracking-wider text-white font-black leading-none drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
              YOGYAKARTA
            </p>
            <p className="font-technical text-lg sm:text-2xl md:text-3xl uppercase tracking-[0.25em] text-[#D91F2C] font-black mt-1 sm:mt-1.5 drop-shadow-[0_0_25px_rgba(217,31,44,0.7)]">
              18.12.2026
            </p>
          </div>

          {/* ═════════════════════════════════════════════════════════════════════
              BYON SIGNATURE COUNTDOWN (4 TALL WHITE PORTRAIT CARDS)
              Pure stark white cards, vibrant red condensed numbers, instant visual pop!
             ═════════════════════════════════════════════════════════════════════ */}
          <div className="mt-4 sm:mt-6 w-full">
            <CountdownTimer
              targetIso={EVENT_CONFIG.dates.startIso}
              label=""
            />
          </div>

          {/* Dual Action Pairing — High Voltage Apple Pill Design */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-sm sm:max-w-none mx-auto">
            <a
              href={jkbfLinks.fighterRegistration}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-9 sm:px-11 py-3.5 sm:py-4 bg-gradient-to-r from-[#D91F2C] via-[#EF3340] to-[#D91F2C] hover:scale-105 active:scale-95 text-white font-display text-base sm:text-lg tracking-wider uppercase transition-all shadow-[0_12px_40px_rgba(217,31,44,0.5)] inline-flex items-center justify-center gap-2 rounded-full border-t border-white/25"
              aria-label="Daftar Fighter Sekarang (Buka Google Form)"
            >
              <span>DAFTAR SEKARANG</span>
              <ArrowUpRight className="w-5 h-5 text-white" />
            </a>

            <a
              href="#gateways"
              className="w-full sm:w-auto text-center px-9 sm:px-11 py-3.5 sm:py-4 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-[#F5F5F7] hover:text-white font-display text-base sm:text-lg tracking-wider uppercase transition-all backdrop-blur-xl rounded-full hover:scale-105 active:scale-95 shadow-xl"
            >
              <span>EXPLORE JKBF</span>
            </a>
          </div>

          {/* 3-Pillar Authority Stat Bar — Apple Spec Highlights */}
          <div className="mt-6 sm:mt-8 pt-2 sm:pt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-technical uppercase">
            <div className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D91F2C]" />
              <span className="text-[#C4C4CC] font-medium">7 Program Kejuaraan</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D91F2C]" />
              <span className="text-[#C4C4CC] font-medium">Standar WAKO Indonesia</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D91F2C]" />
              <span className="text-[#C4C4CC] font-medium">Reg. s/d 30 November</span>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          REFINED ATHLETIC LUXURY TICKER (UFC × GLORY × High-End Sportswear)
          Deep obsidian background, hairline borders, micro-dot accents, zero norak.
         ═══════════════════════════════════════════════════════════════════════ */}
      <div
        className="w-full bg-[#08080A] border-y border-white/[0.08] py-2.5 sm:py-3 overflow-hidden select-none relative z-20"
        aria-hidden="true"
      >
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-6 sm:gap-8 mx-3 text-[11px] sm:text-xs font-technical tracking-[0.28em] uppercase"
            >
              <span className="text-[#D91F2C] font-bold">#JOGJAPUNYANYALI</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D91F2C] shrink-0 opacity-80" />
              <span className="text-[#F4F0E8] font-bold">HARI H: 18 DESEMBER 2026</span>
              <span className="w-1 h-1 rounded-full bg-white/20 shrink-0" />
              <span className="text-[#8E8E98] font-medium">DI BALIK KALEM, ADA NYALI</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D91F2C] shrink-0 opacity-80" />
              <span className="text-[#F4F0E8] font-semibold">RISE • FIGHT • CONQUER</span>
              <span className="w-1 h-1 rounded-full bg-white/20 shrink-0" />
              <span className="text-[#8E8E98] font-medium">REGISTRASI S/D {registrationConfig.displayDeadline.toUpperCase()}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D91F2C] shrink-0 opacity-80" />
              <span className="text-[#8E8E98] font-medium">WAKO ACCREDITED • PENGPROV KBI DIY</span>
              <span className="w-1 h-1 rounded-full bg-white/20 shrink-0" />
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 02: THE TWO MAIN GATEWAYS (THE FIGHTS VS THE MOVEMENT)
          Editorial Gymshark/GLORY composition: Big full-bleed photo cards,
          hover-to-color zoom effect, single-line scan bullets.
         ═══════════════════════════════════════════════════════════════════════ */}
      <section id="gateways" className="py-24 sm:py-32 lg:py-36 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto scroll-mt-20">
        
        {/* Section Header — Clean, Breaths Easy */}
        <div className="mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <p className="font-technical text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold mb-2">
              DUA JALUR EKSPLORASI UTAMA
            </p>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-[#F4F0E8] leading-[0.92]">
              JELAJAHI JKBF.
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#8F8E8B] max-w-md leading-relaxed">
            Pilih jalur Anda: arena kejuaraan kickboxing resmi berstandar WAKO atau gerakan panggung mahasiswa, pelajar, dan kreator konten.
          </p>
        </div>

        {/* The Two Giant Visual Gateways Grid — Apple Bento Style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* GATEWAY 01: THE FIGHTS & CHAMPIONSHIP */}
          <Link
            href="/championship"
            className="group relative h-[520px] sm:h-[580px] lg:h-[640px] overflow-hidden border border-white/[0.08] bg-[#161617] flex flex-col justify-between p-8 sm:p-12 transition-all duration-500 hover:border-[#D91F2C]/50 hover:shadow-[0_20px_60px_rgba(217,31,44,0.12)] rounded-3xl lg:rounded-[36px]"
          >
            {/* Photographic Background with Hover Scale & Color Reveal */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image
                src="/images/v9/04_FOTO_FIGHT_DESKTOP_TANPA_TEKST.png"
                alt="Pertandingan Kickboxing JKBF 2026"
                fill
                quality={85}
                className="object-cover object-center filter grayscale contrast-125 brightness-75 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-90"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-transparent" />
            </div>

            {/* Top Index Badge — Apple Pill */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="font-technical text-xs uppercase tracking-[0.2em] text-[#D91F2C] font-bold bg-black/70 px-4 py-1.5 border border-white/10 backdrop-blur-md rounded-full">
                01 / KEJUARAAN RESMI WAKO
              </span>
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-[#D91F2C]">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>

            {/* Bottom Content Area */}
            <div className="relative z-10 space-y-4">
              <div>
                <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#F5F5F7] group-hover:text-white transition-colors">
                  THE FIGHTS
                </h3>
                <p className="font-technical text-xs sm:text-sm text-[#D91F2C] uppercase tracking-wider font-semibold mt-1">
                  7 PROGRAM KEJUARAAN • STANDAR WAKO INDONESIA
                </p>
              </div>

              {/* Factual Bullet Points — Single line scan */}
              <ul className="space-y-2 text-xs sm:text-sm text-[#86868B] font-sans pt-3 border-t border-white/10">
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D91F2C] shrink-0" />
                  <span className="text-[#C4C4CC]">Kejurda Kickboxing DIY 2026 (Seleksi Atlet Resmi Daerah &amp; Kontingen)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D91F2C] shrink-0" />
                  <span className="text-[#C4C4CC]">Redy Open Championship II (Turnamen Terbuka Camp &amp; Sasana Nasional)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D91F2C] shrink-0" />
                  <span className="text-[#C4C4CC]">Super Fights &amp; Kelas Bintang (Partai Puncak Format K-1 Rules)</span>
                </li>
              </ul>

              <div className="pt-2">
                <span className="font-display text-base sm:text-lg tracking-wider text-[#F5F5F7] group-hover:text-[#D91F2C] inline-flex items-center gap-2 transition-colors">
                  <span>MASUK KE ARENA PERTANDINGAN</span>
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </span>
              </div>
            </div>
          </Link>

          {/* GATEWAY 02: THE MOVEMENT (UNIVERSITY OPEN, SMA OPEN & CONTENT CHALLENGE) */}
          <Link
            href="/#registration"
            className="group relative h-[520px] sm:h-[580px] lg:h-[640px] overflow-hidden border border-white/[0.08] bg-[#161617] flex flex-col justify-between p-8 sm:p-12 transition-all duration-500 hover:border-[#D91F2C]/50 hover:shadow-[0_20px_60px_rgba(217,31,44,0.12)] rounded-3xl lg:rounded-[36px]"
          >
            {/* Photographic Background with Hover Scale & Color Reveal */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image
                src="/images/jkb/fighter-agung.jpg"
                alt="University Open JKBF 2026"
                fill
                quality={85}
                className="object-cover object-center filter grayscale contrast-125 brightness-75 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-90"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-transparent" />
            </div>

            {/* Top Index Badge — Apple Pill */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="font-technical text-xs uppercase tracking-[0.2em] text-[#D91F2C] font-bold bg-black/70 px-4 py-1.5 border border-white/10 backdrop-blur-md rounded-full">
                02 / GENERASI &amp; KREATIF
              </span>
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-[#D91F2C]">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>

            {/* Bottom Content Area */}
            <div className="relative z-10 space-y-4">
              <div>
                <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#F5F5F7] group-hover:text-white transition-colors">
                  THE MOVEMENT
                </h3>
                <p className="font-technical text-xs sm:text-sm text-[#D91F2C] uppercase tracking-wider font-semibold mt-1">
                  WADAH PRESTASI MAHASISWA, PELAJAR &amp; KREATOR KONTEN
                </p>
              </div>

              {/* Factual Bullet Points — Single line scan */}
              <ul className="space-y-2 text-xs sm:text-sm text-[#86868B] font-sans pt-3 border-t border-white/10">
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D91F2C] shrink-0" />
                  <span className="text-[#C4C4CC]">University Open (Adu Nyali Mahasiswa Antar-Kampus se-Indonesia)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D91F2C] shrink-0" />
                  <span className="text-[#C4C4CC]">SMA Open (Panggung Prestasi &amp; Jam Terbang Atlet Pelajar Berbakat)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D91F2C] shrink-0" />
                  <span className="text-[#C4C4CC]">Content Challenge (Kompetisi Video Kreatif &amp; Liputan Berhadiah)</span>
                </li>
              </ul>

              <div className="pt-2">
                <span className="font-display text-base sm:text-lg tracking-wider text-[#F5F5F7] group-hover:text-[#D91F2C] inline-flex items-center gap-2 transition-colors">
                  <span>DAFTAR ATLET &amp; PROGRAM KREATIF</span>
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </span>
              </div>
            </div>
          </Link>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 03: PRIORITY REGISTRATION CALLOUT (APPLE EVENT BENTO CARD)
          Clear deadline, zero internal database forms, direct Google Form link.
         ═══════════════════════════════════════════════════════════════════════ */}
      <section
        id="registration"
        className="py-20 sm:py-28 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto scroll-mt-20"
        aria-labelledby="section-registration"
      >
        <div className="relative border border-white/10 bg-gradient-to-b from-[#1C1C1E] via-[#161617] to-[#101012] p-8 sm:p-12 lg:p-16 overflow-hidden rounded-3xl lg:rounded-[36px] shadow-2xl">
          
          {/* Subtle Background Texture */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-20 overflow-hidden">
            <Image
              src="/images/jkb/fighter-1.jpg"
              alt="Fighter Kickboxing JKBF 2026"
              fill
              className="object-cover object-right filter grayscale contrast-125"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#161617] via-[#161617]/90 to-transparent" />
          </div>

          <div className="relative z-10 max-w-2xl space-y-6">
            
            {/* Extended Badge — Apple Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#D91F2C] text-white rounded-full">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="font-technical text-xs font-bold uppercase tracking-[0.2em]">
                {registrationConfig.statusLabel}
              </span>
            </div>

            <div className="space-y-2">
              <p className="font-technical text-xs sm:text-sm uppercase tracking-[0.25em] text-[#D91F2C] font-bold">
                BATAS PENDAFTARAN: {registrationConfig.displayDeadline.toUpperCase()}
              </p>
              <h2
                id="section-registration"
                className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-[0.9]"
              >
                YOUR FIGHT<br />STARTS HERE.
              </h2>
            </div>

            <p className="font-sans text-base text-[#86868B] leading-relaxed max-w-xl">
              Kesempatan masih terbuka untuk mengikuti seluruh rangkaian kejuaraan JKBF 2026. Daftarkan dirimu dan timmu melalui formulir resmi yang telah disediakan.
            </p>

            {/* Direct External Action Buttons — Apple Pill Dual Pairing */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={jkbfLinks.fighterRegistration}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 sm:px-10 py-4 bg-[#D91F2C] hover:bg-[#B81521] active:scale-[0.98] text-white font-display text-base sm:text-lg tracking-wider uppercase text-center transition-all inline-flex items-center justify-center gap-2 shadow-xl shadow-red-950/50 rounded-full"
                aria-label="Daftar Fighter Sekarang (Buka Google Form)"
              >
                <span>DAFTAR SEKARANG</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>

              <a
                href={jkbfLinks.fighterSupportWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 bg-white/10 hover:bg-white/15 border border-white/15 text-[#F5F5F7] hover:text-white font-display text-base tracking-wider uppercase text-center transition-all inline-flex items-center justify-center gap-2 rounded-full backdrop-blur-md"
                aria-label="Hubungi Admin Fighter Priya Pratama via WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-[#D91F2C]" />
                <span>HUBUNGI ADMIN FIGHTER</span>
              </a>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-xs font-technical text-[#86868B]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D91F2C]" />
              <span>Narahubung Resmi Registrasi: <strong className="text-white">{registrationConfig.adminName}</strong></span>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 04: FAST UTILITY STRIP (APPLE BENTO TILES)
          3 Clean, High-contrast cards for secondary actions — zero drag!
         ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto border-t border-white/[0.08]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 1: Content Challenge — Apple Bento Tile */}
          <div className="p-8 bg-[#161617] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between rounded-3xl shadow-xl">
            <div className="space-y-4">
              <div className="p-3 bg-[#D91F2C]/10 border border-[#D91F2C]/30 text-[#D91F2C] w-fit rounded-2xl">
                <Video className="w-5 h-5" />
              </div>
              <h3 className="font-display text-2xl uppercase tracking-wider text-white">
                CONTENT CHALLENGE
              </h3>
              <p className="text-xs sm:text-sm text-[#86868B] font-sans leading-relaxed">
                Tunjukkan perspektif kreatifmu melalui video kreatif seputar olahraga combat dan energi #JOGJAPUNYANYALI.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-white/[0.08]">
              <a
                href={jkbfLinks.contentChallenge}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-sm tracking-wider uppercase text-[#D91F2C] hover:text-white inline-flex items-center gap-1.5 transition-colors"
              >
                <span>FORMULIR KREATOR RESMI</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 2: Partnership & Sponsorship — Apple Bento Tile */}
          <div className="p-8 bg-[#161617] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between rounded-3xl shadow-xl">
            <div className="space-y-4">
              <div className="p-3 bg-[#D91F2C]/10 border border-[#D91F2C]/30 text-[#D91F2C] w-fit rounded-2xl">
                <Handshake className="w-5 h-5" />
              </div>
              <h3 className="font-display text-2xl uppercase tracking-wider text-white">
                KEMITRAAN &amp; SPONSOR
              </h3>
              <p className="text-xs sm:text-sm text-[#86868B] font-sans leading-relaxed">
                Bangun peluang kolaborasi dan sinergi brand Anda bersama ajang festival olahraga combat terbesar di Yogyakarta.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-white/[0.08]">
              <a
                href={jkbfLinks.partnershipWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-sm tracking-wider uppercase text-[#D91F2C] hover:text-white inline-flex items-center gap-1.5 transition-colors"
              >
                <span>HUBUNGI ARDI (SPONSORSHIP)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 3: Need to Know / FAQ — Apple Bento Tile */}
          <div className="p-8 bg-[#161617] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between rounded-3xl shadow-xl">
            <div className="space-y-4">
              <div className="p-3 bg-white/5 border border-white/10 text-[#F5F5F7] w-fit rounded-2xl">
                <HelpCircle className="w-5 h-5 text-[#D91F2C]" />
              </div>
              <h3 className="font-display text-2xl uppercase tracking-wider text-white">
                TANYA JAWAB UMUM
              </h3>
              <p className="text-xs sm:text-sm text-[#86868B] font-sans leading-relaxed">
                Pertanyaan seputar legalitas, nomor kejuaraan, tata tertib atlet, dan informasi resmi penyelenggara JKBF 2026.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-white/[0.08]">
              <Link
                href="/faq"
                className="font-display text-sm tracking-wider uppercase text-[#D91F2C] hover:text-white inline-flex items-center gap-1.5 transition-colors"
              >
                <span>LIHAT 8 FAQ RESMI TERVERIFIKASI</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
