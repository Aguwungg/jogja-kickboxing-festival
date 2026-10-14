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
          1. EDITORIAL HEADER
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pt-8 pb-12 w-full border-b border-black/10">
        <Link
          href="/creator"
          className="inline-flex items-center gap-1.5 text-xs font-technical text-[#77716D] hover:text-black uppercase tracking-wider transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>KEMBALI KE CREATOR HUB</span>
        </Link>

        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#D91F2C]" />
          <p className="font-technical text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
            RUANG PRIBADI • CREATOR WORKSPACE
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tight leading-[0.85] text-[#0B0B0B]">
              DASHBOARD<br />
              KREATOR.
            </h1>
            <p className="text-sm sm:text-base text-[#5A5957] max-w-xl font-sans mt-3 leading-relaxed">
              Pantau status akreditasi, verifikasi tiket, dan riwayat kiriman karya liputan dalam satu tempat yang tenang.
            </p>
          </div>

          {/* Account Selector */}
          {creators.length > 0 && (
            <form method="get" className="flex items-center gap-2 text-xs font-technical">
              <span className="text-[#77716D]">AKUN:</span>
              <select
                name="creatorId"
                defaultValue={currentCreator?.id}
                className="bg-white border border-black/25 text-[#0B0B0B] px-3 py-2 text-xs focus:outline-none focus:border-[#D91F2C]"
              >
                {creators.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name} ({c.totalPoints} PTS)
                  </option>
                ))}
              </select>
              <button
                type="submit"
                className="px-4 py-2 bg-[#0B0B0B] text-white text-xs font-display tracking-wider uppercase"
              >
                PILIH
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. 3-COLUMN METRICS & CONTENT
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-16 w-full flex-1">
        {!currentCreator ? (
          <div className="py-20 text-center border-t border-b border-black/15 space-y-3">
            <h3 className="font-display text-3xl uppercase tracking-wider text-[#0B0B0B]">
              BELUM ADA PROFIL KREATOR TERPILIH
            </h3>
            <p className="text-sm text-[#5A5957]">
              Daftarkan diri Anda melalui portal formulir Creator Hub untuk memulai.
            </p>
            <div className="pt-4">
              <Link
                href="/creator"
                className="font-display text-sm uppercase tracking-wider text-white bg-[#0B0B0B] px-6 py-3 inline-block"
              >
                DAFTAR KREATOR ↗
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Col 1: Status Akun */}
            <div className="lg:col-span-4 space-y-6">
              <div className="border-b border-black/15 pb-3">
                <span className="font-technical text-xs uppercase font-bold tracking-widest text-[#D91F2C]">
                  SEKSI 01
                </span>
                <h3 className="font-display text-3xl uppercase tracking-wider text-[#0B0B0B]">
                  STATUS AKUN
                </h3>
              </div>

              <div className="bg-white p-6 border border-black/15 ring-corner-frame space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-technical text-xs text-[#77716D]">STATUS VERIFIKASI</span>
                  <span
                    className={`font-technical text-xs font-bold uppercase px-2.5 py-0.5 ${
                      currentCreator.status === "APPROVED"
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-amber-100 text-amber-800"
                    }`}
                  >
                    {currentCreator.status}
                  </span>
                </div>

                <div className="border-t border-black/10 pt-4 space-y-3">
                  <div>
                    <span className="font-technical text-[10px] text-[#77716D] uppercase block">TOTAL POIN KARYA</span>
                    <span className="font-display text-5xl font-black text-[#0B0B0B]">{currentCreator.totalPoints}</span>
                  </div>
                  <div>
                    <span className="font-technical text-[10px] text-[#77716D] uppercase block">PERINGKAT KREATOR</span>
                    <span className="font-display text-2xl font-black text-[#D91F2C]">#{rank} DARI {creators.length} KREATOR</span>
                  </div>
                </div>

                <div className="border-t border-black/10 pt-4 text-xs font-technical text-[#77716D]">
                  ID: {currentCreator.id.slice(0, 12)}...
                </div>
              </div>
            </div>

            {/* Col 2: Konten Saya */}
            <div className="lg:col-span-5 space-y-6">
              <div className="border-b border-black/15 pb-3">
                <span className="font-technical text-xs uppercase font-bold tracking-widest text-[#D91F2C]">
                  SEKSI 02
                </span>
                <h3 className="font-display text-3xl uppercase tracking-wider text-[#0B0B0B]">
                  KONTEN SAYA
                </h3>
              </div>

              <div className="space-y-4">
                {currentCreator.submissions.length === 0 ? (
                  <div className="p-6 bg-white border border-black/15 text-center text-xs font-technical text-[#77716D]">
                    Belum ada submisi konten yang tercatat untuk akun ini.
                  </div>
                ) : (
                  currentCreator.submissions.map((sub, idx) => (
                    <div key={sub.id} className="p-4 bg-white border border-black/15 space-y-2">
                      <div className="flex items-center justify-between text-[10px] font-technical text-[#77716D]">
                        <span>KARYA #{idx + 1}</span>
                        <span className="font-bold text-[#D91F2C] uppercase">{sub.status}</span>
                      </div>
                      <a
                        href={sub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-[#0B0B0B] hover:text-[#D91F2C] flex items-center justify-between transition-colors"
                      >
                        <span className="truncate">{sub.url}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 shrink-0 ml-2" />
                      </a>
                      <div className="text-[11px] font-technical text-[#77716D]">
                        Poin Diberikan: {sub.points} PTS
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Col 3: Profil & Kanal */}
            <div className="lg:col-span-3 space-y-6">
              <div className="border-b border-black/15 pb-3">
                <span className="font-technical text-xs uppercase font-bold tracking-widest text-[#D91F2C]">
                  SEKSI 03
                </span>
                <h3 className="font-display text-3xl uppercase tracking-wider text-[#0B0B0B]">
                  PROFIL
                </h3>
              </div>

              <div className="bg-white p-6 border border-black/15 space-y-3 font-technical text-xs">
                <div>
                  <span className="text-[#77716D] uppercase block text-[10px]">NAMA</span>
                  <span className="font-bold text-[#0B0B0B] text-sm">{currentCreator.name}</span>
                </div>
                <div>
                  <span className="text-[#77716D] uppercase block text-[10px]">KATEGORI</span>
                  <span className="text-[#0B0B0B]">{currentCreator.category || "Kreator Konten"}</span>
                </div>
                {currentCreator.instagram && (
                  <div>
                    <span className="text-[#77716D] uppercase block text-[10px]">INSTAGRAM</span>
                    <span className="text-[#0B0B0B]">{currentCreator.instagram}</span>
                  </div>
                )}
                {currentCreator.tiktok && (
                  <div>
                    <span className="text-[#77716D] uppercase block text-[10px]">TIKTOK</span>
                    <span className="text-[#0B0B0B]">{currentCreator.tiktok}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </section>

    </main>
  );
}
