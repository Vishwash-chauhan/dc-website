import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FAQs from "@/components/FAQs";
import { Users, Sparkles, Check, ChevronRight, MapPin, Heart, UtensilsCrossed, Calendar, Smile } from "lucide-react";

export const metadata: Metadata = {
  title: "Family Gathering Catering in Delhi NCR | Dahi Cheeni",
  description: "Home-style catering for family get-togethers, anniversaries, birthdays, house parties & intimate celebrations across Delhi NCR by Dahi Cheeni.",
};

const FAMILY_GATHERING_FAQS = [
  {
    question: "What is the minimum number of guests?",
    answer: "We cater for both intimate family gatherings and larger celebrations. Speak with our team and we'll recommend the most suitable catering option based on your guest count.",
  },
  {
    question: "Can the menu be customised?",
    answer: "Yes. Every menu is planned around your preferences, dietary requirements and the occasion.",
  },
  {
    question: "Do you provide serving staff?",
    answer: "Yes. Professional service staff can be arranged to ensure your gathering runs smoothly.",
  },
  {
    question: "Can you cater at home?",
    answer: "Absolutely. Most of our family gatherings are hosted in clients' homes, and our team is experienced in creating seamless dining experiences in residential spaces.",
  },
];

const FAMILY_OCCASIONS = [
  "Family Get-Togethers",
  "Anniversary Celebrations",
  "Birthday Lunches & Dinners",
  "Festival Gatherings",
  "House Parties",
  "Weekend Brunches",
  "Engagement Ceremonies",
  "Retirement Celebrations",
  "Welcome Home Gatherings",
  "Intimate Celebrations with Friends & Family",
];

const MENU_OPTIONS = [
  "Traditional North Indian Cuisine",
  "Regional Indian Specialities",
  "Breakfast & Brunch Spreads",
  "Lunch & Dinner Buffets",
  "Live Chaat Counters",
  "Live Food Stations",
  "Desserts & Mithai",
  "Tea, Coffee & Beverage Service",
];

