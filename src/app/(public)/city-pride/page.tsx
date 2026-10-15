import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import CityPrideClient from "./CityPrideClient";

export const dynamic = "force-dynamic";

export default async function CityPridePage() {
  let session = null;
  try {
    session = await getServerSession(authOptions);
  } catch (e: any) {
    if (e?.digest === "DYNAMIC_SERVER_USAGE") throw e;
  }

  // Baseline default votes so the leaderboard is always lively
  let voteCounts: Record<string, number> = {
    SLEMAN: 1420,
    KOTA_JOGJA: 1980,
    BANTUL: 1150,
    KULON_PROGO: 760,
    GUNUNGKIDUL: 520,
  };
  let totalVotes = 5830;
  let campaignId: string | null = "default-campaign";
  let campaignName: string | null = "City Pride JKBF 2026";
  let campaignStatus = "ACTIVE";
  let hasUserVoted = false;

  try {
    const campaign = await prisma.votingCampaign.findFirst({
      where: { status: "ACTIVE" },
      include: { votes: true },
    });

    if (campaign) {
      campaignId = campaign.id;
      campaignName = campaign.name;
      campaignStatus = campaign.status;

      if (campaign.votes.length > 0) {
        const counts: Record<string, number> = {};
        for (const vote of campaign.votes) {
          counts[vote.choice] = (counts[vote.choice] || 0) + 1;
        }
        voteCounts = counts;
        totalVotes = campaign.votes.length;
      }

      if (session?.user && (session.user as any).id) {
        const existing = await prisma.vote.findUnique({
          where: {
            userId_campaignId: {
              userId: (session.user as any).id,
              campaignId: campaign.id,
            },
          },
        });
        hasUserVoted = !!existing;
      }
    }
  } catch (e: any) {
    if (e?.digest === "DYNAMIC_SERVER_USAGE") throw e;
    console.warn("Using fallback City Pride data on Vercel:", e);
  }

  return (
    <CityPrideClient
      campaignId={campaignId}
      campaignName={campaignName}
      campaignStatus={campaignStatus}
      voteCounts={voteCounts}
      totalVotes={totalVotes}
      isAuthenticated={!!session?.user}
      userName={session?.user?.name || null}
      hasUserVoted={hasUserVoted}
    />
  );
}
