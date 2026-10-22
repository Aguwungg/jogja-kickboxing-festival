import prisma from "@/lib/prisma";
import JadwalClient from "@/components/schedule/JadwalClient";

export const metadata = {
  title: "Jadwal Acara 3 Hari | JKBF 2026",
  description:
    "Rundown resmi kronologis 3 hari festival kickboxing dan musik Jogja Kickboxing Festival di GOR UNY Yogyakarta: 12—14 Desember 2026.",
};

export default async function JadwalPage() {
  const scheduleItems = await prisma.scheduleItem.findMany({
    where: { isPublished: true },
    orderBy: [{ day: "asc" }, { id: "asc" }],
  });

  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#09090B] text-[#FAFAFA] pt-24 lg:pt-32 pb-24 font-sans">
      {/* Hero */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-6 pb-8 w-full border-b border-white/10">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-2.5 h-2.5 bg-[#D91F2C]" />
          <p className="font-technical text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
            KRONOLOGI FESTIVAL • 12–14 DESEMBER 2026
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.85] text-white">
              JADWAL<br />
              <span className="text-[#D91F2C]">RUNDOWN RESMI.</span>
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-white/60 font-sans max-w-sm sm:text-right">
            Pilih hari untuk meninjau partai eliminasi kickboxing dan pertunjukan panggung musik di GOR UNY Colombo.
          </p>
        </div>
      </section>

      {/* Interactive Schedule Component */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-8 w-full flex-1">
        <JadwalClient initialItems={scheduleItems} />
      </section>
    </main>
  );
}
