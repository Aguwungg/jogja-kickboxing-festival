import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B0B0B] border-t border-white/10 pt-16 pb-12 z-20 relative text-[#8F8E8B]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-14 pb-14 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block group leading-none">
              <span className="font-display text-4xl sm:text-5xl text-[#F4F0E8] tracking-wider group-hover:text-white transition-colors">
                JKBF<span className="text-[#D91F2C]">.</span>
              </span>
            </Link>

            <div className="space-y-0.5">
              <p className="font-technical text-xs uppercase tracking-[0.22em] text-[#D91F2C] font-bold">
                #JOGJAPUNYANYALI
              </p>
              <p className="font-display text-xl uppercase tracking-wider text-[#F4F0E8]">
                DI BALIK KALEM.
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#8F8E8B] leading-relaxed max-w-sm font-sans">
              Festival kejuaraan kickboxing profesional dan panggung musik pemuda di Yogyakarta.
              Tiga hari pertarungan, musik, dan gerakan kebanggaan kota.
            </p>

            <div className="pt-2 font-technical text-xs font-semibold text-[#F4F0E8] space-y-0.5">
              <p className="text-white">12—14 DESEMBER 2026</p>
              <p className="text-[#77716D]">GOR UNY, YOGYAKARTA</p>
            </div>
          </div>

          {/* Col 2: The Ring */}
          <div className="space-y-3.5">
            <h4 className="font-display text-base tracking-wider uppercase text-[#F4F0E8]">
              The Ring (Pertandingan)
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link href="/championship" className="hover:text-white transition-colors">
                  Redy Championship 2
                </Link>
              </li>
              <li>
                <Link href="/jadwal" className="hover:text-white transition-colors">
                  Jadwal 3 Hari Laga
                </Link>
              </li>
              <li>
                <Link href="/bracket" className="hover:text-white transition-colors">
                  Bagan Turnamen
                </Link>
              </li>
              <li>
                <Link href="/fighters" className="hover:text-white transition-colors">
                  Daftar Petarung
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: The Stage & The City */}
          <div className="space-y-3.5">
            <h4 className="font-display text-base tracking-wider uppercase text-[#F4F0E8]">
              Festival & Kota
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link href="/lineup" className="hover:text-white transition-colors">
                  Lineup Musik
                </Link>
              </li>
              <li>
                <Link href="/venue" className="hover:text-white transition-colors">
                  Panduan GOR UNY
                </Link>
              </li>
              <li>
                <Link href="/city-pride" className="hover:text-white transition-colors">
                  City Pride
                </Link>
              </li>
              <li>
                <Link href="/creator" className="hover:text-white transition-colors">
                  Creator Hub
                </Link>
              </li>
              <li>
                <Link href="/tentang" className="hover:text-white transition-colors">
                  Tentang Festival
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Tiket & Informasi */}
          <div className="space-y-3.5">
            <h4 className="font-display text-base tracking-wider uppercase text-[#F4F0E8]">
              Tiket & Bantuan
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link href="/tiket" className="text-[#D91F2C] hover:underline inline-flex items-center gap-1 font-semibold">
                  <span>Info Tiket</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link href="/merch" className="hover:text-white transition-colors">
                  Official Merchandise
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ & Bantuan
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-white transition-colors">
                  Hubungi Panitia
                </Link>
              </li>
              <li>
                <Link href="/syarat-ketentuan" className="hover:text-white transition-colors">
                  Syarat & Ketentuan
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

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#77716D]">
          <p>© 2026 JOGJA KICKBOXING FESTIVAL & REDY CHAMPIONSHIP 2.</p>
          <div className="flex items-center gap-6">
            <span className="font-technical text-[10px] uppercase tracking-widest text-[#8F8E8B]">
              FIGHT NIGHT × JOGJA CULTURE
            </span>
            <Link href="/admin/login" className="hover:text-white transition-colors">
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
