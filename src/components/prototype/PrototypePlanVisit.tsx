"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Calendar, MapPin, Ticket, Clock, CheckCircle2 } from "lucide-react";
import { EVENT_CONFIG } from "@/lib/event-config";

export default function PrototypePlanVisit() {
  const [activeDay, setActiveDay] = useState<number>(1);

  const daysData = [
    {
      day: 1,
      date: "SABTU, 12 DESEMBER 2026",
      theme: "Official Weigh-In & Babak Penyisihan",
      highlights: [
        "09:00 - Timbang badan resmi 80 atlet",
        "13:30 - 12 partai eliminasi Bantam & Featherweight",
        "18:30 - Opening Ceremony & Sunset Sound Session",
      ],
    },
    {
      day: 2,
      date: "MINGGU, 13 DESEMBER 2026",
      theme: "Perempat Final, Semifinal & Showcase Komunitas",
      highlights: [
        "10:00 - Perempat final Lightweight & Welterweight",
        "15:30 - Coaching clinic & Martial Arts Showcase",
        "18:30 - 8 laga hidup-mati semifinal sabuk juara",
      ],
    },
    {
      day: 3,
      date: "SENIN, 14 DESEMBER 2026",
      theme: "Grand Final 4 Sabuk Juara & Pesta Musik Akbar",
      highlights: [
        "13:00 - Pengumuman pemenang City Pride Voting",
        "19:00 - Perebutan 4 sabuk emas Redy Championship 2",
        "21:30 - Closing Celebration & headline music afterparty",
      ],
    },
  ];

  const currentDayInfo = daysData.find((d) => d.day === activeDay) || daysData[0];

  return (
    <section className="relative w-full bg-[#F5F3EE] text-[#09090B] py-20 sm:py-28 overflow-hidden">
      
      {/* Decorative Warm Paper Grain & Diagonal Lines */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-5">
        <div className="w-full h-full bg-[radial-gradient(#09090B_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 border-b border-[#09090B]/15 pb-8">
          <div>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#D91F2C] mb-2 font-mono">
              PANDUAN PRAKTIS FESTIVAL
            </p>
            <h2
              className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-[#09090B] leading-[0.9] font-display"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              PLAN YOUR VISIT.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#09090B]/70 max-w-md font-medium leading-relaxed">
            Semua informasi esensial yang Anda butuhkan untuk merencanakan kunjungan ke GOR UNY, 12–14 Desember 2026.
          </p>
        </div>

        {/* 3 Core Destination Cards in Editorial Presentation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          
          {/* Card 1: JADWAL FESTIVAL */}
          <div className="flex flex-col justify-between p-6 sm:p-8 rounded-sm bg-white border border-[#09090B]/10 shadow-sm hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-[#D91F2C] uppercase tracking-wider font-mono">
                  01 / RUNDOWN
                </span>
                <Calendar className="w-4 h-4 text-[#D91F2C]" />
              </div>
              <h3
                className="text-2xl sm:text-3xl font-black uppercase text-[#09090B] mb-2 font-display"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                JADWAL 3 HARI
              </h3>
              <p className="text-xs sm:text-sm text-[#09090B]/75 leading-relaxed">
                Rundown lengkap kronologis mulai dari penimbangan atlet, eliminasi, hingga malam final sabuk juara dan panggung musik.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#09090B]/10">
              <Link
                href="/jadwal"
                className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#D91F2C] hover:text-[#EF3340] font-display"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                <span>Lihat Rundown Lengkap</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 2: VENUE GOR UNY */}
          <div className="flex flex-col justify-between p-6 sm:p-8 rounded-sm bg-white border border-[#09090B]/10 shadow-sm hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider font-mono">
                  02 / ARENA
                </span>
                <MapPin className="w-4 h-4 text-blue-600" />
              </div>
              <h3
                className="text-2xl sm:text-3xl font-black uppercase text-[#09090B] mb-2 font-display"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                GOR UNY JOGJA
              </h3>
              <p className="text-xs sm:text-sm text-[#09090B]/75 leading-relaxed">
                Gelanggang Olahraga Universitas Negeri Yogyakarta di pusat kota. Akses mudah, area parkir memadai, dan fasilitas penonton yang nyaman.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#09090B]/10">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-blue-600 hover:text-blue-700 font-display"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                <span>Panduan Akses & Lokasi</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 3: INFO TIKET */}
          <div className="flex flex-col justify-between p-6 sm:p-8 rounded-sm bg-[#09090B] text-[#F5F3EE] shadow-md hover:shadow-lg transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-[#D91F2C] uppercase tracking-wider font-mono">
                  03 / AKSES
                </span>
                <Ticket className="w-4 h-4 text-[#D91F2C]" />
              </div>
              <h3
                className="text-2xl sm:text-3xl font-black uppercase text-[#F5F3EE] mb-2 font-display"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                INFO TIKET RESMI
              </h3>
              <p className="text-xs sm:text-sm text-[#A7A7AD] leading-relaxed">
                Akses terpadu ke seluruh arena pertandingan dan area panggung festival. Pembelian tiket resmi terverifikasi melalui mitra resmi RAWOOH.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10">
              <Link
                href="/tickets"
                className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#EF3340] hover:text-white font-display"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                <span>Akses Tiket Festival</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Interactive Fast Rundown Selector Tab */}
        <div className="rounded-sm bg-white border border-[#09090B]/10 p-6 sm:p-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#09090B]/10 pb-4 mb-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#09090B]/60 font-mono">
                Ringkasan Hari Pelaksanaan
              </span>
              <p className="text-sm sm:text-base font-bold text-[#09090B]">
                Pilih tanggal untuk melihat sorotan agenda festival:
              </p>
            </div>

            {/* Day Selector Buttons */}
            <div className="inline-flex rounded-sm bg-[#F5F3EE] p-1 border border-[#09090B]/10">
              {daysData.map((d) => (
                <button
                  key={d.day}
                  type="button"
                  onClick={() => setActiveDay(d.day)}
                  className={`px-4 py-2 rounded-sm text-xs font-black uppercase tracking-wider transition-all font-display ${
                    activeDay === d.day
                      ? "bg-[#D91F2C] text-white shadow-sm"
                      : "text-[#09090B]/70 hover:text-[#09090B]"
                  }`}
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  HARI {d.day} ({11 + d.day} DES)
                </button>
              ))}
            </div>
          </div>

          {/* Selected Day Agenda Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-5 space-y-1">
              <span className="text-xs font-bold text-[#D91F2C] uppercase tracking-wider font-mono">
                {currentDayInfo.date}
              </span>
              <h4
                className="text-xl sm:text-2xl font-black uppercase text-[#09090B] font-display"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                {currentDayInfo.theme}
              </h4>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {currentDayInfo.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-sm bg-[#F5F3EE] border border-[#09090B]/5 text-xs text-[#09090B] font-medium flex items-start gap-2"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D91F2C] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
