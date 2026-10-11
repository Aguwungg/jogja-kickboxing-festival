import Link from "next/link";
import { Ticket, Calendar, MapPin, CheckCircle2, AlertCircle, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import { EVENT_CONFIG } from "@/lib/event-config";

export const metadata = {
  title: "Info Tiket Resmi",
  description: "Informasi resmi tiket Jogja Kickboxing Festival & Redy Championship 2 (JKB 2026) di GOR UNY Yogyakarta.",
};

export default function TiketPage() {
  return (
    <div className="flex-1 w-full bg-[#09090B] text-[#F5F3EE] pt-28 pb-20">
      
      {/* Hero Header */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D91F2C]/10 border border-[#D91F2C]/30 text-[#D91F2C] text-xs font-bold tracking-widest uppercase">
          <Ticket className="w-3.5 h-3.5" />
          <span>PORTAL INFORMASI TIKET RESMI</span>
        </div>

        <h1
          className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[0.95]"
          style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
        >
          TIKET <span className="text-[#D91F2C]">JKB 2026</span>
        </h1>

        <p className="text-base sm:text-lg text-[#9A9AA2] max-w-2xl mx-auto leading-relaxed">
          Saksikan kejuaraan kickboxing terbesar dan festival musik spektakuler di GOR UNY Yogyakarta. Penjualan tiket resmi akan difasilitasi oleh RAWOOH.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#C4C4CC] pt-2">
          <span className="flex items-center gap-1.5 bg-[#171719] px-3 py-1.5 rounded-sm border border-white/5">
            <Calendar className="w-3.5 h-3.5 text-[#D91F2C]" />
            {EVENT_CONFIG.dates.display}
          </span>
          <span className="flex items-center gap-1.5 bg-[#171719] px-3 py-1.5 rounded-sm border border-white/5">
            <MapPin className="w-3.5 h-3.5 text-[#D91F2C]" />
            {EVENT_CONFIG.venue.name}
          </span>
          <span className="flex items-center gap-1.5 bg-[#171719] px-3 py-1.5 rounded-sm border border-white/5">
            <ShieldCheck className="w-3.5 h-3.5 text-green-400" />
            Official Ticketing via RAWOOH
          </span>
        </div>
      </section>

      {/* Main Ticket Information Container */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-10">
        
        {/* Rawooh Future Integration Container */}
        <div className="rounded-sm border-2 border-dashed border-[#D91F2C]/40 bg-[#171719]/90 p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-[#D91F2C] text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1">
            PENJUALAN RESMI SEGERA DIBUKA
          </div>

          <div className="max-w-xl mx-auto space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#D91F2C]/10 border border-[#D91F2C]/30 flex items-center justify-center text-[#D91F2C]">
              <Clock className="w-7 h-7" />
            </div>

            <h2
              className="font-display text-2xl sm:text-3xl font-black uppercase text-white"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              WADAH INTEGRASI RAWOOH TICKETING
            </h2>

            <p className="text-sm text-[#9A9AA2] leading-relaxed">
              Integrasi sistem transaksi resmi RAWOOH sedang disiapkan. Seluruh pembelian tiket resmi akan dilakukan melalui modul checkout resmi terverifikasi tanpa perantara.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#kategori-tiket"
                className="w-full sm:w-auto font-display font-bold text-xs uppercase tracking-widest px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-sm transition-all"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                Lihat Estimasi Kategori Tiket
              </a>
              <Link
                href="/jadwal"
                className="w-full sm:w-auto font-display font-bold text-xs uppercase tracking-widest px-6 py-3 bg-[#D91F2C] hover:bg-[#EF3340] text-white rounded-sm transition-all shadow-md"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                Cek Rundown Acara
              </Link>
            </div>
          </div>
        </div>

        {/* Estimated Categories Overview */}
        <div id="kategori-tiket" className="space-y-6">
          <div className="border-b border-white/10 pb-3 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-[#D91F2C]">
                PANDUAN PENGUNJUNG
              </span>
              <h3
                className="font-display text-2xl sm:text-3xl font-black uppercase text-white mt-0.5"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                Kategori Tiket Masuk
              </h3>
            </div>
            <span className="text-xs text-[#9A9AA2] hidden sm:block">
              GOR UNY • Kapasitas 5.000+ Penonton
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Daily Pass */}
            <div className="bg-[#171719] border border-white/10 rounded-sm p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#9A9AA2] bg-white/5 px-2.5 py-1 rounded-sm">
                  AKSES HARIAN
                </span>
                <h4
                  className="font-display text-xl font-bold uppercase text-white"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  Daily Pass (Tribun)
                </h4>
                <p className="text-xs text-[#9A9AA2] leading-relaxed">
                  Akses masuk untuk 1 hari pilihan (Hari 1 / Hari 2 / Hari 3). Termasuk babak pertandingan arena dan area panggung festival musik hari tersebut.
                </p>
                <ul className="text-xs text-[#C4C4CC] space-y-2 pt-2 border-t border-white/5">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" />
                    <span>Akses tribun umum GOR UNY</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" />
                    <span>Akses festival musik & food bazaar</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-white/10">
                <span className="text-[11px] uppercase tracking-wider text-[#9A9AA2] block">
                  Status Penjualan
                </span>
                <span className="text-sm font-bold text-[#F5F3EE]">Segera Diumumkan</span>
              </div>
            </div>

            {/* 3-Day Pass */}
            <div className="bg-[#171719] border-2 border-[#D91F2C]/60 rounded-sm p-6 space-y-4 flex flex-col justify-between relative shadow-lg shadow-[#D91F2C]/10">
              <div className="absolute -top-3 left-6 bg-[#D91F2C] text-white text-[9px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-sm">
                PALING POPULER
              </div>
              <div className="space-y-3 pt-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#D91F2C] bg-[#D91F2C]/10 px-2.5 py-1 rounded-sm">
                  FULL FESTIVAL
                </span>
                <h4
                  className="font-display text-xl font-bold uppercase text-white"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  3-Day Pass All-Access
                </h4>
                <p className="text-xs text-[#9A9AA2] leading-relaxed">
                  Akses penuh 3 hari penuh laga (Penyisihan, Semifinal, hingga Grand Final 4 Sabuk Juara) serta seluruh malam pertunjukan musik.
                </p>
                <ul className="text-xs text-[#C4C4CC] space-y-2 pt-2 border-t border-white/5">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" />
                    <span>Akses penuh 12, 13, 14 Desember 2026</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" />
                    <span>Gelang wristband resmi festival</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" />
                    <span>Akses zona community & exhibition</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-white/10">
                <span className="text-[11px] uppercase tracking-wider text-[#9A9AA2] block">
                  Status Penjualan
                </span>
                <span className="text-sm font-bold text-[#F5F3EE]">Segera Diumumkan</span>
              </div>
            </div>

            {/* VIP Ringside */}
            <div className="bg-[#171719] border border-white/10 rounded-sm p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-400 bg-yellow-400/10 px-2.5 py-1 rounded-sm">
                  VIP EXPERIENCE
                </span>
                <h4
                  className="font-display text-xl font-bold uppercase text-white"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  VIP Ringside
                </h4>
                <p className="text-xs text-[#9A9AA2] leading-relaxed">
                  Pengalaman menonton di baris terdepan pinggir ring (Ringside) dengan pandangan laga paling dekat, lounge VIP, dan akses pintu masuk khusus.
                </p>
                <ul className="text-xs text-[#C4C4CC] space-y-2 pt-2 border-t border-white/5">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" />
                    <span>Tempat duduk eksklusif Ringside</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" />
                    <span>Jalur masuk khusus bebas antrean</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" />
                    <span>Official merchandise pack commemorative</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-white/10">
                <span className="text-[11px] uppercase tracking-wider text-[#9A9AA2] block">
                  Status Penjualan
                </span>
                <span className="text-sm font-bold text-[#F5F3EE]">Kuota Terbatas</span>
              </div>
            </div>

          </div>
        </div>

        {/* Anti-Scalper & Safety Notice */}
        <div className="p-6 rounded-sm bg-[#171719] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs text-[#9A9AA2]">
          <AlertCircle className="w-5 h-5 text-[#D91F2C] shrink-0" />
          <div className="space-y-1">
            <span className="font-bold text-[#F5F3EE] uppercase tracking-wide">
              Peringatan Keamanan & Anti-Calo
            </span>
            <p>
              Jangan pernah membeli tiket dari pihak ketiga atau akun media sosial tidak resmi. Panitia JKB 2026 tidak bertanggung jawab atas tiket palsu atau barcode ganda di luar platform RAWOOH dan loket resmi venue.
            </p>
          </div>
        </div>

      </section>

    </div>
  );
}
