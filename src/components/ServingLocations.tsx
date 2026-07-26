import React from "react";
import Link from "next/link";
import { MapPin } from "lucide-react";

interface LocationItem {
  name: string;
  href: string;
}

export default function ServingLocations() {
  const locations: LocationItem[] = [
    { name: "Gurgaon", href: "/gurugram" },
    { name: "South Delhi", href: "/delhi" },
    { name: "Noida", href: "/noida" },
    { name: "Greater Noida", href: "/noida" },
    { name: "Ghaziabad", href: "/ghaziabad" },
    { name: "Faridabad", href: "/faridabad" },
  ];

  return (
    <section className="w-full py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-[#FAF6F0] relative z-10 border-t border-[#c5a880]/15">
      <div className="max-w-7xl mx-auto text-center">
        
        <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase mb-2 block">
          OUR SERVICE AREAS
        </span>
        <h2 className="font-serif text-3xl md:text-4xl text-[#8C3316] font-semibold tracking-wide mb-3">
          Serving Families Across Delhi NCR
        </h2>
        <p className="font-sans text-sm sm:text-base text-[#292927]/70 font-light max-w-xl mx-auto mb-10 leading-relaxed">
          Dahi Cheeni proudly caters intimate celebrations and auspicious occasions across:
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {locations.map((loc, idx) => (
            <Link
              key={idx}
              href={loc.href}
              className="bg-white/40 border border-[#c5a880]/20 hover:border-[#8C3316]/40 rounded-2xl p-5 flex flex-col items-center justify-center gap-3 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-[#8C3316]/5 flex items-center justify-center text-[#8C3316] border border-[#c5a880]/20 transition-transform duration-300 group-hover:scale-110">
                <MapPin className="w-5 h-5 text-[#8C3316]" strokeWidth={1.5} />
              </div>
              <span className="font-serif text-base sm:text-lg text-[#8C3316] font-semibold tracking-wide transition-colors duration-300 group-hover:text-[#c5a880]">
                {loc.name}
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
