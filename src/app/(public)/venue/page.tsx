import Link from "next/link";
import {
  MapPin,
  Calendar,
  ArrowUpRight,
  ShieldCheck,
  Info,
  Train,
  Plane,
  Bus,
  Car,
  ExternalLink,
  AlertTriangle,
} from "lucide-react";
import { EVENT_CONFIG } from "@/lib/event-config";
import {
  TRANSPORT_MODES,
  SURROUNDING_FACILITIES,
  PENDING_ORGANIZER_LOGISTICS,
} from "@/lib/venue-guide";
import VenueTravelSelector from "@/components/venue/VenueTravelSelector";
import HomeArenaPreview from "@/components/home/HomeArenaPreview";

export const metadata = {
  title:
    "Venue & Visitor Guide: GOR Pancasila UGM (GOR Nusantara) | JKBF 2026",
  description:
    "Panduan resmi rute, transportasi, dan lokasi venue Jogja Kickboxing Festival 2026 di GOR Pancasila UGM (sekarang GOR Nusantara UGM), Yogyakarta. 19–20 Desember 2026.",
};

export default function VenuePage() {
  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-black text-[#F5F5F7] pt-24 sm:pt-28 lg:pt-36 pb-24 sm:pb-32 font-sans">
      {/* ─────────────────────────────────────────────────────────────────
          HERO & EDITORIAL HEADER
         ───────────────────────────────────────────────────────────────── */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-4 pb-10 sm:pb-14 w-full border-b border-white/[0.08]">
        <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-xs bg-black/80 border border-white/15 mb-4 sm:mb-6">
          <span className="w-2 h-2 rounded-xs bg-[#D91F2C]" />
          <p className="text-[#D91F2C] text-[11px] sm:text-xs font-technical uppercase tracking-[0.25em] font-bold">
            VENUE &amp; VISITOR GUIDE // {EVENT_CONFIG.campaign}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-3">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black uppercase tracking-tight leading-[0.88] text-white">
              FIND YOUR WAY <span className="text-[#D91F2C]">TO THE FIGHT.</span>
            </h1>
            <div className="pt-2">
              <span className="font-display text-2xl sm:text-3xl lg:text-4xl uppercase tracking-wider text-white block">
                {EVENT_CONFIG.venue.name}
              </span>
              <span className="font-technical text-sm sm:text-base uppercase tracking-[0.18em] text-[#EF3340] font-bold block mt-1">
                Sekarang bernama {EVENT_CONFIG.venue.officialFacilityName}
              </span>
            </div>
          </div>
          <div className="lg:col-span-4 lg:pb-2">
            <p className="text-xs sm:text-sm text-[#A1A1AA] font-sans leading-relaxed">
              Panduan lengkap kedatangan atlet, official kontingen, dan penonton ke gelanggang olahraga utama Jogja Kickboxing Festival 2026 di kawasan Bulaksumur UGM.
            </p>
          </div>
        </div>

        {/* ── Official UGM Renaming Clarification Box ── */}
        <div className="mt-8 p-4 sm:p-5 bg-[#0F0F13] border border-white/10 border-l-4 border-l-[#D91F2C] rounded-xs space-y-2">
          <div className="flex items-center gap-2 text-white">
            <Info className="w-4 h-4 text-[#D91F2C] shrink-0" />
            <span className="font-technical text-xs uppercase font-bold tracking-wider">
              CATATAN RESMI NAMA FASILITAS OLAHRAGA
            </span>
          </div>
          <p className="text-xs sm:text-sm text-[#C4C4CC] font-sans leading-relaxed">
            {EVENT_CONFIG.venue.renamingClarification}
          </p>
          <a
            href={EVENT_CONFIG.venue.renamingReference}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[11px] font-technical uppercase tracking-wider text-[#D91F2C] hover:underline pt-1"
          >
            <span>Rilis Resmi Universitas Gadjah Mada (9 Januari 2026)</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION A & B: MAIN VENUE CARD & GOOGLE MAPS ACTION
         ───────────────────────────────────────────────────────────────── */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border border-white/10 bg-[#111114] rounded-sm overflow-hidden shadow-2xl">
          {/* Authentic Combat Action Arena Photo */}
          <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[400px] lg:min-h-[480px] bg-black overflow-hidden">
            <picture className="absolute inset-0 w-full h-full">
              <source
                media="(max-width: 767px)"
                srcSet="/images/jkbf-photo/crimson_strong_mobile/jkbf-ring-action-mobile-1080x1350.webp"
                type="image/webp"
              />
              <img
                src="/images/jkbf-photo/crimson_strong_desktop/jkbf-ring-action-desktop-1920x1080.webp"
                alt="Atmosfer pertandingan kickboxing resmi di dalam arena ring"
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover object-center filter contrast-115 brightness-95"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-black/25 lg:to-[#111114]" />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10 px-3.5 py-1.5 bg-black/85 border border-white/15 backdrop-blur-md rounded-xs">
              <span className="font-technical text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#F5F5F7] font-bold">
                {EVENT_CONFIG.venue.fullDisplay}
              </span>
            </div>
          </div>

          {/* Confirmed Location & Navigation CTA */}
          <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="space-y-2 pb-6 border-b border-white/[0.08]">
                <span className="font-technical text-[10px] uppercase tracking-[0.25em] text-[#D91F2C] font-bold flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5" /> LOKASI RESMI KEJUARAAN
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wide text-white leading-none">
                  {EVENT_CONFIG.venue.name}
                </h2>
                <p className="font-technical text-sm uppercase tracking-[0.18em] text-[#EF3340] font-semibold">
                  (GOR NUSANTARA UGM)
                </p>
                <p className="font-technical text-xs uppercase tracking-[0.15em] text-[#86868B] pt-1">
                  {EVENT_CONFIG.venue.area}
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
                  2 hari penuh perhelatan 7 program kejuaraan kickboxing standar WAKO di Yogyakarta.
                </p>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-[#86868B]">
                <ShieldCheck className="w-4 h-4 text-[#D91F2C] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Titik navigasi Google Maps telah diverifikasi mengarah tepat ke gerbang kompleks olahraga GOR Pancasila / Nusantara UGM.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href={EVENT_CONFIG.venue.mapsUrl}
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
                <span>LIHAT 7 PROGRAM KEJUARAAN</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION D: INTERACTIVE TRAVEL SELECTOR
         ───────────────────────────────────────────────────────────────── */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-6 w-full">
        <VenueTravelSelector />
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION C: OUT-OF-TOWN VISITOR TRANSPORT GUIDE
         ───────────────────────────────────────────────────────────────── */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-14 w-full">
        <div className="border-b border-white/[0.08] pb-6 mb-8">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-xs bg-[#D91F2C]" />
            <span className="font-technical text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
              PANDUAN KONTINGEN &amp; PENGUNJUNG
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-white">
            COMING FROM OUT OF TOWN?
          </h2>
          <p className="text-xs sm:text-sm text-[#A1A1A6] font-sans mt-1 max-w-2xl leading-relaxed">
            Petunjuk mobilitas menuju GOR Nusantara UGM berdasarkan moda transportasi pilihan Anda dari luar kota atau luar provinsi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRANSPORT_MODES.map((mode) => (
            <div
              key={mode.id}
              className="bg-[#0B0B0E] border border-white/10 rounded-xs p-6 flex flex-col justify-between space-y-6 hover:border-white/20 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 border-b border-white/[0.08] pb-3">
                  <span className="font-technical text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-0.5 bg-[#D91F2C]/10 text-[#EF3340] border border-[#D91F2C]/30 rounded-xs">
                    {mode.badge}
                  </span>
                  {mode.id === "train" && <Train className="w-4 h-4 text-[#86868B]" />}
                  {mode.id === "airplane" && <Plane className="w-4 h-4 text-[#86868B]" />}
                  {mode.id === "bus" && <Bus className="w-4 h-4 text-[#86868B]" />}
                  {mode.id === "private-vehicle" && <Car className="w-4 h-4 text-[#86868B]" />}
                </div>

                <div>
                  <h3 className="font-display text-xl sm:text-2xl uppercase tracking-wide text-white">
                    {mode.title}
                  </h3>
                  <p className="font-technical text-[11px] uppercase tracking-wider text-[#86868B] mt-0.5">
                    {mode.subtitle}
                  </p>
                </div>

                <ul className="space-y-2.5 text-xs text-[#C4C4CC] leading-relaxed">
                  {mode.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#D91F2C] font-bold mt-0.5">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3 pt-3 border-t border-white/[0.06]">
                {mode.officialLink && (
                  <a
                    href={mode.officialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#EF3340] hover:text-white font-technical uppercase font-bold tracking-wider transition-colors"
                  >
                    <span>{mode.officialLinkText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
                {mode.notice && (
                  <p className="text-[11px] text-[#71717A] leading-normal italic">
                    {mode.notice}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION E: AROUND THE ARENA (VERIFIED ESSENTIAL SERVICES)
         ───────────────────────────────────────────────────────────────── */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-10 w-full">
        <div className="border-b border-white/[0.08] pb-6 mb-8">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-xs bg-[#D91F2C]" />
            <span className="font-technical text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
              FASILITAS PENDUKUNG SEKITAR VENUE
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-white">
            AROUND THE ARENA<span className="text-[#D91F2C]">.</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#A1A1A6] font-sans mt-1 max-w-2xl leading-relaxed">
            Daftar fasilitas darurat, farmasi, perbankan, dan logistik harian terverifikasi di kawasan kampus UGM / Bulaksumur untuk kenyamanan kontingen &amp; penonton.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SURROUNDING_FACILITIES.map((fac, idx) => (
            <div
              key={idx}
              className="p-5 bg-[#0D0D11] border border-white/[0.08] rounded-xs space-y-2 hover:border-white/20 transition-colors"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-technical text-[9px] uppercase tracking-[0.2em] text-[#D91F2C] font-bold">
                  {fac.category}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              </div>
              <h3 className="font-display text-lg uppercase text-white tracking-wide">
                {fac.name}
              </h3>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                {fac.description}
              </p>
              <p className="font-technical text-[10px] text-[#71717A] uppercase tracking-wider pt-2 border-t border-white/[0.04]">
                {fac.location}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 p-3.5 bg-black/50 border border-white/10 rounded-xs text-[11px] text-[#71717A] leading-relaxed">
          <strong>Pemberitahuan Publik: </strong>Fasilitas yang tercantum di atas merupakan fasilitas umum terverifikasi di sekitar kawasan Bulaksumur untuk memudahkan mobilitas pengunjung, bukan merupakan sponsor atau mitra komersial resmi JKBF 2026.
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION F: ARENA 3D INTERACTIVE (SIMPLIFIED CONCEPT)
         ───────────────────────────────────────────────────────────────── */}
      <div id="arena-3d" className="scroll-mt-20">
        <HomeArenaPreview />
      </div>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION G: PENDING ORGANIZER LOGISTICS NOTICE
         ───────────────────────────────────────────────────────────────── */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-8 w-full">
        <div className="p-6 bg-[#0E0E12] border border-white/10 rounded-xs space-y-4">
          <div className="flex items-center gap-2.5 text-amber-400">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span className="font-technical text-xs font-bold uppercase tracking-wider">
              INFORMASI OPERASIONAL HARI-H MENUNGGU FINALISASI EO
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
            Panitia pelaksana JKBF 2026 (Pengprov KBI DIY &amp; Noise Comm) berkomitmen menyajikan informasi akurat tanpa spekulasi. Hal-hal operasional berikut sedang dalam koordinasi teknis bersama pihak pengelola GOR UGM dan akan diumumkan secara bertahap:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {PENDING_ORGANIZER_LOGISTICS.map((item) => (
              <div
                key={item.id}
                className="p-3.5 bg-black/60 border border-white/[0.08] rounded-xs space-y-1"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-technical text-[10px] font-bold text-white uppercase tracking-wider">
                    {item.title}
                  </span>
                  <span className="font-technical text-[9px] uppercase px-1.5 py-0.5 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-xs">
                    KOORDINASI FINAL
                  </span>
                </div>
                <p className="text-[11px] text-[#71717A] leading-snug">
                  {item.notice}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
