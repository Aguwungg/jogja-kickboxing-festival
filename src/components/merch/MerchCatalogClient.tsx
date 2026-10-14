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
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
        
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {categories.map((c) => {
            const isActive = selectedCategory === c.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setSelectedCategory(c.id)}
                className={`px-4 py-2 text-xs font-technical uppercase tracking-wider transition-all rounded shrink-0 ${
                  isActive
                    ? "bg-[#D91F2C] text-white shadow-md font-bold"
                    : "bg-[#141416] text-white/70 hover:text-white border border-white/10"
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        {/* Compact Search Input */}
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Cari kaos, sarung tinju..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#141416] border border-white/10 px-3 py-2 pl-9 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[#D91F2C] rounded"
          />
          <Search className="w-3.5 h-3.5 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Shopee-Style 2-Column Mobile Grid, 3/4-Column Desktop Grid */}
      {filteredProducts.length === 0 ? (
        <div className="py-20 text-center border border-white/10 bg-[#121214] rounded p-6 space-y-3">
          <ShoppingBag className="w-8 h-8 text-[#D91F2C] mx-auto opacity-70" />
          <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-white">
            PRODUK TIDAK DITEMUKAN
          </h3>
          <p className="text-xs text-white/50 max-w-sm mx-auto font-sans">
            Tidak ada merchandise yang sesuai dengan kata kunci pencarian Anda.
          </p>
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
                className="group flex flex-col bg-[#141416] border border-white/10 hover:border-[#D91F2C]/60 transition-all rounded overflow-hidden"
              >
                {/* 1:1 Aspect Square Product Image (Shopee Style) */}
                <div className="relative aspect-square w-full bg-[#1c1c1f] overflow-hidden">
                  <Image
                    src={p.imageUrl || "/images/v9/08_REFERENSI_FOTO_DAN_TEKSTUR.png"}
                    alt={p.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  {p.badge && (
                    <span className="absolute top-2 left-2 bg-[#D91F2C] text-white font-technical text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded shadow">
                      {p.badge}
                    </span>
                  )}
                  <span className={`absolute bottom-2 right-2 font-technical text-[9px] uppercase font-bold px-1.5 py-0.5 rounded backdrop-blur-sm ${
                    inStock ? "bg-black/75 text-emerald-400" : "bg-black/75 text-red-400"
                  }`}>
                    {inStock ? "TERSEDIA" : "HABIS"}
                  </span>
                </div>

                {/* Compact Product Details */}
                <div className="p-3 sm:p-3.5 flex flex-col justify-between flex-1 space-y-2">
                  <div className="space-y-1">
                    <span className="font-technical text-[9px] uppercase tracking-wider text-white/40 block">
                      {p.category}
                    </span>
                    <h3 className="font-sans text-xs sm:text-sm font-bold text-white line-clamp-2 group-hover:text-[#D91F2C] transition-colors leading-snug">
                      {p.name}
                    </h3>
                  </div>

                  <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                    <div>
                      <span className="font-technical text-xs sm:text-sm font-black text-[#D91F2C] block">
                        {formatRupiah(p.price)}
                      </span>
                    </div>

                    {inStock && (
                      <button
                        type="button"
                        onClick={(e) => handleQuickAdd(p, e)}
                        title="Tambah Cepat ke Keranjang"
                        className="p-1.5 bg-white/10 hover:bg-[#D91F2C] text-white rounded transition-colors"
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
