"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, Filter, ChevronDown, ChevronUp, Trophy, ArrowRight } from "lucide-react";

type Fighter = {
  id: string;
  name: string;
  slug: string;
  division: string;
  weightClass: string;
  club: string | null;
  wins: number;
  losses: number;
  draws: number;
  image: string | null;
};

interface FighterCenterClientProps {
  fighters: Fighter[];
  divisions: string[];
  weightClasses: string[];
  currentQuery: string;
  currentDivision: string;
  currentWeight: string;
}

export default function FighterCenterClient({
  fighters,
  divisions,
  weightClasses,
  currentQuery,
  currentDivision,
  currentWeight,
}: FighterCenterClientProps) {
  const router = useRouter();
  const [search, setSearch] = useState(currentQuery);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(Boolean(currentDivision || currentWeight));

  function applyFilters(params: Record<string, string>) {
    const sp = new URLSearchParams();
    const qVal = params.q !== undefined ? params.q : search;
    const divVal = params.division !== undefined ? params.division : currentDivision;
    const wVal = params.weight !== undefined ? params.weight : currentWeight;

    if (qVal) sp.set("q", qVal);
    if (divVal) sp.set("division", divVal);
    if (wVal) sp.set("weight", wVal);

    router.push(`/fighters?${sp.toString()}`);
  }

  function handleReset() {
    setSearch("");
    router.push("/fighters");
  }

  return (
    <main className="flex-1 flex flex-col w-full min-h-screen text-[#F5F3EE] bg-[#09090B] pt-24 pb-20 overflow-x-hidden">
      
      {/* ═════════════════════════════════════════════════════════════════════
          HEADER — KENALI PARA PETARUNG
      ═════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full border-b border-white/10 py-12 md:py-16 bg-[#171719]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#D91F2C]/10 border border-[#D91F2C]/30 text-[#D91F2C] text-xs font-bold tracking-widest uppercase">
            <Trophy className="w-3.5 h-3.5" />
            <span>FIGHT CENTER • ROSTER RESMI</span>
          </div>

          <h1
            className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-none"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            KENALI PARA <span className="text-[#D91F2C]">PETARUNG</span>
          </h1>

          <p className="text-[#9A9AA2] text-sm sm:text-base max-w-xl leading-relaxed">
            Profil atlet kickboxing resmi Redy Championship 2. Telusuri nama petarung, sasana asal, dan kelas divisi tanding.
          </p>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          SEARCH FIRST & COLLAPSIBLE ADVANCED FILTERS
      ═════════════════════════════════════════════════════════════════════ */}
      <section className="w-full bg-[#171719] border-b border-white/10 py-4 px-4 sm:px-6 lg:px-8 sticky top-16 z-30 shadow-md">
        <div className="max-w-7xl mx-auto space-y-3">
          
          {/* Primary Search Bar */}
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#9A9AA2] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && applyFilters({ q: search })}
                placeholder="Cari petarung atau nama sasana / klub..."
                className="w-full bg-[#09090B] border border-white/10 pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-[#9A9AA2] rounded-sm focus:outline-none focus:border-[#D91F2C] transition-colors font-sans"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    applyFilters({ q: "" });
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#9A9AA2] hover:text-white"
                >
                  Hapus
                </button>
              )}
            </div>

            <button
              type="button"
              onClick={() => applyFilters({ q: search })}
              className="font-display bg-[#D91F2C] hover:bg-[#EF3340] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-2.5 rounded-sm transition-all"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              Cari
            </button>

            {/* Toggle Advanced Filters */}
            <button
              type="button"
              onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
              className={`p-2.5 rounded-sm border transition-all flex items-center gap-1.5 text-xs font-semibold ${
                showAdvancedFilters || currentDivision || currentWeight
                  ? "bg-white/10 border-white/20 text-white"
                  : "bg-[#09090B] border-white/10 text-[#9A9AA2] hover:text-white"
              }`}
              title="Filter Lanjutan"
              aria-label="Filter Lanjutan"
            >
              <Filter className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Filter</span>
              {showAdvancedFilters ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>
          </div>

          {/* Collapsible Advanced Filters */}
          {showAdvancedFilters && (
            <div className="pt-2 pb-1 border-t border-white/5 flex flex-wrap items-center gap-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-[#9A9AA2] font-medium">Divisi:</span>
                <select
                  value={currentDivision}
                  onChange={(e) => applyFilters({ division: e.target.value })}
                  className="bg-[#09090B] border border-white/10 px-3 py-1.5 rounded-sm text-white focus:outline-none focus:border-[#D91F2C]"
                >
                  <option value="">Semua Divisi</option>
                  {divisions.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[#9A9AA2] font-medium">Kelas Berat:</span>
                <select
                  value={currentWeight}
                  onChange={(e) => applyFilters({ weight: e.target.value })}
                  className="bg-[#09090B] border border-white/10 px-3 py-1.5 rounded-sm text-white focus:outline-none focus:border-[#D91F2C]"
                >
                  <option value="">Semua Kelas</option>
                  {weightClasses.map((w) => (
                    <option key={w} value={w}>{w}</option>
                  ))}
                </select>
              </div>

              {(currentDivision || currentWeight || currentQuery) && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs text-[#D91F2C] hover:underline font-bold uppercase tracking-wider ml-auto"
                >
                  Reset Filter ×
                </button>
              )}
            </div>
          )}

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          FIGHTER CARDS DIRECTORY
      ═════════════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-1">
        
        {/* Meta Count */}
        <div className="flex items-center justify-between mb-6 text-xs text-[#9A9AA2]">
          <span>
            Menampilkan <strong className="text-white">{fighters.length}</strong> petarung terdaftar
            {currentDivision && <> di divisi <strong className="text-[#D91F2C]">{currentDivision}</strong></>}
            {currentWeight && <> kelas <strong className="text-[#D91F2C]">{currentWeight}</strong></>}
          </span>
          {(currentDivision || currentWeight || currentQuery) && (
            <button
              onClick={handleReset}
              className="text-[#D91F2C] hover:underline font-semibold"
            >
              Hapus Semua Filter
            </button>
          )}
        </div>

        {fighters.length === 0 ? (
          <div className="p-12 text-center bg-[#171719] border border-white/10 rounded-sm space-y-3 max-w-md mx-auto">
            <Trophy className="w-8 h-8 text-[#9A9AA2]/50 mx-auto" />
            <h3
              className="font-display text-xl font-bold uppercase text-white"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              TIDAK ADA PETARUNG DITEMUKAN
            </h3>
            <p className="text-xs text-[#9A9AA2] leading-relaxed">
              Coba gunakan kata kunci pencarian lain atau pilih semua divisi.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="font-display text-xs uppercase tracking-widest px-4 py-2 bg-[#D91F2C] text-white rounded-sm font-bold"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              Reset Pencarian
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {fighters.map((f) => (
              <Link
                key={f.id}
                href={`/fighters/${f.slug}`}
                className="group bg-[#171719] border border-white/10 hover:border-[#D91F2C]/50 rounded-sm overflow-hidden flex flex-col justify-between transition-all"
              >
                {/* Real Approved Portrait */}
                <div className="h-56 bg-[#252529] relative overflow-hidden">
                  {f.image ? (
                    <Image
                      src={f.image}
                      alt={f.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center font-display text-6xl font-black text-white/5">
                      {f.name.charAt(0)}
                    </div>
                  )}

                  {/* Division Badge */}
                  <div className="absolute top-3 left-3 bg-[#D91F2C] text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded-sm shadow-md">
                    {f.division}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-[#171719] via-transparent to-transparent opacity-90" />
                </div>

                {/* Identity Summary */}
                <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
                  <div>
                    <h2
                      className="font-display text-xl font-bold uppercase text-white group-hover:text-[#D91F2C] transition-colors leading-tight"
                      style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                    >
                      {f.name}
                    </h2>
                    <p className="text-xs text-[#9A9AA2] uppercase tracking-wide mt-1">
                      {f.weightClass} • {f.club || "Sasana Mandiri"}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-[#9A9AA2]">
                    <span>Profil Atlet</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D91F2C] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

      </section>

    </main>
  );
}
