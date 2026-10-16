import React from "react";
import PageHeader from "@/components/PageHeader";
import { Download, ShieldCheck, CheckCircle2, FileCode, Layers } from "lucide-react";

export default function DapatkanPerangkatLunakPage() {
  const softwares = [
    {
      name: "MATLAB & Simulink",
      category: "Komputasi & Rekayasa",
      desc: "Lisensi kampus penuh (Campus-Wide License) untuk simulasi matematika, pengolahan citra, kecerdasan buatan, dan kontrol sistem.",
    },
    {
      name: "IBM SPSS Statistics",
      category: "Analisis Statistik",
      desc: "Perangkat lunak analisis data kuantitatif, statistik inferensial, dan survei penelitian mahasiswa dan dosen.",
    },
    {
      name: "Mendeley & EndNote",
      category: "Manajemen Sitasi Riset",
      desc: "Aplikasi pengelolaan pustaka referensi dan sitasi otomatis untuk penulisan artikel ilmiah bereputasi internasional.",
    },
    {
      name: "Autodesk Education Suite",
      category: "Desain Arsitektur & Teknik",
      desc: "AutoCAD, Revit, Maya, dan 3ds Max untuk kegiatan perkuliahan fakultas teknik dan arsitektur.",
    },
    {
      name: "Antivirus Endpoint Protection",
      category: "Keamanan Perangkat",
      desc: "Perlindungan malware dan ransomware resmi UI untuk laptop kerja dinas dosen dan staf tenaga kependidikan.",
    },
    {
      name: "Windows & Office Enterprise",
      category: "Sistem Operasi & Dokumen",
      desc: "Lisensi Windows Education dan Microsoft 365 ProPlus untuk seluruh perangkat komputasi di lingkungan kampus UI.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="Dapatkan Perangkat Lunak"
        subtitle="Katalog dan panduan perolehan lisensi perangkat lunak legal untuk riset dan perkuliahan di Universitas Indonesia."
        breadcrumbs={[
          { label: "Saya ingin", href: "/terhubung-ke-internet" },
          { label: "Dapatkan Perangkat Lunak" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-16">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold text-[#d49b00] uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Lisensi Legal
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900">
            Daftar Software Legal Berlisensi Resmi UI
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Universitas Indonesia berkomitmen menjunjung tinggi hak kekayaan intelektual (HAKI) dengan menyediakan lisensi perangkat lunak legal untuk seluruh kegiatan akademik, riset, dan administrasi kampus.
          </p>
        </div>

        {/* Software Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {softwares.map((sw, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border border-gray-100 hover:border-[#fcb900] rounded-2xl shadow-sm hover:shadow-lg transition-all space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-[11px] font-bold text-[#a37200] bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200 inline-block">
                  {sw.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900">{sw.name}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {sw.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="text-green-600 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Berlisensi Kampus UI
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Information box */}
        <div className="p-8 bg-zinc-900 text-white rounded-2xl space-y-3">
          <h3 className="text-xl font-bold text-[#fcb900]">
            Prosedur Pengajuan & Pengunduhan
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed max-w-3xl">
            Untuk mengunduh installer resmi dan mendapatkan kunci lisensi (license key), silakan masuk ke portal layanan bantuan DTD UI atau hubungi staf helpdesk departemen Anda menggunakan akun email resmi @ui.ac.id.
          </p>
        </div>
      </div>
    </div>
  );
}
