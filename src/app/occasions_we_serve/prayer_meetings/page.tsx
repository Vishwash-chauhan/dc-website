import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FAQs from "@/components/FAQs";
import { Heart, Sparkles, Check, ChevronRight, MapPin, UtensilsCrossed, Calendar, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Prayer Meeting Catering in Delhi NCR | Dahi Cheeni",
  description: "Respectful, home-style catering for Prayer Meetings, Bhog Ceremonies, Rasam Pagri & Memorial Services across Delhi NCR by Dahi Cheeni.",
};

const PRAYER_MEETING_FAQS = [
  {
    question: "Do you provide satvik menus?",
    answer: "Yes. Satvik catering is one of our most requested services for prayer meetings and religious gatherings.",
  },
  {
    question: "Can the menu be customised?",
    answer: "Absolutely. We work closely with families to create menus that respect their traditions and preferences.",
  },
  {
    question: "Do you provide serving staff?",
    answer: "Yes. Our professional hospitality team can manage food service throughout the gathering.",
  },
  {
    question: "Do you cater at home?",
    answer: "Yes. Most prayer meetings are held at family homes, and we're fully equipped to cater in residential settings.",
  },
  {
    question: "Can you accommodate last-minute requests?",
    answer: "We understand that these occasions are often planned at short notice. Whenever possible, we will do everything we can to accommodate your requirements.",
  },
];

const MENU_OPTIONS = [
  "Satvik Meals",
  "Traditional North Indian Menus",
  "Breakfast & Brunch Options",
  "Lunch Buffets",
  "Tea & Coffee Service",
  "Mithai & Desserts",
  "Seasonal Specialities",
];

const SUITABLE_OCCASIONS = [
  "Prayer Meetings",
  "Bhog Ceremonies",
  "Rasam Pagri",
  "Terahvi Gatherings",
  "Memorial Services",
  "Condolence Meetings",
  "Family Remembrance Gatherings",
];

const TRUST_REASONS = [
  "Freshly prepared home-style food",
  "Satvik menu options",
  "Professional and discreet service",
  "Customised menus",
  "Flexible guest counts",
  "Timely delivery and setup",
  "Catering across Delhi NCR",
];

const LOCATIONS = [
  { name: "New Delhi", href: "/delhi" },
  { name: "Gurgaon", href: "/gurugram" },
  { name: "Noida", href: "/noida" },
  { name: "Greater Noida", href: "/noida" },
  { name: "Ghaziabad", href: "/ghaziabad" },
  { name: "Faridabad", href: "/faridabad" },
];

