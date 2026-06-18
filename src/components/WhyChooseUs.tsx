import React from "react";
import { Home, Flame, CookingPot, Leaf, Users, ChefHat } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Home className="w-6 h-6 text-[#74290F]" strokeWidth={1.5} />,
      label: "Home-style flavours",
    },
    {
      icon: <Flame className="w-6 h-6 text-[#74290F]" strokeWidth={1.5} />,
      label: "Light & balanced spices",
    },
    {
      icon: <CookingPot className="w-6 h-6 text-[#74290F]" strokeWidth={1.5} />,
      label: "Freshly prepared on the day",
    },
    {
      icon: <Leaf className="w-6 h-6 text-[#74290F]" strokeWidth={1.5} />,
      label: "Satvik options available",
    },
    {
      icon: <Users className="w-6 h-6 text-[#74290F]" strokeWidth={1.5} />,
      label: "Ideal for 20-100 guests",
    },
    {
      icon: <ChefHat className="w-6 h-6 text-[#74290F]" strokeWidth={1.5} />,
      label: "Professional setup & service",
    },
  ];

  return (
    <section className="w-full relative z-20 -mt-16 sm:-mt-24 lg:-mt-28 pt-0 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-md border border-[#74290F]/10 rounded-[24px] md:rounded-[32px] py-8 px-4 md:py-10 md:px-8 shadow-xl shadow-[#74290F]/5 relative overflow-hidden">
        
        {/* Section Heading */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <h2 className="font-serif text-2xl md:text-3xl text-[#74290F] font-semibold text-center tracking-wide flex items-center gap-2">
            Why Families Choose Dahi Cheeni
            <span className="inline-block text-base align-middle text-[#74290F]/80">🍃</span>
          </h2>
        </div>

        {/* Grid of features */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-8 md:gap-y-10">
          {features.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center text-center px-2 transition-all duration-300 hover:scale-105 ${
                // Add vertical border lines between columns on desktop
                idx < 5 ? "lg:border-r lg:border-[#74290F]/10" : ""
              } ${
                // Add vertical borders for tablet (3 columns)
                idx % 3 !== 2 ? "md:max-lg:border-r md:max-lg:border-[#74290F]/10" : ""
              } ${
                // Add vertical borders for mobile (2 columns)
                idx % 2 === 0 ? "max-md:border-r max-md:border-[#74290F]/10" : ""
              }`}
            >
              {/* Icon Container */}
              <div className="mb-4 flex items-center justify-center h-14 w-14 bg-[#FAF6F0]/65 rounded-full border border-[#FAF6F0] shadow-inner">
                {item.icon}
              </div>

              {/* Label */}
              <span className="font-sans text-xs sm:text-sm md:text-[15px] font-semibold text-[#292927] leading-relaxed max-w-[140px]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
