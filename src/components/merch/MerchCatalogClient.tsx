"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart, formatRupiah } from "@/lib/cart-context";
import { ArrowUpRight, Search } from "lucide-react";

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
    { id: "ALL", label: "SEMUA KOLEKSI" },
    { id: "APPAREL", label: "APPAREL & KAOS" },
    { id: "EQUIPMENT", label: "FIGHT GEAR & AKSESORIS" },
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
    <div className="w-full space-y-12 font-sans">
      
      {/* Search and Category Filters */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 pb-6 border-b border-black/10">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((c) => {
            const isActive = selectedCategory === c.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setSelectedCategory(c.id)}
                className={`px-4 sm:px-6 py-2.5 text-xs font-display font-black uppercase tracking-wider transition-all ${
                  isActive
                    ? "bg-[#0B0B0B] text-white"
                    : "bg-transparent text-[#0B0B0B] hover:bg-black/5 border border-black/20"
                }`}
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-[#8F8E8B] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari apparel atau aksesoris..."
            className="w-full bg-white/70 border border-black/20 pl-9 pr-4 py-2 text-xs text-[#0B0B0B] placeholder-[#8F8E8B] focus:outline-none focus:border-[#D91F2C]"
          />
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="py-24 text-center border-t border-b border-black/10 space-y-3">
          <h3
            className="text-2xl sm:text-3xl font-black uppercase text-[#0B0B0B]"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            PRODUK SEGERA HADIR
          </h3>
          <p className="text-sm text-[#5A5957] max-w-md mx-auto">
            Katalog merchandise sedang dalam proses kurasi dan penyiapan kuota rilis resmi.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredProducts.map((p) => {
            const defaultVariant = p.variants[0];
            const hasStock = defaultVariant && defaultVariant.stockQuantity > 0;

            return (
              <Link
                key={p.id}
                href={`/merch/${p.slug}`}
                className="group border border-black/10 bg-white/40 hover:bg-white/80 p-6 flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="relative aspect-square w-full bg-[#141416] mb-5 overflow-hidden">
                    <Image
                      src={p.imageUrl || "/images/v9/08_REFERENSI_FOTO_DAN_TEKSTUR.png"}
                      alt={p.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center grayscale contrast-125 group-hover:scale-105 transition-transform duration-300"
                    />
                    {p.badge && (
                      <div className="absolute top-3 left-3 bg-[#D91F2C] text-white px-2.5 py-0.5 text-[10px] font-mono font-bold tracking-widest uppercase">
                        {p.badge}
                      </div>
                    )}
                  </div>

                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D91F2C] block">
                    {p.category}
                  </span>
                  <h3
                    className="text-2xl font-black uppercase tracking-tight text-[#0B0B0B] group-hover:text-[#D91F2C] transition-colors mt-1"
                    style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                  >
                    {p.name}
                  </h3>
                  <p className="text-xs text-[#5A5957] line-clamp-2 mt-1 font-sans">
                    {p.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-black/10 flex items-center justify-between">
                  <span className="text-base font-black text-[#0B0B0B] font-mono">
                    {formatRupiah(p.price)}
                  </span>
                  
                  {hasStock ? (
                    <button
                      type="button"
                      onClick={(e) => handleQuickAdd(p, e)}
                      className="px-4 py-1.5 bg-[#0B0B0B] hover:bg-[#D91F2C] text-white text-[11px] font-mono uppercase tracking-wider transition-colors"
                    >
                      + KERANJANG
                    </button>
                  ) : (
                    <span className="text-xs text-[#8F8E8B] font-mono uppercase">
                      HABIS
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      )}

    </div>
  );
}
