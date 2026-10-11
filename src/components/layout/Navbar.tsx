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
  description: string;
}

const primaryNavLinks: NavLink[] = [
  { name: "Jadwal", href: "/jadwal" },
  { name: "Pertandingan", href: "/championship" },
  { name: "Musik", href: "/lineup" },
  { name: "Merchandise", href: "/merch" },
];

const moreDropdownItems: DropdownItem[] = [
  { name: "Bagan Turnamen", href: "/bracket", description: "Bagan pertandingan babak gugur" },
  { name: "Daftar Petarung", href: "/fighters", description: "Profil & data atlet petarung resmi" },
  { name: "City Pride", href: "/city-pride", description: "Vote kebanggaan wilayah Jogja & Jateng" },
  { name: "Program Kreator", href: "/creator", description: "Akses peliput, media & komunitas" },
  { name: "Lokasi GOR UNY", href: "/venue", description: "Panduan venue, akses jalan & peta" },
  { name: "Tentang JKB", href: "/tentang", description: "Narasi Di Balik Kalem & visi festival" },
  { name: "FAQ", href: "/faq", description: "Pertanyaan umum seputar festival & arena" },
  { name: "Kontak", href: "/kontak", description: "Hubungi panitia & sekretariat resmi" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on path change
  useEffect(() => {
    setMobileMenuOpen(false);
    setIsMoreOpen(false);
  }, [pathname]);

  // Click outside listener for desktop dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isMoreActive = moreDropdownItems.some((item) => pathname.startsWith(item.href));

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#09090B]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-xl"
          : "bg-gradient-to-b from-[#09090B]/90 via-[#09090B]/40 to-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between" ref={navRef}>
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 z-50 group">
          <div className="w-8 h-8 rounded-sm bg-[#D91F2C] flex items-center justify-center font-display font-black text-white text-base shadow-sm group-hover:scale-105 transition-transform">
            J
          </div>
          <div className="flex flex-col">
            <span
              className="font-black text-2xl text-[#F5F3EE] tracking-wider uppercase leading-none group-hover:text-white transition-colors"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              JKB <span className="text-[#D91F2C]">2026</span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#9A9AA2] font-semibold">
              The Ring Meets The Stage
            </span>
          </div>
        </Link>

        {/* Desktop Primary Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {primaryNavLinks.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3.5 py-2 rounded-sm text-xs uppercase tracking-widest font-bold transition-all ${
                  isActive
                    ? "text-[#F5F3EE] bg-white/10 border border-white/15"
                    : "text-[#9A9AA2] hover:text-[#F5F3EE] hover:bg-white/5"
                }`}
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                {item.name}
              </Link>
            );
          })}

          {/* "Lainnya" Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsMoreOpen(true)}
            onMouseLeave={() => setIsMoreOpen(false)}
          >
            <button
              type="button"
              onClick={() => setIsMoreOpen(!isMoreOpen)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-sm text-xs uppercase tracking-widest font-bold transition-all ${
                isMoreActive || isMoreOpen
                  ? "text-[#F5F3EE] bg-white/10 border border-white/15"
                  : "text-[#9A9AA2] hover:text-[#F5F3EE] hover:bg-white/5"
              }`}
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              aria-expanded={isMoreOpen}
            >
              <span>Lainnya</span>
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
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute top-full right-0 mt-1 w-72 rounded-sm bg-[#171719] border border-white/10 shadow-2xl p-2 z-50 grid grid-cols-1 gap-1"
                >
                  {moreDropdownItems.map((subItem) => {
                    const isActive = pathname === subItem.href;
                    return (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        onClick={() => setIsMoreOpen(false)}
                        className={`block p-2.5 rounded-sm transition-all ${
                          isActive
                            ? "bg-[#D91F2C]/15 border-l-2 border-[#D91F2C] text-[#F5F3EE]"
                            : "hover:bg-white/5 text-[#C4C4CC] hover:text-[#F5F3EE]"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span
                            className="font-bold text-sm tracking-wide uppercase"
                            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                          >
                            {subItem.name}
                          </span>
                          <ArrowUpRight className="w-3 h-3 opacity-40 group-hover:opacity-100" />
                        </div>
                        <p className="text-[11px] text-[#9A9AA2] mt-0.5 leading-snug font-sans">
                          {subItem.description}
                        </p>
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Action Hub */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Primary Nav CTA: INFO TIKET */}
          <Link
            href="/tiket"
            className="font-display font-black text-xs sm:text-sm uppercase tracking-widest text-white bg-[#D91F2C] hover:bg-[#EF3340] active:scale-95 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-sm transition-all shadow-md shadow-[#D91F2C]/25 flex items-center gap-1.5"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            <span>INFO TIKET</span>
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="p-2 text-[#F5F3EE] hover:text-white rounded-sm border border-white/10 bg-white/5 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Tutup Menu" : "Buka Menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden border-b border-white/10 bg-[#09090B]/98 backdrop-blur-xl overflow-hidden max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto px-4 py-5 space-y-4">
              
              {/* Event Badge Banner */}
              <div className="p-3 bg-[#171719] border border-white/10 rounded-sm flex items-center justify-between text-xs text-[#9A9AA2]">
                <span className="font-semibold text-[#F5F3EE]">12–14 DESEMBER 2026</span>
                <span className="text-[#D91F2C] font-bold">GOR UNY, YOGYAKARTA</span>
              </div>

              {/* Mobile Direct Links */}
              <div className="space-y-1">
                <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#9A9AA2] px-1 pb-1">
                  Menu Utama
                </p>
                {primaryNavLinks.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between p-3 rounded-sm text-sm font-bold uppercase tracking-wider ${
                        isActive
                          ? "bg-[#D91F2C] text-white"
                          : "text-[#F5F3EE] hover:bg-white/5 bg-[#171719]/40 border border-white/5"
                      }`}
                      style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                    >
                      <span>{item.name}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-50" />
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Secondary Destinations */}
              <div className="space-y-1 pt-1">
                <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#9A9AA2] px-1 pb-1">
                  Eksplorasi Lainnya
                </p>
                <div className="grid grid-cols-2 gap-1.5">
                  {moreDropdownItems.map((subItem) => {
                    const isActive = pathname === subItem.href;
                    return (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`p-2.5 rounded-sm text-xs font-semibold uppercase tracking-wider ${
                          isActive
                            ? "bg-[#D91F2C] text-white"
                            : "text-[#C4C4CC] hover:text-white bg-[#171719]/60 border border-white/5"
                        }`}
                        style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                      >
                        {subItem.name}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="pt-2">
                <Link
                  href="/tiket"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center block py-3.5 bg-[#D91F2C] hover:bg-[#EF3340] text-white font-display font-black text-sm uppercase tracking-widest rounded-sm shadow-lg shadow-[#D91F2C]/30"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  INFO TIKET FESTIVAL
                </Link>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
