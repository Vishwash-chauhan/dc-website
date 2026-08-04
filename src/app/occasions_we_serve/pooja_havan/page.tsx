import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FAQs from "@/components/FAQs";
import { Flame, Sparkles, Check, ChevronRight, MapPin, Heart, UtensilsCrossed, Calendar, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Pooja & Havan Catering in Delhi NCR | Dahi Cheeni",
  description: "Thoughtfully prepared Satvik & home-style catering for Poojas, Havans, and religious gatherings across Delhi NCR. Pure ingredients and warm hospitality.",
};

const POOJA_HAVAN_FAQS = [
  {
    question: "Do you offer satvik catering?",
    answer: "Yes. We prepare customised satvik menus suitable for poojas, havans and religious ceremonies.",
  },
  {
    question: "Can menus be customised?",
    answer: "Absolutely. Every family's traditions are different, and we'll tailor the menu accordingly.",
  },
  {
    question: "Do you provide serving staff?",
    answer: "Yes. Professional service staff can be arranged for your event.",
  },
  {
    question: "Do you cater for morning poojas?",
    answer: "Yes. We offer breakfast, brunch, lunch and dinner menus depending on your event schedule.",
  },
  {
    question: "Can you cater at home?",
    answer: "Yes. Most of our pooja and havan events take place in our clients' homes.",
  },
];

const RELIGIOUS_OCCASIONS = [
  "Griha Pravesh Poojas",
  "Satyanarayan Katha",
  "Ganesh Pooja",
  "Lakshmi Pooja",
  "Rudrabhishek",
  "Navgraha Pooja",
  "Mata Ki Chowki",
  "Havan Ceremonies",
  "Festival Gatherings",
  "Community Prayers",
  "Temple Functions",
];

const POPULAR_MENU_OPTIONS = [
  "Traditional North Indian Meals",
  "Satvik Thalis",
  "Poori & Sabzi",
  "Kadhi Chawal",
  "Dal Preparations",
  "Seasonal Vegetables",
  "Rice Dishes",
  "Raita",
  "Fresh Salads",
  "Mithai",
  "Tea & Coffee",
];

const WHY_CHOOSE_FEATURES = [
  {
    title: "Freshly Prepared Food",
    desc: "Every meal is cooked specifically for your gathering using quality ingredients.",
  },
  {
    title: "Thoughtfully Curated Menus",
    desc: "Menus are customised according to your traditions, guest profile and preferences.",
  },
  {
    title: "Warm Hospitality",
    desc: "Our experienced team ensures every guest is looked after with professionalism and care.",
  },
  {
    title: "Flexible Catering",
    desc: "Whether you're hosting 20 guests or 200, we'll help you plan the right menu and quantity.",
  },
];

const LOCATIONS = [
  { name: "New Delhi", href: "/delhi" },
  { name: "Gurgaon", href: "/gurugram" },
  { name: "Noida", href: "/noida" },
  { name: "Greater Noida", href: "/noida" },
  { name: "Ghaziabad", href: "/ghaziabad" },
  { name: "Faridabad", href: "/faridabad" },
];

