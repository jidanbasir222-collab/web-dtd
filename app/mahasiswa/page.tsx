import React from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { GraduationCap, Wifi, Mail, BookOpen, Smartphone, ShieldCheck } from "lucide-react";

export default function MahasiswaServicesPage() {
  const services = [
    {
      title: "SIAK-NG (Sistem Akademik)",
      desc: "Pengisian Isian Rencana Studi (IRS), informasi jadwal perkuliahan, nilai ujian, riwayat transkrip, dan proses pendaftaran skripsi/yudisium.",
      href: "https://academic.ui.ac.id",
      isExternal: true,
      tag: "Akademik",
    },
    {
      title: "EMAS UI (Pembelajaran Daring)",
      desc: "Akses materi kuliah dari dosen, pengumpulan tugas kuliah daring, kuis interaktif, dan forum diskusi antar rekan mahasiswa.",
      href: "https://emas.ui.ac.id",
      isExternal: true,
      tag: "E-Learning",
    },
    {
      title: "Email & Microsoft 365 Mahasiswa",
      desc: "Akun email resmi @ui.ac.id berkapasitas besar, gratis instalasi Microsoft Office di 5 perangkat, dan OneDrive 1 TB.",
      href: "/mulai-dengan-office-365",
      isExternal: false,
      tag: "Produktivitas",
    },
    {
      title: "Koneksi Hotspot UI & Eduroam",
      desc: "Akses Wi-Fi kampus berkecepatan tinggi di seluruh gedung fakultas, perpustakaan, asrama, dan ribuan universitas mitra di dunia.",
      href: "/terhubung-ke-internet",
      isExternal: false,
      tag: "Jaringan",
    },
    {
      title: "UI Mobile SuperApp",
      desc: "Kartu Tanda Mahasiswa (KTM) digital, presensi kuliah berbasis GPS, jadwal kelas harian, dan notifikasi universitas dalam genggaman.",
      href: "/pengembangan-sti",
      isExternal: false,
      tag: "Mobile",
    },
    {
      title: "Akses Jurnal Ilmiah (VPN UI)",
      desc: "Akses gratis ke jutaan jurnal internasional bereputasi (IEEE, ScienceDirect, Scopus, Springer) dari luar kampus melalui VPN UI.",
      href: "/terhubung-ke-internet",
      isExternal: false,
      tag: "Riset",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="Layanan STI untuk Mahasiswa"
        subtitle="Panduan dan katalog layanan teknologi informasi yang dirancang untuk mendukung keberhasilan studi Anda di Universitas Indonesia."
        breadcrumbs={[
          { label: "Layanan STI", href: "/layanan-it-universitas-indonesia" },
          { label: "Mahasiswa" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-16">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold text-[#d49b00] uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Portal Mahasiswa
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900">
            Layanan Digital Penunjang Perkuliahan Anda
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Seluruh layanan digital untuk mahasiswa Universitas Indonesia dapat diakses hanya dengan menggunakan satu akun Single Sign-On (SSO UI).
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border border-gray-100 hover:border-[#fcb900] rounded-2xl shadow-sm hover:shadow-lg transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-[11px] font-bold text-[#a37200] bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200 inline-block">
                  {svc.tag}
                </span>
                <h3 className="text-lg font-bold text-gray-900">{svc.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {svc.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-gray-50">
                {svc.isExternal ? (
                  <a
                    href={svc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-gray-900 hover:text-[#d49b00] flex items-center justify-between"
                  >
                    <span>Kunjungi Portal</span>
                    <span>&rarr;</span>
                  </a>
                ) : (
                  <Link
                    href={svc.href}
                    className="text-xs font-bold text-gray-900 hover:text-[#d49b00] flex items-center justify-between"
                  >
                    <span>Lihat Panduan</span>
                    <span>&rarr;</span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
