"use client";

import { useState } from "react";
import { Clock, MapPin, ChevronDown, ChevronUp } from "lucide-react";

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
  { day: 1, label: "HARI 01 • 12 DES", fullDate: "Sabtu, 12 Desember 2026", theme: "Penimbangan, Penyisihan & Upacara Pembuka" },
  { day: 2, label: "HARI 02 • 13 DES", fullDate: "Minggu, 13 Desember 2026", theme: "Semifinal & Panggung Musik Utama" },
  { day: 3, label: "HARI 03 • 14 DES", fullDate: "Senin, 14 Desember 2026", theme: "Championship Finals & Grand Finale Stage" },
];

export default function JadwalClient({ initialItems }: JadwalClientProps) {
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [expandedItemId, setExpandedItemId] = useState<string | null>(null);

  const filteredItems = initialItems.filter((item) => item.day === selectedDay);

  const toggleExpand = (id: string) => {
    setExpandedItemId(expandedItemId === id ? null : id);
  };

  const currentTab = DAY_TABS.find((d) => d.day === selectedDay) || DAY_TABS[0];

  return (
    <div className="w-full space-y-8 font-sans">
      
      {/* Day Selector Ribbon */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div className="flex items-center gap-2">
          {DAY_TABS.map((tab) => {
            const isActive = selectedDay === tab.day;
            return (
              <button
                key={tab.day}
                type="button"
                onClick={() => {
                  setSelectedDay(tab.day);
                  setExpandedItemId(null);
                }}
                className={`px-4 sm:px-6 py-2.5 text-xs font-display font-extrabold uppercase tracking-wider transition-colors ${
                  isActive
                    ? "bg-[#D91F2C] text-white"
                    : "bg-[#141416] text-[#8F8E8B] hover:text-[#F4F0E8] border border-white/5"
                }`}
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="text-right hidden sm:block">
          <p className="text-xs font-mono font-bold text-[#F4F0E8] uppercase">{currentTab.fullDate}</p>
          <p className="text-[10px] text-[#8F8E8B] font-mono">{currentTab.theme}</p>
        </div>
      </div>

      {/* Timetable Items */}
      {filteredItems.length === 0 ? (
        <div className="p-16 text-center bg-[#141416] border border-white/10 space-y-2">
          <Clock className="w-8 h-8 text-[#8F8E8B] mx-auto" />
          <h3 className="v9-display-title text-2xl text-[#F4F0E8]" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
            JADWAL BELUM DITETAPKAN
          </h3>
          <p className="text-xs text-[#8F8E8B]">
            Susunan jadwal untuk hari ini sedang dalam proses finalisasi kurasi panitia.
          </p>
        </div>
      ) : (
        <div className="border border-white/10 divide-y divide-white/10 bg-[#141416]">
          {filteredItems.map((item) => {
            const isExpanded = expandedItemId === item.id;
            const isCombat = item.category === "COMBAT";
            const isStage = item.category === "STAGE";

            return (
              <div
                key={item.id}
                className={`transition-colors ${
                  item.isHighlight ? "bg-[#D91F2C]/5" : "hover:bg-white/[0.02]"
                }`}
              >
                <div
                  onClick={() => toggleExpand(item.id)}
                  className="p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer"
                >
                  {/* Time and Category */}
                  <div className="flex items-center gap-4 sm:gap-6 min-w-56">
                    <span className="font-mono text-xs sm:text-sm font-bold text-[#F4F0E8] bg-[#0B0B0B] px-3 py-1.5 border border-white/10">
                      {item.timeSlot}
                    </span>
                    <span
                      className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 ${
                        isCombat
                          ? "bg-[#D91F2C] text-white font-bold"
                          : isStage
                          ? "bg-[#F4F0E8] text-[#0B0B0B] font-bold"
                          : "bg-white/10 text-[#8F8E8B]"
                      }`}
                    >
                      {item.category}
                    </span>
                  </div>

                  {/* Title and Location */}
                  <div className="flex-1 space-y-1">
                    <h3
                      className="font-display font-black text-xl sm:text-2xl text-[#F4F0E8] uppercase tracking-wide flex items-center gap-2"
                      style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                    >
                      {item.title}
                      {item.isHighlight && (
                        <span className="text-[10px] text-[#D91F2C] font-mono tracking-widest">
                          ★ HIGHLIGHT
                        </span>
                      )}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-[#8F8E8B] font-mono">
                      <MapPin className="w-3.5 h-3.5 text-[#D91F2C]" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Expand Toggle */}
                  <div className="flex items-center gap-2 text-xs font-mono text-[#8F8E8B]">
                    <span>{isExpanded ? "TUTUP" : "DETAIL"}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && item.description && (
                  <div className="px-5 pb-6 sm:px-6 pt-2 border-t border-white/5 bg-[#0B0B0B]/40 text-xs text-[#8F8E8B] leading-relaxed font-sans">
                    {item.description}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
}
