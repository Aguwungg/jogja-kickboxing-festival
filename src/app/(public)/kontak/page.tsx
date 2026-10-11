import ContactFormClient from "@/components/contact/ContactFormClient";
import { Mail, Phone, MapPin, MessageCircle, Globe, Clock, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Kontak & Sekretariat Resmi — JKB 2026",
  description: "Hubungi panitia pelaksana Jogja Kickboxing Festival & Redy Championship 2 untuk kemitraan, media, dan informasi tiket.",
};

export default function KontakPage() {
  return (
    <div className="flex-1 flex flex-col w-full min-h-screen text-[#F6F3EC] bg-[#09090b] pt-24 pb-20">
      {/* Header Banner */}
      <section className="border-b border-white/10 py-12 md:py-16 bg-[#171719]/40 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/5 text-white/80 text-xs font-bold tracking-widest uppercase mb-4">
            <Mail className="w-3.5 h-3.5 text-[#EF3340]" />
            PUSAT LAYANAN & SEKRETARIAT
          </div>

          <h1
            className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-none mb-4"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            HUBUNGI <span className="text-[#EF3340]">PANITIA PELAKSANA</span>
          </h1>

          <p className="text-[#99999F] text-base sm:text-lg font-sans max-w-2xl leading-relaxed">
            Terbuka untuk peluang kemitraan sponsor, registrasi delegasi sasana/atlet, akreditasi media peliput, serta kerja sama tenant festival.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <ContactFormClient />
          </div>

          {/* Right Column: Contact Details Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Sekretariat Card */}
            <div className="bg-[#171719] border border-white/10 p-6 sm:p-8 rounded-sm">
              <div className="w-10 h-10 rounded-sm bg-[#D91F2C]/10 border border-[#D91F2C]/30 flex items-center justify-center text-[#EF3340] mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3
                className="text-xl font-black uppercase text-white mb-2"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                SEKRETARIAT UTAMA
              </h3>
              <p className="text-xs text-[#99999F] font-sans leading-relaxed mb-4">
                Gedung Olahraga Among Rogo<br />
                Jl. Kenari No. 1, Semaki, Umbulharjo<br />
                Kota Yogyakarta, D.I. Yogyakarta 55166
              </p>
              <div className="flex items-center gap-2 text-xs text-white/60 font-sans border-t border-white/5 pt-3">
                <Clock className="w-3.5 h-3.5 text-[#E2BA75]" />
                <span>Jam Kerja: Senin – Sabtu, 09:00 – 17:00 WIB</span>
              </div>
            </div>

            {/* Direct Communication Channels */}
            <div className="bg-[#171719] border border-white/10 p-6 sm:p-8 rounded-sm space-y-5">
              <h3
                className="text-xl font-black uppercase text-white"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                KANAL RESMI
              </h3>

              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white text-xs font-bold uppercase font-sans">WhatsApp Hotline & Sponsorship</h4>
                  <p className="text-xs text-[#99999F] font-mono mt-0.5">+62 812-2800-2026</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#EF3340] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white text-xs font-bold uppercase font-sans">Email Resmi</h4>
                  <p className="text-xs text-[#99999F] font-mono mt-0.5">halo@jkbchampionship.id</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white text-xs font-bold uppercase font-sans">Instagram Resmi</h4>
                  <p className="text-xs text-[#99999F] font-sans mt-0.5">@jkb.championship</p>
                </div>
              </div>
            </div>

            {/* Media Accreditation Note */}
            <div className="bg-gradient-to-r from-[#D91F2C]/10 to-transparent border border-[#D91F2C]/20 p-6 rounded-sm">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#EF3340] shrink-0 mt-0.5" />
                <div className="text-xs font-sans text-white/80 leading-relaxed">
                  <span className="font-bold text-white uppercase block mb-1">
                    Akreditasi Media & Fotografer
                  </span>
                  Pendaftaran kartu pers peliput pertandingan dibuka mulai H-14 acara. Lampirkan surat tugas resmi redaksi melalui formulir atau email di atas.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
