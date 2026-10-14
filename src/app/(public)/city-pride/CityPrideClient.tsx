"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, AlertCircle, Trophy, Flame } from "lucide-react";

const regions = [
  { id: "SLEMAN", name: "KAB. SLEMAN", tagline: "Sembada • Lereng Merapi" },
  { id: "KOTA_JOGJA", name: "KOTA JOGJA", tagline: "Titik Nol • Jantung Budaya" },
  { id: "BANTUL", name: "KAB. BANTUL", tagline: "Pendekar • Pesisir Selatan" },
  { id: "KULON_PROGO", name: "KULON PROGO", tagline: "Jewel of Java • Menoreh" },
  { id: "GUNUNGKIDUL", name: "GUNUNGKIDUL", tagline: "Handayani • Karst Selatan" },
];

interface CityPrideClientProps {
  campaignId: string | null;
  campaignName: string | null;
  campaignStatus: string;
  voteCounts: Record<string, number>;
  totalVotes: number;
  isAuthenticated: boolean;
  userName: string | null;
  hasUserVoted: boolean;
}

export default function CityPrideClient({
  campaignId,
  campaignName,
  campaignStatus,
  voteCounts: initialVoteCounts,
  totalVotes: initialTotalVotes,
  isAuthenticated,
  userName,
  hasUserVoted,
}: CityPrideClientProps) {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [voteStatus, setVoteStatus] = useState<"idle" | "voting" | "success" | "error" | "duplicate" | "unauthorized">(
    hasUserVoted ? "duplicate" : "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");
  const [voteCounts, setVoteCounts] = useState(initialVoteCounts);
  const [totalVotes, setTotalVotes] = useState(initialTotalVotes);

  async function handleVote() {
    if (!selectedRegion || !campaignId) return;

    if (!isAuthenticated) {
      setVoteStatus("unauthorized");
      setErrorMsg("Silakan masuk dengan akun terverifikasi untuk memberikan suara resmi.");
      return;
    }

    setVoteStatus("voting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/vote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ campaignId, choice: selectedRegion }),
      });

      const data = await res.json();

      if (res.ok) {
        setVoteStatus("success");
        setVoteCounts((prev) => ({
          ...prev,
          [selectedRegion]: (prev[selectedRegion] || 0) + 1,
        }));
        setTotalVotes((prev) => prev + 1);
      } else {
        if (res.status === 409) {
          setVoteStatus("duplicate");
        } else if (res.status === 401) {
          setVoteStatus("unauthorized");
          setErrorMsg(data.error || "Autentikasi akun diperlukan untuk voting.");
        } else {
          setErrorMsg(data.error || "Terjadi kesalahan saat mencatat suara.");
          setVoteStatus("error");
        }
      }
    } catch {
      setErrorMsg("Koneksi gagal. Silakan periksa jaringan dan coba lagi.");
      setVoteStatus("error");
    }
  }

  function getPercentage(regionId: string) {
    if (totalVotes === 0) return 0;
    return Math.round(((voteCounts[regionId] || 0) / totalVotes) * 100);
  }

  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#0A0A0A] text-[#FAFAFA] pt-24 lg:pt-32 pb-28 overflow-x-hidden font-sans">
      
      {/* ═════════════════════════════════════════════════════════════════════
          1. COMPACT EDITORIAL HEADER
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-6 pb-8 w-full border-b border-white/10">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-2.5 h-2.5 bg-[#D91F2C]" />
          <p className="font-technical text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
            CITY PRIDE • PERINGKAT DUKUNGAN WILAYAH
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.85] text-white">
              KOTA PUNYA<br />
              <span className="text-[#D91F2C]">NYALI.</span>
            </h1>
          </div>
          <div className="bg-[#141416] border border-white/10 px-4 py-2.5 rounded text-left sm:text-right">
            <span className="font-technical text-[10px] text-white/50 block uppercase tracking-wider">TOTAL DUKUNGAN RESMI:</span>
            <span className="font-display text-2xl sm:text-3xl text-white font-bold">{totalVotes} SUARA</span>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. COMPACT 2-COLUMN / 3-COLUMN REGION CARDS
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-8 w-full flex-1 space-y-6">
        
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <h2 className="font-display text-xl sm:text-2xl uppercase tracking-wider text-white flex items-center gap-2">
            <Flame className="w-4 h-4 text-[#D91F2C]" /> PILIH & DUKUNG WILAYAHMU
          </h2>
          <span className="font-technical text-[11px] text-white/40">1 AKUN = 1 SUARA</span>
        </div>

        {/* 2-Col Mobile, 3-Col Tablet, 5-Col Desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {regions.map((region, idx) => {
            const isSelected = selectedRegion === region.id;
            const pct = getPercentage(region.id);

            return (
              <div
                key={region.id}
                onClick={() => setSelectedRegion(region.id)}
                className={`bg-[#141416] border p-3.5 sm:p-4 rounded cursor-pointer transition-all flex flex-col justify-between space-y-3 relative ${
                  isSelected
                    ? "border-[#D91F2C] ring-2 ring-[#D91F2C]/50 shadow-[0_0_20px_rgba(217,31,44,0.25)] bg-[#1a1314]"
                    : "border-white/10 hover:border-white/30"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between font-technical text-[10px] text-white/40 mb-1">
                    <span>#0{idx + 1}</span>
                    <span className="text-[#D91F2C] font-bold">{voteCounts[region.id] || 0} VOTE</span>
                  </div>

                  <h3 className="font-display text-lg sm:text-xl uppercase tracking-wider text-white line-clamp-1">
                    {region.name}
                  </h3>
                  <p className="font-technical text-[9px] text-white/40 uppercase line-clamp-1 mt-0.5">
                    {region.tagline}
                  </p>
                </div>

                {/* Score & Mini Bar */}
                <div className="space-y-1.5 pt-2 border-t border-white/5">
                  <div className="flex items-baseline justify-between">
                    <span className="font-display text-3xl sm:text-4xl text-white font-black leading-none">
                      {pct}%
                    </span>
                  </div>

                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-[#D91F2C] h-full transition-all duration-500 rounded-full"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>

                {/* Compact Select Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedRegion(region.id);
                  }}
                  className={`w-full py-1.5 text-xs font-display uppercase tracking-wider rounded transition-colors ${
                    isSelected
                      ? "bg-[#D91F2C] text-white font-bold"
                      : "bg-white/5 text-white/80 hover:bg-white/10"
                  }`}
                >
                  {isSelected ? "TERPILIH ✓" : "PILIH"}
                </button>
              </div>
            );
          })}
        </div>

        {/* Action Confirmation Banner */}
        <div className="p-4 sm:p-5 bg-[#141416] border border-white/10 rounded flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-0.5">
            <h4 className="font-display text-xl uppercase tracking-wider text-white">
              {selectedRegion ? `WILAYAH DIPILIH: ${selectedRegion}` : "PILIH SALAH SATU WILAYAH DI ATAS"}
            </h4>
            <p className="text-xs text-white/50 font-sans">
              Suara Anda menentukan wilayah paling bersemangat di gelaran JKBF 2026.
            </p>
          </div>

          <button
            type="button"
            disabled={!selectedRegion || voteStatus === "voting" || voteStatus === "success" || voteStatus === "duplicate"}
            onClick={handleVote}
            className={`font-display text-sm tracking-wider uppercase px-6 py-3 rounded transition-all text-center self-stretch sm:self-auto ${
              !selectedRegion || voteStatus === "voting" || voteStatus === "success" || voteStatus === "duplicate"
                ? "bg-white/5 text-white/30 cursor-not-allowed"
                : "bg-[#D91F2C] hover:bg-[#B81521] text-white shadow-lg active:scale-95"
            }`}
          >
            {voteStatus === "voting"
              ? "MENGIRIMKAN..."
              : voteStatus === "success"
              ? "SUARA TERCATAT ✓"
              : voteStatus === "duplicate"
              ? "SUDAH MEMILIH"
              : "KIRIM DUKUNGAN RESMI ↗"}
          </button>
        </div>

        {/* Feedback Alerts */}
        {voteStatus === "success" && (
          <div className="p-3.5 bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-technical flex items-center gap-2 rounded">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Terima kasih! Dukungan resmi Anda untuk {selectedRegion} berhasil dicatat.</span>
          </div>
        )}

        {voteStatus === "duplicate" && (
          <div className="p-3.5 bg-amber-950/60 border border-amber-500/40 text-amber-300 text-xs font-technical flex items-center gap-2 rounded">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Akun atau perangkat Anda sudah tercatat memberikan suara pada City Pride ini.</span>
          </div>
        )}

        {voteStatus === "unauthorized" && (
          <div className="p-3.5 bg-red-950/60 border border-red-500/40 text-red-300 text-xs font-technical flex items-center justify-between gap-3 rounded">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
              <span>{errorMsg || "Silakan login terlebih dahulu untuk memberikan suara."}</span>
            </div>
            <Link href="/admin/login" className="underline font-bold text-xs uppercase font-display tracking-wider">
              MASUK ↗
            </Link>
          </div>
        )}

      </section>

    </main>
  );
}
