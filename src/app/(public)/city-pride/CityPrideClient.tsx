"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, AlertCircle } from "lucide-react";

const regions = [
  { id: "BANTUL", name: "BANTUL", tagline: "Tanah Para Pendekar & Pesisir Selatan" },
  { id: "SLEMAN", name: "SLEMAN", tagline: "Semangat Sembada & Lereng Merapi" },
  { id: "KOTA_JOGJA", name: "KOTA YOGYAKARTA", tagline: "Jantung Budaya & Titik Nol Kilometer" },
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

  const isActive = campaignStatus === "ACTIVE" && campaignId;

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
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#F4F0E8] text-[#0B0B0B] pt-24 lg:pt-28 pb-24 overflow-x-hidden">
      
      {/* ═════════════════════════════════════════════════════════════════════
          1. EDITORIAL SPLIT HERO WITH JOGJA LINE ART MOTIF
      ═════════════════════════════════════════════ */}
      <section className="relative w-full border-b border-black/10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 min-h-[480px] lg:min-h-[540px]">
          
          <div className="lg:col-span-7 py-12 lg:py-20 flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D91F2C]" />
              <p className="font-technical text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
                GERAKAN SUPORTER • CITY PRIDE
              </p>
            </div>

            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tight leading-[0.85] text-[#0B0B0B]">
              KOTA PUNYA <br />
              <span className="text-[#D91F2C]">NYALI.</span>
            </h1>

            <p className="text-sm sm:text-base text-[#5A5957] font-sans max-w-lg leading-relaxed">
              Dukung wilayahmu. Rayakan kebanggaan bersama pemuda Bantul, Sleman, dan Kota Yogyakarta di gelanggang GOR UNY 2026.
            </p>

            {/* Subtle Jogja Architectural Outline Accent */}
            <div className="pt-2 flex items-center gap-4 text-xs font-technical text-[#77716D]">
              <span className="w-8 h-[1px] bg-black/20" />
              <span>YOGYAKARTA ISTIMEWA • PERSATUAN PEMUDA</span>
            </div>
          </div>

          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full -mx-5 sm:-mx-8 lg:mx-0">
            <Image
              src="/images/v9/06_FOTO_KONSER_PLACEHOLDER_INTERNAL.png"
              alt="Suporter & Komunitas Jogja"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center grayscale contrast-125"
            />
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. VOTING & REGIONAL SUPPORT
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-20 w-full space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-black/15">
          <div className="space-y-2">
            <p className="font-technical text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
              SUARA WILAYAH RESMI
            </p>
            <h2 className="font-display text-4xl sm:text-5xl uppercase tracking-tight text-[#0B0B0B]">
              DUKUNG WILAYAHMU.
            </h2>
          </div>
          <div className="font-technical text-xs text-[#77716D] text-left sm:text-right">
            <span>TOTAL DUKUNGAN TERCATAT:</span>
            <span className="font-display text-2xl text-[#0B0B0B] ml-2 block sm:inline">{totalVotes} SUARA</span>
          </div>
        </div>

        {/* Voting Options */}
        <div className="border-t border-black/15 divide-y divide-black/15">
          {regions.map((region, idx) => {
            const isSelected = selectedRegion === region.id;
            const pct = getPercentage(region.id);

            return (
              <div
                key={region.id}
                onClick={() => setSelectedRegion(region.id)}
                className={`py-8 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-center cursor-pointer transition-colors px-4 ${
                  isSelected ? "bg-black/5" : "hover:bg-black/[0.02]"
                }`}
              >
                <span className="font-technical text-sm font-bold text-[#D91F2C] md:col-span-1">
                  {(idx + 1).toString().padStart(2, "0")}
                </span>

                <div className="md:col-span-5 space-y-1">
                  <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-wider text-[#0B0B0B]">
                    {region.name}
                  </h3>
                  <p className="text-xs text-[#5A5957] font-sans">
                    {region.tagline}
                  </p>
                </div>

                {/* Live Progress Bar */}
                <div className="md:col-span-4 space-y-1">
                  <div className="w-full bg-black/10 h-2 overflow-hidden">
                    <div
                      className="bg-[#D91F2C] h-full transition-all duration-500"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <div className="flex justify-between font-technical text-[11px] text-[#77716D]">
                    <span>{voteCounts[region.id] || 0} Dukungan</span>
                    <span className="font-bold text-[#0B0B0B]">{pct}%</span>
                  </div>
                </div>

                {/* Selection Radio / Action */}
                <div className="md:col-span-2 text-left md:text-right">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedRegion(region.id);
                    }}
                    className={`font-display text-sm tracking-wider uppercase px-5 py-2.5 transition-all ${
                      isSelected
                        ? "bg-[#D91F2C] text-white shadow-sm"
                        : "bg-white text-[#0B0B0B] border border-black/25 hover:border-black"
                    }`}
                  >
                    {isSelected ? "TERPILIH ✓" : "PILIH"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Submit Vote Box */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-white p-6 sm:p-8 border border-black/15 ring-corner-frame">
          <div className="space-y-1">
            <h4 className="font-display text-2xl uppercase tracking-wider text-[#0B0B0B]">
              {selectedRegion ? `WILAYAH TERPILIH: ${selectedRegion}` : "PILIH SATU WILAYAH DI ATAS"}
            </h4>
            <p className="text-xs text-[#5A5957] font-sans">
              Setiap akun atau perangkat memiliki batasan satu suara sah demi menjaga integritas data.
            </p>
          </div>

          <button
            type="button"
            disabled={!selectedRegion || voteStatus === "voting" || voteStatus === "success" || voteStatus === "duplicate"}
            onClick={handleVote}
            className={`font-display text-base tracking-wider uppercase px-8 py-3.5 transition-all self-stretch sm:self-auto text-center ${
              !selectedRegion || voteStatus === "voting" || voteStatus === "success" || voteStatus === "duplicate"
                ? "bg-black/10 text-black/40 cursor-not-allowed"
                : "bg-[#D91F2C] hover:bg-[#B81521] text-white shadow-md active:scale-95"
            }`}
          >
            {voteStatus === "voting" ? "MENGIRIMKAN..." : voteStatus === "success" ? "SUARA TERCATAT ✓" : voteStatus === "duplicate" ? "SUDAH MEMILIH" : "KIRIM DUKUNGAN RESMI ↗"}
          </button>
        </div>

        {/* Status Messages */}
        {voteStatus === "success" && (
          <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-technical flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>Terima kasih! Suara dukungan Anda untuk {selectedRegion} telah sah dicatat dalam sistem JKBF 2026.</span>
          </div>
        )}

        {voteStatus === "duplicate" && (
          <div className="p-4 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-technical flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
            <span>Perangkat atau akun Anda telah tercatat memberikan dukungan pada kampanye ini.</span>
          </div>
        )}

        {voteStatus === "unauthorized" && (
          <div className="p-4 bg-red-50 border border-red-200 text-red-800 text-xs font-technical flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
              <span>{errorMsg || "Silakan login terlebih dahulu untuk memberikan suara sah."}</span>
            </div>
            <Link href="/admin/login" className="underline font-bold font-display uppercase tracking-wider text-xs">
              MASUK ↗
            </Link>
          </div>
        )}

        {voteStatus === "error" && errorMsg && (
          <div className="p-4 bg-red-50 border border-red-200 text-red-800 text-xs font-technical flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

      </section>

    </main>
  );
}
