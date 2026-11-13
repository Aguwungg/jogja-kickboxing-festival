"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  HelpCircle,
  MessageCircle,
  Shield,
  Trophy,
} from "lucide-react";
import CountdownTimer from "@/components/home/CountdownTimer";
import HomeArenaPreview from "@/components/home/HomeArenaPreview";
import {
  EVENT_CONFIG,
  jkbfLinks,
  registrationConfig,
} from "@/lib/event-config";

export default function HomeClient() {
  return (
    <main className="min-h-screen bg-[#0A0A0C] text-[#F4F0E8] overflow-hidden font-sans">
      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 01: HERO POSTER (BYON IMPACT × GLORY MONUMENTAL SYMMETRY)
          The beloved monumental headline with titanium glow, pure Byon 4-card
          countdown, and high-octane combat action pairing.
         ═══════════════════════════════════════════════════════════════════════ */}
      <section
        className="relative min-h-[92vh] flex flex-col justify-center items-center pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-8 lg:px-12 overflow-hidden"
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
            className="object-cover object-center scale-105 opacity-45 brightness-90 contrast-125 transition-transform duration-1000 ease-out"
            sizes="100vw"
          />
          {/* Multi-layered directional gradients for stadium lighting & seamless blend */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-black/60 to-black/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.45)_50%,#0A0A0C_100%)]" />

          {/* Luminous Arena Spotlight Halo — Pure Crimson Stage Lighting */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[1000px] h-[380px] sm:h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(217,31,44,0.36)_0%,rgba(217,31,44,0.1)_50%,transparent_75%)] pointer-events-none blur-3xl -z-1" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1100px] h-[250px] sm:h-[350px] bg-[radial-gradient(ellipse_at_bottom,rgba(217,31,44,0.18)_0%,rgba(217,31,44,0.05)_50%,transparent_70%)] pointer-events-none blur-3xl" />
        </div>

        {/* Monumental Center Hero — Pure Cinematic Focus */}
        <div className="relative z-10 max-w-[1400px] mx-auto w-full my-auto py-6 sm:py-10 text-center flex flex-col items-center justify-center">
          {/* Slogan Pill — Combat Tactical Badge */}
          <div className="mb-4 sm:mb-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-xs bg-black/85 hover:bg-black border border-white/15 backdrop-blur-xl shadow-2xl transition-all select-none">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-xs bg-[#D91F2C] opacity-75" />
                <span className="relative inline-flex rounded-xs h-2 w-2 bg-[#D91F2C]" />
              </span>
              <span className="font-technical text-xs uppercase tracking-[0.25em] text-[#F5F5F7] font-semibold">
                PENGPROV KBI DIY // STANDAR RESMI WAKO
              </span>
            </div>
          </div>

          {/* Monumental Display Headline — Titanium & Red Glow */}
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[6.6rem] xl:text-[7.8rem] uppercase tracking-tight leading-[0.88] max-w-5xl mx-auto drop-shadow-[0_15px_35px_rgba(0,0,0,0.95)]">
            <span className="bg-gradient-to-b from-white via-[#F5F5F7] to-[#B0B0B8] bg-clip-text text-transparent">
              JOGJA PUNYA
            </span>
            <br className="sm:hidden" />{" "}
            <span className="bg-gradient-to-r from-[#FF3B30] via-[#EF3340] to-[#D91F2C] bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(217,31,44,0.7)]">
              NYALI.
            </span>
          </h1>

          {/* Punchy 3-Word Official Battle Cry */}
          <p className="mt-2.5 sm:mt-3.5 font-technical text-xs sm:text-sm uppercase tracking-[0.32em] text-[#86868B] font-semibold select-none">
            {EVENT_CONFIG.tagline}
          </p>

          {/* Arena Location & Date Lockup (Monumental Stadium Typography) */}
          <div className="mt-4 sm:mt-6 text-center select-none">
            <p className="font-display text-2xl sm:text-4xl md:text-5xl uppercase tracking-wider text-white font-black leading-none drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
              {EVENT_CONFIG.venue.name}
            </p>
            <p className="font-technical text-lg sm:text-2xl md:text-3xl uppercase tracking-[0.25em] text-[#D91F2C] font-black mt-1 sm:mt-1.5 drop-shadow-[0_0_25px_rgba(217,31,44,0.7)]">
              {EVENT_CONFIG.dates.display}
            </p>
          </div>

          {/* Byon Signature Countdown (4 White Cards) */}
          <div className="mt-5 sm:mt-7 w-full">
            <CountdownTimer targetIso={EVENT_CONFIG.dates.startIso} />
          </div>

          {/* Dual Action Pairing — High-Octane Athletic Combat Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-sm sm:max-w-none mx-auto">
            <a
              href={jkbfLinks.fighterRegistration}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-8 sm:px-10 py-3.5 sm:py-4 bg-[#D91F2C] hover:bg-[#B81521] active:scale-95 text-white font-display text-base sm:text-lg tracking-wider uppercase transition-all shadow-[0_0_30px_rgba(217,31,44,0.45)] inline-flex items-center justify-center gap-2 rounded-sm border border-[#D91F2C]"
            >
              <span>DAFTAR SEKARANG</span>
              <ArrowUpRight className="w-5 h-5 text-white" />
            </a>

            <Link
              href="/championship"
              className="w-full sm:w-auto text-center px-8 sm:px-10 py-3.5 sm:py-4 bg-[#111114] hover:bg-[#16161A] border border-white/20 hover:border-white/40 text-[#F5F5F7] hover:text-white font-display text-base sm:text-lg tracking-wider uppercase transition-all rounded-sm active:scale-95 shadow-xl"
            >
              <span>EXPLORE JKBF</span>
            </Link>

            <Link
              href="/arena-3d"
              className="w-full sm:w-auto text-center px-7 sm:px-9 py-3.5 sm:py-4 bg-[#140608] hover:bg-[#200a0d] border border-[#D91F2C]/60 hover:border-[#D91F2C] text-[#ff616d] hover:text-white font-display text-base sm:text-lg tracking-wider uppercase transition-all rounded-sm active:scale-95 shadow-[0_0_20px_rgba(217,31,44,0.25)] inline-flex items-center justify-center gap-2"
            >
              <span>VENUE ARENA 3D</span>
              <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-xs bg-[#D91F2C] text-white">
                3D
              </span>
            </Link>
          </div>

          {/* 3-Pillar Authority Stat Bar */}
          <div className="mt-6 sm:mt-8 pt-2 sm:pt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-technical uppercase">
            <div className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1 rounded-xs bg-black/60 border border-white/10">
              <span className="w-1.5 h-1.5 rounded-xs bg-[#D91F2C]" />
              <span className="text-[#C4C4CC] font-medium">7 Program Kejuaraan</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1 rounded-xs bg-black/60 border border-white/10">
              <span className="w-1.5 h-1.5 rounded-xs bg-[#D91F2C]" />
              <span className="text-[#C4C4CC] font-medium">Standar WAKO Indonesia</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1 rounded-xs bg-black/60 border border-white/10">
              <span className="w-1.5 h-1.5 rounded-xs bg-[#D91F2C]" />
              <span className="text-[#C4C4CC] font-medium">Reg. s/d {registrationConfig.displayDeadline}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          REFINED ATHLETIC LUXURY TICKER (UFC × GLORY × High-End Sportswear)
          Deep obsidian background, hairline borders, micro-dot accents.
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
              <span className="text-[#F4F0E8] font-bold">HARI H: {EVENT_CONFIG.dates.display}</span>
              <span className="w-1 h-1 rounded-full bg-white/20 shrink-0" />
              <span className="text-[#8E8E98] font-medium">{EVENT_CONFIG.venue.name}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D91F2C] shrink-0 opacity-80" />
              <span className="text-[#F4F0E8] font-semibold">{EVENT_CONFIG.tagline}</span>
              <span className="w-1 h-1 rounded-full bg-white/20 shrink-0" />
              <span className="text-[#8E8E98] font-medium">REGISTRASI S/D {registrationConfig.displayDeadline.toUpperCase()}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D91F2C] shrink-0 opacity-80" />
              <span className="text-[#8E8E98] font-medium">WAKO RULES • PENGPROV KBI DIY</span>
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
      <section id="gateways" className="py-20 sm:py-28 lg:py-32 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto scroll-mt-20">
        <div className="mb-10 sm:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <p className="font-technical text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold mb-2">
              DUA JALUR EKSPLORASI UTAMA
            </p>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-[#F4F0E8] leading-[0.92]">
              JELAJAHI JKBF.
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#8F8E8B] max-w-md leading-relaxed">
            Pilih jalur Anda: arena kejuaraan kickboxing resmi berstandar WAKO atau wadah prestasi mahasiswa dan pelajar berprestasi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* GATEWAY 01: THE FIGHTS */}
          <Link
            href="/championship"
            className="group relative h-[520px] sm:h-[580px] lg:h-[640px] overflow-hidden border border-white/10 bg-[#111114] flex flex-col justify-between p-8 sm:p-12 transition-all duration-500 hover:border-[#D91F2C] hover:shadow-[0_0_50px_rgba(217,31,44,0.2)] rounded-sm"
          >
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

            <div className="relative z-10 flex items-center justify-between">
              <span className="font-technical text-xs uppercase tracking-[0.2em] text-[#D91F2C] font-bold bg-black/85 px-3.5 py-1.5 border border-white/15 backdrop-blur-md rounded-xs">
                01 // KEJUARAAN RESMI WAKO
              </span>
              <div className="w-11 h-11 rounded-sm bg-white/10 border border-white/15 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-[#D91F2C] group-hover:border-[#D91F2C]">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>

            <div className="relative z-10 space-y-4">
              <div>
                <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#F5F5F7] group-hover:text-white transition-colors">
                  THE FIGHTS
                </h3>
                <p className="font-technical text-xs sm:text-sm text-[#D91F2C] uppercase tracking-wider font-semibold mt-1">
                  7 PROGRAM KEJUARAAN • STANDAR WAKO INDONESIA
                </p>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-[#86868B] font-sans pt-3 border-t border-white/10">
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-xs bg-[#D91F2C] shrink-0" />
                  <span className="text-[#C4C4CC]">Kejurda Kickboxing DIY 2026 (Seleksi Atlet Resmi Daerah &amp; Kontingen)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-xs bg-[#D91F2C] shrink-0" />
                  <span className="text-[#C4C4CC]">Redy Open Championship II (Turnamen Terbuka Camp &amp; Sasana Nasional)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-xs bg-[#D91F2C] shrink-0" />
                  <span className="text-[#C4C4CC]">Super Fights &amp; Kejuaraan Terbuka (Format Resmi WAKO Rules)</span>
                </li>
              </ul>

              <div className="pt-2">
                <span className="font-display text-base sm:text-lg tracking-wider text-[#F5F5F7] group-hover:text-[#D91F2C] inline-flex items-center gap-2 transition-colors">
                  <span>MASUK KE DETAIL KEJUARAAN</span>
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </span>
              </div>
            </div>
          </Link>

          {/* GATEWAY 02: THE MOVEMENT */}
          <a
            href={jkbfLinks.fighterRegistration}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative h-[520px] sm:h-[580px] lg:h-[640px] overflow-hidden border border-white/10 bg-[#111114] flex flex-col justify-between p-8 sm:p-12 transition-all duration-500 hover:border-[#D91F2C] hover:shadow-[0_0_50px_rgba(217,31,44,0.2)] rounded-sm"
          >
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image
                src="/images/v9/05_FOTO_FIGHT_MOBILE_TANPA_TEKST.png"
                alt="University Open & SMA Open JKBF 2026"
                fill
                quality={85}
                className="object-cover object-center filter grayscale contrast-125 brightness-75 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-90"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-transparent" />
            </div>

            <div className="relative z-10 flex items-center justify-between">
              <span className="font-technical text-xs uppercase tracking-[0.2em] text-[#D91F2C] font-bold bg-black/85 px-3.5 py-1.5 border border-white/15 backdrop-blur-md rounded-xs">
                02 // JALUR PELAJAR &amp; MAHASISWA
              </span>
              <div className="w-11 h-11 rounded-sm bg-white/10 border border-white/15 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-[#D91F2C] group-hover:border-[#D91F2C]">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>

            <div className="relative z-10 space-y-4">
              <div>
                <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#F5F5F7] group-hover:text-white transition-colors">
                  THE MOVEMENT
                </h3>
                <p className="font-technical text-xs sm:text-sm text-[#D91F2C] uppercase tracking-wider font-semibold mt-1">
                  WADAH PRESTASI MAHASISWA &amp; ATLET PELAJAR
                </p>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-[#86868B] font-sans pt-3 border-t border-white/10">
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-xs bg-[#D91F2C] shrink-0" />
                  <span className="text-[#C4C4CC]">University Open (Adu Nyali Mahasiswa Antar-Kampus se-Indonesia)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-xs bg-[#D91F2C] shrink-0" />
                  <span className="text-[#C4C4CC]">SMA Open (Panggung Prestasi &amp; Jam Terbang Atlet Pelajar Berbakat)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-xs bg-[#D91F2C] shrink-0" />
                  <span className="text-[#C4C4CC]">Pembinaan Atlet Muda (Jalur Sertifikasi Resmi Pengprov KBI DIY)</span>
                </li>
              </ul>

              <div className="pt-2">
                <span className="font-display text-base sm:text-lg tracking-wider text-[#F5F5F7] group-hover:text-[#D91F2C] inline-flex items-center gap-2 transition-colors">
                  <span>DAFTAR ATLET &amp; KONSULTASI</span>
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </span>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 03: 3D ARENA PERTANDINGAN (INTERACTIVE VENUE SHOWCASE)
          Updated with DAY 1 & DAY 2 configurations, GOR Pancasila UGM.
         ═══════════════════════════════════════════════════════════════════════ */}
      <HomeArenaPreview />

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 04: YOUR FIGHT STARTS HERE (REGISTRASI TICKET)
         ═══════════════════════════════════════════════════════════════════════ */}
      <section id="registration" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="relative overflow-hidden bg-[#111114] border border-white/15 p-8 sm:p-12 lg:p-16 rounded-sm shadow-2xl">
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-25">
            <Image
              src="/images/v9/04_FOTO_FIGHT_DESKTOP_TANPA_TEKST.png"
              alt="Fighter Kickboxing JKBF 2026"
              fill
              className="object-cover object-right filter grayscale contrast-125"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111114] via-[#111114]/90 to-transparent" />
          </div>

          <div className="relative z-10 max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#D91F2C] text-white rounded-xs">
              <span className="w-2 h-2 rounded-xs bg-white animate-pulse" />
              <span className="font-technical text-xs font-bold uppercase tracking-[0.2em]">
                {registrationConfig.statusLabel}
              </span>
            </div>

            <div className="space-y-2">
              <p className="font-technical text-xs sm:text-sm uppercase tracking-[0.25em] text-[#D91F2C] font-bold">
                BATAS PENDAFTARAN: {registrationConfig.displayDeadline.toUpperCase()}
              </p>
              <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-[0.9]">
                YOUR FIGHT<br />STARTS HERE.
              </h2>
            </div>

            <p className="font-sans text-base text-[#86868B] leading-relaxed max-w-xl">
              Kesempatan masih terbuka untuk mengikuti seluruh rangkaian kejuaraan JKBF 2026. Daftarkan dirimu dan tim sasana melalui formulir resmi yang telah disediakan.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={jkbfLinks.fighterRegistration}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 sm:px-10 py-4 bg-[#D91F2C] hover:bg-[#B81521] active:scale-[0.98] text-white font-display text-base sm:text-lg tracking-wider uppercase text-center transition-all inline-flex items-center justify-center gap-2 shadow-xl shadow-red-950/50 rounded-sm"
              >
                <span>DAFTAR SEKARANG</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>

              <a
                href={jkbfLinks.fighterSupportWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 bg-white/10 hover:bg-white/15 border border-white/15 text-[#F5F5F7] hover:text-white font-display text-base tracking-wider uppercase text-center transition-all inline-flex items-center justify-center gap-2 rounded-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#D91F2C]" />
                <span>HUBUNGI ADMIN FIGHTER (PRIYA)</span>
              </a>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-xs font-technical text-[#86868B]">
              <span className="w-1.5 h-1.5 rounded-xs bg-[#D91F2C]" />
              <span>
                Narahubung Resmi Registrasi: <strong className="text-white">{registrationConfig.adminName}</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 05: FAST COMBAT SPORT TILES (UTILITY STRIP)
          3 Clean, High-contrast cards for secondary actions — zero drag!
         ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto border-t border-white/[0.08]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Tile 1: WAKO Standards */}
          <div className="p-8 bg-[#111114] border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between rounded-sm shadow-xl">
            <div className="space-y-4">
              <div className="p-3 bg-[#D91F2C]/10 border border-[#D91F2C]/30 text-[#D91F2C] w-fit rounded-xs">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-display text-2xl uppercase tracking-wider text-white">
                KOMPETISI RESMI WAKO
              </h3>
              <p className="text-xs sm:text-sm text-[#86868B] font-sans leading-relaxed">
                Seluruh pertandingan dijalankan dengan regulasi resmi WAKO (World Association of Kickboxing Organizations) untuk tatami dan ring sport.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-white/[0.08]">
              <Link
                href="/championship"
                className="font-display text-sm tracking-wider uppercase text-[#D91F2C] hover:text-white inline-flex items-center gap-1.5 transition-colors"
              >
                <span>LIHAT 7 FORMAT TANDING</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Tile 2: Jalur Prestasi Pelajar & Mahasiswa */}
          <div className="p-8 bg-[#111114] border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between rounded-sm shadow-xl">
            <div className="space-y-4">
              <div className="p-3 bg-[#D91F2C]/10 border border-[#D91F2C]/30 text-[#D91F2C] w-fit rounded-xs">
                <Trophy className="w-5 h-5" />
              </div>
              <h3 className="font-display text-2xl uppercase tracking-wider text-white">
                JALUR PRESTASI KHUSUS
              </h3>
              <p className="text-xs sm:text-sm text-[#86868B] font-sans leading-relaxed">
                Panggung resmi pengasahan jam terbang dan sertifikasi atlet untuk pelajar SMA/SMK dan mahasiswa perguruan tinggi se-Indonesia.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-white/[0.08]">
              <a
                href={jkbfLinks.fighterRegistration}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-sm tracking-wider uppercase text-[#D91F2C] hover:text-white inline-flex items-center gap-1.5 transition-colors"
              >
                <span>DAFTAR JALUR PRESTASI</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Tile 3: Tanya Jawab Resmi (FAQ) */}
          <div className="p-8 bg-[#111114] border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between rounded-sm shadow-xl">
            <div className="space-y-4">
              <div className="p-3 bg-white/5 border border-white/10 text-[#F5F5F7] w-fit rounded-xs">
                <HelpCircle className="w-5 h-5 text-[#D91F2C]" />
              </div>
              <h3 className="font-display text-2xl uppercase tracking-wider text-white">
                TANYA JAWAB RESMI
              </h3>
              <p className="text-xs sm:text-sm text-[#86868B] font-sans leading-relaxed">
                Informasi seputar legalitas kejuaraan, nomor tanding, tata tertib atlet, dan kontak panitia resmi JKBF 2026.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-white/[0.08]">
              <Link
                href="/faq"
                className="font-display text-sm tracking-wider uppercase text-[#D91F2C] hover:text-white inline-flex items-center gap-1.5 transition-colors"
              >
                <span>LIHAT FAQ RESMI</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
