import React from "react";
import PageHeader from "@/components/PageHeader";
import { FileText, ShieldAlert, CheckSquare, BookOpen, Layers } from "lucide-react";

export default function PerencanaanDanKebijakanTIPage() {
  const policies = [
    {
      title: "Kebijakan Keamanan Sistem & Informasi (IT Security Policy)",
      code: "SK Rektor UI No. 1204/2023",
      desc: "Mengatur tata kelola perlindungan data universitas, hak akses akun Single Sign-On (SSO), manajemen kata sandi, serta klasifikasi informasi publik dan rahasia.",
    },
    {
      title: "Audit IT General Control (ITGC)",
      code: "Standar Audit TI Tahunan",
      desc: "Pelaksanaan audit berkala terhadap kepatuhan operasional sistem, kontrol akses fisik dan logis, manajemen perubahan (change control), dan integritas basis data.",
    },
    {
      title: "Standar Pengadaan & Penggunaan Lisensi Perangkat Lunak",
      code: "SOP DTD-PL-04",
      desc: "Menjamin seluruh unit kerja, fakultas, laboratorium, dan sivitas akademika menggunakan software legal dan berlisensi resmi universitas.",
    },
    {
      title: "Rencana Kelangsungan Layanan (Disaster Recovery Plan / DRP)",
      code: "SOP DTD-INF-09",
      desc: "Prosedur operasional standar pemulihan layanan digital, replikasi data ke DRC kampus terpisah, dan mitigasi darurat bencana.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="Perencanaan dan Kebijakan TI"
        subtitle="Regulasi, tata kelola, kebijakan keamanan, dan kepatuhan sistem teknologi informasi di Universitas Indonesia."
        breadcrumbs={[
          { label: "Kenali DTD", href: "/perencanaan-dan-kebijakan-ti" },
          { label: "Perencanaan dan Kebijakan TI" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-16">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold text-[#d49b00] uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Tata Kelola & Kepatuhan
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900">
            Pilar Kebijakan dan Tata Kelola Digital UI
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Dalam menyelenggarakan ekosistem digital berskala besar, DTD UI menerapkan kerangka kerja tata kelola TI berstandar internasional (COBIT, ISO/IEC 27001) guna menjamin keselarasan antara strategi teknologi dan visi keunggulan Universitas Indonesia.
          </p>
        </div>

        {/* Policy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {policies.map((p, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 bg-white border border-gray-100 hover:border-[#fcb900] rounded-2xl shadow-sm hover:shadow-md transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">
                  {p.code}
                </span>
                <FileText className="w-5 h-5 text-[#fcb900]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 leading-snug">
                {p.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
