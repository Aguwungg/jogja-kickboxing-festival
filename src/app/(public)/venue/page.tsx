import Link from "next/link";
import { MapPin, Navigation, Bus, Train, ExternalLink, Calendar, ShieldCheck } from "lucide-react";
import { EVENT_CONFIG } from "@/lib/event-config";

export const metadata = {
  title: "Panduan Lokasi & Akses GOR UNY | JKBF 2026",
  description: "Informasi resmi lokasi, denah, akses transportasi, dan panduan kunjungan ke GOR UNY Yogyakarta untuk Jogja Kickboxing Festival 2026.",
};

const ACCESS_OPTIONS = [
  {
    icon: Train,
    number: "01",
    title: "Kereta Api & KRL Commuter",
    desc: "Akses cepat dari Stasiun Lempuyangan (±10 menit berkendara) atau Stasiun Yogyakarta / Tugu (±15 menit berkendara langsung menuju GOR UNY).",
  },
  {
    icon: Bus,
    number: "02",
    title: "Trans Jogja (Halte UNY)",
    desc: "Terhubung jaringan bus Trans Jogja rute koridor Colombo. Turun di halte halte utama kampus Universitas Negeri Yogyakarta.",
  },
  {
    icon: Navigation,
    number: "03",
    title: "Transportasi Daring & Kendaraan Pribadi",
    desc: "Titik penurunan (drop-off point) resmi berada di lobi barat GOR UNY, Jalan Colombo Yogyakarta. Kantong parkir resmi tersedia di area kampus.",
  },
];

export default function VenuePage() {
  return (
    <main className="flex-1 flex flex-col w-full min-h-screen text-[#F4F0E8] bg-[#0B0B0B] pt-24 pb-20">
      
      {/* Editorial Header */}
      <section className="relative w-full border-b border-white/10 py-16 md:py-24 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="v9-overline text-[#D91F2C]">
            VENUE & AKSES KUNJUNGAN
          </span>

          <h1
            className="v9-display-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F4F0E8]"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            GOR UNY, YOGYAKARTA
          </h1>

          <p className="text-base sm:text-lg text-[#F4F0E8] font-bold uppercase tracking-wider font-display">
            PANDUAN LOKASI DAN DENAH RESMI FESTIVAL
          </p>

          <p className="text-xs sm:text-sm text-[#8F8E8B] max-w-2xl leading-relaxed font-sans">
            Gelanggang Olahraga Universitas Negeri Yogyakarta menjadi arena utama seluruh pertarungan kickboxing Redy Championship 2 dan panggung musik JKBF 2026 pada 12—14 Desember 2026.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono">
            <span className="flex items-center gap-1.5 text-[#F4F0E8]">
              <Calendar className="w-3.5 h-3.5 text-[#D91F2C]" />
              12—14 DESEMBER 2026
            </span>
            <span className="flex items-center gap-1.5 text-[#8F8E8B]">
              <MapPin className="w-3.5 h-3.5 text-[#D91F2C]" />
              JL. COLOMBO NO. 1, CATURTUNGGAL, DEPOK, SLEMAN, DIY
            </span>
          </div>
        </div>
      </section>

      {/* Main Venue Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 w-full flex-1">
        
        {/* Address and Map Card */}
        <div className="bg-[#141416] border border-white/10 p-8 sm:p-10 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10 pb-6">
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#D91F2C] block">
                TITIK KOORDINAT UTAMA
              </span>
              <h2
                className="v9-display-title text-3xl sm:text-4xl text-[#F4F0E8]"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                GELANGGANG OLAHRAGA UNY
              </h2>
              <p className="text-xs text-[#8F8E8B] font-mono">
                {EVENT_CONFIG.venue.address}
              </p>
            </div>

            <a
              href={EVENT_CONFIG.venue.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="v9-btn-red text-xs font-display font-black tracking-wider self-start md:self-auto"
            >
              <span>BUKA GOOGLE MAPS</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-[#8F8E8B] font-sans leading-relaxed">
            <div className="space-y-2">
              <h3 className="font-display font-black text-base text-[#F4F0E8] uppercase tracking-wide">
                SPESIFIKASI ARENA GOR UNY
              </h3>
              <p>
                GOR UNY merupakan gedung olahraga bertaraf nasional dengan tribun penonton melingkar, sirkulasi udara optimal, dan sistem pencahayaan modern. Area lantai utama didedikasikan khusus untuk Octagon/Ring pertandingan kickboxing profesional dan panggung pertunjukan live music.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-display font-black text-base text-[#F4F0E8] uppercase tracking-wide">
                AKSES GATE & TIKETING
              </h3>
              <p>
                Pintu masuk utama (Gate A & B) berada di sisi barat lobi. Area penukaran gelang tiket resmi dan pemeriksaan keamanan barang bawaan dibuka 2 jam sebelum laga pertama dimulai setiap harinya.
              </p>
            </div>
          </div>
        </div>

        {/* Transportation Options */}
        <div className="space-y-6">
          <div className="border-b border-white/10 pb-3">
            <span className="v9-overline text-[#D91F2C]">RUTE PERJALANAN</span>
            <h2
              className="v9-display-title text-3xl text-[#F4F0E8] mt-1"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              OPSI TRANSPORTASI MENUJU VENUE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ACCESS_OPTIONS.map((opt) => (
              <div key={opt.number} className="p-6 bg-[#141416] border border-white/10 space-y-3">
                <div className="flex justify-between items-center text-[#D91F2C]">
                  <opt.icon className="w-5 h-5" />
                  <span className="text-[10px] font-mono tracking-widest">{opt.number}</span>
                </div>
                <h3 className="font-display font-black text-xl text-[#F4F0E8] uppercase" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
                  {opt.title}
                </h3>
                <p className="text-xs text-[#8F8E8B] leading-relaxed font-sans">
                  {opt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Venue Rules & Guidelines */}
        <div className="p-8 bg-[#141416] border-l-2 border-[#D91F2C] space-y-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#D91F2C]" />
            <h3 className="font-display font-black text-lg text-[#F4F0E8] uppercase tracking-wider">
              TATA TERTIB & KEBIJAKAN KEAMANAN VENUE
            </h3>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-[#8F8E8B] font-sans">
            <li className="flex gap-2">
              <span className="text-[#D91F2C] font-mono">•</span>
              <span>Dilarang membawa senjata tajam, senjata api, dan benda berbahaya lainnya.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#D91F2C] font-mono">•</span>
              <span>Dilarang membawa minuman keras dan zat terlarang ke dalam area festival.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#D91F2C] font-mono">•</span>
              <span>Dilarang membawa kamera profesional dengan lensa tele tanpa media pass resmi.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#D91F2C] font-mono">•</span>
              <span>Harap menjaga kebersihan dan membuang sampah pada tempat yang disediakan di selasar GOR.</span>
            </li>
          </ul>
        </div>

      </section>

    </main>
  );
}
