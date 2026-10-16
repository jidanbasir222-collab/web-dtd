import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
}

export default function PageHeader({
  title,
  subtitle,
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <div className="relative bg-[#111215] text-white py-14 px-6 sm:px-10 lg:px-12 xl:px-16 border-b border-zinc-800 overflow-hidden">
      {/* Decorative subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-zinc-900 to-black opacity-90" />
      <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#fdb813]/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="space-y-1.5">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Breadcrumbs */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center space-x-2 text-xs sm:text-sm text-gray-400 bg-black/50 backdrop-blur-sm px-4 sm:px-5 py-2.5 rounded-full border border-zinc-800 self-start md:self-auto flex-shrink-0"
        >
          <Link
            href="/"
            className="hover:text-[#fcb900] transition-colors font-medium text-gray-300"
          >
            Beranda
          </Link>
          {breadcrumbs.map((item, index) => (
            <React.Fragment key={index}>
              <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-[#fcb900] transition-colors font-medium text-gray-300"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-[#fcb900] font-semibold">
                  {item.label}
                </span>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  );
}
