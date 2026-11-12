import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { Swords, Trophy } from "lucide-react";
import { requireAdminSession, verifyAdminAction } from "@/lib/auth-guard";

export const dynamic = "force-dynamic";

export default async function AdminMatchesPage() {
  await requireAdminSession();

  const matches = await prisma.match.findMany({
    include: {
      athlete1: true,
      athlete2: true,
      winner: true,
      bracket: true,
    },
    orderBy: [{ category: "asc" }, { round: "desc" }, { matchNumber: "asc" }],
  });

  async function updateMatchResult(formData: FormData) {
    "use server";
    await verifyAdminAction();
    const matchId = formData.get("matchId") as string;
    const winnerId = (formData.get("winnerId") as string) || "";

    if (!matchId) return;

    const match = await prisma.match.findUnique({
      where: { id: matchId },
      include: { bracket: true },
    });

    if (!match) return;

    const nextStatus = winnerId ? "COMPLETED" : "SCHEDULED";

    await prisma.match.update({
      where: { id: matchId },
      data: {
        winnerId: winnerId || null,
        status: nextStatus,
      },
    });

    // Advance winner automatically to final match when applicable
    if (match.round === "SEMIFINAL" && winnerId && match.bracketId) {
      const finalMatch = await prisma.match.findFirst({
        where: { bracketId: match.bracketId, round: "FINAL" },
      });

      if (finalMatch) {
        if (match.matchNumber === 1) {
          await prisma.match.update({
            where: { id: finalMatch.id },
            data: { athlete1Id: winnerId },
          });
        } else if (match.matchNumber === 2) {
          await prisma.match.update({
            where: { id: finalMatch.id },
            data: { athlete2Id: winnerId },
          });
        }
      }
    }

    revalidatePath("/admin/matches");
    revalidatePath("/admin");
    revalidatePath("/championship");
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <h1
            className="text-3xl font-black uppercase text-white tracking-tight"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            ATUR MENANG / KALAH PERTANDINGAN
          </h1>
          <p className="text-xs text-[#99999F] mt-1">
            Cukup pilih pemenang laga (Sudut Merah atau Sudut Biru), lalu klik Simpan Hasil.
          </p>
        </div>

        <span className="text-xs bg-[#171719] border border-white/10 px-3.5 py-1.5 rounded-sm text-white/80 self-start sm:self-auto">
          Total: <strong className="text-white">{matches.length}</strong> Partai
        </span>
      </div>

      {matches.length === 0 ? (
        <div className="p-10 bg-[#171719] border border-white/10 rounded-sm text-center space-y-2">
          <Swords className="w-8 h-8 text-[#D91F2C] mx-auto" />
          <p className="text-sm font-bold text-white uppercase">Belum ada partai pertandingan terdaftar</p>
          <p className="text-xs text-[#99999F]">
            Partai pertandingan akan muncul di sini setelah daftar fighter disusun oleh panitia.
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          {matches.map((m) => {
            const isCompleted = m.status === "COMPLETED";
            const redWin = Boolean(m.winnerId && m.winnerId === m.athlete1Id);
            const blueWin = Boolean(m.winnerId && m.winnerId === m.athlete2Id);

            return (
              <div
                key={m.id}
                className={`p-5 sm:p-6 rounded-sm border transition-all ${
                  isCompleted
                    ? "bg-[#171719] border-white/15"
                    : "bg-[#171719] border-[#D91F2C]/45"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black uppercase px-2.5 py-0.5 rounded-sm bg-[#D91F2C]/20 border border-[#D91F2C]/40 text-[#EF3340]">
                      {m.category}
                    </span>
                    <span className="text-xs font-bold uppercase text-white font-mono">
                      {m.round} • PARTAI #{m.matchNumber}
                    </span>
                  </div>

                  <span
                    className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-sm ${
                      isCompleted
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                        : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                    }`}
                  >
                    {isCompleted ? "SELESAI" : "BELUM SELESAI"}
                  </span>
                </div>

                {/* Red Corner vs Blue Corner */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                  <div
                    className={`p-4 rounded-sm flex items-center justify-between border ${
                      redWin
                        ? "bg-emerald-500/15 border-emerald-500/50"
                        : isCompleted && blueWin
                        ? "bg-black/40 border-white/10 opacity-65"
                        : "bg-[#09090b] border-white/10"
                    }`}
                  >
                    <div>
                      <span className="text-[10px] text-[#EF3340] font-bold uppercase block">
                        SUDUT MERAH
                      </span>
                      <span className="text-base font-bold text-white block mt-0.5">
                        {m.athlete1 ? m.athlete1.name : "TBD"}
                      </span>
                      <span className="text-xs text-[#99999F]">
                        {m.athlete1?.club || "Sasana"}
                      </span>
                    </div>

                    {isCompleted && (
                      <span
                        className={`text-xs font-black uppercase px-2.5 py-1 rounded-sm flex items-center gap-1 ${
                          redWin
                            ? "bg-emerald-500 text-black"
                            : "bg-white/10 text-white/60"
                        }`}
                      >
                        {redWin ? (
                          <>
                            <Trophy className="w-3.5 h-3.5" />
                            MENANG
                          </>
                        ) : (
                          "KALAH"
                        )}
                      </span>
                    )}
                  </div>

                  <div
                    className={`p-4 rounded-sm flex items-center justify-between border ${
                      blueWin
                        ? "bg-emerald-500/15 border-emerald-500/50"
                        : isCompleted && redWin
                        ? "bg-black/40 border-white/10 opacity-65"
                        : "bg-[#09090b] border-white/10"
                    }`}
                  >
                    <div>
                      <span className="text-[10px] text-blue-400 font-bold uppercase block">
                        SUDUT BIRU
                      </span>
                      <span className="text-base font-bold text-white block mt-0.5">
                        {m.athlete2 ? m.athlete2.name : "TBD"}
                      </span>
                      <span className="text-xs text-[#99999F]">
                        {m.athlete2?.club || "Sasana"}
                      </span>
                    </div>

                    {isCompleted && (
                      <span
                        className={`text-xs font-black uppercase px-2.5 py-1 rounded-sm flex items-center gap-1 ${
                          blueWin
                            ? "bg-emerald-500 text-black"
                            : "bg-white/10 text-white/60"
                        }`}
                      >
                        {blueWin ? (
                          <>
                            <Trophy className="w-3.5 h-3.5" />
                            MENANG
                          </>
                        ) : (
                          "KALAH"
                        )}
                      </span>
                    )}
                  </div>
                </div>

                {/* Simple Win / Loss Selector */}
                <form
                  action={updateMatchResult}
                  className="bg-[#09090b] border border-white/10 p-4 rounded-sm flex flex-col sm:flex-row sm:items-end gap-3"
                >
                  <input type="hidden" name="matchId" value={m.id} />

                  <div className="flex-1">
                    <label className="block text-[11px] font-bold uppercase text-white/75 mb-1.5">
                      Pilih Pemenang Partai Ini
                    </label>
                    <select
                      name="winnerId"
                      defaultValue={m.winnerId || ""}
                      className="w-full bg-[#171719] border border-white/15 rounded-sm px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#D91F2C]"
                    >
                      <option value="">-- Belum Bertanding / Reset --</option>
                      {m.athlete1 && (
                        <option value={m.athlete1.id}>
                          MENANG: {m.athlete1.name} (Sudut Merah)
                        </option>
                      )}
                      {m.athlete2 && (
                        <option value={m.athlete2.id}>
                          MENANG: {m.athlete2.name} (Sudut Biru)
                        </option>
                      )}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="bg-[#D91F2C] hover:bg-[#EF3340] text-white text-xs font-bold uppercase tracking-wider py-3 px-6 rounded-sm transition-all shrink-0"
                  >
                    Simpan Hasil
                  </button>
                </form>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