export default function PrayerMeetingsPage() {
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
          <span className="text-[#8C3316] font-medium">Prayer Meeting Catering</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-full bg-[#8C3316]/5 text-[#8C3316] border border-[#c5a880]/20">
                <Heart className="w-4 h-4" />
              </span>
              <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
                RESPECTFUL HOSPITALITY
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#8C3316] font-semibold leading-tight tracking-wide">
              Prayer Meeting Catering in Delhi NCR
            </h1>

            <h2 className="font-sans text-lg sm:text-xl text-[#8C3316] font-medium leading-relaxed italic">
              Thoughtful Hospitality for Life&apos;s Most Difficult Moments
            </h2>

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
                  src="/prayer-meetings.png"
                  alt="Prayer Meeting Catering Setup"
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

      {/* Section 1: Simple, Comforting Meals */}
      <section className="w-full bg-[#8C3316]/5 border-t border-b border-[#c5a880]/15 py-14 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 border border-[#c5a880]/25 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-full bg-[#8C3316]/10 text-[#8C3316]">
                <UtensilsCrossed className="w-5 h-5" />
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#8C3316] font-semibold">
                Simple, Comforting Meals
              </h2>
            </div>
            <div className="space-y-3 font-sans text-sm sm:text-base text-[#292927]/85 font-light leading-relaxed">
              <p>
                Prayer meetings often call for food that feels familiar, comforting and appropriate for the occasion.
              </p>
              <p>
                Our menus are thoughtfully curated to reflect the simplicity and warmth of traditional home-style meals. Depending on your family&apos;s preferences, we offer:
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 pt-1">
              {MENU_OPTIONS.map((item, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-white border border-[#c5a880]/30 text-[#8C3316] font-serif text-sm sm:text-base font-semibold rounded-full shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="font-sans text-xs sm:text-sm text-[#292927]/75 italic pt-2">
              Every menu can be customised according to your family&apos;s traditions and religious practices.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Hospitality with Sensitivity */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-20">
        <div className="bg-white/80 border border-[#c5a880]/20 rounded-2xl p-6 sm:p-10 space-y-4 shadow-sm max-w-4xl mx-auto text-center">
          <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
            DISCREET & RESPECTFUL
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#8C3316] font-semibold">
            Hospitality with Sensitivity
          </h2>
          <div className="space-y-3 font-sans text-sm sm:text-base text-[#292927]/85 font-light leading-relaxed max-w-2xl mx-auto">
            <p>
              We understand that these occasions require a different kind of service.
            </p>
            <p>
              Our team works quietly, respectfully and professionally, ensuring your guests are looked after without disrupting the atmosphere of the gathering.
            </p>
            <p className="font-medium text-[#8C3316]">
              From timely setup to smooth food service and efficient clean-up, every aspect of the catering is managed with care.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Why Families Trust Dahi Cheeni */}
      <section className="w-full bg-[#8C3316]/5 border-t border-b border-[#c5a880]/15 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
              QUIET REASSURANCE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#8C3316] font-semibold">
              Why Families Trust Dahi Cheeni
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#292927]/80 font-light">
              Families choose Dahi Cheeni because they know they can rely on us during emotionally challenging times. We provide:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {TRUST_REASONS.map((reason, idx) => (
              <div
                key={idx}
                className="bg-white/70 border border-[#c5a880]/20 rounded-xl p-4 flex items-center gap-3 shadow-sm"
              >
                <Check className="w-4 h-4 text-[#8C3316] flex-shrink-0" />
                <span className="font-serif text-sm sm:text-base text-[#8C3316] font-medium">
                  {reason}
                </span>
              </div>
            ))}
          </div>

          <p className="font-sans text-sm sm:text-base text-[#292927]/85 font-light text-center max-w-2xl mx-auto italic">
            Our goal is to make one part of the day a little easier, allowing you to spend your time where it matters most—with your family and guests.
          </p>
        </div>
      </section>

      {/* Section 4: Suitable for */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-20 space-y-8 text-center">
        <div className="max-w-2xl mx-auto space-y-3">
          <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
            OCCASIONS WE SUPPORT
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#8C3316] font-semibold">
            Suitable for
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {SUITABLE_OCCASIONS.map((item, idx) => (
            <span
              key={idx}
              className="px-5 py-3 bg-white border border-[#c5a880]/30 rounded-full text-[#8C3316] font-serif text-sm sm:text-base font-semibold shadow-sm flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#c5a880]" />
              <span>{item}</span>
            </span>
          ))}
        </div>

        <p className="font-sans text-sm sm:text-base text-[#292927]/85 font-light max-w-2xl mx-auto">
          Whether the gathering is held at home, in a community hall or another venue, our team will ensure every guest is served with warmth and respect.
        </p>
      </section>

      {/* Section 5: Catering Across Delhi NCR */}
      <section className="w-full bg-[#8C3316]/5 border-t border-b border-[#c5a880]/15 py-16 md:py-20 text-center space-y-8">
        <div className="max-w-2xl mx-auto space-y-3">
          <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
            SERVICE AREA
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#8C3316] font-semibold">
            Catering Across Delhi NCR
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#292927]/80 font-light">
            We provide prayer meeting catering throughout:
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
          Our experienced team will arrive on time, prepare the service area and ensure everything runs smoothly from beginning to end.
        </p>
      </section>

      {/* Section 6: FAQs Section */}
      <FAQs items={PRAYER_MEETING_FAQS} />

      {/* Section 7: CTA Section */}
      <section className="w-full bg-[#8C3316] text-[#FAF6F0] py-16 md:py-20 relative overflow-hidden z-10">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#c5a880]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#c5a880]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
            WE ARE HERE FOR YOU
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF6F0] font-medium leading-tight tracking-wide">
            Here When You Need Us
          </h2>
          <div className="font-sans text-sm sm:text-base text-[#FAF6F0]/80 font-light max-w-2xl mx-auto leading-relaxed space-y-2">
            <p>
              During difficult times, thoughtful hospitality can bring a small measure of comfort.
            </p>
            <p>
              At Dahi Cheeni, we&apos;re honoured to support families with freshly prepared food, respectful service and the quiet reassurance that every guest will be looked after with care.
            </p>
            <p className="font-medium text-[#FAF6F0] pt-2">
              If you need assistance with a prayer meeting or memorial gathering, our team is here to help.
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
