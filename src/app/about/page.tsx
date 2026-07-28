"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import FAQs from "@/components/FAQs";
import Experience from "@/components/Experience";
import WhyChooseUs from "@/components/WhyChooseUs";
import Occasions from "@/components/Occasions";
import { Sparkles, Heart, Utensils, Star, Smile } from "lucide-react";

const ABOUT_PAGE_FAQS = [
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking as early as possible, especially for weekends, festive periods and wedding season. If your event is at short notice, please get in touch—we'll always do our best to accommodate your request.",
  },
  {
    question: "Can you customise the menu?",
    answer: "Yes. Every menu is created around your occasion, family traditions, dietary preferences and guest profile.",
  },
  {
    question: "Do you offer satvik catering?",
    answer: "Yes. We regularly prepare satvik menus for poojas, havans and other religious ceremonies.",
  },
  {
    question: "Do you provide serving staff?",
    answer: "Yes. Professional service staff can be arranged to ensure your guests are looked after throughout the event.",
  },
  {
    question: "Do you cater only at homes?",
    answer: "No. We cater at homes, clubhouses, farmhouses, community halls and private venues across Delhi NCR.",
  },
  {
    question: "What is the minimum number of guests?",
    answer: "We cater for both intimate family gatherings and larger celebrations. Speak to our team, and we'll recommend the most suitable option for your event.",
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

      {/* 2. Brand Story - Inspired by a Tradition */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Story Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
              Inspired by a Tradition. Built Around Hospitality.
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#8C3316] font-semibold leading-tight tracking-wide">
              In many Indian homes, every new beginning starts with a simple ritual.
            </h2>
            <div className="h-[1px] w-16 bg-[#c5a880]/40" />
            
            <div className="space-y-4 font-sans text-base text-[#292927]/90 font-light leading-relaxed">
              <p>
                A spoonful of dahi and cheeni before an exam. Before a wedding. Before moving into a new home. Before embarking on a new journey.
              </p>
              <p>
                It&apos;s a gesture that represents blessings, positivity and the hope that everything ahead will be filled with happiness.
              </p>
              <p>
                That simple tradition inspired the name <span className="font-semibold text-[#8C3316]">Dahi Cheeni</span>.
              </p>
              <p className="font-medium text-[#8C3316] italic">
                Because the occasions we cater are not just events—they are milestones that deserve warmth, care and thoughtful hospitality.
              </p>
            </div>
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

      {/* 3. Our Story Section (Accent background) */}
      <section className="w-full bg-[#8C3316]/5 border-t border-b border-[#c5a880]/15 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="p-1.5 rounded-full bg-[#8C3316]/5 text-[#8C3316] border border-[#c5a880]/20 inline-flex">
            <Sparkles className="w-5 h-5" />
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#8C3316] font-semibold tracking-wide">
            Our Story
          </h2>
          <div className="flex items-center gap-3 mt-4 w-full justify-center">
            <div className="h-[1px] w-10 bg-[#c5a880]/30" />
            <span className="text-[#c5a880] text-xs">✿</span>
            <div className="h-[1px] w-10 bg-[#c5a880]/30" />
          </div>
          <div className="font-sans text-base sm:text-lg text-[#292927]/90 font-light leading-relaxed space-y-4 max-w-3xl mx-auto">
            <p className="font-medium text-[#8C3316]">
              Dahi Cheeni was created with a simple belief: the most meaningful celebrations don&apos;t need to be extravagant. They need to feel personal.
            </p>
            <p>
              Whether it&apos;s welcoming loved ones into a new home, gathering for a pooja, celebrating the arrival of a baby or hosting an intimate family lunch, these occasions are built around togetherness.
            </p>
            <p>
              And every gathering deserves food that&apos;s prepared with care, served with warmth and remembered long after the last guest leaves.
            </p>
            <p className="font-serif text-lg text-[#8C3316] font-medium leading-relaxed italic pt-2">
              That&apos;s exactly what we set out to create—a catering experience inspired by the comfort of home and delivered with the professionalism of modern hospitality.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Food That Feels Familiar (Offerings section) */}
      <section className="w-full bg-[#FAF6F0] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
              Generational Taste
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#8C3316] font-semibold tracking-wide">
              Food That Feels Familiar
            </h2>
            <div className="flex items-center gap-3 mt-4 w-full justify-center mb-6">
              <div className="h-[1px] w-10 bg-[#c5a880]/30" />
              <span className="text-[#c5a880] text-xs">✿</span>
              <div className="h-[1px] w-10 bg-[#c5a880]/30" />
            </div>
            <div className="font-sans text-base text-[#292927]/90 font-light leading-relaxed space-y-4">
              <p>
                We don&apos;t believe great food has to be complicated. The meals people remember most are often the ones that remind them of home.
              </p>
              <p>
                Recipes shared across generations. Fresh ingredients. Balanced flavours. Comforting aromas. Food that encourages everyone to sit together a little longer.
              </p>
              <p className="italic text-[#8C3316] font-medium">
                Our menus celebrate these familiar flavours while presenting them beautifully for today&apos;s gatherings. Every dish is freshly prepared, thoughtfully served and customised to suit your family&apos;s traditions and preferences.
              </p>
            </div>
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

        </div>
      </section>

      {/* 5. Hospitality Section */}
      <section className="w-full bg-[#8C3316]/5 border-t border-[#c5a880]/20 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story Image Section (Left) */}
            <div className="lg:col-span-5 flex justify-center items-center relative py-4 order-last lg:order-first">
              <div className="absolute w-64 h-64 rounded-full bg-[#c5a880]/15 blur-3xl -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-3xl bg-[#8C3316] p-2.5 shadow-xl -rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-3 border border-[#c5a880]/30 rounded-2xl pointer-events-none z-10" />
                <div className="relative w-full h-full rounded-[14px] overflow-hidden">
                  <Image
                    src="/luxury-buffet-setup.png"
                    alt="Dahi Cheeni Premium Buffet Presentation Setup"
                    fill
                    sizes="(max-width: 1024px) 100vw, 35vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content Section (Right) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-full bg-[#8C3316]/5 text-[#8C3316] border border-[#c5a880]/20">
                  <Heart className="w-4 h-4" />
                </span>
                <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
                  Heartfelt Service
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#8C3316] font-semibold leading-tight tracking-wide">
                Hospitality at the Heart of Everything We Do
              </h2>
              <div className="h-[1px] w-16 bg-[#c5a880]/40" />

              <div className="space-y-4 font-sans text-base text-[#292927]/85 font-light leading-relaxed">
                <p>
                  Great catering is about much more than cooking. It&apos;s about understanding the occasion.
                </p>
                <p>
                  Knowing when to serve quietly. Welcoming every guest with warmth. Paying attention to the smallest details.
                </p>
                <p>
                  Creating an experience where hosts can spend time with their loved ones instead of worrying about logistics.
                </p>
                <p className="italic font-medium text-[#8C3316]">
                  From your first conversation with us to the final meal served, our team is committed to making every gathering feel effortless.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Occasions We Cater To Component */}
      <div className="border-t border-[#c5a880]/15 pt-16">
        <Occasions />
      </div>

      {/* 7. The Dahi Cheeni Experience Process */}
      <Experience />

      {/* 8. Why Families Choose Dahi Cheeni */}
      <WhyChooseUs />

      {/* 9. CTA Banner Section */}
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

      {/* 10. FAQs Section */}
      <FAQs items={ABOUT_PAGE_FAQS} />
    </main>
  );
}
