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
          1. EDITORIAL SPLIT HERO
      ═════════════════════════════════════════════ */}
      <section className="relative w-full border-b border-black/10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 min-h-[480px] lg:min-h-[540px]">
          
          <div className="lg:col-span-7 py-12 lg:py-20 flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D91F2C]" />
              <p className="font-technical text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
                REDY CHAMPIONSHIP 2 • ATHLETE ROSTER
              </p>
            </div>

            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tight leading-[0.85] text-[#0B0B0B]">
              PARA<br />
              PETARUNG.
            </h1>

            <p className="text-sm sm:text-base text-[#5A5957] font-sans max-w-lg leading-relaxed">
              Direktori resmi atlet kejuaraan. Data rekor tanding dan profil fisik disahkan melalui penimbangan resmi (Official Weigh-in).
            </p>
          </div>

          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full -mx-5 sm:-mx-8 lg:mx-0">
            <Image
              src="/images/v9/04_FOTO_FIGHT_DESKTOP_TANPA_TEKST.png"
              alt="Kickboxing Athletes Roster"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center grayscale contrast-125"
            />
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. FILTER & SEARCH INTERFACE
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-10 w-full border-b border-black/10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          
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
              placeholder="CARI NAMA PETARUNG ATAU CAMP..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white border border-black/20 px-4 py-3 pl-11 text-xs uppercase tracking-wider text-[#0B0B0B] placeholder:text-[#8F8E8B] focus:outline-none focus:border-black font-sans"
            />
            <Search className="w-4 h-4 text-[#8F8E8B] absolute left-4 top-1/2 -translate-y-1/2" />
          </form>

          {/* Division Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => applyFilters({ division: "" })}
              className={`px-4 py-2 text-xs font-display tracking-wider uppercase transition-colors ${
                !currentDivision
                  ? "bg-[#0B0B0B] text-white"
                  : "bg-white text-[#0B0B0B] border border-black/20 hover:bg-black/5"
              }`}
            >
              SEMUA KELAS
            </button>
            {divisions.map((div) => (
              <button
                key={div}
                type="button"
                onClick={() => applyFilters({ division: div })}
                className={`px-4 py-2 text-xs font-display tracking-wider uppercase transition-colors ${
                  currentDivision === div
                    ? "bg-[#0B0B0B] text-white"
                    : "bg-white text-[#0B0B0B] border border-black/20 hover:bg-black/5"
                }`}
              >
                {div}
              </button>
            ))}
            {(currentQuery || currentDivision || currentWeight) && (
              <button
                type="button"
                onClick={handleReset}
                className="px-3 py-2 text-xs text-[#D91F2C] hover:underline font-technical uppercase font-bold"
              >
                RESET FILTER
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          3. ATHLETES GRID OR PRE-ANNOUNCEMENT STATE
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-16 w-full">
        {fighters.length === 0 ? (
          <div className="py-20 text-center border-t border-b border-black/15 space-y-4">
            <p className="font-technical text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
              OFFICIAL WEIGH-IN PENDING
            </p>
            <h3 className="font-display text-4xl sm:text-5xl uppercase tracking-wider text-[#0B0B0B]">
              ATLET SEGERA DIUMUMKAN.
            </h3>
            <p className="text-sm text-[#5A5957] max-w-md mx-auto font-sans leading-relaxed">
              Daftar atlet petarung resmi sedang dalam verifikasi medis dan penimbangan badan sebelum perilisan resmi bagan turnamen.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {fighters.map((fighter) => (
              <Link
                key={fighter.id}
                href={`/fighters/${fighter.slug}`}
                className="group block bg-white border border-black/15 p-4 hover:border-black transition-all ring-corner-frame"
              >
                <div className="relative aspect-[3/4] w-full bg-[#EDE8DE] overflow-hidden mb-4">
                  {fighter.image ? (
                    <Image
                      src={fighter.image}
                      alt={fighter.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-center p-4">
                      <span className="font-display text-4xl text-[#77716D] uppercase">JKBF</span>
                      <span className="font-technical text-[10px] text-[#77716D] uppercase tracking-wider mt-1">OFFICIAL ATHLETE</span>
                    </div>
                  )}
                  <div className="absolute top-2 right-2 bg-[#0B0B0B] text-white font-technical text-[10px] uppercase font-bold px-2 py-0.5">
                    {fighter.weightClass}
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="font-technical text-[10px] uppercase font-bold tracking-widest text-[#D91F2C] block">
                    {fighter.division}
                  </span>
                  <h3 className="font-display text-2xl uppercase tracking-wider text-[#0B0B0B] group-hover:text-[#D91F2C] transition-colors">
                    {fighter.name}
                  </h3>
                  <p className="font-technical text-xs text-[#77716D]">
                    {fighter.club || "Independen"}
                  </p>
                  <div className="pt-2 border-t border-black/10 flex items-center justify-between font-technical text-xs font-bold text-[#0B0B0B]">
                    <span>REKOR:</span>
                    <span>{fighter.wins}W - {fighter.losses}L - {fighter.draws}D</span>
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
