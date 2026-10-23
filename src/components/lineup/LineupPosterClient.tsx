"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Music, MapPin, Calendar, Clock, Sparkles, LayoutGrid, AlignLeft } from "lucide-react";

export interface PerformerItem {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  stage: string;
  day?: string;
  genre?: string;
  time?: string;
  tier?: "HEADLINER" | "FEATURED" | "SUPPORTING";
}

const STAGES = [
  {
    id: "ALL",
    name: "SEMUA PANGGUNG",
    code: "00",
  },
  {
    id: "THE_RING_STAGE",
    name: "THE RING STAGE",
    code: "01",
    location: "Main Arena • GOR UNY",
    genre: "Rock • Alternative • Anthemic",
    time: "19:00 – 23:00 WIB",
    img: "/images/lineup/ring-stage.jpg",
    desc: "Panggung megah berlatar ring utama kickboxing dengan pencahayaan konser stadium dan sound system 60.000 watt.",
  },
  {
    id: "HERITAGE_STAGE",
    name: "HERITAGE STAGE",
    code: "02",
    location: "Cultural Hall GOR UNY",
    genre: "Hip-Hop • Folk • Indie • Neo-Tradisi",
    time: "16:30 – 21:00 WIB",
    img: "/images/lineup/heritage-stage.jpg",
    desc: "Ruang intim pertunjukan musik independen dan rima jalanan bertaraf kurasi nasional dengan resonansi akustik premium.",
  },
  {
    id: "UNDERGROUND_BEAT",
    name: "UNDERGROUND BEAT",
    code: "03",
    location: "Outdoor Sound Plaza",
    genre: "Electronic • Bass • Dub • Sound System",
    time: "15:00 – 22:30 WIB",
    img: "/images/lineup/underground-beat.jpg",
    desc: "Zona audio visual terbuka di pelataran barat GOR UNY untuk eksplorasi synthesizer, beats, dan atmosfer selebrasi festival.",
  },
];

const DEFAULT_LINEUP: PerformerItem[] = [
  {
    id: "p1",
    name: "THE SOUND OF NYALI",
    slug: "the-sound-of-nyali",
    description: "Kolektif rock & alternative festival yang membakar atmosfer laga dengan aransemen orkestrasi distorsi berenergi tinggi.",
    image: "/images/jkb/hero-concert.jpg",
    stage: "THE RING STAGE",
    day: "MINGGU, 14 DESEMBER 2026",
    time: "21:30 WIB",
    genre: "ROCK / ANTHEMIC",
    tier: "HEADLINER",
  },
  {
    id: "p2",
    name: "SPECIAL GUEST HEADLINER",
    slug: "special-guest-headliner",
    description: "Bintang tamu nasional papan atas fase 1. Pengumuman nama dan kolaborasi eksklusif disiarkan jelang kick-off festival.",
    image: "/images/jkb/festival-lights.jpg",
    stage: "THE RING STAGE",
    day: "SABTU, 13 DESEMBER 2026",
    time: "21:00 WIB",
    genre: "NATIONAL HEADLINER",
    tier: "HEADLINER",
  },
  {
    id: "p3",
    name: "JOGJA HIP-HOP CYPHERS",
    slug: "jogja-hiphop-cyphers",
    description: "Barisan MC legendaris dan beatmaker urban Yogyakarta menyuarakan rima sportivitas, mental petarung, dan denyut kota.",
    image: "/images/jkb/concert-crowd.jpg",
    stage: "HERITAGE STAGE",
    day: "JUMAT, 12 DESEMBER 2026",
    time: "19:45 WIB",
    genre: "BOOM BAP / CYPHER",
    tier: "FEATURED",
  },
  {
    id: "p4",
    name: "STRIKE & SOUNDS ELECTRONIC",
    slug: "strike-and-sounds",
    description: "Eksplorasi synth modular dan bass frekuensi rendah yang mengiringi walkout atlet finalis dan selebrasi juara sabuk emas.",
    image: "/images/lineup/underground-beat.jpg",
    stage: "UNDERGROUND BEAT",
    day: "SABTU, 13 DESEMBER 2026",
    time: "20:15 WIB",
    genre: "ELECTRONIC / BASS",
    tier: "FEATURED",
  },
  {
    id: "p5",
    name: "MATARAM HEAVY ROOTS",
    slug: "mataram-heavy-roots",
    description: "Eksplorasi instrumen gamelan kontemporer dipadukan dengan drum & bass berkecepatan tinggi sebagai musik pembuka resmi kejuaraan.",
    image: "/images/lineup/heritage-stage.jpg",
    stage: "HERITAGE STAGE",
    day: "JUMAT, 12 DESEMBER 2026",
    time: "17:15 WIB",
    genre: "NEO-ETHNIC / BASS",
    tier: "SUPPORTING",
  },
  {
    id: "p6",
    name: "CYBER COMBAT AUDIO LAB",
    slug: "cyber-combat-audio",
    description: "Live DJ set audio interaktif mengiringi pengumuman hasil partai kickboxing dan drawing turnamen.",
    image: "/images/lineup/ring-stage.jpg",
    stage: "UNDERGROUND BEAT",
    day: "MINGGU, 14 DESEMBER 2026",
    time: "18:00 WIB",
    genre: "TECH HOUSE / INDUSTRIAL",
    tier: "SUPPORTING",
  },
];

