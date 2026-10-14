"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HomeClient() {
  return (
    <main className="flex-1 flex flex-col w-full text-[#F4F0E8] bg-[#0B0B0B] overflow-x-hidden">
      
      {/* ═════════════════════════════════════════════════════════════════════
          1. CAMPAIGN POSTER HERO — V10 ART DIRECTED
          Desktop: Immersive single dominant documentary photo with poster grouping
          Mobile: Clean vertical priority: What / When / Where / Action
      ═════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[92svh] lg:min-h-screen pt-24 lg:pt-32 pb-16 lg:pb-24 flex flex-col justify-end border-b border-white/10 bg-[#0B0B0B] overflow-hidden">
        
        {/* Dominant Documentary Background Photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/v9/04_FOTO_FIGHT_DESKTOP_TANPA_TEKST.png"
            alt="Dokumentasi Laga Kickboxing JKBF"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center lg:object-[center_25%] grayscale contrast-125 opacity-70 lg:opacity-60"
          />
          {/* Film Grain & Editorial Vignette Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/60 to-black/40" />
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/90 via-[#0B0B0B]/30 to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 w-full relative z-10">
          <div className="max-w-3xl space-y-4 sm:space-y-6">
            
            {/* Festival Identity Kicker */}
            <div className="inline-flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#D91F2C] animate-pulse" />
              <p className="font-technical text-xs sm:text-sm uppercase tracking-[0.28em] text-[#D91F2C] font-bold">
                JOGJA KICKBOXING FESTIVAL & REDY CHAMPIONSHIP 2
              </p>
            </div>

            {/* Monumental Headline */}
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[8.5rem] uppercase tracking-tight text-white leading-[0.85]">
              JOGJA PUNYA <br />
              <span className="text-[#D91F2C]">NYALI.</span>
            </h1>

            {/* Tagline & Key Facts */}
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 pt-1 border-t border-white/15">
              <p className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-white">
                DI BALIK KALEM.
              </p>
              <p className="font-technical text-xs sm:text-sm font-semibold text-[#8F8E8B] tracking-wider uppercase">
                12–14 DESEMBER 2026 &nbsp;•&nbsp; GOR UNY, YOGYAKARTA
              </p>
            </div>

            {/* Direct Dual Action (No explanatory clutter) */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Link
                href="/tiket"
                className="font-display text-base sm:text-lg tracking-wider uppercase text-white bg-[#D91F2C] hover:bg-[#B81521] active:scale-95 px-8 py-3.5 transition-all inline-flex items-center gap-2 ring-1 ring-[#D91F2C]/50 shadow-xl"
              >
                <span>INFO TIKET FESTIVAL</span>
                <span className="font-technical text-xs">↗</span>
              </Link>
              <Link
                href="/jadwal"
                className="font-display text-base sm:text-lg tracking-wider uppercase text-[#F4F0E8] hover:text-white border border-white/25 hover:border-white px-7 py-3.5 transition-all inline-flex items-center gap-2 bg-black/40 backdrop-blur-sm"
              >
                <span>LIHAT JADWAL</span>
                <span className="font-technical text-xs">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. SCENE 1: THE RING — COMBAT & CHAMPIONSHIP IDENTITY
          Bold cinematic fight culture, 4 weight class gold belts
      ═════════════════════════════════════════════ */}
      <section className="w-full bg-[#0B0B0B] text-[#F4F0E8] py-20 lg:py-28 border-b border-white/10 relative">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Header info */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#D91F2C]" />
                <span className="font-technical text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold">
                  THE RING • REDY CHAMPIONSHIP 2
                </span>
              </div>
              <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-[0.88]">
                EMPAT SABUK.<br />
                SATU GELANGGANG.
              </h2>
              <p className="text-sm sm:text-base text-[#8F8E8B] leading-relaxed font-sans max-w-md">
                Kejuaraan kickboxing profesional K-1 rules di Yogyakarta. Delapan petarung terbaik di setiap divisi bertarung memperebutkan supremasi sabuk emas.
              </p>

              <div className="pt-2">
                <Link
                  href="/championship"
                  className="font-display text-base tracking-wider uppercase text-white hover:text-[#D91F2C] inline-flex items-center gap-2 transition-colors border-b-2 border-[#D91F2C] pb-1"
                >
                  <span>EKSPLORASI KEJUARAAN & REGULASI</span>
                  <span className="font-technical text-xs">↗</span>
                </Link>
              </div>
            </div>

            {/* 4 Divisions Overview Rows */}
            <div className="lg:col-span-7 border-t border-white/10 divide-y divide-white/10">
              {[
                { no: "01", name: "FEATHERWEIGHT", limit: "57.0 KG", desc: "Kecepatan ekstrim, volume kombinasi pukulan dan tendangan tinggi." },
                { no: "02", name: "LIGHTWEIGHT", limit: "63.5 KG", desc: "Presisi teknikal pukulan sudut sempit dan agresi tanpa henti." },
                { no: "03", name: "WELTERWEIGHT", limit: "67.0 KG", desc: "Kekuatan KO brutal satu pukulan dan pertarungan jarak dekat." },
                { no: "04", name: "MIDDLEWEIGHT", limit: "71.0 KG", desc: "Dominasi fisik, benturan lutut, dan ketahanan stamina maksimal." },
              ].map((division) => (
                <div key={division.no} className="py-5 sm:py-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 hover:bg-white/[0.02] transition-colors px-2">
                  <div className="flex items-baseline gap-4">
                    <span className="font-technical text-sm font-bold text-[#D91F2C]">{division.no}</span>
                    <div>
                      <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-white">
                        {division.name}
                      </h3>
                      <p className="text-xs text-[#8F8E8B] mt-0.5 font-sans">{division.desc}</p>
                    </div>
                  </div>
                  <span className="font-technical text-xs uppercase tracking-widest text-white/80 border border-white/15 px-3 py-1 self-start sm:self-auto">
                    BATAS {division.limit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          3. SCENE 2: THE STAGE — FESTIVAL MUSIC MOMENT
          Radical atmospheric shift: Deep warm concert photography & stage pulse
      ═════════════════════════════════════════════ */}
      <section className="w-full bg-[#141416] text-[#F4F0E8] border-b border-white/10 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[550px] lg:min-h-[640px]">
          
          {/* Left: Concert Stage Photo with Warm Amber/Red Pulse */}
          <div className="lg:col-span-6 relative min-h-[360px] sm:min-h-[460px] lg:min-h-full overflow-hidden">
            <Image
              src="/images/v9/06_FOTO_KONSER_PLACEHOLDER_INTERNAL.png"
              alt="Panggung Musik Festival JKBF"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center contrast-125"
            />
            {/* Stage Light Color Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-transparent to-black/40 lg:bg-gradient-to-r lg:from-transparent lg:to-[#141416]" />
            <div className="absolute top-6 left-6 font-technical text-[10px] uppercase tracking-[0.25em] text-white/90 bg-black/60 px-3 py-1 backdrop-blur-sm border border-white/10">
              STAGE PHOTOGRAPHY • JOGJA INDIE SCENE
            </div>
          </div>

          {/* Right: Stage Curation Editorial */}
          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-20 flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#D91F2C]" />
              <span className="font-technical text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold">
                THE STAGE • LIVE MUSIC CURATION
              </span>
            </div>

            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-[0.88]">
              SUARA DARI <br />
              SUDUT KOTA.
            </h2>

            <p className="text-sm sm:text-base text-[#8F8E8B] leading-relaxed font-sans max-w-lg">
              Setelah bel ronde terakhir berdentang, panggung festival mengambil alih. Menghadirkan denyut musik rock, punk, hip-hop, dan elektronika independen yang lahir dari jalanan Yogyakarta.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-4 text-xs font-technical text-[#F4F0E8]">
                <span className="text-[#D91F2C] font-bold">01</span>
                <span className="uppercase tracking-wider">THE RING STAGE — MAIN INDOOR ARENA</span>
              </div>
              <div className="flex items-center gap-4 text-xs font-technical text-[#F4F0E8]">
                <span className="text-[#D91F2C] font-bold">02</span>
                <span className="uppercase tracking-wider">HERITAGE STAGE — CULTURAL HALL</span>
              </div>
              <div className="flex items-center gap-4 text-xs font-technical text-[#F4F0E8]">
                <span className="text-[#D91F2C] font-bold">03</span>
                <span className="uppercase tracking-wider">UNDERGROUND BEAT — OUTDOOR SOUND</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-6">
              <Link
                href="/lineup"
                className="font-display text-base tracking-wider uppercase text-white hover:text-[#D91F2C] inline-flex items-center gap-1.5 transition-colors border-b-2 border-[#D91F2C] pb-0.5"
              >
                <span>LIHAT KURASI LINEUP MUSIK</span>
                <span className="font-technical text-xs">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          4. SCENE 3: AGENDA 3 HARI — WARM IVORY EDITORIAL TIMETABLE
          Quiet, hyper-readable, disciplined baseline without dashboard cards
      ═════════════════════════════════════════════ */}
      <section className="w-full bg-[#F4F0E8] text-[#0B0B0B] py-20 lg:py-28 border-b border-black/10">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 lg:mb-16">
            <div>
              <p className="font-technical text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold mb-2">
                AGENDA UTAMA • 12–14 DESEMBER 2026
              </p>
              <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl uppercase tracking-tight leading-[0.88]">
                TIGA HARI ACARA.
              </h2>
            </div>
            <Link
              href="/jadwal"
              className="font-display text-base tracking-wider uppercase text-[#0B0B0B] hover:text-[#D91F2C] inline-flex items-center gap-1.5 transition-colors border-b-2 border-black pb-0.5 self-start sm:self-auto"
            >
              <span>LIHAT DETAIL RUNDOWN LENGKAP</span>
              <span className="font-technical text-xs">↗</span>
            </Link>
          </div>

          {/* Open Timetable Rows */}
          <div className="border-t border-black/15 divide-y divide-black/15">
            {/* Day 1 */}
            <div className="py-7 sm:py-9 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-baseline hover:bg-black/[0.02] transition-colors px-2">
              <span className="font-technical text-sm font-bold text-[#D91F2C] md:col-span-1">01</span>
              <div className="md:col-span-4">
                <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-[#0B0B0B]">
                  SABTU, 12 DESEMBER
                </h3>
                <p className="font-technical text-xs text-[#77716D] uppercase tracking-wider mt-0.5">
                  Pembukaan & Penyisihan Turnamen
                </p>
              </div>
              <p className="text-sm text-[#5A5957] md:col-span-5 font-sans leading-relaxed">
                Penyisihan 8-Man K-1 Rules di 4 kelas bobot, seremoni pembuka, serta panggung kurasi musik alternatif Yogyakarta.
              </p>
              <div className="md:col-span-2 text-left md:text-right font-technical text-xs font-bold text-[#0B0B0B] tracking-wider">
                10:00 — 22:30 WIB
              </div>
            </div>

            {/* Day 2 */}
            <div className="py-7 sm:py-9 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-baseline hover:bg-black/[0.02] transition-colors px-2">
              <span className="font-technical text-sm font-bold text-[#D91F2C] md:col-span-1">02</span>
              <div className="md:col-span-4">
                <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-[#0B0B0B]">
                  MINGGU, 13 DESEMBER
                </h3>
                <p className="font-technical text-xs text-[#77716D] uppercase tracking-wider mt-0.5">
                  Babak Semifinal & Music Night
                </p>
              </div>
              <p className="text-sm text-[#5A5957] md:col-span-5 font-sans leading-relaxed">
                Semifinal penentuan tiket sabuk juara, aktivasi kebanggaan suporter City Pride, dan penampilan panggung utama.
              </p>
              <div className="md:col-span-2 text-left md:text-right font-technical text-xs font-bold text-[#0B0B0B] tracking-wider">
                12:00 — 23:00 WIB
              </div>
            </div>

            {/* Day 3 */}
            <div className="py-7 sm:py-9 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-baseline hover:bg-black/[0.02] transition-colors px-2">
              <span className="font-technical text-sm font-bold text-[#D91F2C] md:col-span-1">03</span>
              <div className="md:col-span-4">
                <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-[#0B0B0B]">
                  SENIN, 14 DESEMBER
                </h3>
                <p className="font-technical text-xs text-[#77716D] uppercase tracking-wider mt-0.5">
                  Grand Final & Festival Celebration
                </p>
              </div>
              <p className="text-sm text-[#5A5957] md:col-span-5 font-sans leading-relaxed">
                Empat laga perebutan sabuk emas Redy Championship 2, penyerahan trofi juara, serta pertunjukan musik penutup festival.
              </p>
              <div className="md:col-span-2 text-left md:text-right font-technical text-xs font-bold text-[#0B0B0B] tracking-wider">
                13:00 — 23:00 WIB
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          5. SCENE 4: THE CITY & THE PEOPLE — CLOSING MANIFESTO
          Local pride, authentic culture, venue clarity
      ═════════════════════════════════════════════ */}
      <section className="w-full bg-[#0B0B0B] text-[#F4F0E8] py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <p className="font-technical text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold">
                GERAKAN KOTA • #JOGJAPUNYANYALI
              </p>
              <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-[0.88]">
                DI BALIK KALEM,<br />
                KITA BERTARUNG.
              </h2>
              <p className="text-sm sm:text-base text-[#8F8E8B] leading-relaxed font-sans max-w-xl">
                Yogyakarta kerap dipandang dari keramahan dan ketenangannya. Melalui JKBF, kami merayakan sisi lain: ketangguhan, disiplin, dan keberanian pemuda yang pantang menyerah.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/city-pride"
                  className="font-display text-base tracking-wider uppercase text-white bg-[#D91F2C] hover:bg-[#B81521] px-7 py-3 transition-colors inline-flex items-center gap-2"
                >
                  <span>DUKUNG WILAYAHMU</span>
                  <span className="font-technical text-xs">↗</span>
                </Link>
                <Link
                  href="/venue"
                  className="font-display text-base tracking-wider uppercase text-[#8F8E8B] hover:text-white border border-white/20 px-6 py-3 transition-colors inline-flex items-center gap-2"
                >
                  <span>PANDUAN GOR UNY</span>
                  <span className="font-technical text-xs">↗</span>
                </Link>
              </div>
            </div>

            {/* Practical Arena Box */}
            <div className="lg:col-span-5 p-8 bg-[#141416] border border-white/10 ring-corner-frame space-y-5">
              <span className="font-technical text-xs uppercase tracking-[0.22em] text-[#D91F2C] font-bold block">
                INFO LOKASI & WAKTU
              </span>
              <div className="space-y-1">
                <h3 className="font-display text-3xl uppercase tracking-wider text-white">
                  GOR UNY, YOGYAKARTA
                </h3>
                <p className="text-xs text-[#8F8E8B] font-sans">
                  Jl. Colombo Yogyakarta No.1, Karang Malang, Caturtunggal, Kec. Depok, Sleman, D.I. Yogyakarta 55281
                </p>
              </div>
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-technical">
                <span className="text-[#8F8E8B]">TANGGAL RESMI</span>
                <span className="text-white font-bold">12–14 DESEMBER 2026</span>
              </div>
              <div className="border-t border-white/10 pt-2 flex items-center justify-between text-xs font-technical">
                <span className="text-[#8F8E8B]">AKSES TRANSIT</span>
                <span className="text-white font-bold">KRL LEMPUYANGAN / TRANS JOGJA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
