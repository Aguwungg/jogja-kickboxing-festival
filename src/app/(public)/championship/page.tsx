import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Scale, Shield, AlertCircle } from "lucide-react";

export const metadata = {
  title: "Kejuaraan Kickboxing — Redy Championship 2 | JKBF 2026",
  description: "Informasi resmi kejuaraan kickboxing profesional Redy Championship 2, 4 divisi sabuk emas, dan regulasi pertarungan K-1 di GOR UNY Yogyakarta.",
};

const DIVISIONS = [
  {
    name: "BANTAMWEIGHT",
    limit: "57.0 KG / 125.6 LBS",
    desc: "Divisi berkecepatan tinggi dengan kombinasi striking blitzkrieg dan teknik footwork eksplosif.",
    belt: "SABUK EMAS REDY BANTAMWEIGHT",
  },
  {
    name: "FEATHERWEIGHT",
    limit: "60.0 KG / 132.3 LBS",
    desc: "Keseimbangan presisi antara kelincahan manuver ring dan kekuatan pukulan counter akurat.",
    belt: "SABUK EMAS REDY FEATHERWEIGHT",
  },
  {
    name: "LIGHTWEIGHT",
    limit: "63.5 KG / 140.0 LBS",
    desc: "Divisi penuh tensi tinggi. Zona benturan daya tahan tubuh dan potensi knockout seketika.",
    belt: "SABUK EMAS REDY LIGHTWEIGHT",
  },
  {
    name: "WELTERWEIGHT",
    limit: "70.0 KG / 154.3 LBS",
    desc: "Divisi kekuatan maksimal dengan kombinasi low-kick penghancur dan hook pemukul KO berat.",
    belt: "SABUK EMAS REDY WELTERWEIGHT",
  },
];

const RULES = [
  {
    number: "01",
    title: "Format & Durasi Ronde",
    desc: "3 Ronde x 3 Menit untuk partai profesional kejuaraan (3 Ronde x 2 Menit untuk partai undercard), dengan 1 menit waktu istirahat antar ronde.",
  },
  {
    number: "02",
    title: "Teknik Striking Legal (K-1 Rules)",
    desc: "Pukulan tinju legal (jab, cross, hook, uppercut, spinning backfist), tendangan kaki penuh (low, middle, high, spinning kick), serta serangan lutut tunggal.",
  },
  {
    number: "03",
    title: "Sistem Penilaian (10-Point Must)",
    desc: "Dinilai oleh 3 juri tepi ring independen berdasarkan: Efektivitas Striking / Knockdown, Agresivitas Efektif, dan Kontrol Area Ring.",
  },
  {
    number: "04",
    title: "Prosedur Knockdown & Keselamatan",
    desc: "Penerapan standing 8-count. Aturan 3 knockdown dalam 1 ronde otomatis TKO demi keselamatan mutlak para atlet petarung.",
  },
];

