# JKB 2026 — FUNCTIONAL LIMITATIONS & INTEGRATION REPORT
## BATASAN FUNGSIONALITAS, INTEGRASI PIHAK KETIGA, DAN KEAMANAN PRA-PRODUKSI

Dokumen ini mencatat secara transparan seluruh batasan fungsionalitas, integrasi eksternal yang belum aktif, dan aspek keamanan yang diisolasi selama audit visual JKB 2026.

---

### 1. DAFTAR TAUTAN, DATA, DAN MODUL YANG BELUM TERSEDIA (LIMITATIONS)

| Modul / Area | Item Fungsional | Status Saat Ini | Dampak Pengguna & Alasan Pembatasan |
|---|---|---|---|
| **Fight Card Laga** | Pertandingan Berpasangan di `/championship` | ❌ Tidak Ada | Halaman `/championship` hanya menampilkan divisi dan regulasi K-1. Pengunjung harus membuka `/bracket` untuk melihat partai tanding. |
| **Vendor Tiket & Merch** | Integrasi API / Widget RAWOOH | ⏳ Belum Aktif | Menunggu penyediaan widget resmi dari pihak RAWOOH. Saat ini `/tiket` beroperasi dalam mode pengumuman transparan, dan `/merch` beroperasi dalam mode simulator sandbox. |
| **Payment Gateway** | Integrasi Midtrans Nyata | ⏳ Sandbox Demo Saja | Transaksi checkout merchandise tidak mendebit rekening atau QRIS nyata. Status pesanan disimulasikan sebagai `PAID` pada staging. |
| **Siaran Video PPV** | Layanan Streaming Privat (HLS/DRM) | ⏳ Staging Video Saja | Pemutar video menyematkan video uji coba. Belum ada kontrak Content Delivery Network (CDN) video berbayar dengan tokenisasi sesi penonton. |
| **Klaim Hadiah Kreator** | Hadiah Uang Jutaan Rupiah di `/creator` | 🛑 Belum Terverifikasi | Copywriting prototipe belum memiliki pengesahan surat keputusan (SK) anggaran dari komite pelaksana. |
| **Zonasi City Pride** | Cakupan Kabupaten se-DIY | ⚠️ Terbatas 3 Wilayah | Wilayah voting saat ini hanya menyediakan Bantul, Sleman, dan Kota Jogja. Kulon Progo dan Gunungkidul belum diakomodasi. |
| **Data Atlet & Rekor** | Roster Petarung di `/fighters` | ⚠️ Data Demo Seed | 8 atlet yang terdaftar merupakan profil uji coba sintetis. Data diberi label jujur *"Rasio Pertandingan Simulasi"*. |
| **Peta Interaktif** | Denah Kursi & Peta Denah di `/venue` | ⚠️ Tautan Eksternal Saja | Mengarahkan ke Google Maps resmi GOR UNY; belum memiliki peta denah interaktif zona ring & tribun. |

---

### 2. KONTROL KEAMANAN DAN KEBIJAKAN INTEGRITAS DATA

1. **Prinsip No-Write pada Lingkungan Staging Publik**:
   - Selama proses penangkapan bukti visual, agen tidak melakukan pengiriman form publik (`POST /api/vote`), tidak membuat pesanan merchandise baru, dan tidak mengubah rekor di database SQLite (`prisma/dev.db`).
   - Tidak ada modifikasi pada kode sumber komponen React maupun style Tailwind CSS.
2. **Perlindungan Gerbang Komersial (Milestone 9A Safety Gates)**:
   - Skrip pengujian otomatis `scripts/test-commercial-safety.ts` terus memvalidasi 11 gerbang keamanan, memastikan paket siaran komersial yang tidak disahkan promotor (`all-access-championship-pass` dan `vip-ringside-stream`) tetap dalam kondisi non-aktif (`isActive: false`).
3. **Isolasi Kredensial Administrator**:
   - Akses masuk ke panel `/admin` dilakukan menggunakan akun pengujian staging lokal berstandar pengujian internal (`admin@jkbchampionship.id`). Tidak ada kredensial nyata pihak ketiga atau data sensitif publik yang terpapar.
