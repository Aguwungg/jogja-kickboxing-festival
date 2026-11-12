import prisma from "@/lib/prisma";
import Link from "next/link";
import { requireAdminSession } from "@/lib/auth-guard";
import {
  Users,
  Calendar,
  Inbox,
  ShieldCheck,
  ArrowRight,
  Swords,
  Eye,
  PlusCircle,
} from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  await requireAdminSession();

  const [
    totalMatches,
    completedMatches,
    totalAthletes,
    publishedAthletes,
    totalSchedule,
    unreadMessages,
  ] = await Promise.all([
    prisma.match.count(),
    prisma.match.count({ where: { status: "COMPLETED" } }),
    prisma.athlete.count(),
    prisma.athlete.count({ where: { isPublished: true } }),
    prisma.scheduleItem.count(),
    prisma.contactMessage.count({ where: { status: "UNREAD" } }),
  ]);

  const cards = [
    {
      title: "ATUR MENANG / KALAH",
      value: `${completedMatches}/${totalMatches}`,
      subtext: `${totalMatches - completedMatches} partai menunggu hasil`,
      icon: Swords,
      href: "/admin/matches",
      color: "border-[#D91F2C]/50 text-[#EF3340]",
    },
    {
      title: "DAFTAR FIGHTER",
      value: totalAthletes,
      subtext: `${publishedAthletes} tampil publik • ${totalAthletes - publishedAthletes} draft`,
      icon: Users,
      href: "/admin/fighters",
      color: "border-white/15 text-white",
    },
    {
      title: "JADWAL & INFORMASI",
      value: totalSchedule,
      subtext: "Agenda 19–20 Desember 2026",
      icon: Calendar,
      href: "/admin/schedule",
      color: "border-blue-500/40 text-blue-400",
    },
    {
      title: "PESAN MASUK (INBOX)",
      value: unreadMessages,
      subtext: "Pesan belum dibaca panitia",
      icon: Inbox,
      href: "/admin/messages",
      color: "border-emerald-500/40 text-emerald-400",
      alert: unreadMessages > 0,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <h1
            className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            PANEL PANITIA JKBF 2026
          </h1>
          <p className="text-xs text-[#99999F] mt-1">
            Kelola hasil menang/kalah pertandingan, daftar fighter, dan informasi jadwal dengan cepat.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Link
            href="/admin/matches"
            className="inline-flex items-center gap-1.5 bg-[#D91F2C] hover:bg-[#EF3340] text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-sm transition-all"
          >
            <Swords className="w-4 h-4" />
            <span>Atur Menang / Kalah</span>
          </Link>
          <Link
            href="/admin/schedule"
            className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/15 text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-sm transition-all"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Tambah Info / Jadwal</span>
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

      {/* 4 Core Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {cards.map((c) => {
          const Icon = c.icon;
          return (
            <Link
              key={c.href}
              href={c.href}
              className={`group p-6 bg-[#171719] border rounded-sm transition-all hover:bg-white/[0.04] flex flex-col justify-between ${c.color}`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#99999F] block mb-1">
                    {c.title}
                  </span>
                  <div className="text-4xl font-black text-white">{c.value}</div>
                </div>
                <div className="p-2.5 rounded-sm bg-black/40 border border-white/5">
                  <Icon className="w-5 h-5" />
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <span className={c.alert ? "text-emerald-400 font-bold" : "text-[#99999F]"}>
                  {c.subtext}
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          );
        })}
      </div>

      {/* Simple Guide */}
      <div className="bg-[#171719] border border-white/10 p-6 rounded-sm flex items-start gap-4">
        <div className="p-2.5 rounded-sm bg-[#D91F2C]/20 border border-[#D91F2C]/40 text-[#EF3340] shrink-0">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div className="space-y-1">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">
            PANDUAN SINGKAT PANITIA
          </h3>
          <p className="text-xs text-[#99999F] leading-relaxed">
            1. Buka <strong className="text-white">Atur Menang / Kalah</strong> untuk menentukan pemenang setiap partai laga (cukup pilih sudut pemenang dan klik Simpan).{" "}
            2. Buka <strong className="text-white">Jadwal &amp; Info</strong> jika perlu menambah atau menyembunyikan pengumuman/rundown 19–20 Desember 2026.
          </p>
        </div>
      </div>
    </div>
  );
}
