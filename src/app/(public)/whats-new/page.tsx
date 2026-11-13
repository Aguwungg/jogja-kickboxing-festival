import Link from "next/link";
import { ArrowUpRight, Bell } from "lucide-react";
import { jkbfLinks } from "@/lib/event-config";
import { InstagramIcon, TikTokIcon } from "@/components/layout/SocialIcons";
import { getPublishedWhatsNewItems } from "@/lib/whats-new";
import WhatsNewGrid from "@/components/whats-new/WhatsNewGrid";

export const metadata = {
  title: "What's New: Kabar & Pengumuman Resmi Instagram | JKBF 2026",
  description:
    "Kanal informasi resmi Instagram Jogja Kickboxing Festival 2026 (@jogjakickboxingfestival). Rilis Mega Bintang, pengumuman regulasi WAKO, dan pembaruan venue GOR Pancasila / Nusantara UGM.",
};

export const revalidate = 60;

export default async function WhatsNewPage() {
  const items = await getPublishedWhatsNewItems();

  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-black text-[#F5F5F7] pt-24 sm:pt-28 lg:pt-36 pb-24 sm:pb-32 font-sans">
      {/* ─────────────────────────────────────────────────────────────────
          HEADER SECTION
         ───────────────────────────────────────────────────────────────── */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-4 pb-12 w-full border-b border-white/[0.08]">
        <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-xs bg-black/80 border border-white/15 mb-4 sm:mb-6">
          <span className="w-2 h-2 rounded-xs bg-[#D91F2C]" />
          <p className="text-[#D91F2C] text-[11px] sm:text-xs font-technical uppercase tracking-[0.25em] font-bold">
            THE LATEST FROM JKBF // OFFICIAL INSTAGRAM FEED
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-3 max-w-3xl">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black uppercase tracking-tight leading-[0.88] text-white">
              WHAT&apos;S <span className="text-[#D91F2C]">NEW.</span>
            </h1>
            <p className="font-technical text-sm sm:text-base uppercase tracking-[0.18em] text-[#C4C4CC] font-semibold">
              KABAR RESMI &amp; PENGUMUMAN FESTIVAL
            </p>
            <p className="text-xs sm:text-sm text-[#A1A1AA] font-sans leading-relaxed pt-1">
              Seluruh rilis resmi, konfirmasi Mega Bintang, video sorotan, dan pembaruan persiapan teknis disalurkan langsung melalui akun Instagram resmi{" "}
              <strong className="text-white">@jogjakickboxingfestival</strong>.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={jkbfLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#D91F2C] hover:bg-[#B81521] text-white font-technical text-xs font-bold uppercase tracking-wider rounded-xs transition-colors shadow-[0_0_20px_rgba(217,31,44,0.35)]"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>FOLLOW INSTAGRAM RESMI</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={jkbfLinks.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-white/[0.06] hover:bg-white/[0.1] border border-white/15 text-white font-technical text-xs font-bold uppercase tracking-wider rounded-xs transition-colors"
            >
              <TikTokIcon className="w-4 h-4" />
              <span>TIKTOK</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION: IMPORTANT UPDATES (TIME-SENSITIVE NOTICES)
         ───────────────────────────────────────────────────────────────── */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-10 w-full">
        <div className="border border-white/10 bg-[#0E0E12] rounded-xs p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between gap-4 border-b border-white/[0.08] pb-4">
            <div className="flex items-center gap-2.5 text-[#D91F2C]">
              <Bell className="w-4 h-4" />
              <h2 className="font-technical text-xs uppercase font-bold tracking-[0.2em] text-[#D91F2C]">
                IMPORTANT UPDATES // PENGUMUMAN PENTING TERVERIFIKASI
              </h2>
            </div>
            <span className="font-technical text-[10px] text-[#86868B] uppercase tracking-wider">
              OFFICIAL ANNOUNCEMENTS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Notice 1 */}
            <div className="p-4 bg-black/60 border border-white/[0.06] rounded-xs space-y-2 flex flex-col justify-between">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[10px] font-technical uppercase">
                  <span className="text-[#EF3340] font-bold tracking-wider">
                    VENUE RESMI
                  </span>
                  <span className="text-[#71717A]">12 NOV 2026</span>
                </div>
                <h3 className="font-display text-base uppercase text-white leading-snug">
                  GOR Pancasila UGM Kini Resmi Bernama GOR Nusantara UGM
                </h3>
                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  UGM resmi memperbarui nama fasilitas gelanggang olahraga pada 9 Januari 2026. Lokasi fisik tetap sama di kawasan Bulaksumur UGM.
                </p>
              </div>
              <Link
                href="/venue"
                className="inline-flex items-center gap-1 text-[11px] font-technical text-[#EF3340] hover:text-white uppercase font-bold tracking-wider pt-2"
              >
                <span>Lihat Panduan Venue &amp; Rute</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Notice 2 */}
            <div className="p-4 bg-black/60 border border-white/[0.06] rounded-xs space-y-2 flex flex-col justify-between">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[10px] font-technical uppercase">
                  <span className="text-[#EF3340] font-bold tracking-wider">
                    REGISTRASI ATLET
                  </span>
                  <span className="text-[#71717A]">10 NOV 2026</span>
                </div>
                <h3 className="font-display text-base uppercase text-white leading-snug">
                  Pendaftaran Fighter Dibuka Hingga 30 November 2026
                </h3>
                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  Batas waktu pendaftaran resmi diperpanjang melalui Google Form panitia untuk seluruh sasana, camp, SMA, dan perguruan tinggi.
                </p>
              </div>
              <a
                href={jkbfLinks.fighterRegistration}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-technical text-[#EF3340] hover:text-white uppercase font-bold tracking-wider pt-2"
              >
                <span>Isi Formulir Google Form</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            {/* Notice 3 */}
            <div className="p-4 bg-black/60 border border-white/[0.06] rounded-xs space-y-2 flex flex-col justify-between">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[10px] font-technical uppercase">
                  <span className="text-[#EF3340] font-bold tracking-wider">
                    REGULASI TANDING
                  </span>
                  <span className="text-[#71717A]">WAKO RULES</span>
                </div>
                <h3 className="font-display text-base uppercase text-white leading-snug">
                  Standarisasi Tatami &amp; Ringsport WAKO Indonesia
                </h3>
                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  Seluruh nomor pertandingan dijalankan dengan protokol keselamatan dan perangkat wasit bersertifikasi resmi Pengprov KBI DIY.
                </p>
              </div>
              <Link
                href="/championship"
                className="inline-flex items-center gap-1 text-[11px] font-technical text-[#EF3340] hover:text-white uppercase font-bold tracking-wider pt-2"
              >
                <span>Pelajari 7 Program Tanding</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION: CURATED INSTAGRAM POSTS & REELS
         ───────────────────────────────────────────────────────────────── */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-10 w-full">
        <div className="border-b border-white/[0.08] pb-6 mb-8">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-xs bg-[#D91F2C]" />
            <span className="font-technical text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
              INSTAGRAM HIGHLIGHTS
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-white">
            POSTS &amp; REELS TERKURASI
          </h2>
          <p className="text-xs sm:text-sm text-[#A1A1A6] font-sans mt-1 max-w-2xl leading-relaxed">
            Klik kartu untuk membuka publikasi asli langsung di aplikasi atau situs web Instagram @jogjakickboxingfestival.
          </p>
        </div>

        <WhatsNewGrid items={items} variant="fullpage" showFilters={true} />
      </section>
    </main>
  );
}
