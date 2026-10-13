"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart, formatRupiah } from "@/lib/cart-context";
import {
  ShoppingBag,
  ArrowLeft,
  Truck,
  MapPin,
  ShieldCheck,
  Plus,
  Minus,
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
    <main className="flex-1 flex flex-col w-full min-h-screen text-[#F4F0E8] bg-[#0B0B0B] pt-24 pb-20 overflow-x-hidden font-sans">
      
      {/* Breadcrumb Navigation */}
      <div className="w-full py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#8F8E8B] border-b border-white/5">
        <Link href="/" className="hover:text-white transition-colors">BERANDA</Link>
        <span>/</span>
        <Link href="/merch" className="hover:text-white transition-colors">OFFICIAL MERCH</Link>
        <span>/</span>
        <span className="text-[#D91F2C] font-bold">{product.name}</span>
      </div>

      {/* Main Product Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Product Photography */}
          <div className="lg:col-span-6 relative aspect-square sm:aspect-[4/5] bg-[#141416] border border-white/10 overflow-hidden">
            {product.imageUrl ? (
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-white/5 font-display text-9xl font-black">
                JKBF
              </div>
            )}

            {product.badge && (
              <div className="absolute top-4 left-4 bg-[#D91F2C] text-white px-3 py-1 text-xs font-mono uppercase tracking-widest font-bold">
                {product.badge}
              </div>
            )}
          </div>

          {/* Right Column: Buying Hub */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-2 border-b border-white/10 pb-6">
              <span className="text-xs text-[#D91F2C] font-mono uppercase tracking-widest block">
                {product.category} • JKBF 2026 OFFICIAL
              </span>
              <h1
                className="v9-display-title text-4xl sm:text-5xl text-[#F4F0E8] leading-tight"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                {product.name}
              </h1>
              <p className="text-2xl font-mono font-bold text-[#F4F0E8] pt-2">
                {formatRupiah(product.price)}
              </p>
            </div>

            {/* Description */}
            <div className="space-y-2 text-xs text-[#8F8E8B] leading-relaxed">
              <p>{product.description}</p>
              {product.material && (
                <p className="font-mono text-[#F4F0E8] pt-1">
                  MATERIAL: <span className="text-[#8F8E8B]">{product.material}</span>
                </p>
              )}
            </div>

            {/* Size Variants */}
            {product.variants.length > 0 && (
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-[#8F8E8B]">PILIH UKURAN:</span>
                  <span className="text-[#F4F0E8]">
                    STOK TERSEDIA: {maxStock > 0 ? `${maxStock} PCS` : "HABIS"}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((v) => {
                    const isSelected = v.id === selectedVariantId;
                    const isOut = v.stockQuantity <= 0;

                    return (
                      <button
                        key={v.id}
                        type="button"
                        disabled={isOut}
                        onClick={() => setSelectedVariantId(v.id)}
                        className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-colors ${
                          isSelected
                            ? "bg-[#D91F2C] text-white font-bold"
                            : isOut
                            ? "bg-[#141416] text-[#5A5957] border border-white/5 line-through cursor-not-allowed"
                            : "bg-[#141416] text-[#F4F0E8] border border-white/10 hover:border-white/30"
                        }`}
                      >
                        {v.size || "ALL SIZE"}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono text-[#8F8E8B] block">JUMLAH PEMESANAN:</span>
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-white/10 bg-[#141416]">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                    className="p-2.5 text-[#8F8E8B] hover:text-[#F4F0E8] disabled:opacity-30"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-4 text-xs font-mono font-bold text-[#F4F0E8]">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.min(maxStock, quantity + 1))}
                    disabled={quantity >= maxStock}
                    className="p-2.5 text-[#8F8E8B] hover:text-[#F4F0E8] disabled:opacity-30"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleAddToCart}
                disabled={maxStock <= 0}
                className="v9-btn-ghost text-xs font-display font-black tracking-wider py-3.5 flex-1"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>TAMBAH KE KERANJANG</span>
              </button>
              <button
                type="button"
                onClick={handleBuyNow}
                disabled={maxStock <= 0}
                className="v9-btn-red text-xs font-display font-black tracking-wider py-3.5 flex-1"
              >
                <span>BELI SEKARANG (CHECKOUT) ↗</span>
              </button>
            </div>

            {addedAlert && (
              <div className="p-3 bg-green-950/40 border border-green-500/30 text-green-300 text-xs font-mono text-center">
                PRODUK BERHASIL DITAMBAHKAN KE KERANJANG!
              </div>
            )}

            {/* Practical Shipping Policy */}
            <div className="border-t border-white/10 pt-6 space-y-2 text-xs font-mono text-[#8F8E8B]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D91F2C]" />
                <span>GRATIS ON-SITE PICKUP DI GOR UNY SAAT FESTIVAL</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#D91F2C]" />
                <span>PENGIRIMAN EKSPEDISI TERSEDIA (JNE/J&T/SICEPAT)</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/10 w-full">
          <div className="flex justify-between items-baseline mb-8">
            <h2 className="v9-display-title text-2xl sm:text-3xl text-[#F4F0E8]" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
              KOLEKSI APPAREL LAINNYA
            </h2>
            <Link href="/merch" className="text-xs font-mono text-[#D91F2C] hover:underline uppercase">
              SEMUA PRODUK ↗
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <Link
                key={rel.id}
                href={`/merch/${rel.slug}`}
                className="group bg-[#141416] border border-white/10 hover:border-[#D91F2C] p-4 flex gap-4 transition-colors"
              >
                <div className="w-20 h-20 bg-[#0B0B0B] relative overflow-hidden flex-shrink-0">
                  {rel.imageUrl ? (
                    <Image src={rel.imageUrl} alt={rel.name} fill className="object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-xs font-mono text-white/10">JKBF</div>
                  )}
                </div>
                <div className="space-y-1">
                  <h3 className="font-display font-black text-lg text-[#F4F0E8] group-hover:text-white" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
                    {rel.name}
                  </h3>
                  <span className="text-xs font-mono font-bold text-[#D91F2C] block">
                    {formatRupiah(rel.price)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

    </main>
  );
}
