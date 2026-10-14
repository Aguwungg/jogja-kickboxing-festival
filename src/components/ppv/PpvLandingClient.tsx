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
      <div className="max-w-xl mx-auto space-y-4 text-center">
        <span className="text-xs font-mono uppercase text-[#D91F2C] tracking-widest font-bold">
          PUNYA KODE AKSES TIKET?
        </span>
        <h3
          className="text-3xl font-black uppercase text-white"
          style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
        >
          MASUKKAN KODE STREAMING
        </h3>
        <p className="text-xs text-[#8F8E8B]">
          Gunakan kode unik yang tertera pada e-voucher tiket streaming Anda untuk membuka pemutar video.
        </p>

        <form onSubmit={handleAccessSubmit} className="flex gap-2 pt-2">
          <input
            type="text"
            value={accessCodeInput}
            onChange={(e) => setAccessCodeInput(e.target.value)}
            placeholder="CONTOH: JKBF-STREAM-XXXX"
            className="flex-1 bg-[#141416] border border-white/20 px-4 py-3 text-xs font-mono uppercase text-white placeholder-[#5A5957] focus:outline-none focus:border-[#D91F2C]"
          />
          <button
            type="submit"
            className="font-display font-extrabold text-xs uppercase tracking-wider text-white bg-[#D91F2C] hover:bg-[#B81521] px-6 py-3 transition-colors"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            MASUK ↗
          </button>
        </form>
      </div>

      {/* Planned Packages List in Open Rows */}
      <div className="space-y-8 pt-8 border-t border-white/10">
        <div>
          <span className="text-[#D91F2C] text-xs font-extrabold uppercase tracking-[0.24em] mb-1 block">
            RENCANA PAKET SIARAN
          </span>
          <h2
            className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            PILIHAN AKSES DIGITAL.
          </h2>
        </div>

        <div className="border-t border-white/10 divide-y divide-white/10">
          {products.map((p) => (
            <div
              key={p.id}
              className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline"
            >
              <span className="text-[#D91F2C] font-mono text-sm font-bold md:col-span-1">
                {(p.order || 1).toString().padStart(2, "0")}
              </span>
              <div className="md:col-span-4 space-y-0.5">
                <h3
                  className="text-2xl font-black uppercase text-white"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  {p.name}
                </h3>
                <span className="text-xs uppercase font-mono text-[#8F8E8B]">{p.resolution}</span>
              </div>
              <p className="text-sm text-[#8F8E8B] md:col-span-4 font-sans leading-relaxed">
                {p.description}
              </p>
              <div className="md:col-span-3 text-left md:text-right space-y-1">
                <span className="text-base font-black text-white font-mono block">
                  {formatRupiah(p.price)}
                </span>
                <span className="text-[10px] uppercase font-mono text-[#5A5957] block">
                  MENUNGGU HAK SIAR
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
