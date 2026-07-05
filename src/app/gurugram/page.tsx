import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Utensils, Award, Leaf, Users, Sparkles } from "lucide-react";
import FAQs from "@/components/FAQs";

export const metadata: Metadata = {
  title: "Premium Home-Style Vegetarian Catering Services in Gurugram | Dahi Cheeni",
  description: "Exquisite home-style vegetarian & satvik catering in Gurugram. We provide premium food setups for poojas, baby showers, griha pravesh, and corporate events across DLF, Golf Course Road, and Sohna Road.",
};

const GURUGRAM_CATERING_FAQS = [
  {
    question: "Do you serve high-rise apartments and condominiums in Gurugram?",
    answer: "Yes, we specialize in high-rise condominium catering. Our team is fully trained to coordinate with society security, manage cargo elevator logistics, and set up immaculate buffets inside apartment spaces or community halls across Gurugram.",
  },
  {
    question: "Do you cater to corporate office poojas and events in Gurugram?",
    answer: "Absolutely! We cater to corporate office poojas, Diwali celebrations, corporate lunch gatherings, and new office inaugurations. We offer complete corporate catering setups with high-quality, hygiene-first Satvik options.",
  },
  {
    question: "How do you maintain strict Satvik purity for religious ceremonies?",
    answer: "Purity is our core value. For poojas, havans, and griha pravesh, we follow strict Satvik preparation guidelines (no onion, no garlic). The meals are cooked in segregated kitchen zones using dedicated utensils, pure cow ghee, and cold-pressed oils.",
  },
  {
    question: "What is the guest count range for Dahi Cheeni's catering in Gurugram?",
    answer: "We cater to intimate gatherings starting from 20 guests up to medium-large celebrations of 300+ guests. We focus on providing personalized service and premium quality for small to mid-size family events.",
  },
  {
    question: "Are DLF, Golf Course Road, and Sohna Road covered in your delivery service area?",
    answer: "Yes, we serve all major sectors in Gurugram, including DLF Phases 1-5, Golf Course Road, Golf Course Extension Road, Sohna Road, Nirvana Country, and New Gurugram sectors along the Dwarka Expressway.",
  }
];

