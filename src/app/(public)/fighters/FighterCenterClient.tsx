"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, type Variants } from "framer-motion";
import { useState } from "react";

type Fighter = {
  id: string; name: string; slug: string; division: string; weightClass: string;
  club: string | null; wins: number; losses: number; draws: number; image: string | null;
};

const fadeUp: Variants = {
  hidden: { opacity: 0.2, y: 12 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: Math.min(i * 0.04, 0.25), duration: 0.35, ease: "easeOut" as const },
  }),
};

export default function FighterCenterClient({
  fighters, divisions, weightClasses, currentQuery, currentDivision, currentWeight,
}: {
  fighters: Fighter[]; divisions: string[]; weightClasses: string[];
  currentQuery: string; currentDivision: string; currentWeight: string;
}) {
  const router = useRouter();
  const [search, setSearch] = useState(currentQuery);

  function applyFilters(params: Record<string, string>) {
    const sp = new URLSearchParams();
    if (params.q || search) sp.set("q", params.q ?? search);
    if (params.division ?? currentDivision) sp.set("division", params.division ?? currentDivision);
    if (params.weight ?? currentWeight) sp.set("weight", params.weight ?? currentWeight);
    router.push(`/fighters?${sp.toString()}`);
  }

  return (
    <main className="flex-1 flex flex-col w-full min-h-screen text-jkb-offwhite bg-jkb-black overflow-x-hidden">
      
      {/* ═══════════════════════════════════════════════════
          HERO — Full-bleed athletic image + overlay info
      ═══════════════════════════════════════════════════ */}
      <section className="relative w-full pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="absolute inset-0 z-0">
          <Image src="/images/jkb/fighter-training.jpg" alt="Latihan atlet kickboxing" fill priority sizes="100vw" className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-jkb-black/60 via-jkb-black/80 to-jkb-black" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
          <motion.div initial={{ opacity: 0.4, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <span className="text-jkb-red text-xs font-bold tracking-[0.3em] uppercase bg-jkb-red/10 border border-jkb-red/30 px-3 py-1">
              FIGHT CENTER • ROSTER RESMI
            </span>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase mt-3 leading-[0.9]">
              DATABASE<br /><span className="text-jkb-red">FIGHTER</span>
            </h1>
            <p className="text-jkb-gray text-base md:text-lg max-w-lg mt-3">
              Profil lengkap, sasana asal, dan statistik petarung Jogja Kickboxing Festival & Redy Championship 2.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          STAGING DISCLAIMER
      ═══════════════════════════════════════════════════ */}
      <div className="w-full bg-yellow-500/10 border-y border-yellow-500/20 px-5 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-yellow-300/90">
          <span>⚠️ Roster di bawah merupakan data simulasi staging untuk pengetesan sistem platform JKB 2026.</span>
          <span className="hidden sm:inline text-yellow-400 font-medium">Data resmi diumumkan pasca weigh-in.</span>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          FILTERS & SEARCH — Sticky & Accessible
      ═══════════════════════════════════════════════════ */}
      <section className="w-full py-5 px-5 bg-jkb-charcoal border-b border-white/5 sticky top-16 z-30 shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch md:items-center gap-3">
          {/* Search */}
          <div className="flex-1">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && applyFilters({ q: search })}
              placeholder="Cari nama fighter atau nama sasana / klub..."
              className="w-full bg-jkb-black border border-white/10 px-4 py-3 text-sm text-white placeholder:text-jkb-gray focus:outline-none focus:border-jkb-red transition-colors"
            />
          </div>
          {/* Division filter */}
          <select
            value={currentDivision}
            onChange={(e) => applyFilters({ division: e.target.value })}
            className="bg-jkb-black border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-jkb-red transition-colors cursor-pointer"
          >
            <option value="">Semua Divisi</option>
            {divisions.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
          {/* Weight filter */}
          <select
            value={currentWeight}
            onChange={(e) => applyFilters({ weight: e.target.value })}
            className="bg-jkb-black border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-jkb-red transition-colors cursor-pointer"
          >
            <option value="">Semua Kelas</option>
            {weightClasses.map((w) => (
              <option key={w} value={w}>{w}</option>
            ))}
          </select>
          {/* Search button */}
          <button
            type="button"
            onClick={() => applyFilters({ q: search })}
            className="font-display bg-jkb-red hover:bg-jkb-bright-red text-white uppercase tracking-widest text-sm px-7 py-3 transition-all font-bold cursor-pointer"
          >
            CARI
          </button>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          RESULTS — All cards guaranteed visible
      ═══════════════════════════════════════════════════ */}
      <section className="w-full py-12 px-5 bg-jkb-black flex-1">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <p className="text-jkb-gray text-sm">
              Menampilkan <span className="text-white font-bold">{fighters.length}</span> petarung terdaftar
              {currentDivision && <> di divisi <span className="text-jkb-red font-bold">{currentDivision}</span></>}
              {currentWeight && <> kelas <span className="text-jkb-red font-bold">{currentWeight}</span></>}
            </p>
            {(currentQuery || currentDivision || currentWeight) && (
              <Link href="/fighters" className="text-xs text-jkb-red hover:underline font-bold uppercase tracking-wider">
                Reset Filter ×
              </Link>
            )}
          </div>

          {fighters.length === 0 ? (
            <div className="text-center py-20 bg-jkb-charcoal border border-white/5 p-8">
              <h3 className="font-display text-2xl font-black uppercase text-jkb-gray">Tidak ada fighter ditemukan</h3>
              <p className="text-jkb-gray text-sm mt-2">Coba sesuaikan kata kunci pencarian atau reset filter divisi.</p>
              <Link href="/fighters" className="inline-block font-display bg-jkb-red text-white uppercase tracking-widest text-xs font-bold mt-6 px-6 py-3">
                RESET SEMUA FILTER
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {fighters.map((f, i) => (
                <motion.div
                  key={f.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "300px" }}
                  variants={fadeUp}
                  custom={i}
                >
                  <Link href={`/fighters/${f.slug}`} className="block bg-jkb-charcoal border border-white/5 hover:border-jkb-red/50 transition-all group overflow-hidden">
                    {/* Fighter visual */}
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
                          <span className="font-display text-7xl font-black text-white/5 group-hover:text-jkb-red/10 transition-colors">
                            {f.name.charAt(0)}
                          </span>
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
                      <div className="absolute inset-0 bg-gradient-to-t from-jkb-charcoal via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-jkb-red scale-x-0 group-hover:scale-x-100 transition-transform origin-left z-10" />
                    </div>
                    
                    {/* Fighter info */}
                    <div className="p-5">
                      <h4 className="font-display text-lg font-bold uppercase tracking-wide group-hover:text-jkb-red transition-colors">{f.name}</h4>
                      <p className="text-jkb-gray text-xs mt-1 uppercase tracking-wider">{f.weightClass}</p>
                      <p className="text-jkb-gray/70 text-xs mt-0.5">{f.club || "Sasana Mandiri"}</p>
                      
                      {/* Record bar */}
                      <div className="flex items-center gap-1 mt-4">
                        <div className="h-1 bg-green-500/70 rounded-full" style={{ width: `${(f.wins / Math.max(f.wins + f.losses + f.draws, 1)) * 100}%`, minWidth: "4px" }} />
                        <div className="h-1 bg-red-500/70 rounded-full" style={{ width: `${(f.losses / Math.max(f.wins + f.losses + f.draws, 1)) * 100}%`, minWidth: "4px" }} />
                        {f.draws > 0 && <div className="h-1 bg-gray-500/70 rounded-full" style={{ width: `${(f.draws / Math.max(f.wins + f.losses + f.draws, 1)) * 100}%`, minWidth: "4px" }} />}
                      </div>
                      <div className="flex items-center gap-3 mt-2 text-xs">
                        <span className="text-green-400 font-bold">{f.wins}W</span>
                        <span className="text-red-400 font-bold">{f.losses}L</span>
                        <span className="text-jkb-gray font-bold">{f.draws}D</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
