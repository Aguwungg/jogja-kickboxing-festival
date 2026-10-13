"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowDown, Calendar, MapPin, ShieldAlert } from "lucide-react";

export default function HomeClient() {
  return (
    <main className="flex-1 flex flex-col w-full text-[#F4F0E8] bg-[#0B0B0B] overflow-x-hidden">
      
      {/* ═════════════════════════════════════════════════════════════════════
          1. HERO SECTION — V9 FIGHT CULTURE EDITORIAL
          Desktop: Asymmetric Clean Cut composition
          Mobile: Standalone vertical layout
      ═════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[92svh] lg:min-h-screen pt-24 pb-12 flex flex-col justify-between border-b border-white/10 bg-[#0B0B0B]">
        
        {/* Desktop Split Background Image */}
        <div className="hidden lg:block absolute top-0 right-0 w-[52%] h-full z-0 overflow-hidden">
          <Image
            src="/images/v9/04_FOTO_FIGHT_DESKTOP_TANPA_TEKST.png"
            alt="Dokumentasi Kickboxing JKBF"
            fill
            priority
            sizes="52vw"
            className="object-cover object-center grayscale contrast-125"
          />
          {/* Gradient blends left into deep black */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-black/40" />
        </div>

        {/* Mobile Top Image */}
        <div className="lg:hidden relative w-full h-[52svh] z-0 overflow-hidden -mt-4 mb-4">
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

        {/* Hero Main Copy */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
          <div className="max-w-2xl space-y-4 sm:space-y-6">
            
            {/* Overline */}
            <div className="flex items-center gap-2">
              <span className="v9-overline text-[#8F8E8B] text-xs sm:text-sm tracking-[0.22em]">
                12—14 DESEMBER 2026 / GOR UNY / YOGYAKARTA
              </span>
            </div>

            {/* Headline */}
            <h1
              className="v9-display-title text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#F4F0E8] leading-[0.88]"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              JOGJA<br />
              PUNYA<br />
              <span className="text-[#D91F2C]">NYALI.</span>
            </h1>

            {/* Subline */}
            <p className="text-base sm:text-lg md:text-xl font-bold uppercase tracking-wider text-[#F4F0E8]/90 font-display">
              DI BALIK KALEM. ADA PERTARUNGAN.
            </p>

            <p className="text-xs sm:text-sm text-[#8F8E8B] max-w-md font-sans leading-relaxed">
              Peleburan kejuaraan kickboxing profesional Redy Championship 2 dengan festival musik spektakuler di Yogyakarta. Tiga hari pembuktian nyali pemuda.
            </p>

            {/* CTA Row */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/tiket"
                className="v9-btn-red text-sm sm:text-base font-display font-black tracking-wider px-6 py-3"
              >
                <span>INFO TIKET</span>
                <span>↗</span>
              </Link>
              <a
                href="#festival-destinations"
                className="v9-btn-ghost text-sm sm:text-base font-display font-extrabold tracking-wider px-5 py-3 text-[#F4F0E8]"
              >
                <span>JELAJAHI FESTIVAL</span>
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>

            {/* Editorial Asset Notice */}
            <p className="text-[10px] tracking-widest text-[#5A5957] uppercase font-mono pt-4">
              FOTO KONSEP / PETARUNG ILUSTRATIF • BUKAN ATLET RESMI
            </p>
          </div>
        </div>

        {/* Hero Bottom Ribbon */}
        <div id="festival-destinations" className="relative z-10 w-full border-t border-white/10 mt-10 pt-4 pb-2 bg-[#0B0B0B]/90 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-xs font-display font-black tracking-widest uppercase">
              <Link
                href="/championship"
                className="flex items-center justify-between p-3 border border-white/10 bg-[#141416] hover:border-[#D91F2C] transition-colors group"
              >
                <div>
                  <span className="text-[#D91F2C] block text-[10px]">01</span>
                  <span className="text-sm text-[#F4F0E8] group-hover:text-white">THE RING.</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8F8E8B] group-hover:text-[#D91F2C]" />
              </Link>

              <Link
                href="/lineup"
                className="flex items-center justify-between p-3 border border-white/10 bg-[#141416] hover:border-[#D91F2C] transition-colors group"
              >
                <div>
                  <span className="text-[#D91F2C] block text-[10px]">02</span>
                  <span className="text-sm text-[#F4F0E8] group-hover:text-white">THE STAGE.</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8F8E8B] group-hover:text-[#D91F2C]" />
              </Link>

              <Link
                href="/city-pride"
                className="col-span-2 md:col-span-1 flex items-center justify-between p-3 border border-white/10 bg-[#141416] hover:border-[#D91F2C] transition-colors group"
              >
                <div>
                  <span className="text-[#D91F2C] block text-[10px]">03</span>
                  <span className="text-sm text-[#F4F0E8] group-hover:text-white">THE CITY.</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8F8E8B] group-hover:text-[#D91F2C]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. THE RING — COMBAT EXPERIENCE
          Underground Fight Editorial
      ═════════════════════════════════════════════════════════════════════ */}
      <section className="w-full py-20 border-b border-white/10 bg-[#0B0B0B] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2">
                <span className="v9-overline text-[#D91F2C]">01 / COMBAT SPORTS</span>
                <span className="text-[#8F8E8B] text-xs">•</span>
                <span className="text-xs uppercase tracking-widest text-[#8F8E8B] font-display font-bold">
                  REDY CHAMPIONSHIP 2
                </span>
              </div>

              <h2
                className="v9-display-title text-4xl sm:text-5xl md:text-6xl text-[#F4F0E8]"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                PERTARUNGAN DI ATAS RING. BUKAN REKAYASA.
              </h2>

              <p className="text-sm text-[#8F8E8B] leading-relaxed font-sans">
                Turnamen kickboxing paling bergengsi di Yogyakarta. Menghadirkan atlet-atlet pilihan lintas divisi dalam aturan ketat kickboxing profesional. Setiap laga adalah pembuktian kehormatan dan mentalitas bertarung.
              </p>

              {/* Pre-event notice */}
              <div className="p-4 bg-[#141416] border-l-2 border-[#D91F2C] text-xs text-[#8F8E8B] space-y-1">
                <p className="font-bold text-[#F4F0E8] uppercase tracking-wider font-display">
                  STATUS RESMI FIGHT CARD
                </p>
                <p>
                  Jadwal partai dan penentuan petarung saat ini sedang dalam proses verifikasi tim teknis & komisi pertandingan resmi.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/championship"
                  className="v9-btn-red text-xs sm:text-sm font-display font-extrabold tracking-wider"
                >
                  <span>LIHAT REDY CHAMPIONSHIP 2</span>
                  <span>↗</span>
                </Link>
                <Link
                  href="/bracket"
                  className="v9-btn-ghost text-xs sm:text-sm font-display font-extrabold tracking-wider"
                >
                  <span>BAGAN TURNAMEN</span>
                </Link>
                <Link
                  href="/fighters"
                  className="v9-btn-ghost text-xs sm:text-sm font-display font-extrabold tracking-wider"
                >
                  <span>ROSTER PETARUNG</span>
                </Link>
              </div>
            </div>

            {/* Right Combat Showcase Imagery */}
            <div className="lg:col-span-6 relative h-[380px] sm:h-[480px] bg-[#141416] border border-white/10 overflow-hidden">
              <Image
                src="/images/v9/04_FOTO_FIGHT_DESKTOP_TANPA_TEKST.png"
                alt="Pertarungan kickboxing resmi Redy Championship"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#0B0B0B]/85 border border-white/10 backdrop-blur-sm">
                <span className="text-[10px] text-[#D91F2C] font-mono uppercase tracking-widest block">
                  ARENA PERTANDINGAN UTAMA
                </span>
                <span className="text-base font-display font-black uppercase text-[#F4F0E8] block" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
                  GOR UNY YOGYAKARTA • RING SIDE & TRIBUN
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          3. THE STAGE — MUSIC FESTIVAL EXPERIENCE
          Youth Music Energy Editorial
      ═════════════════════════════════════════════════════════════════════ */}
      <section className="w-full py-20 border-b border-white/10 bg-[#141416] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Concert Photo */}
            <div className="lg:col-span-6 relative h-[380px] sm:h-[480px] bg-[#0B0B0B] border border-white/10 overflow-hidden order-2 lg:order-1">
              <Image
                src="/images/v9/06_FOTO_KONSER_PLACEHOLDER_INTERNAL.png"
                alt="Panggung festival musik JKBF 2026"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-black/30" />
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#0B0B0B]/85 border border-white/10 backdrop-blur-sm">
                <span className="text-[10px] text-[#D91F2C] font-mono uppercase tracking-widest block">
                  STAGE ATMOSPHERE • SOUND & LIGHTS
                </span>
                <span className="text-base font-display font-black uppercase text-[#F4F0E8] block" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
                  PANGGUNG MUSIK ENERGI PEMUDA
                </span>
              </div>
            </div>

            {/* Right Music Copy */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-2">
                <span className="v9-overline text-[#D91F2C]">02 / MUSIC FESTIVAL</span>
                <span className="text-[#8F8E8B] text-xs">•</span>
                <span className="text-xs uppercase tracking-widest text-[#8F8E8B] font-display font-bold">
                  THE STAGE
                </span>
              </div>

              <h2
                className="v9-display-title text-4xl sm:text-5xl md:text-6xl text-[#F4F0E8]"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                ENERGI MUSIK DAN SORAK PENONTON.
              </h2>

              <p className="text-sm text-[#8F8E8B] leading-relaxed font-sans">
                Festival ini bukan sekadar laga fisik. Selepas dentuman sarung tinju di atas ring, panggung musik menyala mengiringi malam di Yogyakarta. Kolaborasi musisi dan band indie menggetarkan GOR UNY selama tiga hari penuh.
              </p>

              <div className="p-4 bg-[#0B0B0B] border-l-2 border-[#D91F2C] text-xs text-[#8F8E8B] space-y-1">
                <p className="font-bold text-[#F4F0E8] uppercase tracking-wider font-display">
                  PENGUMUMAN RESMI ARTIS & LINEUP
                </p>
                <p>
                  Lineup artis dan jadwal performa panggung akan diumumkan secara bertahap melalui kanal resmi panitia pelaksana.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/lineup"
                  className="v9-btn-red text-xs sm:text-sm font-display font-extrabold tracking-wider"
                >
                  <span>EXPLORE LINEUP MUSIK</span>
                  <span>↗</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          4. 3-DAY TIMETABLE OVERVIEW
          Clean Editorial Timetable
      ═════════════════════════════════════════════════════════════════════ */}
      <section className="w-full py-20 border-b border-white/10 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="v9-overline text-[#D91F2C]">TIMETABLE RESMI</span>
              <h2
                className="v9-display-title text-4xl sm:text-5xl text-[#F4F0E8] mt-1"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                TIGA HARI FESTIVAL DI GOR UNY
              </h2>
            </div>
            <Link
              href="/jadwal"
              className="text-xs uppercase font-extrabold tracking-widest text-[#F4F0E8] hover:text-[#D91F2C] flex items-center gap-1 font-display"
            >
              <span>LIHAT JADWAL LENGKAP 3 HARI</span>
              <span>↗</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Day 1 */}
            <div className="p-6 bg-[#141416] border border-white/10 space-y-4">
              <div className="flex justify-between items-start border-b border-white/10 pb-3">
                <div>
                  <span className="text-[10px] text-[#D91F2C] font-mono tracking-widest uppercase block">HARI 01</span>
                  <h3 className="text-xl font-display font-black text-[#F4F0E8]" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
                    SABTU, 12 DESEMBER
                  </h3>
                </div>
                <span className="text-xs font-mono text-[#8F8E8B]">GOR UNY</span>
              </div>
              <ul className="space-y-3 text-xs text-[#8F8E8B]">
                <li className="flex gap-3">
                  <span className="font-mono text-[#F4F0E8] w-14">SESI 1</span>
                  <span>Registrasi, timbang badan & upacara pembuka</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-[#F4F0E8] w-14">SESI 2</span>
                  <span>Babak penyisihan Redy Championship 2</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-[#D91F2C] w-14">MALAM</span>
                  <span>Opening acts panggung musik festival</span>
                </li>
              </ul>
            </div>

            {/* Day 2 */}
            <div className="p-6 bg-[#141416] border border-white/10 space-y-4">
              <div className="flex justify-between items-start border-b border-white/10 pb-3">
                <div>
                  <span className="text-[10px] text-[#D91F2C] font-mono tracking-widest uppercase block">HARI 02</span>
                  <h3 className="text-xl font-display font-black text-[#F4F0E8]" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
                    MINGGU, 13 DESEMBER
                  </h3>
                </div>
                <span className="text-xs font-mono text-[#8F8E8B]">GOR UNY</span>
              </div>
              <ul className="space-y-3 text-xs text-[#8F8E8B]">
                <li className="flex gap-3">
                  <span className="font-mono text-[#F4F0E8] w-14">SESI 1</span>
                  <span>Perempat final & semifinal antar divisi</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-[#F4F0E8] w-14">SESI 2</span>
                  <span>Aktivasi komunitas City Pride & Creator Meet</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-[#D91F2C] w-14">MALAM</span>
                  <span>Konser musik live & performa band utama</span>
                </li>
              </ul>
            </div>

            {/* Day 3 */}
            <div className="p-6 bg-[#141416] border border-white/10 space-y-4">
              <div className="flex justify-between items-start border-b border-white/10 pb-3">
                <div>
                  <span className="text-[10px] text-[#D91F2C] font-mono tracking-widest uppercase block">HARI 03</span>
                  <h3 className="text-xl font-display font-black text-[#F4F0E8]" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
                    SENIN, 14 DESEMBER
                  </h3>
                </div>
                <span className="text-xs font-mono text-[#8F8E8B]">GOR UNY</span>
              </div>
              <ul className="space-y-3 text-xs text-[#8F8E8B]">
                <li className="flex gap-3">
                  <span className="font-mono text-[#F4F0E8] w-14">SESI 1</span>
                  <span>Final perebutan sabuk juara divisi</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-[#F4F0E8] w-14">SESI 2</span>
                  <span>Main Event Redy Championship 2</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-[#D91F2C] w-14">MALAM</span>
                  <span>Penyerahan sabuk juara & grand finale music stage</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          5. CITY PRIDE & CREATOR (COMMUNITY)
      ═════════════════════════════════════════════ */}
      <section className="w-full py-20 border-b border-white/10 bg-[#141416]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* City Pride Card */}
            <div className="p-8 bg-[#0B0B0B] border border-white/10 space-y-5">
              <span className="v9-overline text-[#D91F2C]">GERAKAN PEMUDA</span>
              <h3
                className="v9-display-title text-3xl sm:text-4xl text-[#F4F0E8]"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                CITY PRIDE #JOGJAPUNYANYALI
              </h3>
              <p className="text-xs sm:text-sm text-[#8F8E8B] leading-relaxed">
                Suarakan kebanggaan wilayahmu. Lima kabupaten/kota di D.I. Yogyakarta bersatu mendukung atlet dan komunitas masing-masing di panggung festival.
              </p>
              <div>
                <Link
                  href="/city-pride"
                  className="v9-btn-ghost text-xs font-display font-extrabold tracking-wider"
                >
                  <span>EKSPLORASI CITY PRIDE</span>
                  <span>↗</span>
                </Link>
              </div>
            </div>

            {/* Creator Hub Card */}
            <div className="p-8 bg-[#0B0B0B] border border-white/10 space-y-5">
              <span className="v9-overline text-[#D91F2C]">KOLABORASI DIGITAL</span>
              <h3
                className="v9-display-title text-3xl sm:text-4xl text-[#F4F0E8]"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                CREATOR & MEDIA PASS
              </h3>
              <p className="text-xs sm:text-sm text-[#8F8E8B] leading-relaxed">
                Ruang bagi kreator konten, fotografer, jurnalis, dan komunitas peliput untuk mendokumentasikan atmosfer pertarungan serta konser musik secara langsung.
              </p>
              <div>
                <Link
                  href="/creator"
                  className="v9-btn-ghost text-xs font-display font-extrabold tracking-wider"
                >
                  <span>DAFTAR CREATOR HUB</span>
                  <span>↗</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          6. VENUE & TICKETS CALLOUT
          Warm Ivory contrast or Clean Dark
      ═════════════════════════════════════════════ */}
      <section className="w-full py-20 bg-[#F4F0E8] text-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="v9-overline text-[#D91F2C] tracking-[0.25em]">
                AKSES RESMI FESTIVAL
              </span>
              <h2
                className="v9-display-title text-4xl sm:text-5xl md:text-6xl text-[#0B0B0B]"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                AMANKAN TEMPAT ANDA DI GOR UNY YOGYAKARTA.
              </h2>
              <p className="text-sm text-[#5A5957] max-w-xl font-sans leading-relaxed">
                Tiket resmi akan didistribusikan melalui platform mitra RAWOOH. Dapatkan informasi pembukaan penjualan tiket presale, reguler, dan ringside pass.
              </p>
              <div className="flex items-center gap-6 text-xs font-bold text-[#0B0B0B] font-display uppercase tracking-wider pt-2">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#D91F2C]" />
                  12—14 DESEMBER 2026
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#D91F2C]" />
                  GOR UNY, YOGYAKARTA
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link
                href="/tiket"
                className="v9-btn-red text-center justify-center text-sm font-display font-black tracking-wider py-4 shadow-xl"
              >
                <span>INFO PEMBELIAN TIKET</span>
                <span>↗</span>
              </Link>
              <Link
                href="/venue"
                className="border border-[#0B0B0B] text-[#0B0B0B] hover:bg-black/5 text-center justify-center text-xs font-display font-extrabold tracking-wider py-3 inline-flex items-center gap-1.5 transition-colors"
              >
                <span>PANDUAN LOKASI & DENAH GOR UNY</span>
                <span>↗</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
