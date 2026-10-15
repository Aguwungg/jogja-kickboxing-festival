import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B0B0B] border-t border-white/10 pt-12 sm:pt-16 pb-10 z-20 relative text-[#8F8E8B]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-white/10">
          
          {/* Brand & Manifesto Column (7 cols on Desktop) */}
          <div className="lg:col-span-6 space-y-4">
            <Link href="/" className="inline-block group leading-none">
              <span className="font-display text-3xl sm:text-4xl text-[#F4F0E8] tracking-wider group-hover:text-white transition-colors">
                JKBF<span className="text-[#D91F2C]">.</span>
              </span>
            </Link>

            <div className="space-y-0.5">
              <p className="font-technical text-xs uppercase tracking-[0.22em] text-[#D91F2C] font-bold">
                #JOGJAPUNYANYALI
              </p>
              <p className="font-display text-lg sm:text-xl uppercase tracking-wider text-[#F4F0E8]">
                DI BALIK KALEM, KITA BERTARUNG.
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#8F8E8B] leading-relaxed max-w-md font-sans">
              Festival kejuaraan kickboxing profesional dan panggung pertunjukan musik Yogyakarta. 
              Tiga hari pertarungan, musik, dan gerakan kebanggaan kota.
            </p>

            <div className="pt-1 font-technical text-xs font-semibold text-[#F4F0E8] flex flex-wrap items-center gap-x-4 gap-y-1">
              <span className="text-white">12—14 DESEMBER 2026</span>
              <span className="text-white/30">•</span>
              <span className="text-[#D91F2C] font-bold">GOR UNY, YOGYAKARTA</span>
            </div>
          </div>

          {/* Quick Links Group (6 cols on Desktop, 2 cols on Mobile) */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-2 gap-6 sm:gap-10 pt-2 lg:pt-0">
            {/* Primary Destinations */}
            <div className="space-y-3">
              <h4 className="font-display text-sm tracking-wider uppercase text-white">
                FESTIVAL & LAGA
              </h4>
              <ul className="space-y-2 text-xs font-medium font-sans">
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
                  <Link href="/bracket" className="hover:text-white transition-colors">
                    Bagan Turnamen
                  </Link>
                </li>
                <li>
                  <Link href="/lineup" className="hover:text-white transition-colors">
                    Panggung Musik
                  </Link>
                </li>
                <li>
                  <Link href="/merch" className="hover:text-white transition-colors">
                    Official Merch
                  </Link>
                </li>
              </ul>
            </div>

            {/* Assistance & Legal */}
            <div className="space-y-3">
              <h4 className="font-display text-sm tracking-wider uppercase text-white">
                PANDUAN & BANTUAN
              </h4>
              <ul className="space-y-2 text-xs font-medium font-sans">
                <li>
                  <Link href="/tiket" className="text-[#D91F2C] hover:underline inline-flex items-center gap-1 font-semibold">
                    <span>Info Tiket</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <Link href="/venue" className="hover:text-white transition-colors">
                    Panduan Lokasi UNY
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-white transition-colors">
                    FAQ & Aturan
                  </Link>
                </li>
                <li>
                  <Link href="/kontak" className="hover:text-white transition-colors">
                    Hubungi Panitia
                  </Link>
                </li>
                <li>
                  <Link href="/kebijakan-privasi" className="hover:text-white transition-colors">
                    Kebijakan Privasi
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar — No Irrelevant Admin Link */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#77716D] font-technical">
          <p>© 2026 JOGJA KICKBOXING FESTIVAL & REDY CHAMPIONSHIP 2.</p>
          <div className="flex items-center gap-4">
            <span className="text-[10px] uppercase tracking-widest text-[#8F8E8B]">
              FIGHT NIGHT × JOGJA CULTURE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
