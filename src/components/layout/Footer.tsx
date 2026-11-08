import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, ArrowUpRight } from "lucide-react";
import { jkbfLinks, registrationConfig } from "@/lib/event-config";

export default function Footer() {
  return (
    <footer
      className="w-full bg-black border-t border-white/[0.08] pt-16 pb-12 z-20 relative text-[#86868B] font-sans"
      aria-label="Footer Jogja Kickboxing Festival"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/[0.08]">

          {/* Brand column (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <Link href="/" className="inline-block group leading-none" aria-label="Beranda JKBF">
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
              <h3 className="font-display text-xl sm:text-2xl uppercase tracking-wider text-[#F5F5F7]">
                DI BALIK KALEM, ADA NYALI.
              </h3>
            </div>

            <p className="text-sm text-[#86868B] leading-relaxed max-w-sm font-sans">
              Kejuaraan kickboxing resmi Yogyakarta — wadah kompetisi, pembinaan atlet, dan pengembangan kultur olahraga beladiri. Diselenggarakan oleh Pengprov Kickboxing Indonesia (KBI) DIY bersama Noise Comm Indonesia.
            </p>

            {/* Brand statement */}
            <p className="font-technical text-xs uppercase tracking-[0.2em] text-[#6E6E73]">
              RISE • FIGHT • CONQUER
            </p>
          </div>

          {/* Navigation columns (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Col 1: Kejuaraan */}
            <div className="space-y-3">
              <h4 className="font-display text-sm tracking-wider uppercase text-white">
                KEJUARAAN
              </h4>
              <ul className="space-y-2.5 text-xs font-sans text-[#86868B]">
                <li>
                  <Link href="/championship" className="hover:text-white transition-colors">
                    7 Program Kejuaraan
                  </Link>
                </li>
                <li>
                  <Link href="/championship" className="hover:text-white transition-colors">
                    Disiplin Pertandingan WAKO
                  </Link>
                </li>
                <li>
                  <Link href="/tentang" className="hover:text-white transition-colors">
                    Tentang JKBF &amp; Legalitas
                  </Link>
                </li>
                <li>
                  <Link href="/tentang#regulasi" className="hover:text-white transition-colors">
                    Regulasi Tatami &amp; Ringsport
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 2: Program & Pendaftaran */}
            <div className="space-y-3">
              <h4 className="font-display text-sm tracking-wider uppercase text-white">
                PENDAFTARAN &amp; AKSI
              </h4>
              <ul className="space-y-2.5 text-xs font-sans text-[#86868B]">
                <li>
                  <a
                    href={jkbfLinks.fighterRegistration}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D91F2C] hover:underline font-semibold inline-flex items-center gap-1"
                  >
                    <span>Daftar Fighter (s/d 30 Nov)</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a
                    href={jkbfLinks.contentChallenge}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span>Content Challenge</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a
                    href={jkbfLinks.partnershipWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span>Kemitraan &amp; Sponsor</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a
                    href={jkbfLinks.fighterSupportWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span>Bantuan Admin Fighter</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Informasi & Legal */}
            <div className="space-y-3 col-span-2 sm:col-span-1">
              <h4 className="font-display text-sm tracking-wider uppercase text-white">
                INFORMASI &amp; LEGAL
              </h4>
              <ul className="space-y-2.5 text-xs font-sans text-[#86868B]">
                <li>
                  <Link href="/faq" className="hover:text-white transition-colors">
                    Pertanyaan Umum (FAQ)
                  </Link>
                </li>
                <li>
                  <Link href="/kontak" className="hover:text-white transition-colors">
                    Kontak Sekretariat Panitia
                  </Link>
                </li>
                <li>
                  <Link href="/kebijakan-privasi" className="hover:text-white transition-colors">
                    Kebijakan Privasi
                  </Link>
                </li>
                <li>
                  <Link href="/syarat-ketentuan" className="hover:text-white transition-colors">
                    Syarat &amp; Ketentuan
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#86868B] font-technical">
          <div className="flex flex-col gap-1">
            <p>© 2026 JOGJA KICKBOXING FESTIVAL. SELURUH HAK CIPTA DILINDUNGI.</p>
            <p className="text-[11px] text-[#6E6E73]">
              Disahkan Pengprov Kickboxing Indonesia DIY &amp; Noise Comm Indonesia.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#D91F2C]" />
            <span className="text-[10px] uppercase tracking-widest text-[#86868B]">
              OFFICIAL WAKO ACCREDITED EVENT
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
