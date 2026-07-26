"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import FAQs from "@/components/FAQs";
import Experience from "@/components/Experience";

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
      <div className="absolute top-[60vh] right-0 w-96 h-96 rounded-full bg-[#8C3316]/5 blur-3xl -z-10 pointer-events-none" />

      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-10 pb-8 text-center">
        <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase mb-2 block">
          OUR LEGACY & MISSION
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#8C3316] font-semibold tracking-wide">
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
              Thoughtfully Prepared Food. Warm Hospitality. Celebrations That Feel Like Home.
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#8C3316] font-semibold leading-tight tracking-wide">
              Some occasions deserve more than just good food.
            </h2>
            <p className="font-sans text-base text-[#292927]/90 font-light leading-relaxed">
              They deserve food that brings people together, conversations that last a little longer, and hospitality that makes every guest feel welcome.
            </p>
            <p className="font-sans text-base text-[#292927]/85 font-light leading-relaxed">
              At <span className="font-semibold text-[#8C3316]">Dahi Cheeni</span>, we specialise in home-style catering for intimate celebrations across Delhi NCR. From Griha Pravesh ceremonies and Pooja & Havan gatherings to baby celebrations, prayer meetings and family get-togethers, we create wholesome, freshly prepared meals that feel comforting, familiar and memorable.
            </p>
            <p className="font-sans text-base text-[#292927]/85 font-light leading-relaxed">
              Inspired by the warmth of Indian homes, our menus are thoughtfully curated using quality ingredients, traditional recipes and modern presentation. Whether you&apos;re hosting 20 guests or 200, we help you celebrate with food that&apos;s prepared with care and served with genuine hospitality.
            </p>
            <p className="font-sans text-base text-[#8C3316] font-medium leading-relaxed italic">
              Because life&apos;s most meaningful occasions deserve food that feels like home.
            </p>
          </div>

          {/* Story Image Section */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-4">
            <div className="absolute w-64 h-64 rounded-full bg-[#c5a880]/15 blur-3xl -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-3xl bg-[#8C3316] p-2.5 shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="absolute inset-3 border border-[#c5a880]/30 rounded-2xl pointer-events-none z-10" />
              <div className="relative w-full h-full rounded-[14px] overflow-hidden">
                <Image
                  src="/3.jpeg"
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

      {/* 3. Why Families Choose Dahi Cheeni */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 md:py-16 border-t border-[#c5a880]/15">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left side: Showcase Image Card (Alternating layout) */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-4 order-2 lg:order-1">
            <div className="absolute w-64 h-64 rounded-full bg-[#8C3316]/5 blur-3xl -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-3xl bg-[#8C3316] p-2.5 shadow-xl -rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="absolute inset-3 border border-[#c5a880]/30 rounded-2xl pointer-events-none z-10" />
              <div className="relative w-full h-full rounded-[14px] overflow-hidden">
                <Image
                  src="/5.jpeg"
                  alt="Premium home-style catering food presentation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 35vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right side: Why Choose Us Text */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
              OUR CUSTOMER PROMISE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#8C3316] font-semibold leading-tight tracking-wide">
              Why Families Choose Dahi Cheeni
            </h2>
            <div className="h-[1px] w-12 bg-[#c5a880]/40" />

            <div className="space-y-3 font-sans text-base text-[#292927]/90 font-light leading-relaxed">
              <p className="font-serif text-lg text-[#8C3316] font-medium leading-snug">
                Food is more than what&apos;s served on a plate.
              </p>
              <ul className="space-y-1.5 pl-4 border-l-2 border-[#c5a880]/30 italic text-[#292927]/80">
                <li>It&apos;s how guests feel when they arrive.</li>
                <li>It&apos;s the aroma that fills the home.</li>
                <li>It&apos;s the comfort of familiar flavours.</li>
                <li>It&apos;s the joy of everyone gathering around the same table.</li>
              </ul>
              <p className="font-serif text-lg text-[#8C3316] font-medium leading-snug pt-1">
                That&apos;s the experience we strive to create.
              </p>
            </div>

            <div className="space-y-4 font-sans text-base text-[#292927]/85 font-light leading-relaxed pt-2">
              <p>
                Families choose <span className="font-semibold text-[#8C3316]">Dahi Cheeni</span> because we believe in thoughtful hospitality. We don&apos;t believe in one-size-fits-all menus. Every gathering is different, which is why every menu is curated according to your occasion, guest profile and personal preferences.
              </p>
              <p>
                Whether you&apos;re serving a traditional North Indian meal, a satvik menu or a mix of regional favourites, we ensure every dish is freshly prepared, beautifully presented and served with care.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Our Offerings */}
      <section className="w-full bg-[#FAF6F0] border-t border-[#c5a880]/20 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#8C3316] font-semibold tracking-wide">
              Home-Style Food, Beautifully Presented
            </h2>
            <div className="flex items-center gap-3 mt-4 w-full justify-center mb-6">
              <div className="h-[1px] w-10 bg-[#c5a880]/30" />
              <span className="text-[#c5a880] text-xs">✿</span>
              <div className="h-[1px] w-10 bg-[#c5a880]/30" />
            </div>
            <p className="font-sans text-base text-[#292927]/90 font-light leading-relaxed">
              Our food is inspired by recipes that have been enjoyed in Indian homes for generations. Prepared using quality ingredients and balanced flavours, our menus are designed to feel comforting while maintaining the presentation expected from a premium catering experience.
            </p>
          </div>

          {/* Offerings Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              "Traditional North Indian Cuisine",
              "Satvik Catering",
              "Regional Specialities",
              "Breakfast & Brunch Menus",
              "Lunch & Dinner Buffets",
              "Live Food Stations",
              "Desserts & Mithai",
              "Tea, Coffee & Beverage Counters"
            ].map((offering, idx) => (
              <div
                key={idx}
                className="bg-white/45 border border-[#c5a880]/20 hover:border-[#8C3316]/30 rounded-xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <div className="w-9 h-9 rounded-full bg-[#8C3316]/5 flex items-center justify-center text-[#c5a880] text-lg font-bold border border-[#c5a880]/20 shrink-0">
                  ✦
                </div>
                <h3 className="font-serif text-base text-[#8C3316] font-semibold tracking-wide">
                  {offering}
                </h3>
              </div>
            ))}
          </div>

          {/* Footer Text */}
          <div className="text-center mt-12 max-w-xl mx-auto">
            <p className="font-sans text-sm sm:text-base text-[#292927]/85 font-light leading-relaxed italic">
              Every menu can be customised to suit your celebration, dietary preferences and guest profile.
            </p>
          </div>

        </div>
      </section>

      {/* 5. The Dahi Cheeni Experience */}
      <Experience />

      {/* 6. CTA Banner Section */}
      <section className="w-full bg-[#8C3316] text-[#FAF6F0] py-16 md:py-20 relative overflow-hidden z-10">
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
              className="px-8 py-3.5 bg-[#FAF6F0] hover:bg-[#FAF6F0]/90 text-[#8C3316] font-sans text-sm font-semibold tracking-wider rounded-md shadow-md transition-all duration-300 w-full sm:w-auto text-center"
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

      {/* 7. FAQs Section */}
      <FAQs items={ABOUT_PAGE_FAQS} />
    </main>
  );
}
