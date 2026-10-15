"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar, Flame } from "lucide-react";
import CountdownTimer from "@/components/home/CountdownTimer";
import { EVENT_CONFIG } from "@/lib/event-config";

export default function HomeClient() {
  return (
    <main className="flex-1 flex flex-col w-full text-[#F4F0E8] bg-[#0B0B0B] overflow-x-hidden">
      
      {/* ═════════════════════════════════════════════════════════════════════
          1. CAMPAIGN POSTER HERO WITH COUNTDOWN TIMER
          Matches prototype visual benchmark (web-kickboxing.vercel.app)
      ═════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[96svh] lg:min-h-screen pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-24 flex flex-col justify-end border-b border-white/10 bg-[#0B0B0B] overflow-hidden">
        
        {/* Dominant Documentary Background Photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/v9/04_FOTO_FIGHT_DESKTOP_TANPA_TEKST.png"
            alt="Dokumentasi Laga Kickboxing JKBF"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center lg:object-[center_20%] grayscale contrast-125 opacity-65 lg:opacity-55"
          />
          {/* Film Grain & Editorial Vignette Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/75 to-black/50" />
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/90 via-[#0B0B0B]/40 to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 w-full relative z-10">
          <div className="max-w-4xl space-y-5 sm:space-y-6">
            
            {/* Festival Identity Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/60 backdrop-blur-md border border-[#D91F2C]/40 rounded-full">
              <Flame className="w-3.5 h-3.5 text-[#D91F2C] animate-pulse" />
              <p className="font-technical text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold">
                #JOGJAPUNYANYALI &nbsp;•&nbsp; DI BALIK KALEM
              </p>
            </div>

            {/* Monumental Headline */}
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] uppercase tracking-tight text-white leading-[0.85]">
              JOGJA KICKBOXING<br />
              <span className="text-[#D91F2C]">FESTIVAL 2026</span>
            </h1>

            {/* Venue & Date Pill */}
            <div className="inline-flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm font-technical text-white/90 bg-white/5 border border-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
              <span className="inline-flex items-center gap-1.5 font-bold">
                <MapPin className="w-4 h-4 text-[#D91F2C]" /> GOR UNY, YOGYAKARTA
              </span>
              <span className="text-white/30 hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-1.5 font-bold">
                <Calendar className="w-4 h-4 text-[#D91F2C]" /> 12 – 14 DES. 2026
              </span>
            </div>

            {/* Countdown Box */}
            <div className="pt-2 pb-2">
              <CountdownTimer />
            </div>

            {/* Direct Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/tiket"
                className="font-display text-base sm:text-lg tracking-wider uppercase text-white bg-[#D91F2C] hover:bg-[#B81521] active:scale-95 px-8 sm:px-10 py-4 transition-all inline-flex items-center gap-2.5 rounded shadow-[0_4px_25px_rgba(217,31,44,0.4)] group"
              >
                <span>INFO TIKET & JADWAL RILIS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/jadwal"
                className="font-display text-base sm:text-lg tracking-wider uppercase text-white/90 hover:text-white border border-white/20 hover:border-white px-7 py-4 transition-all inline-flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded"
              >
                <span>LIHAT JADWAL LENGKAP</span>
                <span className="font-technical text-xs">↗</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. SCENE 1: THE RING — 4 DIVISI SABUK EMAS K-1
          Streamlined: No long text essays, high-contrast division cards
      ═════════════════════════════════════════════ */}
      <section className="w-full bg-[#0B0B0B] text-[#F4F0E8] py-16 lg:py-24 border-b border-white/10 relative">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-[#D91F2C]" />
                <span className="font-technical text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold">
                  REDY CHAMPIONSHIP 2
                </span>
              </div>
              <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none">
                EMPAT SABUK EMAS K-1
              </h2>
            </div>
            <Link
              href="/championship"
              className="font-display text-sm sm:text-base tracking-wider uppercase text-white hover:text-[#D91F2C] inline-flex items-center gap-2 transition-colors border-b border-[#D91F2C] pb-1 self-start md:self-auto"
            >
              <span>DETAIL KEJUARAAN & REGULASI</span>
              <span className="font-technical text-xs">↗</span>
            </Link>
          </div>

          {/* 4 Compact Divisions Grid from Single Source of Truth */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {EVENT_CONFIG.divisions.map((division) => (
              <div
                key={division.no}
                className="p-5 sm:p-6 bg-[#121212] border border-white/10 hover:border-[#D91F2C]/50 transition-all space-y-4 group relative rounded-lg"
              >
                <div className="flex items-center justify-between font-technical text-xs">
                  <span className="text-[#D91F2C] font-bold">DIVISI {division.no}</span>
                  <span className="text-white/40">{division.quota}</span>
                </div>

                <div>
                  <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-white group-hover:text-[#D91F2C] transition-colors">
                    {division.name}
                  </h3>
                  <p className="font-technical text-xs text-[#D91F2C] mt-1 font-bold">
                    BATAS MAX {division.limit}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/10 space-y-1">
                  <span className="font-technical text-[10px] uppercase tracking-wider text-white/50 block">
                    GAYA: {division.style}
                  </span>
                  <span className="font-technical text-[10px] text-amber-400 font-bold uppercase block">
                    ★ {division.belt}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          3. SCENE 2: THE STAGE — FESTIVAL MUSIC COMPACT GRID
          Streamlined: Compact 3-card stage grid without massive wall of text
      ═════════════════════════════════════════════ */}
      <section className="w-full bg-[#121214] text-[#F4F0E8] py-16 lg:py-24 border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-[#D91F2C]" />
                <span className="font-technical text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold">
                  THE STAGE • LIVE MUSIC FESTIVAL
                </span>
              </div>
              <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none">
                TIGA PANGGUNG MUSIK
              </h2>
            </div>
            <Link
              href="/lineup"
              className="font-display text-sm sm:text-base tracking-wider uppercase text-white hover:text-[#D91F2C] inline-flex items-center gap-2 transition-colors border-b border-[#D91F2C] pb-1 self-start md:self-auto"
            >
              <span>EKSPLORASI LINEUP ARTIS</span>
              <span className="font-technical text-xs">↗</span>
            </Link>
          </div>

          {/* 3 Compact Stage Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                stage: "THE RING STAGE",
                location: "MAIN INDOOR ARENA",
                highlight: "ROCK & ANTHEMIC SOUNDTRACK",
                schedule: "12–14 DES • START 19:00 WIB",
                img: "/images/lineup/ring-stage.jpg",
              },
              {
                stage: "HERITAGE STAGE",
                location: "CULTURAL HALL GOR UNY",
                highlight: "ALTERNATIVE & INDIE SOUNDS",
                schedule: "12–14 DES • START 16:30 WIB",
                img: "/images/lineup/heritage-stage.jpg",
              },
              {
                stage: "UNDERGROUND BEAT",
                location: "OUTDOOR PLAZA GOR UNY",
                highlight: "HIP-HOP & ELECTRONIC BEATS",
                schedule: "12–14 DES • START 15:00 WIB",
                img: "/images/lineup/underground-beat.jpg",
              },
            ].map((st, idx) => (
              <div
                key={idx}
                className="bg-[#18181A] border border-white/10 overflow-hidden group hover:border-[#D91F2C]/50 transition-all flex flex-col"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
                  <Image
                    src={st.img}
                    alt={st.stage}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18181A] via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 font-technical text-[10px] uppercase tracking-wider text-white bg-[#D91F2C] px-2.5 py-0.5 font-bold">
                    {st.location}
                  </span>
                </div>

                <div className="p-5 sm:p-6 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-white group-hover:text-[#D91F2C] transition-colors">
                      {st.stage}
                    </h3>
                    <p className="font-technical text-xs text-white/50 tracking-wider uppercase mt-1">
                      {st.highlight}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-technical text-[#D91F2C] font-bold">
                    <span>{st.schedule}</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          4. SCENE 3: AGENDA 3 HARI — WARM IVORY EDITORIAL TIMETABLE
      ═════════════════════════════════════════════ */}
      <section className="w-full bg-[#F4F0E8] text-[#0B0B0B] py-16 lg:py-24 border-b border-black/10">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 pb-6 border-b border-black/15">
            <div>
              <p className="font-technical text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold mb-2">
                AGENDA UTAMA • 12–14 DESEMBER 2026
              </p>
              <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight leading-none">
                TIGA HARI RUNDOWN
              </h2>
            </div>
            <Link
              href="/jadwal"
              className="font-display text-sm sm:text-base tracking-wider uppercase text-[#0B0B0B] hover:text-[#D91F2C] inline-flex items-center gap-1.5 transition-colors border-b-2 border-black pb-0.5 self-start sm:self-auto"
            >
              <span>JADWAL LENGKAP DETAIL</span>
              <span className="font-technical text-xs">↗</span>
            </Link>
          </div>

          {/* Open Timetable Rows */}
          <div className="border-t border-black/15 divide-y divide-black/15">
            {[
              {
                day: "SABTU, 12 DESEMBER",
                no: "01",
                title: "PENYISIHAN TURNAMEN & OPENING CEREMONY",
                time: "10:00 — 22:30 WIB",
                location: "GOR UNY",
              },
              {
                day: "MINGGU, 13 DESEMBER",
                no: "02",
                title: "BABAK SEMIFINAL & MUSIC FESTIVAL NIGHT",
                time: "12:00 — 23:00 WIB",
                location: "GOR UNY",
              },
              {
                day: "SENIN, 14 DESEMBER",
                no: "03",
                title: "GRAND FINAL 4 SABUK EMAS & CELEBRATION",
                time: "13:00 — 23:00 WIB",
                location: "GOR UNY",
              },
            ].map((d) => (
              <div
                key={d.no}
                className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:bg-black/[0.02] transition-colors px-2"
              >
                <span className="font-technical text-sm font-bold text-[#D91F2C] md:col-span-1">{d.no}</span>
                <div className="md:col-span-4">
                  <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-[#0B0B0B]">
                    {d.day}
                  </h3>
                  <span className="font-technical text-xs text-[#77716D] font-bold uppercase">{d.location}</span>
                </div>
                <div className="md:col-span-5 font-technical text-sm font-bold text-[#0B0B0B] uppercase tracking-wide">
                  {d.title}
                </div>
                <div className="md:col-span-2 text-left md:text-right font-technical text-xs font-bold text-[#D91F2C] tracking-wider">
                  {d.time}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          5. SCENE 4: CLOSING MANIFESTO & ACTION
      ═════════════════════════════════════════════ */}
      <section className="w-full bg-[#0B0B0B] text-[#F4F0E8] py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="p-8 sm:p-14 bg-[#121214] border border-white/10 ring-corner-frame flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <span className="font-technical text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold">
                GERAKAN KOTA • #JOGJAPUNYANYALI
              </span>
              <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none">
                DI BALIK KALEM, KITA BERTARUNG.
              </h2>
              <p className="font-sans text-xs sm:text-sm text-white/60 leading-relaxed">
                Rayakan keberanian, sportivitas, dan energi pemuda Yogyakarta. Saksikan langsung di GOR UNY pada 12–14 Desember 2026.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link
                href="/tiket"
                className="font-display text-base tracking-wider uppercase text-white bg-[#D91F2C] hover:bg-[#B81521] px-8 py-4 transition-all inline-flex items-center gap-2 rounded shadow-lg"
              >
                <span>INFO & JADWAL TIKET</span>
                <span className="font-technical text-xs">↗</span>
              </Link>
              <Link
                href="/city-pride"
                className="font-display text-base tracking-wider uppercase text-white hover:text-[#D91F2C] border border-white/20 px-6 py-4 transition-colors inline-flex items-center gap-2 rounded"
              >
                <span>VOTE CITY PRIDE</span>
                <span className="font-technical text-xs">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
