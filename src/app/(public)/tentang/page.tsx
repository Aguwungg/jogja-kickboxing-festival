import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Calendar, MapPin } from "lucide-react";

export const metadata = {
  title: "Tentang Festival — Di Balik Kalem | JKBF 2026",
  description: "Mengenal Jogja Kickboxing Festival & Redy Championship 2: Perpaduan kejuaraan tarung profesional dan festival musik pemuda di Yogyakarta.",
};

export default function TentangPage() {
  return (
    <main className="flex-1 flex flex-col w-full min-h-screen text-[#F4F0E8] bg-[#0B0B0B] pt-24 pb-20">
      
      {/* Editorial Header */}
      <section className="relative w-full border-b border-white/10 py-16 md:py-24 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="v9-overline text-[#D91F2C]">
            MANIFESTO FESTIVAL / #JOGJAPUNYANYALI
          </span>

          <h1
            className="v9-display-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F4F0E8]"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            DI BALIK KALEM.
          </h1>

          <p className="text-base sm:text-lg text-[#F4F0E8] font-bold uppercase tracking-wider font-display">
            ADA PERTARUNGAN. ADA ENERGI. ADA KEHORMATAN.
          </p>

          <p className="text-xs sm:text-sm text-[#8F8E8B] max-w-2xl leading-relaxed font-sans">
            Yogyakarta kerap dikenal dengan ritme tenangnya. Namun di balik kesantunan budaya, tersimpan bara keberanian pemuda yang tak gentar di atas ring. Jogja Kickboxing Festival & Redy Championship 2 hadir menyatukan denyut sportivitas kickboxing profesional dengan dentuman panggung festival musik kontemporer.
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

      {/* Editorial Story Section with Imagery */}
      <section className="w-full py-16 border-b border-white/10 bg-[#141416]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 relative h-80 sm:h-96 bg-[#0B0B0B] border border-white/10 overflow-hidden">
              <Image
                src="/images/v9/04_FOTO_FIGHT_DESKTOP_TANPA_TEKST.png"
                alt="Dokumentasi Kickboxing JKBF"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent" />
            </div>

            <div className="lg:col-span-6 space-y-4">
              <span className="v9-overline text-[#D91F2C]">01 / FILOSOFI KAMPANYE</span>
              <h2
                className="v9-display-title text-3xl sm:text-4xl text-[#F4F0E8]"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                MENGAPA #JOGJAPUNYANYALI?
              </h2>
              <p className="text-xs sm:text-sm text-[#8F8E8B] leading-relaxed font-sans">
                #JOGJAPUNYANYALI bukan sekadar slogan media sosial. Ini adalah pernyataan sikap bahwa pemuda Yogyakarta memiliki daya juang tangguh, disiplin bela diri tinggi, dan respek tanpa pamrih. Ring kickboxing adalah tempat kejujuran tertinggi diuji.
              </p>
              <p className="text-xs sm:text-sm text-[#8F8E8B] leading-relaxed font-sans">
                Setiap petarung yang melangkah melewati tali ring membawa nama sasana, keluarga, dan kehormatan wilayahnya. Kemenangan diraih bukan dengan amarah, melainkan presisi teknik dan ketabahan mental.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3 Pillars of Experience */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-12">
        <div className="border-b border-white/10 pb-4">
          <span className="v9-overline text-[#D91F2C]">STRUKTUR PENGALAMAN</span>
          <h2
            className="v9-display-title text-3xl sm:text-4xl text-[#F4F0E8] mt-1"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            TIGA PILAR UTAMA FESTIVAL
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pilar 1: The Ring */}
          <div className="p-8 bg-[#141416] border border-white/10 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[10px] text-[#D91F2C] font-mono tracking-widest uppercase block">01 / THE RING</span>
              <h3 className="font-display font-black text-2xl text-[#F4F0E8] uppercase" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
                REDY CHAMPIONSHIP 2
              </h3>
              <p className="text-xs text-[#8F8E8B] leading-relaxed font-sans">
                Kejuaraan kickboxing profesional dengan aturan ketat K-1 Rules. Mempertarungkan 4 sabuk emas bergengsi: Bantamweight, Featherweight, Lightweight, dan Welterweight.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5">
              <Link href="/championship" className="text-xs font-mono text-[#D91F2C] hover:underline flex items-center gap-1">
                <span>DETAIL KEJUARAAN ↗</span>
              </Link>
            </div>
          </div>

          {/* Pilar 2: The Stage */}
          <div className="p-8 bg-[#141416] border border-white/10 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[10px] text-[#D91F2C] font-mono tracking-widest uppercase block">02 / THE STAGE</span>
              <h3 className="font-display font-black text-2xl text-[#F4F0E8] uppercase" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
                LIVE MUSIC FESTIVAL
              </h3>
              <p className="text-xs text-[#8F8E8B] leading-relaxed font-sans">
                Panggung musik anak muda yang menghadirkan performa band indie, musisi lokal Yogyakarta, dan panggung penutup spektakuler di malam grand final.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5">
              <Link href="/lineup" className="text-xs font-mono text-[#D91F2C] hover:underline flex items-center gap-1">
                <span>LINEUP MUSIK ↗</span>
              </Link>
            </div>
          </div>

          {/* Pilar 3: The City */}
          <div className="p-8 bg-[#141416] border border-white/10 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[10px] text-[#D91F2C] font-mono tracking-widest uppercase block">03 / THE CITY</span>
              <h3 className="font-display font-black text-2xl text-[#F4F0E8] uppercase" style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}>
                CITY PRIDE & KOMUNITAS
              </h3>
              <p className="text-xs text-[#8F8E8B] leading-relaxed font-sans">
                Gerakan solidaritas pemuda lintas wilayah di D.I. Yogyakarta, pasar merchandise streetwear resmi, dan ruang temu kreator konten kreatif.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5">
              <Link href="/city-pride" className="text-xs font-mono text-[#D91F2C] hover:underline flex items-center gap-1">
                <span>CITY PRIDE ↗</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
