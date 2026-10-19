"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
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

export default function CountdownTimer() {
  // Target: 12 Desember 2026, 09:00:00 WIB (UTC+7)
  const targetDate = new Date("2026-12-12T09:00:00+07:00").getTime();

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
      {/* Subtle outer glow on hover */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#D91F2C]/20 via-transparent to-[#D91F2C]/20 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition duration-700 pointer-events-none" />
      
      {/* Main Glass Panel */}
      <div className="relative bg-black/75 backdrop-blur-xl border border-white/15 px-4 sm:px-8 lg:px-10 py-4 sm:py-5 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] ring-1 ring-white/10 overflow-hidden">
        {/* Ambient bottom light */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D91F2C] to-transparent opacity-80" />
        
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
