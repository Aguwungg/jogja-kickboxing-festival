import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, ArrowUpRight, ShieldCheck } from "lucide-react";
import { EVENT_CONFIG, jkbfLinks } from "@/lib/event-config";
import HomeArenaPreview from "@/components/home/HomeArenaPreview";

export const metadata = {
  title: "Venue Resmi: GOR Pancasila UGM, Yogyakarta | JKBF 2026",
  description:
    "Informasi lokasi dan tanggal resmi Jogja Kickboxing Festival 2026: 19–20 Desember 2026 di GOR Pancasila UGM, Yogyakarta.",
};

export default function VenuePage() {
  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-black text-[#F5F5F7] pt-24 sm:pt-28 lg:pt-36 pb-24 sm:pb-32 font-sans">
      {/* Header Section */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-4 pb-10 sm:pb-14 w-full border-b border-white/[0.08]">
        <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-xs bg-black/80 border border-white/15 mb-4 sm:mb-6">
          <span className="w-2 h-2 rounded-xs bg-[#D91F2C]" />
          <p className="text-[#D91F2C] text-[11px] sm:text-xs font-technical uppercase tracking-[0.25em] font-bold">
            VENUE &amp; TANGGAL RESMI // {EVENT_CONFIG.campaign}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-8">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black uppercase tracking-tight leading-[0.88] text-white">
              {EVENT_CONFIG.venue.heading}
            </h1>
          </div>
          <div className="lg:col-span-4 lg:pb-2">
            <p className="text-xs sm:text-sm md:text-base text-[#86868B] font-sans leading-relaxed">
              {EVENT_CONFIG.venue.summary}
            </p>
          </div>
        </div>
      </section>

      {/* Main Venue Card */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border border-white/10 bg-[#111114] rounded-sm overflow-hidden shadow-2xl">
          {/* Editorial Combat Arena Photo (No LED) */}
          <div className="lg:col-span-7 relative min-h-[280px] sm:min-h-[380px] lg:min-h-[460px] bg-black overflow-hidden">
            <Image
              src="/images/v9/04_FOTO_FIGHT_DESKTOP_TANPA_TEKST.png"
              alt="Ring pertandingan Jogja Kickboxing Festival di GOR Pancasila UGM Yogyakarta"
              fill
              priority
              fetchPriority="high"
              className="object-cover object-center filter contrast-115 brightness-90"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-black/25 lg:to-[#111114]" />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10 px-3.5 py-1.5 bg-black/85 border border-white/15 backdrop-blur-md rounded-xs">
              <span className="font-technical text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#F5F5F7] font-bold">
                {EVENT_CONFIG.venue.fullDisplay}
              </span>
            </div>
          </div>

          {/* Confirmed Venue & Date Info */}
          <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="space-y-2 pb-6 border-b border-white/[0.08]">
                <span className="font-technical text-[10px] uppercase tracking-[0.25em] text-[#D91F2C] font-bold flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5" /> LOKASI RESMI
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wide text-white leading-none">
                  {EVENT_CONFIG.venue.name}
                </h2>
                <p className="font-technical text-sm uppercase tracking-[0.2em] text-[#C4C4CC]">
                  {EVENT_CONFIG.venue.city}
                </p>
              </div>

              <div className="space-y-2 pb-6 border-b border-white/[0.08]">
                <span className="font-technical text-[10px] uppercase tracking-[0.25em] text-[#D91F2C] font-bold flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5" /> TANGGAL PENYELENGGARAAN
                </span>
                <p className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-white">
                  {EVENT_CONFIG.dates.display}
                </p>
                <p className="text-xs text-[#86868B] font-sans leading-relaxed">
                  Dua hari penuh kejuaraan kickboxing resmi standar WAKO di Yogyakarta.
                </p>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-[#86868B]">
                <ShieldCheck className="w-4 h-4 text-[#D91F2C] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Informasi detail denah akses penonton dan teknis area arena akan diumumkan melalui kanal resmi panitia mendekati hari pelaksanaan.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href={jkbfLinks.venueMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 bg-[#D91F2C] hover:bg-[#B81521] active:scale-[0.98] text-white font-display text-base tracking-wider uppercase transition-all rounded-xs inline-flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(217,31,44,0.35)]"
              >
                <MapPin className="w-4 h-4" />
                <span>BUKA GOOGLE MAPS</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <Link
                href="/championship"
                className="w-full py-3.5 px-6 bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 text-[#F5F5F7] font-display text-base tracking-wider uppercase transition-all rounded-xs inline-flex items-center justify-center gap-2"
              >
                <span>LIHAT PROGRAM KEJUARAAN</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive 3D Arena Layout */}
      <HomeArenaPreview />
    </main>
  );
}
