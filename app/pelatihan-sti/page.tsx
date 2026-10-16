import React from "react";
import PageHeader from "@/components/PageHeader";
import { Award, Calendar, BookOpen, Users, CheckCircle2, Clock } from "lucide-react";

export default function PelatihanSTIPage() {
  const workshops = [
    {
      title: "Gemini Academy Fellow: Pemanfaatan AI untuk Riset & Pengajaran",
      audience: "Dosen & Peneliti UI",
      date: "Oktober – November 2026",
      format: "Hybrid (Online Zoom & Tatap Muka Lab ITTC)",
      desc: "Pelatihan intensif pemanfaatan Generative AI untuk menyusun silabus interaktif, mempercepat tinjauan pustaka riset, dan analisis data saintifik.",
    },
    {
      title: "Secure Software Development Lifecycle (SSDLC) Masterclass",
      audience: "Software Engineer & Programmer Fakultas",
      date: "November 2026",
      format: "Tatap Muka di Gedung DTD Kampus Depok",
      desc: "Praktik mitigasi celah OWASP Top 10, analisis kode statis/dinamis, dan integrasi security testing otomatis pada alur CI/CD aplikasi kampus.",
    },
    {
      title: "Workshop Cyber Security Awareness: Tangkal Phishing & Social Engineering",
      audience: "Seluruh Tenaga Kependidikan & Mahasiswa UI",
      date: "Desember 2026",
      format: "Online via Zoom Webinar",
      desc: "Edukasi mengenali teknik rekayasa sosial, perlindungan akun SSO UI, penggunaan pengelola kata sandi, dan simulasi penanganan insiden siber.",
    },
    {
      title: "Optimalisasi Kolaborasi Dokumen dengan Microsoft 365 & OneDrive",
      audience: "Tenaga Administrasi & Kesekretariatan UI",
      date: "Setiap Bulan (Batch Reguler)",
      format: "Online Interactive Training",
      desc: "Meningkatkan produktivitas kerja kantor dengan fitur co-authoring real-time pada Word/Excel, otomasi formulir Microsoft Forms, dan penataan cloud storage.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="Pelatihan STI"
        subtitle="Program pelatihan, workshop teknologi, dan sertifikasi kecakapan digital untuk sivitas akademika Universitas Indonesia."
        breadcrumbs={[
          { label: "Layanan STI", href: "/layanan-it-universitas-indonesia" },
          { label: "Pelatihan STI" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-16">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold text-[#d49b00] uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Pengembangan Kapasitas
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900">
            Tingkatkan Keterampilan Digital Bersama DTD UI
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            DTD UI secara rutin menyelenggarakan pelatihan teknologi informasi gratis dan bersertifikat guna mempercepat adopsi teknologi mutakhir dan meningkatkan daya saing sivitas akademika UI.
          </p>
        </div>

        {/* Workshops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {workshops.map((ws, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 bg-white border border-gray-100 hover:border-[#fcb900] rounded-2xl shadow-sm hover:shadow-lg transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-bold text-[#a37200] bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                    {ws.audience}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {ws.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 leading-snug">
                  {ws.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {ws.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-500 font-medium">
                  Metode: {ws.format}
                </span>
                <span className="text-xs font-bold text-[#d49b00]">
                  Pendaftaran Dibuka &gt;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
