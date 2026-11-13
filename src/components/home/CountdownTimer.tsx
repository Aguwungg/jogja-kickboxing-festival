"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { EVENT_CONFIG } from "@/lib/event-config";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

interface CountdownTimerProps {
  targetIso?: string;
  label?: string;
  className?: string;
}

function computeTimeLeft(targetDate: number): TimeLeft {
  const now = Date.now();
  const difference = targetDate - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000),
    isExpired: false,
  };
}

const emptySubscribe = () => () => {};

export default function CountdownTimer({
  targetIso,
  label = "",
  className = "",
}: CountdownTimerProps) {
  const targetDateStr = targetIso || EVENT_CONFIG.dates.startIso;
  const targetDate = new Date(targetDateStr).getTime();

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    computeTimeLeft(targetDate)
  );
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(computeTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const fmt = (n: number) => n.toString().padStart(2, "0");

  return (
    <div
      role="region"
      aria-label="Countdown Hari H Pertandingan"
      className={`w-full text-center select-none ${className}`}
    >
      {/* ─── Byon Status Header (Optional) ─── */}
      {label && (
        <div className="inline-flex items-center justify-center gap-2.5 px-3.5 py-1 mb-3.5 bg-black/80 backdrop-blur-md border border-[#D91F2C]/50 rounded-xs shadow-lg">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EF3340] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D91F2C]" />
          </span>
          <span className="font-technical text-[10px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#EF3340]">
            {label}
          </span>
        </div>
      )}

      {/* ─── Compact Fight Festival Countdown (Refined Obsidian-Glass & Crimson Accents) ─── */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-2.5 md:gap-3 max-w-xs sm:max-w-sm md:max-w-md mx-auto">
        {/* Days */}
        <div className="bg-black/80 backdrop-blur-md rounded-xs py-2 sm:py-2.5 px-2 sm:px-3 shadow-[0_8px_24px_rgba(0,0,0,0.85)] flex flex-col items-center justify-center flex-1 min-w-[54px] sm:min-w-[72px] md:min-w-[80px] border border-white/15 hover:border-[#D91F2C]/50 transition-colors select-none">
          <span className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-white leading-none tabular-nums drop-shadow-[0_2px_8px_rgba(217,31,44,0.35)]">
            {isMounted ? fmt(timeLeft.days) : "--"}
          </span>
          <span className="font-technical text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#EF3340] mt-0.5">
            Hari
          </span>
        </div>

        <span className="font-display text-xl sm:text-2xl text-white/30 select-none pb-2">:</span>

        {/* Hours */}
        <div className="bg-black/80 backdrop-blur-md rounded-xs py-2 sm:py-2.5 px-2 sm:px-3 shadow-[0_8px_24px_rgba(0,0,0,0.85)] flex flex-col items-center justify-center flex-1 min-w-[54px] sm:min-w-[72px] md:min-w-[80px] border border-white/15 hover:border-[#D91F2C]/50 transition-colors select-none">
          <span className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-white leading-none tabular-nums drop-shadow-[0_2px_8px_rgba(217,31,44,0.35)]">
            {isMounted ? fmt(timeLeft.hours) : "--"}
          </span>
          <span className="font-technical text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#EF3340] mt-0.5">
            Jam
          </span>
        </div>

        <span className="font-display text-xl sm:text-2xl text-white/30 select-none pb-2">:</span>

        {/* Minutes */}
        <div className="bg-black/80 backdrop-blur-md rounded-xs py-2 sm:py-2.5 px-2 sm:px-3 shadow-[0_8px_24px_rgba(0,0,0,0.85)] flex flex-col items-center justify-center flex-1 min-w-[54px] sm:min-w-[72px] md:min-w-[80px] border border-white/15 hover:border-[#D91F2C]/50 transition-colors select-none">
          <span className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-white leading-none tabular-nums drop-shadow-[0_2px_8px_rgba(217,31,44,0.35)]">
            {isMounted ? fmt(timeLeft.minutes) : "--"}
          </span>
          <span className="font-technical text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#EF3340] mt-0.5">
            Menit
          </span>
        </div>

        <span className="font-display text-xl sm:text-2xl text-white/30 select-none pb-2">:</span>

        {/* Seconds */}
        <div className="bg-black/80 backdrop-blur-md rounded-xs py-2 sm:py-2.5 px-2 sm:px-3 shadow-[0_8px_24px_rgba(0,0,0,0.85)] flex flex-col items-center justify-center flex-1 min-w-[54px] sm:min-w-[72px] md:min-w-[80px] border border-white/15 hover:border-[#D91F2C]/50 transition-colors select-none">
          <span className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-[#EF3340] leading-none tabular-nums drop-shadow-[0_2px_8px_rgba(217,31,44,0.4)]">
            {isMounted ? fmt(timeLeft.seconds) : "--"}
          </span>
          <span className="font-technical text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#EF3340] mt-0.5">
            Detik
          </span>
        </div>
      </div>
    </div>
  );
}
