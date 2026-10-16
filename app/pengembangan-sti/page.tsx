import React from "react";
import PageHeader from "@/components/PageHeader";
import { Code, Smartphone, GraduationCap, DollarSign, Database, CheckCircle2 } from "lucide-react";

export default function PengembanganSTIPage() {
  const apps = [
    {
      name: "SIAK-NG",
      fullName: "Sistem Informasi Akademik Next Generation",
      tag: "Akademik",
      icon: <GraduationCap className="w-6 h-6 text-black" />,
      desc: "Platform manajemen akademik menyeluruh mulai dari pendaftaran mata kuliah (IRS), entri nilai, jadwal kuliah, transkrip digital, hingga yudisium kelulusan.",
    },
    {
      name: "EMAS UI",
      fullName: "Enhancing Modified Activity of Students",
      tag: "Pembelajaran Daring",
      icon: <Code className="w-6 h-6 text-black" />,
      desc: "Learning Management System (LMS) resmi UI yang memfasilitasi kuliah daring, forum diskusi interaktif, pengumpulan tugas, kuis, dan ujian online.",
    },
    {
      name: "SIPEG UI",
      fullName: "Sistem Informasi Kepegawaian",
      tag: "SDM & Kepegawaian",
      icon: <Database className="w-6 h-6 text-black" />,
      desc: "Sistem manajemen data profil dosen dan tenaga kependidikan, presensi elektronik, pengusulan kenaikan pangkat, dan penilaian kinerja pegawai.",
    },
    {
      name: "UI Mobile SuperApp",
      fullName: "Aplikasi Terpadu Civitas UI Mobile",
      tag: "Mobile App",
      icon: <Smartphone className="w-6 h-6 text-black" />,
      desc: "Aplikasi seluler resmi UI untuk iOS dan Android yang menghadirkan jadwal kuliah, kartu mahasiswa digital, presensi berbasis GPS, dan notifikasi kampus.",
    },
    {
      name: "SIMAK UI Online",
      fullName: "Sistem Seleksi Masuk UI",
      tag: "Penerimaan Mahasiswa",
      icon: <CheckCircle2 className="w-6 h-6 text-black" />,
      desc: "Portal pendaftaran dan pelaksanaan ujian seleksi mandiri masuk UI berkapasitas ratusan ribu peserta secara bersamaan dengan sistem monitoring teruji.",
    },
    {
      name: "SIPRA & Keuangan Terpadu",
      fullName: "Sistem Informasi Perencanaan & Anggaran",
      tag: "Keuangan & Aset",
      icon: <DollarSign className="w-6 h-6 text-black" />,
      desc: "Pengelolaan perencanaan anggaran universitas, monitoring realisasi belanja fakultas, dan integrasi pembayaran host-to-host perbankan.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="Pengembangan Aplikasi Layanan"
        subtitle="Inovasi perangkat lunak dan ekosistem sistem informasi yang mendukung tridarma perguruan tinggi di Universitas Indonesia."
        breadcrumbs={[
          { label: "Kenali DTD", href: "/perencanaan-dan-kebijakan-ti" },
          { label: "Pengembangan Aplikasi Layanan" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-16">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold text-[#d49b00] uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Aplikasi & Rekayasa Perangkat Lunak
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900">
            Ekosistem Aplikasi Digital Terpadu UI
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Subdirektorat Pengembangan Aplikasi Layanan DTD UI secara berkesinambungan mengembangkan dan memodernisasi aplikasi terpadu dengan standar microservices, secure coding, dan arsitektur database terpusat yang melayani seluruh siklus akademik dan manajerial kampus.
          </p>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border border-gray-100 hover:border-[#fcb900] rounded-2xl shadow-sm hover:shadow-lg transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-[#fcb900] rounded-xl flex items-center justify-center shadow">
                    {app.icon}
                  </div>
                  <span className="text-[11px] font-bold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">
                    {app.tag}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{app.name}</h3>
                  <p className="text-xs font-semibold text-gray-500 mt-0.5">
                    {app.fullName}
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {app.desc}
                </p>
              </div>

              <div className="pt-2 border-t border-gray-50 text-xs font-semibold text-[#d49b00]">
                Terintegrasi Single Sign-On (SSO UI)
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
