import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Kejuaraan Kickboxing — Redy Championship 2 | JKBF 2026",
  description: "Informasi resmi kejuaraan kickboxing profesional Redy Championship 2, 4 divisi sabuk emas, dan regulasi pertarungan K-1 di GOR UNY Yogyakarta.",
};

const DIVISIONS = [
  {
    name: "BANTAMWEIGHT",
    limit: "57.0 KG",
    desc: "Kecepatan tinggi, kombinasi striking blitzkrieg, dan teknik footwork eksplosif.",
    belt: "SABUK EMAS BANTAMWEIGHT",
  },
  {
    name: "FEATHERWEIGHT",
    limit: "60.0 KG",
    desc: "Keseimbangan presisi antara kelincahan manuver ring dan pukulan counter akurat.",
    belt: "SABUK EMAS FEATHERWEIGHT",
  },
  {
    name: "LIGHTWEIGHT",
    limit: "63.5 KG",
    desc: "Zona benturan daya tahan tubuh dan potensi knockout seketika dalam tempo tinggi.",
    belt: "SABUK EMAS LIGHTWEIGHT",
  },
  {
    name: "WELTERWEIGHT",
    limit: "70.0 KG",
    desc: "Kekuatan maksimal dengan kombinasi low-kick penghancur dan hook pemukul KO berat.",
    belt: "SABUK EMAS WELTERWEIGHT",
  },
];

const RULES = [
  {
    number: "01",
    title: "Format & Durasi Ronde",
    desc: "3 Ronde x 3 Menit untuk partai profesional kejuaraan, dengan 1 menit jeda istirahat antar ronde.",
  },
  {
    number: "02",
    title: "Teknik Striking Legal (K-1 Rules)",
    desc: "Pukulan tinju legal (jab, cross, hook, uppercut, spinning backfist), tendangan kaki penuh, dan lutut tunggal.",
  },
  {
    number: "03",
    title: "Sistem Penilaian (10-Point Must)",
    desc: "Dinilai oleh 3 juri tepi ring berdasarkan efektivitas striking/knockdown, agresivitas efektif, dan kontrol ring.",
  },
  {
    number: "04",
    title: "Prosedur Knockdown & Keselamatan",
    desc: "Penerapan standing 8-count. Aturan 3 knockdown dalam 1 ronde otomatis TKO demi keselamatan mutlak atlet.",
  },
];

export default function ChampionshipPage() {
  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#F4F0E8] text-[#0B0B0B] pt-24 lg:pt-28 pb-24">
      
      {/* ═════════════════════════════════════════════════════════════════════
          1. EDITORIAL SPLIT HERO
      ═════════════════════════════════════════════ */}
      <section className="relative w-full border-b border-black/10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 min-h-[500px] lg:min-h-[560px]">
          
          {/* Left Text */}
          <div className="lg:col-span-7 py-12 lg:py-20 flex flex-col justify-center space-y-5">
            <p
              className="text-[#D91F2C] text-xs sm:text-sm font-extrabold uppercase tracking-[0.24em]"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              REDY CHAMPIONSHIP 2
            </p>

            <h1
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight leading-[0.88] text-[#0B0B0B]"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              REDY<br />
              CHAMPIONSHIP 2
            </h1>

            <p className="text-sm sm:text-base text-[#5A5957] font-sans max-w-lg leading-relaxed">
              Kickboxing. Empat divisi sabuk emas. Satu arena pembuktian di GOR UNY Yogyakarta, 12–14 Desember 2026.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/bracket"
                className="font-display font-extrabold text-xs sm:text-sm uppercase tracking-wider text-white bg-[#0B0B0B] hover:bg-black px-7 py-3.5 transition-colors inline-flex items-center gap-1.5"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                <span>LIHAT BAGAN TURNAMEN ↗</span>
              </Link>
              <Link
                href="/fighters"
                className="font-display font-bold text-xs sm:text-sm uppercase tracking-wider text-[#0B0B0B] hover:text-[#D91F2C] px-5 py-3.5 transition-colors inline-flex items-center gap-1.5 border border-black/20"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                <span>DIREKTORI ATLET ↗</span>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full -mx-5 sm:-mx-8 lg:mx-0">
            <Image
              src="/images/v9/04_FOTO_FIGHT_DESKTOP_TANPA_TEKST.png"
              alt="Kickboxing Action"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center grayscale contrast-125"
            />
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. DATA & DIVISIONS
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-28 w-full">
        
        <div className="mb-14 space-y-3">
          <p
            className="text-[#D91F2C] text-xs font-extrabold uppercase tracking-[0.24em]"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            DATA & DIVISI SABUK EMAS
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tight text-[#0B0B0B]"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            EMPAT KELAS JUARA.
          </h2>
          <p className="text-sm text-[#5A5957] font-sans max-w-xl">
            Bagan dan atlet resmi sedang dalam kurasi federasi menjelang sesi penimbangan resmi.
          </p>
        </div>

        {/* Divisions in Clean Spacious Rows */}
        <div className="border-t border-black/10 divide-y divide-black/10 mb-20">
          {DIVISIONS.map((div, idx) => (
            <div
              key={div.name}
              className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-baseline transition-colors hover:bg-black/[0.02]"
            >
              <span className="text-[#D91F2C] font-mono text-sm sm:text-base font-bold md:col-span-1">
                {(idx + 1).toString().padStart(2, "0")}
              </span>
              <div className="md:col-span-4 space-y-1">
                <h3
                  className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#0B0B0B]"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  {div.name}
                </h3>
                <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#D91F2C]">
                  BATAS BOBOT: {div.limit}
                </span>
              </div>
              <p className="text-sm text-[#5A5957] md:col-span-5 font-sans leading-relaxed">
                {div.desc}
              </p>
              <div className="md:col-span-2 text-left md:text-right">
                <span className="text-xs uppercase font-extrabold text-[#0B0B0B] tracking-wider">
                  {div.belt}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ═════════════════════════════════════════════════════════════════════
            3. REGULASI PERTANDINGAN (K-1 RULES)
        ═════════════════════════════════════════════ */}
        <div className="space-y-10 pt-10 border-t border-black/10">
          <div>
            <p
              className="text-[#D91F2C] text-xs font-extrabold uppercase tracking-[0.24em] mb-2"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              STANDAR RESMI
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#0B0B0B]"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              REGULASI K-1 RULES.
            </h2>
          </div>

          <div className="border-t border-black/10 divide-y divide-black/10">
            {RULES.map((rule) => (
              <div
                key={rule.number}
                className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline"
              >
                <span className="text-[#D91F2C] font-mono text-sm font-bold md:col-span-1">
                  {rule.number}
                </span>
                <h3
                  className="text-xl sm:text-2xl font-black uppercase text-[#0B0B0B] md:col-span-4"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
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
