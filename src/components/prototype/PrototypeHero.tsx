"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Calendar, MapPin, Sparkles, Shield, Flame } from "lucide-react";

export default function PrototypeHero() {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#09090B] pt-24 pb-16 sm:py-28">
      
      {/* ═══════════════════════════════════════════════════════════════════════
          ATMOSPHERIC EDITORIAL BACKGROUND (COMBAT × FESTIVAL DUOTONE)
      ═══════════════════════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        
        {/* Left Side: Combat Energy Imagery */}
        <div className="absolute top-0 left-0 w-full lg:w-1/2 h-full opacity-30 lg:opacity-40 mix-blend-luminosity overflow-hidden">
          <Image
            src="/images/jkb/hero-boxing.jpg"
            alt="Intensitas Pertandingan Kickboxing JKBF 2026"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-top filter grayscale contrast-125"
          />
          {/* Subtle Red Edge Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#09090B]/90 via-transparent to-[#09090B]" />
        </div>

        {/* Right Side: Festival Stage Energy Imagery */}
        <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full opacity-35 mix-blend-luminosity overflow-hidden">
          <Image
            src="/images/jkb/hero-concert.jpg"
            alt="Panggung Festival Musik Spektakuler JKBF 2026"
            fill
            priority
            sizes="50vw"
            className="object-cover object-center filter grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#09090B]/90 via-transparent to-[#09090B]" />
        </div>

        {/* Global Dark Overlays for Extreme Contrast & Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090B]/80 via-[#09090B]/70 to-[#09090B]" />
        
        {/* Dynamic Graphic Slash / Ring Rope Light Accent */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-[#D91F2C]/40 to-transparent" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          FOREGROUND EDITORIAL CONTENT CONTAINER
      ═══════════════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center">
        
        <div className="max-w-4xl">
          
          {/* 1. Kicker / Event Identity Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-white/5 border border-white/10 text-[#A7A7AD] text-xs font-bold tracking-widest uppercase mb-5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#D91F2C] animate-pulse" />
            <span className="font-mono text-[11px] sm:text-xs">
              JOGJA KICKBOXING FESTIVAL × REDY CHAMPIONSHIP 2
            </span>
          </div>

          {/* 2. Main Headline: RAW ENERGY */}
          <h1
            className="text-[44px] xs:text-5xl sm:text-7xl md:text-8xl lg:text-[104px] font-black uppercase text-[#F5F3EE] tracking-tight leading-[0.88] mb-4 font-display select-none"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            JOGJA PUNYA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D91F2C] via-[#EF3340] to-[#F5F3EE]">
              NYALI.
            </span>
          </h1>

          {/* 3. Creative Narrative: DI BALIK KALEM */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 sm:w-12 h-[2px] bg-[#D91F2C]" />
            <p
              className="text-lg sm:text-2xl md:text-3xl font-extrabold italic tracking-wide text-[#F5F3EE]/90 uppercase font-display"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              DI BALIK KALEM
            </p>
            <span className="text-xs sm:text-sm font-medium text-[#A7A7AD] tracking-wider uppercase font-mono">
              — Combat Sports × Festival Musik
            </span>
          </div>

          {/* Supporting Pitch Narrative */}
          <p className="text-sm sm:text-base md:text-lg text-[#A7A7AD] max-w-2xl font-normal leading-relaxed mb-8">
            Pertemuan terbesar antara kegigihan 80 petarung kickboxing nasional memperebutkan 4 sabuk emas 
            dan euforia panggung konser musik festival di jantung Yogyakarta.
          </p>

          {/* 4. Practical Anchor: Date & Venue */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 pb-8 border-y border-white/10 mb-8 max-w-2xl text-xs sm:text-sm">
            <div className="flex items-center gap-2.5 text-[#F5F3EE] font-bold tracking-wider font-mono">
              <Calendar className="w-4 h-4 text-[#D91F2C]" />
              <span>12–14 DESEMBER 2026</span>
            </div>
            <div className="h-3 w-[1px] bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-2 text-[#A7A7AD] font-medium">
              <MapPin className="w-4 h-4 text-white/60" />
              <span>GOR UNY, YOGYAKARTA</span>
            </div>
          </div>

          {/* 5. Clear Call to Action Group */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
            
            {/* Primary Action */}
            <Link
              href="/tickets"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-sm bg-[#D91F2C] text-[#F5F3EE] text-sm sm:text-base font-black tracking-wider uppercase transition-all duration-200 hover:bg-[#EF3340] hover:shadow-xl hover:shadow-[#D91F2C]/30 active:scale-[0.98] font-display"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              <span>INFO TIKET & AKSES</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            {/* Secondary Action */}
            <Link
              href="/jadwal"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-sm bg-white/5 border border-white/15 text-[#F5F3EE] text-sm sm:text-base font-bold tracking-wider uppercase transition-all duration-200 hover:bg-white/10 hover:border-white/30 font-display"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              <span>LIHAT JADWAL 3 HARI</span>
            </Link>

          </div>

        </div>

      </div>

      {/* Decorative Bottom Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D91F2C]/50 to-transparent" />
    </section>
  );
}
