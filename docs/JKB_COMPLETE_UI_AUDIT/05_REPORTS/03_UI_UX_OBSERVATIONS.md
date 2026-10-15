# JKB 2026 — CRITICAL UI/UX OBSERVATIONS REPORT
## OBSERVASI DESKRIPTIF & KRITIS SETIAP MODUL ANTARMUKA PENGGUNA

Dokumen ini menyajikan observasi objektif dan kritis terhadap seluruh halaman publik, modul komunitas, dan panel administrasi yang direkam secara nyata di peramban. Laporan ini ditujukan sebagai masukan independen bagi peninjau UI/UX eksternal.

---

### 01. BERANDA (HOMEPAGE — `/`)
* **Tujuan Utama Pengguna**: Memahami identitas festival olahraga tarung + musik anak muda (GLORY × We The Fest), tanggal (12–14 Des 2026), venue (GOR UNY), serta mengakses informasi tiket & jadwal secara cepat.
* **Konten Terlihat**:
  - Hero banner berani dengan tipografi kondensasi "DI BALIK KALEM / #JOGJAPUNYANYALI", tanggal dan venue jelas, tombol tunggal `INFO TIKET`. Foto duel atlet dan lighting panggung konser berdampingan.
  - Dua jalur eksplorasi: *The Ring (Pertandingan)* dan *The Stage (Festival Musik)*.
  - Bagian "Plan Your Visit" bertema Warm White (`#F5F3EE`) dengan 3 kartu panduan: Jadwal Acara, Venue GOR UNY, dan Informasi Tiket.
  - Bagian penemuan tambahan: City Pride, Program Kreator, dan Official Merchandise.
* **Perilaku Navigasi**: Header tetap sticky di atas dengan blur latar belakang. Dropdown "Lainnya" mengelompokkan menu sekunder.
* **Tombol Aksi Utama (Main CTA)**: `INFO TIKET` (merah menyala).
* **Fitur Interaktif**: Efek hover kartu, navigasi drawer pada mobile.
* **Catatan Masalah & Evaluasi Kritis**:
  - Blok Warm White (`#F5F3EE`) memberikan kontras tajam dari tema serba gelap (`#09090b`), yang sengaja dirancang untuk keterbacaan, namun transisi kontras hitam-ke-putih dapat terasa mendadak bagi sebagian pengulas.
  - Pada layar ponsel kecil (320px), judul kondensasi sangat dominan; perlu dipastikan tidak terjadi line-break canggung pada nama venue.

---

### 02. JADWAL ACARA & RUNDOWN (`/jadwal`)
* **Tujuan Utama Pengguna**: Mengetahui agenda pertandingan dan penampilan musik harian secara kronologis tanpa kerumitan filter bertingkat.
* **Konten Terlihat**:
  - Pemilih 1 tanggal kompak: `12 DES` (Hari 1), `13 DES` (Hari 2), `14 DES` (Hari 3).
  - Judul tema hari otomatis berubah sesuai tanggal aktif (Weigh-in, Eliminasi, Semifinal, Grand Final).
  - Daftar sesi tersusun linier satu kolom dengan badge kategori (`COMBAT`, `STAGE`, `COMMUNITY`, `CEREMONY`).
* **Fitur Interaktif**:
  - Tombol accordion expandable untuk melihat deskripsi detail sesi.
  - Pergantian tanggal instan dengan filter state React.
* **Catatan Masalah & Evaluasi Kritis**:
  - Jam pelaksanaan pada beberapa sesi pertandingan masih bersifat indikatif (perkiraan) karena rundown jam resmi per-partai laga belum disahkan komite pertandingan.

---

### 03. DIREKTORI PETARUNG (`/fighters`)
* **Tujuan Utama Pengguna**: Mencari petarung favorit, melihat sasana asal, dan kategori divisi berat badan.
* **Konten Terlihat**:
  - Search bar menonjol di bagian atas.
  - Tombol filter lanjutan yang tersembunyi secara default (collapsible accordion) untuk divisi dan sasana.
  - Grid kartu petarung bersih: foto potret, nama, sasana, badge divisi.
* **Fitur Interaktif**: Pencarian real-time (live search input), buka-tutup drawer filter, tampilan hasil kosong (*empty state*) yang ramah.
* **Catatan Masalah & Evaluasi Kritis**:
  - Seluruh petarung saat ini adalah profil uji coba (Demo Fighters) dengan foto stok. Belum ada atlet nyata yang diumumkan resmi oleh komite promotor.

---