export default function ChampionshipPage() {
  return (
    <main className="flex-1 flex flex-col w-full min-h-screen text-[#F4F0E8] bg-[#0B0B0B] pt-24 pb-20">
      
      {/* Editorial Header */}
      <section className="relative w-full border-b border-white/10 py-16 md:py-24 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="v9-overline text-[#D91F2C]">
              COMBAT SPORTS / REDY CHAMPIONSHIP 2
            </span>
            <h1
              className="v9-display-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F4F0E8]"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              REDY CHAMPIONSHIP 2
            </h1>
            <p className="text-base sm:text-lg text-[#F4F0E8] font-bold uppercase tracking-wider font-display">
              EMPAT SABUK JUARA. SISTEM ELIMINASI MURNI.
            </p>
            <p className="text-xs sm:text-sm text-[#8F8E8B] leading-relaxed font-sans max-w-2xl">
              Turnamen kickboxing profesional resmi di GOR UNY Yogyakarta pada 12—14 Desember 2026. Atlet terbaik bertarung memperebutkan tahta tertinggi dalam aturan standar internasional.
            </p>
          </div>
        </div>
      </section>

      {/* Fight Card & Matchup Showcase (Clean Pre-Event State) */}
      <section className="w-full py-16 border-b border-white/10 bg-[#141416]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="v9-overline text-[#D91F2C]">PARTAI UTAMA</span>
              <h2
                className="v9-display-title text-3xl sm:text-4xl text-[#F4F0E8] mt-1"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                FIGHT CARD RESMI
              </h2>
            </div>
            <div className="flex gap-3">
              <Link
                href="/bracket"
                className="v9-btn-ghost text-xs font-display font-extrabold tracking-wider"
              >
                <span>BAGAN TURNAMEN</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/fighters"
                className="v9-btn-ghost text-xs font-display font-extrabold tracking-wider"
              >
                <span>SEMUA PETARUNG</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Clean Editorial Pre-Event Fight Card Box */}
          <div className="relative border border-white/10 bg-[#0B0B0B] p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Photo Side */}
              <div className="lg:col-span-5 relative h-64 sm:h-80 bg-[#141416] border border-white/10 overflow-hidden">
                <Image
                  src="/images/v9/04_FOTO_FIGHT_DESKTOP_TANPA_TEKST.png"
                  alt="Ilustrasi Pertarungan Kickboxing"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent" />
                <div className="absolute top-3 left-3 bg-[#D91F2C] text-white px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest font-bold">
                  MAIN EVENT TEASER
                </div>
              </div>

              {/* Status & Information */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#D91F2C]">
                  <AlertCircle className="w-4 h-4" />
                  <span>STATUS: VERIFIKASI RESMI BERJALAN</span>
                </div>
                <h3
                  className="v9-display-title text-2xl sm:text-3xl text-[#F4F0E8]"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  PENENTUAN SUSUNAN PARTAI & ATLET RESMI
                </h3>
                <p className="text-xs sm:text-sm text-[#8F8E8B] leading-relaxed">
                  Susunan lengkap fight card (Main Card, Co-Main Card, dan Undercard) akan dirilis secara resmi setelah seluruh proses timbang badan (weigh-in) dan clearance medis komisi kickboxing disahkan.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono">
                  <div className="p-3 bg-[#141416] border border-white/5">
                    <span className="text-[#8F8E8B] block text-[10px]">TOTAL DIVISI</span>
                    <span className="text-sm font-bold text-[#F4F0E8]">4 KELAS</span>
                  </div>
                  <div className="p-3 bg-[#141416] border border-white/5">
                    <span className="text-[#8F8E8B] block text-[10px]">FORMAT</span>
                    <span className="text-sm font-bold text-[#F4F0E8]">ELIMINASI GUGUR</span>
                  </div>
                  <div className="p-3 bg-[#141416] border border-white/5 col-span-2 sm:col-span-1">
                    <span className="text-[#8F8E8B] block text-[10px]">REGULASI</span>
                    <span className="text-sm font-bold text-[#D91F2C]">K-1 RULES</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4 Weight Divisions */}
      <section className="w-full py-16 border-b border-white/10 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="v9-overline text-[#D91F2C]">KLASIFIKASI KELAS</span>
            <h2
              className="v9-display-title text-3xl sm:text-4xl text-[#F4F0E8] mt-1"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              EMPAT DIVISI RESMI
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DIVISIONS.map((div) => (
              <div
                key={div.name}
                className="p-6 bg-[#141416] border border-white/10 space-y-3 hover:border-white/20 transition-colors"
              >
                <div className="flex justify-between items-baseline border-b border-white/10 pb-3">
                  <h3
                    className="v9-display-title text-2xl text-[#F4F0E8]"
                    style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                  >
                    {div.name}
                  </h3>
                  <span className="font-mono text-xs text-[#D91F2C] font-bold">
                    {div.limit}
                  </span>
                </div>
                <p className="text-xs text-[#8F8E8B] leading-relaxed">
                  {div.desc}
                </p>
                <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-[#F4F0E8]">
                  <Scale className="w-3.5 h-3.5 text-[#D91F2C]" />
                  <span>PRESTASI: {div.belt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* K-1 Rules & Sanctioning */}
      <section className="w-full py-16 bg-[#141416]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="v9-overline text-[#D91F2C]">STANDAR DAN ATURAN</span>
            <h2
              className="v9-display-title text-3xl sm:text-4xl text-[#F4F0E8] mt-1"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              REGULASI RESMI K-1 RULES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RULES.map((rule) => (
              <div key={rule.number} className="p-6 bg-[#0B0B0B] border border-white/10 space-y-2">
                <span className="text-[10px] text-[#D91F2C] font-mono tracking-widest uppercase block">
                  PASAL {rule.number}
                </span>
                <h3 className="text-base font-display font-black uppercase text-[#F4F0E8]" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
                  {rule.title}
                </h3>
                <p className="text-xs text-[#8F8E8B] leading-relaxed">
                  {rule.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
