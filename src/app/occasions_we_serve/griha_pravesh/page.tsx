import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FAQs from "@/components/FAQs";
import { Home, Sparkles, Check, ChevronRight, MapPin, Heart, ShieldCheck, UtensilsCrossed, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Griha Pravesh Catering in Delhi NCR | Dahi Cheeni",
  description: "Celebrate new beginnings with Dahi Cheeni's home-style Griha Pravesh catering across Delhi NCR. Freshly prepared food, and warm hospitality.",
};

const GRIHA_PRAVESH_FAQS = [
  {
    question: "Do you cater at home?",
    answer: "Absolutely. Most of our Griha Pravesh celebrations take place in clients' homes.",
  },
  {
    question: "Can the menu be customised?",
    answer: "Yes. Every menu is planned according to your family traditions, guest profile and dietary requirements.",
  },
  {
    question: "Do you provide serving staff?",
    answer: "Yes. We can arrange professional service staff to ensure your guests are comfortably looked after.",
  },
  {
    question: "How far in advance should we book?",
    answer: "We recommend booking as early as possible, especially during festive and wedding seasons. However, we'll always do our best to accommodate last-minute requests.",
  },
];

const POPULAR_MENU_OPTIONS = [
  "Traditional North Indian Meals",
  "Regional Specialities",
  "Breakfast & Brunch Menus",
  "Lunch Buffets",
  "Dinner Buffets",
  "Live Chaat Counters",
  "South Indian Breakfast Options",
  "Indian Breads & Curries",
  "Rice Preparations",
  "Mithai & Desserts",
];

const WHY_CHOOSE_REASONS = [
  "Freshly prepared home-style food",
  "Customised menus for every family",
  "Professional hospitality and service",
  "Beautiful presentation",
  "Suitable for intimate and large gatherings",
  "Serving homes across Delhi NCR",
];

const LOCATIONS = [
  { name: "New Delhi", href: "/delhi" },
  { name: "Gurgaon", href: "/gurugram" },
  { name: "Noida", href: "/noida" },
  { name: "Greater Noida", href: "/noida" },
  { name: "Ghaziabad", href: "/ghaziabad" },
  { name: "Faridabad", href: "/faridabad" },
];

