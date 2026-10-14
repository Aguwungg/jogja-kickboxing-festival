import FaqClient from "@/components/faq/FaqClient";

export const metadata = {
  title: "Pertanyaan Umum (FAQ) & Panduan | JKBF 2026",
  description: "Jawaban resmi seputar tiket, jadwal, tata tertib, dan informasi kunjungan Jogja Kickboxing Festival di GOR UNY Yogyakarta.",
};

export default function FaqPage() {
  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#F4F0E8] text-[#0B0B0B] pt-24 lg:pt-28 pb-24">
      
      {/* ═════════════════════════════════════════════════════════════════════
          1. EDITORIAL HEADER (Matches 16_faq.png)
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pt-8 pb-12 w-full border-b border-black/10">
        <p
          className="text-[#D91F2C] text-xs sm:text-sm font-extrabold uppercase tracking-[0.24em] mb-4"
          style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
        >
          PUSAT INFORMASI • BANTUAN
        </p>

        <h1
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight leading-[0.88] text-[#0B0B0B]"
          style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
        >
          PERTANYAAN<br />
          UMUM.
        </h1>

        <p className="text-sm sm:text-base text-[#5A5957] max-w-xl font-sans mt-4">
          Semua hal penting tentang kunjungan, tiket, regulasi pertandingan, dan akses festival di GOR UNY Yogyakarta.
        </p>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. ACCORDION FAQ
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-16 w-full flex-1">
        <FaqClient />
      </section>

    </main>
  );
}
