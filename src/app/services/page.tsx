"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Occasions from "@/components/Occasions";
import FAQs from "@/components/FAQs";

const SERVICES_PAGE_FAQS = [
  {
    question: "Do you provide buffet counters and service staff?",
    answer: "Yes, we provide full buffet counters, themed table setups, and trained professional service staff to manage the food presentation and guest hospitality throughout your event.",
  },
  {
    question: "Can you accommodate guests with specific food allergies?",
    answer: "Absolutely. We take dietary requests very seriously. Please mention any food allergies (such as nuts, gluten, or dairy) during your quote request, and we will formulate safe preparation guidelines.",
  },
  {
    question: "What is the standard duration of the catering setup?",
    answer: "Our service team usually arrives at the venue 2-3 hours before the scheduled mealtime to set up counters, verify cooking setups, and ensure everything is fresh and ready on time.",
  },
  {
    question: "Do you charge extra for transportation and logistics?",
    answer: "Logistics charges depend on the distance to the venue within Delhi NCR. We itemize any travel or setup costs clearly in our custom quotations, ensuring absolute transparency.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#FAF6F0] pt-24 md:pt-28 flex flex-col justify-between overflow-x-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-24 right-0 w-96 h-96 rounded-full bg-[#c5a880]/10 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-[80vh] left-0 w-96 h-96 rounded-full bg-[#74290F]/5 blur-3xl -z-10 pointer-events-none" />

      {/* 1. Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-10 pb-16 text-center space-y-6">
        <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase mb-2 block">
          A CULINARY EXPERIENCE
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#74290F] font-semibold tracking-wide max-w-4xl mx-auto leading-tight">
          Catering Services Crafted <br />
          with Purity & Passion
        </h1>
        <div className="flex items-center gap-3 mt-4 w-full justify-center">
          <div className="h-[1px] w-12 bg-[#c5a880]/40" />
          <span className="text-[#c5a880] text-sm">✿</span>
          <div className="h-[1px] w-12 bg-[#c5a880]/40" />
        </div>
        <p className="font-sans text-sm sm:text-base md:text-lg text-[#292927]/80 font-light max-w-2xl mx-auto leading-relaxed">
          From sacred pooja ceremonies and family gatherings to intimate celebrations, we bring clean, premium home-style catering to Delhi NCR.
        </p>
      </section>

      {/* 2. Occasions Component */}
      <Occasions />

      {/* 3. Pure Veg Philosophy Section */}
      <section className="w-full bg-[#74290F]/5 border-t border-b border-[#c5a880]/20 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left side text philosophy */}
            <div className="lg:col-span-7 space-y-6">
              <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
                OUR UNCOMPROMISING CODE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#74290F] font-semibold leading-tight tracking-wide">
                Pure Purity & Quality Philosophy
              </h2>
              <div className="h-[1px] w-16 bg-[#c5a880]/40" />

              <p className="font-sans text-base text-[#292927]/90 font-light leading-relaxed">
                Purity is not a preference for us; it is a sacred boundary. Dahi Cheeni operates on a strict <span className="font-semibold text-[#74290F]">purity standard</span>. We do not prepare, handle, or allow any meat, seafood, or egg products in our kitchens.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  {
                    title: "Segregated Cooking",
                    desc: "For religious ceremonies and rituals, we use completely segregated cookware and follow scriptural codes to ensure absolute purity standards."
                  },
                  {
                    title: "Premium Cold-Pressed Oils",
                    desc: "We avoid low-grade commercial fats, choosing instead pure mustard oil, cold-pressed seed oils, and premium quality ghee."
                  },
                  {
                    title: "Generational Kitchen Cleanliness",
                    desc: "Our kitchens observe strict sanitization protocols daily, maintaining an environment that matches the sanctity of a home kitchen."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <span className="text-[#c5a880] text-xl font-bold mt-0.5">✦</span>
                    <div>
                      <h4 className="font-serif text-lg text-[#74290F] font-semibold tracking-wide">{item.title}</h4>
                      <p className="font-sans text-sm text-[#292927]/80 font-light leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side picture */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[450px] aspect-[4/3] rounded-3xl bg-[#74290F] p-2.5 shadow-xl transition-all duration-300">
                <div className="absolute inset-3 border border-[#c5a880]/30 rounded-2xl pointer-events-none z-10" />
                <div className="relative w-full h-full rounded-[14px] overflow-hidden">
                  <Image
                    src="/2.jpeg"
                    alt="Dahi Cheeni Premium Buffet Setup"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 35vw"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="w-full bg-[#74290F] text-[#FAF6F0] py-16 md:py-20 relative overflow-hidden z-10">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#c5a880]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#c5a880]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
            REQUEST A QUOTE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF6F0] font-medium leading-tight tracking-wide">
            Plan Your Auspicious Menu Today
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#FAF6F0]/80 font-light max-w-xl mx-auto leading-relaxed">
            Let us design the perfect culinary journey for your next occasion. Submit your requirements and get a customized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              href="/qet_a_quote"
              className="px-8 py-3.5 bg-[#FAF6F0] hover:bg-[#FAF6F0]/90 text-[#74290F] font-sans text-sm font-semibold tracking-wider rounded-md shadow-md transition-all duration-300 w-full sm:w-auto text-center"
            >
              Get A Quote
            </Link>
            <a
              href="https://wa.me/919971118559"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-transparent hover:bg-white/5 text-[#FAF6F0] border border-[#FAF6F0]/40 hover:border-[#FAF6F0] font-sans text-sm font-semibold tracking-wider rounded-md transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center gap-2"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 6. FAQs Section */}
      <FAQs items={SERVICES_PAGE_FAQS} />
    </main>
  );
}
