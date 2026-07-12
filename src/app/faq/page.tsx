"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, ChevronDown, Sparkles, X, ArrowLeft, Calendar, HelpCircle, Shield, Truck } from "lucide-react";

// List of all FAQs compiled from the codebase
const allFaqs = [
  // Category: booking (Booking & General)
  {
    question: "What makes Dahi Cheeni's catering service unique?",
    answer: "We focus on clean, home-style food prepared fresh with heritage recipes, premium ingredients, and strict hygiene standards. We avoid commercial shortcuts, artificial colorings, and heavy preservatives to bring you genuine home-style flavors.",
    category: "booking"
  },
  {
    question: "What is the meaning behind the name 'Dahi Cheeni'?",
    answer: "Serving 'Dahi Cheeni' (yogurt mixed with sugar) is a traditional Indian custom offered before beginning any journey, exam, or auspicious event. It represents good luck, pure intentions, and sweet beginnings. We chose this name because we treat your family's celebrations with that same spirit of auspiciousness and care.",
    category: "booking"
  },
  {
    question: "What types of celebrations and occasions do you cater to?",
    answer: "We cater to spiritual gatherings (poojas, havans, bhajan sandhyas), baby shower, griha pravesh ceremonies, mundan-janeu celebrations, prayer meetings, and intimate family wedding functions (up to 300+ guests).",
    category: "booking"
  },
  {
    question: "Do you cater events other than spiritual poojas?",
    answer: "Yes! While we are widely appreciated for our pure pooja catering, we provide full-service catering for baby shower, griha pravesh, family get-togethers, prayer meetings, corporate lunches, and intimate weddings up to 1000+ guests.",
    category: "booking"
  },
  {
    question: "What is the minimum guest count required for catering bookings?",
    answer: "We cater to events starting from 15 guests up to 1000+ guests. Whether you're hosting an intimate family get-together, a pooja, or a festive wedding ceremony, we tailor our quantities and service to fit.",
    category: "booking"
  },
  {
    question: "How far in advance should I request a quote or book my date?",
    answer: "We recommend booking at least 5-7 days in advance for smaller family gatherings. For larger occasions, weddings, or peak festive seasons, booking 2-3 weeks in advance secures availability and lets us coordinate fresh sourcing perfectly.",
    category: "booking"
  },
  {
    question: "Can we request a menu tasting session before booking?",
    answer: "Yes. For larger events, weddings, or corporate contracts, we are happy to arrange menu tasting sessions. Please contact our catering team when submitting your quote request to coordinate a tasting schedule.",
    category: "booking"
  },
  {
    question: "What is the booking policy and payment terms for catering?",
    answer: "To secure your booking date and start ingredient sourcing, we require a booking advance deposit. The balance payment schedule is structured based on your specific catering package and settled post-event.",
    category: "booking"
  },

  // Category: menu (Menu & Customization)
  {
    question: "Can we customize the dishes in the catering packages?",
    answer: "Absolutely. All our sample menus are starting points. We work closely with you to customize individual dishes, adjust spice levels, accommodate dietary requirements, and curate a menu that matches your celebration perfectly.",
    category: "menu"
  },
  {
    question: "Can I customize the menu items or adjust the spice levels?",
    answer: "Yes, absolutely. All our menu offerings can be tailored to your preference. Whether you want to tone down the spice for children or adjust the oil/spiciness, our chefs customize each dish according to your specific gathering requirements.",
    category: "menu"
  },
  {
    question: "Can you accommodate guests with specific food allergies?",
    answer: "Absolutely. We take dietary requests very seriously. Please mention any food allergies (such as nuts, gluten, or dairy) during your quote request, and we will formulate safe preparation guidelines.",
    category: "menu"
  },
  {
    question: "How far in advance should we finalize the menu?",
    answer: "We recommend finalizing your menu selection at least 5 to 7 days before your event. This allows us to source premium, fresh ingredients and allocate dedicated kitchen resources for your special day.",
    category: "menu"
  },

  // Category: purity (Purity & Hygiene)
  {
    question: "Do you provide onion- and garlic-free options for religious gatherings?",
    answer: "Yes, purity is our core value. We specialize in strict (no onion, no garlic) catering with separate cooking guidelines, utensils, and dedicated preparation environments for poojas, havans, and spiritual gatherings.",
    category: "purity"
  },
  {
    question: "Do you offer onion- and garlic-free options?",
    answer: "Yes, purity is our core value. We offer completely onion- and garlic-free versions of almost all our main courses, starters, and dals. These are prepared under strict guidelines using dedicated cookware and separate kitchen areas to preserve absolute sanctity.",
    category: "purity"
  },
  {
    question: "How do you ensure the purity and quality of your food?",
    answer: "We prepare all dishes fresh daily in a strict sanitization environment using premium, handpicked ingredients. For spiritual occasions that require strict preparation guidelines, we prepare meals with completely separate cooking utensils and custom dedicated spaces to preserve scriptural purity.",
    category: "purity"
  },

  // Category: logistics (Logistics & Timing)
  {
    question: "Which locations in Delhi NCR do you serve?",
    answer: "We offer deliveries and complete catering setup services across Delhi, Noida, Gurugram, Ghaziabad, and Faridabad. Delivery logistics are coordinated directly with your event point of contact.",
    category: "logistics"
  },
  {
    question: "Do you provide buffet counters and service staff?",
    answer: "Yes, we provide full buffet counters, themed table setups, and trained professional service staff to manage the food presentation and guest hospitality throughout your event.",
    category: "logistics"
  },
  {
    question: "What is the standard duration of the catering setup?",
    answer: "Our service team usually arrives at the venue 2-3 hours before the scheduled mealtime to set up counters, verify cooking setups, and ensure everything is fresh and ready on time.",
    category: "logistics"
  },
  {
    question: "Do you charge extra for transportation and logistics?",
    answer: "Logistics charges depend on the distance to the venue within Delhi NCR. We itemize any travel or setup costs clearly in our custom quotations, ensuring absolute transparency.",
    category: "logistics"
  },
  {
    question: "Are there additional charges for service staff and buffet setup?",
    answer: "Service staff, elegant buffet counter setups, and logistics are calculated based on your total guest count, venue location, and package details. All details are shared transparently in our custom quotation.",
    category: "logistics"
  }
];

