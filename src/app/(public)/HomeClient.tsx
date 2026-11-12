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
import HomeArenaPreview from "@/components/home/HomeArenaPreview";
import {
  EVENT_CONFIG,
  jkbfLinks,
  partnershipConfig,
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
];

export default function HomeClient() {
  return (
    <div className="w-full overflow-x-hidden bg-[#000000] text-[#F5F5F7]">
      {/* ─── 1. HERO SECTION (FIGHT POSTER — 1 PRIMARY ACTION + 1 TEXT LINK) ── */}
      <section className="relative min-h-[88dvh] flex items-center pt-24 sm:pt-28 pb-14 sm:pb-20 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="/images/v9/04_FOTO_FIGHT_DESKTOP_TANPA_TEKST.png"
            alt="Pertarungan kickboxing di atas ring Jogja Kickboxing Festival 2026"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover object-center sm:object-[65%_25%] opacity-65 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/75 to-[#000000]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-[#000000]/70" />
          <div className="absolute inset-0 combat-grain pointer-events-none" />
          <div className="hidden lg:block absolute inset-0 bg-[radial-gradient(circle_at_78%_32%,rgba(217,31,44,0.28),transparent_52%)]" />
        </div>

        <div className="editorial-container relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
            {/* Hero Headline & Actions */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex flex-wrap items-center gap-2.5 px-3.5 py-1.5 bg-black/75 border-l-2 border-[#D91F2C] border-y border-r border-white/15 rounded-xs">
                <span className="w-2 h-2 rounded-full bg-[#D91F2C] animate-pulse shrink-0" />
                <span className="font-technical text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#F5F5F7]">
                  {EVENT_CONFIG.name}
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
                <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-[#0D0D10]/95 border border-white/15 rounded-xs text-xs font-technical uppercase tracking-wider text-white">
                  <Calendar className="w-4 h-4 text-[#D91F2C] shrink-0" />
                  <span>{EVENT_CONFIG.dates.display}</span>
                </div>
                <Link
                  href="/venue"
                  className="inline-flex items-center gap-2.5 px-4 py-2 bg-[#0D0D10]/95 hover:bg-[#19191F] border border-white/15 hover:border-[#D91F2C]/60 rounded-xs text-xs font-technical uppercase tracking-wider text-[#C4C4CC] hover:text-white transition-colors"
                >
                  <MapPin className="w-4 h-4 text-[#D91F2C] shrink-0" />
                  <span>{EVENT_CONFIG.venue.fullDisplay}</span>
                </Link>
              </div>

              {/* Hero Action: 1 Primary Ticket Button + 1 Editorial Text Link */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-5 pt-2">
                <a
                  href={jkbfLinks.fighterRegistration}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#D91F2C] hover:bg-[#B81521] active:scale-[0.98] text-white font-display text-lg sm:text-xl tracking-wider uppercase rounded-xs transition-all shadow-[0_0_32px_rgba(217,31,44,0.5)]"
                >
                  DAFTAR SEBAGAI FIGHTER
                  <ArrowUpRight className="w-5 h-5" />
                </a>

                <Link
                  href="/championship"
                  className="inline-flex items-center gap-2 font-technical text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-[#C4C4CC] hover:text-white transition-colors group py-1"
                >
                  <span>LIHAT 7 PROGRAM KEJUARAAN</span>
                  <ChevronRight className="w-4 h-4 text-[#D91F2C] transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Hero Right Column: Countdown */}
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
                      VENUE RESMI
                    </span>
                    <span className="font-display text-lg uppercase tracking-wide text-[#EF3340] block mt-0.5">
                      {EVENT_CONFIG.venue.name}
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

      {/* ─── 3. 3D ARENA INTERAKTIF (GOR PANCASILA UGM) ──────────────────────── */}
      <HomeArenaPreview />

      {/* ─── 4. FIGHTER REGISTRATION BANNER (PRIMARY ACTION HERO TICKET) ─────── */}
      <section
        id="registration"
        className="relative py-16 sm:py-24 bg-[#000000] border-y border-white/10 overflow-hidden"
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
          <div className="ring-corner-frame bg-black/75 backdrop-blur-sm border-2 border-[#D91F2C]/60 p-6 sm:p-10 lg:p-12 rounded-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
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

              <p className="font-technical text-xs uppercase tracking-wider text-[#86868B]">
                Penyelenggara:{" "}
                <strong className="text-white">Pengprov KBI DIY</strong> • Formulir Resmi Google Form
              </p>
            </div>

            {/* 1 Big Ticket Button + 1 Understated Text Link (No Duplicate Box) */}
            <div className="lg:col-span-5 flex flex-col items-stretch lg:items-end gap-3.5">
              <a
                href={jkbfLinks.fighterRegistration}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-5 px-6 bg-[#D91F2C] hover:bg-[#B81521] active:scale-[0.98] text-white font-display text-2xl tracking-wider uppercase rounded-xs transition-all inline-flex items-center justify-center gap-2.5 shadow-[0_0_35px_rgba(217,31,44,0.55)]"
              >
                <span>DAFTAR SEKARANG</span>
                <ArrowUpRight className="w-6 h-6" />
              </a>

              <a
                href={jkbfLinks.fighterSupportWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-technical uppercase tracking-wider text-[#A1A1AA] hover:text-white transition-colors group pt-1"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Bantuan Pendaftaran: Chat Priya (WhatsApp)</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. SMA OPEN & UNIVERSITY OPEN (CLICKABLE COMBAT TICKET CARDS) ───── */}
      <section
        id="student-open"
        className="py-14 sm:py-20 bg-[#09090B] border-b border-white/10"
      >
        <div className="editorial-container grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* SMA Open — Entire Card is Clickable */}
          <a
            href={jkbfLinks.fighterRegistration}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-xs focus-visible:outline-2 focus-visible:outline-[#D91F2C]"
          >
            <article className="h-full bg-[#111114] group-hover:bg-[#161619] border border-white/15 border-t-4 border-t-[#D91F2C] group-hover:border-[#D91F2C] p-6 sm:p-8 rounded-xs flex flex-col justify-between gap-6 transition-all shadow-lg group-hover:shadow-[0_0_25px_rgba(217,31,44,0.25)]">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3 py-1 bg-[#D91F2C] font-technical text-[10px] font-bold uppercase tracking-[0.2em] text-white rounded-xs">
                    {smaOpenConfig.badge}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-[#86868B] group-hover:text-[#D91F2C] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <h3 className="font-display text-3xl sm:text-5xl uppercase tracking-tight leading-[0.88] text-white">
                  {smaOpenConfig.headline}
                </h3>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-technical uppercase tracking-widest text-[#A1A1AA] group-hover:text-white transition-colors">
                <span>DAFTAR JALUR SMA</span>
                <span className="text-[#D91F2C] font-bold">KONSULTASI &amp; FORM →</span>
              </div>
            </article>
          </a>

          {/* University Open — Entire Card is Clickable */}
          <a
            href={jkbfLinks.fighterRegistration}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-xs focus-visible:outline-2 focus-visible:outline-[#E2BA75]"
          >
            <article className="h-full bg-[#111114] group-hover:bg-[#161619] border border-white/15 border-t-4 border-t-[#E2BA75] group-hover:border-[#E2BA75] p-6 sm:p-8 rounded-xs flex flex-col justify-between gap-6 transition-all shadow-lg group-hover:shadow-[0_0_25px_rgba(226,186,117,0.2)]">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3 py-1 bg-[#E2BA75]/20 border border-[#E2BA75]/50 font-technical text-[10px] font-bold uppercase tracking-[0.2em] text-[#E2BA75] rounded-xs">
                    {universityOpenConfig.badge}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-[#86868B] group-hover:text-[#E2BA75] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <h3 className="font-display text-3xl sm:text-5xl uppercase tracking-tight leading-[0.88] text-white">
                  {universityOpenConfig.headline}
                </h3>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-technical uppercase tracking-widest text-[#A1A1AA] group-hover:text-white transition-colors">
                <span>DAFTAR MAHASISWA</span>
                <span className="text-[#E2BA75] font-bold">KONSULTASI &amp; FORM →</span>
              </div>
            </article>
          </a>
        </div>
      </section>

      {/* ─── 6. VENUE STRIP, PARTNERSHIP & BATTLE CRY (CLEAN EDITORIAL LINKS) ── */}
      <section id="venue" className="py-14 sm:py-20 bg-[#000000]">
        <div className="editorial-container space-y-6">
          {/* Venue Slim Strip — Link Bar */}
          <div className="bg-[#111114] border border-white/15 border-l-4 border-l-[#D91F2C] p-6 sm:p-8 rounded-xs flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <span className="font-technical text-xs font-bold uppercase tracking-[0.2em] text-[#D91F2C] inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" /> OFFICIAL VENUE • {EVENT_CONFIG.dates.display}
              </span>
              <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight leading-none text-white">
                {EVENT_CONFIG.venue.fullDisplay}
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-5 text-xs font-technical uppercase tracking-wider">
              <a
                href={jkbfLinks.venueMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white hover:text-[#D91F2C] border-b border-[#D91F2C] pb-0.5 transition-colors group"
              >
                <span>Buka Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#D91F2C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <Link
                href="/venue"
                className="inline-flex items-center gap-1.5 text-[#C4C4CC] hover:text-white transition-colors group"
              >
                <span>Detail Fasilitas Venue</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#D91F2C] group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Partnership Strip — Contact Pill */}
          <div className="bg-[#111114] border border-white/15 p-6 sm:p-8 rounded-xs flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 text-[#E2BA75]">
                <Handshake className="w-4 h-4" />
                <span className="font-technical text-xs font-bold uppercase tracking-[0.22em]">
                  {partnershipConfig.subHeadline}
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-tight leading-none text-white">
                {partnershipConfig.headline}
              </h2>
            </div>

            <a
              href={jkbfLinks.partnershipWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xs border border-emerald-500/40 hover:border-emerald-500 bg-emerald-950/30 hover:bg-emerald-950/60 text-emerald-300 hover:text-white font-technical text-xs font-bold tracking-wider uppercase transition-all shrink-0 w-fit"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Hubungi Ardi (WhatsApp)</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </a>
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
