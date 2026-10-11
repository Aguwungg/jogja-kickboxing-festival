"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart, formatRupiah } from "@/lib/cart-context";
import {
  ShoppingBag,
  CreditCard,
  ArrowLeft,
  Check,
  Truck,
  MapPin,
  ShieldCheck,
  Ruler,
  RotateCcw,
  Info,
  Plus,
  Minus,
  Sparkles,
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
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailClient({ product, relatedProducts }: Props) {
  const router = useRouter();
  const { addItem } = useCart();

  const [selectedVariantId, setSelectedVariantId] = useState<string>(
    product.variants[0]?.id || ""
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [showSizeGuide, setShowSizeGuide] = useState<boolean>(false);
  const [addedAnimation, setAddedAnimation] = useState<boolean>(false);

  const selectedVariant =
    product.variants.find((v) => v.id === selectedVariantId) ||
    product.variants[0];

  const maxStock = selectedVariant ? selectedVariant.stockQuantity : 0;

  const handleAddToCart = () => {
    if (!selectedVariant || maxStock <= 0) return;

    addItem({
      variantId: selectedVariant.id,
      productId: product.id,
      name: product.name,
      slug: product.slug,
      imageUrl: product.imageUrl || "/images/jkb/merch-tee-black.jpg",
      size: selectedVariant.size,
      color: selectedVariant.color,
      price: product.price,
      quantity,
      maxStock,
    });

    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 2000);
  };

  const handleBuyNow = () => {
    if (!selectedVariant || maxStock <= 0) return;

    addItem({
      variantId: selectedVariant.id,
      productId: product.id,
      name: product.name,
      slug: product.slug,
      imageUrl: product.imageUrl || "/images/jkb/merch-tee-black.jpg",
      size: selectedVariant.size,
      color: selectedVariant.color,
      price: product.price,
      quantity,
      maxStock,
    });

    router.push("/checkout");
  };

  return (
    <div className="w-full space-y-16">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-[#90929A] font-sans">
        <Link href="/" className="hover:text-white transition-colors">
          Beranda
        </Link>
        <span>/</span>
        <Link href="/merch" className="hover:text-white transition-colors">
          Official Merch
        </Link>
        <span>/</span>
        <span className="text-white font-medium truncate max-w-xs">{product.name}</span>
      </nav>

      {/* Main Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Product Media Gallery (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="relative aspect-square w-full rounded-sm overflow-hidden bg-[#171719] border border-white/10 shadow-2xl group">
            <Image
              src={product.imageUrl || "/images/jkb/merch-tee-black.jpg"}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Badges on Image */}
            {product.badge && (
              <div className="absolute top-4 left-4 bg-[#D21F2B] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-xs shadow-lg">
                {product.badge}
              </div>
            )}

            <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-xs border border-white/10 text-[11px] text-white/90 flex items-center gap-1.5 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>OFFICIAL LICENSED</span>
            </div>
          </div>

          {/* Value Highlights */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3 bg-[#171719]/60 border border-white/5 rounded-sm flex items-center gap-2.5 text-xs text-white/80">
              <MapPin className="w-4 h-4 text-[#D21F2B] shrink-0" />
              <span>Pick up di Venue GOR</span>
            </div>
            <div className="p-3 bg-[#171719]/60 border border-white/5 rounded-sm flex items-center gap-2.5 text-xs text-white/80">
              <Truck className="w-4 h-4 text-[#D21F2B] shrink-0" />
              <span>Ekspedisi Nasional</span>
            </div>
          </div>
        </div>

        {/* Right: Product Details & Purchase Form (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          {/* Header Info */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs uppercase font-bold tracking-widest text-[#D21F2B] bg-[#D21F2B]/10 border border-[#D21F2B]/20 px-2.5 py-0.5 rounded-xs">
                {product.category}
              </span>
              <span className="text-xs font-mono text-[#90929A]">
                SKU: {product.slug.toUpperCase()}
              </span>
            </div>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight mb-4"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              {product.name}
            </h1>

            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-3xl font-black text-amber-400 font-mono">
                {formatRupiah(product.price)}
              </span>
              <span className="text-xs text-[#90929A] font-sans">
                (Sudah termasuk PPN & Merchandise Packaging)
              </span>
            </div>

            <p className="text-sm text-[#90929A] leading-relaxed font-sans border-t border-white/10 pt-4">
              {product.description}
            </p>
          </div>

          {/* Variant Selection */}
          <div className="space-y-3 pt-4 border-t border-white/10">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                <span>PILIH UKURAN / SPESIFIKASI:</span>
                <span className="text-amber-400 font-mono font-bold">
                  {selectedVariant?.size || "Standard"}
                </span>
              </label>

              {product.category === "APPAREL" && (
                <button
                  type="button"
                  onClick={() => setShowSizeGuide(!showSizeGuide)}
                  className="text-xs text-[#90929A] hover:text-white flex items-center gap-1 transition-colors underline"
                >
                  <Ruler className="w-3.5 h-3.5" />
                  <span>Panduan Ukuran (Size Guide)</span>
                </button>
              )}
            </div>

            {/* Size Pills */}
            <div className="flex flex-wrap gap-2.5">
              {product.variants.map((v) => {
                const isSelected = v.id === selectedVariantId;
                const isOutOfStock = v.stockQuantity <= 0;
                return (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => {
                      setSelectedVariantId(v.id);
                      setQuantity(1);
                    }}
                    disabled={isOutOfStock}
                    className={`min-w-16 py-3 px-4 rounded-sm border text-xs font-mono font-bold transition-all flex flex-col items-center justify-center ${
                      isSelected
                        ? "border-[#D21F2B] bg-[#D21F2B]/20 text-white shadow-md shadow-[#D21F2B]/20 ring-1 ring-[#D21F2B]"
                        : "border-white/10 bg-[#171719] text-white/80 hover:bg-white/10"
                    } ${isOutOfStock ? "opacity-30 cursor-not-allowed line-through" : ""}`}
                  >
                    <span className="text-sm">{v.size || "Standard"}</span>
                    <span className="text-[10px] text-[#90929A] mt-0.5">
                      {isOutOfStock ? "Habis" : `${v.stockQuantity} pcs`}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Live Stock Status Indicator */}
            <div className="flex items-center gap-2 pt-1 text-xs">
              <span
                className={`w-2 h-2 rounded-full ${
                  maxStock > 10 ? "bg-emerald-400 animate-pulse" : "bg-amber-400"
                }`}
              />
              <span className="text-[#90929A]">
                {maxStock > 10 ? (
                  <>
                    Stok Tersedia: <strong className="text-white">{maxStock} unit</strong> siap kirim atau pick-up di venue.
                  </>
                ) : (
                  <>
                    Stok Terbatas: Tersisa <strong className="text-amber-400">{maxStock} unit</strong> terakhir!
                  </>
                )}
              </span>
            </div>
          </div>

          {/* Size Guide Drawer / Inline Box */}
          {showSizeGuide && product.category === "APPAREL" && (
            <div className="bg-[#171719] border border-white/10 p-5 rounded-sm animate-in fade-in duration-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  Tabel Ukuran Kaos & Hoodie Resmi (Regular / Relaxed Fit)
                </span>
                <button
                  onClick={() => setShowSizeGuide(false)}
                  className="text-xs text-[#90929A] hover:text-white"
                >
                  Tutup
                </button>
              </div>
              <div className="overflow-x-auto text-xs font-mono">
                <table className="w-full text-left border-collapse border border-white/10">
                  <thead>
                    <tr className="bg-white/5 border-b border-white/10 text-white/70">
                      <th className="p-2 border-r border-white/10">Size</th>
                      <th className="p-2 border-r border-white/10">Lebar Dada (cm)</th>
                      <th className="p-2 border-r border-white/10">Panjang Badan (cm)</th>
                      <th className="p-2">Rekomendasi Berat (kg)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-[#90929A]">
                    <tr>
                      <td className="p-2 font-bold text-white border-r border-white/10">S</td>
                      <td className="p-2 border-r border-white/10">50 cm</td>
                      <td className="p-2 border-r border-white/10">70 cm</td>
                      <td className="p-2">50 - 62 kg</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold text-white border-r border-white/10">M</td>
                      <td className="p-2 border-r border-white/10">53 cm</td>
                      <td className="p-2 border-r border-white/10">73 cm</td>
                      <td className="p-2">63 - 72 kg</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold text-white border-r border-white/10">L</td>
                      <td className="p-2 border-r border-white/10">56 cm</td>
                      <td className="p-2 border-r border-white/10">76 cm</td>
                      <td className="p-2">73 - 82 kg</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold text-white border-r border-white/10">XL</td>
                      <td className="p-2 border-r border-white/10">59 cm</td>
                      <td className="p-2 border-r border-white/10">79 cm</td>
                      <td className="p-2">83 - 95 kg</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold text-white border-r border-white/10">XXL</td>
                      <td className="p-2 border-r border-white/10">62 cm</td>
                      <td className="p-2 border-r border-white/10">82 cm</td>
                      <td className="p-2">&gt; 95 kg</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Quantity and Actions */}
          <div className="space-y-4 pt-4 border-t border-white/10">
            <div className="flex items-center gap-4">
              <label className="text-xs font-bold uppercase tracking-wider text-white">
                JUMLAH:
              </label>
              <div className="flex items-center bg-[#171719] border border-white/10 rounded-sm">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center text-sm font-mono font-bold text-white">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.min(maxStock, q + 1))}
                  className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                  disabled={quantity >= maxStock}
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <button
                type="button"
                onClick={handleAddToCart}
                disabled={maxStock <= 0}
                className="w-full bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold uppercase tracking-wider py-4 px-6 rounded-sm text-sm transition-all flex items-center justify-center gap-2 group"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                <ShoppingBag className="w-4 h-4 group-hover:text-[#D21F2B] transition-colors" />
                <span>
                  {addedAnimation ? "Dimasukkan ke Keranjang!" : "Tambah ke Keranjang"}
                </span>
              </button>

              <button
                type="button"
                onClick={handleBuyNow}
                disabled={maxStock <= 0}
                className="w-full bg-[#D21F2B] hover:bg-[#b01822] text-white font-bold uppercase tracking-wider py-4 px-6 rounded-sm text-sm transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#D21F2B]/20"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                <CreditCard className="w-4 h-4" />
                <span>Beli Sekarang &rarr;</span>
              </button>
            </div>
          </div>

          {/* Specifications Details */}
          <div className="pt-6 border-t border-white/10 space-y-3">
            <h4
              className="text-sm font-bold uppercase tracking-wider text-white"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              SPESIFIKASI & MATERIAL PRODUK
            </h4>
            <div className="bg-[#171719]/40 border border-white/5 p-4 rounded-sm space-y-2 text-xs font-sans text-[#90929A]">
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-white/60">Bahan Utama</span>
                <span className="text-white font-medium">{product.material || "Katun Premium"}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-white/60">Sertifikasi Event</span>
                <span className="text-emerald-400 font-medium">Licensed Redy Championship 2</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-white/60">Opsi Pengambilan</span>
                <span className="text-white font-medium">Pick up GOR UNY / Kurir JNE/J&T</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-white/60">Garansi Penukaran</span>
                <span className="text-white font-medium">Tukar ukuran berlaku 3 hari pasca terima</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Recommendation */}
      {relatedProducts.length > 0 && (
        <section className="pt-16 border-t border-white/10 space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#D21F2B]">
                KOLEKSI TERKAIT LAINNYA
              </span>
              <h2
                className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                LENGKAPI GEAR PERTARUNGANMU
              </h2>
            </div>
            <Link
              href="/merch"
              className="text-xs uppercase font-bold tracking-wider text-[#90929A] hover:text-white transition-colors"
            >
              Lihat Semua Koleksi &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <Link
                key={rel.id}
                href={`/merch/${rel.slug}`}
                className="group bg-[#171719] border border-white/10 hover:border-[#D21F2B]/50 p-4 rounded-sm flex gap-4 transition-all"
              >
                <div className="relative w-20 h-20 bg-black/60 rounded-sm overflow-hidden shrink-0">
                  <Image
                    src={rel.imageUrl || "/images/jkb/merch-tee-black.jpg"}
                    alt={rel.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                    unoptimized
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] uppercase font-bold text-[#D21F2B] block">
                      {rel.category}
                    </span>
                    <h3 className="text-xs font-bold text-white line-clamp-1 group-hover:text-[#D21F2B] transition-colors">
                      {rel.name}
                    </h3>
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-400">
                    {formatRupiah(rel.price)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
