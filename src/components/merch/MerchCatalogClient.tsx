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
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 pb-6 border-b border-black/15">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((c) => {
            const isActive = selectedCategory === c.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setSelectedCategory(c.id)}
                className={`px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-display tracking-wider uppercase transition-all ${
                  isActive
                    ? "bg-[#0B0B0B] text-white shadow-sm ring-1 ring-black"
                    : "bg-transparent text-[#0B0B0B] hover:bg-black/5 border border-black/25"
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="CARI NAMA APPAREL ATAU GEAR..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-black/20 px-4 py-2.5 pl-10 text-xs uppercase tracking-wider text-[#0B0B0B] placeholder:text-[#8F8E8B] focus:outline-none focus:border-black font-sans"
          />
          <Search className="w-4 h-4 text-[#8F8E8B] absolute left-3.5 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="py-20 text-center border-t border-b border-black/15 space-y-4">
          <p className="font-technical text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
            KATALOG RESMI
          </p>
          <h3 className="font-display text-4xl sm:text-5xl uppercase tracking-wider text-[#0B0B0B]">
            KOLEKSI SEGERA HADIR.
          </h3>
          <p className="text-sm text-[#5A5957] max-w-md mx-auto font-sans leading-relaxed">
            Katalog merchandise resmi edisi terbatas sedang dalam proses produksi. Seluruh item akan dapat dipesan menjelang hari pelaksanaan.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredProducts.map((p) => {
            const defaultVariant = p.variants[0];
            const inStock = defaultVariant && defaultVariant.stockQuantity > 0;

            return (
              <Link
                key={p.id}
                href={`/merch/${p.slug}`}
                className="group block bg-white border border-black/15 p-5 hover:border-black transition-all ring-corner-frame"
              >
                {/* Product Image */}
                <div className="relative aspect-[4/5] w-full bg-[#EDE8DE] overflow-hidden mb-5">
                  <Image
                    src={p.imageUrl || "/images/v9/08_REFERENSI_FOTO_DAN_TEKSTUR.png"}
                    alt={p.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                  />
                  {p.badge && (
                    <span className="absolute top-3 left-3 bg-[#D91F2C] text-white font-technical text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5">
                      {p.badge}
                    </span>
                  )}
                  <span className="absolute bottom-3 right-3 bg-[#0B0B0B] text-white font-technical text-[10px] uppercase font-bold px-2 py-0.5">
                    {inStock ? "TERSEDIA" : "HABIS"}
                  </span>
                </div>

                {/* Product Details */}
                <div className="space-y-2">
                  <span className="font-technical text-[10px] uppercase font-bold tracking-widest text-[#77716D] block">
                    {p.category} {p.material ? `• ${p.material}` : ""}
                  </span>
                  <h3 className="font-display text-2xl uppercase tracking-wider text-[#0B0B0B] group-hover:text-[#D91F2C] transition-colors">
                    {p.name}
                  </h3>
                  <div className="flex items-baseline justify-between pt-2 border-t border-black/10">
                    <span className="font-technical text-base font-bold text-[#0B0B0B]">
                      {formatRupiah(p.price)}
                    </span>
                    <span className="font-technical text-xs text-[#77716D] group-hover:text-black flex items-center gap-1 transition-colors">
                      DETAIL <ArrowUpRight className="w-3.5 h-3.5" />
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
