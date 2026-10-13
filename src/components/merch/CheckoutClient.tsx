"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart, formatRupiah } from "@/lib/cart-context";
import { createOrderAction } from "@/app/(public)/checkout/actions";
import {
  ShoppingBag,
  Truck,
  MapPin,
  ShieldCheck,
  ArrowRight,
  AlertCircle,
} from "lucide-react";

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
      setErrorMessage("Terjadi kesalahan sistem. Silakan coba kembali sesaat lagi.");
      setIsSubmitting(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="p-16 text-center bg-[#141416] border border-white/10 space-y-4 max-w-md mx-auto">
        <ShoppingBag className="w-8 h-8 text-[#8F8E8B] mx-auto" />
        <h3 className="v9-display-title text-2xl text-[#F4F0E8]" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
          KERANJANG BELANJA KOSONG
        </h3>
        <p className="text-xs text-[#8F8E8B]">
          Pilih produk merchandise resmi festival terlebih dahulu sebelum melanjutkan checkout.
        </p>
        <Link href="/merch" className="v9-btn-red text-xs inline-flex">
          LIHAT KATALOG MERCHANDISE ↗
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-10 font-sans">
      
      {/* Left Column: Customer and Delivery Details */}
      <div className="lg:col-span-7 space-y-8">
        
        {/* Contact Info */}
        <div className="p-6 sm:p-8 bg-[#141416] border border-white/10 space-y-4">
          <span className="text-[10px] text-[#D91F2C] font-mono tracking-widest uppercase block">
            LANGKAH 01
          </span>
          <h2 className="v9-display-title text-2xl text-[#F4F0E8]" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
            DATA PEMESAN
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1 sm:col-span-2">
              <label className="text-[10px] font-mono uppercase tracking-widest text-[#8F8E8B] block">NAMA LENGKAP</label>
              <input
                type="text"
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Nama Lengkap"
                className="w-full bg-[#0B0B0B] border border-white/10 px-3.5 py-2.5 text-xs text-[#F4F0E8] focus:outline-none focus:border-[#D91F2C]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-mono uppercase tracking-widest text-[#8F8E8B] block">EMAIL KONFIRMASI</label>
              <input
                type="email"
                required
                value={guestEmail}
                onChange={(e) => setGuestEmail(e.target.value)}
                placeholder="email@anda.com"
                className="w-full bg-[#0B0B0B] border border-white/10 px-3.5 py-2.5 text-xs text-[#F4F0E8] focus:outline-none focus:border-[#D91F2C]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-mono uppercase tracking-widest text-[#8F8E8B] block">WHATSAPP / NO. HP</label>
              <input
                type="tel"
                required
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                placeholder="0812xxxxxxxx"
                className="w-full bg-[#0B0B0B] border border-white/10 px-3.5 py-2.5 text-xs text-[#F4F0E8] focus:outline-none focus:border-[#D91F2C]"
              />
            </div>
          </div>
        </div>

        {/* Delivery Method */}
        <div className="p-6 sm:p-8 bg-[#141416] border border-white/10 space-y-4">
          <span className="text-[10px] text-[#D91F2C] font-mono tracking-widest uppercase block">
            LANGKAH 02
          </span>
          <h2 className="v9-display-title text-2xl text-[#F4F0E8]" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
            METODE PENERIMAAN
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setDeliveryMethod("PICKUP_VENUE")}
              className={`p-4 border text-left transition-colors ${
                deliveryMethod === "PICKUP_VENUE"
                  ? "border-[#D91F2C] bg-[#0B0B0B]"
                  : "border-white/10 bg-[#0B0B0B]/50 hover:border-white/20"
              }`}
            >
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#F4F0E8]">
                <MapPin className="w-4 h-4 text-[#D91F2C]" />
                <span>PICK-UP DI GOR UNY</span>
              </div>
              <p className="text-[10px] text-[#8F8E8B] mt-1">
                Ambil langsung di booth merchandise (Gratis).
              </p>
            </button>

            <button
              type="button"
              onClick={() => setDeliveryMethod("EXPEDITION")}
              className={`p-4 border text-left transition-colors ${
                deliveryMethod === "EXPEDITION"
                  ? "border-[#D91F2C] bg-[#0B0B0B]"
                  : "border-white/10 bg-[#0B0B0B]/50 hover:border-white/20"
              }`}
            >
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#F4F0E8]">
                <Truck className="w-4 h-4 text-[#D91F2C]" />
                <span>PENGIRIMAN EKSPEDISI</span>
              </div>
              <p className="text-[10px] text-[#8F8E8B] mt-1">
                Dikirim via JNE/J&T ke alamat rumah.
              </p>
            </button>
          </div>

          {deliveryMethod === "EXPEDITION" && (
            <div className="space-y-4 pt-4 border-t border-white/5">
              <div className="space-y-1">
                <label className="text-[10px] font-mono uppercase tracking-widest text-[#8F8E8B] block">WILAYAH TUJUAN</label>
                <select
                  value={shippingRegion}
                  onChange={(e) => setShippingRegion(e.target.value)}
                  className="w-full bg-[#0B0B0B] border border-white/10 px-3.5 py-2.5 text-xs text-[#F4F0E8] focus:outline-none focus:border-[#D91F2C]"
                >
                  <option value="DIY_JATENG">D.I. Yogyakarta & Jawa Tengah (Rp 15.000)</option>
                  <option value="JAWA">Pulau Jawa Lainnya (Rp 25.000)</option>
                  <option value="LUAR_JAWA">Luar Pulau Jawa (Rp 45.000)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-mono uppercase tracking-widest text-[#8F8E8B] block">ALAMAT LENGKAP PENGIRIMAN</label>
                <textarea
                  required
                  rows={2}
                  value={shippingAddress}
                  onChange={(e) => setShippingAddress(e.target.value)}
                  placeholder="Nama jalan, RT/RW, nomor rumah, kelurahan, kecamatan"
                  className="w-full bg-[#0B0B0B] border border-white/10 p-3 text-xs text-[#F4F0E8] focus:outline-none focus:border-[#D91F2C]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-[#8F8E8B] block">KOTA / KABUPATEN</label>
                  <input
                    type="text"
                    value={shippingCity}
                    onChange={(e) => setShippingCity(e.target.value)}
                    className="w-full bg-[#0B0B0B] border border-white/10 px-3.5 py-2.5 text-xs text-[#F4F0E8] focus:outline-none focus:border-[#D91F2C]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-[#8F8E8B] block">KODE POS</label>
                  <input
                    type="text"
                    value={shippingPostalCode}
                    onChange={(e) => setShippingPostalCode(e.target.value)}
                    className="w-full bg-[#0B0B0B] border border-white/10 px-3.5 py-2.5 text-xs text-[#F4F0E8] focus:outline-none focus:border-[#D91F2C]"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

      </div>

      {/* Right Column: Order Summary */}
      <div className="lg:col-span-5 space-y-6">
        <div className="p-6 sm:p-8 bg-[#141416] border border-white/10 space-y-6 sticky top-24">
          <span className="v9-overline text-[#D91F2C]">RINGKASAN PESANAN</span>

          {/* Cart Items List */}
          <div className="divide-y divide-white/10 max-h-60 overflow-y-auto pr-1">
            {items.map((i) => (
              <div key={i.variantId} className="py-3 flex justify-between gap-3 text-xs font-mono">
                <div>
                  <span className="text-[#F4F0E8] font-bold block">{i.name}</span>
                  <span className="text-[10px] text-[#8F8E8B]">
                    {i.size} × {i.quantity}
                  </span>
                </div>
                <span className="text-[#F4F0E8] font-bold">
                  {formatRupiah(i.price * i.quantity)}
                </span>
              </div>
            ))}
          </div>

          {/* Calculation */}
          <div className="border-t border-white/10 pt-4 space-y-2 text-xs font-mono">
            <div className="flex justify-between text-[#8F8E8B]">
              <span>SUBTOTAL PRODUK</span>
              <span>{formatRupiah(subtotal)}</span>
            </div>
            <div className="flex justify-between text-[#8F8E8B]">
              <span>ONGKOS KIRIM</span>
              <span>{deliveryMethod === "PICKUP_VENUE" ? "GRATIS" : formatRupiah(shippingCost)}</span>
            </div>
            <div className="flex justify-between text-[#F4F0E8] text-sm font-bold pt-2 border-t border-white/5">
              <span>TOTAL PEMBAYARAN</span>
              <span className="text-[#D91F2C]">{formatRupiah(finalTotal)}</span>
            </div>
          </div>

          {errorMessage && (
            <div className="p-3 bg-red-950/40 border border-red-500/30 text-red-300 text-xs font-mono">
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="v9-btn-red text-xs font-display font-black tracking-wider w-full py-4"
          >
            <span>{isSubmitting ? "MEMPROSES PESANAN..." : "KONFIRMASI PESANAN SEKARANG"}</span>
            <span>↗</span>
          </button>
        </div>
      </div>

    </form>
  );
}
