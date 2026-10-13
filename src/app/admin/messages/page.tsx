import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { Mail, Phone, Clock, CheckCircle2, Trash2, MessageSquare, AlertCircle } from "lucide-react";
import { requireAdminSession, verifyAdminAction } from "@/lib/auth-guard";

export const dynamic = "force-dynamic";

export default async function AdminMessagesPage() {
  await requireAdminSession();

  const messages = await prisma.contactMessage.findMany({
    orderBy: { createdAt: "desc" },
  });

  async function toggleStatus(id: string, currentStatus: string) {
    "use server";
    await verifyAdminAction();
    const nextStatus = currentStatus === "UNREAD" ? "READ" : "UNREAD";
    await prisma.contactMessage.update({
      where: { id },
      data: { status: nextStatus },
    });
    revalidatePath("/admin/messages");
    revalidatePath("/admin");
  }

  async function deleteMessage(id: string) {
    "use server";
    await verifyAdminAction();
    await prisma.contactMessage.delete({ where: { id } });
    revalidatePath("/admin/messages");
    revalidatePath("/admin");
  }

  const unreadCount = messages.filter((m) => m.status === "UNREAD").length;

  return (
    <div className="max-w-6xl mx-auto space-y-6 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <h1
            className="text-3xl font-black uppercase text-white tracking-tight"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            INBOX PESAN & INQUIRY MASUK
          </h1>
          <p className="text-xs text-[#99999F] mt-1">
            Kelola pertanyaan sponsor, pendaftaran atlet, dan pesan penonton dari formulir kontak publik.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs bg-[#171719] border border-white/10 px-3.5 py-1.5 rounded-sm text-white/80">
            Total: <strong className="text-white">{messages.length}</strong> Pesan
          </span>
          <span className="text-xs bg-[#D91F2C]/10 border border-[#D91F2C]/30 px-3.5 py-1.5 rounded-sm text-[#EF3340] font-bold">
            {unreadCount} Belum Dibaca
          </span>
        </div>
      </div>

      {messages.length === 0 ? (
        <div className="bg-[#171719] border border-white/10 p-12 text-center rounded-sm">
          <MessageSquare className="w-10 h-10 text-white/30 mx-auto mb-3" />
          <h3
            className="text-xl font-black uppercase text-white mb-1"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            BELUM ADA PESAN MASUK
          </h3>
          <p className="text-xs text-[#99999F]">
            Pesan yang dikirimkan melalui halaman /kontak akan otomatis tercatat di sini.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {messages.map((msg) => {
            const isUnread = msg.status === "UNREAD";
            return (
              <div
                key={msg.id}
                className={`p-6 rounded-sm border transition-all ${
                  isUnread
                    ? "bg-[#171719] border-[#D91F2C]/40 shadow-sm"
                    : "bg-[#171719]/60 border-white/10"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm border ${
                        isUnread
                          ? "bg-[#D91F2C]/20 border-[#D91F2C]/40 text-[#EF3340]"
                          : "bg-white/5 border-white/10 text-white/60"
                      }`}
                    >
                      {msg.status}
                    </span>
                    <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-sm border border-amber-500/20">
                      {msg.subject}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-[#99999F]">
                    <span className="flex items-center gap-1 font-mono text-[11px]">
                      <Clock className="w-3 h-3 text-white/40" />
                      {new Date(msg.createdAt).toLocaleString("id-ID", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}
                    </span>

                    <form action={toggleStatus.bind(null, msg.id, msg.status)}>
                      <button
                        type="submit"
                        className="text-xs text-white/70 hover:text-white underline hover:no-underline"
                      >
                        {isUnread ? "Tandai Dibaca" : "Tandai Belum Dibaca"}
                      </button>
                    </form>

                    <form action={deleteMessage.bind(null, msg.id)}>
                      <button
                        type="submit"
                        className="text-xs text-white/40 hover:text-[#EF3340] transition-colors p-1"
                        title="Hapus Pesan"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </form>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#99999F] mb-3 pb-3 border-b border-white/5">
                  <div>
                    <span className="text-white font-bold">{msg.name}</span>
                    <span className="mx-2 text-white/20">•</span>
                    <span className="font-mono">{msg.email}</span>
                  </div>
                  {msg.phone && (
                    <div className="flex items-center gap-1 sm:justify-end text-emerald-400 font-mono">
                      <Phone className="w-3 h-3" />
                      <span>{msg.phone}</span>
                    </div>
                  )}
                </div>

                <p className="text-sm text-white/90 leading-relaxed font-sans whitespace-pre-wrap">
                  {msg.message}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
