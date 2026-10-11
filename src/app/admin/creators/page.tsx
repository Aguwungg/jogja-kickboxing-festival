import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import {
  Video,
  Users,
  Ticket,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  ExternalLink,
  Plus,
  Flame,
  Award,
  AlertCircle,
} from "lucide-react";

export const metadata = {
  title: "Manajemen Creator & Media — Admin JKB 2026",
};

// --- Server Actions ---

async function moderateSubmissionAction(formData: FormData) {
  "use server";
  try {
    const submissionId = formData.get("submissionId") as string;
    const action = formData.get("action") as string; // "APPROVE" | "REJECT"
    const pointsAwarded = parseInt((formData.get("points") as string) || "100", 10);
    const adminNote = (formData.get("adminNote") as string)?.trim() || null;

    const sub = await prisma.submission.findUnique({
      where: { id: submissionId },
      include: { creator: true },
    });

    if (!sub) return;

    if (action === "APPROVE") {
      const pointDiff = pointsAwarded - sub.points;
      await prisma.$transaction([
        prisma.submission.update({
          where: { id: submissionId },
          data: {
            status: "APPROVED",
            points: pointsAwarded,
            adminNote,
          },
        }),
        prisma.creatorProfile.update({
          where: { id: sub.creatorId },
          data: {
            totalPoints: {
              increment: pointDiff,
            },
          },
        }),
      ]);
    } else {
      // Reject
      const pointDeduction = sub.status === "APPROVED" ? sub.points : 0;
      await prisma.$transaction([
        prisma.submission.update({
          where: { id: submissionId },
          data: {
            status: "REJECTED",
            points: 0,
            adminNote: adminNote || "Tidak memenuhi kriteria kurasi festival.",
          },
        }),
        prisma.creatorProfile.update({
          where: { id: sub.creatorId },
          data: {
            totalPoints: {
              decrement: pointDeduction,
            },
          },
        }),
      ]);
    }

    revalidatePath("/admin/creators");
    revalidatePath("/creator");
    revalidatePath("/creator/dashboard");
  } catch (err) {
    console.error("moderateSubmissionAction error:", err);
  }
}

async function updateCreatorStatusAction(formData: FormData) {
  "use server";
  try {
    const creatorId = formData.get("creatorId") as string;
    const status = formData.get("status") as string;
    const bonusPoints = parseInt((formData.get("bonusPoints") as string) || "0", 10);

    await prisma.creatorProfile.update({
      where: { id: creatorId },
      data: {
        status,
        ...(bonusPoints > 0 ? { totalPoints: { increment: bonusPoints } } : {}),
      },
    });

    revalidatePath("/admin/creators");
    revalidatePath("/creator");
    revalidatePath("/creator/dashboard");
  } catch (err) {
    console.error("updateCreatorStatusAction error:", err);
  }
}

async function verifyBarcodeAction(formData: FormData) {
  "use server";
  try {
    const claimId = formData.get("claimId") as string;
    const action = formData.get("action") as string; // "VERIFY" | "REJECT"

    const claim = await prisma.barcodeClaim.findUnique({
      where: { id: claimId },
      include: { creator: true },
    });

    if (!claim) return;

    if (action === "VERIFY") {
      await prisma.$transaction([
        prisma.barcodeClaim.update({
          where: { id: claimId },
          data: {
            status: "VERIFIED",
            pointsAwarded: 50,
            adminNote: "Barcode tiket terverifikasi valid.",
          },
        }),
        prisma.creatorProfile.update({
          where: { id: claim.creatorId },
          data: {
            totalPoints: { increment: 50 },
          },
        }),
      ]);
    } else {
      await prisma.barcodeClaim.update({
        where: { id: claimId },
        data: {
          status: "REJECTED",
          adminNote: "Barcode tidak valid atau telah kedaluwarsa.",
        },
      });
    }

    revalidatePath("/admin/creators");
    revalidatePath("/creator");
    revalidatePath("/creator/dashboard");
  } catch (err) {
    console.error("verifyBarcodeAction error:", err);
  }
}

async function updateMediaAccreditationAction(formData: FormData) {
  "use server";
  try {
    const mediaId = formData.get("mediaId") as string;
    const action = formData.get("action") as string; // "APPROVE" | "REJECT"
    const badgeNumber = (formData.get("badgeNumber") as string)?.trim() || null;

    if (action === "APPROVE") {
      await prisma.mediaAccreditation.update({
        where: { id: mediaId },
        data: {
          status: "APPROVED",
          badgeNumber: badgeNumber || `PRESS-${Date.now().toString().slice(-4)}`,
        },
      });
    } else {
      await prisma.mediaAccreditation.update({
        where: { id: mediaId },
        data: {
          status: "REJECTED",
        },
      });
    }

    revalidatePath("/admin/creators");
    revalidatePath("/creator");
  } catch (err) {
    console.error("updateMediaAccreditationAction error:", err);
  }
}

