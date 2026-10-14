"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Trophy } from "lucide-react";

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
      <div className="py-24 text-center border-t border-b border-black/15 space-y-4">
        <Trophy className="w-8 h-8 text-[#8F8E8B] mx-auto opacity-60" />
        <h3 className="font-display text-4xl sm:text-5xl uppercase tracking-wider text-[#0B0B0B]">
          MENUNGGU DRAWING RESMI
        </h3>
        <p className="text-sm text-[#5A5957] max-w-md mx-auto font-sans leading-relaxed">
          Tidak menampilkan kemenangan maupun hasil laga simulasi. Drawing atlet disahkan saat Technical Meeting resmi pra-acara.
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
    <div className="w-full space-y-10 font-sans">
      
      {/* Division Selector Buttons */}
      <div className="flex flex-wrap items-center gap-3 border-b border-black/15 pb-8">
        {tournaments.map((t) => {
          const isActive = t.id === activeTournament.id;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setSelectedTournamentId(t.id)}
              className={`px-6 sm:px-8 py-3 text-sm sm:text-base font-display tracking-wider uppercase transition-all ${
                isActive
                  ? "bg-[#0B0B0B] text-white shadow-md ring-1 ring-black"
                  : "bg-transparent text-[#0B0B0B] hover:bg-black/5 border border-black/25"
              }`}
            >
              {t.name}
            </button>
          );
        })}
      </div>

      {/* Notice Banner */}
      <div className="py-4 px-6 bg-white border border-black/15 ring-corner-frame flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
        <div>
          <span className="font-bold text-[#D91F2C] uppercase tracking-wider font-technical mr-2">
            STATUS DRAWING:
          </span>
          <span className="text-[#0B0B0B] font-semibold">
            Bagan Menunggu Drawing Resmi (Pasca Weigh-in 12 Desember 2026).
          </span>
        </div>
        <span className="font-technical text-[11px] text-[#77716D] uppercase">
          K-1 RULES • 8-MAN ELIMINATION
        </span>
      </div>

      {/* Desktop Bracket Tree */}
      <div className="hidden lg:grid grid-cols-12 gap-8 items-center pt-8">
        
        {/* Column 1: Semifinals */}
        <div className="col-span-6 space-y-8">
          <div className="border-b border-black/15 pb-3">
            <span className="font-technical text-xs uppercase font-bold tracking-widest text-[#D91F2C]">
              BABAK 01
            </span>
            <h4 className="font-display text-3xl uppercase tracking-wider text-[#0B0B0B]">
              SEMIFINAL
            </h4>
          </div>

          <div className="space-y-6">
            {semifinalMatches.length === 0 ? (
              <p className="text-xs text-[#5A5957] font-technical">Bagan semifinal belum diumumkan.</p>
            ) : (
              semifinalMatches.map((m, idx) => (
                <div
                  key={m.id}
                  className="border border-black/15 bg-white p-5 space-y-3 ring-corner-frame transition-colors hover:border-black"
                >
                  <div className="flex items-center justify-between text-[10px] font-technical uppercase text-[#77716D] border-b border-black/10 pb-2">
                    <span>PARTAI {idx + 1}</span>
                    <span className="text-[#D91F2C] font-bold">{m.status}</span>
                  </div>

                  {/* Corner Red */}
                  <div className="flex items-center justify-between py-1">
                    <div>
                      <p className="font-display text-xl text-[#0B0B0B] uppercase tracking-wider">
                        {m.athlete1?.name || "Petarung Sudut Merah"}
                      </p>
                      <p className="font-technical text-[10px] text-[#77716D]">{m.athlete1?.club || "Kualifikasi Resmi"}</p>
                    </div>
                  </div>

                  <div className="border-t border-black/5" />

                  {/* Corner Blue */}
                  <div className="flex items-center justify-between py-1">
                    <div>
                      <p className="font-display text-xl text-[#0B0B0B] uppercase tracking-wider">
                        {m.athlete2?.name || "Petarung Sudut Biru"}
                      </p>
                      <p className="font-technical text-[10px] text-[#77716D]">{m.athlete2?.club || "Kualifikasi Resmi"}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Column 2: Final Match */}
        <div className="col-span-6 space-y-8">
          <div className="border-b border-black/15 pb-3">
            <span className="font-technical text-xs uppercase font-bold tracking-widest text-[#D91F2C]">
              BABAK PUNCAK
            </span>
            <h4 className="font-display text-3xl uppercase tracking-wider text-[#0B0B0B]">
              GRAND FINAL
            </h4>
          </div>

          <div className="border-2 border-black bg-white p-6 space-y-4 shadow-md ring-corner-frame">
            <div className="flex items-center justify-between text-[11px] font-technical uppercase text-[#0B0B0B] border-b border-black/10 pb-3">
              <span className="font-bold text-[#D91F2C]">★ PEREBUTAN SABUK EMAS</span>
              <span>SENIN, 14 DESEMBER 2026</span>
            </div>

            <div className="space-y-4 py-2">
              <div className="py-2 border-b border-black/5">
                <span className="font-technical text-[10px] text-[#77716D] uppercase block">Pemenang Semifinal 1</span>
                <p className="font-display text-2xl text-[#0B0B0B] uppercase tracking-wider">
                  {finalMatch?.athlete1?.name || "Pemenang Partai Semifinal 1"}
                </p>
              </div>

              <div className="text-center font-technical text-xs font-bold text-[#D91F2C]">
                VS
              </div>

              <div className="py-2">
                <span className="font-technical text-[10px] text-[#77716D] uppercase block">Pemenang Semifinal 2</span>
                <p className="font-display text-2xl text-[#0B0B0B] uppercase tracking-wider">
                  {finalMatch?.athlete2?.name || "Pemenang Partai Semifinal 2"}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-black/10 text-center">
              <span className="font-technical text-xs font-bold uppercase tracking-wider text-[#0B0B0B]">
                STATUS: {finalMatch?.status || "MENUNGGU HASIL SEMIFINAL"}
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Mobile Bracket View with Round Switcher */}
      <div className="lg:hidden space-y-6 pt-4">
        {/* Round Switcher */}
        <div className="flex items-center gap-2 border-b border-black/15 pb-4">
          {["SEMIFINAL", "FINAL"].map((round) => (
            <button
              key={round}
              type="button"
              onClick={() => setSelectedRoundMobile(round)}
              className={`px-5 py-2 text-xs font-display tracking-wider uppercase ${
                selectedRoundMobile === round
                  ? "bg-[#0B0B0B] text-white"
                  : "bg-transparent text-[#0B0B0B] border border-black/20"
              }`}
            >
              {round}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {mobileFilteredMatches.length === 0 ? (
            <p className="text-xs text-[#5A5957] font-technical py-8 text-center">
              Partai {selectedRoundMobile} menunggu drawing resmi.
            </p>
          ) : (
            mobileFilteredMatches.map((m, idx) => (
              <div key={m.id} className="border border-black/15 bg-white p-5 space-y-3 ring-corner-frame">
                <div className="flex items-center justify-between text-[10px] font-technical uppercase text-[#77716D] border-b border-black/10 pb-2">
                  <span>PARTAI {idx + 1}</span>
                  <span className="text-[#D91F2C] font-bold">{m.status}</span>
                </div>
                <p className="font-display text-xl text-[#0B0B0B] uppercase tracking-wider">
                  {m.athlete1?.name || "Sudut Merah (TBD)"}
                </p>
                <div className="text-center font-technical text-[10px] text-[#8F8E8B]">VS</div>
                <p className="font-display text-xl text-[#0B0B0B] uppercase tracking-wider">
                  {m.athlete2?.name || "Sudut Biru (TBD)"}
                </p>
              </div>
            ))
          )}
        </div>
      </div>

    </div>
  );
}
