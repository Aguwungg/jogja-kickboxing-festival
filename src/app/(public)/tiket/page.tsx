import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Calendar, MapPin, Clock, Info } from "lucide-react";

export const metadata = {
  title: "Info Tiket Masuk Resmi | JKBF 2026",
  description:
    "Pemberitahuan resmi penjualan tiket Jogja Kickboxing Festival & Redy Championship 2 di GOR UNY Colombo Yogyakarta: 12–14 Desember 2026.",
};

export default function TiketPage() {
  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#0B0B0B] text-[#F4F0E8] pt-24 lg:pt-32 pb-24 font-sans">
      
      {/* ═════════════════════════════════════════════════════════════════════
          1. EDITORIAL HEADER & STATUS ANNOUNCEMENT
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-6 pb-12 w-full border-b border-white/10">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-2.5 h-2.5 bg-[#D91F2C]" />
          <p className="font-technical text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
            INFORMASI RESMI TIKET MASUK • JKBF 2026
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.88] text-[#F4F0E8]">
              PENJUALAN TIKET<br />
              <span className="text-[#D91F2C]">SEGERA DIUMUMKAN.</span>
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs font-technical text-[#8F8E8B]">
            <div className="flex items-center gap-2 bg-[#141416] border border-white/10 px-4 py-2.5">
              <Calendar className="w-4 h-4 text-[#D91F2C]" />
              <span>12–14 DESEMBER 2026</span>
            </div>
            <div className="flex items-center gap-2 bg-[#141416] border border-white/10 px-4 py-2.5">
              <MapPin className="w-4 h-4 text-[#D91F2C]" />
              <span>GOR UNY, YOGYAKARTA</span>
            </div>
          </div>
        </div>

        {/* Official Status Notice Banner */}
        <div className="mt-8 p-5 sm:p-6 bg-[#141416] border-l-4 border-[#D91F2C] border-y border-r border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <Info className="w-5 h-5 text-[#D91F2C] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="font-display text-base uppercase tracking-wider text-white">
                FINALISASI INTEGRASI TIKET RESMI
              </h4>
              <p className="font-sans text-xs text-[#8F8E8B] leading-relaxed max-w-2xl">
                Sistem reservasi dan kuota penjualan tiket masuk resmi Jogja Kickboxing Festival 2026 saat ini sedang dalam proses finalisasi teknis bersama platform ticketing partner resmi. Skema kategori tiket, jadwal presale, dan alur penukaran gelang di venue akan diumumkan secara terbuka oleh panitia pelaksana.
              </p>
            </div>
          </div>
          <div className="shrink-0 font-technical text-xs text-[#D91F2C] bg-[#D91F2C]/10 border border-[#D91F2C]/30 px-3 py-1.5 uppercase font-bold tracking-wider self-start md:self-auto">
            STATUS: TIKET BELUM DIBUKA
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. PREVIEW KATEGORI TIKET (WITHOUT PRICES / BUY BUTTONS)
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12 w-full flex-1">
        <div className="mb-8">
          <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-white">
            GAMBARAN AKSES & PENGALAMAN MENONTON
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#8F8E8B] mt-1">
            Dua opsi pengalaman menonton yang akan tersedia saat peluncuran resmi tiket:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Tribun Reguler */}
          <div className="p-6 sm:p-8 bg-[#101012] border border-white/10 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="font-technical text-xs text-white/40 font-bold">KATEGORI 01</span>
                <span className="font-technical text-[10px] uppercase font-bold text-[#8F8E8B] bg-white/5 border border-white/10 px-2 py-0.5">
                  DAILY PASS
                </span>
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="font-display text-2xl uppercase tracking-wider text-white">
                  TRIBUN REGULER
                </h3>
                <p className="font-technical text-xs text-[#8F8E8B] uppercase">
                  Akses Tribun Melingkar GOR UNY
                </p>
                <p className="font-sans text-xs text-[#8F8E8B] pt-2 leading-relaxed">
                  Sudut pandang luas ke arah seluruh partai pertandingan tatami & ringsport serta festival panggung musik.
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-white/10">
              <span className="font-technical text-xs text-[#77716D] uppercase">
                Pengumuman Harga & Kuota: Segera
              </span>
            </div>
          </div>

          {/* Card 2: Ringside VIP */}
          <div className="p-6 sm:p-8 bg-[#141416] border border-[#D91F2C]/40 flex flex-col justify-between space-y-6 shadow-lg shadow-red-950/20">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="font-technical text-xs text-[#D91F2C] font-bold">KATEGORI 02</span>
                <span className="font-technical text-[10px] uppercase font-bold text-[#D91F2C] bg-[#D91F2C]/15 border border-[#D91F2C]/30 px-2 py-0.5">
                  KUOTA TERBATAS
                </span>
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="font-display text-2xl uppercase tracking-wider text-white">
                  RINGSIDE FLOOR VIP
                </h3>
                <p className="font-technical text-xs text-[#D91F2C] uppercase font-semibold">
                  Akses Lantai Utama Tepi Kanvas Ring
                </p>
                <p className="font-sans text-xs text-[#8F8E8B] pt-2 leading-relaxed">
                  Pengalaman jarak dekat merasakan tensi fisik atlet di sisi kanvas ring dengan fasilitas prioritas VIP.
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-white/10">
              <span className="font-technical text-xs text-[#D91F2C] uppercase font-bold">
                Pengumuman Reservasi: Segera
              </span>
            </div>
          </div>

          {/* Card 3: 3-Day Pass */}
          <div className="p-6 sm:p-8 bg-[#101012] border border-white/10 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="font-technical text-xs text-white/40 font-bold">KATEGORI 03</span>
                <span className="font-technical text-[10px] uppercase font-bold text-[#8F8E8B] bg-white/5 border border-white/10 px-2 py-0.5">
                  ALL-ACCESS TERUSAN
                </span>
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="font-display text-2xl uppercase tracking-wider text-white">
                  3-DAY FESTIVAL PASS
                </h3>
                <p className="font-technical text-xs text-[#8F8E8B] uppercase">
                  Akses Terusan Penuh 12–14 Desember 2026
                </p>
                <p className="font-sans text-xs text-[#8F8E8B] pt-2 leading-relaxed">
                  Akses penuh 3 hari dari babak penyisihan pembuka hingga Grand Final Kejurda dan Grand Closing Concert.
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-white/10">
              <span className="font-technical text-xs text-[#77716D] uppercase">
                Pengumuman Paket Terusan: Segera
              </span>
            </div>
          </div>
        </div>

        {/* Alternative Action Guide */}
        <div className="mt-12 p-6 sm:p-8 bg-[#141416] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-display text-xl uppercase tracking-wider text-white">
              EKSPLORASI AGENDA ACARA SEBELUM TIKET DIBUKA
            </h4>
            <p className="font-sans text-xs text-[#8F8E8B] max-w-xl">
              Anda dapat memeriksa rundown 3 hari di GOR UNY atau meninjau daftar atlet dan bagan kejuaraan resmi.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/jadwal"
              className="px-6 py-3 bg-[#D91F2C] hover:bg-[#B81521] text-white font-display text-sm uppercase tracking-wider transition-colors inline-flex items-center gap-2"
            >
              <span>JADWAL 3 HARI</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/championship"
              className="px-6 py-3 bg-[#1F1F23] hover:bg-white/10 text-white font-display text-sm uppercase tracking-wider transition-colors border border-white/15"
            >
              <span>KEJUARAAN & HASIL</span>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
