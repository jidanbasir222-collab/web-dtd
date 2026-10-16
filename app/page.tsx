"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Monitor,
  Wifi,
  Mail,
  MessageSquare,
  ChevronRight,
  ChevronLeft,
  Calendar as CalendarIcon,
} from "lucide-react";
import { allNewsData } from "@/data/newsData";

// Fallback image helper component with smooth loading & error fallback
export function SafeImage({
  src,
  alt,
  className,
  fallbackBg = "bg-zinc-800",
}: {
  src: string;
  alt: string;
  className?: string;
  fallbackBg?: string;
}) {
  const [hasError, setHasError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className} ${fallbackBg}`}>
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setLoaded(true)}
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-amber-700/30 to-zinc-900 text-amber-200">
          <span className="text-xs font-medium line-clamp-2">{alt}</span>
        </div>
      )}
    </div>
  );
}

export default function DTDLandingPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState("OCTOBER, 2026");
  const [activeNewsPage, setActiveNewsPage] = useState(1);

  // Slide carousel data
  const slides = [
    {
      id: 1,
      bgImage:
        "https://dtd.ui.ac.id/wp-content/uploads/sites/3/2025/08/IMG_6914-2-scaled.jpg",
      title: "Mengenal DTD: Sahabatmu dalam Menjelajahi Dunia Digital di UI",
      desc: "DTD sebagai mitra strategis dalam meningkatkan produktivitas kerja dosen dan tenaga kependidikan.",
      btnText: "Selengkapnya",
      btnLink: "/tentang-dtd",
      accentColor: "text-[#ffdd00]",
    },
    {
      id: 2,
      bgImage:
        "https://dtd.ui.ac.id/wp-content/uploads/sites/3/2024/08/ea186103-33e0-426d-8ab6-9b49f1d5fe16.jpg",
      title: "DTD UI: Merawat Api Perjuangan Melalui Inovasi Teknologi",
      desc: "Merayakan HUT RI ke-80, DTD UI mengajak seluruh masyarakat untuk turut serta dalam merayakan kemerdekaan dengan inovasi teknologi.",
      btnText: "Selengkapnya",
      btnLink: "/our-journey",
      accentColor: "text-[#ff5544]",
    },
    {
      id: 3,
      bgImage:
        "https://dtd.ui.ac.id/wp-content/uploads/sites/3/2024/11/Gemini_Generated_Image_r58o3tr58o3tr58o.jpg",
      title: "Bentengi Keamanan Siber Dengan Web Application Firewall",
      desc: "Universitas Indonesia (UI), sebagai salah satu perguruan tinggi terkemuka di Indonesia, terus berupaya menjaga keamanan data dan informasi yang sangat berharga. Dalam era digital yang semakin kompleks, ancaman siber menjadi tantangan serius yang harus diatasi.",
      btnText: "Selengkapnya",
      btnLink: "/ui-csirt",
      accentColor: "text-[#ffdd00]",
    },
  ];

  // Auto slide interval
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Quick Services Cards data
  const quickServices = [
    {
      title: "Office 365",
      headerColor: "bg-[#ffd700]",
      icon: <Monitor className="w-5 h-5 text-black" />,
      image:
        "https://dtd.ui.ac.id/wp-content/uploads/sites/3/2025/09/PTG-Discovery-BLOG-Enhancing-Collaboration-and-Security-495x600.webp",
      desc: "Tingkatkan produktivitas dengan Microsoft Word, Excel, PowerPoint, Outlook & OneDrive",
      link: "/mulai-dengan-office-365",
    },
    {
      title: "Jaringan UI",
      headerColor: "bg-[#e5c80d]",
      icon: <Wifi className="w-5 h-5 text-black" />,
      image:
        "https://dtd.ui.ac.id/wp-content/uploads/sites/3/2025/09/Gemini_Generated_Image_8wlmq08wlmq08wlm-495x600.png",
      desc: "Temukan cara Civitas UI dan tamu terhubung ke Jaringan Internet di lingkungan UI",
      link: "/terhubung-ke-internet",
    },
    {
      title: "Email UI",
      headerColor: "bg-[#d9bd0a]",
      icon: <Mail className="w-5 h-5 text-black" />,
      image:
        "https://dtd.ui.ac.id/wp-content/uploads/sites/3/2025/09/outlook-mail-mockup-sketch-495x600.jpg",
      desc: "Kini Civitas Akademik UI dapat menggunakan fasilitas email dengan domain UI",
      link: "/menggunakan-email-ui",
    },
    {
      title: "Tanya DTD",
      headerColor: "bg-[#d9bd0a]",
      icon: <MessageSquare className="w-5 h-5 text-black" />,
      image:
        "https://dtd.ui.ac.id/wp-content/uploads/sites/3/2025/09/mahasiswa-495x600.png",
      desc: "Kamu perlu bantuan terkait layanan IT di UI? silahkan kunjungi dan kontak helpdesk DTD",
      link: "/mencari-bantuan-dan-dukungan-layanan-it-ui",
    },
  ];

  const displayedNews =
    activeNewsPage === 1 ? allNewsData.slice(0, 3) : allNewsData.slice(3, 6);

  return (
    <div className="bg-white text-gray-900 font-sans flex flex-col">
      {/* 1. HERO SLIDER BANNER */}
      <section className="relative w-full h-[520px] sm:h-[580px] lg:h-[620px] bg-[#1a1a1a] overflow-hidden select-none">
        {slides.map((slide, index) => {
          const isActive = index === activeSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Background image */}
              <SafeImage
                src={slide.bgImage}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              {/* Dark subtle overlay */}
              <div className="absolute inset-0 bg-black/35" />

              {/* Floating Content Badges */}
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full">
                  <div className="max-w-3xl space-y-3">
                    {/* Title Banner */}
                    <div className="inline-block bg-[#020202]/85 backdrop-blur-sm px-5 py-3.5 rounded-sm shadow-xl">
                      <h1
                        className={`text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight ${slide.accentColor}`}
                      >
                        {slide.title}
                      </h1>
                    </div>

                    {/* Description Banner */}
                    <div>
                      <div className="inline-block bg-[#000000]/75 backdrop-blur-sm px-5 py-3 rounded-sm shadow-lg max-w-xl">
                        <p className="text-white text-sm sm:text-base leading-relaxed font-normal">
                          {slide.desc}
                        </p>
                      </div>
                    </div>

                    {/* Link Button Banner */}
                    <div>
                      <Link
                        href={slide.btnLink}
                        className="inline-flex items-center gap-2 bg-[#000000]/80 hover:bg-[#000000] text-[#ffdd00] px-5 py-2.5 rounded-sm font-semibold text-sm transition-all shadow-md group"
                      >
                        <span>{slide.btnText}</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Slider Controls */}
        <button
          onClick={() =>
            setActiveSlide(
              (prev) => (prev - 1 + slides.length) % slides.length
            )
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-black/40 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all opacity-70 hover:opacity-100 cursor-pointer"
          aria-label="Previous slide"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={() =>
            setActiveSlide((prev) => (prev + 1) % slides.length)
          }
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-black/40 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all opacity-70 hover:opacity-100 cursor-pointer"
          aria-label="Next slide"
        >
          <ChevronRight size={22} />
        </button>

        {/* Slide Indicator Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                i === activeSlide ? "w-8 bg-[#fcb900]" : "w-2.5 bg-white/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. FOUR QUICK SERVICES CARDS */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 -mt-10 sm:-mt-14 mb-16 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 shadow-2xl">
          {quickServices.map((service, index) => (
            <div
              key={index}
              className="bg-white flex flex-col justify-between group hover:shadow-xl transition-all duration-300 border-r border-gray-100 last:border-r-0"
            >
              {/* Yellow Header Bar */}
              <div
                className={`${service.headerColor} p-6 flex items-center gap-3.5`}
              >
                <div className="w-8 h-8 flex items-center justify-center bg-black/10 rounded-full">
                  {service.icon}
                </div>
                <h2 className="text-black font-bold text-lg tracking-tight">
                  {service.title}
                </h2>
              </div>

              {/* Service Preview Image */}
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <SafeImage
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Description & Link */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <p className="text-gray-700 text-[14px] leading-relaxed mb-4 min-h-[56px]">
                  {service.desc}
                </p>
                <Link
                  href={service.link}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-800 hover:text-[#d49b00] group/link"
                >
                  <span className="italic">Selengkapnya</span>
                  <span className="w-4 h-4 rounded-full bg-gray-700 text-white flex items-center justify-center group-hover/link:bg-[#d49b00] transition-colors text-[9px]">
                    &gt;
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. HELPDESK QUESTIONNAIRE & ABOUT DTD BANNER SECTION */}
      <section className="relative py-20 px-4 sm:px-8 bg-zinc-900 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <SafeImage
            src="https://dtd.ui.ac.id/wp-content/uploads/sites/3/2025/08/IMG_6948-4-scaled.jpg"
            alt="Helpdesk DTD UI Team"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/85" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Layanan Kepuasan Helpdesk */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Layanan Kepuasan <br />
              Helpdesk DTD
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-md">
              Bantu tingkatkan layanan kami dengan memulai kuesioner kepuasan layanan TI.
            </p>
            <div>
              <a
                href="https://bit.ly/SurveyKepuasanTIUI2024"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#81d742] hover:bg-[#1e73be] text-white font-bold text-sm px-8 py-3.5 rounded shadow-lg transition-colors cursor-pointer"
              >
                Mulai Kuesioner
              </a>
            </div>
          </div>

          {/* Right Column: Tentang DTD Box */}
          <div className="lg:col-span-6">
            <div className="bg-[#e0ba60] text-gray-900 p-8 sm:p-10 rounded shadow-2xl relative">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-[#1a1a1a]">
                Tentang Direktorat Transformasi Digital
              </h3>
              <p className="text-zinc-800 text-sm sm:text-base leading-relaxed mb-8">
                Direktorat Transformasi Digital (DTD) adalah direktorat yang
                berada di bawah Wakil Rektor Bidang Infrastruktur dan Fasilitas.
                DTD bertugas menyusun dan melaksanakan kebijakan untuk
                mengembangkan, mengelola dan memberikan pelayanan Sistem dan
                Teknologi Informasi (STI) Universitas yang digariskan untuk mewujudkan visi,
                misi dan tujuan Universitas.
              </p>
              <div className="flex justify-end">
                <Link
                  href="/tentang-dtd"
                  className="inline-block bg-[#ffaa00] hover:bg-[#1e73be] hover:text-white text-gray-950 font-bold text-sm px-8 py-3 rounded shadow transition-colors cursor-pointer"
                >
                  Selengkapnya
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INFO & BERITA & EVENT & TRAINING SECTION */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Info & Berita */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2">
              <div className="flex items-center gap-4 flex-grow">
                <h2 className="text-2xl font-bold text-gray-900 whitespace-nowrap">
                  Info & Berita
                </h2>
                <div className="h-1 bg-[#ffdd00] w-full rounded" />
              </div>
              <Link
                href="/berita-dan-acara-sti"
                className="text-xs font-semibold text-[#d49b00] hover:underline whitespace-nowrap ml-4"
              >
                Lihat Semua &gt;
              </Link>
            </div>

            {/* News Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {displayedNews.map((news) => (
                <div
                  key={news.id}
                  className="group flex flex-col bg-white overflow-hidden"
                >
                  <Link
                    href={`/berita/${news.slug}`}
                    className="relative h-44 overflow-hidden rounded bg-gray-100 block"
                  >
                    <SafeImage
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>
                  <div className="py-3 flex flex-col flex-grow">
                    <span className="text-[11px] font-semibold tracking-wider text-gray-500 uppercase mb-1">
                      {news.date}
                    </span>
                    <Link
                      href={`/berita/${news.slug}`}
                      className="text-gray-900 font-bold text-[14px] leading-snug hover:text-[#d49b00] transition-colors line-clamp-3"
                    >
                      {news.title}
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 pt-6">
              <button
                onClick={() => setActiveNewsPage(1)}
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-colors cursor-pointer ${
                  activeNewsPage === 1
                    ? "bg-[#fcb900] text-black"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                1
              </button>
              <button
                onClick={() => setActiveNewsPage(2)}
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-colors cursor-pointer ${
                  activeNewsPage === 2
                    ? "bg-[#fcb900] text-black"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                2
              </button>
              <Link
                href="/berita-dan-acara-sti"
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-[#fcb900] hover:text-black text-gray-700 flex items-center justify-center text-sm font-semibold transition-colors ml-1"
                title="Halaman Berita & Acara"
              >
                &rarr;
              </Link>
            </div>
          </div>

          {/* Right Column: Event & Training */}
          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Event & Training
            </h2>

            {/* Event Calendar Widget */}
            <div className="bg-white border border-gray-100 rounded-lg shadow-sm p-5 space-y-6">
              {/* Header with Month and Arrows */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <span className="text-lg font-bold text-gray-800 tracking-wide">
                  {selectedMonth}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedMonth("SEPTEMBER, 2026")}
                    className="w-8 h-8 rounded-full border border-gray-300 hover:border-gray-800 flex items-center justify-center text-gray-600 hover:text-black transition-colors cursor-pointer"
                    aria-label="Previous month"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={() => setSelectedMonth("NOVEMBER, 2026")}
                    className="w-8 h-8 rounded-full border border-gray-300 hover:border-gray-800 flex items-center justify-center text-gray-600 hover:text-black transition-colors cursor-pointer"
                    aria-label="Next month"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Upcoming Event Info */}
              <div className="space-y-3">
                <div className="p-3 bg-amber-50 rounded-md border border-amber-200">
                  <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider block mb-1">
                    Pelatihan Terdekat
                  </span>
                  <Link
                    href="/pelatihan-sti"
                    className="text-xs font-semibold text-gray-900 hover:text-[#d49b00] block"
                  >
                    Pelatihan Keamanan Digital & AI untuk Dosen dan Tendik UI
                  </Link>
                  <span className="text-[11px] text-gray-500 mt-1 block">
                    Online via Zoom • Pendaftaran Dibuka
                  </span>
                </div>
              </div>

              {/* Empty state note */}
              <div className="py-6 flex flex-col items-center justify-center text-center text-gray-400 space-y-2">
                <CalendarIcon className="w-8 h-8 stroke-1 text-gray-300" />
                <p className="text-xs text-gray-400">
                  Lihat agenda lengkap di laman{" "}
                  <Link
                    href="/pelatihan-sti"
                    className="text-[#d49b00] font-semibold underline"
                  >
                    Pelatihan STI
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
