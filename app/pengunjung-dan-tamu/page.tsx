import React from "react";
import PageHeader from "@/components/PageHeader";
import { Users, Wifi, Globe, BookOpen, CheckCircle2, Phone } from "lucide-react";

export default function PengunjungDanTamuPage() {
  const options = [
    {
      title: "Wi-Fi Tamu (UI-Guest)",
      desc: "Layanan koneksi nirkabel sementara bagi peserta seminar, workshop, tamu institusi, atau masyarakat umum yang berkunjung ke kampus UI.",
      action: "Pilih SSID 'UI-Guest' dan daftarkan nomor telepon aktif Anda pada portal landing page yang muncul.",
    },
    {
      title: "Jaringan Eduroam Internasional",
      desc: "Bagi tamu akademisi, dosen tamu, atau mahasiswa dari universitas anggota Eduroam di seluruh dunia, Anda dapat langsung terhubung.",
      action: "Pilih SSID 'eduroam' dan login menggunakan akun kampus asal Anda (contoh: user@ox.ac.uk, user@ugm.ac.id).",
    },
    {
      title: "Akses Repositori & Publikasi Terbuka UI",
      desc: "Jelajahi karya ilmiah, skripsi, tesis, dan disertasi civitas akademika UI yang terbuka untuk publik melalui UI Scholars Hub.",
      action: "Kunjungi https://lib.ui.ac.id atau terminal komputer perpustakaan pusat UI.",
    },
    {
      title: "Dukungan Acara & Konferensi Kampus",
      desc: "Bagi panitia acara nasional/internasional yang membutuhkan alokasi bandwidth khusus atau akun Wi-Fi massal untuk delegasi.",
      action: "Kirimkan surat permohonan resmi ke DTD UI minimal 5 hari kerja sebelum acara melalui email support@ui.ac.id.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="Pengunjung dan Tamu"
        subtitle="Informasi dan panduan akses layanan teknologi informasi bagi tamu, peneliti tamu, dan pengunjung Universitas Indonesia."
        breadcrumbs={[
          { label: "Layanan STI", href: "/layanan-it-universitas-indonesia" },
          { label: "Pengunjung dan Tamu" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-16">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold text-[#d49b00] uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Akses Tamu
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900">
            Layanan Teknologi untuk Pengunjung Kampus UI
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Selamat datang di Universitas Indonesia. Kami menyediakan berbagai kemudahan konektivitas dan akses informasi publik selama Anda berkegiatan di lingkungan kampus kami.
          </p>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {options.map((opt, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 bg-white border border-gray-100 hover:border-[#fcb900] rounded-2xl shadow-sm hover:shadow-md transition-all space-y-4"
            >
              <h3 className="text-xl font-bold text-gray-900">{opt.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{opt.desc}</p>
              <div className="p-4 bg-amber-50/60 rounded-xl border border-amber-200 text-xs text-amber-900 leading-relaxed">
                <strong>Cara Menggunakan:</strong> {opt.action}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
