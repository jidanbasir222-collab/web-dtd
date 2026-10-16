import React from "react";
import PageHeader from "@/components/PageHeader";
import { Headphones, Activity, Clock, ShieldCheck, LifeBuoy, FileText } from "lucide-react";

export default function OperasionalDanLayananSTIPage() {
  const operations = [
    {
      title: "Network Operations Center (NOC) 24/7",
      desc: "Pemantauan lalu lintas data, utilisasi bandwidth server, dan status uptime sistem secara real-time sepanjang waktu untuk deteksi anomali dini.",
      icon: <Activity className="w-6 h-6 text-black" />,
    },
    {
      title: "Pusat Layanan Bantuan (Helpdesk Support)",
      desc: "Kanal terpadu penerimaan keluhan pengguna melalui sistem tiket elektronik, email resmi support@ui.ac.id, dan WhatsApp resmi DTD UI.",
      icon: <Headphones className="w-6 h-6 text-black" />,
    },
    {
      title: "Service Level Agreement (SLA) Terstandar",
      desc: "Komitmen waktu penyelesaian kendala terukur, mulai dari eskalasi darurat, masalah akun SSO, hingga perbaikan jaringan fisik di fakultas.",
      icon: <Clock className="w-6 h-6 text-black" />,
    },
    {
      title: "Manajemen Pemeliharaan Berkala (Maintenance)",
      desc: "Jadwal pemeliharaan rutin di luar jam sibuk untuk pembaruan security patch, optimasi database, dan upgrade firmware perangkat jaringan.",
      icon: <LifeBuoy className="w-6 h-6 text-black" />,
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="Operasional dan Layanan STI"
        subtitle="Manajemen pemantauan sistem 24/7, standar SLA, dan operasional dukungan teknologi informasi Universitas Indonesia."
        breadcrumbs={[
          { label: "Kenali DTD", href: "/perencanaan-dan-kebijakan-ti" },
          { label: "Operasional dan Layanan STI" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-16">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold text-[#d49b00] uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Keandalan & Dukungan
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900">
            Menjamin Kelancaran Operasional Digital Setiap Hari
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Operasional dan Layanan STI bertugas memastikan seluruh sivitas akademika dapat bekerja, belajar, dan meneliti dengan lancar tanpa hambatan teknis melalui pemantauan sistem proaktif dan respons bantuan cepat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {operations.map((op, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 bg-white border border-gray-100 hover:border-[#fcb900] rounded-2xl shadow-sm hover:shadow-md transition-all space-y-3"
            >
              <div className="w-12 h-12 bg-[#fcb900] rounded-xl flex items-center justify-center shadow">
                {op.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900">{op.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {op.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
