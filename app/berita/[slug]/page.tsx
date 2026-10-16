import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allNewsData, NewsItem } from "@/data/newsData";
import { SafeImage } from "@/app/page";
import PageHeader from "@/components/PageHeader";
import { Calendar, User, ArrowLeft, Share2, Tag } from "lucide-react";

export function generateStaticParams() {
  return allNewsData.map((item) => ({
    slug: item.slug,
  }));
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = allNewsData.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedNews = allNewsData
    .filter((item) => item.slug !== article.slug)
    .slice(0, 3);

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title={article.title}
        breadcrumbs={[
          { label: "Berita & Acara", href: "/berita-dan-acara-sti" },
          { label: "Detail Berita" },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12">
        {/* Article Metadata */}
        <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-500 pb-6 border-b border-gray-100">
          <span className="bg-[#fcb900] text-black font-bold px-3 py-1 rounded-full text-xs">
            {article.category}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-gray-400" />
            {article.date}
          </span>
          <span className="flex items-center gap-1.5">
            <User className="w-4 h-4 text-gray-400" />
            {article.author}
          </span>
        </div>

        {/* Featured Image */}
        <div className="my-8 rounded-xl overflow-hidden shadow-lg border border-gray-100 h-72 sm:h-96 md:h-[420px] bg-gray-100">
          <SafeImage
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Summary Lead */}
        <div className="p-5 bg-amber-50/70 border-l-4 border-[#fcb900] rounded-r-lg mb-8">
          <p className="text-gray-800 text-base sm:text-lg font-medium leading-relaxed">
            {article.summary}
          </p>
        </div>

        {/* Article Content Paragraphs */}
        <div className="prose prose-lg max-w-none text-gray-800 space-y-5 leading-relaxed text-base sm:text-[17px]">
          {article.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Action Bar */}
        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/berita-dan-acara-sti"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-[#fcb900] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Berita dan Acara STI</span>
          </Link>

          <div className="flex items-center gap-3 text-xs text-gray-500">
            <Share2 className="w-4 h-4" />
            <span>Bagikan artikel ini ke rekan civitas UI</span>
          </div>
        </div>

        {/* Related News Section */}
        <div className="mt-16 pt-10 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Berita Terkait Lainnya
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedNews.map((rel) => (
              <Link
                key={rel.id}
                href={`/berita/${rel.slug}`}
                className="group flex flex-col bg-white border border-gray-100 hover:border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <div className="h-36 bg-gray-100 overflow-hidden">
                  <SafeImage
                    src={rel.image}
                    alt={rel.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <span className="text-[11px] font-semibold text-gray-400 uppercase">
                    {rel.date}
                  </span>
                  <h4 className="font-bold text-sm text-gray-900 group-hover:text-[#d49b00] transition-colors mt-1 line-clamp-2 leading-snug">
                    {rel.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
