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
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#0A0A0A] text-[#FAFAFA] pt-24 lg:pt-32 pb-28">
      
      {/* Header */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-6 pb-8 w-full border-b border-white/10">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-2.5 h-2.5 bg-[#D91F2C]" />
          <p className="font-technical text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
            OFFICIAL MERCHANDISE • STREETWEAR DROP
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.85] text-white">
              TOKO MERCHANDISE<br />
              <span className="text-[#D91F2C]">RESMI 2026.</span>
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-white/60 font-sans max-w-sm sm:text-right">
            Apparel limited edition & fight gear resmi JKBF. Pengambilan langsung di Lobi Barat GOR UNY atau opsi ekspedisi.
          </p>
        </div>
      </section>

      {/* Merch Catalog Grid */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-8 w-full flex-1">
        <MerchCatalogClient initialProducts={products} />
      </section>

    </main>
  );
}
