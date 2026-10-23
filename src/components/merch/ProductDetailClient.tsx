"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart, formatRupiah } from "@/lib/cart-context";
import { ArrowLeft, CheckCircle2, Plus, Minus, ArrowUpRight } from "lucide-react";

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
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#0B0B0B] text-[#FAFAFA] pt-24 lg:pt-28 pb-24 overflow-x-hidden font-sans">
      
      {/* Breadcrumb Navigation */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-4 w-full flex items-center gap-2 text-xs font-technical uppercase tracking-widest text-white/40 border-b border-white/10">
        <Link href="/merch" className="hover:text-white transition-colors flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>KATALOG MERCHANDISE</span>
        </Link>
        <span>/</span>
        <span className="text-[#D91F2C] font-bold">{product.name}</span>
      </div>

      {/* Main Product Section */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-12 lg:py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left: Product Lookbook Image */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/5] w-full bg-[#141416] border border-white/10 overflow-hidden">
              <Image
                src={product.imageUrl || "/images/v9/08_REFERENSI_FOTO_DAN_TEKSTUR.png"}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center grayscale contrast-110 hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              
              {product.badge && (
                <span className="absolute top-4 left-4 bg-[#D91F2C] text-white font-technical text-xs uppercase font-bold tracking-widest px-3 py-1 border border-[#D91F2C]/40">
                  {product.badge}
                </span>
              )}

              <span className={`absolute bottom-4 right-4 font-technical text-xs uppercase font-bold px-3 py-1 backdrop-blur-sm border ${
                maxStock > 0 
                  ? "bg-black/80 text-emerald-400 border-emerald-500/30" 
                  : "bg-black/80 text-red-400 border-red-500/30"
              }`}>
                {maxStock > 0 ? "STOK TERSEDIA" : "HABIS TERJUAL"}
              </span>
            </div>
          </div>

          {/* Right: Buy Box & Options */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2 border-b border-white/10 pb-6">
              <span className="font-technical text-xs font-bold uppercase tracking-widest text-[#D91F2C]">
                {product.category} {product.material ? `• ${product.material}` : ""}
              </span>
              <h1 className="font-display text-4xl sm:text-5xl uppercase tracking-tight text-white leading-tight">
                {product.name}
              </h1>
              <p className="font-technical text-3xl font-black text-white pt-2">
                {formatRupiah(product.price)}
              </p>
            </div>

            {/* Description */}
            <p className="text-sm text-white/70 leading-relaxed font-sans">
              {product.description}
            </p>

            {/* Size Selector */}
            {product.variants.length > 0 && (
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between text-xs font-technical">
                  <span className="text-white/40 uppercase">PILIH UKURAN:</span>
                  <span className="text-white font-bold">
                    {selectedVariant?.size || "STANDAR"} (STOK: {maxStock})
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((v) => {
                    const isSelected = v.id === selectedVariantId;
                    const isOutOfStock = v.stockQuantity <= 0;

                    return (
                      <button
                        key={v.id}
                        type="button"
                        disabled={isOutOfStock}
                        onClick={() => setSelectedVariantId(v.id)}
                        className={`min-w-14 px-4 py-2.5 text-xs font-technical tracking-wider uppercase transition-all border ${
                          isSelected
                            ? "bg-[#D91F2C] text-white border-[#D91F2C] font-bold shadow-md shadow-red-950/40"
                            : isOutOfStock
                            ? "bg-white/5 text-white/20 border-white/5 cursor-not-allowed line-through"
                            : "bg-[#141416] text-white/80 border-white/15 hover:border-white hover:text-white"
                        }`}
                      >
                        {v.size || "ONE SIZE"}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="space-y-2 pt-2">
              <span className="font-technical text-xs text-white/40 uppercase block">JUMLAH PESANAN:</span>
              <div className="flex items-center border border-white/15 bg-[#141416] w-36">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Kurangi jumlah"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="flex-1 text-center font-technical text-sm font-bold text-white">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(Math.min(maxStock, quantity + 1))}
                  disabled={quantity >= maxStock}
                  className="px-3 py-2 text-white/70 hover:text-white hover:bg-white/10 disabled:opacity-20 transition-colors"
                  aria-label="Tambah jumlah"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 space-y-3">
              <button
                type="button"
                onClick={handleAddToCart}
                disabled={maxStock <= 0}
                className="w-full py-4 bg-[#D91F2C] hover:bg-[#B81521] text-white font-display text-base uppercase tracking-wider transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-md shadow-red-950/40 font-bold"
              >
                {maxStock <= 0 ? "STOK HABIS" : "TAMBAH KE KERANJANG ↗"}
              </button>
              <button
                type="button"
                onClick={handleBuyNow}
                disabled={maxStock <= 0}
                className="w-full py-3.5 bg-[#141416] hover:bg-white hover:text-black border border-white/20 text-white font-display text-base uppercase tracking-wider transition-all disabled:opacity-40 disabled:cursor-not-allowed font-bold"
              >
                BELI SEKARANG (CHECKOUT)
              </button>
            </div>

            {/* Feedback Alert */}
            {addedAlert && (
              <div className="p-4 bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-technical flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Item berhasil dimasukkan ke keranjang belanja!</span>
                </div>
                <Link href="/checkout" className="underline font-bold font-display uppercase tracking-wider text-white">
                  CHECKOUT ↗
                </Link>
              </div>
            )}

            {/* Logistics & Delivery note */}
            <div className="pt-6 border-t border-white/10 space-y-2 text-xs font-technical text-white/50">
              <p>• Opsi Ambil di Tempat (Pick-up Lobi Barat GOR UNY Yogyakarta saat hari festival 12–14 Des 2026).</p>
              <p>• Opsi Pengiriman Ekspedisi (JNE / J&T) dengan nomor resi resmi ke seluruh Indonesia.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-16 w-full border-t border-white/10">
          <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-white mb-8">
            KOLEKSI TERKAIT LAINNYA
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <Link
                key={rel.id}
                href={`/merch/${rel.slug}`}
                className="group block bg-[#141416] border border-white/10 p-4 hover:border-[#D91F2C] transition-all"
              >
                <div className="relative aspect-[4/5] w-full bg-[#1c1c1f] overflow-hidden mb-3">
                  <Image
                    src={rel.imageUrl || "/images/v9/08_REFERENSI_FOTO_DAN_TEKSTUR.png"}
                    alt={rel.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover object-center grayscale contrast-110 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <h4 className="font-display text-lg uppercase tracking-wider text-white group-hover:text-[#D91F2C] transition-colors line-clamp-1">
                  {rel.name}
                </h4>
                <p className="font-technical text-sm font-bold text-white mt-1">
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
