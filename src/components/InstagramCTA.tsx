"use client";

import React from "react";
import Image from "next/image";
import { Heart, MessageCircle, ExternalLink } from "lucide-react";

const Instagram = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function InstagramCTA() {
  const instagramUrl = "https://www.instagram.com/dahicheeni.catering?igsh=ZmJibmYxc3hxM2Fw&utm_source=qr";

  const feedItems = [
    {
      id: 1,
      imageSrc: "/1.jpeg",
      likes: "142",
      comments: "12",
      alt: "Dahi Cheeni Elegant Event Setup",
    },
    {
      id: 2,
      imageSrc: "/2.jpeg",
      likes: "189",
      comments: "24",
      alt: "Pure Home-Style Catering Presentation",
    },
    {
      id: 3,
      imageSrc: "/3.jpeg",
      likes: "156",
      comments: "19",
      alt: "Exquisite Indian Sweets and Desserts",
    },
    {
      id: 4,
      imageSrc: "/4.jpeg",
      likes: "215",
      comments: "31",
      alt: "Traditional Copper Chafing Dishes and Hospitality",
    },
    {
      id: 5,
      imageSrc: "/5.jpeg",
      likes: "167",
      comments: "15",
      alt: "Freshly Prepared Satvik Food for Pooja",
    },
    {
      id: 6,
      imageSrc: "/6.jpeg",
      likes: "203",
      comments: "28",
      alt: "Premium Thali and Buffet Arrangement",
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF6F0] relative z-10 border-t border-[#c5a880]/10">
      {/* Decorative floral/accent details */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 bg-[#FAF6F0] px-6 text-[#c5a880]">
        <span className="text-xs">✿</span>
        <span className="font-serif italic text-sm tracking-widest uppercase">@dahicheeni.catering</span>
        <span className="text-xs">✿</span>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header Block */}
        <div className="text-center max-w-2xl mb-12">
          <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase mb-3 block">
            Behind The Scenes
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[42px] text-[#8C3316] font-semibold leading-tight mb-4 tracking-wide">
            Follow Our Culinary Journey
          </h2>
          <p className="font-sans text-sm sm:text-[15px] text-[#292927]/75 font-light leading-relaxed mb-6">
            Get a daily dose of kitchen cleanliness, heritage recipe preparations, fresh event setups, and client love straight from our Instagram feed.
          </p>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#8C3316] hover:bg-[#74290F] text-white font-sans text-sm font-semibold rounded-lg shadow-sm transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] group cursor-pointer"
          >
            <Instagram className="w-4 h-4 transition-transform duration-300 group-hover:rotate-6" />
            <span>Follow @dahicheeni.catering</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </a>
        </div>

        {/* Instagram Grid */}
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {feedItems.map((item) => (
            <a
              key={item.id}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden group rounded-xl shadow-xs border border-[#c5a880]/15 bg-white/40 block"
            >
              {/* Instagram Icon Watermark in corner */}
              <div className="absolute top-3 right-3 p-1.5 bg-[#FAF6F0]/90 rounded-full text-[#8C3316] backdrop-blur-xs shadow-xs transition-opacity duration-300 group-hover:opacity-0 w-7 h-7 flex items-center justify-center z-20 pointer-events-none">
                <Instagram className="w-3.5 h-3.5" />
              </div>

              {/* Feed Image */}
              <Image
                src={item.imageSrc}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover overlay with heart/comment stats */}
              <div className="absolute inset-0 bg-[#8C3316]/85 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4 text-[#FAF6F0] z-10">
                <div className="flex items-center gap-1.5 text-sm sm:text-base font-semibold">
                  <Heart className="w-4.5 h-4.5 fill-[#FAF6F0]" />
                  <span>{item.likes}</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm sm:text-base font-semibold">
                  <MessageCircle className="w-4.5 h-4.5 fill-[#FAF6F0]" />
                  <span>{item.comments}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
