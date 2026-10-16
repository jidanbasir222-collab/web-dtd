import React from "react";
import PageHeader from "@/components/PageHeader";
import { Wifi, Globe, Shield, Smartphone, Laptop, CheckCircle2 } from "lucide-react";

export default function TerhubungKeInternetPage() {
  const connectionTypes = [
    {
      title: "1. Hotspot UI (Wi-Fi Kampus)",
      forWho: "Mahasiswa, Dosen, & Tenaga Kependidikan UI",
      icon: <Wifi className="w-6 h-6 text-black" />,
      steps: [
        "Nyalakan Wi-Fi pada laptop atau ponsel cerdas Anda.",
        "Pilih SSID 'Hotspot UI' yang tersedia di lingkungan kampus.",
        "Browser akan otomatis membuka captive portal login UI.",
        "Masukkan username akun SSO UI (tanpa @ui.ac.id) dan kata sandi Anda.",
        "Setelah login berhasil, perangkat Anda langsung terhubung ke internet.",
      ],
    },
    {
      title: "2. Eduroam (Roaming Akademik Global)",
      forWho: "Civitas UI di kampus mitra & Tamu internasional di UI",
      icon: <Globe className="w-6 h-6 text-black" />,
      steps: [
        "Pilih SSID 'eduroam' pada perangkat Anda.",
        "Gunakan username lengkap berdomain UI, contoh: nama.pengguna@ui.ac.id.",
        "Masukkan kata sandi SSO UI Anda.",
        "Pilih metode keamanan WPA2/WPA3 Enterprise (PEAP / MSCHAPv2).",
        "Koneksi eduroam ini dapat Anda gunakan di ribuan universitas mitra di seluruh dunia tanpa perlu registrasi ulang.",
      ],
    },
    {
      title: "3. VPN UI (Virtual Private Network)",
      forWho: "Akses Jaringan Kampus dari Rumah / Luar Kampus",
      icon: <Shield className="w-6 h-6 text-black" />,
      steps: [
        "Unduh aplikasi klien VPN resmi UI (FortiClient / OpenVPN).",
        "Masukkan gateway server: vpn.ui.ac.id.",
        "Login menggunakan kredensial akun SSO UI Anda.",
        "Setelah status Connected, Anda dapat mengakses jurnal berbayar UI dan server internal universitas dari rumah.",
      ],
    },
    {
      title: "4. UI-Guest (Akses Wi-Fi Tamu)",
      forWho: "Pengunjung, Peserta Seminar, & Tamu Resmi Kampus",
      icon: <Smartphone className="w-6 h-6 text-black" />,
      steps: [
        "Pilih SSID 'UI-Guest' di ruang pertemuan atau gedung fakultas.",
        "Buka browser, masukkan nomor ponsel atau dapatkan voucher akses sementara dari panitia acara/staf DTD.",
        "Masukkan kode OTP / token untuk mulai menjelajah internet.",
      ],
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="Terhubung ke Internet"
        subtitle="Panduan lengkap menghubungkan perangkat Anda ke jaringan nirkabel dan internet di Universitas Indonesia."
        breadcrumbs={[
          { label: "Saya ingin", href: "/terhubung-ke-internet" },
          { label: "Terhubung ke Internet" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-16">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold text-[#d49b00] uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Panduan Koneksi
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900">
            Cara Menghubungkan Perangkat ke Jaringan UI
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Universitas Indonesia menyediakan akses internet nirkabel cepat dan stabil di seluruh gedung kuliah, perpustakaan, asrama, dan area terbuka hijau di Kampus Depok dan Salemba.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {connectionTypes.map((conn, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#fcb900] rounded-xl flex items-center justify-center shadow">
                    {conn.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 leading-snug">
                      {conn.title}
                    </h3>
                    <span className="text-xs text-[#a37200] font-semibold">
                      Untuk: {conn.forWho}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Langkah-langkah:
                  </span>
                  <ol className="space-y-2 text-xs sm:text-sm text-gray-700">
                    {conn.steps.map((step, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                          {sIdx + 1}
                        </span>
                        <span className="leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
