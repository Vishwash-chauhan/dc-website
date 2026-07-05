"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageSquare, MapPin, Calendar, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#74290F] text-[#FAF6F0] border-t border-[#c5a880]/20 relative overflow-hidden z-10">
      {/* Decorative background gradients */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#c5a880]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#c5a880]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Column 1: Brand & Philosophy (3 cols) */}
          <div className="md:col-span-2 lg:col-span-3 space-y-6">
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="relative w-14 h-14 flex items-center justify-center bg-[#FAF6F0]/5 rounded-full p-1 border border-[#c5a880]/20">
                <Image
                  src="/dc-logo.svg"
                  alt="Dahi Cheeni Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl text-[#FAF6F0] font-semibold leading-none tracking-normal">
                  Dahi Cheeni
                </span>
                <span className="font-sans text-[8px] text-[#c5a880] tracking-[0.16em] uppercase font-bold mt-1">
                  — HOME-STYLE CATERING —
                </span>
              </div>
            </Link>

            <p className="font-sans text-sm text-[#FAF6F0]/80 font-light leading-relaxed max-w-sm">
              Exquisite Indian catering for life&apos;s auspicious moments. We bring generational heritage recipes, 100% vegetarian satvik purity, and clean, wholesome flavors to your gatherings.
            </p>

            {/* Philosophy tagline */}
            <div className="flex items-center gap-2 text-[#c5a880] text-xs font-serif italic pt-1">
              <span>✿</span>
              <span>Pure Traditions. Clean Flavors.</span>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="md:col-span-1 lg:col-span-2 space-y-5">
            <h3 className="font-serif text-lg font-semibold tracking-wider text-[#c5a880] border-b border-[#c5a880]/20 pb-2">
              Quick Links
            </h3>
            <ul className="mt-3 space-y-3 font-sans text-sm text-[#FAF6F0]/80 font-light">
              {[
                { name: "Home", href: "/#home" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Menus", href: "/menu" },
                { name: "Gallery", href: "/#gallery" },
                { name: "FAQs", href: "/faq" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-[#c5a880] transition-colors duration-200 flex items-center gap-1.5"
                  >
                    <span className="text-[#c5a880]/40 text-xs">✦</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Locations (2 cols) */}
          <div className="md:col-span-1 lg:col-span-2 space-y-5">
            <h3 className="font-serif text-lg font-semibold tracking-wider text-[#c5a880] border-b border-[#c5a880]/20 pb-2">
              Locations
            </h3>
            <ul className="mt-3 space-y-3 font-sans text-sm text-[#FAF6F0]/80 font-light">
              {[
                { name: "Delhi", href: "/delhi" },
                { name: "Gurugram", href: "/gurugram" },
                { name: "Noida", href: "/noida" },
                { name: "Faridabad", href: "/faridabad" },
                { name: "Ghaziabad", href: "/ghaziabad" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-[#c5a880] transition-colors duration-200 flex items-center gap-1.5"
                  >
                    <span className="text-[#c5a880]/40 text-xs">✦</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Occasions We Cater (2 cols) */}
          <div className="md:col-span-1 lg:col-span-2 space-y-5">
            <h3 className="font-serif text-lg font-semibold tracking-wider text-[#c5a880] border-b border-[#c5a880]/20 pb-2">
              Occasions
            </h3>
            <ul className="space-y-3 font-sans text-sm text-[#FAF6F0]/80 font-light">
              {[
                "Spiritual Gatherings & Poojas",
                "Baby Celebrations (Naming, Shower)",
                "Griha Pravesh Ceremonies",
                "Mundan & Janeu Celebrations",
                "Intimate Wedding Functions",
                "Prayer Meetings & Memorials",
              ].map((occasion) => (
                <li key={occasion} className="flex items-start gap-2">
                  <Calendar className="w-4 h-4 text-[#c5a880] mt-0.5 flex-shrink-0" />
                  <span>{occasion}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact & Regions (3 cols) */}
          <div className="md:col-span-1 lg:col-span-3 space-y-5">
            <h3 className="font-serif text-lg font-semibold tracking-wider text-[#c5a880] border-b border-[#c5a880]/20 pb-2">
              Contact Us
            </h3>
            
            <div className="space-y-4 font-sans text-sm text-[#FAF6F0]/80 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4.5 h-4.5 text-[#c5a880] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-[#FAF6F0] block">Service Area</span>
                  <span className="text-xs text-[#FAF6F0]/70">Delhi, Gurugram, Noida, Ghaziabad, Faridabad & NCR</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4.5 h-4.5 text-[#c5a880] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-[#FAF6F0] block">Call / Inquiry</span>
                  <a href="tel:+918130964374" className="hover:text-[#c5a880] transition-colors font-sans">+91 81309 64374</a>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="pt-2">
                <a
                  href="https://wa.me/918130964374"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-sans text-xs font-semibold rounded-lg shadow-sm transition-all duration-300 transform hover:scale-103 active:scale-97 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Motifs */}
        <div className="border-t border-[#c5a880]/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left text-xs text-[#FAF6F0]/60">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <span>&copy; {currentYear} Dahi Cheeni. All rights reserved.</span>
            <span className="hidden sm:inline text-[#c5a880]/30">|</span>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-[#c5a880] transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-[#c5a880] transition-colors">Terms & Conditions</Link>
            </div>
          </div>
          <div className="flex items-center gap-1.5 font-sans font-light">
            <span>Crafted with Satvik purity & heritage recipes</span>
            <Heart className="w-3.5 h-3.5 text-[#c5a880] fill-current" />
          </div>
        </div>
      </div>
    </footer>
  );
}
