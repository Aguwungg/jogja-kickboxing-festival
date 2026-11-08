"use client";

import { useState } from "react";
import { Plus, Minus, Search } from "lucide-react";
import { EVENT_CONFIG } from "@/lib/event-config";

export default function FaqClient() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("SEMUA");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const toggle = (i: number) => setOpenIdx(openIdx === i ? null : i);

  const rawFaqs = EVENT_CONFIG.faq;

  // Derive unique categories
  const categories = ["SEMUA", ...Array.from(new Set(rawFaqs.map((f) => f.category)))];

  const filteredFaqs = rawFaqs.filter((item) => {
    const matchesCat = selectedCategory === "SEMUA" || item.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="w-full space-y-8 max-w-5xl mx-auto">
      {/* ─── Apple Filter & Search Controls ─── */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Apple Segmented Pill Dock (Responsive Auto-Wrap) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#121214] border border-white/10 rounded-2xl sm:rounded-full">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-technical uppercase tracking-wider transition-all whitespace-nowrap ${
                  isActive
                    ? "bg-[#D91F2C] text-white shadow-lg shadow-red-950/40 font-bold"
                    : "text-[#86868B] hover:text-[#F5F5F7] hover:bg-white/[0.04]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Apple Glass Search Bar */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-[#86868B] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari pertanyaan..."
            className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#161617] border border-white/10 text-xs text-[#F5F5F7] placeholder-[#86868B] focus:outline-none focus:border-[#D91F2C] focus:ring-1 focus:ring-[#D91F2C] transition-all"
          />
        </div>
      </div>

      {/* ─── Apple Bento Accordion Cards ─── */}
      <div className="space-y-4">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-16 bg-[#161617] border border-white/[0.08] rounded-3xl">
            <p className="text-sm font-technical text-[#86868B] uppercase tracking-wider">
              Tidak ada pertanyaan yang sesuai dengan kata kunci Anda.
            </p>
          </div>
        ) : (
          filteredFaqs.map((item, i) => {
            const isOpen = openIdx === i;
            const num = String(i + 1).padStart(2, "0");

            return (
              <div
                key={i}
                className={`group transition-all duration-300 rounded-3xl border ${
                  isOpen
                    ? "bg-[#161617] border-white/20 shadow-xl"
                    : "bg-[#161617]/70 hover:bg-[#161617] border-white/[0.08] hover:border-white/15"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-start justify-between gap-6 p-6 sm:p-7 text-left focus:outline-none"
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    <span className="text-xs font-technical text-[#D91F2C] font-bold shrink-0 mt-1.5 px-2.5 py-1 rounded-full bg-[#D91F2C]/10 border border-[#D91F2C]/20">
                      {num}
                    </span>
                    <div>
                      <span className="text-lg sm:text-xl font-display uppercase tracking-wide text-[#F5F5F7] group-hover:text-white transition-colors leading-snug">
                        {item.q}
                      </span>
                      <div className="mt-1.5">
                        <span className="text-[10px] font-technical uppercase tracking-widest text-[#86868B]">
                          KATEGORI: {item.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  <span
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 ${
                      isOpen
                        ? "bg-[#D91F2C] text-white shadow-md shadow-red-950/40"
                        : "bg-white/[0.06] text-[#86868B] group-hover:text-white group-hover:bg-white/[0.12]"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 pt-1 border-t border-white/[0.06]">
                    <p className="text-sm sm:text-base text-[#C4C4CC] font-sans leading-relaxed max-w-3xl pl-0 sm:pl-12">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
