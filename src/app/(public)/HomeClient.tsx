"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  Calendar,
  ChevronRight,
  Flame,
  GraduationCap,
  Handshake,
  HelpCircle,
  MapPin,
  MessageCircle,
  School,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  Video,
} from "lucide-react";
import CountdownTimer from "@/components/home/CountdownTimer";
import { InstagramIcon, TikTokIcon } from "@/components/layout/SocialIcons";
import WhatsNewSection from "@/components/whats-new/WhatsNewSection";
import type { WhatsNewItem } from "@/lib/whats-new";
import {
  EVENT_CONFIG,
  contentChallengeConfig,
  jkbfLinks,
  megaBintangConfig,
  partnershipConfig,
  publicationConfig,
  registrationConfig,
  smaOpenConfig,
  sportainmentConfig,
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

const EVENT_PILLARS = [
  {
    icon: Trophy,
    eyebrow: "7 PROGRAM KEJUARAAN",
    title: "Kejurda DIY hingga Mega Bintang",
    description:
      "Kompetisi resmi mulai kategori pelajar, mahasiswa, camp se-Indonesia, hingga partai bintang undangan.",
  },
  {
    icon: ShieldCheck,
    eyebrow: "STANDAR WAKO RESMI",
    title: "Tatami & Ring Fighting",
    description:
      "Meliputi Point Fighting, Kick Light, Light Contact, Full Contact, Low Kick, dan K-1 Rules bersertifikat.",
  },
  {
    icon: MapPin,
    eyebrow: "VENUE TERKONFIRMASI",
    title: EVENT_CONFIG.venue.name,
    description: `Diselenggarakan dua hari pada ${EVENT_CONFIG.dates.display} di jantung olahraga kampus Yogyakarta.`,
  },
  {
    icon: Users,
    eyebrow: "PENYELENGGARA RESMI",
    title: "Pengprov KBI DIY × Noise Comm",
    description:
      "Kolaborasi badan keolahragaan kickboxing resmi DIY bersama promotor kreatif Noise Comm Indonesia.",
  },
] as const;

export default function HomeClient({
  whatsNewItems = [],
}: {
  whatsNewItems?: WhatsNewItem[];
}) {
  return (
    <div className="w-full overflow-x-hidden bg-[#000000] text-[#F5F5F7]">
      {/* ─── 1. HERO SECTION ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[88svh] flex items-center pt-24 sm:pt-28 pb-14 sm:pb-20 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="/images/v9/04_FOTO_FIGHT_DESKTOP_TANPA_TEKST.png"
            alt="Pertarungan kickboxing profesional di atas ring Jogja Kickboxing Festival 2026"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center sm:object-[65%_25%] opacity-55 sm:opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/85 to-[#000000]/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-[#000000]/75" />
          <div className="hidden lg:block absolute inset-0 bg-[radial-gradient(circle_at_78%_32%,rgba(217,31,44,0.22),transparent_50%)]" />
        </div>

        <div className="editorial-container relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
            {/* Hero Headline & Primary CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex flex-wrap items-center gap-2.5 px-3.5 py-1.5 bg-white/[0.05] border border-white/15 rounded-xs">
                <span className="w-2 h-2 rounded-full bg-[#D91F2C] animate-pulse shrink-0" />
                <span className="font-technical text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#F5F5F7]">
                  {EVENT_CONFIG.name}
                </span>
                <span className="text-white/25 hidden sm:inline">•</span>
                <span className="font-technical text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#EF3340]">
                  {EVENT_CONFIG.campaign}
                </span>
              </div>

              <div className="space-y-3">
                <h1 className="font-display text-[3.75rem] sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.25rem] font-black uppercase leading-[0.86] tracking-tight text-white">
                  JOGJA PUNYA{" "}
                  <span className="text-[#D91F2C] block sm:inline">
                    NYALI.
                  </span>
                </h1>
                <p className="font-technical text-xs sm:text-sm font-bold uppercase tracking-[0.28em] text-[#E2BA75]">
                  {EVENT_CONFIG.tagline}
                </p>
              </div>

              {/* Approved Dates & Venue Strip */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 pt-1">
                <div className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-[#121216]/90 border border-white/15 rounded-xs">
                  <Calendar className="w-4 h-4 text-[#D91F2C] shrink-0" />
                  <span className="font-technical text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                    {EVENT_CONFIG.dates.display}
                  </span>
                </div>
                <Link
                  href="/venue"
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-[#121216]/90 hover:bg-[#19191F] border border-white/15 hover:border-[#D91F2C]/60 rounded-xs transition-colors"
                >
                  <MapPin className="w-4 h-4 text-[#D91F2C] shrink-0" />
                  <span className="font-technical text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                    {EVENT_CONFIG.venue.fullDisplay}
                  </span>
                </Link>
              </div>

              <p className="text-sm sm:text-base lg:text-lg text-[#C4C4CC] max-w-2xl leading-relaxed font-sans">
                {EVENT_CONFIG.heroSupportingCopy}
              </p>

              {/* Hero CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <a
                  href={jkbfLinks.fighterRegistration}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-4 bg-[#D91F2C] hover:bg-[#B81521] active:scale-[0.98] text-white font-display text-lg tracking-wider uppercase rounded-xs transition-all shadow-[0_0_28px_rgba(217,31,44,0.45)]"
                >
                  DAFTAR SEBAGAI FIGHTER
                  <ArrowUpRight className="w-5 h-5" />
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-4 bg-white/[0.06] hover:bg-white/[0.12] border border-white/20 text-[#F5F5F7] font-display text-lg tracking-wider uppercase rounded-xs transition-all"
                >
                  EXPLORE JKBF
                  <ArrowDownRight className="w-5 h-5 text-[#EF3340]" />
                </a>
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

      {/* ─── 3. ABOUT JKBF 2026 & TWO GATEWAYS ───────────────────────────────── */}
      <section id="about" className="py-16 sm:py-24 bg-[#09090B] border-b border-white/10">
        <div className="editorial-container space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7 space-y-3">
              <p className="font-technical text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
                TENTANG EVENT // {EVENT_CONFIG.campaign}
              </p>
              <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight leading-[0.9] text-white">
                SATU ARENA. NYALI YOGYAKARTA.
              </h2>
            </div>
            <div className="lg:col-span-5 space-y-4">
              <p className="text-sm sm:text-base text-[#C4C4CC] leading-relaxed">
                Diselenggarakan oleh Pengprov KBI DIY bersama Noise Comm Indonesia,{" "}
                {EVENT_CONFIG.name} mempertemukan atlet daerah, camp se-Indonesia,
                pelajar SMA, dan mahasiswa dalam dua hari kompetisi resmi di{" "}
                <strong className="text-white">
                  {EVENT_CONFIG.venue.fullDisplay}
                </strong>{" "}
                pada{" "}
                <strong className="text-white">
                  {EVENT_CONFIG.dates.display}
                </strong>
                .
              </p>
              <Link
                href="/tentang"
                className="inline-flex items-center gap-2 font-technical text-xs font-bold uppercase tracking-widest text-[#EF3340] hover:text-white transition-colors"
              >
                LIHAT PROFIL LENGKAP EVENT
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Key Event Pillars (Verified Institutional Facts Only) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {EVENT_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.eyebrow}
                  className="bg-[#121215] border border-white/10 hover:border-[#D91F2C]/50 p-5 sm:p-6 rounded-xs transition-colors flex flex-col gap-3"
                >
                  <div className="w-10 h-10 rounded-xs bg-[#D91F2C]/15 border border-[#D91F2C]/30 flex items-center justify-center text-[#EF3340]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-technical text-[10px] font-bold uppercase tracking-[0.2em] text-[#D91F2C]">
                    {pillar.eyebrow}
                  </span>
                  <h3 className="font-display text-2xl uppercase tracking-wide text-white leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#86868B] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Two Gateways: THE FIGHTS & THE MOVEMENT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
            {/* Gateway 01 */}
            <div className="bg-[#121215] border border-white/10 p-6 sm:p-8 rounded-xs flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-technical text-xs font-bold uppercase tracking-[0.2em] text-[#EF3340]">
                    01 // THE FIGHTS
                  </span>
                  <Trophy className="w-5 h-5 text-[#D91F2C]" />
                </div>
                <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-white">
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
                className="inline-flex items-center justify-between w-full px-5 py-3.5 bg-[#D91F2C] hover:bg-[#B81521] text-white font-display text-base tracking-wider uppercase rounded-xs transition-colors"
              >
                <span>JELAJAHI KEJUARAAN &amp; REGULASI</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Gateway 02 */}
            <div className="bg-[#121215] border border-white/10 p-6 sm:p-8 rounded-xs flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-technical text-xs font-bold uppercase tracking-[0.2em] text-[#E2BA75]">
                    02 // THE MOVEMENT
                  </span>
                  <Flame className="w-5 h-5 text-[#E2BA75]" />
                </div>
                <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-white">
                  GERAKAN PELAJAR, KREATOR &amp; SPORTAINMENT
                </h3>
                <p className="text-sm text-[#C4C4CC] leading-relaxed">
                  Lebih dari sekadar arena tanding: JKBF membuka ruang ekspresi bagi siswa SMA, mahasiswa lintas kampus, konten kreator, hingga mitra komersial.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {[
                    "SMA OPEN",
                    "UNIVERSITY OPEN",
                    "CONTENT CHALLENGE",
                    "SPORTAINMENT",
                    "SPONSORSHIP",
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
                className="inline-flex items-center justify-between w-full px-5 py-3.5 bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white font-display text-base tracking-wider uppercase rounded-xs transition-colors"
              >
                <span>LIHAT KAMPANYE &amp; PARTISIPASI</span>
                <ChevronRight className="w-5 h-5 text-[#EF3340]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. MEGA BINTANG SPOTLIGHT: FAISAL GIRU ──────────────────────────── */}
      {publicationConfig.megaBintangFaisalGiru && (
        <section
          id="mega-bintang"
          className="py-16 sm:py-24 bg-[#000000] border-b border-white/10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_50%,rgba(217,31,44,0.14),transparent_55%)] pointer-events-none" />
          <div className="editorial-container relative z-10">
            <div className="ring-corner-frame grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#0E0E12] border border-[#D91F2C]/40 p-6 sm:p-10 rounded-xs">
              {/* Visual Spotlight */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] overflow-hidden rounded-xs border border-white/15 bg-black">
                  <Image
                    src={megaBintangConfig.image}
                    alt={megaBintangConfig.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
                  <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-2 px-3 py-1.5 bg-[#D91F2C] text-white rounded-xs shadow-lg">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span className="font-technical text-[10px] font-bold uppercase tracking-[0.2em]">
                      {megaBintangConfig.heading}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="font-technical text-[10px] uppercase tracking-[0.2em] text-[#E2BA75] font-bold">
                      CONFIRMED APPEARANCE // JKBF 2026
                    </p>
                    <p className="font-display text-3xl sm:text-4xl uppercase tracking-wide text-white leading-none mt-1">
                      {megaBintangConfig.featuredName}
                    </p>
                  </div>
                </div>
              </div>

              {/* Copy & Conditional Instagram Post CTA */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <p className="font-technical text-xs font-bold uppercase tracking-[0.25em] text-[#EF3340]">
                    FEATURED SPOTLIGHT // {megaBintangConfig.heading}
                  </p>
                  <h2 className="font-display text-5xl sm:text-7xl uppercase tracking-tight leading-[0.88] text-white">
                    {megaBintangConfig.featuredName}
                  </h2>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  <span className="px-3 py-1 bg-[#D91F2C]/15 border border-[#D91F2C]/40 font-technical text-[11px] font-bold uppercase tracking-wider text-[#EF3340] rounded-xs">
                    {megaBintangConfig.heading}
                  </span>
                  <span className="px-3 py-1 bg-white/[0.04] border border-white/15 font-technical text-[11px] font-bold uppercase tracking-wider text-[#F5F5F7] rounded-xs">
                    {EVENT_CONFIG.dates.display}
                  </span>
                  <span className="px-3 py-1 bg-white/[0.04] border border-white/15 font-technical text-[11px] font-bold uppercase tracking-wider text-[#C4C4CC] rounded-xs">
                    {EVENT_CONFIG.venue.name}
                  </span>
                </div>

                <p className="text-base sm:text-lg text-[#F5F5F7] leading-relaxed font-sans">
                  {megaBintangConfig.supportingText}
                </p>

                <p className="text-sm text-[#86868B] leading-relaxed border-l-2 border-white/20 pl-4">
                  {megaBintangConfig.secondaryNote}
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 pt-2">
                  {megaBintangConfig.postVerified &&
                  megaBintangConfig.verifiedInstagramPostUrl ? (
                    <a
                      href={megaBintangConfig.verifiedInstagramPostUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#D91F2C] hover:bg-[#B81521] text-white font-display text-base tracking-wider uppercase rounded-xs transition-colors"
                    >
                      <InstagramIcon className="w-4 h-4" />
                      LIHAT POSTINGAN
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  ) : null}

                  <a
                    href={jkbfLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-white/[0.06] hover:bg-[#D91F2C] border border-white/15 hover:border-[#D91F2C] text-white font-display text-base tracking-wider uppercase rounded-xs transition-all"
                  >
                    <InstagramIcon className="w-4 h-4" />
                    UPDATE RESMI {EVENT_CONFIG.social.instagram.handle.toUpperCase()}
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <Link
                    href="/championship#kelas-mega-bintang"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent hover:bg-white/[0.06] border border-white/15 text-[#C4C4CC] hover:text-white font-display text-base tracking-wider uppercase rounded-xs transition-colors"
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

      {/* ─── 5. WHAT'S NEW (CURATED INSTAGRAM FEED) ─────────────────────────── */}
      <WhatsNewSection items={whatsNewItems} />

      {/* ─── 6. FIGHTER REGISTRATION BANNER ──────────────────────────────────── */}
      <section
        id="registration"
        className="py-16 sm:py-24 bg-[#000000] border-b border-white/10"
      >
        <div className="editorial-container">
          <div className="ring-corner-frame bg-gradient-to-br from-[#17090B] via-[#0F0F12] to-[#0A0A0C] border border-[#D91F2C]/45 p-6 sm:p-10 lg:p-12 rounded-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 bg-[#D91F2C] text-white font-technical text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] rounded-xs">
                  {registrationConfig.statusLabel}
                </span>
                <span className="px-3 py-1 bg-white/[0.06] border border-white/15 text-[#F5F5F7] font-technical text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] rounded-xs">
                  HINGGA {registrationConfig.displayDeadline}
                </span>
              </div>

              <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl uppercase tracking-tight leading-[0.88] text-white">
                {registrationConfig.headline}
              </h2>

              <p className="text-sm sm:text-base text-[#C4C4CC] leading-relaxed max-w-2xl">
                {registrationConfig.supportingText}
              </p>

              <p className="font-technical text-xs uppercase tracking-wider text-[#86868B]">
                Narahubung Resmi Pendaftaran Fighter:{" "}
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
                className="w-full py-4 px-6 bg-[#D91F2C] hover:bg-[#B81521] active:scale-[0.98] text-white font-display text-lg tracking-wider uppercase rounded-xs transition-all inline-flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(217,31,44,0.4)]"
              >
                DAFTAR SEKARANG
                <ArrowUpRight className="w-5 h-5" />
              </a>
              <a
                href={jkbfLinks.fighterSupportWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 text-[#F5F5F7] font-display text-lg tracking-wider uppercase rounded-xs transition-all inline-flex items-center justify-center gap-2.5"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                {registrationConfig.adminCtaLabel}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. SMA OPEN & UNIVERSITY OPEN CAMPAIGNS ─────────────────────────── */}
      <section
        id="student-open"
        className="py-16 sm:py-24 bg-[#09090B] border-b border-white/10"
      >
        <div className="editorial-container space-y-10">
          <div className="space-y-2.5 max-w-2xl">
            <p className="font-technical text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
              STUDENT &amp; CAMPUS MOVEMENT // #JOGJAPUNYANYALI
            </p>
            <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight leading-[0.9] text-white">
              GENERASI MUDA DI ATAS RING.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* SMA Open */}
            <div className="bg-[#121215] border border-white/10 p-6 sm:p-8 rounded-xs flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="px-3 py-1 bg-[#D91F2C]/15 border border-[#D91F2C]/40 font-technical text-[10px] font-bold uppercase tracking-[0.2em] text-[#EF3340] rounded-xs">
                    {smaOpenConfig.badge}
                  </span>
                  <School className="w-5 h-5 text-[#EF3340] shrink-0" />
                </div>

                <h3 className="font-display text-3xl sm:text-5xl uppercase tracking-tight leading-[0.92] text-white">
                  {smaOpenConfig.headline}
                </h3>

                <p className="text-sm sm:text-base text-[#C4C4CC] leading-relaxed">
                  {smaOpenConfig.supportingText}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={jkbfLinks.fighterRegistration}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 bg-[#D91F2C] hover:bg-[#B81521] text-white font-display text-base tracking-wider uppercase rounded-xs transition-colors"
                >
                  {smaOpenConfig.ctaLabel}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* University Open */}
            <div className="bg-[#121215] border border-white/10 p-6 sm:p-8 rounded-xs flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="px-3 py-1 bg-[#E2BA75]/15 border border-[#E2BA75]/40 font-technical text-[10px] font-bold uppercase tracking-[0.2em] text-[#E2BA75] rounded-xs">
                    {universityOpenConfig.badge}
                  </span>
                  <GraduationCap className="w-5 h-5 text-[#E2BA75] shrink-0" />
                </div>

                <h3 className="font-display text-3xl sm:text-5xl uppercase tracking-tight leading-[0.92] text-white">
                  {universityOpenConfig.headline}
                </h3>

                <p className="text-sm sm:text-base text-[#C4C4CC] leading-relaxed">
                  {universityOpenConfig.supportingText}
                </p>

                <div className="bg-white/[0.04] border-l-2 border-[#D91F2C] p-4 rounded-r-xs space-y-1">
                  <p className="font-technical text-xs font-bold uppercase tracking-wider text-white">
                    {universityOpenConfig.inclusiveHeadline}
                  </p>
                  <p className="text-xs sm:text-sm text-[#C4C4CC] leading-relaxed">
                    {universityOpenConfig.inclusiveText}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={jkbfLinks.fighterRegistration}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 bg-white/[0.06] hover:bg-[#D91F2C] border border-white/20 hover:border-[#D91F2C] text-white font-display text-base tracking-wider uppercase rounded-xs transition-all"
                >
                  {universityOpenConfig.ctaLabel}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 8. CONTENT CHALLENGE & SPORTAINMENT (NO LED / NO ARTIST LINEUP) ─── */}
      <section
        id="community"
        className="py-16 sm:py-24 bg-[#000000] border-b border-white/10"
      >
        <div className="editorial-container grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Content Challenge */}
          <div className="bg-[#121215] border border-white/10 p-6 sm:p-8 rounded-xs flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <span className="font-technical text-xs font-bold uppercase tracking-[0.2em] text-[#EF3340]">
                  {contentChallengeConfig.subHeadline}
                </span>
                <Video className="w-5 h-5 text-[#D91F2C]" />
              </div>

              <h2 className="font-display text-4xl sm:text-5xl uppercase tracking-tight leading-[0.9] text-white">
                {contentChallengeConfig.headline}
              </h2>

              <p className="text-sm sm:text-base text-[#C4C4CC] leading-relaxed">
                {contentChallengeConfig.supportingText}
              </p>
            </div>

            <a
              href={jkbfLinks.contentChallenge}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto self-start px-6 py-3.5 bg-[#D91F2C] hover:bg-[#B81521] text-white font-display text-base tracking-wider uppercase rounded-xs transition-colors"
            >
              {contentChallengeConfig.ctaLabel}
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Sportainment Experience — Strictly No Artist Lineup & No LED */}
          <div className="bg-[#121215] border border-white/10 p-6 sm:p-8 rounded-xs flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <span className="font-technical text-xs font-bold uppercase tracking-[0.2em] text-[#E2BA75]">
                  {sportainmentConfig.eyebrow}
                </span>
                <Flame className="w-5 h-5 text-[#E2BA75]" />
              </div>

              <h2 className="font-display text-4xl sm:text-5xl uppercase tracking-tight leading-[0.9] text-white">
                {sportainmentConfig.headline}
              </h2>

              <p className="text-sm sm:text-base text-[#F5F5F7] leading-relaxed">
                {sportainmentConfig.supportingText}
              </p>

              <p className="text-xs sm:text-sm text-[#86868B] leading-relaxed border-l-2 border-white/20 pl-4">
                {sportainmentConfig.secondaryNote}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <a
                href={jkbfLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white font-technical text-xs font-bold uppercase tracking-wider rounded-xs transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
                NANTIKAN UPDATE DI INSTAGRAM
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 9. OFFICIAL VENUE SECTION: GOR PANCASILA UGM ────────────────────── */}
      <section
        id="venue"
        className="py-16 sm:py-24 bg-[#09090B] border-b border-white/10"
      >
        <div className="editorial-container">
          <div className="ring-corner-frame grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#121215] border border-white/10 p-6 sm:p-10 rounded-xs">
            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xs border border-white/15 bg-black">
                <Image
                  src="/images/jkb/boxing-ring.jpg"
                  alt="Atmosfer walkout menuju ring pertandingan Jogja Kickboxing Festival 2026"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                <div className="absolute bottom-3.5 left-3.5 right-3.5 flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 bg-black/85 border border-white/20 font-technical text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white rounded-xs">
                    {EVENT_CONFIG.dates.display}
                  </span>
                  <span className="px-3 py-1 bg-[#D91F2C] font-technical text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white rounded-xs">
                    {EVENT_CONFIG.venue.name}
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <p className="font-technical text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
                OFFICIAL VENUE // {EVENT_CONFIG.campaign}
              </p>

              <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight leading-[0.9] text-white">
                {EVENT_CONFIG.venue.heading}
              </h2>

              <div className="space-y-1">
                <p className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-[#EF3340]">
                  {EVENT_CONFIG.venue.name}
                </p>
                <p className="font-technical text-xs uppercase tracking-[0.22em] text-[#C4C4CC]">
                  {EVENT_CONFIG.venue.city} • {EVENT_CONFIG.dates.display}
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#C4C4CC] leading-relaxed">
                {EVENT_CONFIG.venue.summary}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-1">
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
                  DETAIL VENUE RESMI
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 10. PARTNERSHIP, ORGANIZERS, FAQ & STAY CONNECTED ───────────────── */}
      <section id="partnership" className="py-16 sm:py-24 bg-[#000000]">
        <div className="editorial-container space-y-10">
          {/* Partnership CTA Card */}
          <div className="bg-[#121215] border border-white/10 p-6 sm:p-10 rounded-xs flex flex-col lg:flex-row lg:items-center justify-between gap-6">
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

          {/* Bottom Grid: Organizers, FAQ & Contacts, Stay Connected */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Organizers */}
            <div className="bg-[#0E0E11] border border-white/10 p-6 rounded-xs flex flex-col justify-between gap-5">
              <div className="space-y-3">
                <span className="font-technical text-[10px] font-bold uppercase tracking-[0.22em] text-[#D91F2C]">
                  PENYELENGGARA RESMI
                </span>
                <h3 className="font-display text-2xl uppercase tracking-wide text-white">
                  KELEMBAGAAN &amp; PROMOTOR
                </h3>
                <ul className="space-y-2.5 pt-1">
                  {EVENT_CONFIG.organizers.map((org) => (
                    <li
                      key={org.id}
                      className="border-l-2 border-[#D91F2C] pl-3 space-y-0.5"
                    >
                      <p className="font-display text-lg uppercase text-white leading-tight">
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

            {/* FAQ & Contact Hub */}
            <div className="bg-[#0E0E11] border border-white/10 p-6 rounded-xs flex flex-col justify-between gap-5">
              <div className="space-y-3">
                <span className="font-technical text-[10px] font-bold uppercase tracking-[0.22em] text-[#D91F2C]">
                  BANTUAN &amp; INFORMASI
                </span>
                <h3 className="font-display text-2xl uppercase tracking-wide text-white flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#EF3340]" />
                  FAQ &amp; SEKRETARIAT
                </h3>
                <p className="text-xs sm:text-sm text-[#C4C4CC] leading-relaxed">
                  Temukan jawaban seputar regulasi kejuaraan, pendaftaran SMA/University Open, atau hubungi tim narahubung resmi WhatsApp.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/faq"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 font-technical text-xs font-bold uppercase tracking-wider text-white rounded-xs transition-colors"
                >
                  BUKA FAQ
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/kontak"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-transparent hover:bg-white/[0.06] border border-white/15 font-technical text-xs font-bold uppercase tracking-wider text-[#C4C4CC] hover:text-white rounded-xs transition-colors"
                >
                  KONTAK RESMI
                </Link>
              </div>
            </div>

            {/* Stay Connected — Instagram & TikTok ONLY */}
            <div className="bg-[#0E0E11] border border-white/10 p-6 rounded-xs flex flex-col justify-between gap-5">
              <div className="space-y-3">
                <span className="font-technical text-[10px] font-bold uppercase tracking-[0.22em] text-[#D91F2C]">
                  STAY CONNECTED
                </span>
                <h3 className="font-display text-2xl uppercase tracking-wide text-white">
                  KANAL SOSIAL RESMI
                </h3>
                <p className="text-xs sm:text-sm text-[#C4C4CC] leading-relaxed">
                  Ikuti pengumuman resmi, informasi partai, serta perkembangan terkini langsung dari akun Instagram dan TikTok resmi JKBF 2026.
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
        </div>
      </section>
    </div>
  );
}
