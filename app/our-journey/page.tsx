import React from "react";
import PageHeader from "@/components/PageHeader";
import { Clock, Shield, Sparkles, Server, Terminal, Laptop } from "lucide-react";

export default function OurJourneyPage() {
  const milestones = [
    {
      period: "1997 – 2004",
      title: "UPT Puskom UI (Pusat Komputer UI)",
      tagline: "Awal Mula Pengelolaan Komputasi & Jaringan Kampus Terpadu",
      icon: <Terminal className="w-5 h-5 text-black" />,
      desc: "Sejak Juli 1997, dilakukan pemisahan jabatan Kepala UPT Puskom UI dengan Direktur Pusilkom UI. Sejak saat itulah dilakukan serangkaian program restrukturisasi organisasi dan penguatan infrastruktur komputasi dasar, laboratorium komputer, serta inisiasi konektivitas intranet antarfakultas di lingkungan Kampus UI Depok dan Salemba.",
      highlights: [
        "Pendirian Unit Pelaksana Teknis Pusat Komputer UI",
        "Pembangunan infrastruktur kabel serat optik pertama di kampus",
        "Layanan email kampus berbasis server lokal untuk dosen dan staf",
      ],
    },
    {
      period: "2004 – 2006",
      title: "PPSI UI (Pelayanan & Pengembangan Sistem Informasi)",
      tagline: "Integrasi Layanan Informasi & Kelahiran SIAK-NG",
      icon: <Server className="w-5 h-5 text-black" />,
      desc: "Pada 14 Mei 2004, dilakukan penggabungan UPT Puskom UI dengan BAPSI menjadi Direktorat Pengembangan dan Pelayanan Sistem Informasi (PPSI UI). Pada era ini, PPSI berhasil mencatat sejarah dengan meluncurkan Sistem Informasi Akademik Next Generation (SIAK-NG) yang mengintegrasikan seluruh fakultas dalam satu basis data terpadu.",
      highlights: [
        "Peluncuran SIAK-NG (Sistem Informasi Akademik Next Generation)",
        "Sistem pembayaran biaya pendidikan Host-to-Host dengan perbankan nasional",
        "Penerapan UI Smart Card dan fasilitas teleconference berbasis Inherent",
      ],
    },
    {
      period: "2006 – 2013",
      title: "DSTI UI (Direktorat Sistem dan Teknologi Informasi)",
      tagline: "Ekspansi Pita Lebar, Data Center, dan E-Learning",
      icon: <Laptop className="w-5 h-5 text-black" />,
      desc: "Untuk menjawab pesatnya kebutuhan era internet, organisasi bertransformasi menjadi Direktorat Sistem dan Teknologi Informasi (DSTI UI). DSTI memperluas cakupan Wi-Fi kampus, membangun Data Center berstandar tier, meluncurkan portal pembelajaran daring (EMAS UI), serta mengintegrasikan sistem kepegawaian (SIPEG) dan riset.",
      highlights: [
        "Pembangunan Hotspot Wi-Fi di seluruh area publik kampus Depok & Salemba",
        "Platform E-Learning EMAS (Enhancing Modified Activity of Students)",
        "Implementasi Single Sign-On (SSO) terpadu untuk civitas akademika",
      ],
    },
    {
      period: "2013 – Sekarang",
      title: "DTD UI (Direktorat Transformasi Digital)",
      tagline: "Lompatan Ekosistem Smart Campus, Cloud, dan AI",
      icon: <Sparkles className="w-5 h-5 text-black" />,
      desc: "Memasuki era disrupsi digital dan industri 4.0, DSTI berevolusi menjadi Direktorat Transformasi Digital (DTD UI). Fokus DTD kini melampaui sekadar operasional TI; menjadi akselerator transformasi digital UI melalui adopsi cloud computing, penguatan UI-CSIRT untuk keamanan siber, kemitraan lisensi Microsoft 365, integrasi SuperApp kampus, serta pemanfaatan Artificial Intelligence.",
      highlights: [
        "Migrasi ke Hybrid Cloud Architecture & Web Application Firewall (WAF)",
        "Pembentukan Tim Tanggap Insiden Keamanan Siber UI-CSIRT",
        "Penyediaan akun Microsoft 365 dan Google Workspace civitas akademika",
        "Peluncuran inisiatif UI Digital LEAP & pelatihan AI massal dosen-tendik",
      ],
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="OUR JOURNEY"
        subtitle="Jejak langkah, dedikasi, dan tonggak sejarah perjalanan transformasi teknologi informasi di Universitas Indonesia."
        breadcrumbs={[
          { label: "Tentang Kami", href: "/tentang-dtd" },
          { label: "OUR JOURNEY" },
        ]}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-[#d49b00] uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Milestone Sejarah
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900">
            Dari UPT Puskom Menuju Kampus Digital Terdepan
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Perjalanan panjang tanpa henti dalam menghadirkan kemudahan, keterpaduan data, dan kecanggihan teknologi bagi keluarga besar Universitas Indonesia.
          </p>
        </div>

        {/* Timeline Component */}
        <div className="relative border-l-2 border-[#fcb900] ml-4 sm:ml-32 space-y-12">
          {milestones.map((item, index) => (
            <div key={index} className="relative pl-8 group">
              {/* Timeline marker icon */}
              <div className="absolute -left-5 top-1.5 w-10 h-10 rounded-full bg-[#fcb900] border-4 border-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

              {/* Year badge on left (for desktop) */}
              <div className="sm:absolute sm:-left-36 sm:top-2.5 sm:text-right sm:w-28 mb-2 sm:mb-0">
                <span className="text-xs sm:text-sm font-extrabold text-gray-900 bg-amber-100/70 text-amber-900 px-2.5 py-1 rounded-md inline-block">
                  {item.period}
                </span>
              </div>

              {/* Content Card */}
              <div className="bg-white border border-gray-100 hover:border-gray-200 p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#d49b00] mt-1">
                    {item.tagline}
                  </p>
                </div>

                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>

                <div className="pt-2">
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Pencapaian Kunci:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-700">
                    {item.highlights.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#fcb900]" />
                        <span>{point}</span>
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
