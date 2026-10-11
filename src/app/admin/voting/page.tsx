import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { Vote, CheckCircle2, AlertCircle, BarChart3, Clock, Power } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminVotingPage() {
  const campaigns = await prisma.votingCampaign.findMany({
    orderBy: { startDate: "desc" },
    include: {
      votes: true,
    },
  });

  const activeCampaign = campaigns[0];

  // Aggregation per choice for the active campaign
  const voteCounts = activeCampaign
    ? await prisma.vote.groupBy({
        by: ["choice"],
        where: { campaignId: activeCampaign.id },
        _count: { id: true },
      })
    : [];

  const totalVotes = activeCampaign ? activeCampaign.votes.length : 0;

  const choices = ["Bantul", "Sleman", "Kota Yogyakarta"];
  const breakdown = choices.map((choice) => {
    const found = voteCounts.find((v) => v.choice.toLowerCase() === choice.toLowerCase());
    const count = found?._count.id || 0;
    const percentage = totalVotes > 0 ? ((count / totalVotes) * 100).toFixed(1) : "0";
    return { choice, count, percentage: parseFloat(percentage) };
  });

  async function toggleCampaignStatus(id: string, currentStatus: string) {
    "use server";
    const nextStatus = currentStatus === "ACTIVE" ? "CLOSED" : "ACTIVE";
    await prisma.votingCampaign.update({
      where: { id },
      data: { status: nextStatus },
    });
    revalidatePath("/admin/voting");
    revalidatePath("/city-pride");
    revalidatePath("/admin");
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <h1
            className="text-3xl font-black uppercase text-white tracking-tight"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            AUDIT & KONTROL VOTING CITY PRIDE
          </h1>
          <p className="text-xs text-[#99999F] mt-1">
            Pantau perolehan suara komunitas daerah, integritas satu akun satu suara, dan status periode kampanye.
          </p>
        </div>

        {activeCampaign && (
          <form action={toggleCampaignStatus.bind(null, activeCampaign.id, activeCampaign.status)}>
            <button
              type="submit"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-all ${
                activeCampaign.status === "ACTIVE"
                  ? "bg-amber-500/20 text-amber-400 border border-amber-500/40 hover:bg-amber-500/30"
                  : "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500/30"
              }`}
            >
              <Power className="w-3.5 h-3.5" />
              <span>
                {activeCampaign.status === "ACTIVE" ? "TUTUP VOTING SEMENTARA" : "BUKA KEMBALI VOTING"}
              </span>
            </button>
          </form>
        )}
      </div>

      {activeCampaign ? (
        <div className="space-y-6">
          {/* Campaign Details Header */}
          <div className="bg-[#171719] border border-white/10 p-6 rounded-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span
                  className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-sm ${
                    activeCampaign.status === "ACTIVE"
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                      : "bg-red-500/20 text-red-400 border border-red-500/30"
                  }`}
                >
                  STATUS: {activeCampaign.status}
                </span>
                <span className="text-xs font-mono text-white/50">ID: {activeCampaign.id}</span>
              </div>
              <h2
                className="text-2xl font-black uppercase text-white tracking-tight"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                {activeCampaign.name}
              </h2>
            </div>

            <div className="text-right">
              <span className="text-xs text-[#99999F] uppercase tracking-wider block">Total Suara Masuk</span>
              <span
                className="text-4xl font-black text-white"
                style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
              >
                {totalVotes}
              </span>
            </div>
          </div>

          {/* Leaderboard Breakdown Bars */}
          <div className="bg-[#171719] border border-white/10 p-6 rounded-sm space-y-5">
            <h3
              className="text-lg font-black uppercase text-white flex items-center gap-2"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              <BarChart3 className="w-4 h-4 text-purple-400" />
              <span>PEROLEHAN SUARA REAL-TIME DARI DATABASE</span>
            </h3>

            <div className="space-y-4">
              {breakdown.map((b) => (
                <div key={b.choice} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-sans">
                    <span className="font-bold text-white uppercase">{b.choice}</span>
                    <span className="font-mono text-[#99999F]">
                      <strong className="text-white">{b.count}</strong> suara ({b.percentage}%)
                    </span>
                  </div>
                  <div className="w-full h-3 bg-black/60 rounded-full overflow-hidden border border-white/5">
                    <div
                      className="h-full bg-gradient-to-r from-[#D91F2C] to-amber-500 transition-all duration-500"
                      style={{ width: `${b.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Audit Rule Log */}
          <div className="bg-[#171719]/60 border border-white/10 p-6 rounded-sm text-xs text-[#99999F] space-y-2">
            <h4 className="text-white font-bold uppercase text-[11px] flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Validasi Aturan Integritas Terpasang</span>
            </h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Pencegahan Suara Ganda: Uniqueness constraint pada tabel `Vote` menjamin 1 user ID hanya dapat memilih 1 kali.</li>
              <li>Proteksi Guest: Guest voting via IP hashing dinonaktifkan permanen; voting mewajibkan sesi login NextAuth.</li>
              <li>Transaksi Atomik: Pembuatan catatan suara dieksekusi melalui `prisma.$transaction`.</li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="bg-[#171719] border border-white/10 p-12 text-center rounded-sm">
          <Vote className="w-10 h-10 text-white/30 mx-auto mb-3" />
          <h3 className="text-xl font-bold uppercase text-white mb-2">TIDAK ADA KAMPANYE AKTIF</h3>
          <p className="text-xs text-[#99999F]">Kampanye voting City Pride belum dibuat di database.</p>
        </div>
      )}
    </div>
  );
}
