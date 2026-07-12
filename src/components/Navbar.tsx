"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navLinks = [
    { name: "Home", href: isHome ? "#home" : "/#home", active: isHome },
    { name: "About Us", href: "/about", active: pathname === "/about" },
    { name: "Services", href: "/services", active: pathname === "/services" },
    { name: "Menus", href: "/menu", active: pathname === "/menu" },
    { name: "Gallery", href: isHome ? "#gallery" : "/#gallery", active: false },
    { name: "FAQs", href: "/faq", active: pathname === "/faq" },
    // { name: "Contact", href: isHome ? "#contact" : "/#contact", active: false },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">

          {/* Left: Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href={isHome ? "#home" : "/#home"} className="flex items-center gap-3.5 group">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <Image
                  src="/dc-logo.svg"
                  alt="Dahi Cheeni Logo Icon"
                  width={64}
                  height={64}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-[28px] text-[#74290F] font-semibold leading-none tracking-normal">
                  Dahi Cheeni
                </span>
                <span className="font-sans text-[8px] text-[#c5a880] tracking-[0.16em] uppercase font-bold mt-1">
                  — HOME-STYLE CATERING —
                </span>
              </div>
            </Link>
          </div>

          {/* Center: Navigation Links (Desktop) */}
          <nav className="hidden md:flex space-x-8 lg:space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-[15px] font-sans font-medium tracking-wide transition-colors duration-200 py-1 ${link.active
                  ? "text-[#74290F] border-b-2 border-[#74290F]"
                  : "text-[#74290F]/75 hover:text-[#74290F]"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right: CTA Button & WhatsApp (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/qet_a_quote"
              className="px-6 py-3 bg-[#74290F] hover:bg-[#61220C] text-white font-sans text-sm font-semibold tracking-wide rounded-md shadow-sm transition-all duration-300 transform active:scale-98 cursor-pointer text-center"
            >
              Get A Quote
            </Link>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/918130964374"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact on WhatsApp"
              className="flex items-center justify-center w-11 h-11 bg-[#25D366] hover:bg-[#20ba59] rounded-full shadow-md text-white transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              <svg className="w-5.5 h-5.5 fill-current" viewBox="0 0 448 512">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L3 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
            </a>
          </div>

          {/* Hamburger Menu Icon (Mobile) */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-[#74290F] hover:bg-[#74290F]/5 focus:outline-none transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-[#FAF6F0] flex flex-col pt-24 px-6">
          <nav className="flex flex-col space-y-6 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-xl font-sans font-medium tracking-wide ${link.active ? "text-[#74290F] underline underline-offset-8 decoration-[#74290F] decoration-2" : "text-[#74290F]/80"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="mt-12 flex flex-col items-center space-y-6">
            <Link
              href="/qet_a_quote"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full max-w-xs text-center px-6 py-4 bg-[#74290F] text-white font-sans text-base font-semibold tracking-wide rounded-md shadow-md cursor-pointer"
            >
              Get A Quote
            </Link>

            {/* Mobile WhatsApp Button */}
            <a
              href="https://wa.me/918130964374"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-[#25D366] text-white font-sans text-sm font-semibold tracking-wide rounded-full shadow-md"
            >
              <svg className="w-5.5 h-5.5 fill-current" viewBox="0 0 448 512">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L3 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
