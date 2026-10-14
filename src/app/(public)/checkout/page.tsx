import React from "react";
import CheckoutClient from "@/components/merch/CheckoutClient";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Checkout Official Merchandise | JKBF 2026",
  description:
    "Selesaikan pemesanan merchandise resmi Jogja Kickboxing Festival. Pilihan pick-up GOR UNY atau pengiriman ekspedisi.",
};

export default function CheckoutPage() {
  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#F4F0E8] text-[#0B0B0B] pt-24 lg:pt-28 pb-24">
      
      {/* Editorial Header */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pt-8 pb-10 w-full border-b border-black/10">
        <Link
          href="/merch"
          className="inline-flex items-center gap-1.5 text-xs font-technical text-[#77716D] hover:text-black uppercase tracking-wider transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>KEMBALI KE KATALOG MERCHANDISE</span>
        </Link>

        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#D91F2C]" />
          <p className="font-technical text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
            TRANSAKSI TERPROTEKSI • CHECKOUT RESMI
          </p>
        </div>

        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tight leading-[0.85] text-[#0B0B0B]">
          CHECKOUT.
        </h1>

        <p className="text-sm sm:text-base text-[#5A5957] max-w-xl font-sans mt-3 leading-relaxed">
          Lengkapi data pemesan untuk reservasi produk resmi dan pemilihan metode pengambilan di GOR UNY atau ekspedisi.
        </p>
      </section>

      {/* Main Checkout Form */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-12 w-full flex-1">
        <CheckoutClient />
      </div>

    </main>
  );
}
