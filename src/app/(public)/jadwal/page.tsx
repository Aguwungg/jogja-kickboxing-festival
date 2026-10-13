import prisma from "@/lib/prisma";
import JadwalClient from "@/components/schedule/JadwalClient";
import { AlertCircle } from "lucide-react";

export const metadata = {
  title: "Jadwal Pertandingan & Panggung Acara | JKBF 2026",
  description: "Rundown resmi 3 hari festival kickboxing dan musik Jogja Kickboxing Festival di GOR UNY Yogyakarta: 12—14 Desember 2026.",
};

export default async function JadwalPage() {
  const scheduleItems = await prisma.scheduleItem.findMany({
    where: { isPublished: true },
    orderBy: [{ day: "asc" }, { id: "asc" }],
  });

  return (
    <main className="flex-1 flex flex-col w-full min-h-screen text-[#F4F0E8] bg-[#0B0B0B] pt-24 pb-20">
      
      {/* Editorial Header */}
      <section className="border-b border-white/10 py-16 md:py-20 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="v9-overline text-[#D91F2C]">
            TIMETABLE RESMI / 12—14 DESEMBER 2026
          </span>

          <h1
            className="v9-display-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F4F0E8]"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            JADWAL ACARA
          </h1>

          <p className="text-xs sm:text-sm text-[#8F8E8B] font-sans max-w-2xl leading-relaxed">
            Rundown kronologis 3 hari pertandingan kickboxing Redy Championship 2 dan panggung musik festival di GOR UNY Yogyakarta.
          </p>

          <div className="p-4 bg-[#141416] border-l-2 border-[#D91F2C] text-xs text-[#8F8E8B] space-y-1 max-w-2xl">
            <p className="font-bold text-[#F4F0E8] uppercase tracking-wider font-display">
              STANDAR WAKTU & PENYESUAIAN ARENA
            </p>
            <p>
              Seluruh jadwal menggunakan Waktu Indonesia Barat (WIB). Jadwal partai tanding dapat mengalami penyesuaian dinamis sesuai durasi penyelesaian laga (KO/TKO/Keputusan Juri) di atas ring.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Schedule Component */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex-1">
        <JadwalClient initialItems={scheduleItems} />
      </section>

    </main>
  );
}
