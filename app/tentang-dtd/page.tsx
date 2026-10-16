import React from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { SafeImage } from "@/app/page";
import { CheckCircle2, Target, Eye, ShieldCheck, Cpu, Users } from "lucide-react";

export default function TentangDTDPage() {
  const values = [
    {
      icon: <Target className="w-6 h-6 text-[#fdb813]" />,
      title: "Orientasi Layanan Unggul",
      desc: "Menyediakan layanan STI yang andal, cepat tanggap, dan berpusat pada kebutuhan civitas akademika UI.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#fdb813]" />,
      title: "Integritas & Keamanan Data",
      desc: "Menjaga kerahasiaan, integritas, dan ketersediaan data universitas dengan standar keamanan siber tertinggi.",
    },
    {
      icon: <Cpu className="w-6 h-6 text-[#fdb813]" />,
      title: "Inovasi Berkelanjutan",
      desc: "Menerapkan teknologi mutakhir termasuk AI, cloud infrastructure, dan integrasi sistem pintar kampus.",
    },
    {
      icon: <Users className="w-6 h-6 text-[#fdb813]" />,
      title: "Kolaborasi & Kemitraan",
      desc: "Bersinergi dengan fakultas, lembaga riset, serta mitra industri global dalam akselerasi transformasi digital.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="Tentang DTD"
        subtitle="Mengenal Direktorat Transformasi Digital Universitas Indonesia - Mitra Strategis Menjelajahi Dunia Digital di UI."
        breadcrumbs={[
          { label: "Tentang Kami", href: "/tentang-dtd" },
          { label: "Tentang DTD" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-16">
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold text-[#d49b00] uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Profil Direktorat
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
              Pondasi Transformasi dan Layanan Digital Universitas Indonesia
            </h2>
            <p className="text-gray-700 leading-relaxed text-base">
              <strong>Direktorat Transformasi Digital (DTD)</strong> adalah direktorat
              di bawah Wakil Rektor Bidang Infrastruktur dan Fasilitas Universitas Indonesia.
              DTD bertugas menyusun dan melaksanakan kebijakan untuk mengembangkan,
              mengelola, dan memberikan pelayanan Sistem dan Teknologi Informasi (STI)
              Universitas guna mewujudkan visi, misi, dan tujuan Universitas Indonesia.
            </p>
            <p className="text-gray-700 leading-relaxed text-base">
              Sebagai tulang punggung teknologi universitas, DTD mengelola infrastruktur jaringan
              kampus berkecepatan tinggi, pusat data (Data Center) terpadu, puluhan sistem informasi
              akademik dan manajerial, serta memberikan dukungan helpdesk TI bagi lebih dari
              50.000 mahasiswa, dosen, dan tenaga kependidikan.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100">
              <SafeImage
                src="https://dtd.ui.ac.id/wp-content/uploads/sites/3/2025/08/IMG_6914-2-scaled.jpg"
                alt="Gedung DTD Universitas Indonesia"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white text-xs">
                Gedung Direktorat Transformasi Digital UI Depok
              </div>
            </div>
          </div>
        </div>

        {/* Visi & Misi Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Visi */}
          <div className="p-8 bg-gradient-to-br from-zinc-900 to-zinc-950 text-white rounded-2xl shadow-xl relative overflow-hidden border border-zinc-800">
            <div className="w-12 h-12 bg-[#fcb900]/20 rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-[#fcb900]" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#fcb900]">Visi DTD UI</h3>
            <p className="text-gray-300 leading-relaxed text-base">
              Menjadi penggerak utama transformasi digital yang unggul, terintegrasi, dan inklusif dalam mewujudkan Universitas Indonesia sebagai perguruan tinggi riset berkelas dunia yang berdaya saing global dan berintegritas tinggi.
            </p>
          </div>

          {/* Misi */}
          <div className="p-8 bg-amber-50/80 border border-amber-200 rounded-2xl shadow-sm text-gray-900">
            <div className="w-12 h-12 bg-[#fcb900] rounded-xl flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Misi DTD UI</h3>
            <ul className="space-y-3 text-sm sm:text-base text-gray-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Menyediakan infrastruktur teknologi informasi yang handal, aman, scalable, dan mutakhir.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Mengembangkan aplikasi layanan digital terpadu untuk efisiensi tridarma perguruan tinggi.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Memperkuat tata kelola TI, kepatuhan audit, dan benteng ketahanan siber kampus.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Meningkatkan literasi dan adopsi digital civitas akademika melalui pelatihan berkelanjutan.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Nilai Budaya Kerja */}
        <div className="space-y-8 pt-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl font-extrabold text-gray-900">
              Nilai Budaya Kerja DTD UI
            </h3>
            <p className="text-gray-500 text-sm">
              Prinsip yang membimbing setiap langkah tim kami dalam melayani seluruh ekosistem kampus.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="p-6 bg-white border border-gray-100 hover:border-[#fcb900] rounded-xl shadow-sm hover:shadow-md transition-all space-y-3"
              >
                <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center">
                  {v.icon}
                </div>
                <h4 className="font-bold text-base text-gray-900">{v.title}</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-[#16171b] text-white p-8 sm:p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-zinc-800">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">
              Butuh Informasi atau Bantuan Layanan TI?
            </h3>
            <p className="text-gray-400 text-sm max-w-xl">
              Tim Helpdesk Direktorat Transformasi Digital siap mendampingi kebutuhan teknologi Anda di lingkungan Universitas Indonesia.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-[#fcb900] hover:bg-[#e5a800] text-black font-bold text-sm px-6 py-3 rounded-lg shadow-lg transition-colors whitespace-nowrap cursor-pointer"
          >
            Hubungi DTD UI
          </Link>
        </div>
      </div>
    </div>
  );
}
