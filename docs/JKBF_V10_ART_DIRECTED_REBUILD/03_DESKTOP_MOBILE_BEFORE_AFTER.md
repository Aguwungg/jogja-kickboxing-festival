# JKBF V10 — DOKUMEN KOMPARASI SEBELUM & SESUDAH (V9.2 vs V10)
## DESKTOP (1440×900) & MOBILE (390×844) VISUAL BENCHMARK EVALUATION

**Tanggal:** 14 Oktober 2026  
**Baseline:** JKBF V9.2 Spacious UI (`docs/JKBF_V9_2_SPACIOUS_UI/screenshots/`)  
**Hasil Akhir:** JKBF V10 Art-Directed Rebuild (`docs/JKBF_V10_ART_DIRECTED_REBUILD/screenshots/`)  

---

### 1. RINGKASAN PERUBAHAN RADIKAL V9.2 KE V10

| Aspek Desain | JKBF V9.2 (Sebelumnya) | JKBF V10 (Hasil Implementasi Sekarang) |
| :--- | :--- | :--- |
| **Tipografi Utama** | Menggunakan font display condens generik yang seragam dan cenderung kaku. | Trio tipografi berkarakter: **Bebas Neue** (display gagah skala 6xl–10xl), **Space Grotesk** (label teknis/Tale of Tape), dan **Plus Jakarta Sans** (editorial prose). |
| **Komposisi Hero** | Elemen kartu saling bersaing, badge bertumpuk di atas foto, kurang ketegangan visual sinematik. | **Poster film laga sinematik**: satu subjek dominan, tipografi editorial bertenaga, metadata jelas tanpa tumpukan badge. |
| **Struktur Tata Letak** | Masih didominasi kontainer kartu hitam (*card-heavy*) berulang dengan batas grid konvensional. | **Broadsheet editorial kontemporer**: pembagian babak narasi luas (*The Ring, The Stage, Timetable, The City*), garis pemisah *hairline grid*, dan aksen sudut ring (*ring-corner frame*). |
| **Pengalaman Mobile** | Elemen navigasi dan kartu seringkali berhimpitan; tabel bagan membutuhkan zoom horizontal. | **Mobile-First murni (390px)**: Navigasi drawer terstruktur prioritas, switcher ronde perempat/semifinal/final pada bagan, ukuran sentuh minimal 44–48px. |
| **Kontras & Kelelahan Visual** | Latar belakang cenderung monokromatik datar atau terlalu banyak area gelap monoton. | **Kontras zona dinamis**: Pertarungan malam gelap pekat (*The Ring Obsidian*), sementara jadwal maraton 3 hari menggunakan kanvas *Warm Ivory* yang ramah mata. |

---

### 2. ANALISIS KOMPARASI PER HALAMAN UNGGULAN

#### A. Halaman Beranda (`/`)
- **V9.2 Sebelum:** Hero banner dengan dua kartu terpisah (fighter vs konser) yang berebut fokus mata. Teks penjelasan festival memakan ruang atas.
- **V10 Sesudah:** Hero poster film berwibawa dengan judul "JOGJA KICKBOXING FESTIVAL 2026", sub-judul "DI BALIK KALEM • #JOGJAPUNYANYALI", tanggal dan venue raksasa, satu aksi primer `INFO TIKET` dan tautan sekunder `LIHAT JADWAL`. Empat babak editorial yang mengalir mulus ke arena pertarungan, panggung musik, jadwal harian ivory, dan kebanggaan kota.
- **Screenshot Desktop:** [01_homepage_desktop_viewport.png](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/docs/JKBF_V10_ART_DIRECTED_REBUILD/screenshots/01_homepage_desktop_viewport.png) | [Fullpage](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/docs/JKBF_V10_ART_DIRECTED_REBUILD/screenshots/01_homepage_desktop_fullpage.png)
- **Screenshot Mobile:** [01_homepage_mobile_viewport.png](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/docs/JKBF_V10_ART_DIRECTED_REBUILD/screenshots/01_homepage_mobile_viewport.png) | [Fullpage](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/docs/JKBF_V10_ART_DIRECTED_REBUILD/screenshots/01_homepage_mobile_fullpage.png)

#### B. Redy Championship 2 (`/championship`)
- **V9.2 Sebelum:** Tabel spesifikasi teknis dan kartu divisi standar.
- **V10 Sesudah:** Promosi pertarungan malam spektakuler dengan visual dua petarung berhadapan (*face-off drama*), pameran 4 divisi sabuk emas K-1 dengan rentang berat badan presisi, serta ketentuan eliminasi 3 ronde x 3 menit.
- **Screenshot Desktop:** [02_championship_desktop_viewport.png](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/docs/JKBF_V10_ART_DIRECTED_REBUILD/screenshots/02_championship_desktop_viewport.png)
- **Screenshot Mobile:** [02_championship_mobile_viewport.png](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/docs/JKBF_V10_ART_DIRECTED_REBUILD/screenshots/02_championship_mobile_viewport.png)

