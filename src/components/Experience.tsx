import React from "react";
import Image from "next/image";

interface StepItem {
  number: string;
  title: string;
  desc: string;
}

export default function Experience() {
  const steps: StepItem[] = [
    {
      number: "01",
      title: "Menu Curation",
      desc: "Work alongside our culinary curators to design a custom menu tailored to your family's heritage, preferences, and the specific spiritual or celebratory occasion.",
    },
    {
      number: "02",
      title: "Purity in Preparation",
      desc: "Wholesome, home-style meals prepared fresh on the day of the gathering. We adhere to strict quality standards, utilizing the highest quality ingredients.",
    },
    {
      number: "03",
      title: "Elegance in Execution",
      desc: "Impeccable hospitality served in traditional copper chafing dishes, complete with floral styling and attentive staff delivering a seamless dining experience.",
    },
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#FAF6F0] relative z-10">
      <div className="max-w-7xl mx-auto bg-white/60 backdrop-blur-sm border border-[#c5a880]/20 text-[#74290F] rounded-[28px] md:rounded-[40px] p-6 sm:p-10 md:p-14 lg:p-16 shadow-sm relative overflow-hidden">
        
        {/* Subtle decorative background watermark */}
        <div className="absolute right-0 bottom-0 w-[400px] h-[400px] text-[#74290F]/2 pointer-events-none transform translate-x-20 translate-y-20 select-none">
          <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
            <path d="M17 2c-10 0-15 8-15 15 0 2.5 1.5 5 4 5s11-10 11-15v-5z" />
          </svg>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Side: Premium Process Image Showcase */}
          <div className="lg:col-span-5 relative w-full aspect-[4/3] sm:aspect-square lg:aspect-[4/5] rounded-2xl md:rounded-[30px] overflow-hidden border border-[#c5a880]/15 shadow-sm">
            <Image
              src="/experience-service.png"
              alt="Dahi Cheeni Luxury Event Presentation Setup"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
              priority
            />
            {/* Elegant overlay shadow */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Right Side: Step-by-Step Culinary Journey */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase mb-3 block">
              Our Process
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[46px] text-[#74290F] font-semibold leading-tight mb-8 md:mb-10 tracking-wide">
              The Dahi Cheeni <br /> Experience
            </h2>

            {/* List items with bottom borders */}
            <div className="flex flex-col">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 sm:gap-6 border-b border-[#c5a880]/20 pb-6 mb-6 last:border-b-0 last:pb-0 last:mb-0 group"
                >
                  {/* Step Number in Gold */}
                  <span className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-[#c5a880] tracking-wide pt-0.5 select-none transition-transform duration-300 group-hover:scale-110">
                    {step.number}
                  </span>
                  
                  {/* Title & Description */}
                  <div className="flex flex-col">
                    <h3 className="font-serif text-lg sm:text-xl md:text-[22px] text-[#74290F] font-semibold tracking-wide mb-1 sm:mb-2 transition-colors duration-300 group-hover:text-[#c5a880]">
                      {step.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[#292927]/75 font-light leading-relaxed max-w-xl">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
