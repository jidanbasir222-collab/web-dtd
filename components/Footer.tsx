import React from "react";
import Link from "next/link";
import { MakaraIcon } from "./Navbar";

export default function Footer() {
  const serviceTypes = [
    { name: "Administrative and Business", href: "/layanan-it-universitas-indonesia#administrative" },
    { name: "Communication and Collaboration", href: "/layanan-it-universitas-indonesia#communication" },
    { name: "End-Point Computing", href: "/layanan-it-universitas-indonesia#endpoint" },
    { name: "Infrastructure", href: "/layanan-it-universitas-indonesia#infrastructure" },
    { name: "IT Professional Services", href: "/layanan-it-universitas-indonesia#professional" },
    { name: "Research", href: "/layanan-it-universitas-indonesia#research" },
    { name: "Security", href: "/layanan-it-universitas-indonesia#security" },
    { name: "Teaching and Learning", href: "/layanan-it-universitas-indonesia#teaching" },
  ];

  const campusLinks = [
    { name: "Beranda", href: "/" },
    { name: "Tentang kami", href: "/tentang-dtd" },
    { name: "Layanan", href: "/layanan-it-universitas-indonesia" },
    { name: "FAQ / Bantuan", href: "/mencari-bantuan-dan-dukungan-layanan-it-ui" },
  ];

  return (
    <footer className="bg-[#16171b] text-gray-400 text-sm mt-auto border-t border-zinc-800">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Footer Col 1: Logo & Address */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-3">
            <MakaraIcon className="w-9 h-9" />
            <div className="flex flex-col">
              <span className="text-white text-sm font-bold tracking-wider uppercase">
                DIREKTORAT
              </span>
              <span className="text-[#fdb813] text-xs font-semibold tracking-wider uppercase">
                TRANSFORMASI DIGITAL
              </span>
            </div>
          </div>

          <div className="space-y-1.5 text-xs text-gray-300 pt-2 leading-relaxed">
            <p className="font-semibold text-white">Kampus UI Depok</p>
            <p>Gedung Perpustakaan Lama Lt.2</p>
            <p className="text-gray-400">(Berdampingan dengan gedung ITTC)</p>
            <p className="pt-2 font-semibold text-white">Kampus Salemba</p>
            <p>Gedung IASTH lt. 1 (di atas bank BNI)</p>
          </div>

          <div className="pt-2 text-xs">
            <p className="text-white font-medium">Jam Layanan Pkl. 08:00 - 16:00 WIB</p>
            <p className="pt-1">
              <a
                href="mailto:support@ui.ac.id"
                className="text-white hover:text-[#fcb900] underline"
              >
                support@ui.ac.id
              </a>
            </p>
          </div>

          <div className="w-16 h-0.5 bg-[#fcb900] mt-4" />
        </div>

        {/* Footer Col 2: Type of Services */}
        <div className="md:col-span-4 space-y-3">
          <h3 className="text-white font-bold text-base tracking-wide">
            Type of Services
          </h3>
          <ul className="space-y-2 text-xs">
            {serviceTypes.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className="hover:text-[#fcb900] transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Col 3: Our Campus */}
        <div className="md:col-span-3 space-y-3">
          <h3 className="text-white font-bold text-base tracking-wide">
            Our Campus
          </h3>
          <ul className="space-y-2 text-xs">
            {campusLinks.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className="hover:text-[#fcb900] transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#0e0f12] py-4 px-6 sm:px-10 lg:px-12 xl:px-16 border-t border-zinc-800 text-xs text-gray-500">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <p>
            Copyright All Right Reserved 2026, Direktorat Transformasi Digital
          </p>
          <p className="text-gray-600">Universitas Indonesia</p>
        </div>
      </div>
    </footer>
  );
}
