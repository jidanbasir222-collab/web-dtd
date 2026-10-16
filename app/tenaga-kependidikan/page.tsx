import React from "react";
import PageHeader from "@/components/PageHeader";
import { Users, Code, Server, Shield, Headphones, FileCheck, Laptop } from "lucide-react";

export default function TenagaKependidikanPage() {
  const teams = [
    {
      title: "Pranata Komputer & Software Engineer",
      icon: <Code className="w-6 h-6 text-black" />,
      color: "bg-[#fcb900]",
      desc: "Merancang, membangun, dan memelihara aplikasi inti universitas seperti SIAK-NG, portal pembelajaran, UI SuperApp, serta integrasi database antarunit kerja.",
      count: "25+ Personel",
    },
    {
      title: "Network & Systems Administrator",
      icon: <Server className="w-6 h-6 text-black" />,
      color: "bg-amber-400",
      desc: "Mengelola ketersediaan ribuan Access Point Wi-Fi, kabel serat optik kampus, virtual server, cloud environment, dan Data Center utama Depok & Salemba.",
      count: "18+ Personel",
    },
    {
      title: "Analis Keamanan Siber (UI-CSIRT)",
      icon: <Shield className="w-6 h-6 text-black" />,
      color: "bg-yellow-400",
      desc: "Memantau lalu lintas keamanan data selama 24/7, melakukan vulnerability assessment, mitigasi insiden siber, serta edukasi keamanan informasi kampus.",
      count: "10+ Personel",
    },
    {
      title: "Spesialis Layanan & Helpdesk TI",
      icon: <Headphones className="w-6 h-6 text-black" />,
      color: "bg-amber-500",
      desc: "Garda terdepan yang merespons tiket keluhan, aktivasi akun SSO, konsultasi email, dan panduan perangkat lunak untuk puluhan ribu civitas akademika.",
      count: "15+ Personel",
    },
    {
      title: "Analis Tata Kelola & Kepatuhan TI",
      icon: <FileCheck className="w-6 h-6 text-black" />,
      color: "bg-yellow-500",
      desc: "Mengawal kepatuhan audit IT General Control (ITGC), standarisasi SOP layanan, manajemen aset teknologi, serta evaluasi kepuasan pengguna TI.",
      count: "8+ Personel",
    },
    {
      title: "Teknisi Laboratorium & Komputasi Kampus",
      icon: <Laptop className="w-6 h-6 text-black" />,
      color: "bg-[#fcb900]",
      desc: "Mendukung kelancaran fasilitas ruang ujian berbasis komputer, laboratorium komputasi fakultas, dan perangkat konferensi tele-meeting universitas.",
      count: "12+ Personel",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="Tenaga Kependidikan"
        subtitle="Mengenal tim profesional dan tenaga kependidikan di balik operasional sistem teknologi informasi Universitas Indonesia."
        breadcrumbs={[
          { label: "Tentang Kami", href: "/tentang-dtd" },
          { label: "Tenaga Kependidikan" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-[#d49b00] uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Sumber Daya Manusia Unggul
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900">
            Insan Profesional Penopang Kampus Digital
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Tenaga kependidikan Direktorat Transformasi Digital UI terdiri atas para profesional bidang komputasi, rekayasa perangkat lunak, infrastruktur jaringan, keamanan informasi, dan dukungan pengguna yang berdedikasi melayani Universitas Indonesia.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teams.map((team, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-100 hover:border-gray-300 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div
                    className={`w-12 h-12 ${team.color} rounded-xl flex items-center justify-center shadow`}
                  >
                    {team.icon}
                  </div>
                  <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full">
                    {team.count}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 leading-snug">
                  {team.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {team.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-50 flex items-center gap-2 text-xs font-semibold text-[#d49b00]">
                <span>Direktorat Transformasi Digital UI</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
