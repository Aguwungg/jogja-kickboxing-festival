"use client";

import { useState } from "react";
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
  Clock,
  CheckCircle2,
  ChevronRight,
  Compass,
} from "lucide-react";
import CountdownTimer from "@/components/home/CountdownTimer";
import { EVENT_CONFIG } from "@/lib/event-config";

// Single Source of Truth from EVENT_CONFIG
const DIVISIONS = EVENT_CONFIG.divisions;

const SCHEDULE_PREVIEWS = [
  {
    day: 1,
    label: "HARI 01 • SABTU, 12 DESEMBER 2026",
    badge: "PENYISIHAN K-1 & OPENING",
    theme: "Official Weigh-In, Opening Ceremony & Penyisihan 32 Petarung",
    items: [
      { time: "09:00 - 11:30 WIB", arena: "GOR UNY Hall Utama", cat: "RING", title: "Registrasi Kontingen & Official Weigh-In 4 Divisi" },
      { time: "13:00 - 13:45 WIB", arena: "Panggung Utama", cat: "CEREMONY", title: "Upacara Pembukaan & Anthem #JOGJAPUNYANYALI" },
      { time: "14:00 - 18:30 WIB", arena: "Ring Kejuaraan (K-1)", cat: "RING", title: "Babak Penyisihan 32 Besar (Partai 01 - 08)" },
      { time: "19:30 - 22:30 WIB", arena: "Live Stage Fest", cat: "MUSIK", title: "Panggung Musik Fase 1: Underground Beats & Rock Showcase" },
    ],
  },
  {
    day: 2,
    label: "HARI 02 • MINGGU, 13 DESEMBER 2026",
    badge: "PEREMPAT & SEMIFINAL",
    theme: "Pertarungan Menuju 4 Besar, Community Showcase & Music Stage",
    items: [
      { time: "10:00 - 13:00 WIB", arena: "Culture Hub Area", cat: "COMMUNITY", title: "Meet & Greet Atlet, Workshop Teknik & City Pride Gathering" },
      { time: "14:00 - 18:00 WIB", arena: "Ring Kejuaraan (K-1)", cat: "RING", title: "Babak Perempat Final 8-Man Tournament (Partai 09 - 16)" },
      { time: "19:00 - 21:00 WIB", arena: "Ring Kejuaraan (K-1)", cat: "RING", title: "Babak Semifinal 4 Divisi Perebutan Tiket Emas" },
      { time: "21:00 - 23:00 WIB", arena: "Live Stage Fest", cat: "MUSIK", title: "Panggung Musik Fase 2: Indie Pop & Youth Sound Experience" },
    ],
  },
  {
    day: 3,
    label: "HARI 03 • SENIN, 14 DESEMBER 2026",
    badge: "CHAMPIONSHIP NIGHT",
    theme: "Grand Final 4 Sabuk Emas K-1 & Pesta Konser Musik Spektakuler",
    items: [
      { time: "15:00 - 17:30 WIB", arena: "Ring Kejuaraan (K-1)", cat: "RING", title: "Partai Ekshibisi Spesial & Perebutan Medali Perunggu" },
      { time: "18:30 - 21:00 WIB", arena: "Ring Utama (K-1)", cat: "RING", title: "CHAMPIONSHIP FIGHTS: 4 Laga Penentuan Sabuk Emas Resmi" },
      { time: "21:00 - 21:30 WIB", arena: "Ring Utama (K-1)", cat: "CEREMONY", title: "Seremonial Pengalungan 4 Sabuk Juara Redy Championship 2" },
      { time: "21:30 - 23:30 WIB", arena: "Live Stage Fest", cat: "MUSIK", title: "Grand Closing Music Concert & Selebrasi Kemenangan" },
    ],
  },
];

