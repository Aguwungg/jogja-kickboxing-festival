import prisma from "@/lib/prisma";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Trophy, Video, Ticket, CheckCircle2, Clock, AlertCircle } from "lucide-react";

export const metadata = {
  title: "Dashboard Personal Kreator | JKBF 2026",
  description: "Pantau profil kreator, riwayat submisi video festival, akumulasi poin, dan verifikasi tiket di Jogja Kickboxing Festival.",
};

export default async function CreatorDashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ creatorId?: string }>;
}) {
  const { creatorId } = await searchParams;

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

  const currentCreator =
    creators.find((c) => c.id === creatorId) || creators[0] || null;

  const rank = currentCreator
    ? creators.findIndex((c) => c.id === currentCreator.id) + 1
    : 0;

  return (
    <main className="flex-1 flex flex-col w-full min-h-screen text-[#F4F0E8] bg-[#0B0B0B] pt-24 pb-20">
      
      {/* Top Header */}
      <section className="border-b border-white/10 py-12 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Link
            href="/creator"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#8F8E8B] hover:text-[#F4F0E8] uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>KEMBALI KE CREATOR HUB</span>
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="v9-overline text-[#D91F2C]">PORTAL KREATOR RESMI</span>
              <h1
                className="v9-display-title text-4xl sm:text-5xl md:text-6xl text-[#F4F0E8] mt-1"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                DASHBOARD KREATOR
              </h1>
            </div>

            {/* Account Switcher */}
            {creators.length > 0 && (
              <form method="get" className="flex items-center gap-2 text-xs font-mono">
                <span className="text-[#8F8E8B]">PILIH AKUN:</span>
                <select
                  name="creatorId"
                  defaultValue={currentCreator?.id}
                  className="bg-[#141416] border border-white/10 text-[#F4F0E8] px-3 py-2 text-xs focus:outline-none focus:border-[#D91F2C]"
                >
                  {creators.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name} ({c.totalPoints} PTS)
                    </option>
                  ))}
                </select>
                <button
                  type="submit"
                  className="px-3 py-2 bg-[#141416] hover:bg-white/10 border border-white/10 text-xs font-bold uppercase"
                >
                  PILIH
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Main Dashboard Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 w-full flex-1">
        
        {!currentCreator ? (
          <div className="p-16 text-center bg-[#141416] border border-white/10 space-y-4 max-w-md mx-auto">
            <h3 className="v9-display-title text-2xl text-[#F4F0E8]" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
              BELUM ADA AKUN KREATOR
            </h3>
            <p className="text-xs text-[#8F8E8B]">
              Daftarkan profil kreator Anda di Creator Hub untuk mulai meliput.
            </p>
            <Link href="/creator" className="v9-btn-red text-xs inline-flex">
              DAFTAR SEKARANG ↗
            </Link>
          </div>
        ) : (
          <>
            {/* Overview Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono">
              <div className="p-5 bg-[#141416] border border-white/10">
                <span className="text-[10px] text-[#8F8E8B] uppercase tracking-widest block">PERINGKAT</span>
                <span className="text-3xl font-display font-black text-[#D91F2C] mt-1 block" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
                  #{rank}
                </span>
                <span className="text-[10px] text-[#5A5957] block mt-1">DARI {creators.length} KREATOR</span>
              </div>

              <div className="p-5 bg-[#141416] border border-white/10">
                <span className="text-[10px] text-[#8F8E8B] uppercase tracking-widest block">TOTAL POIN</span>
                <span className="text-3xl font-display font-black text-[#F4F0E8] mt-1 block" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
                  {currentCreator.totalPoints}
                </span>
                <span className="text-[10px] text-[#5A5957] block mt-1">AKUMULASI RESMI</span>
              </div>

              <div className="p-5 bg-[#141416] border border-white/10">
                <span className="text-[10px] text-[#8F8E8B] uppercase tracking-widest block">TOTAL SUBMISI</span>
                <span className="text-3xl font-display font-black text-[#F4F0E8] mt-1 block" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
                  {currentCreator.submissions.length}
                </span>
                <span className="text-[10px] text-[#5A5957] block mt-1">KONTEN DIUNGGAH</span>
              </div>

              <div className="p-5 bg-[#141416] border border-white/10">
                <span className="text-[10px] text-[#8F8E8B] uppercase tracking-widest block">STATUS KREATOR</span>
                <span className="text-xl font-display font-black text-green-400 mt-2 block" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
                  {currentCreator.status}
                </span>
                <span className="text-[10px] text-[#5A5957] block mt-1">TERVERIFIKASI PANITIA</span>
              </div>
            </div>

            {/* Submissions Section */}
            <div className="space-y-4">
              <div className="border-b border-white/10 pb-3 flex justify-between items-baseline">
                <h2 className="v9-display-title text-2xl text-[#F4F0E8]" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
                  RIWAYAT SUBMISI KONTEN
                </h2>
                <span className="text-xs font-mono text-[#8F8E8B]">
                  {currentCreator.submissions.length} KONTEN TERCATAT
                </span>
              </div>

              {currentCreator.submissions.length === 0 ? (
                <div className="p-12 text-center bg-[#141416] border border-white/10 text-xs font-mono text-[#8F8E8B]">
                  BELUM ADA SUBMISI KONTEN DARI AKUN INI
                </div>
              ) : (
                <div className="border border-white/10 divide-y divide-white/10 bg-[#141416]">
                  {currentCreator.submissions.map((sub) => (
                    <div key={sub.id} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
                      <div>
                        <span className="text-[#F4F0E8] font-bold block">SUBMISI #{sub.id.slice(-6)}</span>
                        <span className="text-[10px] text-[#8F8E8B]">STATUS: {sub.status}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-bold text-[#D91F2C]">{sub.points} PTS</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Barcode / Ticket Claims */}
            <div className="space-y-4">
              <div className="border-b border-white/10 pb-3 flex justify-between items-baseline">
                <h2 className="v9-display-title text-2xl text-[#F4F0E8]" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
                  KLAIM TIKET & MEDIA PASS
                </h2>
                <span className="text-xs font-mono text-[#8F8E8B]">
                  {currentCreator.barcodeClaims.length} KLAIM
                </span>
              </div>

              {currentCreator.barcodeClaims.length === 0 ? (
                <div className="p-12 text-center bg-[#141416] border border-white/10 text-xs font-mono text-[#8F8E8B]">
                  BELUM ADA KLAIM TIKET YANG DIAJUKAN
                </div>
              ) : (
                <div className="border border-white/10 divide-y divide-white/10 bg-[#141416]">
                  {currentCreator.barcodeClaims.map((claim) => (
                    <div key={claim.id} className="p-4 sm:p-5 flex items-center justify-between text-xs font-mono">
                      <span className="text-[#F4F0E8] font-bold">KLAIM #{claim.id.slice(-6)}</span>
                      <span className="text-[#8F8E8B]">STATUS: {claim.status}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}

      </section>

    </main>
  );
}
