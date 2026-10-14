import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Kejuaraan Kickboxing — Redy Championship 2 | JKBF 2026",
  description: "Informasi resmi kejuaraan kickboxing profesional Redy Championship 2, 4 divisi sabuk emas, dan regulasi pertarungan K-1 di GOR UNY Yogyakarta.",
};

const DIVISIONS = [
  {
    no: "01",
    name: "FEATHERWEIGHT",
    limit: "57.0 KG",
    desc: "Kecepatan ekstrim, volume kombinasi striking blitzkrieg, dan manuver footwork agresif.",
    belt: "SABUK EMAS FEATHERWEIGHT",
  },
  {
    no: "02",
    name: "LIGHTWEIGHT",
    limit: "63.5 KG",
    desc: "Keseimbangan presisi antara kelincahan bertahan dan pukulan counter berkekuatan tinggi.",
    belt: "SABUK EMAS LIGHTWEIGHT",
  },
  {
    no: "03",
    name: "WELTERWEIGHT",
    limit: "67.0 KG",
    desc: "Low-kick penghancur, serangan kombinasi lutut tunggal, dan potensi KO seketika.",
    belt: "SABUK EMAS WELTERWEIGHT",
  },
  {
    no: "04",
    name: "MIDDLEWEIGHT",
    limit: "71.0 KG",
    desc: "Dominasi fisik mutlak, benturan striking kelas berat, dan uji ketahanan stamina ronde penuh.",
    belt: "SABUK EMAS MIDDLEWEIGHT",
  },
];

const RULES = [
  {
    number: "01",
    title: "Format & Durasi Ronde",
    desc: "3 Ronde x 3 Menit untuk seluruh partai eliminasi turnamen kejuaraan, dengan 1 menit jeda istirahat antar ronde.",
  },
  {
    number: "02",
    title: "Teknik Serangan Legal (K-1 Rules)",
    desc: "Pukulan tinju lengkap (jab, cross, hook, uppercut, spinning backfist), tendangan kaki penuh ke seluruh tubuh legal, dan serangan lutut tunggal langsung.",
  },
  {
    number: "03",
    title: "Sistem Penilaian (10-Point Must)",
    desc: "Dinilai independen oleh 3 juri tepi ring bersertifikasi berdasarkan efektivitas striking/knockdown, agresivitas efektif, dan penguasaan arena ring.",
  },
  {
    number: "04",
    title: "Prosedur Knockdown & Keamanan",
    desc: "Penerapan standing 8-count wajib. Aturan 3 knockdown dalam 1 ronde otomatis berakhir TKO demi keselamatan mutlak atlet petarung.",
  },
];

export default function ChampionshipPage() {
  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#F4F0E8] text-[#0B0B0B] pt-24 lg:pt-28 pb-24">
      
      {/* ═════════════════════════════════════════════════════════════════════
          1. FIGHT NIGHT EDITORIAL HERO
      ═════════════════════════════════════════════ */}
      <section className="relative w-full border-b border-black/10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 min-h-[500px] lg:min-h-[580px]">
          
          {/* Left Text */}
          <div className="lg:col-span-7 py-12 lg:py-20 flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D91F2C]" />
              <p className="font-technical text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
                REDY CHAMPIONSHIP 2 • K-1 RULES
              </p>
            </div>

            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tight leading-[0.85] text-[#0B0B0B]">
              REDY<br />
              CHAMPIONSHIP 2
            </h1>

            <p className="text-sm sm:text-base text-[#5A5957] font-sans max-w-lg leading-relaxed">
              Kejuaraan kickboxing profesional di Yogyakarta. Empat divisi sabuk emas, delapan petarung per kelas, bertarung di panggung GOR UNY, 12–14 Desember 2026.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/bracket"
                className="font-display text-base tracking-wider uppercase text-white bg-[#0B0B0B] hover:bg-black px-7 py-3.5 transition-colors inline-flex items-center gap-2 ring-1 ring-black/40 shadow-sm"
              >
                <span>BAGAN TURNAMEN 8-MAN</span>
                <span className="font-technical text-xs">↗</span>
              </Link>
              <Link
                href="/fighters"
                className="font-display text-base tracking-wider uppercase text-[#0B0B0B] hover:text-[#D91F2C] px-6 py-3.5 transition-colors inline-flex items-center gap-2 border border-black/25"
              >
                <span>DIREKTORI ATLET</span>
                <span className="font-technical text-xs">↗</span>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full -mx-5 sm:-mx-8 lg:mx-0">
            <Image
              src="/images/v9/04_FOTO_FIGHT_DESKTOP_TANPA_TEKST.png"
              alt="Kickboxing Fight Night Action"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center grayscale contrast-125"
            />
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. DATA & DIVISI SABUK EMAS
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-28 w-full">
        
        <div className="mb-14 space-y-3">
          <p className="font-technical text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold">
            STRUKTUR KOMPETISI RESMI
          </p>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-[#0B0B0B] leading-[0.88]">
            EMPAT KELAS JUARA.
          </h2>
          <p className="text-sm text-[#5A5957] font-sans max-w-xl leading-relaxed">
            Setiap divisi diikuti oleh delapan petarung dalam format turnamen eliminasi langsung K-1 rules hingga penentuan sabuk emas.
          </p>
        </div>

        {/* Divisions in Clean Open Rows */}
        <div className="border-t border-black/15 divide-y divide-black/15 mb-20">
          {DIVISIONS.map((div) => (
            <div
              key={div.name}
              className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-baseline transition-colors hover:bg-black/[0.02] px-2"
            >
              <span className="font-technical text-sm sm:text-base font-bold text-[#D91F2C] md:col-span-1">
                {div.no}
              </span>
              <div className="md:col-span-4 space-y-1">
                <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-wider text-[#0B0B0B]">
                  {div.name}
                </h3>
                <span className="font-technical text-xs uppercase font-bold tracking-widest text-[#D91F2C]">
                  BATAS BOBOT: {div.limit}
                </span>
              </div>
              <p className="text-sm text-[#5A5957] md:col-span-5 font-sans leading-relaxed">
                {div.desc}
              </p>
              <div className="md:col-span-2 text-left md:text-right font-technical text-xs uppercase font-bold text-[#0B0B0B] tracking-wider">
                {div.belt}
              </div>
            </div>
          ))}
        </div>

        {/* ═════════════════════════════════════════════════════════════════════
            3. REGULASI PERTANDINGAN (K-1 RULES)
        ═════════════════════════════════════════════ */}
        <div className="space-y-10 pt-10 border-t border-black/15">
          <div>
            <p className="font-technical text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C] mb-2">
              STANDAR RESMI PERTANDINGAN
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#0B0B0B]">
              REGULASI K-1 RULES.
            </h2>
          </div>

          <div className="border-t border-black/15 divide-y divide-black/15">
            {RULES.map((rule) => (
              <div
                key={rule.number}
                className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline px-2"
              >
                <span className="font-technical text-sm font-bold text-[#D91F2C] md:col-span-1">
                  {rule.number}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-[#0B0B0B] md:col-span-4">
                  {rule.title}
                </h3>
                <p className="text-sm text-[#5A5957] md:col-span-7 font-sans leading-relaxed">
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
