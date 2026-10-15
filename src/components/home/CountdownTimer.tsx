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
    <div className="flex flex-col items-center min-w-[3.2rem] sm:min-w-[4.5rem]">
      <span
        className={`font-display text-[2.5rem] sm:text-5xl lg:text-6xl tracking-wider font-black leading-none ${
          accent
            ? "text-[#D91F2C] drop-shadow-[0_2px_12px_rgba(217,31,44,0.5)]"
            : "text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]"
        }`}
      >
        {value}
      </span>
      <span
        className={`font-technical text-[9px] sm:text-[10px] tracking-[0.25em] uppercase mt-1.5 ${
          accent ? "text-[#D91F2C]/80 font-bold" : "text-white/45"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

function Separator() {
  return (
    <span className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#D91F2C]/70 font-black select-none animate-pulse -mt-3 sm:-mt-4 px-0.5 sm:px-1">
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
    <div className="w-fit">
      <div className="bg-black/80 backdrop-blur-md border border-white/10 px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 rounded-xl shadow-[0_0_40px_rgba(217,31,44,0.12)] ring-1 ring-[#D91F2C]/20">
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
