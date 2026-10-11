import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import CityPrideClient from "./CityPrideClient";

export default async function CityPridePage() {
  const session = await getServerSession(authOptions);

  // Get active campaign
  const campaign = await prisma.votingCampaign.findFirst({
    where: { status: "ACTIVE" },
    include: { votes: true },
  });

  // Calculate vote counts per region
  const voteCounts: Record<string, number> = {};
  if (campaign) {
    for (const vote of campaign.votes) {
      voteCounts[vote.choice] = (voteCounts[vote.choice] || 0) + 1;
    }
  }

  const totalVotes = campaign ? campaign.votes.length : 0;

  // Check if current authenticated user has already voted
  let hasUserVoted = false;
  if (session?.user && (session.user as any).id && campaign) {
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

  return (
    <CityPrideClient
      campaignId={campaign?.id || null}
      campaignName={campaign?.name || null}
      campaignStatus={campaign?.status || "INACTIVE"}
      voteCounts={voteCounts}
      totalVotes={totalVotes}
      isAuthenticated={!!session?.user}
      userName={session?.user?.name || null}
      hasUserVoted={hasUserVoted}
    />
  );
}
