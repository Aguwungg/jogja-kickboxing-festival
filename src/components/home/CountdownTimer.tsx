"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
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

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="w-full max-w-lg mx-auto lg:mx-0">
      <div className="bg-black/80 backdrop-blur-md border border-white/15 px-5 sm:px-8 py-4 sm:py-5 rounded-xl shadow-[0_0_30px_rgba(217,31,44,0.15)] ring-1 ring-[#D91F2C]/30">
        <div className="grid grid-cols-4 items-center text-center">
          
          {/* Days */}
          <div className="flex flex-col items-center">
            <span className="font-display text-4xl sm:text-5xl lg:text-6xl text-white tracking-wider font-black drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">
              {isMounted ? formatNumber(timeLeft.days) : "57"}
            </span>
            <span className="font-technical text-[10px] sm:text-xs text-white/50 tracking-[0.2em] uppercase mt-1">
              HARI
            </span>
          </div>

          {/* Separator */}
          <div className="font-display text-3xl sm:text-4xl text-[#D91F2C] font-black -mt-4 animate-pulse select-none">
            :
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center">
            <span className="font-display text-4xl sm:text-5xl lg:text-6xl text-white tracking-wider font-black drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">
              {isMounted ? formatNumber(timeLeft.hours) : "21"}
            </span>
            <span className="font-technical text-[10px] sm:text-xs text-white/50 tracking-[0.2em] uppercase mt-1">
              JAM
            </span>
          </div>

          {/* Separator */}
          <div className="font-display text-3xl sm:text-4xl text-[#D91F2C] font-black -mt-4 animate-pulse select-none">
            :
          </div>

          {/* Minutes */}
          <div className="flex flex-col items-center">
            <span className="font-display text-4xl sm:text-5xl lg:text-6xl text-white tracking-wider font-black drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">
              {isMounted ? formatNumber(timeLeft.minutes) : "07"}
            </span>
            <span className="font-technical text-[10px] sm:text-xs text-white/50 tracking-[0.2em] uppercase mt-1">
              MENIT
            </span>
          </div>

          {/* Separator */}
          <div className="font-display text-3xl sm:text-4xl text-[#D91F2C] font-black -mt-4 animate-pulse select-none">
            :
          </div>

          {/* Seconds */}
          <div className="flex flex-col items-center">
            <span className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#D91F2C] tracking-wider font-black drop-shadow-[0_2px_10px_rgba(217,31,44,0.4)]">
              {isMounted ? formatNumber(timeLeft.seconds) : "28"}
            </span>
            <span className="font-technical text-[10px] sm:text-xs text-[#D91F2C]/80 tracking-[0.2em] uppercase mt-1 font-bold">
              DETIK
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
