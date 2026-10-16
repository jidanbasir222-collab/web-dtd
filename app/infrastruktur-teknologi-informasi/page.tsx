import React from "react";
import PageHeader from "@/components/PageHeader";
import { Server, Wifi, Cloud, ShieldCheck, Activity, HardDrive } from "lucide-react";

export default function InfrastrukturTIPage() {
  const infraItems = [
    {
      title: "Data Center & Disaster Recovery Center (DRC)",
      icon: <Server className="w-6 h-6 text-black" />,
      desc: "Data Center tier-standard yang dilengkapi sistem pendingin presisi, pasokan daya redundant (UPS & Genset otomatis), serta fasilitas DRC di lokasi geografis terpisah untuk menjamin kelangsungan layanan tanpa henti (High Availability).",
    },
    {
      title: "Backbone Jaringan Serat Optik 10 Gbps",
      icon: <Activity className="w-6 h-6 text-black" />,
      desc: "Jaringan kabel serat optik kecepatan tinggi yang menghubungkan seluruh fakultas, laboratorium riset, perpustakaan, asrama, dan gedung rektorat di Kampus Depok dan Salemba.",
    },
    {
      title: "Hotspot Wi-Fi Kampus & Eduroam",
      icon: <Wifi className="w-6 h-6 text-black" />,
      desc: "Ribuan titik Access Point Wi-Fi berkapasitas besar di seluruh area kampus, mendukung jaringan Hotspot UI dan roaming internasional nirkabel Eduroam untuk peneliti dan mahasiswa.",
    },
    {
      title: "Private & Hybrid Cloud Computing",
      icon: <Cloud className="w-6 h-6 text-black" />,
      desc: "Platform virtualisasi komputasi awan yang fleksibel untuk kebutuhan riset saintifik berbasis GPU, hosting website fakultas, dan repositori digital universitas.",
    },
    {
      title: "Web Application Firewall (WAF) & Keamanan Jaringan",
      icon: <ShieldCheck className="w-6 h-6 text-black" />,
      desc: "Benteng pertahanan siber berlapis yang memfilter lalu lintas berbahaya, serangan DDoS, injection, dan brute-force sebelum mencapai server aplikasi UI.",
    },
    {
      title: "Pusat Penyimpanan Data & Backup Otomatis",
      icon: <HardDrive className="w-6 h-6 text-black" />,
      desc: "Sistem penyimpanan data berskala Petabyte dengan skema cadangan data berkala harian, mingguan, dan bulanan terenkripsi standar industri.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="Infrastruktur Teknologi Informasi"
        subtitle="Fondasi komputasi awan, pusat data, dan konektivitas berkecepatan tinggi Universitas Indonesia."
        breadcrumbs={[
          { label: "Kenali DTD", href: "/perencanaan-dan-kebijakan-ti" },
          { label: "Infrastruktur Teknologi Informasi" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-16">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold text-[#d49b00] uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Jaringan & Komputasi
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900">
            Arsitektur Infrastruktur Digital Kampus UI
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Infrastruktur teknologi informasi DTD UI dirancang tangguh, aman, dan siap menghadapi lonjakan beban akses tinggi pada masa pengisian IRS, registrasi mahasiswa baru, dan ujian daring serentak.
          </p>
        </div>

        {/* Infrastructure Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {infraItems.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border border-gray-100 hover:border-[#fcb900] rounded-2xl shadow-sm hover:shadow-lg transition-all space-y-3"
            >
              <div className="w-12 h-12 bg-[#fcb900] rounded-xl flex items-center justify-center shadow">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
