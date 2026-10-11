import React from "react";
import CheckoutClient from "@/components/merch/CheckoutClient";
import { ShieldCheck, Lock } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Checkout Official Merchandise — JKB 2026",
  description:
    "Selesaikan pesanan merchandise resmi Jogja Kickboxing Festival & Redy Championship 2. Pilihan ambil di venue GOR UNY atau pengiriman ekspedisi ke seluruh Indonesia.",
};

export default function CheckoutPage() {
  return (
    <div className="flex-1 flex flex-col w-full min-h-screen text-[#F6F3EC] bg-[#09090b] pt-24 pb-20">
      {/* Header bar */}
      <section className="border-b border-white/10 py-8 bg-[#171719]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#90929A] mb-1">
              <Link href="/merch" className="hover:text-white transition-colors">
                &larr; Lanjut Belanja
              </Link>
            </div>
            <h1
              className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white leading-none"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              CHECKOUT & PEMBAYARAN <span className="text-[#EF3340]">MERCHANDISE</span>
            </h1>
          </div>

          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-sm text-xs text-white/80 self-start sm:self-auto font-mono">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            <span>256-Bit Encrypted Checkout</span>
          </div>
        </div>
      </section>

      {/* Main Form Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-1">
        <CheckoutClient />
      </main>
    </div>
  );
}
