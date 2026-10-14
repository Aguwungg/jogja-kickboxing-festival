import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import { ArrowUpRight } from "lucide-react";

export default async function FighterDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const fighter = await prisma.athlete.findUnique({
    where: { slug },
  });

  if (!fighter || !fighter.isPublished) {
    notFound();
  }

  const relatedFighters = await prisma.athlete.findMany({
    where: {
      isPublished: true,
      id: { not: fighter.id },
      division: fighter.division,
    },
    take: 3,
  });

  const totalFights = fighter.wins + fighter.losses + fighter.draws;

  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#F4F0E8] text-[#0B0B0B] pt-24 lg:pt-28 pb-24 overflow-x-hidden">
      
      {/* Breadcrumb */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-4 w-full flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5A5957] border-b border-black/10">
        <Link href="/" className="hover:text-black transition-colors">BERANDA</Link>
        <span>/</span>
        <Link href="/fighters" className="hover:text-black transition-colors">DAFTAR PETARUNG</Link>
        <span>/</span>
        <span className="text-[#D91F2C] font-bold">{fighter.name}</span>
      </div>

      {/* ═════════════════════════════════════════════════════════════════════
          1. EDITORIAL SPLIT PROFILE HERO
      ═════════════════════════════════════════════ */}
      <section className="relative w-full border-b border-black/10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 min-h-[500px] lg:min-h-[560px]">
          
          {/* Left Fighter Details */}
          <div className="lg:col-span-7 py-12 lg:py-20 flex flex-col justify-center space-y-6">
            <p
              className="text-[#D91F2C] text-xs sm:text-sm font-extrabold uppercase tracking-[0.24em]"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              REDY CHAMPIONSHIP 2 • {fighter.division}
            </p>

            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.88] text-[#0B0B0B]"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              {fighter.name}
            </h1>

            <p className="text-sm sm:text-base text-[#5A5957] font-sans max-w-lg leading-relaxed">
              {fighter.club ? `Sasana / Tim: ${fighter.club}.` : "Petarung Independen."} Bertarung di divisi {fighter.division} dengan batas bobot {fighter.weightClass}.
            </p>

            {/* Fighter Record Summary */}
            <div className="pt-2 flex items-center gap-8 font-mono border-t border-black/10 pt-6">
              <div>
                <span className="text-[10px] text-[#8F8E8B] uppercase tracking-widest block">MENANG</span>
                <span className="text-3xl font-black text-[#0B0B0B]">{fighter.wins}</span>
              </div>
              <div className="border-l border-black/10 pl-8">
                <span className="text-[10px] text-[#8F8E8B] uppercase tracking-widest block">KALAH</span>
                <span className="text-3xl font-black text-[#5A5957]">{fighter.losses}</span>
              </div>
              <div className="border-l border-black/10 pl-8">
                <span className="text-[10px] text-[#8F8E8B] uppercase tracking-widest block">SERI</span>
                <span className="text-3xl font-black text-[#5A5957]">{fighter.draws}</span>
              </div>
            </div>
          </div>

          {/* Right Fighter Photo */}
          <div className="lg:col-span-5 relative min-h-[360px] lg:min-h-full -mx-5 sm:-mx-8 lg:mx-0 bg-[#141416]">
            <Image
              src={fighter.image || "/images/v9/04_FOTO_FIGHT_DESKTOP_TANPA_TEKST.png"}
              alt={fighter.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-top grayscale contrast-125"
            />
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. TALE OF THE TAPE & VERIFIED DATA
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-20 w-full space-y-12">
        <div className="space-y-3">
          <p
            className="text-[#D91F2C] text-xs font-extrabold uppercase tracking-[0.24em]"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            SPESIFIKASI FISIK & ATLET
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#0B0B0B]"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            TALE OF THE TAPE.
          </h2>
        </div>

        {/* Clean Tale of the Tape Rows */}
        <div className="border-t border-black/10 divide-y divide-black/10">
          <div className="py-5 grid grid-cols-2 md:grid-cols-4 gap-4 items-baseline">
            <span className="text-xs font-mono uppercase text-[#8F8E8B]">Divisi Resmi</span>
            <span className="text-sm font-bold text-[#0B0B0B] md:col-span-3">{fighter.division}</span>
          </div>
          <div className="py-5 grid grid-cols-2 md:grid-cols-4 gap-4 items-baseline">
            <span className="text-xs font-mono uppercase text-[#8F8E8B]">Kelas Bobot</span>
            <span className="text-sm font-bold text-[#0B0B0B] md:col-span-3">{fighter.weightClass}</span>
          </div>
          <div className="py-5 grid grid-cols-2 md:grid-cols-4 gap-4 items-baseline">
            <span className="text-xs font-mono uppercase text-[#8F8E8B]">Sasana / Camp</span>
            <span className="text-sm font-bold text-[#0B0B0B] md:col-span-3">{fighter.club || "Independen"}</span>
          </div>
          <div className="py-5 grid grid-cols-2 md:grid-cols-4 gap-4 items-baseline">
            <span className="text-xs font-mono uppercase text-[#8F8E8B]">Total Laga Profesional</span>
            <span className="text-sm font-bold text-[#0B0B0B] md:col-span-3">{totalFights} Pertandingan</span>
          </div>
        </div>

        {/* Related Fighters in same division */}
        {relatedFighters.length > 0 && (
          <div className="pt-12 border-t border-black/10 space-y-6">
            <h3
              className="text-2xl sm:text-3xl font-black uppercase text-[#0B0B0B]"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              PETARUNG LAIN DI DIVISI {fighter.division}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedFighters.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/fighters/${rel.slug}`}
                  className="group border border-black/10 bg-white/40 p-4 block hover:bg-white/80 transition-all"
                >
                  <div className="relative aspect-[4/5] w-full bg-[#141416] mb-3 overflow-hidden">
                    <Image
                      src={rel.image || "/images/v9/04_FOTO_FIGHT_DESKTOP_TANPA_TEKST.png"}
                      alt={rel.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover object-top grayscale contrast-125 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4
                    className="text-lg font-black uppercase tracking-tight text-[#0B0B0B] group-hover:text-[#D91F2C] transition-colors"
                    style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                  >
                    {rel.name}
                  </h4>
                  <p className="text-xs text-[#5A5957] font-sans mt-0.5">{rel.club || "Independen"}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

      </section>

    </main>
  );
}
