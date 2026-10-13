import React from "react";
import PpvWatchClient from "@/components/ppv/PpvWatchClient";

interface Props {
  searchParams: Promise<{ code?: string }>;
}

export const metadata = {
  title: "Live Broadcast Room | JKBF 2026",
  description:
    "Ruang siaran langsung Pay-Per-View Redy Championship 2 dan Jogja Kickboxing Festival dari GOR UNY Yogyakarta.",
};

export default async function PpvWatchPage({ searchParams }: Props) {
  const { code } = await searchParams;

  return (
    <main className="flex-1 flex flex-col w-full min-h-screen text-[#F4F0E8] bg-[#0B0B0B] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1">
        <PpvWatchClient initialCode={code} />
      </div>
    </main>
  );
}
