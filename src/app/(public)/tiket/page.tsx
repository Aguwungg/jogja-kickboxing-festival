import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Ticket, Sparkles, MapPin, Calendar } from "lucide-react";

export const metadata = {
  title: "Info Tiket Masuk Resmi | JKBF 2026",
  description:
    "Informasi resmi tiket Jogja Kickboxing Festival & Redy Championship 2 di GOR UNY Yogyakarta: Tribun Reguler, Ringside VIP, dan 3-Day Festival Pass.",
};

const TICKET_TIERS = [
  {
    number: "01",
    name: "TRIBUN REGULER",
    badge: "DAILY PASS",
    price: "Rp 75.000",
    scope: "Akses 1 Hari Pertandingan & Musik Bebas Pilih",
    desc: "Akses tribun melingkar berjarak pandang penuh ke arah ring K-1 dan festival musik pada hari yang Anda pilih.",
    perks: ["Akses Tribun Melingkar GOR UNY", "Akses Panggung Musik Live", "Akses Food & Official Merch Area"],
    status: "SEGERA DIBUKA",
    popular: false,
    ctaText: "PILIH TRIBUN REGULER",
    ctaHref: "https://wa.me/6281234567890?text=Halo%20Panitia%20JKBF%202026,%20saya%20ingin%20informasi%20pemesanan%20Tiket%20Tribun%20Reguler",
  },
  {
    number: "02",
    name: "RINGSIDE FLOOR VIP",
    badge: "KUOTA TERBATAS",
    price: "Rp 250.000",
    scope: "Akses Eksklusif Lantai Utama Sisi Kanvas Ring",
    desc: "Pengalaman terbaik melihat benturan fisik atlet langsung dari kursi VIP sisi ring dengan jalur masuk prioritas.",
    perks: [
      "Kursi Eksklusif Tepi Kanvas Ring",
      "Fast-Track Pintu Masuk Prioritas VIP",
      "Akses Backstage Lounge & Panggung Musik",
      "Official Event Lanyard & Sticker Pack",
    ],
    status: "KUOTA TERBATAS",
    popular: true,
    ctaText: "PESAN RINGSIDE VIP",
    ctaHref: "https://wa.me/6281234567890?text=Halo%20Panitia%20JKBF%202026,%20saya%20ingin%20reservasi%20Tiket%20Ringside%20VIP",
  },
  {
    number: "03",
    name: "3-DAY FESTIVAL PASS",
    badge: "ALL-ACCESS TERUSAN",
    price: "Rp 180.000",
    scope: "Terusan Penuh 3 Hari (12–14 Desember 2026)",
    desc: "Tiket terusan 3 hari penuh dari sesi timbang badan pembuka, penyisihan, semifinal, hingga Grand Final & closing concert.",
    perks: [
      "Akses 3 Hari Penuh Tanpa Batas",
      "Wristband Khusus Kolektor Eksklusif",
      "Akses Penuh Seluruh Laga & Konser Musik",
      "Prioritas Pembelian Official Merchandise",
    ],
    status: "PRESALE RESMI",
    popular: false,
    ctaText: "AMBIL 3-DAY PASS",
    ctaHref: "https://wa.me/6281234567890?text=Halo%20Panitia%20JKBF%202026,%20saya%20ingin%20presale%203-Day%20Festival%20Pass",
  },
];

