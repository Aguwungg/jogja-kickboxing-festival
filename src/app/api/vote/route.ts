import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { rateLimit, getSanitizedClientIp } from "@/lib/rateLimit";

const VALID_CHOICES = ["BANTUL", "SLEMAN", "KOTA_JOGJA"];

export async function POST(req: NextRequest) {
  try {
    // 1. Rate Limiting per sanitized client IP
    const clientIp = getSanitizedClientIp(req.headers);
    const limiter = rateLimit(`vote_${clientIp}`, { limit: 5, windowMs: 60 * 1000 });

    if (!limiter.success) {
      return NextResponse.json(
        { error: "Terlalu banyak permintaan voting. Silakan coba lagi dalam beberapa saat." },
        { status: 429, headers: { "Retry-After": String(limiter.reset) } }
      );
    }

    // 2. Strict Authentication Requirement (Guest voting disabled per Milestone 2.1 policy)
    const session = await getServerSession(authOptions);

    if (!session?.user || !(session.user as any).id) {
      return NextResponse.json(
        {
          error: "Autentikasi akun diperlukan. Silakan masuk (login) dengan akun terdaftar untuk memberikan suara resmi.",
          requiresAuth: true,
        },
        { status: 401 }
      );
    }

    const voterUserId = (session.user as any).id;

    // 3. Parse and Validate Request Payload
    const body = await req.json();
    const { campaignId, choice } = body;

    if (!campaignId || typeof campaignId !== "string") {
      return NextResponse.json(
        { error: "Parameter campaignId wajib disertakan." },
        { status: 400 }
      );
    }

    if (!choice || !VALID_CHOICES.includes(choice)) {
      return NextResponse.json(
        { error: `Pilihan daerah tidak valid. Pilihan tersedia: ${VALID_CHOICES.join(", ")}` },
        { status: 400 }
      );
    }

    // 4. Verify Campaign Exists & is Active
    const campaign = await prisma.votingCampaign.findUnique({
      where: { id: campaignId },
    });

    if (!campaign) {
      return NextResponse.json(
        { error: "Kampanye voting tidak ditemukan." },
        { status: 404 }
      );
    }

    if (campaign.status !== "ACTIVE") {
      return NextResponse.json(
        { error: "Kampanye voting saat ini sedang tidak aktif." },
        { status: 400 }
      );
    }

    const now = new Date();
    if (now < campaign.startDate || now > campaign.endDate) {
      return NextResponse.json(
        { error: "Voting berada di luar periode jadwal kampanye resmi." },
        { status: 400 }
      );
    }

    // 5. Transaction-Safe Duplicate Check & Vote Creation
    const result = await prisma.$transaction(async (tx) => {
      const existingVote = await tx.vote.findUnique({
        where: {
          userId_campaignId: {
            userId: voterUserId,
            campaignId,
          },
        },
      });

      if (existingVote) {
        throw new Error("ALREADY_VOTED");
      }

      const newVote = await tx.vote.create({
        data: {
          userId: voterUserId,
          campaignId,
          choice,
        },
      });

      return newVote;
    });

    return NextResponse.json({
      success: true,
      message: "Suara berhasil dicatat! Terima kasih telah membuktikan nyali kotamu.",
      voteId: result.id,
      choice: result.choice,
    });
  } catch (error: any) {
    if (error.message === "ALREADY_VOTED" || error.code === "P2002") {
      return NextResponse.json(
        { error: "Anda sudah memberikan suara pada kampanye ini. Aturan: Satu suara per akun terdaftar." },
        { status: 409 }
      );
    }

    console.error("Error in POST /api/vote:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan pada server saat memproses suara." },
      { status: 500 }
    );
  }
}
