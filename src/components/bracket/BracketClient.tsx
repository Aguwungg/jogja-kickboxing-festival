"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Trophy, ArrowUpRight } from "lucide-react";

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
      : availableRounds[0] || ""
  );

  if (!activeTournament) {
    return (
      <div className="bg-[#141416] border border-white/10 p-16 text-center space-y-3">
        <Trophy className="w-8 h-8 text-[#8F8E8B] mx-auto" />
        <h3
          className="v9-display-title text-2xl text-[#F4F0E8]"
          style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
        >
          BAGAN TURNAMEN BELUM TERSEDIA
        </h3>
        <p className="text-xs text-[#8F8E8B]">
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

  const mobileFilteredMatches = activeTournament.matches.filter(
    (m) => m.round === selectedRoundMobile
  );

  return (
    <div className="w-full space-y-8 font-sans">
      
      {/* Division Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-white/10">
        {tournaments.map((t) => {
          const isActive = t.id === activeTournament.id;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => {
                setSelectedTournamentId(t.id);
                setSelectedRoundMobile("SEMIFINAL");
              }}
              className={`px-4 py-2 text-xs font-display font-extrabold uppercase tracking-wider transition-colors whitespace-nowrap ${
                isActive
                  ? "bg-[#D91F2C] text-white"
                  : "bg-[#141416] text-[#8F8E8B] hover:text-[#F4F0E8] border border-white/5"
              }`}
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              {t.name}
            </button>
          );
        })}
      </div>

      {/* Mobile Round Filter */}
      <div className="flex md:hidden items-center gap-2">
        {availableRounds.map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => setSelectedRoundMobile(r)}
            className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider ${
              selectedRoundMobile === r
                ? "bg-white text-black font-bold"
                : "bg-[#141416] text-[#8F8E8B] border border-white/10"
            }`}
          >
            {r}
          </button>
        ))}
      </div>

      {/* Mobile Bracket View */}
      <div className="md:hidden space-y-4">
        {mobileFilteredMatches.map((m) => (
          <div key={m.id} className="p-4 bg-[#141416] border border-white/10 space-y-3">
            <div className="flex justify-between text-[10px] font-mono text-[#8F8E8B] border-b border-white/5 pb-2">
              <span>PARTAI #{m.matchNumber}</span>
              <span className="text-[#D91F2C]">{m.round}</span>
            </div>

            {/* Athlete 1 */}
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#F4F0E8] font-bold">
                {m.athlete1?.name || "TBD (Pemenang Babak)"}
              </span>
              <span className="text-[#8F8E8B] text-[10px]">
                {m.athlete1?.club || "-"}
              </span>
            </div>

            <div className="text-center text-[10px] text-[#5A5957] font-mono">VS</div>

            {/* Athlete 2 */}
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#F4F0E8] font-bold">
                {m.athlete2?.name || "TBD (Pemenang Babak)"}
              </span>
              <span className="text-[#8F8E8B] text-[10px]">
                {m.athlete2?.club || "-"}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Visual Bracket Tree */}
      <div className="hidden md:grid grid-cols-12 gap-8 items-center bg-[#141416] border border-white/10 p-8">
        
        {/* Semifinals Column (4 Cols) */}
        <div className="col-span-5 space-y-6">
          <div className="border-b border-white/10 pb-2">
            <span className="text-[10px] text-[#D91F2C] font-mono tracking-widest uppercase block">BABAK 1</span>
            <h4 className="v9-display-title text-xl text-[#F4F0E8]" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
              SEMIFINAL
            </h4>
          </div>

          {semifinalMatches.map((m) => (
            <div key={m.id} className="p-4 bg-[#0B0B0B] border border-white/10 space-y-2">
              <div className="flex justify-between text-[10px] font-mono text-[#8F8E8B]">
                <span>PARTAI #{m.matchNumber}</span>
                <span className="text-[#D91F2C]">{m.category}</span>
              </div>
              
              <div className="p-2 bg-[#141416] border border-white/5 flex justify-between items-center text-xs font-mono">
                <span className="text-[#F4F0E8] font-bold">{m.athlete1?.name || "TBD"}</span>
                <span className="text-[10px] text-[#8F8E8B]">{m.athlete1?.club || "-"}</span>
              </div>

              <div className="p-2 bg-[#141416] border border-white/5 flex justify-between items-center text-xs font-mono">
                <span className="text-[#F4F0E8] font-bold">{m.athlete2?.name || "TBD"}</span>
                <span className="text-[10px] text-[#8F8E8B]">{m.athlete2?.club || "-"}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Finals Column (4 Cols) */}
        <div className="col-span-4 space-y-6">
          <div className="border-b border-white/10 pb-2">
            <span className="text-[10px] text-[#D91F2C] font-mono tracking-widest uppercase block">BABAK PUNCAK</span>
            <h4 className="v9-display-title text-xl text-[#F4F0E8]" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
              FINAL PEREBUTAN SABUK
            </h4>
          </div>

          {finalMatch ? (
            <div className="p-5 bg-[#0B0B0B] border-2 border-[#D91F2C] space-y-3">
              <div className="flex justify-between text-[10px] font-mono text-[#D91F2C] font-bold">
                <span>CHAMPIONSHIP BOUT</span>
                <span>3 RND x 3 MIN</span>
              </div>

              <div className="p-3 bg-[#141416] border border-white/5 flex justify-between items-center text-xs font-mono">
                <span className="text-[#F4F0E8] font-bold">{finalMatch.athlete1?.name || "PEMENANG SEMIFINAL 1"}</span>
                <span className="text-[10px] text-[#8F8E8B]">{finalMatch.athlete1?.club || "-"}</span>
              </div>

              <div className="text-center text-[10px] font-mono text-[#5A5957]">VS</div>

              <div className="p-3 bg-[#141416] border border-white/5 flex justify-between items-center text-xs font-mono">
                <span className="text-[#F4F0E8] font-bold">{finalMatch.athlete2?.name || "PEMENANG SEMIFINAL 2"}</span>
                <span className="text-[10px] text-[#8F8E8B]">{finalMatch.athlete2?.club || "-"}</span>
              </div>
            </div>
          ) : (
            <div className="p-6 bg-[#0B0B0B] border border-white/10 text-center text-xs font-mono text-[#8F8E8B]">
              MENUNGGU HASIL SEMIFINAL
            </div>
          )}
        </div>

        {/* Champion Trophy Column (3 Cols) */}
        <div className="col-span-3 p-6 bg-[#0B0B0B] border border-white/10 text-center space-y-3">
          <Trophy className="w-10 h-10 text-[#D91F2C] mx-auto" />
          <span className="text-[10px] text-[#8F8E8B] font-mono uppercase tracking-widest block">
            JUARA REDY CHAMPIONSHIP 2
          </span>
          <h5 className="v9-display-title text-xl text-[#F4F0E8]" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
            {finalWinner?.name || "MENUNGGU HASIL RESMI"}
          </h5>
          <p className="text-[10px] text-[#5A5957] font-mono">
            SABUK EMAS DIVISI {activeTournament.name.toUpperCase()}
          </p>
        </div>

      </div>

    </div>
  );
}
