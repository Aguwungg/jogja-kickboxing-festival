import prisma from "@/lib/prisma";
import FighterCenterClient from "./FighterCenterClient";

const FALLBACK_FIGHTERS = [
  {
    id: "cmv2u14i30000i8yes0k33zgt",
    name: "Agung Hendi",
    slug: "agung",
    weightClass: "80kg Middleweight",
    division: "Pro",
    club: "BlackRed Combat Club",
    wins: 10,
    losses: 1,
    draws: 0,
    image: "/images/jkb/fighter-agung.jpg",
    isPublished: true,
  },
  {
    id: "cmv3ni1hf0000sy6wn0wyjyjt",
    name: "Bayu 'The Thunder' Pratama",
    slug: "fighter-demo-01",
    weightClass: "57kg Bantamweight",
    division: "Pro",
    club: "Jogja Fight Camp",
    wins: 8,
    losses: 2,
    draws: 0,
    image: "/images/jkb/fighter-1.jpg",
    isPublished: true,
  },
  {
    id: "cmv3ni1hn0001sy6wdfu1z9o1",
    name: "Rian 'Sleman Warrior' Setiawan",
    slug: "fighter-demo-02",
    weightClass: "57kg Bantamweight",
    division: "Pro",
    club: "Sleman Warrior",
    wins: 6,
    losses: 3,
    draws: 1,
    image: "/images/jkb/fighter-2.jpg",
    isPublished: true,
  },
  {
    id: "cmv3ni1hn0002sy6wx7xe79dn",
    name: "Dimas 'South Coast' Wicaksono",
    slug: "fighter-demo-03",
    weightClass: "63.5kg Lightweight",
    division: "Pro",
    club: "Bantul Fighting",
    wins: 12,
    losses: 1,
    draws: 0,
    image: "/images/jkb/fighter-3.jpg",
    isPublished: true,
  },
  {
    id: "cmv3ni1ho0003sy6wamr4bjvb",
    name: "Ahmad 'Borobudur Iron' Fauzi",
    slug: "fighter-demo-04",
    weightClass: "63.5kg Lightweight",
    division: "Pro",
    club: "Magelang MMA",
    wins: 9,
    losses: 4,
    draws: 0,
    image: "/images/jkb/fighter-4.jpg",
    isPublished: true,
  },
  {
    id: "cmv3ni1ho0004sy6w7i4vgx4j",
    name: "Surya 'Bengawan' Saputra",
    slug: "fighter-demo-05",
    weightClass: "70kg Welterweight",
    division: "Amateur",
    club: "Solo Kick",
    wins: 4,
    losses: 1,
    draws: 0,
    image: "/images/jkb/fighter-5.jpg",
    isPublished: true,
  },
  {
    id: "cmv3ni1ho0005sy6womu4xjgs",
    name: "Fajar 'Kraton Blade' Nugroho",
    slug: "fighter-demo-06",
    weightClass: "70kg Welterweight",
    division: "Amateur",
    club: "Jogja Pride Gym",
    wins: 3,
    losses: 2,
    draws: 1,
    image: "/images/jkb/fighter-6.jpg",
    isPublished: true,
  },
  {
    id: "cmv3ni1hp0007sy6ww7phu7gk",
    name: "Kurniawan 'The Sniper' Jati",
    slug: "fighter-demo-08",
    weightClass: "80kg Middleweight",
    division: "Pro",
    club: "Klaten Striker",
    wins: 15,
    losses: 3,
    draws: 0,
    image: "/images/jkb/fighter-8.jpg",
    isPublished: true,
  },
];

export default async function FightersPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; division?: string; weight?: string }>;
}) {
  const params = await searchParams;
  const query = (params.q || "").toLowerCase();
  const division = params.division || "";
  const weight = params.weight || "";

  let fighters: any[] = [];
  let divisions: string[] = ["Pro", "Amateur"];
  let weightClasses: string[] = [
    "57kg Bantamweight",
    "63.5kg Lightweight",
    "70kg Welterweight",
    "80kg Middleweight",
  ];

  try {
    const where: any = { isPublished: true };
    if (query) {
      where.OR = [
        { name: { contains: query } },
        { club: { contains: query } },
      ];
    }
    if (division) where.division = division;
    if (weight) where.weightClass = { contains: weight };

    fighters = await prisma.athlete.findMany({
      where,
      orderBy: { name: "asc" },
    });

    const allFighters = await prisma.athlete.findMany({
      where: { isPublished: true },
      select: { division: true, weightClass: true },
    });
    if (allFighters.length > 0) {
      divisions = [...new Set(allFighters.map((f) => f.division))];
      weightClasses = [...new Set(allFighters.map((f) => f.weightClass))];
    }
  } catch (e) {
    console.warn("Using fallback athletes on Vercel:", e);
    fighters = FALLBACK_FIGHTERS.filter((f) => {
      if (query && !f.name.toLowerCase().includes(query) && !f.club.toLowerCase().includes(query)) {
        return false;
      }
      if (division && f.division !== division) return false;
      if (weight && !f.weightClass.includes(weight)) return false;
      return true;
    });
  }

  // If DB returned empty (e.g. fresh DB), use fallback
  if (!fighters || fighters.length === 0) {
    fighters = FALLBACK_FIGHTERS.filter((f) => {
      if (query && !f.name.toLowerCase().includes(query) && !f.club.toLowerCase().includes(query)) {
        return false;
      }
      if (division && f.division !== division) return false;
      if (weight && !f.weightClass.includes(weight)) return false;
      return true;
    });
  }

  return (
    <FighterCenterClient
      fighters={fighters}
      divisions={divisions}
      weightClasses={weightClasses}
      currentQuery={params.q || ""}
      currentDivision={division}
      currentWeight={weight}
    />
  );
}
