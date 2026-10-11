"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { formatRupiah } from "@/lib/currency";
import { purchasePPVPassAction } from "@/app/(public)/ppv/actions";
import {
  Tv,
  Radio,
  Play,
  Check,
  ShieldCheck,
  Clock,
  Sparkles,
  Flame,
  Zap,
  Volume2,
  Video,
  Layers,
  Lock,
  ArrowRight,
  Smartphone,
  MonitorPlay,
  HelpCircle,
  X,
  CreditCard,
  QrCode,
  Building,
} from "lucide-react";

interface PPVProduct {
  id: string;
  name: string;
  slug: string;
  tier: string;
  badge: string | null;
  description: string;
  features: string | null;
  resolution: string;
  price: number;
  order: number;
  isActive: boolean;
}

interface Props {
  products: PPVProduct[];
}

export default function PpvLandingClient({ products }: Props) {
  const router = useRouter();

  // Quick code input
  const [accessCodeInput, setAccessCodeInput] = useState("");
  const [codeError, setCodeError] = useState<string | null>(null);

  // Purchase modal
  const [selectedProduct, setSelectedProduct] = useState<PPVProduct | null>(null);
  const [customerName, setCustomerName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("QRIS");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [purchaseError, setPurchaseError] = useState<string | null>(null);

  // Live countdown state (to 12 December 2026, 09:00 WIB)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-12-12T09:00:00+07:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleQuickWatch = (e: React.FormEvent) => {
    e.preventDefault();
    setCodeError(null);
    if (!accessCodeInput.trim()) {
      setCodeError("Harap masukkan kode akses tiket Anda.");
      return;
    }
    router.push(`/ppv/watch?code=${encodeURIComponent(accessCodeInput.trim().toUpperCase())}`);
  };

  const handleOpenPurchase = (product: PPVProduct) => {
    setSelectedProduct(product);
    setPurchaseError(null);
  };

  const handleConfirmPurchase = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProduct) return;
    setPurchaseError(null);

    if (!customerName.trim() || !guestEmail.trim() || !customerPhone.trim()) {
      setPurchaseError("Harap lengkapi semua kolom kontak.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await purchasePPVPassAction({
        ppvProductId: selectedProduct.id,
        customerName,
        guestEmail,
        customerPhone,
        paymentMethod,
      });

      if (res.success && res.accessCode) {
        setSelectedProduct(null);
        router.push(res.watchUrl);
      } else {
        setPurchaseError(res.error || "Gagal memproses transaksi.");
        setIsSubmitting(false);
      }
    } catch (err: any) {
      setPurchaseError(err.message || "Terjadi kesalahan internal.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full space-y-20">
      {/* Live Countdown & Quick Access Bar */}
      <section className="bg-[#171719] border border-white/10 rounded-sm p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#EF3340]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Countdown Side (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EF3340]/10 border border-[#EF3340]/30 text-[#EF3340] text-xs font-bold uppercase tracking-wider font-mono">
              <span className="w-2 h-2 rounded-full bg-[#EF3340] animate-pulse" />
              <span>LIVE BROADCAST COUNTDOWN • 12 DESEMBER 2026</span>
            </div>

            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-white tracking-tight leading-tight"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              HITUNG MUNDUR SIARAN RESMI DARI GOR UNY, YOGYAKARTA
            </h2>

            {/* Countdown Blocks */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-md pt-2">
              {[
                { label: "HARI", value: timeLeft.days },
                { label: "JAM", value: timeLeft.hours },
                { label: "MENIT", value: timeLeft.minutes },
                { label: "DETIK", value: timeLeft.seconds },
              ].map((slot) => (
                <div
                  key={slot.label}
                  className="bg-[#09090b] border border-white/10 p-3 rounded-sm text-center"
                >
                  <span className="text-2xl sm:text-3xl font-black text-amber-400 font-mono block">
                    {String(slot.value).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] text-[#90929A] font-bold tracking-widest block uppercase mt-0.5">
                    {slot.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Access Code Form (5 cols) */}
          <div className="lg:col-span-5 bg-[#09090b] border border-white/10 p-5 rounded-sm space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white">
              <Lock className="w-4 h-4 text-[#EF3340]" />
              <span>PUNYA KODE TIKET STREAMING?</span>
            </div>
            <p className="text-xs text-[#90929A]">
              Masukkan kode akses unik Anda untuk langsung membuka live player berdefinisi tinggi.
            </p>

            <form onSubmit={handleQuickWatch} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Contoh: JKB-VIP-2026"
                  value={accessCodeInput}
                  onChange={(e) => setAccessCodeInput(e.target.value)}
                  className="flex-1 bg-[#171719] border border-white/10 rounded-sm px-3 py-2 text-xs text-white placeholder-white/30 font-mono uppercase focus:outline-none focus:border-[#EF3340]"
                />
                <button
                  type="submit"
                  className="bg-[#EF3340] hover:bg-[#D91F2C] text-white px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-all shrink-0 flex items-center gap-1 shadow-md shadow-[#EF3340]/20"
                >
                  <span>Tonton</span>
                  <Play className="w-3 h-3 fill-white" />
                </button>
              </div>

              {codeError && (
                <span className="text-red-400 text-[11px] block">{codeError}</span>
              )}

              {/* Demo Hint */}
              <div className="flex items-center gap-1.5 pt-1 text-[11px] text-white/50 font-mono">
                <span>Demo Pass (QA Staging):</span>
                <button
                  type="button"
                  onClick={() => setAccessCodeInput("JKB-VIP-2026")}
                  className="text-amber-400 hover:underline"
                >
                  JKB-VIP-2026
                </button>
                <span>/</span>
                <button
                  type="button"
                  onClick={() => setAccessCodeInput("JKB-PPV-DEMO88")}
                  className="text-amber-400 hover:underline"
                >
                  JKB-PPV-DEMO88
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* BigMo Celebrity Clash & Main Event Feature Card */}
      <section className="relative rounded-sm overflow-hidden border border-white/10 bg-[#171719]">
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <Image
            src="/images/jkb/hero-boxing.jpg"
            alt="BigMo PPV Main Event Clash"
            fill
            className="object-cover object-center opacity-40 hover:scale-105 transition-transform duration-700"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171719] via-[#171719]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#171719] via-transparent to-black/80" />

          {/* Badge & Info on Image */}
          <div className="absolute bottom-6 left-6 right-6 sm:left-10 sm:right-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-xs bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SPECIAL EXHIBITION & CHAMPIONSHIP FINALS</span>
              </div>
              <h3
                className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-none"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                BIGMO CREATOR CLASH & <span className="text-[#EF3340]">4 TITLE FIGHTS</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#90929A] leading-relaxed">
                Partai ekshibisi selebriti terakbar 2026 serta 4 pertarungan perebutan sabuk emas Redy Championship 2. Disiarkan eksklusif tanpa jeda iklan televisi konvensional.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/ppv/watch?code=JKB-VIP-2026"
                className="bg-[#EF3340] hover:bg-[#D91F2C] text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-sm transition-all shadow-lg shadow-[#EF3340]/20 flex items-center gap-2"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                <MonitorPlay className="w-4 h-4" />
                <span>Masuk Live Player Demo</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section className="space-y-8" id="pricing-tiers">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-widest text-[#EF3340]">
            <Flame className="w-4 h-4" />
            <span>PILIH PAKET BROADCAST DIGITAL</span>
          </div>
          <h2
            className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            PAKET NONTON RESMI <span className="text-[#EF3340]">PAY-PER-VIEW</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#90929A]">
            Dapatkan akses instan ke siaran resolusi tinggi. Pembayaran aman via QRIS, Virtual Account, dan Kartu Kredit.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {products.map((product) => {
            const isFeatured = product.tier === "ALL_ACCESS";
            const isVip = product.tier === "VIP";
            const featureList = product.features
              ? product.features.split("|").map((f) => f.trim())
              : [];

            return (
              <div
                key={product.id}
                className={`bg-[#171719] border rounded-sm p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isFeatured
                    ? "border-[#EF3340] ring-1 ring-[#EF3340] shadow-2xl shadow-[#EF3340]/10 scale-[1.02]"
                    : isVip
                    ? "border-amber-500/40 hover:border-amber-400"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                {/* Badge Header */}
                {product.badge && (
                  <div
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider font-mono shadow-md ${
                      isFeatured
                        ? "bg-[#EF3340] text-white"
                        : isVip
                        ? "bg-amber-500 text-black font-black"
                        : "bg-white/10 text-white"
                    }`}
                  >
                    {product.badge}
                  </div>
                )}

                <div className="space-y-6">
                  {/* Title & Tier */}
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#EF3340] block mb-1">
                      {product.tier.replace("_", " ")}
                    </span>
                    <h3
                      className="text-2xl font-black uppercase text-white tracking-tight leading-tight"
                      style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                    >
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#90929A] mt-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="py-4 border-y border-white/10">
                    <span className="text-[10px] text-white/50 block uppercase font-mono">
                      Harga Akses Digital
                    </span>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="text-3xl sm:text-4xl font-black text-amber-400 font-mono">
                        {formatRupiah(product.price)}
                      </span>
                      <span className="text-xs text-white/40 font-mono">/tiket</span>
                    </div>
                    <span className="text-[11px] text-emerald-400 font-mono block mt-1">
                      Kualitas: {product.resolution}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 text-xs text-white/80">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-white/40 block">
                      Benefit Termasuk:
                    </span>
                    {featureList.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Buy Button & Approval Lock */}
                <div className="pt-8 mt-6 border-t border-white/5">
                  {product.tier === "SINGLE_DAY" ? (
                    <>
                      <button
                        type="button"
                        onClick={() => handleOpenPurchase(product)}
                        className="w-full py-3.5 px-4 rounded-sm text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg bg-[#EF3340] hover:bg-[#D91F2C] text-white shadow-[#EF3340]/20"
                        style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                      >
                        <span>Beli Tiket Streaming BigMo (Rp 10.000)</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <span className="text-[10px] text-emerald-400 text-center block mt-2 font-mono">
                        ✓ Paket Provisional Disetujui (BigMo Exhibition)
                      </span>
                    </>
                  ) : (
                    <>
                      <div className="mb-2 p-2 rounded-xs bg-amber-500/10 border border-amber-500/20 text-center">
                        <span className="text-[10px] font-mono font-bold text-amber-300 block uppercase">
                          [TERTUNDA / DRAFT]
                        </span>
                        <span className="text-[10px] text-[#90929A] block leading-tight mt-0.5">
                          Menunggu persetujuan komersial promotor
                        </span>
                      </div>
                      <button
                        type="button"
                        disabled
                        className="w-full py-3 px-4 rounded-sm text-xs font-bold uppercase tracking-wider bg-white/5 text-white/30 border border-white/10 cursor-not-allowed flex items-center justify-center gap-2"
                        style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                      >
                        <Lock className="w-3.5 h-3.5" />
                        <span>Penjualan Publik Ditangguhkan</span>
                      </button>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Broadcast Quality & Multi-Angle Technology Section */}
      <section className="bg-[#171719]/40 border border-white/10 rounded-sm p-8 sm:p-12 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-1">
          <span className="text-xs uppercase font-bold tracking-widest text-[#EF3340]">
            TEKNOLOGI BROADCAST
          </span>
          <h3
            className="text-2xl sm:text-4xl font-black uppercase text-white"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            STANDAR PENYIARAN TARUNG KELAS DUNIA
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#09090b] border border-white/5 p-5 rounded-sm space-y-3">
            <div className="w-10 h-10 rounded-sm bg-[#EF3340]/10 border border-[#EF3340]/30 flex items-center justify-center text-[#EF3340]">
              <Video className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold uppercase text-white tracking-wide">
              Multi-Cam Ringside Switcher
            </h4>
            <p className="text-xs text-[#90929A] leading-relaxed">
              Pilih bebas 3 sudut pandang kamera: Sudut Ringside, Overhead Canvas bird-eye, dan Walkout Locker Room.
            </p>
          </div>

          <div className="bg-[#09090b] border border-white/5 p-5 rounded-sm space-y-3">
            <div className="w-10 h-10 rounded-sm bg-[#EF3340]/10 border border-[#EF3340]/30 flex items-center justify-center text-[#EF3340]">
              <Volume2 className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold uppercase text-white tracking-wide">
              Dual Commentary Track
            </h4>
            <p className="text-xs text-[#90929A] leading-relaxed">
              Opsi audio ganda: Dengar analisis mendalam komentator laga atau rasakan dentuman pukulan murni atmosfer arena.
            </p>
          </div>

          <div className="bg-[#09090b] border border-white/5 p-5 rounded-sm space-y-3">
            <div className="w-10 h-10 rounded-sm bg-[#EF3340]/10 border border-[#EF3340]/30 flex items-center justify-center text-[#EF3340]">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold uppercase text-white tracking-wide">
              Ultra Low-Latency CDN
            </h4>
            <p className="text-xs text-[#90929A] leading-relaxed">
              Didukung CDN multi-edge server Indonesia dengan latensi sub-detik untuk pengalaman nonton real-time tanpa delay.
            </p>
          </div>

          <div className="bg-[#09090b] border border-white/5 p-5 rounded-sm space-y-3">
            <div className="w-10 h-10 rounded-sm bg-[#EF3340]/10 border border-[#EF3340]/30 flex items-center justify-center text-[#EF3340]">
              <MonitorPlay className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold uppercase text-white tracking-wide">
              Cross-Platform & Smart TV
            </h4>
            <p className="text-xs text-[#90929A] leading-relaxed">
              Streaming lancar di browser Smart TV, Android TV, Apple AirPlay, tablet iPad, hingga smartphone iOS/Android.
            </p>
          </div>
        </div>
      </section>

      {/* Streaming FAQ Section */}
      <section className="max-w-3xl mx-auto space-y-6">
        <div className="text-center space-y-1">
          <span className="text-xs uppercase font-bold tracking-widest text-[#EF3340]">
            PERTANYAAN UMUM
          </span>
          <h3
            className="text-2xl sm:text-3xl font-black uppercase text-white"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            FAQ SEPUTAR LIVE STREAMING JKB 2026
          </h3>
        </div>

        <div className="space-y-3">
          {[
            {
              q: "Berapa kecepatan internet minimal untuk menonton siaran 1080p 60FPS?",
              a: "Kami merekomendasikan kecepatan koneksi internet stabil minimal 10 Mbps untuk resolusi 1080p 60FPS dan 5 Mbps untuk 720p. Player kami dilengkapi adaptive bitrate otomatis.",
            },
            {
              q: "Apakah siaran dapat ditonton ulang (Replay VOD) jika terlewat jam tayang?",
              a: "Ya! Seluruh pemegang tiket PPV mendapatkan akses rekaman penuh (Video-on-Demand) hingga 30 hari kalender setelah festival berakhir.",
            },
            {
              q: "Berapa perangkat yang dapat menonton secara bersamaan dengan 1 kode tiket?",
              a: "Paket Starter & 3-Day All Access mengizinkan hingga 2 perangkat bersamaan, sedangkan paket VIP Ringside mengizinkan hingga 3 perangkat bersamaan.",
            },
            {
              q: "Bagaimana cara mengakses live stream setelah membayar?",
              a: "Kode akses tiket (misal: JKB-PPV-892110) akan langsung muncul di layar konfirmasi dan dikirim otomatis via WhatsApp & Email. Masukkan kode tersebut di formulir akses cepat di atas.",
            },
          ].map((faq, i) => (
            <div
              key={i}
              className="bg-[#171719] border border-white/5 p-4 sm:p-5 rounded-sm space-y-1.5"
            >
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#EF3340] shrink-0" />
                <span>{faq.q}</span>
              </h4>
              <p className="text-xs text-[#90929A] pl-6 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Purchase Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#171719] border border-white/15 rounded-sm max-w-lg w-full p-6 text-[#F6F3EC] shadow-2xl relative space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div>
                <span className="text-[10px] text-[#EF3340] font-mono font-bold uppercase tracking-wider block">
                  CHECKOUT TIKET PPV STREAMING
                </span>
                <h3
                  className="text-xl font-black uppercase text-white"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  {selectedProduct.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="w-8 h-8 rounded-sm border border-white/10 flex items-center justify-center text-white/50 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Price Snapshot */}
            <div className="bg-[#09090b] border border-white/10 p-3.5 rounded-sm flex items-center justify-between">
              <div>
                <span className="text-xs text-[#90929A] block">Total Pembayaran:</span>
                <span className="text-2xl font-black text-amber-400 font-mono">
                  {formatRupiah(selectedProduct.price)}
                </span>
              </div>
              <span className="text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-xs">
                {selectedProduct.resolution}
              </span>
            </div>

            {/* Error Alert */}
            {purchaseError && (
              <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-sm text-red-400 text-xs">
                {purchaseError}
              </div>
            )}

            {/* Contact Form */}
            <form onSubmit={handleConfirmPurchase} className="space-y-4 text-xs font-sans">
              <div className="space-y-1.5">
                <label className="text-white/80 font-bold uppercase tracking-wider block">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Dimas Wicaksono"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-[#09090b] border border-white/10 rounded-sm p-2.5 text-white focus:outline-none focus:border-[#EF3340]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-white/80 font-bold uppercase tracking-wider block">
                    Email (Kirim Tiket & VOD) *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="dimas@gmail.com"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    className="w-full bg-[#09090b] border border-white/10 rounded-sm p-2.5 text-white focus:outline-none focus:border-[#EF3340]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-white/80 font-bold uppercase tracking-wider block">
                    No. WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="081234567890"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full bg-[#09090b] border border-white/10 rounded-sm p-2.5 text-white focus:outline-none focus:border-[#EF3340]"
                  />
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="space-y-1.5 pt-2">
                <label className="text-white/80 font-bold uppercase tracking-wider block">
                  Metode Pembayaran (Simulasi Staging Sandbox):
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("QRIS")}
                    className={`p-2.5 rounded-sm border text-left transition-all ${
                      paymentMethod === "QRIS"
                        ? "bg-[#EF3340]/10 border-[#EF3340] ring-1 ring-[#EF3340]"
                        : "bg-white/5 border-white/10"
                    }`}
                  >
                    <QrCode className="w-4 h-4 text-[#EF3340] mb-1" />
                    <span className="text-[10px] font-bold text-white block">QRIS</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("VIRTUAL_ACCOUNT")}
                    className={`p-2.5 rounded-sm border text-left transition-all ${
                      paymentMethod === "VIRTUAL_ACCOUNT"
                        ? "bg-[#EF3340]/10 border-[#EF3340] ring-1 ring-[#EF3340]"
                        : "bg-white/5 border-white/10"
                    }`}
                  >
                    <Building className="w-4 h-4 text-[#EF3340] mb-1" />
                    <span className="text-[10px] font-bold text-white block">Virtual Account</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("CREDIT_CARD")}
                    className={`p-2.5 rounded-sm border text-left transition-all ${
                      paymentMethod === "CREDIT_CARD"
                        ? "bg-[#EF3340]/10 border-[#EF3340] ring-1 ring-[#EF3340]"
                        : "bg-white/5 border-white/10"
                    }`}
                  >
                    <CreditCard className="w-4 h-4 text-[#EF3340] mb-1" />
                    <span className="text-[10px] font-bold text-white block">Kartu Kredit</span>
                  </button>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 space-y-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#EF3340] hover:bg-[#D91F2C] disabled:opacity-50 text-white font-bold uppercase tracking-wider py-3.5 px-4 rounded-sm transition-all shadow-lg shadow-[#EF3340]/20 flex items-center justify-center gap-2"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  {isSubmitting ? (
                    <span>Mengaktifkan Tiket Streaming...</span>
                  ) : (
                    <>
                      <Zap className="w-4 h-4" />
                      <span>Bayar & Aktifkan Tiket Sekarang &rarr;</span>
                    </>
                  )}
                </button>
                <div className="flex items-center justify-center gap-1 text-[10px] text-white/40">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Simulasi Gateway Internal (Staging Environment)</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