const categories = [
  { id: "all", name: "All Questions", icon: HelpCircle },
  { id: "booking", name: "Booking & General", icon: Calendar },
  { id: "menu", name: "Menu & Customization", icon: Sparkles },
  { id: "purity", name: "Purity & Hygiene", icon: Shield },
  { id: "logistics", name: "Logistics & Service", icon: Truck }
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Filter FAQs based on search and active tab
  const filteredFaqs = allFaqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());

    if (activeCategory === "all") return matchesSearch;
    return matchesSearch && faq.category === activeCategory;
  });

  // Schema for SEO Search Engines
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": filteredFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <main className="min-h-screen bg-[#FAF6F0] pt-32 pb-24 flex flex-col justify-between overflow-x-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-24 right-0 w-96 h-96 rounded-full bg-[#c5a880]/15 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#74290F]/5 blur-3xl -z-10 pointer-events-none" />

      {/* Inject SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow space-y-12">

        {/* Back Link */}
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-sans font-medium text-[#74290F] hover:text-[#c5a880] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center space-y-4">
          <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
            HOW CAN WE HELP YOU?
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#74290F] font-semibold tracking-wide leading-tight">
            Frequently Asked Questions
          </h1>
          <div className="flex items-center gap-3 mt-4 w-full justify-center">
            <div className="h-[1px] w-12 bg-[#c5a880]/40" />
            <span className="text-[#c5a880] text-sm">✿</span>
            <div className="h-[1px] w-12 bg-[#c5a880]/40" />
          </div>
          <p className="font-sans text-sm sm:text-base text-[#292927]/80 font-light max-w-2xl mx-auto leading-relaxed">
            Have questions about guest counts, dedicated kitchen setups, delivery limits, or menus? Explore our detailed guides below.
          </p>
        </div>

        {/* Search Input */}
        <div className="max-w-md mx-auto relative pt-4">
          <div className="relative flex items-center bg-white border border-[#c5a880]/40 rounded-full overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="pl-4 text-[#74290F]/50">
              <Search className="w-5 h-5" />
            </span>
            <input
              type="text"
              placeholder="Search your question..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setOpenFaq(null); // Close active accordion during search
              }}
              className="w-full px-3 py-3.5 text-sm text-[#74290F] placeholder-[#74290F]/40 focus:outline-none bg-transparent font-sans"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="pr-4 text-[#74290F]/50 hover:text-[#74290F] transition-colors"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 pt-2 border-b border-[#c5a880]/20 pb-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setOpenFaq(null); // Reset open accordion
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-sans font-medium transition-all duration-300 ${isActive
                    ? "bg-[#74290F] text-[#FAF6F0] shadow-sm"
                    : "bg-white border border-[#c5a880]/30 text-[#74290F] hover:bg-[#74290F]/5"
                  }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Accordions */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openFaq === index;
            // Get index of matching category name for display
            const catLabel = categories.find(c => c.id === faq.category)?.name || "";

            return (
              <div
                key={index}
                className="bg-white border border-[#c5a880]/25 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:border-[#c5a880]/50"
              >
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full text-left px-6 py-5 flex justify-between items-start gap-4 hover:bg-[#FAF6F0]/40 transition-colors duration-200"
                >
                  <div className="space-y-1.5 pr-2">
                    {activeCategory === "all" && (
                      <span className="inline-block text-[9px] font-bold text-[#c5a880] tracking-wider uppercase font-sans">
                        {catLabel}
                      </span>
                    )}
                    <span className="font-serif text-base sm:text-[19px] text-[#74290F] font-semibold leading-snug block">
                      {faq.question}
                    </span>
                  </div>
                  <span className={`text-[#c5a880] mt-1.5 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                    }`}>
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[500px] border-t border-[#c5a880]/15" : "max-h-0"
                    }`}
                >
                  <div className="px-6 py-5 font-sans text-sm sm:text-base text-[#292927]/85 font-light leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Empty Search/Filter State */}
          {filteredFaqs.length === 0 && (
            <div className="text-center py-16 bg-white/40 border border-[#c5a880]/20 rounded-2xl space-y-4">
              <HelpCircle className="w-12 h-12 text-[#c5a880]/60 mx-auto" />
              <h3 className="font-serif text-xl font-semibold text-[#74290F]">No Questions Found</h3>
              <p className="font-sans text-sm text-[#292927]/70 max-w-sm mx-auto">
                We couldn&apos;t find any questions matching your criteria. Try searching for a different keyword or resetting the category filter.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="px-5 py-2.5 bg-[#74290F] hover:bg-[#61220C] text-white font-sans text-xs font-semibold tracking-wider rounded-md transition-colors"
              >
                Reset Search & Filters
              </button>
            </div>
          )}
        </div>

      </div>
    </main>
  );
}
