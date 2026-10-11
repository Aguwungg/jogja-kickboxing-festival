"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Trophy, Swords, Crown, CheckCircle2, Clock } from "lucide-react";

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

  // Distinct rounds available in the active tournament
  const availableRounds = activeTournament
    ? Array.from(new Set(activeTournament.matches.map((m) => m.round)))
    : [];

  const [selectedRoundMobile, setSelectedRoundMobile] = useState<string>(
    availableRounds.includes("SEMIFINAL")
      ? "SEMIFINAL"
      : availableRounds[0] || ""
  );

  if (!activeTournament) {
    return (
      <div className="bg-[#171719] border border-white/10 p-12 text-center rounded-sm space-y-2">
        <Trophy className="w-10 h-10 text-[#9A9AA2]/40 mx-auto mb-2" />
        <h3
          className="text-xl font-bold uppercase text-white"
          style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
        >
          BAGAN TURNAMEN BELUM TERSEDIA
        </h3>
        <p className="text-xs text-[#9A9AA2]">
          Bagan pertandingan resmi sedang disusun oleh komite kejuaraan.
        </p>
      </div>
    );
  }

  const semifinalMatches = activeTournament.matches
    .filter((m) => m.round === "SEMIFINAL")
    .sort((a, b) => a.matchNumber - b.matchNumber);

  const finalMatch = activeTournament.matches.find((m) => m.round === "FINAL");
  const finalWinner = finalMatch?.winner;

  // Filtered matches for mobile round selector
  const mobileFilteredMatches = activeTournament.matches.filter(
    (m) => m.round === selectedRoundMobile
  );

  return (
    <div className="w-full space-y-8 font-sans">
      
      {/* ═════════════════════════════════════════════════════════════════════
          DIVISION SELECTOR
      ═════════════════════════════════════════════════════════════════════ */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        {tournaments.map((t) => {
          const isActive = t.id === activeTournament.id;
          return (
            <button
              key={t.id}
              onClick={() => {
                setSelectedTournamentId(t.id);
                const rounds = Array.from(new Set(t.matches.map((m) => m.round)));
                setSelectedRoundMobile(rounds.includes("SEMIFINAL") ? "SEMIFINAL" : rounds[0] || "");
              }}
              className={`px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider shrink-0 transition-all border ${
                isActive
                  ? "bg-[#D91F2C] border-[#D91F2C] text-white shadow-md shadow-[#D91F2C]/20"
                  : "bg-[#171719] border-white/10 text-[#9A9AA2] hover:border-white/20 hover:text-white"
              }`}
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              <span>{t.name}</span>
            </button>
          );
        })}
      </div>

      {/* ═════════════════════════════════════════════════════════════════════
          MOBILE EXPERIENCE: Round Selector → Match List (NCAA / Toornament)
      ═════════════════════════════════════════════════════════════════════ */}
      <div className="block md:hidden space-y-5">
        
        {/* Step 2: Round Selector */}
        <div className="flex items-center gap-2 border-b border-white/10 pb-3">
          <span className="text-[11px] uppercase font-bold text-[#9A9AA2] mr-1">Ronde:</span>
          {availableRounds.map((round) => {
            const isRoundActive = selectedRoundMobile === round;
            return (
              <button
                key={round}
                onClick={() => setSelectedRoundMobile(round)}
                className={`px-3 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all ${
                  isRoundActive
                    ? "bg-white text-[#09090B]"
                    : "bg-[#171719] border border-white/10 text-[#C4C4CC] hover:text-white"
                }`}
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                {round}
              </button>
            );
          })}
        </div>

        {/* Step 3: Match List for Selected Round */}
        <div className="space-y-4">
          {mobileFilteredMatches.map((match) => (
            <div
              key={match.id}
              className="bg-[#171719] border border-white/10 rounded-sm p-4 space-y-3"
            >
              <div className="flex items-center justify-between text-[11px] font-mono text-[#9A9AA2] pb-2 border-b border-white/5">
                <span>PARTAI #{match.matchNumber}</span>
                {match.status === "COMPLETED" ? (
                  <span className="text-emerald-400 font-bold uppercase text-[10px]">
                    SELESAI • {match.resultType || "DEC"} ({match.roundResult || "R3"})
                  </span>
                ) : (
                  <span className="text-amber-400 font-bold uppercase text-[10px]">
                    JADWAL LAGA
                  </span>
                )}
              </div>

              {/* Red Corner / Athlete 1 */}
              <div
                className={`p-2.5 rounded-sm flex items-center justify-between transition-colors ${
                  match.winner?.id === match.athlete1?.id
                    ? "bg-emerald-500/10 border border-emerald-500/30"
                    : "bg-black/30 border border-transparent"
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-sm bg-[#252529] relative overflow-hidden shrink-0">
                    {match.athlete1?.image ? (
                      <Image
                        src={match.athlete1.image}
                        alt={match.athlete1.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center font-bold text-xs text-white/20">
                        {match.athlete1?.name?.charAt(0) || "T"}
                      </div>
                    )}
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-white block truncate">
                      {match.athlete1?.name || "TBD"}
                    </span>
                    <span className="text-[10px] text-[#9A9AA2] block truncate">
                      {match.athlete1?.club || "Mandiri"}
                    </span>
                  </div>
                </div>
                {match.winner?.id === match.athlete1?.id && (
                  <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded shrink-0">
                    MENANG
                  </span>
                )}
              </div>

              {/* Blue Corner / Athlete 2 */}
              <div
                className={`p-2.5 rounded-sm flex items-center justify-between transition-colors ${
                  match.winner?.id === match.athlete2?.id
                    ? "bg-emerald-500/10 border border-emerald-500/30"
                    : "bg-black/30 border border-transparent"
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-sm bg-[#252529] relative overflow-hidden shrink-0">
                    {match.athlete2?.image ? (
                      <Image
                        src={match.athlete2.image}
                        alt={match.athlete2.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center font-bold text-xs text-white/20">
                        {match.athlete2?.name?.charAt(0) || "T"}
                      </div>
                    )}
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-white block truncate">
                      {match.athlete2?.name || "TBD"}
                    </span>
                    <span className="text-[10px] text-[#9A9AA2] block truncate">
                      {match.athlete2?.club || "Mandiri"}
                    </span>
                  </div>
                </div>
                {match.winner?.id === match.athlete2?.id && (
                  <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded shrink-0">
                    MENANG
                  </span>
                )}
              </div>
            </div>
          ))}

          {/* Champion Display on Mobile */}
          {finalWinner && (
            <div className="p-4 bg-gradient-to-r from-amber-500/15 to-transparent border border-amber-500/30 rounded-sm flex items-center gap-3">
              <Crown className="w-6 h-6 text-amber-400 shrink-0" />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 block">
                  JUARA SABUK EMAS
                </span>
                <span className="text-sm font-bold text-white block">
                  {finalWinner.name} ({finalWinner.club || "Mandiri"})
                </span>
              </div>
            </div>
          )}
        </div>

      </div>

      {/* ═════════════════════════════════════════════════════════════════════
          DESKTOP EXPERIENCE: Full Tournament Tree
      ═════════════════════════════════════════════════════════════════════ */}
      <div className="hidden md:block">
        <div className="grid grid-cols-3 gap-8 items-center relative">
          
          {/* Column 1: Semifinals */}
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-xs font-black uppercase tracking-widest text-[#D91F2C]">
                BABAK SEMIFINAL
              </span>
              <span className="text-[10px] text-[#9A9AA2] uppercase font-mono">2 Partai Laga</span>
            </div>

            <div className="space-y-5">
              {semifinalMatches.map((match) => (
                <div
                  key={match.id}
                  className="bg-[#171719] border border-white/10 rounded-sm p-4 hover:border-[#D91F2C]/40 transition-all shadow-md space-y-2.5"
                >
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#9A9AA2] pb-1.5 border-b border-white/5">
                    <span>PARTAI #{match.matchNumber}</span>
                    {match.status === "COMPLETED" ? (
                      <span className="text-emerald-400 font-bold uppercase">
                        SELESAI • {match.resultType} ({match.roundResult})
                      </span>
                    ) : (
                      <span className="text-amber-400 font-bold uppercase">JADWAL LAGA</span>
                    )}
                  </div>

                  {/* Corner 1 */}
                  <div
                    className={`flex items-center justify-between p-2 rounded-sm transition-colors ${
                      match.winner?.id === match.athlete1?.id
                        ? "bg-emerald-500/10 border border-emerald-500/30"
                        : "bg-black/30"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="relative w-7 h-7 rounded-sm bg-black overflow-hidden shrink-0 border border-white/10">
                        {match.athlete1?.image ? (
                          <Image
                            src={match.athlete1.image}
                            alt={match.athlete1.name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center font-bold text-xs text-white/20">
                            {match.athlete1?.name?.charAt(0) || "T"}
                          </div>
                        )}
                      </div>
                      <div>
                        <span className="text-xs font-bold text-white block">
                          {match.athlete1?.name || "TBD"}
                        </span>
                        <span className="text-[9px] text-[#9A9AA2] block">
                          {match.athlete1?.club || "Mandiri"}
                        </span>
                      </div>
                    </div>
                    {match.winner?.id === match.athlete1?.id && (
                      <span className="text-[9px] font-bold uppercase text-emerald-400">WIN</span>
                    )}
                  </div>

                  {/* Corner 2 */}
                  <div
                    className={`flex items-center justify-between p-2 rounded-sm transition-colors ${
                      match.winner?.id === match.athlete2?.id
                        ? "bg-emerald-500/10 border border-emerald-500/30"
                        : "bg-black/30"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="relative w-7 h-7 rounded-sm bg-black overflow-hidden shrink-0 border border-white/10">
                        {match.athlete2?.image ? (
                          <Image
                            src={match.athlete2.image}
                            alt={match.athlete2.name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center font-bold text-xs text-white/20">
                            {match.athlete2?.name?.charAt(0) || "T"}
                          </div>
                        )}
                      </div>
                      <div>
                        <span className="text-xs font-bold text-white block">
                          {match.athlete2?.name || "TBD"}
                        </span>
                        <span className="text-[9px] text-[#9A9AA2] block">
                          {match.athlete2?.club || "Mandiri"}
                        </span>
                      </div>
                    </div>
                    {match.winner?.id === match.athlete2?.id && (
                      <span className="text-[9px] font-bold uppercase text-emerald-400">WIN</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Grand Final */}
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-xs font-black uppercase tracking-widest text-[#E2BA75] flex items-center gap-1.5">
                <Crown className="w-3.5 h-3.5" />
                GRAND FINAL
              </span>
              <span className="text-[10px] text-[#9A9AA2] uppercase font-mono">Perebutan Sabuk</span>
            </div>

            {finalMatch ? (
              <div className="bg-[#171719] border-2 border-[#E2BA75]/40 rounded-sm p-5 space-y-3 shadow-xl">
                <div className="flex items-center justify-between text-[10px] font-mono text-[#9A9AA2] pb-2 border-b border-white/5">
                  <span className="text-[#E2BA75] font-bold">PARTAI PUNCAK #{finalMatch.matchNumber}</span>
                  {finalMatch.status === "COMPLETED" ? (
                    <span className="text-emerald-400 font-bold uppercase">
                      SELESAI • {finalMatch.resultType} ({finalMatch.roundResult})
                    </span>
                  ) : (
                    <span className="text-amber-400 font-bold uppercase">LIVE FINAL</span>
                  )}
                </div>

                {/* Final Corner 1 */}
                <div
                  className={`flex items-center justify-between p-2.5 rounded-sm transition-colors ${
                    finalWinner?.id === finalMatch.athlete1?.id
                      ? "bg-amber-500/15 border border-amber-500/40"
                      : "bg-black/30"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-8 h-8 rounded-sm bg-black overflow-hidden shrink-0 border border-white/10">
                      {finalMatch.athlete1?.image ? (
                        <Image
                          src={finalMatch.athlete1.image}
                          alt={finalMatch.athlete1.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center font-bold text-xs text-white/20">
                          {finalMatch.athlete1?.name?.charAt(0) || "T"}
                        </div>
                      )}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">
                        {finalMatch.athlete1?.name || "TBD (Pemenang SF 1)"}
                      </span>
                      <span className="text-[9px] text-[#9A9AA2] block">
                        {finalMatch.athlete1?.club || "Mandiri"}
                      </span>
                    </div>
                  </div>
                  {finalWinner?.id === finalMatch.athlete1?.id && (
                    <Crown className="w-4 h-4 text-amber-400 shrink-0" />
                  )}
                </div>

                {/* Final Corner 2 */}
                <div
                  className={`flex items-center justify-between p-2.5 rounded-sm transition-colors ${
                    finalWinner?.id === finalMatch.athlete2?.id
                      ? "bg-amber-500/15 border border-amber-500/40"
                      : "bg-black/30"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-8 h-8 rounded-sm bg-black overflow-hidden shrink-0 border border-white/10">
                      {finalMatch.athlete2?.image ? (
                        <Image
                          src={finalMatch.athlete2.image}
                          alt={finalMatch.athlete2.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center font-bold text-xs text-white/20">
                          {finalMatch.athlete2?.name?.charAt(0) || "T"}
                        </div>
                      )}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">
                        {finalMatch.athlete2?.name || "TBD (Pemenang SF 2)"}
                      </span>
                      <span className="text-[9px] text-[#9A9AA2] block">
                        {finalMatch.athlete2?.club || "Mandiri"}
                      </span>
                    </div>
                  </div>
                  {finalWinner?.id === finalMatch.athlete2?.id && (
                    <Crown className="w-4 h-4 text-amber-400 shrink-0" />
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-[#171719] border border-white/10 p-6 text-center text-xs text-[#9A9AA2] rounded-sm">
                Partai final belum dijadwalkan.
              </div>
            )}
          </div>

          {/* Column 3: Champion Pedestal */}
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-xs font-black uppercase tracking-widest text-emerald-400">
                JUARA SABUK
              </span>
              <span className="text-[10px] text-[#9A9AA2] uppercase font-mono">Hasil Resmi</span>
            </div>

            <div className="bg-gradient-to-b from-amber-500/10 via-[#171719] to-[#171719] border border-amber-500/30 rounded-sm p-6 text-center space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                <Trophy className="w-7 h-7" />
              </div>

              {finalWinner ? (
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 block">
                    JUARA RESMI
                  </span>
                  <h3
                    className="font-display text-2xl font-black uppercase text-white"
                    style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                  >
                    {finalWinner.name}
                  </h3>
                  <p className="text-xs text-[#9A9AA2]">
                    {finalWinner.club || "Sasana Mandiri"}
                  </p>
                </div>
              ) : (
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase text-white block">
                    MENUNGGU HASIL FINAL
                  </span>
                  <p className="text-[11px] text-[#9A9AA2] leading-relaxed">
                    Sabuk emas kejuaraan divisi {activeTournament.name} akan diserahkan setelah partai final selesai.
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
