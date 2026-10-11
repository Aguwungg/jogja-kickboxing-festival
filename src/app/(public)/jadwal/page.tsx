import prisma from "@/lib/prisma";
import JadwalClient from "@/components/schedule/JadwalClient";
import { Calendar, AlertCircle } from "lucide-react";

export const metadata = {
  title: "Jadwal Acara & Pertandingan — JKB 2026",
  description: "Rundown resmi 3 hari Jogja Kickboxing Festival & Redy Championship 2: 12-14 Desember 2026 di GOR UNY Yogyakarta.",
};

export default async function JadwalPage() {
  const scheduleItems = await prisma.scheduleItem.findMany({
    where: { isPublished: true },
    orderBy: [{ day: "asc" }, { id: "asc" }],
  });

  return (
    <div className="flex-1 flex flex-col w-full min-h-screen text-[#F6F3EC] bg-[#09090b] pt-24 pb-20">
      {/* Header Banner */}
      <section className="border-b border-white/10 py-12 md:py-16 bg-[#171719]/40 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/5 text-white/80 text-xs font-bold tracking-widest uppercase mb-4">
            <Calendar className="w-3.5 h-3.5 text-[#EF3340]" />
            RUNDOWN RESMI 3 HARI
          </div>

          <h1
            className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-none mb-4"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            JADWAL <span className="text-[#EF3340]">PERTANDINGAN & FESTIVAL</span>
          </h1>

          <p className="text-[#99999F] text-base sm:text-lg font-sans max-w-2xl leading-relaxed">
            Ikuti perjalanan turnamen kickboxing dari babak penimbangan resmi, penyisihan eliminasi, hingga malam puncak perebutan sabuk juara dan perayaan festival musik.
          </p>

          <div className="mt-6 flex items-center gap-2 text-xs text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3.5 py-2 rounded-sm w-fit font-sans">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>Waktu dapat mengalami penyesuaian teknis di arena pertandingan. Seluruh waktu mengacu pada Waktu Indonesia Barat (WIB).</span>
          </div>
        </div>
      </section>

      {/* Interactive Schedule Component */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <JadwalClient initialItems={scheduleItems} />
      </section>
    </div>
  );
}
