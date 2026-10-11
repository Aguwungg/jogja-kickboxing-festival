import prisma from "../src/lib/prisma";
import bcrypt from "bcryptjs";

async function seed() {
  if (process.env.NODE_ENV === "production") {
    console.error("🛑 SEED ABORTED: Cannot seed in production environment (NODE_ENV=production).");
    process.exit(1);
  }

  const dbUrl = process.env.DATABASE_URL || "";
  const isCloudOrRemote =
    dbUrl.startsWith("postgres") ||
    dbUrl.startsWith("mysql") ||
    dbUrl.includes("supabase") ||
    dbUrl.includes("neon.tech") ||
    dbUrl.includes("pooler");

  if (isCloudOrRemote && process.env.ALLOW_SEED_REMOTE !== "true") {
    console.error("🛑 SEED ABORTED: Target DATABASE_URL appears to be a remote/production database. Set ALLOW_SEED_REMOTE=true if intended.");
    process.exit(1);
  }

  console.log("🌱 Seeding development database safely...");

  // Seed Administrative Users for RBAC
  const defaultPasswordHash = await bcrypt.hash("AdminJKB2026!", 10);

  await prisma.user.upsert({
    where: { email: "admin@jkbchampionship.id" },
    update: {
      name: "Super Administrator JKB",
      role: "SUPER_ADMIN",
      passwordHash: defaultPasswordHash,
    },
    create: {
      email: "admin@jkbchampionship.id",
      name: "Super Administrator JKB",
      role: "SUPER_ADMIN",
      passwordHash: defaultPasswordHash,
    },
  });

  await prisma.user.upsert({
    where: { email: "content@jkbchampionship.id" },
    update: {
      name: "Content Admin JKB",
      role: "CONTENT_ADMIN",
      passwordHash: defaultPasswordHash,
    },
    create: {
      email: "content@jkbchampionship.id",
      name: "Content Admin JKB",
      role: "CONTENT_ADMIN",
      passwordHash: defaultPasswordHash,
    },
  });

  // Seed demo fighters with photos
  const fighters = [
    { name: "Fighter Demo 01", slug: "fighter-demo-01", division: "Pro", weightClass: "57kg Bantamweight", club: "Jogja Fight Camp", wins: 8, losses: 2, draws: 0, isPublished: true, image: "/images/jkb/fighter-1.jpg" },
    { name: "Fighter Demo 02", slug: "fighter-demo-02", division: "Pro", weightClass: "57kg Bantamweight", club: "Sleman Warrior", wins: 6, losses: 3, draws: 1, isPublished: true, image: "/images/jkb/fighter-2.jpg" },
    { name: "Fighter Demo 03", slug: "fighter-demo-03", division: "Pro", weightClass: "63.5kg Lightweight", club: "Bantul Fighting", wins: 12, losses: 1, draws: 0, isPublished: true, image: "/images/jkb/fighter-3.jpg" },
    { name: "Fighter Demo 04", slug: "fighter-demo-04", division: "Pro", weightClass: "63.5kg Lightweight", club: "Magelang MMA", wins: 9, losses: 4, draws: 0, isPublished: true, image: "/images/jkb/fighter-4.jpg" },
    { name: "Fighter Demo 05", slug: "fighter-demo-05", division: "Amateur", weightClass: "70kg Welterweight", club: "Solo Kick", wins: 4, losses: 1, draws: 0, isPublished: true, image: "/images/jkb/fighter-5.jpg" },
    { name: "Fighter Demo 06", slug: "fighter-demo-06", division: "Amateur", weightClass: "70kg Welterweight", club: "Jogja Pride Gym", wins: 3, losses: 2, draws: 1, isPublished: true, image: "/images/jkb/fighter-6.jpg" },
    { name: "Fighter Demo 07", slug: "fighter-demo-07", division: "Exhibition", weightClass: "80kg Middleweight", club: "BigMo Promotion", wins: 0, losses: 0, draws: 0, isPublished: false, image: "/images/jkb/fighter-training.jpg" },
    { name: "Fighter Demo 08", slug: "fighter-demo-08", division: "Pro", weightClass: "80kg Middleweight", club: "Klaten Striker", wins: 15, losses: 3, draws: 0, isPublished: true, image: "/images/jkb/fighter-8.jpg" },
  ];

  for (const f of fighters) {
    await prisma.athlete.upsert({
      where: { slug: f.slug },
      update: f,
      create: f,
    });
  }

  // Seed voting campaign
  await prisma.votingCampaign.upsert({
    where: { id: "city-pride-2026" },
    update: { startDate: new Date("2026-10-01") },
    create: {
      id: "city-pride-2026",
      name: "City Pride 2026 — Kota Mana Paling Punya Nyali?",
      startDate: new Date("2026-10-01"),
      endDate: new Date("2026-12-14"),
      status: "ACTIVE",
    },
  });

  // Seed demo products with photos & variants
  const products = [
    {
      name: "JKB 2026 Official Fighter Tee — Black Onyx",
      slug: "jkb-tee-black",
      description: "Kaos siluet oversized resmi Jogja Kickboxing Festival 2026. Menampilkan grafis tipografi 'DI BALIK KALEM' dengan sablon discharge bertekstur lembut dan aksen merah khas Redy Championship 2.",
      price: 199000,
      category: "APPAREL",
      badge: "FESTIVAL EXCLUSIVE",
      material: "100% Heavyweight Cotton Combed 24s (210 gsm) High Density Screenprint",
      isActive: true,
      imageUrl: "/images/jkb/merch-tee-black.jpg",
      variants: [
        { size: "S", stock: 45 },
        { size: "M", stock: 60 },
        { size: "L", stock: 40 },
        { size: "XL", stock: 25 },
        { size: "XXL", stock: 15 },
      ],
    },
    {
      name: "JKB Official Combat Handwrap 4.5M — Crimson Red",
      slug: "jkb-handwrap-red",
      description: "Pelindung pergelangan dan buku jari standar kompetisi kickboxing pro. Terbuat dari katun semi-elastis bernapas dengan pengait jempol kokoh dan velcro selebar 5cm untuk stabilitas pukulan maksimal.",
      price: 89000,
      category: "EQUIPMENT",
      badge: "TOURNAMENT GRADE",
      material: "Semi-elastic Breathable Cotton Blend 4.5 Meter with Rubberized JKB Label",
      isActive: true,
      imageUrl: "/images/jkb/merch-handwrap-red.jpg",
      variants: [
        { size: "All Size", stock: 85 },
      ],
    },
    {
      name: "JKB Stadium Heavy Pullover Hoodie — Charcoal Grey",
      slug: "jkb-hoodie-charcoal",
      description: "Hoodie heavyweight berpotongan relaxed fit untuk pemanasan atlet dan penonton malam arena. Dilengkapi saku kanguru ganda dengan bordir emblem kejuaraan di dada kiri dan sablon waterbase tahan retak di punggung.",
      price: 349000,
      category: "APPAREL",
      badge: "BEST SELLER",
      material: "French Terry 330 gsm Cotton Blend with Embroidered Crest & Ribbed Cuffs",
      isActive: true,
      imageUrl: "/images/jkb/merch-hoodie-charcoal.jpg",
      variants: [
        { size: "M", stock: 35 },
        { size: "L", stock: 50 },
        { size: "XL", stock: 30 },
      ],
    },
    {
      name: "JKB Pro Leather Sparring Gloves — Crimson Gold",
      slug: "jkb-sparring-gloves",
      description: "Sarung tinju resmi JKB 2026 x Redy Championship. Dirancang dengan triple-layer shock absorbing foam untuk perlindungan metakarpal superior saat sparring keras maupun laga kejuaraan.",
      price: 489000,
      category: "EQUIPMENT",
      badge: "OFFICIAL FIGHT GEAR",
      material: "Microfiber Synthetic Leather, 3-Layer Molded Foam Padding, Wide Velcro Lock",
      isActive: true,
      imageUrl: "/images/jkb/gloves-closeup.jpg",
      variants: [
        { size: "12oz", stock: 20 },
        { size: "14oz", stock: 25 },
      ],
    },
  ];

  for (const p of products) {
    const { variants, ...prodData } = p;
    const product = await prisma.product.upsert({
      where: { slug: prodData.slug },
      update: prodData,
      create: prodData,
    });
    // Create variants
    for (const v of variants) {
      await prisma.productVariant.upsert({
        where: { id: `${product.id}-${v.size.replace(/\s+/g, "_")}` },
        update: { size: v.size, stockQuantity: v.stock },
        create: {
          id: `${product.id}-${v.size.replace(/\s+/g, "_")}`,
          productId: product.id,
          size: v.size,
          stockQuantity: v.stock,
        },
      });
    }
  }

  // Seed sample e-commerce orders for verification
  const teeProduct = await prisma.product.findUnique({ where: { slug: "jkb-tee-black" }, include: { variants: true } });
  const handwrapProduct = await prisma.product.findUnique({ where: { slug: "jkb-handwrap-red" }, include: { variants: true } });
  const hoodieProduct = await prisma.product.findUnique({ where: { slug: "jkb-hoodie-charcoal" }, include: { variants: true } });
  const glovesProduct = await prisma.product.findUnique({ where: { slug: "jkb-sparring-gloves" }, include: { variants: true } });

  if (teeProduct && handwrapProduct && hoodieProduct && glovesProduct) {
    // Order 1: On-Site Pickup Paid & Ready
    const teeVarL = teeProduct.variants.find((v) => v.size === "L") || teeProduct.variants[0];
    const handwrapVar = handwrapProduct.variants[0];

    const order1 = await prisma.order.upsert({
      where: { orderNumber: "JKB-ORD-2026-001" },
      update: {
        customerName: "Dimas Wicaksono",
        customerPhone: "081234567890",
        guestEmail: "dimas.striker@gmail.com",
        deliveryMethod: "PICKUP_VENUE",
        courier: "Pickup Booth GOR UNY",
        shippingCost: 0,
        totalAmount: 288000,
        paymentStatus: "PAID",
        fulfillmentStatus: "READY_FOR_PICKUP",
        claimBarcode: "JKB-CLAIM-88211",
        notes: "Klaim Day 1 pagi sebelum partai Bantamweight.",
      },
      create: {
        orderNumber: "JKB-ORD-2026-001",
        customerName: "Dimas Wicaksono",
        customerPhone: "081234567890",
        guestEmail: "dimas.striker@gmail.com",
        deliveryMethod: "PICKUP_VENUE",
        courier: "Pickup Booth GOR UNY",
        shippingCost: 0,
        totalAmount: 288000,
        paymentStatus: "PAID",
        fulfillmentStatus: "READY_FOR_PICKUP",
        claimBarcode: "JKB-CLAIM-88211",
        notes: "Klaim Day 1 pagi sebelum partai Bantamweight.",
      },
    });

    await prisma.orderItem.deleteMany({ where: { orderId: order1.id } });
    await prisma.orderItem.create({
      data: { orderId: order1.id, variantId: teeVarL.id, quantity: 1, price: 199000 },
    });
    await prisma.orderItem.create({
      data: { orderId: order1.id, variantId: handwrapVar.id, quantity: 1, price: 89000 },
    });

    // Order 2: Expedition Paid & Shipped
    const hoodieVarM = hoodieProduct.variants.find((v) => v.size === "M") || hoodieProduct.variants[0];
    const order2 = await prisma.order.upsert({
      where: { orderNumber: "JKB-ORD-2026-002" },
      update: {
        customerName: "Siti Rahayu",
        customerPhone: "081898765432",
        guestEmail: "siti.jogjafan@gmail.com",
        deliveryMethod: "EXPEDITION",
        courier: "JNE Regular",
        shippingCost: 15000,
        shippingAddress: "Jl. Gejayan No. 45, Condongcatur",
        shippingCity: "Sleman, D.I. Yogyakarta",
        shippingPostalCode: "55283",
        totalAmount: 364000,
        paymentStatus: "PAID",
        fulfillmentStatus: "SHIPPED",
        trackingNumber: "JNE-JKB-892110291",
        notes: "Paket sudah dikirim via JNE drop point Gejayan.",
      },
      create: {
        orderNumber: "JKB-ORD-2026-002",
        customerName: "Siti Rahayu",
        customerPhone: "081898765432",
        guestEmail: "siti.jogjafan@gmail.com",
        deliveryMethod: "EXPEDITION",
        courier: "JNE Regular",
        shippingCost: 15000,
        shippingAddress: "Jl. Gejayan No. 45, Condongcatur",
        shippingCity: "Sleman, D.I. Yogyakarta",
        shippingPostalCode: "55283",
        totalAmount: 364000,
        paymentStatus: "PAID",
        fulfillmentStatus: "SHIPPED",
        trackingNumber: "JNE-JKB-892110291",
        notes: "Paket sudah dikirim via JNE drop point Gejayan.",
      },
    });

    await prisma.orderItem.deleteMany({ where: { orderId: order2.id } });
    await prisma.orderItem.create({
      data: { orderId: order2.id, variantId: hoodieVarM.id, quantity: 1, price: 349000 },
    });

    // Order 3: Expedition Unpaid / Pending
    const glovesVar14 = glovesProduct.variants.find((v) => v.size === "14oz") || glovesProduct.variants[0];
    const order3 = await prisma.order.upsert({
      where: { orderNumber: "JKB-ORD-2026-003" },
      update: {
        customerName: "Aditya Nugroho",
        customerPhone: "085643112233",
        guestEmail: "aditya.kick@yahoo.com",
        deliveryMethod: "EXPEDITION",
        courier: "J&T Express",
        shippingCost: 25000,
        shippingAddress: "Jl. Slamet Riyadi No. 110",
        shippingCity: "Solo, Jawa Tengah",
        shippingPostalCode: "57112",
        totalAmount: 514000,
        paymentStatus: "UNPAID",
        fulfillmentStatus: "UNFULFILLED",
        notes: "Menunggu penyelesaian simulasi pembayaran Midtrans.",
      },
      create: {
        orderNumber: "JKB-ORD-2026-003",
        customerName: "Aditya Nugroho",
        customerPhone: "085643112233",
        guestEmail: "aditya.kick@yahoo.com",
        deliveryMethod: "EXPEDITION",
        courier: "J&T Express",
        shippingCost: 25000,
        shippingAddress: "Jl. Slamet Riyadi No. 110",
        shippingCity: "Solo, Jawa Tengah",
        shippingPostalCode: "57112",
        totalAmount: 514000,
        paymentStatus: "UNPAID",
        fulfillmentStatus: "UNFULFILLED",
        notes: "Menunggu penyelesaian simulasi pembayaran Midtrans.",
      },
    });

    await prisma.orderItem.deleteMany({ where: { orderId: order3.id } });
    await prisma.orderItem.create({
      data: { orderId: order3.id, variantId: glovesVar14.id, quantity: 1, price: 489000 },
    });
  }

  // Seed Schedule items for 3-day festival
  const scheduleItems = [
    // Day 1 (Sabtu, 12 Desember 2026)
    { id: "sch-01", title: "Registrasi & Official Weigh-in Atlet", category: "CEREMONY", day: 1, timeSlot: "09:00 - 11:30 WIB", location: "Main Hall & Ring Utama", description: "Pemeriksaan medis resmi, timbang badan 80 atlet kickboxing, dan aturan pertandingan.", isHighlight: false, isPublished: true },
    { id: "sch-02", title: "Babak Penyisihan: Bantamweight & Featherweight", category: "COMBAT", day: 1, timeSlot: "13:30 - 17:30 WIB", location: "Ring Utama (Championship Ring)", description: "12 partai eliminasi kejuaraan regional Redy Championship 2.", isHighlight: true, isPublished: true },
    { id: "sch-03", title: "Opening Ceremony & Sunset Sound Session", category: "STAGE", day: 1, timeSlot: "18:30 - 20:00 WIB", location: "Panggung Utama (The Stage)", description: "Pembukaan resmi JKB 2026, sambutan kehormatan, dan pertunjukan musik pembuka.", isHighlight: false, isPublished: true },
    { id: "sch-04", title: "Live Indie Music Headline — Session 1", category: "STAGE", day: 1, timeSlot: "20:00 - 22:30 WIB", location: "Panggung Utama (The Stage)", description: "Penampilan band lokal Jogja dan musisi tamu nasional.", isHighlight: true, isPublished: true },

    // Day 2 (Minggu, 13 Desember 2026)
    { id: "sch-05", title: "Babak Perempat Final: Lightweight & Welterweight", category: "COMBAT", day: 2, timeSlot: "10:00 - 15:00 WIB", location: "Ring Utama (Championship Ring)", description: "Pertandingan tensi tinggi perebutan tiket semi-final 4 divisi.", isHighlight: true, isPublished: true },
    { id: "sch-06", title: "Community Martial Arts Showcase & Coaching Clinic", category: "COMMUNITY", day: 2, timeSlot: "15:30 - 17:00 WIB", location: "Outdoor Festival Plaza", description: "Sesi edukasi teknik striking dasar dan temu atlet nasional bersama pelatih bersertifikat.", isHighlight: false, isPublished: true },
    { id: "sch-07", title: "Semifinal Championship Clash", category: "COMBAT", day: 2, timeSlot: "18:30 - 21:00 WIB", location: "Ring Utama (Championship Ring)", description: "8 laga hidup-mati menuju partai puncak sabuk juara JKB 2026.", isHighlight: true, isPublished: true },
    { id: "sch-08", title: "The Stage Saturday Night Live Performance", category: "STAGE", day: 2, timeSlot: "21:00 - 23:00 WIB", location: "Panggung Utama (The Stage)", description: "Energi festival musik puncak malam minggu bersama band headliner nasional.", isHighlight: true, isPublished: true },

    // Day 3 (Senin, 14 Desember 2026)
    { id: "sch-09", title: "City Pride Community Voting Announcement", category: "COMMUNITY", day: 3, timeSlot: "13:00 - 14:30 WIB", location: "Main Plaza Stage", description: "Pengumuman kontingen kota terfavorit hasil voting warga Jogja, Bantul, dan Sleman.", isHighlight: false, isPublished: true },
    { id: "sch-10", title: "Celebrity & Creator Exhibition Match (PPV BigMo)", category: "COMBAT", day: 3, timeSlot: "15:30 - 17:30 WIB", location: "Ring Utama (Championship Ring)", description: "Partai ekshibisi spesial kreator konten dan influencer olahraga tarung.", isHighlight: true, isPublished: true },
    { id: "sch-11", title: "GRAND FINAL: 4 Championship Title Fights", category: "COMBAT", day: 3, timeSlot: "19:00 - 21:30 WIB", location: "Ring Utama (Championship Ring)", description: "Perebutan 4 sabuk emas Redy Championship 2 JKB 2026 di depan 5.000 penonton.", isHighlight: true, isPublished: true },
    { id: "sch-12", title: "Closing Festival Celebration & Afterparty", category: "STAGE", day: 3, timeSlot: "21:30 - 23:30 WIB", location: "Panggung Utama (The Stage)", description: "Penutupan akbar JKB 2026 dan penampilan spektakuler penutup panggung musik.", isHighlight: true, isPublished: true },
  ];

  for (const s of scheduleItems) {
    await prisma.scheduleItem.upsert({
      where: { id: s.id },
      update: s,
      create: s,
    });
  }

  // Seed Performers for Lineup (Simulated/Demo staging line up)
  const performers = [
    { name: "THE SOUND OF NYALI (Festival Collective)", slug: "the-sound-of-nyali", description: "Kolektif musik rock & alternative yang membawa aransemen anthemic pembakar semangat arena tarung.", image: "/images/jkb/hero-concert.jpg", stage: "Panggung Utama (The Stage)", isPublished: true },
    { name: "JOGJA HIP-HOP CYPHERS", slug: "jogja-hiphop-cyphers", description: "Barisan MC dan beatmaker hip-hop urban Yogyakarta dengan rima tajam bertema keberanian dan sportivitas.", image: "/images/jkb/festival-lights.jpg", stage: "The Stage & Plaza", isPublished: true },
    { name: "STRIKE & SOUNDS ELECTRONIC", slug: "strike-and-sounds", description: "Set synthesizer energik dan beat elektronik berkecepatan tinggi pengiring walkout atlet dan selebrasi malam.", image: "/images/jkb/hero-concert.jpg", stage: "The Stage", isPublished: true },
    { name: "SPECIAL GUEST HEADLINER", slug: "special-guest-headliner", description: "Pengumuman resmi bintang tamu utama nasional fase 2 akan diumumkan melalui kanal resmi JKB.", image: "/images/jkb/festival-lights.jpg", stage: "Panggung Utama (The Stage)", isPublished: true },
  ];

  for (const p of performers) {
    await prisma.performer.upsert({
      where: { slug: p.slug },
      update: p,
      create: p,
    });
  }

  // Seed Tournaments and Matches for Championship Bracket Engine
  const f1 = await prisma.athlete.findUnique({ where: { slug: "fighter-demo-01" } });
  const f2 = await prisma.athlete.findUnique({ where: { slug: "fighter-demo-02" } });
  const f3 = await prisma.athlete.findUnique({ where: { slug: "fighter-demo-03" } });
  const f4 = await prisma.athlete.findUnique({ where: { slug: "fighter-demo-04" } });
  const f5 = await prisma.athlete.findUnique({ where: { slug: "fighter-demo-05" } });
  const f6 = await prisma.athlete.findUnique({ where: { slug: "fighter-demo-06" } });
  const f8 = await prisma.athlete.findUnique({ where: { slug: "fighter-demo-08" } });

  // 1. Tournament Bantamweight
  await prisma.tournament.upsert({
    where: { id: "tour-bantam-2026" },
    update: { name: "Redy Championship 2 — Divisi Bantamweight (57kg)", category: "Bantamweight", status: "ACTIVE" },
    create: { id: "tour-bantam-2026", name: "Redy Championship 2 — Divisi Bantamweight (57kg)", category: "Bantamweight", format: "SINGLE_ELIMINATION", status: "ACTIVE" },
  });

  if (f1 && f2 && f3 && f4) {
    // SF 1
    await prisma.match.upsert({
      where: { id: "match-bantam-sf1" },
      update: { athlete1Id: f1.id, athlete2Id: f2.id, winnerId: f1.id, status: "COMPLETED", resultType: "KO", roundResult: "R2 1:45" },
      create: { id: "match-bantam-sf1", bracketId: "tour-bantam-2026", category: "Bantamweight", round: "SEMIFINAL", matchNumber: 1, athlete1Id: f1.id, athlete2Id: f2.id, winnerId: f1.id, status: "COMPLETED", resultType: "KO", roundResult: "R2 1:45" },
    });
    // SF 2
    await prisma.match.upsert({
      where: { id: "match-bantam-sf2" },
      update: { athlete1Id: f3.id, athlete2Id: f4.id, winnerId: f3.id, status: "COMPLETED", resultType: "DECISION", roundResult: "Unanimous (29-28)" },
      create: { id: "match-bantam-sf2", bracketId: "tour-bantam-2026", category: "Bantamweight", round: "SEMIFINAL", matchNumber: 2, athlete1Id: f3.id, athlete2Id: f4.id, winnerId: f3.id, status: "COMPLETED", resultType: "DECISION", roundResult: "Unanimous (29-28)" },
    });
    // Final
    await prisma.match.upsert({
      where: { id: "match-bantam-final" },
      update: { athlete1Id: f1.id, athlete2Id: f3.id, status: "SCHEDULED" },
      create: { id: "match-bantam-final", bracketId: "tour-bantam-2026", category: "Bantamweight", round: "FINAL", matchNumber: 3, athlete1Id: f1.id, athlete2Id: f3.id, status: "SCHEDULED" },
    });
  }

  // 2. Tournament Lightweight
  await prisma.tournament.upsert({
    where: { id: "tour-light-2026" },
    update: { name: "Redy Championship 2 — Divisi Lightweight (63.5kg)", category: "Lightweight", status: "ACTIVE" },
    create: { id: "tour-light-2026", name: "Redy Championship 2 — Divisi Lightweight (63.5kg)", category: "Lightweight", format: "SINGLE_ELIMINATION", status: "ACTIVE" },
  });

  if (f4 && f5 && f6 && f8) {
    // SF 1
    await prisma.match.upsert({
      where: { id: "match-light-sf1" },
      update: { athlete1Id: f4.id, athlete2Id: f5.id, winnerId: f5.id, status: "COMPLETED", resultType: "TKO", roundResult: "R3 2:10" },
      create: { id: "match-light-sf1", bracketId: "tour-light-2026", category: "Lightweight", round: "SEMIFINAL", matchNumber: 1, athlete1Id: f4.id, athlete2Id: f5.id, winnerId: f5.id, status: "COMPLETED", resultType: "TKO", roundResult: "R3 2:10" },
    });
    // SF 2
    await prisma.match.upsert({
      where: { id: "match-light-sf2" },
      update: { athlete1Id: f6.id, athlete2Id: f8.id, winnerId: f8.id, status: "COMPLETED", resultType: "DECISION", roundResult: "Split Decision" },
      create: { id: "match-light-sf2", bracketId: "tour-light-2026", category: "Lightweight", round: "SEMIFINAL", matchNumber: 2, athlete1Id: f6.id, athlete2Id: f8.id, winnerId: f8.id, status: "COMPLETED", resultType: "DECISION", roundResult: "Split Decision" },
    });
    // Final
    await prisma.match.upsert({
      where: { id: "match-light-final" },
      update: { athlete1Id: f5.id, athlete2Id: f8.id, status: "SCHEDULED" },
      create: { id: "match-light-final", bracketId: "tour-light-2026", category: "Lightweight", round: "FINAL", matchNumber: 3, athlete1Id: f5.id, athlete2Id: f8.id, status: "SCHEDULED" },
    });
  }

  // ---------------------------------------------------------
  // Milestone 6: Creator Hub & Media Accreditation Seed Data
  // ---------------------------------------------------------
  const creatorHash = await bcrypt.hash("CreatorJKB2026!", 10);

  // Creator 1
  const u1 = await prisma.user.upsert({
    where: { email: "radit@creator.jkb.id" },
    update: { name: "Raditya Pratama", role: "CREATOR", passwordHash: creatorHash },
    create: { email: "radit@creator.jkb.id", name: "Raditya Pratama", role: "CREATOR", passwordHash: creatorHash },
  });
  await prisma.creatorProfile.upsert({
    where: { userId: u1.id },
    update: { name: "Raditya Pratama", category: "COMBAT_SPORT", instagram: "@radit_fightvlog", tiktok: "@radit.kickboxing", youtube: "Radit Fight Journal", bio: "Vlogger beladiri Yogyakarta & pengamat kickboxing amatir-pro.", status: "APPROVED", totalPoints: 450 },
    create: { id: "creator-prof-01", userId: u1.id, name: "Raditya Pratama", category: "COMBAT_SPORT", instagram: "@radit_fightvlog", tiktok: "@radit.kickboxing", youtube: "Radit Fight Journal", bio: "Vlogger beladiri Yogyakarta & pengamat kickboxing amatir-pro.", status: "APPROVED", totalPoints: 450 },
  });
  await prisma.submission.upsert({
    where: { id: "sub-01" },
    update: { points: 200, status: "APPROVED" },
    create: { id: "sub-01", creatorId: "creator-prof-01", title: "Breakdown Lawan: Sleman vs Bantul di JKB 2026", platform: "TIKTOK", url: "https://tiktok.com/@radit.kickboxing/video/7391029381", status: "APPROVED", points: 200, adminNote: "Konten edukasi preview partai semifinal. Engagement tinggi." },
  });
  await prisma.submission.upsert({
    where: { id: "sub-02" },
    update: { points: 150, status: "APPROVED" },
    create: { id: "sub-02", creatorId: "creator-prof-01", title: "Intip Camp Latihan Jogja Fight Camp", platform: "INSTAGRAM", url: "https://instagram.com/reel/C8921klsmA", status: "APPROVED", points: 150, adminNote: "Reels footage otentik persiapan atlet." },
  });
  await prisma.submission.upsert({
    where: { id: "sub-03" },
    update: { points: 100, status: "APPROVED" },
    create: { id: "sub-03", creatorId: "creator-prof-01", title: "Review Tiket & Lineup Musik JKB 2026", platform: "TIKTOK", url: "https://tiktok.com/@radit.kickboxing/video/7392239482", status: "APPROVED", points: 100, adminNote: "Konten promosi festival musik." },
  });
  await prisma.barcodeClaim.upsert({
    where: { barcode: "JKB2026-FEST-09821" },
    update: { status: "VERIFIED", pointsAwarded: 50 },
    create: { id: "claim-01", creatorId: "creator-prof-01", barcode: "JKB2026-FEST-09821", status: "VERIFIED", pointsAwarded: 50, adminNote: "Klaim barcode tiket Day 1 diverifikasi panitia." },
  });

  // Creator 2
  const u2 = await prisma.user.upsert({
    where: { email: "gita@creator.jkb.id" },
    update: { name: "Gita Saraswati", role: "CREATOR", passwordHash: creatorHash },
    create: { email: "gita@creator.jkb.id", name: "Gita Saraswati", role: "CREATOR", passwordHash: creatorHash },
  });
  await prisma.creatorProfile.upsert({
    where: { userId: u2.id },
    update: { name: "Gita Saraswati", category: "MUSIC_LIFESTYLE", instagram: "@gitasaras_fest", tiktok: "@gita_mataramvibes", bio: "Festival goer & music enthusiast asal Sleman. Meliput panggung musik JKB 2026.", status: "APPROVED", totalPoints: 320 },
    create: { id: "creator-prof-02", userId: u2.id, name: "Gita Saraswati", category: "MUSIC_LIFESTYLE", instagram: "@gitasaras_fest", tiktok: "@gita_mataramvibes", bio: "Festival goer & music enthusiast asal Sleman. Meliput panggung musik JKB 2026.", status: "APPROVED", totalPoints: 320 },
  });
  await prisma.submission.upsert({
    where: { id: "sub-04" },
    update: { points: 200, status: "APPROVED" },
    create: { id: "sub-04", creatorId: "creator-prof-02", title: "5 Alasan Nonton Shaggydog & Barasuara di GOR UNY!", platform: "TIKTOK", url: "https://tiktok.com/@gita_mataramvibes/video/739348123", status: "APPROVED", points: 200, adminNote: "Promosi stage musik resmi." },
  });
  await prisma.submission.upsert({
    where: { id: "sub-05" },
    update: { points: 120, status: "APPROVED" },
    create: { id: "sub-05", creatorId: "creator-prof-02", title: "OOTD Nonton Kickboxing Fest: Sporty & Edgy", platform: "INSTAGRAM", url: "https://instagram.com/reel/C89901mza", status: "APPROVED", points: 120, adminNote: "Reels lifestyle festival." },
  });

  // Creator 3
  const u3 = await prisma.user.upsert({
    where: { email: "bayu@creator.jkb.id" },
    update: { name: "Bayu Satria", role: "CREATOR", passwordHash: creatorHash },
    create: { email: "bayu@creator.jkb.id", name: "Bayu Satria", role: "CREATOR", passwordHash: creatorHash },
  });
  await prisma.creatorProfile.upsert({
    where: { userId: u3.id },
    update: { name: "Bayu Satria (Bantul Strike)", category: "COMBAT_SPORT", instagram: "@bantulstrike", tiktok: "@bantul.combat", bio: "Fighter sparring partner & video analis teknik striking K-1.", status: "APPROVED", totalPoints: 240 },
    create: { id: "creator-prof-03", userId: u3.id, name: "Bayu Satria (Bantul Strike)", category: "COMBAT_SPORT", instagram: "@bantulstrike", tiktok: "@bantul.combat", bio: "Fighter sparring partner & video analis teknik striking K-1.", status: "APPROVED", totalPoints: 240 },
  });
  await prisma.submission.upsert({
    where: { id: "sub-06" },
    update: { points: 150, status: "APPROVED" },
    create: { id: "sub-06", creatorId: "creator-prof-03", title: "Analisis Low Kick Maut Bagas 'The Pitbull'", platform: "TIKTOK", url: "https://tiktok.com/@bantul.combat/video/739412930", status: "APPROVED", points: 150, adminNote: "Analisis teknis akurat." },
  });
  await prisma.submission.upsert({
    where: { id: "sub-07" },
    update: { points: 90, status: "APPROVED" },
    create: { id: "sub-07", creatorId: "creator-prof-03", title: "Jadwal Timbang Badan & Konferensi Pers JKB 2026", platform: "INSTAGRAM", url: "https://instagram.com/reel/C90123opq", status: "APPROVED", points: 90, adminNote: "Info agenda timbang badan." },
  });

  // Creator 4 (Pending)
  const u4 = await prisma.user.upsert({
    where: { email: "dimas@creator.jkb.id" },
    update: { name: "Dimas Anggoro", role: "CREATOR", passwordHash: creatorHash },
    create: { email: "dimas@creator.jkb.id", name: "Dimas Anggoro", role: "CREATOR", passwordHash: creatorHash },
  });
  await prisma.creatorProfile.upsert({
    where: { userId: u4.id },
    update: { name: "Dimas Anggoro", category: "GENERAL_HYPE", instagram: "@dimas_jogjahits", tiktok: "@kulinerdanhits_yk", bio: "Eksplorasi kuliner & event hits Jogja.", status: "PENDING", totalPoints: 0 },
    create: { id: "creator-prof-04", userId: u4.id, name: "Dimas Anggoro", category: "GENERAL_HYPE", instagram: "@dimas_jogjahits", tiktok: "@kulinerdanhits_yk", bio: "Eksplorasi kuliner & event hits Jogja.", status: "PENDING", totalPoints: 0 },
  });
  await prisma.submission.upsert({
    where: { id: "sub-08" },
    update: { status: "PENDING", points: 0 },
    create: { id: "sub-08", creatorId: "creator-prof-04", title: "Ada Festival Kickboxing Terbesar di GOR UNY Besok!", platform: "TIKTOK", url: "https://tiktok.com/@kulinerdanhits_yk/video/739556112", status: "PENDING", points: 0, adminNote: "Menunggu moderasi admin." },
  });

  // Media Accreditations
  await prisma.mediaAccreditation.upsert({
    where: { id: "media-01" },
    update: { status: "APPROVED", badgeNumber: "PRESS-PRINT-001" },
    create: {
      id: "media-01",
      mediaName: "Kedaulatan Rakyat (KR Jogja)",
      journalistName: "Bambang Haryanto",
      email: "bambang.kr@kedaulatanrakyat.co.id",
      phone: "081227091823",
      mediaType: "PRINT_MEDIA",
      pressCardNumber: "PWI-DIY-2024-0412",
      coveragePlan: "Liputan utama halaman olahraga edisi cetak H-1 hingga babak final 3 hari penuh.",
      status: "APPROVED",
      badgeNumber: "PRESS-PRINT-001",
    },
  });
  await prisma.mediaAccreditation.upsert({
    where: { id: "media-02" },
    update: { status: "APPROVED", badgeNumber: "PRESS-DIGITAL-002" },
    create: {
      id: "media-02",
      mediaName: "Tribun Jogja Digital & Video",
      journalistName: "Siti Nurhaliza",
      email: "siti.tribun@tribunnews.com",
      phone: "081392817291",
      mediaType: "ONLINE_MEDIA",
      pressCardNumber: "AJI-YK-88912",
      coveragePlan: "Live report portal berita dan liputan video reels suasana ring vs stage.",
      status: "APPROVED",
      badgeNumber: "PRESS-DIGITAL-002",
    },
  });
  await prisma.mediaAccreditation.upsert({
    where: { id: "media-03" },
    update: { status: "APPROVED", badgeNumber: "PHOTO-RINGSIDE-003" },
    create: {
      id: "media-03",
      mediaName: "Combat Eye Photography",
      journalistName: "Yohanes Chandra",
      email: "yohanes@combateye.id",
      phone: "085643098711",
      mediaType: "PHOTOGRAPHER_RINGSIDE",
      pressCardNumber: "PFI-JOGJA-5510",
      coveragePlan: "Fotografi laga aksi tinggi tepat di pinggir kanvas ring (ringside apron pass).",
      status: "APPROVED",
      badgeNumber: "PHOTO-RINGSIDE-003",
    },
  });
  await prisma.mediaAccreditation.upsert({
    where: { id: "media-04" },
    update: { status: "PENDING" },
    create: {
      id: "media-04",
      mediaName: "Radar Jogja Jawa Pos",
      journalistName: "Andi Wicaksono",
      email: "andi@radarjogja.com",
      phone: "081745678901",
      mediaType: "PRINT_MEDIA",
      pressCardNumber: "PWI-DIY-2025-1102",
      coveragePlan: "Wawancara eksklusif petarung sabuk juara dan ulasan ekonomi kreatif UMKM festival.",
      status: "PENDING",
    },
  });

  // ---------------------------------------------------------
  // Milestone 8: PPV Products & Entitlements Seed Data
  // ---------------------------------------------------------
  const ppvProducts = [
    {
      id: "ppv-single-day",
      slug: "single-day-pass",
      name: "Day Pass: BigMo Exhibition & Stage Stream",
      tier: "SINGLE_DAY",
      badge: "PROVISIONAL APPROVED",
      price: 10000,
      description: "Akses siaran langsung resmi partai ekshibisi selebriti BigMo dan sesi musik pembuka.",
      features: "Kualitas Streaming HD 1080p | Akses Live Streaming BigMo Exhibition | Audio Komentator Ring | Live Chat Interaktif",
      resolution: "1080p 60FPS",
      order: 1,
      streamUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
      isActive: true,
    },
    {
      id: "ppv-all-access",
      slug: "all-access-championship-pass",
      name: "3-Day All-Access: Championship & Music Stage [DRAFT]",
      tier: "ALL_ACCESS",
      badge: "MENUNGGU PERSETUJUAN",
      price: 29000,
      description: "Paket siaran 3 hari kejuaraan. Status: Tertunda dan belum disetujui promotor untuk penjualan umum.",
      features: "Ultra-HD 1080p 60FPS Bitrate Tinggi | Akses 3 Hari (12–14 Desember 2026) | Partai Sabuk Juara | Replay VOD Terjadwal",
      resolution: "1080p 60FPS High-Bitrate",
      order: 2,
      streamUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
      isActive: false, // Disabled for public purchasing
    },
    {
      id: "ppv-vip-ringside",
      slug: "vip-ringside-stream",
      name: "VIP Ringside Multi-Cam Pass [DRAFT]",
      tier: "VIP",
      badge: "MENUNGGU PERSETUJUAN",
      price: 79000,
      description: "Konsep siaran digital ringside GOR UNY. Status: Fitur multi-angle dan ruang ganti memerlukan persetujuan kru teknis dan promotor.",
      features: "Konsep Multi-Angle Switcher | Pilihan Sudut Kanvas | Akses Q&A Petarung",
      resolution: "1080p 60FPS",
      order: 3,
      streamUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
      isActive: false, // Disabled for public purchasing
    },
  ];

  for (const ppv of ppvProducts) {
    await prisma.pPVProduct.upsert({
      where: { slug: ppv.slug },
      update: ppv,
      create: ppv,
    });
  }

  // Seed sample demo Entitlements
  const vipProduct = await prisma.pPVProduct.findUnique({ where: { slug: "vip-ringside-stream" } });
  const allAccessProduct = await prisma.pPVProduct.findUnique({ where: { slug: "all-access-championship-pass" } });

  if (vipProduct && allAccessProduct) {
    // 1. VIP Pass for tester
    await prisma.entitlement.upsert({
      where: { accessCode: "JKB-VIP-2026" },
      update: {
        customerName: "Dimas Wicaksono (VIP Demo)",
        guestEmail: "dimas.striker@gmail.com",
        customerPhone: "081234567890",
        amountPaid: 79000,
        status: "ACTIVE",
      },
      create: {
        accessCode: "JKB-VIP-2026",
        ppvId: vipProduct.id,
        customerName: "Dimas Wicaksono (VIP Demo)",
        guestEmail: "dimas.striker@gmail.com",
        customerPhone: "081234567890",
        amountPaid: 79000,
        paymentMethod: "QRIS",
        status: "ACTIVE",
        deviceLimit: 3,
      },
    });

    // 2. All-Access Pass for tester
    await prisma.entitlement.upsert({
      where: { accessCode: "JKB-PPV-DEMO88" },
      update: {
        customerName: "Siti Rahayu (All Access Demo)",
        guestEmail: "siti.jogjafan@gmail.com",
        customerPhone: "081898765432",
        amountPaid: 29000,
        status: "ACTIVE",
      },
      create: {
        accessCode: "JKB-PPV-DEMO88",
        ppvId: allAccessProduct.id,
        customerName: "Siti Rahayu (All Access Demo)",
        guestEmail: "siti.jogjafan@gmail.com",
        customerPhone: "081898765432",
        amountPaid: 29000,
        paymentMethod: "VIRTUAL_ACCOUNT",
        status: "ACTIVE",
        deviceLimit: 2,
      },
    });
  }

  console.log("✅ Development seed complete with Schedule, Lineup, Brackets, Creators, Merch, and PPV Products.");
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
