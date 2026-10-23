import ChampionshipClient from "@/components/championship/ChampionshipClient";

export const metadata = {
  title: "Pertandingan & Hasil | JKBF 2026",
  description:
    "Jadwal pertandingan resmi Kejurda DIY 2026, Redy Open Championship II, dan Partai Bintang di Jogja Kickboxing Festival.",
};

export default function ChampionshipPage() {
  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#0B0B0B] text-[#F4F0E8] pt-24 lg:pt-32 pb-24 font-sans">
      {/* Editorial Page Header */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-6 pb-10 w-full border-b border-white/10">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-2 h-2 bg-[#D91F2C]" />
          <p className="font-technical text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
            KEJUARAAN KICKBOXING • WAKO ACCREDITED
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.9] text-[#F4F0E8]">
              PERTANDINGAN & HASIL
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-[#8F8E8B] font-sans max-w-sm sm:text-right">
            Daftar partai resmi Kejurda Kickboxing DIY 2026, Redy Open Championship II, dan laga bergengsi Partai Bintang.
          </p>
        </div>
      </section>

      {/* Compact Match Matrix Section */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-10 w-full flex-1">
        <ChampionshipClient />
      </section>
    </main>
  );
}
