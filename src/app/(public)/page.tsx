import prisma from "@/lib/prisma";
import HomeClient from "./HomeClient";

export default async function Home() {
  const isProd = process.env.NODE_ENV === "production";
  const athleteWhere: any = { isPublished: true };
  if (isProd) {
    athleteWhere.slug = { not: { startsWith: "fighter-demo" } };
  }

  // Real database queries
  const publishedFighters = await prisma.athlete.findMany({
    where: athleteWhere,
    take: 4,
    orderBy: { wins: "desc" },
  });

  const products = await prisma.product.findMany({
    where: { isActive: true },
    take: 3,
  });

  const performers = await prisma.performer.findMany({
    where: { isPublished: true },
    take: 3,
  });

  return (
    <HomeClient
      fighters={publishedFighters}
      products={products}
      performers={performers}
    />
  );
}
