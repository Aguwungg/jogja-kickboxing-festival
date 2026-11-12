"use client";

import Link from "next/link";
import { Calendar, MapPin, ShieldCheck, ArrowUpRight } from "lucide-react";
import { EVENT_CONFIG } from "@/lib/event-config";

export default function JadwalClient() {
  return (
    <div className="w-full max-w-5xl mx-auto space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 bg-[#141416] border border-[#D91F2C]/40 space-y-2">
          <div className="flex items-center gap-2 text-[#D91F2C] font-technical text-xs font-bold uppercase tracking-[0.2em]">
            <Calendar className="w-4 h-4" />
            <span>HARI 01 &amp; HARI 02 RESMI</span>
          </div>
          <h3 className="font-display text-3xl uppercase tracking-wider text-white">
            {EVENT_CONFIG.dates.display}
          </h3>
          <p className="text-xs text-[#8F8E8B] font-sans leading-relaxed">
            Rundown detail dua hari pertandingan resmi dan program pendukung sedang dalam tahap finalisasi panitia pelaksana.
          </p>
        </div>

        <div className="p-6 bg-[#141416] border border-white/10 space-y-2">
          <div className="flex items-center gap-2 text-[#D91F2C] font-technical text-xs font-bold uppercase tracking-[0.2em]">
            <MapPin className="w-4 h-4" />
            <span>VENUE RESMI</span>
          </div>
          <h3 className="font-display text-3xl uppercase tracking-wider text-white">
            {EVENT_CONFIG.venue.fullDisplay}
          </h3>
          <p className="text-xs text-[#8F8E8B] font-sans leading-relaxed">
            Seluruh rangkaian kompetisi dan aktivitas festival digelar di GOR Pancasila UGM, Yogyakarta.
          </p>
        </div>
      </div>

      <div className="p-5 bg-[#121214] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-[#D91F2C] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-display text-lg uppercase tracking-wider text-white">
              INFORMASI PROGRAM KEJUARAAN
            </h4>
            <p className="text-xs text-[#8F8E8B]">
              Pelajari 7 program kompetisi resmi dan rincian disiplin pertandingan pada halaman Championship.
            </p>
          </div>
        </div>
        <Link
          href="/championship"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D91F2C] hover:bg-[#B81521] text-white font-display text-sm uppercase tracking-wider transition-colors shrink-0"
        >
          <span>HALAMAN KEJUARAAN</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
