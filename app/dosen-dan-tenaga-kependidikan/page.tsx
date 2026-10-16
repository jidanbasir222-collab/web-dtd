import React from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { UserCheck, FileText, Laptop, Shield, Video, Award } from "lucide-react";

export default function DosenDanTendikServicesPage() {
  const services = [
    {
      title: "SIPEG & Manajemen Kinerja Pegawai",
      desc: "Pengelolaan data kepegawaian, rekam jejak pangkat, presensi daring terpadu, dan pelaporan BKD (Beban Kerja Dosen) berkala.",
      tag: "Kepegawaian",
    },
    {
      title: "SIAK-NG Portal Pengajar",
      desc: "Validasi IRS mahasiswa bimbingan akademik, pengunggahan nilai mata kuliah, dan pengelolaan absensi kelas perkuliahan.",
      tag: "Pengajaran",
    },
    {
      title: "Microsoft 365 Enterprise & Zoom Pro UI",
      desc: "Akun Microsoft Office suite lengkap, OneDrive kapasitas 1 TB, dan akun Zoom Enterprise tanpa batasan durasi untuk perkuliahan dan rapat.",
    },
    {
      title: "Infrastruktur Komputasi Riset & Server Hosting",
      desc: "Penyediaan mesin virtual (VM), komputasi berbasis GPU untuk riset sains, dan hosting domain web resmi laboratorium fakultas.",
      tag: "Riset",
    },
    {
      title: "VPN UI & Akses Intranet Dinas",
      desc: "Koneksi terenkripsi aman untuk mengakses sistem keuangan (SIPRA), dokumen internal rektorat, dan database tertutup dari rumah.",
      tag: "Keamanan",
    },
    {
      title: "Pelatihan & Peningkatan Kompetensi TI",
      desc: "Program pelatihan bersertifikat di bidang kecerdasan buatan, keamanan informasi, dan tata kelola data untuk mendukung karir pegawai.",
      tag: "Pelatihan",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="Layanan Dosen dan Tenaga Kependidikan"
        subtitle="Layanan teknologi dan sistem informasi terpadu untuk mendukung pengajaran, penelitian, dan operasional staf UI."
        breadcrumbs={[
          { label: "Layanan STI", href: "/layanan-it-universitas-indonesia" },
          { label: "Dosen dan Tenaga Kependidikan" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-16">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold text-[#d49b00] uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Dosen & Tendik
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900">
            Fasilitas TI Pendukung Produktivitas Dosen & Staf
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Direktorat Transformasi Digital UI berkomitmen menjadi mitra strategis dalam menyediakan sarana kerja digital modern demi meningkatkan efisiensi tridarma dan layanan administrasi universitas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border border-gray-100 hover:border-[#fcb900] rounded-2xl shadow-sm hover:shadow-lg transition-all space-y-3"
            >
              <span className="text-[11px] font-bold text-[#a37200] bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200 inline-block">
                {svc.tag || "Layanan DTD"}
              </span>
              <h3 className="text-lg font-bold text-gray-900">{svc.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {svc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
