"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ChevronDown, HelpCircle, MessageSquare } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
  category: "TIKET" | "COMBAT" | "FESTIVAL" | "ATURAN";
}

const FAQ_DATA: FaqItem[] = [
  {
    category: "TIKET",
    q: "Bagaimana informasi pembelian tiket resmi JKB 2026?",
    a: "Informasi resmi penjualan tiket akan diumumkan oleh panitia pelaksana. Akses tiket akan difasilitasi melalui platform ticketing resmi terverifikasi tanpa perantara calo.",
  },
  {
    category: "TIKET",
    q: "Apakah tiket festival mencakup pertandingan dan konser musik?",
    a: "Festival JKB 2026 mengusung konsep sportainment terpadu. Detail ketentuan hak akses harian atau terusan akan dirilis bersamaan dengan pengumuman skema tiket resmi.",
  },
  {
    category: "TIKET",
    q: "Bagaimana verifikasi tiket di lokasi GOR UNY?",
    a: "Seluruh e-voucher resmi wajib ditukarkan dengan gelang tanda masuk fisik di loket verifikasi pintu masuk GOR UNY sebelum memasuki arena.",
  },
  {
    category: "COMBAT",
    q: "Aturan pertandingan apa yang digunakan pada Redy Championship 2?",
    a: "Pertandingan menggunakan regulasi kickboxing resmi dengan wasit dan dewan juri bersertifikasi. Terdapat pembagian kelas pertandingan amatir dan profesional.",
  },
  {
    category: "COMBAT",
    q: "Divisi apa saja yang dipertandingkan dalam kejuaraan ini?",
    a: "Redy Championship 2 mempertandingkan partai kejuaraan di berbagai divisi kelas berat resmi, memperebutkan sabuk juara festival.",
  },
  {
    category: "COMBAT",
    q: "Di mana saya dapat melihat daftar petarung?",
    a: "Daftar petarung dan data atlet yang telah terverifikasi komite dapat diakses langsung melalui menu 'Pertandingan' atau 'Daftar Petarung' di website ini.",
  },
  {
    category: "FESTIVAL",
    q: "Pukul berapa pintu masuk (open gate) dibuka?",
    a: "Jadwal resmi jam buka pintu masuk (open gate) setiap harinya akan diumumkan secara resmi oleh panitia pelaksana menyesuaikan rangkaian sesi laga.",
  },
  {
    category: "FESTIVAL",
    q: "Apakah tersedia area makanan dan minuman di dalam venue?",
    a: "Ya, area festival menyediakan tenant makanan dan minuman bagi pengunjung. Makanan dan minuman luar dilarang dibawa ke dalam arena pertandingan.",
  },
  {
    category: "ATURAN",
    q: "Apa saja barang yang dilarang dibawa ke arena GOR UNY?",
    a: "Barang terlarang meliputi senjata tajam, senjata api, bahan peledak/flare/laser pointer, botol kaca, minuman beralkohol, zat terlarang, serta kamera profesional tanpa izin peliputan resmi.",
  },
  {
    category: "ATURAN",
    q: "Apakah venue menyediakan akses ramah disabilitas?",
    a: "Ya. GOR UNY memiliki jalur ramp akses bagi pengguna kursi roda serta area khusus penonton disabilitas demi kenyamanan dan keselamatan seluruh pengunjung.",
  },
];

const CATEGORIES = [
  { key: "ALL", label: "Semua Kategori" },
  { key: "TIKET", label: "Tiket & Akses" },
  { key: "COMBAT", label: "Pertandingan" },
  { key: "FESTIVAL", label: "Festival Musik" },
  { key: "ATURAN", label: "Aturan & Keselamatan" },
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
    <div className="w-full">
      {/* Search Input */}
      <div className="relative mb-6">
        <Search className="w-5 h-5 text-white/40 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Cari pertanyaan... (contoh: tiket, aturan, jam buka, barang dilarang)"
          className="w-full bg-[#171719] border border-white/10 rounded-sm pl-12 pr-4 py-3.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#D91F2C] transition-colors font-sans"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-white/50 hover:text-white"
          >
            Hapus
          </button>
        )}
      </div>

      {/* Category Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
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

      {/* Accordion List */}
      {filteredFaqs.length === 0 ? (
        <div className="bg-[#171719] border border-white/10 p-12 text-center rounded-sm">
          <HelpCircle className="w-10 h-10 text-white/30 mx-auto mb-3" />
          <h4
            className="text-xl font-black uppercase text-white mb-2"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            TIDAK MENEMUKAN JAWABAN
          </h4>
          <p className="text-[#99999F] text-sm font-sans mb-4">
            Pertanyaan yang Anda cari belum tersedia. Silakan hubungi sekretariat panitia pelaksana.
          </p>
          <Link
            href="/kontak"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#D91F2C] hover:underline"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Kirim Pesan ke Panitia</span>
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <div
                key={index}
                className="bg-[#171719] border border-white/10 rounded-sm overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-[#D91F2C] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#99999F] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#D91F2C]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-[#99999F] font-sans leading-relaxed border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Contact CTA */}
      <div className="mt-12 p-6 sm:p-8 bg-[#171719] border border-white/10 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4
            className="text-xl font-black uppercase text-white mb-1"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            PUNYA PERTANYAAN LAIN?
          </h4>
          <p className="text-xs text-[#99999F] font-sans">
            Tim sekretariat JKB 2026 siap menjawab pertanyaan seputar festival dan kemitraan.
          </p>
        </div>
        <Link
          href="/kontak"
          className="font-display font-bold text-xs uppercase tracking-widest px-5 py-3 bg-[#D91F2C] hover:bg-[#EF3340] text-white rounded-sm transition-all shrink-0"
          style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
        >
          Hubungi Sekretariat
        </Link>
      </div>
    </div>
  );
}
