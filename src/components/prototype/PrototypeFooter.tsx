"use client";

import Link from "next/link";
import { ShieldCheck, Calendar, MapPin, ArrowUp } from "lucide-react";

export default function PrototypeFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#050507] text-[#F5F3EE] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Editorial Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex flex-col">
              <span
                className="text-3xl sm:text-4xl font-black tracking-tight text-[#F5F3EE] uppercase font-display"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                JKB <span className="text-[#D91F2C]">2026</span>
              </span>
              <span className="text-xs font-bold tracking-[0.2em] text-[#A7A7AD] uppercase mt-0.5 font-mono">
                JOGJA KICKBOXING FESTIVAL & REDY CHAMPIONSHIP 2
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#A7A7AD] max-w-sm leading-relaxed">
              Platform resmi festival olahraga tarung dan musik terbesar di Indonesia. Menyatukan sportivitas atletik nasional dan ekspresi budaya Yogyakarta.
            </p>

            <div className="flex items-center gap-3 pt-2 text-xs font-bold text-[#F5F3EE]/80 font-mono">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#D91F2C]" />
                12–14 Des 2026
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#D91F2C]" />
                GOR UNY, Yogyakarta
              </span>
            </div>
          </div>

          {/* Nav Links Cols (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs">
            
            {/* Col 1: Agenda & Event */}
            <div className="space-y-3">
              <p className="font-bold uppercase tracking-wider text-[#D91F2C] font-mono">
                Festival
              </p>
              <ul className="space-y-2 text-[#A7A7AD]">
                <li>
                  <Link href="/jadwal" className="hover:text-white transition-colors">
                    Jadwal 3 Hari
                  </Link>
                </li>
                <li>
                  <Link href="/championship" className="hover:text-white transition-colors">
                    Redy Championship 2
                  </Link>
                </li>
                <li>
                  <Link href="/lineup" className="hover:text-white transition-colors">
                    Panggung Musik
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    Venue GOR UNY
                  </Link>
                </li>
                <li>
                  <Link href="/tickets" className="hover:text-white transition-colors">
                    Informasi Tiket
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 2: Komunitas */}
            <div className="space-y-3">
              <p className="font-bold uppercase tracking-wider text-[#E2BA75] font-mono">
                Komunitas
              </p>
              <ul className="space-y-2 text-[#A7A7AD]">
                <li>
                  <Link href="/voting" className="hover:text-white transition-colors">
                    City Pride Voting
                  </Link>
                </li>
                <li>
                  <Link href="/creator" className="hover:text-white transition-colors">
                    Creator Hub & Media
                  </Link>
                </li>
                <li>
                  <Link href="/merchandise" className="hover:text-white transition-colors">
                    Official Apparel
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Informasi & Legal */}
            <div className="space-y-3 col-span-2 sm:col-span-1">
              <p className="font-bold uppercase tracking-wider text-white/60 font-mono">
                Informasi
              </p>
              <ul className="space-y-2 text-[#A7A7AD]">
                <li>
                  <Link href="/faq" className="hover:text-white transition-colors">
                    FAQ & Panduan
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Syarat & Ketentuan
                  </Link>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={scrollToTop}
                    className="inline-flex items-center gap-1.5 text-white/80 hover:text-white transition-colors pt-2"
                  >
                    <span>Kembali ke Atas</span>
                    <ArrowUp className="w-3 h-3" />
                  </button>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Prototype Badge */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#A7A7AD] font-mono">
          <p>© 2026 Jogja Kickboxing Festival & Redy Management. Hak cipta dilindungi.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>STAGE B PROTOTYPE V8 — VALIDATION PREVIEW</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
