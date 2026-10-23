import FaqClient from "@/components/faq/FaqClient";
import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";

export const metadata = {
  title: "Pertanyaan Umum (FAQ) & Panduan | JKBF 2026",
  description: "Jawaban resmi seputar tiket, jadwal, tata tertib, dan informasi kunjungan Jogja Kickboxing Festival di GOR UNY Yogyakarta.",
};

export default function FaqPage() {
  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#0A0A0A] text-[#FAFAFA] pt-28 lg:pt-36 pb-32">
      
      {/* ═════════════════════════════════════════════════════════════════════
          1. EDITORIAL HEADER — V10 BROADSHEET HERO
      ═════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-6 pb-16 w-full border-b border-white/10">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2.5 h-2.5 bg-[#D91F2C]" />
          <p className="text-[#D91F2C] text-xs font-technical uppercase tracking-[0.25em]">
            PUSAT INFORMASI • BANTUAN PENONTON
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <h1 className="text-6xl sm:text-8xl lg:text-9xl font-display font-black uppercase tracking-tight leading-[0.85] text-white">
              PERTANYAAN<br />
              <span className="text-[#D91F2C]">UMUM.</span>
            </h1>
          </div>
          <div className="lg:col-span-4 lg:pb-3">
            <p className="text-base text-white/60 font-sans leading-relaxed">
              Semua hal penting mengenai jadwal laga, regulasi WAKO, panggung festival musik, dan tata tertib di GOR UNY Yogyakarta.
            </p>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. ACCORDION FAQ CLIENT
      ═════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-16 w-full flex-1">
        <FaqClient />
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          3. STILL HAVE QUESTIONS HELPDESK CARD
      ═════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-8 w-full">
        <div className="p-8 sm:p-12 border border-white/10 bg-[#121212] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-2 relative z-10">
            <span className="text-xs font-technical uppercase tracking-widest text-[#D91F2C] flex items-center gap-2">
              <HelpCircle className="w-4 h-4" /> BUTUH BANTUAN LAIN?
            </span>
            <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-wide text-white">
              Punya Pertanyaan Khusus Terkait Kejuaraan?
            </h3>
            <p className="text-xs sm:text-sm text-white/60 font-sans max-w-xl">
              Tim sekretariat dan panitia pelaksana JKBF siap melayani informasi regulasi atlet, pendaftaran kontingen, atau kemitraan.
            </p>
          </div>

          <Link
            href="/kontak"
            className="inline-flex items-center gap-3 px-6 py-3.5 bg-white text-black font-display text-sm uppercase tracking-wider hover:bg-[#D91F2C] hover:text-white transition-all shrink-0 relative z-10"
          >
            HUBUNGI KAMI <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </main>
  );
}
