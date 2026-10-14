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
  { day: 1, label: "SABTU 12 DESEMBER", shortLabel: "SAB 12", fullDate: "Sabtu, 12 Desember 2026" },
  { day: 2, label: "MINGGU 13 DESEMBER", shortLabel: "MIN 13", fullDate: "Minggu, 13 Desember 2026" },
  { day: 3, label: "SENIN 14 DESEMBER", shortLabel: "SEN 14", fullDate: "Senin, 14 Desember 2026" },
];

export default function JadwalClient({ initialItems }: JadwalClientProps) {
  const [selectedDay, setSelectedDay] = useState<number>(1);

  const filteredItems = initialItems.filter((item) => item.day === selectedDay);

  return (
    <div className="w-full space-y-10 font-sans">
      {/* Day Selector Buttons */}
      <div className="flex flex-wrap items-center gap-3 border-b border-black/15 pb-8">
        {DAY_TABS.map((tab) => {
          const isActive = selectedDay === tab.day;
          return (
            <button
              key={tab.day}
              type="button"
              onClick={() => setSelectedDay(tab.day)}
              className={`px-6 sm:px-8 py-3 text-sm sm:text-base font-display tracking-wider uppercase transition-all ${
                isActive
                  ? "bg-[#0B0B0B] text-white shadow-md ring-1 ring-black"
                  : "bg-transparent text-[#0B0B0B] hover:bg-black/5 border border-black/25"
              }`}
            >
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">{tab.shortLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Timetable List in Spacious Open Rows */}
      {filteredItems.length === 0 ? (
        <div className="py-20 text-center border-t border-b border-black/15 space-y-4">
          <Clock className="w-8 h-8 text-[#8F8E8B] mx-auto opacity-60" />
          <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-wider text-[#0B0B0B]">
            AGENDA RESMI SEGERA DIUMUMKAN
          </h3>
          <p className="text-sm text-[#5A5957] max-w-md mx-auto font-sans leading-relaxed">
            Rundown detail partai eliminasi kejuaraan dan panggung festival untuk hari ini sedang menunggu rilis resmi panitia pelaksana.
          </p>
        </div>
      ) : (
        <div className="border-t border-black/15 divide-y divide-black/15">
          {filteredItems.map((item, index) => {
            const rowNumber = (index + 1).toString().padStart(2, "0");
            const isCombat = item.category === "COMBAT";

            return (
              <div
                key={item.id}
                className="py-7 sm:py-9 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-baseline transition-colors hover:bg-black/[0.02] px-2"
              >
                {/* Red Row Index */}
                <span className="font-technical text-sm sm:text-base font-bold text-[#D91F2C] md:col-span-1">
                  {rowNumber}
                </span>

                {/* Main Content */}
                <div className="md:col-span-5 space-y-1">
                  <span className="font-technical text-[10px] uppercase font-bold tracking-widest text-[#77716D] block">
                    {item.location} • {isCombat ? "THE RING" : "THE STAGE"}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-[#0B0B0B]">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-xs sm:text-sm text-[#5A5957] leading-relaxed pt-1 font-sans">
                      {item.description}
                    </p>
                  )}
                </div>

                {/* Highlight Status */}
                <div className="md:col-span-3 text-xs text-[#5A5957] font-sans">
                  {item.isHighlight && (
                    <span className="font-technical inline-block text-[#D91F2C] font-bold uppercase tracking-wider text-[11px] border border-[#D91F2C]/30 px-2.5 py-0.5">
                      ★ PARTAI UTAMA
                    </span>
                  )}
                </div>

                {/* Time Slot */}
                <div className="md:col-span-3 text-left md:text-right">
                  <span className="font-technical text-sm sm:text-base font-bold text-[#0B0B0B] tracking-wider uppercase">
                    {item.timeSlot} WIB
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Editorial Footer Note */}
      <div className="pt-8 border-t border-black/15 text-xs text-[#77716D] flex flex-col sm:flex-row justify-between gap-4 font-technical">
        <p>SELURUH JADWAL MENGGUNAKAN WAKTU INDONESIA BARAT (WIB).</p>
        <p>JADWAL LAGA DAPAT MENYESUAIKAN HASIL KO/TKO DI ARENA RING.</p>
      </div>
    </div>
  );
}
