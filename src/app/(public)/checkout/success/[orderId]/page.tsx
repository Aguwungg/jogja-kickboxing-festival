import React from "react";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { formatRupiah } from "@/lib/currency";
import {
  CheckCircle2,
  MapPin,
  Truck,
  QrCode,
  Calendar,
  ArrowLeft,
  ShoppingBag,
  Printer,
  ShieldCheck,
  Package,
} from "lucide-react";
import PrintButton from "./PrintButton";

interface Props {
  params: Promise<{ orderId: string }>;
}

export const metadata = {
  title: "Konfirmasi Pesanan — JKB 2026",
  description: "E-Receipt dan bukti pemesanan resmi merchandise JKB 2026.",
};

export default async function OrderSuccessPage({ params }: Props) {
  const { orderId } = await params;

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

  return (
    <div className="flex-1 flex flex-col w-full min-h-screen text-[#F6F3EC] bg-[#09090b] pt-24 pb-20">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-1">
        {/* Success Banner */}
        <div className="bg-[#171719] border border-white/10 rounded-sm p-6 sm:p-10 shadow-2xl relative overflow-hidden space-y-8">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Status */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-emerald-400 block">
                  PEMBAYARAN TERVERIFIKASI
                </span>
                <h1
                  className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white leading-tight"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  TERIMA KASIH ATAS DUKUNGANMU!
                </h1>
              </div>
            </div>

            <div className="text-left sm:text-right font-mono">
              <span className="text-xs text-[#90929A] block">NOMOR PESANAN</span>
              <span className="text-base sm:text-lg font-black text-amber-400">
                {order.orderNumber}
              </span>
            </div>
          </div>

          {/* Barcode & Pick-Up / Delivery Pass Card */}
          {isPickup ? (
            <div className="bg-[#09090b] border-2 border-dashed border-[#D21F2B]/40 p-6 rounded-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-xs bg-[#D21F2B]/20 border border-[#D21F2B]/40 text-[#D21F2B] text-xs font-bold uppercase tracking-wider mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>PASS KLAIM MERCHANDISE DI VENUE</span>
                  </div>
                  <h3
                    className="text-xl font-black uppercase text-white"
                    style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                  >
                    BOOTH OFFICIAL MERCH — GOR AMONG ROGO
                  </h3>
                  <p className="text-xs text-[#90929A] max-w-md mt-1">
                    Hall Barat Lantai 1 (Pintu Masuk Utama). Buka 14-16 Agustus 2026, 09:00 - 22:00 WIB. Tunjukkan kode klaim berikut:
                  </p>
                </div>

                <div className="bg-white p-3 rounded-sm text-center flex flex-col items-center self-start sm:self-auto shrink-0 shadow-lg">
                  <QrCode className="w-20 h-20 text-black mb-1" />
                  <span className="text-xs font-mono font-black text-black tracking-widest">
                    {order.claimBarcode || order.orderNumber}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-[#09090b] border border-white/10 p-6 rounded-sm space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                <Truck className="w-4 h-4" />
                <span>INFORMASI PENGIRIMAN EKSPEDISI</span>
              </div>
              <h3 className="text-sm font-bold text-white">
                Kurir: {order.courier}
              </h3>
              <p className="text-xs text-[#90929A]">
                Tujuan: <strong>{order.customerName}</strong> ({order.customerPhone})<br />
                {order.shippingAddress}, {order.shippingCity} ({order.shippingPostalCode})
              </p>
              <div className="pt-2 text-[11px] text-white/50">
                Status Fulfillment: <strong className="text-amber-400 font-mono uppercase">{order.fulfillmentStatus}</strong> (Nomor resi akan dikirim via WhatsApp saat paket diserahkan ke kurir).
              </div>
            </div>
          )}

          {/* Purchased Items Table */}
          <div className="space-y-4">
            <h3
              className="text-base font-bold uppercase tracking-wider text-white flex items-center gap-2"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              <Package className="w-4 h-4 text-[#D21F2B]" />
              <span>RINCIAN ITEM PESANAN</span>
            </h3>

            <div className="border border-white/10 rounded-sm overflow-hidden divide-y divide-white/5">
              {order.orderItems.map((item) => (
                <div key={item.id} className="p-4 flex items-center gap-4 bg-[#111114]">
                  <div className="relative w-16 h-16 bg-black rounded-xs overflow-hidden shrink-0 border border-white/10">
                    <Image
                      src={item.variant.product.imageUrl || "/images/jkb/merch-tee-black.jpg"}
                      alt={item.variant.product.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                      {item.variant.product.name}
                    </h4>
                    <div className="flex items-center gap-2 mt-1 text-xs text-[#90929A]">
                      {item.variant.size && (
                        <span className="font-mono bg-white/10 px-1.5 py-0.5 rounded-xs text-white/80">
                          Size {item.variant.size}
                        </span>
                      )}
                      <span>Jumlah: {item.quantity}</span>
                    </div>
                  </div>
                  <div className="text-right font-mono">
                    <span className="text-xs sm:text-sm font-bold text-white block">
                      {formatRupiah(item.price * item.quantity)}
                    </span>
                    <span className="text-[10px] text-[#90929A]">
                      @{formatRupiah(item.price)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment & Total Breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/10 text-xs">
            <div className="space-y-2">
              <span className="text-[#90929A] block font-bold uppercase tracking-wider">
                DATA PEMESAN
              </span>
              <div className="text-white space-y-1">
                <div>Nama: <strong>{order.customerName}</strong></div>
                <div>Email: {order.guestEmail}</div>
                <div>WhatsApp: {order.customerPhone}</div>
                {order.notes && <div>Catatan: <em>"{order.notes}"</em></div>}
              </div>
            </div>

            <div className="space-y-2 bg-[#09090b] p-4 rounded-sm border border-white/5">
              <div className="flex justify-between text-[#90929A]">
                <span>Total Merchandise</span>
                <span className="font-mono text-white">
                  {formatRupiah(order.totalAmount - order.shippingCost)}
                </span>
              </div>
              <div className="flex justify-between text-[#90929A]">
                <span>Ongkos Kirim</span>
                <span className="font-mono text-white">
                  {order.shippingCost === 0 ? "GRATIS" : formatRupiah(order.shippingCost)}
                </span>
              </div>
              <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-white/10">
                <span className="uppercase">Total Bayar</span>
                <span className="text-[#D21F2B] font-mono text-lg font-black">
                  {formatRupiah(order.totalAmount)}
                </span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/merch"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#90929A] hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Katalog Merch</span>
            </Link>

            <div className="flex items-center gap-3">
              <PrintButton />
              <Link
                href="/"
                className="bg-[#D21F2B] hover:bg-[#b01822] text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-sm transition-all shadow-md shadow-[#D21F2B]/20"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                Kembali ke Beranda
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
