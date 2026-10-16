"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

export function MakaraIcon({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="46" fill="#FDB813" />
      <path
        d="M50 14C45 28 35 34 35 48C35 60 41 68 50 72C59 68 65 60 65 48C65 34 55 28 50 14Z"
        fill="#111111"
      />
      <path
        d="M50 24C47 34 40 38 40 48C40 56 44 62 50 65C56 62 60 56 60 48C60 38 53 34 50 24Z"
        fill="#FDB813"
      />
      <circle cx="50" cy="48" r="4" fill="#111111" />
      <path
        d="M33 46C27 46 22 52 24 60C26 68 33 72 38 72C43 72 45 68 45 65C41 65 37 62 36 57C35 52 38 48 33 46Z"
        fill="#111111"
      />
      <path
        d="M67 46C73 46 78 52 76 60C74 68 67 72 62 72C57 72 55 68 55 65C59 65 63 62 64 57C65 52 62 48 67 46Z"
        fill="#111111"
      />
      <path
        d="M50 72V86M40 84H60M36 88H64"
        stroke="#111111"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileDropdown(null);
  }, [pathname]);

  const toggleMobileDropdown = (name: string) => {
    setMobileDropdown(mobileDropdown === name ? null : name);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* 1. TOP BAR */}
      <div className="bg-[#0b0c0e] text-gray-300 text-[12px] sm:text-[13px] py-1.5 px-4 sm:px-6 lg:px-8 border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto flex justify-end items-center gap-6 font-medium">
          <Link
            href="/mahasiswa"
            className="hover:text-[#fcb900] transition-colors py-0.5"
          >
            Mahasiswa
          </Link>
          <Link
            href="/dosen-dan-tenaga-kependidikan"
            className="hover:text-[#fcb900] transition-colors py-0.5"
          >
            Dosen dan Tenaga Kependidikan
          </Link>
          <Link
            href="/pengunjung-dan-tamu"
            className="hover:text-[#fcb900] transition-colors py-0.5"
          >
            Pengunjung dan Tamu
          </Link>
        </div>
      </div>

      {/* 2. MAIN STICKY NAVBAR */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 border-b border-zinc-800/60 ${
          scrolled
            ? "bg-[#0b0c0e]/95 backdrop-blur-md shadow-lg py-2.5 sm:py-3"
            : "bg-[#0b0c0e] py-3.5 sm:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo with proper compact proportions */}
          <Link
            href="/"
            className="flex items-center gap-3 group flex-shrink-0 mr-2 xl:mr-4"
          >
            <div className="relative">
              <img
                src="https://dtd.ui.ac.id/wp-content/uploads/sites/3/2025/09/logo.png"
                alt="Direktorat Transformasi Digital UI"
                className="h-9 sm:h-9.5 md:h-10 w-auto object-contain hidden md:block transition-transform duration-300 group-hover:scale-[1.02]"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                  const fallback = document.getElementById("logo-fallback");
                  if (fallback) fallback.style.display = "flex";
                }}
              />
              <div
                id="logo-fallback"
                className="flex items-center gap-2.5 md:hidden"
              >
                <MakaraIcon className="w-8 h-8 sm:w-9 sm:h-9" />
                <div className="flex flex-col">
                  <span className="text-white text-xs sm:text-sm font-bold tracking-wider uppercase leading-none">
                    DIREKTORAT
                  </span>
                  <span className="text-[#fdb813] text-[10px] sm:text-xs font-semibold tracking-wider uppercase leading-none mt-0.5">
                    TRANSFORMASI DIGITAL
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - Always all 7 items clearly visible */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2.5 text-[13px] xl:text-[14px] font-semibold text-white flex-shrink-0">
            {/* 1. Beranda */}
            <Link
              href="/"
              className={`px-2.5 py-1.5 rounded-md transition-colors ${
                isActive("/")
                  ? "text-[#fcb900] bg-white/10"
                  : "hover:text-[#fcb900] hover:bg-white/5"
              }`}
            >
              Beranda
            </Link>

            {/* 2. Tentang Kami Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-md transition-colors cursor-pointer ${
                  pathname.startsWith("/tentang-dtd") ||
                  pathname.startsWith("/berita-dan-acara-sti") ||
                  pathname.startsWith("/our-journey") ||
                  pathname.startsWith("/struktur-organisasi") ||
                  pathname.startsWith("/pimpinan-direktorat") ||
                  pathname.startsWith("/tenaga-kependidikan") ||
                  pathname.startsWith("/contact")
                    ? "text-[#fcb900] bg-white/10"
                    : "hover:text-[#fcb900] hover:bg-white/5"
                }`}
              >
                <span>Tentang Kami</span>
                <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform text-gray-400 group-hover:text-[#fcb900]" />
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block w-56 bg-[#16171b] border-t-2 border-[#fcb900] shadow-2xl py-2 z-50 text-sm rounded-b-lg border-x border-b border-zinc-800">
                <Link
                  href="/berita-dan-acara-sti"
                  className="block px-4 py-2 hover:bg-zinc-800 hover:text-[#fcb900] transition-colors"
                >
                  Berita dan Acara STI
                </Link>
                <Link
                  href="/tentang-dtd"
                  className="block px-4 py-2 hover:bg-zinc-800 hover:text-[#fcb900] transition-colors"
                >
                  Tentang DTD
                </Link>
                <Link
                  href="/our-journey"
                  className="block px-4 py-2 hover:bg-zinc-800 hover:text-[#fcb900] transition-colors"
                >
                  OUR JOURNEY
                </Link>
                <Link
                  href="/struktur-organisasi"
                  className="block px-4 py-2 hover:bg-zinc-800 hover:text-[#fcb900] transition-colors"
                >
                  Struktur Organisasi
                </Link>
                <Link
                  href="/pimpinan-direktorat"
                  className="block px-4 py-2 hover:bg-zinc-800 hover:text-[#fcb900] transition-colors"
                >
                  Pimpinan Direktorat
                </Link>
                <Link
                  href="/tenaga-kependidikan"
                  className="block px-4 py-2 hover:bg-zinc-800 hover:text-[#fcb900] transition-colors"
                >
                  Tenaga Kependidikan
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-2 hover:bg-zinc-800 hover:text-[#fcb900] transition-colors"
                >
                  Hubungi Kami
                </Link>
              </div>
            </div>

            {/* 3. Kenali DTD Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-md transition-colors cursor-pointer ${
                  pathname.startsWith("/perencanaan-dan-kebijakan-ti") ||
                  pathname.startsWith("/pengembangan-sti") ||
                  pathname.startsWith("/infrastruktur-teknologi-informasi") ||
                  pathname.startsWith("/operasional-dan-layanan-sti") ||
                  pathname.startsWith("/it-master-plan")
                    ? "text-[#fcb900] bg-white/10"
                    : "hover:text-[#fcb900] hover:bg-white/5"
                }`}
              >
                <span>Kenali DTD</span>
                <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform text-gray-400 group-hover:text-[#fcb900]" />
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block w-64 bg-[#16171b] border-t-2 border-[#fcb900] shadow-2xl py-2 z-50 text-sm rounded-b-lg border-x border-b border-zinc-800">
                <Link
                  href="/perencanaan-dan-kebijakan-ti"
                  className="block px-4 py-2 hover:bg-zinc-800 hover:text-[#fcb900] transition-colors"
                >
                  Perencanaan dan Kebijakan TI
                </Link>
                <Link
                  href="/pengembangan-sti"
                  className="block px-4 py-2 hover:bg-zinc-800 hover:text-[#fcb900] transition-colors"
                >
                  Pengembangan Aplikasi Layanan
                </Link>
                <Link
                  href="/infrastruktur-teknologi-informasi"
                  className="block px-4 py-2 hover:bg-zinc-800 hover:text-[#fcb900] transition-colors"
                >
                  Infrastruktur Teknologi Informasi
                </Link>
                <Link
                  href="/operasional-dan-layanan-sti"
                  className="block px-4 py-2 hover:bg-zinc-800 hover:text-[#fcb900] transition-colors"
                >
                  Operasional dan Layanan STI
                </Link>
                <Link
                  href="/it-master-plan"
                  className="block px-4 py-2 hover:bg-zinc-800 hover:text-[#fcb900] transition-colors"
                >
                  IT Master Plan
                </Link>
              </div>
            </div>

            {/* 4. Saya ingin Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-md transition-colors cursor-pointer ${
                  pathname.startsWith("/terhubung-ke-internet") ||
                  pathname.startsWith("/menggunakan-email-ui") ||
                  pathname.startsWith("/mulai-dengan-office-365") ||
                  pathname.startsWith("/dapatkan-perangkat-lunak") ||
                  pathname.startsWith("/bekerja-dari-jarak-jauh") ||
                  pathname.startsWith("/mencari-bantuan-dan-dukungan-layanan-it-ui")
                    ? "text-[#fcb900] bg-white/10"
                    : "hover:text-[#fcb900] hover:bg-white/5"
                }`}
              >
                <span>Saya ingin</span>
                <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform text-gray-400 group-hover:text-[#fcb900]" />
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block w-72 bg-[#16171b] border-t-2 border-[#fcb900] shadow-2xl py-2 z-50 text-sm rounded-b-lg border-x border-b border-zinc-800">
                <Link
                  href="/terhubung-ke-internet"
                  className="block px-4 py-2 hover:bg-zinc-800 hover:text-[#fcb900] transition-colors"
                >
                  Terhubung ke Internet
                </Link>
                <Link
                  href="/menggunakan-email-ui"
                  className="block px-4 py-2 hover:bg-zinc-800 hover:text-[#fcb900] transition-colors"
                >
                  Menggunakan Email UI
                </Link>
                <Link
                  href="/mulai-dengan-office-365"
                  className="block px-4 py-2 hover:bg-zinc-800 hover:text-[#fcb900] transition-colors"
                >
                  Mulai dengan Office 365
                </Link>
                <Link
                  href="/dapatkan-perangkat-lunak"
                  className="block px-4 py-2 hover:bg-zinc-800 hover:text-[#fcb900] transition-colors"
                >
                  Dapatkan perangkat lunak
                </Link>
                <Link
                  href="/bekerja-dari-jarak-jauh"
                  className="block px-4 py-2 hover:bg-zinc-800 hover:text-[#fcb900] transition-colors"
                >
                  Bekerja dari jarak jauh
                </Link>
                <Link
                  href="/mencari-bantuan-dan-dukungan-layanan-it-ui"
                  className="block px-4 py-2 hover:bg-zinc-800 hover:text-[#fcb900] transition-colors"
                >
                  Mencari Bantuan dan Dukungan IT UI
                </Link>
              </div>
            </div>

            {/* 5. Layanan STI Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-md transition-colors cursor-pointer ${
                  pathname.startsWith("/mahasiswa") ||
                  pathname.startsWith("/dosen-dan-tenaga-kependidikan") ||
                  pathname.startsWith("/pengunjung-dan-tamu") ||
                  pathname.startsWith("/persyaratan-perangkat-minimum") ||
                  pathname.startsWith("/akun-ui-kamu") ||
                  pathname.startsWith("/layanan-it-universitas-indonesia") ||
                  pathname.startsWith("/pelatihan-sti")
                    ? "text-[#fcb900] bg-white/10"
                    : "hover:text-[#fcb900] hover:bg-white/5"
                }`}
              >
                <span>Layanan STI</span>
                <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform text-gray-400 group-hover:text-[#fcb900]" />
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block w-64 bg-[#16171b] border-t-2 border-[#fcb900] shadow-2xl py-2 z-50 text-sm rounded-b-lg border-x border-b border-zinc-800">
                <Link
                  href="/mahasiswa"
                  className="block px-4 py-2 hover:bg-zinc-800 hover:text-[#fcb900] transition-colors"
                >
                  Mahasiswa
                </Link>
                <Link
                  href="/dosen-dan-tenaga-kependidikan"
                  className="block px-4 py-2 hover:bg-zinc-800 hover:text-[#fcb900] transition-colors"
                >
                  Dosen dan Tenaga Kependidikan
                </Link>
                <Link
                  href="/pengunjung-dan-tamu"
                  className="block px-4 py-2 hover:bg-zinc-800 hover:text-[#fcb900] transition-colors"
                >
                  Pengunjung dan Tamu
                </Link>
                <Link
                  href="/persyaratan-perangkat-minimum"
                  className="block px-4 py-2 hover:bg-zinc-800 hover:text-[#fcb900] transition-colors"
                >
                  Persyaratan Perangkat Minimum
                </Link>
                <Link
                  href="/akun-ui-kamu"
                  className="block px-4 py-2 hover:bg-zinc-800 hover:text-[#fcb900] transition-colors"
                >
                  Akun UI Kamu
                </Link>
                <Link
                  href="/layanan-it-universitas-indonesia"
                  className="block px-4 py-2 hover:bg-zinc-800 hover:text-[#fcb900] transition-colors"
                >
                  Layanan IT Universitas Indonesia
                </Link>
                <Link
                  href="/pelatihan-sti"
                  className="block px-4 py-2 hover:bg-zinc-800 hover:text-[#fcb900] transition-colors"
                >
                  Pelatihan STI
                </Link>
              </div>
            </div>

            {/* 6. UI-CSIRT (Always Present) */}
            <Link
              href="/ui-csirt"
              className={`px-2.5 py-1.5 rounded-md transition-colors ${
                isActive("/ui-csirt")
                  ? "text-[#fcb900] bg-white/10"
                  : "hover:text-[#fcb900] hover:bg-white/5"
              }`}
            >
              UI-CSIRT
            </Link>

            {/* 7. Gabung DTD Dropdown (Always Present) */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-md transition-colors cursor-pointer ${
                  pathname.startsWith("/gabung-dtd")
                    ? "text-[#fcb900] bg-white/10"
                    : "hover:text-[#fcb900] hover:bg-white/5"
                }`}
              >
                <span>Gabung DTD</span>
                <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform text-gray-400 group-hover:text-[#fcb900]" />
              </button>
              <div className="absolute top-full right-0 hidden group-hover:block w-52 bg-[#16171b] border-t-2 border-[#fcb900] shadow-2xl py-2 z-50 text-sm rounded-b-lg border-x border-b border-zinc-800">
                <Link
                  href="/gabung-dtd/pegawai-tidak-tetap"
                  className="block px-4 py-2 hover:bg-zinc-800 hover:text-[#fcb900] transition-colors"
                >
                  Pegawai Tidak Tetap
                </Link>
                <Link
                  href="/gabung-dtd/rekrutmen-internal"
                  className="block px-4 py-2 hover:bg-zinc-800 hover:text-[#fcb900] transition-colors"
                >
                  Rekrutmen Internal
                </Link>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:text-[#fcb900] hover:bg-zinc-800/80 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#16171b] border-t border-zinc-800 text-white px-6 py-4 space-y-2 text-sm max-h-[80vh] overflow-y-auto">
            <Link
              href="/"
              className={`block py-1.5 font-semibold ${
                isActive("/") ? "text-[#fcb900]" : "hover:text-[#fcb900]"
              }`}
            >
              Beranda
            </Link>

            {/* Mobile Tentang Kami */}
            <div>
              <button
                onClick={() => toggleMobileDropdown("tentang")}
                className="w-full flex items-center justify-between py-1.5 font-medium hover:text-[#fcb900]"
              >
                <span>Tentang Kami</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform text-gray-400 ${
                    mobileDropdown === "tentang" ? "rotate-180 text-[#fcb900]" : ""
                  }`}
                />
              </button>
              {mobileDropdown === "tentang" && (
                <div className="pl-4 space-y-1 py-1 text-gray-300 text-xs border-l-2 border-[#fcb900]/40 ml-2">
                  <Link href="/berita-dan-acara-sti" className="block py-1 hover:text-[#fcb900]">
                    Berita dan Acara STI
                  </Link>
                  <Link href="/tentang-dtd" className="block py-1 hover:text-[#fcb900]">
                    Tentang DTD
                  </Link>
                  <Link href="/our-journey" className="block py-1 hover:text-[#fcb900]">
                    OUR JOURNEY
                  </Link>
                  <Link href="/struktur-organisasi" className="block py-1 hover:text-[#fcb900]">
                    Struktur Organisasi
                  </Link>
                  <Link href="/pimpinan-direktorat" className="block py-1 hover:text-[#fcb900]">
                    Pimpinan Direktorat
                  </Link>
                  <Link href="/tenaga-kependidikan" className="block py-1 hover:text-[#fcb900]">
                    Tenaga Kependidikan
                  </Link>
                  <Link href="/contact" className="block py-1 hover:text-[#fcb900]">
                    Hubungi Kami
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Kenali DTD */}
            <div>
              <button
                onClick={() => toggleMobileDropdown("kenali")}
                className="w-full flex items-center justify-between py-1.5 font-medium hover:text-[#fcb900]"
              >
                <span>Kenali DTD</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform text-gray-400 ${
                    mobileDropdown === "kenali" ? "rotate-180 text-[#fcb900]" : ""
                  }`}
                />
              </button>
              {mobileDropdown === "kenali" && (
                <div className="pl-4 space-y-1 py-1 text-gray-300 text-xs border-l-2 border-[#fcb900]/40 ml-2">
                  <Link href="/perencanaan-dan-kebijakan-ti" className="block py-1 hover:text-[#fcb900]">
                    Perencanaan dan Kebijakan TI
                  </Link>
                  <Link href="/pengembangan-sti" className="block py-1 hover:text-[#fcb900]">
                    Pengembangan Aplikasi Layanan
                  </Link>
                  <Link href="/infrastruktur-teknologi-informasi" className="block py-1 hover:text-[#fcb900]">
                    Infrastruktur Teknologi Informasi
                  </Link>
                  <Link href="/operasional-dan-layanan-sti" className="block py-1 hover:text-[#fcb900]">
                    Operasional dan Layanan STI
                  </Link>
                  <Link href="/it-master-plan" className="block py-1 hover:text-[#fcb900]">
                    IT Master Plan
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Saya ingin */}
            <div>
              <button
                onClick={() => toggleMobileDropdown("ingin")}
                className="w-full flex items-center justify-between py-1.5 font-medium hover:text-[#fcb900]"
              >
                <span>Saya ingin</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform text-gray-400 ${
                    mobileDropdown === "ingin" ? "rotate-180 text-[#fcb900]" : ""
                  }`}
                />
              </button>
              {mobileDropdown === "ingin" && (
                <div className="pl-4 space-y-1 py-1 text-gray-300 text-xs border-l-2 border-[#fcb900]/40 ml-2">
                  <Link href="/terhubung-ke-internet" className="block py-1 hover:text-[#fcb900]">
                    Terhubung ke Internet
                  </Link>
                  <Link href="/menggunakan-email-ui" className="block py-1 hover:text-[#fcb900]">
                    Menggunakan Email UI
                  </Link>
                  <Link href="/mulai-dengan-office-365" className="block py-1 hover:text-[#fcb900]">
                    Mulai dengan Office 365
                  </Link>
                  <Link href="/dapatkan-perangkat-lunak" className="block py-1 hover:text-[#fcb900]">
                    Dapatkan perangkat lunak
                  </Link>
                  <Link href="/bekerja-dari-jarak-jauh" className="block py-1 hover:text-[#fcb900]">
                    Bekerja dari jarak jauh
                  </Link>
                  <Link href="/mencari-bantuan-dan-dukungan-layanan-it-ui" className="block py-1 hover:text-[#fcb900]">
                    Mencari Bantuan dan Dukungan IT UI
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Layanan STI */}
            <div>
              <button
                onClick={() => toggleMobileDropdown("layanan")}
                className="w-full flex items-center justify-between py-1.5 font-medium hover:text-[#fcb900]"
              >
                <span>Layanan STI</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform text-gray-400 ${
                    mobileDropdown === "layanan" ? "rotate-180 text-[#fcb900]" : ""
                  }`}
                />
              </button>
              {mobileDropdown === "layanan" && (
                <div className="pl-4 space-y-1 py-1 text-gray-300 text-xs border-l-2 border-[#fcb900]/40 ml-2">
                  <Link href="/mahasiswa" className="block py-1 hover:text-[#fcb900]">
                    Mahasiswa
                  </Link>
                  <Link href="/dosen-dan-tenaga-kependidikan" className="block py-1 hover:text-[#fcb900]">
                    Dosen dan Tenaga Kependidikan
                  </Link>
                  <Link href="/pengunjung-dan-tamu" className="block py-1 hover:text-[#fcb900]">
                    Pengunjung dan Tamu
                  </Link>
                  <Link href="/persyaratan-perangkat-minimum" className="block py-1 hover:text-[#fcb900]">
                    Persyaratan Perangkat Minimum
                  </Link>
                  <Link href="/akun-ui-kamu" className="block py-1 hover:text-[#fcb900]">
                    Akun UI Kamu
                  </Link>
                  <Link href="/layanan-it-universitas-indonesia" className="block py-1 hover:text-[#fcb900]">
                    Layanan IT Universitas Indonesia
                  </Link>
                  <Link href="/pelatihan-sti" className="block py-1 hover:text-[#fcb900]">
                    Pelatihan STI
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile UI-CSIRT */}
            <Link
              href="/ui-csirt"
              className="block py-1.5 font-medium hover:text-[#fcb900]"
            >
              UI-CSIRT
            </Link>

            {/* Mobile Gabung DTD */}
            <div>
              <button
                onClick={() => toggleMobileDropdown("gabung")}
                className="w-full flex items-center justify-between py-1.5 font-medium hover:text-[#fcb900]"
              >
                <span>Gabung DTD</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform text-gray-400 ${
                    mobileDropdown === "gabung" ? "rotate-180 text-[#fcb900]" : ""
                  }`}
                />
              </button>
              {mobileDropdown === "gabung" && (
                <div className="pl-4 space-y-1 py-1 text-gray-300 text-xs border-l-2 border-[#fcb900]/40 ml-2">
                  <Link href="/gabung-dtd/pegawai-tidak-tetap" className="block py-1 hover:text-[#fcb900]">
                    Pegawai Tidak Tetap
                  </Link>
                  <Link href="/gabung-dtd/rekrutmen-internal" className="block py-1 hover:text-[#fcb900]">
                    Rekrutmen Internal
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
