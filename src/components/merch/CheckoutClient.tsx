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
      <div className="py-20 text-center border-t border-b border-black/15 space-y-4">
        <h3 className="font-display text-4xl uppercase tracking-wider text-[#0B0B0B]">
          KERANJANG ANDA KOSONG
        </h3>
        <p className="text-sm text-[#5A5957] max-w-md mx-auto font-sans leading-relaxed">
          Silakan pilih produk merchandise resmi festival terlebih dahulu sebelum melanjutkan ke proses checkout.
        </p>
        <div className="pt-4">
          <Link
            href="/merch"
            className="font-display text-base uppercase tracking-wider text-white bg-[#0B0B0B] hover:bg-black px-8 py-3.5 inline-block shadow-sm"
          >
            LIHAT KATALOG MERCHANDISE ↗
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmitOrder} className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Form Details */}
        <div className="lg:col-span-7 space-y-10">
          
          {/* Contact Details */}
          <div className="space-y-4">
            <div className="border-b border-black/15 pb-3">
              <span className="font-technical text-xs uppercase font-bold tracking-widest text-[#D91F2C]">
                LANGKAH 01
              </span>
              <h3 className="font-display text-3xl uppercase tracking-wider text-[#0B0B0B]">
                INFORMASI PEMESAN
              </h3>
            </div>

            <div className="space-y-4 font-sans text-xs">
              <div className="space-y-1">
                <label className="font-technical uppercase text-[#77716D] block">Nama Lengkap *</label>
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Nama Lengkap Penonton"
                  className="w-full bg-white border border-black/25 px-4 py-3 text-[#0B0B0B] focus:outline-none focus:border-black"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-technical uppercase text-[#77716D] block">Email Aktif *</label>
                  <input
                    type="email"
                    required
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    placeholder="nama@email.com"
                    className="w-full bg-white border border-black/25 px-4 py-3 text-[#0B0B0B] focus:outline-none focus:border-black"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-technical uppercase text-[#77716D] block">Nomor WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="08123456789"
                    className="w-full bg-white border border-black/25 px-4 py-3 text-[#0B0B0B] focus:outline-none focus:border-black"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Method */}
          <div className="space-y-4">
            <div className="border-b border-black/15 pb-3">
              <span className="font-technical text-xs uppercase font-bold tracking-widest text-[#D91F2C]">
                LANGKAH 02
              </span>
              <h3 className="font-display text-3xl uppercase tracking-wider text-[#0B0B0B]">
                METODE PENGAMBILAN
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                onClick={() => setDeliveryMethod("PICKUP_VENUE")}
                className={`p-5 border cursor-pointer transition-all ring-corner-frame ${
                  deliveryMethod === "PICKUP_VENUE"
                    ? "border-black bg-white shadow-sm"
                    : "border-black/20 bg-white/40 hover:bg-white"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-display text-xl uppercase tracking-wider text-[#0B0B0B]">
                    PICK-UP GOR UNY
                  </h4>
                  <span className="font-technical text-xs font-bold text-emerald-700">GRATIS</span>
                </div>
                <p className="text-xs text-[#5A5957] font-sans leading-relaxed">
                  Ambil langsung di Official Merchandise Booth GOR UNY Yogyakarta saat hari festival (12–14 Des 2026).
                </p>
              </div>

              <div
                onClick={() => setDeliveryMethod("EXPEDITION")}
                className={`p-5 border cursor-pointer transition-all ring-corner-frame ${
                  deliveryMethod === "EXPEDITION"
                    ? "border-black bg-white shadow-sm"
                    : "border-black/20 bg-white/40 hover:bg-white"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-display text-xl uppercase tracking-wider text-[#0B0B0B]">
                    EKSPEDISI JNE / J&T
                  </h4>
                  <span className="font-technical text-xs font-bold text-[#D91F2C]">DARI RP 15.000</span>
                </div>
                <p className="text-xs text-[#5A5957] font-sans leading-relaxed">
                  Pengiriman reguler ke seluruh kota di Indonesia melalui ekspedisi terverifikasi.
                </p>
              </div>
            </div>

            {/* Expedition Details */}
            {deliveryMethod === "EXPEDITION" && (
              <div className="p-6 bg-white border border-black/20 space-y-4 text-xs font-sans">
                <div className="space-y-1">
                  <label className="font-technical uppercase text-[#77716D] block">Wilayah Pengiriman</label>
                  <select
                    value={shippingRegion}
                    onChange={(e) => setShippingRegion(e.target.value)}
                    className="w-full bg-[#FAF7F2] border border-black/20 px-3 py-2.5 text-xs font-technical focus:outline-none"
                  >
                    <option value="DIY_JATENG">D.I. Yogyakarta & Jawa Tengah (Rp 15.000)</option>
                    <option value="JAWA">Pulau Jawa Lainnya (Rp 25.000)</option>
                    <option value="LUAR_JAWA">Luar Pulau Jawa (Rp 45.000)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-technical uppercase text-[#77716D] block">Alamat Lengkap Tujuan *</label>
                  <textarea
                    required
                    rows={3}
                    value={shippingAddress}
                    onChange={(e) => setShippingAddress(e.target.value)}
                    placeholder="Nama jalan, nomor rumah, RT/RW, kelurahan, kecamatan"
                    className="w-full bg-[#FAF7F2] border border-black/20 px-3 py-2 text-xs focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-technical uppercase text-[#77716D] block">Kota / Kabupaten</label>
                    <input
                      type="text"
                      value={shippingCity}
                      onChange={(e) => setShippingCity(e.target.value)}
                      className="w-full bg-[#FAF7F2] border border-black/20 px-3 py-2 text-xs focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-technical uppercase text-[#77716D] block">Kode Pos</label>
                    <input
                      type="text"
                      value={shippingPostalCode}
                      onChange={(e) => setShippingPostalCode(e.target.value)}
                      placeholder="55281"
                      className="w-full bg-[#FAF7F2] border border-black/20 px-3 py-2 text-xs focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <label className="font-technical text-xs uppercase text-[#77716D] block">Catatan Tambahan (Opsional)</label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Contoh: Titip ke satpam, ukuran cadangan, dll."
              className="w-full bg-white border border-black/25 px-4 py-2.5 text-xs text-[#0B0B0B] focus:outline-none"
            />
          </div>

        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:col-span-5 bg-white border border-black/20 p-6 sm:p-8 space-y-6 ring-corner-frame">
          <div className="border-b border-black/15 pb-4">
            <span className="font-technical text-xs uppercase font-bold tracking-widest text-[#D91F2C]">
              RINGKASAN BELANJA
            </span>
            <h3 className="font-display text-3xl uppercase tracking-wider text-[#0B0B0B]">
              PESANAN ANDA
            </h3>
          </div>

          {/* Items List */}
          <div className="divide-y divide-black/10 max-h-72 overflow-y-auto pr-2">
            {items.map((i) => (
              <div key={i.variantId} className="py-3 flex items-center justify-between text-xs font-sans">
                <div>
                  <p className="font-bold text-[#0B0B0B]">{i.name}</p>
                  <p className="text-[#77716D] font-technical">
                    Ukuran: {i.size || "STD"} • {i.quantity} pcs
                  </p>
                </div>
                <span className="font-technical font-bold text-[#0B0B0B]">
                  {formatRupiah(i.price * i.quantity)}
                </span>
              </div>
            ))}
          </div>

          {/* Subtotal & Shipping */}
          <div className="pt-4 border-t border-black/15 space-y-2 font-technical text-xs">
            <div className="flex justify-between text-[#5A5957]">
              <span>SUBTOTAL ITEM:</span>
              <span className="font-bold text-[#0B0B0B]">{formatRupiah(subtotal)}</span>
            </div>
            <div className="flex justify-between text-[#5A5957]">
              <span>BIAYA PENGIRIMAN:</span>
              <span className="font-bold text-[#0B0B0B]">
                {shippingCost === 0 ? "GRATIS (PICK-UP)" : formatRupiah(shippingCost)}
              </span>
            </div>
            <div className="flex justify-between text-base font-bold text-[#0B0B0B] pt-2 border-t border-black/10">
              <span>TOTAL PEMBAYARAN:</span>
              <span className="text-[#D91F2C]">{formatRupiah(finalTotal)}</span>
            </div>
          </div>

          {/* Safety Gate Warning */}
          <div className="p-3.5 bg-black/5 border border-black/10 text-[11px] font-technical text-[#5A5957] leading-relaxed">
            🛡️ <strong>Sistem Simulasi Staging:</strong> Pembayaran riil saat ini dinonaktifkan demi keselamatan komersial. Pesanan akan tercatat di sistem sebagai pesanan menunggu konfirmasi pembayaran resmi.
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="p-3.5 bg-red-50 border border-red-200 text-red-800 text-xs font-technical flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-[#D91F2C] hover:bg-[#B81521] text-white font-display text-base uppercase tracking-wider transition-all disabled:opacity-50 shadow-md ring-1 ring-[#D91F2C]/50"
          >
            {isSubmitting ? "MEMPROSES PESANAN..." : "KONFIRMASI PESANAN SEKARANG ↗"}
          </button>
        </div>

      </div>
    </form>
  );
}
