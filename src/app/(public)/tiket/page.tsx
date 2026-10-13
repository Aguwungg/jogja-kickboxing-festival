import Link from "next/link";
import { Ticket, Calendar, MapPin, Clock, ShieldCheck, ArrowUpRight, HelpCircle } from "lucide-react";
import { EVENT_CONFIG } from "@/lib/event-config";

export const metadata = {
  title: "Info Tiket Masuk Resmi | JKBF 2026",
  description: "Informasi resmi tiket Jogja Kickboxing Festival & Redy Championship 2 di GOR UNY Yogyakarta. Ketentuan tiket dan jadwal penjualan.",
};

const TICKET_TIERS_TEASER = [
  {
    name: "TRIBUN REGULER",
    scope: "AKSES 1 HARI (DAILY PASS)",
    desc: "Akses menonton laga kejuaraan dari area tribun melingkar dan panggung festival musik pada hari yang dipilih.",
    status: "MENUNGGU JADWAL RILIS",
  },
  {
    name: "RINGSIDE PASS",
    scope: "AKSES LANTAI UTAMA RING SIDE",
    desc: "Pengalaman terbaik melihat ketegangan kickboxing langsung dari sisi arena Octagon/Ring pertandingan dan akses festival stage.",
    status: "KUOTA TERBATAS",
  },
  {
    name: "3-DAY FESTIVAL PASS",
    scope: "ALL ACCESS (12—14 DESEMBER)",
    desc: "Tiket terusan 3 hari penuh dari sesi timbang badan pembuka, babak penyisihan, semifinal, hingga Championship Finals & konser penutup.",
    status: "PRESALE MENUNGGU JADWAL",
  },
];

export default function TiketPage() {
  return (
    <main className="flex-1 w-full bg-[#0B0B0B] text-[#F4F0E8] pt-24 pb-20">
      
      {/* Editorial Header */}
      <section className="relative w-full border-b border-white/10 py-16 md:py-24 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="v9-overline text-[#D91F2C]">
            AKSES RESMI & TIKET FESTIVAL
          </span>

          <h1
            className="v9-display-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F4F0E8]"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            INFO TIKET
          </h1>

          <p className="text-base sm:text-lg text-[#F4F0E8] font-bold uppercase tracking-wider font-display">
            SAKSIKAN PERTARUNGAN DAN KONSER DI GOR UNY YOGYAKARTA
          </p>

          <p className="text-xs sm:text-sm text-[#8F8E8B] max-w-2xl leading-relaxed font-sans">
            Informasi pembukaan penjualan tiket resmi, tata cara pemesanan mitra RAWOOH, dan panduan akses masuk penonton selama 3 hari festival (12—14 Desember 2026).
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono">
            <span className="flex items-center gap-1.5 text-[#F4F0E8]">
              <Calendar className="w-3.5 h-3.5 text-[#D91F2C]" />
              12—14 DESEMBER 2026
            </span>
            <span className="flex items-center gap-1.5 text-[#8F8E8B]">
              <MapPin className="w-3.5 h-3.5 text-[#D91F2C]" />
              GOR UNY, YOGYAKARTA
            </span>
          </div>
        </div>
      </section>

      {/* Main Announcement Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        
        <div className="bg-[#141416] border border-white/10 p-8 sm:p-12 text-center space-y-6 max-w-3xl mx-auto">
          <div className="w-12 h-12 mx-auto bg-[#0B0B0B] border border-white/10 flex items-center justify-center text-[#D91F2C]">
            <Clock className="w-6 h-6" />
          </div>

          <div className="space-y-2">
            <span className="text-[10px] text-[#D91F2C] font-mono tracking-widest uppercase block">
              STATUS PENJUALAN TIKET
            </span>
            <h2
              className="v9-display-title text-3xl sm:text-4xl text-[#F4F0E8]"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              INFORMASI PEMBELIAN SEGERA DIUMUMKAN
            </h2>
            <p className="text-xs sm:text-sm text-[#8F8E8B] max-w-md mx-auto leading-relaxed font-sans">
              Jadwal pembukaan tiket presale, pembagian kuota per kategori, dan mekanisme transaksi resmi melalui portal mitra RAWOOH akan dirilis secara resmi oleh panitia pelaksana.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/jadwal"
              className="v9-btn-red text-xs font-display font-black tracking-wider w-full sm:w-auto"
            >
              <span>LIHAT JADWAL 3 HARI ACARA</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/venue"
              className="v9-btn-ghost text-xs font-display font-extrabold tracking-wider w-full sm:w-auto"
            >
              <span>DENAH LOKASI GOR UNY</span>
            </Link>
          </div>
        </div>

        {/* Planned Ticket Categories Overview */}
        <div className="space-y-6">
          <div className="border-b border-white/10 pb-3">
            <span className="v9-overline text-[#D91F2C]">RENCANA KATEGORI</span>
            <h2
              className="v9-display-title text-3xl text-[#F4F0E8] mt-1"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              KATEGORI AKSES FESTIVAL
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TICKET_TIERS_TEASER.map((tier) => (
              <div key={tier.name} className="p-6 bg-[#141416] border border-white/10 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[10px] text-[#D91F2C] font-mono tracking-widest uppercase block">
                    {tier.scope}
                  </span>
                  <h3 className="font-display font-black text-2xl text-[#F4F0E8] uppercase" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
                    {tier.name}
                  </h3>
                  <p className="text-xs text-[#8F8E8B] leading-relaxed font-sans">
                    {tier.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/5">
                  <span className="text-[10px] font-mono text-[#8F8E8B] uppercase block">
                    STATUS: {tier.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Practical Ticketing Policies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="p-6 bg-[#141416] border border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-[#D91F2C]">
              <ShieldCheck className="w-5 h-5" />
              <h3 className="font-display font-black text-base text-[#F4F0E8] uppercase">
                PENUKARAN GELANG WRISTBAND
              </h3>
            </div>
            <p className="text-xs text-[#8F8E8B] leading-relaxed font-sans">
              Setiap e-voucher resmi wajib ditukarkan dengan gelang tanda masuk fisik di loket penukaran resmi GOR UNY sebelum memasuki arena pertandingan. Gelang harus terpasang erat di pergelangan tangan penonton.
            </p>
          </div>

          <div className="p-6 bg-[#141416] border border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-[#D91F2C]">
              <HelpCircle className="w-5 h-5" />
              <h3 className="font-display font-black text-base text-[#F4F0E8] uppercase">
                KEBIJAKAN KUNJUNGAN & RESCHEDULE
              </h3>
            </div>
            <p className="text-xs text-[#8F8E8B] leading-relaxed font-sans">
              Penonton di bawah 12 tahun wajib didampingi orang dewasa. Seluruh tiket yang telah dibeli mengikat aturan resmi penyelenggara festival dan tidak dapat dipindahtangankan tanpa persetujuan komite.
            </p>
          </div>
        </div>

      </section>

    </main>
  );
}
