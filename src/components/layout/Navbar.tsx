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
];

const secondaryNavLinks: DropdownItem[] = [
  { name: "BAGAN TURNAMEN", href: "/bracket", label: "Format turnamen gugur" },
  { name: "DAFTAR PETARUNG", href: "/fighters", label: "Profil & data atlet" },
  { name: "CITY PRIDE", href: "/city-pride", label: "Gerakan komunitas pemuda" },
  { name: "CREATOR HUB", href: "/creator", label: "Akses peliput & kreator" },
  { name: "VENUE GOR UNY", href: "/venue", label: "Panduan lokasi & akses" },
  { name: "TENTANG JKBF", href: "/tentang", label: "Narasi Di Balik Kalem" },
  { name: "FAQ", href: "/faq", label: "Pertanyaan umum festival" },
  { name: "KONTAK", href: "/kontak", label: "Sekretariat & informasi resmi" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-[#0B0B0B]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl"
          : "bg-[#0B0B0B]/80 backdrop-blur-sm border-b border-white/5 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between" ref={navRef}>
        {/* Brand Logo */}
        <Link href="/" className="flex flex-col group leading-none z-50">
          <span
            className="font-display font-black text-2xl sm:text-3xl tracking-tight text-[#F4F0E8] group-hover:text-white transition-colors"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            JKBF
          </span>
          <span className="font-sans text-[8px] font-bold tracking-[0.16em] text-[#8F8E8B] uppercase">
            JOGJA KICKBOXING FESTIVAL
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {primaryNavLinks.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-xs uppercase tracking-[0.12em] font-extrabold transition-colors py-1 ${
                  isActive
                    ? "text-[#F4F0E8] border-b-2 border-[#D91F2C]"
                    : "text-[#8F8E8B] hover:text-[#F4F0E8]"
                }`}
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                {item.name}
              </Link>
            );
          })}

          {/* Lainnya Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsMoreOpen(true)}
            onMouseLeave={() => setIsMoreOpen(false)}
          >
            <button
              type="button"
              onClick={() => setIsMoreOpen(!isMoreOpen)}
              className={`flex items-center gap-1 text-xs uppercase tracking-[0.12em] font-extrabold transition-colors py-1 ${
                isMoreActive || isMoreOpen
                  ? "text-[#F4F0E8]"
                  : "text-[#8F8E8B] hover:text-[#F4F0E8]"
              }`}
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              aria-expanded={isMoreOpen}
            >
              <span>LAINNYA</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-150 ${
                  isMoreOpen ? "rotate-180 text-[#D91F2C]" : "opacity-60"
                }`}
              />
            </button>

            <AnimatePresence>
              {isMoreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute top-full right-0 mt-2 w-72 bg-[#141416] border border-white/10 shadow-2xl p-2 z-50 grid grid-cols-1 gap-1"
                >
                  {secondaryNavLinks.map((subItem) => {
                    const isActive = pathname === subItem.href;
                    return (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        onClick={() => setIsMoreOpen(false)}
                        className={`p-2.5 transition-colors ${
                          isActive
                            ? "bg-[#D91F2C]/15 border-l-2 border-[#D91F2C] text-[#F4F0E8]"
                            : "hover:bg-white/5 text-[#8F8E8B] hover:text-[#F4F0E8]"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span
                            className="font-bold text-xs tracking-wider uppercase"
                            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                          >
                            {subItem.name}
                          </span>
                          <ArrowUpRight className="w-3 h-3 opacity-40" />
                        </div>
                        <p className="text-[10px] text-[#8F8E8B] mt-0.5 font-sans">
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

        {/* Right CTA Hub */}
        <div className="flex items-center gap-3">
          <Link
            href="/tiket"
            className="font-display font-extrabold text-xs uppercase tracking-wider text-white bg-[#D91F2C] hover:bg-[#B81521] active:scale-95 px-4 py-2 sm:px-5 sm:py-2.5 transition-colors flex items-center gap-1.5"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            <span>INFO TIKET</span>
            <span className="text-[10px]">↗</span>
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="p-2 text-[#F4F0E8] hover:text-white border border-white/10 bg-white/5 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Tutup Menu" : "Buka Menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="lg:hidden border-b border-white/10 bg-[#0B0B0B] overflow-hidden max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <div className="px-4 py-5 space-y-4">
              <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#8F8E8B] border-b border-white/10 pb-2 flex justify-between">
                <span>12—14 DESEMBER 2026</span>
                <span className="text-[#D91F2C]">GOR UNY YOGYAKARTA</span>
              </div>

              <div className="space-y-1">
                {primaryNavLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2.5 text-base font-extrabold uppercase tracking-wider text-[#F4F0E8] hover:text-[#D91F2C] border-b border-white/5"
                    style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#8F8E8B]" />
                  </Link>
                ))}
              </div>

              <div className="pt-2">
                <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#8F8E8B] pb-2">
                  Eksplorasi Lengkap
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {secondaryNavLinks.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-2.5 bg-[#141416] border border-white/5 text-xs font-bold uppercase tracking-wider text-[#8F8E8B] hover:text-[#F4F0E8]"
                      style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/tiket"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center block py-3 bg-[#D91F2C] text-white font-display font-extrabold text-sm uppercase tracking-wider"
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
