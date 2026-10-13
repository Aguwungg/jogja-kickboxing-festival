import prisma from "@/lib/prisma";
import CreatorClient from "@/components/creator/CreatorClient";
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
    <main className="flex-1 flex flex-col w-full min-h-screen text-[#F4F0E8] bg-[#0B0B0B] pt-24 pb-20">
      
      {/* Editorial Header */}
      <section className="relative w-full border-b border-white/10 py-16 md:py-24 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="v9-overline text-[#D91F2C]">
              KOLABORASI DIGITAL & MEDIA PELIPUT
            </span>
            <Link
              href="/creator/dashboard"
              className="text-xs font-mono text-[#D91F2C] hover:underline uppercase flex items-center gap-1"
            >
              <span>BUKA DASHBOARD PERSONAL KREATOR</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <h1
            className="v9-display-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F4F0E8]"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            CREATOR HUB
          </h1>

          <p className="text-base sm:text-lg text-[#F4F0E8] font-bold uppercase tracking-wider font-display">
            DOKUMENTASIKAN ENERGI #JOGJAPUNYANYALI SECARA LANGSUNG
          </p>

          <p className="text-xs sm:text-sm text-[#8F8E8B] max-w-2xl leading-relaxed font-sans">
            Ruang kolaborasi bagi video creator, fotografer olahraga, jurnalis, dan pegiat media sosial. Dapatkan akses peliputan resmi di GOR UNY Yogyakarta dan tayangkan karyamu ke publik.
          </p>
        </div>
      </section>

      {/* Main Interactive Client */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full flex-1">
        <CreatorClient
          creators={topCreators as any}
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
