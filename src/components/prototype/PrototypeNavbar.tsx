"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Ticket, Calendar, Shield, Music, ShoppingBag, MapPin, HelpCircle, Trophy } from "lucide-react";

export default function PrototypeNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#09090B]/95 backdrop-blur-md border-b border-white/10 shadow-xl shadow-black/40 py-3"
          : "bg-gradient-to-b from-[#09090B]/90 via-[#09090B]/60 to-transparent py-4 sm:py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo & Brand Mark */}
          <Link
            href="/preview/homepage-v8"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#D91F2C]/60 rounded-sm"
          >
            <div className="flex flex-col">
              <span
                className="text-2xl sm:text-3xl font-black tracking-tight leading-none text-[#F5F3EE] uppercase font-display"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                JKB <span className="text-[#D91F2C]">2026</span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.22em] text-[#A7A7AD] uppercase leading-tight mt-0.5">
                JOGJA KICKBOXING FESTIVAL
              </span>
            </div>
            <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm bg-white/5 border border-white/10 text-amber-400 font-mono">
              PROTOTYPE V8
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wider uppercase font-display">
            <Link
              href="/jadwal"
              className="text-[#A7A7AD] hover:text-[#F5F3EE] transition-colors py-1 focus:outline-none focus:ring-1 focus:ring-[#D91F2C]"
            >
              Jadwal
            </Link>
            <Link
              href="/championship"
              className="text-[#A7A7AD] hover:text-[#F5F3EE] transition-colors py-1 focus:outline-none focus:ring-1 focus:ring-[#D91F2C]"
            >
              Pertandingan
            </Link>
            <Link
              href="/lineup"
              className="text-[#A7A7AD] hover:text-[#F5F3EE] transition-colors py-1 focus:outline-none focus:ring-1 focus:ring-[#D91F2C]"
            >
              Musik
            </Link>
            <Link
              href="/merchandise"
              className="text-[#A7A7AD] hover:text-[#F5F3EE] transition-colors py-1 focus:outline-none focus:ring-1 focus:ring-[#D91F2C]"
            >
              Merch
            </Link>

            {/* Desktop Dropdown: Lainnya */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onBlur={() => setTimeout(() => setDropdownOpen(false), 200)}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
                className="flex items-center gap-1.5 text-[#A7A7AD] hover:text-[#F5F3EE] transition-colors py-1 focus:outline-none focus:ring-1 focus:ring-[#D91F2C]"
              >
                <span>Lainnya</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-3 w-56 rounded-sm bg-[#17171B] border border-white/10 p-2 shadow-2xl shadow-black/80 flex flex-col gap-1 z-50">
                  <Link
                    href="/voting"
                    className="flex items-center gap-2.5 px-3 py-2 rounded-sm text-xs font-semibold text-[#A7A7AD] hover:text-[#F5F3EE] hover:bg-white/5 transition-colors"
                  >
                    <Trophy className="w-3.5 h-3.5 text-[#D91F2C]" />
                    <span>City Pride Voting</span>
                  </Link>
                  <Link
                    href="/creator"
                    className="flex items-center gap-2.5 px-3 py-2 rounded-sm text-xs font-semibold text-[#A7A7AD] hover:text-[#F5F3EE] hover:bg-white/5 transition-colors"
                  >
                    <Shield className="w-3.5 h-3.5 text-[#E2BA75]" />
                    <span>Creator Hub & Media</span>
                  </Link>
                  <Link
                    href="/about"
                    className="flex items-center gap-2.5 px-3 py-2 rounded-sm text-xs font-semibold text-[#A7A7AD] hover:text-[#F5F3EE] hover:bg-white/5 transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    <span>Venue GOR UNY</span>
                  </Link>
                  <Link
                    href="/faq"
                    className="flex items-center gap-2.5 px-3 py-2 rounded-sm text-xs font-semibold text-[#A7A7AD] hover:text-[#F5F3EE] hover:bg-white/5 transition-colors"
                  >
                    <HelpCircle className="w-3.5 h-3.5 text-purple-400" />
                    <span>FAQ & Panduan</span>
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* Right Action: Info Tiket Button (Desktop & Mobile) */}
          <div className="flex items-center gap-3">
            <Link
              href="/tickets"
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-sm bg-[#D91F2C] text-[#F5F3EE] text-xs sm:text-sm font-black tracking-wider uppercase transition-all duration-200 hover:bg-[#EF3340] hover:shadow-lg hover:shadow-[#D91F2C]/30 active:scale-[0.98] font-display"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              <Ticket className="w-3.5 h-3.5" />
              <span>Info Tiket</span>
            </Link>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
              aria-expanded={isOpen}
              className="lg:hidden p-2 rounded-sm text-[#F5F3EE] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#D91F2C]"
            >
              {isOpen ? <X className="w-5 h-5 text-[#EF3340]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="fixed inset-0 top-[60px] sm:top-[68px] z-40 bg-[#09090B]/98 backdrop-blur-xl border-t border-white/10 flex flex-col justify-between overflow-y-auto px-6 pt-6 pb-20">
          <div className="space-y-6">
            
            {/* Main Menu Links */}
            <div className="space-y-1">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#A7A7AD]/60 mb-2 font-mono">
                Menu Utama Festival
              </p>
              <Link
                href="/jadwal"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between py-3 border-b border-white/5 text-2xl font-black uppercase text-[#F5F3EE] hover:text-[#EF3340] transition-colors"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                <span>Jadwal Lengkap</span>
                <Calendar className="w-5 h-5 text-[#A7A7AD]" />
              </Link>
              <Link
                href="/championship"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between py-3 border-b border-white/5 text-2xl font-black uppercase text-[#F5F3EE] hover:text-[#EF3340] transition-colors"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                <span>Pertandingan & Sabuk</span>
                <Shield className="w-5 h-5 text-[#D91F2C]" />
              </Link>
              <Link
                href="/lineup"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between py-3 border-b border-white/5 text-2xl font-black uppercase text-[#F5F3EE] hover:text-[#EF3340] transition-colors"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                <span>Panggung Musik</span>
                <Music className="w-5 h-5 text-[#E2BA75]" />
              </Link>
              <Link
                href="/merchandise"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between py-3 border-b border-white/5 text-2xl font-black uppercase text-[#F5F3EE] hover:text-[#EF3340] transition-colors"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                <span>Official Merch</span>
                <ShoppingBag className="w-5 h-5 text-[#A7A7AD]" />
              </Link>
            </div>

            {/* Community & Info Links */}
            <div className="space-y-2 pt-2">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#A7A7AD]/60 mb-2 font-mono">
                Komunitas & Kunjungan
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm font-semibold">
                <Link
                  href="/voting"
                  onClick={() => setIsOpen(false)}
                  className="p-3 rounded-sm bg-white/5 border border-white/10 text-[#F5F3EE] hover:border-[#D91F2C]/50 transition-colors flex items-center gap-2"
                >
                  <Trophy className="w-4 h-4 text-[#D91F2C]" />
                  <span>City Pride</span>
                </Link>
                <Link
                  href="/creator"
                  onClick={() => setIsOpen(false)}
                  className="p-3 rounded-sm bg-white/5 border border-white/10 text-[#F5F3EE] hover:border-[#D91F2C]/50 transition-colors flex items-center gap-2"
                >
                  <Shield className="w-4 h-4 text-[#E2BA75]" />
                  <span>Creator Hub</span>
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className="p-3 rounded-sm bg-white/5 border border-white/10 text-[#F5F3EE] hover:border-[#D91F2C]/50 transition-colors flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>GOR UNY</span>
                </Link>
                <Link
                  href="/faq"
                  onClick={() => setIsOpen(false)}
                  className="p-3 rounded-sm bg-white/5 border border-white/10 text-[#F5F3EE] hover:border-[#D91F2C]/50 transition-colors flex items-center gap-2"
                >
                  <HelpCircle className="w-4 h-4 text-purple-400" />
                  <span>FAQ & Info</span>
                </Link>
              </div>
            </div>

          </div>

          {/* Drawer Footer Banner */}
          <div className="pt-6 border-t border-white/10 mt-6">
            <Link
              href="/tickets"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-sm bg-[#D91F2C] text-white text-base font-black uppercase tracking-wider shadow-lg shadow-[#D91F2C]/30 mb-4"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              <Ticket className="w-4 h-4" />
              <span>Akses Informasi Tiket</span>
            </Link>
            <p className="text-[11px] text-center text-[#A7A7AD] uppercase tracking-widest font-mono">
              12–14 DESEMBER 2026 • GOR UNY, YOGYAKARTA
            </p>
          </div>

        </div>
      )}
    </header>
  );
}
