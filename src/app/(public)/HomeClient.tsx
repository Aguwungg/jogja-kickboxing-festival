"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Compass,
  HelpCircle,
  MapPin,
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
import { PHOTO_REGISTRY } from "@/lib/photo-registry";

export default function HomeClient() {
  return (
    <main className="min-h-screen bg-[#0A0A0C] text-[#F4F0E8] overflow-hidden font-sans">
      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 01: HERO POSTER (CINEMATIC PHOTO-FIRST × GLORY MONUMENTAL)
          Vibrant fight photography with smart directional vignette, compact
          combat countdown, dominant headline, and razor-sharp CTA hierarchy.
         ═══════════════════════════════════════════════════════════════════════ */}
      <section
        className="relative w-full pt-20 sm:pt-24 lg:pt-28 pb-6 sm:pb-8 lg:pb-10 overflow-hidden border-b border-white/[0.08]"
        aria-label="Hero — Jogja Kickboxing Festival 2026"
      >
        {/* Subtle atmospheric ambient glow */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(217,31,44,0.1)_0%,transparent_70%)] pointer-events-none blur-3xl -z-1" />

        {/* ─────────────────────────────────────────────────────────────
            A. MOBILE HERO (PHOTO-FIRST EDITORIAL — INTENTIONAL COMPOSITION)
            Fighter photograph is clearly visible with natural eye focus.
            Dedicated text & CTA zone placed cleanly underneath.
           ───────────────────────────────────────────────────────────── */}
        <div className="lg:hidden w-full flex flex-col">
          {/* 1. Visible Authentic Fighter Photo Container */}
          <div className="relative w-full h-[40vh] min-h-[300px] max-h-[390px] overflow-hidden bg-black select-none">
            <Image
              src={PHOTO_REGISTRY["hero-fight-mobile"].mobilePath}
              alt={PHOTO_REGISTRY["hero-fight-mobile"].alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-[center_30%] filter grayscale contrast-125 brightness-95"
            />
            {/* Subtle bottom fade into content background */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent" />
            <div className="absolute top-0 inset-x-0 h-14 bg-gradient-to-b from-black/70 to-transparent" />

            {/* Live indicator badge on top right */}
            <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-xs bg-black/85 backdrop-blur-md border border-white/15">
              <span className="font-technical text-[9px] uppercase tracking-[0.2em] text-[#EF3340] font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D91F2C] animate-pulse" />
                STANDAR WAKO
              </span>
            </div>
          </div>

          {/* 2. Dedicated Content Area Below Photograph */}
          <div className="px-5 pt-3 pb-6 flex flex-col items-center text-center space-y-4">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-white/[0.04] border border-white/10">
              <span className="w-1.5 h-1.5 rounded-xs bg-[#D91F2C]" />
              <span className="font-technical text-[10px] uppercase tracking-[0.22em] text-[#C4C4CC] font-semibold">
                PENGPROV KBI DIY // JKBF 2026
              </span>
            </div>

            {/* Monumental Condensed Headline */}
            <h1 className="font-display text-5xl sm:text-6xl uppercase tracking-tight leading-[0.88] text-white">
              <span>JOGJA PUNYA </span>
              <span className="text-[#D91F2C]">NYALI.</span>
            </h1>

            {/* Battle Cry */}
            <p className="font-technical text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#86868B] font-semibold">
              {EVENT_CONFIG.tagline}
            </p>

            {/* Venue & Date Stadium Lockup */}
            <div className="pt-1 pb-1">
              <p className="font-display text-2xl uppercase tracking-wider text-white font-black leading-none">
                {EVENT_CONFIG.venue.name}
              </p>
              <p className="font-technical text-sm uppercase tracking-[0.2em] text-[#EF3340] font-bold mt-1">
                {EVENT_CONFIG.dates.display}
              </p>
            </div>

            {/* Primary & Secondary Action CTAs */}
            <div className="w-full max-w-xs space-y-2.5 pt-1">
              <a
                href={jkbfLinks.fighterRegistration}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 bg-[#D91F2C] hover:bg-[#B81521] active:scale-[0.98] text-white font-display text-base tracking-wider uppercase transition-all rounded-xs shadow-[0_0_25px_rgba(217,31,44,0.4)] flex items-center justify-center gap-2 font-bold"
              >
                <span>DAFTAR SEKARANG</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <Link
                href="/championship"
                className="w-full py-2.5 px-6 bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 text-[#C4C4CC] hover:text-white font-display text-sm tracking-wider uppercase transition-colors rounded-xs flex items-center justify-center gap-1.5"
              >
                <span>EXPLORE JKBF</span>
              </Link>
            </div>

            {/* Compact Countdown Strip */}
            <div className="w-full pt-3 max-w-sm">
              <CountdownTimer targetIso={EVENT_CONFIG.dates.startIso} />
            </div>

            {/* 3 Authority Badges */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-[9px] font-technical uppercase">
              <span className="px-2.5 py-1 bg-white/[0.03] border border-white/10 text-[#86868B] rounded-xs">
                7 Program Kejuaraan
              </span>
              <span className="px-2.5 py-1 bg-white/[0.03] border border-white/10 text-[#86868B] rounded-xs">
                Standar WAKO
              </span>
              <span className="px-2.5 py-1 bg-white/[0.03] border border-white/10 text-[#86868B] rounded-xs">
                Reg. s/d {registrationConfig.displayDeadline}
              </span>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            B. DESKTOP HERO (CINEMATIC EDITORIAL SPLIT)
            Left: Typography, Event Lockup & CTAs (~45%).
            Right: Large High-Contrast Monochrome Fight Photography (~55%).
           ───────────────────────────────────────────────────────────── */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 xl:gap-14 items-center min-h-[78vh] max-w-[1440px] mx-auto px-8 lg:px-12 py-4 xl:py-8">
          {/* LEFT COLUMN: Editorial Content (5 cols) */}
          <div className="lg:col-span-5 space-y-6 z-10">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xs bg-black/80 border border-white/15 backdrop-blur-md select-none">
              <span className="w-2 h-2 rounded-xs bg-[#D91F2C]" />
              <span className="font-technical text-xs uppercase tracking-[0.25em] text-[#F5F5F7] font-semibold">
                PENGPROV KBI DIY // STANDAR RESMI WAKO
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="font-display text-6xl xl:text-7xl 2xl:text-8xl font-black uppercase tracking-tight leading-[0.88] text-white">
                <span>JOGJA PUNYA </span>
                <span className="text-[#D91F2C] block">NYALI.</span>
              </h1>
              <p className="font-technical text-xs uppercase tracking-[0.32em] text-[#86868B] font-semibold">
                {EVENT_CONFIG.tagline}
              </p>
            </div>

            {/* Venue & Date Stadium Typography */}
            <div className="border-l-2 border-[#D91F2C] pl-4 py-0.5 space-y-1 select-none">
              <p className="font-display text-2xl xl:text-3xl uppercase tracking-wider text-white font-bold leading-none">
                {EVENT_CONFIG.venue.name}
              </p>
              <p className="font-technical text-base xl:text-lg uppercase tracking-[0.2em] text-[#EF3340] font-bold">
                {EVENT_CONFIG.dates.display}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 pt-1">
              <a
                href={jkbfLinks.fighterRegistration}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-[#D91F2C] hover:bg-[#B81521] active:scale-95 text-white font-display text-base tracking-wider uppercase transition-all rounded-xs shadow-[0_0_30px_rgba(217,31,44,0.4)] inline-flex items-center gap-2 font-bold"
              >
                <span>DAFTAR SEKARANG</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <Link
                href="/championship"
                className="px-7 py-3.5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/20 hover:border-white/40 text-[#F5F5F7] hover:text-white font-display text-base tracking-wider uppercase transition-all rounded-xs active:scale-95"
              >
                <span>EXPLORE JKBF</span>
              </Link>
            </div>

            {/* Integrated Compact Countdown */}
            <div className="pt-2 max-w-sm">
              <CountdownTimer targetIso={EVENT_CONFIG.dates.startIso} />
            </div>

            {/* 3 Authority Badges */}
            <div className="pt-1 flex flex-wrap items-center gap-2 text-xs font-technical uppercase">
              <span className="px-3 py-1 bg-black/60 border border-white/10 text-[#C4C4CC] rounded-xs">
                7 Program Kejuaraan
              </span>
              <span className="px-3 py-1 bg-black/60 border border-white/10 text-[#C4C4CC] rounded-xs">
                Standar WAKO
              </span>
              <span className="px-3 py-1 bg-black/60 border border-white/10 text-[#C4C4CC] rounded-xs">
                Reg. s/d {registrationConfig.displayDeadline}
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: Authentic Fight Photography (7 cols) */}
          <div className="lg:col-span-7 relative h-[560px] xl:h-[640px] 2xl:h-[700px] w-full rounded-sm overflow-hidden select-none border border-white/10 bg-black shadow-2xl">
            <Image
              src={PHOTO_REGISTRY["hero-fight-impact"].desktopPath}
              alt={PHOTO_REGISTRY["hero-fight-impact"].alt}
              fill
              priority
              sizes="(max-width: 1440px) 58vw, 800px"
              className="object-cover object-[center_35%] filter grayscale contrast-125 brightness-95"
            />
            {/* Soft edge blend into the dark canvas on the left */}
            <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#0A0A0C] via-[#0A0A0C]/40 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0A0A0C]/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-black/80 backdrop-blur-md border border-white/15 rounded-xs">
              <span className="font-technical text-[10px] uppercase tracking-[0.2em] text-[#EF3340] font-bold">
                WAKO RINGSPORT // HIGH INTENSITY
              </span>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          {/* GATEWAY 01: THE FIGHTS */}
          <Link
            href="/championship"
            className="group relative h-[460px] sm:h-[540px] lg:h-[600px] overflow-hidden border border-white/10 bg-[#111114] flex flex-col justify-between p-6 sm:p-10 lg:p-12 transition-all duration-500 hover:border-[#D91F2C] hover:shadow-[0_0_50px_rgba(217,31,44,0.25)] rounded-sm"
          >
            <div className="absolute inset-0 z-0 overflow-hidden">
              <picture className="absolute inset-0 w-full h-full">
                <source
                  media="(max-width: 767px)"
                  srcSet={PHOTO_REGISTRY["the-fights-intensity"].mobilePath}
                  type="image/webp"
                />
                <img
                  src={PHOTO_REGISTRY["the-fights-intensity"].desktopPath}
                  alt={PHOTO_REGISTRY["the-fights-intensity"].alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center filter grayscale contrast-125 brightness-95 transition-transform duration-700 group-hover:scale-105"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-black/35 to-black/20 group-hover:via-black/25 transition-colors" />
            </div>

            <div className="relative z-10 flex items-center justify-between">
              <span className="font-technical text-xs uppercase tracking-[0.2em] text-[#D91F2C] font-bold bg-black/85 px-3.5 py-1.5 border border-white/15 backdrop-blur-md rounded-xs">
                01 // KEJUARAAN RESMI WAKO
              </span>
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-sm bg-white/10 border border-white/15 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-[#D91F2C] group-hover:border-[#D91F2C]">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>

            <div className="relative z-10 space-y-4">
              <div>
                <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#F5F5F7] group-hover:text-white transition-colors">
                  THE FIGHTS
                </h3>
                <p className="font-technical text-xs sm:text-sm text-[#EF3340] uppercase tracking-wider font-semibold mt-1">
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

              <div className="pt-1 sm:pt-2">
                <span className="font-display text-base sm:text-lg tracking-wider text-[#F5F5F7] group-hover:text-[#EF3340] inline-flex items-center gap-2 transition-colors">
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
            className="group relative h-[460px] sm:h-[540px] lg:h-[600px] overflow-hidden border border-white/10 bg-[#111114] flex flex-col justify-between p-6 sm:p-10 lg:p-12 transition-all duration-500 hover:border-[#D91F2C] hover:shadow-[0_0_50px_rgba(217,31,44,0.25)] rounded-sm"
          >
            <div className="absolute inset-0 z-0 overflow-hidden">
              <picture className="absolute inset-0 w-full h-full">
                <source
                  media="(max-width: 767px)"
                  srcSet={PHOTO_REGISTRY["movement-team-spirit"].mobilePath}
                  type="image/webp"
                />
                <img
                  src={PHOTO_REGISTRY["movement-team-spirit"].desktopPath}
                  alt={PHOTO_REGISTRY["movement-team-spirit"].alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center filter grayscale contrast-110 brightness-95 transition-transform duration-700 group-hover:scale-105"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-black/35 to-black/20 group-hover:via-black/25 transition-colors" />
            </div>

            <div className="relative z-10 flex items-center justify-between">
              <span className="font-technical text-xs uppercase tracking-[0.2em] text-[#D91F2C] font-bold bg-black/85 px-3.5 py-1.5 border border-white/15 backdrop-blur-md rounded-xs">
                02 // JALUR PELAJAR &amp; MAHASISWA
              </span>
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-sm bg-white/10 border border-white/15 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-[#D91F2C] group-hover:border-[#D91F2C]">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>

            <div className="relative z-10 space-y-4">
              <div>
                <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#F5F5F7] group-hover:text-white transition-colors">
                  THE MOVEMENT
                </h3>
                <p className="font-technical text-xs sm:text-sm text-[#EF3340] uppercase tracking-wider font-semibold mt-1">
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

              <div className="pt-1 sm:pt-2">
                <span className="font-display text-base sm:text-lg tracking-wider text-[#F5F5F7] group-hover:text-[#EF3340] inline-flex items-center gap-2 transition-colors">
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
      <div id="arena-3d" className="scroll-mt-20">
        <HomeArenaPreview />
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 04: YOUR FIGHT STARTS HERE (REGISTRASI TICKET)
         ═══════════════════════════════════════════════════════════════════════ */}
      <section id="registration" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="relative overflow-hidden bg-[#111114] border border-white/15 p-8 sm:p-12 lg:p-16 rounded-sm shadow-2xl">
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-45 sm:opacity-55">
            <picture className="absolute inset-0 w-full h-full">
              <source
                media="(max-width: 767px)"
                srcSet={PHOTO_REGISTRY["fighter-backstage"].mobilePath}
                type="image/webp"
              />
              <img
                src={PHOTO_REGISTRY["fighter-backstage"].desktopPath}
                alt={PHOTO_REGISTRY["fighter-backstage"].alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-right filter grayscale contrast-120 brightness-95"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-r from-[#111114] via-[#111114]/85 to-transparent" />
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
          SECTION 05: VENUE & EVENT DAY GUIDE TEASER (OFFICIAL EVENT HUB)
         ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-xs bg-[#D91F2C]" />
              <span className="font-technical text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
                OFFICIAL EVENT HUB // PANDUAN PENGUNJUNG
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-none">
              SIAPKAN DIRI MENUJU ARENA<span className="text-[#D91F2C]">.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#A1A1A6] font-sans max-w-md leading-relaxed">
            Akses cepat panduan rute transportasi luar kota, tata tertib hari tanding, dan pembaruan resmi festival.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Card 1: Venue Guide */}
          <div className="p-8 bg-[#111114] border border-white/10 hover:border-white/30 rounded-xs transition-all flex flex-col justify-between space-y-6 group shadow-2xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-[#D91F2C]/10 border border-[#D91F2C]/30 text-[#D91F2C] rounded-xs">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="font-technical text-[10px] uppercase tracking-[0.2em] text-[#86868B]">
                  BULAKSUMUR UGM
                </span>
              </div>
              <h3 className="font-display text-3xl uppercase tracking-wide text-white group-hover:text-[#EF3340] transition-colors">
                VENUE &amp; TRANSPORT GUIDE
              </h3>
              <p className="text-xs sm:text-sm text-[#C4C4CC] leading-relaxed font-sans">
                Lokasi resmi kejuaraan di GOR Pancasila UGM (kini GOR Nusantara UGM). Dilengkapi pemilih rute navigasi instan dari stasiun, bandara, terminal, dan fasilitas sekitar arena.
              </p>
            </div>
            <div className="pt-4 border-t border-white/[0.08]">
              <Link
                href="/venue"
                className="inline-flex items-center gap-2 font-display text-base tracking-wider uppercase text-white hover:text-[#EF3340] transition-colors"
              >
                <span>BUKA PANDUAN VENUE &amp; RUTE</span>
                <ArrowUpRight className="w-4 h-4 text-[#D91F2C]" />
              </Link>
            </div>
          </div>

          {/* Card 2: Event Day Guide */}
          <div className="p-8 bg-[#111114] border border-white/10 hover:border-white/30 rounded-xs transition-all flex flex-col justify-between space-y-6 group shadow-2xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-white/5 border border-white/15 text-white rounded-xs">
                  <Compass className="w-6 h-6 text-[#D91F2C]" />
                </div>
                <span className="font-technical text-[10px] uppercase tracking-[0.2em] text-[#86868B]">
                  19–20 DES 2026
                </span>
              </div>
              <h3 className="font-display text-3xl uppercase tracking-wide text-white group-hover:text-[#EF3340] transition-colors">
                YOUR FIGHT DAY GUIDE
              </h3>
              <p className="text-xs sm:text-sm text-[#C4C4CC] leading-relaxed font-sans">
                Pedoman praktis hari H untuk atlet, pelatih, kontingen, dan penonton tribun. Regulasi WAKO, prosedur timbang badan, serta pemisahan kontak operasional resmi.
              </p>
            </div>
            <div className="pt-4 border-t border-white/[0.08]">
              <Link
                href="/event-guide"
                className="inline-flex items-center gap-2 font-display text-base tracking-wider uppercase text-white hover:text-[#EF3340] transition-colors"
              >
                <span>BUKA FIGHT DAY GUIDE</span>
                <ArrowUpRight className="w-4 h-4 text-[#D91F2C]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 06: FAST COMBAT SPORT TILES (UTILITY STRIP)
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
