"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Image as ImageIcon, Layers, Play } from "lucide-react";
import { InstagramIcon } from "@/components/layout/SocialIcons";
import {
  formatPublishedDateId,
  type WhatsNewItem,
} from "@/lib/whats-new";

interface WhatsNewCardProps {
  item: WhatsNewItem;
  isFeaturedLayout?: boolean;
  isActivePreview: boolean;
  canHover: boolean;
  allowMotionPreview: boolean;
  onRequestPreview: (id: string) => void;
  onStopPreview: (id: string) => void;
}

const CONTENT_TYPE_META = {
  reel: {
    label: "REELS",
    cta: "TONTON REELS",
    Icon: Play,
  },
  carousel: {
    label: "CAROUSEL",
    cta: "LIHAT POSTINGAN",
    Icon: Layers,
  },
  image: {
    label: "POST",
    cta: "LIHAT POSTINGAN",
    Icon: ImageIcon,
  },
} as const;

export default function WhatsNewCard({
  item,
  isFeaturedLayout = false,
  isActivePreview,
  canHover,
  allowMotionPreview,
  onRequestPreview,
  onStopPreview,
}: WhatsNewCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [hasActivatedVideo, setHasActivatedVideo] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const hasReelVideo =
    item.contentType === "reel" &&
    Boolean(item.previewVideo) &&
    !videoFailed &&
    allowMotionPreview;

  const { label: typeLabel, cta: ctaLabel, Icon: TypeIcon } =
    CONTENT_TYPE_META[item.contentType];
  const formattedDate = formatPublishedDateId(item.publishedAt);

  // Mobile/touch: optionally play muted inline clip when card is prominently in viewport
  useEffect(() => {
    if (!hasReelVideo || canHover || !cardRef.current) return;

    const el = cardRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.65) {
            setHasActivatedVideo(true);
            onRequestPreview(item.id);
          } else {
            onStopPreview(item.id);
          }
        }
      },
      { threshold: [0.2, 0.65] }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasReelVideo, canHover, item.id, onRequestPreview, onStopPreview]);

  // Synchronize actual <video> playback with shared single-preview coordinator
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !hasReelVideo) return;

    if (isActivePreview) {
      video.currentTime = 0;
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {
          setIsPlaying(false);
        });
      }
    } else {
      video.pause();
      if (video.currentTime > 0) {
        video.currentTime = 0;
      }
    }
  }, [isActivePreview, hasReelVideo]);

  const handleDesktopActivate = () => {
    if (!hasReelVideo) return;
    setHasActivatedVideo(true);
    onRequestPreview(item.id);
  };

  const handleDesktopDeactivate = () => {
    if (!hasReelVideo) return;
    onStopPreview(item.id);
  };

  const handleVideoTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
    // Enforce hard 4.5-second preview cap on all clips
    if (video.currentTime >= 4.5) {
      video.pause();
      video.currentTime = 0;
      setIsPlaying(false);
      onStopPreview(item.id);
    }
  };

  return (
    <a
      ref={cardRef}
      href={item.instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${ctaLabel} di Instagram @jogjakickboxingfestival: ${item.title}`}
      onMouseEnter={canHover ? handleDesktopActivate : undefined}
      onMouseLeave={canHover ? handleDesktopDeactivate : undefined}
      onFocus={handleDesktopActivate}
      onBlur={handleDesktopDeactivate}
      className="group block h-full rounded-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D91F2C] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
    >
      <article className="h-full bg-[#111114] border border-white/10 group-hover:border-[#D91F2C]/70 rounded-xs overflow-hidden flex flex-col justify-between transition-colors duration-300">
        {/* Media Region — direct first child per semantic card layout */}
        <div
          className={`relative w-full overflow-hidden bg-black border-b border-white/10 ${
            isFeaturedLayout
              ? "aspect-[4/5] sm:aspect-[16/10] lg:aspect-[16/11]"
              : "aspect-[4/5] sm:aspect-[16/11]"
          }`}
        >
          <Image
            src={item.coverImage}
            alt={item.title}
            fill
            sizes={
              isFeaturedLayout
                ? "(max-width: 1024px) 100vw, 58vw"
                : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 38vw"
            }
            className={`object-cover object-top transition-all duration-500 ${
              isPlaying
                ? "opacity-0 scale-100"
                : "opacity-100 group-hover:scale-[1.03]"
            }`}
          />

          {hasReelVideo && hasActivatedVideo ? (
            <video
              ref={videoRef}
              width={720}
              height={900}
              muted
              playsInline
              preload="none"
              poster={item.coverImage}
              disablePictureInPicture
              controlsList="nodownload noplaybackrate"
              aria-hidden="true"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onTimeUpdate={handleVideoTimeUpdate}
              onEnded={() => {
                setIsPlaying(false);
                onStopPreview(item.id);
              }}
              onError={() => {
                setVideoFailed(true);
                setIsPlaying(false);
                onStopPreview(item.id);
              }}
              className={`absolute inset-0 w-full h-full object-cover object-top pointer-events-none transition-opacity duration-300 ${
                isPlaying ? "opacity-100" : "opacity-0"
              }`}
              {...({ loading: "lazy" } as Record<string, unknown>)}
            >
              <source src={item.previewVideo} type="video/mp4" />
            </video>
          ) : null}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111114] via-black/15 to-black/45" />

          {/* Content Type + Category Badges */}
          <div className="pointer-events-none absolute top-3.5 left-3.5 right-3.5 flex flex-wrap items-center justify-between gap-2">
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xs font-technical text-[10px] font-bold uppercase tracking-[0.18em] ${
                item.contentType === "reel"
                  ? "bg-[#D91F2C] text-white shadow-lg"
                  : "bg-black/85 border border-white/20 text-[#F5F5F7]"
              }`}
            >
              <TypeIcon
                className={`w-3 h-3 ${
                  item.contentType === "reel" ? "fill-current" : ""
                }`}
                aria-hidden="true"
              />
              <span>{typeLabel}</span>
              {hasReelVideo ? (
                <span className="hidden sm:inline opacity-80">
                  {isPlaying ? "• PLAYING" : "• 4S PREVIEW"}
                </span>
              ) : null}
            </span>

            <span className="px-2.5 py-1 bg-black/85 border border-white/15 font-technical text-[10px] font-bold uppercase tracking-[0.18em] text-[#E2BA75] rounded-xs">
              {item.category}
            </span>
          </div>

          {item.featured ? (
            <div className="pointer-events-none absolute bottom-3 left-3.5">
              <span className="px-2.5 py-0.5 bg-[#D91F2C]/90 text-white font-technical text-[9px] font-bold uppercase tracking-[0.22em] rounded-xs">
                FEATURED UPDATE
              </span>
            </div>
          ) : null}
        </div>

        {/* Header + Content Region */}
        <div className="p-5 sm:p-6 lg:p-7 flex-1 flex flex-col justify-between gap-5">
          <div className="space-y-3">
            <header className="space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 font-technical text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-[#EF3340]">
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span>@JOGJAKICKBOXINGFESTIVAL</span>
                </span>
                {formattedDate ? (
                  <time
                    dateTime={item.publishedAt}
                    className="font-technical text-[10px] uppercase tracking-widest text-[#86868B]"
                  >
                    {formattedDate}
                  </time>
                ) : null}
              </div>

              <h3
                className={`font-display uppercase tracking-wide text-white group-hover:text-[#EF3340] transition-colors leading-[0.95] ${
                  isFeaturedLayout
                    ? "text-3xl sm:text-4xl lg:text-5xl"
                    : "text-2xl sm:text-3xl"
                }`}
              >
                {item.title}
              </h3>
            </header>

            <p className="text-sm text-[#C4C4CC] leading-relaxed font-sans">
              {item.summary}
            </p>
          </div>

          {/* Card Footer — Single Destination Affordance */}
          <footer className="pt-3.5 border-t border-white/10 flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 font-technical text-xs font-bold uppercase tracking-wider text-white group-hover:text-[#EF3340] transition-colors">
              <InstagramIcon className="w-4 h-4 text-[#D91F2C]" />
              <span>{ctaLabel}</span>
            </span>

            <span className="inline-flex items-center justify-center w-8 h-8 rounded-xs bg-white/[0.04] border border-white/10 group-hover:bg-[#D91F2C] group-hover:border-[#D91F2C] text-[#C4C4CC] group-hover:text-white transition-all">
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </span>
          </footer>
        </div>
      </article>
    </a>
  );
}

