import ContactFormClient from "@/components/contact/ContactFormClient";
import { MapPin, Mail, Clock, PhoneCall } from "lucide-react";

export const metadata = {
  title: "Kontak & Sekretariat Panitia | JKBF 2026",
  description: "Hubungi panitia resmi Jogja Kickboxing Festival & Redy Championship 2 untuk kemitraan sponsor, media pers, dan informasi festival di GOR UNY.",
};

export default function KontakPage() {
  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#0A0A0A] text-[#FAFAFA] pt-28 lg:pt-36 pb-32">
      
      {/* ═════════════════════════════════════════════════════════════════════
          1. EDITORIAL HEADER — V10 BROADSHEET HERO
      ═════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-6 pb-16 w-full border-b border-white/10">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2.5 h-2.5 bg-[#D91F2C]" />
          <p className="text-[#D91F2C] text-xs font-technical uppercase tracking-[0.25em]">
            HUBUNGI KAMI • SEKRETARIAT RESMI
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <h1 className="text-6xl sm:text-8xl lg:text-9xl font-display font-black uppercase tracking-tight leading-[0.85] text-white">
              MARI<br />
              <span className="text-[#D91F2C]">TERHUBUNG.</span>
            </h1>
          </div>
          <div className="lg:col-span-4 lg:pb-3">
            <p className="text-base text-white/60 font-sans leading-relaxed">
              Pertanyaan umum pengunjung, koordinasi kemitraan sponsor, permohonan akreditasi media pers, dan layanan informasi resmi festival.
            </p>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. CONTACT FORM & OFFICE DETAILS
      ═════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-16 w-full flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-7">
            <ContactFormClient />
          </div>

          <div className="lg:col-span-5 space-y-8 border border-white/10 bg-[#121212] p-8 sm:p-10 relative">
            <div className="space-y-2 border-b border-white/10 pb-6">
              <span className="text-xs uppercase font-technical font-bold tracking-widest text-[#D91F2C]">
                SEKRETARIAT EVENT
              </span>
              <h3 className="text-3xl font-display uppercase tracking-wide text-white">
                KANTOR PANITIA JKBF
              </h3>
              <p className="text-xs text-white/50 font-sans">
                Komite Pelaksana Jogja Kickboxing Festival & Redy Championship 2.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 border border-white/10 bg-white/5 text-[#D91F2C] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-white/40 block text-[10px] font-technical uppercase tracking-wider">LOKASI PENYELENGGARAAN</span>
                  <p className="text-sm font-sans font-bold text-white mt-0.5">GOR UNY, Kampus Karangmalang</p>
                  <p className="text-xs text-white/50 font-sans">Jl. Colombo No. 1, Caturtunggal, Sleman, D.I. Yogyakarta</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 border border-white/10 bg-white/5 text-[#D91F2C] shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-white/40 block text-[10px] font-technical uppercase tracking-wider">EMAIL KORESPONDENSI</span>
                  <p className="text-sm font-sans font-bold text-white mt-0.5">info@jogjakickboxing.id</p>
                  <p className="text-xs text-white/50 font-sans">Untuk kemitraan, proposal, & permohonan pers</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 border border-white/10 bg-white/5 text-[#D91F2C] shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-white/40 block text-[10px] font-technical uppercase tracking-wider">ESTIMASI WAKTU RESPON</span>
                  <p className="text-sm font-sans font-bold text-white mt-0.5">Maksimal 1 × 24 Jam Kerja</p>
                  <p className="text-xs text-white/50 font-sans">Senin – Sabtu, 09:00 – 18:00 WIB</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 border border-white/10 bg-white/5 text-[#D91F2C] shrink-0 mt-0.5">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-white/40 block text-[10px] font-technical uppercase tracking-wider">PUSAT BANTUAN TIKET</span>
                  <p className="text-sm font-sans font-bold text-white mt-0.5">Mitra Tiket Resmi RAWOOH</p>
                  <p className="text-xs text-white/50 font-sans">Bantuan transaksi e-voucher festival</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <p className="text-[11px] font-technical text-white/40 tracking-wider uppercase">
                #JOGJAPUNYANYALI • DI BALIK KALEM
              </p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
