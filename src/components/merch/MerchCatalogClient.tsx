"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart, formatRupiah } from "@/lib/cart-context";
import {
  ShoppingBag,
  Sparkles,
  Check,
  Tag,
  ShieldCheck,
  Truck,
  MapPin,
  Search,
  Filter,
  ArrowRight,
} from "lucide-react";

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
  const [quickVariantModalProduct, setQuickVariantModalProduct] = useState<Product | null>(null);
  const [selectedVariantId, setSelectedVariantId] = useState<string>("");

  const categories = [
    { id: "ALL", label: "Semua Koleksi" },
    { id: "APPAREL", label: "Apparel & Kaos" },
    { id: "EQUIPMENT", label: "Equipment & Gear" },
  ];

  // Filter and sort products
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
        return 0; // FEATURED preserves seed order
      });
  }, [initialProducts, selectedCategory, searchQuery, sortBy]);

  const handleQuickAddClick = (product: Product) => {
    if (product.variants.length === 1) {
      // Single variant, add directly
      const v = product.variants[0];
      addItem({
        variantId: v.id,
        productId: product.id,
        name: product.name,
        slug: product.slug,
        imageUrl: product.imageUrl || "/images/jkb/merch-tee-black.jpg",
        size: v.size,
        color: v.color,
        price: product.price,
        maxStock: v.stockQuantity,
      });
    } else {
      // Open quick modal
      setQuickVariantModalProduct(product);
      setSelectedVariantId(product.variants[0]?.id || "");
    }
  };

  const handleConfirmQuickAdd = () => {
    if (!quickVariantModalProduct) return;
    const v = quickVariantModalProduct.variants.find((item) => item.id === selectedVariantId);
    if (!v) return;

    addItem({
      variantId: v.id,
      productId: quickVariantModalProduct.id,
      name: quickVariantModalProduct.name,
      slug: quickVariantModalProduct.slug,
      imageUrl: quickVariantModalProduct.imageUrl || "/images/jkb/merch-tee-black.jpg",
      size: v.size,
      color: v.color,
      price: quickVariantModalProduct.price,
      maxStock: v.stockQuantity,
    });
    setQuickVariantModalProduct(null);
  };

  return (
    <div className="w-full space-y-12">
      {/* Search & Filter Controls Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-[#171719]/80 border border-white/10 p-4 rounded-sm">
        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                selectedCategory === cat.id
                  ? "bg-[#D21F2B] text-white shadow-md shadow-[#D21F2B]/20"
                  : "bg-white/5 hover:bg-white/10 text-[#90929A] hover:text-white border border-white/5"
              }`}
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search & Sort */}
        <div className="flex items-center gap-3">
          <div className="relative flex-1 md:w-64">
            <Search className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Cari kaos, hoodie, gear..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#09090b] border border-white/10 rounded-sm pl-9 pr-3 py-2 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#D21F2B] transition-colors"
            />
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <Filter className="w-3.5 h-3.5 text-[#90929A]" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#09090b] border border-white/10 rounded-sm px-2.5 py-2 text-xs text-white focus:outline-none focus:border-[#D21F2B] font-sans"
            >
              <option value="FEATURED">Koleksi Utama</option>
              <option value="PRICE_LOW">Harga Terendah</option>
              <option value="PRICE_HIGH">Harga Tertinggi</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 bg-[#171719]/40 border border-white/10 rounded-sm">
          <Tag className="w-12 h-12 text-white/20 mx-auto mb-4" />
          <h3
            className="text-xl font-bold uppercase tracking-wider text-white mb-2"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            Tidak Ada Produk Ditemukan
          </h3>
          <p className="text-sm text-[#90929A] max-w-sm mx-auto mb-6">
            Coba sesuaikan kata kunci pencarian atau ubah filter kategori merchandise.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("ALL");
              setSearchQuery("");
            }}
            className="px-6 py-2 bg-white/10 hover:bg-white/15 text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-all"
          >
            Reset Filter
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const totalStock = product.variants.reduce((sum, v) => sum + v.stockQuantity, 0);
            return (
              <div
                key={product.id}
                className="group bg-[#171719] border border-white/10 hover:border-[#D21F2B]/50 rounded-sm overflow-hidden flex flex-col transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#D21F2B]/10 relative"
              >
                {/* Image Container with Badges */}
                <Link
                  href={`/merch/${product.slug}`}
                  className="relative aspect-square w-full bg-black/60 overflow-hidden block"
                >
                  <Image
                    src={product.imageUrl || "/images/jkb/merch-tee-black.jpg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Badge */}
                  {/* Official Merch Indicator */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-sm border border-white/10 text-[10px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="text-white/90 font-medium">
                      Koleksi Resmi
                    </span>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-widest text-[#EF3340] mb-1">
                      {product.category}
                    </div>
                    <Link href={`/merch/${product.slug}`}>
                      <h3
                        className="text-lg font-black uppercase tracking-tight text-white group-hover:text-[#EF3340] transition-colors line-clamp-2 leading-tight"
                        style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                      >
                        {product.name}
                      </h3>
                    </Link>

                    {product.material && (
                      <p className="text-[11px] text-[#90929A] mt-2 line-clamp-2 leading-relaxed">
                        {product.material}
                      </p>
                    )}
                  </div>

                  {/* Price & Action */}
                  <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-white/50 block uppercase">Harga Resmi</span>
                      <span className="text-lg font-black text-amber-400 font-mono">
                        {formatRupiah(product.price)}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleQuickAddClick(product)}
                        className="p-2.5 rounded-sm bg-[#D21F2B] hover:bg-[#b01822] text-white transition-all shadow-md shadow-[#D21F2B]/20"
                        title="Tambah Cepat ke Keranjang"
                        aria-label={`Beli ${product.name}`}
                      >
                        <ShoppingBag className="w-4 h-4" />
                      </button>
                      <Link
                        href={`/merch/${product.slug}`}
                        className="p-2.5 rounded-sm bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10 transition-colors"
                        title="Lihat Detail Produk"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Quick Add Variant Selection Modal */}
      {quickVariantModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#171719] border border-white/15 rounded-sm max-w-sm w-full p-6 text-[#F6F3EC] shadow-2xl relative">
            <h3
              className="text-xl font-black uppercase tracking-tight text-white mb-1"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              PILIH UKURAN / VARIAN
            </h3>
            <p className="text-xs text-[#90929A] mb-4">
              {quickVariantModalProduct.name}
            </p>

            <div className="space-y-2 mb-6">
              <label className="text-[11px] font-bold uppercase tracking-wider text-white/70 block">
                Ukuran Tersedia:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {quickVariantModalProduct.variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariantId(v.id)}
                    disabled={v.stockQuantity <= 0}
                    className={`py-2.5 px-3 rounded-sm border text-xs font-mono font-bold transition-all flex flex-col items-center justify-center ${
                      selectedVariantId === v.id
                        ? "border-[#D21F2B] bg-[#D21F2B]/20 text-white"
                        : "border-white/10 bg-white/5 text-white/80 hover:bg-white/10"
                    } ${v.stockQuantity <= 0 ? "opacity-30 cursor-not-allowed" : ""}`}
                  >
                    <span>{v.size || "Standard"}</span>
                    <span className="text-[9px] text-[#90929A]">Stok: {v.stockQuantity}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuickVariantModalProduct(null)}
                className="flex-1 py-2.5 border border-white/10 hover:bg-white/5 text-xs font-bold uppercase tracking-wider rounded-sm transition-all text-[#90929A] hover:text-white"
              >
                Batal
              </button>
              <button
                onClick={handleConfirmQuickAdd}
                className="flex-1 py-2.5 bg-[#D21F2B] hover:bg-[#b01822] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-all shadow-lg shadow-[#D21F2B]/20 flex items-center justify-center gap-1.5"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Masukkan Keranjang</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Brand & Guarantee Banners */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-white/10">
        <div className="bg-[#171719]/40 border border-white/5 p-6 rounded-sm flex items-start gap-4">
          <div className="w-12 h-12 rounded-sm bg-[#D21F2B]/10 border border-[#D21F2B]/30 flex items-center justify-center text-[#D21F2B] shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h4
              className="text-base font-bold uppercase tracking-wider text-white mb-1"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              100% LISENSI RESMI JKB
            </h4>
            <p className="text-xs text-[#90929A] leading-relaxed">
              Diproduksi dengan standar apparel tarung internasional & garansi keaslian label Redy Championship 2.
            </p>
          </div>
        </div>

        <div className="bg-[#171719]/40 border border-white/5 p-6 rounded-sm flex items-start gap-4">
          <div className="w-12 h-12 rounded-sm bg-[#D21F2B]/10 border border-[#D21F2B]/30 flex items-center justify-center text-[#D21F2B] shrink-0">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <h4
              className="text-base font-bold uppercase tracking-wider text-white mb-1"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              PICK UP VENUE GRATIS
            </h4>
            <p className="text-xs text-[#90929A] leading-relaxed">
              Ambil pesanan Anda langsung di Official Merchandise Booth GOR UNY saat hari festival (12–14 Desember 2026).
            </p>
          </div>
        </div>

        <div className="bg-[#171719]/40 border border-white/5 p-6 rounded-sm flex items-start gap-4">
          <div className="w-12 h-12 rounded-sm bg-[#D21F2B]/10 border border-[#D21F2B]/30 flex items-center justify-center text-[#D21F2B] shrink-0">
            <Truck className="w-6 h-6" />
          </div>
          <div>
            <h4
              className="text-base font-bold uppercase tracking-wider text-white mb-1"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              PENGIRIMAN EKSPEDISI AMAN
            </h4>
            <p className="text-xs text-[#90929A] leading-relaxed">
              Kirim ke seluruh penjuru Indonesia via JNE & J&T Express dengan bubble wrap tebal dan box karton proteksi ganda.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
