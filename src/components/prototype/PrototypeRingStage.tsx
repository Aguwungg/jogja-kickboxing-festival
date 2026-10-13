"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Trophy, Music, Shield, Flame, Users } from "lucide-react";

export default function PrototypeRingStage() {
  return (
    <section className="relative w-full bg-[#09090B] py-20 sm:py-28 border-t border-white/10 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D91F2C]/10 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#D91F2C] mb-2 font-mono">
            DUA PENGALAMAN • SATU ARENA BESAR
          </p>
          <h2
            className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#F5F3EE] leading-[0.95] font-display"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            THE RING <span className="text-[#A7A7AD]/40">×</span> THE STAGE
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#A7A7AD] leading-relaxed">
            Menyatukan tensi tinggi laga kejuaraan kickboxing profesional dan kebebasan ekspresi festival musik anak muda dalam atmosfer GOR UNY.
          </p>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* ═══════════════════════════════════════════════════════════════════
              PILLAR 1: THE RING (Col 1-7, 7 Columns)
          ═══════════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-sm bg-[#17171B] border border-white/10 p-6 sm:p-10 relative overflow-hidden group hover:border-[#D91F2C]/50 transition-all duration-300">
            
            {/* Background Image with Ambient Overlay */}
            <div className="absolute inset-0 z-0 opacity-25 group-hover:opacity-35 transition-opacity duration-500">
              <Image
                src="/images/jkb/boxing-ring.jpg"
                alt="Ring Kejuaraan Kickboxing Redy Championship 2"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center filter grayscale group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17171B] via-[#17171B]/80 to-transparent" />
            </div>

            <div className="relative z-10 space-y-6">
              
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-widest text-[#D91F2C] uppercase font-mono">
                  01 / THE RING
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-[#D91F2C]/15 border border-[#D91F2C]/30 text-[#EF3340] text-[11px] font-bold uppercase tracking-wider">
                  <Trophy className="w-3.5 h-3.5" />
                  4 SABUK JUARA
                </span>
              </div>

              <div>
                <h3
                  className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-[#F5F3EE] tracking-tight leading-none mb-3 font-display"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  REDY CHAMPIONSHIP 2
                </h3>
                <p className="text-xs sm:text-sm text-[#A7A7AD] leading-relaxed max-w-xl">
                  Puncak pertarungan sistem gugur 80 atlet terpilih di 4 kelas divisi bergengsi (Bantamweight, Featherweight, Lightweight, Welterweight). Pertaruhan nyali, teknik, dan kehormatan di atas kanvas ring resmi.
                </p>
              </div>

              {/* Highlights Metric Strip */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10 text-left">
                <div>
                  <p className="text-xl sm:text-2xl font-black text-[#F5F3EE] font-display" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
                    80
                  </p>
                  <p className="text-[10px] sm:text-xs text-[#A7A7AD] uppercase tracking-wider font-mono">
                    Atlet Kurasi
                  </p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-[#F5F3EE] font-display" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
                    4 KELAS
                  </p>
                  <p className="text-[10px] sm:text-xs text-[#A7A7AD] uppercase tracking-wider font-mono">
                    Sabuk Emas
                  </p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-[#EF3340] font-display" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
                    3 HARI
                  </p>
                  <p className="text-[10px] sm:text-xs text-[#A7A7AD] uppercase tracking-wider font-mono">
                    Eliminasi - Final
                  </p>
                </div>
              </div>

            </div>

            <div className="relative z-10 pt-8 mt-6">
              <Link
                href="/championship"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#F5F3EE] hover:text-[#EF3340] group-hover:translate-x-1 transition-all font-display"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                <span>Eksplorasi Kejuaraan & Divisi</span>
                <ArrowRight className="w-4 h-4 text-[#D91F2C]" />
              </Link>
            </div>

          </div>

          {/* ═══════════════════════════════════════════════════════════════════
              PILLAR 2: THE STAGE (Col 8-12, 5 Columns)
          ═══════════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-sm bg-[#17171B] border border-white/10 p-6 sm:p-10 relative overflow-hidden group hover:border-amber-500/50 transition-all duration-300">
            
            {/* Background Image with Ambient Overlay */}
            <div className="absolute inset-0 z-0 opacity-25 group-hover:opacity-35 transition-opacity duration-500">
              <Image
                src="/images/jkb/concert-crowd.jpg"
                alt="Panggung Festival Musik Konser JKBF 2026"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center filter grayscale group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17171B] via-[#17171B]/80 to-transparent" />
            </div>

            <div className="relative z-10 space-y-6">
              
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-widest text-[#E2BA75] uppercase font-mono">
                  02 / THE STAGE
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-amber-500/15 border border-amber-500/30 text-amber-400 text-[11px] font-bold uppercase tracking-wider">
                  <Music className="w-3.5 h-3.5" />
                  LIVE PERFORMANCE
                </span>
              </div>

              <div>
                <h3
                  className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-[#F5F3EE] tracking-tight leading-none mb-3 font-display"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  FESTIVAL MUSIK
                </h3>
                <p className="text-xs sm:text-sm text-[#A7A7AD] leading-relaxed">
                  Bukan sekadar pertarungan, tapi perayaan komunal. Sunset sound session, penampilan musisi indie Jogja, dan panggung penutup akbar yang membakar malam minggu GOR UNY.
                </p>
              </div>

              {/* Highlights Feature Points */}
              <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs text-[#F5F3EE]/90">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>Sunset Sound Session Setiap Sore</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>Panggung Terbuka Festival Plaza GOR UNY</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>Afterparty & Selebrasi Perebutan Sabuk Juara</span>
                </div>
              </div>

            </div>

            <div className="relative z-10 pt-8 mt-6">
              <Link
                href="/lineup"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#F5F3EE] hover:text-amber-400 group-hover:translate-x-1 transition-all font-display"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                <span>Jelajahi Panggung Musik</span>
                <ArrowRight className="w-4 h-4 text-[#E2BA75]" />
              </Link>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
