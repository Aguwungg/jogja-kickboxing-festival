"use client";

import { useState } from "react";
import Link from "next/link";
import { Clock, Calendar, ArrowUpRight, Info, ShieldCheck } from "lucide-react";

interface TimelineEntry {
  time: string;
  title: string;
  badge: string;
  arena: string;
  isMain?: boolean;
}

const OFFICIAL_THB_SCHEDULE: Record<number, {
  date: string;
  theme: string;
  entries: TimelineEntry[];
}> = {
  1: {
    date: "Sabtu, 12 Desember 2026",
    theme: "BABAK PENYISIHAN & KONSER PEMBUKA",
    entries: [
      {
        time: "08:00 – 12:00 WIB",
        title: "Babak Penyisihan (Preliminary Rounds) Sesi Pagi",
        badge: "TATAMI & RINGSPORT",
        arena: "Ring Kejuaraan & Tatami A/B",
      },
      {
        time: "12:00 – 13:00 WIB",
        title: "Istirahat Resmi & Persiapan Sesi Siang",
        badge: "BREAK",
        arena: "GOR UNY",
      },
      {
        time: "13:00 – 17:30 WIB",
        title: "Lanjutan Babak Penyisihan Kejurda DIY 2026 & Redy Open II",
        badge: "KOMPETISI RESMI",
        arena: "Ring Kejuaraan 1 & 2",
        isMain: true,
      },
      {
        time: "17:30 – 18:30 WIB",
        title: "Break Pertandingan & Persiapan Panggung Musik",
        badge: "TRANSISI",
        arena: "Area Panggung Utama",
      },
      {
        time: "18:30 – 21:00 WIB",
        title: "Panggung Konser Musik: Sound of Yogyakarta Fase 1",
        badge: "KONSER MUSIK",
        arena: "Panggung Utama Festival",
        isMain: true,
      },
    ],
  },
  2: {
    date: "Minggu, 13 Desember 2026",
    theme: "PEREMPAT FINAL & PARTAI BINTANG",
    entries: [
      {
        time: "08:00 – 12:00 WIB",
        title: "Babak Perempat Final (Quarter Finals) Kejurda & Redy Open",
        badge: "PEREMPAT FINAL",
        arena: "Ring Kejuaraan 1 & 2",
      },
      {
        time: "12:00 – 13:00 WIB",
        title: "Istirahat Resmi & Sterilisasi Kanvas Ring",
        badge: "BREAK",
        arena: "GOR UNY",
      },
      {
        time: "13:00 – 17:00 WIB",
        title: "Partai Bintang & Mega Bintang — Sesi Eksibisi Nasional",
        badge: "PARTAI BINTANG",
        arena: "Ring Utama Kejuaraan",
        isMain: true,
      },
      {
        time: "17:00 – 18:30 WIB",
        title: "Break & Cooldown Atlet",
        badge: "TRANSISI",
        arena: "Backstage & Athletes Lounge",
      },
      {
        time: "18:30 – 22:00 WIB",
        title: "Partai Puncak Laga Bintang & Mega Bintang (Invitation Only)",
        badge: "MAIN EVENT",
        arena: "Ring Utama Kejuaraan",
        isMain: true,
      },
    ],
  },
  3: {
    date: "Senin, 14 Desember 2026",
    theme: "SEMIFINAL, FINAL & CLOSING CEREMONY",
    entries: [
      {
        time: "08:00 – 12:00 WIB",
        title: "Babak Semifinal Kejurda DIY 2026 & Redy Open Championship II",
        badge: "SEMIFINAL",
        arena: "Ring Kejuaraan 1 & 2",
      },
      {
        time: "12:00 – 13:00 WIB",
        title: "Istirahat Resmi Atlet & Wasit Juri",
        badge: "BREAK",
        arena: "GOR UNY",
      },
      {
        time: "13:00 – 17:30 WIB",
        title: "BABAK FINAL & PENENTUAN JUARA KEJURDA & REDY OPEN II",
        badge: "BABAK FINAL",
        arena: "Ring Utama Kejuaraan",
        isMain: true,
      },
      {
        time: "17:30 – 18:30 WIB",
        title: "Upacara Penghargaan Pemenang (UPP) & Pengalungan Medali",
        badge: "UPP MEDALI",
        arena: "Podium Kejuaraan",
        isMain: true,
      },
      {
        time: "18:30 – 21:00 WIB",
        title: "Grand Closing Music Concert: Spektakuler Penutupan",
        badge: "KONSER MUSIK",
        arena: "Panggung Utama Festival",
        isMain: true,
      },
      {
        time: "21:00 – 22:00 WIB",
        title: "Closing Ceremony & Selebrasi Kemenangan JKBF 2026",
        badge: "CLOSING",
        arena: "GOR UNY Main Hall",
      },
    ],
  },
};

