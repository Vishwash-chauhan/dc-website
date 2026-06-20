"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQsProps {
  items: FAQItem[];
}

export default function FAQs({ items }: FAQsProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Generate FAQ schema for search engines (SEO Best Practice)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <section id="faqs" className="w-full bg-[#74290F]/5 py-16 md:py-20 border-t border-b border-[#c5a880]/20 z-10 relative">
      {/* Injecting JSON-LD FAQ Schema directly into the page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase mb-2 block">
            QUESTIONS & ANSWERS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#74290F] font-semibold tracking-wide">
            Frequently Asked Questions
          </h2>
          <div className="flex items-center gap-3 mt-3 w-full justify-center">
            <div className="h-[1px] w-10 bg-[#c5a880]/30" />
            <span className="text-[#c5a880] text-xs">✿</span>
            <div className="h-[1px] w-10 bg-[#c5a880]/30" />
          </div>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => {
            const isOpen = openFaq === index;
            return (
              <div 
                key={index}
                className="bg-[#FAF6F0] border border-[#c5a880]/30 rounded-xl overflow-hidden shadow-sm transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-5 py-4 sm:px-6 sm:py-5 flex justify-between items-center gap-4 hover:bg-[#FAF6F0]/50 transition-colors duration-200"
                >
                  <span className="font-serif text-base sm:text-lg text-[#74290F] font-medium leading-snug">
                    {item.question}
                  </span>
                  <span className={`text-[#c5a880] transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[300px] border-t border-[#c5a880]/20" : "max-h-0"
                  }`}
                >
                  <div className="px-5 py-4 sm:px-6 sm:py-5 font-sans text-sm text-[#292927]/80 font-light leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
