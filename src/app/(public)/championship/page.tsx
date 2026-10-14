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
  },
  {
    no: "02",
    name: "LIGHTWEIGHT",
    limit: "63.5 KG",
    style: "TECHNICAL COUNTER PRECISION",
    belt: "SABUK EMAS 63.5 KG",
    quota: "8 PETARUNG",
  },
  {
    no: "03",
    name: "WELTERWEIGHT",
    limit: "67.0 KG",
    style: "PRESSURE & HEAVY KO POWER",
    belt: "SABUK EMAS 67 KG",
    quota: "8 PETARUNG",
  },
  {
    no: "04",
    name: "MIDDLEWEIGHT",
    limit: "71.0 KG",
    style: "ABSOLUTE POWER & KNEE CLINCH",
    belt: "SABUK EMAS 71 KG",
    quota: "8 PETARUNG",
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
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#0A0A0A] text-[#FAFAFA] pt-24 lg:pt-32 pb-28">
      
      {/* ═════════════════════════════════════════════════════════════════════
          1. COMPACT HERO
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-6 pb-8 w-full border-b border-white/10">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-2.5 h-2.5 bg-[#D91F2C]" />
          <p className="font-technical text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
            REDY CHAMPIONSHIP 2 • K-1 RULES
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.85] text-white">
              KEJUARAAN KICKBOXING<br />
              <span className="text-[#D91F2C]">SABUK EMAS 2026.</span>
            </h1>
          </div>
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
              className="font-display text-xs sm:text-sm uppercase tracking-wider text-white/80 hover:text-white border border-white/20 px-4 py-2.5 rounded transition-all inline-flex items-center gap-1.5"
            >
              <span>DAFTAR ATLET</span>
              <span className="font-technical text-xs">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. EMPAT DIVISI SABUK EMAS (2-COL MOBILE, 4-COL DESKTOP)
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-10 w-full flex-1 space-y-12">
        
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-white flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-400" /> EMPAT KELAS JUARA
            </h2>
            <span className="font-technical text-xs text-white/40">K-1 RULES • 8-MAN ELIMINATION</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
            {DIVISIONS.map((div) => (
              <div
                key={div.no}
                className="bg-[#141416] border border-white/10 hover:border-[#D91F2C]/60 transition-all rounded p-4 sm:p-5 flex flex-col justify-between space-y-4 group"
              >
                <div>
                  <div className="flex items-center justify-between font-technical text-[10px] text-white/40 mb-2">
                    <span className="text-[#D91F2C] font-bold">DIVISI {div.no}</span>
                    <span>{div.quota}</span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl uppercase tracking-wider text-white group-hover:text-[#D91F2C] transition-colors">
                    {div.name}
                  </h3>
                  <span className="font-technical text-xs font-black text-[#D91F2C] block mt-0.5">
                    BATAS {div.limit}
                  </span>
                </div>

                <div className="pt-2 border-t border-white/5 space-y-1">
                  <span className="font-technical text-[9px] uppercase tracking-wider text-white/40 block">
                    GAYA: {div.style}
                  </span>
                  <span className="font-technical text-[10px] text-amber-400 font-bold uppercase block">
                    ★ {div.belt}
                  </span>
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
