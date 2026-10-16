"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUp, LayoutGrid, MessageSquare } from "lucide-react";

export default function FloatingActionButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showQuickModal, setShowQuickModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { title: "Hotspot & Wi-Fi UI", desc: "Koneksi internet kampus", href: "/terhubung-ke-internet", icon: "📶" },
    { title: "Email Civitas UI", desc: "Akses email domain UI", href: "/menggunakan-email-ui", icon: "✉️" },
    { title: "Office 365", desc: "Aktivasi Microsoft 365", href: "/mulai-dengan-office-365", icon: "💻" },
    { title: "Akun SSO UI", desc: "Reset password & profil", href: "/akun-ui-kamu", icon: "🔐" },
    { title: "Katalog Layanan IT", desc: "Daftar 8 pilar layanan", href: "/layanan-it-universitas-indonesia", icon: "📋" },
    { title: "Pusat Bantuan DTD", desc: "Kontak helpdesk & FAQ", href: "/mencari-bantuan-dan-dukungan-layanan-it-ui", icon: "🎧" },
  ];

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-11 h-11 bg-white hover:bg-gray-100 text-gray-800 rounded-full shadow-xl flex items-center justify-center transition-all hover:-translate-y-0.5 border border-gray-200 cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        )}

        {/* 9-dots menu widget button */}
        <button
          className="w-11 h-11 bg-zinc-900/90 hover:bg-zinc-900 text-white rounded-full shadow-xl flex items-center justify-center transition-transform hover:scale-105 cursor-pointer border border-zinc-700"
          aria-label="Quick menu"
          onClick={() => setShowQuickModal(!showQuickModal)}
        >
          <LayoutGrid size={18} />
        </button>

        {/* Chat / Support Bot Floating Button */}
        <Link
          href="/mencari-bantuan-dan-dukungan-layanan-it-ui"
          className="w-12 h-12 bg-gradient-to-tr from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 relative group"
          aria-label="Tanya DTD Support"
        >
          <div className="w-5 h-5 bg-white text-indigo-700 rounded-full flex items-center justify-center font-bold text-xs">
            🤖
          </div>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full animate-pulse" />
          <span className="absolute right-14 bg-zinc-900 text-white text-xs px-3 py-1.5 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Tanya Helpdesk DTD
          </span>
        </Link>
      </div>

      {/* Quick Menu Modal Popup */}
      {showQuickModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setShowQuickModal(false)}
        >
          <div
            className="bg-[#16171b] border border-zinc-800 text-white rounded-xl shadow-2xl max-w-md w-full p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span className="text-[#fcb900]">⚡</span> Akses Cepat Layanan DTD
              </h3>
              <button
                onClick={() => setShowQuickModal(false)}
                className="text-gray-400 hover:text-white cursor-pointer text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              {quickLinks.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={() => setShowQuickModal(false)}
                  className="p-3 bg-zinc-900 hover:bg-zinc-800 rounded-lg border border-zinc-800 hover:border-[#fcb900]/50 transition-all flex flex-col group"
                >
                  <span className="text-xl mb-1.5">{item.icon}</span>
                  <span className="font-semibold text-xs text-white group-hover:text-[#fcb900] transition-colors">
                    {item.title}
                  </span>
                  <span className="text-[11px] text-gray-400 mt-1 line-clamp-1">
                    {item.desc}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
