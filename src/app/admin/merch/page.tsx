import React from "react";
import prisma from "@/lib/prisma";
import AdminMerchClient from "@/components/admin/AdminMerchClient";
import { Package, Shield } from "lucide-react";
import { requireAdminSession } from "@/lib/auth-guard";

export const metadata = {
  title: "Manajemen Merchandise & E-Commerce — JKB Admin",
  description:
    "Panel admin untuk pengelolaan pesanan merchandise resmi, status fulfillment, pelacakan pengiriman, dan kontrol inventaris stok JKB 2026.",
};

export default async function AdminMerchPage() {
  await requireAdminSession();
  const [orders, products] = await Promise.all([
    prisma.order.findMany({
      include: {
        orderItems: {
          include: {
            variant: {
              include: {
                product: {
                  select: {
                    name: true,
                    imageUrl: true,
                  },
                },
              },
            },
          },
        },
      },
      orderBy: { createdAt: "desc" },
    }),
    prisma.product.findMany({
      include: {
        variants: {
          orderBy: { size: "asc" },
        },
      },
      orderBy: { createdAt: "asc" },
    }),
  ]);

  return (
    <div className="space-y-6">
      {/* Page Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#EF3340] uppercase tracking-wider mb-1">
            <Package className="w-4 h-4" />
            <span>MODUL E-COMMERCE & MERCHANDISE</span>
          </div>
          <h1
            className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            OFFICIAL MERCH STORE & ORDERS
          </h1>
          <p className="text-xs text-[#99999F] mt-1">
            Kelola transaksi masuk, status pembayaran, pick-up di venue GOR UNY, dan stok inventaris.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-white/70 bg-white/5 border border-white/10 px-3 py-1.5 rounded-sm self-start sm:self-auto font-mono">
          <Shield className="w-3.5 h-3.5 text-emerald-400" />
          <span>Database Transaksional Terhubung</span>
        </div>
      </div>

      {/* Main Admin Client */}
      <AdminMerchClient
        initialOrders={orders}
        initialProducts={products}
      />
    </div>
  );
}
