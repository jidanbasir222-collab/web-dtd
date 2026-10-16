import React from "react";
import PageHeader from "@/components/PageHeader";
import { User, Mail, Award, MapPin } from "lucide-react";

export default function PimpinanDirektoratPage() {
  const leaders = [
    {
      name: "Direktur Transformasi Digital",
      title: "Direktur Transformasi Digital UI",
      unit: "Direktorat Transformasi Digital",
      location: "Gedung Perpustakaan Lama Lt. 2, Kampus UI Depok",
      email: "dtd@ui.ac.id",
      desc: "Bertanggung jawab memimpin seluruh inisiatif transformasi digital, kebijakan teknologi informasi, penyelarasan roadmap universitas, dan pengelolaan kemitraan strategis teknologi di lingkungan Universitas Indonesia.",
    },
    {
      name: "Kasubdit Perencanaan & Kebijakan TI",
      title: "Kepala Subdirektorat Perencanaan dan Kebijakan TI",
      unit: "Subdirektorat Perencanaan & Kebijakan TI",
      location: "Gedung Perpustakaan Lama Lt. 2, Kampus UI Depok",
      email: "perencanaan.ti@ui.ac.id",
      desc: "Mengawal penyusunan rencana induk teknologi informasi (IT Master Plan), manajemen risiko TI, arsitektur enterprise universitas, serta penjaminan kepatuhan tata kelola digital.",
    },
    {
      name: "Kasubdit Pengembangan Aplikasi Layanan",
      title: "Kepala Subdirektorat Pengembangan Aplikasi Layanan",
      unit: "Subdirektorat Pengembangan Aplikasi Layanan",
      location: "Gedung ITTC Kampus UI Depok",
      email: "aplikasi.ti@ui.ac.id",
      desc: "Memimpin perancangan, pengembangan, dan integrasi ekosistem perangkat lunak tridarma perguruan tinggi, termasuk SIAK-NG, sistem kepegawaian, keuangan, dan UI Mobile.",
    },
    {
      name: "Kasubdit Infrastruktur & Keamanan TI",
      title: "Kepala Subdirektorat Infrastruktur dan Keamanan Teknologi Informasi",
      unit: "Subdirektorat Infrastruktur & Keamanan TI",
      location: "Gedung Perpustakaan Lama Lt. 2, Kampus UI Depok",
      email: "infrastruktur.ti@ui.ac.id",
      desc: "Bertanggung jawab atas ketersediaan dan keandalan Data Center UI, jaringan internet kampus, cloud platform, serta operasional tim tanggap insiden siber (UI-CSIRT).",
    },
    {
      name: "Kasubdit Operasional & Layanan STI",
      title: "Kepala Subdirektorat Operasional dan Layanan STI",
      unit: "Subdirektorat Operasional & Layanan STI",
      location: "Gedung Perpustakaan Lama Lt. 2, Kampus UI Depok",
      email: "support@ui.ac.id",
      desc: "Mengelola layanan helpdesk terpadu, pemeliharaan perangkat kerja civitas, manajemen lisensi software legal, dan pelatihan peningkatan kecakapan digital di UI.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="Pimpinan Direktorat"
        subtitle="Jajaran kepemimpinan Direktorat Transformasi Digital Universitas Indonesia."
        breadcrumbs={[
          { label: "Tentang Kami", href: "/tentang-dtd" },
          { label: "Pimpinan Direktorat" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold text-[#d49b00] uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Jajaran Kepemimpinan
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900">
            Pimpinan Direktorat Transformasi Digital
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Mendedikasikan integritas, inovasi, dan kepemimpinan dalam mengawal ekosistem digital Universitas Indonesia.
          </p>
        </div>

        {/* Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className={`bg-white border rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between ${
                index === 0
                  ? "border-[#fcb900] lg:col-span-3 lg:flex-row lg:items-center bg-gradient-to-r from-amber-50/40 to-white"
                  : "border-gray-100"
              }`}
            >
              <div className="flex flex-col sm:flex-row gap-5 items-start">
                {/* Avatar Placeholder with Makara accent */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-zinc-800 to-zinc-950 text-[#fcb900] flex items-center justify-center flex-shrink-0 shadow-md">
                  <User size={36} />
                </div>

                <div className="space-y-2">
                  <div className="inline-block bg-[#fcb900]/20 text-[#a37200] text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    {leader.title}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{leader.name}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed max-w-2xl">
                    {leader.desc}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-gray-400" />
                      {leader.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-gray-400" />
                      <a href={`mailto:${leader.email}`} className="hover:underline text-gray-700">
                        {leader.email}
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
