import Link from "next/link";
import Image from "next/image";
import { Trophy, Swords, ShieldCheck, Scale, ArrowRight, MapPin, Calendar, Clock, Award } from "lucide-react";
import { EVENT_CONFIG } from "@/lib/event-config";

export const metadata = {
  title: "Kejuaraan Kickboxing — Redy Championship 2 | JKBF 2026",
  description:
    "Informasi resmi kejuaraan kickboxing profesional Redy Championship 2, 4 divisi sabuk emas, bagan 8-man elimination, dan regulasi K-1 di GOR UNY Yogyakarta.",
};

const DIVISIONS = EVENT_CONFIG.divisions;

const EVENT_FACTS = [
  { label: "TANGGAL KEJUARAAN", value: "12–14 DESEMBER 2026", icon: Calendar },
  { label: "ARENA & VENUE", value: "GOR UNY, YOGYAKARTA", icon: MapPin },
  { label: "FORMAT PERTARUNGAN", value: "8-MAN TOURNAMENT TREE", icon: Swords },
  { label: "TOTAL PEREBUTAN", value: "4 SABUK EMAS RESMI", icon: Award },
];

const RULES = [
  {
    number: "01",
    title: "FORMAT & DURASI",
    desc: "3 Ronde × 3 Menit (1 Menit Jeda). Sistem eliminasi murni turnamen 8-man tanpa repechage.",
  },
  {
    number: "02",
    title: "SERANGAN LEGAL",
    desc: "Pukulan tinju lengkap, spinning backfist, low/high kick, dan lutut tunggal langsung ke tubuh.",
  },
  {
    number: "03",
    title: "SISTEM PENILAIAN",
    desc: "10-Point Must System oleh 3 Dewan Juri independen bersertifikasi resmi kickboxing nasional.",
  },
  {
    number: "04",
    title: "KNOCKDOWN & TKO",
    desc: "Standing 8-count wajib. Aturan 3 knockdown dalam 1 ronde otomatis dinyatakan kemenangan TKO.",
  },
];

