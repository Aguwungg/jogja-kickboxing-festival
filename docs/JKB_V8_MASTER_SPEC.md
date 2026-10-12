# JKB 2026 — ULTIMATE MASTER SPECIFICATION V8
## TOTAL PUBLIC UI REBUILD
### REFERENCE-DRIVEN DESIGN SYSTEM × USER-FIRST ARCHITECTURE × FUNCTIONAL BACKEND PRESERVATION

> **Event Identity:** JOGJA KICKBOXING FESTIVAL & REDY CHAMPIONSHIP 2 (JKB 2026)  
> **Official Dates:** 12–14 Desember 2026  
> **Official Venue:** GOR UNY, Yogyakarta  
> **Campaign & Narrative:** #JOGJAPUNYANYALI • DI BALIK KALEM  
> **Creative Direction:** THE RING MEETS THE STAGE (Championship Kickboxing × Music Festival × Yogyakarta Youth Culture)

---

## 1. CORE PRODUCT PRINCIPLE

**THE EVENT FIRST. THE USER FIRST.**

JKB 2026 is a premium sports and music festival website, not a SaaS dashboard, not a corporate presentation, and not an AI-generated generic template.

Its primary mission:
1. Provide official, verified information about JKB 2026.
2. Help visitors immediately discover fights, music, schedules, and event experiences with minimum effort.
3. Facilitate future ticket and merchandise purchases through RAWOOH once official integration details are approved.

Target:
- Minimum effort required for first-time visitors to find facts and take action.
- Progressive disclosure: essential facts first, complexity revealed only when requested.
- Preserved backend business logic, Prisma models, NextAuth RBAC, and Milestone 9A safety gates.

---

## 2. OFFICIAL FACTUAL ANCHORS (CANONICAL)

- **Event Name:** JOGJA KICKBOXING FESTIVAL & REDY CHAMPIONSHIP 2
- **Brand:** JKB 2026
- **Dates:** 12–14 Desember 2026
- **Venue:** GOR UNY, Yogyakarta (Jl. Colombo No. 1, Sleman, D.I. Yogyakarta)
- **Timezone:** Asia/Jakarta (WIB)
- **Campaign:** #JOGJAPUNYANYALI
- **Narrative:** DI BALIK KALEM
- **Start Time:** Belum diumumkan secara resmi oleh komite. Dilarang mencantumkan jam buka fiktif atau countdown ke jam yang belum terkonfirmasi.
- **Commercial Partner:** RAWOOH (Tiket & Merchandise). Transaksi riil dinonaktifkan sampai kredensial dan dokumentasi resmi tersedia.
- **PPV Status:** Belum diputuskan secara komersial; kode dan data dilindungi namun tidak dipromosikan di navigasi publik utama.

---

## 3. REFERENCE-DRIVEN DESIGN ARCHITECTURE

Setiap modul publik dibangun menggunakan pola interaksi dan hierarki visual dari referensi kelas dunia:

| Modul | Referensi Kelas Dunia | Pola Interaksi & Hierarki yang Diadopsi |
| :--- | :--- | :--- |
| **Homepage** | Edinburgh International Festival (`eif.co.uk`) × GLORY × We The Fest | Komposisi editorial majalah festival, atmosfer pertarungan otentik, 4 blok terfokus (Hero, 2 Paths, Plan Visit, Explore More). |
| **Navigasi** | Coachella (`coachella.com`) | Header ramping, pemisahan jelas kategori esensial, tanpa menu bertingkat yang membingungkan. |
| **Jadwal** | Formula 1 (`formula1.com`) × Primavera Sound | 1 selector tanggal (12, 13, 14 Des), 1 timeline kronologis, detail dapat di-expand. |
| **Lineup Musik** | Lollapalooza (`lollapalooza.com`) × Primavera Sound | Presentasi *performer-first*, tipografi nama artis besar & berani, tanpa foto petarung di lineup musik. |
| **Fighter Center** | UFC Athletes (`ufc.com/athletes`) × GLORY Kickboxing | Pencarian utama di atas, kartu profil atlet bersih (foto, nama, klub, divisi), filter lanjutan collapsible. |
| **Profil Petarung** | ONE Championship (`onefc.com/athletes`) | Identitas atlet dominan, statistik dan rekor diungkap secara bertahap (*progressive disclosure*). |
| **Bagan Turnamen** | Challonge (`challonge.com`) × Toornament | Desktop: bagan pohon utuh. Mobile: Alur bertahap (Pilih Divisi → Pilih Ronde → Daftar Pertandingan). |
| **City Pride Voting** | NBA All-Star (`nba.com/allstar`) | Alur voting 5 langkah terfokus (Eksplanasi → Pilih Wilayah → Verifikasi → Vote → Hasil), tanpa leaderboard yang menutupi layar di awal. |
| **Creator Hub** | GoPro Awards (`gopro.com/awards`) | Alur partisipasi 3 langkah transparan, pemisahan jelas pendaftaran kreator dan akreditasi media massa, pisah dari dashboard akun internal. |
| **Merchandise** | Shopify Dawn Theme | Tampilan katalog produk bersih, foto produk fokus, indikator ketersediaan resmi, bebas dari badge lebay (*"HOT"*, *"BEST SELLER"* palsu). |
| **Tiket Masuk** | Fever (`feverup.com`) | Pengumuman resmi tiket yang jujur, fokus pada tanggal, tempat, dan panduan masuk tanpa membuat kuota atau harga fiktif. |
| **Admin Console** | Shopify Admin | Layout operasional efisien, sidebar responsif berubah menjadi drawer di mobile, tabel data mudah diakses. |

---

## 4. SISTEM DESAIN VISUAL V8

### Palet Warna
- **Deep Black:** `#101114` (Dasar utama gelap)
- **Charcoal:** `#171719` (Permukaan kartu dan kontainer)
- **Combat Red:** `#D91F2C` / `#EF3340` (Aksen dinamis dan CTA utama)
- **Warm White:** `#F5F3EE` (Kontras tinggi untuk blok panduan editorial)
- **Neutral Gray:** `#77747A` / `#9A9AA2` (Tipografi pendukung dan garis batas halus)
- **Warm Gold (Aksen):** `#E2BA75` (Khusus sabuk kejuaraan dan panggung musik)

### Tipografi
- **Display Headings:** `Barlow Condensed` (Gaya atletis, berbobot, tajam, proporsional)
- **Body & Controls:** `Inter` (Sans-serif berkejelasan tinggi, mudah dibaca di mobile dan tabel data)

### Tata Letak & Spasi
- Menghindari pemaksaan `min-height: 100vh` di setiap section.
- Tinggi section ditentukan oleh kepadatan informasi yang berguna.
- Kontras visual yang sehat antara latar gelap (`#101114`) dan aksen latar cerah editorial (`#F5F3EE`).

---

## 5. BATASAN TEKNIS & KEAMANAN

1. Dilarang mereset database SQLite (`prisma/dev.db`) atau menghapus akun pengguna yang ada.
2. Dilarang menghapus proteksi RBAC NextAuth (`/admin/*`).
3. Dilarang membuat checkout atau pembayaran riil palsu (Midtrans simulator hanya untuk lingkungan staging).
4. Menjaga seluruh pengujian Milestone 9A (`scripts/test-commercial-safety.ts`) selalu lolos 11/11.
5. Menjaga build Next.js (`npm run build`) dan kompilasi TypeScript (`npx tsc --noEmit`) 100% bebas error.
