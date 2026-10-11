"use client";

import React, { useState } from "react";
import { formatRupiah } from "@/lib/currency";
import {
  Tv,
  Radio,
  Users,
  Search,
  Filter,
  Eye,
  Edit2,
  DollarSign,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  ExternalLink,
  Save,
  X,
  Play,
  Zap,
} from "lucide-react";
import {
  togglePpvProductAction,
  updateStreamUrlAction,
  updateEntitlementStatusAction,
} from "@/app/admin/ppv/actions";

interface PPVProduct {
  id: string;
  name: string;
  slug: string;
  tier: string;
  badge: string | null;
  description: string;
  resolution: string;
  price: number;
  order: number;
  streamUrl: string | null;
  isActive: boolean;
}

interface Entitlement {
  id: string;
  accessCode: string;
  customerName: string | null;
  guestEmail: string | null;
  customerPhone: string | null;
  amountPaid: number;
  paymentMethod: string;
  status: string;
  deviceLimit: number;
  lastWatchedAt: Date | null;
  createdAt: Date;
  ppvProduct: {
    name: string;
    tier: string;
    resolution: string;
  };
}

interface Props {
  initialEntitlements: Entitlement[];
  initialProducts: PPVProduct[];
}

export default function AdminPpvClient({
  initialEntitlements,
  initialProducts,
}: Props) {
  const [activeTab, setActiveTab] = useState<"TICKETS" | "BROADCAST">("TICKETS");
  const [entitlements, setEntitlements] = useState<Entitlement[]>(initialEntitlements);
  const [products, setProducts] = useState<PPVProduct[]>(initialProducts);

  // Search & Filter
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTierFilter, setSelectedTierFilter] = useState("ALL");

  // Stream URL Edit Modal
  const [editingProduct, setEditingProduct] = useState<PPVProduct | null>(null);
  const [newStreamUrl, setNewStreamUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Stats calculation
  const totalRevenue = entitlements
    .filter((e) => e.status === "ACTIVE")
    .reduce((sum, e) => sum + e.amountPaid, 0);

  const activeTicketsCount = entitlements.filter((e) => e.status === "ACTIVE").length;

  const vipTicketsCount = entitlements.filter(
    (e) => e.ppvProduct.tier === "VIP" && e.status === "ACTIVE"
  ).length;

  // Filtered entitlements
  const filteredEntitlements = entitlements.filter((e) => {
    const matchesTier =
      selectedTierFilter === "ALL" || e.ppvProduct.tier === selectedTierFilter;

    const query = searchQuery.toLowerCase();
    const matchesSearch =
      e.accessCode.toLowerCase().includes(query) ||
      (e.customerName && e.customerName.toLowerCase().includes(query)) ||
      (e.guestEmail && e.guestEmail.toLowerCase().includes(query)) ||
      (e.customerPhone && e.customerPhone.includes(query));

    return matchesTier && matchesSearch;
  });

  const handleToggleProduct = async (product: PPVProduct) => {
    const nextState = !product.isActive;
    const res = await togglePpvProductAction(product.id, nextState);
    if (res.success) {
      setProducts((prev) =>
        prev.map((p) => (p.id === product.id ? { ...p, isActive: nextState } : p))
      );
    }
  };

  const handleOpenEditStream = (product: PPVProduct) => {
    setEditingProduct(product);
    setNewStreamUrl(product.streamUrl || "");
  };

  const handleSaveStreamUrl = async () => {
    if (!editingProduct) return;
    setIsSubmitting(true);
    const res = await updateStreamUrlAction(editingProduct.id, newStreamUrl);
    if (res.success) {
      setProducts((prev) =>
        prev.map((p) =>
          p.id === editingProduct.id ? { ...p, streamUrl: newStreamUrl } : p
        )
      );
      setEditingProduct(null);
    }
    setIsSubmitting(false);
  };

  const handleToggleEntitlement = async (entitlement: Entitlement) => {
    const nextStatus = entitlement.status === "ACTIVE" ? "REVOKED" : "ACTIVE";
    const res = await updateEntitlementStatusAction(entitlement.id, nextStatus);
    if (res.success) {
      setEntitlements((prev) =>
        prev.map((e) =>
          e.id === entitlement.id ? { ...e, status: nextStatus } : e
        )
      );
    }
  };

  return (
    <div className="space-y-8">
      {/* Top Stat Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#171719] border border-white/10 p-5 rounded-sm">
          <div className="flex items-center justify-between text-xs text-[#99999F] mb-2 font-mono uppercase">
            <span>Total Omzet Tiket PPV</span>
            <DollarSign className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-black text-amber-400 font-mono">
            {formatRupiah(totalRevenue)}
          </div>
          <p className="text-[11px] text-white/50 mt-1">
            Dari {activeTicketsCount} tiket digital aktif
          </p>
        </div>

        <div className="bg-[#171719] border border-white/10 p-5 rounded-sm">
          <div className="flex items-center justify-between text-xs text-[#99999F] mb-2 font-mono uppercase">
            <span>Tiket Digital Terjual</span>
            <Tv className="w-4 h-4 text-[#EF3340]" />
          </div>
          <div className="text-2xl font-black text-white font-mono">
            {entitlements.length} <span className="text-sm font-sans font-normal text-white/60">pass</span>
          </div>
          <p className="text-[11px] text-white/50 mt-1">
            Termasuk {vipTicketsCount} VIP Ringside Pass
          </p>
        </div>

        <div className="bg-[#171719] border border-white/10 p-5 rounded-sm">
          <div className="flex items-center justify-between text-xs text-[#99999F] mb-2 font-mono uppercase">
            <span>Peak Concurrent Viewers</span>
            <Users className="w-4 h-4 text-sky-400" />
          </div>
          <div className="text-2xl font-black text-white font-mono">
            3.842 <span className="text-sm font-sans font-normal text-white/60">online</span>
          </div>
          <p className="text-[11px] text-white/50 mt-1">
            GOR UNY Main Arena Feed
          </p>
        </div>

        <div className="bg-[#171719] border border-white/10 p-5 rounded-sm">
          <div className="flex items-center justify-between text-xs text-[#99999F] mb-2 font-mono uppercase">
            <span>Status Feed Siaran</span>
            <Radio className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-lg font-black text-emerald-400 font-mono uppercase">
            FEED LIVE (1080P)
          </div>
          <p className="text-[11px] text-white/50 mt-1">
            CDN Server Latensi: 0.8s
          </p>
        </div>
      </div>

      {/* Main Tab Navigation */}
      <div className="flex items-center gap-3 border-b border-white/10 pb-3">
        <button
          onClick={() => setActiveTab("TICKETS")}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all ${
            activeTab === "TICKETS"
              ? "bg-[#EF3340] text-white shadow-md shadow-[#EF3340]/20"
              : "bg-white/5 text-[#99999F] hover:text-white hover:bg-white/10"
          }`}
          style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
        >
          <Tv className="w-4 h-4" />
          <span>Log Tiket Digital Masuk ({entitlements.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("BROADCAST")}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all ${
            activeTab === "BROADCAST"
              ? "bg-[#EF3340] text-white shadow-md shadow-[#EF3340]/20"
              : "bg-white/5 text-[#99999F] hover:text-white hover:bg-white/10"
          }`}
          style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
        >
          <Radio className="w-4 h-4" />
          <span>Paket Siaran & URL Stream ({products.length})</span>
        </button>
      </div>

      {/* Tab 1: Entitlements Table */}
      {activeTab === "TICKETS" && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-[#171719] border border-white/10 p-4 rounded-sm">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {[
                { id: "ALL", label: "Semua Tier" },
                { id: "VIP", label: "VIP Ringside" },
                { id: "ALL_ACCESS", label: "3-Day All-Access" },
                { id: "SINGLE_DAY", label: "Single Day Pass" },
              ].map((pill) => (
                <button
                  key={pill.id}
                  onClick={() => setSelectedTierFilter(pill.id)}
                  className={`px-3 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                    selectedTierFilter === pill.id
                      ? "bg-white/20 text-white border border-white/20"
                      : "text-[#99999F] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {pill.label}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Cari Kode Tiket, Nama, WA..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#09090b] border border-white/10 rounded-sm pl-9 pr-3 py-1.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#EF3340]"
              />
            </div>
          </div>

          <div className="bg-[#171719] border border-white/10 rounded-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-[#99999F] font-sans">
                <thead className="bg-white/5 border-b border-white/10 text-white font-bold uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="py-3 px-4">Kode Tiket</th>
                    <th className="py-3 px-4">Penonton</th>
                    <th className="py-3 px-4">Paket / Tier</th>
                    <th className="py-3 px-4">Bayar</th>
                    <th className="py-3 px-4">Batas Device</th>
                    <th className="py-3 px-4">Status Akses</th>
                    <th className="py-3 px-4 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {filteredEntitlements.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="py-12 text-center text-white/40">
                        Tidak ada data tiket yang sesuai dengan pencarian.
                      </td>
                    </tr>
                  ) : (
                    filteredEntitlements.map((item) => (
                      <tr key={item.id} className="hover:bg-white/5 transition-colors">
                        <td className="py-3 px-4 font-mono font-bold text-white">
                          <span className="block text-amber-400">{item.accessCode}</span>
                          <span className="text-[10px] text-white/40">
                            {new Date(item.createdAt).toLocaleDateString("id-ID")}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="font-bold text-white block">
                            {item.customerName || "Anonim"}
                          </span>
                          <span className="text-[10px] text-white/50 block">
                            {item.customerPhone}
                          </span>
                          <span className="text-[10px] text-white/40 block truncate max-w-xs">
                            {item.guestEmail}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="font-bold text-white block">
                            {item.ppvProduct.name}
                          </span>
                          <span className="text-[10px] font-mono text-[#EF3340] uppercase">
                            {item.ppvProduct.tier} • {item.ppvProduct.resolution}
                          </span>
                        </td>
                        <td className="py-3 px-4 font-mono font-bold text-white">
                          {formatRupiah(item.amountPaid)}
                          <span className="text-[10px] text-white/40 block font-normal">
                            via {item.paymentMethod}
                          </span>
                        </td>
                        <td className="py-3 px-4 font-mono">
                          {item.deviceLimit} Perangkat
                        </td>
                        <td className="py-3 px-4">
                          <span
                            className={`px-2 py-0.5 rounded-xs font-mono font-bold text-[10px] uppercase border ${
                              item.status === "ACTIVE"
                                ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                                : "bg-red-500/10 border-red-500/30 text-red-400"
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <a
                              href={`/ppv/watch?code=${item.accessCode}`}
                              target="_blank"
                              rel="noreferrer"
                              className="p-1.5 rounded-sm bg-white/5 hover:bg-white/15 text-white transition-colors border border-white/10"
                              title="Buka Live Player sebagai tiket ini"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                            <button
                              onClick={() => handleToggleEntitlement(item)}
                              className={`px-2.5 py-1 rounded-sm text-[10px] font-bold uppercase transition-all ${
                                item.status === "ACTIVE"
                                  ? "bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20"
                                  : "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20"
                              }`}
                            >
                              {item.status === "ACTIVE" ? "Revoke" : "Aktifkan"}
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Broadcast Stream & Product Configuration */}
      {activeTab === "BROADCAST" && (
        <div className="bg-[#171719] border border-white/10 rounded-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-[#99999F] font-sans">
              <thead className="bg-white/5 border-b border-white/10 text-white font-bold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="py-3 px-4">Paket Siaran</th>
                  <th className="py-3 px-4">Tier & Badge</th>
                  <th className="py-3 px-4">Harga Tiket</th>
                  <th className="py-3 px-4">Resolusi Output</th>
                  <th className="py-3 px-4">Stream URL Source</th>
                  <th className="py-3 px-4">Status Penjualan</th>
                  <th className="py-3 px-4 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4">
                      <span className="font-bold text-white block text-sm">{product.name}</span>
                      <span className="text-[10px] text-white/40 line-clamp-1 max-w-xs">
                        {product.description}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="font-mono text-[#EF3340] font-bold block">
                        {product.tier}
                      </span>
                      {product.badge && (
                        <span className="text-[9px] bg-white/10 px-1.5 py-0.5 rounded-xs text-white/80">
                          {product.badge}
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4 font-mono font-bold text-amber-400 text-sm">
                      {formatRupiah(product.price)}
                    </td>
                    <td className="py-3 px-4 font-mono text-emerald-400 font-bold">
                      {product.resolution}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] text-white/60 truncate max-w-xs block">
                          {product.streamUrl || "Default Test Feed"}
                        </span>
                        <button
                          onClick={() => handleOpenEditStream(product)}
                          className="p-1 rounded-xs bg-white/5 hover:bg-white/15 text-white"
                          title="Ubah URL Stream Siaran"
                        >
                          <Edit2 className="w-3 h-3" />
                        </button>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-0.5 rounded-xs font-mono font-bold text-[10px] uppercase border ${
                          product.isActive
                            ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                            : "bg-white/10 border-white/20 text-white/40"
                        }`}
                      >
                        {product.isActive ? "OPEN / AKTIF" : "CLOSED"}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={() => handleToggleProduct(product)}
                        className={`px-3 py-1 text-[11px] font-bold uppercase rounded-sm border transition-all ${
                          product.isActive
                            ? "border-white/20 text-white/70 hover:bg-white/10"
                            : "border-emerald-500/40 bg-emerald-500/10 text-emerald-400"
                        }`}
                      >
                        {product.isActive ? "Tutup" : "Buka Tiket"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Edit Stream URL Modal */}
      {editingProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#171719] border border-white/15 rounded-sm max-w-md w-full p-6 text-[#F6F3EC] shadow-2xl relative space-y-4">
            <h3
              className="text-lg font-black uppercase tracking-tight text-white"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              UBAH URL FEED STREAMING
            </h3>
            <p className="text-xs text-[#99999F]">
              Paket: <strong>{editingProduct.name}</strong> ({editingProduct.resolution})
            </p>

            <div className="space-y-1.5 text-xs">
              <label className="text-white/70 block">
                Embed / HLS Stream URL Source:
              </label>
              <input
                type="text"
                placeholder="https://..."
                value={newStreamUrl}
                onChange={(e) => setNewStreamUrl(e.target.value)}
                className="w-full bg-[#09090b] border border-white/10 rounded-sm p-3 text-white font-mono text-xs focus:outline-none focus:border-[#EF3340]"
              />
              <span className="text-[10px] text-white/40 block">
                Bisa berupa YouTube Embed unlisted, HLS .m3u8 CDN stream, atau RTMP player embed.
              </span>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setEditingProduct(null)}
                className="px-4 py-2 border border-white/10 hover:bg-white/5 text-xs font-bold uppercase rounded-sm text-[#99999F] hover:text-white"
              >
                Batal
              </button>
              <button
                onClick={handleSaveStreamUrl}
                disabled={isSubmitting}
                className="px-5 py-2 bg-[#EF3340] hover:bg-[#D91F2C] text-white text-xs font-bold uppercase rounded-sm flex items-center gap-1.5"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Simpan URL Stream</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
