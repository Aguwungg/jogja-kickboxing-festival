# JKB 2026 — UX V7 ROUTE MATRIX & STATUS AUDIT

Dokumen ini memetakan seluruh rute di aplikasi JKB 2026 berdasarkan implementasi arsitektur UX V7 (*The Event First. Everything Else, When Needed*). Setiap rute dinilai berdasarkan status UI, keterbacaan mobile, interaktivitas, dependensi backend, dan keamanan komersial.

---

## 1. Rute Publik Utama (Primary Public Experience)

| Rute | Nama Fitur | Status UX V7 | Mobile Ready | Backend / Data | Catatan V7 & Keamanan |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `/` | Homepage | Audit V6 Selesai; Siap V7 | Perlu 4-Block Layout | CMS / Prisma Seed | Transformasi ke 4 blok konten (Hero, 2 Paths, Plan Visit, Explore More). Hapus countdown tidak resmi. |
| `/jadwal` | Jadwal Acara | Audit Selesai; Siap V7 | Perlu Minimal Day-Selector | CMS Jadwal | 1 selector tanggal (12, 13, 14 Des), 1 timeline kronologis, hindari 5 filter chip di mobile. |
| `/championship` | Kejuaraan Redy Cup 2 | Audit Selesai; Siap V7 | Ya | CMS Divisi & Rules | Penjelasan divisi & aturan kejuaraan tanpa jargon teknis berlebihan. |
| `/bracket` | Bagan Turnamen | Audit Selesai; Siap V7 | Perlu Step-by-Step Round Selector | CMS Matches | Desktop: bagan pohon terbaca. Mobile: Selector Divisi → Selector Ronde → Daftar Match. |
| `/fighters` | Fighter Center | Audit Selesai; Siap V7 | Ya | CMS Fighters | Pencarian utama di atas; filter lanjutan collapsible; kartu petarung bersih. |
| `/fighters/[slug]` | Profil Petarung | Audit Selesai; Siap V7 | Ya | CMS Fighter Detail | Identitas petarung dulu, rekor/statistik sekunder. |
| `/lineup` | Lineup Musik | Audit Selesai; Siap V7 | Ya | CMS Lineup Performer | Performer-first visual; tipografi nama artis jelas; status rilis bersih. |
| `/tiket` | Informasi Tiket | Audit Selesai; Siap V7 | Ya | Status Pengumuman | Hapus teks teknis ("Rawooh container", "sandbox"); pesan resmi pengumuman tiket. |

---

## 2. Rute Publik Komunitas & E-Commerce

| Rute | Nama Fitur | Status UX V7 | Mobile Ready | Backend / Data | Catatan V7 & Keamanan |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `/city-pride` | City Pride Voting | Audit Selesai; Siap V7 | Ya | Anti-abuse Voting API | 5 langkah ringkas (Eksplanasi → Pilih Wilayah → Verifikasi → Konfirmasi → Hasil). Hindari leaderboard raksasa di awal. |
| `/creator` | Creator Program (Landing) | Audit Selesai; Siap V7 | Ya | Publik | Pisahkan landing promosi 3 langkah dari dashboard akun internal. |
| `/creator/dashboard` | Creator Dashboard | Audit Selesai; Siap V7 | Ya | NextAuth Session & Submissions | Khusus kreator terautentikasi; upload konten & cek status moderasi. |
| `/merch` | Official Merchandise | Audit Selesai; Siap V7 | Ya | CMS Merch Products | Katalog produk bersih; hapus badge lebay berulang; transaksi live ditahan menunggu Rawooh. |
| `/merch/[slug]` | Detail Produk Merch | Audit Selesai; Siap V7 | Ya | CMS Merch Detail | Galeri foto, varian ukuran, status ketersediaan. |
| `/checkout` | Checkout (Legacy) | Milestone 9A Safety Active | Ya | Isolated / Disabled | Checkout simulasi dilindungi; tidak dibuka untuk publik tanpa API resmi Rawooh. |
| `/checkout/success/[orderId]` | Order Success | Milestone 9A Safety Active | Ya | Order lookup | Status pesanan terisolasi. |

---

## 3. Rute Informasi & Legal

| Rute | Nama Fitur | Status UX V7 | Mobile Ready | Backend / Data | Catatan V7 & Keamanan |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `/venue` | Panduan Lokasi GOR UNY | Audit Selesai; Siap V7 | Ya | Statis / Info Resmi | Fokus GOR UNY, rute akses, Google Maps embed/link, tanpa zonasi fiktif. |
| `/tentang` | Tentang JKB 2026 | Audit Selesai; Siap V7 | Ya | Statis | Narasi otentik "Di Balik Kalem" & #JOGJAPUNYANYALI dalam bahasa Indonesia natural. |
| `/faq` | Pertanyaan Umum | Audit Selesai; Siap V7 | Ya | FAQ Accordion | Grup pertanyaan esensial tiket, venue, jadwal; jawaban dapat di-expand. |
| `/kontak` | Kontak Penyelenggara | Audit Selesai; Siap V7 | Ya | Contact Form API | Kontak resmi & form pesan dengan sanitasi input. |
| `/syarat-ketentuan` | Syarat & Ketentuan | Terverifikasi | Ya | Legal text | Teks legal festival & tiket. |
| `/kebijakan-privasi` | Kebijakan Privasi | Terverifikasi | Ya | Legal text | Teks privasi data pengunjung & peserta. |

---

## 4. Rute Khusus & Terisolasi (PPV & Admin)

| Rute | Nama Fitur | Status UX V7 | Mobile Ready | Backend / Data | Catatan V7 & Keamanan |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `/ppv` | PPV Info / Pass | Disembunyikan dari Nav Utama | Ya | Milestone 9A Gated | Kode & data aman; tidak dipromosikan di navigasi publik utama sampai ada keputusan resmi. |
| `/ppv/watch` | PPV Live Player | Entitlement Gated | Ya | Protected Session | Hanya terbuka bagi user dengan tiket/entitlement terverifikasi server. |
| `/admin/*` (12 rute) | Admin Console | Fungsional; Perlu Drawer Mobile | Perlu Drawer Mobile | NextAuth RBAC (ADMIN) | Navigasi admin dipisah dari publik; sidebar mobile wajib collapse menjadi drawer; tabel responsive. |

---

## 5. Ringkasan Status Rute

- **Total Rute Teridentifikasi:** 35 rute
- **Rute Publik Utama & Komunitas:** 21 rute
- **Rute Keamanan Komersial (Checkout/PPV):** 2 rute (gated)
- **Rute Admin Konsol:** 12 rute (RBAC protected)
- **Status Verifikasi Baseline:**
  - TypeScript compilation: 0 errors
  - Production build: Berhasil (31/31 rute statis & dinamis)
  - Milestone 9A Safety: 11/11 tests pass
