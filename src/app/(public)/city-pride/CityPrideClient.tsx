"use client";

import { useState } from "react";
import Link from "next/link";
import { Vote, ShieldCheck, CheckCircle2, AlertCircle, ChevronDown, ChevronUp } from "lucide-react";

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
  const [showRules, setShowRules] = useState(false);

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
    <main className="flex-1 flex flex-col w-full min-h-screen text-[#F4F0E8] bg-[#0B0B0B] pt-24 pb-20 overflow-x-hidden">
      
      {/* Editorial Header */}
      <section className="relative w-full border-b border-white/10 py-16 md:py-24 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="v9-overline text-[#D91F2C]">
            GERAKAN KOMUNITAS / #JOGJAPUNYANYALI
          </span>

          <h1
            className="v9-display-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F4F0E8]"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            CITY PRIDE
          </h1>

          <p className="text-base sm:text-lg text-[#F4F0E8] font-bold uppercase tracking-wider font-display">
            SATUKAN SUARA KEHORMATAN KOTA DI ARENA FESTIVAL
          </p>

          <p className="text-xs sm:text-sm text-[#8F8E8B] max-w-2xl leading-relaxed font-sans">
            Gerakan partisipasi komunitas pemuda dan suporter kickboxing di Daerah Istimewa Yogyakarta. Berikan dukungan resmi untuk wilayah kebanggaanmu menjelang laga 12—14 Desember 2026 di GOR UNY.
          </p>

          <div className="flex items-center gap-4 pt-2 text-xs font-mono">
            <span className="text-[#F4F0E8]">
              TOTAL SUARA TERCATAT: <strong className="text-[#D91F2C]">{totalVotes}</strong>
            </span>
            <span className="text-[#8F8E8B]">
              STATUS KAMPANYE: <strong className={isActive ? "text-green-400" : "text-[#8F8E8B]"}>{campaignStatus}</strong>
            </span>
          </div>
        </div>
      </section>

      {/* Main Voting Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 w-full flex-1">
        
        {/* Region Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {regions.map((reg) => {
            const isSelected = selectedRegion === reg.id;
            const pct = getPercentage(reg.id);
            const count = voteCounts[reg.id] || 0;

            return (
              <div
                key={reg.id}
                onClick={() => isActive && !hasUserVoted && setSelectedRegion(reg.id)}
                className={`p-6 sm:p-8 bg-[#141416] border transition-all cursor-pointer flex flex-col justify-between space-y-6 ${
                  isSelected
                    ? "border-[#D91F2C] bg-[#141416]/90 shadow-xl"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-baseline">
                    <span className="text-[10px] text-[#D91F2C] font-mono tracking-widest uppercase">
                      WILAYAH RESMI
                    </span>
                    <span className="font-mono text-sm font-bold text-[#F4F0E8]">
                      {pct}%
                    </span>
                  </div>

                  <h3
                    className="v9-display-title text-3xl sm:text-4xl text-[#F4F0E8]"
                    style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                  >
                    {reg.name}
                  </h3>

                  <p className="text-xs text-[#8F8E8B] font-sans leading-relaxed">
                    {reg.tagline}
                  </p>
                </div>

                {/* Progress bar */}
                <div className="space-y-2">
                  <div className="w-full h-1 bg-[#0B0B0B] overflow-hidden">
                    <div
                      className="h-full bg-[#D91F2C] transition-all duration-500"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-[#8F8E8B]">
                    <span>{count} DUKUNGAN</span>
                    <span>{isSelected ? "TERPILIH" : "PILIH WILAYAH"}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Voting Action Hub */}
        <div className="p-8 bg-[#141416] border border-white/10 space-y-6 max-w-2xl mx-auto text-center">
          
          {voteStatus === "success" && (
            <div className="p-4 bg-green-950/40 border border-green-500/30 text-green-300 text-xs font-mono space-y-1">
              <p className="font-bold">SUARA RESMI TELAH DICATAT!</p>
              <p>Terima kasih telah menyuarakan kebanggaan wilayahmu untuk JKBF 2026.</p>
            </div>
          )}

          {voteStatus === "duplicate" && (
            <div className="p-4 bg-[#0B0B0B] border border-white/10 text-[#8F8E8B] text-xs font-mono space-y-1">
              <p className="font-bold text-[#F4F0E8]">SUARA ANDA SUDAH TERCATAT</p>
              <p>Setiap akun hanya memiliki hak 1 (satu) kali suara resmi demi integritas voting komunitas.</p>
            </div>
          )}

          {voteStatus === "unauthorized" && (
            <div className="p-4 bg-[#0B0B0B] border border-[#D91F2C]/30 text-xs font-mono space-y-3">
              <p className="text-[#F4F0E8] font-bold">AKUN DIPERLUKAN UNTUK VOTING</p>
              <p className="text-[#8F8E8B]">{errorMsg || "Silakan masuk untuk memverifikasi hak suara Anda."}</p>
              <Link
                href="/admin/login"
                className="v9-btn-red text-xs inline-flex"
              >
                MASUK DENGAN AKUN ↗
              </Link>
            </div>
          )}

          {voteStatus === "idle" && (
            <div className="space-y-4">
              <div className="text-xs font-mono text-[#8F8E8B]">
                {selectedRegion ? (
                  <span>WILAYAH DIPILIH: <strong className="text-[#D91F2C]">{selectedRegion}</strong></span>
                ) : (
                  <span>Pilih salah satu wilayah di atas untuk memberikan suara.</span>
                )}
              </div>

              <button
                type="button"
                onClick={handleVote}
                disabled={!selectedRegion || !isActive}
                className={`v9-btn-red text-xs font-display font-black tracking-wider px-8 py-3.5 ${
                  !selectedRegion || !isActive ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <span>KIRIM DUKUNGAN RESMI</span>
                <span>↗</span>
              </button>
            </div>
          )}

        </div>

        {/* Campaign Rules Accordion */}
        <div className="border border-white/10 bg-[#141416] p-6 max-w-2xl mx-auto">
          <button
            type="button"
            onClick={() => setShowRules(!showRules)}
            className="w-full flex justify-between items-center text-xs font-mono uppercase tracking-widest text-[#F4F0E8]"
          >
            <span>KETENTUAN & MEKANISME VOTING CITY PRIDE</span>
            {showRules ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {showRules && (
            <div className="pt-4 mt-4 border-t border-white/5 text-xs text-[#8F8E8B] font-sans space-y-2 leading-relaxed">
              <p>1. Voting terbuka untuk seluruh warga dan komunitas di D.I. Yogyakarta.</p>
              <p>2. Mekanisme 1 Akun = 1 Suara untuk menjaga keadilan dan validitas hasil.</p>
              <p>3. Hasil voting City Pride merupakan suara solidaritas komunitas dan tidak mempengaruhi keputusan wasit atau hasil laga kickboxing di atas ring.</p>
            </div>
          )}
        </div>

      </section>

    </main>
  );
}
