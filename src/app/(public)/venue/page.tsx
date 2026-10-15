import Link from "next/link";
import Image from "next/image";
import { ExternalLink, MapPin, Train, Bus, Car, Ticket, Clock, ParkingCircle } from "lucide-react";
import { EVENT_CONFIG } from "@/lib/event-config";

export const metadata = {
  title: "Panduan Lokasi & Akses GOR UNY | JKBF 2026",
  description: "Informasi resmi lokasi, denah, akses transportasi, dan panduan kunjungan ke GOR UNY Yogyakarta untuk Jogja Kickboxing Festival 2026.",
};

const ACCESS_OPTIONS = [
  {
    number: "01",
    icon: Train,
    title: "KRL & KERETA API",
    location: "STASIUN LEMPUYANGAN & TUGU",
    desc: "10-15 menit berkendara langsung menuju lobi barat GOR UNY.",
  },
  {
    number: "02",
    icon: Bus,
    title: "TRANS JOGJA",
    location: "HALTE UNY COLOMBO",
    desc: "Terhubung rute bus koridor Colombo tepat di depan gerbang utama kampus.",
  },
  {
    number: "03",
    icon: Car,
    title: "DROP-OFF & PARKIR",
    location: "LOBI BARAT GOR UNY",
    desc: "Titik drop-off taksi/ojek online & kantong parkir resmi kampus UNY.",
  },
  {
    number: "04",
    icon: Ticket,
    title: "TICKET BOX WRISTBAND",
    location: "LOKET BARAT ARENA",
    desc: "Penukaran e-voucher fisik mulai pukul 09:30 WIB setiap hari acara.",
  },
];

export default function VenuePage() {
  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#0A0A0A] text-[#FAFAFA] font-sans overflow-x-hidden">
      
      {/* ═════════════════════════════════════════════════════════════════════
          1. CINEMATIC VENUE HERO
      ═════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[50svh] lg:min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/venue/gor-uny-arena.jpg"
            alt="GOR UNY Arena Kickboxing Championship"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-transparent to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 w-full relative z-10 pb-10 lg:pb-14 pt-32 lg:pt-40">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-2.5 h-2.5 bg-[#D91F2C]" />
            <p className="font-technical text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
              LOKASI RESMI • VENUE ARENA GOR UNY
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.85] text-white">
              GOR UNY.<br />
              <span className="text-[#D91F2C]">YOGYAKARTA.</span>
            </h1>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={EVENT_CONFIG.venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-xs sm:text-sm uppercase tracking-wider text-white bg-[#D91F2C] hover:bg-[#B81521] px-5 py-2.5 rounded transition-all inline-flex items-center gap-1.5"
              >
                <span>BUKA GOOGLE MAPS</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <Link
                href="/tiket"
                className="font-display text-xs sm:text-sm uppercase tracking-wider text-white/80 hover:text-white border border-white/20 px-4 py-2.5 rounded transition-all inline-flex items-center gap-1.5 bg-black/50 backdrop-blur-sm"
              >
                <span>INFO TIKET</span>
                <span className="font-technical text-xs">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. ACCESS GUIDE GRID (COMPACT 4 CARDS)
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12 lg:py-16 w-full flex-1 space-y-10">
        
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-white flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#D91F2C]" /> PANDUAN TRANSIT & AKSES
            </h2>
            <span className="font-technical text-xs text-white/40 hidden sm:inline">JL. COLOMBO NO. 1, SLEMAN</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {ACCESS_OPTIONS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.number}
                  className="bg-[#141416] border border-white/10 hover:border-[#D91F2C]/60 transition-all rounded p-4 sm:p-5 flex flex-col justify-between space-y-3 group"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between font-technical text-xs">
                      <span className="text-[#D91F2C] font-bold">AKSES {item.number}</span>
                      <Icon className="w-4 h-4 text-white/40 group-hover:text-[#D91F2C] transition-colors" />
                    </div>

                    <h3 className="font-display text-lg sm:text-xl uppercase tracking-wider text-white">
                      {item.title}
                    </h3>

                    <p className="font-technical text-[10px] text-[#D91F2C] font-bold uppercase tracking-wider">
                      {item.location}
                    </p>

                    <p className="font-sans text-xs text-white/60 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Address Card & Quick Info */}
        <div className="p-5 sm:p-6 bg-[#141416] border border-white/10 rounded flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="font-technical text-[10px] uppercase tracking-wider text-[#D91F2C] font-bold block">
              ALAMAT LENGKAP VENUE:
            </span>
            <p className="text-xs sm:text-sm text-white font-sans mt-0.5">
              {EVENT_CONFIG.venue.address}
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs font-technical text-white/50 shrink-0">
            <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" /> GATE OPEN: 09:30 WIB</span>
            <span>•</span>
            <span className="inline-flex items-center gap-1"><ParkingCircle className="w-3 h-3" /> PARKIR RESMI UNY</span>
          </div>
        </div>

      </section>

    </main>
  );
}
