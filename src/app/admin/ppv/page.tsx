import React from "react";
import prisma from "@/lib/prisma";
import AdminPpvClient from "@/components/admin/AdminPpvClient";
import { Radio, Shield } from "lucide-react";
import { requireAdminSession } from "@/lib/auth-guard";

export const metadata = {
  title: "Manajemen PPV & Broadcast Streaming — JKB Admin",
  description:
    "Panel admin untuk monitoring siaran langsung Pay-Per-View, log tiket digital penonton, dan kontrol stream feed URL JKB 2026.",
};

export default async function AdminPpvPage() {
  await requireAdminSession();
  const [entitlements, products] = await Promise.all([
    prisma.entitlement.findMany({
      include: {
        ppvProduct: {
          select: {
            name: true,
            tier: true,
            resolution: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    }),
    prisma.pPVProduct.findMany({
      orderBy: { order: "asc" },
    }),
  ]);

  return (
    <div className="space-y-6">
      {/* Title Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#EF3340] uppercase tracking-wider mb-1">
            <Radio className="w-4 h-4 animate-pulse" />
            <span>MODUL BROADCAST & COMMERCIAL STREAMING</span>
          </div>
          <h1
            className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            PAY-PER-VIEW PLATFORM & STREAMING CONTROL
          </h1>
          <p className="text-xs text-[#99999F] mt-1">
            Pantau omzet tiket streaming digital, kelola kode akses penonton, dan atur URL feed kamera ring.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-white/70 bg-white/5 border border-white/10 px-3 py-1.5 rounded-sm self-start sm:self-auto font-mono">
          <Shield className="w-3.5 h-3.5 text-emerald-400" />
          <span>CDN Broadcast Live System</span>
        </div>
      </div>

      {/* Client Component */}
      <AdminPpvClient
        initialEntitlements={entitlements}
        initialProducts={products}
      />
    </div>
  );
}
