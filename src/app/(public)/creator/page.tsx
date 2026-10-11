import prisma from "@/lib/prisma";
import CreatorClient from "@/components/creator/CreatorClient";
import {
  registerCreatorAction,
  submitContentAction,
  claimBarcodeAction,
  applyAccreditationAction,
} from "./actions";
import { Video, Sparkles, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Creator Hub & Akreditasi Media — JKB 2026",
  description:
    "Portal resmi kemitraan kreator konten, pengajuan submission video, klaim tiket harian, dan akreditasi pers peliput Jogja Kickboxing Festival & Redy Championship 2.",
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
    <div className="flex-1 flex flex-col w-full min-h-screen text-[#F6F3EC] bg-[#09090b] pt-24 pb-20">
      {/* Hero Header */}
      <section className="border-b border-white/10 py-12 md:py-20 bg-[#171719]/40 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/5 text-white/80 text-xs font-bold tracking-widest uppercase mb-4">
            <Video className="w-3.5 h-3.5 text-[#EF3340]" />
            PROGRAM KREATOR & PELIPUTAN RESMI
          </div>

          <h1
            className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-none mb-4"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            CREATOR HUB <span className="text-[#EF3340]">& MEDIA ACCREDITATION</span>
          </h1>

          <p className="text-[#99999F] text-base sm:text-lg font-sans max-w-3xl leading-relaxed mb-8">
            Amplifikasi sportainment terbesar di Yogyakarta. Raih akses ringside eksklusif, klaim tiket harian gratis lewat konten viral, dan rebut hadiah leaderboard jutaan rupiah bersama JKB 2026.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#action-hub"
              className="bg-[#EF3340] hover:bg-[#D91F2C] text-white font-bold uppercase tracking-wider px-6 py-3.5 rounded-sm text-sm transition-all shadow-lg shadow-[#EF3340]/20 flex items-center gap-2"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              <Sparkles className="w-4 h-4" />
              Gabung Creator Program
            </a>
            <Link
              href="/creator/dashboard"
              className="bg-transparent hover:bg-white/5 border border-white/20 text-white font-bold uppercase tracking-wider px-6 py-3.5 rounded-sm text-sm transition-all"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              Lihat Dashboard Saya &rarr;
            </Link>
          </div>
        </div>

        {/* Ambient Gradient Glow */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#EF3340]/10 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Main Content Area */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <CreatorClient
          creators={topCreators}
          allCreatorsForSelect={allCreators}
          registerCreatorAction={registerCreatorAction}
          submitContentAction={submitContentAction}
          claimBarcodeAction={claimBarcodeAction}
          applyAccreditationAction={applyAccreditationAction}
        />
      </section>
    </div>
  );
}
