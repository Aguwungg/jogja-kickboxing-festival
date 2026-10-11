"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Calendar, 
  MapPin, 
  Ticket, 
  Trophy, 
  Music, 
  ChevronRight, 
  ArrowUpRight,
  Vote,
  Sparkles,
  ShoppingBag
} from "lucide-react";

export default function HomeClient() {
  return (
    <main className="flex-1 flex flex-col w-full text-[#F5F3EE] bg-[#09090B] overflow-x-hidden">
      
      {/* ═════════════════════════════════════════════════════════════════════
          BLOCK 1 — HERO
          Event First: WHAT, WHEN, WHERE, WHY, HOW
          Headline: JOGJA PUNYA NYALI.
          Approved Dates: 12–14 DESEMBER 2026
          Approved Venue: GOR UNY, YOGYAKARTA
      ═════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[90svh] md:min-h-[96svh] flex items-end pb-12 sm:pb-16 md:pb-20 pt-28 overflow-hidden">
        
        {/* Dual Visual Atmosphere */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Ring / Combat Side */}
          <div className="absolute top-0 left-0 w-full md:w-1/2 h-1/2 md:h-full">
            <Image
              src="/images/jkb/hero-boxing.jpg"
              alt="Arena kickboxing profesional JKB 2026"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#09090B]/90 via-[#09090B]/60 to-transparent" />
            <div className="absolute top-6 left-6 z-10 hidden sm:block">
              <span className="font-display text-[11px] font-black uppercase tracking-[0.25em] bg-[#D91F2C] text-white px-3 py-1 shadow-md">
                THE RING • CHAMPIONSHIP
              </span>
            </div>
          </div>

          {/* Stage / Music Festival Side */}
          <div className="absolute bottom-0 right-0 w-full md:w-1/2 h-1/2 md:h-full">
            <Image
              src="/images/jkb/hero-concert.jpg"
              alt="Panggung festival musik spektakuler JKB 2026"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#09090B]/85 via-[#09090B]/50 to-transparent" />
            <div className="absolute top-6 right-6 z-10 hidden sm:block">
              <span className="font-display text-[11px] font-black uppercase tracking-[0.25em] bg-[#E2BA75] text-[#09090B] px-3 py-1 shadow-md">
                THE STAGE • LIVE MUSIC
              </span>
            </div>
          </div>

          {/* Vignette Overlays for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/70 to-[#09090B]/40 pointer-events-none" />
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/10 hidden md:block pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 sm:space-y-5">
            
            {/* Campaign Narrative */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-block text-[#D91F2C] font-bold tracking-[0.25em] text-xs sm:text-sm uppercase border-l-2 border-[#D91F2C] pl-2.5">
                #JOGJAPUNYANYALI
              </span>
              <span className="text-white/30 hidden sm:inline">•</span>
              <span className="text-[#E2BA75] font-bold tracking-[0.2em] text-xs uppercase hidden sm:inline">
                DI BALIK KALEM
              </span>
            </div>

            {/* Display Headline */}
            <h1
              className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase leading-[0.9] tracking-tight"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              JOGJA PUNYA <span className="text-[#D91F2C]">NYALI.</span>
            </h1>

            {/* Concise Narrative */}
            <p className="text-base sm:text-lg md:text-xl text-[#F5F3EE]/90 max-w-2xl leading-relaxed font-normal">
              Pertarungan sengit kickboxing profesional Redy Championship 2 berpadu dengan panggung musik festival. Tiga hari pembuktian nyali di Yogyakarta.
            </p>

            {/* Approved Key Facts */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-[#F5F3EE]/85 font-medium tracking-wide pt-1">
              <span className="flex items-center gap-1.5 bg-[#171719]/80 px-3.5 py-1.5 rounded-sm border border-white/10">
                <Calendar className="w-3.5 h-3.5 text-[#D91F2C]" />
                12–14 DESEMBER 2026
              </span>
              <span className="flex items-center gap-1.5 bg-[#171719]/80 px-3.5 py-1.5 rounded-sm border border-white/10">
                <MapPin className="w-3.5 h-3.5 text-[#D91F2C]" />
                GOR UNY, YOGYAKARTA
              </span>
            </div>

            {/* Primary & Secondary Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <Link
                href="/tiket"
                className="font-display font-black text-xs sm:text-sm uppercase tracking-widest text-white bg-[#D91F2C] hover:bg-[#EF3340] active:scale-95 px-6 sm:px-8 py-3.5 rounded-sm transition-all shadow-lg shadow-[#D91F2C]/30 flex items-center gap-2"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                <Ticket className="w-4 h-4" />
                <span>INFO TIKET</span>
              </Link>
              
              <Link
                href="/jadwal"
                className="font-display font-black text-xs sm:text-sm uppercase tracking-widest text-[#F5F3EE] bg-white/10 hover:bg-white/20 active:scale-95 border border-white/15 px-6 sm:px-7 py-3.5 rounded-sm transition-all flex items-center gap-2"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                <Calendar className="w-4 h-4 text-[#E2BA75]" />
                <span>LIHAT JADWAL</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          BLOCK 2 — TWO DISCOVERY PATHS
          "PILIH PENGALAMANMU"
          Path 1: PERTANDINGAN (/championship)
          Path 2: MUSIK & FESTIVAL (/lineup)
      ═════════════════════════════════════════════════════════════════════ */}
      <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#09090B]">
        <div className="max-w-7xl mx-auto space-y-10">
          
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
              DUA DUNIA • SATU ARENA
            </span>
            <h2
              className="font-display text-3xl sm:text-5xl font-black uppercase text-white"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              PILIH PENGALAMANMU
            </h2>
            <p className="text-xs sm:text-sm text-[#9A9AA2]">
              Jelajahi tensi ring pertarungan atau nikmati energi panggung musik festival.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Path 1: PERTANDINGAN */}
            <div className="group relative rounded-sm overflow-hidden bg-[#171719] border border-white/10 hover:border-[#D91F2C]/50 transition-all flex flex-col justify-end min-h-[380px] sm:min-h-[440px]">
              <Image
                src="/images/jkb/boxing-ring.jpg"
                alt="Arena Kejuaraan Redy Championship 2"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/60 to-transparent" />
              
              <div className="relative z-10 p-6 sm:p-8 space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#D91F2C] text-white text-[11px] font-bold uppercase tracking-wider">
                  <Trophy className="w-3.5 h-3.5" />
                  <span>THE RING</span>
                </div>

                <h3
                  className="font-display text-3xl sm:text-4xl font-black uppercase text-white leading-tight"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  PERTANDINGAN KICKBOXING
                </h3>

                <p className="text-xs sm:text-sm text-[#C4C4CC] leading-relaxed max-w-md">
                  Rangkaian kejuaraan kickboxing profesional Redy Championship 2. Perebutan sabuk juara nasional di atas ring resmi GOR UNY.
                </p>

                <div className="pt-2 flex flex-wrap gap-3">
                  <Link
                    href="/championship"
                    className="font-display font-bold text-xs uppercase tracking-widest px-5 py-2.5 bg-[#D91F2C] hover:bg-[#EF3340] text-white rounded-sm transition-all"
                    style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                  >
                    Info Kejuaraan →
                  </Link>
                  <Link
                    href="/fighters"
                    className="font-display font-bold text-xs uppercase tracking-widest px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-sm transition-all border border-white/10"
                    style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                  >
                    Daftar Petarung
                  </Link>
                </div>
              </div>
            </div>

            {/* Path 2: MUSIK & FESTIVAL */}
            <div className="group relative rounded-sm overflow-hidden bg-[#171719] border border-white/10 hover:border-[#E2BA75]/50 transition-all flex flex-col justify-end min-h-[380px] sm:min-h-[440px]">
              <Image
                src="/images/jkb/festival-lights.jpg"
                alt="Panggung Festival Musik JKB 2026"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/60 to-transparent" />
              
              <div className="relative z-10 p-6 sm:p-8 space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#E2BA75] text-[#09090B] text-[11px] font-bold uppercase tracking-wider">
                  <Music className="w-3.5 h-3.5" />
                  <span>THE STAGE</span>
                </div>

                <h3
                  className="font-display text-3xl sm:text-4xl font-black uppercase text-white leading-tight"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  MUSIK & FESTIVAL
                </h3>

                <p className="text-xs sm:text-sm text-[#C4C4CC] leading-relaxed max-w-md">
                  Panggung pertunjukan musik spektakuler, tata cahaya festival megah, food bazaar, dan selebrasi kultur muda Yogyakarta.
                </p>

                <div className="pt-2 flex flex-wrap gap-3">
                  <Link
                    href="/lineup"
                    className="font-display font-bold text-xs uppercase tracking-widest px-5 py-2.5 bg-[#E2BA75] hover:bg-[#F0CB8E] text-[#09090B] rounded-sm transition-all"
                    style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                  >
                    Lineup Musik →
                  </Link>
                  <Link
                    href="/venue"
                    className="font-display font-bold text-xs uppercase tracking-widest px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-sm transition-all border border-white/10"
                    style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                  >
                    Fasilitas Festival
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          BLOCK 3 — PLAN YOUR VISIT
          "RENCANAKAN KUNJUNGANMU"
          3 Practical Destinations:
          1. Jadwal Acara (/jadwal)
          2. Lokasi GOR UNY (/venue)
          3. Informasi Tiket (/tiket)
      ═════════════════════════════════════════════════════════════════════ */}
      <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F3EE] text-[#09090B]">
        <div className="max-w-7xl mx-auto space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#09090B]/10 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
                PANDUAN PRAKTIS
              </span>
              <h2
                className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight mt-1 text-[#09090B]"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                RENCANAKAN KUNJUNGANMU
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#62626A] max-w-sm leading-relaxed">
              Tiga informasi utama yang wajib diketahui pengunjung sebelum hadir ke arena festival.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Jadwal */}
            <div className="bg-white rounded-sm p-6 sm:p-7 border border-black/5 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-sm bg-[#D91F2C]/10 text-[#D91F2C] flex items-center justify-center font-bold">
                  <Calendar className="w-5 h-5" />
                </div>
                <h3
                  className="font-display text-2xl font-black uppercase text-[#09090B]"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  JADWAL ACARA
                </h3>
                <p className="text-xs sm:text-sm text-[#62626A] leading-relaxed">
                  Rangkaian jadwal 3 hari festival: babak penyisihan laga, semifinal, hingga malam Grand Final dan panggung musik.
                </p>
              </div>
              <Link
                href="/jadwal"
                className="font-display font-bold text-xs uppercase tracking-widest text-[#D91F2C] hover:text-[#EF3340] flex items-center gap-1.5 pt-4 border-t border-black/5"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                <span>LIHAT RUNDOWN JADWAL</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 2: Lokasi GOR UNY */}
            <div className="bg-white rounded-sm p-6 sm:p-7 border border-black/5 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-sm bg-[#09090B]/10 text-[#09090B] flex items-center justify-center font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3
                  className="font-display text-2xl font-black uppercase text-[#09090B]"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  LOKASI GOR UNY
                </h3>
                <p className="text-xs sm:text-sm text-[#62626A] leading-relaxed">
                  Lokasi strategis di Jl. Colombo No. 1, Sleman, Yogyakarta. Panduan transportasi umum, titik masuk venue, dan peta.
                </p>
              </div>
              <Link
                href="/venue"
                className="font-display font-bold text-xs uppercase tracking-widest text-[#09090B] hover:text-[#D91F2C] flex items-center gap-1.5 pt-4 border-t border-black/5"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                <span>PANDUAN LOKASI VENUE</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 3: Informasi Tiket */}
            <div className="bg-white rounded-sm p-6 sm:p-7 border border-[#D91F2C]/30 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-sm bg-[#D91F2C] text-white flex items-center justify-center font-bold">
                  <Ticket className="w-5 h-5" />
                </div>
                <h3
                  className="font-display text-2xl font-black uppercase text-[#09090B]"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  INFORMASI TIKET
                </h3>
                <p className="text-xs sm:text-sm text-[#62626A] leading-relaxed">
                  Informasi resmi akses tiket festival dan ketentuan masuk arena GOR UNY. Penjualan resmi segera diumumkan.
                </p>
              </div>
              <Link
                href="/tiket"
                className="font-display font-bold text-xs uppercase tracking-widest text-[#D91F2C] hover:text-[#EF3340] flex items-center gap-1.5 pt-4 border-t border-black/5"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                <span>CEK INFORMASI TIKET</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          BLOCK 4 — EXPLORE MORE
          Discreet discovery for City Pride, Creator Program, and Merchandise
      ═════════════════════════════════════════════════════════════════════ */}
      <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#09090B] border-t border-white/10">
        <div className="max-w-7xl mx-auto space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
                EKOSISTEM JKB
              </span>
              <h2
                className="font-display text-3xl sm:text-4xl font-black uppercase text-white mt-0.5"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                EKSPLORASI LAINNYA
              </h2>
            </div>
            <p className="text-xs text-[#9A9AA2] max-w-sm">
              Dukungan komunitas, program liputan kreatif, dan katalog apparel resmi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            {/* Card 1: City Pride */}
            <Link
              href="/city-pride"
              className="p-6 bg-[#171719] border border-white/10 hover:border-[#D91F2C]/50 rounded-sm flex flex-col justify-between space-y-4 group transition-all"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-sm bg-[#D91F2C]/10 text-[#D91F2C] flex items-center justify-center">
                    <Vote className="w-4 h-4" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#9A9AA2] group-hover:text-[#D91F2C] transition-colors" />
                </div>
                <h3
                  className="font-display text-xl font-bold uppercase text-white group-hover:text-[#D91F2C] transition-colors"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  City Pride Voting
                </h3>
                <p className="text-xs text-[#9A9AA2] leading-relaxed">
                  Vote wilayah kebanggaanmu di Jogja & Jateng. Satu akun satu suara aman terverifikasi.
                </p>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#D91F2C]">
                Vote Wilayah →
              </span>
            </Link>

            {/* Card 2: Creator Program */}
            <Link
              href="/creator"
              className="p-6 bg-[#171719] border border-white/10 hover:border-white/30 rounded-sm flex flex-col justify-between space-y-4 group transition-all"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-sm bg-white/10 text-white flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#9A9AA2] group-hover:text-white transition-colors" />
                </div>
                <h3
                  className="font-display text-xl font-bold uppercase text-white group-hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  Program Kreator
                </h3>
                <p className="text-xs text-[#9A9AA2] leading-relaxed">
                  Daftarkan kanal konten dan media kamu untuk akses liputan resmi arena festival.
                </p>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#C4C4CC]">
                Gabung Program →
              </span>
            </Link>

            {/* Card 3: Merchandise */}
            <Link
              href="/merch"
              className="p-6 bg-[#171719] border border-white/10 hover:border-[#E2BA75]/50 rounded-sm flex flex-col justify-between space-y-4 group transition-all"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-sm bg-[#E2BA75]/10 text-[#E2BA75] flex items-center justify-center">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#9A9AA2] group-hover:text-[#E2BA75] transition-colors" />
                </div>
                <h3
                  className="font-display text-xl font-bold uppercase text-white group-hover:text-[#E2BA75] transition-colors"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  Official Merchandise
                </h3>
                <p className="text-xs text-[#9A9AA2] leading-relaxed">
                  Koleksi apparel dan memorabilia resmi festival dengan identitas Di Balik Kalem.
                </p>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#E2BA75]">
                Lihat Katalog →
              </span>
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}
