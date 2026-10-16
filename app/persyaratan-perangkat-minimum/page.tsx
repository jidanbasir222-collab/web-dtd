import React from "react";
import PageHeader from "@/components/PageHeader";
import { Laptop, Cpu, HardDrive, Wifi, MonitorCheck, Layers } from "lucide-react";

export default function PersyaratanPerangkatMinimumPage() {
  const specsGeneral = [
    {
      item: "Prosesor (CPU)",
      min: "Intel Core i3 Generasi ke-10 / AMD Ryzen 3 4000 series / setara",
      rec: "Intel Core i5/i7 Generasi ke-12+ / AMD Ryzen 5/7 5000+ / Apple M-series",
    },
    {
      item: "Memori (RAM)",
      min: "8 GB DDR4",
      rec: "16 GB DDR4/DDR5 (Sangat disarankan untuk multitasking dan riset data)",
    },
    {
      item: "Penyimpanan (Storage)",
      min: "256 GB SSD (Solid State Drive)",
      rec: "512 GB NVMe SSD atau lebih besar",
    },
    {
      item: "Sistem Operasi (OS)",
      min: "Windows 10 (64-bit) / macOS Ventura (13+) / Linux Ubuntu LTS",
      rec: "Windows 11 (64-bit) / macOS Sonoma / Sequoia terbaru",
    },
    {
      item: "Konektivitas Wi-Fi",
      min: "Wi-Fi 5 (802.11ac) dual band 2.4 GHz & 5 GHz",
      rec: "Wi-Fi 6 / 6E (802.11ax) untuk kecepatan optimal di Hotspot UI",
    },
    {
      item: "Kamera & Mikrofon",
      min: "Webcam resolusi 720p & Built-in Microphone",
      rec: "Webcam Full HD 1080p & Noise-cancelling microphone untuk sidang/kuliah daring",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="Persyaratan Perangkat Minimum"
        subtitle="Rekomendasi spesifikasi teknis komputer dan laptop untuk kelancaran kegiatan akademik dan komputasi di UI."
        breadcrumbs={[
          { label: "Layanan STI", href: "/layanan-it-universitas-indonesia" },
          { label: "Persyaratan Perangkat Minimum" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-16">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold text-[#d49b00] uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Panduan Hardware
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900">
            Spesifikasi Perangkat Komputasi yang Dianjurkan
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Untuk memastikan Anda dapat menjalankan aplikasi pembelajaran, ujian berbasis komputer, peranti lunak riset (MATLAB, SPSS), dan telekonferensi video dengan lancar, berikut adalah standar spesifikasi perangkat minimum dan rekomendasi dari DTD UI.
          </p>
        </div>

        {/* Specs Table */}
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-zinc-900 text-white">
                <th className="py-4 px-6 font-bold text-xs uppercase tracking-wider w-1/4">
                  Komponen
                </th>
                <th className="py-4 px-6 font-bold text-xs uppercase tracking-wider w-3/8 text-amber-300">
                  Spesifikasi Minimum
                </th>
                <th className="py-4 px-6 font-bold text-xs uppercase tracking-wider w-3/8 text-[#fcb900]">
                  Rekomendasi Ideal
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {specsGeneral.map((s, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/60"}
                >
                  <td className="py-4 px-6 font-semibold text-gray-900">
                    {s.item}
                  </td>
                  <td className="py-4 px-6 text-gray-600">{s.min}</td>
                  <td className="py-4 px-6 text-gray-900 font-medium">{s.rec}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Note for Engineering / CS */}
        <div className="p-8 bg-amber-50 border border-amber-200 rounded-2xl space-y-2">
          <h4 className="font-bold text-base text-amber-900">
            Catatan Khusus Bidang Teknik, Desain, & Ilmu Komputer:
          </h4>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            Bagi mahasiswa Fakultas Teknik (FT) dan Fakultas Ilmu Komputer (Fasilkom) yang banyak menjalankan pemodelan 3D (CAD/Revit), machine learning, atau kompilasi kode berat, disarankan memiliki RAM minimal 16–32 GB serta kartu grafis terdedikasi (Dedicated GPU NVIDIA RTX / setara).
          </p>
        </div>
      </div>
    </div>
  );
}
