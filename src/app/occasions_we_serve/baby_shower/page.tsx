import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FAQs from "@/components/FAQs";
import { Baby, Sparkles, Check, ChevronRight, MapPin, Heart, UtensilsCrossed, Calendar, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Baby Celebration Catering in Delhi NCR | Dahi Cheeni",
  description: "Thoughtfully curated catering for Baby Showers, Naamkaran, Annaprashan, Mundan & First Birthdays across Delhi NCR by Dahi Cheeni. Home-style food and warm hospitality.",
};

const BABY_CELEBRATION_FAQS = [
  {
    question: "Can menus be customised?",
    answer: "Yes. Every menu is tailored according to your celebration and guest preferences.",
  },
  {
    question: "Do you offer satvik food?",
    answer: "Absolutely. Satvik menus can be arranged for religious ceremonies and traditional gatherings.",
  },
  {
    question: "Can you cater at home?",
    answer: "Yes. Most of our baby celebration events are hosted in clients' homes.",
  },
  {
    question: "Do you provide serving staff?",
    answer: "Yes. Professional service staff can be arranged whenever required.",
  },
  {
    question: "Can we combine kids' and adults' menus?",
    answer: "Certainly. We'll help you create a menu that caters to guests of all ages.",
  },
];

const BABY_MILESTONES = [
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
  {
    title: "First Birthday Celebrations",
    desc: "Your baby's first birthday is a milestone you'll remember forever. Whether you're hosting a celebration at home or another venue, we'll create a menu that's loved by children and adults alike.",
  },
];

const FOOD_OPTIONS = [
  "Traditional North Indian Meals",
  "Breakfast & Brunch Menus",
  "Lunch & Dinner Buffets",
  "Satvik Options",
  "Regional Specialities",
  "Live Food Stations",
  "Fresh Desserts",
  "Tea & Coffee Counters",
];

const WHY_CHOOSE_PILLARS = [
  "Freshly prepared meals.",
  "Warm service.",
  "Comforting flavours.",
  "Beautiful presentation.",
  "Attention to detail.",
];

const LOCATIONS = [
  { name: "New Delhi", href: "/delhi" },
  { name: "Gurgaon", href: "/gurugram" },
  { name: "Noida", href: "/noida" },
  { name: "Greater Noida", href: "/noida" },
  { name: "Ghaziabad", href: "/ghaziabad" },
  { name: "Faridabad", href: "/faridabad" },
];

