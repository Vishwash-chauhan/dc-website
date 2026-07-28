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
                <p>
                  At Dahi Cheeni, we specialise in Griha Pravesh catering across Delhi NCR, serving freshly prepared home-style meals that bring families together and make your celebration truly memorable.
                </p>
                <p>
                  Our thoughtfully curated menus, professional service and attention to detail allow you to focus on your guests while we take care of the food.
                </p>
              </div>

              {/* Highlight Box */}
              <div className="bg-[#c5a880]/10 border border-[#c5a880]/30 rounded-2xl p-5 md:p-6 space-y-3 mt-6">
                <div className="flex items-center gap-2 text-[#8C3316] font-serif font-bold text-lg">
                  <span>✦</span>
                  <h4>Thoughtfully Curated Menus for Every Family</h4>
                </div>
                <div className="font-sans text-xs sm:text-sm text-[#292927]/80 leading-relaxed space-y-2">
                  <p>
                    Every family celebrates differently.
                  </p>
                  <p>
                    Some prefer a traditional satvik meal after the pooja, while others choose a larger buffet for relatives and friends. That&apos;s why every Dahi Cheeni menu is customised according to your gathering.
                  </p>
                  <p>
                    Whether you&apos;re welcoming 20 guests or 200, we&apos;ll recommend the right menu, portion sizes and style of service based on your celebration.
                  </p>
                </div>
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

                {/* Satvik Box */}
                <div className="bg-white/60 border border-[#c5a880]/15 rounded-2xl p-5 md:p-6 space-y-3 mt-6">
                  <div className="flex items-center gap-2 text-[#8C3316] font-serif font-bold text-lg">
                    <span>✦</span>
                    <h4>Satvik Food Prepared with Care</h4>
                  </div>
                  <div className="font-sans text-xs sm:text-sm text-[#292927]/80 leading-relaxed space-y-2">
                    <p>
                      Many religious ceremonies call for food that is simple, pure and satvik.
                    </p>
                    <p>
                      Our menus are thoughtfully planned using fresh ingredients and recipes that honour the spirit of the occasion. Whether you&apos;re serving breakfast after a morning pooja or lunch following a havan, we create meals that are comforting, wholesome and enjoyed by guests of every generation. Every menu can be customised according to your family&apos;s traditions and preferences.
                    </p>
                  </div>
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
                <p>
                  Whether you&apos;re planning a Naamkaran ceremony, Annaprashan, Mundan, Baby Shower or a First Birthday celebration at home, we&apos;ll take care of the food so you can focus on creating memories with your loved ones.
                </p>
              </div>

              {/* Milestones Grid */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-2 text-[#8C3316] font-serif font-bold text-lg">
                  <span>✦</span>
                  <h4>Catering for Every Baby Milestone</h4>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#292927]/80 italic">
                  Every family celebrates differently, and every occasion deserves food that&apos;s prepared with care.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  {[
                    {
                      title: "Naamkaran Ceremony",
                      desc: "Celebrate your baby's naming ceremony with comforting home-style meals that bring family and friends together.",
                    },
                    {
                      title: "Annaprashan",
                      desc: "Mark your baby's first meal with a beautifully planned gathering and wholesome food for your guests.",
                    },
                    {
                      title: "Mundan Ceremony",
                      desc: "Whether the ceremony is held at home, a temple or another venue, we create menus that suit both traditional customs and modern celebrations.",
                    },
                    {
                      title: "Baby Shower",
                      desc: "Welcome your newest family member with fresh, delicious food that's perfect for intimate celebrations with family and close friends.",
                    },
                  ].map((milestone, idx) => (
                    <div key={idx} className="bg-white/60 border border-[#c5a880]/15 rounded-xl p-4 space-y-1 shadow-sm hover:shadow-md transition-shadow">
                      <h5 className="font-serif text-sm md:text-base text-[#8C3316] font-bold">
                        {milestone.title}
                      </h5>
                      <p className="font-sans text-[11px] sm:text-xs text-[#292927]/85 font-light leading-relaxed">
                        {milestone.desc}
                      </p>
                    </div>
                  ))}
                  <div className="col-span-1 sm:col-span-2 bg-white/60 border border-[#c5a880]/15 rounded-xl p-4 space-y-1 shadow-sm hover:shadow-md transition-shadow">
                    <h5 className="font-serif text-sm md:text-base text-[#8C3316] font-bold">
                      First Birthday Celebrations
                    </h5>
                    <p className="font-sans text-[11px] sm:text-xs text-[#292927]/85 font-light leading-relaxed">
                      Your baby&apos;s first birthday is a milestone you&apos;ll remember forever. Whether you&apos;re hosting a celebration at home or another venue, we&apos;ll create a menu that&apos;s loved by children and adults alike.
                    </p>
                  </div>
                </div>
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
                  <div className="pl-4 border-l-2 border-[#c5a880] italic space-y-1 py-1 font-medium text-[#8C3316]/90">
                    <p>Our approach is simple.</p>
                    <p>Freshly prepared food. Warm, professional service. Thoughtful attention to every detail.</p>
                    <p>Because during difficult times, that&apos;s what truly matters.</p>
                  </div>
                </div>

                {/* Menu Offerings */}
                <div className="bg-white/60 border border-[#c5a880]/15 rounded-2xl p-5 md:p-6 space-y-4 mt-6">
                  <div className="flex items-center gap-2 text-[#8C3316] font-serif font-bold text-lg">
                    <span>✦</span>
                    <h4>Simple, Comforting Meals</h4>
                  </div>
                  <div className="font-sans text-xs sm:text-sm text-[#292927]/80 leading-relaxed space-y-3">
                    <p>
                      Prayer meetings often call for food that feels familiar, comforting and appropriate for the occasion.
                    </p>
                    <p>
                      Our menus are thoughtfully curated to reflect the simplicity and warmth of traditional home-style meals. Depending on your family&apos;s preferences, we offer:
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {[
                        "Satvik Meals",
                        "Traditional North Indian Menus",
                        "Breakfast & Brunch Options",
                        "Lunch Buffets",
                        "Tea & Coffee Service",
                        "Mithai & Desserts",
                        "Seasonal Specialities",
                      ].map((item, idx) => (
                        <span key={idx} className="px-3 py-1.5 bg-[#8C3316]/5 border border-[#c5a880]/20 text-[#8C3316] font-serif text-xs md:text-sm font-semibold rounded-full shadow-sm hover:bg-[#8C3316]/10 transition-colors">
                          {item}
                        </span>
                      ))}
                    </div>

                    <p className="italic text-[11px] sm:text-xs pt-2">
                      Every menu can be customised according to your family&apos;s traditions and religious practices.
                    </p>
                  </div>
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
                  A Sunday lunch with grandparents. An anniversary dinner at home. Relatives visiting from another city. A festive meal shared around the dining table. These are the moments where conversations linger, laughter fills the room and memories are made over good food.
                </p>
                <p>
                  At Dahi Cheeni, we specialise in home-style catering for intimate family gatherings across Delhi NCR, helping you host with ease while enjoying every moment with your loved ones. Whether you&apos;re inviting 20 guests or hosting a gathering of 100, we prepare fresh, comforting meals that make everyone feel at home.
                </p>
              </div>

              {/* Familiar Food Box */}
              <div className="bg-[#c5a880]/10 border border-[#c5a880]/30 rounded-2xl p-5 md:p-6 space-y-3 mt-6">
                <div className="flex items-center gap-2 text-[#8C3316] font-serif font-bold text-lg">
                  <span>✦</span>
                  <h4>Food That Feels Familiar</h4>
                </div>
                <div className="font-sans text-xs sm:text-sm text-[#292927]/80 leading-relaxed space-y-2">
                  <p>
                    Great hospitality doesn&apos;t have to be extravagant. It simply has to make people feel welcome.
                  </p>
                  <p>
                    Our menus are inspired by the flavours of Indian homes—food that&apos;s wholesome, satisfying and prepared with care. Every meal is freshly cooked using quality ingredients and thoughtfully presented, combining the comfort of home-style recipes with the standards of professional hospitality.
                  </p>
                </div>
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
