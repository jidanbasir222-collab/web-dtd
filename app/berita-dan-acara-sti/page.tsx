"use client";

import React, { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { SafeImage } from "@/app/page";
import { allNewsData } from "@/data/newsData";
import {
  Calendar,
  Search,
  ChevronRight,
  ChevronLeft,
  Tag,
  ArrowRight,
  Clock,
} from "lucide-react";

export default function BeritaDanAcaraSTIPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const categories = ["Semua", "Berita", "Pelatihan", "Keamanan Siber", "Event"];

  // Filter news based on search and category
  const filteredNews = allNewsData.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "Semua" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage) || 1;
  const currentItems = filteredNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="Berita dan Acara STI"
        subtitle="Informasi terkini, wawasan teknologi, dokumentasi kegiatan, dan agenda Sistem & Teknologi Informasi di lingkungan Universitas Indonesia."
        breadcrumbs={[
          { label: "Tentang Kami", href: "/tentang-dtd" },
          { label: "Berita dan Acara STI" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Column: News List */}
          <div className="lg:col-span-8 space-y-8">
            {/* Filter & Search Controls */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between pb-6 border-b border-gray-100">
              {/* Category Pills */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setCurrentPage(1);
                    }}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                      selectedCategory === cat
                        ? "bg-[#fcb900] text-black"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative min-w-[240px]">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Cari berita & acara..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-9 pr-3 py-2 text-xs border border-gray-200 rounded-full focus:outline-none focus:border-[#fcb900] bg-gray-50 focus:bg-white"
                />
              </div>
            </div>

            {/* News Items */}
            {currentItems.length > 0 ? (
              <div className="space-y-8">
                {currentItems.map((news) => (
                  <article
                    key={news.id}
                    className="flex flex-col sm:flex-row gap-6 bg-white p-4 rounded-xl border border-gray-100 hover:border-gray-300 hover:shadow-md transition-all group"
                  >
                    {/* Thumbnail */}
                    <div className="sm:w-56 h-48 sm:h-auto flex-shrink-0 relative overflow-hidden rounded-lg bg-gray-100">
                      <SafeImage
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-2.5 left-2.5 bg-black/75 text-[#fdb813] text-[11px] font-bold px-2 py-0.5 rounded backdrop-blur-sm">
                        {news.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-between flex-grow">
                      <div>
                        <div className="flex items-center gap-2 text-gray-500 text-xs mb-2">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{news.date}</span>
                          <span>•</span>
                          <span>Oleh: {news.author}</span>
                        </div>
                        <h2 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-[#d49b00] transition-colors leading-snug">
                          <Link href={`/berita/${news.slug}`}>{news.title}</Link>
                        </h2>
                        <p className="text-gray-600 text-sm mt-2 line-clamp-3 leading-relaxed">
                          {news.summary}
                        </p>
                      </div>

                      <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                        <Link
                          href={`/berita/${news.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-900 hover:text-[#d49b00] group/link"
                        >
                          <span>Baca Selengkapnya</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="py-16 text-center text-gray-500 space-y-3">
                <p className="text-lg font-semibold">Tidak ada berita yang cocok</p>
                <p className="text-sm text-gray-400">
                  Coba gunakan kata kunci pencarian yang lain atau ubah kategori.
                </p>
              </div>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 pt-8">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                  className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  <ChevronLeft size={16} />
                </button>
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentPage(idx + 1)}
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-colors cursor-pointer ${
                      currentPage === idx + 1
                        ? "bg-[#fcb900] text-black"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
                <button
                  disabled={currentPage === totalPages}
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                  }
                  className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* Upcoming Event Widget */}
            <div className="bg-zinc-900 text-white p-6 rounded-xl space-y-4">
              <div className="flex items-center gap-2 border-b border-zinc-800 pb-3">
                <Calendar className="w-5 h-5 text-[#fdb813]" />
                <h3 className="font-bold text-base">Agenda Acara & Pelatihan</h3>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-zinc-800/70 rounded-lg border border-zinc-700/60 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#fdb813] font-semibold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Oktober 2026</span>
                  </div>
                  <h4 className="font-bold text-sm text-white">
                    Workshop Cyber Security Awareness: Tangkal Phishing & Social Engineering
                  </h4>
                  <p className="text-xs text-gray-400">
                    Sesi edukasi keamanan informasi untuk dosen dan tenaga kependidikan UI.
                  </p>
                  <Link
                    href="/pelatihan-sti"
                    className="inline-block text-xs font-semibold text-[#fdb813] hover:underline pt-1"
                  >
                    Daftar Pelatihan &gt;
                  </Link>
                </div>

                <div className="p-4 bg-zinc-800/70 rounded-lg border border-zinc-700/60 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#fdb813] font-semibold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>November 2026</span>
                  </div>
                  <h4 className="font-bold text-sm text-white">
                    Sosialisasi Penggunaan Cloud Storage OneDrive & Microsoft 365
                  </h4>
                  <p className="text-xs text-gray-400">
                    Optimalisasi kolaborasi dokumen digital mahasiswa dan staf UI.
                  </p>
                  <Link
                    href="/mulai-dengan-office-365"
                    className="inline-block text-xs font-semibold text-[#fdb813] hover:underline pt-1"
                  >
                    Lihat Panduan &gt;
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Links Card */}
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl space-y-4">
              <h3 className="font-bold text-base text-gray-900 border-b border-gray-200 pb-2">
                Tautan Terkait
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    href="/pelatihan-sti"
                    className="text-gray-700 hover:text-[#d49b00] flex items-center justify-between"
                  >
                    <span>Jadwal Pelatihan STI</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ui-csirt"
                    className="text-gray-700 hover:text-[#d49b00] flex items-center justify-between"
                  >
                    <span>Layanan Insiden Siber (UI-CSIRT)</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mencari-bantuan-dan-dukungan-layanan-it-ui"
                    className="text-gray-700 hover:text-[#d49b00] flex items-center justify-between"
                  >
                    <span>Helpdesk DTD UI</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-journey"
                    className="text-gray-700 hover:text-[#d49b00] flex items-center justify-between"
                  >
                    <span>Perjalanan Transformasi Digital UI</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
