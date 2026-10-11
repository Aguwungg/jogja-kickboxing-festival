"use client";

import React from "react";
import { Printer } from "lucide-react";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 border border-white/20 hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-sm transition-all"
    >
      <Printer className="w-4 h-4" />
      <span>Cetak Bukti E-Invoice</span>
    </button>
  );
}
