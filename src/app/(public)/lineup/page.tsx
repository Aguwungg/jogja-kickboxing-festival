import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Lineup Musik & Panggung Festival | JKBF 2026",
  description: "Deretan musisi dan performa panggung festival musik Jogja Kickboxing Festival di GOR UNY Yogyakarta.",
};

export default async function LineupPage() {
  const performers = await prisma.performer.findMany({
    where: { isPublished: true },
    orderBy: { createdAt: "asc" },
  });

  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#0B0B0B] text-[#F4F0E8] pt-24 lg:pt-28 pb-24 overflow-x-hidden">
      
      {/* ═════════════════════════════════════════════════════════════════════
          1. EDITORIAL SPLIT CONCERT HERO (Matches 07_lineup.png)
      ═════════════════════════════════════════════ */}
      <section className="relative w-full border-b border-white/10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 min-h-[500px] lg:min-h-[560px]">
          
          <div className="lg:col-span-7 py-12 lg:py-20 flex flex-col justify-center space-y-6">
            <p
              className="text-[#D91F2C] text-xs sm:text-sm font-extrabold uppercase tracking-[0.24em]"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              PANGGUNG FESTIVAL • THE STAGE
            </p>

            <h1
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight leading-[0.88] text-white"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              MUSIK.<br />
              JOGJA.<br />
              <span className="text-[#D91F2C]">NYALI.</span>
            </h1>

            <p className="text-sm sm:text-base text-[#8F8E8B] font-sans max-w-lg leading-relaxed">
              Suara dan energi festival di satu panggung terbuka GOR UNY Yogyakarta. Dentuman panggung musik mengiringi atmosfer duel kickboxing.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/jadwal"
                className="font-display font-extrabold text-xs sm:text-sm uppercase tracking-wider text-white bg-[#D91F2C] hover:bg-[#B81521] px-7 py-3.5 transition-colors inline-flex items-center gap-1.5"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                <span>LIHAT RUNDOWN MUSIK ↗</span>
              </Link>
              <Link
                href="/tiket"
                className="font-display font-bold text-xs sm:text-sm uppercase tracking-wider text-white hover:text-[#D91F2C] px-5 py-3.5 transition-colors inline-flex items-center gap-1.5 border border-white/20"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                <span>TIKET FESTIVAL ↗</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full -mx-5 sm:-mx-8 lg:mx-0">
            <Image
              src="/images/v9/06_FOTO_KONSER_PLACEHOLDER_INTERNAL.png"
              alt="Festival Musik JKBF"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent lg:hidden" />
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. LINEUP STATUS & STAGES
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-20 w-full space-y-12">
        <div className="space-y-3">
          <p
            className="text-[#D91F2C] text-xs font-extrabold uppercase tracking-[0.24em]"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            STATUS KURASI PENAMPIL
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tight text-white"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            LINEUP SEGERA DIUMUMKAN.
          </h2>
          <p className="text-sm text-[#8F8E8B] font-sans max-w-xl">
            Pengumuman musisi fase 1 sedang dalam proses finalisasi kurasi. Pantau kanal resmi JKBF untuk rilis serentak.
          </p>
        </div>

        {/* 3 Days Stages Timetable Preview */}
        <div className="border-t border-white/10 divide-y divide-white/10">
          <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
            <span className="text-[#D91F2C] font-mono text-sm font-bold md:col-span-1">01</span>
            <div className="md:col-span-4">
              <h3
                className="text-2xl font-black uppercase text-white"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                SABTU, 12 DESEMBER
              </h3>
              <p className="text-xs text-[#8F8E8B] uppercase tracking-wider mt-0.5">OPEN-AIR STAGE UNY</p>
            </div>
            <p className="text-sm text-[#8F8E8B] md:col-span-5 font-sans leading-relaxed">
              Malam pembuka festival: eksplorasi musik indie rock, pop punk, dan sound kolektif Yogyakarta.
            </p>
            <div className="md:col-span-2 text-left md:text-right">
              <span className="text-xs uppercase font-extrabold text-white tracking-widest font-mono">
                18:30 — 22:30 WIB
              </span>
            </div>
          </div>

          <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
            <span className="text-[#D91F2C] font-mono text-sm font-bold md:col-span-1">02</span>
            <div className="md:col-span-4">
              <h3
                className="text-2xl font-black uppercase text-white"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                MINGGU, 13 DESEMBER
              </h3>
              <p className="text-xs text-[#8F8E8B] uppercase tracking-wider mt-0.5">MAIN STAGE FESTIVAL</p>
            </div>
            <p className="text-sm text-[#8F8E8B] md:col-span-5 font-sans leading-relaxed">
              Puncak pesta musik akhir pekan: deretan headliner nasional berpadu dengan beat kontemporer pemuda.
            </p>
            <div className="md:col-span-2 text-left md:text-right">
              <span className="text-xs uppercase font-extrabold text-white tracking-widest font-mono">
                17:00 — 23:00 WIB
              </span>
            </div>
          </div>

          <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
            <span className="text-[#D91F2C] font-mono text-sm font-bold md:col-span-1">03</span>
            <div className="md:col-span-4">
              <h3
                className="text-2xl font-black uppercase text-white"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                SENIN, 14 DESEMBER
              </h3>
              <p className="text-xs text-[#8F8E8B] uppercase tracking-wider mt-0.5">CHAMPIONSHIP CLOSING</p>
            </div>
            <p className="text-sm text-[#8F8E8B] md:col-span-5 font-sans leading-relaxed">
              Malam seremoni sabuk juara dan panggung selebrasi akbar penutupan Jogja Kickboxing Festival 2026.
            </p>
            <div className="md:col-span-2 text-left md:text-right">
              <span className="text-xs uppercase font-extrabold text-[#D91F2C] tracking-widest font-mono">
                19:00 — 23:30 WIB
              </span>
            </div>
          </div>
        </div>

      </section>

    </main>
  );
}
