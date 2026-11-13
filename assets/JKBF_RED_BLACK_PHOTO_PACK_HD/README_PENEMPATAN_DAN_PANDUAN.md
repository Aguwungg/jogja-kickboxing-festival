# JKBF 2026 — RED & BLACK PHOTO PACK HD

**9 foto asli • 9 master edited JPG • 9 desktop WebP • 9 mobile WebP • 1 OG thumbnail**

## Tentang pengolahan
- Color grading dibuat langsung dari piksel foto asli, tanpa AI yang membuat ulang wajah, tubuh, gerakan, atau atribut.
- Palet terinspirasi poster resmi JKBF: charcoal/black, crimson red, white. Warna biru pertandingan tetap ada sebagai warna nyata perlengkapan.
- Perubahan: red/black mood, shadow shaping, red saturation selektif, contrast, highlight control, soft vignette dan crop responsive.
- Semua versi master memakai resolusi foto yang tersedia (sebagian 2048px). File ekspor desktop dan mobile mempunyai dimensi HD sesuai peruntukan; karena sebagian crop berasal dari foto lebih kecil pada sisi tertentu, resizing memakai Lanczos tanpa mengklaim detail baru.
- Ini adalah dokumentasi event fight terdahulu (termasuk visual branding Redy Jogja). Jangan mengklaim ini dokumentasi JKBF 2026 atau venue GOR Pancasila UGM.
- Pastikan hak penggunaan foto oleh fotografer/pemilik dokumentasi telah disetujui sebelum publikasi.
- **Tidak perlu menambahkan label tulisan atau logo langsung ke foto**: text/CTA dikerjakan sebagai HTML/CSS, memudahkan adaptasi mobile.

## Penempatan per section

| Asset ID | Asal | Posisi utama | Catatan cropping |
|---|---|---|---|
| jkbf-hero-fight | IMG_9037.jpg | Hero DESKTOP / banner utama | Tempatkan copy di area terpisah atau overlay gelap responsif, kedua fighter dipertahankan |
| jkbf-fighter-closeup | IMG_9075.jpg | Hero MOBILE / CTA Registration | Closeup wajah fighter membuat hero mobile terasa kuat; foto ini juga dipakai CTA |
| jkbf-fight-intensity | IMG_8410.jpg | The Fights / action section | Pertarungan close-up |
| jkbf-ring-action | IMG_8312.jpg | Championships / Competition editorial | Komposisi ring dan pertandingan |
| jkbf-women-fight | IMG_8577.jpg | SMA Open / Women in Kickboxing | Dua fighter perempuan (ilustrasi olahraga, bukan peserta terkonfirmasi) |
| jkbf-match-decision | IMG_9243.jpg | Fight Highlight / dramatic editorial card | Foto portrait dengan wasit (dipertahankan aslinya) |
| jkbf-fighter-preparation | IMG_8703.jpg | Your Fight Starts Here / Behind the Fight | Momen atlet dan pelatih |
| jkbf-female-fighter-prep | IMG_8920.jpg | Registration / Training | Fighter perempuan sedang disiapkan |
| jkbf-audience-community | IMG_8980.jpg | About / Community / The Movement | Suasana penonton dan official event sebelumnya |

## Dua karakter visual (pilih berdasarkan section)
- **DEFAULT `desktop/` dan `mobile/`**: Cinematic documentary grade, paling menjaga natural skin-tone, cocok untuk editorial utama dan semua halaman.
- **ALTERNATIF `crimson_strong_desktop/` dan `crimson_strong_mobile/`**: lebih kuat ke arah hitam/merah, dengan warna biru latar agak diredam. Cocok untuk hero/section gelap, tetapi gunakan seperlunya. Foto tetap piksel asli, tidak ada wajah/pose direkonstruksi.

## Struktur folder
- `masters_hd/`: JPG kualitas 95 (4:4:4), aspek rasio asli, untuk arsip dan revisi cropping.
- `desktop/`: WebP resolusi 1920×1080 untuk banner landscape; 1200×1500 untuk portrait card; 1600×1200 untuk editorial square-source.
- `mobile/`: WebP 1080×1350 (4:5) untuk card/section mobile. Gunakan CSS `object-position` jika layout hero perlu berbeda.
- `preview/`: contact sheet dan OG image.
- `asset-manifest.json`: peta nama file dan pemakaian.

## Hero responsif yang direkomendasikan
Untuk HERO khusus, gunakan dua foto yang berbeda (keduanya foto asli):
- Desktop: `desktop/jkbf-hero-fight-desktop-1920x1080.webp`.
- Mobile: `mobile/jkbf-fighter-closeup-mobile-1080x1350.webp`.

Ini menghindari pemotongan dua fighter terlalu agresif pada layar portrait. Untuk layout section biasa, setiap foto juga sudah memiliki versi desktop/mobile masing-masing.

Contoh JSX/HTML (ubah path ke folder yang benar):
```html
<picture>
  <source media="(max-width: 767px)" srcset="/images/jkbf-photo/mobile/jkbf-fighter-closeup-mobile-1080x1350.webp" />
  <img src="/images/jkbf-photo/desktop/jkbf-hero-fight-desktop-1920x1080.webp" alt="Dokumentasi aksi pertandingan kickboxing dari event sebelumnya" fetchpriority="high" />
</picture>
```

## Integrasi ke Antigravity
1. Ekstrak `desktop/` dan `mobile/` ke `public/images/jkbf-photo/` (atau folder asset sesuai framework).
2. Hubungkan tiap foto ke section yang sesuai tabel, jangan hanya replace filename lama jika itu akan mengaktifkan fitur yang sudah tidak digunakan.
3. Hero gunakan overlay gradient CSS secukupnya agar teks terbaca, jangan jadikan seluruh foto hitam pekat.
4. Setting `object-fit:cover` dan `object-position` per perangkat setelah menguji tampilan nyata.
5. Jangan tempatkan foto lawas sebagai foto Venue atau sebagai kartu What's New yang mengaku posting Instagram baru.
6. Uji layout desktop 1440px, tablet 768px, mobile 390px dan 430px.
7. Cek semua thumbnail beres dan tidak ada perubahan ekspresi/identitas karena color grading.

## Catatan teknis
Website live Vercel tidak dapat diakses oleh pemeriksa saat paket dibuat; pemetaan berdasarkan identitas poster resmi JKBF, 9 foto user, dan brief website yang sebelumnya disepakati. Pemilihan crop final dapat disesuaikan dalam browser setelah loading halaman aktual.
