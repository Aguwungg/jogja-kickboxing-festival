"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { formatRupiah } from "@/lib/currency";
import {
  Radio,
  Tv,
  Lock,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";

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
      
      {/* Broadcast Gate Notice */}
      <div className="p-6 bg-[#141416] border-l-2 border-[#D91F2C] space-y-2 max-w-3xl mx-auto">
        <div className="flex items-center gap-2 text-xs font-mono text-[#D91F2C] font-bold">
          <ShieldAlert className="w-4 h-4" />
          <span>STATUS PENYIARAN RESMI</span>
        </div>
        <p className="text-xs text-[#8F8E8B] leading-relaxed">
          Otorisasi hak siar digital Pay-Per-View saat ini sedang dalam proses finalisasi komite teknis penyiaran. Pembelian paket siaran publik dibuka setelah pengesahan jadwal siaran resmi (12—14 Desember 2026).
        </p>
      </div>

      {/* Quick Access Code Box */}
      <div className="bg-[#141416] border border-white/10 p-8 max-w-xl mx-auto text-center space-y-5">
        <div className="w-10 h-10 mx-auto bg-[#0B0B0B] border border-white/10 flex items-center justify-center text-[#D91F2C]">
          <Lock className="w-5 h-5" />
        </div>

        <div className="space-y-1">
          <h3 className="v9-display-title text-2xl text-[#F4F0E8]" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
            PUNYA KODE AKSES TIKET STREAMING?
          </h3>
          <p className="text-xs text-[#8F8E8B]">
            Masukkan kode akses digital yang tertera pada e-voucher Anda untuk masuk ke ruang siaran.
          </p>
        </div>

        <form onSubmit={handleAccessSubmit} className="flex gap-2">
          <input
            type="text"
            value={accessCodeInput}
            onChange={(e) => setAccessCodeInput(e.target.value)}
            placeholder="CONTOH: JKBF-2026-XXXX"
            className="flex-1 bg-[#0B0B0B] border border-white/10 px-3.5 py-2.5 text-xs font-mono uppercase text-[#F4F0E8] placeholder-[#5A5957] focus:outline-none focus:border-[#D91F2C]"
          />
          <button
            type="submit"
            className="v9-btn-red text-xs font-display font-black tracking-wider px-5"
          >
            <span>MASUK</span>
            <span>↗</span>
          </button>
        </form>
      </div>

      {/* Planned Packages Overview */}
      <div className="space-y-6">
        <div className="border-b border-white/10 pb-3 flex justify-between items-baseline">
          <div>
            <span className="v9-overline text-[#D91F2C]">RENCANA PAKET SIARAN</span>
            <h2 className="v9-display-title text-3xl text-[#F4F0E8] mt-1" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
              OPSI AKSES LIVE BROADCAST
            </h2>
          </div>
          <span className="text-xs font-mono text-[#8F8E8B]">
            MENUNGGU JADWAL RILIS RESMI
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.id} className="p-6 bg-[#141416] border border-white/10 space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] text-[#D91F2C] font-mono tracking-widest uppercase block">
                  {p.resolution} • {p.tier}
                </span>
                <h3 className="v9-display-title text-2xl text-[#F4F0E8]" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
                  {p.name}
                </h3>
                <p className="text-xs text-[#8F8E8B] leading-relaxed">
                  {p.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-3 font-mono">
                <span className="text-xl font-bold text-[#F4F0E8] block">
                  {formatRupiah(p.price)}
                </span>
                <button
                  type="button"
                  disabled
                  className="w-full py-2.5 bg-[#0B0B0B] border border-white/10 text-xs font-bold uppercase tracking-wider text-[#8F8E8B] cursor-not-allowed"
                >
                  SEGERA DIUMUMKAN
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
