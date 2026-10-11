"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Vote, ShieldCheck, CheckCircle2, ChevronDown, ChevronUp, AlertCircle, Trophy, BarChart2 } from "lucide-react";

const regions = [
  { id: "BANTUL", name: "Bantul", tagline: "Tanah Para Pendekar", color: "#D91F2C" },
  { id: "SLEMAN", name: "Sleman", tagline: "Api Elang Jawa", color: "#EF3340" },
  { id: "KOTA_JOGJA", name: "Kota Yogyakarta", tagline: "Jantung Budaya & Arena", color: "#E2BA75" },
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
  const [showRules, setShowRules] = useState(false);

  const isActive = campaignStatus === "ACTIVE" && campaignId;

  async function handleVote() {
    if (!selectedRegion || !campaignId) return;

    if (!isAuthenticated) {
      setVoteStatus("unauthorized");
      setErrorMsg("Silakan login dengan akun terdaftar untuk memberikan suara resmi.");
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
    <main className="flex-1 flex flex-col w-full min-h-screen text-[#F5F3EE] bg-[#09090B] pt-24 pb-20 overflow-x-hidden">
      
      {/* ═════════════════════════════════════════════════════════════════════
          STEP 1: CAMPAIGN EXPLANATION
      ═════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full border-b border-white/10 py-12 md:py-16 bg-[#171719]/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#D91F2C]/10 border border-[#D91F2C]/30 text-[#D91F2C] text-xs font-bold tracking-widest uppercase">
            <Vote className="w-3.5 h-3.5" />
            <span>#JOGJAPUNYANYALI • CITY PRIDE</span>
          </div>

          <h1
            className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-none"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            VOTE KOTA <span className="text-[#D91F2C]">KEBANGGAANMU</span>
          </h1>

          <p className="text-[#9A9AA2] text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Dukung wilayah kebanggaanmu di Jogja Kickboxing Festival & Redy Championship 2. Satu akun terdaftar, satu suara sah terverifikasi.
          </p>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          STEP 2: REGION SELECTION & CAST VOTE
      ═════════════════════════════════════════════════════════════════════ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full space-y-8">
        
        {/* Step Indicator */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D91F2C]">
            LANGKAH 1 — PILIH WILAYAH
          </span>
          <span className="text-xs text-[#9A9AA2]">
            {isAuthenticated ? `Login sebagai: ${userName || "Akun Terverifikasi"}` : "Perlu login untuk verifikasi"}
          </span>
        </div>

        {/* 3 Region Selection Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {regions.map((region) => {
            const isSelected = selectedRegion === region.id;
            return (
              <button
                key={region.id}
                type="button"
                onClick={() => setSelectedRegion(region.id)}
                disabled={voteStatus === "success" || voteStatus === "duplicate"}
                className={`p-6 rounded-sm border text-left transition-all relative overflow-hidden flex flex-col justify-between h-40 ${
                  isSelected
                    ? "bg-[#171719] border-[#D91F2C] shadow-lg shadow-[#D91F2C]/20"
                    : "bg-[#171719]/60 border-white/10 hover:border-white/20 hover:bg-[#171719]"
                } ${voteStatus === "success" || voteStatus === "duplicate" ? "opacity-75 cursor-not-allowed" : "cursor-pointer"}`}
              >
                {isSelected && (
                  <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#D91F2C]" />
                )}
                <div>
                  <h3
                    className="font-display text-2xl font-bold uppercase text-white tracking-wide"
                    style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                  >
                    {region.name}
                  </h3>
                  <p className="text-xs text-[#9A9AA2] mt-1">
                    {region.tagline}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-white/70">
                    {isSelected ? "Terpilih ✓" : "Pilih Wilayah"}
                  </span>
                  <div
                    className="w-3 h-3 rounded-full border border-white/30 flex items-center justify-center"
                    style={{ backgroundColor: isSelected ? "#D91F2C" : "transparent" }}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Action Controls */}
        <div className="bg-[#171719] border border-white/10 p-6 rounded-sm space-y-4">
          {voteStatus === "success" && (
            <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-sm flex items-center gap-3 text-emerald-400 text-xs">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Suara resmi kamu telah berhasil dicatat ke dalam database kejuaraan! Terima kasih atas dukunganmu.</span>
            </div>
          )}

          {voteStatus === "duplicate" && (
            <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-sm flex items-center gap-3 text-amber-400 text-xs">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>Akun kamu telah memberikan suara pada kampanye City Pride ini (1 Akun = 1 Suara).</span>
            </div>
          )}

          {voteStatus === "unauthorized" && (
            <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <span className="text-red-400">{errorMsg || "Autentikasi akun diperlukan untuk mencegah kecurangan suara."}</span>
              <Link
                href="/admin/login"
                className="font-display font-bold text-xs uppercase tracking-wider px-4 py-2 bg-white text-[#09090B] rounded-sm shrink-0 text-center"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                Login Akun
              </Link>
            </div>
          )}

          {voteStatus === "error" && (
            <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-sm text-red-400 text-xs">
              {errorMsg}
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="text-xs text-[#9A9AA2]">
              {selectedRegion ? (
                <span>Wilayah dipilih: <strong className="text-white">{regions.find(r => r.id === selectedRegion)?.name}</strong></span>
              ) : (
                <span>Silakan pilih salah satu wilayah di atas untuk mengirimkan suara.</span>
              )}
            </div>

            <button
              type="button"
              onClick={handleVote}
              disabled={!selectedRegion || voteStatus === "voting" || voteStatus === "success" || voteStatus === "duplicate"}
              className={`w-full sm:w-auto font-display font-black text-xs sm:text-sm uppercase tracking-widest px-8 py-3.5 rounded-sm transition-all shadow-md ${
                !selectedRegion || voteStatus === "success" || voteStatus === "duplicate"
                  ? "bg-white/10 text-white/40 cursor-not-allowed"
                  : "bg-[#D91F2C] hover:bg-[#EF3340] text-white shadow-[#D91F2C]/25 cursor-pointer"
              }`}
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              {voteStatus === "voting" ? "Mencatat Suara..." : "KIRIM SUARA RESMI"}
            </button>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════════
            STEP 3: LIVE STANDINGS & RESULTS (Secondary, Clean)
        ═════════════════════════════════════════════════════════════════════ */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-[#E2BA75]" />
              <h2
                className="font-display text-xl font-bold uppercase text-white"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                Klasemen Suara Sementara
              </h2>
            </div>
            <span className="text-xs text-[#9A9AA2] font-mono">
              Total: {totalVotes} Suara
            </span>
          </div>

          <div className="space-y-3">
            {regions
              .sort((a, b) => (voteCounts[b.id] || 0) - (voteCounts[a.id] || 0))
              .map((r, idx) => {
                const pct = getPercentage(r.id);
                return (
                  <div key={r.id} className="bg-[#171719] border border-white/5 p-4 rounded-sm space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-white uppercase flex items-center gap-2">
                        <span className="text-[#9A9AA2] font-mono">#{idx + 1}</span>
                        {r.name}
                      </span>
                      <span className="font-mono font-bold text-white">
                        {pct}% ({voteCounts[r.id] || 0} suara)
                      </span>
                    </div>
                    <div className="w-full h-2 bg-[#09090B] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${pct}%`,
                          backgroundColor: r.color,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════════
            STEP 4: ACCESSIBLE EXPANDABLE RULES
        ═════════════════════════════════════════════ */}
        <div className="border border-white/10 rounded-sm bg-[#171719] overflow-hidden">
          <button
            type="button"
            onClick={() => setShowRules(!showRules)}
            className="w-full p-4 text-left flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#9A9AA2] hover:text-white"
          >
            <span>Ketentuan & Aturan Anti-Abuse Voting</span>
            {showRules ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {showRules && (
            <div className="p-4 border-t border-white/5 text-xs text-[#9A9AA2] space-y-2 leading-relaxed font-sans">
              <p>1. Setiap pengguna terdaftar hanya dapat memberikan 1 (satu) suara sah selama periode kejuaraan JKB 2026.</p>
              <p>2. Sistem secara otomatis mencatat dan mengunci id akun untuk mencegah manipulasi suara ganda.</p>
              <p>3. Hasil klasemen akhir akan diumumkan pada panggung Grand Final festival di GOR UNY.</p>
            </div>
          )}
        </div>

      </section>

    </main>
  );
}
