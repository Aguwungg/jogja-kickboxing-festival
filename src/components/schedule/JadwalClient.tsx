"use client";

import { useState, useMemo } from "react";
import { Clock, Trophy, Music, Calendar } from "lucide-react";

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
  { day: 1, label: "HARI 1 • SABTU 12 DESEMBER", shortLabel: "SAB 12", fullDate: "Sabtu, 12 Desember 2026", theme: "BABAK PENYISIHAN & PEMBUKAAN" },
  { day: 2, label: "HARI 2 • MINGGU 13 DESEMBER", shortLabel: "MIN 13", fullDate: "Minggu, 13 Desember 2026", theme: "PEREMPAT FINAL & PANGGUNG FASE 1" },
  { day: 3, label: "HARI 3 • SENIN 14 DESEMBER", shortLabel: "SEN 14", fullDate: "Senin, 14 Desember 2026", theme: "SEMIFINAL, GRAND FINAL & SELEBRASI" },
];

const CATEGORIES = [
  { id: "ALL", label: "SEMUA AGENDA" },
  { id: "COMBAT", label: "RING KICKBOXING", icon: Trophy },
  { id: "MUSIC", label: "PANGGUNG MUSIK", icon: Music },
];

export default function JadwalClient({ initialItems }: JadwalClientProps) {
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const filteredItems = useMemo(() => {
    return initialItems.filter((item) => {
      const matchDay = item.day === selectedDay;
      const matchCategory =
        selectedCategory === "ALL" ||
        (selectedCategory === "COMBAT" && item.category === "COMBAT") ||
        (selectedCategory === "MUSIC" && (item.category === "MUSIC" || item.category === "FESTIVAL"));
      return matchDay && matchCategory;
    });
  }, [initialItems, selectedDay, selectedCategory]);

  const currentDayInfo = DAY_TABS.find((d) => d.day === selectedDay) || DAY_TABS[0];

  return (
    <div className="w-full space-y-8 font-sans">
      
      {/* ═════════════════════════════════════════════════════════════════════
          1. DAY SELECTOR & CATEGORY FILTER BAR
      ═════════════════════════════════════════════ */}
      <div className="space-y-4 border-b border-white/10 pb-6">
        
        {/* Day Tabs */}
        <div className="flex flex-wrap items-center gap-2.5">
          {DAY_TABS.map((tab) => {
            const isActive = selectedDay === tab.day;
            return (
              <button
                key={tab.day}
                type="button"
                onClick={() => setSelectedDay(tab.day)}
                className={`px-5 sm:px-6 py-3 text-xs sm:text-sm font-display tracking-wider uppercase transition-all rounded ${
                  isActive
                    ? "bg-[#D91F2C] text-white shadow-lg shadow-red-950/40 ring-1 ring-[#D91F2C]"
                    : "bg-[#141416] text-white/70 hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.shortLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Sub-bar: Day Theme & Category Filter Chips */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
          <div className="flex items-center gap-2 text-xs font-technical uppercase tracking-wider text-white/50">
            <Calendar className="w-3.5 h-3.5 text-[#D91F2C]" />
            <span className="font-bold text-white">{currentDayInfo.fullDate}</span>
            <span>•</span>
            <span className="text-[#D91F2C]">{currentDayInfo.theme}</span>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded text-[11px] font-technical uppercase tracking-wider transition-all whitespace-nowrap ${
                    isSelected
                      ? "bg-white text-black font-bold"
                      : "bg-[#141416] text-white/70 hover:text-white border border-white/10"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* ═════════════════════════════════════════════════════════════════════
          2. TIMETABLE LIST (TASK-ORIENTED, TIME-FIRST, MINIMAL DIVIDERS)
      ═════════════════════════════════════════════ */}
      {filteredItems.length === 0 ? (
        <div className="py-20 text-center border border-white/10 bg-[#121214] rounded-lg p-6 space-y-3">
          <Clock className="w-8 h-8 text-[#8F8E8B] mx-auto opacity-60" />
          <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-white">
            AGENDA RESMI SEGERA DIUMUMKAN
          </h3>
          <p className="text-xs sm:text-sm text-white/50 max-w-md mx-auto font-sans leading-relaxed">
            Rundown detail untuk kategori ini sedang dalam tahap sinkronisasi akhir dengan panitia pelaksana JKBF.
          </p>
        </div>
      ) : (
        <div className="border border-white/10 rounded-lg overflow-hidden divide-y divide-white/5 bg-[#121214]">
          {filteredItems.map((item, index) => {
            const rowNumber = (index + 1).toString().padStart(2, "0");
            const isCombat = item.category === "COMBAT";

            return (
              <div
                key={item.id}
                className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center transition-colors hover:bg-white/[0.03]"
              >
                {/* Index / Category Icon */}
                <div className="md:col-span-1 flex items-center gap-2">
                  <span className="font-technical text-sm sm:text-base font-bold text-[#D91F2C]">
                    {rowNumber}
                  </span>
                </div>

                {/* Main Content */}
                <div className="md:col-span-6 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-technical text-[10px] uppercase font-bold tracking-widest text-white/40">
                      {item.location} • {isCombat ? "RING KICKBOXING" : "PANGGUNG FESTIVAL"}
                    </span>
                    {item.isHighlight && (
                      <span className="font-technical text-[9px] bg-[#D91F2C] text-white px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                        ★ PARTAI UTAMA
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-lg sm:text-2xl uppercase tracking-wider text-white">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-xs text-white/60 leading-relaxed font-sans line-clamp-2">
                      {item.description}
                    </p>
                  )}
                </div>

                {/* Status / Category Tag */}
                <div className="md:col-span-2 text-xs text-white/50 font-sans">
                  <span className="font-technical text-[10px] sm:text-[11px] text-white/60 uppercase tracking-wider bg-white/5 px-2.5 py-1 rounded border border-white/5">
                    {item.location}
                  </span>
                </div>

                {/* Time Slot (Prominent Time-First) */}
                <div className="md:col-span-3 text-left md:text-right">
                  <span className="font-technical text-base sm:text-lg font-bold text-white tracking-wider uppercase block">
                    {item.timeSlot.replace(/\s*WIB\s*$/i, "").trim()} WIB
                  </span>
                  <span className="font-technical text-[10px] text-[#D91F2C] uppercase font-bold">
                    GOR UNY YOGYAKARTA
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
}
