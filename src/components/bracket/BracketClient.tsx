"use client";

import { useState } from "react";
import Link from "next/link";
import { Trophy, ShieldCheck, Scale, Clock, AlertCircle, Sparkles } from "lucide-react";
import { EVENT_CONFIG } from "@/lib/event-config";

interface BracketClientProps {
  tournaments?: any[];
}

export default function BracketClient({ tournaments }: BracketClientProps) {
  const divisions = EVENT_CONFIG.divisions;
  const [selectedDivisionIndex, setSelectedDivisionIndex] = useState(0);
  const activeDivision = divisions[selectedDivisionIndex];

  const [activeMobileRound, setActiveMobileRound] = useState<"QF" | "SF" | "FINAL">("QF");

  // 8-Man bracket slot architecture (Official K-1 Tournament Draw Structure)
  const quarterFinals = [
    {
      partai: "PARTAI 01",
      red: { label: "SUDUT MERAH", slot: "Unggulan Pool A1", club: "Menunggu Undian TM" },
      blue: { label: "SUDUT BIRU", slot: "Penantang Pool A2", club: "Menunggu Undian TM" },
      schedule: "SABTU, 12 DESEMBER • 14:00 WIB",
      matchId: "QF-1",
      winnerTarget: "SF-1 (Sudut Merah)",
    },
    {
      partai: "PARTAI 02",
      red: { label: "SUDUT MERAH", slot: "Unggulan Pool B1", club: "Menunggu Undian TM" },
      blue: { label: "SUDUT BIRU", slot: "Penantang Pool B2", club: "Menunggu Undian TM" },
      schedule: "SABTU, 12 DESEMBER • 15:00 WIB",
      matchId: "QF-2",
      winnerTarget: "SF-1 (Sudut Biru)",
    },
    {
      partai: "PARTAI 03",
      red: { label: "SUDUT MERAH", slot: "Unggulan Pool C1", club: "Menunggu Undian TM" },
      blue: { label: "SUDUT BIRU", slot: "Penantang Pool C2", club: "Menunggu Undian TM" },
      schedule: "SABTU, 12 DESEMBER • 16:30 WIB",
      matchId: "QF-3",
      winnerTarget: "SF-2 (Sudut Merah)",
    },
    {
      partai: "PARTAI 04",
      red: { label: "SUDUT MERAH", slot: "Unggulan Pool D1", club: "Menunggu Undian TM" },
      blue: { label: "SUDUT BIRU", slot: "Penantang Pool D2", club: "Menunggu Undian TM" },
      schedule: "SABTU, 12 DESEMBER • 17:30 WIB",
      matchId: "QF-4",
      winnerTarget: "SF-2 (Sudut Biru)",
    },
  ];

  const semiFinals = [
    {
      partai: "SEMIFINAL 01",
      red: { label: "SUDUT MERAH", slot: "Pemenang Partai 01 (QF-1)", club: "Tiket Semifinal Pool A" },
      blue: { label: "SUDUT BIRU", slot: "Pemenang Partai 02 (QF-2)", club: "Tiket Semifinal Pool B" },
      schedule: "MINGGU, 13 DESEMBER • 19:30 WIB",
      matchId: "SF-1",
      winnerTarget: "FINAL (Sudut Merah)",
    },
    {
      partai: "SEMIFINAL 02",
      red: { label: "SUDUT MERAH", slot: "Pemenang Partai 03 (QF-3)", club: "Tiket Semifinal Pool C" },
      blue: { label: "SUDUT BIRU", slot: "Pemenang Partai 04 (QF-4)", club: "Tiket Semifinal Pool D" },
      schedule: "MINGGU, 13 DESEMBER • 20:30 WIB",
      matchId: "SF-2",
      winnerTarget: "FINAL (Sudut Biru)",
    },
  ];

  const grandFinal = {
    partai: `GRAND FINAL • PEREBUTAN SABUK EMAS ${activeDivision.name}`,
    red: { label: "SUDUT MERAH", slot: "Pemenang Semifinal 01", club: "Finalis Pool Atas" },
    blue: { label: "SUDUT BIRU", slot: "Pemenang Semifinal 02", club: "Finalis Pool Bawah" },
    schedule: "SENIN, 14 DESEMBER 2026 • 21:00 WIB",
    matchId: "FINAL-01",
  };

  return (
    <div className="w-full space-y-8 font-sans">
      
      {/* ═════════════════════════════════════════════════════════════════════
          1. 4 DIVISION TABS (Single Source of Truth)
      ═════════════════════════════════════════════ */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 border-b border-white/10 pb-6">
        {divisions.map((div, idx) => {
          const isActive = idx === selectedDivisionIndex;
          return (
            <button
              key={div.no}
              type="button"
              onClick={() => setSelectedDivisionIndex(idx)}
              className={`px-5 sm:px-6 py-3 text-xs sm:text-sm font-display tracking-wider uppercase transition-all rounded flex items-center gap-2 ${
                isActive
                  ? "bg-[#D91F2C] text-white shadow-[0_0_20px_rgba(217,31,44,0.35)] ring-1 ring-[#D91F2C]"
                  : "bg-[#141416] text-white/70 hover:text-white border border-white/10 hover:border-white/30"
              }`}
            >
              <span>DIVISI {div.no}: {div.name}</span>
              <span className={`text-[10px] font-technical px-1.5 py-0.5 rounded ${
                isActive ? "bg-black/30 text-white" : "bg-white/10 text-white/60"
              }`}>
                {div.limit}
              </span>
            </button>
          );
        })}
      </div>

      {/* ═════════════════════════════════════════════════════════════════════
          2. OFFICIAL STATUS BANNER (P0 Audit Resolution)
      ═════════════════════════════════════════════ */}
      <div className="p-4 sm:p-5 bg-[#141416] border-l-4 border-[#D91F2C] border-y border-r border-white/10 rounded flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-[#D91F2C] shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <h4 className="font-display text-sm sm:text-base uppercase tracking-wider text-white">
              STATUS RESMI: STRUKTUR BAGAN TURNAMEN 8-MAN K-1
            </h4>
            <p className="font-sans text-xs text-white/60 leading-relaxed max-w-2xl">
              Undian (*drawing*) nama petarung ke dalam bagan pertandingan akan dilaksanakan secara transparan pada sesi **Technical Meeting & Official Weigh-In** pada 11–12 Desember 2026 di GOR UNY Yogyakarta.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0 self-start md:self-center">
          <span className="font-technical text-[11px] uppercase tracking-wider text-white/40">
            SISTEM GUGUR TUNGGAL
          </span>
          <span className="bg-[#D91F2C]/20 border border-[#D91F2C]/40 text-[#D91F2C] font-technical text-[11px] font-bold px-2.5 py-1 rounded uppercase">
            3x3 MENIT K-1
          </span>
        </div>
      </div>

      {/* ═════════════════════════════════════════════════════════════════════
          3. MOBILE ROUND CONTROLS (Small screens tab bar)
      ═════════════════════════════════════════════ */}
      <div className="lg:hidden flex items-center border border-white/10 rounded p-1 bg-[#121214]">
        <button
          type="button"
          onClick={() => setActiveMobileRound("QF")}
          className={`flex-1 py-2 text-xs font-display uppercase tracking-wider rounded transition-colors ${
            activeMobileRound === "QF" ? "bg-[#D91F2C] text-white font-bold" : "text-white/60 hover:text-white"
          }`}
        >
          BABAK 1: PEREMPAT FINAL (4)
        </button>
        <button
          type="button"
          onClick={() => setActiveMobileRound("SF")}
          className={`flex-1 py-2 text-xs font-display uppercase tracking-wider rounded transition-colors ${
            activeMobileRound === "SF" ? "bg-[#D91F2C] text-white font-bold" : "text-white/60 hover:text-white"
          }`}
        >
          BABAK 2: SEMIFINAL (2)
        </button>
        <button
          type="button"
          onClick={() => setActiveMobileRound("FINAL")}
          className={`flex-1 py-2 text-xs font-display uppercase tracking-wider rounded transition-colors ${
            activeMobileRound === "FINAL" ? "bg-[#D91F2C] text-white font-bold" : "text-white/60 hover:text-white"
          }`}
        >
          GRAND FINAL
        </button>
      </div>

      {/* ═════════════════════════════════════════════════════════════════════
          4. DESKTOP & MOBILE TOURNAMENT BRACKET TREE
      ═════════════════════════════════════════════ */}
      <div className="w-full pb-6">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch relative">
          
          {/* ─────────────────────────────────────────────────────────────
              COLUMN 1: PEREMPAT FINAL (Quarterfinals - 4 Bouts)
          ───────────────────────────────────────────────────────────── */}
          <div className={`lg:col-span-5 space-y-4 ${activeMobileRound !== "QF" ? "hidden lg:block" : "block"}`}>
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="font-display text-sm tracking-wider uppercase text-white/90 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white/40" />
                BABAK 1: PEREMPAT FINAL
              </span>
              <span className="font-technical text-[10px] text-white/40 uppercase">SABTU, 12 DESEMBER</span>
            </div>

            <div className="space-y-4">
              {quarterFinals.map((match) => (
                <div
                  key={match.matchId}
                  className="bg-[#121214] border border-white/10 hover:border-white/30 transition-all rounded p-3.5 space-y-2.5 relative group"
                >
                  <div className="flex items-center justify-between font-technical text-[10px]">
                    <span className="text-white/50 font-bold uppercase">{match.partai}</span>
                    <span className="text-[#D91F2C] font-semibold">{match.schedule}</span>
                  </div>

                  {/* Corner Red */}
                  <div className="bg-[#1a1314] border-l-2 border-[#D91F2C] p-2.5 rounded-r flex items-center justify-between">
                    <div>
                      <span className="font-technical text-[9px] uppercase tracking-wider text-[#D91F2C] font-bold block">
                        {match.red.label}
                      </span>
                      <span className="font-display text-sm sm:text-base text-white tracking-wide uppercase block">
                        {match.red.slot}
                      </span>
                    </div>
                    <span className="font-technical text-[10px] text-white/40 uppercase bg-black/40 px-2 py-0.5 rounded">
                      {match.red.club}
                    </span>
                  </div>

                  {/* Corner Blue */}
                  <div className="bg-[#13161c] border-l-2 border-[#1E6FD9] p-2.5 rounded-r flex items-center justify-between">
                    <div>
                      <span className="font-technical text-[9px] uppercase tracking-wider text-[#1E6FD9] font-bold block">
                        {match.blue.label}
                      </span>
                      <span className="font-display text-sm sm:text-base text-white tracking-wide uppercase block">
                        {match.blue.slot}
                      </span>
                    </div>
                    <span className="font-technical text-[10px] text-white/40 uppercase bg-black/40 px-2 py-0.5 rounded">
                      {match.blue.club}
                    </span>
                  </div>

                  <div className="pt-1 flex items-center justify-between font-technical text-[10px] text-white/30 border-t border-white/5">
                    <span>STATUS: JADWAL RESMI</span>
                    <span className="text-white/50">Lolos ke {match.winnerTarget}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              COLUMN 2: SEMIFINAL (2 Bouts)
          ───────────────────────────────────────────────────────────── */}
          <div className={`lg:col-span-4 space-y-4 lg:pt-14 ${activeMobileRound !== "SF" ? "hidden lg:block" : "block"}`}>
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="font-display text-sm tracking-wider uppercase text-white/90 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D91F2C]" />
                BABAK 2: SEMIFINAL
              </span>
              <span className="font-technical text-[10px] text-[#D91F2C] uppercase font-bold">MINGGU, 13 DESEMBER</span>
            </div>

            <div className="space-y-12">
              {semiFinals.map((match) => (
                <div
                  key={match.matchId}
                  className="bg-[#141416] border border-white/15 hover:border-[#D91F2C]/50 transition-all rounded p-4 space-y-3 relative ring-1 ring-white/5 shadow-lg"
                >
                  <div className="flex items-center justify-between font-technical text-[10px]">
                    <span className="text-[#D91F2C] font-bold uppercase">{match.partai}</span>
                    <span className="text-white/60">{match.schedule}</span>
                  </div>

                  {/* Corner Red */}
                  <div className="bg-[#1f1416] border-l-2 border-[#D91F2C] p-2.5 rounded-r flex items-center justify-between">
                    <div>
                      <span className="font-technical text-[9px] uppercase tracking-wider text-[#D91F2C] font-bold block">
                        {match.red.label}
                      </span>
                      <span className="font-display text-sm sm:text-base text-white tracking-wide uppercase block">
                        {match.red.slot}
                      </span>
                    </div>
                    <span className="font-technical text-[10px] text-white/40 uppercase">
                      POOL A
                    </span>
                  </div>

                  {/* Corner Blue */}
                  <div className="bg-[#131924] border-l-2 border-[#1E6FD9] p-2.5 rounded-r flex items-center justify-between">
                    <div>
                      <span className="font-technical text-[9px] uppercase tracking-wider text-[#1E6FD9] font-bold block">
                        {match.blue.label}
                      </span>
                      <span className="font-display text-sm sm:text-base text-white tracking-wide uppercase block">
                        {match.blue.slot}
                      </span>
                    </div>
                    <span className="font-technical text-[10px] text-white/40 uppercase">
                      POOL B
                    </span>
                  </div>

                  <div className="pt-1 flex items-center justify-between font-technical text-[10px] text-white/30 border-t border-white/5">
                    <span>SISTEM 3 RONDE</span>
                    <span className="text-white/70 font-bold">Menuju Sabuk Emas</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              COLUMN 3: GRAND FINAL CHAMPIONSHIP (1 Bout)
          ───────────────────────────────────────────────────────────── */}
          <div className={`lg:col-span-3 space-y-4 lg:pt-28 ${activeMobileRound !== "FINAL" ? "hidden lg:block" : "block"}`}>
            <div className="flex items-center justify-between border-b border-amber-500/30 pb-2">
              <span className="font-display text-sm tracking-wider uppercase text-amber-400 flex items-center gap-2">
                <Trophy className="w-4 h-4 text-amber-400" />
                BABAK PUNCAK: SABUK EMAS
              </span>
              <span className="font-technical text-[10px] text-amber-400/80 uppercase font-bold">SENIN, 14 DESEMBER</span>
            </div>

            <div className="bg-[#181410] border-2 border-amber-500/40 rounded p-5 space-y-4 shadow-[0_0_35px_rgba(245,158,11,0.15)] relative">
              <div className="text-center pb-2 border-b border-amber-500/20">
                <Trophy className="w-8 h-8 text-amber-400 mx-auto mb-1 animate-pulse" />
                <span className="font-technical text-[10px] uppercase tracking-[0.2em] text-amber-400 font-bold block">
                  PEREBUTAN GELAR JUARA RESMI
                </span>
                <h4 className="font-display text-xl sm:text-2xl uppercase tracking-wider text-white">
                  SABUK EMAS {activeDivision.name}
                </h4>
                <span className="font-technical text-[10px] text-white/50 block mt-0.5">
                  BATAS BERAT: MAKSIMAL {activeDivision.limit}
                </span>
              </div>

              {/* Corner Red */}
              <div className="bg-[#241517] border-l-4 border-[#D91F2C] p-3 rounded-r">
                <span className="font-technical text-[10px] uppercase tracking-wider text-[#D91F2C] font-bold block">
                  {grandFinal.red.label}
                </span>
                <span className="font-display text-base text-white tracking-wide uppercase block">
                  {grandFinal.red.slot}
                </span>
                <span className="font-technical text-[10px] text-white/40 block mt-0.5">
                  Juara Pool Atas • Menuju Gelar Juara
                </span>
              </div>

              <div className="text-center font-display text-lg text-amber-400 font-black">
                VS
              </div>

              {/* Corner Blue */}
              <div className="bg-[#151c28] border-l-4 border-[#1E6FD9] p-3 rounded-r">
                <span className="font-technical text-[10px] uppercase tracking-wider text-[#1E6FD9] font-bold block">
                  {grandFinal.blue.label}
                </span>
                <span className="font-display text-base text-white tracking-wide uppercase block">
                  {grandFinal.blue.slot}
                </span>
                <span className="font-technical text-[10px] text-white/40 block mt-0.5">
                  Juara Pool Bawah • Menuju Gelar Juara
                </span>
              </div>

              <div className="pt-2 border-t border-amber-500/20 text-center font-technical text-[10px] text-white/50">
                {grandFinal.schedule} • ARENA RING UTAMA
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ═════════════════════════════════════════════════════════════════════
          5. TECHNICAL SPECIFICATIONS & FAQ LINK
      ═════════════════════════════════════════════ */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-white/10 font-sans">
        <div className="bg-[#121214] border border-white/5 p-4 rounded space-y-1">
          <div className="flex items-center gap-2 text-xs font-display uppercase tracking-wider text-white">
            <Scale className="w-4 h-4 text-[#D91F2C]" /> SISTEM ELIMINASI MURNI
          </div>
          <p className="font-sans text-xs text-white/50 leading-relaxed">
            Format turnamen gugur tunggal 8 petarung tanpa repechage. Pemenang melaju langsung ke babak berikutnya hingga Grand Final.
          </p>
        </div>

        <div className="bg-[#121214] border border-white/5 p-4 rounded space-y-1">
          <div className="flex items-center gap-2 text-xs font-display uppercase tracking-wider text-white">
            <Clock className="w-4 h-4 text-[#D91F2C]" /> REGULASI K-1 RULES
          </div>
          <p className="font-sans text-xs text-white/50 leading-relaxed">
            3 ronde × 3 menit dengan 1 menit jeda istirahat. Wasit & dewan juri bersertifikasi resmi kejuaraan nasional.
          </p>
        </div>

        <div className="bg-[#121214] border border-white/5 p-4 rounded space-y-1">
          <div className="flex items-center gap-2 text-xs font-display uppercase tracking-wider text-white">
            <ShieldCheck className="w-4 h-4 text-[#D91F2C]" /> PENDAFTARAN ATLET RESMI
          </div>
          <p className="font-sans text-xs text-white/50 leading-relaxed">
            Sasana dan atlet yang berminat dapat menghubungi panitia pelaksana via halaman <Link href="/kontak" className="text-[#D91F2C] underline">Kontak & Sekretariat</Link>.
          </p>
        </div>
      </div>

    </div>
  );
}
