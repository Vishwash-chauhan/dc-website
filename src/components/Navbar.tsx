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
    { name: "Menu", href: "/menu", active: pathname === "/menu" },
    { name: "Occasions", href: "/occasions_we_serve", active: pathname === "/occasions_we_serve" },
    { name: "Our Promise", href: "/our-promise", active: pathname === "/our-promise" },
    // { name: "Gallery", href: isHome ? "#gallery" : "/#gallery", active: false },
    { name: "FAQs", href: "/faq", active: pathname === "/faq" },
    // { name: "Contact", href: isHome ? "#contact" : "/#contact", active: false },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">

          {/* Left: Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href={isHome ? "#home" : "/#home"} className="flex items-center gap-2.5 group">
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center">
                <Image
                  src="/dc-logo.svg"
                  alt="Dahi Cheeni Logo Icon"
                  width={48}
                  height={48}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl text-[#8C3316] font-semibold leading-none tracking-normal">
                  Dahi Cheeni
                </span>
                <span className="font-sans text-[7px] sm:text-[8px] text-[#c5a880] tracking-[0.14em] uppercase font-bold mt-0.5">
                  — HOME-STYLE CATERING —
                </span>
              </div>
            </Link>
          </div>

          {/* Center: Navigation Links (Desktop) */}
          <nav className="hidden md:flex space-x-5 lg:space-x-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm font-sans font-medium tracking-wide transition-colors duration-200 py-1 ${link.active
                  ? "text-[#8C3316] border-b-2 border-[#8C3316]"
                  : "text-[#8C3316]/75 hover:text-[#8C3316]"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right: CTA Button & Checkout (Desktop) */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="/checkout"
              className="px-5 py-2.5 bg-[#8C3316] hover:bg-[#74290F] text-white font-sans text-xs sm:text-sm font-bold tracking-wider uppercase rounded-md shadow-sm transition-all duration-300 transform active:scale-98 cursor-pointer text-center"
            >
              Place Order
            </Link>
            <Link
              href="/qet_a_quote"
              className="px-5 py-2.5 bg-transparent hover:bg-[#8C3316]/5 text-[#8C3316] border border-[#8C3316]/40 font-sans text-xs sm:text-sm font-semibold tracking-wide rounded-md transition-all duration-300 text-center"
            >
              Get A Quote
            </Link>
          </div>

          {/* Hamburger Menu Icon (Mobile) */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-1.5 rounded-md text-[#8C3316] hover:bg-[#8C3316]/5 focus:outline-none transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-45 bg-[#FAF6F0] flex flex-col pt-16 px-5">
          {/* Mobile Overlay Header */}
          <div className="absolute top-0 left-0 right-0 h-16 px-4 flex items-center justify-between border-b border-[#c5a880]/15">
            <Link
              href={isHome ? "#home" : "/#home"}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2.5 group"
            >
              <div className="relative w-10 h-10 flex items-center justify-center">
                <Image
                  src="/dc-logo.svg"
                  alt="Dahi Cheeni Logo Icon"
                  width={40}
                  height={40}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl text-[#8C3316] font-semibold leading-none tracking-normal">
                  Dahi Cheeni
                </span>
                <span className="font-sans text-[7px] text-[#c5a880] tracking-[0.14em] uppercase font-bold mt-0.5">
                  — HOME-STYLE CATERING —
                </span>
              </div>
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(false)}
              type="button"
              className="inline-flex items-center justify-center p-1.5 rounded-md text-[#8C3316] hover:bg-[#8C3316]/5 focus:outline-none transition-colors duration-200"
              aria-label="Close menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col space-y-3.5 text-center mt-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-base sm:text-lg font-sans font-medium tracking-wide py-1 ${link.active ? "text-[#8C3316] font-semibold underline underline-offset-4 decoration-[#8C3316] decoration-2" : "text-[#8C3316]/80"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="mt-6 flex flex-col items-center space-y-3">
            <Link
              href="/checkout"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full max-w-xs text-center px-5 py-2.5 bg-[#8C3316] text-white font-sans text-sm font-bold tracking-wider uppercase rounded-md shadow-md cursor-pointer"
            >
              Place Order
            </Link>

            <Link
              href="/qet_a_quote"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full max-w-xs text-center px-5 py-2.5 bg-transparent border border-[#8C3316] text-[#8C3316] font-sans text-xs sm:text-sm font-semibold tracking-wide rounded-md shadow-xs cursor-pointer"
            >
              Get A Quote
            </Link>
          </div>
        </div>
      )}
          </div>
        </div>
      )}
    </header>
  );
}
