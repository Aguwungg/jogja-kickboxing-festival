"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart, formatRupiah } from "@/lib/cart-context";
import { ShoppingBag, ArrowUpRight, Search } from "lucide-react";

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
  const [sortBy, setSortBy] = useState<string>("FEATURED");

  const categories = [
    { id: "ALL", label: "SEMUA KOLEKSI" },
    { id: "APPAREL", label: "APPAREL & KAOS" },
    { id: "EQUIPMENT", label: "FIGHT GEAR & AKSESORIS" },
  ];

  const filteredProducts = useMemo(() => {
    return initialProducts
      .filter((p) => {
        const matchesCategory =
          selectedCategory === "ALL" || p.category === selectedCategory;
        const matchesSearch =
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (p.material && p.material.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === "PRICE_LOW") return a.price - b.price;
        if (sortBy === "PRICE_HIGH") return b.price - a.price;
        return 0;
      });
  }, [initialProducts, selectedCategory, searchQuery, sortBy]);

  const handleQuickAdd = (product: Product, e: React.MouseEvent) => {
    e.preventDefault();
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
    <div className="w-full space-y-10 font-sans">
      
      {/* Search and Category Filter Ribbon */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        
        {/* Categories Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
          {categories.map((c) => {
            const isActive = selectedCategory === c.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setSelectedCategory(c.id)}
                className={`px-4 py-2 text-xs font-display font-extrabold uppercase tracking-wider transition-colors whitespace-nowrap ${
                  isActive
                    ? "bg-[#D91F2C] text-white"
                    : "bg-[#141416] text-[#8F8E8B] hover:text-[#F4F0E8] border border-white/5"
                }`}
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-[#8F8E8B] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari produk apparel..."
            className="w-full bg-[#141416] border border-white/10 pl-9 pr-4 py-2 text-xs text-[#F4F0E8] placeholder-[#5A5957] focus:outline-none focus:border-[#D91F2C]"
          />
        </div>

      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="p-16 text-center bg-[#141416] border border-white/10 space-y-3 max-w-md mx-auto">
          <ShoppingBag className="w-8 h-8 text-[#8F8E8B] mx-auto" />
          <h3 className="v9-display-title text-2xl text-[#F4F0E8]" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
            TIDAK ADA PRODUK
          </h3>
          <p className="text-xs text-[#8F8E8B]">
            Tidak ada produk yang cocok dengan kata kunci pencarian.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((p) => {
            const totalStock = p.variants.reduce((acc, v) => acc + v.stockQuantity, 0);
            const isOutOfStock = totalStock <= 0;

            return (
              <Link
                key={p.id}
                href={`/merch/${p.slug}`}
                className="group bg-[#141416] border border-white/10 hover:border-[#D91F2C] flex flex-col justify-between transition-colors overflow-hidden"
              >
                {/* Product Image */}
                <div className="h-72 sm:h-80 bg-[#0B0B0B] relative overflow-hidden">
                  {p.imageUrl ? (
                    <Image
                      src={p.imageUrl}
                      alt={p.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-white/5 font-display text-8xl font-black">
                      JKBF
                    </div>
                  )}

                  {/* Badge */}
                  {p.badge && (
                    <div className="absolute top-3 left-3 bg-[#D91F2C] text-white px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest font-bold">
                      {p.badge}
                    </div>
                  )}

                  {isOutOfStock && (
                    <div className="absolute inset-0 bg-[#0B0B0B]/80 flex items-center justify-center">
                      <span className="font-mono text-xs font-bold text-[#D91F2C] uppercase tracking-widest">
                        HABIS TERJUAL
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div className="p-5 space-y-3 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[10px] text-[#8F8E8B] font-mono uppercase tracking-widest block">
                      {p.category}
                    </span>
                    <h3
                      className="v9-display-title text-xl text-[#F4F0E8] group-hover:text-white transition-colors mt-0.5"
                      style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                    >
                      {p.name}
                    </h3>
                    <p className="text-xs text-[#8F8E8B] line-clamp-1 font-sans mt-1">
                      {p.material || p.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between font-mono">
                    <span className="text-sm font-bold text-[#F4F0E8]">
                      {formatRupiah(p.price)}
                    </span>
                    <span className="text-xs text-[#D91F2C] font-bold group-hover:translate-x-1 transition-transform flex items-center gap-0.5">
                      DETAIL ↗
                    </span>
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
