import React from "react";
import PageHeader from "@/components/PageHeader";
import { Users, FileCheck, CheckCircle2, Building, Mail } from "lucide-react";

export default function RekrutmenInternalPage() {
  const internalPrograms = [
    {
      title: "Penugasan Pranata Komputer Antar-Unit",
      desc: "Kesempatan bagi pegawai tetap/PNS dan Pegawai UI di fakultas untuk ditugaskan pada proyek transformasi digital skala universitas di DTD.",
    },
    {
      title: "Secondment & Magang Kerja Staf TI Fakultas",
      desc: "Program pertukaran pengalaman dan transfer pengetahuan teknis infrastruktur cloud, keamanan siber, dan rekayasa perangkat lunak.",
    },
    {
      title: "Tim Ad-Hoc Gugus Tugas Digital Kampus",
      desc: "Kolaborasi lintas disiplin dosen dan tenaga kependidikan dalam perumusan kebijakan etika AI dan perlindungan data pribadi universitas.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="Rekrutmen Internal"
        subtitle="Program mutasi, penugasan internal, dan kolaborasi tenaga kependidikan di lingkungan Universitas Indonesia."
        breadcrumbs={[
          { label: "Gabung DTD", href: "/gabung-dtd/pegawai-tidak-tetap" },
          { label: "Rekrutmen Internal" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-16">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold text-[#d49b00] uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Internal UI
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900">
            Peluang Pengembangan Karir Internal Pegawai UI
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Direktorat Transformasi Digital membuka pintu kolaborasi bagi seluruh tenaga kependidikan di lingkungan fakultas, sekolah, dan program vokasi UI yang ingin memperluas pengalaman di bidang teknologi informasi universitas.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {internalPrograms.map((prog, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border border-gray-100 hover:border-[#fcb900] rounded-2xl shadow-sm hover:shadow-md transition-all space-y-3"
            >
              <div className="w-10 h-10 bg-[#fcb900]/20 rounded-lg flex items-center justify-center text-[#a37200]">
                <Building className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">{prog.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {prog.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="p-8 bg-zinc-900 text-white rounded-2xl space-y-3">
          <h3 className="text-xl font-bold text-[#fcb900]">
            Prosedur Pengajuan Internal
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed max-w-3xl">
            Pegawai yang berminat mengikuti program penugasan internal dapat berkonsultasi dengan pimpinan unit asal dan mengirimkan portofolio ke Biro SDM UI serta tembusan ke dtd@ui.ac.id.
          </p>
        </div>
      </div>
    </div>
  );
}
