"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import FAQs from "@/components/FAQs";

const ABOUT_PAGE_FAQS = [
  {
    question: "What is the meaning behind the name 'Dahi Cheeni'?",
    answer: "Serving 'Dahi Cheeni' (yogurt mixed with sugar) is a traditional Indian custom offered before beginning any journey, exam, or auspicious event. It represents good luck, pure intentions, and sweet beginnings. We chose this name because we treat your family's celebrations with that same spirit of auspiciousness and care.",
  },
  {
    question: "Do you cater events other than spiritual poojas?",
    answer: "Yes! While we are widely appreciated for our pure pooja catering, we provide full-service catering for baby shower, griha pravesh, family get-togethers, prayer meetings, corporate lunches, and intimate weddings up to 300+ guests.",
  },
  {
    question: "How do you ensure the purity and quality of your food?",
    answer: "We prepare all dishes fresh daily in a strict sanitization environment using premium, handpicked ingredients. For spiritual occasions that require strict preparation guidelines, we prepare meals with completely separate cooking utensils and custom dedicated spaces to preserve scriptural purity.",
  },
  {
    question: "Can we request a menu tasting session before booking?",
    answer: "Yes. For larger events, weddings, or corporate contracts, we are happy to arrange menu tasting sessions. Please contact our catering team when submitting your quote request to coordinate a tasting schedule.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAF6F0] pt-24 md:pt-28 flex flex-col justify-between overflow-x-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-24 left-0 w-96 h-96 rounded-full bg-[#c5a880]/10 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-[60vh] right-0 w-96 h-96 rounded-full bg-[#74290F]/5 blur-3xl -z-10 pointer-events-none" />

      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-10 pb-8 text-center">
        <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase mb-2 block">
          OUR LEGACY & MISSION
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#74290F] font-semibold tracking-wide">
          About Dahi Cheeni
        </h1>
        <div className="flex items-center gap-3 mt-4 w-full justify-center">
          <div className="h-[1px] w-12 bg-[#c5a880]/40" />
          <span className="text-[#c5a880] text-sm">✿</span>
          <div className="h-[1px] w-12 bg-[#c5a880]/40" />
        </div>
      </section>

      {/* 2. About Us - The Brand Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Story Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
              SWEET BEGINNINGS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#74290F] font-semibold leading-tight tracking-wide">
              An Auspicious Start to Every Culinary Journey
            </h2>
            <p className="font-sans text-base text-[#292927]/90 font-light leading-relaxed">
              In every Indian home, a spoonful of <span className="font-semibold text-[#74290F]">Dahi Cheeni</span> is more than just yogurt and sugar—it is a mother&apos;s blessing, a grandmother&apos;s prayer, and a traditional token of good luck given before embarking on any significant milestone.
            </p>
            <p className="font-sans text-base text-[#292927]/85 font-light leading-relaxed">
              Founded on this very essence of purity and auspiciousness, Dahi Cheeni brings clean, home-style premium catering to life&apos;s most meaningful gatherings. We believe that festive food should not only taste exquisite but should also comfort the soul and respect traditional values.
            </p>
            <p className="font-sans text-base text-[#292927]/85 font-light leading-relaxed">
              From family poojas and baby  to spiritual assemblies and intimate weddings, our culinary team uses generational heritage recipes and fresh, locally sourced ingredients to design custom menus that carry the genuine warmth of home.
            </p>
          </div>

          {/* Story Image Section */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-4">
            <div className="absolute w-64 h-64 rounded-full bg-[#c5a880]/15 blur-3xl -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-3xl bg-[#74290F] p-2.5 shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="absolute inset-3 border border-[#c5a880]/30 rounded-2xl pointer-events-none z-10" />
              <div className="relative w-full h-full rounded-[14px] overflow-hidden">
                <Image
                  src="/premium-thali.png"
                  alt="Traditional Premium Indian Thali Feast"
                  fill
                  sizes="(max-width: 1024px) 100vw, 35vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Our Philosophy Grid */}
      <section className="w-full bg-[#FAF6F0] border-t border-[#c5a880]/20 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase mb-2 block">
              HOW WE CATER
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#74290F] font-semibold tracking-wide">
              Our Culinary Philosophy
            </h2>
            <div className="flex items-center gap-3 mt-4 w-full justify-center">
              <div className="h-[1px] w-10 bg-[#c5a880]/30" />
              <span className="text-[#c5a880] text-xs">✿</span>
              <div className="h-[1px] w-10 bg-[#c5a880]/30" />
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Pure Kitchen Standards",
                desc: "We respect spiritual values and offer strict onion- and garlic-free options. Prepared with dedicated clean utensils and pure ingredients for religious gatherings and poojas.",
                icon: "✦"
              },
              {
                title: "Generational Recipes",
                desc: "Our recipes are heritage formulas passed down through home cooks. We deliver comforting, home-style flavors that trigger nostalgic memories of family reunions.",
                icon: "❀"
              },
              {
                title: "Zero Compromises",
                desc: "We use daily fresh, high-quality ingredients. No artificial colors, no heavy commercial additives, and no chemical preservatives. Only clean, wholesome ingredients.",
                icon: "✿"
              },
              {
                title: "Auspicious Service",
                desc: "Catering is not just a commercial service to us; it is auspicious hospitality. We arrange setups with strict hygiene, aesthetic setups, and genuine warmth.",
                icon: "✺"
              }
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-[#FAF6F0] border border-[#c5a880]/30 hover:border-[#74290F]/45 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full bg-[#74290F]/5 flex items-center justify-center text-[#c5a880] text-xl font-bold mb-6 border border-[#c5a880]/20">
                  {card.icon}
                </div>
                <h3 className="font-serif text-xl text-[#74290F] font-semibold mb-3 tracking-wide">
                  {card.title}
                </h3>
                <p className="font-sans text-sm text-[#292927]/80 font-light leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. CTA Banner Section */}
      <section className="w-full bg-[#74290F] text-[#FAF6F0] py-16 md:py-20 relative overflow-hidden z-10">
        {/* Dynamic golden circular background effects */}
        <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[#c5a880]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#c5a880]/15 blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
            CREATE SWEET MEMORIES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF6F0] font-medium leading-tight tracking-wide">
            Ready to Plan Your Custom Menu?
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#FAF6F0]/80 font-light max-w-xl mx-auto leading-relaxed">
            Let us know the details of your gathering, and our culinary planners will design a custom catering experience tailored perfectly to your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              href="/qet_a_quote"
              className="px-8 py-3.5 bg-[#FAF6F0] hover:bg-[#FAF6F0]/90 text-[#74290F] font-sans text-sm font-semibold tracking-wider rounded-md shadow-md transition-all duration-300 w-full sm:w-auto text-center"
            >
              Request a Quote
            </Link>
            <Link
              href="/#menus"
              className="px-8 py-3.5 bg-transparent hover:bg-white/5 text-[#FAF6F0] border border-[#FAF6F0]/40 hover:border-[#FAF6F0] font-sans text-sm font-semibold tracking-wider rounded-md transition-all duration-300 w-full sm:w-auto text-center"
            >
              Explore Offerings
            </Link>
          </div>
        </div>
      </section>

      {/* 5. FAQs Section */}
      <FAQs items={ABOUT_PAGE_FAQS} />
    </main>
  );
}
