import React from "react";
import prisma from "@/lib/prisma";
import MerchCatalogClient from "@/components/merch/MerchCatalogClient";

export const metadata = {
  title: "Official Merch Store | JKBF 2026",
  description:
    "Merchandise dan apparel resmi Jogja Kickboxing Festival & Redy Championship 2. Kaos oversized, hoodie heavyweight, dan fight gear. Pengambilan langsung di GOR UNY Yogyakarta.",
};

export default async function MerchPage() {
  const products = await prisma.product.findMany({
    where: { isActive: true },
    include: {
      variants: {
        orderBy: { size: "asc" },
      },
    },
    orderBy: { createdAt: "asc" },
  });

  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#F4F0E8] text-[#0B0B0B] pt-24 lg:pt-28 pb-24">
      
      {/* ═════════════════════════════════════════════════════════════════════
          1. EDITORIAL SPLIT MERCH HERO (Matches 11_merch.png)
      ═════════════════════════════════════════════ */}
      <section className="relative w-full border-b border-black/10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 min-h-[480px] lg:min-h-[540px]">
          
          <div className="lg:col-span-7 py-12 lg:py-20 flex flex-col justify-center space-y-6">
            <p
              className="text-[#D91F2C] text-xs sm:text-sm font-extrabold uppercase tracking-[0.24em]"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              OFFICIAL MERCH • STREETWEAR
            </p>

            <h1
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight leading-[0.88] text-[#0B0B0B]"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              MERCH<br />
              COLLECTION.
            </h1>

            <p className="text-sm sm:text-base text-[#5A5957] font-sans max-w-lg leading-relaxed">
              Fokus pertarungan. Koleksi merchandise resmi festival dan apparel streetwear edisi terbatas #JOGJAPUNYANYALI.
            </p>
          </div>

          {/* Right Minimalist Silhouette */}
          <div className="lg:col-span-5 flex items-center justify-center py-12 lg:py-0 border-t lg:border-t-0 lg:border-l border-black/10">
            <div className="w-56 sm:w-64 aspect-[3/4] bg-[#0B0B0B] flex flex-col items-center justify-center p-6 text-white shadow-xl">
              <span
                className="text-4xl sm:text-5xl font-black tracking-tight"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                JKBF<span className="text-[#D91F2C]">.</span>
              </span>
              <p className="text-[10px] uppercase font-mono tracking-widest text-[#8F8E8B] mt-2">
                OFFICIAL APPAREL
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. MERCH CATALOG GRID
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-16 w-full flex-1">
        <MerchCatalogClient initialProducts={products} />
      </section>

    </main>
  );
}
