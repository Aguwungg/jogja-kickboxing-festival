"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Calendar,
  ChevronRight,
  Handshake,
  MapPin,
  MessageCircle,
} from "lucide-react";
import CountdownTimer from "@/components/home/CountdownTimer";
import { InstagramIcon, TikTokIcon } from "@/components/layout/SocialIcons";
import WhatsNewSection from "@/components/whats-new/WhatsNewSection";
import type { WhatsNewItem } from "@/lib/whats-new";
import {
  EVENT_CONFIG,
  jkbfLinks,
  megaBintangConfig,
  partnershipConfig,
  publicationConfig,
  registrationConfig,
  smaOpenConfig,
  universityOpenConfig,
} from "@/lib/event-config";

const TICKER_ITEMS = [
  EVENT_CONFIG.campaign,
  EVENT_CONFIG.dates.display,
  EVENT_CONFIG.venue.fullDisplay,
  EVENT_CONFIG.tagline,
  `PENDAFTARAN S/D ${registrationConfig.displayDeadline}`,
  `MEGA BINTANG: ${megaBintangConfig.featuredName}`,
];

const EDITORIAL_PILLARS = [
  {
    number: "01",
    eyebrow: "7 PROGRAM KEJUARAAN",
    title: "Kejurda DIY hingga Mega Bintang",
    description:
      "Kompetisi resmi dari kategori pelajar SMA, mahasiswa, sasana se-Indonesia, hingga partai undangan Mega Bintang.",
  },
  {
    number: "02",
    eyebrow: "STANDAR WAKO RESMI",
    title: "Tatami & Ring Fighting",
    description:
      "Point Fighting, Kick Light, Full Contact, Low Kick, dan K-1 Style dengan penjurian resmi bersertifikat.",
  },
  {
    number: "03",
    eyebrow: "VENUE TERKONFIRMASI",
    title: EVENT_CONFIG.venue.name,
    description: `Dua hari penuh pada ${EVENT_CONFIG.dates.display} di gelanggang olahraga ikonik Yogyakarta.`,
  },
  {
    number: "04",
    eyebrow: "PENYELENGGARA RESMI",
    title: "Pengprov KBI DIY × Noise Comm",
    description:
      "Sinergi badan keolahragaan kickboxing resmi DIY bersama promotor kreatif Noise Comm Indonesia.",
  },
] as const;

