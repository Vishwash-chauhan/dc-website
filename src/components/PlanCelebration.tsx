"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PlanCelebration() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF6F0] relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Copy content */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase mb-3 block">
              BEGIN YOUR JOURNEY
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[52px] text-[#74290F] font-semibold leading-tight tracking-wide mb-6">
              Plan Your <br />
              <span className="italic font-normal font-serif">Celebration</span>
            </h2>

            {/* Decorative Gold Leaf/Flower Divider */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-10 bg-[#c5a880]/30" />
              <span className="text-[#c5a880] text-xs">✿</span>
              <div className="h-[1px] w-10 bg-[#c5a880]/30" />
            </div>

            <p className="font-sans text-sm sm:text-base text-[#292927]/85 font-light leading-relaxed max-w-xl mb-8">
              From intimate family gatherings to grand festive weddings, we bring the essence of purity and auspiciousness to your table. Every menu is curated with meticulous care, incorporating heritage recipes passed down through generations, prepared fresh with strict standards and premium ingredients.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Link
                href="/qet_a_quote"
                className="px-8 py-3.5 bg-[#74290F] hover:bg-[#61220C] text-white font-sans text-xs sm:text-sm font-semibold tracking-wider text-center rounded-md shadow-md transition-all duration-300 w-full sm:w-auto cursor-pointer font-semibold"
              >
                Get A Quote
              </Link>
              <a
                href="#menus"
                className="px-8 py-3.5 bg-transparent hover:bg-[#74290F]/5 text-[#74290F] border border-[#74290F] font-sans text-xs sm:text-sm font-semibold tracking-wider text-center rounded-md transition-all duration-300 w-full sm:w-auto"
              >
                Explore Offerings
              </a>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-6 flex justify-center items-center relative py-8 lg:py-0">
            {/* Background decorative blob or glow */}
            <div className="absolute w-72 h-72 rounded-full bg-[#c5a880]/10 blur-3xl -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

            {/* Rotated background card */}
            <div className="relative w-full max-w-[500px] aspect-[4/3.2] sm:aspect-[4/3] rounded-3xl bg-[#74290F] p-3 shadow-xl transition-all duration-500 hover:rotate-0 hover:scale-[1.02] transform -rotate-3 md:-rotate-4 select-none">

              {/* Inner card border */}
              <div className="absolute inset-4 border border-[#c5a880]/30 rounded-2xl pointer-events-none z-10" />

              {/* Tilted image */}
              <div className="relative w-full h-full rounded-[18px] overflow-hidden">
                <Image
                  src="/plan-celebration.png"
                  alt="Traditional Premium Thali Celebration Feast"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
