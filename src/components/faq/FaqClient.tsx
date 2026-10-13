"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ChevronDown, ChevronUp, MessageSquare } from "lucide-react";

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
    <div className="w-full space-y-8 font-sans">
      
      {/* Search Input & Category Selector */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="w-4 h-4 text-[#8F8E8B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Ketik kata kunci pertanyaan..."
            className="w-full bg-[#141416] border border-white/10 pl-10 pr-4 py-3 text-xs text-[#F4F0E8] placeholder-[#5A5957] focus:outline-none focus:border-[#D91F2C]"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-white/10">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 text-xs font-display font-extrabold uppercase tracking-wider transition-colors whitespace-nowrap ${
                  isActive
                    ? "bg-[#D91F2C] text-white"
                    : "bg-[#141416] text-[#8F8E8B] hover:text-[#F4F0E8] border border-white/5"
                }`}
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* FAQ Accordion List */}
      {filteredFaqs.length === 0 ? (
        <div className="p-12 text-center bg-[#141416] border border-white/10 text-xs font-mono text-[#8F8E8B]">
          TIDAK ADA PERTANYAAN DITEMUKAN
        </div>
      ) : (
        <div className="border border-white/10 divide-y divide-white/10 bg-[#141416]">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndexes.includes(idx);

            return (
              <div key={faq.q} className="transition-colors hover:bg-white/[0.01]">
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] text-[#D91F2C] font-mono tracking-widest uppercase block">
                      {faq.category}
                    </span>
                    <h3
                      className="font-display font-black text-lg sm:text-xl text-[#F4F0E8] uppercase"
                      style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                    >
                      {faq.q}
                    </h3>
                  </div>
                  <div className="text-[#8F8E8B] mt-1 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 border-t border-white/5 text-xs text-[#8F8E8B] font-sans leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Contact Callout */}
      <div className="p-6 bg-[#141416] border-l-2 border-[#D91F2C] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h4 className="font-display font-black text-base text-[#F4F0E8] uppercase">
            MASIH MEMILIKI PERTANYAAN LAIN?
          </h4>
          <p className="text-xs text-[#8F8E8B]">
            Sekretariat resmi festival siap menjawab kebutuhan informasi tiket dan kemitraan Anda.
          </p>
        </div>
        <Link
          href="/kontak"
          className="v9-btn-ghost text-xs font-display font-extrabold tracking-wider whitespace-nowrap"
        >
          <span>HUBUNGI KAMI ↗</span>
        </Link>
      </div>

    </div>
  );
}
