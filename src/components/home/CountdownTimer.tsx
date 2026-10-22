"use client";

import { useEffect, useState } from "react";
import { EVENT_CONFIG } from "@/lib/event-config";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetIso?: string;
}

function TimeUnit({ value, label, accent = false }: { value: string; label: string; accent?: boolean }) {
  return (
    <div className="flex flex-col items-center justify-center min-w-[3.4rem] sm:min-w-[5.2rem] px-1 sm:px-2">
      <span
        className={`font-display text-[2.6rem] sm:text-5xl lg:text-6xl tracking-tight font-black leading-none ${
          accent
            ? "text-[#D91F2C] drop-shadow-[0_0_15px_rgba(217,31,44,0.6)]"
            : "text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.18)]"
        }`}
      >
        {value}
      </span>
      <span
        className={`font-technical text-[9px] sm:text-[11px] tracking-[0.25em] uppercase mt-2 ${
          accent ? "text-[#D91F2C] font-bold" : "text-white/50 font-medium"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

function Separator() {
  return (
    <span className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#D91F2C]/60 font-black select-none animate-pulse -mt-3 sm:-mt-4 px-0.5 sm:px-1.5">
      :
    </span>
  );
}

export default function CountdownTimer({ targetIso }: CountdownTimerProps) {
  // Target: Configurable via props or EVENT_CONFIG SSOT (12 Desember 2026, 09:00:00 WIB)
  const targetDateStr = targetIso || EVENT_CONFIG.dates.startIso;
  const targetDate = new Date(targetDateStr).getTime();

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const difference = Math.max(0, targetDate - now);

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
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
  }, []);

  const fmt = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="w-fit mx-auto relative group">
      {/* Sharp Athletic Frame with Ring-Corner Accents */}
      <div className="relative bg-[#0D0D0E]/90 border border-white/15 px-5 sm:px-9 lg:px-12 py-4 sm:py-5 shadow-2xl ring-corner-frame">
        {/* Subtle top indicator */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-[#D91F2C]" />
        
        {/* Horizontal flex — never wraps */}
        <div className="flex items-center justify-center gap-1 sm:gap-2">
          <TimeUnit value={isMounted ? fmt(timeLeft.days) : "57"} label="HARI" />
          <Separator />
          <TimeUnit value={isMounted ? fmt(timeLeft.hours) : "14"} label="JAM" />
          <Separator />
          <TimeUnit value={isMounted ? fmt(timeLeft.minutes) : "33"} label="MENIT" />
          <Separator />
          <TimeUnit value={isMounted ? fmt(timeLeft.seconds) : "00"} label="DETIK" accent />
        </div>
      </div>
    </div>
  );
}
