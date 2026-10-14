"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart, formatRupiah } from "@/lib/cart-context";
import { createOrderAction } from "@/app/(public)/checkout/actions";
import { AlertCircle } from "lucide-react";

export default function CheckoutClient() {
  const router = useRouter();
  const { items, clearCart, subtotal } = useCart();

  const [customerName, setCustomerName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState<"PICKUP_VENUE" | "EXPEDITION">("PICKUP_VENUE");
  const [shippingRegion, setShippingRegion] = useState("DIY_JATENG");
  const [shippingAddress, setShippingAddress] = useState("");
  const [shippingCity, setShippingCity] = useState("Yogyakarta");
  const [shippingPostalCode, setShippingPostalCode] = useState("");
  const [courierName, setCourierName] = useState("JNE Regular");
  const [paymentMethod, setPaymentMethod] = useState("QRIS");
  const [notes, setNotes] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const shippingCost =
    deliveryMethod === "PICKUP_VENUE"
      ? 0
      : shippingRegion === "DIY_JATENG"
      ? 15000
      : shippingRegion === "JAWA"
      ? 25000
      : 45000;

  const finalTotal = subtotal + shippingCost;

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (items.length === 0) {
      setErrorMessage("Keranjang belanja kosong. Silakan pilih merchandise terlebih dahulu.");
      return;
    }

    if (!customerName.trim() || !guestEmail.trim() || !customerPhone.trim()) {
      setErrorMessage("Mohon lengkapi Nama, Email, dan Nomor WhatsApp.");
      return;
    }

    if (deliveryMethod === "EXPEDITION" && !shippingAddress.trim()) {
      setErrorMessage("Mohon lengkapi alamat tujuan pengiriman ekspedisi.");
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        customerName,
        guestEmail,
        customerPhone,
        deliveryMethod,
        shippingAddress: deliveryMethod === "EXPEDITION" ? shippingAddress : undefined,
        shippingCity: deliveryMethod === "EXPEDITION" ? shippingCity : undefined,
        shippingPostalCode: deliveryMethod === "EXPEDITION" ? shippingPostalCode : undefined,
        courier:
          deliveryMethod === "PICKUP_VENUE"
            ? "Pickup Booth GOR UNY"
            : `${courierName} (${shippingRegion === "DIY_JATENG" ? "DIY/Jateng" : shippingRegion === "JAWA" ? "Pulau Jawa" : "Luar Jawa"})`,
        shippingCost,
        notes,
        paymentMethod,
        items: items.map((i) => ({
          variantId: i.variantId,
          quantity: i.quantity,
          price: i.price,
        })),
      };

      const res = await createOrderAction(payload);

      if (res.success && res.orderId) {
        clearCart();
        router.push(`/checkout/success/${res.orderId}`);
      } else {
        setErrorMessage(res.error || "Gagal memproses pesanan. Silakan periksa kembali.");
        setIsSubmitting(false);
      }
    } catch {
      setErrorMessage("Terjadi gangguan koneksi ke server. Coba lagi.");
      setIsSubmitting(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="py-24 text-center border-t border-b border-black/10 space-y-4 max-w-lg mx-auto">
        <h3
          className="text-2xl sm:text-3xl font-black uppercase text-[#0B0B0B]"
          style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
        >
          KERANJANG BELANJA KOSONG
        </h3>
        <p className="text-sm text-[#5A5957]">
          Anda belum memilih apparel atau official merchandise untuk dipesan.
        </p>
        <Link
          href="/merch"
          className="inline-block px-7 py-3.5 bg-[#0B0B0B] text-white text-xs font-bold uppercase tracking-wider font-display"
          style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
        >
          LIHAT KATALOG MERCHANDISE ↗
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 font-sans">
      
      {/* Left: Customer & Shipping Details */}
      <div className="lg:col-span-7 space-y-10">
        
        {/* Contact Info */}
        <div className="space-y-5">
          <div className="border-b border-black/10 pb-3">
            <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#D91F2C]">
              LANGKAH 01
            </span>
            <h3
              className="text-2xl font-black uppercase text-[#0B0B0B]"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              IDENTITAS PEMESAN
            </h3>
          </div>

          <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-mono uppercase text-[#5A5957] block">Nama Lengkap *</label>
              <input
                type="text"
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Nama sesuai KTP/ID"
                className="w-full bg-white/70 border border-black/20 px-4 py-3 text-sm text-[#0B0B0B] placeholder-[#8F8E8B] focus:outline-none focus:border-[#D91F2C]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-mono uppercase text-[#5A5957] block">Email Aktif *</label>
                <input
                  type="email"
                  required
                  value={guestEmail}
                  onChange={(e) => setGuestEmail(e.target.value)}
                  placeholder="email@domain.com"
                  className="w-full bg-white/70 border border-black/20 px-4 py-3 text-sm text-[#0B0B0B] placeholder-[#8F8E8B] focus:outline-none focus:border-[#D91F2C]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono uppercase text-[#5A5957] block">Nomor WhatsApp *</label>
                <input
                  type="tel"
                  required
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="08xxxxxxxxxx"
                  className="w-full bg-white/70 border border-black/20 px-4 py-3 text-sm text-[#0B0B0B] placeholder-[#8F8E8B] focus:outline-none focus:border-[#D91F2C]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Delivery Method */}
        <div className="space-y-5">
          <div className="border-b border-black/10 pb-3">
            <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#D91F2C]">
              LANGKAH 02
            </span>
            <h3
              className="text-2xl font-black uppercase text-[#0B0B0B]"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              METODE PENGAMBILAN / PENGIRIMAN
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
              onClick={() => setDeliveryMethod("PICKUP_VENUE")}
              className={`p-5 border cursor-pointer transition-colors ${
                deliveryMethod === "PICKUP_VENUE"
                  ? "bg-black/5 border-black"
                  : "border-black/20 bg-white/40 hover:bg-white/70"
              }`}
            >
              <span className="text-[10px] font-mono font-bold text-[#D91F2C] uppercase block">GRATIS ONGKIR</span>
              <p className="font-black text-base uppercase text-[#0B0B0B] mt-1">PICK-UP DI GOR UNY</p>
              <p className="text-xs text-[#5A5957] mt-1">Ambil langsung di Booth Merchandise festival saat hari H (12—14 Des 2026).</p>
            </div>

            <div
              onClick={() => setDeliveryMethod("EXPEDITION")}
              className={`p-5 border cursor-pointer transition-colors ${
                deliveryMethod === "EXPEDITION"
                  ? "bg-black/5 border-black"
                  : "border-black/20 bg-white/40 hover:bg-white/70"
              }`}
            >
              <span className="text-[10px] font-mono font-bold text-[#5A5957] uppercase block">PENGIRIMAN RUMAH</span>
              <p className="font-black text-base uppercase text-[#0B0B0B] mt-1">EKSPEDISI JNE / J&T</p>
              <p className="text-xs text-[#5A5957] mt-1">Dikirim ke alamat lengkap seluruh Indonesia pasca-sesi festival.</p>
            </div>
          </div>

          {deliveryMethod === "EXPEDITION" && (
            <div className="p-6 bg-white/60 border border-black/15 space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-mono uppercase text-[#5A5957] block">Wilayah Pengiriman</label>
                <select
                  value={shippingRegion}
                  onChange={(e) => setShippingRegion(e.target.value)}
                  className="w-full bg-white border border-black/20 px-3 py-2 text-xs text-[#0B0B0B]"
                >
                  <option value="DIY_JATENG">D.I. Yogyakarta & Jawa Tengah (Rp 15.000)</option>
                  <option value="JAWA">Pulau Jawa (Jabar, Jatim, DKI, Banten) (Rp 25.000)</option>
                  <option value="LUAR_JAWA">Luar Pulau Jawa (Rp 45.000)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono uppercase text-[#5A5957] block">Alamat Lengkap *</label>
                <textarea
                  rows={2}
                  required
                  value={shippingAddress}
                  onChange={(e) => setShippingAddress(e.target.value)}
                  placeholder="Nama jalan, nomor rumah, RT/RW, kelurahan, kecamatan..."
                  className="w-full bg-white border border-black/20 px-4 py-2.5 text-xs text-[#0B0B0B] focus:outline-none"
                />
              </div>
            </div>
          )}
        </div>

      </div>

      {/* Right: Order Summary */}
      <div className="lg:col-span-5 space-y-6">
        <div className="border border-black/15 bg-white/60 p-6 sm:p-8 space-y-6">
          <h3
            className="text-2xl font-black uppercase text-[#0B0B0B] border-b border-black/10 pb-4"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            RINGKASAN PESANAN
          </h3>

          <div className="divide-y divide-black/10 max-h-60 overflow-y-auto">
            {items.map((item) => (
              <div key={item.variantId} className="py-3 flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-[#0B0B0B] uppercase">{item.name}</p>
                  <p className="text-[11px] text-[#5A5957] font-mono">
                    Ukuran: {item.size || "All Size"} • Qty: {item.quantity}
                  </p>
                </div>
                <span className="font-mono font-bold text-[#0B0B0B]">
                  {formatRupiah(item.price * item.quantity)}
                </span>
              </div>
            ))}
          </div>

          <div className="border-t border-black/10 pt-4 space-y-2 text-xs font-mono">
            <div className="flex justify-between text-[#5A5957]">
              <span>Subtotal Produk:</span>
              <span>{formatRupiah(subtotal)}</span>
            </div>
            <div className="flex justify-between text-[#5A5957]">
              <span>Biaya Pengiriman:</span>
              <span>{shippingCost === 0 ? "GRATIS" : formatRupiah(shippingCost)}</span>
            </div>
            <div className="flex justify-between text-base font-black text-[#0B0B0B] pt-2 border-t border-black/10">
              <span>TOTAL PEMBAYARAN:</span>
              <span>{formatRupiah(finalTotal)}</span>
            </div>
          </div>

          {errorMessage && (
            <div className="p-3 bg-red-100 border border-red-300 text-xs font-mono text-red-800 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full font-display font-extrabold text-sm uppercase tracking-wider text-white bg-[#D91F2C] hover:bg-[#B81521] disabled:opacity-50 py-4 transition-colors"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            {isSubmitting ? "MEMPROSES PESANAN..." : "KONFIRMASI & BAYAR ↗"}
          </button>

          <p className="text-[10px] font-mono text-[#8F8E8B] text-center leading-relaxed">
            SIMULASI STAGING AKTIF • TIDAK ADA PENARIKAN SALDO NYATA
          </p>
        </div>
      </div>

    </form>
  );
}