export default function GurugramLandingPage() {
  const regions = [
    {
      name: "Golf Course Road & Ext.",
      areas: ["DLF Phase 5 (Aralias/Magnolias)", "Sector 53 & 54", "Sector 56 & 57", "Sector 65 & 66", "Golf Course Ext. Road", "Nirvana Country"]
    },
    {
      name: "DLF City & Cyber City",
      areas: ["DLF Phase 1 & 2", "DLF Phase 3 & 4", "Sector 25 & 27", "Belvedere Towers", "Cyber Hub Adjacent Areas", "MG Road"]
    },
    {
      name: "Sohna Road & Central",
      areas: ["Sector 47, 48 & 49", "Rosewood City", "Vatika City", "Sohna Road Corridor", "South City 1 & 2", "Sushant Lok 1 & 2"]
    },
    {
      name: "New Gurugram & Dwarka Expy",
      areas: ["Sector 81, 82 & 83", "Sector 84 & 85", "Sector 90 & 92", "Sobha City", "Experion Windchants", "Dwarka Expressway"]
    }
  ];

  const customOccasions = [
    {
      title: "High-Rise Griha Pravesh",
      desc: "Delight guests in Gurugram's premier societies with comforting, home-style housewarming feasts prepared fresh on the day.",
      icon: <Award className="w-6 h-6 text-[#74290F]" strokeWidth={1.5} />,
      image: "/griha-pravesh.png"
    },
    {
      title: "Office & Home Poojas",
      desc: "Maintain absolute sanctity with 100% onion-garlic free Satvik catering options, prepared with separate utensils and pure cow ghee.",
      icon: <Leaf className="w-6 h-6 text-[#74290F]" strokeWidth={1.5} />,
      image: "/pooja-havan.png"
    },
    {
      title: "Villa & Apartment Parties",
      desc: "Elegant and sophisticated vegetarian spreads with live chaat stalls for premium residential dinner parties and get-togethers.",
      icon: <Utensils className="w-6 h-6 text-[#74290F]" strokeWidth={1.5} />,
      image: "/family-get-together.png"
    },
    {
      title: "Family Milestones",
      desc: "Personalized layouts and customized menus for baby showers, naming ceremonies, and intimate sagans for up to 300+ guests.",
      icon: <Users className="w-6 h-6 text-[#74290F]" strokeWidth={1.5} />,
      image: "/baby-celebrations.png"
    }
  ];

  return (
    <main className="min-h-screen bg-[#FAF6F0] pt-24 md:pt-28 flex flex-col justify-between overflow-x-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-24 left-0 w-96 h-96 rounded-full bg-[#c5a880]/10 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-[80vh] right-0 w-96 h-96 rounded-full bg-[#74290F]/5 blur-3xl -z-10 pointer-events-none" />

      {/* 1. Redesigned Split-Pane Hero Section (Image on Left, Text on Right) */}
      <section className="relative w-full py-12 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF6F0] z-10 border-b border-[#c5a880]/15">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left side: Styled Showcase Image Card (using experience-service.png) */}
            <div className="lg:col-span-6 flex justify-center items-center relative py-4 order-2 lg:order-1">
              <div className="absolute w-72 h-72 rounded-full bg-[#c5a880]/15 blur-3xl -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <div className="relative w-full max-w-[480px] aspect-[4/3] rounded-3xl bg-[#74290F] p-2.5 shadow-xl transition-all duration-500 hover:scale-[1.02] transform -rotate-1 hover:rotate-0">
                <div className="absolute inset-3 border border-[#c5a880]/30 rounded-2xl pointer-events-none z-10" />
                <div className="relative w-full h-full rounded-[14px] overflow-hidden">
                  <Image
                    src="/experience-service.png"
                    alt="Premium Indian Vegetarian Catering Service in Gurugram"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right side: Text content */}
            <div className="lg:col-span-6 flex flex-col justify-center text-left space-y-6 order-1 lg:order-2">
              <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
                PREMIUM VEGETARIAN CATERING IN GURUGRAM
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-[54px] text-[#74290F] font-semibold leading-[1.15] tracking-wide">
                Exquisite Home-Style <br />
                Catering for Gurugram&apos;s <br />
                Premium Events
              </h1>

              {/* Decorative Gold Leaf/Flower Divider */}
              <div className="flex items-center gap-3">
                <div className="h-[1px] w-10 bg-[#c5a880]/30" />
                <span className="text-[#c5a880] text-xs">✿</span>
                <div className="h-[1px] w-10 bg-[#c5a880]/30" />
              </div>

              <p className="font-sans text-sm sm:text-base text-[#292927]/90 font-light leading-relaxed max-w-xl">
                Elevating your celebrations with 100% vegetarian satvik purity, authentic heritage flavors, and clean cooking practices. We seamlessly coordinate high-rise logistics and corporate setups across DLF, Golf Course Road, and Nirvana Country.
              </p>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 items-center pt-2">
                <Link
                  href="/qet_a_quote"
                  className="px-8 py-3.5 bg-[#74290F] hover:bg-[#61220C] text-white font-sans text-xs sm:text-sm font-semibold tracking-wider text-center rounded-md shadow-md transition-all duration-300 w-full sm:w-auto cursor-pointer"
                >
                  Get a Custom Quote
                </Link>
                <Link
                  href="/menu"
                  className="px-8 py-3.5 bg-transparent hover:bg-[#74290F]/5 text-[#74290F] border border-[#74290F] font-sans text-xs sm:text-sm font-semibold tracking-wider text-center rounded-md transition-all duration-300 w-full sm:w-auto text-center"
                >
                  Explore Menus
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Key Highlights Info-Grid */}
      <section className="w-full py-16 md:py-20 bg-white/40 border-b border-[#c5a880]/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FAF6F0]/80 border border-[#c5a880]/15 rounded-2xl p-6 text-center space-y-3.5 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-[#74290F]/5 rounded-full flex items-center justify-center text-[#74290F] mx-auto border border-[#74290F]/10">
                <MapPin className="w-5.5 h-5.5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#74290F]">Condo & High-Rise Experts</h3>
              <p className="font-sans text-xs sm:text-sm text-[#292927]/85 font-light leading-relaxed">
                Trained team to coordinate security gate clearances, cargo elevator access, and structured logistics for high-rise apartment spaces.
              </p>
            </div>

            <div className="bg-[#FAF6F0]/80 border border-[#c5a880]/15 rounded-2xl p-6 text-center space-y-3.5 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-[#74290F]/5 rounded-full flex items-center justify-center text-[#74290F] mx-auto border border-[#74290F]/10">
                <Leaf className="w-5.5 h-5.5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#74290F]">Corporate Auspicious Catering</h3>
              <p className="font-sans text-xs sm:text-sm text-[#292927]/85 font-light leading-relaxed">
                Dedicated setups for corporate office openings, Diwali celebrations, and Board Room launches with strict onion-garlic free Satvik foods.
              </p>
            </div>

            <div className="bg-[#FAF6F0]/80 border border-[#c5a880]/15 rounded-2xl p-6 text-center space-y-3.5 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-[#74290F]/5 rounded-full flex items-center justify-center text-[#74290F] mx-auto border border-[#74290F]/10">
                <Sparkles className="w-5.5 h-5.5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#74290F]">100% Homemade Freshness</h3>
              <p className="font-sans text-xs sm:text-sm text-[#292927]/85 font-light leading-relaxed">
                Lightly seasoned fresh meals made on the day with cold-pressed oils. Free from artificial enhancers, additives, or synthetic colorings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Bespoke Occasions Grid */}
      <section className="w-full py-16 md:py-24 bg-[#FAF6F0] relative z-10 border-b border-[#c5a880]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 flex flex-col items-center">
            <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase mb-2 block">
              GURUGRAM CELEBRATION SPECIALTIES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#74290F] font-semibold tracking-wide">
              Occasions We Cater To in Gurugram
            </h2>
            <div className="flex items-center gap-3 mt-3 w-full justify-center">
              <div className="h-[1px] w-12 bg-[#c5a880]/30" />
              <span className="text-[#c5a880] text-sm">✿</span>
              <div className="h-[1px] w-12 bg-[#c5a880]/30" />
            </div>
            <p className="font-sans text-sm text-[#292927]/85 font-light max-w-xl mx-auto mt-4 leading-relaxed">
              We design custom culinary layouts and wholesome vegetarian menus tailored specifically for Gurugram residential and commercial sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {customOccasions.map((item, idx) => (
              <div key={idx} className="bg-white border border-[#c5a880]/15 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group">
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#74290F]/5" />
                </div>
                <div className="p-6 flex flex-col items-center text-center flex-grow space-y-2.5">
                  <div className="w-10 h-10 bg-[#74290F]/5 rounded-full flex items-center justify-center text-[#74290F] border border-[#74290F]/5">
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-lg text-[#74290F] font-bold tracking-wide">{item.title}</h3>
                  <p className="font-sans text-xs md:text-[13px] text-[#292927]/75 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Highlight Section: plan-celebration showcase */}
      <section className="w-full py-16 md:py-24 bg-[#74290F]/5 border-b border-[#c5a880]/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Copy content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
                TRADITIONAL CULINARY VALUES
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#74290F] font-semibold leading-tight tracking-wide">
                Pure Traditions for Modern Lifestyles
              </h2>
              <div className="h-[1px] w-16 bg-[#c5a880]/40" />

              <p className="font-sans text-base text-[#292927]/90 font-light leading-relaxed">
                At Dahi Cheeni, we believe that modern lifestyles in Gurugram deserve authentic traditional flavors made with ultimate purity. Whether hosting a pooja in a DLF condominium or a family gathering in a Golf Course Road villa, we handle everything with precision.
              </p>
              
              <p className="font-sans text-sm text-[#292927]/80 font-light leading-relaxed">
                Our food is cooked using pure mustard oil, ghee, and fresh vegetables sourced daily. We respect the culinary heritage of our elders, delivering home-style tastes without shortcuts, artificial coloring, or heavy spices.
              </p>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[450px] aspect-[4/3] rounded-3xl bg-[#74290F] p-2.5 shadow-xl">
                <div className="absolute inset-3 border border-[#c5a880]/30 rounded-2xl pointer-events-none z-10" />
                <div className="relative w-full h-full rounded-[14px] overflow-hidden">
                  <Image
                    src="/plan-celebration.png"
                    alt="Traditional Premium Thali Feast Setup in Gurugram"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 35vw"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Neighborhoods We Serve Section */}
      <section className="w-full py-16 md:py-20 bg-[#FAF6F0] relative z-10 border-b border-[#c5a880]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase mb-2 block">
              GURUGRAM SERVICE AREAS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#74290F] font-semibold tracking-wide">
              Locations We Serve in Gurugram
            </h2>
            <div className="flex items-center gap-3 mt-3 w-full justify-center">
              <div className="h-[1px] w-10 bg-[#c5a880]/30" />
              <span className="text-[#c5a880] text-xs">✿</span>
              <div className="h-[1px] w-10 bg-[#c5a880]/30" />
            </div>
            <p className="font-sans text-sm text-[#292927]/80 font-light max-w-2xl mx-auto mt-4 leading-relaxed">
              We provide full buffet layouts, catering logistics, and professional service across these prominent Gurugram locations:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region, idx) => (
              <div key={idx} className="bg-white/80 border border-[#c5a880]/20 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-2.5 mb-4 text-[#74290F]">
                  <MapPin className="w-5 h-5 flex-shrink-0" />
                  <h3 className="font-serif text-xl font-bold tracking-wide">{region.name}</h3>
                </div>
                <ul className="space-y-2.5">
                  {region.areas.map((area, areaIdx) => (
                    <li key={areaIdx} className="font-sans text-[14px] text-[#292927]/85 font-light flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#c5a880] rounded-full flex-shrink-0" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Gurugram FAQs Section */}
      <FAQs items={GURUGRAM_CATERING_FAQS} />

      {/* 7. CTA / Custom Quote */}
      <section className="w-full bg-[#74290F] text-[#FAF6F0] py-16 md:py-20 relative overflow-hidden z-10">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#c5a880]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#c5a880]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
            REQUEST A QUOTE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF6F0] font-medium leading-tight tracking-wide">
            Plan Your Auspicious Gurugram Menu
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#FAF6F0]/80 font-light max-w-xl mx-auto leading-relaxed">
            Let us design the perfect culinary journey for your next occasion. Submit your requirements and get a customized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              href="/qet_a_quote"
              className="px-8 py-3.5 bg-[#FAF6F0] hover:bg-[#FAF6F0]/90 text-[#74290F] font-sans text-sm font-semibold tracking-wider rounded-md shadow-md transition-all duration-300 w-full sm:w-auto text-center cursor-pointer font-semibold"
            >
              Get a Custom Quote
            </Link>
            <a
              href="https://wa.me/918130964374"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-transparent hover:bg-white/5 text-[#FAF6F0] border border-[#FAF6F0]/40 hover:border-[#FAF6F0] font-sans text-sm font-semibold tracking-wider rounded-md transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.006c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