export default async function AdminCreatorsPage() {
  const [creators, submissions, barcodeClaims, accreditations] =
    await Promise.all([
      prisma.creatorProfile.findMany({
        orderBy: { totalPoints: "desc" },
        include: {
          submissions: true,
          barcodeClaims: true,
        },
      }),
      prisma.submission.findMany({
        orderBy: { createdAt: "desc" },
        include: {
          creator: true,
        },
      }),
      prisma.barcodeClaim.findMany({
        orderBy: { createdAt: "desc" },
        include: {
          creator: true,
        },
      }),
      prisma.mediaAccreditation.findMany({
        orderBy: { createdAt: "desc" },
      }),
    ]);

  const pendingSubmissions = submissions.filter((s) => s.status === "PENDING").length;
  const pendingCreators = creators.filter((c) => c.status === "PENDING").length;
  const pendingMedia = accreditations.filter((m) => m.status === "PENDING").length;

  return (
    <div className="flex-1 p-6 sm:p-10 space-y-10">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <h1
            className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            MANAJEMEN KREATOR <span className="text-[#EF3340]">& AKREDITASI MEDIA</span>
          </h1>
          <p className="text-sm text-[#99999F] font-sans mt-1">
            Moderasi video kampanye masuk, verifikasi akun kreator, klaim barcode tiket, dan penerbitan badge kartu pers.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="flex items-center gap-3">
          <div className="bg-[#171719] border border-white/10 px-4 py-2 rounded-sm text-center">
            <span className="text-[10px] uppercase font-bold text-[#99999F] block">Pending Submisi</span>
            <span className="text-xl font-black text-amber-400">{pendingSubmissions}</span>
          </div>
          <div className="bg-[#171719] border border-white/10 px-4 py-2 rounded-sm text-center">
            <span className="text-[10px] uppercase font-bold text-[#99999F] block">Pending Media</span>
            <span className="text-xl font-black text-[#EF3340]">{pendingMedia}</span>
          </div>
        </div>
      </div>

      {/* SECTION 1: MODERASI SUBMISI KONTEN */}
      <section className="bg-[#171719] border border-white/10 rounded-sm p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2
              className="text-2xl font-black uppercase text-white tracking-tight flex items-center gap-2"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              <Video className="w-5 h-5 text-[#EF3340]" />
              MODERASI SUBMISI VIDEO KAMPANYE ({submissions.length})
            </h2>
            <p className="text-xs text-[#99999F]">
              Tinjau keabsahan tautan video publik kreator, berikan poin penghargaan, atau tolak submisi tidak layak.
            </p>
          </div>
        </div>

        {submissions.length === 0 ? (
          <div className="text-center py-10 text-xs text-[#99999F]">Belum ada video yang disubmit.</div>
        ) : (
          <div className="space-y-4">
            {submissions.map((sub) => (
              <div
                key={sub.id}
                className="bg-[#121215] border border-white/10 p-5 rounded-sm flex flex-col lg:flex-row lg:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm bg-white/5 border border-white/10 text-white/70">
                      {sub.platform}
                    </span>
                    <span className="text-sm font-bold text-white tracking-tight">
                      {sub.title || "Konten Kampanye"}
                    </span>
                    <span
                      className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded-sm border ${
                        sub.status === "APPROVED"
                          ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                          : sub.status === "PENDING"
                          ? "bg-amber-500/10 border-amber-500/30 text-amber-400"
                          : "bg-red-500/10 border-red-500/30 text-red-400"
                      }`}
                    >
                      {sub.status}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-[#99999F] flex-wrap">
                    <span>
                      Oleh: <strong className="text-white">{sub.creator.name || "Kreator"}</strong>
                    </span>
                    <a
                      href={sub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#EF3340] hover:underline flex items-center gap-1 font-mono"
                    >
                      <ExternalLink className="w-3 h-3" />
                      {sub.url}
                    </a>
                  </div>

                  {sub.adminNote && (
                    <p className="text-xs text-amber-400">Catatan Kurator: {sub.adminNote}</p>
                  )}
                </div>

                {/* Moderation Form Controls */}
                <form action={moderateSubmissionAction} className="flex items-center gap-2 flex-wrap self-end lg:self-center">
                  <input type="hidden" name="submissionId" value={sub.id} />
                  <div className="flex items-center gap-1.5">
                    <label className="text-[10px] uppercase font-bold text-[#99999F]">Poin:</label>
                    <select
                      name="points"
                      defaultValue={sub.points > 0 ? sub.points.toString() : "150"}
                      className="bg-[#171719] border border-white/15 text-xs text-white px-2 py-1.5 rounded-sm focus:outline-none"
                    >
                      <option value="50">50 Poin</option>
                      <option value="100">100 Poin</option>
                      <option value="150">150 Poin</option>
                      <option value="200">200 Poin</option>
                    </select>
                  </div>

                  <input
                    type="text"
                    name="adminNote"
                    defaultValue={sub.adminNote || ""}
                    placeholder="Catatan moderasi..."
                    className="bg-[#171719] border border-white/15 text-xs text-white px-2.5 py-1.5 rounded-sm placeholder-white/30 focus:outline-none w-40"
                  />

                  <button
                    type="submit"
                    name="action"
                    value="APPROVE"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm transition-all flex items-center gap-1"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Setujui
                  </button>

                  <button
                    type="submit"
                    name="action"
                    value="REJECT"
                    className="bg-red-600/80 hover:bg-red-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm transition-all flex items-center gap-1"
                  >
                    <XCircle className="w-3.5 h-3.5" />
                    Tolak
                  </button>
                </form>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* SECTION 2: KELOLA AKUN KREATOR */}
      <section className="bg-[#171719] border border-white/10 rounded-sm p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2
              className="text-2xl font-black uppercase text-white tracking-tight flex items-center gap-2"
              style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
            >
              <Users className="w-5 h-5 text-amber-400" />
              DAFTAR AKUN KREATOR TERDAFTAR ({creators.length})
            </h2>
            <p className="text-xs text-[#99999F]">
              Status persetujuan kreator, perolehan akumulasi poin, dan penambahan bonus poin audit.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-sans">
            <thead className="border-b border-white/10 text-[#99999F] uppercase tracking-wider bg-[#121215]">
              <tr>
                <th className="p-3">Kreator & Handle</th>
                <th className="p-3">Kategori</th>
                <th className="p-3">Poin Total</th>
                <th className="p-3">Submisi</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-right">Aksi & Bonus</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {creators.map((c) => (
                <tr key={c.id} className="hover:bg-white/5 transition-colors">
                  <td className="p-3">
                    <span className="font-bold text-white block text-sm">{c.name}</span>
                    <span className="text-[#99999F] text-[11px]">
                      {c.tiktok && `${c.tiktok} `}
                      {c.instagram && `• ${c.instagram}`}
                    </span>
                  </td>
                  <td className="p-3">
                    <span className="text-[11px] uppercase font-bold text-white/70">
                      {c.category?.replace("_", " ")}
                    </span>
                  </td>
                  <td className="p-3">
                    <span className="font-black text-amber-400 text-sm">
                      {c.totalPoints.toLocaleString()} PTS
                    </span>
                  </td>
                  <td className="p-3 text-white/70">
                    {c.submissions.length} Video ({c.submissions.filter((s) => s.status === "APPROVED").length} Approved)
                  </td>
                  <td className="p-3">
                    <span
                      className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded-sm border ${
                        c.status === "APPROVED"
                          ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                          : c.status === "PENDING"
                          ? "bg-amber-500/10 border-amber-500/30 text-amber-400"
                          : "bg-red-500/10 border-red-500/30 text-red-400"
                      }`}
                    >
                      {c.status}
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <form action={updateCreatorStatusAction} className="inline-flex items-center gap-2 justify-end">
                      <input type="hidden" name="creatorId" value={c.id} />
                      <select
                        name="status"
                        defaultValue={c.status}
                        className="bg-[#121215] border border-white/15 text-[11px] text-white px-2 py-1 rounded-sm focus:outline-none"
                      >
                        <option value="APPROVED">APPROVED</option>
                        <option value="PENDING">PENDING</option>
                        <option value="REJECTED">REJECTED</option>
                      </select>

                      <input
                        type="number"
                        name="bonusPoints"
                        placeholder="+Bonus"
                        className="bg-[#121215] border border-white/15 text-[11px] text-white px-2 py-1 rounded-sm w-16 placeholder-white/30"
                      />

                      <button
                        type="submit"
                        className="bg-white/10 hover:bg-white/20 text-white text-[11px] font-bold uppercase px-2.5 py-1 rounded-sm transition-all"
                      >
                        Update
                      </button>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 3: VERIFIKASI BARCODE TIKET & AKREDITASI MEDIA (2-COL) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Barcode Claims */}
        <section className="bg-[#171719] border border-white/10 rounded-sm p-6 space-y-4">
          <h2
            className="text-xl font-black uppercase text-white tracking-tight flex items-center gap-2"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            <Ticket className="w-4 h-4 text-amber-400" />
            VERIFIKASI KLAIM BARCODE TIKET ({barcodeClaims.length})
          </h2>

          <div className="space-y-3">
            {barcodeClaims.length === 0 ? (
              <p className="text-xs text-[#99999F]">Belum ada klaim barcode.</p>
            ) : (
              barcodeClaims.map((claim) => (
                <div
                  key={claim.id}
                  className="bg-[#121215] border border-white/10 p-4 rounded-sm flex items-center justify-between gap-3 text-xs"
                >
                  <div>
                    <span className="font-mono font-bold text-amber-400 block text-sm">
                      {claim.barcode}
                    </span>
                    <span className="text-[#99999F]">
                      Kreator: <strong className="text-white">{claim.creator.name}</strong>
                    </span>
                    <span
                      className={`ml-2 text-[9px] font-bold uppercase px-1.5 py-0.2 rounded-sm border ${
                        claim.status === "VERIFIED"
                          ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                          : "bg-amber-500/10 border-amber-500/30 text-amber-400"
                      }`}
                    >
                      {claim.status}
                    </span>
                  </div>

                  {claim.status !== "VERIFIED" && (
                    <form action={verifyBarcodeAction} className="flex items-center gap-1.5">
                      <input type="hidden" name="claimId" value={claim.id} />
                      <button
                        type="submit"
                        name="action"
                        value="VERIFY"
                        className="bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold uppercase px-2.5 py-1 rounded-sm"
                      >
                        Validasi (+50)
                      </button>
                      <button
                        type="submit"
                        name="action"
                        value="REJECT"
                        className="bg-red-600/80 hover:bg-red-600 text-white text-[11px] font-bold uppercase px-2.5 py-1 rounded-sm"
                      >
                        Tolak
                      </button>
                    </form>
                  )}
                </div>
              ))
            )}
          </div>
        </section>

        {/* Media Accreditations */}
        <section className="bg-[#171719] border border-white/10 rounded-sm p-6 space-y-4">
          <h2
            className="text-xl font-black uppercase text-white tracking-tight flex items-center gap-2"
            style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
          >
            <ShieldCheck className="w-4 h-4 text-[#EF3340]" />
            AKREDITASI MEDIA & PERS ({accreditations.length})
          </h2>

          <div className="space-y-3">
            {accreditations.length === 0 ? (
              <p className="text-xs text-[#99999F]">Belum ada permohonan akreditasi media.</p>
            ) : (
              accreditations.map((med) => (
                <div
                  key={med.id}
                  className="bg-[#121215] border border-white/10 p-4 rounded-sm flex flex-col justify-between gap-3 text-xs"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="font-bold text-white block text-sm">{med.mediaName}</span>
                      <span className="text-[#99999F]">
                        Jurnalis: <strong className="text-white">{med.journalistName}</strong> ({med.phone})
                      </span>
                      <p className="text-[11px] text-[#99999F] mt-1">
                        Rencana: {med.coveragePlan || "Liputan pertandingan"}
                      </p>
                    </div>

                    <div className="text-right shrink-0">
                      <span
                        className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded-sm border ${
                          med.status === "APPROVED"
                            ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                            : "bg-amber-500/10 border-amber-500/30 text-amber-400"
                        }`}
                      >
                        {med.status}
                      </span>
                      {med.badgeNumber && (
                        <span className="block font-mono text-[10px] text-amber-400 mt-1">
                          {med.badgeNumber}
                        </span>
                      )}
                    </div>
                  </div>

                  {med.status !== "APPROVED" && (
                    <form action={updateMediaAccreditationAction} className="flex items-center gap-2 pt-2 border-t border-white/5">
                      <input type="hidden" name="mediaId" value={med.id} />
                      <input
                        type="text"
                        name="badgeNumber"
                        placeholder="No Badge (misal: PRESS-RING-005)"
                        className="bg-[#171719] border border-white/15 text-[11px] text-white px-2 py-1 rounded-sm placeholder-white/30 flex-1"
                      />
                      <button
                        type="submit"
                        name="action"
                        value="APPROVE"
                        className="bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold uppercase px-2.5 py-1 rounded-sm"
                      >
                        Terbitkan ID
                      </button>
                      <button
                        type="submit"
                        name="action"
                        value="REJECT"
                        className="bg-red-600/80 hover:bg-red-600 text-white text-[11px] font-bold uppercase px-2.5 py-1 rounded-sm"
                      >
                        Tolak
                      </button>
                    </form>
                  )}
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
