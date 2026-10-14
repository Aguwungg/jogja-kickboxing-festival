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
    title: "Transportasi Online & Mobil Pribadi",
    desc: "Titik penurunan (drop-off point) resmi berada di lobi barat GOR UNY, Jalan Colombo Yogyakarta. Kantong parkir resmi tersedia di area kampus.",
  },
  {
    number: "04",
    title: "Akses Pintu Masuk & Penukaran Gelang",
    desc: "Penukaran tiket menjadi wristband resmi bertempat di Ticket Box Barat. Gerbang arena pertandingan dibuka mulai 09:30 WIB.",
  },
];

export default function VenuePage() {
  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#F4F0E8] text-[#0B0B0B] pt-24 lg:pt-28 pb-24">
      
      {/* ═════════════════════════════════════════════════════════════════════
          1. EDITORIAL SPLIT VENUE HERO (Matches 14_venue.png)
      ═════════════════════════════════════════════ */}
      <section className="relative w-full border-b border-black/10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 min-h-[480px] lg:min-h-[540px]">
          
          <div className="lg:col-span-7 py-12 lg:py-20 flex flex-col justify-center space-y-6">
            <p
              className="text-[#D91F2C] text-xs sm:text-sm font-extrabold uppercase tracking-[0.24em]"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              KUNJUNGI JOGJA • VENUE RESMI
            </p>

            <h1
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight leading-[0.88] text-[#0B0B0B]"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              GOR UNY.<br />
              YOGYAKARTA.
            </h1>

            <p className="text-sm sm:text-base text-[#5A5957] font-sans max-w-lg leading-relaxed">
              Satu lokasi. Pertandingan kickboxing profesional, panggung festival musik, dan gerakan pemuda di jantung kota pelajar.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={EVENT_CONFIG.venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display font-extrabold text-xs sm:text-sm uppercase tracking-wider text-white bg-[#0B0B0B] hover:bg-black px-7 py-3.5 transition-colors inline-flex items-center gap-2"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                <span>BUKA GOOGLE MAPS</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <Link
                href="/tiket"
                className="font-display font-bold text-xs sm:text-sm uppercase tracking-wider text-[#0B0B0B] hover:text-[#D91F2C] px-5 py-3.5 transition-colors inline-flex items-center gap-1.5 border border-black/20"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                <span>INFO TIKET ↗</span>
              </Link>
            </div>
          </div>

          {/* Minimalist Visual Badge Right */}
          <div className="lg:col-span-5 flex items-center justify-center py-12 lg:py-0 border-t lg:border-t-0 lg:border-l border-black/10">
            <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full border border-black/20 flex flex-col items-center justify-center p-6 text-center bg-white/40 shadow-sm">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D91F2C] font-bold block mb-1">
                ARENA UTAMA
              </span>
              <h3
                className="text-3xl sm:text-4xl font-black uppercase text-[#0B0B0B] tracking-tight leading-none"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                GOR UNY
              </h3>
              <p className="text-[11px] text-[#5A5957] font-mono mt-2">
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
          <p
            className="text-[#D91F2C] text-xs font-extrabold uppercase tracking-[0.24em]"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            PANDUAN TRANSPORTASI & KUNJUNGAN
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#0B0B0B]"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            AKSES MENUJU ARENA.
          </h2>
          <p className="text-sm text-[#5A5957] font-sans max-w-xl">
            {EVENT_CONFIG.venue.address}
          </p>
        </div>

        {/* Clean Access Rows */}
        <div className="border-t border-black/10 divide-y divide-black/10">
          {ACCESS_OPTIONS.map((item) => (
            <div
              key={item.number}
              className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-baseline transition-colors hover:bg-black/[0.02]"
            >
              <span className="text-[#D91F2C] font-mono text-sm sm:text-base font-bold md:col-span-1">
                {item.number}
              </span>
              <h3
                className="text-xl sm:text-2xl font-black uppercase text-[#0B0B0B] md:col-span-4"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                {item.title}
              </h3>
              <p className="text-sm text-[#5A5957] md:col-span-7 font-sans leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Access Rules */}
        <div className="pt-10 border-t border-black/10 flex flex-col sm:flex-row justify-between gap-4 text-xs font-mono text-[#8F8E8B]">
          <p>DILARANG MEMBAWA SENJATA, BOTOL KACA, ATAU BENDA BERBAHAYA KE DALAM ARENA.</p>
          <p>FASILITAS PARKIR TERSEDIA DI KAWASAN KAMPUS UNY COLOMBO.</p>
        </div>
      </section>

    </main>
  );
}
