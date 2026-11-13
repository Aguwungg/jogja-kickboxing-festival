"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, MapPin, Compass, Flame, ArrowUpRight } from "lucide-react";
import { jkbfLinks } from "@/lib/event-config";

export default function EventQuickAccessBar() {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "Venue", href: "/venue", icon: MapPin },
    { label: "Guide", href: "/event-guide", icon: Compass },
    { label: "What's New", href: "/whats-new", icon: Flame },
  ];

  return (
    <nav
      aria-label="Navigasi Cepat Hari Acara"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-black/92 backdrop-blur-xl border-t border-white/10 px-3 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))] shadow-[0_-10px_30px_rgba(0,0,0,0.8)]"
    >
      <div className="flex items-center justify-between max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex-1 flex flex-col items-center justify-center py-1 transition-colors select-none ${
                isActive
                  ? "text-[#D91F2C]"
                  : "text-[#86868B] hover:text-[#F5F5F7]"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="font-technical text-[9px] uppercase tracking-wider font-bold mt-1">
                {item.label}
              </span>
            </Link>
          );
        })}

        {/* Quick Action: Register Google Form */}
        <a
          href={jkbfLinks.fighterRegistration}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-1 text-white bg-[#D91F2C] hover:bg-[#B81521] rounded-xs transition-colors shadow-[0_0_12px_rgba(217,31,44,0.4)] ml-1"
        >
          <div className="flex items-center gap-0.5">
            <span className="font-display text-[10px] uppercase tracking-wider font-bold">
              DAFTAR
            </span>
            <ArrowUpRight className="w-3 h-3" />
          </div>
          <span className="font-technical text-[8px] uppercase tracking-tighter text-white/80">
            GOOGLE FORM
          </span>
        </a>
      </div>
    </nav>
  );
}
