import React from "react";
import prisma from "@/lib/prisma";
import MerchCatalogClient from "@/components/merch/MerchCatalogClient";
import { ShieldCheck, Truck, MapPin } from "lucide-react";

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
    <main className="flex-1 flex flex-col w-full min-h-screen text-[#F4F0E8] bg-[#0B0B0B] pt-24 pb-20">
      
      {/* Editorial Header */}
      <section className="relative w-full border-b border-white/10 py-16 md:py-24 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="v9-overline text-[#D91F2C]">
            APPAREL RESMI & FIGHT GEAR
          </span>

          <h1
            className="v9-display-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F4F0E8]"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            OFFICIAL MERCH
          </h1>

          <p className="text-base sm:text-lg text-[#F4F0E8] font-bold uppercase tracking-wider font-display">
            WEAR THE GLORY. REP THE CITY.
          </p>

          <p className="text-xs sm:text-sm text-[#8F8E8B] max-w-2xl leading-relaxed font-sans">
            Koleksi merchandise resmi Redy Championship 2 dan festival musik Jogja Kickboxing Festival. Menggunakan material heavyweight premium, cutting streetwear modern, dan grafis kampanye #JOGJAPUNYANYALI.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-mono text-[#8F8E8B]">
            <span className="flex items-center gap-1.5 text-[#F4F0E8]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D91F2C]" />
              PRODUK RESMI TERVERIFIKASI
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#D91F2C]" />
              PICK-UP DI GOR UNY (12—14 DES)
            </span>
            <span className="flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-[#D91F2C]" />
              PENGIRIMAN NASIONAL
            </span>
          </div>
        </div>
      </section>

      {/* Catalog Client */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex-1">
        <MerchCatalogClient initialProducts={products as any} />
      </section>

    </main>
  );
}
