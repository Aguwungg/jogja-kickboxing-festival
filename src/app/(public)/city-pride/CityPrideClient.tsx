"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { useState } from "react";

const regions = [
  { id: "BANTUL", name: "Bantul", tagline: "Tanah Para Pendekar", color: "#D91F2C" },
  { id: "SLEMAN", name: "Sleman", tagline: "Api Utara Jogja", color: "#EF3340" },
  { id: "KOTA_JOGJA", name: "Kota Yogyakarta", tagline: "Jantung Arena", color: "#E2BA75" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0.2, y: 14 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: "easeOut" as const },
  }),
};

export default function CityPrideClient({
  campaignId,
  campaignName,
  campaignStatus,
  voteCounts: initialVoteCounts,
  totalVotes: initialTotalVotes,
  isAuthenticated,
  userName,
  hasUserVoted,
}: {
  campaignId: string | null;
  campaignName: string | null;
  campaignStatus: string;
  voteCounts: Record<string, number>;
  totalVotes: number;
  isAuthenticated: boolean;
  userName: string | null;
  hasUserVoted: boolean;
}) {
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
        // Update live vote totals
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
    <main className="flex-1 flex flex-col w-full min-h-screen text-jkb-offwhite bg-jkb-black overflow-x-hidden">
      {/* ═══════════════════════════════════════════════════
          HERO — Crowd energy & Pride Statement
      ═══════════════════════════════════════════════════ */}
      <section className="relative w-full pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/jkb/concert-crowd.jpg"
            alt="Kerumunan pendukung City Pride"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-jkb-black/40 via-jkb-black/75 to-jkb-black" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-5 text-center">
          <motion.div initial={{ opacity: 0.3, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <span className="text-jkb-red text-xs font-bold tracking-[0.3em] uppercase bg-jkb-red/10 border border-jkb-red/30 px-3 py-1">
              #JOGJAPUNYANYALI • CITY PRIDE VOTING
            </span>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase mt-4 leading-[0.9]">
              KOTA MANA<br />PALING <span className="text-jkb-red">PUNYA NYALI?</span>
            </h1>
            <p className="text-jkb-gray text-base md:text-lg max-w-xl mx-auto mt-4 leading-relaxed">
              Dukung kotamu di kejuaraan Jogja Kickboxing Festival & Redy Championship 2. Buktikan suporter dan sasana mana yang paling solid membakar arena GOR UNY!
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          LEADERBOARD — Live database aggregated standings
      ═══════════════════════════════════════════════════ */}
      <section className="w-full py-12 px-5 bg-jkb-charcoal border-y border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-8">
            <div>
              <h2 className="font-display text-2xl font-black uppercase">Klasemen Suara Sementara</h2>
              <p className="text-xs text-jkb-gray mt-0.5">Data terverifikasi langsung dari database resmi</p>
            </div>
            <span className="font-display text-sm uppercase tracking-wider text-jkb-gold bg-jkb-gold/10 border border-jkb-gold/30 px-3 py-1 self-start sm:self-auto">
              {totalVotes} Total Suara Masuk
            </span>
          </div>

          <div className="space-y-4">
            {regions
              .sort((a, b) => (voteCounts[b.id] || 0) - (voteCounts[a.id] || 0))
              .map((region, i) => (
                <motion.div
                  key={region.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "200px" }}
                  variants={fadeUp}
                  custom={i}
                  className="bg-jkb-black border border-white/5 p-5 transition-all"
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-3">
                      <span className="font-display text-2xl font-black text-jkb-gray/30">#{i + 1}</span>
                      <div>
                        <h3 className="font-display text-lg font-bold uppercase" style={{ color: region.color }}>
                          {region.name}
                        </h3>
                        <p className="text-jkb-gray text-xs">{region.tagline}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-display text-2xl font-black" style={{ color: region.color }}>
                        {getPercentage(region.id)}%
                      </span>
                      <p className="text-jkb-gray text-xs">{voteCounts[region.id] || 0} suara</p>
                    </div>
                  </div>

                  {/* Visual Progress Bar */}
                  <div className="w-full h-2.5 bg-jkb-surface rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${getPercentage(region.id)}%` }}
                      viewport={{ once: true, margin: "200px" }}
                      transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: region.color }}
                    />
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          VOTING INTERFACE & SECURITY STATUS
      ═══════════════════════════════════════════════════ */}
      <section className="w-full py-16 px-5 bg-jkb-black">
        <div className="max-w-3xl mx-auto">
          {!isActive ? (
            <div className="text-center py-12 bg-jkb-charcoal border border-white/10 p-8">
              <h2 className="font-display text-2xl font-black uppercase text-jkb-gray">Kampanye Voting Belum Aktif</h2>
              <p className="text-jkb-gray text-sm mt-2">
                Voting City Pride resmi akan dibuka sesuai jadwal teknis kampanye JKB 2026.
              </p>
            </div>
          ) : voteStatus === "success" ? (
            <motion.div
              initial={{ opacity: 0.5, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 bg-jkb-charcoal border border-green-500/30 p-8 space-y-3"
            >
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-green-400 text-3xl font-bold">✓</span>
              </div>
              <h2 className="font-display text-3xl font-black uppercase text-green-400">Suara Resmi Kamu Berhasil Dicatat!</h2>
              <p className="text-jkb-gray text-sm max-w-md mx-auto">
                Terima kasih telah membuktikan nyali kotamu. Pilihan kamu telah tersimpan ke dalam database dan memperkuat peringkat klasemen.
              </p>
              <div className="pt-4">
                <Link
                  href="/fighters"
                  className="font-display inline-block bg-white/10 hover:bg-white/20 border border-white/20 text-white uppercase tracking-widest text-xs px-6 py-3 font-bold"
                >
                  Jelajahi Roster Fighter →
                </Link>
              </div>
            </motion.div>
          ) : voteStatus === "duplicate" ? (
            <div className="text-center py-12 bg-jkb-charcoal border border-yellow-500/30 p-8 space-y-3">
              <span className="text-yellow-400 text-3xl">🗳️</span>
              <h2 className="font-display text-2xl font-black uppercase text-yellow-400">Kamu Sudah Memberikan Suara</h2>
              <p className="text-jkb-gray text-sm max-w-md mx-auto">
                Aturan integritas City Pride: Setiap akun terdaftar berhak memberikan satu suara per kampanye resmi untuk menjaga sportivitas kompetisi.
              </p>
            </div>
          ) : (
            <>
              <div className="text-center mb-8 space-y-2">
                <h2 className="font-display text-3xl md:text-4xl font-black uppercase">Pilih Wilayah Jagoanmu</h2>
                <p className="text-sm text-jkb-gray">
                  Tentukan satu daerah yang paling berhak menyandang gelar penguasa arena.
                </p>
              </div>

              {/* Region Choice Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {regions.map((region) => (
                  <button
                    key={region.id}
                    type="button"
                    onClick={() => setSelectedRegion(region.id)}
                    className={`p-6 border-2 transition-all text-left relative cursor-pointer ${
                      selectedRegion === region.id
                        ? "border-jkb-red bg-jkb-red/10 shadow-lg shadow-jkb-red/10"
                        : "border-white/10 bg-jkb-charcoal hover:border-white/30"
                    }`}
                  >
                    <h3
                      className="font-display text-xl font-bold uppercase"
                      style={{ color: selectedRegion === region.id ? region.color : "#F5F3EE" }}
                    >
                      {region.name}
                    </h3>
                    <p className="text-jkb-gray text-xs mt-1">{region.tagline}</p>
                    {selectedRegion === region.id && (
                      <div className="w-5 h-5 bg-jkb-red rounded-full flex items-center justify-center mt-3">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {errorMsg && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm p-4 text-center mb-6">
                  {errorMsg}
                </div>
              )}

              {/* Authentication & Submission Controls */}
              <div className="text-center space-y-4">
                {isAuthenticated ? (
                  <>
                    <p className="text-xs text-jkb-gold">
                      ✓ Masuk sebagai akun terdaftar: <span className="font-bold text-white">{userName || "Pengguna Terverifikasi"}</span>
                    </p>
                    <button
                      type="button"
                      onClick={handleVote}
                      disabled={!selectedRegion || voteStatus === "voting"}
                      className={`font-display uppercase tracking-widest text-sm px-10 py-4 font-bold transition-all ${
                        selectedRegion && voteStatus !== "voting"
                          ? "bg-jkb-red hover:bg-jkb-bright-red text-white cursor-pointer shadow-lg shadow-jkb-red/20"
                          : "bg-jkb-surface text-jkb-gray cursor-not-allowed"
                      }`}
                    >
                      {voteStatus === "voting" ? "MENCATAT SUARA..." : "KIRIM SUARA RESMI"}
                    </button>
                    <p className="text-jkb-gray text-xs">
                      1 akun = 1 suara sah. Suara langsung dihitung ke klasemen realtime.
                    </p>
                  </>
                ) : (
                  <div className="bg-jkb-charcoal border border-white/10 p-6 space-y-4 max-w-md mx-auto">
                    <div className="space-y-1">
                      <h3 className="font-display text-lg font-bold uppercase text-white">Akun Terdaftar Diperlukan</h3>
                      <p className="text-xs text-jkb-gray">
                        Untuk menjaga integritas dan keabsahan hasil voting City Pride #JOGJAPUNYANYALI, voting hanya dapat dilakukan oleh pengguna yang telah login.
                      </p>
                    </div>
                    <Link
                      href="/admin/login"
                      className="font-display inline-block bg-jkb-red hover:bg-jkb-bright-red text-white uppercase tracking-widest text-xs px-8 py-3.5 font-bold transition-all w-full"
                    >
                      MASUK (LOGIN) UNTUK VOTE →
                    </Link>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