export default function BabyShowerPage() {
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
          <span className="text-[#8C3316] font-medium">Baby Celebration Catering</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-full bg-[#8C3316]/5 text-[#8C3316] border border-[#c5a880]/20">
                <Baby className="w-4 h-4" />
              </span>
              <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
                LIFE&apos;S SWEETEST MILESTONES
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#8C3316] font-semibold leading-tight tracking-wide">
              Baby Celebration Catering in Delhi NCR
            </h1>

            <h2 className="font-sans text-lg sm:text-xl text-[#8C3316] font-medium leading-relaxed italic">
              Thoughtfully Curated Catering for Life&apos;s Sweetest Milestones
            </h2>

            <div className="space-y-4 font-sans text-sm sm:text-base text-[#292927]/85 font-light leading-relaxed">
              <p>
                The arrival of a baby brings with it some of life&apos;s most cherished celebrations.
              </p>
              <p>
                From welcoming your little one into the family to celebrating each precious milestone, these occasions are filled with blessings, traditions and moments shared with the people who matter most.
              </p>
              <p>
                At Dahi Cheeni, we provide home-style catering for baby celebrations across Delhi NCR, helping families host warm, memorable gatherings with thoughtfully prepared food and heartfelt hospitality.
              </p>
              <p>
                Whether you&apos;re planning a Naamkaran ceremony, Annaprashan, Mundan, Baby Shower or a First Birthday celebration at home, we&apos;ll take care of the food so you can focus on creating memories with your loved ones.
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
                  src="/baby-celebrations.png"
                  alt="Baby Celebration Catering Setup"
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

      {/* Section 1: Catering for Every Baby Milestone */}
      <section className="w-full bg-[#8C3316]/5 border-t border-b border-[#c5a880]/15 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
              SPECIAL MILESTONES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#8C3316] font-semibold">
              Catering for Every Baby Milestone
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#292927]/80 font-light italic">
              Every family celebrates differently, and every occasion deserves food that&apos;s prepared with care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BABY_MILESTONES.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/80 border border-[#c5a880]/20 rounded-2xl p-6 space-y-2 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[#c5a880] text-sm">✦</span>
                    <h3 className="font-serif text-lg md:text-xl text-[#8C3316] font-bold">
                      {item.title}
                    </h3>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-[#292927]/85 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Home-Style Food Everyone Enjoys */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-20 space-y-8">
        <div className="max-w-3xl space-y-3">
          <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
            FAMILY-FAVORITE MENUS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#8C3316] font-semibold">
            Home-Style Food Everyone Enjoys
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#292927]/85 font-light leading-relaxed">
            Family celebrations bring together grandparents, relatives, friends and young children. That&apos;s why our menus are designed to offer something for everyone. Choose from:
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {FOOD_OPTIONS.map((opt, idx) => (
            <span
              key={idx}
              className="px-4 py-2.5 bg-white border border-[#c5a880]/30 text-[#8C3316] font-serif text-sm sm:text-base font-semibold rounded-full shadow-sm hover:border-[#8C3316] transition-colors"
            >
              {opt}
            </span>
          ))}
        </div>

        <p className="font-sans text-xs sm:text-sm text-[#292927]/75 italic pt-2">
          Every menu is customised to suit your family traditions, dietary preferences and guest profile.
        </p>
      </section>

      {/* Section 3 & 4: Why Families Choose Dahi Cheeni & Personal Hospitality */}
      <section className="w-full bg-[#8C3316]/5 border-t border-b border-[#c5a880]/15 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Why Choose Us */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
                  TRUSTED CATERING
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#8C3316] font-semibold">
                  Why Families Choose Dahi Cheeni
                </h2>
                <p className="font-sans text-sm sm:text-base text-[#292927]/85 font-light leading-relaxed">
                  Some celebrations don&apos;t need extravagance. They simply need good food and thoughtful hospitality. Families trust Dahi Cheeni because we focus on what truly matters.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {WHY_CHOOSE_PILLARS.map((pillar, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white/70 border border-[#c5a880]/20 rounded-xl p-3.5 shadow-sm">
                    <Check className="w-4 h-4 text-[#8C3316] flex-shrink-0" />
                    <span className="font-serif text-sm sm:text-base text-[#8C3316] font-medium">
                      {pillar}
                    </span>
                  </div>
                ))}
              </div>

              <p className="font-sans text-xs sm:text-sm text-[#292927]/80 italic pt-2">
                It&apos;s a simple approach that allows you to spend less time worrying about the food and more time enjoying your celebration.
              </p>
            </div>

            {/* Personal Hospitality Box */}
            <div className="lg:col-span-5">
              <div className="bg-white/90 border border-[#c5a880]/30 rounded-2xl p-6 sm:p-8 space-y-4 shadow-md">
                <div className="flex items-center gap-3">
                  <span className="p-2 rounded-full bg-[#8C3316]/10 text-[#8C3316]">
                    <Heart className="w-5 h-5" />
                  </span>
                  <h3 className="font-serif text-2xl text-[#8C3316] font-semibold">
                    Hospitality That Feels Personal
                  </h3>
                </div>
                <div className="space-y-3 font-sans text-sm sm:text-base text-[#292927]/85 font-light leading-relaxed">
                  <p>
                    Every gathering is different.
                  </p>
                  <p>
                    Some families host an intimate lunch with grandparents.
                  </p>
                  <p>
                    Others invite extended family and friends for a larger celebration.
                  </p>
                  <p>
                    Whatever the size of your gathering, our team takes the time to understand your occasion before recommending the most suitable menu and style of service.
                  </p>
                  <p className="font-serif italic font-medium text-[#8C3316] pt-2">
                    Because no two celebrations should ever feel exactly the same.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Catering Across Delhi NCR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-20 text-center space-y-8">
        <div className="max-w-2xl mx-auto space-y-3">
          <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
            SERVICE AREA
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#8C3316] font-semibold">
            Catering Across Delhi NCR
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#292927]/80 font-light">
            We proudly cater baby celebrations across:
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
          Whether your celebration is at home, in a clubhouse or another venue, we&apos;ll bring the same warmth and hospitality to every event.
        </p>
      </section>

      {/* Section 6: FAQs Section */}
      <FAQs items={BABY_CELEBRATION_FAQS} />

      {/* Section 7: CTA Section */}
      <section className="w-full bg-[#8C3316] text-[#FAF6F0] py-16 md:py-20 relative overflow-hidden z-10">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#c5a880]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#c5a880]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
            PLAN YOUR CELEBRATION
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF6F0] font-medium leading-tight tracking-wide">
            Celebrate Every Milestone with Dahi Cheeni
          </h2>
          <div className="font-sans text-sm sm:text-base text-[#FAF6F0]/80 font-light max-w-2xl mx-auto leading-relaxed space-y-2">
            <p>
              Every baby&apos;s journey is filled with beautiful firsts.
            </p>
            <p>
              From the first blessing to the first birthday, we&apos;re honoured to help families celebrate these special moments with food that&apos;s thoughtfully prepared, beautifully presented and served with genuine warmth.
            </p>
            <p className="font-medium text-[#FAF6F0] pt-2">
              Get in touch with us to plan a menu that&apos;s perfect for your family&apos;s celebration.
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
