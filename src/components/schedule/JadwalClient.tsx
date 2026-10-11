"use client";

import { useState } from "react";
import { Calendar, Clock, MapPin, Trophy, Music, Sparkles, Users, Filter, CheckCircle2 } from "lucide-react";

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

import { EVENT_CONFIG } from "@/lib/event-config";

const DAYS = EVENT_CONFIG.dates.days;

const CATEGORIES = [
  { key: "ALL", label: "Semua Jadwal" },
  { key: "COMBAT", label: "Ring Kejuaraan", icon: Trophy },
  { key: "STAGE", label: "Panggung Musik", icon: Music },
  { key: "CEREMONY", label: "Timbang Badan / Upacara", icon: Sparkles },
  { key: "COMMUNITY", label: "Komunitas & Coaching", icon: Users },
];

export default function JadwalClient({ initialItems }: JadwalClientProps) {
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const filteredItems = initialItems.filter((item) => {
    const matchesDay = item.day === selectedDay;
    const matchesCategory = selectedCategory === "ALL" || item.category === selectedCategory;
    return matchesDay && matchesCategory;
  });

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case "COMBAT":
        return {
          label: "KEJUARAAN TARUNG",
          className: "bg-[#D91F2C]/15 border-[#D91F2C]/40 text-[#EF3340]",
        };
      case "STAGE":
        return {
          label: "FESTIVAL MUSIK",
          className: "bg-amber-500/15 border-amber-500/40 text-amber-400",
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
          className: "bg-white/10 border-white/20 text-white",
        };
    }
  };

  return (
    <div className="w-full">
      {/* Day Selection Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
        {DAYS.map((d) => {
          const isActive = selectedDay === d.day;
          return (
            <button
              key={d.day}
              onClick={() => setSelectedDay(d.day)}
              className={`p-5 rounded-sm border text-left transition-all relative overflow-hidden ${
                isActive
                  ? "bg-[#171719] border-[#D91F2C] shadow-lg shadow-[#D91F2C]/10"
                  : "bg-[#171719]/40 border-white/10 hover:border-white/25 hover:bg-[#171719]/80"
              }`}
            >
              {isActive && (
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#D91F2C]/10 rounded-bl-full pointer-events-none" />
              )}
              <div className="flex items-center justify-between mb-1">
                <span
                  className={`text-xs font-bold uppercase tracking-widest ${
                    isActive ? "text-[#EF3340]" : "text-[#99999F]"
                  }`}
                >
                  {d.label}
                </span>
                {isActive && <CheckCircle2 className="w-4 h-4 text-[#EF3340]" />}
              </div>
              <h3
                className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                {d.date.split(",")[0]}
              </h3>
              <p className="text-xs text-[#99999F] font-sans mt-1 line-clamp-1">
                {d.theme}
              </p>
            </button>
          );
        })}
      </div>

      {/* Category Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
        <div className="flex items-center gap-1.5 text-xs text-[#99999F] font-sans mr-2 shrink-0">
          <Filter className="w-3.5 h-3.5" />
          <span>Filter:</span>
        </div>
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shrink-0 transition-all font-sans ${
                isActive
                  ? "bg-white text-[#09090b] shadow-sm"
                  : "bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Timeline Items */}
      {filteredItems.length === 0 ? (
        <div className="bg-[#171719] border border-white/10 p-12 text-center rounded-sm">
          <Calendar className="w-10 h-10 text-white/30 mx-auto mb-3" />
          <h4
            className="text-xl font-black uppercase text-white mb-2"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            TIDAK ADA AGENDA PADA FILTER INI
          </h4>
          <p className="text-[#99999F] text-sm font-sans mb-4">
            Silakan pilih kategori lain atau ubah hari festival.
          </p>
          <button
            onClick={() => setSelectedCategory("ALL")}
            className="text-xs uppercase tracking-widest text-[#EF3340] font-bold hover:underline"
          >
            Tampilkan Semua Agenda Hari Ini
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredItems.map((item) => {
            const badge = getCategoryBadge(item.category);
            return (
              <div
                key={item.id}
                className={`p-6 rounded-sm border transition-all ${
                  item.isHighlight
                    ? "bg-[#171719] border-[#D91F2C]/40 hover:border-[#D91F2C]"
                    : "bg-[#171719]/60 border-white/10 hover:border-white/20"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm border font-sans ${badge.className}`}
                    >
                      {badge.label}
                    </span>
                    {item.isHighlight && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm bg-gradient-to-r from-amber-500/20 to-red-500/20 border border-amber-500/40 text-amber-300 font-sans">
                        ★ AGENDA UTAMA
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-4 text-xs font-sans text-[#99999F]">
                    <div className="flex items-center gap-1.5 text-white/90 font-mono font-bold">
                      <Clock className="w-3.5 h-3.5 text-[#EF3340]" />
                      <span>{item.timeSlot}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-white/50" />
                      <span className="line-clamp-1">{item.location}</span>
                    </div>
                  </div>
                </div>

                <h3
                  className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight mb-2"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  {item.title}
                </h3>

                {item.description && (
                  <p className="text-sm text-[#99999F] font-sans leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