export default function JadwalClient() {
  const [activeDay, setActiveDay] = useState<number>(1);
  const currentSchedule = OFFICIAL_THB_SCHEDULE[activeDay];

  return (
    <div className="w-full max-w-5xl mx-auto space-y-10">
      
      {/* 3 Main Day Tabs — Sole Primary Control */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {[1, 2, 3].map((dayNumber) => {
          const item = OFFICIAL_THB_SCHEDULE[dayNumber];
          const isActive = activeDay === dayNumber;

          return (
            <button
              key={dayNumber}
              type="button"
              onClick={() => setActiveDay(dayNumber)}
              className={`p-4 sm:p-5 text-left transition-all border ${
                isActive
                  ? "bg-[#141416] border-[#D91F2C] shadow-lg shadow-red-950/20 ring-1 ring-[#D91F2C]"
                  : "bg-[#0F0F11] border-white/10 hover:border-white/20 hover:bg-[#141416]"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`font-technical text-xs font-bold uppercase tracking-[0.2em] ${
                  isActive ? "text-[#D91F2C]" : "text-[#77716D]"
                }`}>
                  HARI {dayNumber.toString().padStart(2, "0")}
                </span>
                {isActive && <span className="w-2 h-2 rounded-full bg-[#D91F2C]" />}
              </div>
              <h3 className="font-display text-xl sm:text-2xl uppercase tracking-wider text-[#F4F0E8] mt-1">
                {item.date.split(",")[0]}
              </h3>
              <p className="font-technical text-[11px] text-[#8F8E8B] mt-0.5">
                {item.date.split(",")[1]?.trim()}
              </p>
            </button>
          );
        })}
      </div>

      {/* Day Theme Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <Calendar className="w-4 h-4 text-[#D91F2C]" />
          <span className="font-technical text-sm font-bold uppercase tracking-wider text-[#F4F0E8]">
            {currentSchedule.date}
          </span>
          <span className="text-white/20">•</span>
          <span className="font-technical text-xs text-[#D91F2C] uppercase tracking-wider font-semibold">
            {currentSchedule.theme}
          </span>
        </div>

        <span className="font-technical text-xs text-[#77716D]">
          VENUE: GOR UNY COLOMBO
        </span>
      </div>

      {/* Vertical Clean Timeline (Left Time, Right Agenda) */}
      <div className="border border-white/10 bg-[#121214] divide-y divide-white/5">
        {currentSchedule.entries.map((entry, index) => {
          return (
            <div
              key={index}
              className={`p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center transition-colors ${
                entry.isMain ? "bg-white/[0.02]" : "hover:bg-white/[0.01]"
              }`}
            >
              {/* Left Column: Time Slot */}
              <div className="md:col-span-3 flex md:flex-col items-baseline md:items-start justify-between gap-1">
                <span className="font-technical text-base sm:text-lg font-bold text-[#F4F0E8] tracking-wider">
                  {entry.time}
                </span>
                <span className="font-technical text-[10px] text-[#77716D] uppercase">
                  WAKTU INDONESIA BARAT
                </span>
              </div>

              {/* Right Column: Title, Badge, & Arena */}
              <div className="md:col-span-9 space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`font-technical text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 border ${
                    entry.isMain
                      ? "bg-[#D91F2C]/15 border-[#D91F2C] text-[#D91F2C]"
                      : "bg-white/5 border-white/10 text-[#8F8E8B]"
                  }`}>
                    {entry.badge}
                  </span>
                  <span className="text-white/20 text-xs">•</span>
                  <span className="font-technical text-xs text-[#8F8E8B]">
                    {entry.arena}
                  </span>
                </div>

                <h4 className="font-display text-xl sm:text-2xl uppercase tracking-wider text-[#F4F0E8]">
                  {entry.title}
                </h4>
              </div>
            </div>
          );
        })}
      </div>

      {/* Participant Weigh-In Note & Technical Disclaimer */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
        {/* Weigh-in Box */}
        <div className="p-4 bg-[#141416] border border-white/10 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-[#D91F2C] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h5 className="font-display text-sm uppercase tracking-wider text-white">
              REGISTRASI & TIMBANG BADAN (10 DES)
            </h5>
            <p className="font-sans text-xs text-[#8F8E8B] leading-relaxed">
              Pemeriksaan medis resmi dan timbang badan dilaksanakan pada <strong>Rabu, 10 Desember 2026 pukul 09.00–12.00 WIB</strong> di GOR UNY.
            </p>
            <Link
              href="/tentang#regulasi"
              className="inline-flex items-center gap-1 text-[11px] font-technical text-[#D91F2C] hover:underline pt-1"
            >
              <span>Lihat Panduan & Aturan Atlet</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Technical Disclaimer Box */}
        <div className="p-4 bg-[#141416] border border-white/10 flex items-start gap-3">
          <Info className="w-5 h-5 text-[#8F8E8B] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h5 className="font-display text-sm uppercase tracking-wider text-white">
              PENYESUAIAN MATCHMAKING
            </h5>
            <p className="font-sans text-xs text-[#8F8E8B] leading-relaxed">
              Jadwal partai pertandingan dapat mengalami penyesuaian teknis urutan laga berdasarkan hasil verifikasi timbang badan dan keputusan panitia pelaksana.
            </p>
            <Link
              href="/tentang#thb"
              className="inline-flex items-center gap-1 text-[11px] font-technical text-[#8F8E8B] hover:text-white pt-1"
            >
              <span>Unduh Dokumen THB Lengkap (PDF)</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
