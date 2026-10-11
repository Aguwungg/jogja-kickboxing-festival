import prisma from "@/lib/prisma";
import Link from "next/link";
import {
  Users,
  Calendar,
  Music,
  Vote,
  Inbox,
  ShoppingBag,
  ShieldCheck,
  ArrowRight,
  PlusCircle,
  Eye,
  AlertTriangle,
  Tv,
} from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const [
    totalAthletes,
    publishedAthletes,
    totalSchedule,
    totalPerformers,
    totalVotes,
    unreadMessages,
    totalProducts,
    totalOrders,
    totalPpvTickets,
  ] = await Promise.all([
    prisma.athlete.count(),
    prisma.athlete.count({ where: { isPublished: true } }),
    prisma.scheduleItem.count(),
    prisma.performer.count(),
    prisma.vote.count(),
    prisma.contactMessage.count({ where: { status: "UNREAD" } }),
    prisma.product.count(),
    prisma.order.count(),
    prisma.entitlement.count(),
  ]);

  const cards = [
    {
      title: "ATLET KICKBOXING",
      value: totalAthletes,
      subtext: `${publishedAthletes} terpublikasi • ${totalAthletes - publishedAthletes} draft`,
      icon: Users,
      href: "/admin/fighters",
      color: "border-[#EF3340]/40 text-[#EF3340]",
    },
    {
      title: "SESI JADWAL 3 HARI",
      value: totalSchedule,
      subtext: "Rundown turnamen & festival",
      icon: Calendar,
      href: "/admin/schedule",
      color: "border-blue-500/40 text-blue-400",
    },
    {
      title: "LINEUP MUSISI",
      value: totalPerformers,
      subtext: "Penampil panggung festival",
      icon: Music,
      href: "/admin/lineup",
      color: "border-amber-500/40 text-amber-400",
    },
    {
      title: "SUARA CITY PRIDE",
      value: totalVotes,
      subtext: "Total suara masuk terverifikasi",
      icon: Vote,
      href: "/admin/voting",
      color: "border-purple-500/40 text-purple-400",
    },
    {
      title: "PESAN INBOX MASUK",
      value: unreadMessages,
      subtext: "Pesan belum dibaca panitia",
      icon: Inbox,
      href: "/admin/messages",
      color: "border-emerald-500/40 text-emerald-400",
      alert: unreadMessages > 0,
    },
    {
      title: "OFFICIAL MERCH & ORDERS",
      value: totalProducts,
      subtext: `${totalOrders} pesanan masuk • ${totalProducts} produk aktif`,
      icon: ShoppingBag,
      href: "/admin/merch",
      color: "border-[#EF3340]/40 text-amber-400",
    },
    {
      title: "PPV & LIVE STREAMING",
      value: totalPpvTickets,
      subtext: `${totalPpvTickets} tiket digital aktif • 1080p 60FPS Live`,
      icon: Tv,
      href: "/admin/ppv",
      color: "border-red-500/40 text-red-400",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8 font-sans">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <h1
            className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            COMMAND CENTER OVERVIEW
          </h1>
          <p className="text-xs text-[#99999F] mt-1">
            Pantau dan kelola seluruh entitas operasional JOGJA KICKBOXING FESTIVAL 2026 secara terpusat.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/admin/fighters/new"
            className="inline-flex items-center gap-1.5 bg-[#D91F2C] hover:bg-[#EF3340] text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-sm transition-all"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Tambah Fighter</span>
          </Link>
          <Link
            href="/"
            target="_blank"
            className="inline-flex items-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-sm transition-all"
          >
            <Eye className="w-4 h-4" />
            <span>Lihat Web</span>
          </Link>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cards.map((c, i) => {
          const Icon = c.icon;
          return (
            <Link
              key={i}
              href={c.href}
              className="bg-[#171719] border border-white/10 p-6 rounded-sm hover:border-white/30 transition-all flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#99999F]">
                  {c.title}
                </span>
                <div className={`p-2 rounded-sm border bg-black/40 ${c.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>

              <div>
                <div
                  className="text-4xl font-black text-white tracking-tight"
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  {c.value}
                </div>
                <div className="flex items-center justify-between text-xs text-[#99999F] mt-1">
                  <span>{c.subtext}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Security & Data Policy Banner */}
      <div className="bg-[#171719] border border-white/10 p-6 rounded-sm">
        <div className="flex items-start gap-4">
          <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h3
              className="text-lg font-bold text-white uppercase tracking-wider"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              DATA ENVIRONMENT POLICY AKTIF
            </h3>
            <p className="text-xs text-[#99999F] leading-relaxed">
              Anda saat ini beroperasi di lingkungan <span className="text-white font-mono font-bold">STAGING / LOCAL (development)</span>.
              Seluruh data atlet bertanda dummy dilindungi oleh filter publikasi server-side.
              Setiap catatan baru berstatus <span className="text-amber-400 font-mono">isPublished: false</span> tidak akan bocor ke API publik sebelum diizinkan oleh Administrator.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
