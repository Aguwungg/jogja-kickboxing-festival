import React from "react";
import CheckoutClient from "@/components/merch/CheckoutClient";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Checkout Official Merchandise | JKBF 2026",
  description:
    "Selesaikan pemesanan merchandise resmi Jogja Kickboxing Festival. Pilihan pick-up GOR UNY atau pengiriman ekspedisi.",
};

export default function CheckoutPage() {
  return (
    <main className="flex-1 flex flex-col w-full min-h-screen text-[#F4F0E8] bg-[#0B0B0B] pt-24 pb-20">
      
      {/* Editorial Header */}
      <section className="border-b border-white/10 py-12 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Link
            href="/merch"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#8F8E8B] hover:text-[#F4F0E8] uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>KEMBALI KE KATALOG MERCHANDISE</span>
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="v9-overline text-[#D91F2C]">TRANSAKSI PEMBELIAN RESMI</span>
              <h1
                className="v9-display-title text-4xl sm:text-5xl text-[#F4F0E8] mt-1"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                CHECKOUT PESANAN
              </h1>
            </div>

            <div className="flex items-center gap-2 bg-[#141416] border border-white/10 px-4 py-2 text-xs font-mono text-[#8F8E8B]">
              <ShieldCheck className="w-4 h-4 text-[#D91F2C]" />
              <span>SISTEM PESANAN RESMI JKBF</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Checkout Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex-1">
        <CheckoutClient />
      </div>

    </main>
  );
}
