import React from "react";
import prisma from "@/lib/prisma";
import MerchCatalogClient from "@/components/merch/MerchCatalogClient";
import { ShoppingBag, Flame, Sparkles } from "lucide-react";

export const metadata = {
  title: "Official Merch Store — JKB 2026",
  description:
    "Beli merchandise dan apparel resmi Jogja Kickboxing Festival & Redy Championship 2. Kaos oversized, hoodie heavyweight, handwrap, dan gloves standar pro. Free pick up di GOR UNY Yogyakarta.",
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
    <div className="flex-1 flex flex-col w-full min-h-screen text-[#F6F3EC] bg-[#09090b] pt-24 pb-20">
      {/* Hero Header Section */}
      <section className="border-b border-white/10 py-12 md:py-20 bg-[#171719]/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/5 text-white/80 text-xs font-bold tracking-widest uppercase mb-4">
            <Flame className="w-3.5 h-3.5 text-[#EF3340]" />
            OFFICIAL FESTIVAL MERCHANDISE & FIGHT GEAR
          </div>

          <h1
            className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-none mb-4"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            WEAR THE GLORY. <span className="text-[#EF3340]">REP THE CITY.</span>
          </h1>

          <p className="text-[#99999F] text-base sm:text-lg font-sans max-w-3xl leading-relaxed mb-6">
            Koleksi resmi apparel pertarungan, perlengkapan latihan standar kejuaraan, dan cenderamata eksklusif Redy Championship 2. Tersedia pengambilan langsung gratis di GOR UNY Yogyakarta atau pengiriman ekspedisi ke seluruh Indonesia.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-xs text-white/70 font-sans">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Stok Resmi Terverifikasi</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#EF3340]" />
              <span>Edisi Terbatas Festival 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Free On-Site Pickup 12-14 Desember</span>
            </div>
          </div>
        </div>

        {/* Ambient Gradient Glows */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#EF3340]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Main Catalog Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex-1">
        <MerchCatalogClient initialProducts={products} />
      </main>
    </div>
  );
}
