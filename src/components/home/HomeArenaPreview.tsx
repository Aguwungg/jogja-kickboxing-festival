"use client";

import React, { useState, useRef } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { LAYOUT_CONFIGS } from "@/components/arena3d/arena3d-data";
import { Arena3DViewerRef } from "@/components/arena3d/Arena3DViewer";

const Arena3DViewer = dynamic(
  () => import("@/components/arena3d/Arena3DViewer"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[380px] sm:min-h-[460px] flex flex-col items-center justify-center bg-[#070709] text-white space-y-3">
        <div className="w-10 h-10 border-2 border-[#D91F2C] border-t-transparent rounded-full animate-spin" />
        <div className="text-[10px] uppercase tracking-widest text-[#86868B] font-technical">
          MEMUAT PREVIEW 3D ARENA JKBF...
        </div>
      </div>
    ),
  }
);

export default function HomeArenaPreview() {
  const [layoutId, setLayoutId] = useState<1 | 2>(1);
  const [activePreset, setActivePreset] = useState<
    "DEFAULT" | "TOP" | "RING" | "STAGE" | null
  >("DEFAULT");
  const [webGLFailed, setWebGLFailed] = useState<boolean>(false);

  const viewerRef = useRef<Arena3DViewerRef>(null);
  const currentConfig = LAYOUT_CONFIGS[layoutId];

  return (
    <section className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-20 border-t border-white/[0.08]">
      {/* ── SECTION HEADER ────────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
        <div>
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="w-2 h-2 rounded-full bg-[#D91F2C] animate-pulse" />
            <span className="font-technical text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
              JKBF 2026 • 3D ARENA EXPERIENCE
            </span>
            <span className="text-[9px] bg-white/[0.06] text-[#A1A1A6] px-2 py-0.5 rounded-xs border border-white/10 font-technical">
              DRAFT PERENCANAAN
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#F5F5F7] leading-[0.92]">
            ARENA PERTANDINGAN<span className="text-[#D91F2C]">.</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#86868B] font-sans max-w-xl mt-2 leading-relaxed">
            Simulasi 3D berskala hall 35 × 25 m resmi JKBF 2026. Putar sudut
            pandang secara langsung untuk melihat layout ring pertandingan,
            tatami, panggung LED, dan barisan kursi VIP.
          </p>
        </div>

        {/* Layout Switcher Tabs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          <div className="flex bg-[#111114] p-1 rounded-sm border border-white/10">
            <button
              onClick={() => setLayoutId(1)}
              className={`flex-1 sm:flex-initial px-3 sm:px-4 py-2 rounded-xs text-[11px] sm:text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                layoutId === 1
                  ? "bg-[#D91F2C] text-white shadow-md shadow-red-950/40"
                  : "text-[#A1A1A6] hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white opacity-80" />
              <span>LAYOUT 01: TATAMI + RING</span>
            </button>

            <button
              onClick={() => setLayoutId(2)}
              className={`flex-1 sm:flex-initial px-3 sm:px-4 py-2 rounded-xs text-[11px] sm:text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                layoutId === 2
                  ? "bg-[#D91F2C] text-white shadow-md shadow-red-950/40"
                  : "text-[#A1A1A6] hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white opacity-80" />
              <span>LAYOUT 02: RING + STANDING</span>
            </button>
          </div>

          <Link
            href="/arena-3d"
            className="hidden lg:inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#D91F2C] hover:bg-[#B81521] text-white font-display text-xs tracking-wider uppercase transition-all rounded-xs shadow-[0_0_20px_rgba(217,31,44,0.35)]"
          >
            <span>BUKA 3D LENGKAP</span>
            <ArrowUpRight className="w-4 h-4 text-white" />
          </Link>
        </div>
      </div>

      {/* ── 3D CANVAS SHOWCASE CONTAINER ──────────────────────────────── */}
      <div className="relative w-full rounded-sm border border-white/10 bg-[#070709] overflow-hidden shadow-2xl">
        <div className="relative w-full h-[380px] sm:h-[460px] md:h-[520px]">
          {webGLFailed ? (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#0d0d12]">
              <div className="max-w-md p-6 bg-[#14141c] border border-red-900/50 rounded-sm">
                <div className="text-[#D91F2C] font-black text-lg mb-1">
                  SKEMA LAYOUT ARENA JKBF
                </div>
                <p className="text-xs text-[#A1A1A6] mb-3">
                  Mode 3D interaktif memerlukan peramban dengan dukungan WebGL.
                </p>
                <div className="text-left text-xs space-y-1 bg-black/60 p-3 rounded-xs font-mono text-[#F5F5F7]">
                  <div>📐 Dimensi: 35 × 25 Meter</div>
                  <div>🥊 Ring: 6 × 6 Meter WAKO Standard</div>
                  <div>💺 VIP Lepasan: {currentConfig.looseVipSeats} kursi</div>
                  <div>👥 Standing: {currentConfig.standingEstimate}</div>
                </div>
              </div>
            </div>
          ) : (
            <Arena3DViewer
              ref={viewerRef}
              layoutId={layoutId}
              selectedZoneId={null}
              onSelectZone={() => {}}
              showLabels={true}
              activePreset={activePreset}
              onPresetChange={setActivePreset}
              onWebGLUnsupported={() => setWebGLFailed(true)}
            />
          )}

          {/* Floating Camera Presets Bar */}
          <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 bg-[#0a0a0e]/90 backdrop-blur-md p-1 rounded-sm border border-white/10 shadow-lg">
            <button
              onClick={() => {
                setActivePreset("DEFAULT");
                viewerRef.current?.resetView();
              }}
              className={`px-2.5 py-1 text-[9px] font-bold rounded-xs transition-colors ${
                activePreset === "DEFAULT"
                  ? "bg-[#D91F2C] text-white"
                  : "bg-white/[0.04] text-[#A1A1A6] hover:text-white"
              }`}
            >
              DEFAULT 3D
            </button>

            <button
              onClick={() => {
                setActivePreset("TOP");
                viewerRef.current?.topView();
              }}
              className={`px-2.5 py-1 text-[9px] font-bold rounded-xs transition-colors ${
                activePreset === "TOP"
                  ? "bg-[#D91F2C] text-white"
                  : "bg-white/[0.04] text-[#A1A1A6] hover:text-white"
              }`}
            >
              TOP VIEW 2D
            </button>

            <button
              onClick={() => {
                setActivePreset("RING");
                viewerRef.current?.focusRing();
              }}
              className={`px-2.5 py-1 text-[9px] font-bold rounded-xs transition-colors ${
                activePreset === "RING"
                  ? "bg-[#D91F2C] text-white"
                  : "bg-white/[0.04] text-[#A1A1A6] hover:text-white"
              }`}
            >
              FOCUS RING
            </button>
          </div>

          {/* Floating Interaction Hint */}
          <div className="absolute bottom-3 left-3 z-10 hidden sm:flex items-center gap-2 bg-[#0a0a0e]/85 backdrop-blur-md px-3 py-1.5 rounded-sm border border-white/10 text-[10px] font-technical text-[#86868B]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D91F2C]" />
            <span>DRAG UNTUK MEMUTAR · SCROLL/PINCH UNTUK ZOOM</span>
          </div>

          {/* Direct CTA overlay on bottom right */}
          <div className="absolute bottom-3 right-3 z-10">
            <Link
              href="/arena-3d"
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 bg-[#D91F2C] hover:bg-[#B81521] text-white font-display text-[11px] sm:text-xs tracking-wider uppercase transition-all rounded-xs shadow-lg active:scale-95"
            >
              <span>JELAJAHI ARENA 3D LENGKAP</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </Link>
          </div>
        </div>

        {/* ── SPEC SUMMARY STRIP (BELOW VIEWER) ─────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-white/10 divide-x divide-white/10 bg-[#0d0d12]">
          <div className="p-3 sm:p-4">
            <div className="text-[10px] font-technical uppercase text-[#86868B]">
              DIMENSI HALL
            </div>
            <div className="text-sm sm:text-base font-bold text-[#F5F5F7] mt-0.5">
              35 × 25 Meter
            </div>
            <div className="text-[10px] text-[#A1A1A6] mt-0.5">
              Lorong sirkulasi 1.5 m
            </div>
          </div>

          <div className="p-3 sm:p-4">
            <div className="text-[10px] font-technical uppercase text-[#86868B]">
              RING PERTANDINGAN
            </div>
            <div className="text-sm sm:text-base font-bold text-[#D91F2C] mt-0.5">
              6 × 6 Meter
            </div>
            <div className="text-[10px] text-[#A1A1A6] mt-0.5">
              Standar Resmi WAKO
            </div>
          </div>

          <div className="p-3 sm:p-4">
            <div className="text-[10px] font-technical uppercase text-[#86868B]">
              TOTAL VIP KURSI
            </div>
            <div className="text-sm sm:text-base font-bold text-[#F5F5F7] mt-0.5">
              {currentConfig.looseVipSeats} Lepas + 36 Meja
            </div>
            <div className="text-[10px] text-[#A1A1A6] mt-0.5">
              Kursi Futura &amp; 9 Meja Bundar
            </div>
          </div>

          <div className="p-3 sm:p-4">
            <div className="text-[10px] font-technical uppercase text-[#86868B]">
              ESTIMASI STANDING
            </div>
            <div className="text-sm sm:text-base font-bold text-[#F5F5F7] mt-0.5">
              {currentConfig.standingEstimate}
            </div>
            <div className="text-[10px] text-[#A1A1A6] mt-0.5">
              {currentConfig.standingDensity}
            </div>
          </div>
        </div>
      </div>

      {/* ── DISCLAIMER NOTE ───────────────────────────────────────────── */}
      <div className="mt-4 flex items-start gap-2 text-[11px] text-[#86868B] leading-relaxed">
        <span className="text-[#D91F2C] font-bold">ℹ</span>
        <p>
          <strong className="text-[#A1A1A6]">Catatan Perencanaan: </strong>
          Angka merupakan estimasi berdasarkan rancangan layout dan bukan
          kapasitas operasional final. Penyelenggara berhak menyesuaikan alokasi
          teknis demi keselamatan dan kelancaran kejuaraan.
        </p>
      </div>
    </section>
  );
}

