"use client";

import { useState } from "react";
import Link from "next/link";
import { Swords, Clock, MapPin, ShieldCheck, ChevronDown, ArrowUpRight, Award, Filter } from "lucide-react";

interface MatchItem {
  id: string;
  tournament: "KEJURDA" | "REDY_OPEN" | "PARTAI_BINTANG";
  tournamentLabel: string;
  discipline: string;
  weightClass: string;
  day: number;
  timeSlot: string;
  ring: string;
  fighterRed: {
    name: string;
    origin: string;
  };
  fighterBlue: {
    name: string;
    origin: string;
  };
  status: "UPCOMING" | "LIVE" | "COMPLETED";
  result?: {
    winnerName: string;
    winnerCorner: "RED" | "BLUE";
    method: string;
    round: string;
  };
}

// Authentic THB Championship Roster & Matchups Structure
const VERIFIED_MATCHES: MatchItem[] = [
  {
    id: "m-01",
    tournament: "PARTAI_BINTANG",
    tournamentLabel: "PARTAI MEGA BINTANG",
    discipline: "K-1 Style Ringsport",
    weightClass: "67.0 kg Senior",
    day: 2,
    timeSlot: "Minggu, 13 Des • 20:30 WIB",
    ring: "Ring Utama Kejuaraan",
    fighterRed: {
      name: "Atlet Nasional (Invited Red)",
      origin: "KBI DIY / Jogja Camp",
    },
    fighterBlue: {
      name: "Atlet Penantang (Invited Blue)",
      origin: "KBI Nasional / Jakarta",
    },
    status: "UPCOMING",
  },
  {
    id: "m-02",
    tournament: "PARTAI_BINTANG",
    tournamentLabel: "PARTAI BINTANG INVITATION",
    discipline: "Low Kick Ringsport",
    weightClass: "63.5 kg Senior",
    day: 2,
    timeSlot: "Minggu, 13 Des • 19:15 WIB",
    ring: "Ring Utama Kejuaraan",
    fighterRed: {
      name: "Fighter Seleksi KBI DIY",
      origin: "Pengkab Sleman",
    },
    fighterBlue: {
      name: "Fighter Invitasi Jawa Tengah",
      origin: "Camp Solo",
    },
    status: "UPCOMING",
  },
  {
    id: "m-03",
    tournament: "KEJURDA",
    tournamentLabel: "KEJURDA DIY 2026",
    discipline: "Low Kick Ringsport",
    weightClass: "60.0 kg Senior Putra",
    day: 3,
    timeSlot: "Senin, 14 Des • 15:30 WIB",
    ring: "Ring Kejuaraan 1",
    fighterRed: {
      name: "Pemenang Semifinal A",
      origin: "Pengkot Yogyakarta",
    },
    fighterBlue: {
      name: "Pemenang Semifinal B",
      origin: "Pengkab Bantul",
    },
    status: "UPCOMING",
  },
  {
    id: "m-04",
    tournament: "KEJURDA",
    tournamentLabel: "KEJURDA DIY 2026",
    discipline: "Point Fighting Tatami",
    weightClass: "57.0 kg Junior Putra",
    day: 1,
    timeSlot: "Sabtu, 12 Des • 10:15 WIB",
    ring: "Tatami Arena A",
    fighterRed: {
      name: "Kontingen Sleman",
      origin: "Pengkab Sleman",
    },
    fighterBlue: {
      name: "Kontingen Kulon Progo",
      origin: "Pengkab Kulon Progo",
    },
    status: "UPCOMING",
  },
  {
    id: "m-05",
    tournament: "REDY_OPEN",
    tournamentLabel: "REDY OPEN II (UNIVERSITY OPEN)",
    discipline: "K-1 Style Ringsport",
    weightClass: "63.5 kg Mahasiswa",
    day: 1,
    timeSlot: "Sabtu, 12 Des • 14:00 WIB",
    ring: "Ring Kejuaraan 2",
    fighterRed: {
      name: "Kontingen Universitas A",
      origin: "Kampus DIY",
    },
    fighterBlue: {
      name: "Kontingen Universitas B",
      origin: "Kampus Jateng",
    },
    status: "UPCOMING",
  },
  {
    id: "m-06",
    tournament: "REDY_OPEN",
    tournamentLabel: "REDY OPEN II (SMA OPEN)",
    discipline: "Kick Light Tatami",
    weightClass: "54.0 kg Pelajar",
    day: 1,
    timeSlot: "Sabtu, 12 Des • 11:30 WIB",
    ring: "Tatami Arena B",
    fighterRed: {
      name: "Pelajar Kontingen DIY",
      origin: "SMA DIY",
    },
    fighterBlue: {
      name: "Pelajar Kontingen Tamu",
      origin: "SMA Jateng",
    },
    status: "UPCOMING",
  },
  {
    id: "m-07",
    tournament: "REDY_OPEN",
    tournamentLabel: "REDY OPEN II (CAMP OPEN)",
    discipline: "Full Contact Ringsport",
    weightClass: "71.0 kg Senior",
    day: 2,
    timeSlot: "Minggu, 13 Des • 10:30 WIB",
    ring: "Ring Kejuaraan 1",
    fighterRed: {
      name: "Fighter Camp Terdaftar A",
      origin: "Sasana Yogyakarta",
    },
    fighterBlue: {
      name: "Fighter Camp Terdaftar B",
      origin: "Sasana Surabaya",
    },
    status: "UPCOMING",
  },
];

