import React from "react";
import PageHeader from "@/components/PageHeader";
import { Key, ShieldAlert, Smartphone, CheckCircle2, Lock, UserCheck } from "lucide-react";

export default function AkunUIKamuPage() {
  const accountFeatures = [
    {
      title: "Single Sign-On (SSO UI)",
      icon: <Key className="w-6 h-6 text-black" />,
      desc: "Satu identitas digital terintegrasi untuk mengakses SIAK-NG, EMAS UI, Hotspot Wi-Fi, email, dan seluruh portal universitas tanpa perlu mengingat banyak kredensial.",
    },
    {
      title: "Penggantian Kata Sandi Berkala",
      icon: <Lock className="w-6 h-6 text-black" />,
      desc: "Lakukan pembaruan kata sandi secara berkala di portal https://akun.ui.ac.id. Gunakan kombinasi minimal 8 karakter huruf besar, huruf kecil, angka, dan simbol.",
    },
    {
      title: "Autentikasi Multi-Faktor (MFA)",
      icon: <Smartphone className="w-6 h-6 text-black" />,
      desc: "Lapisan perlindungan ganda menggunakan aplikasi Microsoft Authenticator saat login ke sistem sensitif agar akun tetap aman meskipun password bocor.",
    },
    {
      title: "Pemulihan Akun Mandiri",
      icon: <UserCheck className="w-6 h-6 text-black" />,
      desc: "Daftarkan nomor telepon seluler dan alamat email alternatif pribadi Anda untuk kemudahan verifikasi reset kata sandi secara instan.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="Akun UI Kamu"
        subtitle="Panduan pengelolaan akun Single Sign-On (SSO), keamanan kata sandi, dan autentikasi dua faktor di UI."
        breadcrumbs={[
          { label: "Layanan STI", href: "/layanan-it-universitas-indonesia" },
          { label: "Akun UI Kamu" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-16">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold text-[#d49b00] uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Identitas Digital
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900">
            Kunci Akses ke Seluruh Layanan Universitas Indonesia
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Akun SSO UI adalah kunci digital identitas resmi Anda sebagai civitas akademika. Jagalah kerahasiaan kata sandi dan jangan pernah membagikannya kepada siapa pun.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {accountFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 bg-white border border-gray-100 hover:border-[#fcb900] rounded-2xl shadow-sm hover:shadow-md transition-all space-y-3"
            >
              <div className="w-12 h-12 bg-[#fcb900] rounded-xl flex items-center justify-center shadow">
                {feat.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900">{feat.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Security Alert Warning */}
        <div className="p-8 bg-red-50 border border-red-200 rounded-2xl flex flex-col sm:flex-row gap-5 items-start">
          <ShieldAlert className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
          <div className="space-y-2">
            <h4 className="font-bold text-base text-red-900">
              Peringatan Keamanan Siber: Waspada Phishing!
            </h4>
            <p className="text-xs sm:text-sm text-red-800 leading-relaxed">
              DTD UI dan pihak rektorat <strong>TIDAK PERNAH</strong> meminta kata sandi akun SSO Anda melalui email, WhatsApp, formulir online, atau media apa pun. Jika Anda menerima email yang meminta pembaruan kuota email dengan memasukkan password, segera laporkan ke <strong>csirt@ui.ac.id</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
