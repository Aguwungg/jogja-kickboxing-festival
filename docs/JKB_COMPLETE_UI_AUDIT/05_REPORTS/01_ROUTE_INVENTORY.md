# JKB 2026 — COMPLETE ROUTE INVENTORY
## INVENTARISASI RUTE APLIKASI DAN STATUS DOKUMENTASI VISUAL

**Target Audit**: Jogja Kickboxing Festival & Redy Championship 2 (JKB 2026)  
**Waktu Audit**: 13 Oktober 2026  
**Total Rute Teridentifikasi**: 35 Rute UI (23 Halaman Publik + 12 Modul Admin) + 3 API Endpoints  
**Status Dokumentasi Visual**: 100% Tercakup (35/35 Rute Berhasil Dikunjungi dan Didokumentasikan)  

---

### 1. RUTE PUBLIK (PUBLIC ROUTES)

| No | Path Rute | Judul Halaman / Komponen | Tipe Akses | Parameter Dinamis | Status Ketersediaan | Cakupan Screenshot |
|---|---|---|---|---|---|---|
| 01 | `/` | Beranda (Homepage) | Public | - | Available (HTTP 200) | ✅ Desktop (First/Full), Mobile (First/Full), Tablet, Small Mobile |
| 02 | `/jadwal` | Jadwal Acara & Rundown Festival | Public | - | Available (HTTP 200) | ✅ Desktop (First/Full/Day2/Day3/Expanded), Mobile (First/Full), Small Mobile |
| 03 | `/fighters` | Direktori Petarung (Roster) | Public | - | Available (HTTP 200) | ✅ Desktop (First/Full/Search/Filter/Empty), Mobile (First/Full) |
| 04 | `/fighters/[slug]` | Profil Atlet Kickboxing | Public | `slug = fighter-demo-01` | Available (HTTP 200) | ✅ Desktop (First/Full), Mobile (First/Full) |
| 05 | `/championship` | Kejuaraan Redy Championship 2 | Public | - | Available (HTTP 200) | ✅ Desktop (First/Full), Mobile (First/Full) |
| 06 | `/bracket` | Pohon Turnamen (Live Bracket) | Public | - | Available (HTTP 200) | ✅ Desktop (First/Full), Mobile (First/Full/Round Switch), Tablet |
| 07 | `/lineup` | Lineup Musik & Panggung Festival | Public | - | Available (HTTP 200) | ✅ Desktop (First/Full), Mobile (First/Full) |
| 08 | `/city-pride` | City Pride Community Voting | Public | - | Available (HTTP 200) | ✅ Desktop (First/Full/Region Selected), Mobile (First/Full) |
| 09 | `/creator` | Creator Hub & Akreditasi Media | Public | - | Available (HTTP 200) | ✅ Desktop (First/Full/Media Tab), Mobile (First/Full) |
| 10 | `/creator/dashboard` | Dashboard Personal Kreator | Public / Auth Guarded | - | Available (HTTP 200) | ✅ Desktop (First/Full), Mobile (First/Full) |
| 11 | `/merch` | Katalog Official Merchandise | Public | - | Available (HTTP 200) | ✅ Desktop (First/Full), Mobile (First/Full) |
| 12 | `/merch/[slug]` | Detail Produk Merchandise | Public | `slug = jkb-tee-black` | Available (HTTP 200) | ✅ Desktop (First/Full/Variant Selected), Mobile (First/Full) |
| 13 | `/tiket` | Informasi Tiket Resmi | Public | - | Available (HTTP 200) | ✅ Desktop (First/Full), Mobile (First/Full) |
| 14 | `/venue` | Panduan Lokasi & Venue GOR UNY | Public | - | Available (HTTP 200) | ✅ Desktop (First/Full), Mobile (First/Full) |
| 15 | `/tentang` | Tentang Festival & Manifesto | Public | - | Available (HTTP 200) | ✅ Desktop (First/Full), Mobile (First/Full) |
| 16 | `/faq` | Tanya Jawab Resmi (FAQ) | Public | - | Available (HTTP 200) | ✅ Desktop (First/Full/Accordion Opened), Mobile (First/Full) |
| 17 | `/kontak` | Kontak & Sekretariat | Public | - | Available (HTTP 200) | ✅ Desktop (First/Full), Mobile (First/Full) |
| 18 | `/syarat-ketentuan` | Syarat & Ketentuan | Public | - | Available (HTTP 200) | ✅ Desktop (First/Full), Mobile (First/Full) |
| 19 | `/kebijakan-privasi` | Kebijakan Privasi | Public | - | Available (HTTP 200) | ✅ Desktop (First/Full), Mobile (First/Full) |
| 20 | `/checkout` | Checkout Merchandise | Public | - | Available (HTTP 200) | ✅ Desktop (First/Full), Mobile (First/Full) |
| 21 | `/checkout/success/[orderId]` | Resi Konfirmasi Pesanan | Public | `orderId = cmv3vsisx000ejbo8u2fwp0zo` | Available (HTTP 200) | ✅ Desktop (First/Full), Mobile (First/Full) |
| 22 | `/ppv` | Pay-Per-View Live Streaming | Public | - | Available (HTTP 200) | ✅ Desktop (First/Full), Mobile (First/Full) |
| 23 | `/ppv/watch` | Ruang Siaran Langsung (Player) | Public / Pass Guarded | - | Available (HTTP 200) | ✅ Desktop (First/Full), Mobile (First/Full) |

