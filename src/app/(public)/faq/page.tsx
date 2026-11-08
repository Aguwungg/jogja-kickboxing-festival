import FaqClient from "@/components/faq/FaqClient";
import Link from "next/link";
import { ArrowRight, HelpCircle, MessageCircle } from "lucide-react";
import { jkbfLinks } from "@/lib/event-config";

export const metadata = {
  title: "Pertanyaan Umum (FAQ) | JKBF 2026",
  description:
    "Jawaban resmi seputar program kejuaraan, regulasi WAKO, disiplin pertandingan, dan informasi Jogja Kickboxing Festival 2026.",
};

export default function FaqPage() {
  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#000000] text-[#F5F5F7] pt-28 lg:pt-36 pb-32">
      
      {/* ═════════════════════════════════════════════════════════════════════
          1. COMBAT SPORT HERO HEADER
      ═════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-6 pb-16 w-full border-b border-white/[0.08]">
        <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-xs bg-black/80 border border-white/15 mb-6">
          <span className="w-2 h-2 rounded-xs bg-[#D91F2C]" />
          <p className="text-[#D91F2C] text-xs font-technical uppercase tracking-[0.25em] font-bold">
            PUSAT INFORMASI // BANTUAN RESMI
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display uppercase tracking-tight leading-[0.88] text-white">
              <span className="bg-gradient-to-b from-white via-[#F5F5F7] to-[#B0B0B8] bg-clip-text text-transparent">
                PERTANYAAN
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#FF3B30] to-[#D91F2C] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(217,31,44,0.5)]">
                UMUM.
              </span>
            </h1>
          </div>
          <div className="lg:col-span-4 lg:pb-3">
            <p className="text-sm sm:text-base text-[#86868B] font-sans leading-relaxed">
              Semua hal penting mengenai program kejuaraan, regulasi WAKO, disiplin pertandingan, pendaftaran, dan informasi resmi JKBF 2026.
            </p>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. TACTICAL ACCORDION FAQ CLIENT (WITH SEARCH & BLOCK FILTERS)
      ═════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-16 w-full flex-1">
        <FaqClient />
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          3. COMBAT SPORT HELPDESK CARD
      ═════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-8 w-full">
        <div className="p-8 sm:p-12 lg:p-14 border border-white/10 bg-gradient-to-b from-[#18181B] via-[#111114] to-[#0A0A0C] rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
          <div className="space-y-3 relative z-10 max-w-xl">
            <span className="text-xs font-technical uppercase tracking-widest text-[#D91F2C] font-bold flex items-center gap-2">
              <HelpCircle className="w-4 h-4" /> BUTUH BANTUAN LAIN?
            </span>
            <h3 className="text-2xl sm:text-4xl font-display uppercase tracking-wide text-white">
              Punya Pertanyaan Khusus Terkait Kejuaraan?
            </h3>
            <p className="text-xs sm:text-sm text-[#86868B] font-sans leading-relaxed">
              Tim sekretariat dan koordinator teknis JKBF siap melayani informasi regulasi atlet, administrasi sasana, atau kemitraan.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto relative z-10">
            <a
              href={jkbfLinks.fighterSupportWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#D91F2C] hover:bg-[#B81521] active:scale-95 text-white font-display text-sm uppercase tracking-wider transition-all rounded-sm shadow-[0_0_20px_rgba(217,31,44,0.4)]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>CHAT ADMIN WHATSAPP</span>
            </a>

            <Link
              href="/kontak"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#111114] hover:bg-[#16161A] border border-white/20 text-[#F5F5F7] hover:text-white font-display text-sm uppercase tracking-wider rounded-sm transition-all active:scale-95"
            >
              <span>HUBUNGI KAMI</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
