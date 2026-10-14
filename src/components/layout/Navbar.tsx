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
  { name: "KOMUNITAS", href: "/city-pride" },
];

const secondaryNavLinks: DropdownItem[] = [
  { name: "BAGAN TURNAMEN", href: "/bracket", label: "Format turnamen eliminasi" },
  { name: "DAFTAR PETARUNG", href: "/fighters", label: "Profil & direktori atlet" },
  { name: "CREATOR HUB", href: "/creator", label: "Akses peliput & kreator" },
  { name: "VENUE GOR UNY", href: "/venue", label: "Panduan lokasi & akses" },
  { name: "TENTANG JKBF", href: "/tentang", label: "Narasi Di Balik Kalem" },
  { name: "FAQ", href: "/faq", label: "Pertanyaan umum festival" },
  { name: "KONTAK", href: "/kontak", label: "Sekretariat & kemitraan" },
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
          ? "bg-[#0B0B0B]/95 backdrop-blur-md border-b border-white/10 py-3.5 shadow-xl"
          : "bg-[#0B0B0B] border-b border-white/10 py-4 lg:py-5"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between" ref={navRef}>
        {/* Brand Wordmark */}
        <Link href="/" className="inline-flex items-center group leading-none z-50">
          <span
            className="font-display font-black text-2xl sm:text-3xl tracking-tight text-white group-hover:text-white/90 transition-colors"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            JKBF<span className="text-[#D91F2C]">.</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {primaryNavLinks.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-[13px] uppercase tracking-[0.14em] font-extrabold transition-colors py-1 ${
                  isActive
                    ? "text-white border-b-2 border-[#D91F2C]"
                    : "text-[#8F8E8B] hover:text-white"
                }`}
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                {item.name}
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
              className={`flex items-center gap-1.5 text-[13px] uppercase tracking-[0.14em] font-extrabold transition-colors py-1 ${
                isMoreActive || isMoreOpen
                  ? "text-white"
                  : "text-[#8F8E8B] hover:text-white"
              }`}
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              aria-expanded={isMoreOpen}
            >
              <span>LAINNYA</span>
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
                  className="absolute top-full right-0 mt-2 w-72 bg-[#141416] border border-white/10 shadow-2xl p-2 z-50"
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
                          <span
                            className="font-extrabold text-xs tracking-wider uppercase"
                            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                          >
                            {subItem.name}
                          </span>
                          <ArrowUpRight className="w-3.5 h-3.5 opacity-40" />
                        </div>
                        <p className="text-[11px] text-[#8F8E8B] mt-0.5 font-sans">
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
            className="font-display font-extrabold text-xs sm:text-[13px] uppercase tracking-wider text-white bg-[#D91F2C] hover:bg-[#B81521] active:scale-95 px-5 py-2.5 sm:px-6 sm:py-2.5 transition-all inline-flex items-center gap-1.5 shadow-sm"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            <span>INFO TIKET</span>
            <span className="text-xs">↗</span>
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="p-2.5 text-white hover:text-[#D91F2C] lg:hidden focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Tutup Menu" : "Buka Menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Spacious Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden border-b border-white/10 bg-[#0B0B0B] overflow-hidden max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <div className="px-6 py-8 space-y-6">
              <div className="flex items-center justify-between text-[11px] uppercase font-extrabold tracking-[0.2em] text-[#8F8E8B] border-b border-white/10 pb-3">
                <span>12–14 DESEMBER 2026</span>
                <span className="text-[#D91F2C]">GOR UNY, YOGYAKARTA</span>
              </div>

              {/* Primary Mobile Links */}
              <div className="space-y-1">
                {primaryNavLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-3 text-lg font-black uppercase tracking-wider text-[#F4F0E8] hover:text-[#D91F2C] border-b border-white/5 transition-colors"
                    style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#8F8E8B]" />
                  </Link>
                ))}
              </div>

              {/* Secondary Navigation Section */}
              <div className="pt-2">
                <p className="text-[10px] uppercase font-extrabold tracking-[0.2em] text-[#8F8E8B] pb-3">
                  Eksplorasi Festival
                </p>
                <div className="grid grid-cols-2 gap-2.5">
                  {secondaryNavLinks.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-3 bg-[#141416] border border-white/5 text-xs font-bold uppercase tracking-wider text-[#8F8E8B] hover:text-white transition-colors"
                      style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Primary Ticket Button in Drawer */}
              <div className="pt-4">
                <Link
                  href="/tiket"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center block py-3.5 bg-[#D91F2C] text-white font-display font-extrabold text-sm uppercase tracking-wider transition-colors hover:bg-[#B81521]"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  INFO TIKET FESTIVAL ↗
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
