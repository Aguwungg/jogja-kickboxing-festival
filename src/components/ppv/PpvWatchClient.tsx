"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { verifyAccessCodeAction } from "@/app/(public)/ppv/actions";
import {
  Lock,
  Radio,
  Tv,
  ArrowLeft,
  Volume2,
  VolumeX,
  Play,
  Pause,
  AlertCircle,
} from "lucide-react";

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

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

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
    <div className="w-full space-y-6 font-sans">
      
      {/* Back Link & Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <Link
            href="/ppv"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#8F8E8B] hover:text-[#F4F0E8] uppercase tracking-wider mb-1 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>KEMBALI KE PPV STREAM</span>
          </Link>
          <h1
            className="v9-display-title text-3xl sm:text-4xl text-[#F4F0E8]"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            RUANG SIARAN LANGSUNG ARENA
          </h1>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="flex items-center gap-1.5 text-[#D91F2C]">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            LIVE FEED GOR UNY
          </span>
        </div>
      </div>

      {!isUnlocked ? (
        /* Locked Gate View */
        <div className="bg-[#141416] border border-white/10 p-8 sm:p-16 text-center max-w-xl mx-auto space-y-6">
          <div className="w-12 h-12 mx-auto bg-[#0B0B0B] border border-white/10 flex items-center justify-center text-[#D91F2C]">
            <Lock className="w-6 h-6" />
          </div>

          <div className="space-y-2">
            <span className="text-[10px] text-[#D91F2C] font-mono tracking-widest uppercase block">
              AKSES TERENKRIPSI
            </span>
            <h2 className="v9-display-title text-3xl text-[#F4F0E8]" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
              MASUKKAN KODE TIKET DIGITAL
            </h2>
            <p className="text-xs text-[#8F8E8B] max-w-sm mx-auto leading-relaxed">
              Silakan masukkan kode tiket resmi yang Anda peroleh saat pemesanan paket siaran langsung.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleVerify(accessCode);
            }}
            className="space-y-3"
          >
            <input
              type="text"
              value={accessCode}
              onChange={(e) => setAccessCode(e.target.value)}
              placeholder="KODE AKSES STREAMING"
              className="w-full bg-[#0B0B0B] border border-white/10 p-3 text-center text-sm font-mono uppercase text-[#F4F0E8] focus:outline-none focus:border-[#D91F2C]"
            />

            {verificationError && (
              <p className="text-xs font-mono text-[#D91F2C]">{verificationError}</p>
            )}

            <button
              type="submit"
              disabled={verificationLoading}
              className="v9-btn-red text-xs font-display font-black tracking-wider w-full py-3.5"
            >
              <span>{verificationLoading ? "MEMVERIFIKASI..." : "BUKA RUANG SIARAN ↗"}</span>
            </button>
          </form>
        </div>
      ) : (
        /* Unlocked Stream Experience */
        <div className="space-y-6">
          <div className="relative aspect-video bg-[#000000] border border-white/10 overflow-hidden flex items-center justify-center">
            {/* Stream Simulation Video Frame */}
            <div className="text-center space-y-3 p-6">
              <Tv className="w-12 h-12 text-[#D91F2C] mx-auto animate-pulse" />
              <p className="text-xs font-mono text-[#8F8E8B] uppercase tracking-widest">
                FEED MULTI-KAMERA AKTIF • {ticketDetails?.resolution || "1080P 60FPS"}
              </p>
              <h3 className="v9-display-title text-2xl text-[#F4F0E8]" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
                SIARAN ARENA PERTANDINGAN BERJALAN
              </h3>
            </div>

            {/* Overlay Controls */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono bg-[#0B0B0B]/80 p-3 border border-white/10">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="text-[#F4F0E8] hover:text-[#D91F2C]"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button
                  type="button"
                  onClick={() => setIsMuted(!isMuted)}
                  className="text-[#F4F0E8] hover:text-[#D91F2C]"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <span className="text-[10px] text-[#8F8E8B]">AUDIO ARENA KOMENTATOR RESMI</span>
              </div>
              <span className="text-[#D91F2C] font-bold">12—14 DESEMBER 2026</span>
            </div>
          </div>

          <div className="p-4 bg-[#141416] border border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs font-mono">
            <span>PEMEGANG TIKET: <strong className="text-[#F4F0E8]">{ticketDetails?.customerName || "PENONTON RESMI"}</strong></span>
            <span>PAKET: <strong className="text-[#D91F2C]">{ticketDetails?.productName}</strong></span>
          </div>
        </div>
      )}

    </div>
  );
}
