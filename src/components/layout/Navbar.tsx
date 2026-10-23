"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SubItem {
  title: string;
  href: string;
  desc?: string;
}

interface NavGroup {
  name: string;
  href: string;
  items?: SubItem[];
}

const navGroups: NavGroup[] = [
  {
    name: "FESTIVAL",
    href: "/lineup",
    items: [
      { title: "Musik & Lineup", href: "/lineup", desc: "Panggung musik 3 hari & penampil" },
      { title: "Panduan Lokasi (Venue)", href: "/venue", desc: "GOR UNY Colombo Yogyakarta" },
      { title: "Aktivitas Budaya & UMKM", href: "/tentang#festival", desc: "Pameran, kuliner lokal & kultur Jogja" },
    ],
  },
  {
    name: "PERTANDINGAN",
    href: "/championship",
    items: [
      { title: "Kejuaraan & Hasil", href: "/championship", desc: "Kejurda DIY 2026 & Redy Open II" },
      { title: "Kategori & Aturan WAKO", href: "/tentang#regulasi", desc: "Tatami & Ringsport regulasi resmi" },
      { title: "Biaya & Pendaftaran", href: "/tentang#biaya", desc: "Ketentuan registrasi kontingen" },
    ],
  },
  {
    name: "PETARUNG",
    href: "/fighters",
  },
  {
    name: "JADWAL",
    href: "/jadwal",
    items: [
      { title: "Hari 1: Sabtu, 12 Des", href: "/jadwal?day=1", desc: "Penyisihan & Konser Musik" },
      { title: "Hari 2: Minggu, 13 Des", href: "/jadwal?day=2", desc: "Perempat Final & Partai Bintang" },
      { title: "Hari 3: Senin, 14 Des", href: "/jadwal?day=3", desc: "Semifinal, Final & Closing" },
    ],
  },
  {
    name: "TENTANG JKBF",
    href: "/tentang",
    items: [
      { title: "Profil & Legalitas", href: "/tentang", desc: "Pengprov KBI DIY & Noise Comm" },
      { title: "Technical Handbook (PDF)", href: "/tentang#thb", desc: "Dokumen resmi panduan teknis" },
      { title: "Pertanyaan Umum (FAQ)", href: "/faq", desc: "Panduan & tata tertib penonton" },
      { title: "Sekretariat & Kontak", href: "/kontak", desc: "Hubungi panitia pelaksana" },
    ],
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0B0B0B]/95 backdrop-blur-md border-b border-white/10 py-2.5 shadow-2xl"
          : "bg-[#0B0B0B] border-b border-white/10 py-3.5 sm:py-4"
      }`}
    >
      <div
        className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between"
        ref={navRef}
      >
        {/* Official Event Logo Emblem */}
        <Link href="/" className="inline-flex items-center gap-3 sm:gap-4 group z-50 select-none">
          <div className="relative h-9 sm:h-11 w-20 sm:w-24 transition-transform duration-200 group-hover:scale-[1.02]">
            <Image
              src="/JKBF Kickboxing Festival Emblem 1.png"
              alt="Jogja Kickboxing Festival Official Logo"
              fill
              priority
              className="object-contain object-left"
              sizes="(max-width: 640px) 90px, 120px"
            />
          </div>
          <div className="hidden xl:flex flex-col border-l border-white/15 pl-3 leading-none justify-center">
            <span className="font-technical text-[9px] uppercase tracking-[0.2em] text-[#D91F2C] font-bold">
              PENGPROV KBI DIY
            </span>
            <span className="font-technical text-[9px] uppercase tracking-[0.12em] text-[#8F8E8B] mt-0.5">
              12–14 DESEMBER 2026 • GOR UNY
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links — UFC-Style Precision */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navGroups.map((group) => {
            const isActive =
              pathname === group.href ||
              (group.href !== "/" && pathname.startsWith(group.href));
            const hasSubmenu = group.items && group.items.length > 0;
            const isOpen = activeDropdown === group.name;

            return (
              <div
                key={group.name}
                className="relative"
                onMouseEnter={() => hasSubmenu && setActiveDropdown(group.name)}
                onMouseLeave={() => hasSubmenu && setActiveDropdown(null)}
              >
                <button
                  type="button"
                  onClick={() => hasSubmenu && setActiveDropdown(isOpen ? null : group.name)}
                  className={`font-display text-[15px] xl:text-[16px] tracking-[0.08em] transition-colors py-1.5 inline-flex items-center gap-1 relative ${
                    isActive
                      ? "text-white font-bold"
                      : "text-[#9E9D99] hover:text-white"
                  }`}
                >
                  <Link href={group.href} className="hover:text-white">
                    {group.name}
                  </Link>
                  {hasSubmenu && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 text-[#77716D] ${
                        isOpen ? "rotate-180 text-white" : ""
                      }`}
                    />
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D91F2C]" />
                  )}
                </button>

                {/* Submenu Popover */}
                {hasSubmenu && isOpen && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15 }}
                      className="w-64 bg-[#141416] border border-white/10 rounded-none shadow-2xl p-2 divide-y divide-white/5"
                    >
                      {group.items?.map((sub) => (
                        <Link
                          key={sub.title}
                          href={sub.href}
                          onClick={() => setActiveDropdown(null)}
                          className="block px-3 py-2.5 hover:bg-white/5 transition-colors group/item"
                        >
                          <p className="font-display text-sm tracking-wide text-[#F4F0E8] group-hover/item:text-[#D91F2C] transition-colors">
                            {sub.title}
                          </p>
                          {sub.desc && (
                            <p className="font-sans text-[11px] text-[#77716D] mt-0.5 line-clamp-1">
                              {sub.desc}
                            </p>
                          )}
                        </Link>
                      ))}
                    </motion.div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Primary CTA Action — Jadwal 3 Hari */}
        <div className="flex items-center gap-3">
          <Link
            href="/jadwal"
            className="font-display text-sm sm:text-[15px] tracking-wider text-white bg-[#D91F2C] hover:bg-[#B81521] active:scale-95 px-5 py-2 sm:px-6 sm:py-2.5 transition-all inline-flex items-center gap-1.5 shadow-md shadow-red-950/40"
          >
            <span>JADWAL 3 HARI</span>
            <ArrowUpRight className="w-4 h-4 text-white" />
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#F4F0E8] hover:text-[#D91F2C] border border-white/10 bg-[#141416] transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? "Tutup Menu" : "Buka Menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Art-Directed Mobile Drawer — Grouped UFC Style */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-b border-white/10 bg-[#0B0B0B] max-h-[85vh] overflow-y-auto"
          >
            <div className="px-5 py-6 space-y-6">
              {/* Event Badge Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-technical">
                <span className="text-[#8F8E8B]">PENGPROV KBI DIY • 12–14 DES 2026</span>
                <span className="text-[#D91F2C] font-bold">GOR UNY</span>
              </div>

              {/* Group 1: FESTIVAL */}
              <div className="space-y-2">
                <p className="font-technical text-[10px] uppercase tracking-[0.25em] text-[#D91F2C] font-bold">
                  01 / FESTIVAL
                </p>
                <div className="grid grid-cols-1 gap-1 pl-1">
                  <Link
                    href="/lineup"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-1.5 font-display text-lg tracking-wider text-[#F4F0E8] hover:text-[#D91F2C] border-b border-white/5"
                  >
                    <span>MUSIK & LINEUP</span>
                    <ArrowUpRight className="w-4 h-4 text-[#77716D]" />
                  </Link>
                  <Link
                    href="/venue"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-1.5 font-display text-lg tracking-wider text-[#F4F0E8] hover:text-[#D91F2C] border-b border-white/5"
                  >
                    <span>VENUE & LOKASI GOR UNY</span>
                    <ArrowUpRight className="w-4 h-4 text-[#77716D]" />
                  </Link>
                </div>
              </div>

              {/* Group 2: PERTANDINGAN */}
              <div className="space-y-2">
                <p className="font-technical text-[10px] uppercase tracking-[0.25em] text-[#D91F2C] font-bold">
                  02 / PERTANDINGAN
                </p>
                <div className="grid grid-cols-1 gap-1 pl-1">
                  <Link
                    href="/championship"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-1.5 font-display text-lg tracking-wider text-[#F4F0E8] hover:text-[#D91F2C] border-b border-white/5"
                  >
                    <span>KEJURDA DIY & REDY OPEN II</span>
                    <ArrowUpRight className="w-4 h-4 text-[#77716D]" />
                  </Link>
                  <Link
                    href="/tentang#regulasi"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-1.5 font-display text-lg tracking-wider text-[#F4F0E8] hover:text-[#D91F2C] border-b border-white/5"
                  >
                    <span>ATURAN WAKO (TATAMI & RINGSPORT)</span>
                    <ArrowUpRight className="w-4 h-4 text-[#77716D]" />
                  </Link>
                </div>
              </div>

              {/* Group 3: PETARUNG */}
              <div className="space-y-2">
                <p className="font-technical text-[10px] uppercase tracking-[0.25em] text-[#D91F2C] font-bold">
                  03 / PETARUNG
                </p>
                <div className="grid grid-cols-1 gap-1 pl-1">
                  <Link
                    href="/fighters"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-1.5 font-display text-lg tracking-wider text-[#F4F0E8] hover:text-[#D91F2C] border-b border-white/5"
                  >
                    <span>DIREKTORI 200+ ATLET</span>
                    <ArrowUpRight className="w-4 h-4 text-[#77716D]" />
                  </Link>
                </div>
              </div>

              {/* Group 4: JADWAL */}
              <div className="space-y-2">
                <p className="font-technical text-[10px] uppercase tracking-[0.25em] text-[#D91F2C] font-bold">
                  04 / JADWAL 3 HARI
                </p>
                <div className="grid grid-cols-3 gap-2">
                  <Link
                    href="/jadwal?day=1"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 bg-[#141416] border border-white/5 text-center block font-display text-xs tracking-wider text-[#F4F0E8] hover:border-[#D91F2C]"
                  >
                    <span className="block text-[#D91F2C] text-[10px] font-technical">12 DES</span>
                    HARI 1
                  </Link>
                  <Link
                    href="/jadwal?day=2"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 bg-[#141416] border border-white/5 text-center block font-display text-xs tracking-wider text-[#F4F0E8] hover:border-[#D91F2C]"
                  >
                    <span className="block text-[#D91F2C] text-[10px] font-technical">13 DES</span>
                    HARI 2
                  </Link>
                  <Link
                    href="/jadwal?day=3"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 bg-[#141416] border border-white/5 text-center block font-display text-xs tracking-wider text-[#F4F0E8] hover:border-[#D91F2C]"
                  >
                    <span className="block text-[#D91F2C] text-[10px] font-technical">14 DES</span>
                    HARI 3
                  </Link>
                </div>
              </div>

              {/* Group 5: TENTANG & DOKUMEN RESMI */}
              <div className="space-y-2">
                <p className="font-technical text-[10px] uppercase tracking-[0.25em] text-[#77716D] font-bold">
                  05 / TENTANG & DOKUMEN RESMI
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href="/tentang"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-3 bg-[#141416] border border-white/5 font-display text-xs tracking-wider uppercase text-[#8F8E8B] hover:text-white"
                  >
                    TENTANG JKBF & KBI DIY
                  </Link>
                  <Link
                    href="/tentang#thb"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-3 bg-[#141416] border border-white/5 font-display text-xs tracking-wider uppercase text-[#D91F2C] hover:text-white"
                  >
                    UNDUH THB (PDF)
                  </Link>
                  <Link
                    href="/faq"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-3 bg-[#141416] border border-white/5 font-display text-xs tracking-wider uppercase text-[#8F8E8B] hover:text-white"
                  >
                    FAQ PENONTON
                  </Link>
                  <Link
                    href="/kontak"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-3 bg-[#141416] border border-white/5 font-display text-xs tracking-wider uppercase text-[#8F8E8B] hover:text-white"
                  >
                    KONTAK PANITIA
                  </Link>
                </div>
              </div>

              {/* Fixed CTA inside Drawer */}
              <div className="pt-2">
                <Link
                  href="/jadwal"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center block py-3.5 bg-[#D91F2C] text-white font-display text-base tracking-wider uppercase transition-colors hover:bg-[#B81521] shadow-lg shadow-red-950/40 font-bold"
                >
                  LIHAT JADWAL 3 HARI ↗
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
