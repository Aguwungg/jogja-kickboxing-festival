"use client";

import { useState } from "react";
import { Clock } from "lucide-react";

interface ScheduleItemData {
  id: string;
  title: string;
  category: string;
  day: number;
  timeSlot: string;
  location: string;
  description: string | null;
  isHighlight: boolean;
}

interface JadwalClientProps {
  initialItems: ScheduleItemData[];
}

const DAY_TABS = [
  { day: 1, label: "SABTU 12 DES", shortLabel: "SAB 12", fullDate: "Sabtu, 12 Desember 2026" },
  { day: 2, label: "MINGGU 13 DES", shortLabel: "MIN 13", fullDate: "Minggu, 13 Desember 2026" },
  { day: 3, label: "SENIN 14 DES", shortLabel: "SEN 14", fullDate: "Senin, 14 Desember 2026" },
];

export default function JadwalClient({ initialItems }: JadwalClientProps) {
  const [selectedDay, setSelectedDay] = useState<number>(1);

  const filteredItems = initialItems.filter((item) => item.day === selectedDay);

  return (
    <div className="w-full space-y-10 font-sans">
      {/* Day Selector Buttons */}
      <div className="flex flex-wrap items-center gap-3 border-b border-black/10 pb-8">
        {DAY_TABS.map((tab) => {
          const isActive = selectedDay === tab.day;
          return (
            <button
              key={tab.day}
              type="button"
              onClick={() => setSelectedDay(tab.day)}
              className={`px-5 sm:px-7 py-3 text-xs sm:text-sm font-display font-black uppercase tracking-wider transition-all ${
                isActive
                  ? "bg-[#0B0B0B] text-white shadow-sm"
                  : "bg-transparent text-[#0B0B0B] hover:bg-black/5 border border-black/20"
              }`}
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">{tab.shortLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Timetable List in Spacious Open Rows */}
      {filteredItems.length === 0 ? (
        <div className="py-20 text-center border-t border-b border-black/10 space-y-3">
          <Clock className="w-8 h-8 text-[#8F8E8B] mx-auto opacity-60" />
          <h3
            className="text-2xl sm:text-3xl font-black uppercase text-[#0B0B0B]"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            AGENDA RESMI SEGERA DIUMUMKAN
          </h3>
          <p className="text-sm text-[#5A5957] max-w-md mx-auto">
            Rundown detail partai laga dan jadwal panggung untuk hari ini sedang menunggu konfirmasi panitia pelaksana.
          </p>
        </div>
      ) : (
        <div className="border-t border-black/10 divide-y divide-black/10">
          {filteredItems.map((item, index) => {
            const rowNumber = (index + 1).toString().padStart(2, "0");
            const isCombat = item.category === "COMBAT";

            return (
              <div
                key={item.id}
                className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-baseline transition-colors hover:bg-black/[0.02]"
              >
                {/* Red Row Index */}
                <span className="text-[#D91F2C] font-mono text-sm sm:text-base font-bold md:col-span-1">
                  {rowNumber}
                </span>

                {/* Main Content */}
                <div className="md:col-span-5 space-y-1">
                  <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#8F8E8B] block">
                    {item.location} • {isCombat ? "THE RING" : "THE STAGE"}
                  </span>
                  <h3
                    className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#0B0B0B]"
                    style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-xs sm:text-sm text-[#5A5957] leading-relaxed pt-1 font-sans">
                      {item.description}
                    </p>
                  )}
                </div>

                {/* Status or Extra */}
                <div className="md:col-span-3 text-xs text-[#5A5957] font-sans">
                  {item.isHighlight && (
                    <span className="inline-block text-[#D91F2C] font-bold uppercase tracking-wider text-[11px]">
                      ★ PARTAI UTAMA
                    </span>
                  )}
                </div>

                {/* Time Slot */}
                <div className="md:col-span-3 text-left md:text-right">
                  <span
                    className="text-sm sm:text-base font-black text-[#0B0B0B] tracking-wider uppercase font-mono"
                  >
                    {item.timeSlot} WIB
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Editorial Footer Note */}
      <div className="pt-8 border-t border-black/10 text-xs text-[#8F8E8B] flex flex-col sm:flex-row justify-between gap-4 font-mono">
        <p>SELURUH JADWAL MENGGUNAKAN WAKTU INDONESIA BARAT (WIB).</p>
        <p>JADWAL LAGA DAPAT MENYESUAIKAN HASIL KO/TKO DI ARENA RING.</p>
      </div>
    </div>
  );
}
