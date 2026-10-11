import Link from "next/link";
import Image from "next/image";
import prisma from "@/lib/prisma";
import { Shield, Trophy, Award, Flame, ArrowRight, CheckCircle2, Scale, Zap, Layers } from "lucide-react";

export const metadata = {
  title: "Kejuaraan Kickboxing — Redy Championship 2 | JKB 2026",
  description: "Informasi resmi 4 divisi berat badan, regulasi aturan tarung K-1, sabuk kejuaraan, dan bagan turnamen Redy Championship 2 JKB 2026.",
};

const DIVISIONS = [
  {
    name: "BANTAMWEIGHT",
    limit: "57.0 KG (125.6 LBS)",
    desc: "Divisi pertarungan berkecepatan tinggi dengan kombinasi striking blitzkrieg dan teknik footwork eksplosif.",
    belt: "Sabuk Emas Redy Bantamweight",
    highlightColor: "border-red-500/40 text-red-400",
  },
  {
    name: "FEATHERWEIGHT",
    limit: "60.0 KG (132.3 LBS)",
    desc: "Keseimbangan sempurna antara kelincahan manuver ring dan kekuatan pukulan counter akurat.",
    belt: "Sabuk Emas Redy Featherweight",
    highlightColor: "border-amber-500/40 text-amber-400",
  },
  {
    name: "LIGHTWEIGHT",
    limit: "63.5 KG (140.0 LBS)",
    desc: "Divisi klasik penuh darah dan tensi tinggi. Zona benturan daya tahan tubuh dan knockout power mematikan.",
    belt: "Sabuk Emas Redy Lightweight",
    highlightColor: "border-purple-500/40 text-purple-400",
  },
  {
    name: "WELTERWEIGHT",
    limit: "70.0 KG (154.3 LBS)",
    desc: "Divisi petarung kelas berat regional dengan kekuatan hantaman low-kick penghancur dan hook pemukul KO instan.",
    belt: "Sabuk Emas Redy Welterweight",
    highlightColor: "border-emerald-500/40 text-emerald-400",
  },
];

const RULES = [
  {
    title: "Format & Durasi Ronde",
    desc: "3 Ronde x 3 Menit untuk partai profesional kejuaraan (3 Ronde x 2 Menit untuk partai amatir), dengan 1 menit waktu istirahat antar ronde.",
  },
  {
    title: "Teknik Striking Sah (K-1 Rules)",
    desc: "Pukulan tinju legal (jab, cross, hook, uppercut, spinning backfist), tendangan kaki penuh (low, middle, high, spinning kick), dan serangan lutut (maksimal 1 grab-and-strike).",
  },
  {
    title: "Sistem Penilaian (10-Point Must)",
    desc: "Dinilai oleh 3 juri tepi ring independen berdasarkan: Efektivitas Striking / Knockdown, Agresivitas Efektif, dan Kontrol Ring (Octagon/Ring Control).",
  },
  {
    title: "Aturan Knockdown & Penghentian",
    desc: "Penerapan standing 8-count. Aturan 3 knockdown dalam 1 ronde otomatis TKO. Wasit dan dokter ring berhak menghentikan laga demi keselamatan atlet.",
  },
];

