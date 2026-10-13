import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, MapPin, Sparkles } from "lucide-react";

export const metadata = {
  title: "Lineup Musik & Panggung Festival | JKBF 2026",
  description: "Deretan musisi dan performa panggung festival musik Jogja Kickboxing Festival di GOR UNY Yogyakarta.",
};

export default async function LineupPage() {
  const performers = await prisma.performer.findMany({
    where: { isPublished: true },
    orderBy: { createdAt: "asc" },
  });

  return (
    <main className="flex-1 flex flex-col w-full min-h-screen text-[#F4F0E8] bg-[#0B0B0B] pt-24 pb-20">
      
      {/* Editorial Concert Header with Stage Backdrop */}
      <section className="relative w-full border-b border-white/10 py-16 md:py-24 bg-[#141416] overflow-hidden">
        {/* Background Concert Ambience */}
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/images/v9/06_FOTO_KONSER_PLACEHOLDER_INTERNAL.png"
            alt="Panggung Festival Musik JKBF"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-[#141416]/80 to-[#141416]/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="v9-overline text-[#D91F2C]">
            02 / MUSIC FESTIVAL • THE STAGE
          </span>

          <h1
            className="v9-display-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F4F0E8]"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            LINEUP MUSIK
          </h1>

          <p className="text-base sm:text-lg text-[#F4F0E8] font-bold uppercase tracking-wider font-display">
            DENTUMAN BASS. ENERGI PEMUDA YOGYAKARTA.
          </p>

          <p className="text-xs sm:text-sm text-[#8F8E8B] max-w-2xl leading-relaxed font-sans">
            Menghadirkan harmoni musik indie, rock, dan beat kontemporer sebagai pengiring tensi pertarungan kickboxing. Tiga malam getaran musik di GOR UNY, 12—14 Desember 2026.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono">
            <span className="flex items-center gap-1.5 text-[#F4F0E8]">
              <Calendar className="w-3.5 h-3.5 text-[#D91F2C]" />
              12—14 DESEMBER 2026
            </span>
            <span className="flex items-center gap-1.5 text-[#8F8E8B]">
              <MapPin className="w-3.5 h-3.5 text-[#D91F2C]" />
              GOR UNY, YOGYAKARTA
            </span>
          </div>
        </div>
      </section>

      {/* Performers Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full flex-1">
        
        {performers.length === 0 ? (
          /* High-Quality Teaser / Waiting for Official Release */
          <div className="border border-white/10 bg-[#141416] p-12 sm:p-16 text-center space-y-5 max-w-2xl mx-auto">
            <div className="w-12 h-12 mx-auto bg-[#0B0B0B] border border-white/10 flex items-center justify-center text-[#D91F2C]">
              <Sparkles className="w-6 h-6" />
            </div>

            <span className="text-[10px] text-[#D91F2C] font-mono tracking-widest uppercase block">
              STATUS PENGUMUMAN KURASI
            </span>

            <h2
              className="v9-display-title text-3xl sm:text-4xl text-[#F4F0E8]"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              LINEUP AKAN SEGERA DIUMUMKAN
            </h2>

            <p className="text-xs sm:text-sm text-[#8F8E8B] leading-relaxed font-sans max-w-lg mx-auto">
              Kurasi musisi resmi sedang dalam proses finalisasi kontrak penampilan. Pengumuman fase pertama (Phase 1 Lineup) akan dirilis serentak di kanal resmi festival.
            </p>

            <div className="pt-4 flex justify-center gap-4">
              <Link
                href="/jadwal"
                className="v9-btn-ghost text-xs font-display font-extrabold tracking-wider"
              >
                <span>LIHAT TIMETABLE HARIAN</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/tiket"
                className="v9-btn-red text-xs font-display font-extrabold tracking-wider"
              >
                <span>INFO TIKET FESTIVAL</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-10">
            <div className="flex justify-between items-baseline border-b border-white/10 pb-4">
              <div>
                <span className="v9-overline text-[#D91F2C]">ROSTER PENAMPIL</span>
                <h2
                  className="v9-display-title text-3xl text-[#F4F0E8] mt-1"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  MUSISI & BAND TERKONFIRMASI
                </h2>
              </div>
              <Link
                href="/jadwal"
                className="text-xs font-mono text-[#D91F2C] hover:underline uppercase flex items-center gap-1"
              >
                <span>TIMETABLE PANGGUNG ↗</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {performers.map((p) => (
                <div
                  key={p.id}
                  className="bg-[#141416] border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-[#D91F2C] transition-colors"
                >
                  <div className="h-64 bg-[#0B0B0B] relative overflow-hidden">
                    {p.image ? (
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-center grayscale contrast-125 group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0B0B0B]">
                        <span className="font-display text-8xl font-black text-white/5" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
                          {p.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 bg-[#D91F2C] text-white px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest font-bold">
                      {p.stage || "LIVE ACT"}
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <h3
                      className="v9-display-title text-2xl text-[#F4F0E8] group-hover:text-white"
                      style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                    >
                      {p.name}
                    </h3>
                    <p className="text-xs text-[#8F8E8B] line-clamp-2 font-sans">
                      {p.description || "Performa panggung festival di GOR UNY Yogyakarta."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </section>

    </main>
  );
}
