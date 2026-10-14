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
          1. EDITORIAL HEADER (Matches 23_ppv_watch.png)
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pt-8 pb-10 w-full border-b border-white/10">
        <p
          className="text-[#D91F2C] text-xs sm:text-sm font-extrabold uppercase tracking-[0.24em] mb-4"
          style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
        >
          PORTAL SIARAN / PRATINJAU
        </p>

        <h1
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight leading-[0.88] text-white"
          style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
        >
          LIVE<br />
          STREAM.
        </h1>

        <p className="text-sm sm:text-base text-[#8F8E8B] max-w-xl font-sans mt-4">
          Player belum aktif sebelum siaran resmi siap. Masukkan kode akses resmi tiket streaming untuk verifikasi hak tonton.
        </p>
      </section>

      {/* Main Stream Player & Gate */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-12 w-full flex-1">
        <PpvWatchClient initialCode={code} />
      </div>

    </main>
  );
}
