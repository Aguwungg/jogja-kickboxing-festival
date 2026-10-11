import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";

export default async function FighterDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const fighter = await prisma.athlete.findUnique({
    where: { slug },
  });

  if (!fighter || !fighter.isPublished) {
    notFound();
  }

  // Related fighters in the same division or weight class
  const relatedFighters = await prisma.athlete.findMany({
    where: {
      isPublished: true,
      id: { not: fighter.id },
      division: fighter.division,
    },
    take: 3,
  });

  const totalFights = fighter.wins + fighter.losses + fighter.draws;
  const winRate = totalFights > 0 ? Math.round((fighter.wins / totalFights) * 100) : 0;
  const isDemo = fighter.slug.startsWith("fighter-demo") || fighter.slug === "agung";

  return (
    <main className="flex-1 flex flex-col w-full min-h-screen text-jkb-offwhite bg-jkb-black overflow-x-hidden">
      {/* ═══════════════════════════════════════════════════
          BREADCRUMB & BACK LINK
      ═══════════════════════════════════════════════════ */}
      <div className="w-full pt-24 pb-4 px-5 max-w-7xl mx-auto flex items-center gap-2 text-xs text-jkb-gray uppercase tracking-widest">
        <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
        <span>/</span>
        <Link href="/fighters" className="hover:text-white transition-colors">Fighter Center</Link>
        <span>/</span>
        <span className="text-jkb-red font-bold">{fighter.name}</span>
      </div>

      {/* ═══════════════════════════════════════════════════
          STAGING DISCLAIMER BANNER (DATA INTEGRITY)
      ═══════════════════════════════════════════════════ */}
      {isDemo && (
        <div className="w-full bg-yellow-500/10 border-y border-yellow-500/30 px-5 py-2.5">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-yellow-300">
            <div className="flex items-center gap-2">
              <span className="font-bold bg-yellow-400 text-black px-1.5 py-0.5 uppercase text-[10px] tracking-wider">DATA SIMULASI</span>
              <span>Profil atlet ini merupakan perlengkapan data uji coba teknis (*staging test fixture*).</span>
            </div>
            <span className="text-yellow-400/80 text-[11px]">Roster resmi diverifikasi saat weigh-in kejuaraan.</span>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════
          HERO BANNER & PROFILE HEADER
      ═══════════════════════════════════════════════════ */}
      <section className="relative w-full py-12 md:py-16 px-5 bg-jkb-charcoal border-b border-white/5 overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-jkb-red/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          
          {/* Fighter Action Photo / Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto bg-jkb-surface border border-white/10 overflow-hidden shadow-2xl">
              {fighter.image ? (
                <Image
                  src={fighter.image}
                  alt={fighter.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-jkb-black via-jkb-surface to-jkb-surface">
                  <span className="font-display text-9xl font-black text-white/10">
                    {fighter.name.charAt(0)}
                  </span>
                  <p className="text-xs text-jkb-gray uppercase tracking-widest mt-4">Simulasi Potret Atlet</p>
                </div>
              )}
              {/* Badge overlay */}
              <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 shadow-md ${
                  fighter.division === "Pro" ? "bg-jkb-red text-white" :
                  fighter.division === "Exhibition" ? "bg-jkb-gold text-jkb-black" :
                  "bg-white/10 text-white"
                }`}>
                  {fighter.division} Division
                </span>
                {isDemo && (
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-yellow-500 text-black shadow-md self-start">
                    SIMULASI STAGING
                  </span>
                )}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-jkb-red" />
            </div>
          </div>

          {/* Fighter Info & Key Record Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-jkb-red font-bold text-xs uppercase tracking-[0.3em] border-l-2 border-jkb-red pl-3 block">
                #JOGJAPUNYANYALI • ROSTER 2026
              </span>
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[0.9]">
                {fighter.name}
              </h1>
              <p className="text-lg text-jkb-gray font-medium">
                {fighter.club || "Sasana Kickboxing Jogja"} • <span className="text-white">{fighter.weightClass}</span>
              </p>
            </div>

            {/* Official Record Cards */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-jkb-black border border-white/5 p-4 text-center">
                <span className="font-display text-3xl sm:text-4xl font-black text-green-400 block">{fighter.wins}</span>
                <span className="text-[10px] text-jkb-gray uppercase tracking-widest mt-1 block">Menang (W)</span>
              </div>
              <div className="bg-jkb-black border border-white/5 p-4 text-center">
                <span className="font-display text-3xl sm:text-4xl font-black text-red-400 block">{fighter.losses}</span>
                <span className="text-[10px] text-jkb-gray uppercase tracking-widest mt-1 block">Kalah (L)</span>
              </div>
              <div className="bg-jkb-black border border-white/5 p-4 text-center">
                <span className="font-display text-3xl sm:text-4xl font-black text-jkb-gray block">{fighter.draws}</span>
                <span className="text-[10px] text-jkb-gray uppercase tracking-widest mt-1 block">Seri (D)</span>
              </div>
              <div className="bg-jkb-black border border-white/5 p-4 text-center col-span-3 sm:col-span-1">
                <span className="font-display text-3xl sm:text-4xl font-black text-jkb-gold block">{winRate}%</span>
                <span className="text-[10px] text-jkb-gray uppercase tracking-widest mt-1 block">Win Rate</span>
              </div>
            </div>

            {/* Win Ratio Bar */}
            <div className="space-y-1.5 pt-2">
              <div className="flex justify-between text-xs text-jkb-gray">
                <span>Rasio Pertandingan Simulasi</span>
                <span>{totalFights} Total Laga Tercatat</span>
              </div>
              <div className="w-full h-2.5 bg-jkb-surface rounded-full overflow-hidden flex">
                <div style={{ width: `${winRate}%` }} className="h-full bg-green-500" title={`Wins: ${fighter.wins}`} />
                <div style={{ width: `${totalFights > 0 ? (fighter.losses / totalFights) * 100 : 0}%` }} className="h-full bg-red-500" title={`Losses: ${fighter.losses}`} />
                <div style={{ width: `${totalFights > 0 ? (fighter.draws / totalFights) * 100 : 0}%` }} className="h-full bg-gray-500" title={`Draws: ${fighter.draws}`} />
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-3 pt-4">
              <Link
                href="/jadwal"
                className="font-display bg-jkb-red hover:bg-jkb-bright-red text-white uppercase tracking-widest text-sm px-7 py-3.5 font-bold transition-all"
              >
                Jadwal Tanding
              </Link>
              <Link
                href="/fighters"
                className="font-display border border-white/20 hover:border-white/50 hover:bg-white/5 text-white uppercase tracking-widest text-sm px-7 py-3.5 font-bold transition-all"
              >
                Semua Fighter
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          TALE OF THE TAPE — Full Specs Matrix
      ═══════════════════════════════════════════════════ */}
      <section className="w-full py-16 px-5 bg-jkb-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <span className="text-jkb-red font-bold text-xs uppercase tracking-[0.3em]">OFFICIAL METRICS</span>
            <h2 className="font-display text-3xl md:text-4xl font-black uppercase mt-1">Tale of the Tape</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-jkb-charcoal border border-white/5 p-6 space-y-1">
              <span className="text-xs text-jkb-gray uppercase tracking-wider block">Divisi Turnamen</span>
              <p className="font-display text-2xl font-bold text-white uppercase">{fighter.division}</p>
            </div>

            <div className="bg-jkb-charcoal border border-white/5 p-6 space-y-1">
              <span className="text-xs text-jkb-gray uppercase tracking-wider block">Kategori Berat</span>
              <p className="font-display text-2xl font-bold text-white uppercase">{fighter.weightClass}</p>
            </div>

            <div className="bg-jkb-charcoal border border-white/5 p-6 space-y-1">
              <span className="text-xs text-jkb-gray uppercase tracking-wider block">Sasana / Fight Camp</span>
              <p className="font-display text-2xl font-bold text-white uppercase">{fighter.club || "Sasana Mandiri"}</p>
            </div>

            <div className="bg-jkb-charcoal border border-white/5 p-6 space-y-1">
              <span className="text-xs text-jkb-gray uppercase tracking-wider block">Aturan Pertandingan</span>
              <p className="font-display text-2xl font-bold text-white uppercase">Kickboxing / K-1 Rules</p>
            </div>

            <div className="bg-jkb-charcoal border border-white/5 p-6 space-y-1">
              <span className="text-xs text-jkb-gray uppercase tracking-wider block">Status Data</span>
              <p className="font-display text-2xl font-bold text-yellow-400 uppercase">
                {isDemo ? "Simulasi Staging" : "Terverifikasi Panitia"}
              </p>
            </div>

            <div className="bg-jkb-charcoal border border-white/5 p-6 space-y-1">
              <span className="text-xs text-jkb-gray uppercase tracking-wider block">Evaluasi Performa</span>
              <p className="font-display text-2xl font-bold text-jkb-gold uppercase">{winRate > 70 ? "Top Contender" : "Rising Challenger"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FIGHTER BIO & SPIRIT
      ═══════════════════════════════════════════════════ */}
      <section className="w-full py-16 px-5 bg-jkb-charcoal border-t border-white/5">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="text-jkb-red font-bold text-xs uppercase tracking-[0.3em]">DI BALIK KALEM</span>
          <h2 className="font-display text-3xl md:text-4xl font-black uppercase">Nyali di Atas Ring</h2>
          <p className="text-jkb-gray text-base md:text-lg leading-relaxed">
            Mewakili kehormatan {fighter.club || "Yogyakarta"}, {fighter.name} siap membuktikan ketangguhan fisik dan mentalitas tanpa kompromi di panggung Jogja Kickboxing Festival & Redy Championship 2. Bertarung di kelas {fighter.weightClass}, setiap pukulan dan tendangan adalah bukti dedikasi latihan panjang menuju takhta juara GOR UNY 2026.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          RELATED FIGHTERS IN DIVISION
      ═══════════════════════════════════════════════════ */}
      {relatedFighters.length > 0 && (
        <section className="w-full py-16 px-5 bg-jkb-black border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-8">
              <div>
                <span className="text-jkb-red font-bold text-xs uppercase tracking-[0.3em]">DIVISI {fighter.division.toUpperCase()}</span>
                <h3 className="font-display text-2xl md:text-3xl font-black uppercase mt-1">Petarung Lain di Kelas Ini</h3>
              </div>
              <Link href="/fighters" className="font-display text-xs text-jkb-gray hover:text-white uppercase tracking-wider border-b border-white/20 pb-1">
                Lihat Semua →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedFighters.map((f) => (
                <Link
                  key={f.id}
                  href={`/fighters/${f.slug}`}
                  className="bg-jkb-charcoal border border-white/5 hover:border-jkb-red/50 p-5 transition-all group block"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-display text-lg font-bold uppercase group-hover:text-jkb-red transition-colors">{f.name}</h4>
                      <p className="text-jkb-gray text-xs mt-0.5">{f.club || "Sasana Mandiri"}</p>
                    </div>
                    <span className="font-display text-sm font-bold text-green-400">{f.wins}W - {f.losses}L</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
