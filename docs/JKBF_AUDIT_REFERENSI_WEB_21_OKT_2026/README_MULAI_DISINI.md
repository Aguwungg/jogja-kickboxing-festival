# JKBF 2026 — RESEARCH PACKAGE (21 OKTOBER 2026)

## 1. Apa yang tersedia sekarang

- **63 fitur nyata/terbatas** dari **6 website referensi** dengan link sumber masing-masing, manfaat, dan rekomendasi adaptasi ke JKBF. Lihat `01_LAPORAN/AUDIT_MENDALAM_6_WEBSITE.md` dan `02_DATA/FEATURE_AUDIT_63.csv`.
- **23 rute publik JKBF** dipetakan per fungsi dan prioritas.
- **134 screenshot JKBF HISTORIS** dari arsip audit sebelumnya, terdiri dari desktop, mobile, interaksi, dan sebagian admin; label provenance di CSV.
- **29 URL benchmark eksternal** dimasukkan dalam manifest screenshot untuk capture otomatis.
- Preview contact sheet untuk screenshot JKBF terdahulu.

## 2. Apa yang BELUM ada dan alasannya

**BELUM ada screenshot autentik website BYON / GLORY / UFC / ONE / Sónar / Gymshark di ZIP saat ini.** Browser container dalam sesi tidak mendapat internet langsung. Mengambil halaman teks lewat web search tidak sama dengan memotret halaman web yang dirender.

**JANGAN salah mengira folder screenshot JKBF sebagai bukti tampilan situs referensi eksternal.** Tidak ada screenshot external yang direkayasa.

## 3. Cara mendapat screenshot benchmark asli di komputer dengan internet

1. Pastikan Python 3.10+ terpasang.
2. Jalankan `python3 -m pip install playwright` lalu `python3 -m playwright install chromium`.
3. Dari direktori paket hasil extract ZIP jalankan:
   `python3 04_ALAT_CAPTURE_REFERENSI/capture_references.py`
4. Script memotret desktop viewport 1440x900, desktop full, mobile 390x844, mobile full untuk 29 URL yang tersedia, beserta beberapa state publik.
5. Hasil `SCREENSHOTS_REFERENSI_ASLI.zip` tersimpan di folder `04_ALAT_CAPTURE_REFERENSI/`.
6. Untuk gated areas, script hanya merekam login boundary; eksplorasi lanjutan memerlukan akun sah dan persetujuan pemilik akun.

## 4. Prinsip keselamatan dan atribusi
- Semua nama situs dan karya adalah hak pemilik masing-masing.
- Pakai screenshot sebagai riset internal; jangan mengunggah ulang visual berhak cipta sebagai aset publik JKBF.
- Tidak ada pembelian, login, penyalahgunaan akun, atau bypass gate di script.
- `JKBF` screenshot archive merupakan bukti historis; audit production terbaru masih memerlukan akses live.

## 5. Urutan membaca
1. `01_LAPORAN/AUDIT_MENDALAM_6_WEBSITE.md`
2. `02_DATA/FEATURE_AUDIT_63.csv`
3. `02_DATA/JKBF_ROUTE_MAPPING.csv`
4. `05_PREVIEW_BENCHMARK/` lalu `03_BUKTI_JKBF_BASELINE/`
5. `02_DATA/REFERENCE_CAPTURE_MANIFEST.csv`
