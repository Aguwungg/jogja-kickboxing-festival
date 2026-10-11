import React from "react";
import prisma from "@/lib/prisma";
import PpvLandingClient from "@/components/ppv/PpvLandingClient";
import { Radio, Flame, Sparkles } from "lucide-react";

export const metadata = {
  title: "Pay-Per-View Live Streaming — JKB 2026",
  description:
    "Saksikan siaran langsung resmi Jogja Kickboxing Festival & Redy Championship 2 dari GOR Among Rogo. Partai ekshibisi selebriti BigMo dan laga final 4 sabuk juara dalam kualitas Ultra-HD 60 FPS.",
};

export default async function PpvPage() {
  const ppvProducts = await prisma.pPVProduct.findMany({
    where: { isActive: true },
    orderBy: { order: "asc" },
  });

  return (
    <div className="flex-1 flex flex-col w-full min-h-screen text-[#F6F3EC] bg-[#09090b] pt-24 pb-20">
      {/* Hero Header Section */}
      <section className="border-b border-white/10 py-12 md:py-20 bg-[#171719]/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/5 text-white/80 text-xs font-bold tracking-widest uppercase mb-4">
            <Radio className="w-3.5 h-3.5 text-[#EF3340] animate-pulse" />
            <span>OFFICIAL GLOBAL BROADCAST & PAY-PER-VIEW</span>
          </div>

          <h1
            className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-none mb-4"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            RINGSIDE SEAT. <span className="text-[#EF3340]">FROM ANYWHERE.</span>
          </h1>

          <p className="text-[#99999F] text-base sm:text-lg font-sans max-w-3xl leading-relaxed mb-6">
            Bagi pendukung yang tidak dapat hadir langsung di GOR Among Rogo Yogyakarta, saksikan benturan 80 petarung memperebutkan 4 sabuk emas Redy Championship 2, BigMo Exhibition Match, dan panggung musik festival dalam kualitas siaran Ultra-HD 60 FPS multi-kamera.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-xs text-white/70 font-sans">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Multi-Cam Ringside Switcher</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#EF3340]" />
              <span>Ultra-HD 1080p & 4K 60FPS</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>30 Hari Replay VOD Akses Penuh</span>
            </div>
          </div>
        </div>

        {/* Ambient Gradient Glows */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#EF3340]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Main PPV Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex-1">
        <PpvLandingClient products={ppvProducts} />
      </main>
    </div>
  );
}
