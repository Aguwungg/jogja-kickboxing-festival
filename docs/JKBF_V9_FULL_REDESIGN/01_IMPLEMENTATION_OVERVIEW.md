# JKBF V9 — TOTAL PUBLIC FRONTEND REDESIGN
## 01. IMPLEMENTATION OVERVIEW & EXECUTIVE SUMMARY

---

### 1. RINGKASAN EKSEKUTIF PROYEK

| Parameter | Detail Implementasi |
| :--- | :--- |
| **Proyek** | Jogja Kickboxing Festival & Redy Championship 2 (JKBF 2026) |
| **Arah Desain** | **FIGHT CULTURE EDITORIAL — CLEAN CUT** |
| **Formula Kreatif** | 70% Underground Fight Editorial + 20% Premium Minimalist Clarity + 10% Music Festival Expression |
| **Status Versi** | **V9 Production Candidate (Redesign Total Frontend Publik)** |
| **Branch Git** | `redesign/v9-fight-culture-editorial` |
| **Cakupan Rute** | **Seluruh 23 Rute Publik Next.js App Router** (100% Lengkap) |
| **Tanggal Acara Resmi** | **12—14 Desember 2026** (Sabtu, Minggu, Senin) |
| **Lokasi Resmi** | **GOR UNY (Gelanggang Olahraga Universitas Negeri Yogyakarta)** |
| **Identitas Kampanye** | `#JOGJAPUNYANYALI` • `DI BALIK KALEM.` |
| **Hasil Build** | `Compiled successfully in 2.4s` • `TypeScript 0 errors` |
| **Keamanan Komersial** | `11/11 Safety Gates Passed` (Pembayaran live & PPV tetap terkunci aman) |

---

### 2. LATAR BELAKANG & ALASAN REDESIGN TOTAL DARI V8 KE V9

Antarmuka lama (V8) ditolak secara definitif oleh pemilik proyek karena beberapa masalah sistemik mendasar:
1. **Homogenitas Ekstrem & Pola Dashboard SaaS:** Hampir setiap bagian dibungkus kartu gelap berulang (`dark cards`), sudut rounded berlebihan, garis neon glow, dan badge dekoratif yang membuat situs festival terasa seperti dashboard aplikasi enterprise.
2. **Navigasi Mobile yang Membingungkan:** Menu mobile lama terlalu panjang dan bertingkat tanpa hierarki yang jelas.
3. **Penyajian Data Demo yang Merusak Kredibilitas:** Laga simulasi, skor palsu, dan status draft dipresentasikan seolah-olah data resmi.
4. **Kehilangan Jiwa Budaya Tarung dan Musik:** Tidak adanya kontras visual yang kuat antara intensitas pertarungan kickboxing (*The Ring*), energi konser musik anak muda (*The Stage*), dan gerakan kebanggaan kota (*The City*).

Pada versi **V9**, arsitektur visual direkonstruksi total dari nol berlandaskan paket visual resmi:
- `00_MASTER_REFERENSI_DESAIN_V9.png`
- `01_UI_ACUAN_DESKTOP.png`
- `02_UI_ACUAN_MOBILE.png`
- `03_UI_ACUAN_FITUR_LAIN.png`
- Aset fotografi beresolusi tinggi tanpa teks (`04_FOTO_FIGHT_DESKTOP_TANPA_TEKST.png`, `05_FOTO_FIGHT_MOBILE_TANPA_TEKST.png`, dan `06_FOTO_KONSER_PLACEHOLDER_INTERNAL.png`).

---

### 3. FASE BATCH IMPLEMENTASI YANG DISELESAIKAN

Semua batch diselesaikan secara berurutan tanpa berhenti di tengah jalan:

- **BATCH 0 — Safety Checkpoint & Branching:**
  - Pembuatan branch terisolasi `redesign/v9-fight-culture-editorial`.
  - Verifikasi integritas database `prisma/dev.db`, audit keamanan komersial Fase 2A, dan pengamanan kredensial.
  - Penempatan aset visual acuan di `public/images/v9/`.

- **BATCH 1 — Complete Design Foundation:**
  - Token warna resmi V9: Deep Black (`#0B0B0B`), Warm Ivory (`#F4F0E8`), Brand Red (`#D91F2C`), Film Grey (`#8F8E8B`), Charcoal (`#141416`).
  - Tipografi Display: `Barlow Condensed` (weight 800-900) dengan tracking rapat dan uppercase agresif.
  - Tipografi Body: `Inter` untuk kenyamanan membaca optimal.
  - Redesign total `Navbar.tsx` (Logo `JKBF`, menu direct `JADWAL`, `PERTANDINGAN`, `MUSIK`, `MERCH`, dropdown `LAINNYA`, dan tombol `INFO TIKET ↗`).
  - Redesign total `Footer.tsx` (Editorial footer tanpa widget dashboard, kolom navigasi terstruktur, manifesto `#JOGJAPUNYANYALI`).

