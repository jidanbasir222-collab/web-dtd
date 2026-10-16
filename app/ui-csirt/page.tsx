import React from "react";
import PageHeader from "@/components/PageHeader";
import { Shield, AlertTriangle, Phone, Mail, FileText, CheckCircle2, Lock } from "lucide-react";

export default function UICSIRTPage() {
  const services = [
    {
      title: "Penanganan Insiden Siber (Incident Handling)",
      desc: "Investigasi forensik digital, analisis log, isolasi ancaman, dan pemulihan sistem yang terindikasi disusupi atau mengalami peretasan.",
      icon: <AlertTriangle className="w-6 h-6 text-red-600" />,
    },
    {
      title: "Uji Kerentanan (Vulnerability Assessment)",
      desc: "Pengujian penetrasi berkala pada sistem informasi fakultas dan universitas untuk menemukan celah keamanan sebelum dieksploitasi pihak luar.",
      icon: <Shield className="w-6 h-6 text-black" />,
    },
    {
      title: "Peringatan Dini Keamanan (Security Advisory)",
      desc: "Pemberitahuan resmi dan arahan penambalan celah keamanan kritis terhadap zero-day vulnerabilities yang berpotensi berdampak pada aset UI.",
      icon: <FileText className="w-6 h-6 text-black" />,
    },
    {
      title: "Edukasi & Simulasi Phishing",
      desc: "Simulasi uji kesiapan civitas akademika dalam mendeteksi email penipuan (phishing) dan peningkatan kesadaran perlindungan privasi data pribadi.",
      icon: <Lock className="w-6 h-6 text-black" />,
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="UI-CSIRT"
        subtitle="Computer Security Incident Response Team – Tim Tanggap Insiden Keamanan Siber Universitas Indonesia."
        breadcrumbs={[
          { label: "UI-CSIRT" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold text-red-700 uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full border border-red-200">
              Pertahanan Keamanan Siber
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 leading-tight">
              Menjaga Keamanan Ekosistem Siber Universitas Indonesia
            </h2>
            <p className="text-gray-700 leading-relaxed text-base">
              <strong>UI-CSIRT (Universitas Indonesia Computer Security Incident Response Team)</strong> adalah tim tanggap insiden siber resmi yang dibentuk oleh Universitas Indonesia di bawah naungan Direktorat Transformasi Digital (DTD).
            </p>
            <p className="text-gray-700 leading-relaxed text-base">
              UI-CSIRT bertugas memberikan layanan tanggap darurat insiden keamanan informasi, pemantauan ancaman proaktif, serta koordinasi penanganan insiden siber bersama Badan Siber dan Sandi Negara (BSSN) dan komunitas CSIRT perguruan tinggi nasional.
            </p>
          </div>

          <div className="lg:col-span-4 bg-zinc-900 text-white p-6 sm:p-8 rounded-2xl border border-zinc-800 space-y-4">
            <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white">Kontak Darurat Insiden</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Jika Anda menemukan indikasi insiden kebocoran data, serangan ransomware, atau website kampus diretas, segera laporkan ke:
            </p>
            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#fcb900]" />
                <a href="mailto:csirt@ui.ac.id" className="font-mono text-[#fcb900] underline font-bold">
                  csirt@ui.ac.id
                </a>
              </div>
              <div className="text-gray-400">
                Respons siaga insiden: 24 Jam / 7 Hari
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">
            Fokus Layanan UI-CSIRT
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((svc, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 bg-white border border-gray-100 hover:border-red-500 rounded-2xl shadow-sm hover:shadow-lg transition-all space-y-3"
              >
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center">
                  {svc.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900">{svc.title}</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
