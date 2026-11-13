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
  label = "COUNTDOWN MENUJU HARI H • 19 DESEMBER 2026",
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
      className={`w-full bg-[#08080B] border-y border-[#D91F2C]/35 py-4 sm:py-5 px-4 sm:px-8 relative overflow-hidden ${className}`}
    >
      {/* Subtle combat texture/gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-[#140608]/70 to-black pointer-events-none" />
      <div className="absolute inset-0 combat-grain pointer-events-none opacity-40" />

      <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
        {/* Left: Official Fight Night Status Badge */}
        <div className="flex items-center gap-3 text-center md:text-left">
          <span className="relative flex h-3 w-3 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EF3340] opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#D91F2C]" />
          </span>
          <div className="space-y-0.5">
            <div className="font-technical text-[10px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#EF3340]">
              {label}
            </div>
            <div className="font-display text-base sm:text-xl uppercase tracking-wider text-white">
              GOR PANCASILA UGM • YOGYAKARTA
            </div>
          </div>
        </div>

        {/* Right: Industrial Combat Round Timer (Dark High-Contrast Digits) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Days */}
          <div className="bg-[#111116] border border-white/15 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xs flex flex-col items-center min-w-[64px] sm:min-w-[80px] shadow-lg">
            <span className="font-display text-2xl sm:text-4xl font-black text-white leading-none tabular-nums tracking-tight">
              {isMounted ? fmt(timeLeft.days) : "--"}
            </span>
            <span className="font-technical text-[9px] sm:text-[10px] font-bold text-[#D91F2C] uppercase tracking-widest mt-1">
              HARI
            </span>
          </div>

          <span className="font-display text-xl sm:text-2xl text-white/40 font-bold">:</span>

          {/* Hours */}
          <div className="bg-[#111116] border border-white/15 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xs flex flex-col items-center min-w-[64px] sm:min-w-[80px] shadow-lg">
            <span className="font-display text-2xl sm:text-4xl font-black text-white leading-none tabular-nums tracking-tight">
              {isMounted ? fmt(timeLeft.hours) : "--"}
            </span>
            <span className="font-technical text-[9px] sm:text-[10px] font-bold text-[#D91F2C] uppercase tracking-widest mt-1">
              JAM
            </span>
          </div>

          <span className="font-display text-xl sm:text-2xl text-white/40 font-bold">:</span>

          {/* Minutes */}
          <div className="bg-[#111116] border border-white/15 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xs flex flex-col items-center min-w-[64px] sm:min-w-[80px] shadow-lg">
            <span className="font-display text-2xl sm:text-4xl font-black text-white leading-none tabular-nums tracking-tight">
              {isMounted ? fmt(timeLeft.minutes) : "--"}
            </span>
            <span className="font-technical text-[9px] sm:text-[10px] font-bold text-[#D91F2C] uppercase tracking-widest mt-1">
              MENIT
            </span>
          </div>

          <span className="font-display text-xl sm:text-2xl text-white/40 font-bold">:</span>

          {/* Seconds */}
          <div className="bg-[#111116] border border-white/15 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xs flex flex-col items-center min-w-[64px] sm:min-w-[80px] shadow-lg">
            <span className="font-display text-2xl sm:text-4xl font-black text-[#EF3340] leading-none tabular-nums tracking-tight">
              {isMounted ? fmt(timeLeft.seconds) : "--"}
            </span>
            <span className="font-technical text-[9px] sm:text-[10px] font-bold text-[#A1A1AA] uppercase tracking-widest mt-1">
              DETIK
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
