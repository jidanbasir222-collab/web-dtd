import React from "react";
import PageHeader from "@/components/PageHeader";
import { Laptop, Shield, Video, Cloud, Lock, CheckCircle2 } from "lucide-react";

export default function BekerjaDariJarakJauhPage() {
  const remoteTools = [
    {
      title: "VPN UI (Virtual Private Network)",
      icon: <Shield className="w-6 h-6 text-black" />,
      desc: "Menghubungkan komputer Anda secara aman ke jaringan intranet kampus UI sehingga Anda dapat mengakses sistem internal, database tertutup, dan repositori riset dari rumah.",
    },
    {
      title: "Zoom Enterprise & Microsoft Teams UI",
      icon: <Video className="w-6 h-6 text-black" />,
      desc: "Fasilitas telekonferensi video tanpa batasan waktu 40 menit, mendukung rekaman cloud, breakout rooms, dan webinar berkapasitas ribuan peserta.",
    },
    {
      title: "Cloud Storage Terpadu (OneDrive & Drive)",
      icon: <Cloud className="w-6 h-6 text-black" />,
      desc: "Akses, edit, dan bagikan file kerja Anda di mana saja secara real-time bersama rekan kerja dengan proteksi pencadangan versi otomatis.",
    },
    {
      title: "Protokol Keamanan WFH",
      icon: <Lock className="w-6 h-6 text-black" />,
      desc: "Panduan praktis menjaga keamanan data dinas saat menggunakan Wi-Fi publik, penggunaan kata sandi kuat, dan penguncian layar otomatis.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="Bekerja dari Jarak Jauh"
        subtitle="Panduan sarana teknologi dan keamanan untuk bekerja fleksibel dan efisien dari mana saja bagi staf & dosen UI."
        breadcrumbs={[
          { label: "Saya ingin", href: "/terhubung-ke-internet" },
          { label: "Bekerja dari jarak jauh" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-16">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold text-[#d49b00] uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Fleksibilitas Kerja
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900">
            Fasilitas Pendukung Remote Working di UI
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            DTD UI menyediakan ekosistem terpadu yang memungkinkan dosen dan tenaga kependidikan bekerja, mengajar, dan berkoordinasi dari luar kampus dengan keamanan, kecepatan, dan kenyamanan yang setara dengan bekerja langsung di kantor.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {remoteTools.map((tool, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 bg-white border border-gray-100 hover:border-[#fcb900] rounded-2xl shadow-sm hover:shadow-md transition-all space-y-3"
            >
              <div className="w-12 h-12 bg-[#fcb900] rounded-xl flex items-center justify-center shadow">
                {tool.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900">{tool.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {tool.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
