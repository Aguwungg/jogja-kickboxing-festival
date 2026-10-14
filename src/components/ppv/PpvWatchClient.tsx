"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { verifyAccessCodeAction } from "@/app/(public)/ppv/actions";
import { ArrowLeft, AlertCircle, CheckCircle2 } from "lucide-react";

interface Props {
  initialCode?: string;
}

export default function PpvWatchClient({ initialCode }: Props) {
  const [accessCode, setAccessCode] = useState(initialCode || "");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [verificationLoading, setVerificationLoading] = useState(false);
  const [verificationError, setVerificationError] = useState<string | null>(null);

  const [ticketDetails, setTicketDetails] = useState<{
    customerName: string | null;
    productName: string;
    tier: string;
    resolution: string;
  } | null>(null);

  useEffect(() => {
    if (initialCode) {
      handleVerify(initialCode);
    }
  }, [initialCode]);

  const handleVerify = async (codeToVerify: string) => {
    if (!codeToVerify.trim()) return;
    setVerificationLoading(true);
    setVerificationError(null);

    const res = await verifyAccessCodeAction(codeToVerify);
    if (res.valid && res.entitlement) {
      setIsUnlocked(true);
      setTicketDetails({
        customerName: res.entitlement.customerName,
        productName: res.entitlement.productName,
        tier: res.entitlement.tier,
        resolution: res.entitlement.resolution,
      });
    } else {
      setIsUnlocked(false);
      setVerificationError(res.error || "Kode akses tidak valid atau belum diaktifkan.");
    }
    setVerificationLoading(false);
  };

  return (
    <div className="w-full space-y-10 font-sans">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <Link
          href="/ppv"
          className="inline-flex items-center gap-1.5 text-xs font-technical text-[#8F8E8B] hover:text-white uppercase tracking-wider transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>KEMBALI KE PPV STREAM</span>
        </Link>
        <span className="text-xs font-technical text-[#D91F2C] uppercase font-bold">
          • LIVE FEED STANDBY (GOR UNY ARENA)
        </span>
      </div>

      {!isUnlocked ? (
        /* Code Input Gate */
        <div className="border border-white/15 bg-[#141416] p-8 sm:p-14 text-center max-w-xl mx-auto space-y-6 ring-corner-frame">
          <div className="space-y-2">
            <span className="text-xs font-technical uppercase text-[#D91F2C] tracking-widest font-bold">
              VERIFIKASI TIKET STREAMING
            </span>
            <h3 className="font-display text-4xl uppercase tracking-wider text-white">
              MASUKKAN KODE AKSES
            </h3>
            <p className="text-xs text-[#8F8E8B] leading-relaxed">
              Ketik kode unik dari tiket digital Anda untuk membuka live stream pertandingan kickboxing.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleVerify(accessCode);
            }}
            className="space-y-4 pt-2"
          >
            <input
              type="text"
              value={accessCode}
              onChange={(e) => setAccessCode(e.target.value)}
              placeholder="CONTOH: JKB-VIP-2026"
              className="w-full bg-[#0B0B0B] border border-white/20 px-4 py-3 text-xs font-technical uppercase text-white placeholder-[#5A5957] focus:outline-none focus:border-[#D91F2C] text-center"
            />

            {verificationError && (
              <div className="p-3 bg-red-950/40 border border-red-500/50 text-red-400 text-xs font-technical flex items-center gap-2 text-left">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{verificationError}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={verificationLoading}
              className="w-full py-3.5 bg-[#D91F2C] hover:bg-[#B81521] text-white font-display text-base uppercase tracking-wider transition-all disabled:opacity-50"
            >
              {verificationLoading ? "MEMVERIFIKASI KODE..." : "BUKA PEMUTAR SIARAN ↗"}
            </button>
          </form>

          <p className="text-[11px] font-technical text-[#5A5957]">
            Kode demonstrasi staging: <code className="text-white">JKB-VIP-2026</code>
          </p>
        </div>
      ) : (
        /* Video Player Canvas */
        <div className="space-y-6">
          <div className="relative aspect-video w-full bg-[#141416] border border-white/20 ring-corner-frame flex flex-col items-center justify-center p-8 text-center space-y-4 shadow-2xl overflow-hidden">
            <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center bg-black/60">
              <span className="w-4 h-4 bg-[#D91F2C] rounded-full animate-ping" />
            </div>

            <div className="space-y-1">
              <span className="font-technical text-xs font-bold text-[#D91F2C] uppercase tracking-widest">
                LIVE FEED STANDBY
              </span>
              <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-wider text-white">
                SIARAN AKAN DIMULAI PADA HARI PERTANDINGAN
              </h3>
              <p className="text-xs text-[#8F8E8B] font-technical max-w-md mx-auto">
                GOR UNY Colombo, Yogyakarta • 12–14 Desember 2026
              </p>
            </div>

            <div className="pt-2 font-technical text-xs text-white/80 border-t border-white/10 flex items-center gap-6">
              <span>RESOLUSI: {ticketDetails?.resolution || "1080P FHD"}</span>
              <span>MULTI-CAMERA: ACTIVE</span>
              <span>AUDIO: 5.1 ARENA MIX</span>
            </div>
          </div>

          {/* Entitlement Banner */}
          {ticketDetails && (
            <div className="p-4 bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-technical text-xs">
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>AKSES TERVERIFIKASI: {ticketDetails.productName} ({ticketDetails.tier})</span>
              </div>
              <span className="text-[#8F8E8B]">NAMA PEMEGANG: {ticketDetails.customerName || "PEMEGANG TIKET"}</span>
            </div>
          )}
        </div>
      )}

    </div>
  );
}
