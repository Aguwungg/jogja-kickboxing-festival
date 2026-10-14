import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { EVENT_CONFIG } from "@/lib/event-config";

export const metadata = {
  title: "Panduan Lokasi & Akses GOR UNY | JKBF 2026",
  description: "Informasi resmi lokasi, denah, akses transportasi, dan panduan kunjungan ke GOR UNY Yogyakarta untuk Jogja Kickboxing Festival 2026.",
};

const ACCESS_OPTIONS = [
  {
    number: "01",
    title: "Kereta Api & KRL Commuter",
    desc: "Akses cepat dari Stasiun Lempuyangan (±10 menit berkendara) atau Stasiun Yogyakarta / Tugu (±15 menit berkendara) langsung menuju GOR UNY.",
  },
  {
    number: "02",
    title: "Trans Jogja (Halte UNY Colombo)",
    desc: "Terhubung jaringan bus Trans Jogja rute koridor Colombo. Turun di halte utama kampus Universitas Negeri Yogyakarta.",
  },
  {
    number: "03",
    title: "Transportasi Online & Kendaraan Pribadi",
    desc: "Titik penurunan (drop-off point) resmi berada di lobi barat GOR UNY, Jalan Colombo Yogyakarta. Kantong parkir resmi tersedia di area kampus.",
  },
  {
    number: "04",
    title: "Akses Masuk & Penukaran Gelang",
    desc: "Penukaran tiket menjadi wristband resmi bertempat di Ticket Box Barat. Gerbang arena pertandingan dibuka mulai pukul 09:30 WIB setiap hari.",
  },
];

export default function VenuePage() {
  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#F4F0E8] text-[#0B0B0B] pt-24 lg:pt-28 pb-24">
      
      {/* ═════════════════════════════════════════════════════════════════════
          1. EDITORIAL SPLIT VENUE HERO
      ═════════════════════════════════════════════ */}
      <section className="relative w-full border-b border-black/10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 min-h-[480px] lg:min-h-[540px]">
          
          <div className="lg:col-span-7 py-12 lg:py-20 flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D91F2C]" />
              <p className="font-technical text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
                LOKASI RESMI • VENUE ARENA
              </p>
            </div>

            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tight leading-[0.85] text-[#0B0B0B]">
              GOR UNY.<br />
              YOGYAKARTA.
            </h1>

            <p className="text-sm sm:text-base text-[#5A5957] font-sans max-w-lg leading-relaxed">
              Satu gelanggang. Pertandingan kickboxing profesional, panggung festival musik, dan gerakan pemuda di jantung kota pelajar.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={EVENT_CONFIG.venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-base tracking-wider uppercase text-white bg-[#0B0B0B] hover:bg-black px-7 py-3.5 transition-colors inline-flex items-center gap-2 ring-1 ring-black"
              >
                <span>BUKA GOOGLE MAPS</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <Link
                href="/tiket"
                className="font-display text-base tracking-wider uppercase text-[#0B0B0B] hover:text-[#D91F2C] px-6 py-3.5 transition-colors inline-flex items-center gap-2 border border-black/25"
              >
                <span>INFO TIKET</span>
                <span className="font-technical text-xs">↗</span>
              </Link>
            </div>
          </div>

          {/* Minimalist Visual Badge Right */}
          <div className="lg:col-span-5 flex items-center justify-center py-12 lg:py-0 border-t lg:border-t-0 lg:border-l border-black/15">
            <div className="w-60 h-60 sm:w-72 sm:h-72 rounded-full border border-black/25 flex flex-col items-center justify-center p-6 text-center bg-white shadow-sm ring-corner-frame">
              <span className="text-[10px] font-technical uppercase tracking-widest text-[#D91F2C] font-bold block mb-1">
                GELANGGANG UTAMA
              </span>
              <h3 className="font-display text-4xl sm:text-5xl uppercase text-[#0B0B0B] tracking-wider leading-none">
                GOR UNY
              </h3>
              <p className="font-technical text-xs text-[#77716D] mt-2">
                COLOMBO, YOGYAKARTA
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. ACCESS GUIDE IN SPACIOUS ROWS
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-20 w-full space-y-12">
        <div className="space-y-3">
          <p className="font-technical text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
            PANDUAN TRANSPORTASI & KUNJUNGAN
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#0B0B0B]">
            AKSES MENUJU ARENA.
          </h2>
          <p className="text-sm text-[#5A5957] font-sans max-w-xl">
            {EVENT_CONFIG.venue.address}
          </p>
        </div>

        {/* Clean Access Rows */}
        <div className="border-t border-black/15 divide-y divide-black/15">
          {ACCESS_OPTIONS.map((item) => (
            <div
              key={item.number}
              className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-baseline transition-colors hover:bg-black/[0.02] px-2"
            >
              <span className="font-technical text-sm sm:text-base font-bold text-[#D91F2C] md:col-span-1">
                {item.number}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-[#0B0B0B] md:col-span-4">
                {item.title}
              </h3>
              <p className="text-sm text-[#5A5957] md:col-span-7 font-sans leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Access Rules */}
        <div className="pt-10 border-t border-black/15 flex flex-col sm:flex-row justify-between gap-4 text-xs font-technical text-[#77716D]">
          <p>DILARANG MEMBAWA SENJATA, BOTOL KACA, ATAU BENDA BERBAHAYA KE DALAM ARENA.</p>
          <p>FASILITAS PARKIR RESMI TERSEDIA DI KAWASAN KAMPUS UNY COLOMBO.</p>
        </div>
      </section>

    </main>
  );
}
