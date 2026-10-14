import React from "react";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { formatRupiah } from "@/lib/currency";
import { getGatePolicy } from "@/lib/commercial-gates";
import { ArrowLeft } from "lucide-react";
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

  const isPaid = order.paymentStatus === "PAID";

  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#F4F0E8] text-[#0B0B0B] pt-24 lg:pt-28 pb-24 font-sans">
      <div className="max-w-[1000px] mx-auto px-5 sm:px-8 py-8 w-full flex-1 space-y-8">
        
        <Link
          href="/merch"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#5A5957] hover:text-black uppercase tracking-wider transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>KEMBALI KE KATALOG MERCHANDISE</span>
        </Link>

        {/* Editorial Title */}
        <div className="space-y-3 pb-8 border-b border-black/10">
          <p
            className="text-[#D91F2C] text-xs font-extrabold uppercase tracking-[0.24em]"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            KONFIRMASI PESANAN • STATUS
          </p>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-[#0B0B0B]"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            STATUS PESANAN.
          </h1>
          <p className="text-sm text-[#5A5957]">
            Bukti pesanan #{order.orderNumber} telah tercatat di basis data resmi JKBF.
          </p>
        </div>

        {/* E-Receipt Container */}
        <div className="border border-black/15 bg-white/70 p-6 sm:p-10 space-y-8 shadow-sm">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-black/10">
            <div>
              <span className="text-[10px] font-mono text-[#8F8E8B] uppercase block">NOMOR PESANAN</span>
              <p className="text-2xl font-black text-[#0B0B0B] font-mono">#{order.orderNumber}</p>
              <p className="text-xs text-[#5A5957] font-mono mt-0.5">
                {new Date(order.createdAt).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span
                className={`px-3 py-1.5 text-xs font-mono font-bold uppercase ${
                  isPaid
                    ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                    : "bg-black/5 text-[#0B0B0B] border border-black/10"
                }`}
              >
                {isPaid ? "LUNAS (SIMULASI)" : "MENUNGGU PEMBAYARAN"}
              </span>
              <PrintButton />
            </div>
          </div>

          {/* Recipient Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs font-mono p-5 bg-black/[0.02] border border-black/5">
            <div className="space-y-1">
              <span className="text-[#8F8E8B] block text-[10px] uppercase">PENERIMA:</span>
              <p className="font-bold text-sm text-[#0B0B0B]">{order.customerName}</p>
              <p className="text-[#5A5957]">{order.guestEmail}</p>
              <p className="text-[#5A5957]">{order.customerPhone}</p>
            </div>

            <div className="space-y-1">
              <span className="text-[#8F8E8B] block text-[10px] uppercase">METODE PENGIRIMAN:</span>
              <p className="font-bold text-sm text-[#0B0B0B]">
                {order.deliveryMethod === "PICKUP_VENUE" ? "PICK-UP GOR UNY (12—14 DESEMBER)" : "EKSPEDISI PENGIRIMAN"}
              </p>
              <p className="text-[#5A5957]">{order.courier}</p>
              {order.shippingAddress && <p className="text-[#5A5957]">{order.shippingAddress}, {order.shippingCity}</p>}
            </div>
          </div>

          {/* Items Table */}
          <div className="border-t border-black/10 divide-y divide-black/10">
            {order.orderItems.map((item) => (
              <div key={item.id} className="py-4 flex items-center justify-between text-xs font-mono">
                <div>
                  <p className="font-bold text-sm text-[#0B0B0B] uppercase">
                    {item.variant?.product?.name || "Official Merchandise"}
                  </p>
                  <p className="text-[#5A5957]">
                    Ukuran: {item.variant?.size || "All Size"} • Qty: {item.quantity}
                  </p>
                </div>
                <span className="font-bold text-[#0B0B0B]">
                  {formatRupiah(item.price * item.quantity)}
                </span>
              </div>
            ))}
          </div>

          {/* Pricing Totals */}
          <div className="border-t border-black/10 pt-4 space-y-2 text-xs font-mono">
            <div className="flex justify-between text-[#5A5957]">
              <span>Subtotal Produk:</span>
              <span>{formatRupiah(order.totalAmount - order.shippingCost)}</span>
            </div>
            <div className="flex justify-between text-[#5A5957]">
              <span>Biaya Pengiriman:</span>
              <span>{order.shippingCost === 0 ? "GRATIS" : formatRupiah(order.shippingCost)}</span>
            </div>
            <div className="flex justify-between text-base font-black text-[#0B0B0B] pt-2 border-t border-black/10">
              <span>TOTAL PESANAN:</span>
              <span>{formatRupiah(order.totalAmount)}</span>
            </div>
          </div>

          {/* Simulation Payment Gate for Staging Testing */}
          {policy.allowPaymentSimulator && !isPaid && (
            <div className="pt-4 border-t border-black/10">
              <SimulatePaymentButton orderId={order.id} />
            </div>
          )}

        </div>

      </div>
    </main>
  );
}
