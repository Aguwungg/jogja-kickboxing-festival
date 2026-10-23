import JadwalClient from "@/components/schedule/JadwalClient";

export const metadata = {
  title: "Jadwal Resmi 3 Hari | JKBF 2026",
  description:
    "Rundown kronologis resmi 3 hari Jogja Kickboxing Festival & Redy Championship 2 di GOR UNY Yogyakarta: 12–14 Desember 2026.",
};

export default function JadwalPage() {
  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#0B0B0B] text-[#F4F0E8] pt-24 lg:pt-32 pb-24 font-sans">
      {/* Editorial Page Header */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-6 pb-10 w-full border-b border-white/10">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-2 h-2 bg-[#D91F2C]" />
          <p className="font-technical text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
            RUNDOWN RESMI • 12–14 DESEMBER 2026
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.9] text-[#F4F0E8]">
              JADWAL LAGA & FESTIVAL
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-[#8F8E8B] font-sans max-w-sm sm:text-right">
            Pilih hari untuk meninjau partai eliminasi kickboxing dan pertunjukan panggung musik di GOR UNY Colombo.
          </p>
        </div>
      </section>

      {/* Simplified 3-Day Timeline */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-10 w-full flex-1">
        <JadwalClient />
      </section>
    </main>
  );
}
