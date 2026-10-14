import ContactFormClient from "@/components/contact/ContactFormClient";

export const metadata = {
  title: "Kontak & Sekretariat Panitia | JKBF 2026",
  description: "Hubungi panitia resmi Jogja Kickboxing Festival & Redy Championship 2 untuk kemitraan sponsor, media pers, dan informasi festival di GOR UNY.",
};

export default function KontakPage() {
  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#F4F0E8] text-[#0B0B0B] pt-24 lg:pt-28 pb-24">
      
      {/* ═════════════════════════════════════════════════════════════════════
          1. EDITORIAL HEADER (Matches 17_kontak.png)
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pt-8 pb-12 w-full border-b border-black/10">
        <p
          className="text-[#D91F2C] text-xs sm:text-sm font-extrabold uppercase tracking-[0.24em] mb-4"
          style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
        >
          HUBUNGI KAMI • SEKRETARIAT RESMI
        </p>

        <h1
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight leading-[0.88] text-[#0B0B0B]"
          style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
        >
          MARI<br />
          TERHUBUNG.
        </h1>

        <p className="text-sm sm:text-base text-[#5A5957] max-w-xl font-sans mt-4">
          Pertanyaan umum, media pers, dan kemitraan sponsorship Jogja Kickboxing Festival 2026.
        </p>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. CONTACT FORM & OFFICE DETAILS
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-16 w-full flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-7">
            <ContactFormClient />
          </div>

          <div className="lg:col-span-5 space-y-8 border border-black/10 bg-white/40 p-8 sm:p-10">
            <div className="space-y-1">
              <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#D91F2C]">
                SEKRETARIAT
              </span>
              <h3
                className="text-2xl font-black uppercase text-[#0B0B0B]"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                KANTOR PANITIA JKBF
              </h3>
            </div>

            <div className="space-y-4 text-xs font-mono text-[#5A5957]">
              <div>
                <span className="text-[#8F8E8B] block text-[10px] uppercase">LOKASI EVENT:</span>
                <p className="text-sm font-bold text-[#0B0B0B]">GOR UNY, Colombo, Yogyakarta</p>
              </div>

              <div>
                <span className="text-[#8F8E8B] block text-[10px] uppercase">EMAIL KORESPONDENSI:</span>
                <p className="text-sm font-bold text-[#0B0B0B]">info@jogjakickboxing.id</p>
              </div>

              <div>
                <span className="text-[#8F8E8B] block text-[10px] uppercase">WAKTU RESPON:</span>
                <p className="text-sm font-bold text-[#0B0B0B]">Maksimal 1 x 24 Jam Kerja</p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
