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
          1. EDITORIAL SPLIT HERO (Matches 08_city_pride.png)
      ═════════════════════════════════════════════ */}
      <section className="relative w-full border-b border-black/10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 min-h-[480px] lg:min-h-[540px]">
          
          <div className="lg:col-span-7 py-12 lg:py-20 flex flex-col justify-center space-y-6">
            <p
              className="text-[#D91F2C] text-xs sm:text-sm font-extrabold uppercase tracking-[0.24em]"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              KOMUNITAS JOGJA • GERAKAN DAERAH
            </p>

            <h1
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight leading-[0.88] text-[#0B0B0B]"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              KOTA<br />
              PUNYA<br />
              <span className="text-[#D91F2C]">NYALI.</span>
            </h1>

            <p className="text-sm sm:text-base text-[#5A5957] font-sans max-w-lg leading-relaxed">
              Dukung wilayahmu. Rayakan kebanggaan bersama pemuda Bantul, Sleman, Kota Jogja, Kulon Progo, dan Gunungkidul.
            </p>
          </div>

          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full -mx-5 sm:-mx-8 lg:mx-0">
            <Image
              src="/images/v9/06_FOTO_KONSER_PLACEHOLDER_INTERNAL.png"
              alt="Komunitas Pemuda Jogja"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center grayscale contrast-125"
            />
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. VOTING SECTION
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-20 w-full space-y-12">
        <div className="space-y-3 pb-8 border-b border-black/10">
          <p
            className="text-[#D91F2C] text-xs font-extrabold uppercase tracking-[0.24em]"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            VOTING SUPORTER WILAYAH
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#0B0B0B]"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            DUKUNG WILAYAHMU.
          </h2>
          <p className="text-sm text-[#5A5957] font-sans max-w-xl">
            Total {totalVotes.toLocaleString("id-ID")} suara terverifikasi telah diberikan oleh komunitas.
          </p>
        </div>

        {/* Region Rows */}
        <div className="border-t border-black/10 divide-y divide-black/10">
          {regions.map((reg, idx) => {
            const isSelected = selectedRegion === reg.id;
            const pct = getPercentage(reg.id);
            const count = voteCounts[reg.id] || 0;

            return (
              <div
                key={reg.id}
                onClick={() => setSelectedRegion(reg.id)}
                className={`py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-center cursor-pointer transition-colors ${
                  isSelected ? "bg-black/5" : "hover:bg-black/[0.02]"
                }`}
              >
                <span className="text-[#D91F2C] font-mono text-sm sm:text-base font-bold md:col-span-1">
                  {(idx + 1).toString().padStart(2, "0")}
                </span>

                <div className="md:col-span-4 space-y-1">
                  <h3
                    className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#0B0B0B]"
                    style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                  >
                    {reg.name}
                  </h3>
                  <p className="text-xs text-[#5A5957] font-sans">{reg.tagline}</p>
                </div>

                <div className="md:col-span-5 space-y-2">
                  <div className="w-full bg-black/10 h-2 overflow-hidden">
                    <div
                      className="bg-[#D91F2C] h-full transition-all duration-500"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[11px] font-mono text-[#5A5957]">
                    <span>{count.toLocaleString("id-ID")} SUARA</span>
                    <span className="font-bold text-[#0B0B0B]">{pct}%</span>
                  </div>
                </div>

                <div className="md:col-span-2 text-left md:text-right">
                  <span
                    className={`inline-block px-4 py-2 text-xs font-display font-extrabold uppercase tracking-wider transition-colors ${
                      isSelected
                        ? "bg-[#D91F2C] text-white"
                        : "border border-black/20 text-[#0B0B0B]"
                    }`}
                    style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                  >
                    {isSelected ? "TERPILIH" : "PILIH"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Voting Action Bar */}
        <div className="pt-8 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            {voteStatus === "success" && (
              <p className="text-sm font-bold text-emerald-700 flex items-center gap-1.5 font-sans">
                <CheckCircle2 className="w-4 h-4" /> Suara Anda telah berhasil dicatat resmi!
              </p>
            )}
            {voteStatus === "duplicate" && (
              <p className="text-sm text-[#5A5957] font-sans">
                Akun Anda sudah memberikan suara pada kampanye ini. Terima kasih atas partisipasinya!
              </p>
            )}
            {voteStatus === "unauthorized" && (
              <p className="text-sm text-[#D91F2C] flex items-center gap-1.5 font-sans">
                <AlertCircle className="w-4 h-4" /> Masuk akun diperlukan untuk verifikasi suara resmi.
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={handleVote}
            disabled={!selectedRegion || voteStatus === "voting" || voteStatus === "duplicate"}
            className="w-full sm:w-auto font-display font-extrabold text-sm uppercase tracking-wider text-white bg-[#0B0B0B] hover:bg-black disabled:opacity-40 disabled:pointer-events-none px-8 py-3.5 transition-colors"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            {voteStatus === "voting" ? "MENCATAT SUARA..." : "KIRIM SUARA DUKUNGAN ↗"}
          </button>
        </div>

      </section>

    </main>
  );
}
