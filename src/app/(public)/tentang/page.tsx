import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Tentang Festival — Di Balik Kalem | JKBF 2026",
  description: "Mengenal Jogja Kickboxing Festival & Redy Championship 2: Perpaduan kejuaraan tarung profesional dan festival musik pemuda di Yogyakarta.",
};

const PILLARS = [
  {
    number: "01",
    title: "THE RING",
    subtitle: "Pertarungan Kickboxing Profesional",
    desc: "Kejuaraan bergengsi Redy Championship 2 dengan 4 divisi sabuk emas di bawah aturan standar K-1 Rules internasional.",
    link: "/championship",
  },
  {
    number: "02",
    title: "THE STAGE",
    subtitle: "Panggung Terbuka Festival Musik",
    desc: "Tiga malam selebrasi musik dengan kurasi musisi indie rock, hip-hop, dan beat kontemporer pemuda Yogyakarta.",
    link: "/lineup",
  },
  {
    number: "03",
    title: "THE CITY",
    subtitle: "Gerakan Komunitas & City Pride",
    desc: "Dukungan suporter wilayah Bantul, Sleman, Kota Jogja, Kulon Progo, dan Gunungkidul merayakan kebanggaan bersama.",
    link: "/city-pride",
  },
];

export default function TentangPage() {
  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#0B0B0B] text-[#F4F0E8] pt-24 lg:pt-28 pb-24 overflow-x-hidden">
      
      {/* ═════════════════════════════════════════════════════════════════════
          1. EDITORIAL SPLIT MANIFESTO HERO (Matches 15_tentang.png)
      ═════════════════════════════════════════════ */}
      <section className="relative w-full border-b border-white/10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 min-h-[480px] lg:min-h-[540px]">
          
          <div className="lg:col-span-7 py-12 lg:py-20 flex flex-col justify-center space-y-6">
            <p
              className="text-[#D91F2C] text-xs sm:text-sm font-extrabold uppercase tracking-[0.24em]"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              CERITA FESTIVAL • #JOGJAPUNYANYALI
            </p>

            <h1
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight leading-[0.88] text-white"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              DI BALIK<br />
              KALEM.
            </h1>

            <p className="text-sm sm:text-base text-[#8F8E8B] font-sans max-w-lg leading-relaxed">
              Ada semangat, musik, dan keberanian dari Jogja. Menyatukan disiplin olahraga tarung profesional dengan denyut panggung festival anak muda.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/jadwal"
                className="font-display font-extrabold text-xs sm:text-sm uppercase tracking-wider text-white bg-[#D91F2C] hover:bg-[#B81521] px-7 py-3.5 transition-colors inline-flex items-center gap-1.5"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                <span>JADWAL FESTIVAL ↗</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full -mx-5 sm:-mx-8 lg:mx-0">
            <Image
              src="/images/v9/06_FOTO_KONSER_PLACEHOLDER_INTERNAL.png"
              alt="Atmosfer Festival JKBF"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center grayscale contrast-125"
            />
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. 3 PILLARS OF EXPERIENCE
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-20 w-full space-y-12">
        <div className="space-y-3 pb-8 border-b border-white/10">
          <p
            className="text-[#D91F2C] text-xs font-extrabold uppercase tracking-[0.24em]"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            PENYELENGGARA • REDY CHAMPIONSHIP 2
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tight text-white"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            SATU FESTIVAL. BANYAK CERITA.
          </h2>
          <p className="text-sm text-[#8F8E8B] font-sans max-w-xl">
            Tiga pilar pengalaman yang menjadikan Jogja Kickboxing Festival sebuah perayaan akbar olahraga dan seni di Yogyakarta.
          </p>
        </div>

        {/* Clean 3 Pillars Rows */}
        <div className="border-t border-white/10 divide-y divide-white/10">
          {PILLARS.map((p) => (
            <div
              key={p.number}
              className="py-10 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-baseline transition-colors hover:bg-white/[0.02]"
            >
              <span className="text-[#D91F2C] font-mono text-sm sm:text-base font-bold md:col-span-1">
                {p.number}
              </span>
              <div className="md:col-span-4 space-y-1">
                <h3
                  className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  {p.title}
                </h3>
                <span className="text-xs uppercase font-mono text-[#8F8E8B]">{p.subtitle}</span>
              </div>
              <p className="text-sm text-[#8F8E8B] md:col-span-5 font-sans leading-relaxed">
                {p.desc}
              </p>
              <div className="md:col-span-2 text-left md:text-right">
                <Link
                  href={p.link}
                  className="font-display font-black text-xs uppercase tracking-wider text-white hover:text-[#D91F2C] inline-flex items-center gap-1 transition-colors"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  <span>EKSPLORASI</span>
                  <span>↗</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </section>

    </main>
  );
}
