import prisma from "@/lib/prisma";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Clock } from "lucide-react";

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
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#F4F0E8] text-[#0B0B0B] pt-24 lg:pt-28 pb-24">
      
      {/* ═════════════════════════════════════════════════════════════════════
          1. EDITORIAL HEADER (Matches 10_creator_dashboard.png)
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pt-8 pb-12 w-full border-b border-black/10">
        <Link
          href="/creator"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#5A5957] hover:text-black uppercase tracking-wider transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>KEMBALI KE CREATOR HUB</span>
        </Link>

        <p
          className="text-[#D91F2C] text-xs sm:text-sm font-extrabold uppercase tracking-[0.24em] mb-4"
          style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
        >
          RUANG PRIBADI KREATOR
        </p>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight leading-[0.88] text-[#0B0B0B]"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              DASHBOARD<br />
              KREATOR.
            </h1>
            <p className="text-sm sm:text-base text-[#5A5957] max-w-xl font-sans mt-4">
              Pantau partisipasi, verifikasi tiket, dan kirim karya liputan dalam satu tempat.
            </p>
          </div>

          {/* Account Selector */}
          {creators.length > 0 && (
            <form method="get" className="flex items-center gap-2 text-xs font-mono">
              <span className="text-[#5A5957]">AKUN:</span>
              <select
                name="creatorId"
                defaultValue={currentCreator?.id}
                className="bg-white/70 border border-black/20 text-[#0B0B0B] px-3 py-2 text-xs focus:outline-none focus:border-[#D91F2C]"
              >
                {creators.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name} ({c.totalPoints} PTS)
                  </option>
                ))}
              </select>
              <button
                type="submit"
                className="px-3.5 py-2 bg-[#0B0B0B] text-white text-xs font-bold uppercase"
              >
                PILIH
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. 3-COLUMN METRICS & CONTENT (Matches 10_creator_dashboard.png)
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-16 w-full flex-1">
        
        {!currentCreator ? (
          <div className="py-24 text-center border-t border-b border-black/10 space-y-3">
            <h3
              className="text-2xl sm:text-3xl font-black uppercase text-[#0B0B0B]"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              BELUM ADA AKUN KREATOR
            </h3>
            <p className="text-sm text-[#5A5957] max-w-md mx-auto">
              Daftarkan profil kreator Anda di Creator Hub untuk mulai berpartisipasi dan meliput festival.
            </p>
            <Link
              href="/creator"
              className="inline-block mt-4 px-6 py-3 bg-[#0B0B0B] text-white text-xs font-bold uppercase tracking-wider font-display"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              DAFTAR SEKARANG ↗
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Col 1: STATUS AKUN */}
            <div className="space-y-6">
              <div className="border-b border-black/10 pb-3">
                <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#D91F2C]">
                  BAGIAN 01
                </span>
                <h3
                  className="text-2xl font-black uppercase text-[#0B0B0B]"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  STATUS AKUN
                </h3>
              </div>

              <div className="space-y-4">
                <div className="py-3 border-b border-black/10">
                  <span className="text-[11px] font-mono text-[#5A5957] uppercase block">Peringkat Kreator</span>
                  <p className="text-2xl font-black text-[#0B0B0B]">PERINGKAT #{rank}</p>
                </div>

                <div className="py-3 border-b border-black/10">
                  <span className="text-[11px] font-mono text-[#5A5957] uppercase block">Akumulasi Poin</span>
                  <p className="text-2xl font-black text-[#D91F2C]">{currentCreator.totalPoints} POIN</p>
                </div>

                <div className="py-3 border-b border-black/10">
                  <span className="text-[11px] font-mono text-[#5A5957] uppercase block">Status Verifikasi</span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase mt-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {currentCreator.status === "APPROVED" ? "TERVERIFIKASI RESMI" : currentCreator.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Col 2: KONTEN SAYA */}
            <div className="space-y-6">
              <div className="border-b border-black/10 pb-3">
                <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#D91F2C]">
                  BAGIAN 02
                </span>
                <h3
                  className="text-2xl font-black uppercase text-[#0B0B0B]"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  KONTEN SAYA
                </h3>
              </div>

              <div className="space-y-3">
                {currentCreator.submissions.length === 0 ? (
                  <p className="text-xs text-[#5A5957] font-mono py-4">Belum ada karya konten yang disubmit.</p>
                ) : (
                  currentCreator.submissions.map((sub) => (
                    <div key={sub.id} className="py-3 border-b border-black/10 flex items-center justify-between text-xs">
                      <div>
                        <p className="font-bold text-[#0B0B0B]">{sub.platform} Konten</p>
                        <p className="text-[10px] text-[#5A5957] font-mono truncate max-w-[180px]">{sub.url}</p>
                      </div>
                      <span className="font-mono text-[10px] font-bold text-[#D91F2C]">{sub.status}</span>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Col 3: PROFIL KREATOR */}
            <div className="space-y-6">
              <div className="border-b border-black/10 pb-3">
                <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#D91F2C]">
                  BAGIAN 03
                </span>
                <h3
                  className="text-2xl font-black uppercase text-[#0B0B0B]"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  PROFIL
                </h3>
              </div>

              <div className="space-y-3 text-xs">
                <div className="py-2 border-b border-black/10">
                  <span className="text-[10px] font-mono text-[#5A5957] uppercase block">Nama</span>
                  <p className="font-bold text-sm text-[#0B0B0B]">{currentCreator.name}</p>
                </div>
                <div className="py-2 border-b border-black/10">
                  <span className="text-[10px] font-mono text-[#5A5957] uppercase block">Kategori</span>
                  <p className="font-bold text-sm text-[#0B0B0B]">{currentCreator.category}</p>
                </div>
                <div className="py-2 border-b border-black/10">
                  <span className="text-[10px] font-mono text-[#5A5957] uppercase block">Sosial Media</span>
                  <p className="font-mono text-[#0B0B0B]">
                    IG: {currentCreator.instagram || "-"} • TikTok: {currentCreator.tiktok || "-"}
                  </p>
                </div>
              </div>
            </div>

          </div>
        )}

      </section>

    </main>
  );
}
