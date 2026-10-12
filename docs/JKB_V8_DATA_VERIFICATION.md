# JKB 2026 — LAPORAN VERIFIKASI DATA & KLARIFIKASI KLAIM PUBLIK V8

**Dokumen**: Laporan Faktual Verifikasi Integritas Data & Evaluasi Klaim Publik  
**Target Proyek**: Jogja Kickboxing Festival & Redy Championship 2 (JKB 2026)  
**Tanggal Verifikasi**: 12 Oktober 2026  
**Status**: SELESAI — DATA SEED TERPETAKAN, STATUS SIMULASI DIPERTAHANKAN, MENUNGGU EVALUASI VISUAL PEMILIK PROYEK  

---

## 1. RINGKASAN EKSEKUTIF

Sesuai instruksi pemilik proyek, sebelum melakukan perubahan kode atau menerapkan rekomendasi dari laporan visual audit V8, dilakukan verifikasi independen dan ketat terhadap integritas data, keaslian konten, dan status persetujuan klaim publik pada aplikasi JKB 2026.

**Prinsip Kunci yang Ditegakkan:**
- **Zero Modification Policy**: Tidak ada perubahan yang dilakukan pada backend, skema database (`prisma/schema.prisma`), database runtime (`prisma/dev.db`), maupun konfigurasi acara (`src/lib/event-config.ts`).
- **Integritas Pra-Produksi**: Data uji coba (development seed) tidak boleh disamarkan sebagai data resmi komisi pertandingan. Label "Simulasi" tidak boleh dinaikkan menjadi "Resmi" tanpa bukti verifikasi resmi dari panitia pelaksana/promotor.
- **Transparansi Klaim Publik**: Seluruh klaim komersial, hadiah, kuota, atau hak istimewa yang belum disahkan oleh Event Organizer (EO) dipetakan secara jujur sebagai **BELUM TERVERIFIKASI**.

---

## 2. HASIL VERIFIKASI BUTIR DEMI BUTIR

### Butir 1: Status Label "Simulasi" vs "Resmi" pada Data Pertandingan & Atlet

* **Instruksi**: *Jangan mengubah data atau label "Simulasi" menjadi "Resmi" tanpa data pertandingan yang benar-benar terverifikasi.*
* **Hasil Investigasi Kode & Database**:
  - Pada halaman detail atlet (`src/app/(public)/fighters/[slug]/page.tsx`), terdapat label:
    - `Rasio Pertandingan Simulasi` (Line 128)
    - `Status Data: Simulasi Staging` (Line 192, berbasis kondisi `isDemo`)
  - Seluruh 8 profil atlet saat ini (`Fighter Demo 01` s/d `Fighter Demo 08` pada `prisma/seed.ts`) adalah **fixtures sintesis untuk pengujian antarmuka**. Rekor menang/kalah (misal: 12-1-0, 8-2-0) adalah angka acak development dan **BUKAN** rekor profesional resmi yang disahkan oleh badan/komisi kickboxing mana pun.
* **Kesimpulan & Sikap**:
  - Label **"Simulasi" WAJIB DIPERTAHANKAN**.
  - Mengubah label ini menjadi "Resmi" adalah tindakan pemalsuan data atlet pra-produksi dan melanggar prinsip kepatuhan. Data hanya boleh dilabeli "Resmi" setelah komite kejuaraan mengunggah berkas sertifikasi atlet resmi.

---

### Butir 2: Klaim Hadiah, Akses Eksklusif, dan Keuntungan Creator Hub

* **Instruksi**: *Jangan menambahkan klaim hadiah, akses eksklusif, atau keuntungan Creator Hub tanpa persetujuan EO.*
* **Hasil Investigasi Kode**:
  - Pada hero `src/app/(public)/creator/page.tsx` (Line 62) ditemukan narasi copywriting awal:
    > *"Raih akses ringside eksklusif, klaim tiket harian gratis lewat konten viral, dan rebut hadiah leaderboard jutaan rupiah bersama JKB 2026."*
  - Pada `src/components/creator/CreatorClient.tsx` (Line 153) tercantum narasi:
    > *"Kreator dengan konten terverifikasi komite akan mendapatkan ID pass peliputan resmi ringside GOR UNY."*
* **Status Persetujuan EO**:
  - **Hadiah Leaderboard Jutaan Rupiah**: **BELUM TERVERIFIKASI (UNAPPROVED)**. Tidak ada SK panitia pelaksana maupun alokasi anggaran hadiah tunai untuk kreator.
  - **Akses Ringside Eksklusif**: **BELUM TERVERIFIKASI (UNAPPROVED)**. Kapasitas area ringside GOR UNY sangat terbatas untuk keselamatan dan regulasi ring (hanya dokter ring, ofisial, dan tim siaran utama).
  - **Tiket Harian Gratis via Konten Viral**: **BELUM TERVERIFIKASI (UNAPPROVED)**. Belum ada kuota alokasi tiket komplementer yang disepakati bersama vendor tiket RAWOOH.
