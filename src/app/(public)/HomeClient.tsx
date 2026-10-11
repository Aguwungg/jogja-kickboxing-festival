"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Calendar, 
  MapPin, 
  Ticket, 
  Trophy, 
  Music, 
  Flame, 
  Users, 
  ShoppingBag, 
  ChevronRight, 
  ChevronDown, 
  ExternalLink, 
  ArrowUpRight,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { EVENT_CONFIG } from "@/lib/event-config";

type Fighter = {
  id: string;
  name: string;
  slug: string;
  division: string;
  weightClass: string;
  club: string | null;
  wins: number;
  losses: number;
  draws: number;
  image?: string | null;
};

type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  imageUrl: string | null;
};

type Performer = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  image: string | null;
  stage: string | null;
  scheduledAt: Date | null;
};

interface HomeClientProps {
  fighters: Fighter[];
  products: Product[];
  performers: Performer[];
}

export default function HomeClient({ fighters, products, performers }: HomeClientProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const essentialFaqs = [
    {
      q: "Apa itu Jogja Kickboxing Festival (JKB 2026)?",
      a: "JKB 2026 adalah festival sportainment spektakuler yang memadukan kejuaraan kickboxing profesional Redy Championship 2 dan panggung musik festival dalam satu arena di GOR UNY Yogyakarta.",
    },
    {
      q: "Kapan dan di mana JKB 2026 diselenggarakan?",
      a: "Acara berlangsung selama 3 hari, tanggal 12–14 Desember 2026, bertempat di Gelanggang Olahraga Universitas Negeri Yogyakarta (GOR UNY), Sleman, D.I. Yogyakarta.",
    },
    {
      q: "Bagaimana cara mendapatkan tiket festival?",
      a: "Penjualan tiket resmi akan difasilitasi oleh mitra ticketing RAWOOH. Silakan kunjungi halaman Info Tiket untuk melihat kategori tiket (Daily Pass, 3-Day Pass, dan VIP Ringside).",
    },
  ];

  return (
    <main className="flex-1 flex flex-col w-full text-[#F5F3EE] bg-[#09090B] overflow-x-hidden">
      
      {/* ═════════════════════════════════════════════════════════════════════
          SECTION 1 — PREMIUM HERO
          Cinematic combination of kickboxing & music festival photography
          Clear Identity: WHAT, WHEN, WHERE, WHY, HOW
      ═════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[92svh] md:min-h-[100svh] flex items-end pb-12 sm:pb-16 md:pb-20 pt-28 overflow-hidden">
        
        {/* Dual Cinematic Background */}
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
              alt="Panggung festival musik spektakuler"
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

          {/* Deep Vignette Overlays for maximum text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/70 to-[#09090B]/40 pointer-events-none" />
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/10 hidden md:block pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 sm:space-y-5">
            
            {/* Campaign & Category Pill */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-block text-[#D91F2C] font-bold tracking-[0.25em] text-xs sm:text-sm uppercase border-l-2 border-[#D91F2C] pl-2.5">
                #JOGJAPUNYANYALI
              </span>
              <span className="text-white/30 hidden sm:inline">•</span>
              <span className="text-[#E2BA75] font-bold tracking-[0.2em] text-xs uppercase hidden sm:inline">
                DI BALIK KALEM
              </span>
            </div>

            {/* Display Title */}
            <h1
              className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase leading-[0.9] tracking-tight"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              JOGJA PUNYA <span className="text-[#D91F2C]">NYALI.</span>
            </h1>

            {/* Natural, concise Indonesian explanation */}
            <p className="text-base sm:text-lg md:text-xl text-[#F5F3EE]/90 max-w-2xl leading-relaxed font-normal">
              Pertarungan sengit perebutan sabuk juara kickboxing nasional berpadu dengan energi panggung musik festival. Tiga hari penuh gengsi di Yogyakarta.
            </p>

            {/* Verified Fact Badges */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-[#F5F3EE]/80 font-medium tracking-wide pt-1">
              <span className="flex items-center gap-1.5 bg-[#171719]/80 px-3 py-1.5 rounded-sm border border-white/10">
                <Calendar className="w-3.5 h-3.5 text-[#D91F2C]" />
                12–14 DESEMBER 2026
              </span>
              <span className="flex items-center gap-1.5 bg-[#171719]/80 px-3 py-1.5 rounded-sm border border-white/10">
                <MapPin className="w-3.5 h-3.5 text-[#D91F2C]" />
                GOR UNY, YOGYAKARTA
              </span>
            </div>

            {/* Primary & Secondary Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <Link
                href="/tiket"
                className="font-display font-black text-sm uppercase tracking-widest text-white bg-[#D91F2C] hover:bg-[#EF3340] active:scale-95 px-7 py-3.5 rounded-sm transition-all shadow-lg shadow-[#D91F2C]/30 flex items-center gap-2"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                <Ticket className="w-4 h-4" />
                <span>INFO TIKET</span>
              </Link>
              
              <Link
                href="/jadwal"
                className="font-display font-black text-sm uppercase tracking-widest text-[#F5F3EE] bg-white/10 hover:bg-white/20 active:scale-95 border border-white/15 px-6 py-3.5 rounded-sm transition-all flex items-center gap-2"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                <Calendar className="w-4 h-4 text-[#E2BA75]" />
                <span>LIHAT JADWAL</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Kinetic Identity Strip */}
      <div className="w-full bg-[#D91F2C] py-2.5 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-flex items-center">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="font-display text-[#09090B] font-black text-lg sm:text-xl uppercase tracking-wider mx-4 flex items-center"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              THE RING MEETS THE STAGE <span className="mx-3 text-white/50">×</span> KICKBOXING CHAMPIONSHIP <span className="mx-3 text-white/50">×</span> LIVE MUSIC FESTIVAL <span className="mx-3 text-white/50">×</span> GOR UNY 2026 <span className="mx-3 text-white/50">×</span>
            </span>
          ))}
        </div>
      </div>

      {/* ═════════════════════════════════════════════════════════════════════
          SECTION 2 — THE RING × THE STAGE
          Two major editorial entry points: PERTANDINGAN vs MUSIK & FESTIVAL
      ═════════════════════════════════════════════════════════════════════ */}
      <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#09090B]">
        <div className="max-w-7xl mx-auto space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
              DUA DUNIA • SATU ARENA
            </span>
            <h2
              className="font-display text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              THE RING × THE STAGE
            </h2>
            <p className="text-sm sm:text-base text-[#9A9AA2]">
              Pilih pengalaman yang ingin kamu jelajahi terlebih dahulu.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Entry Point 1: PERTANDINGAN */}
            <div className="group relative rounded-sm overflow-hidden bg-[#171719] border border-white/10 hover:border-[#D91F2C]/50 transition-all flex flex-col justify-end min-h-[420px] sm:min-h-[480px]">
              <Image
                src="/images/jkb/boxing-ring.jpg"
                alt="Arena Kejuaraan Redy Championship 2"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/60 to-transparent" />
              
              <div className="relative z-10 p-6 sm:p-8 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#D91F2C] text-white text-[11px] font-bold uppercase tracking-wider">
                  <Trophy className="w-3.5 h-3.5" />
                  <span>REDY CHAMPIONSHIP 2</span>
                </div>

                <h3
                  className="font-display text-3xl sm:text-4xl font-black uppercase text-white leading-tight"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  PERTANDINGAN KICKBOXING
                </h3>

                <p className="text-sm text-[#C4C4CC] leading-relaxed max-w-md">
                  80+ atlet kickboxing dari berbagai sasana bergengsi di Indonesia bertarung memperebutkan 4 sabuk kejuaraan nasional di atas ring resmi GOR UNY.
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
                    className="font-display font-bold text-xs uppercase tracking-widest px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-sm transition-all"
                    style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                  >
                    Roster Petarung →
                  </Link>
                </div>
              </div>
            </div>

            {/* Entry Point 2: MUSIK & FESTIVAL */}
            <div className="group relative rounded-sm overflow-hidden bg-[#171719] border border-white/10 hover:border-[#E2BA75]/50 transition-all flex flex-col justify-end min-h-[420px] sm:min-h-[480px]">
              <Image
                src="/images/jkb/festival-lights.jpg"
                alt="Panggung Festival Musik JKB 2026"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/60 to-transparent" />
              
              <div className="relative z-10 p-6 sm:p-8 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#E2BA75] text-[#09090B] text-[11px] font-bold uppercase tracking-wider">
                  <Music className="w-3.5 h-3.5" />
                  <span>LIVE MUSIC STAGE</span>
                </div>

                <h3
                  className="font-display text-3xl sm:text-4xl font-black uppercase text-white leading-tight"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  PANGGUNG MUSIK FESTIVAL
                </h3>

                <p className="text-sm text-[#C4C4CC] leading-relaxed max-w-md">
                  Energi festival musik spektakuler berpadu dengan tata cahaya megah, performance musisi pilihan, food bazaar, dan kemeriahan komunitas kreatif Jogja.
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
                    className="font-display font-bold text-xs uppercase tracking-widest px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-sm transition-all"
                    style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                  >
                    Fasilitas Festival →
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          SECTION 3 — PLAN YOUR VISIT
          Warm Editorial White section: Jadwal Acara, Lokasi GOR UNY, Info Tiket
      ═════════════════════════════════════════════════════════════════════ */}
      <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F3EE] text-[#09090B]">
        <div className="max-w-7xl mx-auto space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#09090B]/10 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
                PANDUAN PENGUNJUNG
              </span>
              <h2
                className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight mt-1 text-[#09090B]"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                RENCANAKAN KUNJUNGANMU
              </h2>
            </div>
            <p className="text-sm text-[#62626A] max-w-md leading-relaxed">
              Tiga langkah cepat bagi pengunjung untuk menikmati seluruh keseruan festival tanpa hambatan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Step 1: Jadwal */}
            <div className="bg-white rounded-sm p-6 sm:p-8 border border-black/5 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-sm bg-[#D91F2C]/10 text-[#D91F2C] flex items-center justify-center font-bold">
                  <Calendar className="w-5 h-5" />
                </div>
                <h3
                  className="font-display text-2xl font-black uppercase text-[#09090B]"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  1. JADWAL 3 HARI
                </h3>
                <p className="text-sm text-[#62626A] leading-relaxed">
                  Ketahui pembagian babak laga: Weigh-in & Penyisihan (Hari 1), Semifinal & Showcase (Hari 2), hingga Grand Final & Pesta Musik (Hari 3).
                </p>
              </div>
              <Link
                href="/jadwal"
                className="font-display font-bold text-xs uppercase tracking-widest text-[#D91F2C] hover:text-[#EF3340] flex items-center gap-1.5 pt-4 border-t border-black/5"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                <span>LIHAT RUNDOWN LENGKAP</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Step 2: Lokasi */}
            <div className="bg-white rounded-sm p-6 sm:p-8 border border-black/5 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-sm bg-[#09090B]/10 text-[#09090B] flex items-center justify-center font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3
                  className="font-display text-2xl font-black uppercase text-[#09090B]"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  2. LOKASI GOR UNY
                </h3>
                <p className="text-sm text-[#62626A] leading-relaxed">
                  Akses strategis di Jl. Colombo No. 1 Sleman / Yogyakarta. Terhubung rute Trans Jogja 1B/2A dan 10 menit dari Stasiun Lempuyangan.
                </p>
              </div>
              <Link
                href="/venue"
                className="font-display font-bold text-xs uppercase tracking-widest text-[#09090B] hover:text-[#D91F2C] flex items-center gap-1.5 pt-4 border-t border-black/5"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                <span>PANDUAN VENUE & TRANSPORTASI</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Step 3: Tiket */}
            <div className="bg-white rounded-sm p-6 sm:p-8 border border-[#D91F2C]/30 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-sm bg-[#D91F2C] text-white flex items-center justify-center font-bold">
                  <Ticket className="w-5 h-5" />
                </div>
                <h3
                  className="font-display text-2xl font-black uppercase text-[#09090B]"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  3. INFORMASI TIKET
                </h3>
                <p className="text-sm text-[#62626A] leading-relaxed">
                  Pilih kategori tiket harian atau 3-day all access pass. Penjualan resmi difasilitasi langsung oleh sistem terverifikasi RAWOOH.
                </p>
              </div>
              <Link
                href="/tiket"
                className="font-display font-bold text-xs uppercase tracking-widest text-[#D91F2C] hover:text-[#EF3340] flex items-center gap-1.5 pt-4 border-t border-black/5"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                <span>CEK INFORMASI TIKET RESMI</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          SECTION 4 — OFFICIAL HIGHLIGHTS
          Feature approved fighters, performers, and truthful status
      ═════════════════════════════════════════════════════════════════════ */}
      <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#171719] border-y border-white/10">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
                HIGHLIGHT RESMI
              </span>
              <h2
                className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white mt-1"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                PETARUNG & PANGGUNG
              </h2>
            </div>
            <div className="flex items-center gap-4 text-xs font-semibold">
              <Link href="/fighters" className="text-[#9A9AA2] hover:text-white transition-colors">
                Semua Petarung →
              </Link>
              <Link href="/lineup" className="text-[#E2BA75] hover:text-yellow-300 transition-colors">
                Lineup Musik →
              </Link>
            </div>
          </div>

          {/* Fighter Highlights */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3
                className="font-display text-xl sm:text-2xl font-bold uppercase tracking-wide text-white"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                Roster Petarung Terkonfirmasi
              </h3>
            </div>

            {fighters.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {fighters.map((f, i) => (
                  <Link
                    key={f.id}
                    href={`/fighters/${f.slug}`}
                    className="block bg-[#09090B] border border-white/10 hover:border-[#D91F2C]/50 rounded-sm overflow-hidden transition-all group"
                  >
                    <div className="h-44 bg-[#252529] relative overflow-hidden">
                      {f.image ? (
                        <Image
                          src={f.image}
                          alt={f.name}
                          fill
                          sizes="(max-width: 640px) 100vw, 25vw"
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center font-display text-5xl font-black text-white/5">
                          0{i + 1}
                        </div>
                      )}
                      <div className="absolute top-2.5 left-2.5 bg-[#D91F2C] text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded-sm">
                        {f.division}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent opacity-80" />
                    </div>
                    <div className="p-4 space-y-1">
                      <h4
                        className="font-display text-lg font-bold uppercase text-white group-hover:text-[#D91F2C] transition-colors truncate"
                        style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                      >
                        {f.name}
                      </h4>
                      <p className="text-xs text-[#9A9AA2] uppercase tracking-wider">
                        {f.weightClass} • {f.club || "Sasana Mandiri"}
                      </p>
                      <div className="pt-2 flex items-center gap-3 text-xs">
                        <span className="text-green-400 font-bold">{f.wins}W</span>
                        <span className="text-red-400 font-bold">{f.losses}L</span>
                        <span className="text-[#9A9AA2] font-bold">{f.draws}D</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center bg-[#09090B] border border-white/5 rounded-sm text-[#9A9AA2] text-sm">
                Roster petarung resmi sedang dalam verifikasi komite pertandingan.
              </div>
            )}
          </div>

          {/* Performer Highlights */}
          {performers.length > 0 && (
            <div className="space-y-4 pt-4 border-t border-white/5">
              <h3
                className="font-display text-xl sm:text-2xl font-bold uppercase tracking-wide text-white"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                Panggung Musik & Musisi Pilihan
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {performers.map((performer) => (
                  <div
                    key={performer.id}
                    className="p-5 bg-[#09090B] border border-white/10 rounded-sm space-y-2"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#E2BA75] bg-[#E2BA75]/10 px-2.5 py-1 rounded-sm">
                      {performer.stage || "PANGGUNG UTAMA"}
                    </span>
                    <h4
                      className="font-display text-xl font-bold uppercase text-white"
                      style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                    >
                      {performer.name}
                    </h4>
                    <p className="text-xs text-[#9A9AA2] line-clamp-2">
                      {performer.description || "Musisi pengisi panggung sportainment JKB 2026."}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          SECTION 5 — COMMUNITY & MERCHANDISE
          Concise discovery areas for City Pride, Creator Program, and Merch
      ═════════════════════════════════════════════════════════════════════ */}
      <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#09090B]">
        <div className="max-w-7xl mx-auto space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
              EKOSISTEM FESTIVAL
            </span>
            <h2
              className="font-display text-3xl sm:text-5xl font-black uppercase text-white"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              KOMUNITAS & MERCHANDISE
            </h2>
            <p className="text-sm text-[#9A9AA2]">
              Dukung wilayah kebanggaanmu, ikuti program kreator, dan kenakan merchandise resmi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Discovery 1: City Pride */}
            <div className="p-6 sm:p-8 bg-[#171719] border border-white/10 rounded-sm flex flex-col justify-between space-y-6 hover:border-[#D91F2C]/40 transition-all">
              <div className="space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#D91F2C] bg-[#D91F2C]/10 px-2.5 py-1 rounded-sm">
                  CITY PRIDE VOTING
                </span>
                <h3
                  className="font-display text-2xl font-bold uppercase text-white"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  WILAYAH MANA PALING PUNYA NYALI?
                </h3>
                <p className="text-xs text-[#9A9AA2] leading-relaxed">
                  Buktikan dukunganmu untuk Bantul, Sleman, atau Kota Jogja. Vote aman terverifikasi satu akun satu suara.
                </p>
              </div>
              <Link
                href="/city-pride"
                className="font-display font-bold text-xs uppercase tracking-widest text-white bg-[#D91F2C] hover:bg-[#EF3340] px-5 py-3 rounded-sm transition-all text-center"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                VOTE KOTA KEBANGGAAN →
              </Link>
            </div>

            {/* Discovery 2: Creator Program */}
            <div className="p-6 sm:p-8 bg-[#171719] border border-white/10 rounded-sm flex flex-col justify-between space-y-6 hover:border-white/30 transition-all">
              <div className="space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C4C4CC] bg-white/5 px-2.5 py-1 rounded-sm">
                  CREATOR HUB
                </span>
                <h3
                  className="font-display text-2xl font-bold uppercase text-white"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  PUNYA KONTEN? GABUNG KREATOR
                </h3>
                <p className="text-xs text-[#9A9AA2] leading-relaxed">
                  Daftarkan kanal media, TikTok, atau Instagram kamu. Dapatkan akses ID press resmi dan badge liputan ringside.
                </p>
              </div>
              <Link
                href="/creator"
                className="font-display font-bold text-xs uppercase tracking-widest text-white bg-white/10 hover:bg-white/20 px-5 py-3 rounded-sm transition-all text-center"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                GABUNG PROGRAM KREATOR →
              </Link>
            </div>

            {/* Discovery 3: Official Merch */}
            <div className="p-6 sm:p-8 bg-[#171719] border border-white/10 rounded-sm flex flex-col justify-between space-y-6 hover:border-[#E2BA75]/40 transition-all">
              <div className="space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#E2BA75] bg-[#E2BA75]/10 px-2.5 py-1 rounded-sm">
                  OFFICIAL MERCHANDISE
                </span>
                <h3
                  className="font-display text-2xl font-bold uppercase text-white"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  KATALOG RESMI DI BALIK KALEM
                </h3>
                <p className="text-xs text-[#9A9AA2] leading-relaxed">
                  Kaos katun premium, hoodie French terry, handwrap merah, dan aksesori resmi commemorative JKB 2026.
                </p>
              </div>
              <Link
                href="/merch"
                className="font-display font-bold text-xs uppercase tracking-widest text-[#09090B] bg-[#E2BA75] hover:bg-[#F0CB8E] px-5 py-3 rounded-sm transition-all text-center"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                LIHAT KATALOG MERCH →
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          SECTION 6 — VENUE, HELP & FAQ
          Venue details, accurate map, essential FAQ & official contact info
      ═════════════════════════════════════════════════════════════════════ */}
      <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#171719] border-t border-white/10">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Venue Banner */}
          <div className="bg-[#09090B] border border-white/10 rounded-sm p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D91F2C]">
                <MapPin className="w-4 h-4" />
                <span>OFFICIAL FESTIVAL VENUE</span>
              </div>
              <h3
                className="font-display text-2xl sm:text-3xl font-black uppercase text-white"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                GOR UNY (UNIVERSITAS NEGERI YOGYAKARTA)
              </h3>
              <p className="text-xs sm:text-sm text-[#9A9AA2] max-w-xl">
                {EVENT_CONFIG.venue.address}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={EVENT_CONFIG.venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display font-bold text-xs uppercase tracking-widest px-5 py-3 bg-[#D91F2C] hover:bg-[#EF3340] text-white rounded-sm transition-all flex items-center gap-2"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                <span>Buka Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <Link
                href="/venue"
                className="font-display font-bold text-xs uppercase tracking-widest px-5 py-3 bg-white/10 hover:bg-white/20 text-white rounded-sm transition-all"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                Panduan Lengkap Venue
              </Link>
            </div>
          </div>

          {/* Essential FAQ Accordion */}
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="text-center space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D91F2C]">
                PERTANYAAN UMUM
              </span>
              <h3
                className="font-display text-2xl sm:text-3xl font-black uppercase text-white"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                FAQ Pengunjung Festival
              </h3>
            </div>

            <div className="space-y-3">
              {essentialFaqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="bg-[#09090B] border border-white/10 rounded-sm overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-[#D91F2C] transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#9A9AA2] shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[#D91F2C]" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-[#9A9AA2] leading-relaxed border-t border-white/5 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="text-center pt-2">
              <Link
                href="/faq"
                className="text-xs text-[#9A9AA2] hover:text-white uppercase tracking-wider font-semibold underline underline-offset-4"
              >
                Lihat Semua FAQ & Kontak Bantuan →
              </Link>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
