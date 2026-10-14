import prisma from "@/lib/prisma";
import JadwalClient from "@/components/schedule/JadwalClient";

export const metadata = {
  title: "Jadwal Acara 3 Hari | JKBF 2026",
  description: "Rundown resmi kronologis 3 hari festival kickboxing dan musik Jogja Kickboxing Festival di GOR UNY Yogyakarta: 12—14 Desember 2026.",
};

export default async function JadwalPage() {
  const scheduleItems = await prisma.scheduleItem.findMany({
    where: { isPublished: true },
    orderBy: [{ day: "asc" }, { id: "asc" }],
  });

  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#F4F0E8] text-[#0B0B0B] pt-24 lg:pt-28 pb-24">
      {/* Editorial Header */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pt-8 pb-12 w-full">
        <p
          className="text-[#D91F2C] text-xs sm:text-sm font-extrabold uppercase tracking-[0.24em] mb-4"
          style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
        >
          RENCANA KUNJUNGAN
        </p>

        <h1
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight leading-[0.88] text-[#0B0B0B] mb-6"
          style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
        >
          JADWAL<br />
          ACARA.
        </h1>

        <p className="text-sm sm:text-base text-[#5A5957] max-w-xl font-sans leading-relaxed">
          Pilih hari. Temukan agenda pertarungan dan panggung festival yang sudah diumumkan resmi.
        </p>
      </section>

      {/* Interactive Schedule Component */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 w-full flex-1">
        <JadwalClient initialItems={scheduleItems} />
      </section>
    </main>
  );
}