export default function ChampionshipPage() {
  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#0A0A0A] text-[#FAFAFA] overflow-x-hidden">
      
      {/* ═════════════════════════════════════════════════════════════════════
          1. CINEMATIC COMBAT HERO (GLORY-STYLE EVENT IDENTITY)
      ═════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[55svh] lg:min-h-[64vh] flex items-end overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/championship/belt-hero.jpg"
            alt="Sabuk Emas Kejuaraan Redy Championship 2"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center lg:object-[center_35%] contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/75 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-[#0A0A0A]/40 to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 w-full relative z-10 pb-12 lg:pb-16 pt-32 lg:pt-40 space-y-6">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 bg-[#D91F2C]" />
            <p className="font-technical text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
              COMBAT SCENE • REDY CHAMPIONSHIP 2
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.85] text-white">
                KEJUARAAN<br />
                <span className="text-[#D91F2C]">SABUK EMAS 2026.</span>
              </h1>
              <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl leading-relaxed">
                Panggung pembuktian 32 petarung kickboxing terbaik nasional dalam sistem eliminasi gugur murni untuk memperebutkan supremasi empat gelar sabuk emas.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/bracket"
                className="font-display text-xs sm:text-sm uppercase tracking-wider text-white bg-[#D91F2C] hover:bg-[#B81521] active:scale-95 px-6 py-3 rounded transition-all inline-flex items-center gap-2 shadow-lg shadow-red-950/50"
              >
                <span>BAGAN TURNAMEN 8-MAN</span>
                <span className="font-technical text-xs">↗</span>
              </Link>
              <Link
                href="/fighters"
                className="font-display text-xs sm:text-sm uppercase tracking-wider text-white/90 hover:text-white border border-white/20 hover:border-white px-5 py-3 rounded transition-all inline-flex items-center gap-2 bg-black/50 backdrop-blur-sm"
              >
                <span>DIREKTORI ATLET RESMI</span>
                <span className="font-technical text-xs">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. EVENT METRICS BAR (EVENT FACTS: WHEN, WHERE, FORMAT, BELTS)
      ═════════════════════════════════════════════ */}
      <section className="w-full bg-[#111113] border-b border-white/10 py-5">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {EVENT_FACTS.map((fact, idx) => {
            const Icon = fact.icon;
            return (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-[#D91F2C]" />
                </div>
                <div>
                  <p className="font-technical text-[10px] text-white/40 uppercase tracking-wider">
                    {fact.label}
                  </p>
                  <p className="font-display text-xs sm:text-sm uppercase tracking-wider text-white font-bold">
                    {fact.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          3. EMPAT DIVISI SABUK EMAS (SINGLE SOURCE OF TRUTH)
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-12 lg:py-16 w-full flex-1 space-y-16">
        
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <span className="font-technical text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold block mb-1">
                K-1 RULES • 8 ATLET PER DIVISI
              </span>
              <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-wider text-white flex items-center gap-2">
                <Trophy className="w-6 h-6 text-amber-400" /> EMPAT KELAS KEJUARAAN
              </h2>
            </div>
            <p className="font-sans text-xs sm:text-sm text-white/50 max-w-md sm:text-right">
              Masing-masing divisi diisi oleh 8 petarung unggulan hasil seleksi ketat dewan juri dan badan arbitrase kickboxing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {DIVISIONS.map((div) => (
              <Link
                key={div.no}
                href="/bracket"
                className="bg-[#0E0E10] hover:bg-[#141416] p-6 flex flex-col justify-between transition-colors group"
              >
                <div>
                  <div className="relative aspect-[4/5] w-full bg-black mb-5 overflow-hidden">
                    <Image
                      src={div.img}
                      alt={div.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500 grayscale contrast-125"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E10] via-transparent to-transparent" />
                    <span className="absolute top-2.5 left-2.5 bg-[#D91F2C] text-white font-technical text-[9px] uppercase font-bold tracking-widest px-2 py-0.5">
                      DIVISI {div.no}
                    </span>
                    <span className="absolute top-2.5 right-2.5 bg-black/80 text-white/90 font-technical text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 border border-white/10">
                      {div.quota}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="font-technical text-xs font-bold text-[#D91F2C] block">
                      BATAS {div.limit}
                    </span>
                    <h3 className="font-display text-2xl uppercase tracking-wider text-white group-hover:text-[#D91F2C] transition-colors">
                      {div.name}
                    </h3>
                    <p className="font-technical text-[11px] text-amber-400 font-bold uppercase tracking-wide">
                      {div.belt}
                    </p>
                    <p className="font-sans text-xs text-white/50 leading-relaxed pt-2">
                      {div.style}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-technical uppercase tracking-wider text-white/60 group-hover:text-white transition-colors">
                  <span>Bagan Turnamen</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D91F2C] group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════════
            4. REGULASI PERTANDINGAN RESMI K-1 (SECONDARY HIERARCHY)
        ═════════════════════════════════════════════ */}
        <div className="space-y-6 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-3 border-b border-white/10">
            <div>
              <span className="font-technical text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold block mb-1">
                KICKBOXING CODE OF CONDUCT
              </span>
              <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#D91F2C]" /> REGULASI RESMI PERTANDINGAN
              </h2>
            </div>
            <span className="font-technical text-xs text-white/40">STANDAR FEDERASI NASIONAL K-1</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {RULES.map((rule) => (
              <div
                key={rule.number}
                className="bg-[#0E0E10] hover:bg-[#141416] p-6 space-y-2 transition-colors"
              >
                <div className="flex items-center justify-between font-technical text-xs mb-2">
                  <span className="text-[#D91F2C] font-bold">PASAL {rule.number}</span>
                  <span className="text-white/30">K-1 CODEX</span>
                </div>

                <h3 className="font-display text-xl uppercase tracking-wider text-white">
                  {rule.title}
                </h3>

                <p className="font-sans text-xs text-white/50 leading-relaxed pt-1">
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