interface Props {
  initialPerformers?: PerformerItem[];
}

export default function LineupPosterClient({ initialPerformers = [] }: Props) {
  const [selectedStage, setSelectedStage] = useState<string>("ALL");
  const [viewMode, setViewMode] = useState<"POSTER" | "CARDS">("POSTER");

  // Merge database performers with rich showcase items
  const allPerformers: PerformerItem[] = React.useMemo(() => {
    if (initialPerformers.length === 0) return DEFAULT_LINEUP;
    
    // Map initial performers from DB, filling in matching fields
    return DEFAULT_LINEUP.map((defItem) => {
      const match = initialPerformers.find(
        (p) => p.slug === defItem.slug || p.name.toLowerCase().includes(defItem.name.toLowerCase().slice(0, 8))
      );
      if (match) {
        return {
          ...defItem,
          name: match.name,
          description: match.description || defItem.description,
          image: match.image || defItem.image,
        };
      }
      return defItem;
    });
  }, [initialPerformers]);

  const filteredPerformers = React.useMemo(() => {
    if (selectedStage === "ALL") return allPerformers;
    const stageObj = STAGES.find((s) => s.id === selectedStage);
    if (!stageObj) return allPerformers;
    return allPerformers.filter(
      (p) => p.stage.toUpperCase().includes(stageObj.name.toUpperCase()) || stageObj.name.toUpperCase().includes(p.stage.toUpperCase())
    );
  }, [allPerformers, selectedStage]);

  const headliners = filteredPerformers.filter((p) => p.tier === "HEADLINER");
  const featured = filteredPerformers.filter((p) => p.tier === "FEATURED");
  const supporting = filteredPerformers.filter((p) => p.tier === "SUPPORTING");

  return (
    <div className="w-full space-y-12">
      {/* ═════════════════════════════════════════════════════════════════════
          CONTROLS: STAGE SELECTOR & POSTER/CARD VIEW TOGGLE
      ═════════════════════════════════════════════ */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-3 sm:p-4 bg-[#141416] border border-white/10 backdrop-blur-md">
        {/* Stage Filter Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 md:pb-0">
          {STAGES.map((s) => {
            const isActive = selectedStage === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setSelectedStage(s.id)}
                className={`font-technical text-xs uppercase tracking-wider px-3.5 py-2 transition-all whitespace-nowrap shrink-0 border ${
                  isActive
                    ? "bg-[#D91F2C] text-white font-bold border-[#D91F2C] shadow-md shadow-red-950/40"
                    : "bg-[#0B0B0B] text-white/70 border-white/10 hover:text-white hover:border-white/30"
                }`}
              >
                <span>{s.name}</span>
              </button>
            );
          })}
        </div>

        {/* View Switcher: Poster vs Cards */}
        <div className="flex items-center gap-2 self-end md:self-auto shrink-0 border-t md:border-t-0 pt-2 md:pt-0 border-white/10 w-full md:w-auto justify-end">
          <span className="font-technical text-[11px] text-white/40 uppercase tracking-wider mr-1 hidden sm:inline">
            TAMPILAN:
          </span>
          <button
            onClick={() => setViewMode("POSTER")}
            className={`px-3 py-1.5 font-technical text-xs uppercase flex items-center gap-1.5 transition-all border ${
              viewMode === "POSTER"
                ? "bg-white text-black font-bold border-white"
                : "bg-[#0B0B0B] text-white/60 border-white/10 hover:text-white"
            }`}
          >
            <AlignLeft className="w-3.5 h-3.5" /> POSTER BILLING
          </button>
          <button
            onClick={() => setViewMode("CARDS")}
            className={`px-3 py-1.5 font-technical text-xs uppercase flex items-center gap-1.5 transition-all border ${
              viewMode === "CARDS"
                ? "bg-white text-black font-bold border-white"
                : "bg-[#0B0B0B] text-white/60 border-white/10 hover:text-white"
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" /> GRID FOTO
          </button>
        </div>
      </div>

      {/* ═════════════════════════════════════════════════════════════════════
          MODE A: FESTIVAL BILLING POSTER (SÓNAR FESTIVAL BENCHMARK)
      ═════════════════════════════════════════════ */}
      {viewMode === "POSTER" ? (
        <div className="relative bg-gradient-to-b from-[#141416] via-[#0E0E10] to-[#0B0B0B] border border-white/15 p-6 sm:p-10 lg:p-14 overflow-hidden shadow-2xl">
          {/* Subtle Ambient Concert Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-48 bg-[#D91F2C]/15 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-600/10 blur-[100px] pointer-events-none" />

          {/* Festival Headline Masthead */}
          <div className="text-center space-y-2 pb-8 border-b border-white/10 relative z-10">
            <p className="font-technical text-xs tracking-[0.3em] uppercase text-[#D91F2C] font-bold">
              OFFICIAL FESTIVAL BILLING • 12–14 DESEMBER 2026
            </p>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter text-white">
              JKBF LIVE & AMPLIFIED
            </h2>
            <p className="font-sans text-xs sm:text-sm text-white/60 max-w-xl mx-auto">
              Perpaduan ritme rock anthemic, hip-hop cypher, dan synthesizer pengiring turnamen sabuk emas Redy Championship 2.
            </p>
          </div>

          {/* Tier 1: HEADLINERS (Monumental Bold Type) */}
          <div className="py-10 text-center space-y-6 relative z-10 border-b border-white/10">
            <span className="font-technical text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold px-3 py-1 bg-[#D91F2C]/10 border border-[#D91F2C]/20 inline-block">
              HEADLINERS
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-14 gap-y-4">
              {headliners.map((item) => (
                <div key={item.id} className="group cursor-pointer">
                  <h3 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight text-white group-hover:text-[#D91F2C] transition-colors leading-none">
                    {item.name}
                  </h3>
                  <div className="flex items-center justify-center gap-3 mt-2 text-[11px] font-technical text-white/40 group-hover:text-white/70 transition-colors">
                    <span>{item.stage}</span>
                    <span>•</span>
                    <span className="text-[#D91F2C]">{item.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tier 2: FEATURED ACTS (Bold Medium Display) */}
          {featured.length > 0 && (
            <div className="py-8 text-center space-y-5 relative z-10 border-b border-white/10">
              <span className="font-technical text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold">
                CO-HEADLINERS & SPECIAL PERFORMANCES
              </span>
              <div className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-10 gap-y-3">
                {featured.map((item) => (
                  <div key={item.id} className="group cursor-pointer">
                    <h4 className="font-display text-xl sm:text-3xl md:text-4xl uppercase tracking-wider text-white/90 group-hover:text-[#D91F2C] transition-colors">
                      {item.name}
                    </h4>
                    <p className="font-technical text-[10px] text-white/40 mt-0.5">
                      {item.stage} • {item.genre}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tier 3: SUPPORTING & RESIDENTS */}
          {supporting.length > 0 && (
            <div className="pt-8 text-center space-y-4 relative z-10">
              <span className="font-technical text-[10px] uppercase tracking-[0.2em] text-white/40">
                FESTIVAL COLLECTIVE & RESIDENT SOUNDS
              </span>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm sm:text-lg font-display uppercase tracking-wider text-white/70">
                {supporting.map((item, idx) => (
                  <span key={item.id} className="inline-flex items-center gap-3">
                    <span className="hover:text-white transition-colors">{item.name}</span>
                    {idx < supporting.length - 1 && <span className="text-[#D91F2C]/60 text-xs font-technical">/</span>}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Poster Bottom Tag */}
          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-technical text-white/50 gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D91F2C]" />
              <span>PENGUMUMAN FASE 2 SEGERA DIRILIS</span>
            </div>
            <Link
              href="/jadwal"
              className="text-[#D91F2C] hover:text-white font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
            >
              <span>LIHAT RUNDOWN JAM TAMPIL DETAIL</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      ) : (
        /* MODE B: ARTIST CARDS GRID (EDITORIAL CONCERT PHOTOGRAPHY) */
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {filteredPerformers.map((item) => (
            <div
              key={item.id}
              className="group bg-[#141416] border border-white/10 hover:border-[#D91F2C] transition-all overflow-hidden flex flex-col"
            >
              {/* Concert Image Container */}
              <div className="relative aspect-[4/5] sm:aspect-[16/11] w-full bg-[#1c1c1f] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center grayscale contrast-110 group-hover:scale-105 group-hover:grayscale-0 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-black/20 to-transparent" />
                
                {/* Stage Badge */}
                <div className="absolute top-2.5 left-2.5 bg-[#D91F2C] text-white font-technical text-[9px] sm:text-[10px] uppercase font-bold tracking-wider px-2 py-0.5">
                  {item.stage}
                </div>

                {/* Genre Tag */}
                {item.genre && (
                  <div className="absolute top-2.5 right-2.5 bg-black/80 backdrop-blur-sm border border-white/15 text-white/90 font-technical text-[9px] sm:text-[10px] uppercase px-1.5 sm:px-2 py-0.5">
                    {item.genre}
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-3 sm:p-4 flex flex-col justify-between flex-1 space-y-2 bg-[#141416]">
                <div className="space-y-1">
                  <h3 className="font-display text-base sm:text-xl uppercase tracking-wider text-white group-hover:text-[#D91F2C] transition-colors leading-tight line-clamp-1">
                    {item.name}
                  </h3>
                  <p className="font-sans text-xs text-white/60 leading-relaxed line-clamp-2 hidden sm:block">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/10 font-technical text-[10px] sm:text-xs">
                  <div className="flex items-center justify-between text-white/60">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#D91F2C] shrink-0" />
                      <span className="truncate">{item.day ? item.day.split(",")[0] : "12-14 DES"}</span>
                    </span>
                    <span className="flex items-center gap-1 text-[#D91F2C] font-bold shrink-0">
                      <Clock className="w-3 h-3 shrink-0" /> {item.time || "19:00"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ═════════════════════════════════════════════════════════════════════
          3. TIGA ZONA PANGGUNG (CURATED STAGE DOMAINS)
      ═════════════════════════════════════════════ */}
      <div className="space-y-6 pt-10 border-t border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <span className="font-technical text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold block mb-1">
              FESTIVAL INFRASTRUCTURE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-wider text-white">
              TIGA PANGGUNG FESTIVAL GOR UNY
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-white/50 max-w-md sm:text-right">
            Disiapkan untuk kenyamanan penonton dengan tata cahaya dinamis dan pemisahan akustik berstandar pertunjukan profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STAGES.filter((s) => s.id !== "ALL").map((st) => (
            <div
              key={st.code}
              className="bg-[#141416] border border-white/10 hover:border-white/30 transition-all overflow-hidden flex flex-col group"
            >
              {/* Stage Photo */}
              <div className="relative aspect-[16/10] w-full bg-[#1c1c1f] overflow-hidden">
                <Image
                  src={st.img || "/images/lineup/ring-stage.jpg"}
                  alt={st.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center grayscale contrast-110 group-hover:scale-105 group-hover:grayscale-0 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-black/40 to-transparent" />
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm border border-white/20 px-2.5 py-1 text-white font-technical text-xs font-bold">
                  ZONA {st.code}
                </div>
              </div>

              {/* Stage Content */}
              <div className="p-5 flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-display text-2xl uppercase tracking-wider text-white group-hover:text-[#D91F2C] transition-colors">
                    {st.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs font-technical text-[#D91F2C] font-bold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{st.location}</span>
                  </div>
                  <p className="font-sans text-xs text-white/60 leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 space-y-1 text-xs font-technical">
                  <div className="text-white/40 flex justify-between">
                    <span>Waktu Mulai:</span>
                    <span className="text-white font-bold">{st.time}</span>
                  </div>
                  <div className="text-white/40 flex justify-between">
                    <span>Karakter Musik:</span>
                    <span className="text-[#D91F2C] font-bold">{st.genre}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
