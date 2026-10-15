import React from "react";
import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import { Music, Calendar, ArrowRight, Sparkles } from "lucide-react";
import LineupPosterClient, { PerformerItem } from "@/components/lineup/LineupPosterClient";

export const metadata = {
  title: "Lineup Musik & Panggung Festival | JKBF 2026",
  description:
    "Deretan musisi, headliner rock, hip-hop cypher, dan kurasi 3 panggung festival musik Jogja Kickboxing Festival di GOR UNY Yogyakarta.",
};

export default async function LineupPage() {
  let performersData: PerformerItem[] = [];

  try {
    const rawPerformers = await prisma.performer.findMany({
      where: { isPublished: true },
      orderBy: { createdAt: "asc" },
    });

    if (rawPerformers && rawPerformers.length > 0) {
      performersData = rawPerformers.map((p) => ({
        id: p.id,
        name: p.name,
        slug: p.slug,
        description: p.description || "Festival Performer JKBF 2026",
        image: p.image || "/images/jkb/hero-concert.jpg",
        stage: p.stage || "THE RING STAGE",
      }));
    }
  } catch (error) {
    console.warn("Falling back to curated lineup data:", error);
  }

  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#0A0A0A] text-[#FAFAFA] pt-20 lg:pt-28 pb-28 overflow-x-hidden">
      
      {/* ═════════════════════════════════════════════════════════════════════
          1. STAGE SCENE HERO (CINEMATIC MUSIC FESTIVAL BANNER)
      ═════════════════════════════════════════════ */}
      <section className="relative w-full border-b border-white/10 bg-[#0A0A0A] overflow-hidden">
        {/* Background Concert Crowd & Stage Lights Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/jkb/hero-concert.jpg"
            alt="Suasana Konser Musik JKBF"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center lg:object-[center_35%] grayscale contrast-125 opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pt-10 pb-12 w-full relative z-10 space-y-6">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 bg-[#D91F2C]" />
            <p className="font-technical text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
              STAGE SCENE • 3 PANGGUNG FESTIVAL
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.85] text-white">
                PANGGUNG MUSIK<br />
                <span className="text-[#D91F2C]">FESTIVAL 2026.</span>
              </h1>
              <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl leading-relaxed">
                Di balik pertarungan sengit di atas ring, dentuman musik rock, hip-hop, dan synthesizer menggema di GOR UNY sepanjang 12–14 Desember 2026.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/jadwal"
                className="font-display text-xs sm:text-sm uppercase tracking-wider text-white bg-[#D91F2C] hover:bg-[#B81521] active:scale-95 px-6 py-3 rounded transition-all inline-flex items-center gap-2 shadow-lg shadow-red-950/50"
              >
                <span>LIHAT RUNDOWN JADWAL LENGKAP</span>
                <span className="font-technical text-xs">↗</span>
              </Link>
              <Link
                href="/tiket"
                className="font-display text-xs sm:text-sm uppercase tracking-wider text-white/90 hover:text-white border border-white/20 hover:border-white px-5 py-3 rounded transition-all inline-flex items-center gap-2 bg-black/40 backdrop-blur-sm"
              >
                <span>INFO TIKET FESTIVAL</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. LINEUP POSTER & STAGE EXPLORATION CLIENT
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-10 w-full flex-1">
        <LineupPosterClient initialPerformers={performersData} />
      </section>

    </main>
  );
}
