import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, MapPin, Music } from "lucide-react";

export const metadata = {
  title: "Panggung Festival Musik | JKBF 2026",
  description:
    "Panggung konser musik Jogja Kickboxing Festival 2026: Rock, Hip-Hop, dan pertunjukan penutup di GOR UNY Colombo.",
};

interface StageShowcase {
  title: string;
  genre: string;
  day: string;
  time: string;
  image: string;
  tag: string;
}

const STAGE_SHOWCASES: StageShowcase[] = [
  {
    title: "SOUND OF YOGYAKARTA FASE 1",
    genre: "Rock, Alternative & Indie Showcase",
    day: "Sabtu, 12 Desember 2026",
    time: "18:30 – 21:00 WIB",
    image: "/images/lineup/ring-stage.jpg",
    tag: "KONSER PEMBUKA",
  },
  {
    title: "GRAND CLOSING CONCERT",
    genre: "National Headliner & Festival Celebration",
    day: "Senin, 14 Desember 2026",
    time: "18:30 – 21:00 WIB",
    image: "/images/v9/06_FOTO_KONSER_PLACEHOLDER_INTERNAL.png",
    tag: "MALAM PUNCAK",
  },
  {
    title: "COMMUNITY AUDIO & YOUTH MARKET",
    genre: "Hip-Hop Cypher, Beats & Creative Gathering",
    day: "12–14 Desember 2026",
    time: "15:00 – 18:00 WIB",
    image: "/images/lineup/heritage-stage.jpg",
    tag: "OUTDOOR SOUND",
  },
];

export default function LineupPage() {
  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#0B0B0B] text-[#F4F0E8] pt-24 lg:pt-32 pb-24 font-sans">
      
      {/* Editorial Visual-First Hero */}
      <section className="relative w-full border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/v9/06_FOTO_KONSER_PLACEHOLDER_INTERNAL.png"
            alt="Panggung Musik JKBF 2026"
            fill
            priority
            className="object-cover object-center brightness-50 contrast-125 filter grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/70 to-[#0B0B0B]/80" />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-10 pb-16 w-full relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D91F2C]" />
            <span className="font-technical text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
              PANGGUNG MUSIK • 12 & 14 DESEMBER 2026
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pt-2">
            <div>
              <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.9] text-[#F4F0E8]">
                FESTIVAL SOUNDS
              </h1>
              <p className="font-technical text-xs sm:text-sm text-[#8F8E8B] uppercase tracking-wider mt-2">
                GOR UNY COLOMBO • DUA MALAM SELEBRASI MUSIK YOGYAKARTA
              </p>
            </div>

            <Link
              href="/jadwal"
              className="self-start lg:self-end px-7 py-3.5 bg-[#D91F2C] hover:bg-[#B81521] text-white font-display text-base tracking-wider uppercase transition-colors inline-flex items-center gap-2 shadow-lg shadow-red-950/40"
            >
              <span>LIHAT JADWAL 3 HARI</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Editorial Poster Billing — Minimal, Bold, Clean */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12 w-full space-y-12">
        
        {/* Phase Announcement Banner */}
        <div className="p-6 bg-[#141416] border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="font-technical text-[10px] uppercase tracking-[0.25em] text-[#D91F2C] font-bold">
              STATUS RILIS LINEUP RESMI
            </span>
            <h3 className="font-display text-2xl uppercase tracking-wider text-white">
              KURASI TALENTA FASE 1
            </h3>
            <p className="font-sans text-xs text-[#8F8E8B] max-w-xl">
              Roster musisi headliner nasional dan collective indie Jogja sedang dalam finalisasi kontrak resmi panitia. Pengumuman nama artis dipublikasikan secara bertahap.
            </p>
          </div>

          <div className="font-technical text-xs text-[#77716D] border-l border-white/10 pl-4 space-y-1">
            <p className="text-[#F4F0E8] font-bold">12 DES: SABTU MALAM</p>
            <p className="text-[#F4F0E8] font-bold">14 DES: SENIN MALAM</p>
          </div>
        </div>

        {/* Visual Photographic Cards (Visual-First, No Long Paragraphs) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STAGE_SHOWCASES.map((item, idx) => {
            return (
              <div
                key={idx}
                className="group relative h-[420px] sm:h-[480px] overflow-hidden border border-white/10 bg-[#141416] flex flex-col justify-between p-6 sm:p-8 transition-colors hover:border-[#D91F2C]"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center filter grayscale contrast-125 brightness-75 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/60 to-transparent" />
                </div>

                {/* Top Badge */}
                <div className="relative z-10">
                  <span className="font-technical text-[10px] uppercase font-bold tracking-[0.2em] bg-[#0B0B0B]/80 text-[#D91F2C] px-3 py-1 border border-white/10 backdrop-blur-sm">
                    {item.tag}
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="relative z-10 space-y-2">
                  <span className="font-technical text-xs text-[#8F8E8B] block">
                    {item.day} • {item.time}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-[#F4F0E8] group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-technical text-xs text-[#D91F2C] uppercase tracking-wider">
                    {item.genre}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </section>

    </main>
  );
}
