import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#08080A] border-t border-white/10 pt-16 pb-12 z-20 relative text-[#8F8E8B]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Brand & Manifesto Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-block group leading-none">
              <div className="relative h-11 w-24 sm:h-12 sm:w-28 transition-transform duration-200 group-hover:scale-105">
                <Image
                  src="/JKBF Kickboxing Festival Emblem 1.png"
                  alt="Jogja Kickboxing Festival Official Logo"
                  fill
                  className="object-contain object-left"
                  sizes="120px"
                />
              </div>
            </Link>

            <div className="space-y-1">
              <p className="font-technical text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold">
                #JOGJAPUNYANYALI
              </p>
              <h3 className="font-display text-2xl uppercase tracking-wider text-[#F4F0E8]">
                DI BALIK KALEM, ADA NYALI.
              </h3>
            </div>

            <p className="text-sm text-[#8F8E8B] leading-relaxed max-w-md font-sans">
              Festival kejuaraan kickboxing dan perayaan panggung musik Yogyakarta. Diselenggarakan oleh 
              Pengprov Kickboxing Indonesia (KBI) DIY bersama Noise Comm Indonesia di GOR UNY Colombo.
            </p>

            <div className="pt-2 font-technical text-xs text-[#F4F0E8] flex flex-wrap items-center gap-x-3 gap-y-1.5">
              <span className="text-white font-semibold">12–14 DESEMBER 2026</span>
              <span className="text-white/30">•</span>
              <span className="text-[#D91F2C] font-bold">GOR UNY, YOGYAKARTA</span>
            </div>

            {/* Official Handbook Download Badge */}
            <div className="pt-3">
              <Link
                href="/tentang#thb"
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#141416] hover:bg-white/5 border border-white/10 text-xs font-technical text-[#F4F0E8] transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-[#D91F2C]" />
                <span>UNDUH TECHNICAL HANDBOOK (PDF)</span>
              </Link>
            </div>
          </div>

          {/* Quick Links Group (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Column 1: Kejuaraan */}
            <div className="space-y-3">
              <h4 className="font-display text-sm tracking-wider uppercase text-white">
                KEJUARAAN & LAGA
              </h4>
              <ul className="space-y-2.5 text-xs font-sans">
                <li>
                  <Link href="/championship" className="hover:text-white transition-colors">
                    Kejurda DIY 2026
                  </Link>
                </li>
                <li>
                  <Link href="/championship" className="hover:text-white transition-colors">
                    Redy Open Championship II
                  </Link>
                </li>
                <li>
                  <Link href="/fighters" className="hover:text-white transition-colors">
                    Direktori 200+ Atlet
                  </Link>
                </li>
                <li>
                  <Link href="/jadwal" className="hover:text-white transition-colors">
                    Jadwal Pertandingan 3 Hari
                  </Link>
                </li>
                <li>
                  <Link href="/tentang#regulasi" className="hover:text-white transition-colors">
                    Regulasi & WAKO Rules
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Festival */}
            <div className="space-y-3">
              <h4 className="font-display text-sm tracking-wider uppercase text-white">
                FESTIVAL & KULTUR
              </h4>
              <ul className="space-y-2.5 text-xs font-sans">
                <li>
                  <Link href="/lineup" className="hover:text-white transition-colors">
                    Panggung Musik
                  </Link>
                </li>
                <li>
                  <Link href="/venue" className="hover:text-white transition-colors">
                    Panduan Lokasi GOR UNY
                  </Link>
                </li>
                <li>
                  <Link href="/tentang#festival" className="hover:text-white transition-colors">
                    Aktivitas & Ekshibisi
                  </Link>
                </li>
                <li>
                  <Link href="/jadwal" className="text-[#D91F2C] hover:underline inline-flex items-center gap-1 font-semibold">
                    <span>Jadwal 3 Hari</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Informasi Resmi & Legal */}
            <div className="space-y-3 col-span-2 sm:col-span-1">
              <h4 className="font-display text-sm tracking-wider uppercase text-white">
                INFORMASI RESMI
              </h4>
              <ul className="space-y-2.5 text-xs font-sans">
                <li>
                  <Link href="/tentang" className="hover:text-white transition-colors">
                    Profil Pengprov KBI DIY
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-white transition-colors">
                    FAQ & Panduan Penonton
                  </Link>
                </li>
                <li>
                  <Link href="/kontak" className="hover:text-white transition-colors">
                    Sekretariat & Panitia
                  </Link>
                </li>
                <li>
                  <Link href="/kebijakan-privasi" className="hover:text-white transition-colors">
                    Kebijakan Privasi
                  </Link>
                </li>
                <li>
                  <Link href="/syarat-ketentuan" className="hover:text-white transition-colors">
                    Syarat & Ketentuan
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Legal Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#77716D] font-technical">
          <div className="flex flex-col gap-1">
            <p>© 2026 JOGJA KICKBOXING FESTIVAL. SELURUH HAK CIPTA DILINDUNGI.</p>
            <p className="text-[11px] text-[#55524E]">
              Disahkan Pengprov Kickboxing Indonesia DIY & Noise Comm Indonesia. Didukung KONI DIY.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#D91F2C]" />
            <span className="text-[10px] uppercase tracking-widest text-[#8F8E8B]">
              OFFICIAL WAKO ACCREDITED EVENT
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
