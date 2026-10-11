"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import {
  X,
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    setIsOpen,
    removeItem,
    updateQuantity,
    totalItems,
    subtotal,
    formatRupiah,
  } = useCart();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, setIsOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="w-screen max-w-md bg-[#111114] border-l border-white/10 flex flex-col text-[#F6F3EC] shadow-2xl"
            >
              {/* Header */}
              <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#171719]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-sm bg-[#D21F2B]/10 border border-[#D21F2B]/30 flex items-center justify-center text-[#D21F2B]">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h2
                      className="text-xl font-black uppercase tracking-tight text-white leading-none"
                      style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                    >
                      KERANJANG MERCH
                    </h2>
                    <p className="text-xs text-[#90929A] font-sans mt-0.5">
                      {totalItems} item resmi terpilih
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="w-9 h-9 rounded-sm border border-white/10 flex items-center justify-center text-[#90929A] hover:text-white hover:bg-white/5 transition-all"
                  aria-label="Tutup Keranjang"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {items.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/30 mb-4">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <p
                      className="text-lg font-bold uppercase tracking-wider text-white mb-2"
                      style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                    >
                      Keranjang Masih Kosong
                    </p>
                    <p className="text-xs text-[#90929A] max-w-xs mb-6">
                      Dukung atlet dan rayakan atmosfer festival dengan merchandise resmi JKB 2026.
                    </p>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="px-6 py-2.5 bg-[#D21F2B] hover:bg-[#b01822] text-white font-bold text-xs uppercase tracking-widest rounded-sm transition-all"
                      style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                    >
                      Lihat Katalog Merch
                    </button>
                  </div>
                ) : (
                  items.map((item) => (
                    <div
                      key={item.variantId}
                      className="p-3.5 rounded-sm bg-[#171719]/80 border border-white/5 hover:border-white/15 transition-all flex gap-3.5 relative group"
                    >
                      {/* Thumbnail */}
                      <div className="w-20 h-20 bg-black/40 rounded-sm border border-white/10 relative overflow-hidden shrink-0">
                        <Image
                          src={item.imageUrl}
                          alt={item.name}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>

                      {/* Info & Quantity */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="text-xs font-bold text-white line-clamp-1 group-hover:text-[#D21F2B] transition-colors">
                              {item.name}
                            </h3>
                            <button
                              onClick={() => removeItem(item.variantId)}
                              className="text-white/30 hover:text-[#D21F2B] transition-colors p-1"
                              title="Hapus item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <div className="flex items-center gap-2 mt-1">
                            {item.size && (
                              <span className="text-[10px] uppercase font-mono font-bold px-1.5 py-0.5 rounded-xs bg-white/10 text-white/80 border border-white/10">
                                {item.size}
                              </span>
                            )}
                            <span className="text-xs font-bold text-amber-400">
                              {formatRupiah(item.price)}
                            </span>
                          </div>
                        </div>

                        {/* Quantity Stepper */}
                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5">
                          <div className="flex items-center gap-2 bg-[#09090b] border border-white/10 rounded-sm p-0.5">
                            <button
                              onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                              className="w-6 h-6 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 rounded-xs transition-colors"
                              title="Kurangi"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-mono font-bold px-2 text-white">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                              disabled={item.quantity >= item.maxStock}
                              className="w-6 h-6 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 rounded-xs transition-colors disabled:opacity-30 disabled:hover:bg-transparent"
                              title="Tambah"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <span className="text-xs font-mono font-bold text-white">
                            {formatRupiah(item.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div className="p-6 border-t border-white/10 bg-[#171719] space-y-4">
                  {/* Delivery Info Snippet */}
                  <div className="flex items-center gap-2 text-[11px] text-[#90929A] bg-white/5 p-2.5 rounded-sm border border-white/5">
                    <MapPin className="w-4 h-4 text-[#D21F2B] shrink-0" />
                    <span>
                      Tersedia <strong>Pick Up Gratis</strong> di Booth GOR Among Rogo atau Ekspedisi Reguler.
                    </span>
                  </div>

                  {/* Subtotal Calculation */}
                  <div className="space-y-1.5 text-xs font-sans">
                    <div className="flex justify-between text-[#90929A]">
                      <span>Subtotal Item ({totalItems})</span>
                      <span className="font-mono text-white">{formatRupiah(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-[#90929A]">
                      <span>Estimasi Pengambilan di Venue</span>
                      <span className="text-emerald-400 font-bold uppercase text-[10px]">GRATIS / RP 0</span>
                    </div>
                    <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-white/10">
                      <span
                        className="uppercase tracking-wider"
                        style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                      >
                        Total Tagihan
                      </span>
                      <span className="font-mono text-[#D21F2B] text-lg font-black">
                        {formatRupiah(subtotal)}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2 pt-2">
                    <Link
                      href="/checkout"
                      onClick={() => setIsOpen(false)}
                      className="w-full bg-[#D21F2B] hover:bg-[#b01822] text-white font-bold uppercase tracking-wider py-3.5 px-4 rounded-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#D21F2B]/20 text-sm"
                      style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                    >
                      <span>Lanjut ke Checkout</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <button
                      onClick={() => setIsOpen(false)}
                      className="w-full bg-transparent hover:bg-white/5 text-[#90929A] hover:text-white border border-white/10 font-bold uppercase tracking-wider py-2.5 px-4 rounded-sm text-xs transition-all"
                      style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                    >
                      Lanjut Belanja
                    </button>
                  </div>

                  {/* Security Assurance */}
                  <div className="flex items-center justify-center gap-1.5 text-[10px] text-white/40 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Transaksi Terverifikasi Resmi & Midtrans Sandbox Ready</span>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
