import prisma from "@/lib/prisma";
import CreatorClient from "@/components/creator/CreatorClient";
import Image from "next/image";
import {
  registerCreatorAction,
  submitContentAction,
  claimBarcodeAction,
  applyAccreditationAction,
} from "./actions";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Creator Hub & Media Pass | JKBF 2026",
  description:
    "Portal resmi kemitraan kreator konten, submission video, dan akreditasi pers peliput Jogja Kickboxing Festival di GOR UNY Yogyakarta.",
};

export default async function CreatorHubPage() {
  const [topCreators, allCreators] = await Promise.all([
    prisma.creatorProfile.findMany({
      where: { status: "APPROVED" },
      orderBy: { totalPoints: "desc" },
      take: 10,
      include: {
        submissions: {
          select: { id: true, status: true, points: true },
        },
        barcodeClaims: {
          select: { id: true, status: true },
        },
      },
    }),
    prisma.creatorProfile.findMany({
      select: {
        id: true,
        name: true,
        instagram: true,
        tiktok: true,
      },
      orderBy: { name: "asc" },
    }),
  ]);

  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#0B0B0B] text-[#F4F0E8] pt-24 lg:pt-28 pb-24 overflow-x-hidden">
      
      {/* ═════════════════════════════════════════════════════════════════════
          1. EDITORIAL SPLIT HERO
      ═════════════════════════════════════════════ */}
      <section className="relative w-full border-b border-white/10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 min-h-[480px] lg:min-h-[540px]">
          
          <div className="lg:col-span-7 py-12 lg:py-20 flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D91F2C]" />
              <p className="font-technical text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
                PROGRAM KREATOR & PERS • CREATOR HUB
              </p>
            </div>

            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight leading-[0.85] text-white">
              JADI BAGIAN<br />
              DARI CERITA.
            </h1>

            <p className="text-sm sm:text-base text-[#8F8E8B] font-sans max-w-lg leading-relaxed">
              Ruang kreatif dan media untuk JKBF. Akses akreditasi pers resmi dan jalur partisipasi kreator konten digital di arena GOR UNY 2026.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/creator/dashboard"
                className="font-display text-base tracking-wider uppercase text-white bg-[#D91F2C] hover:bg-[#B81521] px-7 py-3.5 transition-colors inline-flex items-center gap-2 ring-1 ring-[#D91F2C]/50 shadow-sm"
              >
                <span>DASHBOARD PERSONAL KREATOR</span>
                <span className="font-technical text-xs">↗</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full -mx-5 sm:-mx-8 lg:mx-0">
            <Image
              src="/images/v9/06_FOTO_KONSER_PLACEHOLDER_INTERNAL.png"
              alt="Creator and Media Pass JKBF"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center grayscale contrast-125"
            />
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. INTERACTIVE CREATOR WORKFLOW
      ═════════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-20 w-full flex-1">
        <CreatorClient
          creators={topCreators}
          allCreatorsForSelect={allCreators}
          registerCreatorAction={registerCreatorAction}
          submitContentAction={submitContentAction}
          claimBarcodeAction={claimBarcodeAction}
          applyAccreditationAction={applyAccreditationAction}
        />
      </section>

    </main>
  );
}
