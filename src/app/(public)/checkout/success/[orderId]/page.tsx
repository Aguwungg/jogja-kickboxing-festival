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
          className="inline-flex items-center gap-1.5 text-xs font-technical text-[#77716D] hover:text-black uppercase tracking-wider transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>KEMBALI KE KATALOG MERCHANDISE</span>
        </Link>

        {/* Editorial Title */}
        <div className="space-y-3 pb-8 border-b border-black/15">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D91F2C]" />
            <p className="font-technical text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
              TANDA TERIMA RESMI • STRUK ELEKTRONIK
            </p>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight text-[#0B0B0B]">
            STATUS PESANAN.
          </h1>
          <p className="text-sm text-[#5A5957] font-sans">
            Bukti pesanan #{order.orderNumber} telah tercatat di sistem resmi JKBF 2026.
          </p>
        </div>

        {/* E-Receipt Container */}
        <div className="border border-black/15 bg-white p-6 sm:p-10 space-y-8 shadow-sm ring-corner-frame">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-black/15">
            <div>
              <span className="text-[10px] font-technical text-[#77716D] uppercase block">NOMOR PESANAN RESMI</span>
              <p className="font-display text-3xl font-black text-[#0B0B0B]">#{order.orderNumber}</p>
              <p className="text-xs text-[#5A5957] font-technical mt-0.5">
                {new Date(order.createdAt).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span
                className={`px-3 py-1.5 text-xs font-technical font-bold uppercase ${
                  isPaid
                    ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                    : "bg-black/5 text-[#0B0B0B] border border-black/15"
                }`}
              >
                {isPaid ? "LUNAS (SIMULASI)" : "MENUNGGU KONFIRMASI"}
              </span>
              <PrintButton />
            </div>
          </div>

          {/* Customer & Delivery Data */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs font-technical border-b border-black/10 pb-6">
            <div className="space-y-2">
              <span className="text-[#77716D] uppercase block text-[10px]">DATA PEMESAN</span>
              <p className="font-bold text-sm text-[#0B0B0B]">{order.customerName}</p>
              <p className="text-[#5A5957]">{order.guestEmail}</p>
              <p className="text-[#5A5957]">{order.customerPhone}</p>
            </div>
            <div className="space-y-2">
              <span className="text-[#77716D] uppercase block text-[10px]">PENGAMBILAN / PENGIRIMAN</span>
              <p className="font-bold text-sm text-[#0B0B0B]">
                {order.deliveryMethod === "PICKUP_VENUE" ? "AMBIL DI TEMPAT (BOOTH GOR UNY)" : "EKSPEDISI PENGIRIMAN"}
              </p>
              <p className="text-[#5A5957]">{order.courier || "-"}</p>
              {order.shippingAddress && (
                <p className="text-[#5A5957] font-sans">{order.shippingAddress}, {order.shippingCity} {order.shippingPostalCode}</p>
              )}
            </div>
          </div>

          {/* Items Table */}
          <div className="space-y-4">
            <span className="font-technical text-xs font-bold uppercase text-[#77716D] block">
              DAFTAR ITEM PESANAN
            </span>
            <div className="border border-black/10 divide-y divide-black/10 text-xs font-sans">
              {order.orderItems.map((item) => (
                <div key={item.id} className="p-4 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-[#0B0B0B]">{item.variant.product.name}</p>
                    <p className="text-[#77716D] font-technical">
                      Ukuran: {item.variant.size || "STD"} • {item.quantity} pcs @ {formatRupiah(item.price)}
                    </p>
                  </div>
                  <span className="font-technical font-bold text-[#0B0B0B]">
                    {formatRupiah(item.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Financial Breakdown */}
          <div className="border-t border-black/15 pt-6 space-y-2 font-technical text-xs">
            <div className="flex justify-between text-[#5A5957]">
              <span>SUBTOTAL PESANAN:</span>
              <span className="font-bold text-[#0B0B0B]">{formatRupiah(order.totalAmount - order.shippingCost)}</span>
            </div>
            <div className="flex justify-between text-[#5A5957]">
              <span>BIAYA PENGIRIMAN:</span>
              <span className="font-bold text-[#0B0B0B]">
                {order.shippingCost === 0 ? "GRATIS" : formatRupiah(order.shippingCost)}
              </span>
            </div>
            <div className="flex justify-between text-base font-bold text-[#0B0B0B] pt-2 border-t border-black/10">
              <span>TOTAL PEMBAYARAN:</span>
              <span className="text-[#D91F2C] text-lg font-black">{formatRupiah(order.totalAmount)}</span>
            </div>
          </div>

          {/* Staging Simulator Gate */}
          {policy.allowPaymentSimulator && !isPaid && (
            <div className="pt-4 border-t border-black/10">
              <SimulatePaymentButton orderId={order.id} />
            </div>
          )}

          {/* Pickup Instructions */}
          <div className="p-4 bg-black/5 border border-black/10 text-xs text-[#5A5957] font-technical space-y-1">
            <p className="font-bold text-[#0B0B0B]">PETUNJUK PENGAMBILAN DI VENUE:</p>
            <p>1. Simpan tangkapan layar atau cetak bukti tanda terima ini.</p>
            <p>2. Tunjukkan kode #{order.orderNumber} dan nomor telepon ke petugas di Booth Official Merch GOR UNY pada 12–14 Desember 2026.</p>
          </div>

        </div>

      </div>
    </main>
  );
}
