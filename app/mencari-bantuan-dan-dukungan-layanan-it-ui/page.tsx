"use client";

import React, { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { Headphones, Mail, MessageSquare, MapPin, ChevronDown, HelpCircle, CheckCircle2 } from "lucide-react";

export default function BantuanDanDukunganITPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "Bagaimana cara mereset kata sandi akun SSO UI jika lupa?",
      a: "Anda dapat mengakses laman https://akun.ui.ac.id lalu klik tautan 'Lupa Password'. Masukkan username atau nomor identitas dan ikuti instruksi pemulihan yang dikirimkan ke email alternatif yang telah Anda daftarkan. Jika nomor HP atau email alternatif sudah tidak aktif, silakan hubungi helpdesk DTD dengan melampirkan foto Kartu Tanda Mahasiswa (KTM) atau KTP Anda.",
    },
    {
      q: "Mengapa captive portal login Hotspot UI tidak muncul di browser?",
      a: "Jika captive portal tidak otomatis terbuka, buka peramban Anda (Chrome/Safari) dan ketik alamat http://neverssl.com atau http://1.1.1.1 pada address bar untuk memicu pop-up halaman login secara manual. Pastikan Anda tidak sedang mengaktifkan private DNS atau custom proxy pada perangkat.",
    },
    {
      q: "Bagaimana cara mendapatkan lisensi Microsoft 365 dan OneDrive 1 TB?",
      a: "Seluruh civitas aktif UI cukup mengakses https://portal.office.com dan login menggunakan email UI (@ui.ac.id atau @office.ui.ac.id) beserta kata sandi SSO. Anda langsung dapat mengunduh installer resmi Office dan menikmati kapasitas cloud 1 TB tanpa biaya tambahan.",
    },
    {
      q: "Bagaimana prosedur pelaporan jika mencurigai adanya email phishing?",
      a: "Jangan mengklik tautan atau mengunduh lampiran pada email tersebut. Segera teruskan (forward) email mencurigakan tersebut ke alamat csirt@ui.ac.id dan support@ui.ac.id agar tim UI-CSIRT dapat segera memblokir domain penyerang pada sistem firewall kampus.",
    },
  ];

  const channels = [
    {
      title: "Email Support Resmi",
      info: "support@ui.ac.id",
      desc: "Respons resmi tiket dalam 1x24 jam kerja.",
      icon: <Mail className="w-6 h-6 text-black" />,
    },
    {
      title: "Live Chat WhatsApp",
      info: "Chat Helpdesk DTD",
      desc: "Layanan konsultasi cepat hari kerja 08:00 - 16:00 WIB.",
      icon: <MessageSquare className="w-6 h-6 text-black" />,
    },
    {
      title: "Layanan Tatap Muka Depok",
      info: "Gedung Perpustakaan Lama Lt. 2",
      desc: "Berdampingan dengan gedung ITTC, Kampus UI Depok.",
      icon: <MapPin className="w-6 h-6 text-black" />,
    },
    {
      title: "Layanan Tatap Muka Salemba",
      info: "Gedung IASTH Lt. 1",
      desc: "Di atas Bank BNI, Jl. Salemba Raya No. 4 Jakarta Pusat.",
      icon: <MapPin className="w-6 h-6 text-black" />,
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="Mencari Bantuan dan Dukungan IT UI"
        subtitle="Pusat layanan helpdesk, konsultasi teknis, dan jawaban atas pertanyaan umum terkait teknologi informasi di UI."
        breadcrumbs={[
          { label: "Saya ingin", href: "/terhubung-ke-internet" },
          { label: "Bantuan dan Dukungan IT" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-16">
        {/* Contact Channels Grid */}
        <div className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold text-[#d49b00] uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Kanal Bantuan
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Saluran Resmi Helpdesk DTD UI
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Pilih kanal bantuan yang paling nyaman untuk menyelesaikan kendala teknologi Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {channels.map((ch, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-gray-100 hover:border-[#fcb900] rounded-2xl shadow-sm hover:shadow-md transition-all space-y-3"
              >
                <div className="w-12 h-12 bg-[#fcb900] rounded-xl flex items-center justify-center shadow">
                  {ch.icon}
                </div>
                <div>
                  <h4 className="font-bold text-base text-gray-900">{ch.title}</h4>
                  <p className="text-xs font-semibold text-[#d49b00] mt-0.5">
                    {ch.info}
                  </p>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {ch.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="space-y-6 pt-4">
          <h3 className="text-2xl font-bold text-gray-900">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h3>
          <div className="space-y-4 max-w-4xl">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-sm sm:text-base text-gray-900 hover:text-[#d49b00] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-500 transition-transform flex-shrink-0 ml-4 ${
                      openFaq === idx ? "rotate-180 text-[#fcb900]" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
