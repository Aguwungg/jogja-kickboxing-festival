import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles, Clock, MapPin, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Official Merch Drop | JKBF 2026",
  description:
    "Koleksi merchandise & apparel resmi Jogja Kickboxing Festival & Redy Championship 2: Streetwear, fight gear, dan edisi terbatas #JOGJAPUNYANYALI.",
};

const PREVIEW_COLLECTIONS = [
  {
    title: "OVERSIZED COMBAT TEE",
    category: "COTTON COMBED 24S HEAVYWEIGHT",
    desc: "Kaos streetwear edisi khusus #JOGJAPUNYANYALI dengan grafis tipografi GLORY di punggung.",
    image: "/images/merch/tshirt-black-front.jpg",
  },
  {
    title: "OFFICIAL CORNER HOODIE",
    category: "FRENCH TERRY 380 GSM",
    desc: "Hoodie petarung dengan bordir emblem resmi Pengprov KBI DIY dan aksen merah kanvas ring.",
    image: "/images/merch/hoodie-black-front.jpg",
  },
  {
    title: "SNAPBACK & FIGHT ACCESSORIES",
    category: "LIMITED FESTIVAL DROP",
    desc: "Topi snapback, sticker pack tahan air, dan lanyard eksklusif penyelenggaraan 2026.",
    image: "/images/merch/snapback-black.jpg",
  },
];

export default function MerchPage() {
  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#0B0B0B] text-[#F4F0E8] pt-24 lg:pt-32 pb-24 font-sans">
      
      {/* ═════════════════════════════════════════════════════════════════════
          1. EDITORIAL HEADER & COMING SOON BANNER
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-6 pb-12 w-full border-b border-white/10">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-2.5 h-2.5 bg-[#D91F2C]" />
          <p className="font-technical text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
            OFFICIAL APPAREL • STREETWEAR DROP
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.88] text-[#F4F0E8]">
              OFFICIAL MERCHANDISE<br />
              <span className="text-[#D91F2C]">SEGERA HADIR.</span>
            </h1>
          </div>

          <p className="text-xs sm:text-sm text-[#8F8E8B] font-sans max-w-sm sm:text-right">
            Lini streetwear dan fight gear resmi Jogja Kickboxing Festival 2026. Koleksi resmi akan dirilis menjelang event di GOR UNY.
          </p>
        </div>

        {/* Status Notice Banner */}
        <div className="mt-8 p-5 bg-[#141416] border-l-4 border-[#D91F2C] border-y border-r border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-[#D91F2C] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="font-display text-base uppercase tracking-wider text-white">
                KATALOG RESMI AKAN SEGERA DILUNCURKAN
              </h4>
              <p className="font-sans text-xs text-[#8F8E8B] leading-relaxed max-w-2xl">
                Penjualan pre-order apparel dan booth merchandise fisik di arena GOR UNY akan dibuka bersamaan dengan pengumuman resmi jadwal pertandingan. Seluruh rilisan diproduksi dengan material premium dan kuota terbatas.
              </p>
            </div>
          </div>
          <div className="shrink-0 font-technical text-xs text-[#D91F2C] bg-[#D91F2C]/10 border border-[#D91F2C]/30 px-3 py-1.5 uppercase font-bold tracking-wider self-start md:self-auto">
            STATUS: DROP MENJELANG EVENT
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. EDITORIAL PREVIEW CARDS (GYMSHARK INSPIRED)
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12 w-full flex-1">
        <div className="mb-8">
          <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-white">
            PREVIEW LINI KOLEKSI RESMI
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#8F8E8B] mt-1">
            Cuplikan desain edisi terbatas yang akan tersedia di official merchandise store:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PREVIEW_COLLECTIONS.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#121214] border border-white/10 overflow-hidden group flex flex-col justify-between"
            >
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-black/40">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center filter grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent" />
                <span className="absolute top-4 left-4 font-technical text-[10px] uppercase font-bold tracking-wider bg-[#0B0B0B]/80 text-[#D91F2C] px-2.5 py-1 border border-white/10">
                  TEASER DROP
                </span>
              </div>

              <div className="p-6 space-y-2">
                <span className="font-technical text-[10px] uppercase tracking-wider text-[#8F8E8B] block font-bold">
                  {item.category}
                </span>
                <h3 className="font-display text-2xl uppercase tracking-wider text-white group-hover:text-[#D91F2C] transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-[#8F8E8B] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="p-6 pt-0 border-t border-white/5 mt-4">
                <span className="font-technical text-xs text-[#77716D] uppercase">
                  Rilis Resmi: November 2026
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Events Guide */}
        <div className="mt-12 p-6 sm:p-8 bg-[#141416] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-display text-xl uppercase tracking-wider text-white">
              EKSPLORASI JADWAL LAGA & FESTIVAL MUSIK
            </h4>
            <p className="font-sans text-xs text-[#8F8E8B] max-w-xl">
              Sembari menunggu perilisan apparel, Anda dapat meninjau rundown 3 hari di GOR UNY atau susunan partai kejuaraan.
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
