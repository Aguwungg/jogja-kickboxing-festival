import prisma from "@/lib/prisma";
import BracketClient from "@/components/bracket/BracketClient";

export const metadata = {
  title: "Bagan Turnamen Kickboxing — Redy Championship 2 | JKBF 2026",
  description: "Bagan pohon turnamen eliminasi langsung kejuaraan kickboxing Redy Championship 2 di GOR UNY Yogyakarta.",
};

export default async function BracketPage() {
  const tournaments = await prisma.tournament.findMany({
    where: { status: "ACTIVE" },
    include: {
      matches: {
        include: {
          athlete1: true,
          athlete2: true,
          winner: true,
        },
      },
    },
    orderBy: { name: "asc" },
  });

  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#F4F0E8] text-[#0B0B0B] pt-24 lg:pt-28 pb-24">
      
      {/* Editorial Header */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pt-8 pb-12 w-full">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#D91F2C]" />
          <p className="font-technical text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
            STRUKTUR KOMPETISI • 8-MAN ELIMINATION
          </p>
        </div>

        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tight leading-[0.85] text-[#0B0B0B] mb-5">
          BAGAN<br />
          TURNAMEN.
        </h1>

        <p className="text-sm sm:text-base text-[#5A5957] max-w-xl font-sans leading-relaxed">
          Ronde, bagan turnamen, dan alur eliminasi perebutan sabuk emas. Menampilkan struktur bagan resmi tanpa manipulasi hasil fiktif.
        </p>
      </section>

      {/* Bracket Tree Component */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 w-full flex-1">
        <BracketClient tournaments={tournaments} />
      </section>

    </main>
  );
}
