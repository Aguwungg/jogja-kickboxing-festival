import type { Metadata } from "next";
import PrototypeNavbar from "@/components/prototype/PrototypeNavbar";
import PrototypeHero from "@/components/prototype/PrototypeHero";
import PrototypeRingStage from "@/components/prototype/PrototypeRingStage";
import PrototypePlanVisit from "@/components/prototype/PrototypePlanVisit";
import PrototypeBeyondFestival from "@/components/prototype/PrototypeBeyondFestival";
import PrototypeFooter from "@/components/prototype/PrototypeFooter";

export const metadata: Metadata = {
  title: "JKB 2026 — Homepage Prototype V8 | RAW ENERGY × FESTIVAL CULTURE",
  description: "High-Fidelity Interactive Homepage Prototype V8 for Jogja Kickboxing Festival & Redy Championship 2. Internal Design Validation Preview.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function HomepageV8PreviewPage() {
  return (
    <div className="min-h-screen bg-[#09090B] text-[#F5F3EE] flex flex-col font-sans selection:bg-[#D91F2C] selection:text-white">
      {/* Isolated Prototype Navigation Header */}
      <PrototypeNavbar />

      <main className="flex-1 flex flex-col w-full">
        {/* SECTION 01: IMMERSIVE HERO */}
        <PrototypeHero />

        {/* SECTION 02: THE RING / THE STAGE */}
        <PrototypeRingStage />

        {/* SECTION 03: PLAN YOUR VISIT (WARM IVORY TRANSITION) */}
        <PrototypePlanVisit />

        {/* SECTION 04: BEYOND THE FESTIVAL (COMMUNITY & APPAREL) */}
        <PrototypeBeyondFestival />
      </main>

      {/* Isolated Prototype Footer */}
      <PrototypeFooter />
    </div>
  );
}
