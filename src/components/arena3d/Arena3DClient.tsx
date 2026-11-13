"use client";

import React, { useState, useRef, useCallback, Suspense } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  BarChart3,
  MapPin,
  Camera,
  Tag,
  Plus,
  Minus,
  Maximize2,
  RotateCcw,
  Layers,
  Ruler,
  Info,
  ChevronDown,
  ChevronUp,
  X,
} from "lucide-react";
import {
  LAYOUT_CONFIGS,
  ARENA_ZONES,
  LEGEND_ITEMS,
  DISCLAIMER_NOTE,
  ZoneDetail,
} from "./arena3d-data";
import { Arena3DViewerRef } from "./Arena3DViewer";
import { RingArenaIcon, StageBackdropIcon } from "./ArenaIcons";

const Arena3DViewer = dynamic(() => import("./Arena3DViewer"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#070709] text-white space-y-4">
      <div className="w-12 h-12 border-2 border-[#ff2d3d] border-t-transparent rounded-full animate-spin" />
      <div className="text-xs uppercase tracking-widest text-neutral-400 font-mono">
        MEMUAT SIMULASI 3D ARENA JKBF...
      </div>
    </div>
  ),
});

type MobileSheetType = "capacity" | "zones" | "camera" | null;

function Arena3DContent() {
  const searchParams = useSearchParams();
  const initialLayout = searchParams.get("layout") === "2" ? 2 : 1;

  const [layoutId, setLayoutId] = useState<1 | 2>(initialLayout);
  const [selectedZone, setSelectedZone] = useState<ZoneDetail | null>(null);
  const [showLabels, setShowLabels] = useState<boolean>(true);
  const [activePreset, setActivePreset] = useState<"DEFAULT" | "TOP" | "RING" | "STAGE" | null>(
    "DEFAULT"
  );
  
  // Desktop overlay states
  const [isCapacityOpen, setIsCapacityOpen] = useState<boolean>(true);
  const [isZonesDrawerOpen, setIsZonesDrawerOpen] = useState<boolean>(false);
  
  // Mobile single-sheet state (only 1 modal active at a time)
  const [activeMobileSheet, setActiveMobileSheet] = useState<MobileSheetType>(null);

  const [, setIsFullscreen] = useState<boolean>(false);
  const [webGLFailed, setWebGLFailed] = useState<boolean>(false);

  const viewerContainerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<Arena3DViewerRef>(null);

  const currentConfig = LAYOUT_CONFIGS[layoutId];

  // Fullscreen toggle handler
  const handleToggleFullscreen = useCallback(() => {
    if (!viewerContainerRef.current) return;
    if (!document.fullscreenElement) {
      viewerContainerRef.current
        .requestFullscreen()
        .then(() => setIsFullscreen(true))
        .catch(() => {});
    } else {
      document
        .exitFullscreen()
        .then(() => setIsFullscreen(false))
        .catch(() => {});
    }
  }, []);

  const handleSelectZone = useCallback((zone: ZoneDetail | null) => {
    setSelectedZone(zone);
    if (zone) {
      setActivePreset(null);
      setActiveMobileSheet(null);
    }
  }, []);

  return (
    <div className="relative w-full bg-[#070709] text-white min-h-[calc(100vh-4rem)] flex flex-col">
      {/* ── TOP HEADER / EMBARGO SAFE TITLE ────────────────────────── */}
      <div className="border-b border-neutral-900 bg-[#09090c]/90 backdrop-blur-md px-4 sm:px-6 py-3 sm:py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-3 sm:gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="inline-block w-2 h-2 rounded-full bg-[#ff2d3d] animate-pulse flex-shrink-0" />
              <span className="text-[10px] font-mono tracking-wider text-[#ff2d3d] uppercase font-bold">
                JKBF 2026 — 3D ARENA
              </span>
              <span className="text-[9px] bg-neutral-800 text-neutral-300 px-2 py-0.5 rounded-sm border border-neutral-700 font-mono">
                GOR PANCASILA UGM
              </span>
            </div>
            <h1 className="text-xl sm:text-3xl font-black uppercase tracking-tight text-white">
              EXPLORE THE ARENA<span className="text-[#ff2d3d]">.</span>
            </h1>
            <p className="text-[11px] sm:text-sm text-neutral-400 max-w-2xl mt-0.5 leading-relaxed hidden sm:block">
              Jelajahi rancangan arena JKBF dalam tampilan 3D interaktif. Putar sudut pandang, zoom,
              dan lihat perbedaan konfigurasi arena kejuaraan.
            </p>
          </div>

          {/* LAYOUT SELECTOR TABS */}
          <div className="w-full sm:w-auto flex gap-1.5 bg-[#121217] p-1 rounded-sm border border-neutral-800">
            <button
              onClick={() => {
                setLayoutId(1);
                if (selectedZone?.daySpecific === 2) setSelectedZone(null);
              }}
              className={`flex-1 sm:flex-initial min-w-0 sm:min-w-fit px-2.5 sm:px-4 py-2 rounded-sm text-center transition-all duration-150 flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-2 ${
                layoutId === 1
                  ? "bg-[#ff2d3d] text-white shadow-md shadow-red-950/40"
                  : "text-neutral-300 hover:text-white hover:bg-neutral-800/60"
              }`}
            >
              <div className="flex items-center justify-center gap-1.5 w-full min-w-0 sm:w-auto">
                <span className="w-1.5 h-1.5 rounded-full bg-white opacity-80 flex-shrink-0" />
                <span className="font-bold text-[11px] sm:text-xs truncate sm:overflow-visible sm:whitespace-nowrap">
                  DAY 1 (19 DES)
                </span>
              </div>
              <span className="text-[9px] sm:text-xs opacity-85 font-mono sm:font-bold truncate sm:overflow-visible sm:whitespace-nowrap">
                TATAMI + RING
              </span>
            </button>

            <button
              onClick={() => {
                setLayoutId(2);
                if (selectedZone?.daySpecific === 1) setSelectedZone(null);
              }}
              className={`flex-1 sm:flex-initial min-w-0 sm:min-w-fit px-2.5 sm:px-4 py-2 rounded-sm text-center transition-all duration-150 flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-2 ${
                layoutId === 2
                  ? "bg-[#ff2d3d] text-white shadow-md shadow-red-950/40"
                  : "text-neutral-300 hover:text-white hover:bg-neutral-800/60"
              }`}
            >
              <div className="flex items-center justify-center gap-1.5 w-full min-w-0 sm:w-auto">
                <span className="w-1.5 h-1.5 rounded-full bg-white opacity-80 flex-shrink-0" />
                <span className="font-bold text-[11px] sm:text-xs truncate sm:overflow-visible sm:whitespace-nowrap">
                  DAY 2 (20 DES)
                </span>
              </div>
              <span className="text-[9px] sm:text-xs opacity-85 font-mono sm:font-bold truncate sm:overflow-visible sm:whitespace-nowrap">
                RING + STANDING
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* ── 3D ARENA VIEWER WRAPPER ─────────────────────────────────── */}
      <div
        ref={viewerContainerRef}
        className="relative w-full h-[calc(100dvh-13.25rem)] min-h-[460px] sm:min-h-[600px] md:h-auto md:flex-1 md:min-h-[700px] bg-[#050507] overflow-hidden"
      >
        {webGLFailed ? (
          // ── WebGL Fallback Schematic ──
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#0d0d12]">
            <div className="max-w-lg p-6 bg-[#14141c] border border-red-900/60 rounded-sm">
              <div className="text-[#ff2d3d] font-black text-xl mb-2">
                MODE 3D TIDAK TERSEDIA PADA PERANGKAT INI
              </div>
              <p className="text-xs text-neutral-300 mb-4 leading-relaxed">
                Akselerasi perangkat keras WebGL tidak terdeteksi atau dinonaktifkan di peramban
                Anda. Berikut adalah ringkasan skema layout arena JKBF 2026.
              </p>
              <div className="grid grid-cols-2 gap-3 text-left bg-neutral-900/80 p-4 rounded-sm border border-neutral-800 text-xs">
                <div>
                  <div className="text-neutral-400 font-mono text-[10px]">DIMENSI HALL</div>
                  <div className="font-bold text-white">35 × 25 Meter</div>
                </div>
                <div>
                  <div className="text-neutral-400 font-mono text-[10px]">RING PERTANDINGAN</div>
                  <div className="font-bold text-white">6 × 6 Meter (Standar WAKO)</div>
                </div>
                <div>
                  <div className="text-neutral-400 font-mono text-[10px]">TOTAL VIP KURSI</div>
                  <div className="font-bold text-[#ff2d3d]">
                    {currentConfig.looseVipSeats} + 36 Meja
                  </div>
                </div>
                <div>
                  <div className="text-neutral-400 font-mono text-[10px]">AREA STANDING</div>
                  <div className="font-bold text-white">{currentConfig.standingEstimate}</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // ── Active Full-Bleed Three.js Canvas ──
          <div className="absolute inset-0 w-full h-full">
            <Arena3DViewer
              ref={viewerRef}
              layoutId={layoutId}
              selectedZoneId={selectedZone?.id || null}
              onSelectZone={handleSelectZone}
              showLabels={showLabels}
              activePreset={activePreset}
              onPresetChange={setActivePreset}
              onWebGLUnsupported={() => setWebGLFailed(true)}
            />
          </div>
        )}

        {/* ══════════════════════════════════════════════════════════════
            DESKTOP-ONLY PANELS (>= md: 768px)
            Clean, spacious, pinned to corners with zero clutter
           ══════════════════════════════════════════════════════════════ */}

        {/* ── DESKTOP CAMERA TOOLBAR (TOP RIGHT) ───────────────────────── */}
        <div className="hidden md:flex absolute top-4 right-4 z-20 flex-col gap-1.5 bg-[#0a0a0e]/95 backdrop-blur-md p-1.5 rounded-sm border border-neutral-800 shadow-xl max-w-[144px]">
          <div className="flex items-center justify-between px-1 mb-0.5 gap-2">
            <span className="text-[9px] font-mono font-bold text-neutral-400 uppercase tracking-wider">
              KAMERA
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => viewerRef.current?.zoomIn()}
                title="Perbesar (Zoom In)"
                className="w-5 h-5 bg-neutral-800 hover:bg-[#ff2d3d] hover:text-white rounded-xs flex items-center justify-center transition-colors text-neutral-300"
              >
                <Plus className="w-3 h-3" strokeWidth={2.4} />
              </button>
              <button
                onClick={() => viewerRef.current?.zoomOut()}
                title="Perkecil (Zoom Out)"
                className="w-5 h-5 bg-neutral-800 hover:bg-[#ff2d3d] hover:text-white rounded-xs flex items-center justify-center transition-colors text-neutral-300"
              >
                <Minus className="w-3 h-3" strokeWidth={2.4} />
              </button>
            </div>
          </div>

          <button
            onClick={() => {
              setActivePreset("DEFAULT");
              viewerRef.current?.resetView();
            }}
            title="Kembali ke sudut pandang isometrik default"
            className={`px-2.5 py-1.5 text-[10px] font-bold rounded-sm border transition-all text-left flex items-center justify-between gap-2 ${
              activePreset === "DEFAULT"
                ? "bg-[#ff2d3d] border-[#ff2d3d] text-white"
                : "border-neutral-800 bg-[#141419] text-neutral-300 hover:border-neutral-700 hover:text-white"
            }`}
          >
            <span>RESET VIEW</span>
            <RotateCcw className="w-3 h-3 opacity-80 shrink-0" />
          </button>

          <button
            onClick={() => {
              setActivePreset("TOP");
              viewerRef.current?.topView();
            }}
            title="Sudut pandang atas (2D Blueprint Plan)"
            className={`px-2.5 py-1.5 text-[10px] font-bold rounded-sm border transition-all text-left flex items-center justify-between gap-2 ${
              activePreset === "TOP"
                ? "bg-[#ff2d3d] border-[#ff2d3d] text-white"
                : "border-neutral-800 bg-[#141419] text-neutral-300 hover:border-neutral-700 hover:text-white"
            }`}
          >
            <span>TOP VIEW</span>
            <Layers className="w-3 h-3 opacity-80 shrink-0" />
          </button>

          <button
            onClick={() => {
              setActivePreset("RING");
              viewerRef.current?.focusRing();
            }}
            title="Fokus pandangan ke Ring Pertandingan"
            className={`px-2.5 py-1.5 text-[10px] font-bold rounded-sm border transition-all text-left flex items-center justify-between gap-2 ${
              activePreset === "RING"
                ? "bg-[#ff2d3d] border-[#ff2d3d] text-white"
                : "border-neutral-800 bg-[#141419] text-neutral-300 hover:border-neutral-700 hover:text-white"
            }`}
          >
            <span>FOCUS RING</span>
            <RingArenaIcon className="w-3.5 h-3.5 opacity-85 shrink-0" />
          </button>

          <button
            onClick={() => {
              setActivePreset("STAGE");
              viewerRef.current?.focusStage();
            }}
            title="Fokus pandangan ke Panggung Utama"
            className={`px-2.5 py-1.5 text-[10px] font-bold rounded-sm border transition-all text-left flex items-center justify-between gap-2 ${
              activePreset === "STAGE"
                ? "bg-[#ff2d3d] border-[#ff2d3d] text-white"
                : "border-neutral-800 bg-[#141419] text-neutral-300 hover:border-neutral-700 hover:text-white"
            }`}
          >
            <span>FOCUS STAGE</span>
            <StageBackdropIcon className="w-3.5 h-3.5 opacity-85 shrink-0" />
          </button>

          <div className="h-px bg-neutral-800 my-0.5" />

          {/* Toggle Labels */}
          <button
            onClick={() => setShowLabels(!showLabels)}
            title="Sembunyikan atau tampilkan label 3D di arena"
            className={`px-2.5 py-1.5 text-[10px] font-bold rounded-sm border transition-all text-left flex items-center justify-between gap-2 ${
              showLabels
                ? "border-neutral-700 bg-neutral-800 text-white"
                : "border-neutral-800 bg-[#141419] text-neutral-500"
            }`}
          >
            <span>LABEL 3D</span>
            <span className="font-mono text-[9px]">{showLabels ? "ON" : "OFF"}</span>
          </button>

          {/* Fullscreen button */}
          <button
            onClick={handleToggleFullscreen}
            title="Layar Penuh"
            className="px-2.5 py-1.5 text-[10px] font-bold rounded-sm border border-neutral-800 bg-[#141419] text-neutral-300 hover:text-white hover:border-neutral-700 transition-all flex items-center justify-between gap-2"
          >
            <span>FULLSCREEN</span>
            <Maximize2 className="w-3 h-3 text-neutral-400 shrink-0" />
          </button>

          {/* Daftar Zona Selector Button */}
          <button
            onClick={() => setIsZonesDrawerOpen(!isZonesDrawerOpen)}
            className="mt-1 px-2.5 py-1.5 text-[10px] font-bold rounded-sm bg-[#ff2d3d]/20 border border-[#ff2d3d]/50 text-[#ff737d] hover:bg-[#ff2d3d] hover:text-white transition-all flex items-center justify-center gap-1.5"
          >
            <span>DAFTAR ZONA</span>
            <ChevronDown
              className={`w-3 h-3 transition-transform duration-150 ${
                isZonesDrawerOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* ── DESKTOP CAPACITY PANEL (TOP LEFT) ────────────────────────── */}
        <div className="hidden md:block absolute top-4 left-4 z-20 w-72 max-w-[calc(100vw-2rem)]">
          <div className="bg-[#0a0a0e]/95 backdrop-blur-md border border-neutral-800 rounded-sm shadow-2xl overflow-hidden">
            <div
              onClick={() => setIsCapacityOpen(!isCapacityOpen)}
              className="flex items-center justify-between px-3 py-2.5 bg-[#121217] border-b border-neutral-800 cursor-pointer select-none"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ff2d3d]" />
                <span className="text-[11px] font-black uppercase tracking-wider text-white">
                  KAPASITAS & SPESIFIKASI
                </span>
              </div>
              <button
                type="button"
                aria-label="Toggle Panel Kapasitas"
                className="text-neutral-400 hover:text-white"
              >
                {isCapacityOpen ? (
                  <ChevronUp className="w-3.5 h-3.5" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            {isCapacityOpen && (
              <div className="p-3 text-xs space-y-2 text-neutral-300">
                <div className="text-[10px] font-mono text-[#ff2d3d] font-bold uppercase">
                  {currentConfig.name}
                </div>
                <div className="text-[11px] text-neutral-400 leading-snug">
                  {currentConfig.description}
                </div>

                <div className="h-px bg-neutral-800 my-2" />

                <div className="space-y-1.5 font-sans">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-neutral-400">VIP Utara + Selatan (L)</span>
                    <span className="font-mono font-bold text-white">88 kursi</span>
                  </div>

                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-neutral-400">VIP Kiri-Kanan Jalur Fighter</span>
                    <span className="font-mono font-bold text-white">104 kursi</span>
                  </div>

                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-neutral-400">
                      {currentConfig.vipTatamiOrWestText}
                    </span>
                    <span className="font-mono font-bold text-white">
                      {currentConfig.vipTatamiOrWestSeats} kursi
                    </span>
                  </div>

                  <div className="pt-2 border-t border-neutral-800 flex justify-between items-center font-bold text-white text-xs">
                    <span className="text-[#ff5260]">TOTAL KURSI LEPASAN</span>
                    <span className="font-mono text-base text-[#ff2d3d]">
                      {currentConfig.looseVipSeats}
                    </span>
                  </div>

                  <div className="text-[10px] text-neutral-400 font-mono">
                    + 9 meja bundar VIP × 4 = 36 kursi
                  </div>

                  <div className="pt-2 border-t border-neutral-800 flex justify-between items-center font-bold text-white text-xs">
                    <span className="text-neutral-300">ESTIMASI STANDING</span>
                    <span className="font-mono text-sm text-neutral-200">
                      {currentConfig.standingEstimate}
                    </span>
                  </div>

                  <div className="text-[10px] text-neutral-400 font-mono">
                    {currentConfig.standingDensity}
                  </div>
                </div>

                <div className="pt-2 border-t border-neutral-800/80 text-[9px] text-neutral-400 leading-tight flex items-start gap-1.5">
                  <Ruler className="w-3 h-3 text-[#ff2d3d] shrink-0 mt-0.5" />
                  <span>
                    Dimensi Hall: 35 × 25 m · Kursi Futura ±40 × 50 cm · Lorong sirkulasi 1.5 m.
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── DESKTOP ZONES LIST DRAWER ─────────────────────────────────── */}
        {isZonesDrawerOpen && (
          <div className="hidden md:block absolute top-4 right-40 z-30 w-72 max-h-[80vh] overflow-y-auto bg-[#0d0d12]/95 backdrop-blur-lg border border-neutral-800 rounded-sm p-3 shadow-2xl">
            <div className="flex items-center justify-between pb-2 border-b border-neutral-800 mb-2">
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                PILIH ZONA ARENA
              </span>
              <button
                onClick={() => setIsZonesDrawerOpen(false)}
                aria-label="Tutup Daftar Zona"
                className="text-neutral-400 hover:text-white p-0.5"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="space-y-1.5">
              {ARENA_ZONES.filter(
                (z) => !z.daySpecific || z.daySpecific === layoutId
              ).map((zone) => (
                <button
                  key={zone.id}
                  onClick={() => {
                    handleSelectZone(zone);
                    setIsZonesDrawerOpen(false);
                  }}
                  className={`w-full text-left p-2 rounded-sm text-xs border transition-all flex items-center gap-2 ${
                    selectedZone?.id === zone.id
                      ? "bg-[#ff2d3d]/20 border-[#ff2d3d] text-white"
                      : "bg-neutral-900/60 border-neutral-800/80 text-neutral-300 hover:border-neutral-700 hover:text-white"
                  }`}
                >
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: zone.color }}
                  />
                  <div className="truncate">
                    <div className="font-bold text-[11px] leading-tight truncate">
                      {zone.name}
                    </div>
                    <div className="text-[9px] text-neutral-400 truncate font-mono">
                      {zone.capacityText}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── DESKTOP BOTTOM COLOR LEGEND ──────────────────────────────── */}
        <div className="hidden md:flex absolute bottom-3 left-4 right-4 z-20 flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pointer-events-none max-w-[calc(100%-2rem)] overflow-hidden">
          <div className="flex items-center gap-2 sm:gap-3 bg-[#0a0a0e]/95 backdrop-blur-md px-3 py-1.5 rounded-sm border border-neutral-800 shadow-xl pointer-events-auto max-w-full overflow-x-auto scrollbar-none min-w-0 flex-shrink">
            <span className="text-[9px] font-mono uppercase text-neutral-400 font-bold mr-1 hidden sm:inline flex-shrink-0">
              LEGENDA:
            </span>
            {LEGEND_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  const zone = ARENA_ZONES.find((z) => z.id === item.zoneId);
                  if (zone) handleSelectZone(zone);
                }}
                className="flex items-center gap-1.5 text-[10px] text-neutral-300 hover:text-white transition-colors cursor-pointer select-none flex-shrink-0"
              >
                <span
                  className="w-2.5 h-2.5 rounded-xs flex-shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <span className="whitespace-nowrap">{item.label}</span>
              </button>
            ))}
          </div>

          <div className="hidden lg:block text-right text-[10px] text-neutral-400 font-mono bg-[#0a0a0e]/80 px-2 py-1 rounded-sm border border-neutral-900 pointer-events-auto flex-shrink-0">
            <span>DRAG: PUTAR · PINCH/WHEEL: ZOOM · KLIK PIN: DETAIL ZONA</span>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            MOBILE-FIRST COMBAT HUD DOCK (< md: 768px)
            Full-bleed canvas, live telemetry strip, crisp monochrome icons
           ══════════════════════════════════════════════════════════════ */}
        {!selectedZone && (
          <div className="md:hidden absolute bottom-[max(0.75rem,env(safe-area-inset-bottom))] left-3 right-3 z-20 flex flex-col gap-1.5 pointer-events-none animate-in fade-in duration-150">
            {/* Compact Live Telemetry Strip (At-a-Glance Info, Tap -> Capacity Sheet) */}
            <button
              type="button"
              onClick={() => {
                setActiveMobileSheet("capacity");
                setSelectedZone(null);
              }}
              className="pointer-events-auto w-full flex items-center justify-between gap-2 px-3 py-1.5 bg-[#0a0a0e]/85 backdrop-blur-md border border-neutral-800/90 hover:border-[#ff2d3d]/60 rounded-sm text-left transition-colors shadow-lg"
            >
              <div className="flex items-center gap-2 min-w-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff2d3d] shrink-0" />
                <span className="text-[10px] font-mono font-semibold text-neutral-200 truncate">
                  {currentConfig.looseVipSeats} KURSI VIP · 36 MEJA · {currentConfig.standingEstimate.toUpperCase()} STANDING
                </span>
              </div>
              <span className="flex items-center gap-1 text-[9px] font-mono font-bold text-[#ff5260] shrink-0 uppercase">
                <span>DETAIL</span>
                <ChevronUp className="w-3 h-3" />
              </span>
            </button>

            {/* Primary Dock Row: 4-Action Capsule + Zoom Controls */}
            <div className="flex items-stretch gap-2">
              <div className="flex-1 flex items-center justify-between bg-[#0a0a0e]/92 backdrop-blur-md px-1.5 py-1 rounded-sm border border-neutral-800 shadow-2xl pointer-events-auto">
                <button
                  data-mobile-dock="capacity"
                  onClick={() => {
                    setActiveMobileSheet(activeMobileSheet === "capacity" ? null : "capacity");
                    setSelectedZone(null);
                  }}
                  className={`flex-1 py-1.5 px-1 rounded-xs text-[9px] font-bold uppercase tracking-wide transition-all flex flex-col items-center justify-center gap-1 ${
                    activeMobileSheet === "capacity"
                      ? "bg-[#ff2d3d] text-white"
                      : "text-neutral-300 hover:text-white"
                  }`}
                >
                  <BarChart3 className="w-4 h-4" strokeWidth={2} />
                  <span className="truncate">Kapasitas</span>
                </button>

                <button
                  data-mobile-dock="zones"
                  onClick={() => {
                    setActiveMobileSheet(activeMobileSheet === "zones" ? null : "zones");
                    setSelectedZone(null);
                  }}
                  className={`flex-1 py-1.5 px-1 rounded-xs text-[9px] font-bold uppercase tracking-wide transition-all flex flex-col items-center justify-center gap-1 ${
                    activeMobileSheet === "zones"
                      ? "bg-[#ff2d3d] text-white"
                      : "text-neutral-300 hover:text-white"
                  }`}
                >
                  <MapPin className="w-4 h-4" strokeWidth={2} />
                  <span className="truncate">Zona</span>
                </button>

                <button
                  data-mobile-dock="camera"
                  onClick={() => {
                    setActiveMobileSheet(activeMobileSheet === "camera" ? null : "camera");
                    setSelectedZone(null);
                  }}
                  className={`flex-1 py-1.5 px-1 rounded-xs text-[9px] font-bold uppercase tracking-wide transition-all flex flex-col items-center justify-center gap-1 ${
                    activeMobileSheet === "camera"
                      ? "bg-[#ff2d3d] text-white"
                      : "text-neutral-300 hover:text-white"
                  }`}
                >
                  <Camera className="w-4 h-4" strokeWidth={2} />
                  <span className="truncate">Kamera</span>
                </button>

                <button
                  data-mobile-dock="labels"
                  onClick={() => setShowLabels(!showLabels)}
                  className={`flex-1 py-1.5 px-1 rounded-xs text-[9px] font-bold uppercase tracking-wide transition-all flex flex-col items-center justify-center gap-1 ${
                    showLabels ? "text-[#ff4d5a]" : "text-neutral-500"
                  }`}
                >
                  <Tag className="w-4 h-4" strokeWidth={2} />
                  <span className="truncate">{showLabels ? "Label ON" : "Label OFF"}</span>
                </button>
              </div>

              {/* Quick Zoom Pills (+ / -) */}
              <div className="flex flex-col justify-between gap-1 bg-[#0a0a0e]/92 backdrop-blur-md p-1 rounded-sm border border-neutral-800 shadow-2xl pointer-events-auto flex-shrink-0">
                <button
                  onClick={() => viewerRef.current?.zoomIn()}
                  aria-label="Zoom In"
                  className="w-8 flex-1 bg-neutral-800/90 hover:bg-[#ff2d3d] active:scale-95 text-white rounded-xs flex items-center justify-center transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" strokeWidth={2.4} />
                </button>
                <button
                  onClick={() => viewerRef.current?.zoomOut()}
                  aria-label="Zoom Out"
                  className="w-8 flex-1 bg-neutral-800/90 hover:bg-[#ff2d3d] active:scale-95 text-white rounded-xs flex items-center justify-center transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" strokeWidth={2.4} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════════════════════════
            MOBILE SLIDE-UP BOTTOM SHEET (Single Modal at a time)
           ══════════════════════════════════════════════════════════════ */}
        {activeMobileSheet && (
          <div className="md:hidden fixed inset-0 z-40 flex flex-col justify-end">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
              onClick={() => setActiveMobileSheet(null)}
            />

            {/* Sheet Content */}
            <div className="relative bg-[#0d0d12] border-t border-neutral-800 rounded-t-xl p-4 pb-[max(1rem,env(safe-area-inset-bottom))] max-h-[75vh] overflow-y-auto shadow-2xl animate-in slide-in-from-bottom duration-200">
              {/* Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#ff2d3d]" />
                  <span className="text-xs font-black uppercase tracking-wider text-white">
                    {activeMobileSheet === "capacity" && "KAPASITAS & SPESIFIKASI"}
                    {activeMobileSheet === "zones" && "PILIH ZONA ARENA"}
                    {activeMobileSheet === "camera" && "KONTROL KAMERA & SUDUT PANDANG"}
                  </span>
                </div>
                <button
                  onClick={() => setActiveMobileSheet(null)}
                  aria-label="Tutup Panel"
                  className="w-7 h-7 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white flex items-center justify-center"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* SHEET BODY: KAPASITAS */}
              {activeMobileSheet === "capacity" && (
                <div className="space-y-3 text-neutral-300 text-xs">
                  <div className="text-[11px] font-mono text-[#ff2d3d] font-bold uppercase">
                    {currentConfig.name}
                  </div>
                  <div className="text-[11px] text-neutral-400 leading-snug">
                    {currentConfig.description}
                  </div>

                  <div className="h-px bg-neutral-800 my-2" />

                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-neutral-400">VIP Utara + Selatan (L)</span>
                      <span className="font-mono font-bold text-white">88 kursi</span>
                    </div>

                    <div className="flex justify-between items-center text-xs">
                      <span className="text-neutral-400">VIP Kiri-Kanan Jalur Fighter</span>
                      <span className="font-mono font-bold text-white">104 kursi</span>
                    </div>

                    <div className="flex justify-between items-center text-xs">
                      <span className="text-neutral-400">
                        {currentConfig.vipTatamiOrWestText}
                      </span>
                      <span className="font-mono font-bold text-white">
                        {currentConfig.vipTatamiOrWestSeats} kursi
                      </span>
                    </div>

                    <div className="pt-2 border-t border-neutral-800 flex justify-between items-center font-bold text-white text-sm">
                      <span className="text-[#ff5260]">TOTAL KURSI LEPASAN</span>
                      <span className="font-mono text-lg text-[#ff2d3d]">
                        {currentConfig.looseVipSeats}
                      </span>
                    </div>

                    <div className="text-[10px] text-neutral-400 font-mono">
                      + 9 meja bundar VIP × 4 = 36 kursi
                    </div>

                    <div className="pt-2 border-t border-neutral-800 flex justify-between items-center font-bold text-white text-xs">
                      <span className="text-neutral-300">ESTIMASI STANDING</span>
                      <span className="font-mono text-sm text-neutral-200">
                        {currentConfig.standingEstimate}
                      </span>
                    </div>

                    <div className="text-[10px] text-neutral-400 font-mono">
                      {currentConfig.standingDensity}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-neutral-800/80 text-[10px] text-neutral-400 leading-tight flex items-start gap-1.5">
                    <Ruler className="w-3.5 h-3.5 text-[#ff2d3d] shrink-0 mt-0.5" />
                    <span>
                      Dimensi Hall: 35 × 25 m · Kursi Futura ±40 × 50 cm · Lorong sirkulasi 1.5 m.
                    </span>
                  </div>
                </div>
              )}

              {/* SHEET BODY: PILIH ZONA */}
              {activeMobileSheet === "zones" && (
                <div className="space-y-2">
                  <p className="text-[11px] text-neutral-400 mb-2">
                    Pilih zona di bawah ini untuk melihat spesifikasi dan mengarahkan kamera 3D:
                  </p>
                  <div className="grid grid-cols-1 gap-1.5">
                    {ARENA_ZONES.filter(
                      (z) => !z.daySpecific || z.daySpecific === layoutId
                    ).map((zone) => (
                      <button
                        key={zone.id}
                        onClick={() => {
                          handleSelectZone(zone);
                        }}
                        className={`w-full text-left p-2.5 rounded-sm text-xs border transition-all flex items-center gap-2.5 ${
                          selectedZone?.id === zone.id
                            ? "bg-[#ff2d3d]/20 border-[#ff2d3d] text-white"
                            : "bg-neutral-900/60 border-neutral-800 text-neutral-300 hover:border-neutral-700 hover:text-white"
                        }`}
                      >
                        <span
                          className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: zone.color }}
                        />
                        <div className="truncate flex-1">
                          <div className="font-bold text-xs leading-tight truncate">
                            {zone.name}
                          </div>
                          <div className="text-[10px] text-neutral-400 truncate font-mono mt-0.5">
                            {zone.capacityText}
                          </div>
                        </div>
                        <span className="text-neutral-500 font-mono text-[10px]">PILIH →</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* SHEET BODY: KAMERA */}
              {activeMobileSheet === "camera" && (
                <div className="space-y-2 text-xs">
                  <p className="text-[11px] text-neutral-400 mb-2">
                    Ubah sudut pandang kamera dengan cepat:
                  </p>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => {
                        setActivePreset("DEFAULT");
                        viewerRef.current?.resetView();
                        setActiveMobileSheet(null);
                      }}
                      className="p-3 bg-neutral-900 border border-neutral-800 rounded-sm text-left hover:border-neutral-700 active:bg-neutral-800"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-bold text-white">RESET 3D</span>
                        <RotateCcw className="w-3.5 h-3.5 text-[#ff2d3d]" />
                      </div>
                      <div className="text-[10px] text-neutral-400 font-mono">Sudut Isometrik</div>
                    </button>

                    <button
                      onClick={() => {
                        setActivePreset("TOP");
                        viewerRef.current?.topView();
                        setActiveMobileSheet(null);
                      }}
                      className="p-3 bg-neutral-900 border border-neutral-800 rounded-sm text-left hover:border-neutral-700 active:bg-neutral-800"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-bold text-white">TOP VIEW 2D</span>
                        <Layers className="w-3.5 h-3.5 text-[#ff2d3d]" />
                      </div>
                      <div className="text-[10px] text-neutral-400 font-mono">Tampak Atas (Denah)</div>
                    </button>

                    <button
                      onClick={() => {
                        setActivePreset("RING");
                        viewerRef.current?.focusRing();
                        setActiveMobileSheet(null);
                      }}
                      className="p-3 bg-neutral-900 border border-neutral-800 rounded-sm text-left hover:border-neutral-700 active:bg-neutral-800"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-bold text-white">FOCUS RING</span>
                        <RingArenaIcon className="w-4 h-4 text-[#ff2d3d]" />
                      </div>
                      <div className="text-[10px] text-neutral-400 font-mono">Ring Pertandingan</div>
                    </button>

                    <button
                      onClick={() => {
                        setActivePreset("STAGE");
                        viewerRef.current?.focusStage();
                        setActiveMobileSheet(null);
                      }}
                      className="p-3 bg-neutral-900 border border-neutral-800 rounded-sm text-left hover:border-neutral-700 active:bg-neutral-800"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-bold text-white">FOCUS STAGE</span>
                        <StageBackdropIcon className="w-4 h-4 text-[#ff2d3d]" />
                      </div>
                      <div className="text-[10px] text-neutral-400 font-mono">Panggung Utama</div>
                    </button>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => {
                        handleToggleFullscreen();
                        setActiveMobileSheet(null);
                      }}
                      className="w-full py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white font-bold rounded-sm text-xs flex items-center justify-center gap-2"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-neutral-300" />
                      <span>LAYAR PENUH (FULLSCREEN)</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── ZONE DETAILS DRAWER (WHEN A ZONE IS CLICKED) ─────────────── */}
        {selectedZone && (
          <div className="absolute bottom-[max(0.75rem,env(safe-area-inset-bottom))] left-3 right-3 md:bottom-14 md:left-4 md:right-auto md:w-96 z-30 animate-in slide-in-from-bottom duration-200">
            <div className="bg-[#0d0d12]/98 backdrop-blur-lg border border-[#ff2d3d] p-3.5 sm:p-4 rounded-sm shadow-2xl relative">
              <button
                onClick={() => setSelectedZone(null)}
                aria-label="Tutup Detail Zona"
                className="absolute top-2.5 right-2.5 text-neutral-400 hover:text-white p-1"
              >
                <X className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center gap-2 mb-1">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: selectedZone.color }}
                />
                <span className="text-[10px] font-mono font-bold text-[#ff2d3d] uppercase tracking-wider">
                  DETAIL ZONA ARENA
                </span>
              </div>

              <h3 className="text-xs sm:text-sm font-black text-white uppercase tracking-tight pr-6">
                {selectedZone.name}
              </h3>

              <div className="mt-2 space-y-1.5 text-xs text-neutral-300">
                <div className="bg-neutral-900/80 p-2 rounded-sm border border-neutral-800 font-mono text-[10px] sm:text-[11px]">
                  <div className="text-neutral-400 text-[9px]">KAPASITAS:</div>
                  <div className="text-white font-bold">{selectedZone.capacityText}</div>
                </div>

                <div className="text-[10px] sm:text-[11px] text-neutral-400 leading-relaxed line-clamp-2 sm:line-clamp-none">
                  {selectedZone.description}
                </div>

                <div className="text-[9px] sm:text-[10px] font-mono text-neutral-400 truncate">
                  <span className="text-neutral-500">Spesifikasi: </span>
                  {selectedZone.specText}
                </div>
              </div>

              <div className="mt-2.5 pt-2 border-t border-neutral-800 flex items-center justify-between">
                <button
                  onClick={() => {
                    setActivePreset(null);
                    setSelectedZone({ ...selectedZone });
                  }}
                  className="px-3 py-1 bg-[#ff2d3d] hover:bg-[#d71f2c] text-white text-[10px] font-bold rounded-xs transition-all active:scale-95"
                >
                  DEKATKAN KAMERA
                </button>
                <button
                  onClick={() => setSelectedZone(null)}
                  className="text-[10px] text-neutral-400 hover:text-white px-2 py-1"
                >
                  TUTUP
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── SEATING CAPACITY DISCLAIMER & PLANNING NOTE ──────────────── */}
      <div className="border-t border-neutral-900 bg-[#08080b] px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-neutral-400">
          <div className="flex items-start gap-2">
            <Info className="w-4 h-4 text-[#ff2d3d] shrink-0 mt-0.5" />
            <p className="leading-relaxed text-[11px] sm:text-xs">
              <strong className="text-neutral-300">Catatan Perencanaan: </strong>
              {DISCLAIMER_NOTE}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 font-mono text-[11px] pt-1 sm:pt-0">
            <Link
              href="/championship"
              className="text-[#ff2d3d] hover:text-[#ff616d] underline font-bold uppercase transition-colors"
            >
              LIHAT 7 PROGRAM KEJUARAAN →
            </Link>
            <Link
              href="/"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              KEMBALI KE HOME
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Arena3DClient() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-96 flex items-center justify-center bg-[#070709] text-white">
          <div className="w-10 h-10 border-2 border-[#ff2d3d] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <Arena3DContent />
    </Suspense>
  );
}