### 04. DETAIL PROFIL PETARUNG (`/fighters/[slug]`)
* **Tujuan Utama Pengguna**: Membaca biodata lengkap atlet, statistik fisik (Tale of the Tape), rekor tanding, dan riwayat laga.
* **Konten Terlihat**:
  - Foto besar atlet, nama, julukan, divisi tanding.
  - Ringkasan rekor: Menang, Kalah, Seri, KO, serta persentase kemenangan (Win Rate).
  - Label status: *"Rasio Pertandingan Simulasi"* dan *"Status Data: Simulasi Staging"*.
  - Matriks Tale of the Tape: Jangkauan, tinggi, sasana, aturan laga.
* **Catatan Masalah & Evaluasi Kritis**:
  - Keberadaan label *"Simulasi"* sangat penting untuk etika pra-produksi karena angka rekor berasal dari development seed. Namun secara visual, label kuning *"Simulasi Staging"* mungkin menimbulkan pertanyaan bagi pengunjung umum jika tidak membaca konteks pra-rilis.

---

### 05. KEJUARAAN & REGULASI K-1 (`/championship`)
* **Tujuan Utama Pengguna**: Memahami struktur divisi kejuaraan Redy Championship 2 dan aturan resmi tanding K-1.
* **Konten Terlihat**:
  - 4 Divisi Resmi: Bantamweight (57kg), Featherweight (60kg), Lightweight (63.5kg), Welterweight (70kg).
  - 4 Regulasi K-1: Format ronde (3x3 menit), teknik sah, sistem penilaian 10-point must, aturan knockdown.
  - CTA menuju Pohon Turnamen (`/bracket`).
