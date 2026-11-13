"use client";

import React, { useState } from "react";
import {
  MapPin,
  Navigation,
  Train,
  Plane,
  Bus,
  Compass,
  Copy,
  Check,
  ArrowUpRight,
} from "lucide-react";
import {
  TRAVEL_STARTING_POINTS,
  TravelStartingPoint,
} from "@/lib/venue-guide";
import { EVENT_CONFIG } from "@/lib/event-config";

export default function VenueTravelSelector() {
  const [selectedPoint, setSelectedPoint] = useState<TravelStartingPoint>(
    TRAVEL_STARTING_POINTS[0]
  );
  const [copied, setCopied] = useState(false);
  const [isLocating, setIsLocating] = useState(false);

  const handleCopyVenueName = async () => {
    try {
      await navigator.clipboard.writeText(
        "GOR Pancasila UGM (GOR Nusantara UGM), Bulaksumur, Sleman, Yogyakarta"
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard API is restricted
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleGetDirections = () => {
    if (selectedPoint.type === "current_location") {
      setIsLocating(true);
      if (typeof window !== "undefined" && "geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            setIsLocating(false);
            const lat = pos.coords.latitude;
            const lng = pos.coords.longitude;
            const url = `https://www.google.com/maps/dir/?api=1&origin=${lat},${lng}&destination=GOR+Pancasila+UGM+Yogyakarta`;
            window.open(url, "_blank", "noopener,noreferrer");
          },
          () => {
            setIsLocating(false);
            // Fallback: let Google Maps detect device location
            const url = `https://www.google.com/maps/dir/?api=1&origin=Current+Location&destination=GOR+Pancasila+UGM+Yogyakarta`;
            window.open(url, "_blank", "noopener,noreferrer");
          },
          { timeout: 7000 }
        );
      } else {
        setIsLocating(false);
        const url = `https://www.google.com/maps/dir/?api=1&origin=Current+Location&destination=GOR+Pancasila+UGM+Yogyakarta`;
        window.open(url, "_blank", "noopener,noreferrer");
      }
    } else {
      const url = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
        selectedPoint.query
      )}&destination=GOR+Pancasila+UGM+Yogyakarta`;
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const getIcon = (type: TravelStartingPoint["type"]) => {
    switch (type) {
      case "station":
        return <Train className="w-4 h-4 text-[#D91F2C]" />;
      case "airport":
        return <Plane className="w-4 h-4 text-[#D91F2C]" />;
      case "terminal":
        return <Bus className="w-4 h-4 text-[#D91F2C]" />;
      case "current_location":
        return <Compass className="w-4 h-4 text-emerald-400" />;
      default:
        return <MapPin className="w-4 h-4 text-[#D91F2C]" />;
    }
  };

  return (
    <div className="bg-[#101014] border border-white/10 rounded-sm p-5 sm:p-8 space-y-6">
      {/* Header & Copy Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-5">
        <div>
          <div className="inline-flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-xs bg-[#D91F2C]" />
            <span className="font-technical text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#D91F2C]">
              PANDUAN NAVIGASI INTERAKTIF
            </span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white">
            ANDA DATANG DARI MANA?
          </h3>
          <p className="text-xs sm:text-sm text-[#A1A1A6] font-sans mt-0.5">
            Pilih titik awal keberangkatan Anda untuk membuka rute langsung di Google Maps.
          </p>
        </div>

        <button
          onClick={handleCopyVenueName}
          className="self-start sm:self-auto inline-flex items-center gap-2 px-3.5 py-2 bg-white/[0.06] hover:bg-white/[0.1] border border-white/15 text-xs text-[#C4C4CC] hover:text-white rounded-xs font-technical uppercase tracking-wider transition-colors"
          title="Salin nama resmi venue"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-bold">NAMA TERSALIN</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-[#86868B]" />
              <span>SALIN NAMA VENUE</span>
            </>
          )}
        </button>
      </div>

      {/* Selector Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
        {TRAVEL_STARTING_POINTS.map((pt) => {
          const isSelected = selectedPoint.id === pt.id;
          return (
            <button
              key={pt.id}
              onClick={() => setSelectedPoint(pt)}
              className={`p-3.5 text-left rounded-xs border transition-all flex items-start gap-3 select-none ${
                isSelected
                  ? "bg-[#18181F] border-[#D91F2C] shadow-[0_0_15px_rgba(217,31,44,0.25)]"
                  : "bg-black/50 border-white/[0.08] hover:border-white/20 hover:bg-white/[0.02]"
              }`}
            >
              <div className="shrink-0 mt-0.5">{getIcon(pt.type)}</div>
              <div className="space-y-0.5 min-w-0">
                <span className="font-technical text-[9px] uppercase tracking-[0.2em] text-[#86868B] block">
                  {pt.badge}
                </span>
                <span
                  className={`text-xs sm:text-sm font-semibold block truncate ${
                    isSelected ? "text-white" : "text-[#D4D4D8]"
                  }`}
                >
                  {pt.name}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Action Footer */}
      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/[0.08]">
        <div className="text-xs text-[#86868B] font-sans">
          <span>Tujuan Akhir: </span>
          <strong className="text-white">
            {EVENT_CONFIG.venue.name} ({EVENT_CONFIG.venue.officialFacilityName})
          </strong>
        </div>

        <button
          onClick={handleGetDirections}
          disabled={isLocating}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#D91F2C] hover:bg-[#B81521] active:scale-[0.98] text-white font-display text-sm tracking-wider uppercase transition-all rounded-xs shadow-[0_0_20px_rgba(217,31,44,0.35)] disabled:opacity-50"
        >
          <Navigation className="w-4 h-4" />
          <span>
            {isLocating ? "MENDAPATKAN LOKASI..." : "LIHAT RUTE KE VENUE"}
          </span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

