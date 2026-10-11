# Route Functionality Matrix — JKB 2026

*Updated: 2026-10-11 (Milestone 5 Complete)*

| Route | Purpose | UI | Backend | Database | Test | Status |
|---|---|---|---|---|---|---|
| `/` | Homepage (The Ring Meets The Stage) | Done | Done | Prisma (Athletes & Merch) | Verified (1440px & 390px) | **VERIFIED IN DEVELOPMENT** |
| `/tentang` | Manifesto Sportainment & Pilar Acara | Done | N/A | Static Rich Content | Verified (1440px & 390px) | **VERIFIED IN DEVELOPMENT** |
| `/jadwal` | Rundown 3 Hari & Filter Kategori | Done | Done | Prisma (`ScheduleItem`) | Verified (1440px & 390px) | **VERIFIED IN DEVELOPMENT** |
| `/lineup` | Lineup Musik & Pengalaman Festival | Done | Done | Prisma (`Performer`) | Verified (1440px & 390px) | **VERIFIED IN DEVELOPMENT** |
| `/fighters` | Fighters Directory & Filter Divisi | Done | Done | Prisma (`Athlete`) | Verified (1440px & 390px) | **VERIFIED IN DEVELOPMENT** |
| `/fighters/[slug]` | Tale of the Tape & Profil Atlet | Done | Done | Prisma (`Athlete`) | Verified (1440px & 390px) | **VERIFIED IN DEVELOPMENT** |
| `/city-pride` | Voting Wilayah & Leaderboard | Done | Done | Prisma (`VotingCampaign`, `Vote`) | Verified (1440px & 390px) | **VERIFIED IN DEVELOPMENT** |
| `/venue` | Panduan Denah GOR Among Rogo & Akses | Done | N/A | Static Rich Content | Verified (1440px) | **VERIFIED IN DEVELOPMENT** |
| `/faq` | Pusat Bantuan & Accordion Interaktif | Done | Done | Client Search & Filter | Verified (1440px) | **VERIFIED IN DEVELOPMENT** |
| `/kontak` | Formulir Inquiry & Kontak Sekretariat | Done | Done | Prisma (`ContactMessage`) | Verified (1440px & API Tested) | **VERIFIED IN DEVELOPMENT** |
| `/kebijakan-privasi` | Kebijakan Privasi Resmi (UU PDP) | Done | N/A | Static Rich Content | Verified | **VERIFIED IN DEVELOPMENT** |
| `/syarat-ketentuan` | Syarat & Ketentuan Penyelenggaraan | Done | N/A | Static Rich Content | Verified | **VERIFIED IN DEVELOPMENT** |
| `/admin/login` | Portal Autentikasi Admin | Done | Done | NextAuth Credentials & bcrypt | Verified (1440px) | **VERIFIED IN DEVELOPMENT** |
| `/admin` | Command Center Overview | Done | Done | Prisma (Semua Metrik Entitas) | Verified (1440px) | **VERIFIED IN DEVELOPMENT** |
| `/admin/fighters` | Manajemen Atlet & Status Publikasi | Done | Done | Prisma (`Athlete` Actions) | Verified (1440px) | **VERIFIED IN DEVELOPMENT** |
| `/admin/fighters/new` | Formulir Tambah Atlet Baru | Done | Done | Server Action DB Insert | Verified (1440px) | **VERIFIED IN DEVELOPMENT** |
| `/admin/schedule` | Manajemen Jadwal & Slot Waktu | Done | Done | Prisma (`ScheduleItem` Actions) | Verified (1440px) | **VERIFIED IN DEVELOPMENT** |
| `/admin/lineup` | Manajemen Penampil Musik | Done | Done | Prisma (`Performer` Actions) | Verified (1440px) | **VERIFIED IN DEVELOPMENT** |
| `/admin/messages` | Inbox Pesan Kontak Publik | Done | Done | Prisma (`ContactMessage` Actions) | Verified (1440px) | **VERIFIED IN DEVELOPMENT** |
| `/admin/voting` | Kontrol & Audit Voting City Pride | Done | Done | Prisma (`VotingCampaign`, `Vote`) | Verified (1440px) | **VERIFIED IN DEVELOPMENT** |
| `/admin/matches` | Operator Laga & Kontrol Bracket | Done | Done | Prisma (`Match`, `Tournament`) | Verified (1440px) | **VERIFIED IN DEVELOPMENT** |
| `/admin/creators` | Moderasi Creator & Akreditasi Media | Done | Done | Prisma (`CreatorProfile`, `Submission`, `MediaAccreditation`) | Verified (1440px) | **VERIFIED IN DEVELOPMENT** |
| `/championship` | Redy Championship 2 & Divisi Resmi | Done | Done | Static Rich / Prisma Link | Verified (1440px & 390px) | **VERIFIED IN DEVELOPMENT** |
| `/bracket` | Live Bracket Pohon Turnamen | Done | Done | Prisma (`Tournament`, `Match`, `Athlete`) | Verified (1440px & 390px) | **VERIFIED IN DEVELOPMENT** |
| `/creator` | Creator Hub & Media Accreditation | Done | Done | Prisma (`CreatorProfile`, `Submission`, `MediaAccreditation`) | Verified (1440px & 390px) | **VERIFIED IN DEVELOPMENT** |
| `/creator/dashboard` | Portal Personal Kreator & Poin | Done | Done | Prisma (`CreatorProfile`, `Submission`, `BarcodeClaim`) | Verified (1440px & 390px) | **VERIFIED IN DEVELOPMENT** |
| `/merch` | Official Merch Store & Catalog | Done | Done | Prisma (`Product`, `ProductVariant`) | Verified (1440px & 390px) | **VERIFIED IN DEVELOPMENT** |
| `/merch/[slug]` | Product Showcase & Size Variant Selector | Done | Done | Prisma (`Product`, `ProductVariant`) | Verified (1440px & 390px) | **VERIFIED IN DEVELOPMENT** |
| `/checkout` | Checkout Flow (Pick-Up vs Ekspedisi & Midtrans) | Done | Done | Server Action & Prisma Transaction | Verified (1440px) | **VERIFIED IN DEVELOPMENT** |
| `/checkout/success/[orderId]` | E-Receipt & Barcode Klaim Pick-Up | Done | Done | Prisma (`Order`, `OrderItem`) | Verified (1440px) | **VERIFIED IN DEVELOPMENT** |
| `/admin/merch` | Manajemen Merchandise & Fulfillment Order | Done | Done | Prisma (`Product`, `ProductVariant`, `Order`) | Verified (1440px) | **VERIFIED IN DEVELOPMENT** |
| `/ppv` | Official Pay-Per-View Landing & Tier Packages | Done | Done | Prisma (`PPVProduct`) | Verified (1440px & 390px) | **VERIFIED IN DEVELOPMENT** |
| `/ppv/watch` | Live Stream Player Console (Multi-Cam & Chat) | Done | Done | Prisma (`Entitlement`, `PPVProduct`) | Verified (1440px & 390px) | **VERIFIED IN DEVELOPMENT** |
| `/admin/ppv` | Manajemen Broadcast & Entitlement PPV | Done | Done | Prisma (`Entitlement`, `PPVProduct`) | Verified (1440px) | **VERIFIED IN DEVELOPMENT** |