export default function TiketPage() {
  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#09090B] text-[#FAFAFA] pt-24 lg:pt-32 pb-24 font-sans">
      
      {/* ═════════════════════════════════════════════════════════════════════
          1. COMPACT ELECTRIC HERO
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-6 pb-12 w-full border-b border-white/10">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-2.5 h-2.5 bg-[#D91F2C]" />
          <p className="font-technical text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
            OFFICIAL TICKETING GATEWAY • JKBF 2026
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.85] text-white">
              AMANKAN<br />
              <span className="text-[#D91F2C]">KURSI ANDA.</span>
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs font-technical text-white/70">
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

        {/* Security badge notice */}
        <div className="mt-8 p-4 bg-[#141416] border-l-4 border-[#D91F2C] border-y border-r border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#D91F2C] shrink-0" />
            <p className="font-sans text-xs text-white/80">
              Penjualan tiket resmi hanya dilakukan melalui portal resmi panitia dan mitra resmi (RAWOOH). Seluruh e-voucher dilengkapi enkripsi barcode QRIS untuk penukaran gelang wristband di venue GOR UNY.
            </p>
          </div>
          <span className="font-technical text-xs text-[#D91F2C] font-bold uppercase tracking-wider shrink-0">
            TIKET ASLI & TERVERIFIKASI
          </span>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. TICKET CATEGORIES (RESPONSIVE CARDS)
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12 w-full flex-1">
        <div className="mb-8">
          <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-white">
            PILIHAN KATEGORI TIKET
          </h2>
          <p className="font-sans text-xs sm:text-sm text-white/50 mt-1">
            Pilih akses yang sesuai dengan preferensi pengalaman menonton Anda di GOR UNY.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TICKET_TIERS.map((tier) => (
            <div
              key={tier.number}
              className={`p-6 sm:p-8 flex flex-col justify-between transition-all relative ${
                tier.popular
                  ? "bg-[#141416] border-2 border-[#D91F2C] shadow-[0_0_35px_rgba(217,31,44,0.18)]"
                  : "bg-[#101012] border border-white/10 hover:border-white/20"
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="font-technical text-xs text-white/40 font-bold">
                    KATEGORI {tier.number}
                  </span>
                  <span className="font-technical text-[10px] uppercase font-bold text-[#D91F2C] bg-[#D91F2C]/10 border border-[#D91F2C]/20 px-2 py-0.5">
                    {tier.badge}
                  </span>
                </div>

                <div className="mt-4">
                  <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-white">
                    {tier.name}
                  </h3>
                  <div className="text-2xl sm:text-3xl font-display text-[#D91F2C] font-black mt-1">
                    {tier.price}
                  </div>
                  <p className="font-technical text-xs text-white/60 font-semibold uppercase mt-1">
                    {tier.scope}
                  </p>
                  <p className="font-sans text-xs text-white/50 mt-3 leading-relaxed">
                    {tier.desc}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 space-y-2.5">
                  <span className="font-technical text-[10px] text-white/40 uppercase tracking-wider block">
                    FASILITAS TIKET:
                  </span>
                  {tier.perks.map((perk, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-white/80 font-sans">
                      <span className="text-[#D91F2C] font-bold">✓</span>
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 space-y-3">
                <div className="flex items-center justify-between text-[11px] font-technical">
                  <span className="text-amber-400 font-bold uppercase tracking-wider">
                    ● {tier.status}
                  </span>
                  <span className="text-white/40">
                    GOR UNY Colombo
                  </span>
                </div>
                <a
                  href={tier.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 font-display text-xs sm:text-sm uppercase tracking-wider text-center transition-all flex items-center justify-center gap-2 ${
                    tier.popular
                      ? "bg-[#D91F2C] text-white hover:bg-[#B81521] shadow-lg shadow-[#D91F2C]/30"
                      : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Action Links */}
        <div className="mt-12 p-6 bg-[#121214] border border-white/10 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display text-lg uppercase tracking-wider text-white">
              INGIN MENGETAHUI SUSUNAN JADWAL TERLEBIH DAHULU?
            </h4>
            <p className="font-sans text-xs text-white/50">
              Lihat jadwal kronologis partai K-1 dan pertunjukan panggung musik per harinya.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/jadwal"
              className="font-display text-xs sm:text-sm tracking-wider uppercase text-white bg-[#D91F2C] hover:bg-[#B81521] px-5 py-2.5 rounded transition-all inline-flex items-center gap-1.5"
            >
              <span>JADWAL 3 HARI</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/venue"
              className="font-display text-xs sm:text-sm tracking-wider uppercase text-white/80 hover:text-white border border-white/20 hover:border-white px-5 py-2.5 rounded transition-all inline-flex items-center gap-1.5"
            >
              <span>DENAH GOR UNY</span>
              <ArrowUpRight className="w-4 h-4 text-[#D91F2C]" />
            </Link>
          </div>
        </div>

      </section>

    </main>
  );
}
