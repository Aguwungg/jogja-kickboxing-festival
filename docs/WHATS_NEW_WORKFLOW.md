# JKBF 2026 — Workflow Update Konten WHAT'S NEW.

Dokumen ini menjelaskan cara tim penyelenggara **JKBF 2026** menambahkan atau memperbarui konten resmi Instagram pada fitur **WHAT'S NEW.** tanpa mengubah struktur desain website.

## Prinsip Kurasi
1. **Sumber Tunggal:** Hanya konten dari akun Instagram resmi **@jogjakickboxingfestival** (`https://www.instagram.com/jogjakickboxingfestival/`).
2. **Kontrol Publikasi:** Hanya item dengan status `published`, `approved = true`, dan permalink asli (`/p/...` atau `/reel/...`) yang tampil ke publik.
3. **Tanpa Scraping / Hotlinking:** Website tidak melakukan scraping otomatis maupun hotlink URL CDN Instagram sementara (`scontent` / `fbcdn`) agar aset tidak pernah rusak/expired.

## Cara Update via Panel Admin (`/admin/whats-new`)
1. Masuk ke `/admin/login` menggunakan akun administrator (`SUPER_ADMIN` atau `CONTENT_ADMIN`).
2. Buka menu **What's New (IG)** di sidebar (`/admin/whats-new`).
3. Masukkan data postingan:
   - **Judul & Ringkasan Faktual:** Mengacu langsung pada topik dan caption asli postingan.
   - **URL Asli Instagram:** Contoh `https://www.instagram.com/p/DfjxgAVGh8j/` atau `https://www.instagram.com/reel/DfjI1h9T-hh/`.
   - **Tipe Konten:** `carousel`, `reel`, atau `image`.
   - **Cover Image:** Pilih dari aset gambar yang sudah disetujui atau tambahkan cover resmi baru di `public/images/whats-new/`.
   - **Preview Video (Khusus Reel):** Kosongkan jika file video resmi belum disiapkan (otomatis fallback ke cover image), atau isi path `/media/reels/<slug>-preview.mp4`.
4. Centang **Disetujui Panitia (Approved)** dan ubah status menjadi **published**, lalu simpan.

## Cara Menyiapkan Preview Video Reel (3–5 Detik)
Jika panitia menyediakan file video `.mp4`/`.mov` asli dari Reels:
```bash
chmod +x scripts/prepare-reel-preview.sh
./scripts/prepare-reel-preview.sh /path/ke/reel-asli.mp4 nama-slug-reel
```
Skrip ini memotong **4 detik pertama**, menghapus audio (`muted`), mengompresi ke **H.264 MP4**, dan mengekspor cover poster otomatis ke `public/media/reels/` & `public/images/whats-new/`.

## Fallback Registry Statis (`src/lib/whats-new.ts`)
Pada deployment serverless dengan SQLite read-only, catatan permanen juga dapat disinkronkan di `CURATED_WHATS_NEW_ITEMS` di `src/lib/whats-new.ts` lalu di-commit dan deploy ulang.

