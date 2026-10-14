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
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#D91F2C]" />
          <p className="font-technical text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
            KRONOLOGI FESTIVAL • 12–14 DESEMBER 2026
          </p>
        </div>

        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tight leading-[0.85] text-[#0B0B0B] mb-5">
          JADWAL<br />
          ACARA.
        </h1>

        <p className="text-sm sm:text-base text-[#5A5957] max-w-xl font-sans leading-relaxed">
          Pilih hari untuk meninjau partai eliminasi kickboxing dan pertunjukan panggung musik yang telah terkonfirmasi resmi di GOR UNY Yogyakarta.
        </p>
      </section>

      {/* Interactive Schedule Component */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 w-full flex-1">
        <JadwalClient initialItems={scheduleItems} />
      </section>
    </main>
  );
}
