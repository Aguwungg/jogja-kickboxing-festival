import Link from "next/link";
import { Ticket, Calendar, MapPin, AlertCircle, Clock, ShieldCheck, ArrowRight, HelpCircle } from "lucide-react";
import { EVENT_CONFIG } from "@/lib/event-config";

export const metadata = {
  title: "Info Tiket Resmi — JKB 2026",
  description: "Informasi resmi tiket Jogja Kickboxing Festival & Redy Championship 2 (JKB 2026) di GOR UNY Yogyakarta.",
};

export default function TiketPage() {
  return (
    <div className="flex-1 w-full bg-[#09090B] text-[#F5F3EE] pt-28 pb-20">
      
      {/* Hero Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#D91F2C]/10 border border-[#D91F2C]/30 text-[#D91F2C] text-xs font-bold tracking-widest uppercase">
          <Ticket className="w-3.5 h-3.5" />
          <span>INFORMASI TIKET RESMI</span>
        </div>

        <h1
          className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[0.95]"
          style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
        >
          TIKET <span className="text-[#D91F2C]">JKB 2026</span>
        </h1>

        <p className="text-base sm:text-lg text-[#9A9AA2] max-w-xl mx-auto leading-relaxed">
          Saksikan kejuaraan kickboxing profesional Redy Championship 2 dan festival musik spektakuler di GOR UNY Yogyakarta.
        </p>

        {/* Event Key Facts */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs text-[#C4C4CC] pt-2">
          <span className="flex items-center gap-1.5 bg-[#171719] px-3.5 py-2 rounded-sm border border-white/5">
            <Calendar className="w-3.5 h-3.5 text-[#D91F2C]" />
            12–14 Desember 2026
          </span>
          <span className="flex items-center gap-1.5 bg-[#171719] px-3.5 py-2 rounded-sm border border-white/5">
            <MapPin className="w-3.5 h-3.5 text-[#D91F2C]" />
            GOR UNY, Yogyakarta
          </span>
        </div>
      </section>

      {/* Main Official Announcement & Future Purchasing Boundary */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-8">
        
        {/* Clean Announcement Box */}
        <div className="rounded-sm border border-white/10 bg-[#171719] p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="w-14 h-14 mx-auto rounded-full bg-[#D91F2C]/10 border border-[#D91F2C]/30 flex items-center justify-center text-[#D91F2C]">
            <Clock className="w-7 h-7" />
          </div>

          <div className="space-y-2">
            <h2
              className="font-display text-2xl sm:text-3xl font-black uppercase text-white"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              INFORMASI PEMBELIAN TIKET RESMI
            </h2>
            <p className="text-sm sm:text-base text-[#F5F3EE] font-medium">
              Informasi pembelian tiket resmi akan segera diumumkan.
            </p>
            <p className="text-xs sm:text-sm text-[#9A9AA2] max-w-md mx-auto leading-relaxed">
              Jadwal pembukaan penjualan, kuota penonton GOR UNY, dan tata cara pembelian tiket resmi akan dirilis secara resmi oleh panitia pelaksana.
            </p>
          </div>

          {/* Quick Guidance Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/jadwal"
              className="w-full sm:w-auto font-display font-bold text-xs uppercase tracking-widest px-6 py-3.5 bg-[#D91F2C] hover:bg-[#EF3340] text-white rounded-sm transition-all shadow-md shadow-[#D91F2C]/25 text-center"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              Lihat Jadwal Acara →
            </Link>
            <Link
              href="/venue"
              className="w-full sm:w-auto font-display font-bold text-xs uppercase tracking-widest px-6 py-3.5 bg-white/10 hover:bg-white/15 text-[#F5F3EE] rounded-sm transition-all text-center border border-white/10"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              Panduan Lokasi GOR UNY
            </Link>
          </div>
        </div>

        {/* Practical Visitor Guidelines */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 bg-[#171719]/60 border border-white/5 rounded-sm space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5F3EE]">
              <ShieldCheck className="w-4 h-4 text-green-400" />
              <span>Tiket Resmi & Gelang Masuk</span>
            </div>
            <p className="text-xs text-[#9A9AA2] leading-relaxed">
              Seluruh penonton wajib menukarkan e-voucher resmi dengan gelang tanda masuk fisik di loket verifikasi GOR UNY sebelum memasuki arena.
            </p>
          </div>

          <div className="p-5 bg-[#171719]/60 border border-white/5 rounded-sm space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5F3EE]">
              <HelpCircle className="w-4 h-4 text-[#E2BA75]" />
              <span>Pertanyaan Seputar Acara</span>
            </div>
            <p className="text-xs text-[#9A9AA2] leading-relaxed">
              Informasi mengenai aturan arena, barang bawaan, fasilitas disabilitas, dan parkir dapat dibaca di halaman FAQ atau melalui kontak panitia.
            </p>
          </div>
        </div>

        {/* Anti-Scalper & Safety Notice */}
        <div className="p-5 rounded-sm bg-[#171719] border border-white/10 flex items-start gap-3.5 text-xs text-[#9A9AA2]">
          <AlertCircle className="w-4 h-4 text-[#D91F2C] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-[#F5F3EE] uppercase tracking-wide block">
              Peringatan Keamanan & Anti-Calo
            </span>
            <p className="leading-relaxed">
              Hindari transaksi dengan perantara atau akun media sosial yang tidak resmi. Panitia JKB 2026 tidak bertanggung jawab atas tiket palsu atau e-voucher ganda yang diperoleh di luar kanal resmi penyelenggara.
            </p>
          </div>
        </div>

      </section>

    </div>
  );
}
