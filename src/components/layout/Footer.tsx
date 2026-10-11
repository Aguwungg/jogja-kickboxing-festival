import Link from "next/link";
import { MapPin, Calendar, Mail, Phone, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#171719] border-t border-white/10 pt-16 pb-12 z-20 relative text-[#9A9AA2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Narrative (2 Cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block group">
              <span
                className="font-black text-3xl md:text-4xl text-[#F5F3EE] tracking-wider uppercase leading-none group-hover:text-white transition-colors"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                JKB <span className="text-[#D91F2C]">2026</span>
              </span>
            </Link>
            
            <p className="text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold">
              #JOGJAPUNYANYALI • DI BALIK KALEM
            </p>

            <p className="text-sm text-[#C4C4CC] leading-relaxed max-w-sm">
              Pertunjukan sportainment terbesar di Yogyakarta. Menggabungkan ketegangan kejuaraan kickboxing profesional dan panggung festival musik spektakuler di GOR UNY.
            </p>

            <div className="pt-2 space-y-1.5 text-xs text-[#9A9AA2]">
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-[#D91F2C]" />
                <span className="text-[#F5F3EE] font-medium">12–14 Desember 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D91F2C]" />
                <span>Gelanggang Olahraga Universitas Negeri Yogyakarta (GOR UNY)</span>
              </div>
            </div>
          </div>

          {/* Col 1: Acara & Pertandingan */}
          <div className="space-y-3">
            <h4
              className="font-bold text-sm uppercase tracking-widest text-[#F5F3EE]"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              Acara & Ring
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link href="/tentang" className="hover:text-[#F5F3EE] transition-colors">
                  Tentang JKB 2026
                </Link>
              </li>
              <li>
                <Link href="/jadwal" className="hover:text-[#F5F3EE] transition-colors">
                  Jadwal 3 Hari Laga
                </Link>
              </li>
              <li>
                <Link href="/lineup" className="hover:text-[#F5F3EE] transition-colors">
                  Lineup Musik & Panggung
                </Link>
              </li>
              <li>
                <Link href="/championship" className="hover:text-[#F5F3EE] transition-colors">
                  Redy Championship 2
                </Link>
              </li>
              <li>
                <Link href="/fighters" className="hover:text-[#F5F3EE] transition-colors">
                  Roster Petarung
                </Link>
              </li>
              <li>
                <Link href="/bracket" className="hover:text-[#F5F3EE] transition-colors">
                  Bagan Pertandingan
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Komunitas & Tiket */}
          <div className="space-y-3">
            <h4
              className="font-bold text-sm uppercase tracking-widest text-[#F5F3EE]"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              Komunitas & Toko
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link href="/tiket" className="text-[#D91F2C] hover:underline font-bold">
                  Info Tiket Festival
                </Link>
              </li>
              <li>
                <Link href="/city-pride" className="hover:text-[#F5F3EE] transition-colors">
                  City Pride Voting
                </Link>
              </li>
              <li>
                <Link href="/creator" className="hover:text-[#F5F3EE] transition-colors">
                  Program Kreator & Media
                </Link>
              </li>
              <li>
                <Link href="/merch" className="hover:text-[#F5F3EE] transition-colors">
                  Official Merch Catalog
                </Link>
              </li>
              <li>
                <Link href="/venue" className="hover:text-[#F5F3EE] transition-colors">
                  Panduan Venue & Akses
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Bantuan & Sekretariat */}
          <div className="space-y-3">
            <h4
              className="font-bold text-sm uppercase tracking-widest text-[#F5F3EE]"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              Bantuan & Kontak
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link href="/faq" className="hover:text-[#F5F3EE] transition-colors">
                  FAQ & Tanya Jawab
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-[#F5F3EE] transition-colors">
                  Kontak Sekretariat Resmi
                </Link>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=GOR+UNY+Yogyakarta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F5F3EE] transition-colors flex items-center gap-1"
                >
                  <span>Peta Lokasi Google Maps</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-wider block text-[#F5F3EE] font-semibold mb-2">
                Kanal Resmi
              </span>
              <div className="flex gap-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-sm bg-[#09090B] border border-white/10 flex items-center justify-center hover:border-[#D91F2C] hover:text-white transition-all text-xs"
                  aria-label="Instagram JKB 2026"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-sm bg-[#09090B] border border-white/10 flex items-center justify-center hover:border-[#D91F2C] hover:text-white transition-all text-xs"
                  aria-label="YouTube JKB 2026"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a
                  href="mailto:halo@jkb2026.id"
                  className="w-8 h-8 rounded-sm bg-[#09090B] border border-white/10 flex items-center justify-center hover:border-[#D91F2C] hover:text-white transition-all text-xs"
                  aria-label="Email Sekretariat"
                >
                  <Mail className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-center sm:text-left text-[#9A9AA2]">
            &copy; {new Date().getFullYear()} JKB 2026. Official Digital Platform. Hak Cipta Dilindungi.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-[#9A9AA2]">
            <Link href="/kebijakan-privasi" className="hover:text-[#F5F3EE] transition-colors">
              Kebijakan Privasi
            </Link>
            <Link href="/syarat-ketentuan" className="hover:text-[#F5F3EE] transition-colors">
              Syarat & Ketentuan
            </Link>
            <Link href="/kontak" className="hover:text-[#F5F3EE] transition-colors">
              Sekretariat Panitia
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
