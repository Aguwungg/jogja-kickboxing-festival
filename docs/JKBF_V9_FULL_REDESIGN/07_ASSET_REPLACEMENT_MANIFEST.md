# JKBF V9 — TOTAL PUBLIC FRONTEND REDESIGN
## 07. ASSET REPLACEMENT MANIFEST UNTUK EVENT ORGANIZER (EO)

---

### 1. PANDUAN PENGGANTIAN ASET UNTUK PANITIA & EO

Seluruh foto dan grafis yang digunakan pada implementasi frontend V9 saat ini berstatus **Internal Design Concept & Placeholder Asset**. Tidak ada atlet atau musisi fiktif yang diklaim sebagai peserta resmi.

Dokumen manifest ini disusun agar tim kreatif, dokumentasi, dan media Event Organizer (EO) dapat mengganti aset placeholder dengan materi fotografi/videografi resmi beresolusi tinggi menjelang peluncuran publik:

---

### 2. TABEL DAFTAR ASET YANG PERLU DIGANTI

| Nama Aset & Path Saat Ini | Lokasi Penggunaan di Website | Rasio Aspek & Resolusi Rekomendasi | Deskripsi Materi Resmi yang Dibutuhkan | Status Saat Ini |
| :--- | :--- | :--- | :--- | :--- |
| `public/images/v9/04_FOTO_FIGHT_DESKTOP_TANPA_TEKST.png` | Hero Desktop Homepage (`/`), Showcase Championship (`/championship`) | 16:9 atau 4:3 (Minimal 2400×1600 px) | Foto aksi duel kickboxing dua petarung di atas ring berstandar profesional (pukulan/tendangan bersih, keringat, pencahayaan dramatis). | Placeholder internal beresolusi tinggi |
| `public/images/v9/05_FOTO_FIGHT_MOBILE_TANPA_TEKST.png` | Hero Mobile Homepage (`/`) | Vertikal 9:16 (Minimal 1080×1920 px) | Potret laga pertarungan kickboxing sudut vertikal yang dramatis untuk lipatan pertama layar smartphone. | Placeholder internal beresolusi tinggi |
| `public/images/v9/06_FOTO_KONSER_PLACEHOLDER_INTERNAL.png` | Section The Stage Homepage (`/`), Header Lineup Musik (`/lineup`) | 16:9 atau 21:9 (Minimal 2400×1350 px) | Dokumentasi panggung festival musik pemuda (tata cahaya lampu konser, siluet kerumunan penonton, musisi panggung utama). | Placeholder internal beresolusi sedang |
| `public/images/v9/09_LOGO_JKBF_ASET_SEMENTARA.png` | Referensi Logo V9 | Vector SVG atau PNG Transparan (Minimal 1200×1200 px) | Master logo vector resmi JKBF 2026 (termasuk lockup horizontal dan simbol monogram) dengan persetujuan hak cipta EO. | Logo konseptual sementara |
| `public/images/jkb/fighter-*.jpg` | Direktori Petarung (`/fighters`, `/fighters/[slug]`) | Portrait 3:4 atau 4:5 (Minimal 1200×1500 px) | Foto potret resmi atlet dari sesi media day resmi (sikap kuda-kuda bertarung dengan sarung tinju resmi Redy Championship). | Potret atlet terdaftar sementara |
| `public/images/jkb/merch-*.jpg` | Katalog Merchandise (`/merch`, `/merch/[slug]`) | 1:1 Square (Minimal 1600×1600 px) | Foto produk apparel streetwear (flat lay atau foto model memakai kaos/hoodie/gloves resmi JKBF berlatar studio bersih). | Foto produk katalog sementara |

---

### 3. PROTOKOL TEKNIS PENGGANTIAN ASET

1. **Format Berkas:** Prioritaskan format WebP modern atau PNG 24-bit tanpa kompresi artefak.
2. **Kesesuaian Warna:** Seluruh foto laga pertarungan disarankan memiliki kurasi warna monokromatik (grayscale dengan kontras tinggi) agar selaras dengan identitas visual *Clean Cut Editorial*.
3. **Penyimpanan:** Salin berkas foto resmi ke dalam direktori `public/images/v9/` atau `public/images/jkb/` dengan nama berkas yang sama untuk mempermudah integrasi tanpa perlu mengubah kode sumber.
