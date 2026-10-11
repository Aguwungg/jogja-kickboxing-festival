"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/lib/cart-context";

const navLinks = [
  { name: "Beranda", href: "/" },
  { name: "Jadwal", href: "/jadwal" },
  { name: "Fighter Center", href: "/championship" },
  { name: "City Pride", href: "/city-pride" },
  { name: "Official Merch", href: "/merch" },
  { name: "Creator Hub", href: "/creator" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-jkb-black/90 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50">
          <span className="font-bold text-2xl md:text-3xl text-[#F6F3EC] tracking-wider uppercase" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
            JKB <span className="text-[#D21F2B]">2026</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest text-[#90929A] hover:text-[#F6F3EC] transition-colors relative group"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#D21F2B] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="/ppv"
            className="text-sm uppercase tracking-widest text-[#F6F3EC] bg-[#D21F2B] hover:bg-[#b01822] px-6 py-2.5 rounded-sm transition-colors shadow-[0_0_15px_rgba(210,31,43,0.3)] hover:shadow-[0_0_25px_rgba(210,31,43,0.6)]"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            Nonton PPV
          </Link>

          {/* Cart Drawer Trigger */}
          <button
            onClick={toggleCart}
            className="relative p-2.5 rounded-sm border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all flex items-center justify-center group"
            title="Buka Keranjang Belanja"
            aria-label="Keranjang Belanja"
          >
            <ShoppingBag className="w-4 h-4 text-white group-hover:text-[#D21F2B] transition-colors" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#D21F2B] text-white text-[10px] font-mono font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-md shadow-[#D21F2B]/50 animate-pulse">
                {totalItems}
              </span>
            )}
          </button>
        </nav>

        {/* Mobile Action Hub */}
        <div className="flex items-center gap-2.5 md:hidden">
          <button
            onClick={toggleCart}
            className="relative p-2 rounded-sm border border-white/10 bg-white/5 text-white"
            title="Buka Keranjang Belanja"
            aria-label="Keranjang Belanja"
          >
            <ShoppingBag className="w-5 h-5 text-white" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#D21F2B] text-white text-[9px] font-mono font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>

          <button
            className="z-50 text-jkb-offwhite p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-jkb-black z-40 flex flex-col items-center justify-center space-y-8 pt-20"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-display uppercase tracking-widest text-jkb-offwhite hover:text-jkb-red transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/ppv"
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-display uppercase tracking-widest text-jkb-black bg-jkb-red px-8 py-4 rounded-sm transition-colors mt-4"
            >
              Nonton PPV
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
