import React from "react";
import PageHeader from "@/components/PageHeader";
import { Briefcase, CheckCircle2, Clock, MapPin, Mail, FileText } from "lucide-react";

export default function PegawaiTidakTetapPage() {
  const positions = [
    {
      title: "Fullstack Web Developer (Next.js / Node.js / Laravel)",
      dept: "Subdirektorat Pengembangan Aplikasi Layanan",
      type: "Pegawai Tidak Tetap (Kontrak)",
      location: "Kampus UI Depok",
      status: "Dibuka",
      requirements: [
        "Pendidikan minimal D3/S1 bidang Ilmu Komputer, Sistem Informasi, atau bidang terkait.",
        "Menguasai bahasa pemrograman JavaScript/TypeScript (React, Next.js) atau PHP (Laravel).",
        "Berpengalaman dengan RESTful API, PostgreSQL/MySQL, dan Git version control.",
        "Memahami prinsip secure coding dan responsive design.",
      ],
    },
    {
      title: "Network & Systems Engineer",
      dept: "Subdirektorat Infrastruktur & Keamanan TI",
      type: "Pegawai Tidak Tetap (Kontrak)",
      location: "Kampus UI Depok & Salemba",
      status: "Dibuka",
      requirements: [
        "Pendidikan minimal D3/S1 Teknik Informatika, Teknik Komputer, atau Telekomunikasi.",
        "Memahami konfigurasi routing/switching Cisco, mikrotik, dan access point nirkabel.",
        "Memiliki pemahaman administrasi sistem operasi Linux (Ubuntu/Debian Server).",
        "Sertifikasi CCNA / MTCNA menjadi nilai tambah.",
      ],
    },
    {
      title: "Technical Support / Helpdesk Specialist",
      dept: "Subdirektorat Operasional & Layanan STI",
      type: "Pegawai Tidak Tetap (Kontrak)",
      location: "Kampus UI Depok",
      status: "Dibuka",
      requirements: [
        "Pendidikan minimal D3 bidang Komputer/Teknologi Informasi.",
        "Keterampilan komunikasi interpersonal yang baik dan berorientasi pelayanan pengguna.",
        "Menguasai troubleshooting sistem operasi Windows/macOS, email, dan printer jaringan.",
      ],
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="Lowongan Pegawai Tidak Tetap"
        subtitle="Peluang karir dan bergabung bersama Direktorat Transformasi Digital Universitas Indonesia."
        breadcrumbs={[
          { label: "Gabung DTD", href: "/gabung-dtd/pegawai-tidak-tetap" },
          { label: "Pegawai Tidak Tetap" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-16">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold text-[#d49b00] uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Karir & Rekrutmen
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900">
            Bergabunglah Bersama Tim Inovasi Digital UI
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Kami membuka kesempatan bagi para talenta muda profesional di bidang teknologi informasi untuk berkontribusi nyata memajukan ekosistem kampus terdepan di Indonesia.
          </p>
        </div>

        {/* Positions List */}
        <div className="space-y-6">
          {positions.map((pos, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 bg-white border border-gray-200 hover:border-[#fcb900] rounded-2xl shadow-sm hover:shadow-md transition-all space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{pos.title}</h3>
                  <p className="text-xs text-gray-500 font-medium mt-1">
                    {pos.dept}
                  </p>
                </div>
                <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full self-start sm:self-auto">
                  {pos.status}
                </span>
              </div>

              <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5" /> {pos.type}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" /> {pos.location}
                </span>
              </div>

              <div>
                <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Kualifikasi Utama:
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-gray-600">
                  {pos.requirements.map((req, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#fcb900] flex-shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  Kirim CV & Portfolio ke: <strong className="text-gray-900">dtd@ui.ac.id</strong>
                </span>
                <a
                  href={`mailto:dtd@ui.ac.id?subject=Lamaran%20${encodeURIComponent(pos.title)}`}
                  className="bg-[#fcb900] hover:bg-[#e5a800] text-black font-bold text-xs px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
                >
                  Lamar Posisi Ini &gt;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
