"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ChevronDown, HelpCircle, MessageSquare } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
  category: "TIKET" | "COMBAT" | "FESTIVAL" | "ATURAN" | "PPV";
}

const FAQ_DATA: FaqItem[] = [
  {
    category: "TIKET",
    q: "Bagaimana cara membeli tiket Jogja Kickboxing Festival 2026?",
    a: "Tiket resmi dapat dibeli secara online melalui platform tiket mitra resmi Rawooh yang ditautkan di website resmi ini, atau secara on-the-spot (OTS) di Ticket Box GOR Among Rogo selama kuota harian masih tersedia.",
  },
  {
    category: "TIKET",
    q: "Apakah tiket festival berlaku untuk menonton pertandingan kickboxing dan konser musik sekaligus?",
    a: "Ya! Tiket Festival Pass (Day Pass maupun 3-Day Pass) memberikan akses penuh ke seluruh zona: area tribun pertandingan The Ring, panggung festival The Stage, serta F&B Street Plaza.",
  },
  {
    category: "TIKET",
    q: "Apakah anak-anak dikenakan biaya tiket masuk?",
    a: "Anak-anak berusia di bawah 5 tahun dapat masuk gratis dengan pendampingan orang tua/wali (tanpa nomor kursi terpisah). Demi kenyamanan dan keselamatan pendengaran anak, disarankan menggunakan pelindung telinga (earmuffs) di area panggung konser.",
  },
  {
    category: "COMBAT",
    q: "Aturan pertandingan apa yang digunakan pada Redy Championship 2?",
    a: "Pertandingan menggunakan regulasi Full Contact K-1 Kickboxing Rules dengan dewan juri dan wasit berlisensi resmi. Ronde terdiri dari 3 ronde x 3 menit untuk partai profesional, dan 3 ronde x 2 menit untuk partai amatir dengan jeda istirahat 1 menit.",
  },
  {
    category: "COMBAT",
    q: "Berapa banyak atlet yang bertanding dalam kejuaraan ini?",
    a: "Terdapat lebih dari 80 atlet terdaftar yang mewakili puluhan sasana/camp dari berbagai penjuru tanah air, memperebutkan 4 sabuk kejuaraan utama di divisi Bantamweight, Featherweight, Lightweight, dan Welterweight.",
  },
  {
    category: "COMBAT",
    q: "Di mana saya bisa melihat profil dan statistik rekor atlet?",
    a: "Anda dapat melihat rekor kemenangan, statistik jangkauan, dan biografi petarung secara langsung di menu 'Fighter Center' pada website ini.",
  },
  {
    category: "FESTIVAL",
    q: "Pukul berapa pintu masuk (open gate) dibuka setiap harinya?",
    a: "Gerbang utama festival dibuka mulai pukul 09:00 WIB untuk sesi timbang badan dan pertandingan penyisihan, dan beroperasi hingga pukul 23:30 WIB setiap harinya.",
  },
  {
    category: "FESTIVAL",
    q: "Apakah diperbolehkan membawa makanan dan minuman dari luar?",
    a: "Penonton dilarang membawa makanan dan minuman dari luar ke dalam area stadion. Namun, di dalam area Plaza Festival tersedia puluhan tenant F&B UMKM lokal pilihan dengan harga terjangkau dan pembayaran tunai maupun QRIS.",
  },
  {
    category: "ATURAN",
    q: "Apa saja barang yang dilarang dibawa ke dalam arena GOR Among Rogo?",
    a: "Barang terlarang meliputi: senjata tajam, senjata api, flare/kembang api/laser pointer, botol kaca/kaleng, minuman beralkohol, obat-obatan terlarang, helm, tongkat selfie/tripod profesional tanpa kartu pers resmi, serta hewan peliharaan.",
  },
  {
    category: "ATURAN",
    q: "Apakah area festival ramah bagi pengguna kursi roda?",
    a: "Tentu. GOR Among Rogo dilengkapi ramp akses di pintu selatan untuk memudahkan penonton pengguna kursi roda, serta tribun khusus dengan pandangan bebas hambatan ke arah ring.",
  },
  {
    category: "PPV",
    q: "Apa itu BigMo PPV dan bagaimana cara menontonnya jika tidak bisa hadir langsung?",
    a: "Bagi pendukung yang berada di luar Yogyakarta atau luar negeri, partai ekshibisi spesial BigMo dan pertandingan semifinal/final disiarkan secara eksklusif melalui Pay-Per-View (PPV) resmi berdefinisi tinggi di website ini dengan biaya terjangkau Rp10.000.",
  },
  {
    category: "PPV",
    q: "Apakah siaran PPV dapat ditonton ulang setelah acara selesai?",
    a: "Ya. Setiap pembelian tiket digital PPV mencakup hak akses siaran langsung (live streaming) serta tayangan ulang (VOD replay) selama 7 hari kalender setelah turnamen berakhir.",
  },
];

const CATEGORIES = [
  { key: "ALL", label: "Semua Kategori" },
  { key: "TIKET", label: "Tiket & Akses" },
  { key: "COMBAT", label: "Pertandingan & Atlet" },
  { key: "FESTIVAL", label: "Festival Musik" },
  { key: "ATURAN", label: "Aturan & Keamanan" },
  { key: "PPV", label: "PPV BigMo" },
];

export default function FaqClient() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openIndexes, setOpenIndexes] = useState<number[]>([0, 1]); // Open first two by default

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
          placeholder="Cari pertanyaan... (contoh: tiket, aturan, jam buka, makanan, ppv)"
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
            PERTANYAAN TIDAK DITEMUKAN
          </h4>
          <p className="text-[#99999F] text-sm font-sans mb-4">
            Tidak ada jawaban yang sesuai dengan kata kunci pencarian Anda.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setActiveCategory("ALL");
            }}
            className="text-xs uppercase tracking-widest text-[#EF3340] font-bold hover:underline"
          >
            Reset Pencarian
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <div
                key={index}
                className={`border rounded-sm transition-all overflow-hidden ${
                  isOpen
                    ? "bg-[#171719] border-white/25 shadow-sm"
                    : "bg-[#171719]/50 border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-sans font-bold text-white text-base sm:text-lg"
                >
                  <span className="leading-snug">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-white/50 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#EF3340]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-[#99999F] font-sans leading-relaxed border-t border-white/5">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Help CTA Box */}
      <div className="mt-12 bg-gradient-to-r from-[#171719] to-[#171719]/80 border border-white/10 p-8 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h4
            className="text-xl sm:text-2xl font-black uppercase text-white mb-1 tracking-tight"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            MASIH MEMILIKI PERTANYAAN LAIN?
          </h4>
          <p className="text-xs sm:text-sm text-[#99999F] font-sans">
            Tim panitia dan layanan penonton JKB 2026 siap membantu menjawab pertanyaan Anda.
          </p>
        </div>

        <Link
          href="/kontak"
          className="shrink-0 inline-flex items-center gap-2 bg-[#D91F2C] hover:bg-[#EF3340] text-white px-6 py-3 rounded-sm font-bold text-xs uppercase tracking-widest transition-all"
        >
          <MessageSquare className="w-4 h-4" />
          <span>HUBUNGI PANITIA</span>
        </Link>
      </div>
    </div>
  );
}
