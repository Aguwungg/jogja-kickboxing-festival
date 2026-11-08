"use client";

import { useEffect, useState } from "react";
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

export default function CountdownTimer({
  targetIso,
  label = "COUNTDOWN MENUJU HARI H • 18 DESEMBER 2026",
  className = "",
}: CountdownTimerProps) {
  const targetDateStr = targetIso || EVENT_CONFIG.dates.startIso;
  const targetDate = new Date(targetDateStr).getTime();

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
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
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const fmt = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className={`w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto ${className}`}>
      {/* ─── Combat Status Pill Label ─── */}
      {label && (
        <div className="text-center mb-3 sm:mb-5">
          <span className="font-technical text-[10px] sm:text-xs md:text-sm text-[#EF3340] tracking-[0.2em] uppercase font-bold bg-black/90 px-4 sm:px-6 py-1.5 sm:py-2 border border-white/15 rounded-xs inline-flex items-center gap-2 shadow-2xl max-w-full">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-xs bg-[#EF3340] opacity-75"></span>
              <span className="relative inline-flex rounded-xs h-2 w-2 bg-[#EF3340]"></span>
            </span>
            <span className="truncate">{label}</span>
          </span>
        </div>
      )}

      {/* ═════════════════════════════════════════════════════════════════════
          BYON SIGNATURE COMBAT COUNTDOWN (4 TALL WHITE PORTRAIT CARDS)
          Pure stark white cards, vibrant red condensed numbers, instant visual pop!
         ═════════════════════════════════════════════════════════════════════ */}
      <div className="grid grid-cols-4 gap-2.5 sm:gap-4 md:gap-5 max-w-sm sm:max-w-lg md:max-w-xl mx-auto">
        
        {/* Days */}
        <div className="bg-white rounded-sm sm:rounded-md p-3 sm:p-5 md:p-6 shadow-[0_18px_50px_rgba(0,0,0,0.95)] flex flex-col items-center justify-center transition-transform hover:scale-105 select-none min-h-[105px] sm:min-h-[140px] md:min-h-[160px] border border-white/40">
          <span className="font-sans text-[11px] sm:text-xs md:text-sm font-bold text-[#D91F2C] tracking-wide mb-1 sm:mb-2">
            Hari
          </span>
          <span className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-[#D91F2C] leading-none tabular-nums">
            {isMounted ? fmt(timeLeft.days) : "--"}
          </span>
        </div>

        {/* Hours */}
        <div className="bg-white rounded-sm sm:rounded-md p-3 sm:p-5 md:p-6 shadow-[0_18px_50px_rgba(0,0,0,0.95)] flex flex-col items-center justify-center transition-transform hover:scale-105 select-none min-h-[105px] sm:min-h-[140px] md:min-h-[160px] border border-white/40">
          <span className="font-sans text-[11px] sm:text-xs md:text-sm font-bold text-[#D91F2C] tracking-wide mb-1 sm:mb-2">
            Jam
          </span>
          <span className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-[#D91F2C] leading-none tabular-nums">
            {isMounted ? fmt(timeLeft.hours) : "--"}
          </span>
        </div>

        {/* Minutes */}
        <div className="bg-white rounded-sm sm:rounded-md p-3 sm:p-5 md:p-6 shadow-[0_18px_50px_rgba(0,0,0,0.95)] flex flex-col items-center justify-center transition-transform hover:scale-105 select-none min-h-[105px] sm:min-h-[140px] md:min-h-[160px] border border-white/40">
          <span className="font-sans text-[11px] sm:text-xs md:text-sm font-bold text-[#D91F2C] tracking-wide mb-1 sm:mb-2">
            Menit
          </span>
          <span className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-[#D91F2C] leading-none tabular-nums">
            {isMounted ? fmt(timeLeft.minutes) : "--"}
          </span>
        </div>

        {/* Seconds */}
        <div className="bg-white rounded-sm sm:rounded-md p-3 sm:p-5 md:p-6 shadow-[0_18px_50px_rgba(0,0,0,0.95)] flex flex-col items-center justify-center transition-transform hover:scale-105 select-none min-h-[105px] sm:min-h-[140px] md:min-h-[160px] border border-white/40">
          <span className="font-sans text-[11px] sm:text-xs md:text-sm font-bold text-[#D91F2C] tracking-wide mb-1 sm:mb-2">
            Detik
          </span>
          <span className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-[#D91F2C] leading-none tabular-nums">
            {isMounted ? fmt(timeLeft.seconds) : "--"}
          </span>
        </div>

      </div>
    </div>
  );
}
