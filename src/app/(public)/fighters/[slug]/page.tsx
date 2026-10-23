import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import { ArrowUpRight } from "lucide-react";

export default async function FighterDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let fighter: any = null;
  let relatedFighters: any[] = [];

  try {
    fighter = await prisma.athlete.findUnique({
      where: { slug },
    });

    if (fighter) {
      relatedFighters = await prisma.athlete.findMany({
        where: {
          isPublished: true,
          id: { not: fighter.id },
          division: fighter.division,
        },
        take: 3,
      });
    }
  } catch (e) {
    console.warn("Using fallback athlete detail:", e);
  }

  // Fallback athlete dictionary
  if (!fighter) {
    const FALLBACK_MAP: Record<string, any> = {
      agung: {
        id: "cmv2u14i30000i8yes0k33zgt",
        name: "Agung Hendi",
        slug: "agung",
        weightClass: "80kg Middleweight",
        division: "Pro",
        club: "BlackRed Combat Club",
        wins: 10,
        losses: 1,
        draws: 0,
        image: "/images/jkb/fighter-agung.jpg",
        isPublished: true,
      },
      "fighter-demo-01": {
        id: "cmv3ni1hf0000sy6wn0wyjyjt",
        name: "Bayu 'The Thunder' Pratama",
        slug: "fighter-demo-01",
        weightClass: "57kg Bantamweight",
        division: "Pro",
        club: "Jogja Fight Camp",
        wins: 8,
        losses: 2,
        draws: 0,
        image: "/images/jkb/fighter-1.jpg",
        isPublished: true,
      },
      "fighter-demo-02": {
        id: "cmv3ni1hn0001sy6wdfu1z9o1",
        name: "Rian 'Sleman Warrior' Setiawan",
        slug: "fighter-demo-02",
        weightClass: "57kg Bantamweight",
        division: "Pro",
        club: "Sleman Warrior",
        wins: 6,
        losses: 3,
        draws: 1,
        image: "/images/jkb/fighter-2.jpg",
        isPublished: true,
      },
      "fighter-demo-03": {
        id: "cmv3ni1hn0002sy6wx7xe79dn",
        name: "Dimas 'South Coast' Wicaksono",
        slug: "fighter-demo-03",
        weightClass: "63.5kg Lightweight",
        division: "Pro",
        club: "Bantul Fighting",
        wins: 12,
        losses: 1,
        draws: 0,
        image: "/images/jkb/fighter-3.jpg",
        isPublished: true,
      },
      "fighter-demo-04": {
        id: "cmv3ni1ho0003sy6wamr4bjvb",
        name: "Ahmad 'Borobudur Iron' Fauzi",
        slug: "fighter-demo-04",
        weightClass: "63.5kg Lightweight",
        division: "Pro",
        club: "Magelang MMA",
        wins: 9,
        losses: 4,
        draws: 0,
        image: "/images/jkb/fighter-4.jpg",
        isPublished: true,
      },
      "fighter-demo-05": {
        id: "cmv3ni1ho0004sy6w7i4vgx4j",
        name: "Surya 'Bengawan' Saputra",
        slug: "fighter-demo-05",
        weightClass: "70kg Welterweight",
        division: "Amateur",
        club: "Solo Kick",
        wins: 4,
        losses: 1,
        draws: 0,
        image: "/images/jkb/fighter-5.jpg",
        isPublished: true,
      },
      "fighter-demo-06": {
        id: "cmv3ni1ho0005sy6womu4xjgs",
        name: "Fajar 'Kraton Blade' Nugroho",
        slug: "fighter-demo-06",
        weightClass: "70kg Welterweight",
        division: "Amateur",
        club: "Jogja Pride Gym",
        wins: 3,
        losses: 2,
        draws: 1,
        image: "/images/jkb/fighter-6.jpg",
        isPublished: true,
      },
      "fighter-demo-08": {
        id: "cmv3ni1hp0007sy6ww7phu7gk",
        name: "Kurniawan 'The Sniper' Jati",
        slug: "fighter-demo-08",
        weightClass: "80kg Middleweight",
        division: "Pro",
        club: "Klaten Striker",
        wins: 15,
        losses: 3,
        draws: 0,
        image: "/images/jkb/fighter-8.jpg",
        isPublished: true,
      },
    };

    fighter = FALLBACK_MAP[slug];
  }

  if (!fighter) {
    notFound();
  }

  const totalFights = (fighter.wins || 0) + (fighter.losses || 0) + (fighter.draws || 0);

  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#0B0B0B] text-[#FAFAFA] pt-24 lg:pt-28 pb-24 overflow-x-hidden font-sans">
      
      {/* Breadcrumb */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-4 w-full flex items-center gap-2 text-xs font-technical uppercase tracking-widest text-white/40 border-b border-white/10">
        <Link href="/" className="hover:text-white transition-colors">BERANDA</Link>
        <span>/</span>
        <Link href="/fighters" className="hover:text-white transition-colors">DAFTAR PETARUNG</Link>
        <span>/</span>
        <span className="text-[#D91F2C] font-bold">{fighter.name}</span>
      </div>

      {/* ═════════════════════════════════════════════════════════════════════
          1. EDITORIAL SPLIT PROFILE HERO (UFC / ONE COMBAT ATHLETE)
      ═════════════════════════════════════════════ */}
      <section className="relative w-full border-b border-white/10 overflow-hidden bg-[#0B0B0B]">
        {/* Subtle Ambient Red Glow */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#D91F2C]/10 blur-[130px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 min-h-[500px] lg:min-h-[580px]">
          
          {/* Left Fighter Details */}
          <div className="lg:col-span-7 py-12 lg:py-20 flex flex-col justify-center space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 bg-[#D91F2C]" />
              <p className="font-technical text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
                REDY CHAMPIONSHIP 2 • {fighter.division} • {fighter.weightClass}
              </p>
            </div>

            <div>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.88] text-white">
                {fighter.name}
              </h1>
              <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded font-technical text-xs uppercase tracking-wider text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D91F2C]" />
                <span>SASANA / CAMP: <strong className="text-white">{fighter.club || "Independen"}</strong></span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-white/70 font-sans max-w-lg leading-relaxed">
              Berlaga resmi di bawah regulasi K-1 Rules kejuaraan nasional Redy Championship 2. Bertanding di GOR UNY Yogyakarta dalam turnamen eliminasi sabuk emas 12–14 Desember 2026.
            </p>

            {/* Fighter Record Summary */}
            <div className="pt-6 flex items-center gap-8 font-technical border-t border-white/10">
              <div>
                <span className="text-[10px] text-white/40 uppercase tracking-widest block font-bold">MENANG</span>
                <span className="font-display text-4xl sm:text-5xl font-black text-white">{fighter.wins}</span>
              </div>
              <div className="border-l border-white/10 pl-8">
                <span className="text-[10px] text-white/40 uppercase tracking-widest block font-bold">KALAH</span>
                <span className="font-display text-4xl sm:text-5xl font-black text-white/50">{fighter.losses}</span>
              </div>
              <div className="border-l border-white/10 pl-8">
                <span className="text-[10px] text-white/40 uppercase tracking-widest block font-bold">SERI</span>
                <span className="font-display text-4xl sm:text-5xl font-black text-white/50">{fighter.draws}</span>
              </div>
              <div className="border-l border-white/10 pl-8 hidden sm:block">
                <span className="text-[10px] text-[#D91F2C] uppercase tracking-widest block font-bold">WIN RATE</span>
                <span className="font-display text-4xl sm:text-5xl font-black text-[#D91F2C]">
                  {totalFights > 0 ? Math.round((fighter.wins / totalFights) * 100) : 0}%
                </span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <Link
                href="/jadwal"
                className="font-display text-xs sm:text-sm uppercase tracking-wider text-white bg-[#D91F2C] hover:bg-[#B81521] px-6 py-3 rounded transition-all inline-flex items-center gap-2 font-bold shadow-lg shadow-red-950/40"
              >
                <span>LIHAT JADWAL TANDING ATLET</span>
                <span className="font-technical text-xs">↗</span>
              </Link>
              <Link
                href="/fighters"
                className="font-display text-xs sm:text-sm uppercase tracking-wider text-white/80 hover:text-white border border-white/20 hover:border-white px-5 py-3 rounded transition-all bg-[#141416]"
              >
                ← KEMBALI KE DIREKTORI
              </Link>
            </div>
          </div>

          {/* Right Fighter Photo */}
          <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full -mx-5 sm:-mx-8 lg:mx-0 bg-[#141416] border-t lg:border-t-0 lg:border-l border-white/10 overflow-hidden flex items-end justify-center">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent z-10" />
            <div className="absolute top-4 right-4 z-20 font-technical text-[10px] uppercase tracking-widest text-white/40 border border-white/10 px-2 py-1 bg-black/60 backdrop-blur-sm">
              OFFICIAL ROSTER • 2026
            </div>
            
            <div className="relative w-full h-[460px] lg:h-full">
              <Image
                src={fighter.image || "/images/v9/04_FOTO_FIGHT_DESKTOP_TANPA_TEKST.png"}
                alt={fighter.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top grayscale contrast-125"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. TALE OF THE TAPE & COMBAT METRICS (UFC / ONE BENCHMARK)
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20 w-full space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#D91F2C]" />
              <p className="font-technical text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
                SPESIFIKASI FISIK & ATLET RESMI
              </p>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl uppercase tracking-tight text-white">
              TALE OF THE TAPE.
            </h2>
          </div>
          <p className="font-technical text-xs text-white/50 max-w-sm sm:text-right">
            Disahkan pada Official Weigh-in & Medical Checkup Redy Championship 2.
          </p>
        </div>

        {/* Clean Tale of the Tape Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-5 bg-[#141416] border border-white/10 rounded space-y-1">
            <span className="text-[10px] font-technical uppercase tracking-wider text-white/40 block">Divisi Kejuaraan</span>
            <span className="text-lg font-display uppercase tracking-wide text-white block">{fighter.division}</span>
            <span className="text-xs font-technical text-[#D91F2C] block">Turnamen Sistem Gugur</span>
          </div>

          <div className="p-5 bg-[#141416] border border-white/10 rounded space-y-1">
            <span className="text-[10px] font-technical uppercase tracking-wider text-white/40 block">Batas Bobot Resmi</span>
            <span className="text-lg font-display uppercase tracking-wide text-white block">{fighter.weightClass}</span>
            <span className="text-xs font-technical text-white/50 block">Timbang Badan 12 Des 09:00 WIB</span>
          </div>

          <div className="p-5 bg-[#141416] border border-white/10 rounded space-y-1">
            <span className="text-[10px] font-technical uppercase tracking-wider text-white/40 block">Sasana / Fight Camp</span>
            <span className="text-lg font-display uppercase tracking-wide text-white block">{fighter.club || "Independen"}</span>
            <span className="text-xs font-technical text-white/50 block">Afiliasi Terdaftar JKBF</span>
          </div>

          <div className="p-5 bg-[#141416] border border-white/10 rounded space-y-1">
            <span className="text-[10px] font-technical uppercase tracking-wider text-white/40 block">Total Rekor Tanding</span>
            <span className="text-lg font-display uppercase tracking-wide text-white block">
              {fighter.wins}W - {fighter.losses}L - {fighter.draws}D
            </span>
            <span className="text-xs font-technical text-white/50 block">{totalFights} Total Partai Resmi</span>
          </div>

          <div className="p-5 bg-[#141416] border border-white/10 rounded space-y-1">
            <span className="text-[10px] font-technical uppercase tracking-wider text-white/40 block">Regulasi Pertarungan</span>
            <span className="text-lg font-display uppercase tracking-wide text-white block">K-1 Professional Rules</span>
            <span className="text-xs font-technical text-white/50 block">3 Ronde × 3 Menit (1 Mnt Istirahat)</span>
          </div>

          <div className="p-5 bg-[#141416] border border-white/10 rounded space-y-1">
            <span className="text-[10px] font-technical uppercase tracking-wider text-white/40 block">Status Akreditasi</span>
            <span className="text-lg font-display uppercase tracking-wide text-emerald-400 block">LOLOS KURASI RESMI</span>
            <span className="text-xs font-technical text-white/50 block">Verifikasi Dokter & Dewan Juri</span>
          </div>
        </div>

        {/* Related Fighters in same division */}
        {relatedFighters.length > 0 && (
          <div className="pt-12 border-t border-white/10 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-2xl sm:text-3xl uppercase text-white tracking-wider">
                PETARUNG LAIN DI DIVISI {fighter.division}
              </h3>
              <Link
                href="/fighters"
                className="font-technical text-xs text-[#D91F2C] hover:underline uppercase tracking-wider font-bold"
              >
                LIHAT SEMUA ATLET ↗
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              {relatedFighters.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/fighters/${rel.slug}`}
                  className="group border border-white/10 bg-[#141416] p-4 block hover:border-[#D91F2C] transition-all rounded"
                >
                  <div className="relative aspect-[4/5] w-full bg-[#1c1c1f] mb-3 overflow-hidden rounded">
                    <Image
                      src={rel.image || "/images/v9/04_FOTO_FIGHT_DESKTOP_TANPA_TEKST.png"}
                      alt={rel.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover object-top grayscale contrast-125 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <span className="absolute bottom-2 left-2 text-[#D91F2C] font-technical text-[9px] uppercase font-bold tracking-wider">
                      {rel.division}
                    </span>
                  </div>
                  <h4 className="font-display text-xl uppercase tracking-wider text-white group-hover:text-[#D91F2C] transition-colors line-clamp-1">
                    {rel.name}
                  </h4>
                  <p className="font-technical text-xs text-white/50 mt-0.5 line-clamp-1">
                    {rel.club || "Independen"}
                  </p>
                  <div className="mt-2 pt-2 border-t border-white/10 flex justify-between text-[10px] font-technical text-white/60">
                    <span>REKOR:</span>
                    <span className="text-white font-bold">{rel.wins}W - {rel.losses}L - {rel.draws}D</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </section>

    </main>
  );
}
