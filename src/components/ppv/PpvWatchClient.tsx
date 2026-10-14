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
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#8F8E8B] hover:text-white uppercase tracking-wider transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>KEMBALI KE PPV STREAM</span>
        </Link>
        <span className="text-xs font-mono text-[#D91F2C] uppercase font-bold">
          • LIVE FEED STANDBY (GOR UNY)
        </span>
      </div>

      {!isUnlocked ? (
        /* Code Input Gate */
        <div className="border border-white/10 bg-[#141416] p-8 sm:p-14 text-center max-w-xl mx-auto space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase text-[#D91F2C] tracking-widest font-bold">
              VERIFIKASI TIKET STREAMING
            </span>
            <h3
              className="text-3xl font-black uppercase text-white"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              MASUKKAN KODE AKSES
            </h3>
            <p className="text-xs text-[#8F8E8B] leading-relaxed">
              Ketik kode unik dari tiket digital Anda untuk membuka live stream pertandingan.
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
              placeholder="JKBF-STREAM-XXXX"
              className="w-full bg-[#0B0B0B] border border-white/20 px-4 py-3 text-xs font-mono uppercase text-white placeholder-[#5A5957] focus:outline-none focus:border-[#D91F2C] text-center"
            />

            {verificationError && (
              <div className="p-3 bg-red-950/40 border border-red-500/30 text-xs font-mono text-red-300 flex items-center gap-2 justify-center">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{verificationError}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={verificationLoading}
              className="w-full font-display font-extrabold text-sm uppercase tracking-wider text-white bg-[#D91F2C] hover:bg-[#B81521] disabled:opacity-50 py-3.5 transition-colors"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              {verificationLoading ? "MEMVALIDASI KODE..." : "VERIFIKASI & BUKA PLAYER ↗"}
            </button>
          </form>
        </div>
      ) : (
        /* Video Stream Player Canvas */
        <div className="space-y-6">
          <div className="relative aspect-video w-full bg-black border border-white/20 flex flex-col items-center justify-center p-8 text-center space-y-3">
            <div className="w-3 h-3 rounded-full bg-[#D91F2C] animate-ping" />
            <p
              className="text-2xl sm:text-3xl font-black uppercase text-white tracking-wide"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              SIARAN LANGSUNG STANDBY
            </p>
            <p className="text-xs font-mono text-[#8F8E8B] max-w-md">
              Feed video live dari GOR UNY Yogyakarta akan dimulai sesuai jadwal pertandingan resmi (12–14 Desember 2026).
            </p>
          </div>

          <div className="p-4 bg-[#141416] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono">
            <div>
              <span className="text-[#8F8E8B] uppercase">AKUN TERVERIFIKASI: </span>
              <span className="font-bold text-white">{ticketDetails?.customerName || "Penonton Terverifikasi"}</span>
            </div>
            <span className="text-emerald-400 font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> KUALITAS SIARAN: {ticketDetails?.resolution || "1080P FULL HD"}
            </span>
          </div>
        </div>
      )}

    </div>
  );
}
