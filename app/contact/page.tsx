"use client";

import React, { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "Mahasiswa",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="Hubungi Kami"
        subtitle="Sampaikan pertanyaan, masukan, atau kendala layanan teknologi informasi Anda kepada tim DTD UI."
        breadcrumbs={[
          { label: "Tentang Kami", href: "/tentang-dtd" },
          { label: "Hubungi Kami" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-white border border-gray-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Kirim Pesan ke DTD UI</h2>
              <p className="text-gray-500 text-sm mt-1">
                Isi formulir di bawah ini, tim kami akan merespons melalui email dalam jam kerja resmi.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-green-50 border border-green-200 rounded-xl text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto" />
                <h3 className="text-lg font-bold text-green-900">
                  Pesan Anda Berhasil Terkirim!
                </h3>
                <p className="text-sm text-green-700 max-w-md mx-auto">
                  Terima kasih telah menghubungi Direktorat Transformasi Digital UI. Tim helpdesk kami akan segera menindaklanjuti pesan Anda.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      role: "Mahasiswa",
                      subject: "",
                      message: "",
                    });
                  }}
                  className="mt-4 px-5 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Masukkan nama lengkap Anda"
                      className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#fcb900] bg-gray-50 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Alamat Email UI / Aktif *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="contoh@ui.ac.id"
                      className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#fcb900] bg-gray-50 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Status Civitas *
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) =>
                        setFormData({ ...formData, role: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#fcb900] bg-gray-50 focus:bg-white"
                    >
                      <option value="Mahasiswa">Mahasiswa UI</option>
                      <option value="Dosen">Dosen UI</option>
                      <option value="Tenaga Kependidikan">Tenaga Kependidikan UI</option>
                      <option value="Alumni">Alumni</option>
                      <option value="Umum">Tamu / Umum</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Topik / Kategori Layanan *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="Misal: Reset Akun SSO, Wi-Fi, Office 365"
                      className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#fcb900] bg-gray-50 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Detail Pesan / Kendala *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tuliskan secara rinci pertanyaan atau kendala teknis yang Anda alami..."
                    className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#fcb900] bg-gray-50 focus:bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-[#fcb900] hover:bg-[#e5a800] text-black font-bold text-sm px-6 py-3 rounded-lg shadow-md transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Pesan Sekarang</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Office Location & Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Campus Depok */}
            <div className="bg-zinc-900 text-white p-6 sm:p-8 rounded-2xl border border-zinc-800 space-y-4">
              <div className="flex items-center gap-2.5 text-[#fcb900]">
                <MapPin className="w-5 h-5" />
                <h3 className="font-bold text-lg text-white">Kampus UI Depok</h3>
              </div>
              <div className="text-xs sm:text-sm text-gray-300 space-y-1.5 leading-relaxed">
                <p className="font-semibold text-white">
                  Direktorat Transformasi Digital UI
                </p>
                <p>Gedung Perpustakaan Lama Lt. 2</p>
                <p className="text-gray-400">
                  (Berdampingan dengan gedung ITTC), Kampus UI Depok, Jawa Barat 16424
                </p>
              </div>
            </div>

            {/* Campus Salemba */}
            <div className="bg-zinc-900 text-white p-6 sm:p-8 rounded-2xl border border-zinc-800 space-y-4">
              <div className="flex items-center gap-2.5 text-[#fcb900]">
                <MapPin className="w-5 h-5" />
                <h3 className="font-bold text-lg text-white">Kampus UI Salemba</h3>
              </div>
              <div className="text-xs sm:text-sm text-gray-300 space-y-1.5 leading-relaxed">
                <p className="font-semibold text-white">Layanan DTD UI Salemba</p>
                <p>Gedung IASTH Lt. 1 (di atas Bank BNI)</p>
                <p className="text-gray-400">
                  Jl. Salemba Raya No. 4, Jakarta Pusat 10430
                </p>
              </div>
            </div>

            {/* Operating Hours & Email */}
            <div className="p-6 bg-amber-50/70 border border-amber-200 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                <Clock className="w-4 h-4 text-[#d49b00]" />
                <span>Jam Layanan Helpdesk:</span>
              </div>
              <p className="text-xs text-gray-700">
                Senin – Jumat: Pukul 08:00 – 16:00 WIB (Istirahat 12:00 – 13:00 WIB)
              </p>

              <div className="pt-2 border-t border-amber-200 flex items-center gap-2 text-xs">
                <Mail className="w-4 h-4 text-[#d49b00]" />
                <span className="text-gray-600">Email Resmi:</span>
                <a
                  href="mailto:support@ui.ac.id"
                  className="font-bold text-gray-900 hover:text-[#d49b00] underline"
                >
                  support@ui.ac.id
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
