# JKBF V9.2 — COMPLETE SPACIOUS UI/UX REBUILD
## 08. OUTSTANDING ISSUES, DEPENDENCIES & PRE-LAUNCH ROADMAP

---

### 1. BATASAN TEKNIS & KEPATUHAN KEAMANAN SAAT INI

Implementasi **JKBF V9.2 — Spacious Rebuild** saat ini telah selesai 100% pada level kode frontend, responsive design, dan integrasi interaksi di branch terisolasi `redesign/v9-2-spacious-rebuild`.

Sesuai arahan teknis dan batasan arsitektur:
- **TIDAK DILAKUKAN MERGE KE BRANCH `main` SECARA OTOMATIS.**
- **TIDAK DILAKUKAN DEPLOYMENT KE LINGKUNGAN PRODUKSI.**
- **GERBANG KEAMANAN PEMBAYARAN & STREAMING TETAP TERKUNCI (SAFETY GATES ACTIVE).**

---

### 2. DAFTAR KETERGANTUNGAN EKSTERNAL (*EXTERNAL DEPENDENCIES*) DARI EVENT ORGANIZER (EO)

Sebelum website V9.2 ini dapat diluncurkan secara resmi ke domain publik produksi, terdapat data dan aset resmi yang wajib disediakan oleh pihak Event Organizer dan Manajemen JKBF:

| No | Kategori Kebutuhan | Deskripsi Kebutuhan Resmi dari EO | Penanganan Sementara Saat Ini di V9.2 |
| :---: | :--- | :--- | :--- |
| **01** | **Fotografi Resmi Petarung** | Foto studio potret atlet beresolusi tinggi dengan seragam tanding resmi dan latar transparan/netral. | Menggunakan foto dokumenter tarung hitam-putih editorial berlisensi editorial (*placeholder demonstratif*). |
| **02** | **Drawing Bagan Resmi & Roster** | Bagan resmi hasil drawing timbang badan teknis (*sanctioned match drawing*) dari badan kickboxing resmi. | Menampilkan bagan 8-man K-1 rules dengan label status "Menunggu Drawing Resmi". |
| **03** | **Lineup Musisi & Artis** | Daftar nama musisi pengisi panggung festival fase 1 & 2 beserta foto panggung resmi dan jadwal jam tampil. | Menampilkan pengumuman "Lineup Segera Diumumkan" dan breakdown 3 panggung (*Ring Stage, Heritage, Underground*). |
| **04** | **Integrasi Tiket RAWOOH** | URL deep link resmi atau API endpoint integrasi dari platform mitra ticketing resmi (RAWOOH). | Menampilkan rincian tier tiket resmi dan banner pengumuman status tiket resmi menuju RAWOOH. |
| **05** | **Foto Asli Merchandise & Stok** | Foto hasil photoshoot produk fisik kaos, hoodie, dan aksesoris resmi JKBF 2026 beserta kuota stok nyata. | Menggunakan siluet lookbook streetwear grafis hitam pekat beresolusi tinggi dengan harga acuan Rupiah. |
| **06** | **Penyedia Siaran Langsung (PPV)** | Kontrak CDN streaming siaran langsung, endpoint video player HLS, dan integrasi pembayaran tiket PPV. | Player video berada dalam status standby terlindungi gate verifikasi kode akses. |
| **07** | **Aset Logo Sponsor & Mitra** | Logo vektor resmi instansi pendukung (KONI DIY, Pemda DIY, sponsor apparel, media partner). | Menampilkan baris teks kemitraan resmi tanpa memasang logo fiktif. |

---

### 3. PANDUAN MENJALANKAN LINGKUNGAN PREVIEW LOKAL

Bagi tim review internal dan Project Owner yang ingin meninjau antarmuka V9.2 secara langsung di browser:

1. **Pastikan berada di branch yang benar:**
   ```bash
   git status
   # Output: On branch redesign/v9-2-spacious-rebuild
   ```

2. **Jalankan development server Next.js:**
   ```bash
   npm run dev
   ```

3. **Buka browser pada alamat:**
   ```
   http://localhost:3000
   ```

4. **Ukuran Layar yang Direkomendasikan untuk Review:**
   - **Desktop:** Resolusi 1440 × 900 px atau 1280 × 800 px.
   - **Mobile:** Aktifkan Device Mode di Chrome DevTools pada resolusi 390 × 844 px (iPhone 14/15/16) atau 430 × 932 px (iPhone Pro Max).

---

### 4. CEKLIS KESIAPAN PRODUKSI (*PRODUCTION READINESS CHECKLIST*)

- [x] Seluruh 23 rute publik Next.js telah dirombak dengan sistem Spacious V9.2.
- [x] Tidak ada kartu gelap bertumpuk berulang (*elimination of crowded dark cards*).
- [x] Navigasi header dan drawer mobile berfungsi bersih dan mulus.
- [x] Kompilasi Next.js build sukses (`npm run build` lolos tanpa peringatan kritis).
- [x] Pengecekan tipe TypeScript (`npx tsc --noEmit`) 0 error.
- [x] 11/11 Gerbang keamanan komersial (*commercial safety gates*) terverifikasi lolos.
- [x] 92 tangkapan layar browser nyata tersimpan di `docs/JKBF_V9_2_SPACIOUS_UI/screenshots/`.
- [x] Modul dashboard admin `/admin/*` tetap terisolasi dan tidak terganggu.
- [ ] *Pending:* Penyerahan aset foto studio atlet dan musisi resmi dari pihak EO.
- [ ] *Pending:* Penandatanganan kontrak teknis dan penyerahan endpoint tiket RAWOOH.
- [ ] *Pending:* Approval final dari Project Owner sebelum merge ke `main`.