const TICKET_PREVIEWS = [
  {
    tier: "TRIBUN REGULER",
    tag: "DAILY PASS",
    scope: "Akses 1 Hari Bebas Pilih (12, 13, atau 14 Des)",
    price: "Rp 75.000",
    desc: "Pandangan penuh melingkar ke kanvas ring K-1 dan akses panggung festival musik pada hari yang dipilih.",
    features: [
      "Akses Tribun Melingkar GOR UNY",
      "Akses Panggung Musik Live",
      "Akses Food & Official Merch Area",
    ],
    ctaHref: "/tiket",
    accent: false,
  },
  {
    tier: "RINGSIDE FLOOR VIP",
    tag: "KUOTA TERBATAS",
    scope: "Akses Eksklusif Lantai Utama Sisi Kanvas Ring",
    price: "Rp 250.000",
    desc: "Rasakan benturan pukulan telak dan tendangan atlet dari jarak terdekat dengan kenyamanan kursi VIP tepi ring.",
    features: [
      "Kursi Eksklusif Baris Depan Kanvas Ring",
      "Fast-Track Pintu Masuk Khusus VIP",
      "Akses Backstage Lounge & Panggung Musik",
      "Official Event Lanyard & Merchandise Pack",
    ],
    ctaHref: "/tiket",
    accent: true,
  },
  {
    tier: "3-DAY FESTIVAL PASS",
    tag: "ALL-ACCESS TERUSAN",
    scope: "Tiket Terusan Penuh 3 Hari (12–14 Des 2026)",
    price: "Rp 180.000",
    desc: "Pengalaman utuh dari timbang badan, babak penyisihan, semifinal, hingga 4 laga Sabuk Emas & konser penutup.",
    features: [
      "Akses 3 Hari Penuh Tanpa Batas",
      "Wristband Kolektor Eksklusif",
      "Akses Penuh Seluruh Pertandingan & Konser",
      "Prioritas Pembelian Official Merchandise",
    ],
    ctaHref: "/tiket",
    accent: false,
  },
];

