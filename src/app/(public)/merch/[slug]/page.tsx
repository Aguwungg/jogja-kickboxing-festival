import React from "react";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import ProductDetailClient from "@/components/merch/ProductDetailClient";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await prisma.product.findUnique({
    where: { slug },
  });

  if (!product) {
    return {
      title: "Produk Tidak Ditemukan — JKB 2026",
    };
  }

  return {
    title: `${product.name} — Official Merch JKB 2026`,
    description: product.description,
    openGraph: {
      title: `${product.name} | JKB 2026 Official Merch`,
      description: product.description,
      images: product.imageUrl ? [product.imageUrl] : [],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;

  const product = await prisma.product.findUnique({
    where: { slug },
    include: {
      variants: {
        orderBy: { size: "asc" },
      },
    },
  });

  if (!product || !product.isActive) {
    notFound();
  }

  const relatedProducts = await prisma.product.findMany({
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

  return (
    <div className="flex-1 flex flex-col w-full min-h-screen text-[#F6F3EC] bg-[#09090b] pt-28 pb-20">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1">
        <ProductDetailClient
          product={product}
          relatedProducts={relatedProducts}
        />
      </main>
    </div>
  );
}
