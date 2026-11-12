# AUDIT REFERENSI WEBSITE JKBF 2026 — 21 OKTOBER 2026

## Status dan batasan yang wajib diketahui

- **Objek:** 6 situs benchmark publik: BYON Combat, GLORY Kickboxing, UFC, ONE Championship, Sónar, Gymshark. Termasuk sublayanan BYONTIX, ONE Ticket Help, SónarApp sebagai jalur fungsi yang relevan.
- **Metode yang berhasil:** penelusuran konten halaman publik dan dokumentasi resmi; perbandingan fitur dengan 23 rute publik JKBF yang sudah teridentifikasi dari proyek.
- **Foto/screenshot BENCHMARK eksternal:** **BELUM dapat diambil otomatis di sesi ini**. Jaringan browser container dibatasi. Jangan menafsirkan gambar pada folder `03_BUKTI_JKBF_BASELINE` sebagai screenshot BYON/GLORY/dll.
- **Foto/screenshot JKBF:** 134 PNG dari ZIP audit JKBF yang telah tersedia di konteks proyek, disalin apa adanya untuk kemudahan perbandingan. Arsip historis, tidak membuktikan website production terkini.
- **Untuk screenshot benchmark asli:** jalankan `04_ALAT_CAPTURE_REFERENSI/capture_references.py` pada komputer dengan akses internet, atau gunakan Work/Cloud Browser untuk capture manual lengkap termasuk state interaksi.
- **Tidak dilakukan:** login ke akun pihak ketiga, pembelian tiket, pembayaran, bypass anti-bot, mengambil data private, mengklaim QA fungsional end-to-end tanpa pengujian browser.

## Executive decision

**Jangan menyalin 6 desain sekaligus.** Gunakan bahasa visual combat BYON + struktur pertarungan GLORY/ONE + informasi multi-hari Sónar + kejelasan commerce Gymshark + utilitas event UFC. Sistem identitas tetap milik JKBF: hitam #0B0B0B, merah #D91F2C, ivory #F4F0E8, tagline/simbol Jogja yang proporsional. Hindari homepage berupa 25 section seperti katalog komponen; tampilkan 7–9 modul yang memiliki tujuan kuat.

### Lima prinsip yang wajib menembus semua halaman
1. **Satu pekerjaan utama per layar:** hero untuk memahami event; tiket untuk membeli; jadwal untuk memilih sesi; fighter untuk melihat roster.
2. **Mobile 390px jadi standar kualitas:** ukuran heading, line breaks, sticky nav/CTA, thumb reach, accordions, horizontal carousels secukupnya.
3. **Status dan data nyata:** Coming Soon, On Sale, Sold Out, Announced, TBA, Result Pending; jangan petarung, lineup, harga, sponsor fiktif.
4. **Alur aman:** redesign public UI boleh ekstrem; API, authentication, role-based access, payment and entitlements tidak boleh terganggu.
5. **Berbeda secara visual, selaras dalam sistem:** halaman editorial punya whitespace; commerce informatif; sports data ringkas; festival schedule mudah dipindai.

## BYON Combat
**Situs:** https://byoncombat.com/
**Karakter:** Combat-native; homepage countdown, fight records and ticket/PPV funnels
**Kelebihan utama:** Motivasi fight-night, visual pertarungan sebagai jualan utama, jalur tiket vs PPV berbeda
**Batasan audit:** Fighters dan rankings pada inspeksi publik memerlukan login; tiket/PPV menuju layanan eksternal; jangan salin flow gated

