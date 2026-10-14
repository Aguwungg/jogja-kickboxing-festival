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
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#0A0A0A] text-[#FAFAFA] pt-24 lg:pt-32 pb-28">
      
      {/* Broadsheet Editorial Header */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pt-6 pb-10 w-full border-b border-white/10">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-2.5 h-2.5 bg-[#D91F2C]" />
          <p className="font-technical text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
            STRUKTUR KOMPETISI • 8-MAN K-1 ELIMINATION
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-8">
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tight leading-[0.85] text-white">
              BAGAN<br />
              <span className="text-[#D91F2C]">TURNAMEN.</span>
            </h1>
          </div>
          <div className="lg:col-span-4 lg:pb-2">
            <p className="text-xs sm:text-sm text-white/60 font-sans leading-relaxed">
              Jalur eliminasi murni perebutan 4 sabuk emas Redy Championship 2. Sudut Merah berhadapan dengan Sudut Biru dalam 3 ronde berkecepatan tinggi.
            </p>
          </div>
        </div>
      </section>

      {/* Bracket Tree Component */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 w-full flex-1 pt-8">
        <BracketClient tournaments={tournaments} />
      </section>

    </main>
  );
}
