import ContactFormClient from "@/components/contact/ContactFormClient";
import Link from "next/link";
import { MapPin, Mail, Clock, Ticket, ArrowUpRight } from "lucide-react";
import { EVENT_CONFIG } from "@/lib/event-config";

export const metadata = {
  title: "Kontak & Sekretariat Panitia | JKBF 2026",
  description: "Hubungi panitia resmi Jogja Kickboxing Festival & Redy Championship 2 untuk kemitraan sponsor, media pers, dan informasi festival di GOR UNY.",
};

export default function KontakPage() {
  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#0A0A0A] text-[#FAFAFA] pt-24 lg:pt-32 pb-24 font-sans">
      
      {/* ═════════════════════════════════════════════════════════════════════
          1. CLEAN EDITORIAL HEADER
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pt-6 pb-10 w-full border-b border-white/10">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-2.5 h-2.5 bg-[#D91F2C]" />
          <p className="text-[#D91F2C] text-xs font-technical uppercase tracking-[0.25em] font-bold">
            HUBUNGI KAMI • SEKRETARIAT RESMI
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-8">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black uppercase tracking-tight leading-[0.85] text-white">
              MARI<br />
              <span className="text-[#D91F2C]">TERHUBUNG.</span>
            </h1>
          </div>
          <div className="lg:col-span-4 lg:pb-2">
            <p className="text-xs sm:text-sm text-white/60 font-sans leading-relaxed">
              Pertanyaan umum, koordinasi kemitraan sponsor, permohonan liputan pers, dan layanan informasi resmi festival.
            </p>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. RESTRAINED 12-COLUMN SPLIT (Left Info, Right Form)
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-12 w-full flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Office Data & Direct Channels (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-2 border-b border-white/10 pb-5">
              <span className="font-technical text-[10px] uppercase font-bold tracking-widest text-[#D91F2C]">
                INFORMASI KORESPONDENSI
              </span>
              <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-wide text-white">
                SEKRETARIAT & PANITIA
              </h2>
              <p className="text-xs text-white/50 leading-relaxed">
                Komite Pelaksana Jogja Kickboxing Festival & Redy Championship 2.
              </p>
            </div>

            <div className="space-y-5">
              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="p-2 bg-white/5 border border-white/10 text-[#D91F2C] shrink-0 mt-0.5 rounded">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-white/40 block text-[10px] font-technical uppercase tracking-wider">EMAIL RESMI</span>
                  <a href={`mailto:${EVENT_CONFIG.contact.email}`} className="text-sm font-sans font-bold text-white hover:text-[#D91F2C] transition-colors mt-0.5 block">
                    {EVENT_CONFIG.contact.email}
                  </a>
                  <p className="text-[11px] text-white/50 font-sans">Kemitraan, proposal sponsor, dan akreditasi media</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3.5">
                <div className="p-2 bg-white/5 border border-white/10 text-[#D91F2C] shrink-0 mt-0.5 rounded">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-white/40 block text-[10px] font-technical uppercase tracking-wider">VENUE ACARA</span>
                  <p className="text-sm font-sans font-bold text-white mt-0.5">{EVENT_CONFIG.venue.name}</p>
                  <p className="text-[11px] text-white/50 font-sans">{EVENT_CONFIG.venue.shortAddress}</p>
                </div>
              </div>

              {/* Response Time */}
              <div className="flex items-start gap-3.5">
                <div className="p-2 bg-white/5 border border-white/10 text-[#D91F2C] shrink-0 mt-0.5 rounded">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-white/40 block text-[10px] font-technical uppercase tracking-wider">TARGET RESPON</span>
                  <p className="text-sm font-sans font-bold text-white mt-0.5">Maksimal 1 × 24 Jam Kerja</p>
                  <p className="text-[11px] text-white/50 font-sans">Senin – Sabtu, 09:00 – 18:00 WIB</p>
                </div>
              </div>

              {/* Ticket Help Link */}
              <div className="flex items-start gap-3.5 pt-2 border-t border-white/10">
                <div className="p-2 bg-white/5 border border-white/10 text-white/60 shrink-0 mt-0.5 rounded">
                  <Ticket className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-white/40 block text-[10px] font-technical uppercase tracking-wider">BANTUAN TIKET FESTIVAL</span>
                  <p className="text-xs text-white/70 font-sans mt-0.5 leading-relaxed">
                    Pertanyaan terkait jadwal presale dan kategori tiket dapat dilihat di panduan resmi.
                  </p>
                  <Link href="/tiket" className="text-xs text-[#D91F2C] hover:underline font-technical uppercase font-bold inline-flex items-center gap-1 mt-1">
                    <span>LIHAT INFO TIKET LENGKAP</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form (7 Cols) */}
          <div className="lg:col-span-7">
            <ContactFormClient />
          </div>

        </div>
      </section>

    </main>
  );
}
