import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import Image from "next/image";
import { Swords, Trophy, CheckCircle2, Clock, Award, Shield } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminMatchesPage() {
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
    const matchId = formData.get("matchId") as string;
    const winnerId = formData.get("winnerId") as string;
    const status = formData.get("status") as string;
    const resultType = formData.get("resultType") as string;
    const roundResult = (formData.get("roundResult") as string)?.trim() || null;

    if (!matchId) return;

    const match = await prisma.match.findUnique({
      where: { id: matchId },
      include: { bracket: true },
    });

    if (!match) return;

    await prisma.match.update({
      where: { id: matchId },
      data: {
        winnerId: winnerId ? winnerId : null,
        status,
        resultType: resultType ? resultType : null,
        roundResult,
      },
    });

    // If this was a semifinal match, advance winner to the final match of the tournament
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
    revalidatePath("/bracket");
    revalidatePath("/championship");
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <h1
            className="text-3xl font-black uppercase text-white tracking-tight"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            OPERATOR PERTANDINGAN & KONTROL BRACKET
          </h1>
          <p className="text-xs text-[#99999F] mt-1">
            Input hasil keputusan juri, pemenang partai laga, dan majukan atlet ke bagan final secara real-time.
          </p>
        </div>

        <span className="text-xs bg-[#171719] border border-white/10 px-3.5 py-1.5 rounded-sm text-white/80 self-start sm:self-auto">
          Total: <strong className="text-white">{matches.length}</strong> Partai Laga Terdaftar
        </span>
      </div>

      <div className="space-y-6">
        {matches.map((m) => {
          const isCompleted = m.status === "COMPLETED";
          return (
            <div
              key={m.id}
              className={`p-6 rounded-sm border transition-all ${
                isCompleted
                  ? "bg-[#171719] border-white/15"
                  : "bg-[#171719] border-[#D91F2C]/40 shadow-lg shadow-[#D91F2C]/5"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black uppercase px-2 py-0.5 rounded-sm bg-[#D91F2C]/20 border border-[#D91F2C]/40 text-[#EF3340]">
                    {m.category}
                  </span>
                  <span className="text-xs font-bold uppercase text-white font-mono">
                    {m.round} • PARTAI #{m.matchNumber}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-sm ${
                      isCompleted
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                        : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                    }`}
                  >
                    STATUS: {m.status}
                  </span>
                  {m.resultType && (
                    <span className="text-[10px] font-mono text-white/70">
                      Metode: {m.resultType} ({m.roundResult})
                    </span>
                  )}
                </div>
              </div>

              {/* Athletes Confrontation Display */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {/* Red Corner */}
                <div
                  className={`p-4 rounded-sm flex items-center justify-between border ${
                    m.winnerId === m.athlete1Id
                      ? "bg-emerald-500/10 border-emerald-500/40"
                      : "bg-[#09090b] border-white/10"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-sm bg-black overflow-hidden shrink-0 border border-red-500/30">
                      <Image
                        src={m.athlete1?.image || "/images/jkb/fighter-1.jpg"}
                        alt={m.athlete1?.name || "Red Corner"}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] text-[#EF3340] font-bold uppercase block">Sudut Merah</span>
                      <span className="text-sm font-bold text-white block">
                        {m.athlete1 ? m.athlete1.name : "TBD (Pemenang Laga Sebelumnya)"}
                      </span>
                      <span className="text-[11px] text-[#99999F]">
                        {m.athlete1?.club || "Sasana"}
                      </span>
                    </div>
                  </div>
                  {m.winnerId === m.athlete1Id && (
                    <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                      <Trophy className="w-3.5 h-3.5" />
                      MENANG
                    </span>
                  )}
                </div>

                {/* Blue Corner */}
                <div
                  className={`p-4 rounded-sm flex items-center justify-between border ${
                    m.winnerId === m.athlete2Id
                      ? "bg-emerald-500/10 border-emerald-500/40"
                      : "bg-[#09090b] border-white/10"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-sm bg-black overflow-hidden shrink-0 border border-blue-500/30">
                      <Image
                        src={m.athlete2?.image || "/images/jkb/fighter-2.jpg"}
                        alt={m.athlete2?.name || "Blue Corner"}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] text-blue-400 font-bold uppercase block">Sudut Biru</span>
                      <span className="text-sm font-bold text-white block">
                        {m.athlete2 ? m.athlete2.name : "TBD (Pemenang Laga Sebelumnya)"}
                      </span>
                      <span className="text-[11px] text-[#99999F]">
                        {m.athlete2?.club || "Sasana"}
                      </span>
                    </div>
                  </div>
                  {m.winnerId === m.athlete2Id && (
                    <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                      <Trophy className="w-3.5 h-3.5" />
                      MENANG
                    </span>
                  )}
                </div>
              </div>

              {/* Operator Action Form */}
              <form
                action={updateMatchResult}
                className="bg-[#09090b] border border-white/10 p-4 rounded-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-end"
              >
                <input type="hidden" name="matchId" value={m.id} />

                <div>
                  <label className="block text-[10px] font-bold uppercase text-white/70 mb-1">
                    Pilih Pemenang Laga
                  </label>
                  <select
                    name="winnerId"
                    defaultValue={m.winnerId || ""}
                    className="w-full bg-[#171719] border border-white/10 rounded-sm px-2.5 py-2 text-xs text-white focus:outline-none focus:border-[#D91F2C]"
                  >
                    <option value="">-- Belum Diputuskan --</option>
                    {m.athlete1 && <option value={m.athlete1.id}>{m.athlete1.name} (Merah)</option>}
                    {m.athlete2 && <option value={m.athlete2.id}>{m.athlete2.name} (Biru)</option>}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase text-white/70 mb-1">
                    Status Laga
                  </label>
                  <select
                    name="status"
                    defaultValue={m.status}
                    className="w-full bg-[#171719] border border-white/10 rounded-sm px-2.5 py-2 text-xs text-white focus:outline-none focus:border-[#D91F2C]"
                  >
                    <option value="SCHEDULED">SCHEDULED (Terjadwal)</option>
                    <option value="LIVE">LIVE (Sedang Bertanding)</option>
                    <option value="COMPLETED">COMPLETED (Selesai)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase text-white/70 mb-1">
                    Metode Kemenangan
                  </label>
                  <select
                    name="resultType"
                    defaultValue={m.resultType || "KO"}
                    className="w-full bg-[#171719] border border-white/10 rounded-sm px-2.5 py-2 text-xs text-white focus:outline-none focus:border-[#D91F2C]"
                  >
                    <option value="KO">KO (Knockout)</option>
                    <option value="TKO">TKO (Referee Stop / Doctor)</option>
                    <option value="DECISION">Keputusan Juri (Decision)</option>
                    <option value="BYE">BYE / Walkover</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase text-white/70 mb-1">
                    Rincian Ronde / Skor
                  </label>
                  <input
                    type="text"
                    name="roundResult"
                    defaultValue={m.roundResult || ""}
                    placeholder="Contoh: R2 1:45 / 29-28"
                    className="w-full bg-[#171719] border border-white/10 rounded-sm px-2.5 py-2 text-xs text-white focus:outline-none focus:border-[#D91F2C]"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#D91F2C] hover:bg-[#EF3340] text-white text-xs font-bold uppercase tracking-wider py-2 px-4 rounded-sm transition-all"
                >
                  Simpan & Update
                </button>
              </form>
            </div>
          );
        })}
      </div>
    </div>
  );
}