export default function HomeClient() {
  const [activeScheduleDay, setActiveScheduleDay] = useState(1);
  const [scheduleCategory, setScheduleCategory] = useState<"ALL" | "RING" | "MUSIK">("ALL");

  const currentSchedule = SCHEDULE_PREVIEWS.find((s) => s.day === activeScheduleDay) || SCHEDULE_PREVIEWS[0];

  const filteredScheduleItems = currentSchedule.items.filter((item) => {
    if (scheduleCategory === "ALL") return true;
    if (scheduleCategory === "RING") return item.cat === "RING" || item.cat === "CEREMONY";
    if (scheduleCategory === "MUSIK") return item.cat === "MUSIK";
    return true;
  });

  return (
    <main className="flex-1 flex flex-col w-full text-[#F4F0E8] bg-[#0B0B0B] overflow-x-hidden selection:bg-[#D91F2C] selection:text-white">
      
      {/* ═════════════════════════════════════════════════════════════════════
          MODUL 1: MONUMENTAL EVENT HERO (BYON + GLORY BENCHMARK)
          Fokus: Foto Laga Dokumenter Otentik, Emblem Resmi JKBF, Tipografi
          Monumental, dan Dual CTA (Solid Red "TIKET" + Ghost Ivory "JADWAL").
      ═════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[92svh] lg:min-h-[96svh] pt-24 sm:pt-28 pb-14 sm:pb-16 flex flex-col justify-center items-center text-center border-b border-white/10 bg-[#0B0B0B] overflow-hidden">
        
        {/* Authentic Documentary Action Photo Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/v9/04_FOTO_FIGHT_DESKTOP_TANPA_TEKST.png"
            alt="Dokumentasi Resmi Kejuaraan Kickboxing JKBF"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center lg:object-[center_30%] grayscale contrast-125 saturate-50 opacity-40"
          />
          {/* Film Grain & Dramatic Arena Radial Spotlight Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(11,11,11,0.35)_0%,#0B0B0B_82%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-[#0B0B0B]/85" />
        </div>

        {/* Foreground Content Canvas */}
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 w-full relative z-10 py-4 sm:py-6 flex flex-col items-center">
          <div className="flex flex-col items-center max-w-4xl space-y-5 sm:space-y-6">
            
            {/* OFFICIAL EVENT EMBLEM LOGO */}
            <div className="relative w-44 sm:w-56 md:w-64 lg:w-72 h-20 sm:h-28 md:h-32 transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src="/JKBF Kickboxing Festival Emblem 1.png"
                alt="Jogja Kickboxing Festival Official Emblem"
                fill
                priority
                className="object-contain drop-shadow-[0_12px_35px_rgba(0,0,0,0.95)]"
                sizes="(max-width: 640px) 180px, (max-width: 1024px) 260px, 300px"
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
                FESTIVAL KEJUARAAN KICKBOXING K-1 & PANGGUNG MUSIK YOGYAKARTA
              </p>
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] uppercase tracking-tight text-white leading-[0.92]">
                DI BALIK KALEM, <span className="text-[#D91F2C]">KITA BERTARUNG.</span>
              </h1>
            </div>

            {/* Event Coordinates & Verified Facts */}
            <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-technical text-white/90 bg-[#141416]/90 border border-white/15 px-5 sm:px-7 py-3 rounded shadow-2xl backdrop-blur-md">
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
                4 DIVISI SABUK EMAS RESMI
              </span>
            </div>

            {/* Configurable Live Countdown Timer (SSOT from EVENT_CONFIG) */}
            <div className="pt-2 pb-1 w-full flex flex-col items-center">
              <p className="font-technical text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-white/50 mb-2.5 font-semibold">
                HITUNG MUNDUR MENUJU HARI PERTANDINGAN (09:00 WIB):
              </p>
              <CountdownTimer />
            </div>

            {/* Paired Primary Conversion CTAs (BYON / UFC Benchmark) */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5 w-full">
              <Link
                href="/tiket"
                className="font-display text-sm sm:text-base tracking-wider uppercase text-white bg-[#D91F2C] hover:bg-[#B81521] active:scale-95 px-8 sm:px-10 py-3.5 sm:py-4 rounded-sm transition-all inline-flex items-center gap-2.5 shadow-[0_4px_30px_rgba(217,31,44,0.45)] ring-1 ring-[#D91F2C]/70 group"
              >
                <span>TIKET MASUK RESMI</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
              
              <Link
                href="/jadwal"
                className="font-display text-sm sm:text-base tracking-wider uppercase text-white/90 hover:text-white border border-white/25 hover:border-white px-7 sm:px-9 py-3.5 sm:py-4 rounded-sm transition-all inline-flex items-center gap-2 bg-[#141416]/80 hover:bg-white/10"
              >
                <span>JADWAL 3 HARI</span>
                <ArrowUpRight className="w-4 h-4 text-[#D91F2C]" />
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* ═════════════════════════════════════════════════════════════════════
          MODUL 2: MOVING TICKER RIBBON (GLORY KICKBOXING BENCHMARK)
          Pita teks berjalan tepat di bawah hero sebagai pembatas siaran laga.
      ═════════════════════════════════════════════ */}
      <section className="w-full bg-[#121214] border-y border-white/10 py-3 overflow-hidden select-none">
        <div className="flex whitespace-nowrap animate-marquee">
          {[0, 1].map((copyIdx) => (
            <div key={copyIdx} className="flex items-center gap-8 shrink-0 font-technical text-xs uppercase tracking-[0.25em] text-[#C4C4CC]">
              <span className="text-[#D91F2C] font-bold">● GOR UNY, YOGYAKARTA</span>
              <span>12–14 DESEMBER 2026</span>
              <span className="text-[#D91F2C] font-bold">● REDY CHAMPIONSHIP 2</span>
              <span>4 DIVISI SABUK EMAS RESMI K-1</span>
              <span className="text-[#D91F2C] font-bold">● #JOGJAPUNYANYALI</span>
              <span>32 PETARUNG ELIMINASI 8-MAN</span>
              <span className="text-[#D91F2C] font-bold">● PANGGUNG MUSIK FESTIVAL</span>
              <span>DI BALIK KALEM, KITA BERTARUNG</span>
              <span className="text-white/30 mr-8">///</span>
            </div>
          ))}
        </div>
      </section>


      {/* ═════════════════════════════════════════════════════════════════════
          MODUL 3: PEREBUTAN 4 SABUK EMAS K-1 (GLORY + UFC BENCHMARK)
          Arsitektur Grid Hairline Bersih (Tanpa Card Box SaaS).
      ═════════════════════════════════════════════ */}
      <section className="w-full bg-[#0B0B0B] py-16 sm:py-20 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 font-technical text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold mb-2">
                <Trophy className="w-3.5 h-3.5" />
                <span>KEJUARAAN K-1 RESMI</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-white leading-none">
                EMPAT SABUK EMAS BERGENGSI.
              </h2>
            </div>
            <p className="font-sans text-xs sm:text-sm text-white/50 max-w-md lg:text-right">
              Turnamen eliminasi murni 8-man sistem gugur K-1. 32 petarung terbaik sasana tanah air memperebutkan takhta tertinggi.
            </p>
          </div>

          {/* 4 Division Hairline Grid Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {DIVISIONS.map((div) => (
              <div
                key={div.no}
                className="p-6 sm:p-7 bg-[#0E0E10] flex flex-col justify-between hover:bg-[#141416] transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between font-technical text-xs text-white/40 mb-3">
                    <span>DIVISI {div.no}</span>
                    <span className="text-[#D91F2C] font-bold">{div.quota}</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-white group-hover:text-[#D91F2C] transition-colors mb-1">
                    {div.name}
                  </h3>
                  <div className="inline-block px-2.5 py-1 bg-[#18181B] border border-white/10 text-xs font-technical text-[#D91F2C] font-bold mb-4">
                    BATAS {div.limit}
                  </div>
                  <p className="font-sans text-xs text-white/60 leading-relaxed">
                    {div.style}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-technical uppercase tracking-wider text-white/50 group-hover:text-white transition-colors">
                  <span>Lihat Regulasi</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D91F2C] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          {/* Direct CTA to Championship & Bracket */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-4 text-xs font-technical uppercase tracking-wider text-white/60">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#D91F2C]" />
              Regulasi Wajib: 3 Ronde × 3 Menit • Standing 8-Count • 10-Point Must System
            </span>
            <div className="flex items-center gap-6">
              <Link href="/championship" className="text-[#D91F2C] hover:text-white font-bold inline-flex items-center gap-1.5">
                <span>Panduan Lengkap Kejuaraan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/bracket" className="text-white/80 hover:text-[#D91F2C] inline-flex items-center gap-1.5">
                <span>Bagan Turnamen 8-Man</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>


      {/* ═════════════════════════════════════════════════════════════════════
          MODUL 4: TIGA PILAR FESTIVAL (EDITORIAL ASYMMETRICAL SPLIT)
          The Ring (Combat), The Stage (Music), The City (Jogja Culture).
      ═════════════════════════════════════════════ */}
      <section className="w-full bg-[#0D0D0F] text-[#F4F0E8] py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-12 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 font-technical text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold mb-2">
                <Layers className="w-3.5 h-3.5" />
                <span>PENGALAMAN FESTIVAL</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-white leading-none">
                TIGA ELEMEN UTAMA JKBF.
              </h2>
            </div>
            <p className="font-sans text-xs sm:text-sm text-white/50 max-w-md lg:text-right">
              Peleburan kompetisi bela diri profesional, energi panggung konser festival, dan etika kesatria Yogyakarta.
            </p>
          </div>

          {/* 3 Asymmetric Editorial Panels */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Pillar 1: The Ring */}
            <div className="bg-[#121214] border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-[#D91F2C]/50 transition-colors">
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black mb-6">
                  <Image
                    src="/images/championship/belt-hero.jpg"
                    alt="Sabuk Emas Kejuaraan K-1"
                    fill
                    className="object-cover opacity-85 hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/80 border border-[#D91F2C]/60 text-[10px] font-technical uppercase tracking-widest text-[#D91F2C] font-bold">
                    01 • THE RING
                  </div>
                </div>
                <h3 className="font-display text-2xl uppercase tracking-wider text-white mb-2">
                  REDY CHAMPIONSHIP 2
                </h3>
                <p className="text-xs text-white/60 leading-relaxed font-sans mb-4">
                  Turnamen eliminasi murni 32 atlet kickboxing pilihan dari sasana terbaik tanah air. 4 divisi memperebutkan sabuk emas resmi.
                </p>
              </div>
              <Link
                href="/championship"
                className="pt-4 border-t border-white/10 text-xs font-technical uppercase tracking-wider text-[#D91F2C] hover:text-white font-bold flex items-center justify-between"
              >
                <span>Eksplorasi Divisi & Regulasi</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Pillar 2: The Stage */}
            <div className="bg-[#121214] border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-[#D91F2C]/50 transition-colors">
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black mb-6">
                  <Image
                    src="/images/jkb/hero-concert.jpg"
                    alt="Panggung Festival Musik JKBF"
                    fill
                    className="object-cover opacity-85 hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/80 border border-white/30 text-[10px] font-technical uppercase tracking-widest text-white font-bold">
                    02 • THE STAGE
                  </div>
                </div>
                <h3 className="font-display text-2xl uppercase tracking-wider text-white mb-2">
                  FESTIVAL MUSIK SPEKTAKULER
                </h3>
                <p className="text-xs text-white/60 leading-relaxed font-sans mb-4">
                  Panggung live festival menyatukan denyut musik modern, rock bertenaga, dan hip-hop urban di jantung kota pelajar.
                </p>
              </div>
              <Link
                href="/lineup"
                className="pt-4 border-t border-white/10 text-xs font-technical uppercase tracking-wider text-[#D91F2C] hover:text-white font-bold flex items-center justify-between"
              >
                <span>Lihat Kurasi Lineup Penampil</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Pillar 3: The City */}
            <div className="bg-[#121214] border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-[#D91F2C]/50 transition-colors">
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black mb-6">
                  <Image
                    src="/images/jkb/hero-boxing.jpg"
                    alt="Kultur Petarung Kesatria Jogja"
                    fill
                    className="object-cover opacity-85 hover:scale-105 transition-transform duration-500 grayscale"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/80 border border-white/30 text-[10px] font-technical uppercase tracking-widest text-white font-bold">
                    03 • THE CITY
                  </div>
                </div>
                <h3 className="font-display text-2xl uppercase tracking-wider text-white mb-2">
                  DI BALIK KALEM, ADA NYALI
                </h3>
                <p className="text-xs text-white/60 leading-relaxed font-sans mb-4">
                  Karakter otentik Yogyakarta: santun dan bersahaja dalam keseharian, namun memiliki determinasi membara saat kanvas ring memanggil.
                </p>
              </div>
              <Link
                href="/city-pride"
                className="pt-4 border-t border-white/10 text-xs font-technical uppercase tracking-wider text-[#D91F2C] hover:text-white font-bold flex items-center justify-between"
              >
                <span>Pelajari Gerakan Kultur Jogja</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </section>


      {/* ═════════════════════════════════════════════════════════════════════
          MODUL 5: PANGGUNG MUSIK & SOUND EXPERIENCE (SÓNAR BENCHMARK)
          Kurasi penampil panggung festival musik tanpa ornamen berlebih.
      ═════════════════════════════════════════════ */}
      <section className="w-full bg-[#0B0B0B] py-16 sm:py-20 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 font-technical text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold">
                <Music className="w-3.5 h-3.5" />
                <span>STAGE & SOUND FESTIVAL</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-white leading-[0.95]">
                ENERGI SUARA <br />
                <span className="text-[#D91F2C]">ANAK MUDA JOGJA.</span>
              </h2>
              <p className="font-sans text-xs sm:text-sm text-white/60 leading-relaxed">
                JKBF bukan sekadar panggung pertarungan. Ini adalah selebrasi festival di mana musik berpadu dengan ketegangan laga. Lineup penampil lintas genre dikurasi untuk memberikan denyut ritme tak terlupakan selama tiga malam.
              </p>
              <div className="pt-2 flex items-center gap-4">
                <Link
                  href="/lineup"
                  className="font-display text-xs sm:text-sm uppercase tracking-wider bg-[#141416] hover:bg-white/10 border border-white/20 text-white px-6 py-3 rounded-sm transition-colors inline-flex items-center gap-2"
                >
                  <span>Lihat Seluruh Lineup Musik</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D91F2C]" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="relative aspect-[4/5] bg-[#141416] border border-white/10 overflow-hidden group">
                  <Image
                    src="/images/jkb/hero-concert.jpg"
                    alt="Konser Musik Panggung Utama"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                    sizes="(max-width: 1024px) 50vw, 30vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="font-technical text-[10px] text-[#D91F2C] uppercase tracking-wider block">STAGE UTAMA</span>
                    <span className="font-display text-lg text-white uppercase">ROCK & ALTERNATIVE</span>
                  </div>
                </div>

                <div className="relative aspect-[4/5] bg-[#141416] border border-white/10 overflow-hidden group">
                  <Image
                    src="/images/jkb/concert-crowd.jpg"
                    alt="Antusiasme Penonton Konser Musik"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                    sizes="(max-width: 1024px) 50vw, 30vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="font-technical text-[10px] text-[#D91F2C] uppercase tracking-wider block">YOUTH BEATS</span>
                    <span className="font-display text-lg text-white uppercase">HIP-HOP & ELECTRONIC</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ═════════════════════════════════════════════════════════════════════
          MODUL 6: TIMETABLE 3 HARI INTERAKTIF (SÓNAR PROGRAMME BENCHMARK)
          Tab Hari Interaktif + Filter Kategori Ring vs Panggung.
      ═════════════════════════════════════════════ */}
      <section className="w-full bg-[#0E0E10] py-16 sm:py-24 border-b border-white/10 font-sans">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 font-technical text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold mb-2">
                <Calendar className="w-3.5 h-3.5" />
                <span>AGENDA FESTIVAL</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-white leading-none">
                JADWAL 3 HARI TERSTRUKTUR.
              </h2>
            </div>
            <p className="font-sans text-xs sm:text-sm text-white/50 max-w-md lg:text-right">
              Pilih hari untuk meninjau jam pertandingan di Ring K-1 dan jam penampilan musik festival di panggung utama.
            </p>
          </div>

          {/* Interactive Day Tabs (Sónar Style) */}
          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            {SCHEDULE_PREVIEWS.map((sch) => {
              const active = sch.day === activeScheduleDay;
              return (
                <button
                  key={sch.day}
                  onClick={() => setActiveScheduleDay(sch.day)}
                  className={`font-display text-xs sm:text-sm tracking-wider uppercase px-5 sm:px-6 py-2.5 sm:py-3 transition-all cursor-pointer rounded-sm ${
                    active
                      ? "bg-[#D91F2C] text-white shadow-lg shadow-[#D91F2C]/20 ring-1 ring-[#D91F2C]"
                      : "bg-[#141416] text-white/70 hover:text-white hover:bg-white/10 border border-white/10"
                  }`}
                >
                  <span>{sch.label}</span>
                </button>
              );
            })}
          </div>

          {/* Category Filter Buttons */}
          <div className="flex items-center gap-2 mb-8 pb-4 border-b border-white/10 text-xs font-technical uppercase">
            <span className="text-white/40 mr-2">FILTER:</span>
            <button
              onClick={() => setScheduleCategory("ALL")}
              className={`px-3 py-1 cursor-pointer transition-colors ${
                scheduleCategory === "ALL" ? "text-white font-bold bg-white/10" : "text-white/60 hover:text-white"
              }`}
            >
              SEMUA AGENDA
            </button>
            <button
              onClick={() => setScheduleCategory("RING")}
              className={`px-3 py-1 cursor-pointer transition-colors ${
                scheduleCategory === "RING" ? "text-[#D91F2C] font-bold bg-[#D91F2C]/10" : "text-white/60 hover:text-white"
              }`}
            >
              RING KICKBOXING
            </button>
            <button
              onClick={() => setScheduleCategory("MUSIK")}
              className={`px-3 py-1 cursor-pointer transition-colors ${
                scheduleCategory === "MUSIK" ? "text-[#D91F2C] font-bold bg-[#D91F2C]/10" : "text-white/60 hover:text-white"
              }`}
            >
              PANGGUNG MUSIK
            </button>
          </div>

          {/* Schedule Item Rows (Clean Hairline Table) */}
          <div className="space-y-3">
            {filteredScheduleItems.map((item, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 bg-[#121214] border border-white/10 hover:border-white/25 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                  <div className="font-technical text-xs font-bold text-[#D91F2C] min-w-[130px] flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{item.time}</span>
                  </div>
                  <div>
                    <span className="font-technical text-[10px] uppercase tracking-wider text-white/40 block">
                      {item.arena}
                    </span>
                    <h4 className="font-display text-lg sm:text-xl text-white uppercase tracking-wide">
                      {item.title}
                    </h4>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-3">
                  <span className="px-2.5 py-1 bg-white/5 border border-white/10 text-[10px] font-technical uppercase tracking-wider text-white/70">
                    {item.cat}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Full Schedule Link */}
          <div className="mt-8 pt-4 flex items-center justify-between text-xs font-technical uppercase text-white/50">
            <span>Menampilkan ringkasan agenda terpilih untuk Hari {activeScheduleDay}</span>
            <Link href="/jadwal" className="text-[#D91F2C] hover:text-white font-bold inline-flex items-center gap-1.5">
              <span>Buka Jadwal Lengkap 3 Hari</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>


      {/* ═════════════════════════════════════════════════════════════════════
          MODUL 7: OFFICIAL TICKETING PACKAGES (UFC + BYON BENCHMARK)
          3 Kategori Terverifikasi, Transparan, Single Primary CTA.
      ═════════════════════════════════════════════ */}
      <section className="w-full bg-[#0B0B0B] py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-12 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 font-technical text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold mb-2">
                <Shield className="w-3.5 h-3.5" />
                <span>AKSES MASUK RESMI</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-white leading-none">
                PILIH TIKET FESTIVAL ANDA.
              </h2>
            </div>
            <p className="font-sans text-xs sm:text-sm text-white/50 max-w-md lg:text-right">
              Pembelian tiket resmi dilindungi enkripsi verifikasi. Pilih tribun melingkar, kursi VIP tepi ring kanvas, atau tiket terusan 3 hari.
            </p>
          </div>

          {/* 3 Ticket Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TICKET_PREVIEWS.map((t, idx) => (
              <div
                key={idx}
                className={`p-6 sm:p-8 flex flex-col justify-between transition-all rounded-sm relative ${
                  t.accent
                    ? "bg-[#141416] border-2 border-[#D91F2C] shadow-[0_0_40px_rgba(217,31,44,0.18)]"
                    : "bg-[#121214] border border-white/10 hover:border-white/20"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-technical text-[10px] uppercase tracking-widest text-[#D91F2C] font-bold px-2 py-0.5 bg-[#D91F2C]/10 border border-[#D91F2C]/30">
                      {t.tag}
                    </span>
                    <span className="font-technical text-xs text-white/40">JKBF 2026</span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-white mb-2">
                    {t.tier}
                  </h3>
                  
                  <div className="text-2xl sm:text-3xl font-display text-white tracking-tight font-black mb-3 text-[#D91F2C]">
                    {t.price}
                  </div>

                  <p className="font-sans text-xs text-white/60 leading-relaxed mb-6 pb-6 border-b border-white/10">
                    {t.desc}
                  </p>

                  <div className="space-y-2.5 mb-8">
                    <span className="font-technical text-[10px] uppercase tracking-wider text-white/40 block mb-2">
                      FASILITAS & BENEFIT:
                    </span>
                    {t.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-white/80 font-sans">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D91F2C] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={t.ctaHref}
                  className={`w-full py-3.5 font-display text-sm uppercase tracking-wider text-center transition-all flex items-center justify-center gap-2 rounded-sm ${
                    t.accent
                      ? "bg-[#D91F2C] text-white hover:bg-[#B81521] shadow-lg shadow-[#D91F2C]/30"
                      : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                  }`}
                >
                  <span>PILIH TIKET RESMI</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          {/* Ticketing Guarantee Bar */}
          <div className="mt-8 p-4 bg-[#121214] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-technical text-white/60">
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#D91F2C]" />
              E-Voucher resmi langsung terbit dengan barcode QRIS terenkripsi untuk penukaran wristband di GOR UNY.
            </span>
            <Link href="/faq" className="text-white hover:text-[#D91F2C] underline shrink-0">
              Pertanyaan Seputar Tiket (FAQ)
            </Link>
          </div>

        </div>
      </section>


      {/* ═════════════════════════════════════════════════════════════════════
          MODUL 8: VENUE & PRACTICAL VISITOR GUIDE (SÓNAR PRACTICAL BENCHMARK)
          Panduan Akses GOR UNY Colombo, Transportasi & Pengambilan Merch.
      ═════════════════════════════════════════════ */}
      <section className="w-full bg-[#0E0E10] py-16 sm:py-20 border-b border-white/10 font-sans">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 font-technical text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold">
                <Compass className="w-3.5 h-3.5" />
                <span>PANDUAN LOKASI & VENUE</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-white leading-none">
                GOR UNY, YOGYAKARTA.
              </h2>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-sans">
                Gelanggang Olahraga Universitas Negeri Yogyakarta (GOR UNY) di Jalan Colombo No. 1, Caturtunggal, Sleman merupakan arena olahraga berkapasitas 5.000+ penonton dengan tribun melingkar dan akses strategis di pusat Yogyakarta.
              </p>

              <div className="space-y-3 border-t border-white/10 pt-4 text-xs">
                <div className="flex items-start gap-3">
                  <span className="font-technical text-[#D91F2C] font-bold uppercase min-w-[110px]">TRANS JOGJA:</span>
                  <span className="text-white/80">Koridor 1B, 2A, dan 11 (Turun langsung di Halte UNY Colombo).</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-technical text-[#D91F2C] font-bold uppercase min-w-[110px]">KRL COMMUTER:</span>
                  <span className="text-white/80">Stasiun Lempuyangan (±10 menit via ojek online/taksi) atau Stasiun Tugu (±15 menit).</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-technical text-[#D91F2C] font-bold uppercase min-w-[110px]">BOOTH MERCH:</span>
                  <span className="text-white/80">Hall Barat Lantai 1 GOR UNY (Buka pukul 09:00 - 22:00 WIB selama festival).</span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  href="/venue"
                  className="font-display text-xs sm:text-sm uppercase tracking-wider bg-[#D91F2C] hover:bg-[#B81521] text-white px-6 py-3 rounded-sm transition-colors inline-flex items-center gap-2"
                >
                  <span>Panduan Lengkap Masuk Venue</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href="https://maps.google.com/?q=GOR+UNY+Yogyakarta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-xs sm:text-sm uppercase tracking-wider border border-white/20 hover:border-white text-white/80 hover:text-white px-6 py-3 rounded-sm transition-colors inline-flex items-center gap-2"
                >
                  <span>Buka Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#D91F2C]" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] bg-[#141416] border border-white/10 overflow-hidden rounded-sm group">
                <Image
                  src="/images/venue/gor-uny-arena.jpg"
                  alt="Arena Gelanggang Olahraga GOR UNY Yogyakarta"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-technical uppercase">
                  <span className="text-white font-bold">GOR UNY ARENA • YOGYAKARTA</span>
                  <span className="text-[#D91F2C] font-bold">5.000+ PENONTON</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ═════════════════════════════════════════════════════════════════════
          MODUL 9: MANIFESTO, MITRA SPONSOR & INSTITUTIONAL SIGNATURE
          Penutup Kampanye #JOGJAPUNYANYALI & Ekosistem Pendukung.
      ═════════════════════════════════════════════ */}
      <section className="w-full bg-[#08080A] py-16 sm:py-24 border-b border-white/10 text-center font-sans">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-8">
          
          <div className="inline-flex items-center gap-2 font-technical text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold mb-4">
            <Flame className="w-3.5 h-3.5" />
            <span>KAMPANYE RESMI</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white mb-6 leading-[0.92]">
            DI BALIK KALEM, <span className="text-[#D91F2C]">ADA NYALI.</span>
          </h2>

          <p className="font-sans text-xs sm:text-base text-white/60 max-w-2xl mx-auto leading-relaxed mb-10">
            Jogja Kickboxing Festival adalah wadah kesatria modern tanah air. Kami membuktikan bahwa sportivitas tanpa kompromi, dedikasi fisik, dan rasa hormat terhadap lawan adalah jati diri tertinggi pejuang sejati.
          </p>

          {/* Official Emblem Badge */}
          <div className="flex items-center justify-center gap-6 mb-12">
            <div className="relative w-28 sm:w-36 h-14 sm:h-18 opacity-80 hover:opacity-100 transition-opacity">
              <Image
                src="/JKBF Kickboxing Festival Emblem 1.png"
                alt="Emblem Resmi JKBF 2026"
                fill
                className="object-contain"
                sizes="150px"
              />
            </div>
          </div>

          {/* Quick Institutional Anchor Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-technical uppercase tracking-wider text-white/40 pt-6 border-t border-white/10">
            <Link href="/tentang" className="hover:text-white transition-colors">Manifesto Festival</Link>
            <span>•</span>
            <Link href="/championship" className="hover:text-white transition-colors">Regulasi K-1</Link>
            <span>•</span>
            <Link href="/venue" className="hover:text-white transition-colors">Panduan Penonton</Link>
            <span>•</span>
            <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
            <span>•</span>
            <Link href="/kontak" className="hover:text-white transition-colors">Sekretariat Panitia</Link>
          </div>

        </div>
      </section>

    </main>
  );
}
