import React from "react";
import PageHeader from "@/components/PageHeader";
import { Monitor, Download, Cloud, Users, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function MulaiDenganOffice365Page() {
  const appsIncluded = [
    { name: "Microsoft Word", desc: "Pengolah dokumen standar akademik & penulisan skripsi/tesis." },
    { name: "Microsoft Excel", desc: "Analisis data dan pengolahan angka komprehensif." },
    { name: "Microsoft PowerPoint", desc: "Presentasi materi ajar dan seminar sidang interaktif." },
    { name: "Microsoft Teams", desc: "Kuliah daring, rapat departemen, dan kolaborasi kelompok." },
    { name: "OneDrive for Business", desc: "Kapasitas penyimpanan awan 1 TB per akun civitas UI." },
    { name: "Microsoft Outlook", desc: "Pengelolaan surat elektronik dan kalender jadwal akademik." },
  ];

  const installSteps = [
    {
      title: "1. Kunjungi Portal Resmi Microsoft",
      desc: "Buka browser Anda dan akses laman https://portal.office.com.",
    },
    {
      title: "2. Masuk dengan Akun UI",
      desc: "Masukkan alamat email UI Anda (contoh: nama.pengguna@office.ui.ac.id atau nama.pengguna@ui.ac.id) beserta kata sandi SSO UI Anda.",
    },
    {
      title: "3. Unduh Aplikasi Office",
      desc: "Klik tombol 'Install Apps' (Pasang Aplikasi) di pojok kanan atas halaman beranda portal Office 365.",
    },
    {
      title: "4. Instal & Aktivasi",
      desc: "Jalankan installer yang telah diunduh di PC atau Mac Anda. Setelah selesai, buka aplikasi Word atau Excel dan masuk dengan akun UI untuk aktivasi lisensi resmi.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="Mulai dengan Office 365"
        subtitle="Panduan aktivasi lisensi resmi Microsoft 365 dan instalasi aplikasi produktivitas untuk civitas UI."
        breadcrumbs={[
          { label: "Saya ingin", href: "/terhubung-ke-internet" },
          { label: "Mulai dengan Office 365" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-16">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold text-[#d49b00] uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Produktivitas Tanpa Batas
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900">
            Lisensi Microsoft 365 Gratis untuk Civitas UI
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Berkat kerja sama Universitas Indonesia dengan Microsoft, seluruh mahasiswa aktif, dosen, dan tenaga kependidikan berhak menggunakan suite lengkap Microsoft 365 dan dapat diinstal hingga pada 5 perangkat secara bersamaan.
          </p>
        </div>

        {/* Included Apps Grid */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">
            Aplikasi & Layanan yang Disertakan
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {appsIncluded.map((app, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-gray-100 hover:border-[#fcb900] rounded-2xl shadow-sm hover:shadow-md transition-all space-y-2"
              >
                <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center text-amber-700 font-bold">
                  ✓
                </div>
                <h4 className="font-bold text-base text-gray-900">{app.name}</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {app.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Installation Steps */}
        <div className="bg-zinc-50 border border-gray-200 rounded-2xl p-8 sm:p-10 space-y-6">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
            Cara Mengunduh dan Mengaktifkan Office 365
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {installSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-5 bg-white border border-gray-200 rounded-xl space-y-2 shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-[#fcb900] text-black font-bold flex items-center justify-center text-xs">
                  {idx + 1}
                </div>
                <h4 className="font-bold text-sm text-gray-900">{step.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-4 flex justify-center">
            <a
              href="https://portal.office.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#fcb900] hover:bg-[#e5a800] text-black font-bold text-sm px-8 py-3.5 rounded-lg shadow-md transition-colors"
            >
              Buka Portal Office 365 &gt;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
