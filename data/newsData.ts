export interface NewsItem {
  id: number;
  slug: string;
  date: string;
  title: string;
  image: string;
  category: string;
  author: string;
  summary: string;
  content: string[];
}

export const allNewsData: NewsItem[] = [
  {
    id: 1,
    slug: "apresiasi-dedikasi-dan-pengabdian-dtd-ui-gelar-seremoni-pelepasan-purnabakti",
    date: "SEPTEMBER 4, 2026",
    title:
      "Apresiasi Dedikasi dan Pengabdian: DTD UI Gelar Seremoni Pelepasan Purnabakti Ibu Yuliani, Bapak Prabowo, dan Bapak Purwanto",
    image:
      "https://dtd.ui.ac.id/wp-content/uploads/sites/3/2026/09/IMG_2124-700x430.jpg",
    category: "Berita",
    author: "Humas DTD UI",
    summary:
      "Direktorat Transformasi Digital Universitas Indonesia (DTD UI) menggelar seremoni pelepasan purnabakti bagi tiga pegawai terbaiknya atas pengabdian panjang memajukan sistem teknologi informasi kampus.",
    content: [
      "Depok, dtd.ui.ac.id – Direktorat Transformasi Digital Universitas Indonesia (DTD UI) menyelenggarakan seremoni pelepasan purnabakti yang penuh kehangatan dan rasa hormat bagi Ibu Yuliani, Bapak Prabowo, dan Bapak Purwanto. Acara ini berlangsung di Ruang Pertemuan Utama Gedung DTD Kampus UI Depok.",
      "Ketiga sosok purnabakti tersebut telah mendedikasikan puluhan tahun masa baktinya dalam merintis, membangun, dan memelihara infrastruktur sistem informasi di lingkungan Universitas Indonesia sejak era Puskom UI hingga kini bertransformasi menjadi DTD UI.",
      "Direktur Transformasi Digital UI dalam sambutannya menyampaikan apresiasi mendalam dan rasa terima kasih yang sebesar-besarnya atas segala dedikasi, integritas, dan kerja keras yang telah diberikan.",
      "Acara pelepasan diakhiri dengan penyerahan cenderamata penghargaan, ramah tamah, serta sesi foto bersama seluruh jajaran pimpinan dan staf DTD UI.",
    ],
  },
  {
    id: 2,
    slug: "ui-gelar-pelatihan-teknis-secure-software-development",
    date: "JULY 29, 2026",
    title:
      "UI Gelar Pelatihan Teknis Secure Software Development untuk Perkuat Keamanan Aplikasi Kampus",
    image:
      "https://dtd.ui.ac.id/wp-content/uploads/sites/3/2026/07/IMG_1771-700x430.jpg",
    category: "Pelatihan",
    author: "Tim Keamanan Siber DTD",
    summary:
      "Universitas Indonesia (UI) melalui Direktorat Transformasi Digital (DTD) menggelar pelatihan teknis Secure Software Development bagi seluruh pengembang aplikasi di lingkungan UI.",
    content: [
      "DEPOK — Universitas Indonesia (UI) melalui Direktorat Transformasi Digital (DTD) menyelenggarakan pelatihan intensif bertajuk Secure Software Development Lifecycle (SSDLC). Program ini bertujuan untuk membekali para software engineer dan programmer di seluruh fakultas serta unit kerja dengan standar pengkodean aman.",
      "Dalam pelatihan ini, peserta mempraktikkan mitigasi terhadap kerentanan OWASP Top 10, teknik static and dynamic code analysis, serta implementasi pipeline CI/CD yang terintegrasi dengan security scanning otomatis.",
      "Melalui kegiatan ini, DTD UI berkomitmen menghadirkan ekosistem aplikasi kampus yang tidak hanya fungsional dan ramah pengguna, tetapi juga tangguh dalam menghadapi berbagai potensi ancaman siber modern.",
    ],
  },
  {
    id: 3,
    slug: "ui-gelar-workshop-tanggap-insiden-keamanan-informasi",
    date: "JULY 23, 2026",
    title:
      "UI Gelar Workshop Tanggap Insiden Keamanan Informasi, Perkuat Benteng Kedaulatan Digital Perguruan Tinggi",
    image:
      "https://dtd.ui.ac.id/wp-content/uploads/sites/3/2026/07/IMG_1705-700x430.jpg",
    category: "Keamanan Siber",
    author: "UI-CSIRT DTD",
    summary:
      "UI menggelar Workshop Tanggap Insiden Keamanan Informasi sebagai langkah strategis dalam memitigasi risiko keamanan digital dan memperkuat kedaulatan informasi perguruan tinggi.",
    content: [
      "DEPOK — Mengantisipasi peningkatan eskalasi ancaman siber global, Universitas Indonesia (UI) melalui unit UI-CSIRT (Computer Security Incident Response Team) yang bernaung di bawah DTD menggelar Workshop Tanggap Insiden Keamanan Informasi.",
      "Workshop ini menghadirkan simulasi Tabletop Cyber Drill yang menguji kesiapan tim tanggap insiden fakultas dan universitas dalam merespons insiden serangan ransomware, kebocoran data, dan defacement website.",
      "Kerja sama lintas unit dan pemahaman SOP penanganan insiden siber yang terpadu menjadi kunci utama keberhasilan perlindungan aset digital dan data civitas akademika UI.",
    ],
  },
  {
    id: 4,
    slug: "perkuat-tata-kelola-digital-audit-itgc-2026",
    date: "JULY 20, 2026",
    title:
      "Perkuat Tata Kelola Digital, Universitas Indonesia Resmi Menyelenggarakan Audit IT General Control (ITGC) 2026",
    image:
      "https://dtd.ui.ac.id/wp-content/uploads/sites/3/2026/07/IMG_1570-700x430.jpg",
    category: "Berita",
    author: "Tata Kelola TI DTD",
    summary:
      "ITTC Universitas Indonesia melalui DTD UI secara resmi menggelar kick-off meeting Audit IT General Control (ITGC) 2026 guna memastikan kepatuhan dan keandalan tata kelola TI.",
    content: [
      "DEPOK — Universitas Indonesia menegaskan komitmennya terhadap tata kelola teknologi informasi berstandar internasional dengan melaksanakan Audit IT General Control (ITGC) 2026.",
      "Audit ITGC ini mencakup evaluasi menyeluruh terhadap kontrol akses logis dan fisik, manajemen perubahan sistem informasi (change management), operasi pusat data, serta rencana pemulihan bencana (Disaster Recovery Plan / DRP).",
      "Langkah ini penting untuk memastikan seluruh sistem informasi akademik, keuangan, dan sumber daya manusia berjalan dengan transparansi tinggi, andal, dan memenuhi regulasi yang berlaku.",
    ],
  },
  {
    id: 5,
    slug: "pelatihan-ai-dosen-tendik-gemini-academy-fellow-2026",
    date: "JULY 1, 2026",
    title: "Pelatihan AI untuk Dosen dan Tendik: Gemini Academy Fellow 2026",
    image:
      "https://dtd.ui.ac.id/wp-content/uploads/sites/3/2026/07/google-700x430.png",
    category: "Pelatihan",
    author: "Tim Inovasi DTD UI",
    summary:
      "DTD UI bekerja sama dengan mitra teknologi global menghadirkan program pelatihan kecerdasan buatan Gemini Academy Fellow 2026 untuk mendukung produktivitas dosen dan tenaga kependidikan.",
    content: [
      "DEPOK — Kecerdasan Buatan (Artificial Intelligence) terus mengubah cara kita bekerja dan belajar. DTD UI menggelar program Gemini Academy Fellow 2026 yang diikuti oleh ratusan dosen dan tenaga kependidikan dari berbagai fakultas di Universitas Indonesia.",
      "Peserta dilatih memanfaatkan generative AI untuk pembuatan materi ajar interaktif, percepatan riset akademik, otomatisasi alur administrasi, hingga analisis data kampus.",
      "Inisiatif ini merupakan bagian dari pilar transformasi digital UI menuju universitas riset bertaraf dunia yang adaptif terhadap lompatan teknologi masa depan.",
    ],
  },
  {
    id: 6,
    slug: "selamat-jalan-bapak-hilman",
    date: "MAY 14, 2026",
    title: "Selamat jalan Bapak Hilman",
    image:
      "https://dtd.ui.ac.id/wp-content/uploads/sites/3/2026/05/Bapak-Muhammad-Hafizzuddin-Hilman-1-700x430.png",
    category: "Berita",
    author: "Keluarga Besar DTD UI",
    summary:
      "In memoriam: Ungkapan duka cita mendalam atas berpulangnya rekan, sahabat, dan insan berdedikasi tinggi di DTD UI, Bapak Muhammad Hafizzuddin Hilman.",
    content: [
      "Inna lillahi wa inna ilaihi raji'un. Segenap keluarga besar Direktorat Transformasi Digital Universitas Indonesia menyampaikan duka cita yang mendalam atas berpulangnya Bapak Muhammad Hafizzuddin Hilman.",
      "Almarhum dikenal sebagai pribadi yang santun, pekerja keras, berdedikasi tinggi, dan selalu bersemangat membantu rekan kerja serta melayani civitas akademika UI dengan ketulusan hati.",
      "Semoga segala amal ibadah dan dedikasi almarhum selama mengabdi di UI diterima di sisi Tuhan Yang Maha Esa, dan keluarga yang ditinggalkan senantiasa diberikan ketabahan dan kekuatan.",
    ],
  },
  {
    id: 7,
    slug: "perkuat-tata-kelola-ti-sosialisasi-jabatan-fungsional-pranata-komputer",
    date: "APRIL 10, 2026",
    title:
      "Perkuat Tata Kelola TI, UI Gelar Sosialisasi Jabatan Fungsional Pranata Komputer bagi Pegawai",
    image:
      "https://dtd.ui.ac.id/wp-content/uploads/sites/3/2026/04/WhatsApp-Image-2026-04-10-at-09.03.47.jpeg",
    category: "Berita",
    author: "SDM & Tata Kelola DTD",
    summary:
      "Sosialisasi pengembangan karir dan penilaian angka kredit jabatan fungsional pranata komputer untuk mendorong profesionalisme staf TI UI.",
    content: [
      "DEPOK — Direktorat Transformasi Digital bersama Biro SDM UI menyelenggarakan Sosialisasi Jabatan Fungsional Pranata Komputer. Kegiatan ini dihadiri oleh puluhan tenaga kependidikan di bidang TI dari berbagai fakultas dan program studi di UI.",
      "Sosialisasi membahas mekanisme pengusulan angka kredit, uji kompetensi, dan jenjang karir pranata komputer berdasarkan regulasi terbaru Badan Pusat Statistik (BPS) dan Kementerian PANRB.",
      "Diharapkan kegiatan ini memotivasi para insan TI UI untuk terus meningkatkan kompetensi dan profesionalismenya demi mendukung transformasi digital universitas.",
    ],
  },
  {
    id: 8,
    slug: "wujudkan-ekosistem-digital-terpadu-ui-digital-leap-2026",
    date: "MARCH 4, 2026",
    title: "Wujudkan Ekosistem Digital Terpadu, Universitas Indonesia Gelar 'UI Digital LEAP 2026'",
    image:
      "https://dtd.ui.ac.id/wp-content/uploads/sites/3/2026/03/IMG_1420-scaled.jpg",
    category: "Event",
    author: "Humas DTD UI",
    summary:
      "Peluncuran inisiatif terpadu UI Digital LEAP 2026 sebagai peta jalan integrasi seluruh layanan akademik, administrasi, dan kemahasiswaan ke dalam single platform.",
    content: [
      "DEPOK — Universitas Indonesia menggelar acara puncak 'UI Digital LEAP 2026'. Program ini merangkum serangkaian lompatan inovasi digital UI yang mencakup pembaruan arsitektur cloud, penguatan keamanan data pribadi, dan peluncuran UI SuperApp.",
      "Acara ini dihadiri oleh Rektor UI, Wakil Rektor, para Dekan, pimpinan lembaga, serta mitra industri teknologi nasional dan global.",
      "Melalui program ini, seluruh civitas akademika UI dapat mengakses seluruh layanan kampus hanya dengan satu akun SSO yang aman, cepat, dan mudah diakses dari mana saja.",
    ],
  },
  {
    id: 9,
    slug: "semarak-dies-natalis-ui-ke-76-staf-dtd-juara-2-tendik-berprestasi",
    date: "FEBRUARY 2, 2026",
    title: "Semarak Dies Natalis UI ke-76: Staf DTD Sabet Juara 2 Tendik Berprestasi 2026",
    image:
      "https://dtd.ui.ac.id/wp-content/uploads/sites/3/2026/02/IMG_1171-scaled.jpg",
    category: "Berita",
    author: "Humas DTD UI",
    summary:
      "Prestasi membanggakan ditorehkan staf Direktorat Transformasi Digital yang berhasil meraih Juara 2 Kategori Tenaga Kependidikan Berprestasi dalam rangka Dies Natalis UI ke-76.",
    content: [
      "DEPOK — Peringatan Dies Natalis ke-76 Universitas Indonesia membawa kebanggaan tersendiri bagi DTD UI. Salah satu staf DTD berhasil meraih Juara 2 dalam pemilihan Tenaga Kependidikan Berprestasi Tingkat Universitas Indonesia Tahun 2026.",
      "Penghargaan ini diraih berkat inovasi otomasi pemantauan jaringan kampus dan peningkatan responsivitas helpdesk digital yang telah memberikan dampak nyata bagi ribuan civitas akademika.",
      "Pimpinan dan seluruh staf DTD UI mengucapkan selamat dan sukses, serta berharap prestasi ini dapat menginspirasi seluruh jajaran untuk terus berkarya dan berprestasi.",
    ],
  },
];
