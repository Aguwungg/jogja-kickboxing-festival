import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import { Music, Mic2, Sparkles, MapPin, Calendar, AlertTriangle, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Lineup Musik & Hiburan — JKB 2026",
  description: "Deretan penampil musik dan panggung festival Jogja Kickboxing Festival & Redy Championship 2: 12-14 Desember 2026.",
};

export default async function LineupPage() {
  const performers = await prisma.performer.findMany({
    where: { isPublished: true },
    orderBy: { createdAt: "asc" },
  });

  return (
    <div className="flex-1 flex flex-col w-full min-h-screen text-[#F6F3EC] bg-[#09090b] pt-24 pb-20">
      {/* Hero Banner */}
      <section className="relative w-full border-b border-white/10 overflow-hidden py-16 md:py-24 bg-[#171719]/40">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/jkb/hero-concert.jpg"
            alt="Panggung Festival Musik JKB 2026"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">
            <Music className="w-3.5 h-3.5" />
            THE STAGE • LIVE ENTERTAINMENT
          </div>

          <h1
            className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-none mb-4"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            LINEUP <span className="text-amber-400">MUSIK & FESTIVAL</span>
          </h1>

          <p className="text-[#99999F] text-base sm:text-lg font-sans max-w-2xl leading-relaxed mb-6">
            Merayakan energi pertarungan lewat ritme panggung musik. Perpaduan kurasi band independen, hip-hop cyphers, dan set musik pembakar adrenalin sepanjang akhir pekan 12–14 Desember 2026.
          </p>

          {/* Staging Notice Banner */}
          <div className="flex items-start gap-3 bg-amber-500/10 border border-amber-500/30 p-4 rounded-sm max-w-3xl">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-200/90 font-sans leading-relaxed">
              <span className="font-bold text-amber-300 uppercase block mb-1">
                PEMBERITAHUAN KURASI STAGING / PHASE 1
              </span>
              Lineup berikut merupakan data demonstrasi teknis kurasi hiburan JKB 2026. Rilis resmi musisi bintang tamu nasional dan jadwal tampil resmi akan diumumkan secara bertahap melalui akun Instagram resmi <span className="font-bold text-white">@jkb.championship</span>.
            </div>
          </div>
        </div>
      </section>

      {/* Performers Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
          <div>
            <h2
              className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              DAFTAR PENAMPIL TAHAP 1
            </h2>
            <p className="text-xs text-[#99999F] font-sans">
              Menampilkan {performers.length} aksi panggung terjadwal
            </p>
          </div>

          <Link
            href="/jadwal"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#EF3340] hover:underline"
          >
            Lihat Jam Tampil di Jadwal &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {performers.map((p) => (
            <div
              key={p.id}
              className="bg-[#171719] border border-white/10 rounded-sm overflow-hidden flex flex-col group hover:border-amber-500/40 transition-all"
            >
              <div className="relative aspect-[16/9] w-full bg-black overflow-hidden">
                <Image
                  src={p.image || "/images/jkb/hero-concert.jpg"}
                  alt={p.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171719] via-black/40 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm bg-black/80 border border-white/20 text-white backdrop-blur-sm">
                    {p.stage || "Panggung Utama"}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mb-2 group-hover:text-amber-400 transition-colors"
                    style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                  >
                    {p.name}
                  </h3>
                  <p className="text-[#99999F] text-sm font-sans leading-relaxed mb-6">
                    {p.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-sans text-white/60">
                  <span className="inline-flex items-center gap-1.5 text-amber-400 font-bold">
                    <Sparkles className="w-3.5 h-3.5" />
                    LIVE PERFORMANCE
                  </span>
                  <span>GOR UNY, Yogyakarta</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Festival Experience Features */}
      <section className="bg-[#171719] border-t border-white/10 py-16 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2
              className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight mb-3"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              PENGALAMAN FESTIVAL LEBIH DARI SEKADAR MUSIK
            </h2>
            <p className="text-[#99999F] text-sm font-sans">
              Nikmati fasilitas lengkap dan aktivasi komunitas sepanjang 3 hari penyelenggaraan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-[#09090b] border border-white/10 p-6 rounded-sm">
              <div className="text-2xl mb-3">🍔</div>
              <h4
                className="text-xl font-black uppercase text-white mb-2"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                FOOD & DRINK MARKET
              </h4>
              <p className="text-xs text-[#99999F] font-sans leading-relaxed">
                Puluhan tenant kuliner khas Jogja dan sajian street food siap mengisi energimu dari siang hingga malam hari.
              </p>
            </div>

            <div className="bg-[#09090b] border border-white/10 p-6 rounded-sm">
              <div className="text-2xl mb-3">👕</div>
              <h4
                className="text-xl font-black uppercase text-white mb-2"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                OFFICIAL MERCHANDISE BOOTH
              </h4>
              <p className="text-xs text-[#99999F] font-sans leading-relaxed">
                Dapatkan kaos eksklusif, hoodie festival, dan handwrap resmi edisi terbatas JKB 2026 langsung di lokasi acara.
              </p>
            </div>

            <div className="bg-[#09090b] border border-white/10 p-6 rounded-sm">
              <div className="text-2xl mb-3">⚡</div>
              <h4
                className="text-xl font-black uppercase text-white mb-2"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                INTERACTIVE COMBAT ZONE
              </h4>
              <p className="text-xs text-[#99999F] font-sans leading-relaxed">
                Uji kekuatan pukulanmu di mesin punch reflex arcade, coaching clinic bersama petarung, dan sesi foto eksklusif.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
