"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ShieldCheck, Sparkles, Heart, Utensils, CheckCircle, MessageSquare } from "lucide-react";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function OurPromisePage() {
  const purityPillars = [
    {
      title: "Carefully Selected Ingredients",
      description:
        "We believe great food starts with what goes into it. We take care in selecting the ingredients used in our preparations, with a focus on quality, freshness and purity.",
      icon: Sparkles,
    },
    {
      title: "Clean & Hygienic Preparation",
      description:
        "Our food is prepared in a clean and carefully maintained kitchen, with attention to hygiene at every stage of preparation and handling.",
      icon: ShieldCheck,
    },
    {
      title: "Prepared With Care",
      description:
        "Our dishes are prepared by our kitchen team with careful attention to traditional recipes, preparation methods and consistency — just as you would expect when serving food to your own family.",
      icon: Heart,
    },
  ];

  return (
    <main className="relative min-h-screen bg-[#FAF6F0] pt-24 md:pt-28 flex flex-col justify-between overflow-x-hidden">
      {/* Ambient decorative background glows */}
      <div className="absolute top-24 left-0 w-96 h-96 rounded-full bg-[#c5a880]/10 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-[50vh] right-0 w-96 h-96 rounded-full bg-[#8C3316]/5 blur-3xl -z-10 pointer-events-none" />

      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow pb-16">

        {/* Back Link */}
        <div className="pt-4 pb-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-sans font-medium text-[#8C3316] hover:text-[#c5a880] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </div>

        {/* 1. Header Banner */}
        <section className="text-center pt-6 pb-12 max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8C3316]/5 border border-[#c5a880]/30 text-[#8C3316]">
            <ShieldCheck className="w-4 h-4 text-[#c5a880]" />
            <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#8C3316] uppercase">
              OUR ASSURANCE
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#8C3316] font-semibold tracking-wide leading-tight">
            PURITY GUARANTEED
          </h1>

          <div className="flex items-center gap-3 w-full justify-center pt-1">
            <div className="h-[1px] w-12 bg-[#c5a880]/40" />
            <span className="text-[#c5a880] text-sm">✿</span>
            <div className="h-[1px] w-12 bg-[#c5a880]/40" />
          </div>

          <p className="font-serif text-lg sm:text-xl md:text-2xl text-[#8C3316] font-medium italic pt-2 max-w-2xl mx-auto leading-relaxed">
            &ldquo;Because some occasions deserve food made with nothing but care.&rdquo;
          </p>
        </section>

        {/* 2. Core Narrative Section */}
        <section className="max-w-4xl mx-auto py-8">
          <div className="bg-white/60 backdrop-blur-sm border border-[#c5a880]/25 rounded-3xl p-8 sm:p-12 shadow-sm space-y-6">
            <div className="space-y-5 font-sans text-base sm:text-lg text-[#292927]/90 font-light leading-relaxed">
              <p>
                At <span className="font-semibold text-[#8C3316]">Dahi Cheeni</span>, we believe that food for an auspicious occasion should be <span className="font-medium text-[#8C3316]">simple, pure and made with care</span>.
              </p>
              <p>
                Our food is inspired by the warmth of a home kitchen — familiar flavours, traditional recipes and thoughtful preparation.
              </p>
              <div className="p-6 rounded-2xl bg-[#8C3316]/5 border-l-4 border-[#8C3316] my-6">
                <p className="font-serif text-lg sm:text-xl text-[#8C3316] font-medium italic leading-relaxed">
                  &ldquo;And because we cater for occasions that are special to you and your family, purity is not just a promise we make. It is a responsibility we take seriously.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. OUR PROMISE OF PURITY (Grid of 3 Pillars) */}
        <section className="py-12 md:py-16">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
              GUIDING PRINCIPLES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#8C3316] font-semibold tracking-wide">
              OUR PROMISE OF PURITY
            </h2>
            <div className="flex items-center gap-3 justify-center pt-1">
              <div className="h-[1px] w-10 bg-[#c5a880]/30" />
              <span className="text-[#c5a880] text-xs">✦</span>
              <div className="h-[1px] w-10 bg-[#c5a880]/30" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {purityPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className="bg-white/80 border border-[#c5a880]/20 hover:border-[#8C3316]/40 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#c5a880]/5 rounded-bl-full pointer-events-none group-hover:bg-[#8C3316]/5 transition-colors duration-300" />

                  <div>
                    <div className="w-14 h-14 rounded-xl bg-[#8C3316]/5 border border-[#c5a880]/30 flex items-center justify-center text-[#8C3316] mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7" />
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl text-[#8C3316] font-semibold mb-4 leading-snug">
                      {pillar.title}
                    </h3>

                    <p className="font-sans text-sm sm:text-base text-[#292927]/80 font-light leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#c5a880]/15 flex items-center gap-2 text-xs font-sans font-medium text-[#c5a880]">
                    <CheckCircle className="w-4 h-4 text-[#8C3316]" />
                    <span>Dahi Cheeni Standard</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. Why Choose Us Integration */}
        <div className="pt-4">
          <WhyChooseUs />
        </div>

        {/* 5. CTA Banner Section */}
        <section className="w-full bg-[#8C3316] text-[#FAF6F0] rounded-3xl py-14 px-6 sm:px-12 md:py-16 relative overflow-hidden shadow-xl mt-12 z-10">
          <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[#c5a880]/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#c5a880]/15 blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
              AUSPICIOUS CATERING FOR YOUR FAMILY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF6F0] font-medium leading-tight tracking-wide">
              Plan Your Celebration With Pure Home-Style Hospitality
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#FAF6F0]/80 font-light max-w-xl mx-auto leading-relaxed">
              Speak to our culinary team today to discuss your occasion, dietary needs, or to create a custom menu tailored to your preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
              <Link
                href="/qet_a_quote"
                className="px-8 py-3.5 bg-[#FAF6F0] hover:bg-[#FAF6F0]/90 text-[#8C3316] font-sans text-sm font-semibold tracking-wider rounded-md shadow-md transition-all duration-300 w-full sm:w-auto text-center"
              >
                Request a Custom Quote
              </Link>
              <a
                href="https://wa.me/919971118559"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-sans text-sm font-semibold tracking-wider rounded-md shadow-md transition-all duration-300 w-full sm:w-auto text-center inline-flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
