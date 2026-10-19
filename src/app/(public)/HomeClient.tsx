"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Calendar,
  Trophy,
  Music,
  Shield,
  Layers,
  Flame,
  ChevronDown,
} from "lucide-react";
import CountdownTimer from "@/components/home/CountdownTimer";

const DIVISIONS = [
  { name: "FEATHERWEIGHT", limit: "57.0 KG", desc: "Kecepatan kilat & teknik tendangan akrobatik" },
  { name: "LIGHTWEIGHT", limit: "63.5 KG", desc: "Kombinasi pukulan eksplosif & intensitas tinggi" },
  { name: "WELTERWEIGHT", limit: "67.0 KG", desc: "Divisi paling kompetitif dengan determinasi baja" },
  { name: "MIDDLEWEIGHT", limit: "71.0 KG", desc: "Kekuatan pukulan telak & perebutan takhta bergengsi" },
];

const SCHEDULE_DAYS = [
  {
    day: "HARI 01",
    date: "SABTU, 12 DESEMBER 2026",
    headline: "OPENING CEREMONY & BABAK PENYISIHAN",
    description: "Upacara pembukaan kejuaraan, penyisihan 32 atlet di 4 divisi K-1, dan konser musik sesi pertama.",
    badge: "PENYISIHAN K-1",
  },
  {
    day: "HARI 02",
    date: "MINGGU, 13 DESEMBER 2026",
    headline: "BABAK PEREMPAT & SEMIFINAL",
    description: "Pertarungan memanas menuju babak 4 besar, panggung musik sore, dan temu atlet di Culture Hub.",
    badge: "SEMIFINAL",
  },
  {
    day: "HARI 03",
    date: "SENIN, 14 DESEMBER 2026",
    headline: "4 LAGA SABUK EMAS & GRAND FINAL KONSER",
    description: "Puncak kejuaraan perebutan 4 Sabuk Emas K-1 Redy Championship 2 ditutup konser festival musik spektakuler.",
    badge: "CHAMPIONSHIP NIGHT",
  },
];

