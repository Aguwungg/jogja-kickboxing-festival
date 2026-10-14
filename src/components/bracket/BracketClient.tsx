"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Trophy, Shield, Swords, User } from "lucide-react";

interface AthleteData {
  id: string;
  name: string;
  slug: string;
  club: string | null;
  division: string;
  image: string | null;
}

interface MatchData {
  id: string;
  round: string;
  matchNumber: number;
  category: string;
  status: string;
  resultType: string | null;
  roundResult: string | null;
  athlete1: AthleteData | null;
  athlete2: AthleteData | null;
  winner: AthleteData | null;
}

interface TournamentData {
  id: string;
  name: string;
  category: string;
  status: string;
  matches: MatchData[];
}

interface BracketClientProps {
  tournaments: TournamentData[];
}

export default function BracketClient({ tournaments }: BracketClientProps) {
  const [selectedTournamentId, setSelectedTournamentId] = useState<string>(
    tournaments[0]?.id || ""
  );

  const activeTournament =
    tournaments.find((t) => t.id === selectedTournamentId) || tournaments[0];

  const availableRounds = activeTournament
    ? Array.from(new Set(activeTournament.matches.map((m) => m.round)))
    : [];

  const [selectedRoundMobile, setSelectedRoundMobile] = useState<string>(
    availableRounds.includes("SEMIFINAL")
      ? "SEMIFINAL"
      : availableRounds[0] || "SEMIFINAL"
  );

  if (!activeTournament) {
    return (
      <div className="py-24 text-center border border-white/10 bg-[#121212] space-y-4">
        <Trophy className="w-10 h-10 text-[#D91F2C] mx-auto opacity-70" />
        <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-wider text-white">
          MENUNGGU DRAWING RESMI
        </h3>
        <p className="text-xs sm:text-sm text-white/50 max-w-md mx-auto font-sans leading-relaxed">
          Drawing bagan resmi dilakukan pada Technical Meeting & Official Weigh-In tanggal 12 Desember 2026 di GOR UNY Yogyakarta.
        </p>
      </div>
    );
  }

  const semifinalMatches = activeTournament.matches
    .filter((m) => m.round === "SEMIFINAL")
    .sort((a, b) => a.matchNumber - b.matchNumber);

  const finalMatch = activeTournament.matches.find((m) => m.round === "FINAL");

  const mobileFilteredMatches = activeTournament.matches.filter(
    (m) => m.round === selectedRoundMobile
  );

  return (
    <div className="w-full space-y-8 font-sans">
      
      {/* Division Selector Tabs */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 border-b border-white/10 pb-6">
        {tournaments.map((t) => {
          const isActive = t.id === activeTournament.id;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setSelectedTournamentId(t.id)}
              className={`px-5 sm:px-7 py-3 text-xs sm:text-sm font-display tracking-wider uppercase transition-all rounded ${
                isActive
                  ? "bg-[#D91F2C] text-white shadow-[0_0_20px_rgba(217,31,44,0.35)] ring-1 ring-[#D91F2C]"
                  : "bg-[#141414] text-white/70 hover:text-white border border-white/10 hover:border-white/30"
              }`}
            >
              {t.name}
            </button>
          );
        })}
      </div>

      {/* Drawing Info Banner */}
      <div className="py-3 px-5 bg-[#121214] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-technical text-white/90 uppercase font-bold tracking-wider">
            STATUS: SISTEM ELIMINASI 3 RONDE × 3 MENIT
          </span>
        </div>
        <span className="font-technical text-[11px] text-[#D91F2C] uppercase tracking-wider font-bold">
          K-1 RULES • WASIT & JURI BERSERTIFIKASI
        </span>
      </div>

      {/* Desktop Bracket Tree (Grid 12-cols) */}
      <div className="hidden lg:grid grid-cols-12 gap-8 items-start pt-4">
        
        {/* Column 1: Semifinals (Col 6) */}
        <div className="col-span-6 space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <span className="font-technical text-[10px] uppercase font-bold tracking-widest text-[#D91F2C]">
                BABAK 01
              </span>
              <h4 className="font-display text-2xl uppercase tracking-wider text-white">
                SEMIFINAL MATCHES
              </h4>
            </div>
            <span className="font-technical text-xs text-white/40">2 PARTAI</span>
          </div>

          <div className="space-y-5">
            {semifinalMatches.length === 0 ? (
              <p className="text-xs text-white/40 font-technical py-6">Bagan semifinal menunggu rilis drawing.</p>
            ) : (
              semifinalMatches.map((m, idx) => (
                <div
                  key={m.id}
                  className="bg-[#121214] border border-white/10 hover:border-white/30 transition-all rounded overflow-hidden"
                >
                  {/* Match Header */}
                  <div className="px-4 py-2 bg-black/60 border-b border-white/5 flex items-center justify-between text-[11px] font-technical">
                    <span className="text-white/60 font-bold">PARTAI {idx + 1}</span>
                    <span className="text-[#D91F2C] uppercase font-bold px-2 py-0.5 bg-[#D91F2C]/10 border border-[#D91F2C]/20 rounded text-[10px]">
                      {m.status}
                    </span>
                  </div>

                  <div className="divide-y divide-white/5">
                    {/* Red Corner */}
                    <div className="p-4 flex items-center justify-between border-l-4 border-l-red-600 bg-red-950/10 hover:bg-red-950/20 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded bg-red-900/40 border border-red-500/30 overflow-hidden relative flex items-center justify-center shrink-0">
                          {m.athlete1?.image ? (
                            <Image src={m.athlete1.image} alt={m.athlete1.name} fill className="object-cover" />
                          ) : (
                            <User className="w-5 h-5 text-red-300" />
                          )}
                        </div>
                        <div>
                          <p className="font-display text-xl text-white uppercase tracking-wider leading-none">
                            {m.athlete1?.name || "Petarung Sudut Merah"}
                          </p>
                          <p className="font-technical text-[10px] text-white/40 uppercase mt-1">
                            {m.athlete1?.club || "Kualifikasi Resmi"}
                          </p>
                        </div>
                      </div>
                      <span className="font-technical text-[10px] text-red-400 font-bold uppercase tracking-wider px-2 py-0.5 bg-red-900/30 rounded">
                        SUDUT MERAH
                      </span>
                    </div>

                    {/* Blue Corner */}
                    <div className="p-4 flex items-center justify-between border-l-4 border-l-blue-600 bg-blue-950/10 hover:bg-blue-950/20 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded bg-blue-900/40 border border-blue-500/30 overflow-hidden relative flex items-center justify-center shrink-0">
                          {m.athlete2?.image ? (
                            <Image src={m.athlete2.image} alt={m.athlete2.name} fill className="object-cover" />
                          ) : (
                            <User className="w-5 h-5 text-blue-300" />
                          )}
                        </div>
                        <div>
                          <p className="font-display text-xl text-white uppercase tracking-wider leading-none">
                            {m.athlete2?.name || "Petarung Sudut Biru"}
                          </p>
                          <p className="font-technical text-[10px] text-white/40 uppercase mt-1">
                            {m.athlete2?.club || "Kualifikasi Resmi"}
                          </p>
                        </div>
                      </div>
                      <span className="font-technical text-[10px] text-blue-400 font-bold uppercase tracking-wider px-2 py-0.5 bg-blue-900/30 rounded">
                        SUDUT BIRU
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Column 2: Grand Final (Col 6) */}
        <div className="col-span-6 space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <span className="font-technical text-[10px] uppercase font-bold tracking-widest text-[#D91F2C]">
                BABAK PUNCAK
              </span>
              <h4 className="font-display text-2xl uppercase tracking-wider text-white">
                CHAMPIONSHIP FINAL
              </h4>
            </div>
            <span className="font-technical text-xs text-amber-400 font-bold">SABUK EMAS</span>
          </div>

          <div className="bg-[#141416] border-2 border-amber-500/40 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(245,158,11,0.1)]">
            <div className="px-5 py-3 bg-gradient-to-r from-amber-950/40 via-black to-amber-950/40 border-b border-amber-500/20 flex items-center justify-between text-xs font-technical">
              <span className="font-bold text-amber-400 flex items-center gap-1.5">
                <Trophy className="w-4 h-4 text-amber-400" /> PEREBUTAN SABUK JUARA
              </span>
              <span className="text-white/60">SENIN, 14 DESEMBER 2026</span>
            </div>

            <div className="p-6 space-y-5">
              {/* Finalist 1 */}
              <div className="p-4 bg-red-950/15 border border-red-500/20 rounded flex items-center justify-between">
                <div>
                  <span className="font-technical text-[10px] text-red-400 uppercase tracking-widest block font-bold">
                    PEMENANG SEMIFINAL 1 (SUDUT MERAH)
                  </span>
                  <p className="font-display text-2xl text-white uppercase tracking-wider mt-1">
                    {finalMatch?.athlete1?.name || "TBD — PEMENANG PARTAI 1"}
                  </p>
                </div>
                <Swords className="w-5 h-5 text-red-400 opacity-60" />
              </div>

              {/* VS Divider */}
              <div className="text-center">
                <span className="font-display text-lg text-amber-400 font-black px-4 py-1 bg-black border border-amber-500/30 rounded-full tracking-widest">
                  VS
                </span>
              </div>

              {/* Finalist 2 */}
              <div className="p-4 bg-blue-950/15 border border-blue-500/20 rounded flex items-center justify-between">
                <div>
                  <span className="font-technical text-[10px] text-blue-400 uppercase tracking-widest block font-bold">
                    PEMENANG SEMIFINAL 2 (SUDUT BIRU)
                  </span>
                  <p className="font-display text-2xl text-white uppercase tracking-wider mt-1">
                    {finalMatch?.athlete2?.name || "TBD — PEMENANG PARTAI 2"}
                  </p>
                </div>
                <Swords className="w-5 h-5 text-blue-400 opacity-60" />
              </div>

              <div className="pt-3 border-t border-white/10 text-center font-technical text-xs text-white/50 uppercase tracking-wider">
                STATUS: {finalMatch?.status || "MENUNGGU HASIL BABAK SEMIFINAL"}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Mobile Bracket View with Round Switcher */}
      <div className="lg:hidden space-y-5 pt-2">
        {/* Round Switcher Tabs */}
        <div className="flex items-center gap-2 border-b border-white/10 pb-4">
          {["SEMIFINAL", "FINAL"].map((round) => (
            <button
              key={round}
              type="button"
              onClick={() => setSelectedRoundMobile(round)}
              className={`flex-1 py-2.5 text-xs font-display tracking-wider uppercase rounded transition-all ${
                selectedRoundMobile === round
                  ? "bg-[#D91F2C] text-white shadow-[0_0_15px_rgba(217,31,44,0.4)]"
                  : "bg-[#141414] text-white/70 border border-white/10"
              }`}
            >
              BABAK {round}
            </button>
          ))}
        </div>

        {/* Mobile Matches */}
        <div className="space-y-4">
          {mobileFilteredMatches.length === 0 ? (
            <p className="text-xs text-white/50 font-technical py-8 text-center bg-[#121214] border border-white/10 rounded">
              Partai {selectedRoundMobile} menunggu penetapan drawing resmi.
            </p>
          ) : (
            mobileFilteredMatches.map((m, idx) => (
              <div key={m.id} className="bg-[#121214] border border-white/10 rounded overflow-hidden">
                <div className="px-4 py-2 bg-black/60 border-b border-white/5 flex items-center justify-between text-[11px] font-technical">
                  <span className="text-white/60 font-bold">PARTAI {idx + 1}</span>
                  <span className="text-[#D91F2C] uppercase font-bold text-[10px] px-2 py-0.5 bg-[#D91F2C]/10 rounded">
                    {m.status}
                  </span>
                </div>

                <div className="divide-y divide-white/5">
                  {/* Red Corner Mobile */}
                  <div className="p-3.5 flex items-center justify-between border-l-4 border-l-red-600 bg-red-950/10">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded bg-red-900/40 border border-red-500/30 overflow-hidden relative flex items-center justify-center shrink-0">
                        {m.athlete1?.image ? (
                          <Image src={m.athlete1.image} alt={m.athlete1.name} fill className="object-cover" />
                        ) : (
                          <User className="w-4 h-4 text-red-300" />
                        )}
                      </div>
                      <div>
                        <p className="font-display text-lg text-white uppercase tracking-wider leading-none">
                          {m.athlete1?.name || "Sudut Merah (TBD)"}
                        </p>
                        <p className="font-technical text-[9px] text-white/40 uppercase mt-0.5">
                          {m.athlete1?.club || "Kualifikasi Resmi"}
                        </p>
                      </div>
                    </div>
                    <span className="font-technical text-[9px] text-red-400 font-bold uppercase tracking-wider px-1.5 py-0.5 bg-red-900/30 rounded">
                      MERAH
                    </span>
                  </div>

                  {/* Blue Corner Mobile */}
                  <div className="p-3.5 flex items-center justify-between border-l-4 border-l-blue-600 bg-blue-950/10">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded bg-blue-900/40 border border-blue-500/30 overflow-hidden relative flex items-center justify-center shrink-0">
                        {m.athlete2?.image ? (
                          <Image src={m.athlete2.image} alt={m.athlete2.name} fill className="object-cover" />
                        ) : (
                          <User className="w-4 h-4 text-blue-300" />
                        )}
                      </div>
                      <div>
                        <p className="font-display text-lg text-white uppercase tracking-wider leading-none">
                          {m.athlete2?.name || "Sudut Biru (TBD)"}
                        </p>
                        <p className="font-technical text-[9px] text-white/40 uppercase mt-0.5">
                          {m.athlete2?.club || "Kualifikasi Resmi"}
                        </p>
                      </div>
                    </div>
                    <span className="font-technical text-[9px] text-blue-400 font-bold uppercase tracking-wider px-1.5 py-0.5 bg-blue-900/30 rounded">
                      BIRU
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

    </div>
  );
}
