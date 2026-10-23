"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, User, ChevronLeft, ChevronRight, Filter, ShieldCheck } from "lucide-react";

export type Fighter = {
  id: string;
  name: string;
  slug: string;
  division: string;
  weightClass: string;
  club: string | null;
  category: "KEJURDA" | "CAMP_OPEN" | "STUDENT" | "PARTAI_BINTANG";
  categoryLabel: string;
  image: string | null;
  status: "TERVERIFIKASI" | "MENUNGGU_TIMBANG_BADAN";
};

interface FighterCenterClientProps {
  initialFighters: Fighter[];
}

const ITEMS_PER_PAGE = 16;

export default function FighterCenterClient({ initialFighters }: FighterCenterClientProps) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Filter & Search
  const filteredFighters = useMemo(() => {
    return initialFighters.filter((f) => {
      const matchCategory = selectedCategory === "ALL" || f.category === selectedCategory;
      const matchQuery =
        search === "" ||
        f.name.toLowerCase().includes(search.toLowerCase()) ||
        (f.club && f.club.toLowerCase().includes(search.toLowerCase())) ||
        f.weightClass.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchQuery;
    });
  }, [initialFighters, search, selectedCategory]);

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(filteredFighters.length / ITEMS_PER_PAGE));
  const paginatedFighters = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredFighters.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredFighters, currentPage]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (val: string) => {
    setSearch(val);
    setCurrentPage(1);
  };

  return (
    <div className="w-full space-y-8 font-sans">
      
      {/* Search & Category Filter Toolbar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-4 sm:p-5 bg-[#141416] border border-white/10">
        
        {/* Search Input */}
        <div className="relative w-full lg:max-w-md">
          <input
            type="text"
            placeholder="Cari nama atlet, sasana, atau kelas berat..."
            value={search}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full bg-[#0B0B0B] border border-white/15 px-3.5 py-2.5 pl-10 text-xs sm:text-sm text-white placeholder:text-[#77716D] focus:outline-none focus:border-[#D91F2C]"
          />
          <Search className="w-4 h-4 text-[#77716D] absolute left-3.5 top-1/2 -translate-y-1/2" />
          {search && (
            <button
              onClick={() => handleSearchChange("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#77716D] hover:text-white"
            >
              ✕
            </button>
          )}
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 lg:pb-0">
          {[
            { id: "ALL", label: "SEMUA ATLET" },
            { id: "KEJURDA", label: "KEJURDA DIY" },
            { id: "CAMP_OPEN", label: "CAMP OPEN" },
            { id: "STUDENT", label: "SMA & MAHASISWA" },
            { id: "PARTAI_BINTANG", label: "PARTAI BINTANG" },
          ].map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-3 py-1.5 font-display text-xs sm:text-sm tracking-wider uppercase transition-colors whitespace-nowrap border ${
                  isActive
                    ? "bg-[#D91F2C] text-white border-[#D91F2C] font-bold"
                    : "bg-[#0B0B0B] text-[#8F8E8B] hover:text-white border-white/10"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

      </div>

      {/* Roster Counter & Accreditation Notice */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-technical text-[#77716D] px-1">
        <p>
          MENAMPILKAN <span className="text-[#F4F0E8] font-bold">{filteredFighters.length} ATLET</span> DARI ESTIMASI ~200 PESERTA RESMI
        </p>
        <p className="flex items-center gap-1.5 text-[#8F8E8B]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#D91F2C]" />
          <span>VERIFIKASI TIMBANG BADAN: 10 DESEMBER 2026 (GOR UNY)</span>
        </p>
      </div>

      {/* Athletes Responsive Grid (UFC / ONE Hairline Aesthetic) */}
      {paginatedFighters.length === 0 ? (
        <div className="py-20 text-center border border-white/10 bg-[#121214] p-8 space-y-3">
          <User className="w-10 h-10 text-[#77716D] mx-auto opacity-50" />
          <h3 className="font-display text-2xl uppercase tracking-wider text-white">
            ATLET TIDAK DITEMUKAN
          </h3>
          <p className="text-xs text-[#8F8E8B] max-w-sm mx-auto">
            Tidak ada atlet yang sesuai dengan kata kunci atau kategori filter yang dipilih.
          </p>
          <button
            onClick={() => {
              setSearch("");
              setSelectedCategory("ALL");
              setCurrentPage(1);
            }}
            className="mt-3 px-4 py-2 bg-[#D91F2C] text-white font-display text-xs uppercase tracking-wider font-bold"
          >
            RESET PENCARIAN
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {paginatedFighters.map((fighter) => (
            <div
              key={fighter.id}
              className="group flex flex-col bg-[#141416] border border-white/10 hover:border-[#D91F2C] transition-all overflow-hidden"
            >
              {/* 4:5 Photo Frame with Neutral Silhouette Placeholder */}
              <div className="relative aspect-[4/5] w-full bg-[#1A1A1D] overflow-hidden">
                {fighter.image ? (
                  <Image
                    src={fighter.image}
                    alt={fighter.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover object-top filter grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-[#18181B] text-[#77716D]">
                    <User className="w-12 h-12 stroke-[1.2] text-[#55524E] group-hover:text-[#D91F2C] transition-colors" />
                    <span className="font-technical text-[9px] uppercase tracking-widest mt-2 text-[#77716D]">
                      VERIFIED ATLET
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-80" />

                {/* Weight Tag */}
                <span className="absolute top-2.5 right-2.5 bg-[#0B0B0B]/85 backdrop-blur-sm text-white font-technical text-[9px] uppercase font-bold px-2 py-0.5 border border-white/15">
                  {fighter.weightClass}
                </span>

                {/* Category Badge */}
                <span className="absolute bottom-2.5 left-2.5 text-[#D91F2C] font-technical text-[9px] uppercase font-bold tracking-wider bg-[#0B0B0B]/90 px-2 py-0.5 border border-[#D91F2C]/40">
                  {fighter.categoryLabel}
                </span>
              </div>

              {/* Details Block */}
              <div className="p-3.5 sm:p-4 flex flex-col justify-between flex-1 space-y-2 bg-[#141416]">
                <div>
                  <h3 className="font-display text-lg sm:text-xl uppercase tracking-wider text-white group-hover:text-[#D91F2C] transition-colors line-clamp-1 leading-snug">
                    {fighter.name}
                  </h3>
                  <p className="font-technical text-[10px] text-[#8F8E8B] uppercase line-clamp-1 mt-0.5">
                    {fighter.club || "Kontingen Resmi KBI"}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-[10px] font-technical">
                  <span className="text-[#77716D] uppercase">STATUS:</span>
                  <span className="text-[#F4F0E8] font-bold bg-white/5 px-2 py-0.5 border border-white/10">
                    {fighter.status === "TERVERIFIKASI" ? "TERVERIFIKASI" : "WEIGH-IN 10 DES"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination Controls (16 Items / Page) */}
      {totalPages > 1 && (
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-technical text-xs">
          <p className="text-[#77716D]">
            HALAMAN <span className="text-white font-bold">{currentPage}</span> DARI <span className="text-white font-bold">{totalPages}</span>
          </p>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-3.5 py-2 bg-[#141416] border border-white/10 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 inline-flex items-center gap-1 font-display tracking-wider uppercase text-sm"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>SEBELUMNYA</span>
            </button>

            <div className="hidden sm:flex items-center gap-1">
              {[...Array(totalPages)].map((_, i) => {
                const pageNum = i + 1;
                const isCurrent = currentPage === pageNum;
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-8 h-8 font-display text-xs ${
                      isCurrent
                        ? "bg-[#D91F2C] text-white font-bold"
                        : "bg-[#141416] text-[#8F8E8B] hover:text-white border border-white/10"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-3.5 py-2 bg-[#141416] border border-white/10 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 inline-flex items-center gap-1 font-display tracking-wider uppercase text-sm"
            >
              <span>SELANJUTNYA</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
