"use client";

import React, { useState } from "react";
import Image from "next/image";
import { formatRupiah } from "@/lib/cart-context";
import {
  Package,
  ShoppingBag,
  Truck,
  MapPin,
  CheckCircle2,
  Clock,
  Search,
  Filter,
  Eye,
  Edit2,
  DollarSign,
  AlertCircle,
  QrCode,
  X,
  Save,
} from "lucide-react";
import {
  updateVariantStockAction,
  toggleProductActiveAction,
  updateOrderStatusAction,
} from "@/app/admin/merch/actions";

interface OrderItem {
  id: string;
  quantity: number;
  price: number;
  variant: {
    id: string;
    size: string | null;
    product: {
      name: string;
      imageUrl: string | null;
    };
  };
}

interface Order {
  id: string;
  orderNumber: string;
  customerName: string | null;
  customerPhone: string | null;
  guestEmail: string | null;
  deliveryMethod: string;
  shippingAddress: string | null;
  shippingCity: string | null;
  shippingPostalCode: string | null;
  courier: string | null;
  shippingCost: number;
  totalAmount: number;
  status: string;
  paymentStatus: string;
  fulfillmentStatus: string;
  trackingNumber: string | null;
  claimBarcode: string | null;
  notes: string | null;
  createdAt: Date;
  orderItems: OrderItem[];
}

interface Variant {
  id: string;
  size: string | null;
  stockQuantity: number;
}

interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  category: string;
  badge: string | null;
  isActive: boolean;
  imageUrl: string | null;
  variants: Variant[];
}

interface Props {
  initialOrders: Order[];
  initialProducts: Product[];
}

