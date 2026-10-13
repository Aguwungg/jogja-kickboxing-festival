import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import { ArrowUpRight, Scale, ShieldAlert } from "lucide-react";

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

  return (
    <main className="flex-1 flex flex-col w-full min-h-screen text-[#F4F0E8] bg-[#0B0B0B] pt-24 pb-20 overflow-x-hidden">
      
      {/* Breadcrumb */}
      <div className="w-full py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#8F8E8B] border-b border-white/5">
        <Link href="/" className="hover:text-white transition-colors">BERANDA</Link>
        <span>/</span>
        <Link href="/fighters" className="hover:text-white transition-colors">DAFTAR PETARUNG</Link>
        <span>/</span>
        <span className="text-[#D91F2C] font-bold">{fighter.name}</span>
      </div>

      {/* Hero Banner & Tale of the Tape Header */}
      <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#141416] border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Fighter Photo Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto bg-[#0B0B0B] border border-white/10 overflow-hidden shadow-2xl">
              {fighter.image ? (
                <Image
                  src={fighter.image}
                  alt={fighter.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top grayscale contrast-125"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0B0B0B]">
                  <span className="font-display text-9xl font-black text-white/5" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
                    {fighter.name.charAt(0)}
                  </span>
                  <p className="text-xs text-[#8F8E8B] uppercase tracking-widest mt-4 font-mono">POTRET ATLET</p>
                </div>
              )}
              
              <div className="absolute top-4 left-4 bg-[#D91F2C] text-white px-3 py-1 text-xs font-mono uppercase tracking-widest font-bold">
                {fighter.division} DIVISI
              </div>
            </div>
          </div>

          {/* Fighter Info & Stats */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="v9-overline text-[#D91F2C]">
                #JOGJAPUNYANYALI • ROSTER RESMI
              </span>
              <h1
                className="v9-display-title text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F4F0E8] leading-[0.88]"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                {fighter.name}
              </h1>
              <p className="text-sm sm:text-base text-[#8F8E8B] font-mono">
                {fighter.club || "Independen"} • {fighter.weightClass || "Belum Diverifikasi"}
              </p>
            </div>

            {/* Record Grid */}
            <div className="grid grid-cols-3 gap-3 pt-2 font-mono">
              <div className="p-4 bg-[#0B0B0B] border border-white/10 text-center">
                <span className="text-[10px] text-[#8F8E8B] uppercase tracking-widest block">MENANG (W)</span>
                <span className="text-3xl font-display font-black text-[#F4F0E8] mt-1 block" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
                  {fighter.wins}
                </span>
              </div>
              <div className="p-4 bg-[#0B0B0B] border border-white/10 text-center">
                <span className="text-[10px] text-[#8F8E8B] uppercase tracking-widest block">KALAH (L)</span>
                <span className="text-3xl font-display font-black text-[#8F8E8B] mt-1 block" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
                  {fighter.losses}
                </span>
              </div>
              <div className="p-4 bg-[#0B0B0B] border border-white/10 text-center">
                <span className="text-[10px] text-[#8F8E8B] uppercase tracking-widest block">SERI (D)</span>
                <span className="text-3xl font-display font-black text-[#8F8E8B] mt-1 block" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
                  {fighter.draws}
                </span>
              </div>
            </div>

            {/* Tale of the Tape Specs */}
            <div className="border border-white/10 bg-[#0B0B0B] divide-y divide-white/10 text-xs font-mono">
              <div className="flex justify-between p-3">
                <span className="text-[#8F8E8B]">DIVISI BERAT</span>
                <span className="text-[#F4F0E8] font-bold">{fighter.division}</span>
              </div>
              <div className="flex justify-between p-3">
                <span className="text-[#8F8E8B]">BATAS KELAS</span>
                <span className="text-[#F4F0E8] font-bold">{fighter.weightClass || "-"}</span>
              </div>
              <div className="flex justify-between p-3">
                <span className="text-[#8F8E8B]">SASANA / ASAL</span>
                <span className="text-[#F4F0E8] font-bold">{fighter.club || "Independen"}</span>
              </div>
              <div className="flex justify-between p-3">
                <span className="text-[#8F8E8B]">STATUS VERIFIKASI</span>
                <span className="text-[#D91F2C] font-bold">TERDAFTAR RESMI JKBF</span>
              </div>
            </div>

            {/* Pre-event notice */}
            <p className="text-[11px] text-[#5A5957] font-mono leading-relaxed">
              Catatan rekor dan statistik atlet diverifikasi berdasarkan data pendaftaran awal. Validasi akhir dilakukan pada saat timbang badan resmi (12 Desember 2026).
            </p>
          </div>

        </div>
      </section>

      {/* Related Fighters */}
      {relatedFighters.length > 0 && (
        <section className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex justify-between items-baseline mb-8 border-b border-white/10 pb-3">
            <h2
              className="v9-display-title text-2xl sm:text-3xl text-[#F4F0E8]"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              PETARUNG LAIN DI DIVISI {fighter.division.toUpperCase()}
            </h2>
            <Link href="/fighters" className="text-xs font-mono text-[#D91F2C] hover:underline uppercase">
              SEMUA PETARUNG ↗
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedFighters.map((rel) => (
              <Link
                key={rel.id}
                href={`/fighters/${rel.slug}`}
                className="group bg-[#141416] border border-white/10 hover:border-[#D91F2C] p-4 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#0B0B0B] border border-white/10 relative overflow-hidden flex-shrink-0">
                    {rel.image ? (
                      <Image
                        src={rel.image}
                        alt={rel.name}
                        fill
                        className="object-cover grayscale contrast-125"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-xs font-mono text-[#8F8E8B]">
                        {rel.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-display font-black text-lg text-[#F4F0E8] group-hover:text-white" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
                      {rel.name}
                    </h3>
                    <p className="text-xs text-[#8F8E8B] font-mono">{rel.club || "Independen"}</p>
                    <span className="text-[10px] text-[#D91F2C] font-mono mt-1 block">
                      {rel.wins}W - {rel.losses}L
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

    </main>
  );
}
