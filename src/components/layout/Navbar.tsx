"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavLink {
  name: string;
  href: string;
}

interface DropdownItem {
  name: string;
  href: string;
  label: string;
}

const primaryNavLinks: NavLink[] = [
  { name: "JADWAL", href: "/jadwal" },
  { name: "PERTANDINGAN", href: "/championship" },
  { name: "MUSIK", href: "/lineup" },
  { name: "MERCH", href: "/merch" },
  { name: "CITY PRIDE", href: "/city-pride" },
];

const secondaryNavLinks: DropdownItem[] = [
  { name: "DAFTAR PETARUNG", href: "/fighters", label: "Profil & rekor atlet kejuaraan" },
  { name: "BAGAN TURNAMEN", href: "/bracket", label: "Format turnamen gugur K-1" },
  { name: "PANDUAN VENUE", href: "/venue", label: "GOR UNY Colombo, Yogyakarta" },
  { name: "CREATOR HUB", href: "/creator", label: "Akreditasi peliput & kreator" },
  { name: "TENTANG JKBF", href: "/tentang", label: "Manifesto Di Balik Kalem" },
  { name: "FAQ", href: "/faq", label: "Tanya jawab panduan festival" },
  { name: "KONTAK", href: "/kontak", label: "Sekretariat & korespondensi" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
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
    setIsMoreOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isMoreActive = secondaryNavLinks.some((item) => pathname.startsWith(item.href));

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0B0B0B]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl"
          : "bg-[#0B0B0B] border-b border-white/10 py-4 lg:py-4.5"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between" ref={navRef}>
        {/* Brand Group */}
        <Link href="/" className="inline-flex items-baseline gap-2.5 group leading-none z-50">
          <span className="font-display text-3xl sm:text-4xl tracking-wider text-white group-hover:text-white/90 transition-colors">
            JKBF<span className="text-[#D91F2C]">.</span>
          </span>
          <span className="hidden xl:inline-block font-technical text-[10px] uppercase tracking-[0.25em] text-[#77716D] border-l border-white/20 pl-2.5 py-0.5">
            FIGHT NIGHT × JOGJA CULTURE
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
          {primaryNavLinks.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`font-display text-[17px] tracking-[0.08em] transition-colors py-1 relative ${
                  isActive
                    ? "text-white"
                    : "text-[#8F8E8B] hover:text-white"
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D91F2C]" />
                )}
              </Link>
            );
          })}

          {/* Dropdown 'LAINNYA' */}
          <div
            className="relative"
            onMouseEnter={() => setIsMoreOpen(true)}
            onMouseLeave={() => setIsMoreOpen(false)}
          >
            <button
              type="button"
              onClick={() => setIsMoreOpen(!isMoreOpen)}
              className={`flex items-center gap-1.5 font-display text-[17px] tracking-[0.08em] transition-colors py-1 ${
                isMoreActive || isMoreOpen
                  ? "text-white"
                  : "text-[#8F8E8B] hover:text-white"
              }`}
              aria-expanded={isMoreOpen}
            >
              <span>EKSPLORASI</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  isMoreOpen ? "rotate-180 text-[#D91F2C]" : "opacity-60"
                }`}
              />
            </button>

            <AnimatePresence>
              {isMoreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute top-full right-0 mt-2 w-72 bg-[#141416] border border-white/10 shadow-2xl p-2 z-50 ring-corner-frame"
                >
                  {secondaryNavLinks.map((subItem) => {
                    const isActive = pathname === subItem.href;
                    return (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        onClick={() => setIsMoreOpen(false)}
                        className={`p-3 block transition-colors ${
                          isActive
                            ? "bg-[#D91F2C]/15 border-l-2 border-[#D91F2C] text-white"
                            : "hover:bg-white/5 text-[#8F8E8B] hover:text-white"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-display text-sm tracking-wider uppercase text-white">
                            {subItem.name}
                          </span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#D91F2C]" />
                        </div>
                        <p className="text-[11px] text-[#77716D] mt-0.5 font-sans">
                          {subItem.label}
                        </p>
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Right CTA & Mobile Toggle */}
        <div className="flex items-center gap-3.5 sm:gap-4">
          <Link
            href="/tiket"
            className="font-display text-sm sm:text-base tracking-wider text-white bg-[#D91F2C] hover:bg-[#B81521] active:scale-95 px-5 py-2 sm:px-6 sm:py-2.5 transition-all inline-flex items-center gap-1.5 shadow-sm ring-1 ring-[#D91F2C]/40"
          >
            <span>INFO TIKET</span>
            <span className="font-technical text-xs">↗</span>
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="p-2 text-white hover:text-[#D91F2C] lg:hidden focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Tutup Menu" : "Buka Menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* V10 Spacious Art-Directed Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden border-b border-white/10 bg-[#0B0B0B] overflow-hidden max-h-[calc(100vh-4.5rem)] overflow-y-auto"
          >
            <div className="px-6 py-6 space-y-6">
              {/* Event facts kicker */}
              <div className="flex items-center justify-between font-technical text-[10px] uppercase tracking-[0.2em] text-[#77716D] border-b border-white/10 pb-3">
                <span>12–14 DESEMBER 2026</span>
                <span className="text-[#D91F2C] font-bold">GOR UNY, YOGYAKARTA</span>
              </div>

              {/* Primary Destinations First */}
              <div className="space-y-1">
                <Link
                  href="/jadwal"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2.5 font-display text-2xl tracking-wider text-[#F4F0E8] hover:text-[#D91F2C] border-b border-white/5 transition-colors"
                >
                  <span>JADWAL ACARA</span>
                  <ArrowUpRight className="w-5 h-5 text-[#D91F2C]" />
                </Link>
                <Link
                  href="/championship"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2.5 font-display text-2xl tracking-wider text-[#F4F0E8] hover:text-[#D91F2C] border-b border-white/5 transition-colors"
                >
                  <span>PERTANDINGAN (REDY 2)</span>
                  <ArrowUpRight className="w-5 h-5 text-[#D91F2C]" />
                </Link>
                <Link
                  href="/lineup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2.5 font-display text-2xl tracking-wider text-[#F4F0E8] hover:text-[#D91F2C] border-b border-white/5 transition-colors"
                >
                  <span>MUSIK & PANGGUNG</span>
                  <ArrowUpRight className="w-5 h-5 text-[#D91F2C]" />
                </Link>
                <Link
                  href="/tiket"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2.5 font-display text-2xl tracking-wider text-[#D91F2C] border-b border-white/5 transition-colors"
                >
                  <span>INFO TIKET FESTIVAL</span>
                  <ArrowUpRight className="w-5 h-5 text-[#D91F2C]" />
                </Link>
              </div>

              {/* Secondary Navigation Section */}
              <div className="pt-2">
                <p className="font-technical text-[10px] uppercase tracking-[0.25em] text-[#77716D] pb-3">
                  EKSPLORASI LANJUTAN
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {secondaryNavLinks.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-3 bg-[#141416] border border-white/5 font-display text-sm tracking-wider uppercase text-[#8F8E8B] hover:text-white transition-colors"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                  <Link
                    href="/merch"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-3 bg-[#141416] border border-white/5 font-display text-sm tracking-wider uppercase text-[#8F8E8B] hover:text-white transition-colors"
                  >
                    MERCHANDISE
                  </Link>
                  <Link
                    href="/city-pride"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-3 bg-[#141416] border border-white/5 font-display text-sm tracking-wider uppercase text-[#8F8E8B] hover:text-white transition-colors"
                  >
                    CITY PRIDE
                  </Link>
                </div>
              </div>

              {/* Primary Ticket Button in Drawer */}
              <div className="pt-2">
                <Link
                  href="/tiket"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center block py-3.5 bg-[#D91F2C] text-white font-display text-base tracking-wider uppercase transition-colors hover:bg-[#B81521] ring-1 ring-[#D91F2C]/50 shadow-lg"
                >
                  INFO TIKET & PEMESANAN ↗
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
