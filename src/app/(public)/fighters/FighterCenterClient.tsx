"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, Trophy, User } from "lucide-react";

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
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#0A0A0A] text-[#FAFAFA] pt-24 lg:pt-32 pb-28 overflow-x-hidden font-sans">
      
      {/* ═════════════════════════════════════════════════════════════════════
          1. COMPACT HERO
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-6 pb-8 w-full border-b border-white/10">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-2.5 h-2.5 bg-[#D91F2C]" />
          <p className="font-technical text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
            REDY CHAMPIONSHIP 2 • ATHLETE ROSTER
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.85] text-white">
              DIREKTORI<br />
              <span className="text-[#D91F2C]">PETARUNG 2026.</span>
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-white/60 font-sans max-w-sm sm:text-right">
            Profil dan rekor resmi petarung 4 divisi sabuk emas. Timbang badan disahkan pada Official Weigh-in 12 Desember 2026.
          </p>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. FILTER & SEARCH INTERFACE
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-6 w-full border-b border-white/10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Search Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              applyFilters({ q: search });
            }}
            className="relative flex-1 max-w-md"
          >
            <input
              type="text"
              placeholder="Cari nama petarung atau camp..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#141416] border border-white/10 px-3 py-2.5 pl-9 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[#D91F2C] rounded"
            />
            <Search className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
          </form>

          {/* Division Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            <button
              type="button"
              onClick={() => applyFilters({ division: "" })}
              className={`px-3.5 py-1.5 text-xs font-technical uppercase tracking-wider rounded transition-colors ${
                !currentDivision
                  ? "bg-[#D91F2C] text-white font-bold"
                  : "bg-[#141416] text-white/70 border border-white/10 hover:text-white"
              }`}
            >
              SEMUA KELAS
            </button>
            {divisions.map((div) => (
              <button
                key={div}
                type="button"
                onClick={() => applyFilters({ division: div })}
                className={`px-3.5 py-1.5 text-xs font-technical uppercase tracking-wider rounded transition-colors ${
                  currentDivision === div
                    ? "bg-[#D91F2C] text-white font-bold"
                    : "bg-[#141416] text-white/70 border border-white/10 hover:text-white"
                }`}
              >
                {div}
              </button>
            ))}
            {(currentQuery || currentDivision || currentWeight) && (
              <button
                type="button"
                onClick={handleReset}
                className="px-2 py-1 text-xs text-[#D91F2C] hover:underline font-technical uppercase font-bold"
              >
                RESET
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          3. ATHLETES 2-COLUMN MOBILE GRID
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-8 w-full flex-1">
        {fighters.length === 0 ? (
          <div className="py-20 text-center border border-white/10 bg-[#121214] rounded p-6 space-y-3">
            <Trophy className="w-8 h-8 text-[#D91F2C] mx-auto opacity-70" />
            <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-white">
              ATLET SEGERA DIUMUMKAN
            </h3>
            <p className="text-xs text-white/50 max-w-sm mx-auto font-sans">
              Daftar atlet resmi sedang dalam tahap pengesahan medis dan penimbangan badan resmi.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
            {fighters.map((fighter) => (
              <Link
                key={fighter.id}
                href={`/fighters/${fighter.slug}`}
                className="group flex flex-col bg-[#141416] border border-white/10 hover:border-[#D91F2C]/60 transition-all rounded overflow-hidden"
              >
                {/* 4:5 Aspect Ratio Photo */}
                <div className="relative aspect-[4/5] w-full bg-[#1c1c1f] overflow-hidden">
                  {fighter.image ? (
                    <Image
                      src={fighter.image}
                      alt={fighter.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-black/40">
                      <User className="w-10 h-10 text-white/30" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute top-2 right-2 bg-black/80 backdrop-blur-sm text-white font-technical text-[9px] uppercase font-bold px-2 py-0.5 rounded border border-white/10">
                    {fighter.weightClass}
                  </span>
                  <span className="absolute bottom-2 left-2 text-[#D91F2C] font-technical text-[9px] uppercase font-bold tracking-wider">
                    {fighter.division}
                  </span>
                </div>

                {/* Details */}
                <div className="p-3 sm:p-3.5 flex flex-col justify-between flex-1 space-y-1.5">
                  <div>
                    <h3 className="font-display text-lg sm:text-xl uppercase tracking-wider text-white group-hover:text-[#D91F2C] transition-colors line-clamp-1 leading-snug">
                      {fighter.name}
                    </h3>
                    <p className="font-technical text-[10px] text-white/50 uppercase line-clamp-1">
                      {fighter.club || "Independen"}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-technical">
                    <span className="text-white/40">REKOR:</span>
                    <span className="text-white font-bold">{fighter.wins}W - {fighter.losses}L - {fighter.draws}D</span>
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
