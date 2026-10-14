"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart, formatRupiah } from "@/lib/cart-context";
import { ArrowLeft, CheckCircle2, Plus, Minus } from "lucide-react";

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
  const [addedAlert, setAddedAlert] = useState<boolean>(false);

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
      imageUrl: product.imageUrl || "/images/v9/08_REFERENSI_FOTO_DAN_TEKSTUR.png",
      size: selectedVariant.size,
      color: selectedVariant.color,
      price: product.price,
      quantity,
      maxStock,
    });

    setAddedAlert(true);
    setTimeout(() => setAddedAlert(false), 2500);
  };

  const handleBuyNow = () => {
    if (!selectedVariant || maxStock <= 0) return;

    addItem({
      variantId: selectedVariant.id,
      productId: product.id,
      name: product.name,
      slug: product.slug,
      imageUrl: product.imageUrl || "/images/v9/08_REFERENSI_FOTO_DAN_TEKSTUR.png",
      size: selectedVariant.size,
      color: selectedVariant.color,
      price: product.price,
      quantity,
      maxStock,
    });

    router.push("/checkout");
  };

  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#F4F0E8] text-[#0B0B0B] pt-24 lg:pt-28 pb-24 overflow-x-hidden font-sans">
      
      {/* Breadcrumb Navigation */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-4 w-full flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#5A5957] border-b border-black/10">
        <Link href="/merch" className="hover:text-black transition-colors flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>KATALOG MERCHANDISE</span>
        </Link>
        <span>/</span>
        <span className="text-[#D91F2C] font-bold">{product.name}</span>
      </div>

      {/* ═════════════════════════════════════════════════════════════════════
          1. PRODUCT HERO & PURCHASE INTERACTION (Matches 12_merch_detail.png)
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-12 lg:py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Product Image */}
          <div className="lg:col-span-6 relative aspect-square w-full bg-[#141416] border border-black/10 overflow-hidden shadow-sm">
            <Image
              src={product.imageUrl || "/images/v9/08_REFERENSI_FOTO_DAN_TEKSTUR.png"}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center grayscale contrast-125"
            />
            {product.badge && (
              <div className="absolute top-4 left-4 bg-[#D91F2C] text-white px-3 py-1 text-xs font-mono font-bold tracking-widest uppercase">
                {product.badge}
              </div>
            )}
          </div>

          {/* Right: Product Buy Box */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D91F2C]">
                {product.category} RESMI
              </span>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#0B0B0B] leading-none"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                {product.name}
              </h1>
              <p className="text-2xl sm:text-3xl font-black text-[#0B0B0B] font-mono pt-1">
                {formatRupiah(product.price)}
              </p>
            </div>

            <p className="text-sm text-[#5A5957] font-sans leading-relaxed border-t border-b border-black/10 py-4">
              {product.description}
            </p>

            {/* Size Variants */}
            {product.variants.length > 0 && (
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-[#5A5957] uppercase">Pilih Ukuran:</span>
                  <span className="text-[#0B0B0B] font-bold">
                    {selectedVariant?.size || "Standar"} ({maxStock} Tersedia)
                  </span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {product.variants.map((v) => {
                    const isSelected = selectedVariantId === v.id;
                    const isOutOfStock = v.stockQuantity <= 0;

                    return (
                      <button
                        key={v.id}
                        type="button"
                        disabled={isOutOfStock}
                        onClick={() => setSelectedVariantId(v.id)}
                        className={`px-5 py-2.5 text-xs font-display font-black uppercase tracking-wider transition-all ${
                          isSelected
                            ? "bg-[#0B0B0B] text-white"
                            : isOutOfStock
                            ? "opacity-30 border border-black/10 line-through"
                            : "border border-black/20 text-[#0B0B0B] hover:bg-black/5"
                        }`}
                        style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                      >
                        {v.size || "All Size"}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono text-[#5A5957] uppercase">Jumlah:</span>
              <div className="flex items-center border border-black/20 bg-white/60">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2.5 hover:bg-black/5 text-[#0B0B0B]"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-4 py-1 text-sm font-bold font-mono text-[#0B0B0B]">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(Math.min(maxStock, quantity + 1))}
                  className="p-2.5 hover:bg-black/5 text-[#0B0B0B]"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  disabled={maxStock <= 0}
                  onClick={handleAddToCart}
                  className="flex-1 font-display font-extrabold text-sm uppercase tracking-wider text-white bg-[#0B0B0B] hover:bg-black disabled:opacity-30 py-3.5 transition-colors"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  {maxStock > 0 ? "+ MASUKKAN KERANJANG" : "STOK HABIS"}
                </button>
                <button
                  type="button"
                  disabled={maxStock <= 0}
                  onClick={handleBuyNow}
                  className="flex-1 font-display font-extrabold text-sm uppercase tracking-wider text-white bg-[#D91F2C] hover:bg-[#B81521] disabled:opacity-30 py-3.5 transition-colors"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  BELI SEKARANG ↗
                </button>
              </div>

              {addedAlert && (
                <p className="text-xs font-mono text-emerald-800 flex items-center gap-1.5 pt-1">
                  <CheckCircle2 className="w-4 h-4" /> Berhasil ditambahkan ke keranjang belanja!
                </p>
              )}
            </div>

            {/* Logistics Info */}
            <div className="pt-6 border-t border-black/10 text-xs text-[#5A5957] space-y-1 font-mono">
              <p>• PENGAMBILAN (PICK-UP) DI GOR UNY SAAT FESTIVAL (12–14 DESEMBER 2026).</p>
              <p>• PENGIRIMAN EKSPEDISI JNE/J&T TERSEDIA UNTUK SELURUH WILAYAH INDONESIA.</p>
            </div>

          </div>

        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-16 w-full border-t border-black/10 space-y-8">
          <h3
            className="text-2xl sm:text-3xl font-black uppercase text-[#0B0B0B]"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            PRODUK TERKAIT LAINNYA
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {relatedProducts.map((rel) => (
              <Link
                key={rel.id}
                href={`/merch/${rel.slug}`}
                className="group border border-black/10 bg-white/40 p-4 block hover:bg-white/80 transition-all"
              >
                <div className="relative aspect-square w-full bg-[#141416] mb-3 overflow-hidden">
                  <Image
                    src={rel.imageUrl || "/images/v9/08_REFERENSI_FOTO_DAN_TEKSTUR.png"}
                    alt={rel.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover object-center grayscale contrast-125 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4
                  className="text-xl font-black uppercase tracking-tight text-[#0B0B0B] group-hover:text-[#D91F2C] transition-colors"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  {rel.name}
                </h4>
                <p className="text-xs font-mono font-bold text-[#0B0B0B] mt-1">
                  {formatRupiah(rel.price)}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

    </main>
  );
}
