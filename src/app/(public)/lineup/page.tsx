import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import { Music, Radio, Calendar, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Lineup Musik & Panggung Festival | JKBF 2026",
  description: "Deretan musisi dan kurasi 3 panggung festival musik Jogja Kickboxing Festival di GOR UNY Yogyakarta.",
};

const STAGES = [
  {
    code: "01",
    name: "THE RING STAGE",
    location: "MAIN ARENA • GOR UNY",
    genre: "ROCK • ALTERNATIVE • ANTHEMIC",
    schedule: "START 19:00 WIB",
    img: "/images/lineup/ring-stage.jpg",
  },
  {
    code: "02",
    name: "HERITAGE STAGE",
    location: "CULTURAL HALL",
    genre: "HIP-HOP • FOLK • INDIE",
    schedule: "START 16:30 WIB",
    img: "/images/lineup/heritage-stage.jpg",
  },
  {
    code: "03",
    name: "UNDERGROUND BEAT",
    location: "OUTDOOR SOUND PLAZA",
    genre: "ELECTRONIC • BEATS • DUB",
    schedule: "START 15:00 WIB",
    img: "/images/lineup/underground-beat.jpg",
  },
];

export default async function LineupPage() {
  const performers = await prisma.performer.findMany({
    where: { isPublished: true },
    orderBy: { createdAt: "asc" },
  });

  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#0A0A0A] text-[#FAFAFA] pt-24 lg:pt-32 pb-28 overflow-x-hidden">
      
      {/* ═════════════════════════════════════════════════════════════════════
          1. FESTIVAL STAGE COMPACT HERO
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-6 pb-8 w-full border-b border-white/10">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-2.5 h-2.5 bg-[#D91F2C]" />
          <p className="font-technical text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
            LINEUP MUSIK • TIGA PANGGUNG FESTIVAL
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.85] text-white">
              PANGGUNG MUSIK<br />
              <span className="text-[#D91F2C]">FESTIVAL 2026.</span>
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/jadwal"
              className="font-display text-xs sm:text-sm uppercase tracking-wider text-white bg-[#D91F2C] hover:bg-[#B81521] px-5 py-2.5 rounded transition-all inline-flex items-center gap-1.5"
            >
              <span>JADWAL TAMPIL</span>
              <span className="font-technical text-xs">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. ROSTER MUSISI — 2-COLUMN MOBILE GRID (SHOPEE STYLE)
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-10 w-full flex-1 space-y-12">
        
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-white">
              KURASI PENAMPIL RESMI
            </h2>
            <span className="font-technical text-xs text-[#D91F2C] font-bold">
              {performers.length > 0 ? `${performers.length} ARTIS` : "FASE 1 SEGERA DIUMUMKAN"}
            </span>
          </div>

          {performers.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
              {performers.map((p) => (
                <div
                  key={p.id}
                  className="bg-[#141416] border border-white/10 hover:border-[#D91F2C]/60 transition-all rounded overflow-hidden flex flex-col group"
                >
                  {/* Square Artist Image */}
                  <div className="relative aspect-square w-full bg-[#1c1c1f] overflow-hidden">
                    <Image
                      src={p.image || "/images/lineup/ring-stage.jpg"}
                      alt={p.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <span className="absolute top-2 left-2 bg-[#D91F2C] text-white font-technical text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded shadow">
                      {p.stage || "MAIN STAGE"}
                    </span>
                  </div>

                  {/* Performer Details (No long essay) */}
                  <div className="p-3 sm:p-3.5 flex flex-col justify-between flex-1 space-y-2">
                    <div>
                      <h3 className="font-display text-lg sm:text-xl uppercase tracking-wider text-white group-hover:text-[#D91F2C] transition-colors line-clamp-1 leading-snug">
                        {p.name}
                      </h3>
                      <p className="font-technical text-[10px] text-white/50 uppercase tracking-wider line-clamp-1 mt-0.5">
                        {p.description || "Festival Headliner"}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-technical text-[#D91F2C] font-bold">
                      <span>12–14 DES</span>
                      <span>GOR UNY</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Teaser Cards if roster is awaiting announcement */
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
              {[
                { name: "THE SOUND OF NYALI", stage: "THE RING STAGE", genre: "ROCK / ANTHEM", img: "/images/lineup/ring-stage.jpg" },
                { name: "JOGJA HIP-HOP CYPHERS", stage: "HERITAGE STAGE", genre: "HIP-HOP / CYPHER", img: "/images/lineup/heritage-stage.jpg" },
                { name: "STRIKE & SOUNDS", stage: "UNDERGROUND BEAT", genre: "ELECTRONIC / BASS", img: "/images/lineup/underground-beat.jpg" },
                { name: "SECRET HEADLINER", stage: "THE RING STAGE", genre: "FASE 1 ANNOUNCEMENT", img: "/images/v9/06_FOTO_KONSER_PLACEHOLDER_INTERNAL.png" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#141416] border border-white/10 hover:border-[#D91F2C]/60 transition-all rounded overflow-hidden flex flex-col group"
                >
                  <div className="relative aspect-square w-full bg-[#1c1c1f] overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <span className="absolute top-2 left-2 bg-[#D91F2C] text-white font-technical text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded shadow">
                      {item.stage}
                    </span>
                  </div>

                  <div className="p-3 sm:p-3.5 flex flex-col justify-between flex-1 space-y-2">
                    <div>
                      <h3 className="font-display text-base sm:text-lg uppercase tracking-wider text-white group-hover:text-[#D91F2C] transition-colors line-clamp-1 leading-snug">
                        {item.name}
                      </h3>
                      <p className="font-technical text-[10px] text-[#D91F2C] font-bold uppercase tracking-wider mt-0.5">
                        {item.genre}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-technical text-white/50">
                      <span>12–14 DES 2026</span>
                      <span className="text-[#D91F2C] font-bold">GOR UNY</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ═════════════════════════════════════════════════════════════════════
            3. TIGA PANGGUNG FESTIVAL — COMPACT 3 CARDS
        ═════════════════════════════════════════════ */}
        <div className="space-y-6 pt-6 border-t border-white/10">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-white">
              TIGA ZONA PANGGUNG
            </h2>
            <span className="font-technical text-xs text-white/40">GOR UNY</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {STAGES.map((st) => (
              <div
                key={st.code}
                className="bg-[#121214] border border-white/10 hover:border-white/30 transition-all rounded p-4 sm:p-5 space-y-3"
              >
                <div className="flex items-center justify-between font-technical text-xs">
                  <span className="text-[#D91F2C] font-bold">ZONA {st.code}</span>
                  <span className="text-white/40">{st.schedule}</span>
                </div>

                <div>
                  <h3 className="font-display text-2xl uppercase tracking-wider text-white">
                    {st.name}
                  </h3>
                  <p className="font-technical text-[11px] text-white/50 uppercase tracking-wider mt-0.5">
                    {st.location}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/5">
                  <span className="font-technical text-[10px] text-[#D91F2C] font-bold uppercase tracking-wider block">
                    {st.genre}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

    </main>
  );
}
