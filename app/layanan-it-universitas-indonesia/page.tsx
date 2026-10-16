import React from "react";
import PageHeader from "@/components/PageHeader";
import {
  Briefcase,
  MessageCircle,
  Laptop,
  Server,
  UserCheck,
  Search,
  Shield,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";

export default function LayananITUniversitasIndonesiaPage() {
  const servicePillars = [
    {
      id: "administrative",
      title: "1. Administrative and Business",
      icon: <Briefcase className="w-6 h-6 text-black" />,
      desc: "Sistem pendukung tata kelola administrasi, keuangan, pengadaan, dan persuratan resmi universitas.",
      services: [
        "SIPEG (Sistem Informasi Kepegawaian & BKD)",
        "SIPRA (Sistem Informasi Perencanaan & Anggaran)",
        "Sistem Inventarisasi Aset & Pengadaan Barang",
        "E-Office (Persuratan & Disposisi Naskah Dinas Elektronik)",
      ],
    },
    {
      id: "communication",
      title: "2. Communication and Collaboration",
      icon: <MessageCircle className="w-6 h-6 text-black" />,
      desc: "Sarana komunikasi digital, konferensi audio-video, dan kolaborasi dokumen antar sivitas akademika.",
      services: [
        "Email Resmi Mahasiswa & Dosen UI (@ui.ac.id)",
        "Microsoft Teams & Zoom Enterprise Kampus",
        "Penyimpanan Kolaboratif Cloud (OneDrive 1 TB & Google Drive)",
        "Portal Pengumuman & Berita Resmi Universitas",
      ],
    },
    {
      id: "endpoint",
      title: "3. End-Point Computing",
      icon: <Laptop className="w-6 h-6 text-black" />,
      desc: "Dukungan perangkat kerja komputasi pengguna, instalasi software berlisensi, dan konfigurasi desktop/laptop.",
      services: [
        "Penyediaan Lisensi Windows & Microsoft 365",
        "Instalasi Antivirus Endpoint Protection Terkelola",
        "Bantuan Konfigurasi Komputer Staf Departemen",
        "Standardisasi Pengadaan Perangkat Keras Kantor",
      ],
    },
    {
      id: "infrastructure",
      title: "4. Infrastructure",
      icon: <Server className="w-6 h-6 text-black" />,
      desc: "Pusat data terpadu, konektivitas serat optik, jaringan nirkabel, dan infrastruktur cloud.",
      services: [
        "Hotspot Wi-Fi UI & Roaming Akademik Eduroam",
        "Data Center Tier-Standard & Disaster Recovery Center (DRC)",
        "Backbone Jaringan Kampus Berkecepatan 10 Gbps",
        "Virtual Machine (VM) & Web Hosting Fakultas",
      ],
    },
    {
      id: "professional",
      title: "5. IT Professional Services",
      icon: <UserCheck className="w-6 h-6 text-black" />,
      desc: "Konsultasi teknologi, audit sistem informasi, integrasi API, dan pelatihan literasi digital civitas.",
      services: [
        "Audit IT General Control (ITGC) & Kepatuhan Regulasi",
        "Konsultasi Arsitektur Enterprise Sistem Fakultas",
        "Pelatihan Bersertifikat AI, Cloud, dan Keamanan TI",
        "Layanan Integrasi Single Sign-On (SSO) Aplikasi Baru",
      ],
    },
    {
      id: "research",
      title: "6. Research",
      icon: <Search className="w-6 h-6 text-black" />,
      desc: "Fasilitas komputasi kinerja tinggi (HPC), lisensi perangkat lunak pengolahan data, dan repositori riset.",
      services: [
        "Akses Jaringan VPN UI untuk Repositori Jurnal Internasional",
        "Lisensi Kampus MATLAB, Simulink, dan IBM SPSS",
        "Manajemen Sitasi Riset (Mendeley Institutional Edition)",
        "UI Scholars Hub & Repositori Karya Ilmiah Terbuka",
      ],
    },
    {
      id: "security",
      title: "7. Security",
      icon: <Shield className="w-6 h-6 text-black" />,
      desc: "Perlindungan aset digital, pertahanan siber berlapis, dan respons cepat tim tanggap insiden.",
      services: [
        "Tim Tanggap Insiden Keamanan Siber (UI-CSIRT)",
        "Web Application Firewall (WAF) & DDoS Protection",
        "Pemantauan Keamanan Jaringan Kampus 24/7",
        "Sosialisasi Cyber Security Awareness & Simulasi Phishing",
      ],
    },
    {
      id: "teaching",
      title: "8. Teaching and Learning",
      icon: <GraduationCap className="w-6 h-6 text-black" />,
      desc: "Ekosistem pembelajaran daring, sistem informasi akademik, dan evaluasi hasil studi mahasiswa.",
      services: [
        "SIAK-NG (Sistem Informasi Akademik Terintegrasi)",
        "EMAS UI (Learning Management System berbasis Moodle)",
        "SIMAK UI (Sistem Ujian Seleksi Masuk Daring)",
        "Ruang Ujian Berbasis Komputer (CBT Center)",
      ],
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="Layanan IT Universitas Indonesia"
        subtitle="Katalog lengkap 8 pilar layanan sistem dan teknologi informasi yang dikelola oleh Direktorat Transformasi Digital UI."
        breadcrumbs={[
          { label: "Layanan STI", href: "/layanan-it-universitas-indonesia" },
          { label: "Katalog Layanan IT" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-16">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold text-[#d49b00] uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Katalog Layanan DTD
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900">
            Delapan Pilar Layanan Teknologi Informasi UI
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Untuk memastikan tata kelola yang rapi dan terukur, DTD UI mengelompokkan portofolio layanannya ke dalam 8 kategori utama sesuai standar internasional tata kelola IT perguruan tinggi.
          </p>
        </div>

        {/* 8 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicePillars.map((pillar) => (
            <div
              key={pillar.id}
              id={pillar.id}
              className="p-8 bg-white border border-gray-100 hover:border-[#fcb900] rounded-2xl shadow-sm hover:shadow-lg transition-all space-y-4 flex flex-col justify-between scroll-mt-28"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#fcb900] rounded-xl flex items-center justify-center shadow">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {pillar.title}
                  </h3>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {pillar.desc}
                </p>

                <div className="pt-2">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">
                    Layanan Utama yang Tersedia:
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                    {pillar.services.map((svc, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{svc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
