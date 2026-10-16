import React from "react";
import PageHeader from "@/components/PageHeader";
import { Compass, Target, CheckCircle2, TrendingUp, Layers, Cpu } from "lucide-react";

export default function ITMasterPlanPage() {
  const pillars = [
    {
      title: "1. Smart & Unified Campus Platform",
      desc: "Membangun ekosistem aplikasi terpadu berorientasi pengguna dengan arsitektur microservices dan integrasi Single Sign-On (SSO) menyeluruh.",
    },
    {
      title: "2. Data-Driven & AI-Enabled University",
      desc: "Implementasi data warehouse terpusat dan analitik prediktif untuk mendukung pengambilan keputusan strategis rektorat serta pemanfaatan AI akademik.",
    },
    {
      title: "3. Robust Cloud & Resilient Infrastructure",
      desc: "Modernisasi pusat data berbasis hybrid cloud, otomatisasi Disaster Recovery, dan konektivitas berkecepatan ultra-tinggi di seluruh kampus.",
    },
    {
      title: "4. Zero-Trust Cyber Security & Data Privacy",
      desc: "Penerapan model keamanan Zero-Trust, enkripsi end-to-end data sensitif, dan penguatan kapabilitas deteksi insiden tim UI-CSIRT.",
    },
    {
      title: "5. Digital Culture & Human Capital Excellence",
      desc: "Peningkatan berkelanjutan literasi digital dosen, tenaga kependidikan, dan mahasiswa melalui sertifikasi dan pelatihan teknologi terkini.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="IT Master Plan"
        subtitle="Rencana Induk Pengembangan Sistem dan Teknologi Informasi Universitas Indonesia."
        breadcrumbs={[
          { label: "Kenali DTD", href: "/perencanaan-dan-kebijakan-ti" },
          { label: "IT Master Plan" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-16">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold text-[#d49b00] uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Peta Jalan Strategis
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900">
            Roadmap Transformasi Digital Universitas Indonesia
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            IT Master Plan Universitas Indonesia menjadi kompas dan panduan strategis dalam perencanaan, investasi, dan adopsi inovasi teknologi informasi agar selaras dengan target UI menjadi perguruan tinggi riset terkemuka di Asia dan dunia.
          </p>
        </div>

        {/* 5 Strategic Pillars */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-900">
            Lima Pilar Strategis IT Master Plan UI
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-gray-100 hover:border-[#fcb900] rounded-2xl shadow-sm hover:shadow-md transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-900 font-bold flex items-center justify-center text-sm">
                  0{idx + 1}
                </div>
                <h4 className="font-bold text-base text-gray-900 leading-snug">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
