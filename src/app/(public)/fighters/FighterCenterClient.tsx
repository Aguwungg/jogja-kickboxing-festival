"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, Trophy, ArrowUpRight, Scale, ShieldAlert } from "lucide-react";

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
    <main className="flex-1 flex flex-col w-full min-h-screen text-[#F4F0E8] bg-[#0B0B0B] pt-24 pb-20 overflow-x-hidden">
      
      {/* Editorial Header */}
      <section className="relative w-full border-b border-white/10 py-16 md:py-20 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="v9-overline text-[#D91F2C]">
            ROSTER ATLET / REDY CHAMPIONSHIP 2
          </span>

          <h1
            className="v9-display-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F4F0E8]"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            DAFTAR PETARUNG
          </h1>

          <p className="text-xs sm:text-sm text-[#8F8E8B] max-w-2xl leading-relaxed font-sans">
            Direktori profil atlet kickboxing Redy Championship 2. Seluruh status kelayakan dan bobot resmi disahkan pada saat sesi timbang badan resmi (Official Weigh-in).
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="w-full bg-[#141416] border-b border-white/10 py-4 px-4 sm:px-6 lg:px-8 sticky top-16 z-30 shadow-xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#8F8E8B] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && applyFilters({ q: search })}
              placeholder="Cari atlet atau sasana..."
              className="w-full bg-[#0B0B0B] border border-white/10 pl-9 pr-4 py-2 text-xs text-[#F4F0E8] placeholder-[#5A5957] focus:outline-none focus:border-[#D91F2C]"
            />
          </div>

          {/* Quick Selects */}
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto text-xs font-mono">
            <select
              value={currentDivision}
              onChange={(e) => applyFilters({ division: e.target.value })}
              className="bg-[#0B0B0B] border border-white/10 px-3 py-2 text-[#F4F0E8] focus:outline-none focus:border-[#D91F2C]"
            >
              <option value="">SEMUA DIVISI</option>
              {divisions.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>

            <select
              value={currentWeight}
              onChange={(e) => applyFilters({ weight: e.target.value })}
              className="bg-[#0B0B0B] border border-white/10 px-3 py-2 text-[#F4F0E8] focus:outline-none focus:border-[#D91F2C]"
            >
              <option value="">SEMUA KELAS BERAT</option>
              {weightClasses.map((w) => (
                <option key={w} value={w}>{w}</option>
              ))}
            </select>

            {(currentDivision || currentWeight || currentQuery) && (
              <button
                type="button"
                onClick={handleReset}
                className="text-[#D91F2C] hover:underline font-bold uppercase tracking-wider text-[11px]"
              >
                RESET ×
              </button>
            )}
          </div>

        </div>
      </section>

      {/* Fighter Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex-1">
        
        {/* Count overview */}
        <div className="flex items-center justify-between mb-8 text-xs text-[#8F8E8B] font-mono border-b border-white/10 pb-3">
          <span>
            TERCATAT: <strong className="text-[#F4F0E8]">{fighters.length}</strong> ATLET
          </span>
          <span className="text-[10px] text-[#5A5957] uppercase">
            STATUS: MENUNGGU WEIGH-IN RESMI
          </span>
        </div>

        {fighters.length === 0 ? (
          <div className="p-16 text-center bg-[#141416] border border-white/10 space-y-4 max-w-md mx-auto">
            <Scale className="w-8 h-8 text-[#8F8E8B] mx-auto" />
            <h3
              className="v9-display-title text-2xl text-[#F4F0E8]"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              TIDAK ADA PETARUNG
            </h3>
            <p className="text-xs text-[#8F8E8B] leading-relaxed">
              Tidak ada atlet yang cocok dengan kriteria filter pencarian.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="v9-btn-red text-xs"
            >
              RESET PENCARIAN
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {fighters.map((f) => (
              <Link
                key={f.id}
                href={`/fighters/${f.slug}`}
                className="group bg-[#141416] border border-white/10 hover:border-[#D91F2C] flex flex-col justify-between transition-colors overflow-hidden"
              >
                {/* Portrait container */}
                <div className="h-64 sm:h-72 bg-[#0B0B0B] relative overflow-hidden">
                  {f.image ? (
                    <Image
                      src={f.image}
                      alt={f.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-top grayscale contrast-125 group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#141416]">
                      <span className="font-display text-8xl font-black text-white/5" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
                        {f.name.charAt(0)}
                      </span>
                      <span className="text-[10px] text-[#5A5957] font-mono uppercase tracking-widest mt-2">
                        FOTO ATLET TERTUNDA
                      </span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-transparent to-transparent" />
                  
                  {/* Division tag */}
                  <div className="absolute top-3 left-3 bg-[#0B0B0B]/90 border border-white/10 px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest text-[#F4F0E8]">
                    {f.division}
                  </div>
                </div>

                {/* Info block */}
                <div className="p-5 space-y-3">
                  <div>
                    <span className="text-[10px] text-[#D91F2C] font-mono uppercase tracking-widest block">
                      {f.weightClass || "KELAS BELUM DIVERIFIKASI"}
                    </span>
                    <h3
                      className="v9-display-title text-2xl text-[#F4F0E8] group-hover:text-white transition-colors"
                      style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                    >
                      {f.name}
                    </h3>
                    <p className="text-xs text-[#8F8E8B] truncate mt-0.5 font-sans">
                      {f.club || "Independen"}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-[#8F8E8B]">
                      REKOR: <strong className="text-[#F4F0E8]">{f.wins}W - {f.losses}L</strong>
                    </span>
                    <span className="text-[#D91F2C] font-bold group-hover:translate-x-1 transition-transform flex items-center gap-0.5">
                      PROFIL ↗
                    </span>
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
