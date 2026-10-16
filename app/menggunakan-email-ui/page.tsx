import React from "react";
import PageHeader from "@/components/PageHeader";
import { Mail, CheckCircle2, Smartphone, ShieldCheck, Key, HelpCircle } from "lucide-react";

export default function MenggunakanEmailUIPage() {
  const formats = [
    {
      role: "Mahasiswa UI",
      domain: "@ui.ac.id",
      desc: "Diberikan otomatis saat registrasi mahasiswa baru, digunakan untuk komunikasi resmi dosen, pengumuman akademik, dan pendaftaran lisensi software edukasi.",
    },
    {
      role: "Dosen & Pengajar",
      domain: "@ui.ac.id & @office.ui.ac.id",
      desc: "Digunakan untuk korespondensi publikasi ilmiah internasional, komunikasi fakultas, serta kolaborasi pengajaran.",
    },
    {
      role: "Tenaga Kependidikan",
      domain: "@ui.ac.id & @office.ui.ac.id",
      desc: "Digunakan untuk persuratan dinas universitas, disposisi dokumen, dan koordinasi operasional kerja.",
    },
  ];

  const setupSteps = [
    {
      title: "Login Webmail UI",
      desc: "Kunjungi portal https://mail.ui.ac.id atau https://outlook.office.com, masukkan email lengkap dan kata sandi akun SSO UI Anda.",
    },
    {
      title: "Konfigurasi di Smartphone (Android / iOS)",
      desc: "Buka aplikasi Gmail atau Outlook di ponsel Anda, pilih Tambah Akun > Google atau Microsoft 365, lalu ikuti verifikasi login SSO UI.",
    },
    {
      title: "Aktivasi Verifikasi 2 Langkah (2FA)",
      desc: "Untuk keamanan maksimal data kampus, aktifkan autentikasi dua faktor melalui aplikasi Microsoft Authenticator atau Google Authenticator.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="Menggunakan Email UI"
        subtitle="Panduan aktivasi, konfigurasi, dan penggunaan fasilitas email resmi berdomain Universitas Indonesia."
        breadcrumbs={[
          { label: "Saya ingin", href: "/terhubung-ke-internet" },
          { label: "Menggunakan Email UI" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-16">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold text-[#d49b00] uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Komunikasi Resmi
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900">
            Fasilitas Email Resmi Civitas Akademika UI
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Setiap mahasiswa, dosen, dan tenaga kependidikan berhak mendapatkan akun email resmi dengan domain @ui.ac.id yang terintegrasi dengan ekosistem Google Workspace for Education dan Microsoft 365.
          </p>
        </div>

        {/* Format Email Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {formats.map((f, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border border-gray-100 hover:border-[#fcb900] rounded-2xl shadow-sm hover:shadow-md transition-all space-y-3"
            >
              <div className="w-10 h-10 bg-[#fcb900]/20 rounded-lg flex items-center justify-center text-[#a37200]">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">{f.role}</h3>
              <span className="inline-block bg-zinc-900 text-[#fcb900] text-xs font-mono font-bold px-2 py-0.5 rounded">
                {f.domain}
              </span>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Panduan Pengaturan */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">
            Panduan Pengaturan & Login Email
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {setupSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 bg-amber-50/50 border border-amber-200/70 rounded-xl space-y-2"
              >
                <div className="w-8 h-8 rounded-full bg-[#fcb900] text-black font-bold flex items-center justify-center text-sm mb-3">
                  {idx + 1}
                </div>
                <h4 className="font-bold text-base text-gray-900">{step.title}</h4>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
