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
      className={`w-full text-center select-none ${className}`}
    >
      {/* ─── Byon Status Header: Pulsing Live Red Dot + Fight Day Label ─── */}
      <div className="inline-flex items-center justify-center gap-2.5 px-3.5 py-1 mb-3.5 bg-black/80 backdrop-blur-md border border-[#D91F2C]/50 rounded-xs shadow-lg">
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EF3340] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D91F2C]" />
        </span>
        <span className="font-technical text-[10px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#EF3340]">
          {label}
        </span>
      </div>

      {/* ─── Byon Signature 4-Box Combat Countdown (Centered, High Impact) ─── */}
      <div className="flex items-center justify-center gap-2 sm:gap-3.5 max-w-full mx-auto">
        {/* Days */}
        <div className="bg-[#0A0A0E]/95 backdrop-blur-md border border-white/20 border-t-2 border-t-[#D91F2C] hover:border-[#D91F2C] px-3 sm:px-5 py-2.5 sm:py-3.5 rounded-xs shadow-2xl flex flex-col items-center justify-center min-w-[66px] sm:min-w-[88px] transition-all">
          <span className="font-display text-3xl sm:text-5xl font-black text-white leading-none tabular-nums tracking-tight">
            {isMounted ? fmt(timeLeft.days) : "--"}
          </span>
          <span className="font-technical text-[9px] sm:text-[11px] font-bold text-[#D91F2C] uppercase tracking-widest mt-1.5">
            HARI
          </span>
        </div>

        <span className="font-display text-xl sm:text-3xl text-[#D91F2C] font-bold select-none">:</span>

        {/* Hours */}
        <div className="bg-[#0A0A0E]/95 backdrop-blur-md border border-white/20 border-t-2 border-t-[#D91F2C] hover:border-[#D91F2C] px-3 sm:px-5 py-2.5 sm:py-3.5 rounded-xs shadow-2xl flex flex-col items-center justify-center min-w-[66px] sm:min-w-[88px] transition-all">
          <span className="font-display text-3xl sm:text-5xl font-black text-white leading-none tabular-nums tracking-tight">
            {isMounted ? fmt(timeLeft.hours) : "--"}
          </span>
          <span className="font-technical text-[9px] sm:text-[11px] font-bold text-[#D91F2C] uppercase tracking-widest mt-1.5">
            JAM
          </span>
        </div>

        <span className="font-display text-xl sm:text-3xl text-[#D91F2C] font-bold select-none">:</span>

        {/* Minutes */}
        <div className="bg-[#0A0A0E]/95 backdrop-blur-md border border-white/20 border-t-2 border-t-[#D91F2C] hover:border-[#D91F2C] px-3 sm:px-5 py-2.5 sm:py-3.5 rounded-xs shadow-2xl flex flex-col items-center justify-center min-w-[66px] sm:min-w-[88px] transition-all">
          <span className="font-display text-3xl sm:text-5xl font-black text-white leading-none tabular-nums tracking-tight">
            {isMounted ? fmt(timeLeft.minutes) : "--"}
          </span>
          <span className="font-technical text-[9px] sm:text-[11px] font-bold text-[#D91F2C] uppercase tracking-widest mt-1.5">
            MENIT
          </span>
        </div>

        <span className="font-display text-xl sm:text-3xl text-[#D91F2C] font-bold select-none">:</span>

        {/* Seconds */}
        <div className="bg-[#0A0A0E]/95 backdrop-blur-md border border-white/20 border-t-2 border-t-[#EF3340] hover:border-[#EF3340] px-3 sm:px-5 py-2.5 sm:py-3.5 rounded-xs shadow-2xl flex flex-col items-center justify-center min-w-[66px] sm:min-w-[88px] transition-all">
          <span className="font-display text-3xl sm:text-5xl font-black text-[#EF3340] leading-none tabular-nums tracking-tight">
            {isMounted ? fmt(timeLeft.seconds) : "--"}
          </span>
          <span className="font-technical text-[9px] sm:text-[11px] font-bold text-[#A1A1AA] uppercase tracking-widest mt-1.5">
            DETIK
          </span>
        </div>
      </div>
    </div>
  );
}
