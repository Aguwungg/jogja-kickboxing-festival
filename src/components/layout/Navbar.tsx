"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { jkbfLinks } from "@/lib/event-config";

interface NavItem {
  name: string;
  href: string;
  external?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { name: "HOME", href: "/" },
  { name: "KEJUARAAN", href: "/championship" },
  { name: "VENUE", href: "/venue" },
  { name: "EVENT GUIDE", href: "/event-guide" },
  { name: "WHAT'S NEW", href: "/whats-new" },
  { name: "TENTANG", href: "/tentang" },
  { name: "KONTAK", href: "/kontak" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname.startsWith(href.split("#")[0]) && href.split("#")[0] !== "/";
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/85 backdrop-blur-2xl border-b border-white/[0.08] py-2.5 shadow-2xl"
          : "bg-black/75 backdrop-blur-xl border-b border-white/[0.06] py-3 sm:py-3.5"
      }`}
    >
      <div
        className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between"
        ref={navRef}
      >
        {/* Logo */}
        <Link
          href="/"
          className="inline-flex items-center gap-3 sm:gap-4 group z-50 select-none shrink-0"
          aria-label="Jogja Kickboxing Festival — Halaman Utama"
        >
          <div className="relative h-9 sm:h-10 w-20 sm:w-24 transition-transform duration-200 group-hover:scale-[1.02]">
            <Image
              src="/JKBF Kickboxing Festival Emblem 1.png"
              alt="Jogja Kickboxing Festival Official Logo"
              fill
              priority
              className="object-contain object-left"
              sizes="(max-width: 640px) 90px, 120px"
            />
          </div>
          <div className="hidden xl:flex flex-col border-l border-white/10 pl-3 leading-none justify-center">
            <span className="font-technical text-[9px] uppercase tracking-[0.2em] text-[#D91F2C] font-bold">
              PENGPROV KBI DIY
            </span>
            <span className="font-technical text-[9px] uppercase tracking-[0.12em] text-[#86868B] mt-0.5">
              #JOGJAPUNYANYALI
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-6 xl:gap-8"
          aria-label="Navigasi Utama"
        >
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`font-technical text-[13px] tracking-[0.1em] transition-all py-1.5 relative ${
                  active
                    ? "text-[#F5F5F7] font-bold"
                    : "text-[#86868B] hover:text-[#F5F5F7]"
                }`}
              >
                {item.name}
                {active && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D91F2C] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right side — Primary CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          {/* Desktop Primary CTA — Combat Block Button */}
          <a
            href={jkbfLinks.fighterRegistration}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex font-display text-[13px] xl:text-[14px] tracking-wider text-white bg-[#D91F2C] hover:bg-[#B81521] active:scale-95 px-5 py-2 xl:px-6 xl:py-2.5 rounded-xs transition-all items-center gap-1.5 shadow-[0_0_15px_rgba(217,31,44,0.35)] font-bold"
            aria-label="Daftar Fighter JKBF 2026 (Google Form Resmi)"
          >
            <span>DAFTAR SEKARANG</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#F5F5F7] hover:text-[#D91F2C] border border-white/10 bg-[#111114] rounded-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D91F2C]"
            aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Menu Navigasi Mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="lg:hidden border-b border-white/10 bg-black/95 backdrop-blur-2xl max-h-[85vh] overflow-y-auto"
          >
            <div className="px-5 py-6 space-y-3">
              {/* Identity bar */}
              <div className="flex items-center justify-between pb-4 mb-2 border-b border-white/10">
                <span className="font-technical text-[10px] uppercase tracking-[0.2em] text-[#86868B]">
                  JOGJA KICKBOXING FESTIVAL
                </span>
                <span className="font-technical text-[10px] uppercase tracking-[0.2em] text-[#D91F2C] font-bold">
                  JKBF 2026
                </span>
              </div>

              {/* Nav links */}
              {NAV_ITEMS.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-3 px-1 font-display text-xl tracking-wider border-b border-white/5 transition-colors ${
                      active
                        ? "text-[#D91F2C]"
                        : "text-[#F5F5F7] hover:text-[#D91F2C]"
                    }`}
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#86868B]" />
                  </Link>
                );
              })}

              {/* Primary Action Button in Mobile Drawer — Apple Pill */}
              <div className="pt-2">
                <a
                  href={jkbfLinks.fighterRegistration}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3.5 bg-[#D91F2C] text-white font-display text-base tracking-wider uppercase transition-colors hover:bg-[#B81521] shadow-[0_0_20px_rgba(217,31,44,0.4)] font-bold inline-flex items-center justify-center gap-2 rounded-xs"
                >
                  <span>DAFTAR FIGHTER (FORM RESMI)</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Campaign line */}
              <div className="pt-3 border-t border-white/10 text-center space-y-1">
                <span className="font-technical text-[10px] uppercase tracking-[0.25em] text-[#D91F2C] font-bold block">
                  #JOGJAPUNYANYALI
                </span>
                <p className="font-technical text-[10px] uppercase tracking-wider text-[#F5F5F7]">
                  19–20 DESEMBER 2026 • GOR PANCASILA UGM
                </p>
                <p className="font-display text-xs text-[#77716D] tracking-wider">
                  RISE • FIGHT • CONQUER
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
