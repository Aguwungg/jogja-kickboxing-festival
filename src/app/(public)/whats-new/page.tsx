import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { InstagramIcon } from "@/components/layout/SocialIcons";
import WhatsNewGrid from "@/components/whats-new/WhatsNewGrid";
import { EVENT_CONFIG, jkbfLinks } from "@/lib/event-config";
import { getPublishedWhatsNewItems } from "@/lib/whats-new";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "What's New | JKBF 2026",
  description:
    "Kumpulan informasi resmi, cuplikan Reels, dan pengumuman terkini dari Instagram @jogjakickboxingfestival menuju Jogja Kickboxing Festival 2026.",
};

export default async function WhatsNewPage() {
  const items = await getPublishedWhatsNewItems();

  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-black text-[#F5F5F7] pt-24 lg:pt-32 pb-24 font-sans">
      {/* Editorial Header */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 pt-4 pb-10 w-full border-b border-white/[0.08] space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-technical text-xs font-bold uppercase tracking-wider text-[#86868B] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>KEMBALI KE BERANDA</span>
          </Link>

          <span className="font-technical text-[11px] font-bold uppercase tracking-[0.22em] text-[#E2BA75]">
            STAY IN THE FIGHT.
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 bg-[#D91F2C]" />
              <p className="font-technical text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
                THE LATEST FROM JKBF
              </p>
            </div>
            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.88] text-white">
              WHAT&apos;S NEW<span className="text-[#D91F2C]">.</span>
            </h1>
            <p className="text-sm sm:text-base text-[#C4C4CC] leading-relaxed">
              Ikuti informasi terbaru, pengumuman Mega Bintang, dan perkembangan JKBF 2026 langsung dari publikasi resmi Instagram{" "}
              <strong className="text-white">
                {EVENT_CONFIG.social.instagram.handle}
              </strong>
              .
            </p>
          </div>

          <a
            href={jkbfLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#D91F2C] hover:bg-[#B81521] text-white font-display text-base tracking-wider uppercase rounded-xs transition-colors self-start lg:self-end"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>IKUTI {EVENT_CONFIG.social.instagram.handle.toUpperCase()}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Main Filterable Instagram Grid */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-10 w-full flex-1">
        <WhatsNewGrid items={items} variant="fullpage" showFilters />
      </section>
    </main>
  );
}

