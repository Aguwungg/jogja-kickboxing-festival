import FaqClient from "@/components/faq/FaqClient";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Tanya Jawab (FAQ) | JKBF 2026",
  description: "Jawaban atas pertanyaan seputar tiket, jadwal kejuaraan kickboxing, panggung musik festival, dan panduan kunjungan di GOR UNY Yogyakarta.",
};

export default function FaqPage() {
  return (
    <main className="flex-1 flex flex-col w-full min-h-screen text-[#F4F0E8] bg-[#0B0B0B] pt-24 pb-20">
      
      {/* Editorial Header */}
      <section className="relative w-full border-b border-white/10 py-16 md:py-24 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="v9-overline text-[#D91F2C]">
              PUSAT INFORMASI & BANTUAN RESMI
            </span>
            <Link
              href="/kontak"
              className="text-xs font-mono text-[#D91F2C] hover:underline uppercase flex items-center gap-1"
            >
              <span>HUBUNGI PANITIA PELAKSANA</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <h1
            className="v9-display-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F4F0E8]"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            TANYA JAWAB (FAQ)
          </h1>

          <p className="text-base sm:text-lg text-[#F4F0E8] font-bold uppercase tracking-wider font-display">
            PANDUAN LENGKAP KUNJUNGAN DAN KEJUARAAN
          </p>

          <p className="text-xs sm:text-sm text-[#8F8E8B] max-w-2xl leading-relaxed font-sans">
            Pertanyaan yang sering diajukan mengenai tiket masuk, penukaran gelang, aturan pertandingan di atas ring, keamanan barang bawaan, dan akses menuju venue GOR UNY Yogyakarta.
          </p>
        </div>
      </section>

      {/* Accordion Component */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex-1">
        <FaqClient />
      </section>

    </main>
  );
}
