import ChampionshipClient from "@/components/championship/ChampionshipClient";
import { EVENT_CONFIG } from "@/lib/event-config";
import { PHOTO_REGISTRY } from "@/lib/photo-registry";

export const metadata = {
  title: "7 Program Kejuaraan | JKBF 2026",
  description:
    "Fight card resmi Jogja Kickboxing Festival 2026: Kejurda DIY 2026, Redy Open Championship II, Camp Open, SMA Open, University Open, Kelas Bintang, dan Mega Bintang.",
};

export default function ChampionshipPage() {
  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-black text-[#F5F5F7] pt-20 lg:pt-24 pb-24 font-sans">
      {/* Fight Poster Editorial Header */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <picture className="absolute inset-0 w-full h-full">
            <source
              media="(max-width: 767px)"
              srcSet={PHOTO_REGISTRY["championship-ring"].mobilePath}
              type="image/webp"
            />
            <img
              src={PHOTO_REGISTRY["championship-ring"].desktopPath}
              alt={PHOTO_REGISTRY["championship-ring"].alt}
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover object-center opacity-65 filter grayscale contrast-120 brightness-95"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/65" />
          <div className="absolute inset-0 combat-grain pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-10 sm:pt-14 pb-10 sm:pb-12 w-full">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-2 h-2 bg-[#D91F2C]" />
            <p className="font-technical text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
              {EVENT_CONFIG.shortName} • {EVENT_CONFIG.dates.display} • {EVENT_CONFIG.venue.name}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h1 className="font-display text-[clamp(3.25rem,1rem+7vw,6.75rem)] font-black uppercase tracking-tight leading-[0.86] text-white">
              7 PROGRAM <span className="text-[#D91F2C]">KEJUARAAN.</span>
            </h1>
            <p className="text-xs sm:text-sm text-[#C4C4CC] font-sans max-w-md lg:text-right leading-relaxed">
              Seluruh partai resmi Jogja Kickboxing Festival 2026 di bawah yurisdiksi Pengprov KBI DIY &amp; regulasi WAKO. Klik program untuk membuka detail kelas dan disiplin.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-14 w-full flex-1">
        <ChampionshipClient />
      </section>
    </main>
  );
}
