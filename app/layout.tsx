import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActionButtons from "@/components/FloatingActionButtons";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Official Website DTD UI – Website Resmi Direktorat Transformasi Digital",
  description:
    "Direktorat Transformasi Digital (DTD) Universitas Indonesia - Mitra Strategis Menjelajahi Dunia Digital di UI",
  icons: {
    icon: "https://dtd.ui.ac.id/wp-content/uploads/sites/3/2025/08/cropped-Untitled-1-2-32x32.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${poppins.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-gray-900 antialiased font-sans flex flex-col selection:bg-[#fdb813] selection:text-black">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingActionButtons />
      </body>
    </html>
  );
}
