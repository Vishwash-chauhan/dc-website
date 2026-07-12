import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Utensils, Award, Leaf, Users, Sparkles } from "lucide-react";
import FAQs from "@/components/FAQs";

export const metadata: Metadata = {
  title: "Premium Home-Style Catering Services in Noida | Dahi Cheeni",
  description: "Exquisite home-style catering in Noida. We offer premium food setups for poojas, baby showers, griha pravesh, and family events across Noida and Greater Noida West.",
};

const NOIDA_CATERING_FAQS = [
  {
    question: "Do you deliver and set up catering across all sectors in Noida?",
    answer: "Yes, we serve all major residential and commercial sectors in Noida, including Central Noida (Sectors 50, 15, 21), Noida Expressway (Sectors 93, 137, 143, 150), Noida East (Sectors 62, 74, 75, 78), and Noida Extension (Greater Noida West).",
  },
  {
    question: "Can you provide strict onion- and garlic-free food for poojas in Noida?",
    answer: "Absolutely. Purity is our core promise. For devotional occasions like Griha Pravesh and Havans, we offer strict onion- and garlic-free preparation. The food is prepared in dedicated zones of our kitchen using separate utensils, cold-pressed oils, and pure ghee.",
  },
  {
    question: "How do you handle security and cargo lift logistics in Noida high-rise societies?",
    answer: "Our team is highly experienced in catering to high-rise apartments in Noida. We coordinate entry permissions at security gates, manage cargo elevator logistics, and ensure clean, quiet, and professional buffet setups inside your home or society clubhouses.",
  },
  {
    question: "Do you cater to smaller family gatherings of 20-30 guests in Noida?",
    answer: "Yes, we specialize in intimate events. Our catering packages are perfectly optimized for small to medium gatherings of 20 to 300+ guests, bringing premium home-style food and warm service to your private celebrations.",
  },
  {
    question: "What is your policy regarding travel and logistics charges in Noida?",
    answer: "Logistics and transportation costs are calculated based on the distance to your Noida sector from our base. All costs are shared transparently and itemized upfront in your custom quotation, with no hidden charges.",
  }
];

