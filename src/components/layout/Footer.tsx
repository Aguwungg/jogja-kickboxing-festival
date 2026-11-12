import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, ArrowUpRight, Calendar, MapPin } from "lucide-react";
import { EVENT_CONFIG, jkbfLinks } from "@/lib/event-config";
import { InstagramIcon, TikTokIcon } from "@/components/layout/SocialIcons";

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

            <div className="space-y-1.5">
              <p className="font-technical text-xs uppercase tracking-[0.25em] text-[#D91F2C] font-bold">
                {EVENT_CONFIG.campaign}
              </p>
              <h3 className="font-display text-xl sm:text-2xl uppercase tracking-wider text-[#F5F5F7]">
                {EVENT_CONFIG.name}
              </h3>
              <p className="font-technical text-[11px] uppercase tracking-[0.2em] text-[#6E6E73]">
                {EVENT_CONFIG.tagline}
              </p>
            </div>

            {/* Confirmed Date & Venue Summary */}
            <div className="p-4 bg-[#0D0D10] border border-white/10 rounded-xs space-y-2 max-w-sm">
              <div className="flex items-center gap-2 text-xs text-white font-technical font-bold tracking-wider">
                <Calendar className="w-3.5 h-3.5 text-[#D91F2C] shrink-0" />
                <span>{EVENT_CONFIG.dates.display}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#C4C4CC] font-technical tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-[#D91F2C] shrink-0" />
                <span>{EVENT_CONFIG.venue.fullDisplay}</span>
              </div>
            </div>

            {/* Official Social Media — ONLY Instagram & TikTok */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={jkbfLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Resmi JKBF (@jogjakickboxingfestival)"
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#111114] hover:bg-[#D91F2C] border border-white/15 hover:border-[#D91F2C] text-[#F5F5F7] hover:text-white rounded-xs transition-all text-xs font-technical uppercase tracking-wider focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D91F2C]"
              >
                <InstagramIcon className="w-4 h-4 shrink-0" />
                <span>@jogjakickboxingfestival</span>
              </a>

              <a
                href={jkbfLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok Resmi JKBF (@jogjakickboxingfestival)"
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#111114] hover:bg-[#D91F2C] border border-white/15 hover:border-[#D91F2C] text-[#F5F5F7] hover:text-white rounded-xs transition-all text-xs font-technical uppercase tracking-wider focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D91F2C]"
              >
                <TikTokIcon className="w-4 h-4 shrink-0" />
                <span>TikTok</span>
              </a>
            </div>
          </div>

          {/* Navigation columns (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">

            {/* Col 1: Event & Kejuaraan */}
            <div className="space-y-3">
              <h4 className="font-display text-sm tracking-wider uppercase text-white">
                EVENT &amp; KEJUARAAN
              </h4>
              <ul className="space-y-2.5 text-xs font-sans text-[#86868B]">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Beranda Utama
                  </Link>
                </li>
                <li>
                  <Link href="/championship" className="hover:text-white transition-colors">
                    7 Program Kejuaraan
                  </Link>
                </li>
                <li>
                  <Link href="/venue" className="hover:text-white transition-colors">
                    Venue: GOR Pancasila UGM
                  </Link>
                </li>
                <li>
                  <Link href="/tentang" className="hover:text-white transition-colors">
                    Tentang JKBF &amp; Regulasi
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 2: Pendaftaran & Kontak Operasional */}
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
                    <span>Daftar Sebagai Fighter</span>
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
                    <span>Jadi Partner JKBF (Ardi)</span>
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
                    <span>Admin Fighter (Priya)</span>
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
                    Kontak Resmi Panitia
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
              19–20 Desember 2026 • GOR Pancasila UGM, Yogyakarta • Pengprov KBI DIY &amp; Noise Comm Indonesia.
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
