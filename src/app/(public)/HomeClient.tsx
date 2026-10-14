"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HomeClient() {
  return (
    <main className="flex-1 flex flex-col w-full text-[#F4F0E8] bg-[#0B0B0B] overflow-x-hidden">
      
      {/* ═════════════════════════════════════════════════════════════════════
          1. HERO VIEWPORT — V9.2 SPACIOUS EDITORIAL
          Desktop: 50/50 clean split (Text Left, Pure Duel Photography Right)
          Mobile: High-impact photo top, bold editorial typography bottom
      ═════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[92svh] lg:min-h-screen pt-24 lg:pt-28 pb-16 lg:pb-24 flex flex-col justify-center border-b border-white/10 bg-[#0B0B0B]">
        
        {/* Desktop Split Right Photography */}
        <div className="hidden lg:block absolute top-0 right-0 w-[55%] h-full z-0 overflow-hidden">
          <Image
            src="/images/v9/04_FOTO_FIGHT_DESKTOP_TANPA_TEKST.png"
            alt="Dokumentasi Kickboxing JKBF"
            fill
            priority
            sizes="55vw"
            className="object-cover object-center grayscale contrast-125"
          />
          {/* Subtle gradient blending */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/80 via-transparent to-black/30" />
        </div>

        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 w-full relative z-10">
          {/* Mobile Top Image */}
          <div className="lg:hidden relative w-full h-[45svh] z-0 overflow-hidden mb-8 -mx-5 px-5">
            <Image
              src="/images/v9/05_FOTO_FIGHT_MOBILE_TANPA_TEKST.png"
              alt="Dokumentasi Kickboxing JKBF"
              fill
              priority
              sizes="100vw"
              className="object-cover object-top grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent" />
          </div>

          <div className="max-w-xl space-y-6">
            {/* Red Kicker */}
            <p
              className="text-[#D91F2C] text-xs sm:text-sm font-extrabold uppercase tracking-[0.24em]"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              JOGJA KICKBOXING FESTIVAL
            </p>

            {/* Main Editorial Headline */}
            <h1
              className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black uppercase tracking-tight text-white leading-[0.88]"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              JOGJA<br />
              PUNYA<br />
              <span className="text-[#D91F2C]">NYALI.</span>
            </h1>

            {/* Tagline */}
            <p
              className="text-lg sm:text-2xl font-black uppercase tracking-wider text-white"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              DI BALIK KALEM.
            </p>

            {/* Date & Location */}
            <p className="text-xs sm:text-sm font-bold text-[#8F8E8B] tracking-wider uppercase">
              12–14 DESEMBER 2026 &nbsp;/&nbsp; GOR UNY, YOGYAKARTA
            </p>

            {/* Primary Action Button */}
            <div className="pt-2 flex items-center gap-4">
              <Link
                href="/tiket"
                className="font-display font-extrabold text-sm uppercase tracking-wider text-white bg-[#D91F2C] hover:bg-[#B81521] active:scale-95 px-8 py-3.5 transition-all inline-flex items-center gap-2"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                <span>INFO TIKET</span>
                <span className="text-xs">↗</span>
              </Link>
              <Link
                href="/jadwal"
                className="font-display font-bold text-sm uppercase tracking-wider text-[#8F8E8B] hover:text-white px-4 py-3.5 transition-colors inline-flex items-center gap-1.5"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                <span>JADWAL ↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. TWO WORLDS: THE RING & THE STAGE
          Split high-contrast transition between combat and music
      ═════════════════════════════════════════════ */}
      <section className="w-full bg-[#F4F0E8] text-[#0B0B0B] border-b border-black/10">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left: Concert Image */}
          <div className="relative min-h-[360px] sm:min-h-[440px] lg:min-h-[520px] overflow-hidden">
            <Image
              src="/images/v9/06_FOTO_KONSER_PLACEHOLDER_INTERNAL.png"
              alt="Panggung Musik JKBF"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-[#0B0B0B]/40 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:hidden" />
            
            <div className="absolute bottom-8 left-6 sm:left-10 text-white lg:hidden">
              <span className="text-[#D91F2C] text-xs font-extrabold uppercase tracking-widest block mb-1">
                PANGGUNG TERBUKA
              </span>
              <h3
                className="text-3xl font-black uppercase tracking-tight"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                THE STAGE
              </h3>
            </div>
          </div>

          {/* Right: Editorial Narrative */}
          <div className="p-8 sm:p-12 lg:p-20 flex flex-col justify-center space-y-6">
            <p
              className="text-[#D91F2C] text-xs font-extrabold uppercase tracking-[0.24em]"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              THE RING / THE STAGE
            </p>

            <h2
              className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tight leading-[0.9]"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              DUA DUNIA.<br />
              SATU FESTIVAL.
            </h2>

            <p className="text-sm sm:text-base text-[#5A5957] leading-relaxed max-w-lg font-sans">
              Pertarungan kickboxing profesional berpadu dengan denyut panggung musik festival.
              Satu gelanggang, tiga hari, ribuan energi pemuda dari seluruh sudut kota.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 sm:gap-6">
              <Link
                href="/championship"
                className="font-display font-black text-sm uppercase tracking-wider text-[#0B0B0B] hover:text-[#D91F2C] inline-flex items-center gap-1.5 transition-colors border-b-2 border-black pb-0.5"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                <span>PERTANDINGAN</span>
                <span>↗</span>
              </Link>
              <Link
                href="/lineup"
                className="font-display font-black text-sm uppercase tracking-wider text-[#0B0B0B] hover:text-[#D91F2C] inline-flex items-center gap-1.5 transition-colors border-b-2 border-black pb-0.5"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                <span>LINEUP MUSIK</span>
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          3. 3-DAY TIMETABLE OVERVIEW — CLEAN ROWS
      ═════════════════════════════════════════════ */}
      <section className="w-full bg-[#0B0B0B] text-[#F4F0E8] py-20 lg:py-28 border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 lg:mb-16">
            <div>
              <p
                className="text-[#D91F2C] text-xs font-extrabold uppercase tracking-[0.24em] mb-2"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                RUNDOWN 3 HARI
              </p>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                AGENDA FESTIVAL.
              </h2>
            </div>
            <Link
              href="/jadwal"
              className="font-display font-extrabold text-sm uppercase tracking-wider text-[#8F8E8B] hover:text-white inline-flex items-center gap-1.5 transition-colors self-start sm:self-auto"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              <span>LIHAT JADWAL LENGKAP</span>
              <span>↗</span>
            </Link>
          </div>

          {/* Clean Timetable Rows */}
          <div className="border-t border-white/10 divide-y divide-white/10">
            {/* Day 1 */}
            <div className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-baseline hover:bg-white/[0.02] transition-colors px-2">
              <span className="text-[#D91F2C] font-mono text-sm font-bold md:col-span-1">01</span>
              <div className="md:col-span-4">
                <h3
                  className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  SABTU, 12 DESEMBER
                </h3>
                <p className="text-xs text-[#8F8E8B] uppercase tracking-wider mt-1">Hari Pembuka Festival</p>
              </div>
              <p className="text-sm text-[#8F8E8B] md:col-span-5 font-sans leading-relaxed">
                Penyisihan Turnamen 8-Man K-1 Rules, Opening Ceremony, dan kurasi panggung musik indie Yogyakarta.
              </p>
              <div className="md:col-span-2 text-left md:text-right">
                <span className="text-xs uppercase font-extrabold text-white tracking-widest">
                  10:00 — 22:30 WIB
                </span>
              </div>
            </div>

            {/* Day 2 */}
            <div className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-baseline hover:bg-white/[0.02] transition-colors px-2">
              <span className="text-[#D91F2C] font-mono text-sm font-bold md:col-span-1">02</span>
              <div className="md:col-span-4">
                <h3
                  className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  MINGGU, 13 DESEMBER
                </h3>
                <p className="text-xs text-[#8F8E8B] uppercase tracking-wider mt-1">Semifinal & Music Fest</p>
              </div>
              <p className="text-sm text-[#8F8E8B] md:col-span-5 font-sans leading-relaxed">
                Semifinal sabuk emas 4 divisi, showcase komunitas City Pride, dan penampilan musik panggung utama.
              </p>
              <div className="md:col-span-2 text-left md:text-right">
                <span className="text-xs uppercase font-extrabold text-white tracking-widest">
                  12:00 — 23:00 WIB
                </span>
              </div>
            </div>

            {/* Day 3 */}
            <div className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-baseline hover:bg-white/[0.02] transition-colors px-2">
              <span className="text-[#D91F2C] font-mono text-sm font-bold md:col-span-1">03</span>
              <div className="md:col-span-4">
                <h3
                  className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  SENIN, 14 DESEMBER
                </h3>
                <p className="text-xs text-[#8F8E8B] uppercase tracking-wider mt-1">Grand Final Championship</p>
              </div>
              <p className="text-sm text-[#8F8E8B] md:col-span-5 font-sans leading-relaxed">
                Partai puncak perebutan 4 sabuk juara Redy Championship 2, penyerahan piala, dan closing concert.
              </p>
              <div className="md:col-span-2 text-left md:text-right">
                <span className="text-xs uppercase font-extrabold text-[#D91F2C] tracking-widest">
                  14:00 — 23:30 WIB
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          4. COMMUNITY & CREATOR — KOTA PUNYA NYALI
      ═════════════════════════════════════════════ */}
      <section className="w-full bg-[#F4F0E8] text-[#0B0B0B] py-20 lg:py-28 border-b border-black/10">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <div className="space-y-6">
              <p
                className="text-[#D91F2C] text-xs font-extrabold uppercase tracking-[0.24em]"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                GERAKAN KOTA & KOMUNITAS
              </p>
              <h2
                className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.9]"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                KOTA<br />
                PUNYA NYALI.
              </h2>
              <p className="text-sm sm:text-base text-[#5A5957] leading-relaxed max-w-lg font-sans">
                Dukungan dari Bantul, Sleman, Kota Jogja, Kulon Progo, dan Gunungkidul.
                Suarakan kebanggaan daerahmu dan jadilah bagian dari cerita festival.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/city-pride"
                  className="font-display font-extrabold text-sm uppercase tracking-wider text-white bg-[#0B0B0B] hover:bg-black px-7 py-3.5 transition-colors inline-flex items-center gap-1.5"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  <span>VOTE WILAYAH ↗</span>
                </Link>
                <Link
                  href="/creator"
                  className="font-display font-bold text-sm uppercase tracking-wider text-[#0B0B0B] hover:text-[#D91F2C] px-5 py-3.5 transition-colors inline-flex items-center gap-1.5 border border-black/20"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  <span>CREATOR HUB ↗</span>
                </Link>
              </div>
            </div>

            {/* Right: Merch Highlight */}
            <div className="border border-black/10 p-8 sm:p-12 bg-white/40 space-y-6">
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#D91F2C]">
                OFFICIAL APPAREL
              </span>
              <h3
                className="text-3xl sm:text-4xl font-black uppercase tracking-tight"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                MERCHANDISE COLLECTION.
              </h3>
              <p className="text-xs sm:text-sm text-[#5A5957] font-sans leading-relaxed">
                T-Shirt resmi festival, hoodie, dan aksesori edisi terbatas #JOGJAPUNYANYALI dirancang dengan standar streetwear premium.
              </p>
              <Link
                href="/merch"
                className="font-display font-extrabold text-xs uppercase tracking-wider text-[#D91F2C] hover:underline inline-flex items-center gap-1"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                <span>LIHAT KATALOG MERCHANDISE</span>
                <span>↗</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          5. VENUE CALLOUT — GOR UNY YOGYAKARTA
      ═════════════════════════════════════════════ */}
      <section className="w-full bg-[#0B0B0B] text-white py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <span className="text-[#D91F2C] text-xs font-extrabold uppercase tracking-[0.24em] block">
              LOKASI ACARA RESMI
            </span>
            <h2
              className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-none"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              GOR UNY, YOGYAKARTA.
            </h2>
            <p className="text-xs sm:text-sm text-[#8F8E8B] max-w-md font-sans leading-relaxed">
              Gelanggang Olahraga Universitas Negeri Yogyakarta, Colombo, Caturtunggal, Depok, Sleman, D.I. Yogyakarta 55281.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/venue"
              className="font-display font-extrabold text-xs sm:text-sm uppercase tracking-wider text-white border border-white/20 hover:border-white px-6 py-3 transition-colors inline-flex items-center gap-1.5"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              <span>PANDUAN LOKASI & AKSES</span>
              <span>↗</span>
            </Link>
            <Link
              href="/tiket"
              className="font-display font-extrabold text-xs sm:text-sm uppercase tracking-wider text-white bg-[#D91F2C] hover:bg-[#B81521] px-6 py-3 transition-colors inline-flex items-center gap-1.5"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              <span>INFO TIKET</span>
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
