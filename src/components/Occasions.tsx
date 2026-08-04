import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Home, Footprints, Users } from "lucide-react";

// Custom SVG Diya Icon
const DiyaIcon = () => (
  <svg className="w-6 h-6 text-[#8C3316]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    {/* Diya flame */}
    <path d="M12 2.5c-.7 1.8-1.8 3.2-1.8 5s1 3.2 1.8 3.2 1.8-1.4 1.8-3.2-1.1-3.2-1.8-5z" fill="#8C3316" stroke="none" />
    {/* Oil container bowl */}
    <path d="M4 14c0 3.5 3.58 6.5 8 6.5s8-3 8-6.5c0-1.2-1.5-2.2-4-2.2s-3.5 1.2-4 1.2-1.5-1.2-4-1.2-4 1-4 2.2z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Custom SVG Praying Hands Icon
const PrayingHandsIcon = () => (
  <svg className="w-6 h-6 text-[#8C3316]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
  href: string;
}

export default function Occasions() {
  const list: OccasionItem[] = [
    {
      image: "/griha-pravesh.png",
      icon: <Home className="w-6 h-6 text-[#8C3316]" strokeWidth={1.5} />,
      title: "Griha Pravesh Catering",
      desc: "A new home marks the beginning of a new chapter. Welcome family and friends with comforting meals that create a warm and memorable first gathering.",
      href: "/occasions_we_serve/griha_pravesh",
    },
    {
      image: "/pooja-havan.png",
      icon: <DiyaIcon />,
      title: "Pooja & Havan Catering",
      desc: "From intimate home poojas to larger religious ceremonies, we offer thoughtfully prepared menus, including satvik options, allowing you to focus on your prayers while we take care of the hospitality.",
      href: "/occasions_we_serve/pooja_havan",
    },
    {
      image: "/baby-celebrations.png",
      icon: <Footprints className="w-6 h-6 text-[#8C3316]" strokeWidth={1.5} />,
      title: "Baby Shower",
      desc: "Whether it's a Naamkaran, Annaprashan, Mundan or a baby's first birthday at home, we'll help you celebrate with fresh food that guests of every generation will enjoy.",
      href: "/occasions_we_serve/baby_shower",
    },
    {
      image: "/prayer-meetings.png",
      icon: <PrayingHandsIcon />,
      title: "Prayer Meetings",
      desc: "Respectful, simple and comforting meals prepared with sensitivity for families and guests coming together during difficult times.",
      href: "/occasions_we_serve/prayer_meetings",
    },
    {
      image: "/family-get-together.png",
      icon: <Users className="w-6 h-6 text-[#8C3316]" strokeWidth={1.5} />,
      title: "Small Family Gatherings",
      desc: "Not every celebration needs a special occasion. Sometimes, the best memories are created simply by sharing a meal with loved ones.",
      href: "/occasions_we_serve/family_gatherings",
    },
  ];

  return (
    <section id="occasions" className="w-full pb-16 px-4 sm:px-6 lg:px-8 bg-[#FAF6F0] relative z-10">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-12 flex flex-col items-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#8C3316] font-semibold tracking-wide">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-4 lg:gap-3 overflow-visible">
          {list.map((item, index) => (
            <Link
              key={index}
              href={item.href}
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
                  <div className="absolute inset-0 bg-[#8C3316]/5 group-hover:bg-transparent transition-colors duration-300" />
                </div>

                {/* Overlapping Circle Button (Placed outside overflow-hidden) */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 z-30 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-white border border-[#c5a880]/25 rounded-full shadow-md transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
              </div>

              {/* Text / Info Container */}
              <div className="pt-8 pb-6 px-4 flex flex-col items-center text-center flex-grow">
                <h3 className="font-serif text-base md:text-lg text-[#8C3316] font-bold tracking-wide mb-2">
                  {item.title}
                </h3>
                <p className="font-sans text-xs md:text-[13px] text-[#292927]/75 font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
