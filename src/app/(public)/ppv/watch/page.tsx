import PpvWatchClient from "@/components/ppv/PpvWatchClient";

export const metadata = {
  title: "Live Stream Broadcast Player | JKBF 2026",
  description: "Pemutar siaran langsung pertandingan kickboxing dan panggung festival Jogja Kickboxing Festival di GOR UNY Yogyakarta.",
};

export default async function PpvWatchPage({
  searchParams,
}: {
  searchParams: Promise<{ code?: string }>;
}) {
  const { code } = await searchParams;

  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#0B0B0B] text-[#F4F0E8] pt-24 lg:pt-28 pb-24 overflow-x-hidden">
      
      {/* ═════════════════════════════════════════════════════════════════════
          1. EDITORIAL HEADER
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pt-8 pb-10 w-full border-b border-white/10">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#D91F2C]" />
          <p className="font-technical text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
            PORTAL SIARAN LANGSUNG • LIVE FEED
          </p>
        </div>

        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight leading-[0.85] text-white">
          LIVE STREAM.
        </h1>

        <p className="text-sm sm:text-base text-[#8F8E8B] max-w-xl font-sans mt-3 leading-relaxed">
          Player standby sebelum siaran resmi dimulai. Masukkan kode akses resmi tiket streaming Anda untuk verifikasi hak tonton multi-kamera.
        </p>
      </section>

      {/* Main Stream Player & Gate */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-12 w-full flex-1">
        <PpvWatchClient initialCode={code} />
      </div>

    </main>
  );
}
