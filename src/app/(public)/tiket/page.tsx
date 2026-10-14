import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Info Tiket Masuk Resmi | JKBF 2026",
  description: "Informasi resmi tiket Jogja Kickboxing Festival & Redy Championship 2 di GOR UNY Yogyakarta. Ketentuan tiket dan jadwal penjualan.",
};

const TICKET_TIERS_TEASER = [
  {
    number: "01",
    name: "TRIBUN REGULER",
    scope: "AKSES 1 HARI (DAILY PASS)",
    desc: "Akses menonton laga kejuaraan dari area tribun melingkar dan panggung festival musik pada hari yang dipilih.",
    status: "MENUNGGU JADWAL RILIS",
  },
  {
    number: "02",
    name: "RINGSIDE FLOOR PASS",
    scope: "AKSES LANTAI UTAMA ARENA RING",
    desc: "Pengalaman terbaik melihat ketegangan kickboxing langsung dari sisi ring arena pertandingan dan akses panggung festival.",
    status: "KUOTA TERBATAS",
  },
  {
    number: "03",
    name: "3-DAY FESTIVAL PASS",
    scope: "ALL ACCESS (12—14 DESEMBER 2026)",
    desc: "Tiket terusan 3 hari penuh dari sesi timbang badan pembuka, penyisihan, semifinal, hingga Grand Final & konser penutup.",
    status: "PRESALE MENUNGGU JADWAL",
  },
];

export default function TiketPage() {
  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#F4F0E8] text-[#0B0B0B] pt-24 lg:pt-28 pb-24">
      
      {/* ═════════════════════════════════════════════════════════════════════
          1. EDITORIAL SPLIT TICKET HERO
      ═════════════════════════════════════════════ */}
      <section className="relative w-full border-b border-black/10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 min-h-[480px] lg:min-h-[540px]">
          
          <div className="lg:col-span-8 py-12 lg:py-20 flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D91F2C]" />
              <p className="font-technical text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
                AKSES RESMI • TIKET & PENONTON
              </p>
            </div>

            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tight leading-[0.85] text-[#0B0B0B]">
              DATANG.<br />
              SAKSIKAN.<br />
              JADI BAGIAN.
            </h1>

            <p className="text-sm sm:text-base text-[#5A5957] font-sans max-w-lg leading-relaxed">
              Tiga hari pertarungan sengit dan panggung musik di GOR UNY Yogyakarta. Informasi resmi penjualan tiket festival tanpa perantara tidak resmi.
            </p>
          </div>

          {/* Right Giant Date Display */}
          <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end py-8 lg:py-0 border-t lg:border-t-0 lg:border-l border-black/15 lg:pl-12">
            <span className="font-display text-8xl sm:text-9xl lg:text-[10rem] font-black text-[#D91F2C] leading-none">
              12–14
            </span>
            <span className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-[#0B0B0B] mt-1">
              DESEMBER 2026
            </span>
            <span className="font-technical text-xs uppercase text-[#77716D] mt-1">
              GOR UNY, YOGYAKARTA
            </span>
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. ANNOUNCEMENT & TICKET CATEGORIES
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-20 w-full space-y-14">
        
        <div className="space-y-3 pb-8 border-b border-black/15">
          <p className="font-technical text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold">
            STATUS PENJUALAN TIKET
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#0B0B0B]">
            INFO TIKET SEGERA HADIR.
          </h2>
          <p className="text-sm text-[#5A5957] font-sans max-w-xl leading-relaxed">
            Pembelian tiket resmi akan diarahkan secara eksklusif ke portal mitra ticketing resmi (RAWOOH) setelah jadwal pembukaan presale diumumkan oleh promotor.
          </p>
        </div>

        {/* Ticket Tiers in Spacious Open Rows */}
        <div className="border-t border-black/15 divide-y divide-black/15">
          {TICKET_TIERS_TEASER.map((tier) => (
            <div
              key={tier.number}
              className="py-10 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-baseline transition-colors hover:bg-black/[0.02] px-2"
            >
              <span className="font-technical text-sm sm:text-base font-bold text-[#D91F2C] md:col-span-1">
                {tier.number}
              </span>
              <div className="md:col-span-4 space-y-1">
                <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-wider text-[#0B0B0B]">
                  {tier.name}
                </h3>
                <span className="font-technical text-xs uppercase font-bold tracking-widest text-[#D91F2C]">
                  {tier.scope}
                </span>
              </div>
              <p className="text-sm text-[#5A5957] md:col-span-5 font-sans leading-relaxed">
                {tier.desc}
              </p>
              <div className="md:col-span-2 text-left md:text-right font-technical text-xs uppercase font-bold text-[#0B0B0B] tracking-wider">
                {tier.status}
              </div>
            </div>
          ))}
        </div>

        {/* Action Links */}
        <div className="pt-8 flex flex-wrap gap-4">
          <Link
            href="/jadwal"
            className="font-display text-base tracking-wider uppercase text-white bg-[#0B0B0B] hover:bg-black px-7 py-3.5 transition-colors inline-flex items-center gap-2 ring-1 ring-black"
          >
            <span>LIHAT JADWAL 3 HARI</span>
            <span className="font-technical text-xs">↗</span>
          </Link>
          <Link
            href="/venue"
            className="font-display text-base tracking-wider uppercase text-[#0B0B0B] hover:text-[#D91F2C] px-6 py-3.5 transition-colors inline-flex items-center gap-2 border border-black/25"
          >
            <span>PANDUAN VENUE GOR UNY</span>
            <span className="font-technical text-xs">↗</span>
          </Link>
        </div>

      </section>

    </main>
  );
}
