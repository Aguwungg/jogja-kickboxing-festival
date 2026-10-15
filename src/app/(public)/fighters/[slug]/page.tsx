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
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#F4F0E8] text-[#0B0B0B] pt-24 lg:pt-28 pb-24 overflow-x-hidden">
      
      {/* Breadcrumb */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-4 w-full flex items-center gap-2 text-xs font-technical uppercase tracking-widest text-[#77716D] border-b border-black/10">
        <Link href="/" className="hover:text-black transition-colors">BERANDA</Link>
        <span>/</span>
        <Link href="/fighters" className="hover:text-black transition-colors">DAFTAR PETARUNG</Link>
        <span>/</span>
        <span className="text-[#D91F2C] font-bold">{fighter.name}</span>
      </div>

      {/* ═════════════════════════════════════════════════════════════════════
          1. EDITORIAL SPLIT PROFILE HERO
      ═════════════════════════════════════════════ */}
      <section className="relative w-full border-b border-black/10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 min-h-[500px] lg:min-h-[560px]">
          
          {/* Left Fighter Details */}
          <div className="lg:col-span-7 py-12 lg:py-20 flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D91F2C]" />
              <p className="font-technical text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
                REDY CHAMPIONSHIP 2 • {fighter.division}
              </p>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.85] text-[#0B0B0B]">
              {fighter.name}
            </h1>

            <p className="text-sm sm:text-base text-[#5A5957] font-sans max-w-lg leading-relaxed">
              {fighter.club ? `Sasana / Tim: ${fighter.club}.` : "Petarung Independen."} Berlaga di divisi {fighter.division} ({fighter.weightClass}) di bawah regulasi kejuaraan K-1 rules.
            </p>

            {/* Fighter Record Summary */}
            <div className="pt-4 flex items-center gap-8 font-technical border-t border-black/15">
              <div>
                <span className="text-[10px] text-[#77716D] uppercase tracking-widest block font-bold">MENANG</span>
                <span className="font-display text-4xl font-black text-[#0B0B0B]">{fighter.wins}</span>
              </div>
              <div className="border-l border-black/15 pl-8">
                <span className="text-[10px] text-[#77716D] uppercase tracking-widest block font-bold">KALAH</span>
                <span className="font-display text-4xl font-black text-[#5A5957]">{fighter.losses}</span>
              </div>
              <div className="border-l border-black/15 pl-8">
                <span className="text-[10px] text-[#77716D] uppercase tracking-widest block font-bold">SERI</span>
                <span className="font-display text-4xl font-black text-[#5A5957]">{fighter.draws}</span>
              </div>
            </div>
          </div>

          {/* Right Fighter Photo */}
          <div className="lg:col-span-5 relative min-h-[360px] lg:min-h-full -mx-5 sm:-mx-8 lg:mx-0 bg-[#EDE8DE]">
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
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. TALE OF THE TAPE & VERIFIED DATA
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-20 w-full space-y-12">
        <div className="space-y-3">
          <p className="font-technical text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
            SPESIFIKASI FISIK & ATLET
          </p>
          <h2 className="font-display text-4xl sm:text-5xl uppercase tracking-tight text-[#0B0B0B]">
            TALE OF THE TAPE.
          </h2>
        </div>

        {/* Clean Tale of the Tape Rows */}
        <div className="border-t border-black/15 divide-y divide-black/15">
          <div className="py-5 grid grid-cols-2 md:grid-cols-4 gap-4 items-baseline px-2">
            <span className="text-xs font-technical uppercase text-[#77716D]">Divisi Resmi</span>
            <span className="text-sm font-bold text-[#0B0B0B] md:col-span-3 font-technical">{fighter.division}</span>
          </div>
          <div className="py-5 grid grid-cols-2 md:grid-cols-4 gap-4 items-baseline px-2">
            <span className="text-xs font-technical uppercase text-[#77716D]">Kelas Bobot</span>
            <span className="text-sm font-bold text-[#0B0B0B] md:col-span-3 font-technical">{fighter.weightClass}</span>
          </div>
          <div className="py-5 grid grid-cols-2 md:grid-cols-4 gap-4 items-baseline px-2">
            <span className="text-xs font-technical uppercase text-[#77716D]">Sasana / Camp</span>
            <span className="text-sm font-bold text-[#0B0B0B] md:col-span-3">{fighter.club || "Independen"}</span>
          </div>
          <div className="py-5 grid grid-cols-2 md:grid-cols-4 gap-4 items-baseline px-2">
            <span className="text-xs font-technical uppercase text-[#77716D]">Total Pertandingan</span>
            <span className="text-sm font-bold text-[#0B0B0B] md:col-span-3 font-technical">{totalFights} Laga Resmi</span>
          </div>
        </div>

        {/* Related Fighters in same division */}
        {relatedFighters.length > 0 && (
          <div className="pt-12 border-t border-black/15 space-y-6">
            <h3 className="font-display text-3xl uppercase text-[#0B0B0B] tracking-wider">
              PETARUNG LAIN DI DIVISI {fighter.division}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedFighters.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/fighters/${rel.slug}`}
                  className="group border border-black/15 bg-white p-4 block hover:border-black transition-all ring-corner-frame"
                >
                  <div className="relative aspect-[4/5] w-full bg-[#EDE8DE] mb-3 overflow-hidden">
                    <Image
                      src={rel.image || "/images/v9/04_FOTO_FIGHT_DESKTOP_TANPA_TEKST.png"}
                      alt={rel.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover object-top grayscale contrast-125 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="font-display text-2xl uppercase tracking-wider text-[#0B0B0B] group-hover:text-[#D91F2C] transition-colors">
                    {rel.name}
                  </h4>
                  <p className="font-technical text-xs text-[#77716D] mt-0.5">{rel.club || "Independen"}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

      </section>

    </main>
  );
}
