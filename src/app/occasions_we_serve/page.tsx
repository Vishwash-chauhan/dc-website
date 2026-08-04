"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import FAQs from "@/components/FAQs";
import { Flame, Baby, Heart, Users, Sparkles, Check, ChevronRight, Home } from "lucide-react";

const OCCASIONS_PAGE_FAQS = [
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

export default function OccasionsPage() {
  return (
    <main className="min-h-screen bg-[#FAF6F0] pt-24 md:pt-28 flex flex-col justify-between overflow-x-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-24 right-0 w-96 h-96 rounded-full bg-[#c5a880]/10 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-[80vh] left-0 w-96 h-96 rounded-full bg-[#8C3316]/5 blur-3xl -z-10 pointer-events-none" />

      {/* 1. Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-10 pb-16 text-center space-y-6">
        <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase mb-2 block">
          A CULINARY EXPERIENCE
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#8C3316] font-semibold tracking-wide max-w-4xl mx-auto leading-tight">
          Catering for Occasions Crafted <br />
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

      {/* 2. Detailed Occasions Sections */}
      <div className="space-y-0 pb-24">

        {/* Occasion 1: Griha Pravesh (Base background, Image Left, Content Right) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Image (Left) */}
            <div className="lg:col-span-5 flex justify-center items-center relative order-last lg:order-first">
              <div className="absolute w-64 h-64 rounded-full bg-[#c5a880]/15 blur-3xl -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-3xl bg-[#8C3316] p-2.5 shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-3 border border-[#c5a880]/30 rounded-2xl pointer-events-none z-10" />
                <div className="relative w-full h-full rounded-[14px] overflow-hidden">
                  <Image
                    src="/griha-pravesh.png"
                    alt="Griha Pravesh Catering Setup"
                    fill
                    sizes="(max-width: 1024px) 100vw, 35vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Content (Right) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-full bg-[#8C3316]/5 text-[#8C3316] border border-[#c5a880]/20">
                  <Home className="w-4 h-4" />
                </span>
                <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
                  New Beginnings
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#8C3316] font-semibold leading-tight tracking-wide">
                Griha Pravesh Catering
              </h2>
              <h3 className="font-sans text-base sm:text-lg text-[#8C3316] font-medium leading-relaxed italic">
                Celebrate New Beginnings with Food That Feels Like Home
              </h3>
              <div className="space-y-4 font-sans text-sm sm:text-base text-[#292927]/85 font-light leading-relaxed">
                <p>
                  A new home is more than just a new address.
                </p>
                <p>
                  It&apos;s the beginning of a new chapter filled with hopes, memories and countless moments shared with family and friends.
                </p>
                <p>
                  Whether you&apos;re hosting a traditional Griha Pravesh Pooja, a housewarming lunch or an intimate gathering after the ceremony, every guest should feel welcomed with warm hospitality and wholesome food.
                </p>
              </div>

              {/* Read More Button */}
              <div className="pt-2">
                <Link
                  href="/occasions_we_serve/griha_pravesh"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#8C3316] hover:bg-[#74290F] text-white font-sans text-sm font-semibold tracking-wide rounded-md shadow-sm transition-all duration-300 transform active:scale-98"
                >
                  <span>Explore Griha Pravesh Catering</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* Occasion 2: Pooja & Havan (Accent background, Content Left, Image Right) */}
        <section className="w-full bg-[#8C3316]/5 border-t border-b border-[#c5a880]/15 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

              {/* Content (Left) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-full bg-[#8C3316]/5 text-[#8C3316] border border-[#c5a880]/20">
                    <Flame className="w-4 h-4" />
                  </span>
                  <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
                    Pooja & Havan Catering
                  </span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#8C3316] font-semibold leading-tight tracking-wide">
                  Pooja & Havan
                </h2>
                <h3 className="font-sans text-base sm:text-lg text-[#8C3316] font-medium leading-relaxed italic">
                  Thoughtfully Prepared Satvik & Home-Style Catering for Religious Gatherings
                </h3>
                <div className="space-y-4 font-sans text-sm sm:text-base text-[#292927]/85 font-light leading-relaxed">
                  <p>
                    A pooja is more than a gathering. It&apos;s a moment of gratitude, devotion and togetherness.
                  </p>
                  <p>
                    Whether you&apos;re hosting a Satyanarayan Katha, Griha Pravesh Pooja, Havan, Mata Ki Chowki, Rudrabhishek or another religious ceremony, welcoming your family and guests with wholesome, freshly prepared food is an important part of the occasion.
                  </p>
                  <p>
                    At Dahi Cheeni, we provide home-style catering for poojas and havans across Delhi NCR, preparing every meal with care, simplicity and respect for the traditions that make these occasions meaningful. Our team takes care of the catering, allowing you to focus on your prayers, rituals and guests.
                  </p>
                </div>

                {/* Read More Button */}
                <div className="pt-2">
                  <Link
                    href="/occasions_we_serve/pooja_havan"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#8C3316] hover:bg-[#74290F] text-white font-sans text-sm font-semibold tracking-wide rounded-md shadow-sm transition-all duration-300 transform active:scale-98"
                  >
                    <span>Explore Pooja & Havan Catering</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Image (Right) */}
              <div className="lg:col-span-5 flex justify-center items-center relative">
                <div className="absolute w-64 h-64 rounded-full bg-[#8C3316]/5 blur-3xl -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-3xl bg-[#8C3316] p-2.5 shadow-xl -rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="absolute inset-3 border border-[#c5a880]/30 rounded-2xl pointer-events-none z-10" />
                  <div className="relative w-full h-full rounded-[14px] overflow-hidden">
                    <Image
                      src="/pooja-havan.png"
                      alt="Pooja and Havan Catering Setup"
                      fill
                      sizes="(max-width: 1024px) 100vw, 35vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Occasion 3: Baby Shower (Base background, Image Left, Content Right) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Image (Left) */}
            <div className="lg:col-span-5 flex justify-center items-center relative order-last lg:order-first">
              <div className="absolute w-64 h-64 rounded-full bg-[#c5a880]/15 blur-3xl -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-3xl bg-[#8C3316] p-2.5 shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-3 border border-[#c5a880]/30 rounded-2xl pointer-events-none z-10" />
                <div className="relative w-full h-full rounded-[14px] overflow-hidden">
                  <Image
                    src="/baby-celebrations.png"
                    alt="Baby Shower Catering Setup"
                    fill
                    sizes="(max-width: 1024px) 100vw, 35vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content (Right) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-full bg-[#8C3316]/5 text-[#8C3316] border border-[#c5a880]/20">
                  <Baby className="w-4 h-4" />
                </span>
                <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
                  Life&apos;s Sweetest Milestones
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#8C3316] font-semibold leading-tight tracking-wide">
                Baby Shower
              </h2>
              <h3 className="font-sans text-base sm:text-lg text-[#8C3316] font-medium leading-relaxed italic">
                Thoughtfully Curated Catering for Life&apos;s Sweetest Milestones
              </h3>
              <div className="space-y-4 font-sans text-sm sm:text-base text-[#292927]/85 font-light leading-relaxed">
                <p>
                  The arrival of a baby brings with it some of life&apos;s most cherished celebrations. From welcoming your little one into the family to celebrating each precious milestone, these occasions are filled with blessings, traditions and moments shared with the people who matter most.
                </p>
                <p>
                  At Dahi Cheeni, we provide home-style catering for baby showers across Delhi NCR, helping families host warm, memorable gatherings with thoughtfully prepared food and heartfelt hospitality.
                </p>
              </div>

              {/* Read More Button */}
              <div className="pt-2">
                <Link
                  href="/occasions_we_serve/baby_shower"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#8C3316] hover:bg-[#74290F] text-white font-sans text-sm font-semibold tracking-wide rounded-md shadow-sm transition-all duration-300 transform active:scale-98"
                >
                  <span>Explore Baby Celebration Catering</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* Occasion 4: Prayer Meeting (Accent background, Content Left, Image Right) */}
        <section className="w-full bg-[#8C3316]/5 border-t border-b border-[#c5a880]/15 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

              {/* Content (Left) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-full bg-[#8C3316]/5 text-[#8C3316] border border-[#c5a880]/20">
                    <Heart className="w-4 h-4" />
                  </span>
                  <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
                    Prayer Meeting Catering
                  </span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#8C3316] font-semibold leading-tight tracking-wide">
                  Prayer Meeting Catering
                </h2>
                <h3 className="font-sans text-base sm:text-lg text-[#8C3316] font-medium leading-relaxed italic">
                  Thoughtful Hospitality for Life&apos;s Most Difficult Moments
                </h3>
                <div className="space-y-4 font-sans text-sm sm:text-base text-[#292927]/85 font-light leading-relaxed">
                  <p>
                    Some gatherings are not celebrations. They are moments of remembrance, reflection and togetherness.
                  </p>
                  <p>
                    When family and friends come together to honour the life of a loved one, the last thing a family should have to worry about is preparing and serving food.
                  </p>
                  <p>
                    At Dahi Cheeni, we provide respectful, home-style catering for prayer meetings across Delhi NCR, allowing families to focus on being with their loved ones while we quietly take care of the hospitality.
                  </p>
                </div>

                {/* Read More Button */}
                <div className="pt-2">
                  <Link
                    href="/occasions_we_serve/prayer_meetings"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#8C3316] hover:bg-[#74290F] text-white font-sans text-sm font-semibold tracking-wide rounded-md shadow-sm transition-all duration-300 transform active:scale-98"
                  >
                    <span>Explore Prayer Meeting Catering</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Image (Right) */}
              <div className="lg:col-span-5 flex justify-center items-center relative">
                <div className="absolute w-64 h-64 rounded-full bg-[#8C3316]/5 blur-3xl -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-3xl bg-[#8C3316] p-2.5 shadow-xl -rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="absolute inset-3 border border-[#c5a880]/30 rounded-2xl pointer-events-none z-10" />
                  <div className="relative w-full h-full rounded-[14px] overflow-hidden">
                    <Image
                      src="/prayer-meetings.png"
                      alt="Prayer Meeting Catering"
                      fill
                      sizes="(max-width: 1024px) 100vw, 35vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Occasion 5: Family Gathering (Base background, Image Left, Content Right) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Image (Left) */}
            <div className="lg:col-span-5 flex justify-center items-center relative order-last lg:order-first">
              <div className="absolute w-64 h-64 rounded-full bg-[#c5a880]/15 blur-3xl -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-3xl bg-[#8C3316] p-2.5 shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-3 border border-[#c5a880]/30 rounded-2xl pointer-events-none z-10" />
                <div className="relative w-full h-full rounded-[14px] overflow-hidden">
                  <Image
                    src="/family-get-together.png"
                    alt="Family Gathering Buffet Setup"
                    fill
                    sizes="(max-width: 1024px) 100vw, 35vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content (Right) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-full bg-[#8C3316]/5 text-[#8C3316] border border-[#c5a880]/20">
                  <Users className="w-4 h-4" />
                </span>
                <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
                  Warm Shared Moments
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#8C3316] font-semibold leading-tight tracking-wide">
                Family Gathering Catering
              </h2>
              <h3 className="font-sans text-base sm:text-lg text-[#8C3316] font-medium leading-relaxed italic">
                Home-Style Catering for the Moments That Matter Most
              </h3>
              <div className="space-y-4 font-sans text-sm sm:text-base text-[#292927]/85 font-light leading-relaxed">
                <p>
                  Not every gathering needs a special occasion. Sometimes, the best moments are simply about bringing family together.
                </p>
                <p>
                  At Dahi Cheeni, we specialise in home-style catering for intimate family gatherings across Delhi NCR, helping you host with ease while enjoying every moment with your loved ones. Whether you&apos;re inviting 20 guests or hosting a gathering of 100, we prepare fresh, comforting meals that make everyone feel at home.
                </p>
              </div>

              {/* Read More Button */}
              <div className="pt-2">
                <Link
                  href="/occasions_we_serve/family_gatherings"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#8C3316] hover:bg-[#74290F] text-white font-sans text-sm font-semibold tracking-wide rounded-md shadow-sm transition-all duration-300 transform active:scale-98"
                >
                  <span>Explore Family Gathering Catering</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </section>

      </div>

      {/* 5. CTA Section */}
      <section className="w-full bg-[#8C3316] text-[#FAF6F0] py-16 md:py-20 relative overflow-hidden z-10">
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
              className="px-8 py-3.5 bg-[#FAF6F0] hover:bg-[#FAF6F0]/90 text-[#8C3316] font-sans text-sm font-semibold tracking-wider rounded-md shadow-md transition-all duration-300 w-full sm:w-auto text-center"
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
      <FAQs items={OCCASIONS_PAGE_FAQS} />
    </main>
  );
}
