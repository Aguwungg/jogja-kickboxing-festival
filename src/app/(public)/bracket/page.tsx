import prisma from "@/lib/prisma";
import BracketClient from "@/components/bracket/BracketClient";
import { GitBranch, Trophy, AlertCircle } from "lucide-react";

export const metadata = {
  title: "Pohon Turnamen (Live Bracket) — JKB 2026",
  description: "Bagan pohon eliminasi langsung turnamen kickboxing Redy Championship 2: Pantau pergerakan petarung dari semifinal hingga perebutan sabuk juara.",
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
    <div className="flex-1 flex flex-col w-full min-h-screen text-[#F6F3EC] bg-[#09090b] pt-24 pb-20">
      {/* Header Banner */}
      <section className="border-b border-white/10 py-12 md:py-16 bg-[#171719]/40 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/5 text-white/80 text-xs font-bold tracking-widest uppercase mb-4">
            <GitBranch className="w-3.5 h-3.5 text-[#EF3340]" />
            BAGAN ELIMINASI REAL-TIME
          </div>

          <h1
            className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-none mb-4"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            POHON TURNAMEN <span className="text-[#EF3340]">& HASIL LAGA</span>
          </h1>

          <p className="text-[#99999F] text-base sm:text-lg font-sans max-w-2xl leading-relaxed">
            Pantau bagan kejuaraan Redy Championship 2 secara real-time. Pilih divisi berat badan untuk melihat alur kemenangan semifinal dan pertarungan final perebutan sabuk emas.
          </p>

          <div className="mt-6 flex items-center gap-2 text-xs text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3.5 py-2 rounded-sm w-fit font-sans">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>Hasil pertandingan diperbarui langsung oleh operator pertandingan sesaat setelah keputusan resmi diumumkan juri.</span>
          </div>
        </div>
      </section>

      {/* Bracket Tree Component */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <BracketClient tournaments={tournaments} />
      </section>
    </div>
  );
}
