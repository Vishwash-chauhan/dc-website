"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FAQs from "@/components/FAQs";

const QUOTE_PAGE_FAQS = [
  {
    question: "What is the minimum guest count required for catering bookings?",
    answer: "We cater to events starting from 15 guests up to 300+ guests. Whether you're hosting an intimate family get-together, a pooja, or a festive wedding ceremony, we tailor our quantities and service to fit.",
  },
  {
    question: "How far in advance should I request a quote or book my date?",
    answer: "We recommend booking at least 5-7 days in advance for smaller family gatherings. For larger occasions, weddings, or peak festive seasons, booking 2-3 weeks in advance secures availability and lets us coordinate fresh sourcing perfectly.",
  },
  {
    question: "Can we customize the dishes in the catering packages?",
    answer: "Absolutely. All our sample menus are starting points. We work closely with you to customize individual dishes, adjust spice levels, accommodate dietary requirements, and curate a menu that matches your celebration perfectly.",
  },
  {
    question: "What is the booking policy and payment terms for catering?",
    answer: "To secure your booking date and start ingredient sourcing, we require a booking advance deposit. The balance payment schedule is structured based on your specific catering package and settled post-event.",
  },
];

export default function GetAQuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    eventDate: "",
    occasion: "",
    guestCount: "",
    location: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Simple validation
    if (!formData.name || !formData.contactNumber || !formData.occasion) {
      setErrorMsg("Please fill in all required fields (Name, Contact Number, Occasion).");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          contactNumber: formData.contactNumber,
          eventDate: formData.eventDate,
          occasion: formData.occasion,
          guestCount: formData.guestCount ? Number(formData.guestCount) : null,
          location: formData.location,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          contactNumber: "",
          eventDate: "",
          occasion: "",
          guestCount: "",
          location: "",
        });
      } else {
        setErrorMsg("Something went wrong. Please try again or contact us directly.");
      }
    } catch (err) {
      setErrorMsg("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF6F0] pt-24 md:pt-28 flex flex-col justify-between">
      {/* Background ambient lighting */}
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-[#c5a880]/15 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#8C3316]/5 blur-3xl -z-10 pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-16 flex-grow flex items-center justify-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">

          {/* Left Column: Visual & Copy */}
          <div className="lg:col-span-5 flex flex-col justify-between py-2">
            <div>
              <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase mb-3 block">
                CRAFTING MEMORIES
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] text-[#8C3316] font-semibold leading-tight tracking-wide mb-6">
                Let Us Elevate <br />
                Your <span className="italic font-normal font-serif">Occasion</span>
              </h1>

              {/* Decorative Divider */}
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-12 bg-[#c5a880]/40" />
                <span className="text-[#c5a880] text-sm">✿</span>
                <div className="h-[1px] w-12 bg-[#c5a880]/40" />
              </div>

              <p className="font-sans text-base text-[#292927]/85 font-light leading-relaxed mb-8">
                Every gathering has a unique spirit. We honor your celebrations with clean, comforting home-style catering, heritage recipes, and custom menus curated with love and purity.
              </p>

              {/* Showcase items */}
              <div className="space-y-4 mb-8">
                {[
                  "Heritage recipes crafted by generational cooks",
                  "Strict hygiene standards and fresh ingredients",
                  "Onion- and garlic-free preparation options for spiritual celebrations",
                  "Full-service catering for up to 300+ guests",
                ].map((perk, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-[#c5a880] text-sm mt-0.5">✦</span>
                    <span className="font-sans text-sm text-[#8C3316]/90 font-medium">{perk}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Block
            <div className="relative w-full aspect-[16/10] sm:aspect-[2.1] lg:aspect-[1.5] rounded-2xl overflow-hidden border border-[#c5a880]/30 shadow-md group">
              <Image
                src="/experience-service.png"
                alt="Dahi Cheeni Catering Experience"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                <span className="font-serif italic text-lg text-white/95">Pure Traditions. Clean Flavors.</span>
              </div>
            </div> */}
          </div>

          {/* Right Column: Form Container */}
          <div className="lg:col-span-7 flex items-center justify-center">
            <div className="w-full bg-[#FAF6F0] border border-[#c5a880]/40 rounded-[28px] md:rounded-[36px] p-6 sm:p-8 md:p-10 shadow-xl transition-all duration-300">

              {!isSubmitted ? (
                <>
                  {/* Header inside form card */}
                  <div className="text-center mb-8">
                    <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase mb-1 block">
                      BEGIN YOUR EXPERIENCE
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl text-[#8C3316] font-semibold tracking-wide">
                      Get A Quote
                    </h2>
                    <p className="font-sans text-xs text-[#8C3316]/70 mt-1.5">
                      Tell us about your event and we will design the perfect menu.
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {errorMsg && (
                      <div className="p-3.5 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600 font-sans text-center">
                        {errorMsg}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="flex flex-col">
                        <label htmlFor="name" className="block text-[11px] sm:text-xs font-semibold text-[#8C3316]/80 uppercase tracking-wider mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full px-4 py-2.5 bg-white border border-[#c5a880]/30 rounded-lg text-sm text-[#8C3316] placeholder-[#8C3316]/40 focus:outline-none focus:ring-1 focus:ring-[#8C3316] focus:border-[#8C3316] transition-all duration-200"
                        />
                      </div>

                      {/* Contact Number */}
                      <div className="flex flex-col">
                        <label htmlFor="contactNumber" className="block text-[11px] sm:text-xs font-semibold text-[#8C3316]/80 uppercase tracking-wider mb-1.5">
                          Contact Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="contactNumber"
                          name="contactNumber"
                          required
                          value={formData.contactNumber}
                          onChange={handleChange}
                          placeholder="e.g. +91 98765 43210"
                          className="w-full px-4 py-2.5 bg-white border border-[#c5a880]/30 rounded-lg text-sm text-[#8C3316] placeholder-[#8C3316]/40 focus:outline-none focus:ring-1 focus:ring-[#8C3316] focus:border-[#8C3316] transition-all duration-200"
                        />
                      </div>

                      {/* Event Date */}
                      <div className="flex flex-col">
                        <label htmlFor="eventDate" className="block text-[11px] sm:text-xs font-semibold text-[#8C3316]/80 uppercase tracking-wider mb-1.5">
                          Event Date
                        </label>
                        <input
                          type="date"
                          id="eventDate"
                          name="eventDate"
                          value={formData.eventDate}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 bg-white border border-[#c5a880]/30 rounded-lg text-sm text-[#8C3316] placeholder-[#8C3316]/40 focus:outline-none focus:ring-1 focus:ring-[#8C3316] focus:border-[#8C3316] transition-all duration-200"
                        />
                      </div>

                      {/* Occasion Type */}
                      <div className="flex flex-col">
                        <label htmlFor="occasion" className="block text-[11px] sm:text-xs font-semibold text-[#8C3316]/80 uppercase tracking-wider mb-1.5">
                          Occasion Type <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="occasion"
                          name="occasion"
                          required
                          value={formData.occasion}
                          onChange={handleChange}
                          placeholder="e.g. Wedding Ceremony, Pooja"
                          className="w-full px-4 py-2.5 bg-white border border-[#c5a880]/30 rounded-lg text-sm text-[#8C3316] placeholder-[#8C3316]/40 focus:outline-none focus:ring-1 focus:ring-[#8C3316] focus:border-[#8C3316] transition-all duration-200"
                        />
                      </div>

                      {/* Approximate Guest Count */}
                      <div className="flex flex-col">
                        <label htmlFor="guestCount" className="block text-[11px] sm:text-xs font-semibold text-[#8C3316]/80 uppercase tracking-wider mb-1.5">
                          Approx. Guest Count
                        </label>
                        <input
                          type="number"
                          id="guestCount"
                          name="guestCount"
                          value={formData.guestCount}
                          onChange={handleChange}
                          placeholder="e.g. 50"
                          min="1"
                          className="w-full px-4 py-2.5 bg-white border border-[#c5a880]/30 rounded-lg text-sm text-[#8C3316] placeholder-[#8C3316]/40 focus:outline-none focus:ring-1 focus:ring-[#8C3316] focus:border-[#8C3316] transition-all duration-200"
                        />
                      </div>

                      {/* Location */}
                      <div className="flex flex-col">
                        <label htmlFor="location" className="block text-[11px] sm:text-xs font-semibold text-[#8C3316]/80 uppercase tracking-wider mb-1.5">
                          Event Location
                        </label>
                        <input
                          type="text"
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          placeholder="e.g. Vasant Kunj, New Delhi"
                          className="w-full px-4 py-2.5 bg-white border border-[#c5a880]/30 rounded-lg text-sm text-[#8C3316] placeholder-[#8C3316]/40 focus:outline-none focus:ring-1 focus:ring-[#8C3316] focus:border-[#8C3316] transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-6 py-4 bg-[#8C3316] hover:bg-[#74290F] disabled:bg-[#8C3316]/70 text-white font-sans text-xs sm:text-sm font-semibold tracking-wider text-center rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Submitting Request...
                        </>
                      ) : (
                        "Submit Quote Request"
                      )}
                    </button>
                  </form>
                </>
              ) : (
                /* Success View */
                <div className="text-center py-10 px-4 flex flex-col items-center">
                  <div className="w-16 h-16 bg-green-50 border border-green-200 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>

                  <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase mb-1 block">
                    THANK YOU
                  </span>
                  <h3 className="font-serif text-3xl text-[#8C3316] font-semibold tracking-wide mb-4">
                    Quote Request Received
                  </h3>

                  <div className="flex items-center gap-3 my-4 w-full justify-center">
                    <div className="h-[1px] w-8 bg-[#c5a880]/30" />
                    <span className="text-[#c5a880] text-xs">✿</span>
                    <div className="h-[1px] w-8 bg-[#c5a880]/30" />
                  </div>

                  <p className="font-sans text-sm text-[#292927]/80 font-light leading-relaxed max-w-md mb-8">
                    We have successfully received your details. Our culinary team will review your requirements and reach out to you within 24 hours to design your custom catering experience.
                  </p>

                  <Link
                    href="/"
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#8C3316] hover:bg-[#74290F] text-white font-sans text-xs sm:text-sm font-semibold tracking-wide rounded-md shadow-sm transition-all duration-300"
                  >
                    Return to Homepage
                  </Link>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* FAQ Section */}
      <FAQs items={QUOTE_PAGE_FAQS} />
    </main>
  );
}
