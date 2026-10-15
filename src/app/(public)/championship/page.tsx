import Link from "next/link";
import Image from "next/image";
import { Trophy, Swords, ShieldCheck, Scale, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Kejuaraan Kickboxing — Redy Championship 2 | JKBF 2026",
  description: "Informasi resmi kejuaraan kickboxing profesional Redy Championship 2, 4 divisi sabuk emas, dan regulasi pertarungan K-1 di GOR UNY Yogyakarta.",
};

const DIVISIONS = [
  {
    no: "01",
    name: "FEATHERWEIGHT",
    limit: "57.0 KG",
    style: "SPEED & HIGH VOLUME STRIKING",
    belt: "SABUK EMAS 57 KG",
    quota: "8 PETARUNG",
    img: "/images/jkb/fighter-1.jpg",
  },
  {
    no: "02",
    name: "LIGHTWEIGHT",
    limit: "63.5 KG",
    style: "TECHNICAL COUNTER PRECISION",
    belt: "SABUK EMAS 63.5 KG",
    quota: "8 PETARUNG",
    img: "/images/jkb/fighter-3.jpg",
  },
  {
    no: "03",
    name: "WELTERWEIGHT",
    limit: "67.0 KG",
    style: "PRESSURE & HEAVY KO POWER",
    belt: "SABUK EMAS 67 KG",
    quota: "8 PETARUNG",
    img: "/images/jkb/fighter-5.jpg",
  },
  {
    no: "04",
    name: "MIDDLEWEIGHT",
    limit: "71.0 KG",
    style: "ABSOLUTE POWER & KNEE CLINCH",
    belt: "SABUK EMAS 71 KG",
    quota: "8 PETARUNG",
    img: "/images/jkb/fighter-4.jpg",
  },
];

const RULES = [
  {
    number: "01",
    title: "FORMAT & DURASI",
    desc: "3 Ronde × 3 Menit (1 Menit Jeda). Sistem eliminasi murni turnamen 8-man.",
  },
  {
    number: "02",
    title: "SERANGAN LEGAL",
    desc: "Pukulan tinju lengkap, spinning backfist, low/high kick, dan lutut tunggal langsung.",
  },
  {
    number: "03",
    title: "SISTEM PENILAIAN",
    desc: "10-Point Must System oleh 3 Dewan Juri independen bersertifikasi resmi.",
  },
  {
    number: "04",
    title: "KNOCKDOWN & TKO",
    desc: "Standing 8-count wajib. Aturan 3 knockdown dalam 1 ronde otomatis dinyatakan TKO.",
  },
];

export default function ChampionshipPage() {
  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#0A0A0A] text-[#FAFAFA] overflow-x-hidden">
      
      {/* ═════════════════════════════════════════════════════════════════════
          1. CINEMATIC HERO WITH CHAMPIONSHIP BELT
      ═════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[50svh] lg:min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/championship/belt-hero.jpg"
            alt="Championship Belt Redy Championship 2"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/70 via-transparent to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 w-full relative z-10 pb-10 lg:pb-14 pt-32 lg:pt-40">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-2.5 h-2.5 bg-[#D91F2C]" />
            <p className="font-technical text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
              REDY CHAMPIONSHIP 2 • K-1 RULES
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.85] text-white">
              KEJUARAAN<br />
              <span className="text-[#D91F2C]">SABUK EMAS 2026.</span>
            </h1>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/bracket"
                className="font-display text-xs sm:text-sm uppercase tracking-wider text-white bg-[#D91F2C] hover:bg-[#B81521] px-5 py-2.5 rounded transition-all inline-flex items-center gap-1.5"
              >
                <span>BAGAN TURNAMEN</span>
                <span className="font-technical text-xs">↗</span>
              </Link>
              <Link
                href="/fighters"
                className="font-display text-xs sm:text-sm uppercase tracking-wider text-white/80 hover:text-white border border-white/20 px-4 py-2.5 rounded transition-all inline-flex items-center gap-1.5 bg-black/50 backdrop-blur-sm"
              >
                <span>DAFTAR ATLET</span>
                <span className="font-technical text-xs">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. EMPAT DIVISI SABUK EMAS — VISUAL CARDS WITH FIGHTER IMAGES
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12 lg:py-16 w-full flex-1 space-y-14">
        
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-white flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-400" /> EMPAT KELAS JUARA
            </h2>
            <span className="font-technical text-xs text-white/40">K-1 RULES • 8-MAN ELIMINATION</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {DIVISIONS.map((div) => (
              <div
                key={div.no}
                className="bg-[#141416] border border-white/10 hover:border-[#D91F2C]/60 transition-all rounded overflow-hidden flex flex-col group"
              >
                {/* Fighter Photo */}
                <div className="relative aspect-[4/3] w-full bg-[#1c1c1f] overflow-hidden">
                  <Image
                    src={div.img}
                    alt={div.name}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-transparent to-transparent" />
                  <span className="absolute top-2 left-2 bg-[#D91F2C] text-white font-technical text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded">
                    DIVISI {div.no}
                  </span>
                  <span className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm text-white/70 font-technical text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded border border-white/10">
                    {div.quota}
                  </span>
                </div>

                <div className="p-3.5 sm:p-4 flex flex-col justify-between flex-1 space-y-2">
                  <div>
                    <h3 className="font-display text-lg sm:text-xl uppercase tracking-wider text-white group-hover:text-[#D91F2C] transition-colors leading-snug">
                      {div.name}
                    </h3>
                    <span className="font-technical text-xs font-black text-[#D91F2C] block mt-0.5">
                      BATAS {div.limit}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-white/5 space-y-1">
                    <span className="font-technical text-[9px] uppercase tracking-wider text-white/40 block">
                      {div.style}
                    </span>
                    <span className="font-technical text-[10px] text-amber-400 font-bold uppercase block">
                      ★ {div.belt}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════════
            3. REGULASI PERTANDINGAN (COMPACT 4 CARDS)
        ═════════════════════════════════════════════ */}
        <div className="space-y-6 pt-6 border-t border-white/10">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#D91F2C]" /> REGULASI RESMI K-1
            </h2>
            <span className="font-technical text-xs text-white/40">STANDAR KICKBOXING INTERNASIONAL</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {RULES.map((rule) => (
              <div
                key={rule.number}
                className="bg-[#121214] border border-white/10 p-4 sm:p-5 rounded space-y-2"
              >
                <div className="flex items-center justify-between font-technical text-xs">
                  <span className="text-[#D91F2C] font-bold">PASAL {rule.number}</span>
                </div>

                <h3 className="font-display text-lg uppercase tracking-wider text-white">
                  {rule.title}
                </h3>

                <p className="font-sans text-xs text-white/60 leading-relaxed">
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
