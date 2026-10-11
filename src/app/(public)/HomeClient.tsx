"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

type Fighter = {
  id: string; name: string; slug: string; division: string; weightClass: string; club: string | null; wins: number; losses: number; draws: number; image?: string | null;
};
type Product = {
  id: string; name: string; slug: string; price: number; imageUrl: string | null;
};

const fadeUp: Variants = {
  hidden: { opacity: 0.2, y: 14 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.4, ease: "easeOut" as const },
  }),
};

const sectionReveal: Variants = {
  hidden: { opacity: 0.2, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
};

export default function HomeClient({ fighters, products }: { fighters: Fighter[]; products: Product[] }) {
  return (
    <main className="flex-1 flex flex-col w-full min-h-screen text-jkb-offwhite bg-jkb-black overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════
          HERO — THE RING MEETS THE STAGE
          Split composition: Combat on left, Music Festival on right
          Visible on BOTH Desktop & Mobile
      ═══════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[92svh] md:min-h-[100svh] flex items-end pb-12 sm:pb-16 md:pb-24 pt-20 overflow-hidden">
        
        {/* Dual-image background: Ring meets Stage */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Combat / Ring side */}
          <div className="absolute top-0 left-0 w-full md:w-1/2 h-1/2 md:h-full">
            <Image
              src="/images/jkb/hero-boxing.jpg"
              alt="Arena pertarungan kickboxing"
              fill
              priority
              sizes="(max-width:768px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-jkb-black/85 via-jkb-black/50 to-transparent" />
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
              <span className="font-display text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] bg-jkb-red text-white px-3 py-1 shadow-md">
                THE RING • REGIONAL CHAMPIONSHIP
              </span>
            </div>
          </div>

          {/* Festival / Stage side */}
          <div className="absolute bottom-0 right-0 w-full md:w-1/2 h-1/2 md:h-full">
            <Image
              src="/images/jkb/hero-concert.jpg"
              alt="Panggung festival musik"
              fill
              priority
              sizes="(max-width:768px) 100vw, 50vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-jkb-black/80 via-jkb-black/40 to-transparent" />
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10">
              <span className="font-display text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] bg-jkb-gold text-jkb-black px-3 py-1 shadow-md">
                THE STAGE • LIVE MUSIC FESTIVAL
              </span>
            </div>
          </div>

          {/* Overlays to ensure high-contrast readable typography */}
          <div className="absolute inset-0 bg-gradient-to-t from-jkb-black via-jkb-black/60 to-jkb-black/30 pointer-events-none" />
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/20 hidden md:block pointer-events-none" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-8">
          <motion.div initial={{ opacity: 0.3, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="max-w-3xl space-y-4 sm:space-y-5">
            
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-jkb-red font-bold tracking-[0.25em] text-xs sm:text-sm uppercase border-l-2 border-jkb-red pl-3">
                #JOGJAPUNYANYALI
              </p>
              <span className="text-white/30 hidden sm:inline">•</span>
              <span className="text-jkb-gold font-bold tracking-[0.2em] text-xs uppercase hidden sm:inline">
                SPORTAINMENT EXPERIENCE
              </span>
            </div>

            <h1 className="font-display text-[46px] sm:text-[76px] md:text-[96px] lg:text-[116px] font-black uppercase leading-[0.88] tracking-tight">
              JOGJA<br />PUNYA<br />
              <span className="text-jkb-red">NYALI.</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-jkb-offwhite/90 max-w-xl leading-relaxed font-normal">
              Pertarungan Keras di Atas Ring. Energi Membara di Panggung Musik. Satu Arena di GOR UNY Yogyakarta.
            </p>

            <div className="flex items-center gap-3 text-xs sm:text-sm text-jkb-offwhite/80 font-medium tracking-wide pt-1">
              <span className="w-2 h-2 bg-jkb-red rounded-full animate-pulse" />
              12—14 DESEMBER 2026
              <span className="text-jkb-gray">•</span>
              GOR UNY, YOGYAKARTA
            </div>

            {/* CTAs clearly representing both worlds */}
            <div className="flex flex-wrap gap-3 pt-3">
              <Link href="/jadwal" className="font-display bg-jkb-red hover:bg-jkb-bright-red text-white uppercase tracking-widest text-xs sm:text-sm px-6 sm:px-7 py-3.5 transition-all font-bold shadow-lg shadow-jkb-red/20">
                JADWAL TARUNG
              </Link>
              <Link href="/lineup" className="font-display bg-jkb-gold/90 hover:bg-jkb-gold text-jkb-black uppercase tracking-widest text-xs sm:text-sm px-6 sm:px-7 py-3.5 transition-all font-bold shadow-lg shadow-jkb-gold/10">
                LINEUP MUSIK
              </Link>
              <Link href="/fighters" className="font-display border border-white/20 hover:border-white/50 hover:bg-white/5 text-white uppercase tracking-widest text-xs sm:text-sm px-6 sm:px-7 py-3.5 transition-all font-bold">
                ROSTER FIGHTER
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          MARQUEE — Kinetic energy strip
      ═══════════════════════════════════════════════════ */}
      <div className="w-full bg-jkb-red py-2.5 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-flex items-center">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="font-display text-jkb-black font-black text-xl uppercase tracking-wider mx-3 flex items-center">
              THE RING MEETS THE STAGE <span className="mx-3 text-white/40">×</span> KICKBOXING <span className="mx-3 text-white/40">×</span> LIVE MUSIC <span className="mx-3 text-white/40">×</span> CITY PRIDE <span className="mx-3 text-white/40">×</span>
            </span>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          QUICK ACCESS — Editorial navigation tiles
      ═══════════════════════════════════════════════════ */}
      <section className="w-full py-12 md:py-16 px-5 bg-jkb-charcoal border-b border-white/5">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "250px" }} variants={sectionReveal} className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/5">
            {[
              { label: "Jadwal", sub: "3 Hari Laga", href: "/jadwal" },
              { label: "Fighter", sub: `${fighters.length}+ Atlet`, href: "/fighters" },
              { label: "Lineup", sub: "Panggung Musik", href: "/lineup" },
              { label: "City Pride", sub: "Vote Wilayah", href: "/city-pride" },
              { label: "Creator", sub: "Creator Hub", href: "/creator" },
              { label: "Merch", sub: "Official Shop", href: "/merch" },
            ].map((item) => (
              <Link key={item.label} href={item.href} className="bg-jkb-charcoal hover:bg-jkb-surface p-6 text-center transition-colors group">
                <span className="font-display text-2xl md:text-3xl font-black uppercase text-white group-hover:text-jkb-red transition-colors block">{item.label}</span>
                <span className="text-xs text-jkb-gray uppercase tracking-widest mt-1 block">{item.sub}</span>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════
          THE FIGHT — Championship showcase
      ═══════════════════════════════════════════════════ */}
      <section className="w-full py-16 md:py-24 px-5 bg-jkb-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "250px" }} variants={sectionReveal} className="lg:col-span-5 space-y-6">
            <span className="text-jkb-red text-xs font-bold tracking-[0.3em] uppercase bg-jkb-red/10 border border-jkb-red/30 px-3 py-1">THE RING</span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.9]">
              INI BUKAN SEKADAR <span className="text-jkb-red">PERTANDINGAN.</span>
            </h2>
            <p className="text-jkb-gray text-base md:text-lg leading-relaxed max-w-md">
              Lebih dari 80 atlet dari seluruh Indonesia bertarung di arena regional championship. Saksikan lahirnya juara baru di GOR UNY Yogyakarta.
            </p>
            <div className="flex gap-4 pt-2">
              <Link href="/fighters" className="font-display text-sm font-bold text-white border-b-2 border-jkb-red pb-1 hover:text-jkb-red transition-colors uppercase tracking-wider">
                Database Fighter →
              </Link>
              <Link href="/bracket" className="font-display text-sm font-bold text-jkb-gray border-b border-white/20 pb-1 hover:text-white transition-colors uppercase tracking-wider">
                Lihat Bracket →
              </Link>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "250px" }} variants={sectionReveal} className="lg:col-span-7 relative">
            <div className="relative aspect-[16/10] w-full overflow-hidden border border-white/10 shadow-2xl">
              <Image src="/images/jkb/boxing-ring.jpg" alt="Arena pertandingan kickboxing" fill sizes="(max-width:1024px) 100vw, 58vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-jkb-black/60" />
              <div className="absolute top-1/4 left-0 right-0 h-px bg-jkb-red/30" />
              <div className="absolute top-2/4 left-0 right-0 h-px bg-jkb-red/20" />
              <div className="absolute top-3/4 left-0 right-0 h-px bg-jkb-red/10" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FIGHTER SPOTLIGHT — Guaranteed Visible Cards
      ═══════════════════════════════════════════════════ */}
      {fighters.length > 0 && (
        <section className="w-full py-16 px-5 bg-jkb-charcoal border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-2 mb-8">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-jkb-red text-xs font-bold tracking-[0.3em] uppercase">FIGHT CENTER</span>
                  <span className="text-[10px] text-yellow-300 bg-yellow-500/20 px-2 py-0.5 uppercase tracking-wider">SIMULASI STAGING</span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-black uppercase mt-1">Fighter Spotlight</h3>
              </div>
              <Link href="/fighters" className="font-display text-sm text-jkb-gray hover:text-white transition-colors uppercase tracking-wider border-b border-white/20 pb-1 self-start sm:self-auto">
                Lihat Semua Fighter ({fighters.length}) →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {fighters.map((f, i) => (
                <motion.div
                  key={f.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "250px" }}
                  variants={fadeUp}
                  custom={i}
                >
                  <Link href={`/fighters/${f.slug}`} className="block bg-jkb-black border border-white/5 hover:border-jkb-red/40 transition-all group overflow-hidden shadow-lg">
                    <div className="h-48 bg-jkb-surface relative overflow-hidden">
                      {f.image ? (
                        <Image
                          src={f.image}
                          alt={f.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="font-display text-6xl font-black text-white/5 group-hover:text-jkb-red/10 transition-colors">{String(i + 1).padStart(2, "0")}</span>
                        </div>
                      )}
                      {/* Division badge */}
                      <div className="absolute top-3 left-3 flex gap-1">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 shadow ${
                          f.division === "Pro" ? "bg-jkb-red text-white" :
                          f.division === "Exhibition" ? "bg-jkb-gold text-jkb-black" :
                          "bg-white/10 text-white"
                        }`}>
                          {f.division}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-1 bg-black/60 text-yellow-300">
                          DEMO
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-jkb-black via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-jkb-red scale-x-0 group-hover:scale-x-100 transition-transform origin-left z-10" />
                    </div>
                    <div className="p-5">
                      <h4 className="font-display text-lg font-bold uppercase tracking-wide group-hover:text-jkb-red transition-colors">{f.name}</h4>
                      <p className="text-jkb-gray text-xs mt-1 uppercase tracking-wider">{f.weightClass}</p>
                      <div className="flex items-center gap-3 mt-3 text-xs">
                        <span className="text-green-400 font-bold">{f.wins}W</span>
                        <span className="text-red-400 font-bold">{f.losses}L</span>
                        <span className="text-jkb-gray font-bold">{f.draws}D</span>
                        <span className="ml-auto text-jkb-gray uppercase tracking-wider">{f.club || "Mandiri"}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════
          THE FESTIVAL — Panggung Musik & Entertainment
      ═══════════════════════════════════════════════════ */}
      <section className="w-full py-20 md:py-28 px-5 bg-jkb-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/jkb/festival-lights.jpg" alt="Atmosfer festival musik" fill sizes="100vw" className="object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-t from-jkb-black via-jkb-black/75 to-jkb-black/40" />
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "250px" }} variants={sectionReveal} className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="text-jkb-gold text-xs font-bold tracking-[0.3em] uppercase bg-jkb-gold/10 border border-jkb-gold/30 px-3 py-1">THE STAGE</span>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase mt-4 leading-[0.9]">
            BUKAN CUMA <span className="text-jkb-gold">TINJU.</span><br />
            ADA <span className="text-jkb-red">PANGGUNG.</span>
          </h2>
          <p className="text-jkb-gray text-base md:text-lg max-w-xl mx-auto mt-5 leading-relaxed">
            Live music, deretan musisi, dan energi festival yang membakar arena GOR UNY. Sportainment bukan sekadar kata — ini pengalaman lengkap.
          </p>
          <div className="pt-8">
            <Link href="/lineup" className="inline-block font-display bg-jkb-gold hover:bg-yellow-400 text-jkb-black uppercase tracking-widest text-sm px-8 py-3.5 transition-all font-bold shadow-lg shadow-jkb-gold/20">
              JELAJAHI LINEUP MUSIK →
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CITY PRIDE — Interactive voting preview
      ═══════════════════════════════════════════════════ */}
      <section className="w-full py-16 px-5 bg-jkb-charcoal border-y border-white/5">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "250px" }} variants={sectionReveal} className="max-w-5xl mx-auto text-center">
          <span className="text-jkb-red text-xs font-bold tracking-[0.3em] uppercase bg-jkb-red/10 border border-jkb-red/30 px-3 py-1">CITY PRIDE</span>
          <h2 className="font-display text-3xl md:text-5xl font-black uppercase mt-4">
            KOTA MANA PALING <span className="text-jkb-red">PUNYA NYALI?</span>
          </h2>
          <div className="grid grid-cols-3 gap-4 mt-8 max-w-lg mx-auto">
            {["BANTUL", "SLEMAN", "KOTA JOGJA"].map((city) => (
              <Link key={city} href="/city-pride" className="bg-jkb-black border border-white/10 hover:border-jkb-red/50 p-5 transition-all group">
                <span className="font-display text-xl font-black text-white group-hover:text-jkb-red transition-colors">{city}</span>
              </Link>
            ))}
          </div>
          <Link href="/city-pride" className="inline-block font-display text-jkb-red uppercase tracking-widest text-sm font-bold mt-8 border-b border-jkb-red pb-1 hover:text-white hover:border-white transition-colors">
            VOTE SEKARANG →
          </Link>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════
          MODULES — Creator + Merch + PPV
      ═══════════════════════════════════════════════════ */}
      <section className="w-full py-20 px-5 bg-jkb-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Creator Hub */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "250px" }} variants={fadeUp} custom={0} className="bg-jkb-charcoal border border-white/5 p-8 flex flex-col justify-between min-h-[320px]">
            <div>
              <span className="text-jkb-gray text-xs font-bold tracking-[0.3em] uppercase">CREATOR HUB</span>
              <h3 className="font-display text-2xl md:text-3xl font-black uppercase mt-3 leading-tight">
                PUNYA KONTEN?<br /><span className="text-jkb-red">TUNJUKKAN.</span>
              </h3>
              <p className="text-jkb-gray text-sm mt-3 leading-relaxed">Submit konten JKB, naik leaderboard, raih akses eksklusif ke festival.</p>
            </div>
            <Link href="/creator" className="font-display text-sm text-white uppercase tracking-wider border-b border-white/20 self-start pb-1 mt-6 hover:border-jkb-red hover:text-jkb-red transition-colors">
              Gabung Creator →
            </Link>
          </motion.div>

          {/* Merchandise */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "250px" }} variants={fadeUp} custom={1} className="relative overflow-hidden border border-white/5 min-h-[320px]">
            <Image src="/images/jkb/gloves-closeup.jpg" alt="Merchandise JKB" fill sizes="(max-width:1024px) 100vw, 33vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-jkb-black via-jkb-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="text-jkb-gold text-xs font-bold tracking-[0.3em] uppercase">OFFICIAL MERCH</span>
              <h3 className="font-display text-2xl font-black uppercase mt-2">PAKAI KEBANGGAANMU.</h3>
              <Link href="/merch" className="font-display inline-block text-sm text-white uppercase tracking-wider border-b border-jkb-red pb-1 mt-4 hover:text-jkb-red transition-colors">
                Shop Now →
              </Link>
            </div>
          </motion.div>

          {/* PPV */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "250px" }} variants={fadeUp} custom={2} className="bg-jkb-black border-2 border-jkb-red/20 p-8 flex flex-col justify-between min-h-[320px] relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-jkb-red/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <span className="text-jkb-red text-xs font-bold tracking-[0.3em] uppercase">LIVE STREAMING</span>
              <h3 className="font-display text-2xl md:text-3xl font-black uppercase mt-3 leading-tight">
                NONTON LIVE.<br /><span className="text-jkb-red">DARI RUMAH.</span>
              </h3>
              <p className="text-jkb-gray text-sm mt-3">BigMo Exhibition & Main Event via PPV. Mulai Rp10.000.</p>
            </div>
            <Link href="/ppv" className="font-display inline-block bg-jkb-red hover:bg-jkb-bright-red text-white uppercase tracking-widest text-sm px-6 py-3 mt-6 transition-all font-bold self-start relative z-10">
              BELI AKSES →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          VENUE — Clean practical information
      ═══════════════════════════════════════════════════ */}
      <section className="w-full py-12 px-5 bg-jkb-charcoal border-y border-white/5">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "250px" }} variants={sectionReveal} className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-jkb-gray text-xs font-bold tracking-[0.3em] uppercase">OFFICIAL VENUE</span>
            <h3 className="font-display text-2xl font-black uppercase mt-1">GOR UNY, YOGYAKARTA</h3>
          </div>
          <Link href="/venue" className="font-display text-sm text-jkb-red uppercase tracking-wider border border-jkb-red/30 px-6 py-2.5 hover:bg-jkb-red/10 transition-colors font-bold">
            Lihat Lokasi & Info →
          </Link>
        </motion.div>
      </section>

    </main>
  );
}
