import prisma from "@/lib/prisma";
import PpvLandingClient from "@/components/ppv/PpvLandingClient";

export const metadata = {
  title: "Pay-Per-View Live Stream | JKBF 2026",
  description: "Siaran langsung resmi pertandingan kickboxing Redy Championship 2 dan panggung musik festival Jogja Kickboxing Festival.",
};

export default async function PpvLandingPage() {
  const products = await prisma.pPVProduct.findMany({
    orderBy: { order: "asc" },
  });

  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#0B0B0B] text-[#F4F0E8] pt-24 lg:pt-28 pb-24 overflow-x-hidden">
      
      {/* ═════════════════════════════════════════════════════════════════════
          1. EDITORIAL SPLIT PPV HERO (Matches 22_ppv.png)
      ═════════════════════════════════════════════ */}
      <section className="relative w-full border-b border-white/10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 min-h-[480px] lg:min-h-[540px]">
          
          <div className="lg:col-span-7 py-12 lg:py-20 flex flex-col justify-center space-y-6">
            <p
              className="text-[#D91F2C] text-xs sm:text-sm font-extrabold uppercase tracking-[0.24em]"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              SIARAN DIGITAL • LIVE PPV
            </p>

            <h1
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight leading-[0.88] text-white"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              NONTON<br />
              DARI MANA SAJA.
            </h1>

            <p className="text-sm sm:text-base text-[#8F8E8B] font-sans max-w-lg leading-relaxed">
              Siaran langsung multi-kamera laga kickboxing Redy Championship 2. Akses siaran menunggu pengesahan resmi mitra penyiaran.
            </p>
          </div>

          {/* Minimalist Player Frame Right */}
          <div className="lg:col-span-5 flex items-center justify-center py-12 lg:py-0 border-t lg:border-t-0 lg:border-l border-white/10">
            <div className="w-full max-w-sm aspect-video bg-[#141416] border border-white/10 flex flex-col items-center justify-center text-center p-6 space-y-2">
              <span className="w-3 h-3 rounded-full bg-[#D91F2C] animate-pulse" />
              <p
                className="text-lg font-black uppercase tracking-wider text-white"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                LIVE BROADCAST
              </p>
              <p className="text-[10px] font-mono text-[#8F8E8B] uppercase">
                GOR UNY • 12–14 DESEMBER 2026
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. ACCESS FORM & PACKAGES
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-20 w-full flex-1">
        <PpvLandingClient products={products} />
      </section>

    </main>
  );
}