| ID | Fitur yang diperiksa | Mengapa berguna | Adaptasi JKBF | Prioritas | Bukti |
|---|---|---|---|---|---|
| R001 | [Home hero event dengan CTA tiket](https://byoncombat.com/) | Memusatkan perhatian pada satu event dominan serta tombol aksi yang terlihat cepat. | `/` | P0 | Terverifikasi publik |
| R002 | [Countdown event](https://byoncombat.com/) | Mendorong sense of occasion dan memberi orientasi waktu menuju event. | `/` | P0 | Terverifikasi publik |
| R003 | [Dua CTA Ticket dan PPV](https://byoncombat.com/) | Memisahkan pengunjung offline dan penonton stream, mengurangi kebingungan niat. | `/tiket; /ppv` | P0 | Terverifikasi publik |
| R004 | [Fight highlights dan hasil pemenang](https://byoncombat.com/) | Fight proof memperkuat kredibilitas dan konten pascaacara. | `/championship; /fighters` | P1 | Terverifikasi publik |
| R005 | [Past fights / replay list](https://byoncombat.com/) | Memperpanjang usia konten setelah event dan nilai PPV/replay. | `/ppv; /ppv/watch` | P1 | Terverifikasi publik |
| R006 | [Achievement/social proof block](https://byoncombat.com/) | Angka pencapaian membantu membangun kepercayaan audiens. | `/tentang` | P1 | Terverifikasi publik |
| R007 | [Event archive](https://byoncombat.com/events/) | Membantu pengunjung menjelajahi rangkaian atau histori event. | `/championship` | P2 | Terverifikasi publik |
| R008 | [Fighters area (login-gated)](https://byoncombat.com/fighters/) | Potensi centralisasi roster, namun fungsi setelah login belum diverifikasi. | `/fighters` | P1 | Terbatas: login |
| R009 | [Rankings area (login-gated)](https://byoncombat.com/rankings/) | Potensi aspirasi ranking; belum dapat inspeksi konten autentik setelah login. | `/fighters; /bracket` | P2 | Terbatas: login |
| R010 | [Account/login gateway](https://byoncombat.com/login/) | Mempisahkan area publik dari tindakan anggota. | `/creator/dashboard` | P2 | Terverifikasi publik |
| R011 | [Byontix event ticket/fight-card entry](https://byontix.com/) | Fight card dan alur pembelian terlihat dekat dalam satu konteks event. | `/tiket; /championship` | P1 | Terverifikasi publik |
| R012 | [Byontix reserve/waiting-list/allocation explainer](https://byontix.com/) | Edukasi proses transaksi kompleks dengan alur 01-02-03 yang ringkas. | `/tiket; /checkout` | P2 | Terverifikasi publik |

**Batasan penerapan:** Semua data pemenang, petarung, jadwal, tiket, sponsor dan hak video wajib bersumber dari sistem JKBF yang benar-benar sah; jangan copy design asset, wording atau brand identity pihak lain.


## GLORY Kickboxing
**Situs:** https://glorykickboxing.com/
**Karakter:** Fight card, match results, division rankings, ticket/watch pathways
**Kelebihan utama:** Informasi pertandingan yang presisi dan dapat dibaca tanpa narasi berlebihan
**Batasan audit:** Beberapa fungsi watch ditentukan negara; berita dan ranking bisa berubah; standings profesional tidak otomatis sesuai exhibition JKBF

| ID | Fitur yang diperiksa | Mengapa berguna | Adaptasi JKBF | Prioritas | Bukti |
|---|---|---|---|---|---|
| R013 | [Event hero dan main fight](https://glorykickboxing.com/) | Pengunjung langsung tahu pertarungan utama, venue, dan kesempatan beli tiket. | `/` | P0 | Terverifikasi publik |
| R014 | [Detail event + venue](https://glorykickboxing.com/events/glory-110) | Menyatukan konteks date/location, fight card, dan watch dalam satu halaman. | `/championship` | P0 | Terverifikasi publik |
| R015 | [Tab Main Card/Superfight Series](https://glorykickboxing.com/events/glory-110) | Memecah banyak partai dalam kelompok yang mudah dipindai. | `/championship; /jadwal` | P0 | Terverifikasi publik |
| R016 | [Result method KO/TKO/decision](https://glorykickboxing.com/events/glory-110) | Membantu penonton memahami hasil secara objektif. | `/bracket; /fighters` | P1 | Terverifikasi publik |
| R017 | [Round + time finality](https://glorykickboxing.com/events/glory-110) | Menambah detail useful pada scorecards dan highlight. | `/bracket` | P2 | Terverifikasi publik |
| R018 | [Fighters per weight division](https://glorykickboxing.com/fighters) | Fighter discovery terstruktur berdasarkan divisi. | `/fighters` | P1 | Terverifikasi publik |
| R019 | [Fighter click to details](https://glorykickboxing.com/fighters) | Identitas fighter bukan kartu dekoratif; dapat dibuka detail. | `/fighters/[slug]` | P1 | Terverifikasi publik |
| R020 | [News/category filters](https://glorykickboxing.com/news) | Memberi kontrol browse berita: Results/Video/Official Release, dll. | `/tentang; /` | P2 | Terverifikasi publik |
| R021 | [Watch hub country options](https://glorykickboxing.com/watch) | Membuat jalur menonton jelas per wilayah. | `/ppv` | P1 | Terverifikasi publik |
| R022 | [Newsletter registration](https://glorykickboxing.com/) | Membangun kanal owned-audience pra-event dan pascaevent. | `/; /kontak` | P2 | Terverifikasi publik |
| R023 | [Rules & conduct footer](https://glorykickboxing.com/) | Jalur legal/etika meningkatkan rasa profesional. | `/syarat-ketentuan; /faq` | P1 | Terverifikasi publik |
| R024 | [Partnership nav](https://glorykickboxing.com/) | Jalur sponsorship jelas bagi calon brand. | `/kontak` | P0 | Terverifikasi publik |

**Batasan penerapan:** Semua data pemenang, petarung, jadwal, tiket, sponsor dan hak video wajib bersumber dari sistem JKBF yang benar-benar sah; jangan copy design asset, wording atau brand identity pihak lain.


## UFC
**Situs:** https://www.ufc.com/events
**Karakter:** Event listing, bout tiers, start time, venue, watch, tickets
**Kelebihan utama:** Struktur satu event dari jadwal sampai kartu pertandingan dan tiket
**Batasan audit:** Homepage/athletes mengembalikan 403 pada browser penelusuran; jangan klaim audit interaksi penuh

| ID | Fitur yang diperiksa | Mengapa berguna | Adaptasi JKBF | Prioritas | Bukti |
|---|---|---|---|---|---|
| R025 | [Events searchable listing](https://www.ufc.com/events) | Pengunjung bisa mencari event dan melihat upcoming cards. | `/jadwal` | P1 | Terverifikasi indeks; 403 akses langsung |
| R026 | [Event time segmented by prelims/main](https://www.ufc.com/events) | Mengklarifikasi berbagai sesi acara pada satu tanggal. | `/jadwal` | P0 | Terverifikasi indeks; 403 akses langsung |
| R027 | [Venue/event card listing](https://www.ufc.com/events) | Lokasi, tanggal, judul pertandingan dan tayangan tampil terkoneksi. | `/venue; /championship` | P0 | Terverifikasi indeks; 403 akses langsung |
| R028 | [How to Watch action](https://www.ufc.com/events) | CTA menonton ditempatkan berdampingan dengan event. | `/ppv` | P1 | Terverifikasi indeks; 403 akses langsung |
| R029 | [Ticket availability and onsale timing](https://www.ufc.com/events) | Membuat penjualan tiket transparan berdasarkan status on sale. | `/tiket` | P1 | Terverifikasi indeks; 403 akses langsung |
| R030 | [Filter upcoming events](https://www.ufc.com/events) | Pengunjung dapat menyaring daftar yang panjang. | `/jadwal` | P2 | Terverifikasi indeks; 403 akses langsung |

**Batasan penerapan:** Semua data pemenang, petarung, jadwal, tiket, sponsor dan hak video wajib bersumber dari sistem JKBF yang benar-benar sah; jangan copy design asset, wording atau brand identity pihak lain.


## ONE Championship
**Situs:** https://www.onefc.com/
**Karakter:** Fight cards, athletes, results, highlight videos, multilingual event content
**Kelebihan utama:** Kelengkapan konteks pertarungan dan ekosistem media yang terintegrasi
**Batasan audit:** Konten per region/stream dan akun Inner Circle tidak semuanya publik

| ID | Fitur yang diperiksa | Mengapa berguna | Adaptasi JKBF | Prioritas | Bukti |
|---|---|---|---|---|---|
| R031 | [Next event hero](https://www.onefc.com/) | Orientasi cepat menuju event terdekat dari homepage. | `/` | P0 | Terverifikasi publik |
| R032 | [Upcoming vs past event listing](https://www.onefc.com/events/) | Memisahkan status event dan memberi ekspektasi yang jelas. | `/jadwal; /championship` | P1 | Terverifikasi publik |
| R033 | [Fight card discipline/weight](https://www.onefc.com/events/one-friday-fights-126/) | Setiap duel memiliki ruleset dan kelas berat yang jelas. | `/championship` | P0 | Terverifikasi publik |
| R034 | [Outcome badge WIN KO/TKO/UD](https://www.onefc.com/events/one-friday-fights-126/) | Hasil bisa dipindai tanpa membaca paragraf. | `/bracket; /championship` | P1 | Terverifikasi publik |
| R035 | [Highlights per bout](https://www.onefc.com/events/one-friday-fights-126/) | Setiap hasil terhubung ke video bukti/hiburan. | `/championship; /ppv` | P2 | Terverifikasi publik |
| R036 | [Athlete ranking nav](https://www.onefc.com/rankings/) | Referensi pemetaan roster dan kelas kompetisi. | `/fighters` | P2 | Terverifikasi publik |
| R037 | [Event watch/buy ticket CTA](https://www.onefc.com/events/) | Akses tayangan, tiket, dan info event konsisten dari banyak halaman. | `/tiket; /ppv` | P0 | Terverifikasi publik |
| R038 | [How-to-purchase docs](https://onechampionship.zendesk.com/hc/en-us/articles/35998314091671-Purchasing-a-Ticket) | Menjelaskan review order, checkout, email confirmation dan nonton online. | `/checkout; /faq` | P0 | Terverifikasi dokumentasi |
| R039 | [Add to calendar](https://calendar.onefc.com/) | Penonton dapat menyimpan jadwal dan menerima update. | `/jadwal; /` | P1 | Terverifikasi publik |
| R040 | [Local language navigation](https://www.onefc.com/id/) | Mengurangi friksi pengguna Indonesia dan internasional. | `/; /faq` | P1 | Terverifikasi publik |
| R041 | [News, commentary, content categories](https://www.onefc.com/) | Membangun kedalaman cerita di luar pertandingan. | `/tentang; /` | P2 | Terverifikasi publik |

**Batasan penerapan:** Semua data pemenang, petarung, jadwal, tiket, sponsor dan hak video wajib bersumber dari sistem JKBF yang benar-benar sah; jangan copy design asset, wording atau brand identity pihak lain.


## Sónar
**Situs:** https://sonar.es/en/
**Karakter:** Festival lineup by day, timetable, stages, tickets, practical visitor guides
**Kelebihan utama:** Pemisahan informasi multi-hari dan experience festival, sangat cocok untuk 3 hari JKBF
**Batasan audit:** Homepage publik sudah membawa informasi edisi berbeda; gunakan halaman arsip 2026 yang tertaut

| ID | Fitur yang diperiksa | Mengapa berguna | Adaptasi JKBF | Prioritas | Bukti |
|---|---|---|---|---|---|
| R042 | [Lineup per day tabs](https://sonar.es/en/programme/line-up) | Membantu penonton melihat lineup tanpa mencampur 3 hari. | `/lineup` | P0 | Terverifikasi publik |
| R043 | [Full artist roster browse](https://sonar.es/en/programme/line-up) | Memudahkan discovery nama artis/penampil. | `/lineup` | P1 | Terverifikasi publik |
| R044 | [Timetable by day tabs](https://live.sonar.es/en/programme/schedule) | Visual hierarki waktu mengurangi kebingungan agenda. | `/jadwal` | P0 | Terverifikasi publik |
| R045 | [Timetable filter stage/category](https://live.sonar.es/en/programme/schedule) | Penonton dapat fokus pada lokasi atau tipe aktivitas tertentu. | `/jadwal` | P0 | Terverifikasi publik |
| R046 | [Ticket variants day/VIP/weekend](https://sonar.es/en/tickets) | Pricing ditampilkan berdasarkan cakupan dan hari. | `/tiket` | P0 | Terverifikasi publik |
| R047 | [Sold-out state](https://sonar.es/en/tickets) | Mencegah pembelian yang tidak tersedia dan mengelola ekspektasi. | `/tiket` | P1 | Terverifikasi publik |
| R048 | [Digital venue map](https://sonar.es/en/practical-info/mapa-2026) | Orientasi lokasi dan akses sangat mudah bagi pengunjung baru. | `/venue` | P0 | Terverifikasi publik |
| R049 | [How to get there](https://live.sonar.es/en/practical-info/how-to-get-there-sonard-2026) | Rute, kendaraan, dan address kontekstual membantu day-of-event. | `/venue` | P1 | Terverifikasi publik |
| R050 | [FAQ operational multi-day](https://live.sonar.es/en/faqs-sonar-2026-novedades) | Jawaban rinci disiapkan sebelum event, mengurangi CS berulang. | `/faq` | P0 | Terverifikasi publik |
| R051 | [Mobile app by day/stage/time/artist](https://sonar.es/en/practical-info/sonarapp) | Memfasilitasi personalisasi jadwal lintas kategori. | `/jadwal; /lineup` | P2 | Terverifikasi publik |
| R052 | [Save shows, reminders, offline schedules](https://sonar.es/en/practical-info/sonarapp) | Mengurangi kehilangan momen dan ketergantungan sinyal. | `/jadwal` | P2 | Terverifikasi publik |
| R053 | [Gallery & post-event archive](https://sonar.es/en/) | Memberi dokumentasi sosial dan nilai pasca-event. | `/tentang` | P2 | Terverifikasi publik |

**Batasan penerapan:** Semua data pemenang, petarung, jadwal, tiket, sponsor dan hak video wajib bersumber dari sistem JKBF yang benar-benar sah; jangan copy design asset, wording atau brand identity pihak lain.


## Gymshark
**Situs:** https://www.gymshark.com/
**Karakter:** E-commerce navigation, filtering, size guide, product storytelling
**Kelebihan utama:** Discoverability katalog dan keputusan belanja yang jelas
**Batasan audit:** Ukuran/fit spesifik brand apparel; cart/checkout checkout tidak diaudit sampai pembayaran

| ID | Fitur yang diperiksa | Mengapa berguna | Adaptasi JKBF | Prioritas | Bukti |
|---|---|---|---|---|---|
| R054 | [Category mega-menu](https://www.gymshark.com/) | Navigasi yang mengelompokkan banyak kategori tanpa halaman penuh kartu. | `/merch` | P1 | Terverifikasi publik |
| R055 | [Shop by activity / collection](https://www.gymshark.com/) | Mendukung pemilihan produk sesuai kebutuhan, bukan daftar acak. | `/merch` | P2 | Terverifikasi publik |
| R056 | [Collection product grid](https://www.gymshark.com/collections/all-products/womens) | Foto produk dan sort terstruktur meningkatkan browsability. | `/merch` | P0 | Terverifikasi publik |
| R057 | [Filter size/type](https://www.gymshark.com/collections/all-products/womens) | User melihat stok/ukuran relevan lebih cepat. | `/merch` | P0 | Terverifikasi publik |
| R058 | [Filter feature/activity](https://www.gymshark.com/collections/all-products/womens) | Filter bisa menyesuaikan kebutuhan belanja dengan rinci. | `/merch` | P2 | Terverifikasi publik |
| R059 | [Sort by price/newness](https://www.gymshark.com/collections/all-products/womens) | Bantu pengunjung membandingkan merchandise. | `/merch` | P1 | Terverifikasi publik |
| R060 | [Size guide entry](https://www.gymshark.com/collections/all-products/womens) | Mencegah salah ukuran dan potensi komplain. | `/merch/[slug]` | P0 | Terverifikasi publik |
| R061 | [Help/accessibility visibility](https://www.gymshark.com/) | Meningkatkan kepercayaan untuk transaksi jarak jauh. | `/faq; /kontak` | P1 | Terverifikasi publik |
| R062 | [Newsletter and branded guides](https://www.gymshark.com/) | Konten editorial mendorong hubungan jangka panjang. | `/tentang` | P2 | Terverifikasi publik |
| R063 | [Region/language selector](https://www.gymshark.com/) | Menjelaskan lokalisasi toko dan pengalaman belanja. | `/merch` | P2 | Terverifikasi publik |

**Batasan penerapan:** Semua data pemenang, petarung, jadwal, tiket, sponsor dan hak video wajib bersumber dari sistem JKBF yang benar-benar sah; jangan copy design asset, wording atau brand identity pihak lain.


## MAP FITUR KE SEMUA 23 HALAMAN PUBLIK JKBF

| Rute | Tujuan UI/UX konkret | Benchmark | Prioritas | Guardrail |
|---|---|---|---|---|
| `/` | Hero combat premium, countdown configurabel 12 Des, primary CTA menuju tiket/registrasi aktif, program snapshot, route to 3-day festival | BYON Combat; GLORY Kickboxing; ONE Championship | P0 | Tidak mengubah endpoint API, tanggal/jam configurable |
| `/championship` | Division tabs, per-bout matchup, confirmed status, results after approval, fight card per day | GLORY Kickboxing; ONE Championship | P0 | Tidak menayangkan fighter fiktif |
| `/fighters` | Filter kategori/kelas/gym; searchable card; verified public data | GLORY Kickboxing; ONE Championship | P1 | Akses profil publik tanpa login, consent |
| `/fighters/[slug]` | Hero portrait, nama gym, weightclass, riwayat publik yang sah, related matchup | GLORY Kickboxing; ONE Championship | P1 | Tidak memakai rekam jejak tanpa data |
| `/bracket` | Bracket legible mobile by round, result display after certified, controlled empty state | GLORY Kickboxing; ONE Championship | P1 | Data source official admin |
| `/lineup` | Tabs 12/13/14 Dec, act cards, stage, performer details, pending states | Sónar | P0 | Jangan mengarang performer |
| `/jadwal` | Tabs day, filter event type/stage/time, timetable readable, add-to-calendar | Sónar; UFC; ONE Championship | P0 | Fallback bila jam belum diumumkan |
| `/venue` | GOR UNY official venue address, directions, zones, practical visitor FAQ | Sónar | P0 | Gunakan peta/aset terverifikasi |
| `/tiket` | Compare price tiers, benefits, availability, refund/payment notices, primary CTA | Sónar; UFC; BYON Combat | P0 | Payment safety critical; preserve current flow |
| `/checkout` | Minimal checkout, clear order summary, validation, fees, step completion | ONE Championship; Gymshark | P0 | Jangan refactor pembayaran/sesuaikan security gates |
| `/konfirmasi` | Verified paid/pending state, next steps, no fake success | ONE Championship | P0 | Status harus dari backend |
| `/ppv` | Watch explainer, package options, access rights, device info, availability | BYON Combat; GLORY Kickboxing; ONE Championship | P1 | Jangan nyalakan bila streaming belum siap |
| `/ppv/watch` | Video player, access state, stream time, issues support | ONE Championship; GLORY Kickboxing | P1 | Paywall/authz server-side |
| `/merch` | Editorial item grid, filters stock and sizing, pricing, no fake inventory | Gymshark | P1 | Data harus dari product API |
| `/merch/[slug]` | Large gallery, sizes, chart, material, checkout CTA, cross-sell restrained | Gymshark | P1 | Maintain cart + stock validation |
| `/creator` | Programme explanation, eligibility, benefits, transparent application CTA | Sónar; Gymshark | P2 | Rules and rewards need approval |
| `/creator/dashboard` | Editorial yet functional stats, assignments, submissions, approval state | Gymshark | P2 | Auth RBAC untouched |
| `/city-pride` | Authentic Jogja storytelling, short map/partner modules, CTA to culture activities | Sónar | P2 | Avoid fake city features |
| `/tentang` | Mission, organizer, verified partners, press releases, genuine proof | BYON Combat; GLORY Kickboxing; Sónar | P1 | No invented metrics |
| `/faq` | Topic filters with collapsible answer, clear ticket/registration rules | Sónar; Gymshark | P0 | Approved legal/operations copy |
| `/kontak` | Separate Fighter vs Partnership contacts, business hours and response expectations | GLORY Kickboxing; Gymshark | P0 | Verify Ardi number; Priya number approved |
| `/syarat-ketentuan` | Readable clauses, subheading navigation, date effective | GLORY Kickboxing; ONE Championship | P0 | Legal review |
| `/kebijakan-privasi` | Contact, data purpose, user rights, privacy clarity | Gymshark; GLORY Kickboxing | P0 | Real data processing practices |


## PRIORITAS PENGERJAAN YANG SAYA SARANKAN

**P0 (wajib sebelum publikasi promosi):** Homepage, tiket, kontak, faq, detail championship, jadwal, lineup state TBA, venue, checkout/payment-safe, konfirmasi asli, terms/privacy. Pilihan UI yang paling berpengaruh adalah countdown + CTA, kategori tiket jelas, jadwal mudah digunakan, contact Fighter vs Partnership terpisah.

**P1:** Fighters, fighter detail, bracket, PPV availability, merch, trust content, map and calendar, mobile filters yang nyata.

**P2:** Creator portal/dashboard refinement, City Pride storytelling, replays/history, fancy visual motion, filters yang belum membutuhkan banyak data.

## APA YANG HARUS DIHINDARI (berdasarkan pembelajaran desain JKBF sebelumnya)
- Tidak membuat setiap bagian sebagai kartu abu-abu seragam atau border berlapis.
- Tidak menggunakan terlalu banyak typography besar pada satu viewport; gunakan 2 hirarki maksimal.
- Tidak memalsukan lineup dan fighter sehingga semua terlihat penuh sebelum data resmi ada.
- Tidak menyamakan pengalaman ticket checkout dengan landing page yang sinematik; checkout harus fungsional dan tenang.
- Tidak memindahkan logika pembayaran ke front-end untuk sekadar memenuhi desain mockup.
- Tidak mengunci fighters public di balik login seperti keterbatasan yang ditemukan pada BYON.
- Tidak menambahkan sistem membership, gambling, betting, atau fungsionalitas yang tak ada dalam scope JKBF.

## RENCANA CAPTURE BENCHMARK YANG BENAR
Setiap URL dalam `REFERENCE_CAPTURE_MANIFEST.csv` semestinya dicapture 4 bukti: desktop first viewport 1440×900, desktop full page, mobile first viewport 390×844, mobile full page. Ada tambahan state menu, tab, filter, accordion, dan selector apabila tersedia. Filename sesuai domain, URL dan state; catat status akses.

**Batasan:** screenshot hanya menyatakan tampilan pada saat capture. Tidak membuktikan payment success, logika backend, hasil internal atau keamanan tanpa pengujian terpisah.

## DELIVERABLE BUKTI
- `03_BUKTI_JKBF_BASELINE/`: **134 screenshot historis JKBF asli** dari arsip audit yang tersedia.
- `05_PREVIEW_BENCHMARK/`: contact sheets untuk meninjau visual baseline secara cepat.
- `02_DATA/`: feature audit, mapping 23 rute, sumber, inventaris capture, provenance screenshot.
- `04_ALAT_CAPTURE_REFERENSI/`: script browser yang bisa dijalankan saat browser punya koneksi internet, tanpa account login atau pembelian.

**Verifikasi situs publik dan fitur detail:** lihat URL per fitur dalam CSV dan tabel audit. Halaman pihak ketiga dapat berubah dari waktu ke waktu, terutama konten acara masa lalu dan situs festival yang beralih ke edisi berikutnya.