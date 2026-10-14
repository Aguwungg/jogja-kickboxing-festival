"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { formatRupiah } from "@/lib/currency";

interface PPVProduct {
  id: string;
  name: string;
  slug: string;
  tier: string;
  badge: string | null;
  description: string;
  features: string | null;
  resolution: string;
  price: number;
  order: number;
  isActive: boolean;
}

interface Props {
  products: PPVProduct[];
}

export default function PpvLandingClient({ products }: Props) {
  const router = useRouter();
  const [accessCodeInput, setAccessCodeInput] = useState("");

  const handleAccessSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!accessCodeInput.trim()) return;
    router.push(`/ppv/watch?code=${encodeURIComponent(accessCodeInput.trim())}`);
  };

  return (
    <div className="w-full space-y-16 font-sans">
      
      {/* Code Input Box */}
      <div className="max-w-xl mx-auto space-y-4 text-center bg-[#141416] p-8 border border-white/10 ring-corner-frame">
        <span className="text-xs font-technical uppercase text-[#D91F2C] tracking-widest font-bold">
          PUNYA KODE AKSES TIKET?
        </span>
        <h3 className="font-display text-3xl uppercase tracking-wider text-white">
          MASUKKAN KODE STREAMING
        </h3>
        <p className="text-xs text-[#8F8E8B] leading-relaxed">
          Gunakan kode unik yang tertera pada e-voucher tiket streaming Anda untuk membuka pemutar video.
        </p>

        <form onSubmit={handleAccessSubmit} className="flex gap-2 pt-2">
          <input
            type="text"
            value={accessCodeInput}
            onChange={(e) => setAccessCodeInput(e.target.value)}
            placeholder="CONTOH: JKB-VIP-2026"
            className="flex-1 bg-[#18181B] border border-white/20 px-4 py-3 text-xs font-technical uppercase text-white placeholder-[#5A5957] focus:outline-none focus:border-[#D91F2C]"
          />
          <button
            type="submit"
            className="font-display text-sm uppercase tracking-wider text-white bg-[#D91F2C] hover:bg-[#B81521] px-6 py-3 transition-colors shrink-0 shadow-sm"
          >
            MASUK ↗
          </button>
        </form>
      </div>

      {/* Planned Packages List in Open Rows */}
      <div className="space-y-8 pt-8 border-t border-white/10">
        <div>
          <span className="text-[#D91F2C] font-technical text-xs font-bold uppercase tracking-[0.25em] mb-1 block">
            RENCANA PAKET SIARAN
          </span>
          <h2 className="font-display text-4xl sm:text-5xl uppercase tracking-tight text-white">
            PILIHAN AKSES DIGITAL.
          </h2>
        </div>

        <div className="border-t border-white/10 divide-y divide-white/10">
          {products.map((p) => (
            <div
              key={p.id}
              className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline px-2 hover:bg-white/[0.02] transition-colors"
            >
              <span className="text-[#D91F2C] font-technical text-sm font-bold md:col-span-1">
                {(p.order || 1).toString().padStart(2, "0")}
              </span>
              <div className="md:col-span-4 space-y-1">
                <h3 className="font-display text-3xl uppercase tracking-wider text-white">
                  {p.name}
                </h3>
                <span className="font-technical text-[10px] uppercase font-bold tracking-widest text-[#77716D] block">
                  RESOLUSI: {p.resolution} • TIER: {p.tier}
                </span>
              </div>
              <p className="text-sm text-[#8F8E8B] md:col-span-5 font-sans leading-relaxed">
                {p.description}
              </p>
              <div className="md:col-span-2 text-left md:text-right font-technical">
                <span className="text-sm font-bold text-white block">
                  {formatRupiah(p.price)}
                </span>
                <span className="text-[10px] text-[#77716D] uppercase">
                  {p.isActive ? "TERSEDIA" : "DITANGGUHKAN"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
