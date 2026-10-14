"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";

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
    <div className="border border-black/15 bg-white/70 p-8 sm:p-10 space-y-6 font-sans">
      
      <div className="space-y-1">
        <span className="text-[10px] text-[#D91F2C] font-mono tracking-widest uppercase block font-bold">
          FORMULIR PESAN
        </span>
        <h3
          className="text-2xl sm:text-3xl font-black uppercase text-[#0B0B0B]"
          style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
        >
          KIRIM PESAN LANGSUNG
        </h3>
        <p className="text-xs text-[#5A5957] leading-relaxed">
          Tim panitia pelaksana akan membalas pertanyaan atau proposal Anda dalam 1x24 jam kerja.
        </p>
      </div>

      {status === "success" && (
        <div className="p-4 bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-mono space-y-1">
          <p className="font-bold flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> PESAN BERHASIL TERKIRIM</p>
          <p>{feedback}</p>
        </div>
      )}

      {status === "error" && (
        <div className="p-4 bg-red-100 border border-red-300 text-red-800 text-xs font-mono space-y-1">
          <p className="font-bold flex items-center gap-1.5"><AlertCircle className="w-4 h-4" /> GAGAL MENGIRIM PESAN</p>
          <p>{feedback}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label className="text-[11px] font-mono uppercase text-[#5A5957] block">Nama Lengkap / Instansi *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Nama Lengkap Anda"
            className="w-full bg-white border border-black/20 px-4 py-3 text-xs text-[#0B0B0B] placeholder-[#8F8E8B] focus:outline-none focus:border-[#D91F2C]"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-[11px] font-mono uppercase text-[#5A5957] block">Email Resmi *</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="email@domain.com"
              className="w-full bg-white border border-black/20 px-4 py-3 text-xs text-[#0B0B0B] placeholder-[#8F8E8B] focus:outline-none focus:border-[#D91F2C]"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[11px] font-mono uppercase text-[#5A5957] block">Nomor WhatsApp *</label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="08xxxxxxxxxx"
              className="w-full bg-white border border-black/20 px-4 py-3 text-xs text-[#0B0B0B] placeholder-[#8F8E8B] focus:outline-none focus:border-[#D91F2C]"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-[11px] font-mono uppercase text-[#5A5957] block">Kategori Topik</label>
          <select
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full bg-white border border-black/20 px-3 py-3 text-xs text-[#0B0B0B] focus:outline-none focus:border-[#D91F2C]"
          >
            <option value="Kemitraan & Sponsor">Kemitraan & Sponsorship</option>
            <option value="Media & Peliputan">Media Pers & Peliputan</option>
            <option value="Tiket & Akses">Pertanyaan Tiket & Akses</option>
            <option value="Kompetisi & Atlet">Kompetisi Kickboxing & Sasana</option>
            <option value="Lainnya">Pertanyaan Umum Lainnya</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className="text-[11px] font-mono uppercase text-[#5A5957] block">Pesan / Uraian *</label>
          <textarea
            required
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tuliskan pertanyaan atau proposal kemitraan Anda..."
            className="w-full bg-white border border-black/20 px-4 py-3 text-xs text-[#0B0B0B] placeholder-[#8F8E8B] focus:outline-none focus:border-[#D91F2C]"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full font-display font-extrabold text-sm uppercase tracking-wider text-white bg-[#0B0B0B] hover:bg-black disabled:opacity-50 py-3.5 transition-colors"
          style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
        >
          {status === "loading" ? "MENGIRIM PESAN..." : "KIRIM PESAN SEKARANG ↗"}
        </button>
      </form>

    </div>
  );
}
