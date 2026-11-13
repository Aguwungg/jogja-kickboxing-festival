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

      {/* ─── Byon Signature 4-Box Combat Countdown (White Cards + Red Numbers) ─── */}
      <div className="flex items-center justify-center gap-2 sm:gap-3.5 md:gap-4 max-w-sm sm:max-w-md md:max-w-lg mx-auto">
        {/* Days */}
        <div className="bg-white rounded-xs sm:rounded-sm py-2.5 sm:py-3.5 px-2 sm:px-3 shadow-[0_12px_36px_rgba(0,0,0,0.9)] flex flex-col items-center justify-center flex-1 min-w-[68px] sm:min-w-[90px] md:min-w-[105px] min-h-[90px] sm:min-h-[115px] border border-white/50 select-none transition-transform hover:scale-105">
          <span className="font-sans text-[11px] sm:text-xs font-semibold text-[#D91F2C] tracking-wide mb-1">
            Days
          </span>
          <span className="font-display text-4xl sm:text-6xl font-black text-[#D91F2C] leading-none tabular-nums">
            {isMounted ? fmt(timeLeft.days) : "--"}
          </span>
        </div>

        {/* Hours */}
        <div className="bg-white rounded-xs sm:rounded-sm py-2.5 sm:py-3.5 px-2 sm:px-3 shadow-[0_12px_36px_rgba(0,0,0,0.9)] flex flex-col items-center justify-center flex-1 min-w-[68px] sm:min-w-[90px] md:min-w-[105px] min-h-[90px] sm:min-h-[115px] border border-white/50 select-none transition-transform hover:scale-105">
          <span className="font-sans text-[11px] sm:text-xs font-semibold text-[#D91F2C] tracking-wide mb-1">
            Hours
          </span>
          <span className="font-display text-4xl sm:text-6xl font-black text-[#D91F2C] leading-none tabular-nums">
            {isMounted ? fmt(timeLeft.hours) : "--"}
          </span>
        </div>

        {/* Minutes */}
        <div className="bg-white rounded-xs sm:rounded-sm py-2.5 sm:py-3.5 px-2 sm:px-3 shadow-[0_12px_36px_rgba(0,0,0,0.9)] flex flex-col items-center justify-center flex-1 min-w-[68px] sm:min-w-[90px] md:min-w-[105px] min-h-[90px] sm:min-h-[115px] border border-white/50 select-none transition-transform hover:scale-105">
          <span className="font-sans text-[11px] sm:text-xs font-semibold text-[#D91F2C] tracking-wide mb-1">
            Minutes
          </span>
          <span className="font-display text-4xl sm:text-6xl font-black text-[#D91F2C] leading-none tabular-nums">
            {isMounted ? fmt(timeLeft.minutes) : "--"}
          </span>
        </div>

        {/* Seconds */}
        <div className="bg-white rounded-xs sm:rounded-sm py-2.5 sm:py-3.5 px-2 sm:px-3 shadow-[0_12px_36px_rgba(0,0,0,0.9)] flex flex-col items-center justify-center flex-1 min-w-[68px] sm:min-w-[90px] md:min-w-[105px] min-h-[90px] sm:min-h-[115px] border border-white/50 select-none transition-transform hover:scale-105">
          <span className="font-sans text-[11px] sm:text-xs font-semibold text-[#D91F2C] tracking-wide mb-1">
            Seconds
          </span>
          <span className="font-display text-4xl sm:text-6xl font-black text-[#D91F2C] leading-none tabular-nums">
            {isMounted ? fmt(timeLeft.seconds) : "--"}
          </span>
        </div>
      </div>
    </div>
  );
}
