# JKB 2026 — V8 APPLICATION ROUTE MATRIX
## STATUS DAN HASIL AUDIT SELURUH RUTE APLIKASI (31 RUTE NEXT.JS)

> **Master Directive:** THE EVENT FIRST. THE USER FIRST.  
> **Arah Kreatif:** GLORY Kickboxing × We The Fest (#JOGJAPUNYANYALI • DI BALIK KALEM)

---

## 1. RUTE PUBLIK UTAMA (PUBLIC INFORMATION EXPERIENCE)

| Path | Tipe | Komposisi Desain & Referensi | Status Kompilasi | Verifikasi Responsif |
| :--- | :--- | :--- | :--- | :--- |
| `/` | Static | Arsitektur 4-Blok: Hero editorial ganda + Dua Jalur Festival + Panduan Kunjungan (Fever/EIF) + Ekosistem | ✅ 200 OK | ✅ 1440px & 390px Verified |
| `/jadwal` | Static | Formula 1 / Primavera Sound: Pemilih 1 tanggal (12/13/14 Des) + Timeline kronologis + Detail expandable | ✅ 200 OK | ✅ 1440px & 390px Verified |
| `/lineup` | Static | Lollapalooza / Primavera Sound: Penampil musik-first, status kurasi bersih, tanpa artis fiktif | ✅ 200 OK | ✅ 1440px & 390px Verified |
| `/championship` | Static | GLORY Kickboxing: 4 Sabuk Kejuaraan, regulasi K-1 sah, format 3x3 menit | ✅ 200 OK | ✅ 1440px & 390px Verified |
| `/bracket` | Static | Challonge / Toornament: Mobile pemilih ronde vertikal; Desktop diagram pohon eliminasi proporsional | ✅ 200 OK | ✅ 1440px & 390px Verified |
| `/fighters` | Dynamic | UFC Athletes / GLORY: Search-first, kartu profil atlet bersih tanpa statistik berlebih | ✅ 200 OK | ✅ 1440px & 390px Verified |
| `/fighters/[slug]`| Dynamic | ONE Championship: Identitas atlet diutamakan, potret autentik, divisi jelas, pengungkapan progresif statistik | ✅ 200 OK | ✅ 1440px & 390px Verified |
| `/tiket` | Static | Fever: Pengumuman ketersediaan jujur, venue GOR UNY, tanggal 12–14 Des, tanpa harga fiktif | ✅ 200 OK | ✅ 1440px & 390px Verified |
| `/venue` | Static | Panduan lokasi nyata GOR UNY Jl. Colombo No. 1, tautan Google Maps, akses transportasi publik | ✅ 200 OK | ✅ 1440px & 390px Verified |
| `/faq` | Static | Pusat bantuan terarah, akordeon interaktif, tanpa jam open gate rekaan | ✅ 200 OK | ✅ 1440px & 390px Verified |
| `/kontak` | Static | Sekretariat panitia pelaksana (telepon, email, IG), formulir kemitraan & pers | ✅ 200 OK | ✅ 1440px & 390px Verified |
| `/tentang` | Static | Manifesto Di Balik Kalem, narasi sportainment, visi kultur anak muda Jogja | ✅ 200 OK | ✅ 200 OK Verified |
| `/kebijakan-privasi` | Static | Dokumen hukum perlindungan data pengunjung platform digital | ✅ 200 OK | ✅ 200 OK Verified |
| `/syarat-ketentuan` | Static | Ketentuan akses tiket, keselamatan arena festival, aturan barang dilarang | ✅ 200 OK | ✅ 200 OK Verified |

---

## 2. RUTE KOMUNITAS & E-COMMERCE (COMMUNITY & COMMERCE)

| Path | Tipe | Komposisi Desain & Referensi | Status Kompilasi | Verifikasi Responsif |
| :--- | :--- | :--- | :--- | :--- |
| `/city-pride` | Dynamic | NBA All-Star: 3 kartu wilayah (Sleman, Bantul, Kota Jogja), alur 5-langkah terarah | ✅ 200 OK | ✅ 1440px & 390px Verified |
| `/creator` | Static | GoPro Awards: 3 langkah partisipasi konten, pendaftaran media & peliput | ✅ 200 OK | ✅ 1440px & 390px Verified |
| `/creator/dashboard` | Dynamic | Dashboard personal kreator: perolehan poin leaderboard, riwayat kurasi | ✅ 200 OK | ✅ 1440px & 390px Verified |
| `/merch` | Static | Shopify Dawn: Katalog apparel & peralatan tanding resmi, status stok & harga | ✅ 200 OK | ✅ 1440px & 390px Verified |
| `/merch/[slug]` | Dynamic | Detail produk: Pilihan varian ukuran, batas aman integrasi pembayaran resmi | ✅ 200 OK | ✅ 1440px & 390px Verified |
| `/checkout` | Static | Batas transaksi aman (Milestone 9A): Simulasi diisolasi ke staging | ✅ 200 OK | ✅ 200 OK Verified |
| `/checkout/success/[orderId]` | Dynamic | Konfirmasi pesanan dengan instruksi verifikasi pengambilan di GOR UNY | ✅ 200 OK | ✅ 200 OK Verified |
| `/ppv` | Static | Siaran digital terisolasi (unpromoted di UI publik utama, kode/keamanan utuh) | ✅ 200 OK | ✅ 200 OK Verified |
| `/ppv/watch` | Dynamic | Player PPV terproteksi hak akses pembayaran resmi | ✅ 200 OK | ✅ 200 OK Verified |

---

## 3. RUTE OPERASIONAL ADMINISTRATOR (ADMIN & BACKEND API)

| Path | Tipe | Komposisi Desain & Referensi | Status Kompilasi | Verifikasi Responsif |
| :--- | :--- | :--- | :--- | :--- |
| `/admin/login` | Static | Login terisolasi, styling produktivitas, tanpa mengekspos kredensial ke publik | ✅ 200 OK | ✅ 1440px & 390px Verified |
| `/admin` | Dynamic | Command Center: Ringkasan metrik operasional, drawer mobile, RBAC | ✅ 200 OK | ✅ 1440px & 390px Verified |
| `/admin/fighters` | Static | Manajemen atlet petarung, CRUD, tabel responsif horizontal-scroll | ✅ 200 OK | ✅ 1440px & 390px Verified |
| `/admin/matches` | Dynamic | Pengaturan jadwal laga & babak bagan turnamen | ✅ 200 OK | ✅ 200 OK Verified |
| `/admin/schedule` | Dynamic | CMS jadwal harian (Combat, Stage, Community) | ✅ 200 OK | ✅ 200 OK Verified |
| `/admin/lineup` | Dynamic | CMS musisi & stage festival | ✅ 200 OK | ✅ 200 OK Verified |
| `/admin/creators` | Static | Moderasi konten & persetujuan klaim tiket kreator | ✅ 200 OK | ✅ 200 OK Verified |
| `/admin/merch` | Static | Manajemen inventaris produk & varian merchandise | ✅ 200 OK | ✅ 200 OK Verified |
| `/admin/voting` | Dynamic | Monitoring perolehan suara City Pride | ✅ 200 OK | ✅ 200 OK Verified |
| `/admin/messages` | Dynamic | Inbox pesan masuk & formulir kontak kemitraan | ✅ 200 OK | ✅ 200 OK Verified |
| `/admin/ppv` | Static | Manajemen paket PPV (Draft/Published) | ✅ 200 OK | ✅ 200 OK Verified |
| `/api/auth/[...nextauth]` | Dynamic | NextAuth handler (Credentials provider) | ✅ 200 OK | Backend verified |
| `/api/vote` | Dynamic | API validasi dan pencatatan suara City Pride (anti-duplicate) | ✅ 200 OK | Backend verified |
| `/api/contact` | Dynamic | API formulir kontak masuk | ✅ 200 OK | Backend verified |
