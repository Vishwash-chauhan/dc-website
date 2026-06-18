import React from "react";
import Image from "next/image";
import { Home, Footprints, Users } from "lucide-react";

// Custom SVG Diya Icon
const DiyaIcon = () => (
  <svg className="w-6 h-6 text-[#74290F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    {/* Diya flame */}
    <path d="M12 2.5c-.7 1.8-1.8 3.2-1.8 5s1 3.2 1.8 3.2 1.8-1.4 1.8-3.2-1.1-3.2-1.8-5z" fill="#74290F" stroke="none" />
    {/* Oil container bowl */}
    <path d="M4 14c0 3.5 3.58 6.5 8 6.5s8-3 8-6.5c0-1.2-1.5-2.2-4-2.2s-3.5 1.2-4 1.2-1.5-1.2-4-1.2-4 1-4 2.2z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Custom SVG Lotus/Ritual Icon
const LotusIcon = () => (
  <svg className="w-6 h-6 text-[#74290F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Central petal */}
    <path d="M12 3c-1.5 3-2 6-2 9s.5 6 2 9c1.5-3 2-6 2-9s-.5-6-2-9z" />
    {/* Left petal */}
    <path d="M12 9c-3-1.5-6-1.5-8 0c1 2.5 3 4.5 8 5" />
    {/* Right petal */}
    <path d="M12 9c3-1.5 6-1.5 8 0c-1 2.5-3 4.5-8 5" />
    {/* Base stem / leaves */}
    <path d="M9 19c2 1.5 4 1.5 6 0" />
  </svg>
);

// Custom SVG Praying Hands Icon
const PrayingHandsIcon = () => (
  <svg className="w-6 h-6 text-[#74290F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 4c-.5 1-1.5 3-1.5 5.5s.8 4 1.5 5.5" />
    <path d="M12 4c.5 1 1.5 3 1.5 5.5s-.8 4-1.5 5.5" />
    <path d="M10 20c-1.5-1.5-2.5-3.5-2.5-5.5 0-2 1.5-3.5 2-4" />
    <path d="M14 20c1.5-1.5 2.5-3.5 2.5-5.5 0-2-1.5-3.5-2-4" />
    <path d="M8 21h8" />
  </svg>
);

interface OccasionItem {
  image: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export default function Occasions() {
  const list: OccasionItem[] = [
    {
      image: "/griha-pravesh.png",
      icon: <Home className="w-6 h-6 text-[#74290F]" strokeWidth={1.5} />,
      title: "Griha Pravesh",
      desc: "Celebrate new beginnings with comforting food your guests will remember.",
    },
    {
      image: "/pooja-havan.png",
      icon: <DiyaIcon />,
      title: "Pooja & Havan",
      desc: "Thoughtfully prepared menus suitable for spiritual occasions.",
    },
    {
      image: "/baby-celebrations.png",
      icon: <Footprints className="w-6 h-6 text-[#74290F]" strokeWidth={1.5} />,
      title: "Baby Celebrations",
      desc: "Baby Shower, Naamkaran and Annaprashan ceremonies.",
    },
    {
      image: "/mundan-janeu.png",
      icon: <LotusIcon />,
      title: "Mundan & Janeu",
      desc: "Traditional gatherings catered with care and purity.",
    },
    {
      image: "/prayer-meetings.png",
      icon: <PrayingHandsIcon />,
      title: "Prayer Meetings",
      desc: "Simple, respectful and wholesome meals.",
    },
    {
      image: "/family-get-together.png",
      icon: <Users className="w-6 h-6 text-[#74290F]" strokeWidth={1.5} />,
      title: "Family Get-Togethers",
      desc: "Perfect for birthdays, anniversaries and intimate celebrations.",
    },
  ];

  return (
    <section id="occasions" className="w-full pb-16 px-4 sm:px-6 lg:px-8 bg-[#FAF6F0] relative z-10">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-12 flex flex-col items-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#74290F] font-semibold tracking-wide">
            Occasions We Cater To
          </h2>
          {/* Decorative Divider */}
          <div className="flex items-center gap-4 mt-4 w-full max-w-[280px] justify-center">
            <div className="h-[1px] w-12 bg-[#c5a880]/30" />
            <span className="text-[#c5a880] text-sm">✿</span>
            <div className="h-[1px] w-12 bg-[#c5a880]/30" />
          </div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-4 lg:gap-3 overflow-visible">
          {list.map((item, index) => (
            <div
              key={index}
              className="bg-white/40 border border-[#c5a880]/15 rounded-xl md:rounded-2xl flex flex-col overflow-visible shadow-sm hover:shadow-md transition-all duration-300 relative group"
            >
              {/* Aspect Ratio Wrapper with overflow-visible to prevent icon clipping */}
              <div className="relative w-full aspect-[4/3] overflow-visible">
                {/* Image Container with overflow-hidden */}
                <div className="w-full h-full relative rounded-t-xl md:rounded-t-2xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 16vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#74290F]/5 group-hover:bg-transparent transition-colors duration-300" />
                </div>

                {/* Overlapping Circle Button (Placed outside overflow-hidden) */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 z-30 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-white border border-[#c5a880]/25 rounded-full shadow-md transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
              </div>

              {/* Text / Info Container */}
              <div className="pt-8 pb-6 px-4 flex flex-col items-center text-center flex-grow">
                <h3 className="font-serif text-base md:text-lg text-[#74290F] font-bold tracking-wide mb-2">
                  {item.title}
                </h3>
                <p className="font-sans text-xs md:text-[13px] text-[#292927]/75 font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
