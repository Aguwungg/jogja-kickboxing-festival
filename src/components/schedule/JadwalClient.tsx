"use client";

import { useState } from "react";
import { Clock, MapPin, ChevronDown, CheckCircle2 } from "lucide-react";
import { EVENT_CONFIG } from "@/lib/event-config";

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
  { day: 1, label: "12 DES", fullDate: "Jumat, 12 Desember 2026", theme: "Penimbangan & Babak Penyisihan" },
  { day: 2, label: "13 DES", fullDate: "Sabtu, 13 Desember 2026", theme: "Babak Semifinal & Showcase" },
  { day: 3, label: "14 DES", fullDate: "Minggu, 14 Desember 2026", theme: "Grand Final 4 Sabuk & Panggung Musik" },
];

export default function JadwalClient({ initialItems }: JadwalClientProps) {
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [expandedItemId, setExpandedItemId] = useState<string | null>(null);

  const filteredItems = initialItems.filter((item) => item.day === selectedDay);

  const toggleExpand = (id: string) => {
    setExpandedItemId(expandedItemId === id ? null : id);
  };

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case "COMBAT":
        return {
          label: "RING KEJUARAAN",
          className: "bg-[#D91F2C]/15 border-[#D91F2C]/40 text-[#EF3340]",
        };
      case "STAGE":
        return {
          label: "PANGGUNG MUSIK",
          className: "bg-[#E2BA75]/15 border-[#E2BA75]/40 text-[#E2BA75]",
        };
      case "CEREMONY":
        return {
          label: "UPACARA RESMI",
          className: "bg-blue-500/15 border-blue-500/40 text-blue-400",
        };
      case "COMMUNITY":
        return {
          label: "KOMUNITAS & WORKSHOP",
          className: "bg-purple-500/15 border-purple-500/40 text-purple-400",
        };
      default:
        return {
          label: category,
          className: "bg-white/10 border-white/20 text-[#C4C4CC]",
        };
    }
  };

  const currentTab = DAY_TABS.find((d) => d.day === selectedDay) || DAY_TABS[0];

  return (
    <div className="w-full space-y-8">
      
      {/* ═════════════════════════════════════════════════════════════════════
          ONE DATE SELECTOR (12 DES | 13 DES | 14 DES)
          Formula 1 / Primavera Sound style: clear, compact, and fast
      ═════════════════════════════════════════════════════════════════════ */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        
        {/* Day Selector Buttons */}
        <div className="inline-flex rounded-sm bg-[#171719] p-1 border border-white/10 w-full sm:w-auto">
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
                className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-sm text-xs sm:text-sm font-bold uppercase tracking-wider transition-all font-display ${
                  isActive
                    ? "bg-[#D91F2C] text-white shadow-md shadow-[#D91F2C]/30"
                    : "text-[#9A9AA2] hover:text-[#F5F3EE] hover:bg-white/5"
                }`}
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Selected Day Meta Summary */}
        <div className="text-left sm:text-right">
          <p className="text-xs uppercase tracking-widest text-[#D91F2C] font-bold">
            {currentTab.fullDate}
          </p>
          <p className="text-sm text-[#F5F3EE] font-medium">
            {currentTab.theme}
          </p>
        </div>

      </div>

      {/* ═════════════════════════════════════════════════════════════════════
          ONE CHRONOLOGICAL TIMELINE
          Clean, progressive disclosure: essential info first, details on click
      ═════════════════════════════════════════════════════════════════════ */}
      {filteredItems.length === 0 ? (
        <div className="bg-[#171719] border border-white/10 p-12 text-center rounded-sm space-y-3">
          <p
            className="text-2xl font-black uppercase text-[#F5F3EE]"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            JADWAL BELUM DIRILIS
          </p>
          <p className="text-xs sm:text-sm text-[#9A9AA2] max-w-md mx-auto leading-relaxed">
            Rundown resmi untuk hari ini sedang dalam finalisasi oleh tim komite pertandingan dan festival.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredItems.map((item) => {
            const badge = getCategoryBadge(item.category);
            const isExpanded = expandedItemId === item.id;
            const hasDescription = Boolean(item.description);

            return (
              <div
                key={item.id}
                className={`rounded-sm border transition-all ${
                  item.isHighlight
                    ? "bg-[#171719] border-[#D91F2C]/40 hover:border-[#D91F2C]"
                    : "bg-[#171719]/60 border-white/10 hover:border-white/20"
                }`}
              >
                <div className="p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  
                  {/* Left: Time & Badges & Title */}
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      {/* Time slot */}
                      <span className="font-mono font-bold text-white bg-white/10 px-2.5 py-0.5 rounded-sm flex items-center gap-1.5">
                        <Clock className="w-3 h-3 text-[#D91F2C]" />
                        {item.timeSlot}
                      </span>
                      
                      {/* Category Badge */}
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm border ${badge.className}`}>
                        {badge.label}
                      </span>

                      {/* Highlight Pill */}
                      {item.isHighlight && (
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm bg-[#D91F2C] text-white">
                          AGENDA UTAMA
                        </span>
                      )}
                    </div>

                    {/* Activity Title */}
                    <h3
                      className="text-lg sm:text-xl font-bold uppercase text-white tracking-wide leading-snug"
                      style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                    >
                      {item.title}
                    </h3>

                    {/* Location */}
                    <div className="flex items-center gap-1.5 text-xs text-[#9A9AA2]">
                      <MapPin className="w-3.5 h-3.5 text-[#D91F2C]" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Right: Expand Affordance (if description exists) */}
                  {hasDescription && (
                    <button
                      type="button"
                      onClick={() => toggleExpand(item.id)}
                      className="self-start md:self-center inline-flex items-center gap-1 text-xs text-[#9A9AA2] hover:text-[#F5F3EE] transition-colors py-1 px-2 rounded-sm bg-white/5 border border-white/5"
                    >
                      <span>{isExpanded ? "Tutup Detail" : "Lihat Detail"}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isExpanded ? "rotate-180 text-[#D91F2C]" : ""
                        }`}
                      />
                    </button>
                  )}

                </div>

                {/* Progressive Disclosure: Expandable Detail */}
                {hasDescription && isExpanded && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-2 border-t border-white/5 text-xs sm:text-sm text-[#C4C4CC] leading-relaxed">
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