export default function GrihaPraveshPage() {
  return (
    <main className="min-h-screen bg-[#FAF6F0] pt-24 md:pt-28 flex flex-col justify-between overflow-x-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-24 right-0 w-96 h-96 rounded-full bg-[#c5a880]/10 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-[80vh] left-0 w-96 h-96 rounded-full bg-[#8C3316]/5 blur-3xl -z-10 pointer-events-none" />

      {/* Breadcrumb & Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6 pb-12 md:pb-16">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm font-sans text-[#292927]/60 mb-8">
          <Link href="/" className="hover:text-[#8C3316] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#c5a880]" />
          <Link href="/occasions_we_serve" className="hover:text-[#8C3316] transition-colors">Occasions We Serve</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#c5a880]" />
          <span className="text-[#8C3316] font-medium">Griha Pravesh Catering</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-full bg-[#8C3316]/5 text-[#8C3316] border border-[#c5a880]/20">
                <Home className="w-4 h-4" />
              </span>
              <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
                HOUSEWARMING & POOJA CATERING
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#8C3316] font-semibold leading-tight tracking-wide">
              Griha Pravesh Catering in Delhi NCR
            </h1>

            <h2 className="font-sans text-lg sm:text-xl text-[#8C3316] font-medium leading-relaxed italic">
              Celebrate New Beginnings with Food That Feels Like Home
            </h2>

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

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/qet_a_quote"
                className="px-7 py-3 bg-[#8C3316] hover:bg-[#74290F] text-white font-sans text-sm font-semibold tracking-wide rounded-md shadow-md transition-all duration-300"
              >
                Get A Quote
              </Link>
              <a
                href="https://wa.me/919971118559"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 bg-white hover:bg-white/80 text-[#8C3316] border border-[#c5a880]/40 font-sans text-sm font-semibold tracking-wide rounded-md shadow-sm transition-all duration-300 flex items-center gap-2"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="absolute w-72 h-72 rounded-full bg-[#c5a880]/15 blur-3xl -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="relative w-full max-w-[440px] aspect-[4/3] rounded-3xl bg-[#8C3316] p-2.5 shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="absolute inset-3 border border-[#c5a880]/30 rounded-2xl pointer-events-none z-10" />
              <div className="relative w-full h-full rounded-[14px] overflow-hidden">
                <Image
                  src="/griha-pravesh.png"
                  alt="Griha Pravesh Catering Setup"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Thoughtfully Curated Menus for Every Family */}
      <section className="w-full bg-[#8C3316]/5 border-t border-b border-[#c5a880]/15 py-14 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 border border-[#c5a880]/25 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-[#8C3316] text-xl">✦</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#8C3316] font-semibold">
                Thoughtfully Curated Menus for Every Family
              </h2>
            </div>
            <div className="space-y-3 font-sans text-sm sm:text-base text-[#292927]/85 font-light leading-relaxed">
              <p>
                Every family celebrates differently.
              </p>
              <p>
                That&apos;s why every Dahi Cheeni menu is customised according to your gathering.
              </p>
              <p className="font-medium text-[#8C3316]">
                Whether you&apos;re welcoming 20 guests or 200, we&apos;ll recommend the right menu, portion sizes and style of service based on your celebration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Traditional Home-Style Food & Popular Options */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-20 space-y-10">
        <div className="max-w-3xl space-y-4">
          <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
            OUR CULINARY OFFERINGS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#8C3316] font-semibold">
            Traditional Home-Style Food
          </h2>
          <div className="space-y-2 font-sans text-sm sm:text-base text-[#292927]/85 font-light leading-relaxed">
            <p>
              Our menus are inspired by recipes that have brought families together for generations.
            </p>
            <p>
              Prepared fresh using quality ingredients, every meal is designed to feel comforting, balanced and familiar.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-serif text-xl text-[#8C3316] font-medium flex items-center gap-2">
            <UtensilsCrossed className="w-5 h-5 text-[#c5a880]" />
            Popular menu options include:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {POPULAR_MENU_OPTIONS.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/70 border border-[#c5a880]/20 rounded-xl p-4 flex items-center gap-3 shadow-sm hover:border-[#c5a880]/50 hover:shadow-md transition-all duration-300"
              >
                <div className="w-2 h-2 rounded-full bg-[#8C3316] flex-shrink-0" />
                <span className="font-serif text-sm md:text-base text-[#8C3316] font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#292927]/75 italic pt-2">
            Every menu can be customised according to your family&apos;s traditions and dietary preferences.
          </p>
        </div>
      </section>

      {/* Section 3 & 4: Catering & Hospitality Side-by-Side */}
      <section className="w-full bg-[#8C3316]/5 border-t border-b border-[#c5a880]/15 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Catering Card */}
            <div className="bg-white/80 border border-[#c5a880]/20 rounded-2xl p-6 sm:p-8 space-y-4 flex flex-col justify-between shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="p-2 rounded-full bg-[#8C3316]/10 text-[#8C3316]">
                    <Sparkles className="w-5 h-5" />
                  </span>
                  <h3 className="font-serif text-2xl text-[#8C3316] font-semibold">
                    Catering Available
                  </h3>
                </div>
                <div className="space-y-3 font-sans text-sm sm:text-base text-[#292927]/85 font-light leading-relaxed">
                  <p>
                    Many Griha Pravesh ceremonies are accompanied by religious rituals where satvik food is preferred.
                  </p>
                  <p>
                    If you have specific family traditions or dietary requirements, our team will be happy to customise the menu accordingly.
                  </p>
                </div>
              </div>
            </div>

            {/* Hospitality Card */}
            <div className="bg-white/80 border border-[#c5a880]/20 rounded-2xl p-6 sm:p-8 space-y-4 flex flex-col justify-between shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="p-2 rounded-full bg-[#8C3316]/10 text-[#8C3316]">
                    <Heart className="w-5 h-5" />
                  </span>
                  <h3 className="font-serif text-2xl text-[#8C3316] font-semibold">
                    Hospitality That Lets You Enjoy the Day
                  </h3>
                </div>
                <div className="space-y-3 font-sans text-sm sm:text-base text-[#292927]/85 font-light leading-relaxed">
                  <p>
                    Hosting guests in your new home is exciting, but it can also be overwhelming.
                  </p>
                  <p>
                    From preparing food to serving guests, there are countless details to manage.
                  </p>
                  <p>
                    Our experienced hospitality team takes care of the catering so you can spend your time welcoming family, participating in the ceremony and creating beautiful memories.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Why Families Choose Dahi Cheeni */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-20">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
            OUR PROMISE OF EXCELLENCE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#8C3316] font-semibold">
            Why Families Choose Dahi Cheeni
          </h2>
          <div className="flex items-center gap-3 justify-center pt-1">
            <div className="h-[1px] w-12 bg-[#c5a880]/40" />
            <span className="text-[#c5a880] text-sm">✿</span>
            <div className="h-[1px] w-12 bg-[#c5a880]/40" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {WHY_CHOOSE_REASONS.map((reason, idx) => (
            <div
              key={idx}
              className="bg-white/60 border border-[#c5a880]/20 rounded-xl p-5 flex items-start gap-3.5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-1.5 rounded-full bg-[#8C3316]/10 text-[#8C3316] mt-0.5 flex-shrink-0">
                <Check className="w-4 h-4" />
              </div>
              <span className="font-serif text-base text-[#8C3316] font-medium leading-snug">
                {reason}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: We Cater Across Delhi NCR */}
      <section className="w-full bg-[#8C3316]/5 border-t border-b border-[#c5a880]/15 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
              SERVICE COVERAGE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#8C3316] font-semibold">
              We Cater Across Delhi NCR
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#292927]/80 font-light">
              Whether your Griha Pravesh is in:
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
            {LOCATIONS.map((loc, idx) => (
              <Link
                key={idx}
                href={loc.href}
                className="px-5 py-3 bg-white border border-[#c5a880]/30 hover:border-[#8C3316] rounded-full text-[#8C3316] font-serif text-sm sm:text-base font-semibold shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2"
              >
                <MapPin className="w-4 h-4 text-[#c5a880]" />
                <span>{loc.name}</span>
              </Link>
            ))}
          </div>

          <p className="font-sans text-sm sm:text-base text-[#292927]/85 font-light max-w-xl mx-auto pt-2">
            our team brings the same warmth, professionalism and attention to detail to every celebration.
          </p>
        </div>
      </section>

      {/* Section 7: FAQs Section */}
      <FAQs items={GRIHA_PRAVESH_FAQS} />

      {/* Section 8: CTA Section */}
      <section className="w-full bg-[#8C3316] text-[#FAF6F0] py-16 md:py-20 relative overflow-hidden z-10">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#c5a880]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#c5a880]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
            GET IN TOUCH WITH US
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF6F0] font-medium leading-tight tracking-wide">
            Welcome Your New Home with Warm Hospitality
          </h2>
          <div className="font-sans text-sm sm:text-base text-[#FAF6F0]/80 font-light max-w-2xl mx-auto leading-relaxed space-y-2">
            <p>
              A new home deserves a memorable beginning.
            </p>
            <p>
              Let Dahi Cheeni help you celebrate your Griha Pravesh with thoughtfully prepared food, warm service and hospitality that makes every guest feel at home.
            </p>
            <p className="font-medium text-[#FAF6F0] pt-2">
              Speak to our team today to create a customised menu for your celebration.
            </p>
          </div>

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
    </main>
  );
}