export default function HomeClient() {
  return (
    <main className="flex-1 flex flex-col w-full text-[#F4F0E8] bg-[#09090B] overflow-x-hidden selection:bg-[#D91F2C] selection:text-white">
      
      {/* ═════════════════════════════════════════════════════════════════════
          1. MONUMENTAL FIGHT FESTIVAL POSTER (HERO)
          Fokus: Logo Resmi Emblem JKBF, Estetika Poster Kejuaraan Dunia,
          Tanpa Badge Emoji AI, Simetri Pusat, dan Countdown Timer Presisi.
      ═════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[100svh] pt-24 sm:pt-28 pb-16 sm:pb-20 flex flex-col justify-center items-center text-center border-b border-white/10 bg-[#09090B] overflow-hidden">
        
        {/* Authentic Documentary Arena Photo Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/v9/04_FOTO_FIGHT_DESKTOP_TANPA_TEKST.png"
            alt="Dokumentasi Pertarungan Kickboxing JKBF"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center lg:object-[center_35%] grayscale contrast-125 saturate-50 opacity-40"
          />
          {/* Film Grain & Dramatic Arena Spotlight Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(9,9,11,0.4)_0%,#09090B_80%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-[#09090B]/90" />
        </div>

        {/* Poster Content Canvas */}
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 w-full relative z-10 py-6 sm:py-8 flex flex-col items-center">
          <div className="flex flex-col items-center max-w-4xl space-y-6 sm:space-y-8">
            
            {/* OFFICIAL EVENT EMBLEM LOGO */}
            <div className="relative w-48 sm:w-64 md:w-72 lg:w-80 h-24 sm:h-32 md:h-36 transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src="/JKBF Kickboxing Festival Emblem 1.png"
                alt="Jogja Kickboxing Festival Official Emblem"
                fill
                priority
                className="object-contain drop-shadow-[0_10px_35px_rgba(0,0,0,0.95)]"
                sizes="(max-width: 640px) 200px, (max-width: 1024px) 280px, 320px"
              />
            </div>

            {/* Official Kicker & Campaign Identity */}
            <div className="flex items-center gap-3 text-xs sm:text-sm font-technical uppercase tracking-[0.25em] text-[#8F8E8B]">
              <span className="text-[#D91F2C] font-bold">#JOGJAPUNYANYALI</span>
              <span className="text-white/30">•</span>
              <span>REDY CHAMPIONSHIP 2</span>
            </div>

            {/* Monumental Manifesto Title */}
            <div className="space-y-2">
              <p className="font-technical text-xs sm:text-sm uppercase tracking-[0.3em] text-white/70 font-semibold">
                FESTIVAL KEJUARAAN KICKBOXING & PANGGUNG MUSIK
              </p>
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] uppercase tracking-tight text-white leading-[0.92]">
                DI BALIK KALEM, <span className="text-[#D91F2C]">KITA BERTARUNG.</span>
              </h1>
            </div>

            {/* Event Coordinates & Verified Facts */}
            <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-technical text-white/90 bg-[#141416]/90 border border-white/15 px-5 sm:px-7 py-3 ring-corner-frame shadow-2xl backdrop-blur-md">
              <span className="inline-flex items-center gap-2 font-bold tracking-wider">
                <Calendar className="w-4 h-4 text-[#D91F2C]" />
                12 – 14 DESEMBER 2026
              </span>
              <span className="text-white/30 hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-2 font-bold tracking-wider">
                <MapPin className="w-4 h-4 text-[#D91F2C]" />
                GOR UNY, YOGYAKARTA
              </span>
              <span className="text-white/30 hidden md:inline">•</span>
              <span className="hidden md:inline-flex items-center gap-1.5 text-white/60 tracking-wider">
                4 DIVISI SABUK EMAS K-1
              </span>
            </div>

            {/* Live Centered Countdown Timer (Sharp Athletic Frame) */}
            <div className="pt-2 pb-1 w-full flex flex-col items-center">
              <p className="font-technical text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-white/50 mb-3 font-semibold">
                HITUNG MUNDUR MENUJU HARI PERTANDINGAN:
              </p>
              <CountdownTimer />
            </div>

            {/* Direct High-Impact Action CTAs (No generic modal popups) */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 w-full">
              <Link
                href="/tiket"
                className="font-display text-base sm:text-lg tracking-wider uppercase text-white bg-[#D91F2C] hover:bg-[#B81521] active:scale-95 px-8 sm:px-12 py-4 sm:py-4.5 transition-all inline-flex items-center gap-3 shadow-[0_4px_30px_rgba(217,31,44,0.45)] ring-1 ring-[#D91F2C]/70 group"
              >
                <span>INFO TIKET & PEMESANAN</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
              
              <Link
                href="/jadwal"
                className="font-display text-base sm:text-lg tracking-wider uppercase text-white/90 hover:text-white border border-white/25 hover:border-white px-7 sm:px-9 py-4 sm:py-4.5 transition-all inline-flex items-center gap-2.5 bg-[#141416]/80 hover:bg-white/10"
              >
                <span>JADWAL 3 HARI</span>
                <ArrowUpRight className="w-4 h-4 text-[#D91F2C]" />
              </Link>

              <Link
                href="/championship"
                className="font-display text-base sm:text-lg tracking-wider uppercase text-white/75 hover:text-white border border-white/15 hover:border-white/30 px-6 sm:px-8 py-4 sm:py-4.5 transition-all inline-flex items-center gap-2 bg-transparent"
              >
                <span>BAGAN TURNAMEN K-1</span>
                <ArrowUpRight className="w-4 h-4 text-white/60" />
              </Link>
            </div>

            {/* Division Ticker Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 w-full pt-4 max-w-3xl border-t border-white/10">
              {DIVISIONS.map((div) => (
                <div key={div.name} className="p-2 sm:p-2.5 bg-[#121214] border border-white/5 text-center">
                  <span className="font-display text-xs sm:text-sm text-white tracking-wider block">
                    {div.name}
                  </span>
                  <span className="font-technical text-[10px] text-[#D91F2C] font-bold">
                    MAKS {div.limit}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="relative z-10 w-full text-center pt-8 pb-2">
          <a
            href="#pillars"
            className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-technical uppercase tracking-[0.25em] text-white/40 hover:text-white transition-colors"
          >
            <span>EKSPLORASI TIGA PILAR FESTIVAL</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#D91F2C]" />
          </a>
        </div>
      </section>


      {/* ═════════════════════════════════════════════════════════════════════
          2. THE 3 CORE PILLARS (EDITORIAL SCENE BREAKDOWN)
          Pemisahan tegas: The Ring (Combat), The Stage (Music), The City (Culture)
      ═════════════════════════════════════════════ */}
      <section id="pillars" className="w-full bg-[#0D0D0F] text-[#F4F0E8] py-20 sm:py-28 border-b border-white/10 relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          
          {/* Section Editorial Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2.5 font-technical text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold mb-3">
                <span className="w-2 h-2 bg-[#D91F2C]" />
                <span>ARSITEKTUR FESTIVAL</span>
              </div>
              <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none">
                TIGA PILAR, SATU PERAYAAN KOTA.
              </h2>
            </div>
            <p className="font-sans text-sm sm:text-base text-white/60 max-w-xl leading-relaxed">
              Bukan sekadar pertarungan, Jogja Kickboxing Festival menyatukan sabuk emas turnamen K-1, energi panggung konser musik Yogyakarta, dan kebanggaan komunitas lokal.
            </p>
          </div>

          {/* 3 Large Asymmetric Editorial Panels */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Pillar 1: The Ring */}
            <div className="group relative bg-[#141416] border border-white/10 flex flex-col justify-between hover:border-[#D91F2C]/60 transition-all duration-300 ring-corner-frame">
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-black">
                <Image
                  src="/images/championship/belt-hero.jpg"
                  alt="4 Sabuk Emas K-1 JKBF"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-transparent to-transparent" />
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 bg-black/80 border border-[#D91F2C]/60 text-[10px] font-technical uppercase tracking-widest text-[#D91F2C] font-bold">
                  <Trophy className="w-3.5 h-3.5" /> THE RING
                </div>
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-technical text-[10px] uppercase tracking-[0.2em] text-white/40 block mb-1">
                    REDY CHAMPIONSHIP 2
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-white mb-3">
                    EMPAT SABUK EMAS K-1
                  </h3>
                  <p className="text-xs sm:text-sm text-white/65 leading-relaxed font-sans mb-6">
                    Turnamen resmi sistem gugur 32 petarung pilihan dari sasana-sasana terbaik tanah air. Memperebutkan gelar takhta K-1 di 4 divisi berat resmi.
                  </p>
                </div>
                <Link
                  href="/championship"
                  className="inline-flex items-center justify-between text-xs font-technical uppercase tracking-[0.18em] text-[#D91F2C] hover:text-white font-bold pt-4 border-t border-white/10 transition-colors group-hover:border-[#D91F2C]/40"
                >
                  <span>Lihat Regulasi & Divisi Laga</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Pillar 2: The Stage */}
            <div className="group relative bg-[#141416] border border-white/10 flex flex-col justify-between hover:border-[#D91F2C]/60 transition-all duration-300 ring-corner-frame">
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-black">
                <Image
                  src="/images/lineup/ring-stage.jpg"
                  alt="Panggung Festival Musik JKBF"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-transparent to-transparent" />
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 bg-black/80 border border-white/30 text-[10px] font-technical uppercase tracking-widest text-white font-bold">
                  <Music className="w-3.5 h-3.5 text-[#D91F2C]" /> THE STAGE
                </div>
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-technical text-[10px] uppercase tracking-[0.2em] text-white/40 block mb-1">
                    SOUND OF YOGYAKARTA
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-white mb-3">
                    PANGGUNG MUSIK 3 HARI
                  </h3>
                  <p className="text-xs sm:text-sm text-white/65 leading-relaxed font-sans mb-6">
                    Energi musik independen dan pertunjukan band lintas genre berpadu dengan ketegangan arena. Panggung festival hidup dari siang hingga laga utama usai.
                  </p>
                </div>
                <Link
                  href="/lineup"
                  className="inline-flex items-center justify-between text-xs font-technical uppercase tracking-[0.18em] text-[#D91F2C] hover:text-white font-bold pt-4 border-t border-white/10 transition-colors group-hover:border-[#D91F2C]/40"
                >
                  <span>Lineup Panggung Musik</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Pillar 3: The City */}
            <div className="group relative bg-[#141416] border border-white/10 flex flex-col justify-between hover:border-[#D91F2C]/60 transition-all duration-300 ring-corner-frame">
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-black">
                <Image
                  src="/images/venue/gor-uny-arena.jpg"
                  alt="Arena GOR UNY Yogyakarta"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-transparent to-transparent" />
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 bg-black/80 border border-white/30 text-[10px] font-technical uppercase tracking-widest text-white font-bold">
                  <MapPin className="w-3.5 h-3.5 text-[#D91F2C]" /> THE VENUE
                </div>
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-technical text-[10px] uppercase tracking-[0.2em] text-white/40 block mb-1">
                    GOR UNY COLOMBO
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-white mb-3">
                    ATMOSFER 10.000 PENONTON
                  </h3>
                  <p className="text-xs sm:text-sm text-white/65 leading-relaxed font-sans mb-6">
                    Arena melingkar legendaris di jantung Yogyakarta. Menampung antusiasme penonton dengan zona Tribun berjarak pandang luas hingga kursi Ringside VIP tepi kanvas.
                  </p>
                </div>
                <Link
                  href="/venue"
                  className="inline-flex items-center justify-between text-xs font-technical uppercase tracking-[0.18em] text-[#D91F2C] hover:text-white font-bold pt-4 border-t border-white/10 transition-colors group-hover:border-[#D91F2C]/40"
                >
                  <span>Panduan Lokasi & Denah GOR</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ═════════════════════════════════════════════════════════════════════
          3. CHRONOLOGICAL 3-DAY TIMELINE (NO FAKE HOURS, HONEST FACTS)
      ═════════════════════════════════════════════ */}
      <section className="w-full bg-[#09090B] text-[#F4F0E8] py-20 sm:py-28 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-white/10">
            <div>
              <span className="font-technical text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold block mb-2">
                RANGKAIAN ACARA
              </span>
              <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-white leading-none">
                TIGA HARI INTENSITAS TINGGI
              </h2>
            </div>
            <Link
              href="/jadwal"
              className="font-display text-sm tracking-wider uppercase text-white hover:text-[#D91F2C] inline-flex items-center gap-2 transition-colors border-b border-[#D91F2C] pb-1 self-start md:self-auto"
            >
              <span>BUKA JADWAL LENGKAP & RUNDOWN</span>
              <ArrowUpRight className="w-4 h-4 text-[#D91F2C]" />
            </Link>
          </div>

          {/* Timeline Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SCHEDULE_DAYS.map((item, idx) => (
              <div
                key={item.day}
                className="p-6 sm:p-8 bg-[#121214] border border-white/10 flex flex-col justify-between hover:border-white/30 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                    <span className="font-technical text-xs font-bold text-[#D91F2C] tracking-widest">
                      {item.day}
                    </span>
                    <span className="font-technical text-[10px] uppercase tracking-wider text-white/50 bg-white/5 px-2.5 py-1">
                      {item.badge}
                    </span>
                  </div>
                  <p className="font-technical text-xs text-white/60 mb-2">
                    {item.date}
                  </p>
                  <h3 className="font-display text-2xl uppercase tracking-wider text-white mb-3">
                    {item.headline}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/65 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-technical text-white/50">
                  <span>GOR UNY Colombo</span>
                  <Link href="/jadwal" className="text-[#D91F2C] hover:text-white font-bold inline-flex items-center gap-1">
                    <span>Rincian</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ═════════════════════════════════════════════════════════════════════
          4. OFFICIAL TICKETING & SAFETY ASSURANCE CALLOUT
      ═════════════════════════════════════════════ */}
      <section className="w-full bg-[#111114] text-[#F4F0E8] py-16 sm:py-20 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="p-8 sm:p-12 lg:p-16 bg-[#161619] border border-white/15 flex flex-col lg:flex-row items-center justify-between gap-8 ring-corner-frame shadow-2xl">
            
            <div className="space-y-4 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 font-technical text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold">
                <Shield className="w-4 h-4 text-[#D91F2C]" />
                <span>OFFICIAL TICKETING GATEWAY</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-white leading-tight">
                AMANKAN KURSI ANDA DI GOR UNY
              </h2>
              <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed">
                Tersedia kategori Tribun Reguler bernomor, 3-Day Festival Pass, dan kursi eksklusif Ringside VIP tepi kanvas ring kejuaraan. Pemesanan resmi bebas calo.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 font-technical text-xs text-white/50">
                <span>✓ E-Ticket Terverifikasi</span>
                <span>•</span>
                <span>✓ Akses Penuh Festival Musik</span>
                <span>•</span>
                <span>✓ Kuota Ringside Terbatas</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0 w-full sm:w-auto">
              <Link
                href="/tiket"
                className="w-full sm:w-auto text-center font-display text-base sm:text-lg tracking-wider uppercase text-white bg-[#D91F2C] hover:bg-[#B81521] active:scale-95 px-8 sm:px-10 py-4 transition-all inline-flex items-center justify-center gap-2.5 shadow-lg ring-1 ring-[#D91F2C]/60"
              >
                <span>LIHAT KATEGORI TIKET</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/venue"
                className="w-full sm:w-auto text-center font-display text-base tracking-wider uppercase text-white/80 hover:text-white border border-white/20 hover:border-white px-7 py-4 transition-all inline-flex items-center justify-center gap-2 bg-[#121214]"
              >
                <span>PANDUAN DENAH VENUE</span>
                <ArrowUpRight className="w-4 h-4 text-[#D91F2C]" />
              </Link>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