* **Kesimpulan & Sikap**:
  - Klaim hadiah dan akses eksklusif tidak boleh dipromosikan atau ditambahkan lebih lanjut.
  - Narasi ini dicatat dalam laporan audit sebagai poin yang harus disederhanakan/dihapus pada iterasi teks berikutnya setelah persetujuan pemilik proyek.

---

### Butir 3: Audit Asal-Usul Data (Data Resmi vs Data Development Seed)

* **Instruksi**: *Periksa apakah jumlah divisi, wilayah City Pride, peserta, produk merchandise, dan ukuran produk berasal dari data resmi atau data development.*

| Elemen Data | Implementasi Saat Ini di Kode/DB | Asal-Usul Data | Status & Penjelasan Faktual |
| :--- | :--- | :---: | :--- |
| **Jumlah Divisi** | 4 Divisi: Bantamweight (57.0kg), Featherweight (60.0kg), Lightweight (63.5kg), Welterweight (70.0kg) | **Data Development / Spesifikasi Provisional** | Nama kategori mengacu pada konvensi standar K-1, namun jumlah divisi kejuaraan, berat timbang batas, dan perebutan sabuk resmi Redy Championship 2 belum disahkan melalui regulasi teknis promotor resmi. |
| **Wilayah City Pride** | 3 Wilayah: `BANTUL`, `SLEMAN`, `KOTA_JOGJA` (`CityPrideClient.tsx`) | **Data Development (Mock 3 Wilayah)** | Mengabaikan Kulon Progo dan Gunungkidul. Dibuat hanya untuk prototipe persaingan 3 arah di frontend. Belum ada keputusan komite apakah cakupan voting hanya 3 wilayah atau seluruh DIY. |
| **Peserta (Athletes)** | 8 Petarung: `fighter-demo-01` s/d `fighter-demo-08` | **100% Data Development Seed** | Profil fiktif dengan foto stok dan data rekor sintetis. Belum ada pendaftaran atlet resmi yang diverifikasi panitia. |
| **Produk Merchandise** | 4 Produk: Kaos (Rp 199k), Handwrap (Rp 89k), Hoodie (Rp 349k), Sarung Tinju (Rp 489k) | **Data Development (Mock Katalog)** | Dibuat untuk validasi alur keranjang belanja, checkout, dan inventaris. Katalog merchandise resmi festival menunggu rilis katalog resmi bersama RAWOOH. |
| **Ukuran Produk** | Kaos (S, M, L, XL, XXL), Handwrap (All Size), Hoodie (M, L, XL), Sarung Tinju (12oz, 14oz) | **Data Development (Mock Varian)** | Ukuran di-seed untuk memverifikasi fungsionalitas pemilihan varian SKU di React context dan skema database `ProductVariant`. |

---

### Butir 4: Pengalaman Halaman Championship (`/championship`) vs Fight Card Nyata

* **Instruksi**: *Pastikan halaman Championship benar-benar menyediakan pengalaman melihat fight card, bukan sekadar informasi divisi dan regulasi.*
* **Hasil Penelusuran Arsitektur Halaman**:
  - Halaman `src/app/(public)/championship/page.tsx` saat ini **HANYA** menyajikan:
    1. Hero banner dengan tombol tautan ke `/bracket` dan `/fighters`.
    2. Ringkasan 4 divisi berat badan (kartu deskripsi batas timbang badan).
    3. 4 kartu regulasi aturan tanding K-1 (format ronde, teknik legal, sistem 10-point must, knockdown).
    4. Banner ajakan bertindak (CTA) menuju `/bracket`.
  - **Kelemahan Fungsional Ditemukan**: Di baris 62-66 file tersebut, kode memanggil `prisma.athlete.findMany({ take: 4 })`, namun data petarung tersebut **sama sekali tidak dirender** di antarmuka!
  - Halaman ini **TIDAK MENAMPILKAN FIGHT CARD** (tidak ada pasangan partai tanding: Sudut Merah vs Sudut Biru, urutan partai laga, jadwal jam bertanding, maupun status hasil laga).
  - Pengalaman melihat pasangan pertandingan yang sebenarnya justru berada di halaman `/bracket` (`src/app/(public)/bracket/page.tsx` dan `BracketClient.tsx`), di mana terdapat pemilih ronde (Semifinal / Final) dan kartu partai laga berpasangan.
* **Kesimpulan & Rekomendasi**:
  - Pengamatan pemilik proyek 100% akurat: Pengunjung yang membuka menu "Kejuaraan / Pertandingan" (`/championship`) saat ini hanya disodori teori divisi dan regulasi tanpa tahu siapa melawan siapa.
  - Untuk menciptakan pengalaman *Authentic Fight Card Experience*, halaman `/championship` perlu diintegrasikan dengan komponen feed laga berpasangan (Bout Card: Sudut Merah vs Sudut Biru + Status + Jadwal Laga), atau diarahkan secara mulus bersama `/bracket`.

