import { Metadata } from "next";
import Arena3DClient from "@/components/arena3d/Arena3DClient";

export const metadata: Metadata = {
  title: "Explore the Arena 3D | JKBF 2026",
  description:
    "Jelajahi rancangan arena JKBF 2026 dalam tampilan 3D interaktif. Putar sudut pandang, zoom, dan lihat perbandingan konfigurasi Layout 01 (Tatami + Ring) dan Layout 02 (Ring + Standing).",
  robots: {
    index: false, // Internal preview under publication embargo
    follow: false,
  },
};

export default function Arena3DPage() {
  return (
    <main className="flex-1 flex flex-col w-full min-h-screen bg-[#070709] text-white pt-20 lg:pt-24 font-sans overflow-x-hidden">
      <Arena3DClient />
    </main>
  );
}