#### C. Festival Music Lineup (`/lineup`)
- **V9.2 Sebelum:** Grid kartu foto artis dengan tata letak konvensional.
- **V10 Sesudah:** Atmosfer konser malam outdoor dengan fotografi panggung sinematik beresolusi tinggi, pembagian 3 panggung ikonik (*The Ring Stage, Heritage Stage, Underground Beat*), dan ritme tipografi nama penampil yang dinamis.
- **Screenshot Desktop:** [06_lineup_desktop_viewport.png](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/docs/JKBF_V10_ART_DIRECTED_REBUILD/screenshots/06_lineup_desktop_viewport.png)
- **Screenshot Mobile:** [06_lineup_mobile_viewport.png](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/docs/JKBF_V10_ART_DIRECTED_REBUILD/screenshots/06_lineup_mobile_viewport.png)

#### D. Rundown & Jadwal Festival (`/jadwal`)
- **V9.2 Sebelum:** Tampilan gelap pekat yang melelahkan saat menelusuri puluhan agenda beruntun.
- **V10 Sesudah:** Format *Warm Ivory Timetable* (`#F4F0E8`) ala jadwal turnamen grand-slam internasional. Tab pemilih tanggal (12, 13, 14 Des 2026), label waktu monospaced presisi (*Space Grotesk*), dan penanda panggung yang sangat jernih.
- **Screenshot Desktop:** [07_jadwal_desktop_viewport.png](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/docs/JKBF_V10_ART_DIRECTED_REBUILD/screenshots/07_jadwal_desktop_viewport.png)
- **Screenshot Mobile:** [07_jadwal_mobile_viewport.png](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/docs/JKBF_V10_ART_DIRECTED_REBUILD/screenshots/07_jadwal_mobile_viewport.png)

#### E. Bagan Turnamen Eliminasi (`/bracket`)
- **V9.2 Sebelum:** Struktur pohon turnamen horizontal kaku yang terpotong di layar smartphone.
- **V10 Sesudah:** Pohon bracket 8-man K-1 broadsheet di desktop, dilengkapi **Interactive Round Switcher** di layar mobile (Perempat Final ➔ Semifinal ➔ Final) sehingga bagan tetap terbaca jelas tanpa perlu mencubit layar.
- **Screenshot Desktop:** [05_bracket_desktop_viewport.png](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/docs/JKBF_V10_ART_DIRECTED_REBUILD/screenshots/05_bracket_desktop_viewport.png)
- **Screenshot Mobile:** [05_bracket_mobile_viewport.png](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/docs/JKBF_V10_ART_DIRECTED_REBUILD/screenshots/05_bracket_mobile_viewport.png)

#### F. Direktori & Detail Petarung (`/fighters` & `/fighters/[slug]`)
- **V9.2 Sebelum:** Grid kartu nama atlet dengan badge status bertumpuk.
- **V10 Sesudah:** Direktori foto atlet beresolusi tinggi dengan filter divisi seketika. Halaman profil detail menyajikan lembar *Tale of the Tape* otentik (tinggi, jangkauan, sasana, rekor W-L-D) dengan nomor rekor monumental.
- **Screenshot Desktop:** [03_fighters_desktop_viewport.png](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/docs/JKBF_V10_ART_DIRECTED_REBUILD/screenshots/03_fighters_desktop_viewport.png) | [04_fighter_detail](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/docs/JKBF_V10_ART_DIRECTED_REBUILD/screenshots/04_fighter_detail_desktop_viewport.png)
- **Screenshot Mobile:** [03_fighters_mobile_viewport.png](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/docs/JKBF_V10_ART_DIRECTED_REBUILD/screenshots/03_fighters_mobile_viewport.png) | [04_fighter_detail](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/docs/JKBF_V10_ART_DIRECTED_REBUILD/screenshots/04_fighter_detail_mobile_viewport.png)

#### G. Toko Merchandise Resmi (`/merch` & `/merch/[slug]`)
- **V9.2 Sebelum:** Tampilan e-commerce generik yang padat tombol.
- **V10 Sesudah:** Lookbook streetwear festival kontemporer. Grid produk luas, filter kategori apparel, dan halaman detail produk dengan kurasi foto dominan, pemilih ukuran (S–XXL), serta integrasi keranjang belanja instan.
- **Screenshot Desktop:** [13_merch_desktop_viewport.png](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/docs/JKBF_V10_ART_DIRECTED_REBUILD/screenshots/13_merch_desktop_viewport.png) | [14_merch_detail](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/docs/JKBF_V10_ART_DIRECTED_REBUILD/screenshots/14_merch_detail_desktop_viewport.png)

#### H. Pusat Bantuan & Kontak (`/faq` & `/kontak`)
- **V9.2 Sebelum:** Kotak akordeon dan form sederhana dengan font lawas.
- **V10 Sesudah:** Akordeon obsidian bernomor teknis (`01`, `02`) dengan live search bar dan tag divisi, serta halaman kontak 2-kolom dengan kartu sekretariat panitia GOR UNY yang berwibawa.
- **Screenshot Desktop:** [20_faq_desktop_viewport.png](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/docs/JKBF_V10_ART_DIRECTED_REBUILD/screenshots/20_faq_desktop_viewport.png) | [21_kontak](file:///Users/muhammadagunghendiirawan/Project/JOGJA%20KICKBOXING%20FESTIVAL/docs/JKBF_V10_ART_DIRECTED_REBUILD/screenshots/21_kontak_desktop_viewport.png)

---

*Seluruh tangkapan layar tersimpan secara lokal dan dapat dibuka langsung melalui tautan berkas di atas.*
