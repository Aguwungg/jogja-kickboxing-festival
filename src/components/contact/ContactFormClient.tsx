"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle, Send } from "lucide-react";

export default function ContactFormClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Kemitraan & Sponsor",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setFeedback(data.error || "Gagal mengirim pesan. Silakan periksa formulir Anda.");
        return;
      }

      setStatus("success");
      setFeedback(data.message || "Pesan Anda berhasil dikirim ke panitia JKBF 2026.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "Kemitraan & Sponsor",
        message: "",
      });
    } catch {
      setStatus("error");
      setFeedback("Terjadi gangguan koneksi jaringan. Silakan coba kembali.");
    }
  };

  return (
    <div className="border border-white/10 bg-[#121212] p-8 sm:p-12 space-y-8 font-sans">
      
      <div className="space-y-2 border-b border-white/10 pb-6">
        <span className="text-[11px] text-[#D91F2C] font-technical tracking-widest uppercase block font-bold">
          FORMULIR KORESPONDENSI
        </span>
        <h3 className="text-3xl sm:text-4xl font-display uppercase tracking-wide text-white">
          KIRIM PESAN LANGSUNG
        </h3>
        <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-sans">
          Sampaikan proposal sponsorship, pertanyaan umum pengunjung, atau permohonan liputan resmi media.
        </p>
      </div>

      {status === "success" && (
        <div className="p-4 bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-technical space-y-1">
          <p className="font-bold flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> PESAN BERHASIL TERKIRIM</p>
          <p className="text-white/80">{feedback}</p>
        </div>
      )}

      {status === "error" && (
        <div className="p-4 bg-red-950/60 border border-red-500/40 text-red-300 text-xs font-technical space-y-1">
          <p className="font-bold flex items-center gap-2 text-sm"><AlertCircle className="w-4 h-4 text-red-400" /> GAGAL MENGIRIM PESAN</p>
          <p className="text-white/80">{feedback}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <label className="text-xs font-technical uppercase tracking-wider text-white/60 block">Nama Lengkap / Instansi *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Masukkan nama Anda atau perwakilan instansi"
            className="w-full bg-[#181818] border border-white/10 px-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#D91F2C] transition-colors"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="text-xs font-technical uppercase tracking-wider text-white/60 block">Email Resmi *</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="nama@domain.com"
              className="w-full bg-[#181818] border border-white/10 px-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#D91F2C] transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-technical uppercase tracking-wider text-white/60 block">Nomor WhatsApp *</label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="08xxxxxxxxxx"
              className="w-full bg-[#181818] border border-white/10 px-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#D91F2C] transition-colors"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-technical uppercase tracking-wider text-white/60 block">Kategori Topik</label>
          <select
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full bg-[#181818] border border-white/10 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#D91F2C] transition-colors"
          >
            <option value="Kemitraan & Sponsor" className="bg-[#181818] text-white">Kemitraan & Sponsorship</option>
            <option value="Media & Peliputan" className="bg-[#181818] text-white">Media Pers & Peliputan</option>
            <option value="Tiket & Akses" className="bg-[#181818] text-white">Pertanyaan Tiket & Akses</option>
            <option value="Kompetisi & Atlet" className="bg-[#181818] text-white">Kompetisi Kickboxing & Sasana</option>
            <option value="Lainnya" className="bg-[#181818] text-white">Pertanyaan Umum Lainnya</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-technical uppercase tracking-wider text-white/60 block">Pesan / Uraian Rincian *</label>
          <textarea
            required
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tuliskan pesan, pertanyaan, atau detail proposal kemitraan Anda..."
            className="w-full bg-[#181818] border border-white/10 px-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#D91F2C] transition-colors resize-y"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full flex items-center justify-center gap-3 font-display text-base uppercase tracking-wider text-white bg-[#D91F2C] hover:bg-[#B31520] disabled:opacity-50 py-4 transition-colors"
        >
          {status === "loading" ? (
            "MENGIRIM PESAN..."
          ) : (
            <>
              KIRIM PESAN KE PANITIA <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

    </div>
  );
}