export default function NoidaLandingPage() {
  const regions = [
    {
      name: "Central Noida",
      areas: ["Sector 15 & 21", "Sector 26 & 30", "Sector 39 & 44", "Sector 50 & 51", "Shatabdi Vihar", "Noida Golf Course Area"]
    },
    {
      name: "Noida Expressway",
      areas: ["Sector 93 (Parsvnath/ATS)", "Sector 137 (Purvanchal/Supertech)", "Sector 143 (Gulshan)", "Sector 150 (ATS Pristine)", "Sector 168 (Golden Palms)"]
    },
    {
      name: "Noida East & Sectors",
      areas: ["Sector 62 (Residential & Office)", "Sector 74 & 75", "Sector 76 & 78", "Sector 120 (Prateek Laurel)", "Sector 121 & 122"]
    },
    {
      name: "Noida Ext. (Gr. Noida W)",
      areas: ["Gaur City Sectors", "Techzone 4", "Sector 1 & 2 (Gr. Noida West)", "Sector 4 & 16", "Ecovillage Communities"]
    }
  ];

  const customOccasions = [
    {
      title: "Family Get-Togethers",
      desc: "Delight all generations with multi-cuisine spreads and street-style live counters, ideal for anniversaries, birthdays, and reunions.",
      icon: <Users className="w-6 h-6 text-[#74290F]" strokeWidth={1.5} />,
      image: "/family-get-together.png"
    },
    {
      title: "Mundan & Janeu rituals",
      desc: "Honor traditional milestones with authentic heritage recipes cooked fresh with strict hygiene and absolute purity.",
      icon: <Award className="w-6 h-6 text-[#74290F]" strokeWidth={1.5} />,
      image: "/mundan-janeu.png"
    },
    {
      title: "Expressway Griha Pravesh",
      desc: "Welcome auspicious beginnings in Noida's premium residential towers with dedicated buffet setups and traditional menus.",
      icon: <Utensils className="w-6 h-6 text-[#74290F]" strokeWidth={1.5} />,
      image: "/griha-pravesh.png"
    },
    {
      title: "Devotional Poojas & Havans",
      desc: "Strictly prepared options (onion & garlic free) using segregated utensils, cold-pressed oils, and pure ghee.",
      icon: <Leaf className="w-6 h-6 text-[#74290F]" strokeWidth={1.5} />,
      image: "/pooja-havan.png"
    }
  ];

  return (
    <main className="min-h-screen bg-[#FAF6F0] pt-24 md:pt-28 flex flex-col justify-between overflow-x-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-24 right-0 w-96 h-96 rounded-full bg-[#c5a880]/10 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-[80vh] left-0 w-96 h-96 rounded-full bg-[#74290F]/5 blur-3xl -z-10 pointer-events-none" />

      {/* 1. Redesigned Centered Hero Section */}
      <section className="relative w-full py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF6F0] z-10 border-b border-[#c5a880]/15">
        <div className="max-w-4xl mx-auto text-center space-y-6 flex flex-col items-center">
          <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
            TRADITIONAL CATERING IN NOIDA
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[56px] text-[#74290F] font-semibold leading-[1.15] tracking-wide">
            Celebrate Auspicious Milestones <br />
            with Pure, Home-Style Foods
          </h1>

          {/* Decorative Gold Leaf/Flower Divider */}
          <div className="flex items-center gap-3 justify-center">
            <div className="h-[1px] w-10 bg-[#c5a880]/30" />
            <span className="text-[#c5a880] text-xs">✿</span>
            <div className="h-[1px] w-10 bg-[#c5a880]/30" />
          </div>

          <p className="font-sans text-sm sm:text-base text-[#292927]/90 font-light leading-relaxed max-w-2xl mx-auto">
            From central residential sectors to Expressway condominiums and Greater Noida West, we bring shudh purity standards, generational heritage recipes, and elegant hospitality to your gatherings of 20 to 300+ guests.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2 w-full sm:w-auto">
            <Link
              href="/qet_a_quote"
              className="px-8 py-3.5 bg-[#74290F] hover:bg-[#61220C] text-white font-sans text-xs sm:text-sm font-semibold tracking-wider text-center rounded-md shadow-md transition-all duration-300 w-full sm:w-auto cursor-pointer"
            >
              Get A Quote
            </Link>
            <Link
              href="/menu"
              className="px-8 py-3.5 bg-transparent hover:bg-[#74290F]/5 text-[#74290F] border border-[#74290F] font-sans text-xs sm:text-sm font-semibold tracking-wider text-center rounded-md transition-all duration-300 w-full sm:w-auto text-center"
            >
              Explore Menu Offerings
            </Link>
          </div>

          {/* Large Centered Image Card */}
          <div className="w-full max-w-[700px] aspect-[16/10] sm:aspect-[16/9] rounded-3xl bg-[#74290F] p-2.5 shadow-xl transition-all duration-500 hover:scale-[1.01] mt-8 relative">
            <div className="absolute inset-3 border border-[#c5a880]/30 rounded-2xl pointer-events-none z-10" />
            <div className="relative w-full h-full rounded-[14px] overflow-hidden">
              <Image
                src="/family-get-together.png"
                alt="Dahi Cheeni Premium Family Catering Setup in Noida"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
                priority
              />
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
                <Users className="w-5.5 h-5.5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#74290F]">Multi-Generational Taste</h3>
              <p className="font-sans text-xs sm:text-sm text-[#292927]/85 font-light leading-relaxed">
                Menus and spice levels adjusted carefully to appeal to children, parents, and elder family members, recreating traditional home flavors.
              </p>
            </div>

            <div className="bg-[#FAF6F0]/80 border border-[#c5a880]/15 rounded-2xl p-6 text-center space-y-3.5 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-[#74290F]/5 rounded-full flex items-center justify-center text-[#74290F] mx-auto border border-[#74290F]/10">
                <Leaf className="w-5.5 h-5.5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#74290F]">100% Veg Purity Standard</h3>
              <p className="font-sans text-xs sm:text-sm text-[#292927]/85 font-light leading-relaxed">
                Segregated cooking units, zero commercial preservatives or artificial coloring, and strict guidelines when requested.
              </p>
            </div>

            <div className="bg-[#FAF6F0]/80 border border-[#c5a880]/15 rounded-2xl p-6 text-center space-y-3.5 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-[#74290F]/5 rounded-full flex items-center justify-center text-[#74290F] mx-auto border border-[#74290F]/10">
                <Sparkles className="w-5.5 h-5.5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#74290F]">Condominium Logistics</h3>
              <p className="font-sans text-xs sm:text-sm text-[#292927]/85 font-light leading-relaxed">
                Quiet, seamless setup inside Noida high-rises. We coordinate guard entries, elevator freight, and leave spaces perfectly clean.
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
              NOIDA CATERING SERVICES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#74290F] font-semibold tracking-wide">
              Occasions We Cater in Noida
            </h2>
            <div className="flex items-center gap-3 mt-3 w-full justify-center">
              <div className="h-[1px] w-12 bg-[#c5a880]/30" />
              <span className="text-[#c5a880] text-sm">✿</span>
              <div className="h-[1px] w-12 bg-[#c5a880]/30" />
            </div>
            <p className="font-sans text-sm text-[#292927]/85 font-light max-w-xl mx-auto mt-4 leading-relaxed">
              We design specific menus and clean, elegant table setups tailored precisely for Noida family ceremonies.
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

      {/* 4. Highlight Section: pooja-havan showcase */}
      <section className="w-full py-16 md:py-24 bg-[#74290F]/5 border-b border-[#c5a880]/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column: Copy content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
                SPECIALIZED PURITY KITCHEN
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#74290F] font-semibold leading-tight tracking-wide">
                Dedicated Purity for Sacred Celebrations
              </h2>
              <div className="h-[1px] w-16 bg-[#c5a880]/40" />

              <p className="font-sans text-base text-[#292927]/90 font-light leading-relaxed">
                For Havans, Poojas, and Griha Pravesh ceremonies that require strict adherence to scriptural guidelines, Dahi Cheeni provides premium onion- and garlic-free menus.
              </p>

              <p className="font-sans text-sm text-[#292927]/80 font-light leading-relaxed">
                We respect your family&apos;s faith and traditions. All onion- and garlic-free catering is prepared under direct chef supervision, utilizing segregated cookware, separate kitchen spaces, premium oils, and pure ghee. We handle the entire process with the utmost sanctity and hygiene.
              </p>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[450px] aspect-[4/3] rounded-3xl bg-[#74290F] p-2.5 shadow-xl">
                <div className="absolute inset-3 border border-[#c5a880]/30 rounded-2xl pointer-events-none z-10" />
                <div className="relative w-full h-full rounded-[14px] overflow-hidden">
                  <Image
                    src="/pooja-havan.png"
                    alt="Traditional Pooja Havan Catering setup in Noida"
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
              NOIDA COVERAGE AREAS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#74290F] font-semibold tracking-wide">
              Locations We Serve in Noida
            </h2>
            <div className="flex items-center gap-3 mt-3 w-full justify-center">
              <div className="h-[1px] w-10 bg-[#c5a880]/30" />
              <span className="text-[#c5a880] text-xs">✿</span>
              <div className="h-[1px] w-10 bg-[#c5a880]/30" />
            </div>
            <p className="font-sans text-sm text-[#292927]/80 font-light max-w-2xl mx-auto mt-4 leading-relaxed">
              We provide full buffet setups, deliveries, and hospitality across all key sectors and societies in Noida:
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

      {/* 6. Noida FAQs Section */}
      <FAQs items={NOIDA_CATERING_FAQS} />

      {/* 7. CTA / Custom Quote */}
      <section className="w-full bg-[#74290F] text-[#FAF6F0] py-16 md:py-20 relative overflow-hidden z-10">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#c5a880]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#c5a880]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
            GET IN TOUCH
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF6F0] font-medium leading-tight tracking-wide">
            Plan Your Auspicious Noida Menu
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#FAF6F0]/80 font-light max-w-xl mx-auto leading-relaxed">
            Let us design the perfect culinary journey for your next occasion. Submit your requirements and get a customized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              href="/qet_a_quote"
              className="px-8 py-3.5 bg-[#FAF6F0] hover:bg-[#FAF6F0]/90 text-[#74290F] font-sans text-sm font-semibold tracking-wider rounded-md shadow-md transition-all duration-300 w-full sm:w-auto text-center cursor-pointer font-semibold"
            >
              Get A Quote
            </Link>
            <a
              href="https://wa.me/918130964374"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-transparent hover:bg-white/5 text-[#FAF6F0] border border-[#FAF6F0]/40 hover:border-[#FAF6F0] font-sans text-sm font-semibold tracking-wider rounded-md transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.006c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
