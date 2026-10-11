import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import { Music, Calendar, MapPin, Sparkles, ArrowRight } from "lucide-react";
import { EVENT_CONFIG } from "@/lib/event-config";

export const metadata = {
  title: "Lineup Musik & Panggung Festival — JKB 2026",
  description: "Deretan penampil musik dan panggung festival Jogja Kickboxing Festival & Redy Championship 2: 12-14 Desember 2026 di GOR UNY Yogyakarta.",
};

export default async function LineupPage() {
  const performers = await prisma.performer.findMany({
    where: { isPublished: true },
    orderBy: { createdAt: "asc" },
  });

  return (
    <div className="flex-1 flex flex-col w-full min-h-screen text-[#F5F3EE] bg-[#09090B] pt-24 pb-20">
      
      {/* Editorial Header */}
      <section className="relative w-full border-b border-white/10 overflow-hidden py-14 md:py-20 bg-[#171719]/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-[#E2BA75]/30 bg-[#E2BA75]/10 text-[#E2BA75] text-xs font-bold tracking-widest uppercase">
            <Music className="w-3.5 h-3.5" />
            <span>THE STAGE • LIVE MUSIC FESTIVAL</span>
          </div>

          <h1
            className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-none"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            LINEUP <span className="text-[#E2BA75]">MUSIK FESTIVAL</span>
          </h1>

          <p className="text-[#9A9AA2] text-sm sm:text-base max-w-2xl leading-relaxed">
            Panggung musik spektakuler berpadu dengan tensi kejuaraan kickboxing. Rangkaian kurasi musisi pilihan untuk merayakan kultur dan energi anak muda Yogyakarta di GOR UNY.
          </p>

          <div className="flex flex-wrap items-center gap-3 text-xs text-[#C4C4CC] pt-2">
            <span className="flex items-center gap-1.5 bg-[#171719] px-3 py-1.5 rounded-sm border border-white/5">
              <Calendar className="w-3.5 h-3.5 text-[#D91F2C]" />
              12–14 Desember 2026
            </span>
            <span className="flex items-center gap-1.5 bg-[#171719] px-3 py-1.5 rounded-sm border border-white/5">
              <MapPin className="w-3.5 h-3.5 text-[#D91F2C]" />
              GOR UNY, Yogyakarta
            </span>
          </div>
        </div>
      </section>

      {/* Performers Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 w-full">
        {performers.length === 0 ? (
          /* Tasteful Announcement State */
          <div className="bg-[#171719] border border-white/10 p-12 text-center rounded-sm space-y-4 max-w-xl mx-auto">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#E2BA75]/10 border border-[#E2BA75]/30 flex items-center justify-center text-[#E2BA75]">
              <Sparkles className="w-6 h-6" />
            </div>
            <h2
              className="text-2xl font-black uppercase text-white"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              LINEUP AKAN SEGERA DIUMUMKAN
            </h2>
            <p className="text-xs sm:text-sm text-[#9A9AA2] leading-relaxed">
              Daftar musisi dan jadwal tampil resmi festival JKB 2026 sedang dalam proses kurasi akhir dan akan diumumkan secara berkala melalui kanal resmi.
            </p>
            <div className="pt-2">
              <Link
                href="/jadwal"
                className="inline-flex items-center gap-1.5 font-display font-bold text-xs uppercase tracking-widest text-[#D91F2C] hover:underline"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                <span>Lihat Jadwal Harian Acara</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ) : (
          /* Performer-First Grid (Songkick / Primavera Sound pattern) */
          <div className="space-y-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h2
                className="text-xl sm:text-2xl font-black uppercase text-white tracking-wide"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                PENAMPIL TERKONFIRMASI
              </h2>
              <Link
                href="/jadwal"
                className="text-xs font-bold uppercase tracking-wider text-[#D91F2C] hover:underline flex items-center gap-1"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                <span>Jadwal Panggung</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {performers.map((p) => (
                <div
                  key={p.id}
                  className="bg-[#171719] border border-white/10 rounded-sm overflow-hidden flex flex-col group hover:border-[#E2BA75]/40 transition-all"
                >
                  <div className="relative aspect-[16/10] w-full bg-[#252529] overflow-hidden">
                    <Image
                      src={p.image || "/images/jkb/hero-concert.jpg"}
                      alt={p.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171719] via-transparent to-transparent" />
                    {p.stage && (
                      <div className="absolute top-3 left-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm bg-black/75 border border-white/15 text-[#E2BA75] backdrop-blur-sm">
                          {p.stage}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <h3
                        className="text-2xl font-black uppercase text-white tracking-tight group-hover:text-[#E2BA75] transition-colors leading-tight"
                        style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                      >
                        {p.name}
                      </h3>
                      {p.description && (
                        <p className="text-xs text-[#9A9AA2] leading-relaxed mt-1 line-clamp-3">
                          {p.description}
                        </p>
                      )}
                    </div>

                    <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-[#9A9AA2]">
                      <span className="inline-flex items-center gap-1 text-[#E2BA75] font-semibold text-[11px] uppercase tracking-wider">
                        <Sparkles className="w-3 h-3" />
                        Panggung Festival
                      </span>
                      <span>GOR UNY</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

    </div>
  );
}