---

### Butir 5: Matriks Sumber Persetujuan Klaim Publik (Public Claim Approval Matrix)

Berikut adalah rekapitulasi audit status seluruh klaim yang beredar pada antarmuka publik JKB 2026:

| Elemen / Klaim Publik | Nilai / Deskripsi Klaim | Status Verifikasi | Dokumen / Sumber Acuan |
| :--- | :--- | :---: | :--- |
| **Nama & Identitas Acara** | JOGJA KICKBOXING FESTIVAL & REDY CHAMPIONSHIP 2 | ✅ **RESMI & TERVERIFIKASI** | `src/lib/event-config.ts` |
| **Tanggal Pelaksanaan** | 12–14 Desember 2026 | ✅ **RESMI & TERVERIFIKASI** | `src/lib/event-config.ts` |
| **Lokasi & Gedung** | Gelanggang Olahraga Universitas Negeri Yogyakarta (GOR UNY) | ✅ **RESMI & TERVERIFIKASI** | `src/lib/event-config.ts` |
| **Kampanye & Tagar** | #JOGJAPUNYANYALI | ✅ **RESMI & TERVERIFIKASI** | `src/lib/event-config.ts` |
| **Arah Kreatif & Narasi** | GLORY Kickboxing × We The Fest (DI BALIK KALEM) | ✅ **RESMI & TERVERIFIKASI** | `src/lib/event-config.ts` |
| **Mitra Penjualan Tiket** | RAWOOH | ✅ **DISUAPKAN / PROVISIONAL** | Master Prompt V8 (Menunggu Widget API) |
| **Harga & Kuota Tiket** | - (Halaman `/tiket` jujur tanpa harga fiktif) | ✅ **RESMI & TRANSPARAN** | `/tiket` (Mengumumkan pembukaan via RAWOOH) |
| **Tier Siaran PPV BigMo** | Rp 10.000 (Exhibition Pass) | ⚠️ **PROVISIONAL STAGING ONLY** | `event-config.ts` (Hanya untuk uji coba checkout) |
| **Tier Siaran PPV All-Access**| Rp 29.000 & Rp 79.000 | 🛑 **DRAFT DITANGGUHKAN** | Dinonaktifkan (`isActive: false`), tombol terkunci |
| **Hadiah Tunai Kreator** | "Hadiah leaderboard jutaan rupiah" | 🛑 **BELUM TERVERIFIKASI (UNAPPROVED)** | Draf copywriting prototipe, belum ada SK EO |
| **Akses Ringside Kreator** | "Akses ringside eksklusif GOR UNY" | 🛑 **BELUM TERVERIFIKASI (UNAPPROVED)** | Draf copywriting prototipe, belum ada SK EO |
| **Cakupan Wilayah City Pride**| Bantul, Sleman, Kota Jogja | ⚠️ **BELUM TERVERIFIKASI (DEVELOPMENT)** | Seed prototipe 3 wilayah, DIY memiliki 5 kabupaten/kota |
| **Roster Petarung & Rekor** | 8 Petarung (8-2-0, 12-1-0, dll) | ⚠️ **BELUM TERVERIFIKASI (SEED FIXTURES)**| Seed prototipe, wajib berlabel "Simulasi" |
| **Katalog Merchandise & Ukuran**| 4 produk (Kaos, Hoodie, Wrap, Gloves) | ⚠️ **BELUM TERVERIFIKASI (SEED FIXTURES)**| Prototipe staging, menunggu SKU resmi RAWOOH |

---

## 3. KESIMPULAN & LANGKAH SELANJUTNYA

1. **Backend & Database Tetap Utuh**:
   - Seluruh backend, skema Prisma, dan database SQLite lokal tidak disentuh selama proses audit ini.
   - 11/11 safety gates komersial tetap aktif melindungi staging environment.
2. **Kepatuhan Terhadap Label "Simulasi"**:
   - Menegaskan bahwa label "Simulasi" pada profil atlet dan pertandingan tidak akan diubah menjadi "Resmi" sampai panitia pelaksana menyerahkan dokumen sertifikasi atlet yang sah.
3. **Menunggu Arahan Pemilik Proyek**:
   - Melaporkan hasil verifikasi ini kepada pemilik proyek.
   - Menunggu keputusan visual dan arahan editorial mengenai:
     - Apakah halaman `/championship` akan ditambahkan komponen *Live Bout / Fight Card feed* langsung dari data pertandingan.
     - Penyesuaian teks pada Creator Hub agar sepenuhnya bebas dari klaim hadiah tanpa persetujuan.
