"use client";

import { useState, useEffect } from "react";
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
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { useRouter } from "next/navigation";
import { hasAdminAccess } from "@/lib/rbac";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileDrawerOpen(false);
  }, [pathname]);

  // Handle client-side redirect if unauthenticated
  useEffect(() => {
    if (pathname !== "/admin/login" && status === "unauthenticated") {
      router.replace(`/admin/login?callbackUrl=${encodeURIComponent(pathname)}`);
    }
  }, [status, pathname, router]);

  // Do not wrap /admin/login with admin sidebar
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  // Loading state
  if (status === "loading") {
    return (
      <div className="min-h-screen bg-[#09090B] flex flex-col items-center justify-center text-white space-y-3">
        <div className="w-8 h-8 border-2 border-[#D91F2C] border-t-transparent rounded-full animate-spin" />
        <p className="text-xs font-mono uppercase tracking-widest text-[#9A9AA2]">
          Memverifikasi Otorisasi Sesi...
        </p>
      </div>
    );
  }

  // Unauthenticated or Non-Admin state
  const role = (session?.user as any)?.role;
  const isAuthorized = status === "authenticated" && hasAdminAccess(role);

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-[#09090B] flex flex-col items-center justify-center px-4 text-center text-white space-y-4">
        <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500">
          <Shield className="w-6 h-6" />
        </div>
        <h2 className="text-2xl font-black uppercase tracking-tight">
          Akses Terbatas Administrator
        </h2>
        <p className="text-xs text-[#9A9AA2] max-w-sm">
          Sesi Anda tidak memiliki kredensial atau izin peran (role) yang sah untuk mengelola Command Center JKB 2026.
        </p>
        <button
          onClick={() => signOut({ callbackUrl: "/admin/login" })}
          className="px-5 py-2.5 rounded-sm bg-[#D91F2C] hover:bg-[#EF3340] text-xs font-bold uppercase tracking-wider text-white transition-colors"
        >
          Masuk Ulang dengan Akun Administrator
        </button>
      </div>
    );
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

  const userRole = role || "PETUGAS";
  const userName = session?.user?.name || "Administrator";
  const userEmail = session?.user?.email || "-";

  const renderNavContent = () => (
    <>
      {/* Brand */}
      <div className="h-16 flex items-center justify-between px-6 border-b border-white/10 shrink-0">
        <Link href="/admin" className="flex items-center gap-2">
          <span
            className="font-black text-xl uppercase tracking-widest text-white"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            JKB <span className="text-[#D91F2C]">COMMAND</span>
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-sm bg-[#D91F2C]/20 border border-[#D91F2C]/40 text-[#D91F2C]">
            ADMIN
          </span>
        </Link>
        {/* Mobile close button */}
        <button
          type="button"
          onClick={() => setMobileDrawerOpen(false)}
          className="md:hidden text-[#9A9AA2] hover:text-white p-1"
          aria-label="Tutup Menu Admin"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        {menu.map((item) => {
          const Icon = item.icon;
          const isActive =
            pathname === item.href ||
            (item.href !== "/admin" && pathname?.startsWith(item.href));
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-3.5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-all font-sans ${
                isActive
                  ? "bg-[#D91F2C] text-white shadow-md shadow-[#D91F2C]/20"
                  : "text-[#9A9AA2] hover:bg-white/5 hover:text-white"
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span className="truncate">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* User Card & Logout */}
      <div className="p-4 border-t border-white/10 bg-[#09090B]/60 shrink-0">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-sm bg-[#D91F2C]/15 border border-[#D91F2C]/30 flex items-center justify-center text-[#D91F2C] font-black text-xs shrink-0">
            {userName.charAt(0)}
          </div>
          <div className="overflow-hidden">
            <span className="text-xs font-bold text-white block truncate">{userName}</span>
            <span className="text-[10px] text-amber-400 font-mono block uppercase">
              {userRole}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs font-sans">
          <Link
            href="/"
            className="text-[#9A9AA2] hover:text-white flex items-center gap-1 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Situs Publik</span>
          </Link>

          <button
            onClick={() => signOut({ callbackUrl: "/admin/login" })}
            className="text-white/40 hover:text-[#D91F2C] flex items-center gap-1 transition-colors"
            title="Keluar / Logout"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Keluar</span>
          </button>
        </div>
      </div>
    </>
  );

  return (
    <div className="flex min-h-screen bg-[#09090B] text-[#F5F3EE]">
      
      {/* Desktop Sidebar (hidden on mobile, fixed width on md+) */}
      <aside className="hidden md:flex md:w-64 bg-[#171719] border-r border-white/10 flex-col shrink-0">
        {renderNavContent()}
      </aside>

      {/* Mobile Drawer (Slides in on mobile) */}
      <AnimatePresence>
        {mobileDrawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileDrawerOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-xs z-40 md:hidden"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="fixed top-0 bottom-0 left-0 w-72 max-w-[85vw] bg-[#171719] border-r border-white/10 z-50 flex flex-col md:hidden shadow-2xl"
            >
              {renderNavContent()}
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen min-w-0 overflow-x-hidden">
        
        {/* Top Header Bar */}
        <header className="h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8 bg-[#171719]/80 border-b border-white/10 shrink-0 sticky top-0 z-30 backdrop-blur-md">
          <div className="flex items-center gap-3">
            {/* Hamburger trigger for mobile */}
            <button
              type="button"
              onClick={() => setMobileDrawerOpen(true)}
              className="md:hidden p-2 rounded-sm border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors"
              aria-label="Buka Menu Admin"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#D91F2C] hidden sm:block" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/90 font-sans truncate">
                Admin Panel <span className="hidden sm:inline text-[#9A9AA2] font-normal">• JKB 2026</span>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <span className="text-[#9A9AA2] font-sans hidden lg:inline">Login:</span>
            <span className="font-mono font-bold text-white bg-white/5 px-2.5 py-1 rounded-sm border border-white/10 max-w-[180px] sm:max-w-none truncate">
              {userEmail}
            </span>
          </div>
        </header>

        {/* Page Children with responsive padding and table containment */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 bg-[#09090B] overflow-x-auto">
          {children}
        </main>
      </div>

    </div>
  );
}
