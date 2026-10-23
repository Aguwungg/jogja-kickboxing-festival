"use client";

import { useState } from "react";
import { Search, Plus, Minus } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
  category: "AKSES" | "COMBAT" | "FESTIVAL" | "ATURAN";
}

const FAQ_DATA: FaqItem[] = [
  {
    category: "AKSES",
    q: "Kapan jadwal resmi penjualan tiket diumumkan?",
    a: "Informasi resmi penjualan tiket masuk akan diumumkan secara terbuka oleh panitia pelaksana setelah integrasi sistem mitra resmi rampung. Saat ini pemesanan tiket belum dibuka.",
  },
  {
    category: "AKSES",
    q: "Apakah akses acara mencakup pertandingan dan konser musik?",
    a: "Festival JKBF 2026 mengusung konsep sportainment terpadu. Ketentuan hak akses harian dan terusan akan dirilis bersamaan dengan pengumuman skema tiket resmi.",
  },
  {
    category: "AKSES",
    q: "Bagaimana akses masuk ke lokasi GOR UNY?",
    a: "Seluruh pengunjung, kontingen, dan atlet dapat mengakses venue melalui Lobi Barat GOR UNY Jalan Colombo No. 1, Sleman, D.I. Yogyakarta.",
  },
  {
    category: "COMBAT",
    q: "Aturan pertandingan apa yang digunakan pada Redy Championship 2?",
    a: "Pertandingan menggunakan regulasi kickboxing K-1 Rules dengan wasit dan 3 dewan juri bersertifikasi independen. Sistem eliminasi murni 3 ronde x 3 menit.",
  },
  {
    category: "COMBAT",
    q: "Divisi apa saja yang dipertandingkan dalam kejuaraan ini?",
    a: "Redy Championship 2 mempertandingkan 4 divisi sabuk emas: Bantamweight (57.0 KG), Featherweight (60.0 KG), Lightweight (63.5 KG), dan Welterweight (70.0 KG).",
  },
  {
    category: "COMBAT",
    q: "Di mana saya dapat melihat daftar petarung dan bagan?",
    a: "Daftar petarung dan bagan turnamen resmi dapat diakses melalui menu 'Daftar Petarung' (/fighters) dan 'Bagan Turnamen' (/bracket) di website resmi ini.",
  },
  {
    category: "FESTIVAL",
    q: "Pukul berapa pintu masuk (open gate) dibuka setiap harinya?",
    a: "Pintu masuk utama dibuka 2 jam sebelum laga pertama dimulai. Jadwal operasional harian terinci dapat dipantau pada halaman Jadwal (/jadwal).",
  },
  {
    category: "FESTIVAL",
    q: "Apakah tersedia booth makanan dan merchandise di dalam venue?",
    a: "Ya. Di selasar GOR UNY tersedia official merchandise store serta area tenant makanan dan minuman bagi pengunjung.",
  },
  {
    category: "ATURAN",
    q: "Apa saja barang yang dilarang dibawa ke arena GOR UNY?",
    a: "Barang terlarang meliputi senjata tajam, senjata api, flare, laser pointer, botol kaca, minuman keras, zat terlarang, serta kamera profesional dengan lensa tele tanpa media pass resmi.",
  },
  {
    category: "ATURAN",
    q: "Apakah venue menyediakan akses ramah disabilitas?",
    a: "Ya. GOR UNY memiliki ramp akses kursi roda serta area khusus penonton disabilitas demi kenyamanan dan keselamatan seluruh pengunjung festival.",
  },
];

const CATEGORIES = [
  { key: "ALL", label: "SEMUA PERTANYAAN" },
  { key: "AKSES", label: "AKSES & KUNJUNGAN" },
  { key: "COMBAT", label: "PERTANDINGAN K-1" },
  { key: "FESTIVAL", label: "FESTIVAL MUSIK" },
  { key: "ATURAN", label: "REGULASI & KEAMANAN" },
];

export default function FaqClient() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openIndexes, setOpenIndexes] = useState<number[]>([0, 1]);

  const toggleAccordion = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const filteredFaqs = FAQ_DATA.filter((item) => {
    const matchesCat = activeCategory === "ALL" || item.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="w-full space-y-12 max-w-5xl mx-auto">
      
      {/* Search Bar & Category Filter Pills */}
      <div className="space-y-6 pb-8 border-b border-white/10">
        <div className="relative">
          <Search className="w-4 h-4 text-white/40 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari topik pertanyaan pintu masuk, jadwal, aturan WAKO..."
            className="w-full bg-[#121212] border border-white/10 pl-11 pr-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#D91F2C] transition-colors font-sans"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 text-xs font-technical uppercase tracking-wider transition-all border ${
                  isActive
                    ? "bg-[#D91F2C] text-white border-[#D91F2C]"
                    : "bg-[#141414] text-white/70 border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Accordion Rows */}
      {filteredFaqs.length === 0 ? (
        <div className="py-20 text-center border-t border-b border-white/10">
          <p className="text-sm text-white/50 font-sans">
            Tidak ada pertanyaan yang sesuai dengan kata kunci pencarian.
          </p>
        </div>
      ) : (
        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndexes.includes(index);
            const itemNumber = (index + 1).toString().padStart(2, "0");

            return (
              <div
                key={index}
                className={`py-6 sm:py-8 transition-colors ${
                  isOpen ? "bg-white/[0.02]" : "hover:bg-white/[0.01]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-start justify-between gap-6 text-left focus:outline-none group"
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <span className="text-sm font-technical text-white/30 shrink-0 mt-1">
                      {itemNumber}
                    </span>
                    <span className="text-xl sm:text-2xl font-display uppercase tracking-wide text-white group-hover:text-[#D91F2C] transition-colors leading-snug">
                      {faq.q}
                    </span>
                  </div>
                  <span className="p-1.5 border border-white/20 text-white shrink-0 mt-1 group-hover:border-[#D91F2C] transition-colors">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="pl-9 sm:pl-12 pr-6 pt-4 animate-fadeIn">
                    <p className="text-sm sm:text-base text-white/70 font-sans leading-relaxed max-w-3xl">
                      {faq.a}
                    </p>
                    <div className="mt-3 inline-block">
                      <span className="text-[10px] font-technical uppercase tracking-widest text-[#D91F2C] bg-[#D91F2C]/10 px-2 py-0.5 border border-[#D91F2C]/20">
                        {faq.category}
                      </span>
                    </div>
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
