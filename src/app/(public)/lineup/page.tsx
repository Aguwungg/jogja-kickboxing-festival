import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Music, Radio } from "lucide-react";

export const metadata = {
  title: "Lineup Musik & Panggung Festival | JKBF 2026",
  description: "Deretan musisi dan kurasi 3 panggung festival musik Jogja Kickboxing Festival di GOR UNY Yogyakarta.",
};

const STAGES = [
  {
    code: "01",
    name: "THE RING STAGE",
    location: "Main Indoor Arena • GOR UNY",
    desc: "Panggung megah berpadu dengan gelanggang pertarungan utama. Menghadirkan set musik berenergi tinggi setelah bel laga final.",
    genre: "Rock • Alternative • Punk",
  },
  {
    code: "02",
    name: "HERITAGE STAGE",
    location: "Cultural Hall • GOR UNY",
    desc: "Eksplorasi bunyi kontemporer, perpaduan musik tradisional Jawa, hip-hop, dan sound eksperimental khas seniman muda Yogyakarta.",
    genre: "Hip-Hop • Folk • Eksperimental",
  },
  {
    code: "03",
    name: "UNDERGROUND BEAT",
    location: "Outdoor Sound Plaza • GOR UNY",
    desc: "Denyut audio luar ruangan yang menyambut penonton sejak sore hari. Ruang santai, food truck festival, dan DJ kolektif lokal.",
    genre: "Electronic • House • Dub",
  },
];

export default async function LineupPage() {
  const performers = await prisma.performer.findMany({
    where: { isPublished: true },
    orderBy: { createdAt: "asc" },
  });

  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#0B0B0B] text-[#F4F0E8] pt-24 lg:pt-28 pb-24 overflow-x-hidden">
      
      {/* ═════════════════════════════════════════════════════════════════════
          1. FESTIVAL STAGE CINEMATIC HERO
      ═════════════════════════════════════════════ */}
      <section className="relative w-full border-b border-white/10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 min-h-[500px] lg:min-h-[580px]">
          
          <div className="lg:col-span-7 py-12 lg:py-20 flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D91F2C]" />
              <p className="font-technical text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
                THE STAGE • FESTIVAL LIVE MUSIC
              </p>
            </div>

            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tight leading-[0.85] text-white">
              MUSIK.<br />
              JOGJA.<br />
              <span className="text-[#D91F2C]">NYALI.</span>
            </h1>

            <p className="text-sm sm:text-base text-[#8F8E8B] font-sans max-w-lg leading-relaxed">
              Suara dan energi panggung festival di satu gelanggang terbuka GOR UNY Yogyakarta. Dentuman distorsi gitar dan beat mengiringi atmosfer kejuaraan kickboxing.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/jadwal"
                className="font-display text-base tracking-wider uppercase text-white bg-[#D91F2C] hover:bg-[#B81521] px-7 py-3.5 transition-colors inline-flex items-center gap-2 ring-1 ring-[#D91F2C]/50 shadow-sm"
              >
                <span>LIHAT RUNDOWN JADWAL</span>
                <span className="font-technical text-xs">↗</span>
              </Link>
              <Link
                href="/tiket"
                className="font-display text-base tracking-wider uppercase text-white hover:text-[#D91F2C] px-6 py-3.5 transition-colors inline-flex items-center gap-2 border border-white/20"
              >
                <span>INFO TIKET FESTIVAL</span>
                <span className="font-technical text-xs">↗</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full -mx-5 sm:-mx-8 lg:mx-0">
            <Image
              src="/images/v9/06_FOTO_KONSER_PLACEHOLDER_INTERNAL.png"
              alt="Festival Musik JKBF Live Stage"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent lg:hidden" />
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. LINEUP STATUS & DYNAMIC ROSTER
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-20 w-full space-y-16">
        
        {performers.length > 0 ? (
          <div>
            <div className="mb-10 space-y-2">
              <p className="font-technical text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold">
                DERETAN PENAMPIL RESMI
              </p>
              <h2 className="font-display text-5xl sm:text-6xl uppercase tracking-tight text-white">
                ROSTER MUSISI TAMPIL.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {performers.map((performer) => (
                <div key={performer.id} className="p-6 bg-[#141416] border border-white/10 ring-corner-frame space-y-4">
                  <span className="font-technical text-xs text-[#D91F2C] font-bold uppercase tracking-wider">
                    {performer.stage || "MAIN STAGE"}
                  </span>
                  <h3 className="font-display text-3xl uppercase tracking-wider text-white">
                    {performer.name}
                  </h3>
                  <p className="text-xs text-[#8F8E8B] font-sans leading-relaxed">
                    {performer.description || "Live Performance Festival"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D91F2C]" />
              <p className="font-technical text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold">
                STATUS KURASI PENAMPIL
              </p>
            </div>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-[0.88]">
              LINEUP SEGERA DIUMUMKAN.
            </h2>
            <p className="text-sm text-[#8F8E8B] font-sans max-w-xl leading-relaxed">
              Pengumuman musisi fase 1 sedang dalam proses finalisasi kurasi resmi panitia. Pantau terus kanal resmi JKBF untuk jadwal perilisan serentak.
            </p>
          </div>
        )}

        {/* ═════════════════════════════════════════════════════════════════════
            3. TIGA PANGGUNG FESTIVAL (THE 3 STAGES)
        ═════════════════════════════════════════════ */}
        <div className="space-y-10 pt-10 border-t border-white/10">
          <div>
            <p className="font-technical text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C] mb-2">
              ZONA PANGGUNG FESTIVAL
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white">
              TIGA ARENA BUNYI.
            </h2>
          </div>

          <div className="border-t border-white/10 divide-y divide-white/10">
            {STAGES.map((stage) => (
              <div
                key={stage.code}
                className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline px-2 hover:bg-white/[0.02] transition-colors"
              >
                <span className="font-technical text-sm font-bold text-[#D91F2C] md:col-span-1">
                  {stage.code}
                </span>
                <div className="md:col-span-4 space-y-1">
                  <h3 className="font-display text-3xl uppercase tracking-wider text-white">
                    {stage.name}
                  </h3>
                  <p className="font-technical text-xs text-[#77716D] uppercase tracking-wider">
                    {stage.location}
                  </p>
                </div>
                <p className="text-sm text-[#8F8E8B] md:col-span-5 font-sans leading-relaxed">
                  {stage.desc}
                </p>
                <div className="md:col-span-2 text-left md:text-right font-technical text-xs font-semibold text-white/80">
                  {stage.genre}
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

    </main>
  );
}
