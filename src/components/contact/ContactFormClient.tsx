"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle, Send, Loader2 } from "lucide-react";

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
  const [referenceCode, setReferenceCode] = useState<string>("");

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
        setFeedback(data.error || "Gagal mengirim pesan. Silakan periksa kembali formulir Anda.");
        return;
      }

      setStatus("success");
      setFeedback(data.message || "Pesan Anda berhasil diterima panitia pelaksana.");
      setReferenceCode(data.referenceCode || `JKBF-CNT-${Math.floor(10000 + Math.random() * 90000)}`);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "Kemitraan & Sponsor",
        message: "",
      });
    } catch {
      setStatus("error");
      setFeedback("Koneksi gagal. Silakan periksa jaringan internet Anda dan coba kembali.");
    }
  };

  return (
    <div className="border border-white/10 bg-[#121214] p-6 sm:p-10 rounded space-y-6 font-sans">
      
      <div className="space-y-1.5 border-b border-white/10 pb-4">
        <span className="text-[10px] text-[#D91F2C] font-technical tracking-widest uppercase block font-bold">
          FORMULIR KORESPONDENSI
        </span>
        <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-wide text-white">
          KIRIM PESAN LANGSUNG
        </h2>
        <p className="text-xs text-white/50 leading-relaxed">
          Sampaikan proposal sponsorship, pertanyaan umum pengunjung, atau permohonan liputan resmi media.
        </p>
      </div>

      {status === "success" && (
        <div className="p-4 sm:p-5 bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-xs font-sans rounded space-y-2">
          <div className="flex items-center gap-2 font-display text-sm uppercase text-emerald-300">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>PESAN DITERIMA PANITIA</span>
          </div>
          <p className="text-white/80 leading-relaxed">{feedback}</p>
          <div className="pt-2 border-t border-emerald-500/20 font-technical text-[11px] text-emerald-400">
            Kode Referensi: <span className="font-bold tracking-wider text-white bg-black/40 px-2 py-0.5 rounded">{referenceCode}</span> • Respons dalam 1×24 jam kerja.
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="p-4 bg-red-950/60 border border-red-500/40 text-red-200 text-xs font-sans rounded space-y-1">
          <div className="flex items-center gap-2 font-display text-sm uppercase text-red-300">
            <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
            <span>GAGAL MENGIRIM PESAN</span>
          </div>
          <p className="text-white/80">{feedback}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-xs font-technical uppercase tracking-wider text-white/70 block">
            Nama Lengkap / Instansi <span className="text-[#D91F2C]">*</span>
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Contoh: Budi Santoso / PT Mitra Olahraga"
            className="w-full bg-[#18181a] border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 rounded focus:outline-none focus:border-[#D91F2C] transition-colors"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="email" className="text-xs font-technical uppercase tracking-wider text-white/70 block">
              Alamat Email <span className="text-[#D91F2C]">*</span>
            </label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="nama@email.com"
              className="w-full bg-[#18181a] border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 rounded focus:outline-none focus:border-[#D91F2C] transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="phone" className="text-xs font-technical uppercase tracking-wider text-white/50 block">
              WhatsApp <span className="text-[10px] text-white/40 font-normal lowercase">(opsional)</span>
            </label>
            <input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="08xxxxxxxxxx"
              className="w-full bg-[#18181a] border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 rounded focus:outline-none focus:border-[#D91F2C] transition-colors"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="subject" className="text-xs font-technical uppercase tracking-wider text-white/70 block">
            Topik Korespondensi <span className="text-[#D91F2C]">*</span>
          </label>
          <select
            id="subject"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full bg-[#18181a] border border-white/10 px-4 py-3 text-sm text-white rounded focus:outline-none focus:border-[#D91F2C] transition-colors"
          >
            <option value="Kemitraan & Sponsor" className="bg-[#18181a] text-white">Kemitraan & Sponsorship</option>
            <option value="Media & Peliputan" className="bg-[#18181a] text-white">Media Pers & Akreditasi Peliputan</option>
            <option value="Tiket & Akses" className="bg-[#18181a] text-white">Pertanyaan Tiket Festival & GOR UNY</option>
            <option value="Kompetisi & Sasana" className="bg-[#18181a] text-white">Pendaftaran Sasana & Atlet Kickboxing</option>
            <option value="Lainnya" className="bg-[#18181a] text-white">Pertanyaan Umum Lainnya</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="message" className="text-xs font-technical uppercase tracking-wider text-white/70 block">
            Isi Pesan <span className="text-[#D91F2C]">*</span>
          </label>
          <textarea
            id="message"
            required
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tuliskan pertanyaan, tawaran kemitraan, atau detail pesan Anda di sini..."
            className="w-full bg-[#18181a] border border-white/10 p-4 text-sm text-white placeholder-white/30 rounded focus:outline-none focus:border-[#D91F2C] transition-colors resize-y min-h-[120px]"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full py-3.5 bg-[#D91F2C] hover:bg-[#B81521] disabled:bg-[#D91F2C]/50 text-white font-display text-base tracking-wider uppercase rounded transition-colors inline-flex items-center justify-center gap-2 shadow-md cursor-pointer"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>MENGIRIM PESAN...</span>
            </>
          ) : (
            <>
              <span>KIRIM PESAN KE PANITIA</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
