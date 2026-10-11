import prisma from "@/lib/prisma";
import {
  Trophy,
  Video,
  Ticket,
  CheckCircle2,
  Clock,
  AlertCircle,
  ExternalLink,
  Sparkles,
  ArrowLeft,
  Flame,
  Award,
  Calendar,
  Layers,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Dashboard Personal Kreator — JKB 2026",
  description: "Pantau status profil kreator, riwayat submisi video kampanye, akumulasi poin, dan verifikasi tiket festival.",
};

export default async function CreatorDashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ creatorId?: string }>;
}) {
  const { creatorId } = await searchParams;

  // Fetch all creators
  const creators = await prisma.creatorProfile.findMany({
    orderBy: { totalPoints: "desc" },
    include: {
      submissions: {
        orderBy: { createdAt: "desc" },
      },
      barcodeClaims: {
        orderBy: { createdAt: "desc" },
      },
    },
  });

  // Select active creator (default to first or matching query)
  const currentCreator =
    creators.find((c) => c.id === creatorId) || creators[0] || null;

  // Calculate rank
  const rank = currentCreator
    ? creators.findIndex((c) => c.id === currentCreator.id) + 1
    : 0;

  return (
    <div className="flex-1 flex flex-col w-full min-h-screen text-[#F6F3EC] bg-[#09090b] pt-24 pb-20">
      {/* Top Bar */}
      <section className="border-b border-white/10 py-8 bg-[#171719]/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <Link
                href="/creator"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#99999F] hover:text-white uppercase tracking-wider mb-2 transition-colors"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Kembali ke Creator Hub
              </Link>
              <h1
                className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                DASHBOARD <span className="text-[#EF3340]">PERSONAL KREATOR</span>
              </h1>
              <p className="text-xs sm:text-sm text-[#99999F] font-sans mt-0.5">
                Pantau performa submisi, perolehan poin leaderboard, dan tiket promosi Anda secara transparan.
              </p>
            </div>

            {/* Profile Selector for Staging Demo */}
            <div className="bg-[#121215] border border-white/10 p-3 rounded-sm">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#99999F] block mb-1">
                Ganti Akun Kreator (Demo):
              </span>
              <div className="flex items-center gap-2">
                <form method="get" className="flex items-center gap-2">
                  <select
                    name="creatorId"
                    defaultValue={currentCreator?.id}
                    className="bg-[#171719] border border-white/15 text-xs text-white px-2.5 py-1.5 rounded-sm focus:outline-none focus:border-[#EF3340]"
                  >
                    {creators.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name} ({c.totalPoints} PTS)
                      </option>
                    ))}
                  </select>
                  <button
                    type="submit"
                    className="bg-white/10 hover:bg-white/20 text-white text-xs px-3 py-1.5 rounded-sm font-bold uppercase tracking-wider transition-all"
                  >
                    PILIH
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Dashboard Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full space-y-10">
        {!currentCreator ? (
          <div className="text-center py-20 bg-[#171719] border border-white/10 rounded-sm">
            <AlertCircle className="w-8 h-8 text-amber-400 mx-auto mb-2" />
            <p className="text-white font-bold">Belum ada akun kreator terdaftar.</p>
            <Link
              href="/creator#action-hub"
              className="mt-4 inline-block text-xs uppercase tracking-wider text-[#EF3340] hover:underline font-bold"
            >
              Daftar Sekarang di Creator Hub &rarr;
            </Link>
          </div>
        ) : (
          <>
            {/* Identity & Stats Banner */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Profile Card */}
              <div className="md:col-span-2 bg-[#171719] border border-white/10 p-6 rounded-sm relative overflow-hidden">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm text-[10px] font-bold uppercase tracking-wider mb-2 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                      <CheckCircle2 className="w-3 h-3" />
                      STATUS: {currentCreator.status}
                    </div>
                    <h2
                      className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight"
                      style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                    >
                      {currentCreator.name}
                    </h2>
                    <p className="text-xs text-[#99999F] font-sans mt-1">
                      {currentCreator.bio || "Kreator konten resmi JKB 2026."}
                    </p>
                  </div>

                  <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center font-black text-xl text-white shrink-0">
                    {currentCreator.name?.[0] || "C"}
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-6 pt-4 border-t border-white/5 text-xs text-[#99999F]">
                  {currentCreator.tiktok && <span>TikTok: <strong className="text-white">{currentCreator.tiktok}</strong></span>}
                  {currentCreator.instagram && <span>IG: <strong className="text-white">{currentCreator.instagram}</strong></span>}
                  <span>Kategori: <strong className="text-white">{currentCreator.category?.replace("_", " ")}</strong></span>
                </div>
              </div>

              {/* Total Points */}
              <div className="bg-[#171719] border border-white/10 p-6 rounded-sm flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs text-[#99999F] uppercase tracking-wider font-bold">
                  <span>Poin Terverifikasi</span>
                  <Trophy className="w-4 h-4 text-amber-400" />
                </div>
                <div className="my-4">
                  <span
                    className="text-4xl font-black text-amber-400"
                    style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                  >
                    {currentCreator.totalPoints.toLocaleString()}
                  </span>
                  <span className="text-xs font-bold text-[#99999F] ml-1.5">PTS</span>
                </div>
                <span className="text-[11px] text-white/50">
                  Total akumulasi dari {currentCreator.submissions.filter((s) => s.status === "APPROVED").length} video approved.
                </span>
              </div>

              {/* Leaderboard Rank */}
              <div className="bg-[#171719] border border-white/10 p-6 rounded-sm flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs text-[#99999F] uppercase tracking-wider font-bold">
                  <span>Peringkat Klasemen</span>
                  <Flame className="w-4 h-4 text-[#EF3340]" />
                </div>
                <div className="my-4">
                  <span
                    className="text-4xl font-black text-white"
                    style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                  >
                    #{rank}
                  </span>
                  <span className="text-xs font-bold text-[#99999F] ml-1.5">dari {creators.length} KREATOR</span>
                </div>
                <span className="text-[11px] text-white/50">
                  {rank <= 3 ? "🔥 Posisi podium bonus hadiah tunai!" : "Tingkatkan submit konten untuk naik peringkat."}
                </span>
              </div>
            </div>

            {/* Submissions History Table */}
            <div className="bg-[#171719] border border-white/10 rounded-sm p-6 sm:p-8">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <h3
                    className="text-xl font-bold uppercase tracking-tight text-white flex items-center gap-2"
                    style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                  >
                    <Video className="w-4 h-4 text-[#EF3340]" />
                    RIWAYAT SUBMISI KONTEN ({currentCreator.submissions.length})
                  </h3>
                  <p className="text-xs text-[#99999F] mt-0.5">
                    Daftar tautan publik video promosi yang telah diajukan ke kurator festival.
                  </p>
                </div>

                <Link
                  href="/creator#action-hub"
                  className="bg-[#EF3340] hover:bg-[#D91F2C] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-sm transition-all"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  + Submit Video Baru
                </Link>
              </div>

              {currentCreator.submissions.length === 0 ? (
                <div className="text-center py-10 text-[#99999F] text-xs">
                  Belum ada konten yang disubmit. Ajukan video Anda untuk mulai mengumpulkan poin.
                </div>
              ) : (
                <div className="divide-y divide-white/5">
                  {currentCreator.submissions.map((sub) => (
                    <div key={sub.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm bg-white/5 border border-white/10 text-white/70">
                            {sub.platform}
                          </span>
                          <span className="text-sm font-bold text-white tracking-tight">
                            {sub.title || "Konten Kampanye JKB 2026"}
                          </span>
                        </div>
                        <div className="mt-1 flex items-center gap-2 text-xs text-[#99999F]">
                          <a
                            href={sub.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#EF3340] hover:underline flex items-center gap-1 truncate max-w-xs sm:max-w-md"
                          >
                            <ExternalLink className="w-3 h-3 shrink-0" />
                            {sub.url}
                          </a>
                        </div>
                        {sub.adminNote && (
                          <p className="text-[11px] text-amber-400 mt-1">
                            Catatan Kurator: {sub.adminNote}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center gap-4 self-end sm:self-center">
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm border ${
                            sub.status === "APPROVED"
                              ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                              : sub.status === "PENDING"
                              ? "bg-amber-500/10 border-amber-500/30 text-amber-400"
                              : "bg-red-500/10 border-red-500/30 text-red-400"
                          }`}
                        >
                          {sub.status === "APPROVED" ? "TERVERIFIKASI" : sub.status === "PENDING" ? "MENUNGGU KURASI" : "DITOLAK"}
                        </span>

                        <span
                          className="text-lg font-black text-amber-400 w-16 text-right"
                          style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                        >
                          +{sub.points} PTS
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Barcode Claims History */}
            <div className="bg-[#171719] border border-white/10 rounded-sm p-6 sm:p-8">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <h3
                    className="text-xl font-bold uppercase tracking-tight text-white flex items-center gap-2"
                    style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                  >
                    <Ticket className="w-4 h-4 text-amber-400" />
                    KLAIM TIKET BARCODE ({currentCreator.barcodeClaims.length})
                  </h3>
                  <p className="text-xs text-[#99999F] mt-0.5">
                    Riwayat penukaran barcode tiket festival harian.
                  </p>
                </div>
              </div>

              {currentCreator.barcodeClaims.length === 0 ? (
                <div className="text-center py-8 text-[#99999F] text-xs">
                  Belum ada klaim barcode tiket yang didaftarkan.
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {currentCreator.barcodeClaims.map((claim) => (
                    <div
                      key={claim.id}
                      className="bg-[#121215] border border-white/10 p-4 rounded-sm space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-sm font-bold text-amber-400 tracking-wider">
                          {claim.barcode}
                        </span>
                        <span
                          className={`text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-sm border ${
                            claim.status === "VERIFIED"
                              ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                              : "bg-amber-500/10 border-amber-500/30 text-amber-400"
                          }`}
                        >
                          {claim.status}
                        </span>
                      </div>
                      <span className="text-[11px] text-[#99999F] block">
                        Reward: +{claim.pointsAwarded || 50} Poin
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </section>
    </div>
  );
}
