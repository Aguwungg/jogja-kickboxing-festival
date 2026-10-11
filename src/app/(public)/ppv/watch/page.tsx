import React from "react";
import PpvWatchClient from "@/components/ppv/PpvWatchClient";

interface Props {
  searchParams: Promise<{ code?: string }>;
}

export const metadata = {
  title: "Live Broadcast Room — JKB 2026 PPV",
  description:
    "Ruang siaran langsung Pay-Per-View Redy Championship 2 & Jogja Kickboxing Festival. Multi-kamera ringside, audio komentator resmi, dan live scorecard arena.",
};

export default async function PpvWatchPage({ searchParams }: Props) {
  const { code } = await searchParams;

  return (
    <div className="flex-1 flex flex-col w-full min-h-screen text-[#F6F3EC] bg-[#09090b] pt-24 pb-16">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1">
        <PpvWatchClient initialCode={code} />
      </main>
    </div>
  );
}
