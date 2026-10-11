"use client";

import React, { useState } from "react";
import { simulateOrderPaymentAction } from "@/app/(public)/checkout/actions";
import { Zap, CheckCircle2, AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";

interface SimulatePaymentButtonProps {
  orderId: string;
}

export default function SimulatePaymentButton({ orderId }: SimulatePaymentButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSimulate = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await simulateOrderPaymentAction(orderId);
      if (res.success) {
        router.refresh();
      } else {
        setError(res.error || "Gagal memproses simulasi pembayaran.");
      }
    } catch (err: any) {
      setError(err.message || "Terjadi kesalahan internal.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-sm space-y-3">
      <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider font-mono">
        <Zap className="w-4 h-4 text-amber-400" />
        <span>PENGUJIAN STAGING: SIMULATOR PEMBAYARAN</span>
      </div>
      <p className="text-xs text-[#90929A] leading-relaxed">
        Pesanan ini berstatus <strong>UNPAID</strong> (Default Aman). Klik tombol di bawah untuk menyimulasikan penyelesaian pembayaran (hanya berlaku pada lingkungan non-produksi / staging).
      </p>

      {error && (
        <div className="flex items-center gap-2 text-red-400 text-xs bg-red-500/10 p-2 rounded-xs border border-red-500/20">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <button
        onClick={handleSimulate}
        disabled={loading}
        className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-black font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-xs transition-all shadow-md font-mono"
      >
        <CheckCircle2 className="w-3.5 h-3.5" />
        <span>{loading ? "Menyimulasikan Pembayaran..." : "Konfirmasi Pembayaran Staging (Simulasi)"}</span>
      </button>
    </div>
  );
}
