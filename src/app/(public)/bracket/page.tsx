import prisma from "@/lib/prisma";
import BracketClient from "@/components/bracket/BracketClient";
import { GitBranch, AlertCircle } from "lucide-react";

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
    <main className="flex-1 flex flex-col w-full min-h-screen text-[#F4F0E8] bg-[#0B0B0B] pt-24 pb-20">
      
      {/* Header */}
      <section className="border-b border-white/10 py-16 md:py-20 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="v9-overline text-[#D91F2C]">
            REDY CHAMPIONSHIP 2 / ELIMINASI GUGUR
          </span>

          <h1
            className="v9-display-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F4F0E8]"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            BAGAN TURNAMEN
          </h1>

          <p className="text-xs sm:text-sm text-[#8F8E8B] font-sans max-w-2xl leading-relaxed">
            Struktur alur pertandingan babak gugur per divisi berat badan. Dari babak semifinal hingga partai puncak perebutan sabuk emas Redy Championship 2.
          </p>

          <div className="p-4 bg-[#141416] border-l-2 border-[#D91F2C] text-xs text-[#8F8E8B] space-y-1 max-w-2xl">
            <p className="font-bold text-[#F4F0E8] uppercase tracking-wider font-display">
              PEMBERITAHUAN STRUKTUR TURNAMEN
            </p>
            <p>
              Drawing resmi pasangan atlet akan disahkan saat Technical Meeting pasca-sesi timbang badan (12 Desember 2026). Bagan di bawah menyajikan simulasi arsitektur kompetisi.
            </p>
          </div>
        </div>
      </section>

      {/* Bracket Tree Component */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <BracketClient tournaments={tournaments} />
      </section>

    </main>
  );
}
