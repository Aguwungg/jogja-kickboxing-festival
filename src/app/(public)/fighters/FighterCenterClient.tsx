"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, ArrowUpRight } from "lucide-react";

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
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#F4F0E8] text-[#0B0B0B] pt-24 lg:pt-28 pb-24 overflow-x-hidden">
      
      {/* ═════════════════════════════════════════════════════════════════════
          1. EDITORIAL SPLIT HERO (Matches 03_fighters.png)
      ═════════════════════════════════════════════ */}
      <section className="relative w-full border-b border-black/10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 min-h-[480px] lg:min-h-[540px]">
          
          <div className="lg:col-span-7 py-12 lg:py-20 flex flex-col justify-center space-y-5">
            <p
              className="text-[#D91F2C] text-xs sm:text-sm font-extrabold uppercase tracking-[0.24em]"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              REDY CHAMPIONSHIP 2
            </p>

            <h1
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight leading-[0.88] text-[#0B0B0B]"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              PARA<br />
              PETARUNG.
            </h1>

            <p className="text-sm sm:text-base text-[#5A5957] font-sans max-w-lg leading-relaxed">
              Profil resmi para petarung, ketika sudah disahkan melalui sesi timbang badan resmi (Official Weigh-in).
            </p>
          </div>

          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full -mx-5 sm:-mx-8 lg:mx-0">
            <Image
              src="/images/v9/04_FOTO_FIGHT_DESKTOP_TANPA_TEKST.png"
              alt="Kickboxing Athletes"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center grayscale contrast-125"
            />
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. DATA & SEARCH SECTION
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-20 w-full space-y-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-black/10">
          <div>
            <p
              className="text-[#D91F2C] text-xs font-extrabold uppercase tracking-[0.24em] mb-2"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              DATA & PROFIL
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#0B0B0B]"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              DIREKTORI ATLET.
            </h2>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#8F8E8B] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && applyFilters({ q: search })}
              placeholder="Cari atlet atau sasana..."
              className="w-full bg-white/60 border border-black/20 pl-9 pr-4 py-2.5 text-xs text-[#0B0B0B] placeholder-[#8F8E8B] focus:outline-none focus:border-[#D91F2C] transition-colors"
            />
          </div>
        </div>

        {/* Division Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => applyFilters({ division: "" })}
            className={`px-4 py-2 text-xs font-display font-extrabold uppercase tracking-wider transition-all ${
              !currentDivision
                ? "bg-[#0B0B0B] text-white"
                : "bg-transparent text-[#0B0B0B] hover:bg-black/5 border border-black/20"
            }`}
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            SEMUA DIVISI
          </button>
          {divisions.map((div) => {
            const isActive = currentDivision === div;
            return (
              <button
                key={div}
                type="button"
                onClick={() => applyFilters({ division: div })}
                className={`px-4 py-2 text-xs font-display font-extrabold uppercase tracking-wider transition-all ${
                  isActive
                    ? "bg-[#0B0B0B] text-white"
                    : "bg-transparent text-[#0B0B0B] hover:bg-black/5 border border-black/20"
                }`}
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                {div}
              </button>
            );
          })}
        </div>

        {/* Athlete Grid */}
        {fighters.length === 0 ? (
          <div className="py-24 text-center border-t border-b border-black/10 space-y-3">
            <h3
              className="text-2xl sm:text-3xl font-black uppercase text-[#0B0B0B]"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              ATLET SEGERA DIUMUMKAN
            </h3>
            <p className="text-sm text-[#5A5957] max-w-md mx-auto">
              Tidak ada profil atlet yang cocok dengan filter pencarian. Daftar lengkap petarung disahkan setelah sesi penimbangan badan.
            </p>
            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 bg-[#0B0B0B] text-white text-xs font-bold uppercase tracking-wider font-display"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              RESET FILTER
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {fighters.map((f) => (
              <Link
                key={f.id}
                href={`/fighters/${f.slug}`}
                className="group border border-black/10 bg-white/40 hover:bg-white/80 p-5 flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="relative aspect-[3/4] w-full bg-[#141416] overflow-hidden mb-4">
                    <Image
                      src={f.image || "/images/v9/04_FOTO_FIGHT_DESKTOP_TANPA_TEKST.png"}
                      alt={f.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-top grayscale contrast-125 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2 bg-black/80 px-2 py-0.5 text-[10px] font-mono text-white">
                      {f.weightClass}
                    </div>
                  </div>

                  <span className="text-[10px] font-mono font-bold uppercase text-[#D91F2C] tracking-widest block">
                    {f.division}
                  </span>
                  <h3
                    className="text-2xl font-black uppercase tracking-tight text-[#0B0B0B] group-hover:text-[#D91F2C] transition-colors"
                    style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                  >
                    {f.name}
                  </h3>
                  <p className="text-xs text-[#5A5957] font-sans mt-0.5">
                    {f.club || "Independen"}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-black/10 flex items-center justify-between text-xs">
                  <span className="font-mono text-[#5A5957]">
                    REKOR: <strong className="text-[#0B0B0B]">{f.wins}W - {f.losses}L - {f.draws}D</strong>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#8F8E8B] group-hover:text-[#D91F2C] transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        )}

      </section>

    </main>
  );
}
