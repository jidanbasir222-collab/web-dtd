import React from "react";
import PageHeader from "@/components/PageHeader";
import { SafeImage } from "@/app/page";
import { Users, Network, Code, Server, Headphones, Shield } from "lucide-react";

export default function StrukturOrganisasiPage() {
  const divisions = [
    {
      title: "Direktur Transformasi Digital",
      lead: "Pimpinan tertinggi direktorat yang bertanggung jawab langsung kepada Wakil Rektor Bidang Infrastruktur dan Fasilitas.",
      icon: <Users className="w-6 h-6 text-black" />,
      color: "bg-[#fcb900]",
      duties: [
        "Menetapkan arah kebijakan strategis transformasi digital UI",
        "Mengkoordinasikan perencanaan anggaran dan roadmap IT Master Plan",
        "Memimpin kemitraan strategis dengan entitas teknologi global dan nasional",
      ],
    },
    {
      title: "Subdirektorat Perencanaan & Kebijakan TI",
      lead: "Bertanggung jawab atas penyusunan arsitektur enterprise, kepatuhan audit ITGC, serta regulasi & SOP sistem informasi.",
      icon: <Network className="w-6 h-6 text-black" />,
      color: "bg-amber-400",
      duties: [
        "Penyusunan IT Master Plan dan Enterprise Architecture",
        "Audit sistem informasi dan pemenuhan standar kepatuhan regulasi",
        "Penyusunan Standard Operating Procedure (SOP) dan SLA layanan",
      ],
    },
    {
      title: "Subdirektorat Pengembangan Aplikasi Layanan",
      lead: "Mengembangkan, mengintegrasikan, dan memelihara seluruh ekosistem aplikasi universitas.",
      icon: <Code className="w-6 h-6 text-black" />,
      color: "bg-yellow-400",
      duties: [
        "Pengembangan sistem akademik (SIAK-NG, E-Learning, Penerimaan Mahasiswa)",
        "Pengembangan sistem manajerial (SIPEG, Keuangan, Aset, Persuratan)",
        "Pengembangan UI SuperApp dan integrasi Web API antarsistem",
      ],
    },
    {
      title: "Subdirektorat Infrastruktur & Keamanan TI",
      lead: "Mengelola Data Center, jaringan pita lebar kampus, cloud computing, serta benteng pertahanan siber (UI-CSIRT).",
      icon: <Server className="w-6 h-6 text-black" />,
      color: "bg-amber-500",
      duties: [
        "Pengelolaan pusat data (Data Center & Disaster Recovery Center)",
        "Pemeliharaan backbone jaringan serat optik dan Hotspot Wi-Fi UI",
        "Operasional tim tanggap insiden keamanan siber (UI-CSIRT & Firewall)",
      ],
    },
    {
      title: "Subdirektorat Operasional & Layanan STI",
      lead: "Garda terdepan yang memberikan dukungan helpdesk, pemeliharaan harian, serta pelatihan literasi digital.",
      icon: <Headphones className="w-6 h-6 text-black" />,
      color: "bg-yellow-500",
      duties: [
        "Pelayanan Helpdesk DTD UI terpadu (Chat, Tiket, Email support@ui.ac.id)",
        "Manajemen lisensi perangkat lunak (Microsoft 365, Google Workspace)",
        "Penyelenggaraan pelatihan teknis dan webinar teknologi untuk civitas UI",
      ],
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="Struktur Organisasi"
        subtitle="Bagan dan tata kelola struktur organisasi Direktorat Transformasi Digital Universitas Indonesia."
        breadcrumbs={[
          { label: "Tentang Kami", href: "/tentang-dtd" },
          { label: "Struktur Organisasi" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-16">
        {/* Intro Text */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold text-[#d49b00] uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Tata Kelola Organisasi
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Struktur dan Pembagian Peran DTD UI
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Direktorat Transformasi Digital beroperasi di bawah garis kepemimpinan Wakil Rektor Bidang Infrastruktur dan Fasilitas dengan pembagian subdirektorat yang fokus menangani pilar perencanaan, aplikasi, infrastruktur, keamanan, serta operasional layanan.
          </p>
        </div>

        {/* Diagram Image Card */}
        <div className="bg-zinc-50 border border-gray-200 p-6 sm:p-10 rounded-2xl shadow-sm text-center space-y-6">
          <div className="max-w-4xl mx-auto rounded-xl overflow-hidden border border-gray-300 shadow-md bg-white">
            <SafeImage
              src="https://dtd.ui.ac.id/wp-content/uploads/sites/3/2025/08/Struktur_Direktorat_Transformasi_Digital.jpg"
              alt="Bagan Struktur Organisasi Direktorat Transformasi Digital UI"
              className="w-full h-auto object-contain"
            />
          </div>
          <p className="text-xs text-gray-500 italic">
            Gambar: Bagan Resmi Struktur Organisasi Direktorat Transformasi Digital Universitas Indonesia
          </p>
        </div>

        {/* Division Breakdown Cards */}
        <div className="space-y-6">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
            Fungsi dan Tanggung Jawab Subdirektorat
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {divisions.map((div, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-100 hover:border-gray-300 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div
                    className={`w-12 h-12 ${div.color} rounded-xl flex items-center justify-center shadow`}
                  >
                    {div.icon}
                  </div>
                  <h4 className="font-bold text-base text-gray-900 leading-snug">
                    {div.title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {div.lead}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-2">
                    Tugas Pokok:
                  </span>
                  <ul className="space-y-1.5 text-xs text-gray-700">
                    {div.duties.map((duty, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-1.5">
                        <span className="text-[#fcb900] font-bold">•</span>
                        <span>{duty}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
