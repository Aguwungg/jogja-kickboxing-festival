import ChampionshipClient from "@/components/championship/ChampionshipClient";

export const metadata = {
  title: "Program Kejuaraan | JKBF 2026",
  description:
    "Program kejuaraan resmi Jogja Kickboxing Festival 2026: Kejurda DIY 2026, Redy Open Championship II, Camp Open, SMA Open, University Open, Kelas Bintang, dan Mega Bintang.",
};

export default function ChampionshipPage() {
  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-black text-[#F5F5F7] pt-24 lg:pt-32 pb-24 font-sans">
      {/* Editorial Page Header */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-6 pb-10 w-full border-b border-white/[0.08]">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-2 h-2 bg-[#D91F2C]" />
          <p className="font-technical text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
            KEJUARAAN KICKBOXING • WAKO ACCREDITED
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-2">
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.88] text-[#F5F5F7]">
              PROGRAM<br />KEJUARAAN
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-[#86868B] font-sans max-w-md sm:text-right leading-relaxed">
            Informasi lengkap tujuh program kejuaraan resmi JKBF 2026: Kejurda DIY, Redy Open II, Camp Open, Pelajar SMA, Mahasiswa, serta Partai Pilihan Kelas Bintang &amp; Mega Bintang.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-10 w-full flex-1">
        <ChampionshipClient />
      </section>
    </main>
  );
}