- **BATCH 2 — Core Event Experience (9 Rute):**
  - `/` — Homepage (Master asymmetric editorial hero desktop + standalone vertical mobile hero, split atmosphere Ring vs Stage, 3-day timetable overview, City Pride & Creator highlight, venue callout).
  - `/championship` — Kejuaraan Redy Championship 2 (Pre-event matchup showcase, 4 divisi berat resmi, regulasi K-1 Rules).
  - `/fighters` — Roster atlet kickboxing (Search bar responsif, filter divisi, tale of the tape preview, verifikasi pra-weigh in).
  - `/fighters/[slug]` — Detail petarung (Tale of the tape lengkap: W-L-D record, sasana, bobot, petarung terkait).
  - `/bracket` — Bagan turnamen eliminasi gugur (Bagan pohon desktop per divisi + round switcher mobile).
  - `/lineup` — Lineup panggung musik festival (Backdrop konser, teaser kurasi musisi terverifikasi).
  - `/jadwal` — Rundown 3 hari (Tab switch 12, 13, 14 Des 2026, pemisahan kategori COMBAT vs STAGE).
  - `/venue` — Panduan GOR UNY (Alamat, koordinat, opsi transportasi KRL/Bus/Online, tata tertib arena).
  - `/tiket` — Informasi tiket resmi (Kategori kursi Ringside/Tribun/3-Day Pass, integrasi pengumuman portal RAWOOH).

- **BATCH 3 — Community & Commerce Experience (8 Rute):**
  - `/city-pride` — Gerakan komunitas pemuda D.I. Yogyakarta (Voting Bantul, Sleman, Kota Jogja dengan proteksi 1 akun 1 suara).
  - `/creator` — Creator Hub (Formulir registrasi kreator konten dan akreditasi pers peliput).
  - `/creator/dashboard` — Dashboard personal kreator (Monitoring submisi video, perolehan poin, dan klaim tiket promosi).
  - `/merch` — Toko apparel dan perlengkapan tanding resmi (Katalog produk product-first streetwear).
  - `/merch/[slug]` — Detail produk merchandise (Pilihan ukuran, selector quantity, integrasi cart context).
  - `/checkout` — Alur checkout aman (Data pemesan, pilihan pick-up GOR UNY vs ekspedisi JNE/J&T, ringkasan biaya transparan).
  - `/checkout/success/[orderId]` — E-Receipt bukti pesanan resmi (Cetak struk, detail pesanan, simulator staging).
  - `/ppv` — Halaman landing pay-per-view (Status hak siar pending, form input kode akses siaran).
  - `/ppv/watch` — Ruang siaran langsung arena (Player video simulation, multi-kamera feed, live commentary status).

- **BATCH 4 — Information & Policy Pages (5 Rute):**
  - `/tentang` — Narasi editorial mendalam *Di Balik Kalem* dan *3 Pilar Pengalaman*.
  - `/faq` — Tanya jawab pengunjung terkelompok (Tiket, Arena, Musik, Keselamatan).
  - `/kontak` — Hubungi panitia pelaksana (Formulir inquiry, alamat sekretariat GOR UNY, kanal resmi).
  - `/syarat-ketentuan` — Dokumen hukum dan tata tertib penonton resmi.
  - `/kebijakan-privasi` — Kepatuhan pelindungan data pribadi (UU No. 27 Tahun 2022 PDP).

- **BATCH 5 — Full QA & Verifikasi Visual:**
  - Screenshot aktual desktop (1440px) dan mobile (390px) pada seluruh 23 rute menggunakan headless Chrome automation.
  - Eksekusi `npm run build` (32 rute sukses terkompilasi tanpa error).
  - Pengujian rangkaian `scripts/test-commercial-safety.ts` (11/11 pengujian lolos).

---

### 4. GARANSI KEAMANAN SISTEM & DATA (NON-NEGOTIABLES)

1. **Dashboard Admin (`/admin/*`) & Autentikasi Utuh:** Tidak ada perubahan pada antarmuka admin, sesi NextAuth, role RBAC, dan logika manajemen.
2. **Database Bersih:** Tidak ada mutasi atau perubahan skema pada `prisma/schema.prisma` dan database SQLite `prisma/dev.db`.
3. **Pembayaran Live Tetap Terkunci:** Pembayaran live gateway tetap dinonaktifkan (menunggu approval formal & aktivasi kredensial resmi).
4. **PPV Tetap Terkunci:** Hak siar dan streaming berbayar tidak diaktifkan secara prematur.
5. **Zero Deployment:** Tidak ada push atau merge otomatis ke branch produksi `main`. Seluruh hasil pekerjaan tersimpan rapi pada branch `redesign/v9-fight-culture-editorial`.
