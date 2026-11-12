import React from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { InstagramIcon } from "@/components/layout/SocialIcons";
import { EVENT_CONFIG, jkbfLinks } from "@/lib/event-config";
import type { WhatsNewItem } from "@/lib/whats-new";
import WhatsNewGrid from "@/components/whats-new/WhatsNewGrid";

interface WhatsNewSectionProps {
  items: WhatsNewItem[];
}

export default function WhatsNewSection({ items }: WhatsNewSectionProps) {
  return (
    <section
      id="whats-new"
      className="py-16 sm:py-24 bg-[#09090B] border-b border-white/10"
    >
      <div className="editorial-container space-y-10">
        {/* Section Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex flex-wrap items-center gap-3">
              <p className="font-technical text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
                THE LATEST FROM JKBF
              </p>
              <span className="text-white/25" aria-hidden="true">
                •
              </span>
              <span className="font-technical text-[11px] font-bold uppercase tracking-[0.22em] text-[#E2BA75]">
                STAY IN THE FIGHT.
              </span>
            </div>

            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-[0.88]">
              WHAT&apos;S NEW<span className="text-[#D91F2C]">.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#C4C4CC] leading-relaxed">
              Ikuti informasi terbaru, pengumuman Mega Bintang, dan perkembangan JKBF 2026.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 self-start lg:self-end">
            <Link
              href="/whats-new"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#121215] hover:bg-white/[0.08] border border-white/15 text-white font-technical text-xs font-bold uppercase tracking-wider rounded-xs transition-colors"
            >
              <span>ARSIP WHAT&apos;S NEW</span>
              <ChevronRight className="w-4 h-4 text-[#EF3340]" />
            </Link>

            <a
              href={jkbfLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#D91F2C] hover:bg-[#B81521] text-white font-technical text-xs font-bold uppercase tracking-wider rounded-xs transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>{EVENT_CONFIG.social.instagram.handle.toUpperCase()}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Curated Instagram Editorial Feed */}
        <WhatsNewGrid items={items} variant="homepage" />
      </div>
    </section>
  );
}

