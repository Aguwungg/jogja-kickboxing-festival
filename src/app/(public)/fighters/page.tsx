import prisma from "@/lib/prisma";
import FighterCenterClient from "./FighterCenterClient";

export default async function FightersPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; division?: string; weight?: string }>;
}) {
  const params = await searchParams;
  const query = params.q || "";
  const division = params.division || "";
  const weight = params.weight || "";

  const isProd = process.env.NODE_ENV === "production";
  const where: any = { isPublished: true };
  if (isProd) {
    where.slug = { not: { startsWith: "fighter-demo" } };
  }
  if (query) {
    where.OR = [
      { name: { contains: query } },
      { club: { contains: query } },
    ];
  }
  if (division) where.division = division;
  if (weight) where.weightClass = { contains: weight };

  const fighters = await prisma.athlete.findMany({
    where,
    orderBy: { name: "asc" },
  });

  // Get distinct divisions and weight classes for filter options
  const allFighters = await prisma.athlete.findMany({
    where: { isPublished: true },
    select: { division: true, weightClass: true },
  });
  const divisions = [...new Set(allFighters.map((f) => f.division))];
  const weightClasses = [...new Set(allFighters.map((f) => f.weightClass))];

  return (
    <FighterCenterClient
      fighters={fighters}
      divisions={divisions}
      weightClasses={weightClasses}
      currentQuery={query}
      currentDivision={division}
      currentWeight={weight}
    />
  );
}
