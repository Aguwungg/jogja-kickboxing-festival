import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B0B0B] border-t border-white/10 pt-16 pb-12 z-20 relative text-[#8F8E8B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block group leading-none">
              <span
                className="font-display font-black text-4xl text-[#F4F0E8] tracking-tight group-hover:text-white transition-colors"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                JKBF
              </span>
              <span className="block font-sans text-[9px] font-bold tracking-[0.2em] text-[#8F8E8B] uppercase mt-1">
                JOGJA KICKBOXING FESTIVAL & REDY CHAMPIONSHIP 2
              </span>
            </Link>

            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.22em] text-[#D91F2C] font-extrabold">
                #JOGJAPUNYANYALI
              </p>
              <p className="text-xs uppercase tracking-[0.18em] text-[#F4F0E8] font-bold">
                DI BALIK KALEM.
              </p>
            </div>

            <p className="text-xs text-[#8F8E8B] leading-relaxed max-w-sm font-sans">
              Festival kejuaraan kickboxing profesional dan panggung festival musik pemuda di Yogyakarta.
              3 hari pertarungan, musik, dan gerakan kebanggaan kota.
            </p>

            <div className="pt-2 text-xs font-semibold text-[#F4F0E8] space-y-1">
              <p>12—14 DESEMBER 2026</p>
              <p className="text-[#8F8E8B]">GOR UNY, YOGYAKARTA</p>
            </div>
          </div>

          {/* Col 2: Pertandingan & Jadwal */}
          <div className="space-y-3">
            <h4
              className="font-extrabold text-xs uppercase tracking-[0.18em] text-[#F4F0E8]"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              Pertandingan
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li>
                <Link href="/championship" className="hover:text-[#F4F0E8] transition-colors">
                  Redy Championship 2
                </Link>
              </li>
              <li>
                <Link href="/jadwal" className="hover:text-[#F4F0E8] transition-colors">
                  Jadwal 3 Hari Laga
                </Link>
              </li>
              <li>
                <Link href="/bracket" className="hover:text-[#F4F0E8] transition-colors">
                  Bagan Turnamen
                </Link>
              </li>
              <li>
                <Link href="/fighters" className="hover:text-[#F4F0E8] transition-colors">
                  Daftar Petarung
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Festival & Komunitas */}
          <div className="space-y-3">
            <h4
              className="font-extrabold text-xs uppercase tracking-[0.18em] text-[#F4F0E8]"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              Festival & Kota
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li>
                <Link href="/lineup" className="hover:text-[#F4F0E8] transition-colors">
                  Lineup Musik
                </Link>
              </li>
              <li>
                <Link href="/venue" className="hover:text-[#F4F0E8] transition-colors">
                  Panduan GOR UNY
                </Link>
              </li>
              <li>
                <Link href="/city-pride" className="hover:text-[#F4F0E8] transition-colors">
                  City Pride
                </Link>
              </li>
              <li>
                <Link href="/creator" className="hover:text-[#F4F0E8] transition-colors">
                  Creator Hub
                </Link>
              </li>
              <li>
                <Link href="/tentang" className="hover:text-[#F4F0E8] transition-colors">
                  Tentang Festival
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Tiket & Bantuan */}
          <div className="space-y-3">
            <h4
              className="font-extrabold text-xs uppercase tracking-[0.18em] text-[#F4F0E8]"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              Tiket & Bantuan
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li>
                <Link href="/tiket" className="text-[#D91F2C] hover:underline flex items-center gap-1">
                  <span>Info Tiket</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <Link href="/merch" className="hover:text-[#F4F0E8] transition-colors">
                  Official Merch
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#F4F0E8] transition-colors">
                  FAQ & Bantuan
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-[#F4F0E8] transition-colors">
                  Hubungi Panitia
                </Link>
              </li>
              <li>
                <Link href="/syarat-ketentuan" className="hover:text-[#F4F0E8] transition-colors">
                  Syarat & Ketentuan
                </Link>
              </li>
              <li>
                <Link href="/kebijakan-privasi" className="hover:text-[#F4F0E8] transition-colors">
                  Kebijakan Privasi
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-[#5A5957]">
          <p>© 2026 JOGJA KICKBOXING FESTIVAL & REDY CHAMPIONSHIP 2. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-4">
            <span className="uppercase tracking-widest text-[#8F8E8B]">FIGHT CULTURE EDITORIAL</span>
            <Link href="/admin/login" className="hover:text-[#8F8E8B] transition-colors">
              Admin Access
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
