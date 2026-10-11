"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag, ChevronDown, Calendar, Trophy, Users, Tag, Info, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/lib/cart-context";

interface NavSubItem {
  name: string;
  href: string;
  description?: string;
}

interface NavCategory {
  title: string;
  icon?: any;
  items: NavSubItem[];
}

const navCategories: NavCategory[] = [
  {
    title: "ACARA",
    items: [
      { name: "Tentang JKB", href: "/tentang", description: "Visi, identitas & narasi Di Balik Kalem" },
      { name: "Jadwal", href: "/jadwal", description: "Rangkaian 3 hari laga & festival panggung" },
      { name: "Lineup Musik", href: "/lineup", description: "Deretan musisi & panggung live music" },
      { name: "Lokasi", href: "/venue", description: "Panduan GOR UNY, peta & transportasi" },
      { name: "FAQ", href: "/faq", description: "Tanya jawab seputar tiket & arena" },
    ],
  },
  {
    title: "PERTANDINGAN",
    items: [
      { name: "Informasi Kejuaraan", href: "/championship", description: "Format Redy Championship 2 & sabuk" },
      { name: "Daftar Petarung", href: "/fighters", description: "Roster atlet & profil petarung resmi" },
      { name: "Bagan Pertandingan", href: "/bracket", description: "Tournament tree babak gugur" },
    ],
  },
  {
    title: "KOMUNITAS",
    items: [
      { name: "City Pride", href: "/city-pride", description: "Vote kebanggaan wilayah Jogja & Jateng" },
      { name: "Program Kreator", href: "/creator", description: "Akses liputan, badge media & rewards" },
    ],
  },
  {
    title: "MERCHANDISE",
    items: [
      { name: "Official Merch Catalog", href: "/merch", description: "Koleksi apparel & gear resmi festival" },
    ],
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState<string | null>("ACARA");
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { totalItems, toggleCart } = useCart();

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
    setActiveDropdown(null);
  }, [pathname]);

  // Click outside listener for desktop dropdowns
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
          ? "bg-[#09090B]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-xl"
          : "bg-gradient-to-b from-[#09090B]/90 via-[#09090B]/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between" ref={navRef}>
        
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-2.5 z-50 group">
          <div className="w-8 h-8 rounded-sm bg-[#D91F2C] flex items-center justify-center font-display font-black text-white text-base shadow-sm group-hover:scale-105 transition-transform">
            J
          </div>
          <div className="flex flex-col">
            <span
              className="font-black text-2xl md:text-2xl text-[#F5F3EE] tracking-wider uppercase leading-none group-hover:text-white transition-colors"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              JKB <span className="text-[#D91F2C]">2026</span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#9A9AA2] font-semibold">
              The Ring Meets The Stage
            </span>
          </div>
        </Link>

        {/* Desktop Simplified Navigation (4 Categories) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navCategories.map((category) => {
            const isOpen = activeDropdown === category.title;
            const isCategoryActive = category.items.some((item) => pathname.startsWith(item.href));

            return (
              <div
                key={category.title}
                className="relative"
                onMouseEnter={() => setActiveDropdown(category.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  onClick={() => setActiveDropdown(isOpen ? null : category.title)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-sm text-xs uppercase tracking-widest font-semibold transition-all ${
                    isCategoryActive
                      ? "text-[#F5F3EE] bg-white/5 border border-white/10"
                      : "text-[#9A9AA2] hover:text-[#F5F3EE] hover:bg-white/5"
                  }`}
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                  aria-expanded={isOpen}
                >
                  <span>{category.title}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#D91F2C]" : "opacity-60"
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-1 w-72 rounded-sm bg-[#171719] border border-white/10 shadow-2xl p-2 z-50"
                    >
                      <div className="space-y-1">
                        {category.items.map((subItem) => {
                          const isActive = pathname === subItem.href;
                          return (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              onClick={() => setActiveDropdown(null)}
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
                              {subItem.description && (
                                <p className="text-[11px] text-[#9A9AA2] mt-0.5 leading-snug font-sans">
                                  {subItem.description}
                                </p>
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* Right CTA Hub */}
        <div className="flex items-center gap-3">
          {/* Cart Trigger */}
          <button
            onClick={toggleCart}
            className="relative p-2 rounded-sm border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all flex items-center justify-center group"
            title="Buka Keranjang Belanja"
            aria-label="Keranjang Belanja"
          >
            <ShoppingBag className="w-4 h-4 text-[#C4C4CC] group-hover:text-[#D91F2C] transition-colors" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#D91F2C] text-white text-[10px] font-mono font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-md animate-pulse">
                {totalItems}
              </span>
            )}
          </button>

          {/* Primary Nav CTA: INFO TIKET (Desktop & Tablet) */}
          <Link
            href="/tiket"
            className="hidden sm:flex font-display font-black text-xs sm:text-sm uppercase tracking-widest text-white bg-[#D91F2C] hover:bg-[#EF3340] active:scale-95 px-4 sm:px-5 py-2 sm:py-2.5 rounded-sm transition-all shadow-md shadow-[#D91F2C]/25 items-center gap-1.5"
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
            className="lg:hidden border-b border-white/10 bg-[#09090B]/98 backdrop-blur-xl overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
              
              {/* Event Badge Banner */}
              <div className="p-3 bg-[#171719] border border-white/5 rounded-sm flex items-center justify-between text-xs text-[#9A9AA2]">
                <span className="font-semibold text-[#F5F3EE]">12–14 DESEMBER 2026</span>
                <span className="text-[#D91F2C] font-bold">GOR UNY, YOGYAKARTA</span>
              </div>

              {/* Accordion Categories */}
              <div className="space-y-2">
                {navCategories.map((category) => {
                  const isExpanded = mobileCategoryOpen === category.title;
                  return (
                    <div key={category.title} className="border border-white/5 rounded-sm overflow-hidden bg-[#171719]/40">
                      <button
                        type="button"
                        onClick={() =>
                          setMobileCategoryOpen(isExpanded ? null : category.title)
                        }
                        className="w-full flex items-center justify-between p-3.5 text-left text-sm font-bold uppercase tracking-wider text-[#F5F3EE]"
                        style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                      >
                        <span>{category.title}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#9A9AA2] transition-transform duration-200 ${
                            isExpanded ? "rotate-180 text-[#D91F2C]" : ""
                          }`}
                        />
                      </button>

                      {isExpanded && (
                        <div className="px-3 pb-3 pt-1 space-y-1 bg-[#171719]/80 border-t border-white/5">
                          {category.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`flex items-center justify-between p-2.5 rounded-sm text-xs font-semibold uppercase tracking-wider ${
                                pathname === subItem.href
                                  ? "bg-[#D91F2C] text-white"
                                  : "text-[#C4C4CC] hover:bg-white/5 hover:text-white"
                              }`}
                              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                            >
                              <span>{subItem.name}</span>
                              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Mobile Primary Action */}
              <div className="pt-2 flex flex-col gap-2">
                <Link
                  href="/tiket"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3.5 bg-[#D91F2C] hover:bg-[#EF3340] text-white font-display font-black text-sm uppercase tracking-widest rounded-sm shadow-lg shadow-[#D91F2C]/30"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  INFO TIKET FESTIVAL
                </Link>
                <div className="flex justify-between items-center px-1 pt-1 text-[11px] text-[#9A9AA2]">
                  <Link href="/jadwal" onClick={() => setMobileMenuOpen(false)} className="hover:text-white underline">
                    Lihat Jadwal Lengkap
                  </Link>
                  <Link href="/venue" onClick={() => setMobileMenuOpen(false)} className="hover:text-white underline">
                    Panduan Lokasi GOR UNY
                  </Link>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