export default function HomeClient({
  whatsNewItems = [],
}: {
  whatsNewItems?: WhatsNewItem[];
}) {
  return (
    <div className="w-full overflow-x-hidden bg-[#000000] text-[#F5F5F7]">
      {/* ─── 1. HERO SECTION (FIGHT POSTER STYLE) ─────────────────────────────── */}
      <section className="relative min-h-[88dvh] flex items-center pt-24 sm:pt-28 pb-14 sm:pb-20 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="/images/v9/04_FOTO_FIGHT_DESKTOP_TANPA_TEKST.png"
            alt="Pertarungan kickboxing di atas ring Jogja Kickboxing Festival 2026"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover object-center sm:object-[65%_25%] opacity-60 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/80 to-[#000000]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-[#000000]/75" />
          <div className="absolute inset-0 combat-grain pointer-events-none" />
          <div className="hidden lg:block absolute inset-0 bg-[radial-gradient(circle_at_78%_32%,rgba(217,31,44,0.28),transparent_52%)]" />
        </div>

        <div className="editorial-container relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
            {/* Hero Headline & Primary CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex flex-wrap items-center gap-2.5 px-3.5 py-1.5 bg-black/75 border-l-2 border-[#D91F2C] border-y border-r border-white/15 rounded-xs">
                <span className="w-2 h-2 rounded-full bg-[#D91F2C] animate-pulse shrink-0" />
                <span className="font-technical text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#F5F5F7]">
                  {EVENT_CONFIG.name}
                </span>
                <span className="text-white/25 hidden sm:inline">•</span>
                <span className="font-technical text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#EF3340]">
                  {EVENT_CONFIG.campaign}
                </span>
              </div>

              <div className="space-y-2.5">
                <h1 className="font-display text-[clamp(3.5rem,1.25rem+8.5vw,7.5rem)] font-black uppercase leading-[0.84] tracking-tight text-white">
                  JOGJA PUNYA{" "}
                  <span className="text-[#D91F2C] block sm:inline">
                    NYALI.
                  </span>
                </h1>
                <p className="font-technical text-xs sm:text-sm font-bold uppercase tracking-[0.28em] text-[#E2BA75]">
                  {EVENT_CONFIG.tagline}
                </p>
              </div>

              {/* Confirmed Dates & Venue Strip */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 pt-1">
                <div className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-[#0D0D10]/95 border border-white/15 rounded-xs">
                  <Calendar className="w-4 h-4 text-[#D91F2C] shrink-0" />
                  <span className="font-technical text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                    {EVENT_CONFIG.dates.display}
                  </span>
                </div>
                <Link
                  href="/venue"
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-[#0D0D10]/95 hover:bg-[#19191F] border border-white/15 hover:border-[#D91F2C]/60 rounded-xs transition-colors"
                >
                  <MapPin className="w-4 h-4 text-[#D91F2C] shrink-0" />
                  <span className="font-technical text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                    {EVENT_CONFIG.venue.fullDisplay}
                  </span>
                </Link>
              </div>

              {/* Hero CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <a
                  href={jkbfLinks.fighterRegistration}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 sm:px-9 py-4 bg-[#D91F2C] hover:bg-[#B81521] active:scale-[0.98] text-white font-display text-lg sm:text-xl tracking-wider uppercase rounded-xs transition-all shadow-[0_0_32px_rgba(217,31,44,0.5)]"
                >
                  DAFTAR SEBAGAI FIGHTER
                  <ArrowUpRight className="w-5 h-5" />
                </a>
                <Link
                  href="/championship"
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-4 bg-white/[0.06] hover:bg-white/[0.12] border border-white/25 text-[#F5F5F7] font-display text-lg sm:text-xl tracking-wider uppercase rounded-xs transition-all"
                >
                  LIHAT PROGRAM
                  <ChevronRight className="w-5 h-5 text-[#EF3340]" />
                </Link>
              </div>
            </div>

            {/* Hero Right Column: Countdown & Official Status Card */}
            <div className="lg:col-span-5">
              <div className="ring-corner-frame bg-[#0D0D10]/90 backdrop-blur-md border border-white/15 p-5 sm:p-7 rounded-xs shadow-2xl space-y-5">
                <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-3.5">
                  <span className="font-technical text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#EF3340]">
                    {EVENT_CONFIG.dates.label}
                  </span>
                  <span className="font-technical text-[10px] uppercase tracking-wider text-[#86868B]">
                    WIB • UTC+7
                  </span>
                </div>

                <CountdownTimer
                  targetIso={EVENT_CONFIG.dates.startIso}
                  label={`MENUJU ${EVENT_CONFIG.dates.display}`}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-white/10 text-left">
                  <div className="bg-white/[0.03] border border-white/10 p-3 rounded-xs">
                    <span className="font-technical text-[10px] uppercase tracking-widest text-[#86868B] block">
                      REGISTRASI FIGHTER
                    </span>
                    <span className="font-display text-lg uppercase tracking-wide text-white block mt-0.5">
                      S/D {registrationConfig.displayDeadline}
                    </span>
                  </div>
                  <div className="bg-white/[0.03] border border-white/10 p-3 rounded-xs">
                    <span className="font-technical text-[10px] uppercase tracking-widest text-[#86868B] block">
                      MEGA BINTANG HADIR
                    </span>
                    <span className="font-display text-lg uppercase tracking-wide text-[#EF3340] block mt-0.5">
                      {megaBintangConfig.featuredName}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. OFFICIAL MARQUEE TICKER ──────────────────────────────────────── */}
      <div className="bg-[#D91F2C] text-white py-3 border-b border-black/20 overflow-hidden">
        <div className="flex w-max animate-marquee items-center">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
            <div key={idx} className="flex items-center shrink-0">
              <span className="font-technical text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] px-5 sm:px-7 whitespace-nowrap">
                {item}
              </span>
              <span className="text-white/60 text-xs" aria-hidden="true">
                {"//"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── 3. ABOUT JKBF 2026 (EDITORIAL 2-COLUMN COMBAT GRID) ──────────────── */}
      <section id="about" className="py-16 sm:py-24 bg-[#09090B] border-b border-white/10">
        <div className="editorial-container space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-white/10 pb-8">
            <div className="lg:col-span-7 space-y-3">
              <p className="font-technical text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
                TENTANG EVENT // {EVENT_CONFIG.campaign}
              </p>
              <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight leading-[0.88] text-white">
                SATU ARENA. NYALI YOGYAKARTA.
              </h2>
            </div>
            <div className="lg:col-span-5 space-y-4">
              <p className="text-sm sm:text-base text-[#C4C4CC] leading-relaxed">
                Diselenggarakan oleh Pengprov KBI DIY bersama Noise Comm Indonesia,{" "}
                {EVENT_CONFIG.name} mempertemukan petarung daerah, sasana se-Indonesia,
                pelajar, dan mahasiswa dalam dua hari duel resmi di{" "}
                <strong className="text-white">
                  {EVENT_CONFIG.venue.fullDisplay}
                </strong>
                .
              </p>
              <Link
                href="/tentang"
                className="inline-flex items-center gap-2 font-technical text-xs font-bold uppercase tracking-widest text-[#EF3340] hover:text-white transition-colors"
              >
                PROFIL LENGKAP &amp; REGULASI
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* 2-Column Editorial Numbered Pillars (No SaaS Icon Boxes) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
            {EDITORIAL_PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="border-t-2 border-white/15 hover:border-[#D91F2C] pt-5 pb-2 transition-colors flex items-start gap-5 sm:gap-7 group"
              >
                <span className="font-display text-5xl sm:text-6xl leading-none text-[#D91F2C] group-hover:text-white transition-colors shrink-0">
                  {pillar.number}
                </span>
                <div className="space-y-1.5">
                  <span className="font-technical text-[10px] font-bold uppercase tracking-[0.22em] text-[#86868B] block">
                    {pillar.eyebrow}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-white leading-none">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed pt-1">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Two Gateways: THE FIGHTS & THE MOVEMENT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
            {/* Gateway 01 */}
            <div className="bg-[#111114] border border-white/15 border-l-4 border-l-[#D91F2C] p-6 sm:p-8 rounded-xs flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <span className="font-technical text-xs font-bold uppercase tracking-[0.2em] text-[#EF3340] block">
                  01 // THE FIGHTS
                </span>
                <h3 className="font-display text-3xl sm:text-5xl uppercase tracking-tight leading-[0.9] text-white">
                  7 PROGRAM KEJUARAAN RESMI
                </h3>
                <p className="text-sm text-[#C4C4CC] leading-relaxed">
                  Seluruh nomor pertandingan menerapkan regulasi resmi Pengprov KBI DIY &amp; WAKO lintas disiplin Tatami dan Ring Sport.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {EVENT_CONFIG.championshipPrograms.map((prog) => (
                    <span
                      key={prog.id}
                      className="px-2.5 py-1 bg-white/[0.04] border border-white/10 font-technical text-[10px] font-bold uppercase tracking-wider text-[#F5F5F7] rounded-xs"
                    >
                      {prog.shortName}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                href="/championship"
                className="inline-flex items-center justify-between w-full px-5 py-4 bg-[#D91F2C] hover:bg-[#B81521] text-white font-display text-lg tracking-wider uppercase rounded-xs transition-colors"
              >
                <span>LIHAT FIGHT CARD &amp; PROGRAM</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Gateway 02 */}
            <div className="bg-[#111114] border border-white/15 border-l-4 border-l-[#E2BA75] p-6 sm:p-8 rounded-xs flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <span className="font-technical text-xs font-bold uppercase tracking-[0.2em] text-[#E2BA75] block">
                  02 // THE MOVEMENT
                </span>
                <h3 className="font-display text-3xl sm:text-5xl uppercase tracking-tight leading-[0.9] text-white">
                  GERAKAN PELAJAR &amp; SASANA NASIONAL
                </h3>
                <p className="text-sm text-[#C4C4CC] leading-relaxed">
                  Arena pembuktian nyata bagi siswa SMA, mahasiswa lintas perguruan tinggi, serta akademi dan camp beladiri dari seluruh Indonesia.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {[
                    "KEJURDA DIY",
                    "REDY OPEN II",
                    "CAMP OPEN",
                    "SMA OPEN",
                    "UNIVERSITY OPEN",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-white/[0.04] border border-white/10 font-technical text-[10px] font-bold uppercase tracking-wider text-[#C4C4CC] rounded-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href="#student-open"
                className="inline-flex items-center justify-between w-full px-5 py-4 bg-white/[0.06] hover:bg-white/[0.12] border border-white/20 text-white font-display text-lg tracking-wider uppercase rounded-xs transition-colors"
              >
                <span>AKSES SMA &amp; UNIVERSITY OPEN</span>
                <ChevronRight className="w-5 h-5 text-[#EF3340]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. MEGA BINTANG SPOTLIGHT: FAISAL GIRU (FIGHT POSTER CARD) ──────── */}
      {publicationConfig.megaBintangFaisalGiru && (
        <section
          id="mega-bintang"
          className="py-16 sm:py-24 bg-[#000000] border-b border-white/10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_50%,rgba(217,31,44,0.18),transparent_55%)] pointer-events-none" />
          <div className="editorial-container relative z-10">
            <div className="ring-corner-frame grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#0B0B0E] border border-[#D91F2C]/50 p-6 sm:p-10 rounded-xs">
              {/* Visual Spotlight */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] overflow-hidden rounded-xs border border-white/15 bg-black">
                  <Image
                    src={megaBintangConfig.image}
                    alt={megaBintangConfig.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover object-top contrast-115"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-2 px-3 py-1.5 bg-[#D91F2C] text-white rounded-xs shadow-lg">
                    <span className="font-technical text-[10px] font-bold uppercase tracking-[0.2em]">
                      {megaBintangConfig.heading}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="font-technical text-[10px] uppercase tracking-[0.2em] text-[#E2BA75] font-bold">
                      MAIN EVENT SPOTLIGHT // JKBF 2026
                    </p>
                    <p className="font-display text-4xl sm:text-5xl uppercase tracking-wide text-white leading-none mt-1">
                      {megaBintangConfig.featuredName}
                    </p>
                  </div>
                </div>
              </div>

              {/* Fight Card Poster Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <p className="font-technical text-xs font-bold uppercase tracking-[0.25em] text-[#EF3340]">
                    PARTAI PUNCAK // {megaBintangConfig.heading}
                  </p>
                  <h2 className="font-display text-6xl sm:text-8xl uppercase tracking-tight leading-[0.84] text-white">
                    {megaBintangConfig.featuredName}
                  </h2>
                </div>

                {/* Matchup Poster Strip (No Unconfirmed Opponent Invented) */}
                <div className="grid grid-cols-1 sm:grid-cols-11 items-center gap-3 p-4 sm:p-5 bg-black border border-white/15 rounded-xs">
                  <div className="sm:col-span-5">
                    <span className="font-technical text-[10px] uppercase tracking-[0.2em] text-[#D91F2C] font-bold block">
                      CONFIRMED FIGHTER
                    </span>
                    <span className="font-display text-2xl sm:text-3xl uppercase text-white tracking-wide">
                      {megaBintangConfig.featuredName}
                    </span>
                  </div>
                  <div className="sm:col-span-1 flex sm:justify-center">
                    <span className="px-2.5 py-1 bg-[#D91F2C] text-white font-display text-lg tracking-widest rounded-xs">
                      VS
                    </span>
                  </div>
                  <div className="sm:col-span-5 sm:text-right">
                    <span className="font-technical text-[10px] uppercase tracking-[0.2em] text-[#86868B] font-bold block">
                      LAWAN / PARTAI RESMI
                    </span>
                    <span className="font-display text-xl sm:text-2xl uppercase text-[#E2BA75] tracking-wide">
                      MENUNGGU PENGUMUMAN PANITIA
                    </span>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-[#F5F5F7] leading-relaxed font-sans">
                  {megaBintangConfig.supportingText}
                </p>

                <p className="text-sm text-[#86868B] leading-relaxed border-l-2 border-[#D91F2C] pl-4">
                  {megaBintangConfig.secondaryNote}
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 pt-2">
                  <a
                    href={jkbfLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#D91F2C] hover:bg-[#B81521] text-white font-display text-base tracking-wider uppercase rounded-xs transition-all"
                  >
                    <InstagramIcon className="w-4 h-4" />
                    UPDATE RESMI {EVENT_CONFIG.social.instagram.handle.toUpperCase()}
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <Link
                    href="/championship#kelas-mega-bintang"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 text-[#F5F5F7] font-display text-base tracking-wider uppercase rounded-xs transition-colors"
                  >
                    PROGRAM KELAS BINTANG
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── 5. WHAT'S NEW (KEPT UNCHANGED IN CODE PER MASTERPLAN) ───────────── */}
      <WhatsNewSection items={whatsNewItems} />

      {/* ─── 6. FIGHTER REGISTRATION BANNER (FULL-BLEED ACTION PHOTO) ────────── */}
      <section
        id="registration"
        className="relative py-20 sm:py-28 bg-[#000000] border-b border-white/10 overflow-hidden"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/v9/04_FOTO_FIGHT_DESKTOP_TANPA_TEKST.png"
            alt="Registrasi fighter Jogja Kickboxing Festival 2026"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-25 grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#0E0507]/90 to-[#000000]/85" />
          <div className="absolute inset-0 combat-grain pointer-events-none" />
        </div>

        <div className="editorial-container relative z-10">
          <div className="ring-corner-frame bg-black/75 backdrop-blur-sm border-2 border-[#D91F2C]/60 p-6 sm:p-10 lg:p-14 rounded-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 bg-[#D91F2C] text-white font-technical text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] rounded-xs">
                  {registrationConfig.statusLabel}
                </span>
                <span className="px-3 py-1 bg-white/[0.08] border border-white/20 text-[#F5F5F7] font-technical text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] rounded-xs">
                  DITUTUP {registrationConfig.displayDeadline}
                </span>
              </div>

              <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl uppercase tracking-tight leading-[0.86] text-white">
                PENDAFTARAN DITUTUP {registrationConfig.displayDeadline}.{" "}
                <span className="text-[#D91F2C]">JANGAN LEWATKAN.</span>
              </h2>

              <p className="text-sm sm:text-base text-[#C4C4CC] leading-relaxed max-w-2xl">
                {registrationConfig.supportingText}
              </p>

              <p className="font-technical text-xs uppercase tracking-wider text-[#86868B]">
                Admin Pendaftaran Fighter:{" "}
                <strong className="text-white">
                  {registrationConfig.adminName}
                </strong>
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3.5">
              <a
                href={jkbfLinks.fighterRegistration}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-5 px-6 bg-[#D91F2C] hover:bg-[#B81521] active:scale-[0.98] text-white font-display text-xl tracking-wider uppercase rounded-xs transition-all inline-flex items-center justify-center gap-2.5 shadow-[0_0_35px_rgba(217,31,44,0.55)]"
              >
                DAFTAR SEKARANG
                <ArrowUpRight className="w-5 h-5" />
              </a>
              <a
                href={jkbfLinks.fighterSupportWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 bg-white/[0.06] hover:bg-white/[0.12] border border-white/20 text-[#F5F5F7] font-display text-lg tracking-wider uppercase rounded-xs transition-all inline-flex items-center justify-center gap-2.5"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                {registrationConfig.adminCtaLabel}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. SMA OPEN & UNIVERSITY OPEN (EDITORIAL SPLIT PANELS) ──────────── */}
      <section
        id="student-open"
        className="py-16 sm:py-24 bg-[#09090B] border-b border-white/10"
      >
        <div className="editorial-container space-y-10">
          <div className="space-y-2.5 max-w-3xl">
            <p className="font-technical text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
              STUDENT &amp; CAMPUS ARENA // {EVENT_CONFIG.campaign}
            </p>
            <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight leading-[0.88] text-white">
              NAIK RING BAWA NAMA SEKOLAH &amp; KAMPUSMU.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* SMA Open */}
            <div className="relative overflow-hidden bg-[#111114] border border-white/15 border-t-4 border-t-[#D91F2C] p-6 sm:p-9 rounded-xs flex flex-col justify-between gap-8">
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between gap-3">
                  <span className="px-3 py-1 bg-[#D91F2C] font-technical text-[10px] font-bold uppercase tracking-[0.2em] text-white rounded-xs">
                    {smaOpenConfig.badge}
                  </span>
                  <span className="font-technical text-[11px] font-bold text-[#86868B]">
                    01 // PELAJAR
                  </span>
                </div>

                <h3 className="font-display text-4xl sm:text-5xl uppercase tracking-tight leading-[0.88] text-white">
                  {smaOpenConfig.headline}
                </h3>

                <p className="text-sm sm:text-base text-[#C4C4CC] leading-relaxed">
                  {smaOpenConfig.supportingText}
                </p>
              </div>

              <div className="pt-2 relative z-10">
                <a
                  href={jkbfLinks.fighterRegistration}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-4 bg-[#D91F2C] hover:bg-[#B81521] text-white font-display text-lg tracking-wider uppercase rounded-xs transition-colors"
                >
                  {smaOpenConfig.ctaLabel}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* University Open */}
            <div className="relative overflow-hidden bg-[#111114] border border-white/15 border-t-4 border-t-[#E2BA75] p-6 sm:p-9 rounded-xs flex flex-col justify-between gap-8">
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between gap-3">
                  <span className="px-3 py-1 bg-[#E2BA75]/20 border border-[#E2BA75]/50 font-technical text-[10px] font-bold uppercase tracking-[0.2em] text-[#E2BA75] rounded-xs">
                    {universityOpenConfig.badge}
                  </span>
                  <span className="font-technical text-[11px] font-bold text-[#86868B]">
                    02 // MAHASISWA
                  </span>
                </div>

                <h3 className="font-display text-4xl sm:text-5xl uppercase tracking-tight leading-[0.88] text-white">
                  {universityOpenConfig.headline}
                </h3>

                <p className="text-sm sm:text-base text-[#C4C4CC] leading-relaxed">
                  {universityOpenConfig.supportingText}
                </p>

                <div className="bg-black/60 border-l-2 border-[#D91F2C] p-4 rounded-r-xs space-y-1">
                  <p className="font-technical text-xs font-bold uppercase tracking-wider text-white">
                    {universityOpenConfig.inclusiveHeadline}
                  </p>
                  <p className="text-xs sm:text-sm text-[#C4C4CC] leading-relaxed">
                    {universityOpenConfig.inclusiveText}
                  </p>
                </div>
              </div>

              <div className="pt-2 relative z-10">
                <a
                  href={jkbfLinks.fighterRegistration}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-4 bg-white/[0.07] hover:bg-[#D91F2C] border border-white/20 hover:border-[#D91F2C] text-white font-display text-lg tracking-wider uppercase rounded-xs transition-all"
                >
                  {universityOpenConfig.ctaLabel}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 8. DISCIPLINES OVERVIEW (5 CABANG RESMI WAKO) ───────────────────── */}
      <section
        id="disciplines"
        className="py-16 sm:py-24 bg-[#000000] border-b border-white/10"
      >
        <div className="editorial-container space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-8">
            <div className="space-y-2.5 max-w-2xl">
              <p className="font-technical text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
                ATURAN TANDING // WAKO RULES
              </p>
              <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight leading-[0.88] text-white">
                5 DISIPLIN PERTANDINGAN RESMI.
              </h2>
            </div>
            <Link
              href="/championship#disciplines"
              className="inline-flex items-center gap-2 px-5 py-3 bg-white/[0.06] hover:bg-[#D91F2C] border border-white/15 hover:border-[#D91F2C] font-display text-base tracking-wider uppercase text-white rounded-xs transition-colors shrink-0 w-fit"
            >
              DETAIL REGULASI TATAMI &amp; RINGSPORT
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {EVENT_CONFIG.disciplines.map((d, idx) => {
              const isRingsport = d.category === "RINGSPORT";
              return (
                <div
                  key={d.id}
                  className={`p-5 sm:p-6 bg-[#0E0E11] border rounded-xs flex flex-col justify-between gap-5 ${
                    isRingsport ? "border-[#D91F2C]/40" : "border-white/12"
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-technical text-[10px] font-bold uppercase tracking-[0.2em] text-[#86868B]">
                        0{idx + 1}
                      </span>
                      <span
                        className={`px-2 py-0.5 font-technical text-[9px] font-bold uppercase tracking-wider rounded-xs ${
                          isRingsport
                            ? "bg-[#D91F2C]/20 text-[#EF3340] border border-[#D91F2C]/40"
                            : "bg-white/5 text-[#C4C4CC] border border-white/10"
                        }`}
                      >
                        {d.category}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-white leading-none">
                      {d.name}
                    </h3>
                    <p className="text-xs text-[#A1A1AA] leading-relaxed">
                      {d.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex flex-wrap gap-1.5">
                    {d.applicableIn.map((app) => (
                      <span
                        key={app}
                        className="font-technical text-[9px] uppercase tracking-wider px-2 py-0.5 bg-white/[0.04] text-[#C4C4CC] rounded-xs"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 9. VENUE SLIM STRIP: GOR PANCASILA UGM ───────────────────────────── */}
      <section
        id="venue"
        className="py-10 sm:py-14 bg-[#09090B] border-b border-white/10"
      >
        <div className="editorial-container">
          <div className="bg-[#111114] border border-white/15 border-l-4 border-l-[#D91F2C] p-6 sm:p-8 rounded-xs flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-3 text-xs font-technical uppercase tracking-[0.2em]">
                <span className="text-[#D91F2C] font-bold inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" /> OFFICIAL VENUE
                </span>
                <span className="text-white/25">•</span>
                <span className="text-[#E2BA75] font-bold">
                  {EVENT_CONFIG.dates.display}
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight leading-none text-white">
                {EVENT_CONFIG.venue.fullDisplay}
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={jkbfLinks.venueMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#D91F2C] hover:bg-[#B81521] text-white font-display text-base tracking-wider uppercase rounded-xs transition-colors"
              >
                BUKA GOOGLE MAPS
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <Link
                href="/venue"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white font-display text-base tracking-wider uppercase rounded-xs transition-colors"
              >
                DETAIL VENUE
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 10. PARTNERSHIP, ORGANIZERS & CLOSING BATTLE CRY ────────────────── */}
      <section id="partnership" className="py-16 sm:py-24 bg-[#000000]">
        <div className="editorial-container space-y-12">
          {/* Partnership CTA Card */}
          <div className="bg-[#111114] border border-white/15 p-6 sm:p-10 rounded-xs flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-[#E2BA75]">
                <Handshake className="w-4 h-4" />
                <span className="font-technical text-xs font-bold uppercase tracking-[0.22em]">
                  {partnershipConfig.subHeadline}
                </span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl uppercase tracking-tight leading-none text-white">
                {partnershipConfig.headline}
              </h2>
              <p className="text-sm sm:text-base text-[#C4C4CC] leading-relaxed">
                {partnershipConfig.supportingText}
              </p>
              <p className="font-technical text-xs uppercase tracking-wider text-[#86868B]">
                {partnershipConfig.supportLabel}
              </p>
            </div>

            <a
              href={jkbfLinks.partnershipWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-display text-lg tracking-wider uppercase rounded-xs transition-colors shrink-0"
            >
              <MessageCircle className="w-5 h-5" />
              {partnershipConfig.ctaLabel}
            </a>
          </div>

          {/* Organizers & Official Channels (2 Columns, FAQ moved to /faq) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Organizers */}
            <div className="bg-[#0E0E11] border border-white/10 p-6 sm:p-8 rounded-xs flex flex-col justify-between gap-5">
              <div className="space-y-4">
                <span className="font-technical text-[10px] font-bold uppercase tracking-[0.22em] text-[#D91F2C]">
                  PENYELENGGARA RESMI
                </span>
                <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-white">
                  KELEMBAGAAN &amp; PROMOTOR
                </h3>
                <ul className="space-y-3 pt-1">
                  {EVENT_CONFIG.organizers.map((org) => (
                    <li
                      key={org.id}
                      className="border-l-2 border-[#D91F2C] pl-3.5 space-y-0.5"
                    >
                      <p className="font-display text-xl uppercase text-white leading-tight">
                        {org.name}
                      </p>
                      <p className="text-xs text-[#86868B]">{org.role}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/tentang"
                className="inline-flex items-center gap-1.5 font-technical text-xs font-bold uppercase tracking-wider text-[#F5F5F7] hover:text-[#EF3340] transition-colors"
              >
                TENTANG PENYELENGGARA
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Stay Connected — Instagram & TikTok ONLY */}
            <div className="bg-[#0E0E11] border border-white/10 p-6 sm:p-8 rounded-xs flex flex-col justify-between gap-5">
              <div className="space-y-3">
                <span className="font-technical text-[10px] font-bold uppercase tracking-[0.22em] text-[#D91F2C]">
                  KANAL RESMI JKBF 2026
                </span>
                <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-white">
                  IKUTI PERKEMBANGAN RESMI
                </h3>
                <p className="text-xs sm:text-sm text-[#C4C4CC] leading-relaxed">
                  Pengumuman partai, jadwal penimbangan, dan informasi resmi hanya diterbitkan melalui Instagram, TikTok, dan sekretariat WhatsApp panitia.
                </p>
              </div>
              <div className="flex flex-col gap-2.5">
                <a
                  href={jkbfLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between px-4 py-3 bg-[#151519] hover:bg-[#D91F2C] border border-white/15 hover:border-[#D91F2C] text-white rounded-xs transition-all"
                >
                  <span className="inline-flex items-center gap-2.5 font-technical text-xs font-bold uppercase tracking-wider">
                    <InstagramIcon className="w-4 h-4" />
                    Instagram {EVENT_CONFIG.social.instagram.handle}
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href={jkbfLinks.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between px-4 py-3 bg-[#151519] hover:bg-[#D91F2C] border border-white/15 hover:border-[#D91F2C] text-white rounded-xs transition-all"
                >
                  <span className="inline-flex items-center gap-2.5 font-technical text-xs font-bold uppercase tracking-wider">
                    <TikTokIcon className="w-4 h-4" />
                    TikTok {EVENT_CONFIG.social.tiktok.handle}
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Closing Battle Cry */}
          <div className="pt-8 border-t border-white/10 text-center space-y-2">
            <p className="font-technical text-xs font-bold uppercase tracking-[0.3em] text-[#D91F2C]">
              {EVENT_CONFIG.campaign} • {EVENT_CONFIG.dates.display}
            </p>
            <p className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white">
              NAIK RING. <span className="text-[#D91F2C]">BUKTIKAN NYALIMU.</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
