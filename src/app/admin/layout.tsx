"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import {
  LayoutDashboard,
  Users,
  Calendar,
  Music,
  Inbox,
  Vote,
  LogOut,
  ArrowLeft,
  Shield,
  Swords,
  Video,
  Package,
  Tv,
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { data: session } = useSession();

  // Do not wrap /admin/login with admin sidebar
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const menu = [
    { name: "Command Center", href: "/admin", icon: LayoutDashboard },
    { name: "Manajemen Fighter", href: "/admin/fighters", icon: Users },
    { name: "Partai & Bracket", href: "/admin/matches", icon: Swords },
    { name: "Creator & Media", href: "/admin/creators", icon: Video },
    { name: "Official Merch", href: "/admin/merch", icon: Package },
    { name: "PPV & Streaming", href: "/admin/ppv", icon: Tv },
    { name: "Jadwal & Rundown", href: "/admin/schedule", icon: Calendar },
    { name: "Lineup Musik", href: "/admin/lineup", icon: Music },
    { name: "Pesan Masuk (Inbox)", href: "/admin/messages", icon: Inbox },
    { name: "Voting City Pride", href: "/admin/voting", icon: Vote },
  ];

  const userRole = (session?.user as any)?.role || "ADMIN";
  const userName = session?.user?.name || "Administrator";
  const userEmail = session?.user?.email || "admin@jkbchampionship.id";

  return (
    <div className="flex min-h-screen bg-[#09090b] text-[#F6F3EC]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#171719] border-r border-white/10 flex flex-col shrink-0">
        {/* Brand */}
        <div className="h-16 flex items-center px-6 border-b border-white/10">
          <Link href="/admin" className="flex items-center gap-2">
            <span
              className="font-black text-xl uppercase tracking-widest text-white"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              JKB <span className="text-[#EF3340]">COMMAND</span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-sm bg-[#D91F2C]/20 border border-[#D91F2C]/40 text-[#EF3340]">
              ADMIN
            </span>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
          {menu.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || (item.href !== "/admin" && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-3.5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-all font-sans ${
                  isActive
                    ? "bg-[#D91F2C] text-white shadow-md shadow-[#D91F2C]/20"
                    : "text-[#99999F] hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span className="truncate">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* User Card & Logout */}
        <div className="p-4 border-t border-white/10 bg-[#09090b]/40">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-sm bg-[#D91F2C]/10 border border-[#D91F2C]/30 flex items-center justify-center text-[#EF3340] font-black text-sm">
              {userName.charAt(0)}
            </div>
            <div className="overflow-hidden">
              <span className="text-xs font-bold text-white block truncate">{userName}</span>
              <span className="text-[10px] text-amber-400 font-mono block uppercase">{userRole}</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs font-sans">
            <Link
              href="/"
              className="text-[#99999F] hover:text-white flex items-center gap-1 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Situs Publik</span>
            </Link>

            <button
              onClick={() => signOut({ callbackUrl: "/admin/login" })}
              className="text-white/40 hover:text-[#EF3340] flex items-center gap-1 transition-colors"
              title="Keluar / Logout"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Keluar</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen overflow-x-hidden">
        {/* Top Header Bar */}
        <header className="h-16 flex items-center justify-between px-8 bg-[#171719]/60 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <Shield className="w-4 h-4 text-[#EF3340]" />
            <span className="text-xs font-bold uppercase tracking-wider text-white/80 font-sans">
              Portal Manajemen Acara & Konten — Staging Environment
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-[#99999F] font-sans">Login sebagai:</span>
            <span className="text-xs font-mono font-bold text-white bg-white/5 px-2.5 py-1 rounded-sm border border-white/10">
              {userEmail}
            </span>
          </div>
        </header>

        {/* Page Children */}
        <main className="flex-1 p-6 sm:p-8 bg-[#09090b]">
          {children}
        </main>
      </div>
    </div>
  );
}