export default function PoojaHavanPage() {
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
          <span className="text-[#8C3316] font-medium">Pooja & Havan Catering</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-full bg-[#8C3316]/5 text-[#8C3316] border border-[#c5a880]/20">
                <Flame className="w-4 h-4" />
              </span>
              <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
                RELIGIOUS & SPIRITUAL GATHERINGS
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#8C3316] font-semibold leading-tight tracking-wide">
              Pooja & Havan Catering in Delhi NCR
            </h1>

            <h2 className="font-sans text-lg sm:text-xl text-[#8C3316] font-medium leading-relaxed italic">
              Thoughtfully Prepared Satvik & Home-Style Catering for Religious Gatherings
            </h2>

            <div className="space-y-4 font-sans text-sm sm:text-base text-[#292927]/85 font-light leading-relaxed">
              <p>
                A pooja is more than a gathering. It&apos;s a moment of gratitude, devotion and togetherness.
              </p>
              <p>
                Whether you&apos;re hosting a Satyanarayan Katha, Griha Pravesh Pooja, Havan, Mata Ki Chowki, Rudrabhishek or another religious ceremony, welcoming your family and guests with wholesome, freshly prepared food is an important part of the occasion.
              </p>
              <p>
                At Dahi Cheeni, we provide home-style catering for poojas and havans across Delhi NCR, preparing every meal with care, simplicity and respect for the traditions that make these occasions meaningful.
              </p>
              <p>
                Our team takes care of the catering, allowing you to focus on your prayers, rituals and guests.
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
            <div className="absolute w-72 h-72 rounded-full bg-[#8C3316]/5 blur-3xl -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="relative w-full max-w-[440px] aspect-[4/3] rounded-3xl bg-[#8C3316] p-2.5 shadow-xl -rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="absolute inset-3 border border-[#c5a880]/30 rounded-2xl pointer-events-none z-10" />
              <div className="relative w-full h-full rounded-[14px] overflow-hidden">
                <Image
                  src="/pooja-havan.png"
                  alt="Pooja and Havan Catering Setup"
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

      {/* Section 1: Satvik Food Prepared with Care */}
      <section className="w-full bg-[#8C3316]/5 border-t border-b border-[#c5a880]/15 py-14 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 border border-[#c5a880]/25 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-full bg-[#8C3316]/10 text-[#8C3316]">
                <Sparkles className="w-5 h-5" />
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#8C3316] font-semibold">
                Satvik Food Prepared with Care
              </h2>
            </div>
            <div className="space-y-3 font-sans text-sm sm:text-base text-[#292927]/85 font-light leading-relaxed">
              <p>
                Many religious ceremonies call for food that is simple, pure and satvik.
              </p>
              <p>
                Our menus are thoughtfully planned using fresh ingredients and recipes that honour the spirit of the occasion.
              </p>
              <p>
                Whether you&apos;re serving breakfast after a morning pooja or lunch following a havan, we create meals that are comforting, wholesome and enjoyed by guests of every generation.
              </p>
              <p className="font-medium text-[#8C3316]">
                Every menu can be customised according to your family&apos;s traditions and preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Perfect for Every Religious Occasion */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-20 space-y-10">
        <div className="max-w-3xl space-y-3">
          <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
            VERSATILE CATERING
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#8C3316] font-semibold">
            Perfect for Every Religious Occasion
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#292927]/80 font-light">
            We regularly cater for:
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {RELIGIOUS_OCCASIONS.map((occ, idx) => (
            <div
              key={idx}
              className="bg-white/70 border border-[#c5a880]/20 rounded-xl p-4 flex items-center gap-3 shadow-sm hover:border-[#c5a880]/50 hover:shadow-md transition-all duration-300"
            >
              <Calendar className="w-4 h-4 text-[#c5a880] flex-shrink-0" />
              <span className="font-serif text-sm md:text-base text-[#8C3316] font-medium">
                {occ}
              </span>
            </div>
          ))}
        </div>

        <p className="font-sans text-sm sm:text-base text-[#292927]/85 font-light italic">
          Whether your gathering is intimate or large, we&apos;ll recommend a menu that suits your guests and the occasion.
        </p>
      </section>

      {/* Section 3: Home-Style Menus Your Guests Will Appreciate */}
      <section className="w-full bg-[#8C3316]/5 border-t border-b border-[#c5a880]/15 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
              OUR MENU HIGHLIGHTS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#8C3316] font-semibold">
              Home-Style Menus Your Guests Will Appreciate
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#292927]/85 font-light">
              Our catering focuses on food that feels familiar, comforting and freshly prepared.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 pt-2">
            {POPULAR_MENU_OPTIONS.map((item, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-white border border-[#c5a880]/30 text-[#8C3316] font-serif text-sm sm:text-base font-semibold rounded-full shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="font-sans text-xs sm:text-sm text-[#292927]/75 italic">
            We also offer breakfast menus, snack selections and customised combinations based on your event schedule.
          </p>
        </div>
      </section>

      {/* Section 4: Why Families Choose Dahi Cheeni */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-20">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
            OUR COMMITMENT
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {WHY_CHOOSE_FEATURES.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white/70 border border-[#c5a880]/20 rounded-2xl p-6 space-y-2 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-full bg-[#8C3316]/10 text-[#8C3316] flex-shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-lg text-[#8C3316] font-bold">
                  {feature.title}
                </h3>
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#292927]/85 font-light leading-relaxed pl-8">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Catering Across Delhi NCR */}
      <section className="w-full bg-[#8C3316]/5 border-t border-b border-[#c5a880]/15 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
              SERVICE LOCATIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#8C3316] font-semibold">
              Catering Across Delhi NCR
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#292927]/80 font-light">
              We proudly cater religious gatherings across:
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

          <p className="font-sans text-sm sm:text-base text-[#292927]/85 font-light max-w-2xl mx-auto pt-2">
            Whether your pooja is at home, in a community hall or another venue, we bring the same attention to detail and warm hospitality to every gathering.
          </p>
        </div>
      </section>

      {/* Section 6: FAQs Section */}
      <FAQs items={POOJA_HAVAN_FAQS} />

      {/* Section 7: CTA Section */}
      <section className="w-full bg-[#8C3316] text-[#FAF6F0] py-16 md:py-20 relative overflow-hidden z-10">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#c5a880]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#c5a880]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
            GET IN TOUCH
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF6F0] font-medium leading-tight tracking-wide">
            Celebrate with Peace of Mind
          </h2>
          <div className="font-sans text-sm sm:text-base text-[#FAF6F0]/80 font-light max-w-2xl mx-auto leading-relaxed space-y-2">
            <p>
              A religious gathering is about faith, family and togetherness.
            </p>
            <p>
              Let Dahi Cheeni take care of the food so you can focus on what truly matters.
            </p>
            <p className="font-medium text-[#FAF6F0] pt-2">
              Get in touch with our team to create a customised menu for your upcoming pooja or havan.
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