const WHY_CHOOSE_REASONS = [
  {
    title: "Freshly Prepared Food",
    desc: "Every order is cooked specifically for your gathering to ensure freshness and flavour.",
  },
  {
    title: "Home-Style Cooking",
    desc: "Comforting recipes inspired by the meals families have enjoyed for generations.",
  },
  {
    title: "Warm Hospitality",
    desc: "Professional service that lets you spend more time with your guests and less time worrying about logistics.",
  },
  {
    title: "Flexible Menus",
    desc: "Whether you're planning a simple lunch or an elaborate dinner, we'll help create the perfect menu for your celebration.",
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

export default function FamilyGatheringsPage() {
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
          <span className="text-[#8C3316] font-medium">Family Gathering Catering</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-full bg-[#8C3316]/5 text-[#8C3316] border border-[#c5a880]/20">
                <Users className="w-4 h-4" />
              </span>
              <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
                WARM SHARED MOMENTS
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#8C3316] font-semibold leading-tight tracking-wide">
              Family Gathering Catering in Delhi NCR
            </h1>

            <h2 className="font-sans text-lg sm:text-xl text-[#8C3316] font-medium leading-relaxed italic">
              Home-Style Catering for the Moments That Matter Most
            </h2>

            <div className="space-y-4 font-sans text-sm sm:text-base text-[#292927]/85 font-light leading-relaxed">
              <p>
                Not every gathering needs a special occasion.
              </p>
              <p>
                Sometimes, the best moments are simply about bringing family together. A Sunday lunch with grandparents. An anniversary dinner at home. Relatives visiting from another city. A festive meal shared around the dining table.
              </p>
              <p>
                These are the moments where conversations linger, laughter fills the room and memories are made over good food.
              </p>
              <p>
                At Dahi Cheeni, we specialise in home-style catering for intimate family gatherings across Delhi NCR, helping you host with ease while enjoying every moment with your loved ones.
              </p>
              <p>
                Whether you&apos;re inviting 20 guests or hosting a gathering of 100, we prepare fresh, comforting meals that make everyone feel at home.
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
                  src="/family-get-together.png"
                  alt="Family Gathering Buffet Setup"
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

      {/* Section 1: Food That Feels Familiar */}
      <section className="w-full bg-[#8C3316]/5 border-t border-b border-[#c5a880]/15 py-14 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 border border-[#c5a880]/25 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-[#8C3316] text-xl">✦</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#8C3316] font-semibold">
                Food That Feels Familiar
              </h2>
            </div>
            <div className="space-y-3 font-sans text-sm sm:text-base text-[#292927]/85 font-light leading-relaxed">
              <p>
                Great hospitality doesn&apos;t have to be extravagant.
              </p>
              <p>
                It simply has to make people feel welcome.
              </p>
              <p>
                Our menus are inspired by the flavours of Indian homes—food that&apos;s wholesome, satisfying and prepared with care.
              </p>
              <p className="font-medium text-[#8C3316]">
                Every meal is freshly cooked using quality ingredients and thoughtfully presented, combining the comfort of home-style recipes with the standards of professional hospitality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Perfect for Every Family Occasion */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-20 space-y-10">
        <div className="max-w-3xl space-y-3">
          <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
            EVERY CELEBRATION
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#8C3316] font-semibold">
            Perfect for Every Family Occasion
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#292927]/80 font-light">
            Our catering is ideal for:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FAMILY_OCCASIONS.map((occ, idx) => (
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
          Whatever the occasion, we&apos;ll help you create a menu that suits your guests and the atmosphere you want to create.
        </p>
      </section>

      {/* Section 3: Menus Curated Around Your Family */}
      <section className="w-full bg-[#8C3316]/5 border-t border-b border-[#c5a880]/15 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
              CUSTOM FAMILY MENUS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#8C3316] font-semibold">
              Menus Curated Around Your Family
            </h2>
            <div className="space-y-2 font-sans text-sm sm:text-base text-[#292927]/85 font-light leading-relaxed">
              <p>
                No two families celebrate in the same way.
              </p>
              <p>
                Some prefer traditional North Indian favourites, while others enjoy a mix of regional dishes and contemporary flavours. Our menus can include:
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5 pt-2">
            {MENU_OPTIONS.map((item, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-white border border-[#c5a880]/30 text-[#8C3316] font-serif text-sm sm:text-base font-semibold rounded-full shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="font-sans text-xs sm:text-sm text-[#292927]/75 italic">
            Every menu is customised based on your preferences, guest profile and dietary requirements.
          </p>
        </div>
      </section>

      {/* Section 4 & 5: Why Choose Dahi Cheeni & Hosting Made Simple */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Why Choose Us Grid */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
                WHY FAMILIES LOVE US
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#8C3316] font-semibold">
                Why Choose Dahi Cheeni?
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WHY_CHOOSE_REASONS.map((reason, idx) => (
                <div
                  key={idx}
                  className="bg-white/70 border border-[#c5a880]/20 rounded-xl p-5 space-y-1.5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="font-serif text-base md:text-lg text-[#8C3316] font-bold flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#c5a880]" />
                    {reason.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#292927]/85 font-light leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Hosting Made Simple Box */}
          <div className="lg:col-span-5">
            <div className="bg-white/90 border border-[#c5a880]/30 rounded-2xl p-6 sm:p-8 space-y-4 shadow-md">
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-full bg-[#8C3316]/10 text-[#8C3316]">
                  <Smile className="w-5 h-5" />
                </span>
                <h3 className="font-serif text-2xl text-[#8C3316] font-semibold">
                  Hosting Made Simple
                </h3>
              </div>
              <div className="space-y-3 font-sans text-sm sm:text-base text-[#292927]/85 font-light leading-relaxed">
                <p>
                  Planning a family gathering shouldn&apos;t feel overwhelming.
                </p>
                <p>
                  Our team works closely with you to understand your guest count, food preferences and serving style before recommending the most suitable menu.
                </p>
                <p className="font-medium text-[#8C3316]">
                  From preparation and delivery to service and clean-up, we take care of the details so you can simply enjoy being with the people who matter most.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Serving Families Across Delhi NCR */}
      <section className="w-full bg-[#8C3316]/5 border-t border-b border-[#c5a880]/15 py-16 md:py-20 text-center space-y-8">
        <div className="max-w-2xl mx-auto space-y-3">
          <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
            SERVICE AREA
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#8C3316] font-semibold">
            Serving Families Across Delhi NCR
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#292927]/80 font-light">
            We provide catering for family gatherings across:
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
          Whether you&apos;re hosting guests at home, in a clubhouse or another venue, Dahi Cheeni brings the same warmth, care and attention to every event.
        </p>
      </section>

      {/* Section 7: FAQs Section */}
      <FAQs items={FAMILY_GATHERING_FAQS} />

      {/* Section 8: CTA Section */}
      <section className="w-full bg-[#8C3316] text-[#FAF6F0] py-16 md:py-20 relative overflow-hidden z-10">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#c5a880]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#c5a880]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
            CREATE MEMORIES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF6F0] font-medium leading-tight tracking-wide">
            Bring Everyone Together Around Great Food
          </h2>
          <div className="font-sans text-sm sm:text-base text-[#FAF6F0]/80 font-light max-w-2xl mx-auto leading-relaxed space-y-2">
            <p>
              The most memorable gatherings are often the simplest ones.
            </p>
            <p>
              Good food. Meaningful conversations. The comfort of being surrounded by family.
            </p>
            <p>
              Let Dahi Cheeni take care of the catering while you focus on making memories that will last long after the meal is over.
            </p>
            <p className="font-medium text-[#FAF6F0] pt-2">
              Get in touch with us to plan your next family gathering.
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
