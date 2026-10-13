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
    <div className="bg-[#141416] border border-white/10 p-8 sm:p-10 space-y-6 font-sans">
      
      <div className="space-y-1">
        <span className="text-[10px] text-[#D91F2C] font-mono tracking-widest uppercase block">
          FORMULIR INQUIRY RESMI
        </span>
        <h2 className="v9-display-title text-2xl sm:text-3xl text-[#F4F0E8]" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
          KIRIM PESAN KE PANITIA
        </h2>
        <p className="text-xs text-[#8F8E8B] leading-relaxed">
          Tim sekretariat festival akan membalas pertanyaan atau proposal Anda dalam 1x24 jam kerja.
        </p>
      </div>

      {status === "success" && (
        <div className="p-4 bg-green-950/40 border border-green-500/30 text-green-300 text-xs font-mono space-y-1">
          <p className="font-bold">PESAN BERHASIL TERKIRIM</p>
          <p>{feedback}</p>
        </div>
      )}

      {status === "error" && (
        <div className="p-4 bg-red-950/40 border border-red-500/30 text-red-300 text-xs font-mono space-y-1">
          <p className="font-bold">GAGAL MENGIRIM PESAN</p>
          <p>{feedback}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1 sm:col-span-2">
            <label className="text-[10px] font-mono uppercase tracking-widest text-[#8F8E8B] block">NAMA LENGKAP / INSTANSI</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Nama Lengkap"
              className="w-full bg-[#0B0B0B] border border-white/10 px-3.5 py-2.5 text-xs text-[#F4F0E8] placeholder-[#5A5957] focus:outline-none focus:border-[#D91F2C]"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-mono uppercase tracking-widest text-[#8F8E8B] block">EMAIL RESMI</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="email@anda.com"
              className="w-full bg-[#0B0B0B] border border-white/10 px-3.5 py-2.5 text-xs text-[#F4F0E8] placeholder-[#5A5957] focus:outline-none focus:border-[#D91F2C]"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-mono uppercase tracking-widest text-[#8F8E8B] block">NOMOR WHATSAPP</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="0812xxxxxxxx"
              className="w-full bg-[#0B0B0B] border border-white/10 px-3.5 py-2.5 text-xs text-[#F4F0E8] placeholder-[#5A5957] focus:outline-none focus:border-[#D91F2C]"
            />
          </div>

          <div className="space-y-1 sm:col-span-2">
            <label className="text-[10px] font-mono uppercase tracking-widest text-[#8F8E8B] block">TOPIK PERTANYAAN / KEMITRAAN</label>
            <select
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full bg-[#0B0B0B] border border-white/10 px-3.5 py-2.5 text-xs text-[#F4F0E8] focus:outline-none focus:border-[#D91F2C]"
            >
              <option value="Kemitraan & Sponsor">Kemitraan & Sponsor Festival</option>
              <option value="Pendaftaran Sasana & Atlet">Pendaftaran Sasana & Atlet Kickboxing</option>
              <option value="Akreditasi Media & Peliputan">Akreditasi Media & Peliputan</option>
              <option value="Informasi Tiket & Venue">Informasi Tiket & Venue GOR UNY</option>
              <option value="Lainnya">Pertanyaan Umum Lainnya</option>
            </select>
          </div>

          <div className="space-y-1 sm:col-span-2">
            <label className="text-[10px] font-mono uppercase tracking-widest text-[#8F8E8B] block">PESAN LENGKAP</label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tuliskan pesan, pertanyaan, atau proposal Anda secara detail..."
              className="w-full bg-[#0B0B0B] border border-white/10 p-3 text-xs text-[#F4F0E8] placeholder-[#5A5957] focus:outline-none focus:border-[#D91F2C]"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="v9-btn-red text-xs font-display font-black tracking-wider w-full py-3.5"
        >
          <span>{status === "loading" ? "MENGIRIM PESAN..." : "KIRIM PESAN KE SEKRETARIAT"}</span>
          <span>↗</span>
        </button>
      </form>

    </div>
  );
}