---

### 2. RUTE ADMINISTRASI & TERAUTENTIKASI (ADMIN & AUTH ROUTES)

| No | Path Rute | Judul Modul | Tipe Akses | Status Autentikasi | Status Ketersediaan | Cakupan Screenshot |
|---|---|---|---|---|---|---|
| 24 | `/admin/login` | Portal Masuk Command Center | Public Auth | Unauthenticated | Available (HTTP 200) | ✅ Desktop & Mobile (Login Portal) |
| 25 | `/admin` | Ringkasan Command Center (Dashboard) | Admin (RBAC) | Authenticated (SUPER_ADMIN) | Available (HTTP 200) | ✅ Desktop & Mobile + Mobile Drawer |
| 26 | `/admin/fighters` | Manajemen Data Atlet | Admin (RBAC) | Authenticated (SUPER_ADMIN) | Available (HTTP 200) | ✅ Desktop & Mobile (Tabel Atlet) |
| 27 | `/admin/fighters/new` | Formulir Pendaftaran Atlet Baru | Admin (RBAC) | Authenticated (SUPER_ADMIN) | Available (HTTP 200) | ✅ Desktop & Mobile (Form Entri) |
| 28 | `/admin/schedule` | Manajemen Jadwal & Agenda | Admin (RBAC) | Authenticated (SUPER_ADMIN) | Available (HTTP 200) | ✅ Desktop & Mobile (Tabel Rundown) |
| 29 | `/admin/matches` | Manajemen Pertandingan & Bracket | Admin (RBAC) | Authenticated (SUPER_ADMIN) | Available (HTTP 200) | ✅ Desktop & Mobile (Daftar Laga) |
| 30 | `/admin/lineup` | Manajemen Penampil Musik | Admin (RBAC) | Authenticated (SUPER_ADMIN) | Available (HTTP 200) | ✅ Desktop & Mobile (Daftar Artis) |
| 31 | `/admin/voting` | Analitik Suara City Pride | Admin (RBAC) | Authenticated (SUPER_ADMIN) | Available (HTTP 200) | ✅ Desktop & Mobile (Statistik Suara) |
| 32 | `/admin/creators` | Moderasi Kreator & Media | Admin (RBAC) | Authenticated (SUPER_ADMIN) | Available (HTTP 200) | ✅ Desktop & Mobile (Tabel Moderasi) |
| 33 | `/admin/merch` | Manajemen Merchandise & Order | Admin (RBAC) | Authenticated (SUPER_ADMIN) | Available (HTTP 200) | ✅ Desktop & Mobile (Katalog & Pesanan) |
| 34 | `/admin/messages` | Kotak Masuk Pesan Masuk | Admin (RBAC) | Authenticated (SUPER_ADMIN) | Available (HTTP 200) | ✅ Desktop & Mobile (Tabel Pesan) |
| 35 | `/admin/ppv` | Manajemen Paket & Tiket PPV | Admin (RBAC) | Authenticated (SUPER_ADMIN) | Available (HTTP 200) | ✅ Desktop & Mobile (Tabel Pass PPV) |

---

### 3. RUTE API (BACKEND ENDPOINTS)

| Path Endpoint | Metode | Fungsi Sistem | Tipe Respon |
|---|---|---|---|
| `/api/vote` | POST | Transaksi pencatatan suara City Pride anti-abuse | JSON `{ success, message, totalVotes }` |
| `/api/contact` | POST | Penyerahan formulir kontak publik ke database `ContactMessage` | JSON `{ success, message }` |
| `/api/auth/[...nextauth]` | GET/POST | Penanganan sesi otentikasi Credentials NextAuth & JWT callback | Session Cookie & JSON |
