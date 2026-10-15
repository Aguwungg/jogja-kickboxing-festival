import React from "react";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import ProductDetailClient from "@/components/merch/ProductDetailClient";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

const FALLBACK_PRODUCTS: Record<string, any> = {
  "jkb-tee-black": {
    id: "cmv3ni1ht0008sy6waccfdtor",
    name: "JKB 2026 Official Fighter Tee — Black Onyx",
    slug: "jkb-tee-black",
    description: "Kaos resmi edisi kejuaraan JKBF 2026. Bahan cotton combed 24s premium dengan sablon plastisol tahan lama bertema Di Balik Kalem.",
    price: 199000,
    category: "APPAREL",
    badge: "FESTIVAL EXCLUSIVE",
    imageUrl: "/images/jkb/merch-tee-black.jpg",
    isActive: true,
    variants: [
      { id: "v1", size: "S", stock: 20 },
      { id: "v2", size: "M", stock: 45 },
      { id: "v3", size: "L", stock: 60 },
      { id: "v4", size: "XL", stock: 30 },
      { id: "v5", size: "XXL", stock: 15 },
    ],
  },
  "jkb-handwrap-red": {
    id: "cmv3ni1hv0009sy6wc9ji7xsu",
    name: "JKB Official Combat Handwrap 4.5M — Crimson Red",
    slug: "jkb-handwrap-red",
    description: "Handwrap semi-elastis panjang 4.5 meter standar turnamen K-1. Melindungi pergelangan tangan dan buku jari dengan sirkulasi udara maksimal.",
    price: 89000,
    category: "EQUIPMENT",
    badge: "TOURNAMENT GRADE",
    imageUrl: "/images/jkb/merch-handwrap-red.jpg",
    isActive: true,
    variants: [{ id: "v6", size: "4.5M", stock: 100 }],
  },
  "jkb-hoodie-charcoal": {
    id: "cmv3ni1hx000asy6w4pxak5wb",
    name: "JKB Stadium Heavy Pullover Hoodie — Charcoal Grey",
    slug: "jkb-hoodie-charcoal",
    description: "Heavyweight fleece hoodie 330gsm dengan fit boxy streetwear. Dilengkapi bordir logo kejuaraan di dada dan detail sabuk emas di lengan.",
    price: 349000,
    category: "APPAREL",
    badge: "BEST SELLER",
    imageUrl: "/images/jkb/merch-hoodie-charcoal.jpg",
    isActive: true,
    variants: [
      { id: "v7", size: "M", stock: 25 },
      { id: "v8", size: "L", stock: 40 },
      { id: "v9", size: "XL", stock: 20 },
    ],
  },
  "jkb-sparring-gloves": {
    id: "cmv3vsisv000djbo81c4serc9",
    name: "JKB Pro Leather Sparring Gloves — Crimson Gold",
    slug: "jkb-sparring-gloves",
    description: "Sarung tinju sparring kulit asli dengan multi-layer padding untuk peredaman benturan optimal. Desain eksklusif merah marun dan emas.",
    price: 489000,
    category: "EQUIPMENT",
    badge: "OFFICIAL FIGHT GEAR",
    imageUrl: "/images/jkb/gloves-closeup.jpg",
    isActive: true,
    variants: [
      { id: "v10", size: "12oz", stock: 15 },
      { id: "v11", size: "14oz", stock: 25 },
      { id: "v12", size: "16oz", stock: 10 },
    ],
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  let product = null;

  try {
    product = await prisma.product.findUnique({ where: { slug } });
  } catch (e) {
    // fallback
  }

  if (!product) {
    product = FALLBACK_PRODUCTS[slug];
  }

  if (!product) {
    return { title: "Produk Tidak Ditemukan — JKB 2026" };
  }

  return {
    title: `${product.name} — Official Merch JKB 2026`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;

  let product: any = null;
  let relatedProducts: any[] = [];

  try {
    product = await prisma.product.findUnique({
      where: { slug },
      include: {
        variants: {
          orderBy: { size: "asc" },
        },
      },
    });

    if (product) {
      relatedProducts = await prisma.product.findMany({
        where: {
          slug: { not: slug },
          isActive: true,
        },
        take: 3,
        include: {
          variants: true,
        },
        orderBy: { createdAt: "desc" },
      });
    }
  } catch (e) {
    console.warn("Using fallback merch product on Vercel:", e);
  }

  if (!product) {
    product = FALLBACK_PRODUCTS[slug];
    relatedProducts = Object.values(FALLBACK_PRODUCTS).filter((p) => p.slug !== slug).slice(0, 3);
  }

  if (!product || !product.isActive) {
    notFound();
  }

  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#0A0A0A] text-[#FAFAFA] pt-24 lg:pt-32 pb-28">
      <ProductDetailClient product={product} relatedProducts={relatedProducts} />
    </main>
  );
}