export default async function ChampionshipPage() {
  const publishedAthletes = await prisma.athlete.findMany({
    where: { isPublished: true },
    take: 4,
    orderBy: { wins: "desc" },
  });

  return (
    <div className="flex-1 flex flex-col w-full min-h-screen text-[#F6F3EC] bg-[#09090b] pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative w-full border-b border-white/10 overflow-hidden py-16 md:py-24 bg-[#171719]/40">
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="/images/jkb/boxing-ring.jpg"
            alt="Ring Kejuaraan JKB 2026"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D91F2C]/40 bg-[#D91F2C]/10 text-[#EF3340] text-xs font-bold tracking-widest uppercase mb-4">
            <Trophy className="w-3.5 h-3.5" />
            KEJUARAAN RESMI REGIONAL
          </div>

          <h1
            className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-none mb-4"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            REDY CHAMPIONSHIP 2: <span className="text-[#EF3340]">4 SABUK EMAS</span>
          </h1>

          <p className="text-[#99999F] text-base sm:text-lg font-sans max-w-3xl leading-relaxed mb-8">
            Puncak kompetisi kickboxing regional yang mempertemukan petarung-petarung terbaik tanah air. Sistem eliminasi murni di mana satu pukulan dapat mengubah takdir juara.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/bracket"
              className="inline-flex items-center gap-2 bg-[#D91F2C] hover:bg-[#EF3340] text-white px-6 py-3.5 rounded-sm font-bold text-xs uppercase tracking-widest transition-all"
            >
              <span>BUKA POHON TURNAMEN (LIVE BRACKET)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/fighters"
              className="inline-flex items-center gap-2 bg-transparent hover:bg-white/5 border border-white/20 text-white px-6 py-3.5 rounded-sm font-bold text-xs uppercase tracking-widest transition-all"
            >
              <span>LIHAT ROSTER ATLET LENGKAP</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4 Divisi Kejuaraan Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="mb-10">
          <h2
            className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight mb-3"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            DIVISI BERAT BADAN RESMI
          </h2>
          <p className="text-[#99999F] text-sm font-sans max-w-xl">
            Turnamen dipertandingkan dalam 4 kategori berat badan resmi dengan batas timbang ketat sebelum pertandingan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DIVISIONS.map((div, idx) => (
            <div
              key={idx}
              className="bg-[#171719] border border-white/10 p-8 rounded-sm hover:border-[#D91F2C]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm border bg-black/40 ${div.highlightColor} font-sans`}>
                    BATAS: {div.limit}
                  </span>
                  <Award className="w-4 h-4 text-[#E2BA75]" />
                </div>

                <h3
                  className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mb-2 group-hover:text-[#EF3340] transition-colors"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  {div.name}
                </h3>

                <p className="text-sm text-[#99999F] font-sans leading-relaxed mb-6">
                  {div.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-sans text-[#E2BA75]">
                <span className="font-bold uppercase tracking-wider">Gelar Tarung:</span>
                <span className="font-bold">{div.belt}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Regulasi Pertandingan K-1 */}
      <section className="bg-[#171719] border-y border-white/10 py-16 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="text-xs uppercase tracking-widest text-[#EF3340] font-bold mb-2 font-sans">
              STANDAR INTERNASIONAL
            </div>
            <h2
              className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight mb-3"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              REGULASI RESMI & ATURAN PENJURIAN
            </h2>
            <p className="text-[#99999F] text-sm font-sans max-w-2xl">
              Memastikan laga yang adil, disiplin sportivitas tinggi, dan perlindungan maksimal bagi kesehatan para petarung.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {RULES.map((rule, idx) => (
              <div key={idx} className="bg-[#09090b] border border-white/10 p-6 rounded-sm">
                <div className="flex items-center gap-2 mb-3 text-white font-bold text-base font-sans">
                  <CheckCircle2 className="w-4 h-4 text-[#EF3340] shrink-0" />
                  <h4>{rule.title}</h4>
                </div>
                <p className="text-xs text-[#99999F] font-sans leading-relaxed">
                  {rule.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bracket View */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full text-center">
        <div className="bg-gradient-to-r from-[#171719] via-[#171719]/90 to-[#171719] border border-white/10 p-10 rounded-sm">
          <Trophy className="w-12 h-12 text-[#E2BA75] mx-auto mb-4" />
          <h2
            className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight mb-2"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            LIHAT ALUR BAGAN & HASIL PERTANDINGAN
          </h2>
          <p className="text-sm text-[#99999F] font-sans max-w-xl mx-auto mb-6">
            Pantau pergerakan petarung dari babak perempat final, semifinal, hingga penentuan juara sabuk emas Redy Championship 2.
          </p>
          <Link
            href="/bracket"
            className="inline-flex items-center gap-2 bg-[#D91F2C] hover:bg-[#EF3340] text-white px-8 py-3.5 rounded-sm font-bold text-xs uppercase tracking-widest transition-all"
          >
            <span>BUKA LIVE TOURNAMENT BRACKET &rarr;</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
