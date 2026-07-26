import React from "react";
import Image from "next/image";

export default function WhyChooseUs() {
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

          <div className="space-y-3 font-sans text-base text-[#292927]/90 font-light leading-relaxed">
            <p className="font-serif text-lg text-[#8C3316] font-medium leading-snug">
              Food is more than what&apos;s served on a plate.
            </p>
            <ul className="space-y-1.5 pl-4 border-l-2 border-[#c5a880]/30 italic text-[#292927]/80">
              <li>It&apos;s how guests feel when they arrive.</li>
              <li>It&apos;s the aroma that fills the home.</li>
              <li>It&apos;s the comfort of familiar flavours.</li>
              <li>It&apos;s the joy of everyone gathering around the same table.</li>
            </ul>
            <p className="font-serif text-lg text-[#8C3316] font-medium leading-snug pt-1">
              That&apos;s the experience we strive to create.
            </p>
          </div>

          <div className="space-y-4 font-sans text-base text-[#292927]/85 font-light leading-relaxed pt-2">
            <p>
              Families choose <span className="font-semibold text-[#8C3316]">Dahi Cheeni</span> because we believe in thoughtful hospitality. We don&apos;t believe in one-size-fits-all menus. Every gathering is different, which is why every menu is curated according to your occasion, guest profile and personal preferences.
            </p>
            <p>
              Whether you&apos;re serving a traditional North Indian meal, a satvik menu or a mix of regional favourites, we ensure every dish is freshly prepared, beautifully presented and served with care.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
