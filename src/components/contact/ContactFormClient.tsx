"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

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
      setFeedback(data.message || "Pesan Anda berhasil dikirim ke panitia JKB 2026.");
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
    <div className="bg-[#171719] border border-white/10 p-6 sm:p-10 rounded-sm">
      <h3
        className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mb-2"
        style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
      >
        KIRIM PESAN ATAU INQUIRY
      </h3>
      <p className="text-xs sm:text-sm text-[#99999F] font-sans mb-8">
        Silakan isi formulir di bawah ini. Tim panitia pelaksana akan merespons melalui email atau WhatsApp dalam 1x24 jam kerja.
      </p>

      {status === "success" && (
        <div className="mb-6 p-4 rounded-sm bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm font-sans leading-relaxed">
            <span className="font-bold block mb-0.5">Pesan Berhasil Terkirim!</span>
            {feedback}
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="mb-6 p-4 rounded-sm bg-[#D91F2C]/10 border border-[#D91F2C]/30 text-[#EF3340] flex items-start gap-3">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm font-sans leading-relaxed">
            <span className="font-bold block mb-0.5">Gagal Mengirim Pesan</span>
            {feedback}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs uppercase tracking-wider text-white/80 font-bold mb-2 font-sans">
              Nama Lengkap <span className="text-[#EF3340]">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Contoh: Budi Santoso"
              className="w-full bg-[#09090b] border border-white/10 rounded-sm px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#D91F2C] transition-colors font-sans"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-white/80 font-bold mb-2 font-sans">
              Alamat Email <span className="text-[#EF3340]">*</span>
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="nama@email.com"
              className="w-full bg-[#09090b] border border-white/10 rounded-sm px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#D91F2C] transition-colors font-sans"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs uppercase tracking-wider text-white/80 font-bold mb-2 font-sans">
              Nomor WhatsApp / HP
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="0812-xxxx-xxxx"
              className="w-full bg-[#09090b] border border-white/10 rounded-sm px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#D91F2C] transition-colors font-sans"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-white/80 font-bold mb-2 font-sans">
              Kategori Subjek <span className="text-[#EF3340]">*</span>
            </label>
            <select
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full bg-[#09090b] border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D91F2C] transition-colors font-sans"
            >
              <option value="Kemitraan & Sponsor">Kemitraan & Sponsor</option>
              <option value="Pendaftaran Atlet & Sasana">Pendaftaran Atlet & Sasana</option>
              <option value="Media, Pers & Liputan">Media, Pers & Liputan</option>
              <option value="Pertanyaan Tiket & Akses">Pertanyaan Tiket & Akses</option>
              <option value="Inquiry Tenant F&B / Komunitas">Inquiry Tenant F&B / Komunitas</option>
              <option value="Umum & Lainnya">Umum & Lainnya</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider text-white/80 font-bold mb-2 font-sans">
            Isi Pesan <span className="text-[#EF3340]">*</span>
          </label>
          <textarea
            required
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tuliskan detail pertanyaan atau proposal kemitraan Anda di sini..."
            className="w-full bg-[#09090b] border border-white/10 rounded-sm p-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#D91F2C] transition-colors font-sans leading-relaxed"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D91F2C] hover:bg-[#EF3340] disabled:bg-[#D91F2C]/50 text-white px-8 py-3.5 rounded-sm font-bold text-xs uppercase tracking-widest transition-all"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>SEDANG MENGIRIM...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>KIRIM PESAN SEKARANG</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
