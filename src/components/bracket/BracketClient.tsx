"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Trophy, Award, Crown, CheckCircle2, Clock, Swords } from "lucide-react";

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

  if (!activeTournament) {
    return (
      <div className="bg-[#171719] border border-white/10 p-12 text-center rounded-sm">
        <Trophy className="w-10 h-10 text-white/30 mx-auto mb-3" />
        <h3 className="text-xl font-bold uppercase text-white mb-2">Pohon Turnamen Belum Tersedia</h3>
        <p className="text-xs text-[#99999F]">Bagan kejuaraan sedang disusun oleh operator pertandingan.</p>
      </div>
    );
  }

  const semifinalMatches = activeTournament.matches.filter(
    (m) => m.round === "SEMIFINAL"
  ).sort((a, b) => a.matchNumber - b.matchNumber);

  const finalMatch = activeTournament.matches.find(
    (m) => m.round === "FINAL"
  );

  const finalWinner = finalMatch?.winner;

  return (
    <div className="w-full font-sans">
      {/* Division Selector Tabs */}
      <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-8 no-scrollbar">
        {tournaments.map((t) => {
          const isActive = t.id === activeTournament.id;
          return (
            <button
              key={t.id}
              onClick={() => setSelectedTournamentId(t.id)}
              className={`px-5 py-3 rounded-sm text-xs font-bold uppercase tracking-wider shrink-0 transition-all border ${
                isActive
                  ? "bg-[#D91F2C] border-[#D91F2C] text-white shadow-lg shadow-[#D91F2C]/20"
                  : "bg-[#171719] border-white/10 text-white/70 hover:border-white/20 hover:text-white"
              }`}
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              <span>{t.name}</span>
            </button>
          );
        })}
      </div>

      {/* Bracket Tree Container (Horizontal Scrollable on Mobile) */}
      <div className="overflow-x-auto pb-8 pt-2 no-scrollbar">
        <div className="min-w-[850px] grid grid-cols-3 gap-8 items-center relative">
          {/* Column 1: Semifinals */}
          <div className="space-y-8">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-xs font-black uppercase tracking-widest text-[#EF3340]">
                BABAK SEMIFINAL
              </span>
              <span className="text-[10px] text-[#99999F] uppercase font-mono">2 Partai Laga</span>
            </div>

            <div className="space-y-6">
              {semifinalMatches.map((match, idx) => (
                <div
                  key={match.id}
                  className="bg-[#171719] border border-white/10 rounded-sm p-4 relative group hover:border-[#D91F2C]/40 transition-all shadow-md"
                >
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#99999F] mb-3 pb-2 border-b border-white/5">
                    <span>PARTAI #{match.matchNumber}</span>
                    {match.status === "COMPLETED" ? (
                      <span className="text-emerald-400 font-bold uppercase">
                        SELESAI • {match.resultType} ({match.roundResult})
                      </span>
                    ) : (
                      <span className="text-amber-400 font-bold uppercase">JADWAL PERTANDINGAN</span>
                    )}
                  </div>

                  {/* Fighter 1 (Red Corner) */}
                  <div
                    className={`flex items-center justify-between p-2 rounded-sm mb-2 transition-colors ${
                      match.winner?.id === match.athlete1?.id
                        ? "bg-emerald-500/10 border border-emerald-500/30"
                        : "bg-black/30"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="relative w-8 h-8 rounded-sm bg-black overflow-hidden shrink-0 border border-white/10">
                        <Image
                          src={match.athlete1?.image || "/images/jkb/fighter-1.jpg"}
                          alt={match.athlete1?.name || "Fighter"}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-white block">
                          {match.athlete1?.name || "TBD"}
                        </span>
                        <span className="text-[10px] text-[#99999F] block">
                          {match.athlete1?.club || "Independent"}
                        </span>
                      </div>
                    </div>
                    {match.winner?.id === match.athlete1?.id && (
                      <span className="text-[10px] font-bold text-emerald-400 uppercase">MENANG</span>
                    )}
                  </div>

                  {/* Fighter 2 (Blue Corner) */}
                  <div
                    className={`flex items-center justify-between p-2 rounded-sm transition-colors ${
                      match.winner?.id === match.athlete2?.id
                        ? "bg-emerald-500/10 border border-emerald-500/30"
                        : "bg-black/30"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="relative w-8 h-8 rounded-sm bg-black overflow-hidden shrink-0 border border-white/10">
                        <Image
                          src={match.athlete2?.image || "/images/jkb/fighter-2.jpg"}
                          alt={match.athlete2?.name || "Fighter"}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-white block">
                          {match.athlete2?.name || "TBD"}
                        </span>
                        <span className="text-[10px] text-[#99999F] block">
                          {match.athlete2?.club || "Independent"}
                        </span>
                      </div>
                    </div>
                    {match.winner?.id === match.athlete2?.id && (
                      <span className="text-[10px] font-bold text-emerald-400 uppercase">MENANG</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Grand Final */}
          <div className="space-y-8">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-xs font-black uppercase tracking-widest text-[#E2BA75]">
                GRAND FINAL PEREBUTAN SABUK
              </span>
              <span className="text-[10px] text-[#E2BA75] uppercase font-mono font-bold">1 Partai Puncak</span>
            </div>

            {finalMatch ? (
              <div className="bg-[#171719] border-2 border-[#E2BA75]/50 rounded-sm p-5 relative shadow-xl shadow-[#E2BA75]/5">
                <div className="flex items-center justify-between text-[10px] font-mono text-[#E2BA75] mb-4 pb-2 border-b border-white/10">
                  <span className="font-bold uppercase flex items-center gap-1.5">
                    <Crown className="w-3.5 h-3.5" />
                    PARTAI TITEL JUARA RESMI
                  </span>
                  <span>HARI 3 • 20:00 WIB</span>
                </div>

                {/* Finalist 1 */}
                <div
                  className={`flex items-center justify-between p-3 rounded-sm mb-3 transition-colors ${
                    finalWinner?.id === finalMatch.athlete1?.id
                      ? "bg-gradient-to-r from-amber-500/20 to-transparent border border-[#E2BA75]"
                      : "bg-black/40 border border-white/5"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-sm bg-black overflow-hidden shrink-0 border border-white/20">
                      <Image
                        src={finalMatch.athlete1?.image || "/images/jkb/fighter-1.jpg"}
                        alt={finalMatch.athlete1?.name || "Finalist"}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-sm font-black text-white block uppercase">
                        {finalMatch.athlete1?.name || "Pemenang SF 1"}
                      </span>
                      <span className="text-[10px] text-[#99999F]">
                        {finalMatch.athlete1?.club || "Klub Pemenang"}
                      </span>
                    </div>
                  </div>
                  {finalWinner?.id === finalMatch.athlete1?.id && (
                    <Trophy className="w-4 h-4 text-[#E2BA75]" />
                  )}
                </div>

                {/* Finalist 2 */}
                <div
                  className={`flex items-center justify-between p-3 rounded-sm transition-colors ${
                    finalWinner?.id === finalMatch.athlete2?.id
                      ? "bg-gradient-to-r from-amber-500/20 to-transparent border border-[#E2BA75]"
                      : "bg-black/40 border border-white/5"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-sm bg-black overflow-hidden shrink-0 border border-white/20">
                      <Image
                        src={finalMatch.athlete2?.image || "/images/jkb/fighter-3.jpg"}
                        alt={finalMatch.athlete2?.name || "Finalist"}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-sm font-black text-white block uppercase">
                        {finalMatch.athlete2?.name || "Pemenang SF 2"}
                      </span>
                      <span className="text-[10px] text-[#99999F]">
                        {finalMatch.athlete2?.club || "Klub Pemenang"}
                      </span>
                    </div>
                  </div>
                  {finalWinner?.id === finalMatch.athlete2?.id && (
                    <Trophy className="w-4 h-4 text-[#E2BA75]" />
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-[#171719] border border-white/10 p-8 text-center text-xs text-[#99999F]">
                Partai final belum dijadwalkan.
              </div>
            )}
          </div>

          {/* Column 3: Champion / Belt */}
          <div className="space-y-8 flex flex-col justify-center">
            <div className="pb-2 border-b border-white/10">
              <span className="text-xs font-black uppercase tracking-widest text-[#E2BA75]">
                JUARA SABUK EMAS
              </span>
            </div>

            <div className="bg-gradient-to-b from-[#171719] to-[#09090b] border border-[#E2BA75]/30 p-8 rounded-sm text-center relative overflow-hidden shadow-2xl">
              <div className="w-16 h-16 rounded-full bg-[#E2BA75]/10 border border-[#E2BA75]/40 flex items-center justify-center text-[#E2BA75] mx-auto mb-4">
                <Trophy className="w-8 h-8" />
              </div>

              <span className="text-[10px] font-bold uppercase tracking-widest text-[#E2BA75] block mb-1">
                REDY CHAMPIONSHIP 2 BELT
              </span>

              <h4
                className="text-2xl font-black uppercase text-white mb-3"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                {finalWinner ? finalWinner.name : "MENUNGGU HASIL FINAL"}
              </h4>

              <p className="text-xs text-[#99999F] leading-relaxed">
                {finalWinner
                  ? `Juara resmi divisi ${activeTournament.category} JKB 2026 mewakili sasana ${finalWinner.club || ""}.`
                  : `Perebutan sabuk emas divisi ${activeTournament.category} di hadapan 5.000 penonton GOR UNY.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
