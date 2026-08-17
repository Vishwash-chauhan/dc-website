import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    "Freshly prepared meals made with quality ingredients",
    "Home-style recipes and comforting flavours",
    "Customised menu options",
    "Professional service and warm hospitality",
    "Beautiful presentation",
    "Flexible menus for gatherings of every size",
    "Personal attention from planning to service",
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 md:py-16 border-t border-[#c5a880]/15">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Left side: Showcase Image Card (Alternating layout) */}
        <div className="lg:col-span-5 flex justify-center items-center relative py-4 order-2 lg:order-1">
          <div className="absolute w-64 h-64 rounded-full bg-[#8C3316]/5 blur-3xl -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-3xl bg-[#8C3316] p-2.5 shadow-xl -rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="absolute inset-3 border border-[#c5a880]/30 rounded-2xl pointer-events-none z-10" />
            <div className="relative w-full h-full rounded-[14px] overflow-hidden">
              <Image
                src="/5.jpeg"
                alt="Premium home-style catering food presentation"
                fill
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right side: Why Choose Us Text */}
        <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
          <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
            OUR CUSTOMER PROMISE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#8C3316] font-semibold leading-tight tracking-wide">
            Why Families Choose Dahi Cheeni
          </h2>
          <div className="h-[1px] w-12 bg-[#c5a880]/40" />

          <p className="font-sans text-base text-[#292927]/90 font-light leading-relaxed">
            Families trust Dahi Cheeni because we combine the comfort of home-style cooking with the standards of professional hospitality.
          </p>

          <div className="space-y-4 pt-2">
            <div className="flex flex-col gap-2 text-left">
              <span className="font-sans text-xs sm:text-sm text-[#292927]/80 font-bold mb-2">When you choose us, you can expect:</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {points.map((point, idx) => (
                  <div key={idx} className="flex gap-2.5 items-start">
                    <span className="p-0.5 rounded-full bg-[#8C3316]/5 text-[#c5a880] border border-[#c5a880]/20 mt-0.5">
                      <Check className="w-3.5 h-3.5" strokeWidth={3} />
                    </span>
                    <span className="font-sans text-xs sm:text-sm text-[#292927]/85 font-light leading-relaxed">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="font-sans text-sm sm:text-base text-[#8C3316] font-semibold italic leading-relaxed pt-2">
            Our goal is simple—to make hosting easier while ensuring every guest leaves with a smile.
          </p>
        </div>

      </div>
    </section>
  );
}
