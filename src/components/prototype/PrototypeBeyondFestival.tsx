"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Trophy, Sparkles, ShoppingBag, ShieldCheck, Tag } from "lucide-react";

export default function PrototypeBeyondFestival() {
  return (
    <section className="relative w-full bg-[#09090B] py-20 sm:py-28 border-t border-white/10 overflow-hidden">
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#D91F2C] mb-2 font-mono">
            KOMUNITAS & APPAREL RESMI
          </p>
          <h2
            className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#F5F3EE] leading-[0.95] font-display"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            BEYOND THE FESTIVAL.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#A7A7AD] leading-relaxed">
            Dari kebanggaan kontingen daerah Yogyakarta, ruang kolaborasi kreator dan media peliput, hingga apparel festival resmi edisi terbatas.
          </p>
        </div>

        {/* 3 Compact Editorial Community Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          
          {/* Card 1: CITY PRIDE VOTING */}
          <div className="rounded-sm bg-[#17171B] border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-[#D91F2C]/50 transition-all duration-300 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#D91F2C] uppercase tracking-wider font-mono">
                  PROGRAM KOMUNITAS
                </span>
                <Trophy className="w-4 h-4 text-[#D91F2C]" />
              </div>
              <h3
                className="text-2xl sm:text-3xl font-black uppercase text-[#F5F3EE] font-display"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                CITY PRIDE
              </h3>
              <p className="text-xs sm:text-sm text-[#A7A7AD] leading-relaxed">
                Dukungan publik untuk kontingen petarung daerah (Kota Jogja, Sleman, Bantul, dan sekitarnya). Suara warga menentukan peraih gelar kontingen terfavorit festival.
              </p>
              
              <div className="p-3 rounded-sm bg-white/5 border border-white/10 text-xs text-[#F5F3EE]/80 space-y-1">
                <p className="font-semibold text-white">Wilayah Partisipasi:</p>
                <p className="text-[#A7A7AD]">Kota Yogyakarta • Kabupaten Sleman • Kabupaten Bantul</p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10">
              <Link
                href="/voting"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5F3EE] hover:text-[#EF3340] group-hover:translate-x-1 transition-all font-display"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                <span>Beri Dukungan Wilayah</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D91F2C]" />
              </Link>
            </div>
          </div>

          {/* Card 2: CREATOR HUB & MEDIA */}
          <div className="rounded-sm bg-[#17171B] border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-[#E2BA75]/50 transition-all duration-300 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#E2BA75] uppercase tracking-wider font-mono">
                  MEDIA & KOLABORASI
                </span>
                <Sparkles className="w-4 h-4 text-[#E2BA75]" />
              </div>
              <h3
                className="text-2xl sm:text-3xl font-black uppercase text-[#F5F3EE] font-display"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                CREATOR HUB
              </h3>
              <p className="text-xs sm:text-sm text-[#A7A7AD] leading-relaxed">
                Pintu kolaborasi resmi bagi content creator, fotografer, videografer, dan media partner olahraga tarung untuk mengabadikan energi festival.
              </p>

              <div className="p-3 rounded-sm bg-white/5 border border-white/10 text-xs text-[#F5F3EE]/80 space-y-1">
                <p className="font-semibold text-white">Fokus Program:</p>
                <p className="text-[#A7A7AD]">Akreditasi liputan resmi, pedoman konten, & apresiasi karya</p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10">
              <Link
                href="/creator"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5F3EE] hover:text-amber-400 group-hover:translate-x-1 transition-all font-display"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                <span>Panduan Kreator & Media</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E2BA75]" />
              </Link>
            </div>
          </div>

          {/* Card 3: OFFICIAL APPAREL & MERCH */}
          <div className="rounded-sm bg-[#17171B] border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-white/30 transition-all duration-300 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-white/70 uppercase tracking-wider font-mono">
                  LIMITED APPAREL
                </span>
                <ShoppingBag className="w-4 h-4 text-white/70" />
              </div>
              <h3
                className="text-2xl sm:text-3xl font-black uppercase text-[#F5F3EE] font-display"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                OFFICIAL MERCH
              </h3>
              <p className="text-xs sm:text-sm text-[#A7A7AD] leading-relaxed">
                Koleksi merchandise festival resmi edisi terbatas: Heavyweight T-Shirt, Pullover Hoodie Charcoal, dan Handwraps tanding standar kejuaraan.
              </p>

              {/* Product Preview Strip */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <div className="relative h-20 rounded-sm overflow-hidden bg-black/40 border border-white/10">
                  <Image
                    src="/images/jkb/merch-tee-black.jpg"
                    alt="Official Heavyweight Tee JKB 2026"
                    fill
                    sizes="150px"
                    className="object-cover object-center filter grayscale group-hover:grayscale-0 transition-all"
                  />
                  <span className="absolute bottom-1 left-1 text-[9px] font-mono px-1 py-0.5 bg-black/80 text-white rounded">
                    T-Shirt Edisi 2
                  </span>
                </div>
                <div className="relative h-20 rounded-sm overflow-hidden bg-black/40 border border-white/10">
                  <Image
                    src="/images/jkb/merch-hoodie-charcoal.jpg"
                    alt="Official Hoodie Charcoal JKB 2026"
                    fill
                    sizes="150px"
                    className="object-cover object-center filter grayscale group-hover:grayscale-0 transition-all"
                  />
                  <span className="absolute bottom-1 left-1 text-[9px] font-mono px-1 py-0.5 bg-black/80 text-white rounded">
                    Hoodie Charcoal
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10">
              <Link
                href="/merchandise"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5F3EE] hover:text-white group-hover:translate-x-1 transition-all font-display"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                <span>Lihat Katalog Apparel</span>
                <ArrowRight className="w-3.5 h-3.5 text-white/60" />
              </Link>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
