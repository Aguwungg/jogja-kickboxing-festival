"use client";

import React, { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronRight, Radio } from "lucide-react";
import { InstagramIcon } from "@/components/layout/SocialIcons";
import { EVENT_CONFIG, jkbfLinks } from "@/lib/event-config";
import type { WhatsNewContentType, WhatsNewItem } from "@/lib/whats-new";
import WhatsNewCard from "@/components/whats-new/WhatsNewCard";

interface WhatsNewGridProps {
  items: WhatsNewItem[];
  variant?: "homepage" | "fullpage";
  showFilters?: boolean;
}

const emptySubscribe = () => () => {};

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function subscribeHoverMedia(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getHoverSnapshot() {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

function getSaveDataSnapshot() {
  if (typeof navigator === "undefined") return false;
  const navWithConn = navigator as Navigator & {
    connection?: { saveData?: boolean };
  };
  return Boolean(navWithConn.connection?.saveData);
}

export default function WhatsNewGrid({
  items,
  variant = "homepage",
  showFilters = false,
}: WhatsNewGridProps) {
  const [activePreviewId, setActivePreviewId] = useState<string | null>(null);
  const [typeFilter, setTypeFilter] = useState<"ALL" | WhatsNewContentType>(
    "ALL"
  );
  const [categoryFilter, setCategoryFilter] = useState<string>("ALL");

  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    () => true
  );
  const canHover = useSyncExternalStore(
    subscribeHoverMedia,
    getHoverSnapshot,
    () => true
  );
  const saveData = useSyncExternalStore(
    emptySubscribe,
    getSaveDataSnapshot,
    () => false
  );

  const allowMotionPreview = !prefersReducedMotion && !saveData;

  // Pause active video preview when tab loses visibility or navigates away
  useEffect(() => {
    const handleVisibility = () => {
      if (document.visibilityState === "hidden") {
        setActivePreviewId(null);
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  const handleRequestPreview = useCallback((id: string) => {
    setActivePreviewId(id);
  }, []);

  const handleStopPreview = useCallback((id: string) => {
    setActivePreviewId((current) => (current === id ? null : current));
  }, []);

  const categories = Array.from(new Set(items.map((i) => i.category)));

  const filteredItems = items.filter((item) => {
    if (typeFilter !== "ALL" && item.contentType !== typeFilter) return false;
    if (categoryFilter !== "ALL" && item.category !== categoryFilter)
      return false;
    return true;
  });

  const featuredItem = filteredItems[0];
  const secondaryItems = filteredItems.slice(1);

  if (items.length === 0) {
    return (
      <div className="bg-[#111114] border border-white/10 p-8 sm:p-10 rounded-xs text-center space-y-4">
        <InstagramIcon className="w-7 h-7 text-[#D91F2C] mx-auto" />
        <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-white">
          IKUTI KABAR RESMI DI INSTAGRAM
        </h3>
        <p className="text-sm text-[#86868B] max-w-md mx-auto">
          Pembaruan terbaru seputar pertandingan, jadwal, dan highlight kegiatan dipublikasikan melalui akun Instagram resmi JKBF 2026.
        </p>
        <a
          href={jkbfLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#D91F2C] hover:bg-[#B81521] text-white font-display text-base tracking-wider uppercase rounded-xs transition-colors"
        >
          <InstagramIcon className="w-4 h-4" />
          BUKA {EVENT_CONFIG.social.instagram.handle.toUpperCase()}
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {showFilters && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter tipe konten Instagram">
            {(
              [
                { key: "ALL", label: "SEMUA FORMAT" },
                { key: "reel", label: "REELS" },
                { key: "carousel", label: "CAROUSEL" },
                { key: "image", label: "FEED POST" },
              ] as const
            ).map((tab) => {
              const active = typeFilter === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setTypeFilter(tab.key)}
                  aria-pressed={active}
                  className={`px-3.5 py-2 rounded-xs font-technical text-[11px] font-bold uppercase tracking-wider border transition-colors ${
                    active
                      ? "bg-[#D91F2C] border-[#D91F2C] text-white"
                      : "bg-[#111114] border-white/10 text-[#C4C4CC] hover:text-white hover:border-white/30"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {categories.length > 1 && (
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter kategori pengumuman">
              <button
                type="button"
                onClick={() => setCategoryFilter("ALL")}
                aria-pressed={categoryFilter === "ALL"}
                className={`px-3 py-1.5 rounded-xs font-technical text-[10px] font-bold uppercase tracking-wider border transition-colors ${
                  categoryFilter === "ALL"
                    ? "bg-white text-black border-white"
                    : "bg-transparent border-white/15 text-[#86868B] hover:text-white"
                }`}
              >
                SEMUA TOPIK
              </button>
              {categories.map((cat) => {
                const active = categoryFilter === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setCategoryFilter(cat)}
                    aria-pressed={active}
                    className={`px-3 py-1.5 rounded-xs font-technical text-[10px] font-bold uppercase tracking-wider border transition-colors ${
                      active
                        ? "bg-white text-black border-white"
                        : "bg-transparent border-white/15 text-[#86868B] hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}

      {filteredItems.length === 0 ? (
        <div className="bg-[#111114] border border-white/10 p-8 rounded-xs text-center space-y-3">
          <p className="font-display text-2xl uppercase text-white">
            BELUM ADA KONTEN PADA FILTER INI
          </p>
          <button
            type="button"
            onClick={() => {
              setTypeFilter("ALL");
              setCategoryFilter("ALL");
            }}
            className="px-4 py-2 bg-[#D91F2C] text-white font-technical text-xs font-bold uppercase tracking-wider rounded-xs"
          >
            TAMPILKAN SEMUA
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Primary Asymmetric Editorial Stage: 1 Large Featured + Secondary Stack */}
          {featuredItem && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
              <div className="lg:col-span-7">
                <WhatsNewCard
                  item={featuredItem}
                  isFeaturedLayout
                  isActivePreview={activePreviewId === featuredItem.id}
                  canHover={canHover}
                  allowMotionPreview={allowMotionPreview}
                  onRequestPreview={handleRequestPreview}
                  onStopPreview={handleStopPreview}
                />
              </div>

              <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6">
                {secondaryItems.slice(0, 1).map((item) => (
                  <div key={item.id} className="flex-1">
                    <WhatsNewCard
                      item={item}
                      isActivePreview={activePreviewId === item.id}
                      canHover={canHover}
                      allowMotionPreview={allowMotionPreview}
                      onRequestPreview={handleRequestPreview}
                      onStopPreview={handleStopPreview}
                    />
                  </div>
                ))}

                {/* Editorial Instagram Channel Companion Card (only shown when homepage or odd-paired layout benefits) */}
                {variant === "homepage" || secondaryItems.length === 0 ? (
                  <div className="bg-[#111114] border border-white/10 p-5 sm:p-6 rounded-xs flex flex-col justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 font-technical text-[10px] font-bold uppercase tracking-[0.22em] text-[#EF3340]">
                          <Radio className="w-3.5 h-3.5" />
                          <span>INSTAGRAM OFFICIAL SOURCE</span>
                        </span>
                        <span className="font-technical text-[10px] uppercase tracking-widest text-[#E2BA75] font-bold">
                          STAY IN THE FIGHT.
                        </span>
                      </div>
                      <h4 className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-white leading-none">
                        {EVENT_CONFIG.social.instagram.handle}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#86868B] leading-relaxed">
                        Seluruh pengumuman ring, cuplikan latihan, dan informasi resmi dipublikasikan pertama kali di Instagram resmi JKBF 2026.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                      <a
                        href={jkbfLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#D91F2C] hover:bg-[#B81521] text-white font-technical text-xs font-bold uppercase tracking-wider rounded-xs transition-colors"
                      >
                        <InstagramIcon className="w-4 h-4" />
                        <span>BUKA INSTAGRAM</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                      {variant === "homepage" && (
                        <Link
                          href="/whats-new"
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 text-[#F5F5F7] font-technical text-xs font-bold uppercase tracking-wider rounded-xs transition-colors"
                        >
                          <span>HALAMAN WHAT&apos;S NEW</span>
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          )}

          {/* Overflow Editorial Grid for Additional Curated Posts */}
          {secondaryItems.length > 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {secondaryItems.slice(1).map((item) => (
                <WhatsNewCard
                  key={item.id}
                  item={item}
                  isActivePreview={activePreviewId === item.id}
                  canHover={canHover}
                  allowMotionPreview={allowMotionPreview}
                  onRequestPreview={handleRequestPreview}
                  onStopPreview={handleStopPreview}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