export default function AdminMerchClient({ initialOrders, initialProducts }: Props) {
  const [activeTab, setActiveTab] = useState<"ORDERS" | "PRODUCTS">("ORDERS");
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [products, setProducts] = useState<Product[]>(initialProducts);

  // Orders filters
  const [orderFilter, setOrderFilter] = useState<string>("ALL");
  const [orderSearch, setOrderSearch] = useState<string>("");

  // Modals state
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [editingVariant, setEditingVariant] = useState<{
    variantId: string;
    productName: string;
    size: string | null;
    currentStock: number;
  } | null>(null);
  const [newStockValue, setNewStockValue] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Order modal edit fields
  const [modalPaymentStatus, setModalPaymentStatus] = useState<string>("");
  const [modalFulfillmentStatus, setModalFulfillmentStatus] = useState<string>("");
  const [modalTrackingNumber, setModalTrackingNumber] = useState<string>("");

  // Statistics
  const totalRevenue = orders
    .filter((o) => o.paymentStatus === "PAID")
    .reduce((sum, o) => sum + o.totalAmount, 0);

  const readyPickupCount = orders.filter(
    (o) => o.deliveryMethod === "PICKUP_VENUE" && o.fulfillmentStatus === "READY_FOR_PICKUP"
  ).length;

  const expeditionCount = orders.filter(
    (o) => o.deliveryMethod === "EXPEDITION"
  ).length;

  const totalItemsSold = orders
    .filter((o) => o.paymentStatus === "PAID")
    .reduce(
      (sum, o) => sum + o.orderItems.reduce((iSum, i) => iSum + i.quantity, 0),
      0
    );

  // Filtered orders
  const filteredOrders = orders.filter((o) => {
    const matchesFilter =
      orderFilter === "ALL" ||
      (orderFilter === "PAID" && o.paymentStatus === "PAID") ||
      (orderFilter === "UNPAID" && o.paymentStatus === "UNPAID") ||
      (orderFilter === "PICKUP" && o.deliveryMethod === "PICKUP_VENUE") ||
      (orderFilter === "EXPEDITION" && o.deliveryMethod === "EXPEDITION");

    const query = orderSearch.toLowerCase();
    const matchesSearch =
      o.orderNumber.toLowerCase().includes(query) ||
      (o.customerName && o.customerName.toLowerCase().includes(query)) ||
      (o.guestEmail && o.guestEmail.toLowerCase().includes(query)) ||
      (o.customerPhone && o.customerPhone.includes(query));

    return matchesFilter && matchesSearch;
  });

  const handleOpenOrderModal = (order: Order) => {
    setSelectedOrder(order);
    setModalPaymentStatus(order.paymentStatus);
    setModalFulfillmentStatus(order.fulfillmentStatus);
    setModalTrackingNumber(order.trackingNumber || "");
  };

  const handleSaveOrderStatus = async () => {
    if (!selectedOrder) return;
    setIsSubmitting(true);
    const res = await updateOrderStatusAction(
      selectedOrder.id,
      modalPaymentStatus,
      modalFulfillmentStatus,
      modalTrackingNumber
    );
    if (res.success) {
      setOrders((prev) =>
        prev.map((o) =>
          o.id === selectedOrder.id
            ? {
                ...o,
                paymentStatus: modalPaymentStatus,
                fulfillmentStatus: modalFulfillmentStatus,
                trackingNumber: modalTrackingNumber || null,
              }
            : o
        )
      );
      setSelectedOrder(null);
    }
    setIsSubmitting(false);
  };

  const handleToggleProduct = async (product: Product) => {
    const nextState = !product.isActive;
    const res = await toggleProductActiveAction(product.id, nextState);
    if (res.success) {
      setProducts((prev) =>
        prev.map((p) => (p.id === product.id ? { ...p, isActive: nextState } : p))
      );
    }
  };

  const handleOpenStockEdit = (variant: Variant, productName: string) => {
    setEditingVariant({
      variantId: variant.id,
      productName,
      size: variant.size,
      currentStock: variant.stockQuantity,
    });
    setNewStockValue(variant.stockQuantity);
  };

  const handleSaveStock = async () => {
    if (!editingVariant) return;
    setIsSubmitting(true);
    const res = await updateVariantStockAction(editingVariant.variantId, newStockValue);
    if (res.success) {
      setProducts((prev) =>
        prev.map((p) => ({
          ...p,
          variants: p.variants.map((v) =>
            v.id === editingVariant.variantId
              ? { ...v, stockQuantity: newStockValue }
              : v
          ),
        }))
      );
      setEditingVariant(null);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="space-y-8">
      {/* Top Stat Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#171719] border border-white/10 p-5 rounded-sm">
          <div className="flex items-center justify-between text-xs text-[#99999F] mb-2 font-mono uppercase">
            <span>Total Omzet Penjualan</span>
            <DollarSign className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-black text-amber-400 font-mono">
            {formatRupiah(totalRevenue)}
          </div>
          <p className="text-[11px] text-white/50 mt-1">
            Dari {orders.filter((o) => o.paymentStatus === "PAID").length} transaksi lunas
          </p>
        </div>

        <div className="bg-[#171719] border border-white/10 p-5 rounded-sm">
          <div className="flex items-center justify-between text-xs text-[#99999F] mb-2 font-mono uppercase">
            <span>Total Unit Terjual</span>
            <ShoppingBag className="w-4 h-4 text-[#EF3340]" />
          </div>
          <div className="text-2xl font-black text-white font-mono">
            {totalItemsSold} <span className="text-sm font-sans font-normal text-white/60">pcs</span>
          </div>
          <p className="text-[11px] text-white/50 mt-1">
            Produk resmi JKB 2026
          </p>
        </div>

        <div className="bg-[#171719] border border-white/10 p-5 rounded-sm">
          <div className="flex items-center justify-between text-xs text-[#99999F] mb-2 font-mono uppercase">
            <span>Siap Pick-Up di GOR</span>
            <MapPin className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl font-black text-white font-mono">
            {readyPickupCount} <span className="text-sm font-sans font-normal text-white/60">pesanan</span>
          </div>
          <p className="text-[11px] text-white/50 mt-1">
            Booth Lantai 1 Hall Barat
          </p>
        </div>

        <div className="bg-[#171719] border border-white/10 p-5 rounded-sm">
          <div className="flex items-center justify-between text-xs text-[#99999F] mb-2 font-mono uppercase">
            <span>Pengiriman Ekspedisi</span>
            <Truck className="w-4 h-4 text-sky-400" />
          </div>
          <div className="text-2xl font-black text-white font-mono">
            {expeditionCount} <span className="text-sm font-sans font-normal text-white/60">paket</span>
          </div>
          <p className="text-[11px] text-white/50 mt-1">
            JNE & J&T Express
          </p>
        </div>
      </div>

      {/* Main Tab Navigation */}
      <div className="flex items-center gap-3 border-b border-white/10 pb-3">
        <button
          onClick={() => setActiveTab("ORDERS")}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all ${
            activeTab === "ORDERS"
              ? "bg-[#EF3340] text-white shadow-md shadow-[#EF3340]/20"
              : "bg-white/5 text-[#99999F] hover:text-white hover:bg-white/10"
          }`}
          style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Daftar Pesanan Masuk ({orders.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("PRODUCTS")}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all ${
            activeTab === "PRODUCTS"
              ? "bg-[#EF3340] text-white shadow-md shadow-[#EF3340]/20"
              : "bg-white/5 text-[#99999F] hover:text-white hover:bg-white/10"
          }`}
          style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
        >
          <Package className="w-4 h-4" />
          <span>Katalog Produk & Inventaris ({products.length})</span>
        </button>
      </div>

      {/* Tab 1: Orders Fulfillment */}
      {activeTab === "ORDERS" && (
        <div className="space-y-4">
          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-[#171719] border border-white/10 p-4 rounded-sm">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {[
                { id: "ALL", label: "Semua Pesanan" },
                { id: "PAID", label: "Lunas (PAID)" },
                { id: "UNPAID", label: "Belum Bayar" },
                { id: "PICKUP", label: "Pick-Up Venue" },
                { id: "EXPEDITION", label: "Ekspedisi" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setOrderFilter(tab.id)}
                  className={`px-3 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                    orderFilter === tab.id
                      ? "bg-white/20 text-white border border-white/20"
                      : "text-[#99999F] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Cari No. Order, Nama, WA..."
                value={orderSearch}
                onChange={(e) => setOrderSearch(e.target.value)}
                className="w-full bg-[#09090b] border border-white/10 rounded-sm pl-9 pr-3 py-1.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#EF3340]"
              />
            </div>
          </div>

          {/* Orders Table */}
          <div className="bg-[#171719] border border-white/10 rounded-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-[#99999F] font-sans">
                <thead className="bg-white/5 border-b border-white/10 text-white font-bold uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="py-3 px-4">No. Order & Tanggal</th>
                    <th className="py-3 px-4">Pelanggan</th>
                    <th className="py-3 px-4">Metode Pengiriman</th>
                    <th className="py-3 px-4">Total</th>
                    <th className="py-3 px-4">Status Bayar</th>
                    <th className="py-3 px-4">Fulfillment</th>
                    <th className="py-3 px-4 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {filteredOrders.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="py-12 text-center text-white/40">
                        Tidak ada pesanan yang sesuai dengan filter.
                      </td>
                    </tr>
                  ) : (
                    filteredOrders.map((order) => (
                      <tr key={order.id} className="hover:bg-white/5 transition-colors">
                        <td className="py-3 px-4">
                          <span className="font-mono font-bold text-white block">
                            {order.orderNumber}
                          </span>
                          <span className="text-[10px] text-white/40">
                            {new Date(order.createdAt).toLocaleDateString("id-ID", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="font-bold text-white block">
                            {order.customerName || "Anonim"}
                          </span>
                          <span className="text-[10px] text-white/50 block">
                            {order.customerPhone}
                          </span>
                          <span className="text-[10px] text-white/40 block truncate max-w-xs">
                            {order.guestEmail}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          {order.deliveryMethod === "PICKUP_VENUE" ? (
                            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded-xs">
                              <MapPin className="w-3 h-3" />
                              <span>Pick-Up Venue</span>
                            </span>
                          ) : (
                            <div>
                              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-sky-400 bg-sky-400/10 border border-sky-400/20 px-2 py-0.5 rounded-xs">
                                <Truck className="w-3 h-3" />
                                <span>{order.courier || "Ekspedisi"}</span>
                              </span>
                              {order.trackingNumber && (
                                <span className="text-[10px] font-mono text-white/50 block mt-0.5">
                                  Resi: {order.trackingNumber}
                                </span>
                              )}
                            </div>
                          )}
                        </td>
                        <td className="py-3 px-4 font-mono font-bold text-white">
                          {formatRupiah(order.totalAmount)}
                        </td>
                        <td className="py-3 px-4">
                          <span
                            className={`px-2 py-0.5 rounded-xs font-mono font-bold text-[10px] uppercase border ${
                              order.paymentStatus === "PAID"
                                ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                                : "bg-amber-500/10 border-amber-500/30 text-amber-400"
                            }`}
                          >
                            {order.paymentStatus}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span
                            className={`px-2 py-0.5 rounded-xs font-mono font-bold text-[10px] uppercase border ${
                              order.fulfillmentStatus === "SHIPPED" ||
                              order.fulfillmentStatus === "DELIVERED" ||
                              order.fulfillmentStatus === "READY_FOR_PICKUP"
                                ? "bg-blue-500/10 border-blue-500/30 text-blue-400"
                                : "bg-white/10 border-white/20 text-white/70"
                            }`}
                          >
                            {order.fulfillmentStatus}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <button
                            onClick={() => handleOpenOrderModal(order)}
                            className="p-1.5 rounded-sm bg-white/5 hover:bg-white/15 text-white transition-colors border border-white/10"
                            title="Kelola & Rincian Pesanan"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </button>
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

      {/* Tab 2: Products & Inventory */}
      {activeTab === "PRODUCTS" && (
        <div className="bg-[#171719] border border-white/10 rounded-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-[#99999F] font-sans">
              <thead className="bg-white/5 border-b border-white/10 text-white font-bold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="py-3 px-4">Produk</th>
                  <th className="py-3 px-4">Kategori & Badge</th>
                  <th className="py-3 px-4">Harga Resmi</th>
                  <th className="py-3 px-4">Varian & Stok Tersedia</th>
                  <th className="py-3 px-4">Status Display</th>
                  <th className="py-3 px-4 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {products.map((product) => {
                  const totalStock = product.variants.reduce((s, v) => s + v.stockQuantity, 0);
                  return (
                    <tr key={product.id} className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-4 flex items-center gap-3">
                        <div className="relative w-12 h-12 bg-black rounded-xs overflow-hidden shrink-0 border border-white/10">
                          <Image
                            src={product.imageUrl || "/images/jkb/merch-tee-black.jpg"}
                            alt={product.name}
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        </div>
                        <div>
                          <span className="font-bold text-white block">{product.name}</span>
                          <span className="text-[10px] text-white/40 font-mono">
                            /{product.slug}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-[10px] font-bold uppercase text-[#EF3340] block">
                          {product.category}
                        </span>
                        {product.badge && (
                          <span className="text-[9px] bg-white/10 px-1.5 py-0.5 rounded-xs text-white/80">
                            {product.badge}
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4 font-mono font-bold text-amber-400">
                        {formatRupiah(product.price)}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex flex-wrap gap-1.5 items-center">
                          {product.variants.map((v) => (
                            <button
                              key={v.id}
                              onClick={() => handleOpenStockEdit(v, product.name)}
                              className="px-2 py-1 rounded-xs bg-black/60 border border-white/10 hover:border-[#EF3340] text-[11px] font-mono text-white flex items-center gap-1.5 transition-colors"
                              title="Klik untuk ubah stok varian"
                            >
                              <span>{v.size || "Std"}:</span>
                              <strong className={v.stockQuantity < 10 ? "text-amber-400" : "text-emerald-400"}>
                                {v.stockQuantity}
                              </strong>
                              <Edit2 className="w-2.5 h-2.5 text-white/40" />
                            </button>
                          ))}
                        </div>
                        <span className="text-[10px] text-white/40 block mt-1">
                          Total Stok: {totalStock} unit
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-2 py-0.5 rounded-xs font-mono font-bold text-[10px] uppercase border ${
                            product.isActive
                              ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                              : "bg-white/10 border-white/20 text-white/40"
                          }`}
                        >
                          {product.isActive ? "PUBLISHED" : "HIDDEN"}
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
                          {product.isActive ? "Sembunyikan" : "Tampilkan"}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Order Detail & Update Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#171719] border border-white/15 rounded-sm max-w-2xl w-full p-6 text-[#F6F3EC] shadow-2xl relative max-h-[90vh] overflow-y-auto space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div>
                <span className="text-[10px] text-[#99999F] uppercase font-mono block">
                  DETAIL & FULFILLMENT PESANAN
                </span>
                <h3
                  className="text-xl font-black uppercase text-white"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  {selectedOrder.orderNumber}
                </h3>
              </div>
              <button
                onClick={() => setSelectedOrder(null)}
                className="w-8 h-8 rounded-sm border border-white/10 flex items-center justify-center text-white/50 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Customer & Delivery Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs bg-[#09090b] p-4 rounded-sm border border-white/5">
              <div>
                <strong className="text-white block mb-1">Informasi Pemesan:</strong>
                <p className="text-[#99999F]">
                  Nama: <span className="text-white">{selectedOrder.customerName}</span><br />
                  Email: <span className="text-white">{selectedOrder.guestEmail}</span><br />
                  WhatsApp: <span className="text-white">{selectedOrder.customerPhone}</span>
                </p>
                {selectedOrder.notes && (
                  <p className="mt-2 text-amber-400 text-[11px] italic">
                    Catatan: "{selectedOrder.notes}"
                  </p>
                )}
              </div>

              <div>
                <strong className="text-white block mb-1">Metode Pengiriman:</strong>
                {selectedOrder.deliveryMethod === "PICKUP_VENUE" ? (
                  <div className="text-[#99999F]">
                    <span className="text-amber-400 font-bold">Pick-Up On Site (GOR UNY)</span>
                    <br />
                    Kode Klaim Barcode: <strong className="font-mono text-white">{selectedOrder.claimBarcode}</strong>
                  </div>
                ) : (
                  <div className="text-[#99999F]">
                    <span className="text-sky-400 font-bold">{selectedOrder.courier}</span><br />
                    Alamat: {selectedOrder.shippingAddress}, {selectedOrder.shippingCity} ({selectedOrder.shippingPostalCode})
                  </div>
                )}
              </div>
            </div>

            {/* Ordered Items List */}
            <div className="space-y-2">
              <strong className="text-xs font-bold uppercase text-white block">
                Item yang Dibeli:
              </strong>
              <div className="divide-y divide-white/5 border border-white/10 rounded-sm bg-[#111114]">
                {selectedOrder.orderItems.map((item) => (
                  <div key={item.id} className="p-3 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 bg-black rounded-xs overflow-hidden shrink-0">
                        <Image
                          src={item.variant.product.imageUrl || "/images/jkb/merch-tee-black.jpg"}
                          alt={item.variant.product.name}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                      <div>
                        <span className="font-bold text-white block">{item.variant.product.name}</span>
                        <span className="text-[10px] text-[#99999F]">
                          Size: {item.variant.size || "Std"} &times; {item.quantity} pcs
                        </span>
                      </div>
                    </div>
                    <span className="font-mono font-bold text-white">
                      {formatRupiah(item.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Status Update Form */}
            <div className="bg-[#09090b] p-4 rounded-sm border border-white/10 space-y-4">
              <strong className="text-xs font-bold uppercase text-white block">
                Update Status Pesanan:
              </strong>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="text-white/70 block mb-1">Status Pembayaran</label>
                  <select
                    value={modalPaymentStatus}
                    onChange={(e) => setModalPaymentStatus(e.target.value)}
                    className="w-full bg-[#171719] border border-white/10 rounded-sm p-2 text-white font-mono"
                  >
                    <option value="PAID">PAID (Lunas Terverifikasi)</option>
                    <option value="UNPAID">UNPAID (Belum Bayar)</option>
                  </select>
                </div>

                <div>
                  <label className="text-white/70 block mb-1">Status Fulfillment</label>
                  <select
                    value={modalFulfillmentStatus}
                    onChange={(e) => setModalFulfillmentStatus(e.target.value)}
                    className="w-full bg-[#171719] border border-white/10 rounded-sm p-2 text-white font-mono"
                  >
                    <option value="UNFULFILLED">UNFULFILLED</option>
                    <option value="PROCESSING">PROCESSING (Sedang Disiapkan)</option>
                    <option value="READY_FOR_PICKUP">READY_FOR_PICKUP (Siap di Booth)</option>
                    <option value="SHIPPED">SHIPPED (Sudah Dikirim Kurir)</option>
                    <option value="DELIVERED">DELIVERED (Selesai Diterima)</option>
                  </select>
                </div>

                {selectedOrder.deliveryMethod === "EXPEDITION" && (
                  <div className="sm:col-span-2">
                    <label className="text-white/70 block mb-1">Nomor Resi Pengiriman</label>
                    <input
                      type="text"
                      placeholder="Contoh: JNE-JKB-892110291"
                      value={modalTrackingNumber}
                      onChange={(e) => setModalTrackingNumber(e.target.value)}
                      className="w-full bg-[#171719] border border-white/10 rounded-sm p-2 text-white font-mono"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setSelectedOrder(null)}
                className="px-4 py-2 border border-white/10 hover:bg-white/5 text-xs font-bold uppercase rounded-sm text-[#99999F] hover:text-white"
              >
                Tutup
              </button>
              <button
                type="button"
                onClick={handleSaveOrderStatus}
                disabled={isSubmitting}
                className="px-6 py-2 bg-[#EF3340] hover:bg-[#D91F2C] text-white text-xs font-bold uppercase rounded-sm flex items-center gap-1.5 shadow-md shadow-[#EF3340]/20"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Simpan Perubahan</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Stock Edit Modal */}
      {editingVariant && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#171719] border border-white/15 rounded-sm max-w-sm w-full p-6 text-[#F6F3EC] shadow-2xl relative space-y-4">
            <h3
              className="text-lg font-black uppercase tracking-tight text-white"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              UBAH STOK VARIAN
            </h3>
            <p className="text-xs text-[#99999F]">
              {editingVariant.productName} (Ukuran: {editingVariant.size || "Standard"})
            </p>

            <div className="space-y-1.5 text-xs">
              <label className="text-white/70 block">Jumlah Stok Unit Baru:</label>
              <input
                type="number"
                min="0"
                value={newStockValue}
                onChange={(e) => setNewStockValue(parseInt(e.target.value) || 0)}
                className="w-full bg-[#09090b] border border-white/10 rounded-sm p-3 text-white font-mono text-base font-bold focus:outline-none focus:border-[#EF3340]"
              />
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setEditingVariant(null)}
                className="px-4 py-2 border border-white/10 hover:bg-white/5 text-xs font-bold uppercase rounded-sm text-[#99999F] hover:text-white"
              >
                Batal
              </button>
              <button
                onClick={handleSaveStock}
                disabled={isSubmitting}
                className="px-5 py-2 bg-[#EF3340] hover:bg-[#D91F2C] text-white text-xs font-bold uppercase rounded-sm flex items-center gap-1.5"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Perbarui Stok</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
