"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart, formatRupiah } from "@/lib/cart-context";
import { ShoppingBag, Search, Plus } from "lucide-react";

interface Variant {
  id: string;
  size: string | null;
  color: string | null;
  stockQuantity: number;
}

interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  category: string;
  badge: string | null;
  material: string | null;
  imageUrl: string | null;
  variants: Variant[];
}

interface Props {
  initialProducts: Product[];
}

export default function MerchCatalogClient({ initialProducts }: Props) {
  const { addItem } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "ALL", label: "SEMUA PRODUK" },
    { id: "APPAREL", label: "KAOS & HOODIE" },
    { id: "EQUIPMENT", label: "FIGHT GEAR" },
  ];

  const filteredProducts = useMemo(() => {
    return initialProducts.filter((p) => {
      const matchesCategory =
        selectedCategory === "ALL" || p.category === selectedCategory;
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [initialProducts, selectedCategory, searchQuery]);

  const handleQuickAdd = (product: Product, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const v = product.variants[0];
    if (!v || v.stockQuantity <= 0) return;

    addItem({
      variantId: v.id,
      productId: product.id,
      name: product.name,
      slug: product.slug,
      imageUrl: product.imageUrl || "/images/v9/08_REFERENSI_FOTO_DAN_TEKSTUR.png",
      size: v.size,
      color: v.color,
      price: product.price,
      maxStock: v.stockQuantity,
    });
  };

  return (
    <div className="w-full space-y-6 font-sans">
      
      {/* Category Tabs & Compact Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-5 border-b border-white/10">
        
        {/* Category Segmented Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {categories.map((c) => {
            const isActive = selectedCategory === c.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setSelectedCategory(c.id)}
                className={`px-4 py-2 text-xs font-technical uppercase tracking-wider transition-all whitespace-nowrap shrink-0 border ${
                  isActive
                    ? "bg-[#D91F2C] text-white font-bold border-[#D91F2C] shadow-md shadow-red-950/40"
                    : "bg-[#141416] text-white/70 border-white/10 hover:text-white hover:border-white/30"
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        {/* Compact Search Input */}
        <div className="relative w-full sm:w-72">
          <input
            type="text"
            placeholder="Cari kaos, sarung tinju, hoodie..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#141416] border border-white/15 px-3 py-2.5 pl-9 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[#D91F2C] font-sans"
          />
          <Search className="w-3.5 h-3.5 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Gymshark / UFC Store Editorial Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="py-20 text-center border border-white/10 bg-[#141416] p-8 space-y-3">
          <ShoppingBag className="w-10 h-10 text-[#D91F2C] mx-auto opacity-70" />
          <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-white">
            PRODUK TIDAK DITEMUKAN
          </h3>
          <p className="text-xs text-white/50 max-w-sm mx-auto font-sans">
            Tidak ada merchandise yang sesuai dengan kata kunci pencarian Anda.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("ALL");
              setSearchQuery("");
            }}
            className="mt-4 px-4 py-2 bg-[#D91F2C] text-white font-technical text-xs uppercase tracking-wider font-bold"
          >
            RESET PENCARIAN
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {filteredProducts.map((p) => {
            const defaultVariant = p.variants[0];
            const inStock = defaultVariant && defaultVariant.stockQuantity > 0;

            return (
              <Link
                key={p.id}
                href={`/merch/${p.slug}`}
                className="group flex flex-col bg-[#141416] border border-white/10 hover:border-[#D91F2C] transition-all overflow-hidden"
              >
                {/* 1:1 Aspect Square Product Image with Grayscale Contrast */}
                <div className="relative aspect-square w-full bg-[#1c1c1f] overflow-hidden">
                  <Image
                    src={p.imageUrl || "/images/v9/08_REFERENSI_FOTO_DAN_TEKSTUR.png"}
                    alt={p.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover object-center grayscale contrast-110 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {p.badge && (
                    <span className="absolute top-2.5 left-2.5 bg-[#D91F2C] text-white font-technical text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 border border-[#D91F2C]/40">
                      {p.badge}
                    </span>
                  )}
                  
                  <span className={`absolute bottom-2.5 right-2.5 font-technical text-[9px] uppercase font-bold px-2 py-0.5 backdrop-blur-sm border ${
                    inStock 
                      ? "bg-black/80 text-emerald-400 border-emerald-500/30" 
                      : "bg-black/80 text-red-400 border-red-500/30"
                  }`}>
                    {inStock ? "TERSEDIA" : "HABIS"}
                  </span>
                </div>

                {/* Editorial Product Details */}
                <div className="p-3 sm:p-4 flex flex-col justify-between flex-1 space-y-2 bg-[#141416]">
                  <div className="space-y-1">
                    <span className="font-technical text-[10px] uppercase text-[#D91F2C] font-bold block">
                      {p.category}
                    </span>
                    <h3 className="font-display text-base sm:text-lg uppercase tracking-wider text-white group-hover:text-[#D91F2C] transition-colors line-clamp-2 leading-tight">
                      {p.name}
                    </h3>
                  </div>

                  <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                    <span className="font-technical text-sm sm:text-base font-bold text-white">
                      {formatRupiah(p.price)}
                    </span>
                    {inStock && (
                      <button
                        type="button"
                        onClick={(e) => handleQuickAdd(p, e)}
                        title="Tambah Cepat ke Keranjang"
                        className="p-1.5 bg-white/5 border border-white/15 hover:border-[#D91F2C] hover:bg-[#D91F2C] text-white transition-all"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}

    </div>
  );
}
