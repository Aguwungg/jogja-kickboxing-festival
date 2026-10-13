import React from "react";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { formatRupiah } from "@/lib/currency";
import { getGatePolicy } from "@/lib/commercial-gates";
import {
  CheckCircle2,
  Clock,
  MapPin,
  Truck,
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";
import PrintButton from "./PrintButton";
import SimulatePaymentButton from "./SimulatePaymentButton";

interface Props {
  params: Promise<{ orderId: string }>;
}

export const metadata = {
  title: "Konfirmasi Pesanan | JKBF 2026",
  description: "Bukti pemesanan resmi merchandise Jogja Kickboxing Festival 2026.",
};

export default async function OrderSuccessPage({ params }: Props) {
  const { orderId } = await params;
  const policy = getGatePolicy();

  const order = await prisma.order.findUnique({
    where: { id: orderId },
    include: {
      orderItems: {
        include: {
          variant: {
            include: {
              product: true,
            },
          },
        },
      },
    },
  });

  if (!order) {
    notFound();
  }

  const isPickup = order.deliveryMethod === "PICKUP_VENUE";
  const isPaid = order.paymentStatus === "PAID";

  return (
    <main className="flex-1 flex flex-col w-full min-h-screen text-[#F4F0E8] bg-[#0B0B0B] pt-24 pb-20 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-1 space-y-6">
        
        <Link
          href="/merch"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#8F8E8B] hover:text-[#F4F0E8] uppercase tracking-wider transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>KEMBALI KE KATALOG MERCHANDISE</span>
        </Link>

        {/* E-Receipt Container */}
        <div className="bg-[#141416] border border-white/10 p-6 sm:p-10 space-y-8">
          
          {/* Header Status */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <span className="v9-overline text-[#D91F2C]">BUKTI PEMESANAN RESMI</span>
              <h1
                className="v9-display-title text-3xl sm:text-4xl text-[#F4F0E8] mt-1"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                PESANAN #{order.orderNumber}
              </h1>
              <p className="text-xs text-[#8F8E8B] font-mono mt-1">
                TANGGAL: {new Date(order.createdAt).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span
                className={`px-3 py-1.5 text-xs font-mono font-bold uppercase ${
                  isPaid
                    ? "bg-green-950/60 border border-green-500/30 text-green-400"
                    : "bg-[#0B0B0B] border border-white/10 text-[#8F8E8B]"
                }`}
              >
                {isPaid ? "PEMBAYARAN TERKONFIRMASI" : "MENUNGGU PEMBAYARAN"}
              </span>
              <PrintButton />
            </div>
          </div>

          {/* Delivery & Recipient Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs font-mono bg-[#0B0B0B] border border-white/5 p-6">
            <div className="space-y-1">
              <span className="text-[#8F8E8B] block text-[10px] uppercase">DATA PENERIMA</span>
              <span className="text-[#F4F0E8] font-bold block">{order.customerName}</span>
              <span className="text-[#8F8E8B] block">{order.guestEmail}</span>
              <span className="text-[#8F8E8B] block">{order.customerPhone}</span>
            </div>

            <div className="space-y-1">
              <span className="text-[#8F8E8B] block text-[10px] uppercase">METODE PENGAMBILAN</span>
              <span className="text-[#F4F0E8] font-bold block">
                {isPickup ? "PICK-UP BOOTH GOR UNY (12—14 DES)" : "EKSPEDISI PENGIRIMAN"}
              </span>
              {!isPickup && (
                <span className="text-[#8F8E8B] block">
                  {order.shippingAddress}, {order.shippingCity} {order.shippingPostalCode}
                </span>
              )}
            </div>
          </div>

          {/* Order Items Table */}
          <div className="space-y-3">
            <span className="text-[10px] text-[#8F8E8B] font-mono uppercase tracking-widest block">
              DAFTAR ITEM PESANAN
            </span>
            <div className="border border-white/10 divide-y divide-white/10 bg-[#0B0B0B]">
              {order.orderItems.map((item) => (
                <div key={item.id} className="p-4 flex justify-between items-center text-xs font-mono">
                  <div>
                    <span className="text-[#F4F0E8] font-bold block">
                      {item.variant.product.name}
                    </span>
                    <span className="text-[10px] text-[#8F8E8B]">
                      UKURAN: {item.variant.size || "ALL"} • JUMLAH: {item.quantity}
                    </span>
                  </div>
                  <span className="text-[#F4F0E8] font-bold">
                    {formatRupiah(item.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Totals */}
          <div className="border-t border-white/10 pt-4 space-y-2 text-xs font-mono text-right">
            <div className="flex justify-between text-[#8F8E8B]">
              <span>SUBTOTAL ITEM</span>
              <span>{formatRupiah(order.totalAmount - order.shippingCost)}</span>
            </div>
            <div className="flex justify-between text-[#8F8E8B]">
              <span>BIAYA PENGIRIMAN</span>
              <span>{isPickup ? "GRATIS" : formatRupiah(order.shippingCost)}</span>
            </div>
            <div className="flex justify-between text-sm font-bold text-[#F4F0E8] pt-2 border-t border-white/5">
              <span>TOTAL PESANAN</span>
              <span className="text-[#D91F2C]">{formatRupiah(order.totalAmount)}</span>
            </div>
          </div>

          {/* Staging Simulator Button */}
          {policy.allowPaymentSimulator && !isPaid && (
            <div className="pt-4 border-t border-white/10 flex justify-end">
              <SimulatePaymentButton orderId={order.id} />
            </div>
          )}

        </div>

      </div>
    </main>
  );
}
