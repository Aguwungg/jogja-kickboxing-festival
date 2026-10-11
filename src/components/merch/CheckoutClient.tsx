"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart, formatRupiah } from "@/lib/cart-context";
import { createOrderAction } from "@/app/(public)/checkout/actions";
import {
  ShoppingBag,
  CreditCard,
  Truck,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  QrCode,
  Building,
  ArrowLeft,
  ChevronRight,
  Info,
} from "lucide-react";

export default function CheckoutClient() {
  const router = useRouter();
  const { items, clearCart, subtotal, totalItems } = useCart();

  // Form State
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

  // Shipping cost calculation
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
            ? "Pickup Booth GOR Among Rogo"
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
        setErrorMessage(res.error || "Gagal memproses pesanan.");
        setIsSubmitting(false);
      }
    } catch (err: any) {
      setErrorMessage(err.message || "Terjadi kesalahan internal.");
      setIsSubmitting(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto py-20 text-center space-y-6">
        <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white/30 mx-auto">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <h2
          className="text-3xl font-black uppercase tracking-tight text-white"
          style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
        >
          KERANJANG BELANJA ANDA KOSONG
        </h2>
        <p className="text-sm text-[#90929A] max-w-md mx-auto">
          Anda belum memilih merchandise resmi JKB 2026. Temukan kaos, hoodie, atau sarung tinju resmi untuk melanjutkan checkout.
        </p>
        <Link
          href="/merch"
          className="inline-flex items-center gap-2 bg-[#D21F2B] hover:bg-[#b01822] text-white font-bold uppercase tracking-wider px-8 py-3.5 rounded-sm text-sm transition-all shadow-lg shadow-[#D21F2B]/20"
          style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Katalog Merch</span>
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Left Column: Checkout Inputs (7 cols) */}
      <div className="lg:col-span-7 space-y-8">
        {/* Error Alert */}
        {errorMessage && (
          <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-sm flex items-start gap-3 text-red-400 text-xs">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Step 1: Customer Contact Information */}
        <section className="bg-[#171719] border border-white/10 p-6 rounded-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-sm bg-[#D21F2B] text-white flex items-center justify-center font-bold text-xs font-mono">
                1
              </span>
              <h2
                className="text-lg font-black uppercase tracking-wider text-white"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                INFORMASI PEMESAN
              </h2>
            </div>
            <span className="text-[10px] text-white/40 uppercase font-mono">Wajib diisi</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="sm:col-span-2 space-y-1.5">
              <label className="text-white/80 font-bold uppercase tracking-wider block">
                Nama Lengkap *
              </label>
              <input
                type="text"
                required
                placeholder="Contoh: Dimas Wicaksono"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full bg-[#09090b] border border-white/10 rounded-sm p-3 text-white placeholder-white/30 focus:outline-none focus:border-[#D21F2B]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-white/80 font-bold uppercase tracking-wider block">
                Alamat Email (untuk E-Invoice) *
              </label>
              <input
                type="email"
                required
                placeholder="emailanda@domain.com"
                value={guestEmail}
                onChange={(e) => setGuestEmail(e.target.value)}
                className="w-full bg-[#09090b] border border-white/10 rounded-sm p-3 text-white placeholder-white/30 focus:outline-none focus:border-[#D21F2B]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-white/80 font-bold uppercase tracking-wider block">
                No. WhatsApp / HP *
              </label>
              <input
                type="tel"
                required
                placeholder="081234567890"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                className="w-full bg-[#09090b] border border-white/10 rounded-sm p-3 text-white placeholder-white/30 focus:outline-none focus:border-[#D21F2B]"
              />
            </div>
          </div>
        </section>

        {/* Step 2: Delivery Method */}
        <section className="bg-[#171719] border border-white/10 p-6 rounded-sm space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-sm bg-[#D21F2B] text-white flex items-center justify-center font-bold text-xs font-mono">
                2
              </span>
              <h2
                className="text-lg font-black uppercase tracking-wider text-white"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                METODE PENGAMBILAN & PENGIRIMAN
              </h2>
            </div>
          </div>

          {/* Delivery Method Selector Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Pickup Option */}
            <button
              type="button"
              onClick={() => setDeliveryMethod("PICKUP_VENUE")}
              className={`p-4 rounded-sm border text-left transition-all relative ${
                deliveryMethod === "PICKUP_VENUE"
                  ? "bg-[#D21F2B]/10 border-[#D21F2B] ring-1 ring-[#D21F2B]"
                  : "bg-white/5 border-white/10 hover:bg-white/10"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#D21F2B]" />
                  <span
                    className="text-sm font-bold uppercase tracking-wider text-white"
                    style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                  >
                    Ambil di Venue (GOR)
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-xs">
                  GRATIS / RP 0
                </span>
              </div>
              <p className="text-[11px] text-[#90929A] leading-relaxed">
                Booth Merch Resmi GOR Among Rogo (14-16 Agustus 2026). Tunjukkan barcode order.
              </p>
            </button>

            {/* Expedition Shipping Option */}
            <button
              type="button"
              onClick={() => setDeliveryMethod("EXPEDITION")}
              className={`p-4 rounded-sm border text-left transition-all relative ${
                deliveryMethod === "EXPEDITION"
                  ? "bg-[#D21F2B]/10 border-[#D21F2B] ring-1 ring-[#D21F2B]"
                  : "bg-white/5 border-white/10 hover:bg-white/10"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#D21F2B]" />
                  <span
                    className="text-sm font-bold uppercase tracking-wider text-white"
                    style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                  >
                    Kirim Ekspedisi
                  </span>
                </div>
                <span className="text-[10px] font-mono text-amber-400">
                  Mulai Rp 15.000
                </span>
              </div>
              <p className="text-[11px] text-[#90929A] leading-relaxed">
                Pengiriman via JNE atau J&T Express ke alamat rumah seluruh Indonesia.
              </p>
            </button>
          </div>

          {/* Details for Expedition */}
          {deliveryMethod === "EXPEDITION" && (
            <div className="space-y-4 pt-3 border-t border-white/10 text-xs animate-in fade-in duration-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-white/80 font-bold uppercase tracking-wider block">
                    Wilayah Tujuan *
                  </label>
                  <select
                    value={shippingRegion}
                    onChange={(e) => setShippingRegion(e.target.value)}
                    className="w-full bg-[#09090b] border border-white/10 rounded-sm p-3 text-white focus:outline-none focus:border-[#D21F2B]"
                  >
                    <option value="DIY_JATENG">D.I. Yogyakarta & Jawa Tengah (+ Rp 15.000)</option>
                    <option value="JAWA">Pulau Jawa Lainnya (DKI, Jabar, Jatim) (+ Rp 25.000)</option>
                    <option value="LUAR_JAWA">Luar Pulau Jawa (+ Rp 45.000)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-white/80 font-bold uppercase tracking-wider block">
                    Kurir Pilihan *
                  </label>
                  <select
                    value={courierName}
                    onChange={(e) => setCourierName(e.target.value)}
                    className="w-full bg-[#09090b] border border-white/10 rounded-sm p-3 text-white focus:outline-none focus:border-[#D21F2B]"
                  >
                    <option value="JNE Regular">JNE Regular (Est. 2-3 Hari)</option>
                    <option value="J&T Express">J&T Express (Est. 1-3 Hari)</option>
                  </select>
                </div>

                <div className="sm:col-span-2 space-y-1.5">
                  <label className="text-white/80 font-bold uppercase tracking-wider block">
                    Alamat Lengkap (Jalan, RT/RW, No. Rumah, Kecamatan) *
                  </label>
                  <textarea
                    required
                    rows={2}
                    placeholder="Jl. Solo Km 8 No. 12, Sleman..."
                    value={shippingAddress}
                    onChange={(e) => setShippingAddress(e.target.value)}
                    className="w-full bg-[#09090b] border border-white/10 rounded-sm p-3 text-white placeholder-white/30 focus:outline-none focus:border-[#D21F2B]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-white/80 font-bold uppercase tracking-wider block">
                    Kota / Kabupaten *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Yogyakarta"
                    value={shippingCity}
                    onChange={(e) => setShippingCity(e.target.value)}
                    className="w-full bg-[#09090b] border border-white/10 rounded-sm p-3 text-white placeholder-white/30 focus:outline-none focus:border-[#D21F2B]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-white/80 font-bold uppercase tracking-wider block">
                    Kode Pos *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="55281"
                    value={shippingPostalCode}
                    onChange={(e) => setShippingPostalCode(e.target.value)}
                    className="w-full bg-[#09090b] border border-white/10 rounded-sm p-3 text-white placeholder-white/30 focus:outline-none focus:border-[#D21F2B]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Details for On-Site Pickup */}
          {deliveryMethod === "PICKUP_VENUE" && (
            <div className="bg-[#09090b] border border-white/5 p-4 rounded-sm flex items-start gap-3 text-xs text-[#90929A]">
              <Info className="w-4 h-4 text-[#D21F2B] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block mb-0.5">
                  Lokasi Booth Pengambilan On-Site:
                </strong>
                GOR Among Rogo, Hall Barat Lantai 1 (Dekat Pintu Masuk VIP & Media). Jam buka booth: 09:00 - 22:00 WIB selama tanggal 14, 15, dan 16 Agustus 2026.
              </div>
            </div>
          )}
        </section>

        {/* Step 3: Payment Method (Midtrans Sandbox Simulator) */}
        <section className="bg-[#171719] border border-white/10 p-6 rounded-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-sm bg-[#D21F2B] text-white flex items-center justify-center font-bold text-xs font-mono">
                3
              </span>
              <h2
                className="text-lg font-black uppercase tracking-wider text-white"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                METODE PEMBAYARAN (MIDTRANS SANDBOX)
              </h2>
            </div>
            <span className="text-[10px] text-emerald-400 font-mono font-bold bg-emerald-500/10 px-2 py-0.5 rounded-xs">
              SIMULASI AKTIF
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              type="button"
              onClick={() => setPaymentMethod("QRIS")}
              className={`p-3.5 rounded-sm border text-left transition-all ${
                paymentMethod === "QRIS"
                  ? "bg-[#D21F2B]/10 border-[#D21F2B] ring-1 ring-[#D21F2B]"
                  : "bg-white/5 border-white/10 hover:bg-white/10"
              }`}
            >
              <QrCode className="w-5 h-5 text-[#D21F2B] mb-1.5" />
              <div className="text-xs font-bold text-white uppercase">QRIS Instant</div>
              <div className="text-[10px] text-[#90929A]">BCA, GoPay, OVO, ShopeePay</div>
            </button>

            <button
              type="button"
              onClick={() => setPaymentMethod("VA_BANK")}
              className={`p-3.5 rounded-sm border text-left transition-all ${
                paymentMethod === "VA_BANK"
                  ? "bg-[#D21F2B]/10 border-[#D21F2B] ring-1 ring-[#D21F2B]"
                  : "bg-white/5 border-white/10 hover:bg-white/10"
              }`}
            >
              <Building className="w-5 h-5 text-[#D21F2B] mb-1.5" />
              <div className="text-xs font-bold text-white uppercase">Virtual Account</div>
              <div className="text-[10px] text-[#90929A]">BCA, Mandiri, BNI, BRI</div>
            </button>

            <button
              type="button"
              onClick={() => setPaymentMethod("CREDIT_CARD")}
              className={`p-3.5 rounded-sm border text-left transition-all ${
                paymentMethod === "CREDIT_CARD"
                  ? "bg-[#D21F2B]/10 border-[#D21F2B] ring-1 ring-[#D21F2B]"
                  : "bg-white/5 border-white/10 hover:bg-white/10"
              }`}
            >
              <CreditCard className="w-5 h-5 text-[#D21F2B] mb-1.5" />
              <div className="text-xs font-bold text-white uppercase">Kartu Kredit / Debit</div>
              <div className="text-[10px] text-[#90929A]">Visa, Mastercard, JCB</div>
            </button>
          </div>

          {/* Sandbox Info */}
          <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-sm text-[11px] text-amber-300 flex items-start gap-2">
            <Info className="w-4 h-4 shrink-0 mt-0.5" />
            <span>
              <strong>Lingkungan Demo / Sandbox:</strong> Klik "Konfirmasi & Bayar Pesanan" akan langsung menyetujui transaksi dan mengurangi inventaris secara transaksional di database.
            </span>
          </div>

          {/* Notes Input */}
          <div className="pt-2 text-xs space-y-1.5">
            <label className="text-white/70 block">
              Catatan Khusus untuk Panitia / Kurir (Opsional)
            </label>
            <input
              type="text"
              placeholder="Contoh: Titipkan di satpam / Hubungi via WA sebelum sampai"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-[#09090b] border border-white/10 rounded-sm p-2.5 text-white placeholder-white/30 focus:outline-none focus:border-[#D21F2B]"
            />
          </div>
        </section>
      </div>

      {/* Right Column: Order Summary & Pay CTA (5 cols) */}
      <div className="lg:col-span-5 space-y-6">
        <div className="bg-[#171719] border border-white/10 p-6 rounded-sm space-y-6 sticky top-28">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <h2
              className="text-lg font-black uppercase tracking-wider text-white"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              RINGKASAN PESANAN ({totalItems})
            </h2>
            <Link
              href="/merch"
              className="text-xs text-[#90929A] hover:text-white underline transition-colors"
            >
              Ubah Item
            </Link>
          </div>

          {/* Items Breakdown */}
          <div className="space-y-3.5 max-h-72 overflow-y-auto pr-1">
            {items.map((item) => (
              <div
                key={item.variantId}
                className="flex items-center gap-3 bg-[#09090b]/60 border border-white/5 p-2.5 rounded-sm"
              >
                <div className="relative w-14 h-14 bg-black/50 rounded-xs overflow-hidden shrink-0 border border-white/10">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-white truncate">{item.name}</h4>
                  <div className="flex items-center gap-2 mt-0.5 text-[10px] text-[#90929A]">
                    {item.size && (
                      <span className="font-mono bg-white/10 px-1 py-0.2 rounded-xs text-white/80">
                        {item.size}
                      </span>
                    )}
                    <span>Qty: {item.quantity}</span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-amber-400">
                  {formatRupiah(item.price * item.quantity)}
                </span>
              </div>
            ))}
          </div>

          {/* Costs Calculation */}
          <div className="space-y-2 pt-4 border-t border-white/10 text-xs font-sans">
            <div className="flex justify-between text-[#90929A]">
              <span>Subtotal Merchandise</span>
              <span className="font-mono text-white">{formatRupiah(subtotal)}</span>
            </div>
            <div className="flex justify-between text-[#90929A]">
              <span>Ongkos Kirim ({deliveryMethod === "PICKUP_VENUE" ? "Pick-Up Venue" : courierName})</span>
              <span className="font-mono text-white">
                {shippingCost === 0 ? (
                  <span className="text-emerald-400 font-bold uppercase">GRATIS</span>
                ) : (
                  formatRupiah(shippingCost)
                )}
              </span>
            </div>
            <div className="flex justify-between text-[#90929A]">
              <span>Biaya Layanan & Pembayaran</span>
              <span className="font-mono text-emerald-400 font-bold uppercase">RP 0 (FREE)</span>
            </div>

            <div className="flex justify-between items-baseline pt-4 border-t border-white/10 text-base font-bold text-white">
              <span
                className="uppercase tracking-wider"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                Total Pembayaran
              </span>
              <span className="text-2xl font-black text-[#D21F2B] font-mono">
                {formatRupiah(finalTotal)}
              </span>
            </div>
          </div>

          {/* Submit CTA */}
          <div className="pt-2 space-y-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#D21F2B] hover:bg-[#b01822] disabled:opacity-50 text-white font-bold uppercase tracking-wider py-4 px-6 rounded-sm text-sm transition-all shadow-xl shadow-[#D21F2B]/20 flex items-center justify-center gap-2"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              {isSubmitting ? (
                <span>Memproses Pesanan...</span>
              ) : (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Konfirmasi & Bayar Pesanan</span>
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#90929A]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Garansi Transaksi Aman & Data Terproteksi</span>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
