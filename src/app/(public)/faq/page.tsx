import FaqClient from "@/components/faq/FaqClient";
import { HelpCircle } from "lucide-react";

export const metadata = {
  title: "Tanya Jawab (FAQ) — JKB 2026",
  description: "Jawaban atas pertanyaan seputar tiket, jadwal laga kickboxing, panggung festival musik, aturan arena, dan streaming PPV JKB 2026.",
};

export default function FaqPage() {
  return (
    <div className="flex-1 flex flex-col w-full min-h-screen text-[#F6F3EC] bg-[#09090b] pt-24 pb-20">
      {/* Header Banner */}
      <section className="border-b border-white/10 py-12 md:py-16 bg-[#171719]/40 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/5 text-white/80 text-xs font-bold tracking-widest uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#EF3340]" />
            PUSAT BANTUAN RESMI
          </div>

          <h1
            className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-none mb-4"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            PERTANYAAN <span className="text-[#EF3340]">SERING DIAJUKAN</span>
          </h1>

          <p className="text-[#99999F] text-base sm:text-lg font-sans max-w-2xl leading-relaxed">
            Temukan panduan lengkap dan informasi resmi mengenai tiket, jadwal kejuaraan, festival konser musik, serta aturan keselamatan di GOR UNY Yogyakarta.
          </p>
        </div>
      </section>

      {/* Accordion Component */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <FaqClient />
      </section>
    </div>
  );
}
