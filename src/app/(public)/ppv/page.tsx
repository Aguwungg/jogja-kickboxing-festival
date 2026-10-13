import React from "react";
import prisma from "@/lib/prisma";
import PpvLandingClient from "@/components/ppv/PpvLandingClient";
import { Radio } from "lucide-react";

export const metadata = {
  title: "Pay-Per-View Live Streaming | JKBF 2026",
  description:
    "Informasi platform siaran langsung Pay-Per-View Redy Championship 2 dan Jogja Kickboxing Festival di GOR UNY Yogyakarta.",
};

export default async function PpvPage() {
  const ppvProducts = await prisma.pPVProduct.findMany({
    orderBy: { order: "asc" },
  });

  return (
    <main className="flex-1 flex flex-col w-full min-h-screen text-[#F4F0E8] bg-[#0B0B0B] pt-24 pb-20">
      
      {/* Editorial Header */}
      <section className="relative w-full border-b border-white/10 py-16 md:py-24 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2">
            <Radio className="w-4 h-4 text-[#D91F2C] animate-pulse" />
            <span className="v9-overline text-[#D91F2C]">
              OFFICIAL BROADCAST & DIGITAL STREAMING
            </span>
          </div>

          <h1
            className="v9-display-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F4F0E8]"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            PAY-PER-VIEW STREAM
          </h1>

          <p className="text-base sm:text-lg text-[#F4F0E8] font-bold uppercase tracking-wider font-display">
            SIARAN DIGITAL LANGSUNG DARI ARENA GOR UNY
          </p>

          <p className="text-xs sm:text-sm text-[#8F8E8B] max-w-2xl leading-relaxed font-sans">
            Layanan siaran langsung resmi partai kejuaraan kickboxing Redy Championship 2 bagi penonton yang menyaksikan dari luar kota atau luar arena. Menghadirkan feed multi-kamera dan audio komentator resmi.
          </p>
        </div>
      </section>

      {/* Main PPV Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex-1">
        <PpvLandingClient products={ppvProducts as any} />
      </section>

    </main>
  );
}