* **Catatan Masalah & Evaluasi Kritis**:
  - **Kelemahan UX Signifikan**: Halaman ini **TIDAK MENYEDIAKAN FIGHT CARD** berpasangan (Bout #1: Sudut Merah vs Sudut Biru). Pengunjung yang mengira halaman ini adalah pusat partai laga hanya disajikan teori divisi dan aturan. Partai tanding aktual justru berada di `/bracket`.

---

### 06. POHON TURNAMEN (`/bracket`)
* **Tujuan Utama Pengguna**: Memantau pergerakan eliminasi petarung dari semifinal hingga final penentuan sabuk emas.
* **Konten Terlihat**:
  - Pemilih divisi: Bantamweight (57kg) dan Lightweight (63.5kg).
  - Tampilan Desktop: Diagram pohon eliminasi proporsional (Bracket Tree).
  - Tampilan Mobile: *Tournament Progression Mode* berbasis pemilih ronde vertikal (Semifinal / Final) dan daftar laga berpasangan dengan foto sudut merah vs sudut biru.
* **Fitur Interaktif**: Pergantian divisi, pergantian ronde pada mobile, penanda pemenang berwarna hijau (*MENANG*).
* **Catatan Masalah & Evaluasi Kritis**:
  - Saat ini baru 2 divisi yang memiliki bagan laga (Bantamweight & Lightweight), sedangkan Featherweight dan Welterweight belum memiliki jadwal bagan di seed database.

---

### 07. LINEUP PANGGUNG MUSIK (`/lineup`)
* **Tujuan Utama Pengguna**: Melihat penampil musik dan panggung festival.
* **Konten Terlihat**:
  - Grid artis dengan foto performa festival dan deskripsi genre musik.
  - Kartu "Special Guest Headliner" berstatus fase pengumuman berikutnya.
* **Catatan Masalah & Evaluasi Kritis**:
  - Artis penampil saat ini masih berupa pengisi tempat (*provisional festival collective* & mock artists) menunggu kontrak artis komite pelaksana selesai.

---

### 08. CITY PRIDE VOTING (`/city-pride`)
* **Tujuan Utama Pengguna**: Mendukung daerah perwakilan (Bantul, Sleman, atau Kota Jogja) dalam kampanye kebanggaan daerah.
* **Konten Terlihat**:
  - 3 kartu wilayah: Bantul (Merah), Sleman (Crimson), Kota Jogja (Gold).
  - Informasi aturan: 1 akun = 1 suara resmi, proteksi anti-bot.
  - Leaderboard persentase suara real-time.
* **Fitur Interaktif**: Pemilihan kartu wilayah, feedback visual kartu aktif, validasi sesi masuk sebelum dapat menekan tombol kirim suara.
* **Catatan Masalah & Evaluasi Kritis**:
  - Wilayah Kulon Progo dan Gunungkidul belum diakomodasi dalam skema 3 wilayah saat ini.

---

### 09. CREATOR HUB & MEDIA (`/creator` & `/creator/dashboard`)
* **Tujuan Utama Pengguna**: Pendaftaran program kemitraan pembuat konten video dan pengajuan akreditasi jurnalis/media peliput.
* **Konten Terlihat**:
  - Panduan 3 langkah partisipasi: 01 Daftar, 02 Publikasikan Konten, 03 Akses Liputan.
  - Form pendaftaran kreator (Instagram/TikTok/YouTube).
  - Tab formulir akreditasi media pers (Nama media, ID pers, surat tugas).
  - Leaderboard poin kreator teratas.
* **Catatan Masalah & Evaluasi Kritis**:
  - Masih terdapat klaim copywriting draf: *"rebut hadiah leaderboard jutaan rupiah"* dan *"akses ringside eksklusif GOR UNY"* yang belum memiliki persetujuan resmi (SK) dari panitia pelaksana.

---

### 10. MERCHANDISE KATALOG & DETAIL (`/merch` & `/merch/[slug]`)
* **Tujuan Utama Pengguna**: Menjelajahi produk apparel resmi (kaos, hoodie, sarung tinju, handwrap) dan memilih ukuran.
* **Konten Terlihat**:
  - Grid katalog bersih dengan foto produk nyata, nama, kategori, harga, dan badge.
  - Halaman detail produk dengan pemilih varian ukuran (S, M, L, XL, XXL) yang dinamis menampilkan sisa stok.
  - Deskripsi material kain, gramasi (24s / 210gsm), dan panduan perawatan.
* **Catatan Masalah & Evaluasi Kritis**:
  - Seluruh alur transaksi di staging diarahkan ke simulator sandbox internal; belum terhubung ke sistem pemesanan resmi vendor merchandise RAWOOH.

---

### 11. INFORMASI TIKET (`/tiket`)
* **Tujuan Utama Pengguna**: Mengetahui harga, kategori, jadwal penjualan, dan lokasi resmi pembelian tiket.
* **Konten Terlihat**:
  - Pengumuman resmi bahwa penjualan tiket daring akan dibuka eksklusif melalui platform RAWOOH.
  - Kepastian venue GOR UNY dan tanggal 12–14 Desember 2026.
  - Panduan penukaran tiket fisik / gelang penonton, aturan usia anak, dan peringatan anti-calo.
* **Catatan Masalah & Evaluasi Kritis**:
  - Halaman ini sengaja bersih dari tombol checkout fiktif. Pengunjung hanya diberikan informasi persiapan sampai widget/tautan resmi RAWOOH diaktifkan.

---

### 12. PUSAT INFORMASI (VENUE, TENTANG, FAQ, KONTAK, LEGAL)
* **Tujuan Utama Pengguna**: Memandu kehadiran fisik pengunjung ke venue GOR UNY, memahami sejarah festival, menjawab pertanyaan umum, dan membaca ketentuan hukum.
* **Konten Terlihat**:
  - `/venue`: Alamat kampus GOR UNY Sleman, rute bus Trans Jogja (Koridor 1B, 2A, 11 Halte Colombo), stasiun KRL terdekat, panduan pintu masuk tribun vs VIP.
  - `/tentang`: Narasi manifesto "Di Balik Kalem" dan semangat sportivitas Jogja.
  - `/faq`: Accordion tanya-jawab yang rapi dan responsif.
  - `/kontak`: Formulir kirim pesan dan kontak sekretariat.
  - `/syarat-ketentuan` & `/kebijakan-privasi`: Kebijakan hukum yang terstruktur.
* **Catatan Masalah & Evaluasi Kritis**:
  - Desain layout halaman teks hukum dan info memiliki padding dan tipografi yang konsisten, namun peta venue masih berupa tautan statis Google Maps dan belum berupa peta interaktif SVG/Leaflet.

---

### 13. PANEL KENDALI ADMINISTRATOR (`/admin/*`)
* **Tujuan Utama Pengguna**: Pengelolaan operasional festival secara tertutup oleh super administrator dan operator.
* **Konten Terlihat**:
  - Portal login kredensial NextAuth yang aman dengan helper akun staging.
  - Dashboard ringkasan dengan metrik total atlet, penjualan merch, total suara voting, dan pesan masuk.
  - 10 Modul Operasional: Atlet, Pendaftaran Baru, Jadwal, Pertandingan, Lineup Musik, Voting, Kreator, Merchandise, Kontak, dan PPV.
* **Perilaku Responsif**:
  - Pada layar smartphone (<768px), sidebar desktop bertransformasi menjadi laci samping (mobile drawer) yang dapat ditutup-buka dengan ikon hamburger.
  - Tabel-tabel data manajemen dilengkapi pembungkus scrolling horizontal (*overflow containment*) sehingga baris data tidak terpotong di layar HP.