export default function ChampionshipClient() {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const [rulesOpen, setRulesOpen] = useState(false);

  const filteredMatches = VERIFIED_MATCHES.filter((m) => {
    if (activeFilter === "ALL") return true;
    return m.tournament === activeFilter;
  });

  return (
    <div className="w-full space-y-8 font-sans">
      
      {/* 3 Main Championship Pillars Information Strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 bg-[#141416] border border-white/10 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-technical text-[10px] uppercase tracking-[0.2em] text-[#D91F2C] font-bold">
              01 / PILAR DAERAH
            </span>
            <ShieldCheck className="w-4 h-4 text-[#D91F2C]" />
          </div>
          <h3 className="font-display text-2xl uppercase tracking-wider text-[#F4F0E8]">
            KEJURDA DIY 2026
          </h3>
          <p className="font-sans text-xs text-[#8F8E8B] leading-relaxed">
            Kejuaraan Daerah resmi Pengprov KBI DIY hasil seleksi atlet Kejurkab & Kejurkot se-Daerah Istimewa Yogyakarta.
          </p>
        </div>

        <div className="p-5 bg-[#141416] border border-white/10 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-technical text-[10px] uppercase tracking-[0.2em] text-[#D91F2C] font-bold">
              02 / PILAR NASIONAL
            </span>
            <Swords className="w-4 h-4 text-[#D91F2C]" />
          </div>
          <h3 className="font-display text-2xl uppercase tracking-wider text-[#F4F0E8]">
            REDY OPEN II
          </h3>
          <p className="font-sans text-xs text-[#8F8E8B] leading-relaxed">
            Turnamen terbuka antarcamp nasional, nomor khusus pelajar SMA Open, dan nomor mahasiswa University Open.
          </p>
        </div>

        <div className="p-5 bg-[#141416] border border-white/10 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-technical text-[10px] uppercase tracking-[0.2em] text-[#D91F2C] font-bold">
              03 / LAGA PUNCAK
            </span>
            <Award className="w-4 h-4 text-[#D91F2C]" />
          </div>
          <h3 className="font-display text-2xl uppercase tracking-wider text-[#F4F0E8]">
            PARTAI BINTANG
          </h3>
          <p className="font-sans text-xs text-[#8F8E8B] leading-relaxed">
            Laga eksibisi dan kejuaraan bergengsi mempertemukan atlet profesional nasional dan invited stars (Minggu malam).
          </p>
        </div>
      </div>

      {/* Filter Chips Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="font-technical text-xs text-[#77716D] uppercase tracking-wider flex items-center gap-1.5 pr-2">
            <Filter className="w-3.5 h-3.5 text-[#D91F2C]" />
            FILTER:
          </span>
          {[
            { id: "ALL", label: "SEMUA PERTANDINGAN" },
            { id: "KEJURDA", label: "KEJURDA DIY" },
            { id: "REDY_OPEN", label: "REDY OPEN II" },
            { id: "PARTAI_BINTANG", label: "PARTAI BINTANG" },
          ].map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-1.5 font-display text-xs sm:text-sm tracking-wider uppercase transition-colors whitespace-nowrap ${
                  isActive
                    ? "bg-[#D91F2C] text-white font-bold"
                    : "bg-[#141416] text-[#8F8E8B] hover:text-white border border-white/10"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <button
          onClick={() => setRulesOpen(!rulesOpen)}
          className="inline-flex items-center gap-1.5 text-xs font-technical text-[#8F8E8B] hover:text-white transition-colors"
        >
          <span>PEDOMAN WAKO RULES (TATAMI & RINGSPORT)</span>
          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${rulesOpen ? "rotate-180" : ""}`} />
        </button>
      </div>

      {/* Collapsible WAKO Rules Drawer */}
      {rulesOpen && (
        <div className="p-6 bg-[#141416] border border-white/10 space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <h4 className="font-display text-lg uppercase tracking-wider text-white">
              RINGKASAN ATURAN WAKO RESMI
            </h4>
            <Link
              href="/tentang#thb"
              className="text-xs font-technical text-[#D91F2C] hover:underline inline-flex items-center gap-1"
            >
              <span>Dokumen Lengkap THB</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#8F8E8B] font-sans">
            <div className="space-y-1.5">
              <strong className="text-white block font-display text-sm tracking-wide">
                DISIPLIN TATAMI (Point Fighting & Kick Light)
              </strong>
              <p>
                Dipertandingkan di atas matras tatami. Menekankan kecepatan, kontrol teknik terarah (*controlled contact*), dan akurasi serangan. Peserta wajib mengenakan pelindung kepala, pelindung gigi, sarung tangan tatami, pelindung tulang kering, dan pelindung kaki resmi.
              </p>
            </div>
            <div className="space-y-1.5">
              <strong className="text-white block font-display text-sm tracking-wide">
                DISIPLIN RINGSPORT (Low Kick, Full Contact, K-1 Style)
              </strong>
              <p>
                Dipertandingkan di atas ring tali standar. Memperbolehkan *full power contact* pukulan dan tendangan (low kick & lutut tunggal pada nomor K-1). Penilaian menggunakan 10-Point Must System oleh dewan juri bersertifikasi KBI DIY.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Compact Fight Match Matrix (GLORY/UFC Dense Rows) */}
      <div className="border border-white/10 bg-[#121214] divide-y divide-white/5">
        {filteredMatches.map((match) => {
          return (
            <div
              key={match.id}
              className="p-4 sm:p-5 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center hover:bg-white/[0.02] transition-colors"
            >
              {/* Col 1: Tournament & Discipline Pill */}
              <div className="lg:col-span-3 space-y-1">
                <div className="flex items-center gap-2">
                  <span className={`font-technical text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 border ${
                    match.tournament === "PARTAI_BINTANG"
                      ? "bg-[#D91F2C]/15 border-[#D91F2C] text-[#D91F2C]"
                      : "bg-white/5 border-white/10 text-[#8F8E8B]"
                  }`}>
                    {match.tournamentLabel}
                  </span>
                </div>
                <p className="font-display text-base tracking-wide text-[#F4F0E8]">
                  {match.discipline}
                </p>
                <p className="font-technical text-[11px] text-[#77716D]">
                  Kelas: {match.weightClass}
                </p>
              </div>

              {/* Col 2: Matchup (Red Corner vs Blue Corner) */}
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-11 gap-2 items-center py-2 sm:py-0">
                {/* Red Corner */}
                <div className="sm:col-span-5 text-left sm:text-right border-l-2 sm:border-l-0 sm:border-r-2 border-[#D91F2C] pl-2 sm:pl-0 sm:pr-3">
                  <span className="font-technical text-[9px] uppercase tracking-widest text-[#D91F2C] font-bold block">
                    SUDUT MERAH
                  </span>
                  <span className="font-display text-lg uppercase tracking-wider text-white block">
                    {match.fighterRed.name}
                  </span>
                  <span className="font-technical text-[11px] text-[#77716D] block">
                    {match.fighterRed.origin}
                  </span>
                </div>

                {/* VS Badge */}
                <div className="sm:col-span-1 text-center py-1 sm:py-0">
                  <span className="font-display text-xs text-[#77716D] bg-white/5 px-2 py-1 rounded">
                    VS
                  </span>
                </div>

                {/* Blue Corner */}
                <div className="sm:col-span-5 text-left border-l-2 border-blue-500 pl-2 sm:pl-3">
                  <span className="font-technical text-[9px] uppercase tracking-widest text-blue-400 font-bold block">
                    SUDUT BIRU
                  </span>
                  <span className="font-display text-lg uppercase tracking-wider text-white block">
                    {match.fighterBlue.name}
                  </span>
                  <span className="font-technical text-[11px] text-[#77716D] block">
                    {match.fighterBlue.origin}
                  </span>
                </div>
              </div>

              {/* Col 3: Status & Schedule Arena */}
              <div className="lg:col-span-3 text-left lg:text-right space-y-0.5 border-t lg:border-t-0 border-white/5 pt-2 lg:pt-0">
                <span className="font-technical text-xs font-bold text-[#F4F0E8] block">
                  {match.timeSlot}
                </span>
                <span className="font-technical text-[11px] text-[#8F8E8B] block">
                  {match.ring}
                </span>
                <span className="inline-block mt-1 font-technical text-[10px] text-[#D91F2C] uppercase font-semibold">
                  JADWAL RESMI TERKONFIRMASI
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Matchmaking Official Protocol Footnote */}
      <div className="p-4 bg-[#141416] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#8F8E8B] font-sans">
        <p>
          Bagan dan urutan partai prelims lengkap akan dirilis pasca proses penimbangan badan & screening medis (10 Des 2026).
        </p>
        <Link
          href="/fighters"
          className="text-[#F4F0E8] hover:text-[#D91F2C] font-technical inline-flex items-center gap-1 uppercase tracking-wider text-[11px] shrink-0"
        >
          <span>Jelajahi Direktori Atlet (200+)</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>

    </div>
  );
}
