import Link from "next/link";
import { MapPin, Navigation, Bus, Train, ExternalLink, Calendar, ShieldCheck } from "lucide-react";
import { EVENT_CONFIG } from "@/lib/event-config";

export const metadata = {
  title: "Panduan Lokasi & Venue GOR UNY — JKB 2026",
  description: "Informasi resmi lokasi, akses transportasi, dan peta GOR UNY Yogyakarta untuk Jogja Kickboxing Festival 2026.",
};

const ACCESS_OPTIONS = [
  {
    icon: Train,
    title: "Kereta Api & KRL",
    desc: "Akses mudah dari Stasiun Lempuyangan (±10 menit berkendara) atau Stasiun Yogyakarta / Tugu (±15 menit berkendara menuju GOR UNY).",
  },
  {
    icon: Bus,
    title: "Trans Jogja",
    desc: "Terhubung melalui jaringan Trans Jogja rute koridor Colombo (halte kampus Universitas Negeri Yogyakarta).",
  },
  {
    icon: Navigation,
    title: "Transportasi Daring",
    desc: "Titik penjemputan dan penurunan penumpang dapat diarahkan langsung ke GOR UNY di Jalan Colombo.",
  },
];

export default function VenuePage() {
  return (
    <div className="flex-1 flex flex-col w-full min-h-screen text-[#F5F3EE] bg-[#09090B] pt-24 pb-20">
      
      {/* Header Banner */}
      <section className="relative w-full border-b border-white/10 overflow-hidden py-14 md:py-20 bg-[#171719]/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-[#D91F2C]/30 bg-[#D91F2C]/10 text-[#D91F2C] text-xs font-bold tracking-widest uppercase">
            <MapPin className="w-3.5 h-3.5" />
            <span>VENUE RESMI FESTIVAL</span>
          </div>

          <h1
            className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-none"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            GOR UNY, <span className="text-[#D91F2C]">YOGYAKARTA</span>
          </h1>

          <p className="text-[#9A9AA2] text-sm sm:text-base max-w-2xl leading-relaxed">
            Gelanggang Olahraga Universitas Negeri Yogyakarta (GOR UNY) menjadi pusat penyelenggaraan seluruh laga kejuaraan kickboxing profesional dan pertunjukan musik festival JKB 2026.
          </p>

          <div className="flex flex-wrap items-center gap-3 text-xs text-[#C4C4CC] pt-2">
            <span className="flex items-center gap-1.5 bg-[#171719] px-3.5 py-2 rounded-sm border border-white/5">
              <Calendar className="w-3.5 h-3.5 text-[#D91F2C]" />
              12–14 Desember 2026
            </span>
            <span className="flex items-center gap-1.5 bg-[#171719] px-3.5 py-2 rounded-sm border border-white/5">
              <MapPin className="w-3.5 h-3.5 text-[#D91F2C]" />
              {EVENT_CONFIG.venue.address}
            </span>
          </div>
        </div>
      </section>

      {/* Main Venue Content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 w-full">
        
        {/* Venue Information Card */}
        <div className="bg-[#171719] border border-white/10 rounded-sm p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="space-y-1">
              <span className="text-xs uppercase font-bold tracking-widest text-[#D91F2C]">
                Alamat Lengkap
              </span>
              <h2
                className="text-2xl sm:text-3xl font-black uppercase text-white"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                GELANGGANG OLAHRAGA UNY
              </h2>
              <p className="text-xs sm:text-sm text-[#9A9AA2]">
                {EVENT_CONFIG.venue.address}
              </p>
            </div>

            <a
              href={EVENT_CONFIG.venue.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display font-bold text-xs uppercase tracking-widest px-5 py-3 bg-[#D91F2C] hover:bg-[#EF3340] text-white rounded-sm transition-all flex items-center justify-center gap-2 self-start sm:self-center shrink-0"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              <span>Buka Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#C4C4CC] leading-relaxed">
            <div className="space-y-2">
              <h3 className="font-bold text-sm text-[#F5F3EE] uppercase tracking-wide">
                Tentang Gedung
              </h3>
              <p>
                GOR UNY merupakan gedung olahraga serbaguna bertaraf nasional yang berlokasi strategis di kawasan kampus Colombo. Arena ini dilengkapi tribun penonton bertingkat dan sirkulasi udara yang nyaman untuk ribuan penonton festival.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-sm text-[#F5F3EE] uppercase tracking-wide">
                Fasilitas Publik
              </h3>
              <p>
                Tersedia fasilitas toilet umum, musholla, serta jalur akses pengunjung. Seluruh penonton dihimbau untuk selalu menjaga kebersihan arena dan mematuhi arahan panitia di lokasi.
              </p>
            </div>
          </div>
        </div>

        {/* Akses Transportasi */}
        <div className="space-y-6">
          <div className="border-b border-white/10 pb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D91F2C]">
              PANDUAN PERJALANAN
            </span>
            <h2
              className="text-2xl sm:text-3xl font-black uppercase text-white mt-0.5"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              PANDUAN AKSES MENUJU GOR UNY
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {ACCESS_OPTIONS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#171719] border border-white/10 rounded-sm p-6 space-y-3"
                >
                  <div className="w-9 h-9 rounded-sm bg-[#D91F2C]/10 text-[#D91F2C] flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3
                    className="font-display text-xl font-bold uppercase text-white"
                    style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#9A9AA2] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Links */}
        <div className="pt-4 flex flex-wrap gap-4 text-xs">
          <Link
            href="/jadwal"
            className="text-[#D91F2C] hover:underline font-bold uppercase tracking-wider"
          >
            Lihat Jadwal Lengkap Acara →
          </Link>
          <Link
            href="/tiket"
            className="text-[#9A9AA2] hover:text-white underline uppercase tracking-wider"
          >
            Informasi Tiket Masuk
          </Link>
          <Link
            href="/kontak"
            className="text-[#9A9AA2] hover:text-white underline uppercase tracking-wider"
          >
            Hubungi Sekretariat
          </Link>
        </div>

      </section>

    </div>
  );
}
