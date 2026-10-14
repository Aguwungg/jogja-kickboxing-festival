"use client";

import { useState } from "react";
import { Search, Plus, Minus } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
  category: "TIKET" | "COMBAT" | "FESTIVAL" | "ATURAN";
}

const FAQ_DATA: FaqItem[] = [
  {
    category: "TIKET",
    q: "Bagaimana informasi pembelian tiket resmi JKBF 2026?",
    a: "Informasi resmi penjualan tiket akan diumumkan oleh panitia pelaksana. Penjualan tiket akan difasilitasi melalui platform ticketing mitra RAWOOH tanpa perantara tidak resmi.",
  },
  {
    category: "TIKET",
    q: "Apakah tiket festival mencakup pertandingan dan konser musik?",
    a: "Festival JKBF 2026 mengusung konsep sportainment terpadu. Detail ketentuan hak akses harian (Daily Pass) atau terusan (All-Access Pass) akan dirilis bersamaan dengan skema tiket resmi.",
  },
  {
    category: "TIKET",
    q: "Bagaimana mekanisme penukaran tiket di lokasi GOR UNY?",
    a: "Seluruh e-voucher resmi wajib ditukarkan dengan gelang tanda masuk fisik di loket verifikasi lobi barat GOR UNY sebelum memasuki arena pertandingan.",
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
  { key: "ALL", label: "SEMUA KATEGORI" },
  { key: "TIKET", label: "TIKET & AKSES" },
  { key: "COMBAT", label: "PERTANDINGAN" },
  { key: "FESTIVAL", label: "FESTIVAL MUSIK" },
  { key: "ATURAN", label: "ATURAN & KESELAMATAN" },
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
    <div className="w-full space-y-10 font-sans max-w-4xl mx-auto">
      
      {/* Category Pills & Search */}
      <div className="space-y-6 pb-6 border-b border-black/10">
        <div className="relative">
          <Search className="w-4 h-4 text-[#8F8E8B] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari pertanyaan, topik tiket, aturan..."
            className="w-full bg-white/70 border border-black/20 pl-11 pr-4 py-3 text-xs text-[#0B0B0B] placeholder-[#8F8E8B] focus:outline-none focus:border-[#D91F2C]"
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
                className={`px-4 py-2 text-xs font-display font-black uppercase tracking-wider transition-all ${
                  isActive
                    ? "bg-[#0B0B0B] text-white"
                    : "bg-transparent text-[#0B0B0B] hover:bg-black/5 border border-black/20"
                }`}
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Accordion Rows */}
      {filteredFaqs.length === 0 ? (
        <div className="py-20 text-center border-t border-b border-black/10">
          <p className="text-sm text-[#5A5957]">
            Tidak ada pertanyaan yang sesuai dengan kata kunci pencarian.
          </p>
        </div>
      ) : (
        <div className="border-t border-black/10 divide-y divide-black/10">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <div key={index} className="py-6 sm:py-8 transition-colors">
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-start justify-between gap-6 text-left focus:outline-none"
                >
                  <span
                    className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#0B0B0B]"
                    style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                  >
                    {faq.q}
                  </span>
                  <span className="p-1 border border-black/20 rounded-none text-[#0B0B0B] shrink-0 mt-0.5">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>

                {isOpen && (
                  <p className="mt-4 text-xs sm:text-sm text-[#5A5957] font-sans leading-relaxed max-w-2xl">
                    {faq.a}
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
